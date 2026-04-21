-- =============================================================
-- Nigerian Defence Army - Personnel Management System
-- Database Schema v1.0
-- =============================================================

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS audit_log;
DROP TABLE IF EXISTS personal_documents;
DROP TABLE IF EXISTS deployment_records;
DROP TABLE IF EXISTS service_records;
DROP TABLE IF EXISTS performance_reviews;
DROP TABLE IF EXISTS assignment_history;
DROP TABLE IF EXISTS medical_incidents;
DROP TABLE IF EXISTS medical_records;
DROP TABLE IF EXISTS biometric_data;
DROP TABLE IF EXISTS availability_logs;
DROP TABLE IF EXISTS personnel;
DROP TABLE IF EXISTS units;
DROP TABLE IF EXISTS ranks;
DROP TABLE IF EXISTS system_users;
SET FOREIGN_KEY_CHECKS = 1;

-- -------------------------------------------------------------
-- RANKS REFERENCE TABLE
-- -------------------------------------------------------------
CREATE TABLE ranks (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    rank_name       VARCHAR(100) NOT NULL,
    rank_code       VARCHAR(20)  NOT NULL UNIQUE,
    rank_level      INT          NOT NULL COMMENT '1=lowest, 10=highest',
    branch          ENUM('Army','Navy','Air Force','Special Forces') NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -------------------------------------------------------------
-- UNITS REFERENCE TABLE
-- -------------------------------------------------------------
CREATE TABLE units (
    id                  INT PRIMARY KEY AUTO_INCREMENT,
    unit_name           VARCHAR(200) NOT NULL,
    unit_code           VARCHAR(50)  NOT NULL UNIQUE,
    location            VARCHAR(200),
    commanding_officer  VARCHAR(200),
    unit_type           ENUM('Combat','Support','Intelligence','Special Operations','Training','Logistics') NOT NULL,
    status              ENUM('Active','Inactive','Deployed') DEFAULT 'Active',
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -------------------------------------------------------------
-- MAIN PERSONNEL TABLE
-- -------------------------------------------------------------
CREATE TABLE personnel (
    id                      INT PRIMARY KEY AUTO_INCREMENT,
    service_number          VARCHAR(50)  NOT NULL UNIQUE,
    full_name               VARCHAR(200) NOT NULL,
    rank_id                 INT,
    unit_id                 INT,

    -- Biographical
    date_of_birth           DATE         NOT NULL,
    gender                  ENUM('Male','Female') NOT NULL,
    nationality             VARCHAR(100) DEFAULT 'Nigerian',
    state_of_origin         VARCHAR(100),
    religion                VARCHAR(100),
    marital_status          ENUM('Single','Married','Divorced','Widowed') DEFAULT 'Single',
    date_enlisted           DATE         NOT NULL,
    date_commissioned       DATE,

    -- Contact
    residential_address     TEXT,
    phone_primary           VARCHAR(20),
    phone_secondary         VARCHAR(20),
    email                   VARCHAR(200),

    -- Next of Kin
    nok_full_name           VARCHAR(200),
    nok_relationship        VARCHAR(100),
    nok_phone               VARCHAR(20),
    nok_address             TEXT,

    -- Status & Clearance
    availability_status     ENUM('Active','Deployed','On Leave','Injured','Training','Retired','AWOL','Deceased') DEFAULT 'Active',
    security_clearance      ENUM('Unclassified','Confidential','Secret','Top Secret') DEFAULT 'Confidential',

    photo_url               VARCHAR(500),
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by              INT,

    FOREIGN KEY (rank_id) REFERENCES ranks(id),
    FOREIGN KEY (unit_id) REFERENCES units(id),
    INDEX idx_service_number (service_number),
    INDEX idx_full_name      (full_name),
    INDEX idx_status         (availability_status)
);

-- -------------------------------------------------------------
-- BIOMETRIC DATA TABLE
-- -------------------------------------------------------------
CREATE TABLE biometric_data (
    id                          INT PRIMARY KEY AUTO_INCREMENT,
    personnel_id                INT NOT NULL UNIQUE,

    -- Fingerprints (encrypted reference or hash)
    fingerprint_left_thumb      TEXT,
    fingerprint_left_index      TEXT,
    fingerprint_right_thumb     TEXT,
    fingerprint_right_index     TEXT,
    fingerprint_all_data        TEXT COMMENT 'Full 10-print encrypted blob',

    -- Facial Recognition
    facial_recognition_data     TEXT,
    facial_scan_date            DATE,

    -- Retinal Scans
    retinal_scan_left           TEXT,
    retinal_scan_right          TEXT,
    retinal_scan_date           DATE,

    -- Additional
    voice_print_data            TEXT,
    dna_profile_ref             VARCHAR(200),

    encryption_key_ref          VARCHAR(200),
    last_verified               DATE,
    verified_by                 VARCHAR(200),

    created_at                  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at                  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (personnel_id) REFERENCES personnel(id) ON DELETE CASCADE
);

-- -------------------------------------------------------------
-- MEDICAL RECORDS TABLE
-- -------------------------------------------------------------
CREATE TABLE medical_records (
    id                      INT PRIMARY KEY AUTO_INCREMENT,
    personnel_id            INT NOT NULL UNIQUE,

    blood_type              ENUM('A+','A-','B+','B-','AB+','AB-','O+','O-') NOT NULL,
    height_cm               DECIMAL(5,2),
    weight_kg               DECIMAL(5,2),

    allergies               TEXT,
    chronic_conditions      TEXT,
    past_surgeries          TEXT,
    current_medications     TEXT,
    vaccination_history     TEXT,

    -- Mental Health
    psychological_status    ENUM('Fit','Under Observation','Unfit','Conditionally Fit') DEFAULT 'Fit',
    psychological_notes     TEXT,

    -- Fitness
    fitness_level           ENUM('Excellent','Good','Satisfactory','Poor','Unfit') DEFAULT 'Good',
    last_fitness_test       DATE,
    fitness_score           INT COMMENT 'Score out of 100',

    -- Medical Status
    medical_status          ENUM('Fit for Duty','Limited Duty','Medical Leave','Hospitalized','Unfit for Duty') DEFAULT 'Fit for Duty',
    last_medical_exam       DATE,
    next_medical_exam       DATE,
    examining_physician     VARCHAR(200),

    vision_left             VARCHAR(20),
    vision_right            VARCHAR(20),
    hearing_status          ENUM('Normal','Impaired','Deaf') DEFAULT 'Normal',

    notes                   TEXT,
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (personnel_id) REFERENCES personnel(id) ON DELETE CASCADE
);

-- -------------------------------------------------------------
-- MEDICAL INCIDENTS (Past Injuries / Conditions)
-- -------------------------------------------------------------
CREATE TABLE medical_incidents (
    id                  INT PRIMARY KEY AUTO_INCREMENT,
    personnel_id        INT NOT NULL,
    incident_type       ENUM('Injury','Illness','Surgery','Combat Wound','Psychological') NOT NULL,
    incident_date       DATE NOT NULL,
    description         TEXT NOT NULL,
    treatment           TEXT,
    recovery_days       INT,
    duty_impact         ENUM('None','Limited Duty','Full Duty Restriction') DEFAULT 'None',
    treating_physician  VARCHAR(200),
    hospital            VARCHAR(200),
    notes               TEXT,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (personnel_id) REFERENCES personnel(id) ON DELETE CASCADE
);

-- -------------------------------------------------------------
-- ASSIGNMENT HISTORY TABLE
-- -------------------------------------------------------------
CREATE TABLE assignment_history (
    id                  INT PRIMARY KEY AUTO_INCREMENT,
    personnel_id        INT NOT NULL,
    unit_id             INT,
    assignment_title    VARCHAR(200) NOT NULL,
    role                VARCHAR(200),
    location            VARCHAR(200),
    start_date          DATE NOT NULL,
    end_date            DATE,
    assignment_type     ENUM('Regular','Deployment','Training','Special Operation','Attached','Exchange') DEFAULT 'Regular',
    status              ENUM('Active','Completed','Terminated') DEFAULT 'Active',
    commanding_officer  VARCHAR(200),
    performance_rating  ENUM('Outstanding','Excellent','Good','Satisfactory','Poor'),
    notes               TEXT,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (personnel_id) REFERENCES personnel(id) ON DELETE CASCADE,
    FOREIGN KEY (unit_id)      REFERENCES units(id),
    INDEX idx_personnel_assignment (personnel_id),
    INDEX idx_assignment_status    (status)
);

-- -------------------------------------------------------------
-- PERFORMANCE REVIEWS TABLE
-- -------------------------------------------------------------
CREATE TABLE performance_reviews (
    id                          INT PRIMARY KEY AUTO_INCREMENT,
    personnel_id                INT NOT NULL,
    review_period_start         DATE NOT NULL,
    review_period_end           DATE NOT NULL,
    review_date                 DATE NOT NULL,
    reviewer_name               VARCHAR(200) NOT NULL,
    reviewer_rank               VARCHAR(100),
    review_type                 ENUM('Annual','Semi-Annual','Special','Pre-Deployment','Post-Deployment') DEFAULT 'Annual',

    -- Scores (1–10)
    leadership_score            INT CHECK (leadership_score BETWEEN 1 AND 10),
    tactical_proficiency_score  INT CHECK (tactical_proficiency_score BETWEEN 1 AND 10),
    physical_fitness_score      INT CHECK (physical_fitness_score BETWEEN 1 AND 10),
    discipline_score            INT CHECK (discipline_score BETWEEN 1 AND 10),
    team_collaboration_score    INT CHECK (team_collaboration_score BETWEEN 1 AND 10),
    initiative_score            INT CHECK (initiative_score BETWEEN 1 AND 10),
    communication_score         INT CHECK (communication_score BETWEEN 1 AND 10),
    overall_score               DECIMAL(4,2),

    overall_rating              ENUM('Outstanding','Excellent','Good','Satisfactory','Needs Improvement','Unsatisfactory') NOT NULL,

    strengths                   TEXT,
    areas_for_improvement       TEXT,
    recommendations             TEXT,
    reviewer_comments           TEXT,

    promotion_recommended       BOOLEAN DEFAULT FALSE,
    commendation_recommended    BOOLEAN DEFAULT FALSE,

    created_at                  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (personnel_id) REFERENCES personnel(id) ON DELETE CASCADE,
    INDEX idx_personnel_review (personnel_id)
);

-- -------------------------------------------------------------
-- SERVICE RECORDS (Commendations, Awards, Disciplinary)
-- -------------------------------------------------------------
CREATE TABLE service_records (
    id                  INT PRIMARY KEY AUTO_INCREMENT,
    personnel_id        INT NOT NULL,
    record_type         ENUM('Commendation','Award','Disciplinary','Promotion','Demotion','Citation') NOT NULL,
    record_date         DATE NOT NULL,
    title               VARCHAR(200) NOT NULL,
    description         TEXT NOT NULL,
    issued_by           VARCHAR(200),
    issuing_authority   VARCHAR(200),
    official_reference  VARCHAR(100),
    attachment_url      VARCHAR(500),
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (personnel_id) REFERENCES personnel(id) ON DELETE CASCADE
);

-- -------------------------------------------------------------
-- AVAILABILITY LOGS (Status Change History)
-- -------------------------------------------------------------
CREATE TABLE availability_logs (
    id                      INT PRIMARY KEY AUTO_INCREMENT,
    personnel_id            INT NOT NULL,
    previous_status         VARCHAR(50),
    new_status              VARCHAR(50) NOT NULL,
    change_date             DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    reason                  TEXT,
    authorized_by           VARCHAR(200),
    expected_return_date    DATE,
    actual_return_date      DATE,
    notes                   TEXT,

    FOREIGN KEY (personnel_id) REFERENCES personnel(id) ON DELETE CASCADE,
    INDEX idx_personnel_availability (personnel_id)
);

-- -------------------------------------------------------------
-- DEPLOYMENT RECORDS TABLE
-- -------------------------------------------------------------
CREATE TABLE deployment_records (
    id                      INT PRIMARY KEY AUTO_INCREMENT,
    personnel_id            INT NOT NULL,
    operation_name          VARCHAR(200) NOT NULL,
    operation_code          VARCHAR(50),
    deployment_location     VARCHAR(200) NOT NULL,
    country                 VARCHAR(100) DEFAULT 'Nigeria',
    deployment_type         ENUM('Counter-Terrorism','Peacekeeping','Border Security','Humanitarian','Training','Intelligence','Special Operations') NOT NULL,
    start_date              DATE NOT NULL,
    end_date                DATE,
    status                  ENUM('Active','Completed','Aborted') DEFAULT 'Active',
    role                    VARCHAR(200),
    commanding_officer      VARCHAR(200),
    classification          ENUM('Unclassified','Confidential','Secret','Top Secret') DEFAULT 'Confidential',
    debriefing_notes        TEXT,
    injuries_sustained      BOOLEAN DEFAULT FALSE,
    commendations_received  TEXT,
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (personnel_id) REFERENCES personnel(id) ON DELETE CASCADE,
    INDEX idx_personnel_deployment (personnel_id)
);

-- -------------------------------------------------------------
-- PERSONAL DOCUMENTS TABLE
-- -------------------------------------------------------------
CREATE TABLE personal_documents (
    id                  INT PRIMARY KEY AUTO_INCREMENT,
    personnel_id        INT NOT NULL,
    document_type       ENUM('National ID','Service ID','Passport','Birth Certificate','Educational Certificate','Training Certificate','Medical Certificate','Award Certificate','Service Record','Other') NOT NULL,
    document_title      VARCHAR(200) NOT NULL,
    document_number     VARCHAR(100),
    issue_date          DATE,
    expiry_date         DATE,
    issuing_authority   VARCHAR(200),
    file_name           VARCHAR(200),
    file_size           INT COMMENT 'Size in bytes',
    file_type           VARCHAR(50),
    file_data           LONGBLOB COMMENT 'Encrypted file content',
    is_verified         BOOLEAN DEFAULT FALSE,
    verified_by         VARCHAR(200),
    verification_date   DATE,
    notes               TEXT,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (personnel_id) REFERENCES personnel(id) ON DELETE CASCADE,
    INDEX idx_personnel_docs (personnel_id)
);

-- -------------------------------------------------------------
-- SYSTEM USERS TABLE (Authentication)
-- -------------------------------------------------------------
CREATE TABLE system_users (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    username        VARCHAR(100) NOT NULL UNIQUE,
    password_hash   VARCHAR(255) NOT NULL,
    full_name       VARCHAR(200) NOT NULL,
    role            ENUM('Super Admin','Admin','Officer','Clerk','Read Only') NOT NULL,
    personnel_id    INT,
    is_active       BOOLEAN DEFAULT TRUE,
    last_login      DATETIME,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (personnel_id) REFERENCES personnel(id)
);

-- -------------------------------------------------------------
-- AUDIT LOG TABLE
-- -------------------------------------------------------------
CREATE TABLE audit_log (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    user_id     INT,
    action      VARCHAR(50)  NOT NULL,
    table_name  VARCHAR(100) NOT NULL,
    record_id   INT,
    old_values  JSON,
    new_values  JSON,
    ip_address  VARCHAR(45),
    timestamp   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES system_users(id)
);

-- =============================================================
-- SEED DATA
-- =============================================================

INSERT INTO ranks (rank_name, rank_code, rank_level, branch) VALUES
('General',             'GEN',      10, 'Army'),
('Lieutenant General',  'LT GEN',    9, 'Army'),
('Major General',       'MAJ GEN',   8, 'Army'),
('Brigadier General',   'BRIG GEN',  7, 'Army'),
('Colonel',             'COL',       6, 'Army'),
('Lieutenant Colonel',  'LT COL',    5, 'Army'),
('Major',               'MAJ',       4, 'Army'),
('Captain',             'CAPT',      3, 'Army'),
('Lieutenant',          'LT',        2, 'Army'),
('Second Lieutenant',   '2LT',       1, 'Army'),
('Warrant Officer',     'WO',        3, 'Army'),
('Sergeant Major',      'SGM',       5, 'Army'),
('Master Sergeant',     'MSG',       4, 'Army'),
('Staff Sergeant',      'SSG',       3, 'Army'),
('Sergeant',            'SGT',       2, 'Army'),
('Corporal',            'CPL',       2, 'Army'),
('Private First Class', 'PFC',       1, 'Army'),
('Private',             'PVT',       1, 'Army');

INSERT INTO units (unit_name, unit_code, location, unit_type) VALUES
('Defence Headquarters',         'DHQ',   'Abuja',  'Combat'),
('1st Division',                 '1DIV',  'Kaduna', 'Combat'),
('2nd Division',                 '2DIV',  'Ibadan', 'Combat'),
('3rd Armoured Division',        '3AD',   'Jos',    'Combat'),
('82nd Division',                '82DIV', 'Enugu',  'Combat'),
('Jaji Military Cantonment',     'JAJI',  'Jaji',   'Training'),
('Special Forces Command',       'SFC',   'Abuja',  'Special Operations'),
('Military Intelligence Brigade','MIB',   'Abuja',  'Intelligence');

COMMIT;
