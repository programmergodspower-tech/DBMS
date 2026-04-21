/* ═══════════════════════════════════════════════════════════
   Nigerian Defence — Personnel Management Module
   app.js  v1.0  —  Full Application Controller
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── Sample seed data ───────────────────────────────────── */
const SEED_PERSONNEL = [
    {
        serviceNumber:'DHQ/2019/0011', fullName:'Captain Isa Amad', rank:'Captain', unit:'DHQ',
        dateOfBirth:'1988-03-15', gender:'Male', stateOfOrigin:'Kano', religion:'Islam',
        maritalStatus:'Married', dateEnlisted:'2010-06-01', dateCommissioned:'2013-08-15',
        phone:'08012345678', email:'isa.amad@army.mil.ng',
        residentialAddress:'12 Garrison Road, Abuja', nationality:'Nigerian',
        nokFullName:'Fatima Amad', nokRelationship:'Wife', nokPhone:'08087654321', nokAddress:'12 Garrison Road, Abuja',
        availabilityStatus:'Deployed', securityClearance:'Top Secret',
        specialisation:'Infantry Commander', yearsService:14,
        createdAt: new Date().toISOString()
    },
    {
        serviceNumber:'DHQ/2017/0043', fullName:'Captain Uche Igwe', rank:'Captain', unit:'DHQ',
        dateOfBirth:'1985-07-22', gender:'Male', stateOfOrigin:'Anambra', religion:'Christianity',
        maritalStatus:'Married', dateEnlisted:'2008-01-10', dateCommissioned:'2011-03-20',
        phone:'08023456789', email:'uche.igwe@army.mil.ng',
        residentialAddress:'45 Barracks Avenue, Abuja', nationality:'Nigerian',
        nokFullName:'Ada Igwe', nokRelationship:'Wife', nokPhone:'08098765432', nokAddress:'45 Barracks Avenue, Abuja',
        availabilityStatus:'Deployed', securityClearance:'Top Secret',
        specialisation:'Special Operations', yearsService:17,
        createdAt: new Date().toISOString()
    },
    {
        serviceNumber:'JAJI/2021/0122', fullName:'Private Ayo Ade', rank:'Private', unit:'Jaji',
        dateOfBirth:'2000-11-05', gender:'Male', stateOfOrigin:'Oyo', religion:'Christianity',
        maritalStatus:'Single', dateEnlisted:'2021-03-15', dateCommissioned:null,
        phone:'08034567890', email:'ayo.ade@army.mil.ng',
        residentialAddress:'Training Camp, Jaji, Kaduna', nationality:'Nigerian',
        nokFullName:'Bimbo Ade', nokRelationship:'Mother', nokPhone:'08076543210', nokAddress:'25 Church St, Ibadan',
        availabilityStatus:'Training', securityClearance:'Confidential',
        specialisation:'Infantry Recruit', yearsService:3,
        createdAt: new Date().toISOString()
    },
    {
        serviceNumber:'SFC/2015/0008', fullName:'Major Amaka Osei', rank:'Major', unit:'SFC',
        dateOfBirth:'1982-04-18', gender:'Female', stateOfOrigin:'Delta', religion:'Christianity',
        maritalStatus:'Single', dateEnlisted:'2006-08-20', dateCommissioned:'2009-12-01',
        phone:'08045678901', email:'amaka.osei@army.mil.ng',
        residentialAddress:'Officers Quarters, Abuja', nationality:'Nigerian',
        nokFullName:'Emmanuel Osei', nokRelationship:'Brother', nokPhone:'08054321098', nokAddress:'10 Lake View, Warri',
        availabilityStatus:'Active', securityClearance:'Top Secret',
        specialisation:'Intelligence & PSYOPS', yearsService:19,
        createdAt: new Date().toISOString()
    },
    {
        serviceNumber:'1DIV/2018/0099', fullName:'Sergeant Musa Garba', rank:'Sergeant', unit:'1DIV',
        dateOfBirth:'1991-09-30', gender:'Male', stateOfOrigin:'Sokoto', religion:'Islam',
        maritalStatus:'Married', dateEnlisted:'2012-04-01', dateCommissioned:null,
        phone:'08056789012', email:'musa.garba@army.mil.ng',
        residentialAddress:'1 Division Barracks, Kaduna', nationality:'Nigerian',
        nokFullName:'Hauwa Garba', nokRelationship:'Wife', nokPhone:'08032109876', nokAddress:'1 Div Barracks, Kaduna',
        availabilityStatus:'Active', securityClearance:'Secret',
        specialisation:'Combat Engineer', yearsService:12,
        createdAt: new Date().toISOString()
    },
    {
        serviceNumber:'82DIV/2020/0055', fullName:'Lieutenant Ngozi Eze', rank:'Lieutenant', unit:'82DIV',
        dateOfBirth:'1994-01-12', gender:'Female', stateOfOrigin:'Enugu', religion:'Christianity',
        maritalStatus:'Single', dateEnlisted:'2016-09-01', dateCommissioned:'2019-11-15',
        phone:'08067890123', email:'ngozi.eze@army.mil.ng',
        residentialAddress:'82 Div Barracks, Enugu', nationality:'Nigerian',
        nokFullName:'Chukwu Eze', nokRelationship:'Father', nokPhone:'08021098765', nokAddress:'14 Sunrise, Enugu',
        availabilityStatus:'On Leave', securityClearance:'Secret',
        specialisation:'Medical Officer', yearsService:8,
        createdAt: new Date().toISOString()
    },
    {
        serviceNumber:'MIB/2013/0007', fullName:'Lt. Colonel Bala Yusuf', rank:'Lieutenant Colonel', unit:'MIB',
        dateOfBirth:'1978-06-25', gender:'Male', stateOfOrigin:'Bauchi', religion:'Islam',
        maritalStatus:'Married', dateEnlisted:'2001-05-15', dateCommissioned:'2004-07-20',
        phone:'08078901234', email:'bala.yusuf@army.mil.ng',
        residentialAddress:'Senior Officers Mess, Abuja', nationality:'Nigerian',
        nokFullName:'Khadija Yusuf', nokRelationship:'Wife', nokPhone:'08010987654', nokAddress:'Senior Officers Mess, Abuja',
        availabilityStatus:'Active', securityClearance:'Top Secret',
        specialisation:'Military Intelligence', yearsService:24,
        createdAt: new Date().toISOString()
    },
    {
        serviceNumber:'3AD/2022/0174', fullName:'Corporal Emeka Nwosu', rank:'Corporal', unit:'3AD',
        dateOfBirth:'1999-08-14', gender:'Male', stateOfOrigin:'Imo', religion:'Christianity',
        maritalStatus:'Single', dateEnlisted:'2020-01-10', dateCommissioned:null,
        phone:'08089012345', email:'emeka.nwosu@army.mil.ng',
        residentialAddress:'3 Armoured Div, Jos', nationality:'Nigerian',
        nokFullName:'Chioma Nwosu', nokRelationship:'Sister', nokPhone:'08009876543', nokAddress:'5 Ring Road, Owerri',
        availabilityStatus:'Injured', securityClearance:'Confidential',
        specialisation:'Armoured Warfare', yearsService:5,
        createdAt: new Date().toISOString()
    },
    {
        serviceNumber:'2DIV/2016/0033', fullName:'Staff Sergeant Rasheed Lawal', rank:'Staff Sergeant', unit:'2DIV',
        dateOfBirth:'1987-12-03', gender:'Male', stateOfOrigin:'Kwara', religion:'Islam',
        maritalStatus:'Married', dateEnlisted:'2009-11-20', dateCommissioned:null,
        phone:'08090123456', email:'rasheed.lawal@army.mil.ng',
        residentialAddress:'2 Division Barracks, Ibadan', nationality:'Nigerian',
        nokFullName:'Halimah Lawal', nokRelationship:'Wife', nokPhone:'08098765432', nokAddress:'2 Div Barracks, Ibadan',
        availabilityStatus:'Active', securityClearance:'Secret',
        specialisation:'Signal Corps', yearsService:16,
        createdAt: new Date().toISOString()
    },
    {
        serviceNumber:'SFC/2011/0002', fullName:'Colonel Adaeze Nkrumah', rank:'Colonel', unit:'SFC',
        dateOfBirth:'1975-02-28', gender:'Female', stateOfOrigin:'Abia', religion:'Christianity',
        maritalStatus:'Divorced', dateEnlisted:'1998-07-01', dateCommissioned:'2001-09-10',
        phone:'08001234567', email:'adaeze.nkrumah@army.mil.ng',
        residentialAddress:'Special Forces HQ, Abuja', nationality:'Nigerian',
        nokFullName:'Kelechi Nkrumah', nokRelationship:'Son', nokPhone:'08087654321', nokAddress:'27 Victoria Island, Lagos',
        availabilityStatus:'Active', securityClearance:'Top Secret',
        specialisation:'Counter-Terrorism Command', yearsService:27,
        createdAt: new Date().toISOString()
    }
];

const SEED_ASSIGNMENTS = [
    { personnelId:1, assignmentTitle:'Operation Safe Corridor', role:'Infantry Commander', location:'Borno State', startDate:'2023-01-10', endDate:null, assignmentType:'Deployment', status:'Active', commandingOfficer:'Brig Gen Hassan', notes:'Active CT operation in NE Nigeria', createdAt:new Date().toISOString() },
    { personnelId:1, assignmentTitle:'Basic Officers Course', role:'Trainee Officer', location:'Nigerian Defence Academy, Kaduna', startDate:'2010-06-01', endDate:'2013-08-15', assignmentType:'Training', status:'Completed', commandingOfficer:'Col. Adeola', notes:'Commissioning course', createdAt:new Date().toISOString() },
    { personnelId:2, assignmentTitle:'Operation Delta Safe', role:'Special Ops Team Lead', location:'Niger Delta', startDate:'2022-06-01', endDate:'2023-01-01', assignmentType:'Special Operation', status:'Completed', commandingOfficer:'Maj Gen Okonkwo', notes:'Anti-pipeline vandalism operation', createdAt:new Date().toISOString() },
    { personnelId:2, assignmentTitle:'Operation Safe Corridor', role:'Assault Team Commander', location:'Borno State', startDate:'2023-04-15', endDate:null, assignmentType:'Deployment', status:'Active', commandingOfficer:'Brig Gen Hassan', notes:'Follow-on assignment', createdAt:new Date().toISOString() },
    { personnelId:4, assignmentTitle:'Intelligence Support — North West', role:'PSYOPS Officer', location:'Zamfara', startDate:'2022-03-01', endDate:'2023-09-01', assignmentType:'Special Operation', status:'Completed', commandingOfficer:'Lt Col Bala', notes:'Disinformation counter-campaign', createdAt:new Date().toISOString() },
    { personnelId:7, assignmentTitle:'UN Peacekeeping Mission — Mali', role:'Intelligence Liaison Officer', location:'Bamako, Mali', startDate:'2021-01-15', endDate:'2022-01-15', assignmentType:'Deployment', status:'Completed', commandingOfficer:'UN FHQ', notes:'MINUSMA mission', createdAt:new Date().toISOString() }
];

const SEED_REVIEWS = [
    { personnelId:1, reviewPeriodStart:'2023-01-01', reviewPeriodEnd:'2023-12-31', reviewDate:'2024-01-15', reviewerName:'Brig Gen Ibrahim Hassan', reviewerRank:'Brigadier General', reviewType:'Annual', leadershipScore:9, tacticalScore:9, fitnessScore:8, disciplineScore:10, teamScore:8, initiativeScore:9, communicationScore:8, overallScore:8.7, overallRating:'Outstanding', strengths:'Exceptional leadership under fire; strong tactical decision-making.', areasForImprovement:'Could improve written reporting speed.', recommendations:'Recommended for promotion to Major.', promotionRecommended:true, commendationRecommended:true, createdAt:new Date().toISOString() },
    { personnelId:2, reviewPeriodStart:'2022-06-01', reviewPeriodEnd:'2023-06-01', reviewDate:'2023-07-10', reviewerName:'Maj Gen Chukwu Okonkwo', reviewerRank:'Major General', reviewType:'Post-Deployment', leadershipScore:8, tacticalScore:10, fitnessScore:9, disciplineScore:9, teamScore:9, initiativeScore:8, communicationScore:7, overallScore:8.6, overallRating:'Outstanding', strengths:'Superior CQB skills; outstanding operational planning.', areasForImprovement:'Communication with non-SF units.', recommendations:'Suitable for senior SF command role.', promotionRecommended:false, commendationRecommended:true, createdAt:new Date().toISOString() },
    { personnelId:4, reviewPeriodStart:'2022-01-01', reviewPeriodEnd:'2022-12-31', reviewDate:'2023-01-20', reviewerName:'Col. Tunde Adeyemi', reviewerRank:'Colonel', reviewType:'Annual', leadershipScore:9, tacticalScore:7, fitnessScore:8, disciplineScore:9, teamScore:10, initiativeScore:9, communicationScore:10, overallScore:8.9, overallRating:'Outstanding', strengths:'Exceptional intelligence analysis; outstanding collaboration.', areasForImprovement:'Physical fitness programme.', recommendations:'Promote to Lieutenant Colonel.', promotionRecommended:true, commendationRecommended:false, createdAt:new Date().toISOString() },
    { personnelId:7, reviewPeriodStart:'2021-01-01', reviewPeriodEnd:'2021-12-31', reviewDate:'2022-01-25', reviewerName:'Col. Adaeze Nkrumah', reviewerRank:'Colonel', reviewType:'Annual', leadershipScore:10, tacticalScore:9, fitnessScore:9, disciplineScore:10, teamScore:9, initiativeScore:10, communicationScore:10, overallScore:9.6, overallRating:'Outstanding', strengths:'Exceptional all-round officer; role model for junior officers.', areasForImprovement:'None significant.', recommendations:'Highly recommended for Colonel board.', promotionRecommended:true, commendationRecommended:true, createdAt:new Date().toISOString() }
];

const SEED_MEDICAL = [
    { personnelId:1, bloodType:'O+', heightCm:182, weightKg:85, allergies:'None', chronicConditions:'None', currentMedications:'None', fitnessLevel:'Excellent', fitnesScore:92, lastFitnessTest:'2024-01-10', psychologicalStatus:'Fit', medicalStatus:'Fit for Duty', lastMedicalExam:'2024-01-10', nextMedicalExam:'2025-01-10', examininingPhysician:'Dr. Olu Adeyemi', visionLeft:'6/6', visionRight:'6/6', hearingStatus:'Normal', notes:'No concerns.', createdAt:new Date().toISOString() },
    { personnelId:2, bloodType:'A+', heightCm:178, weightKg:80, allergies:'Penicillin', chronicConditions:'None', currentMedications:'None', fitnessLevel:'Excellent', fitnesScore:95, lastFitnessTest:'2024-02-05', psychologicalStatus:'Fit', medicalStatus:'Fit for Duty', lastMedicalExam:'2024-02-05', nextMedicalExam:'2025-02-05', examininingPhysician:'Dr. Olu Adeyemi', visionLeft:'6/6', visionRight:'6/6', hearingStatus:'Normal', notes:'Allergy noted — no penicillin-based antibiotics.', createdAt:new Date().toISOString() },
    { personnelId:8, bloodType:'B+', heightCm:175, weightKg:72, allergies:'None', chronicConditions:'Fractured left tibia (2023)', currentMedications:'Pain management (reducing)', fitnessLevel:'Poor', fitnesScore:42, lastFitnessTest:'2024-01-20', psychologicalStatus:'Fit', medicalStatus:'Limited Duty', lastMedicalExam:'2024-01-20', nextMedicalExam:'2024-07-20', examininingPhysician:'Military Hospital, Jos', visionLeft:'6/6', visionRight:'6/6', hearingStatus:'Normal', notes:'Recovering from training injury. Expected full return Q3 2024.', createdAt:new Date().toISOString() }
];

const SEED_DEPLOYMENTS = [
    { personnelId:1, operationName:'Operation Safe Corridor', operationCode:'OSC-23', deploymentLocation:'Borno State, Nigeria', country:'Nigeria', deploymentType:'Counter-Terrorism', startDate:'2023-01-10', endDate:null, status:'Active', role:'Infantry Commander', commandingOfficer:'Brig Gen Ibrahim Hassan', classification:'Confidential', injuriesSustained:false, createdAt:new Date().toISOString() },
    { personnelId:2, operationName:'Operation Delta Safe', operationCode:'ODS-22', deploymentLocation:'Niger Delta Region', country:'Nigeria', deploymentType:'Special Operations', startDate:'2022-06-01', endDate:'2023-01-01', status:'Completed', role:'Special Ops Team Lead', commandingOfficer:'Maj Gen Okonkwo', classification:'Secret', injuriesSustained:false, createdAt:new Date().toISOString() },
    { personnelId:7, operationName:'MINUSMA Mali Mission', operationCode:'UN-MALI-21', deploymentLocation:'Bamako, Mali', country:'Mali', deploymentType:'Peacekeeping', startDate:'2021-01-15', endDate:'2022-01-15', status:'Completed', role:'Intelligence Liaison', commandingOfficer:'UN FHQ Bamako', classification:'Confidential', injuriesSustained:false, createdAt:new Date().toISOString() }
];

const SEED_SERVICE_RECORDS = [
    { personnelId:1, recordType:'Commendation', recordDate:'2023-12-01', title:'Commendation for Bravery — Op Safe Corridor', description:'Demonstrated exceptional bravery in neutralising armed combatants during a dawn raid, saving the lives of four fellow soldiers.', issuedBy:'Brig Gen Ibrahim Hassan', issuingAuthority:'Theatre Command NE', officialReference:'TC-NE/CMN/2023/011', createdAt:new Date().toISOString() },
    { personnelId:2, recordType:'Award', recordDate:'2023-04-01', title:'Distinguished Service Star', description:'Awarded for sustained outstanding performance in special operations over a two-year period.', issuedBy:'Chief of Army Staff', issuingAuthority:'Army Headquarters Abuja', officialReference:'AHQ/DSS/2023/042', createdAt:new Date().toISOString() },
    { personnelId:7, recordType:'Award', recordDate:'2022-02-10', title:'UN Peacekeeping Medal', description:'Awarded for meritorious service during MINUSMA deployment in Mali.', issuedBy:'DPKO UN', issuingAuthority:'United Nations', officialReference:'UN/PKM/MALI/2022/007', createdAt:new Date().toISOString() },
    { personnelId:10, recordType:'Promotion', recordDate:'2020-03-15', title:'Promotion to Colonel', description:'Promoted to the rank of Colonel in recognition of exceptional service and leadership.', issuedBy:'COAS', issuingAuthority:'Army Headquarters', officialReference:'AHQ/PROMO/2020/COL/003', createdAt:new Date().toISOString() }
];

const SEED_BIOMETRIC = [
    { personnelId:1, facialScanDate:'2023-06-01', retinalScanDate:'2023-06-01', lastVerified:'2023-06-01', verifiedBy:'Biometrics Unit, DHQ', fingerprintsComplete:true, facialComplete:true, retinalComplete:true, createdAt:new Date().toISOString() },
    { personnelId:2, facialScanDate:'2023-06-15', retinalScanDate:'2023-06-15', lastVerified:'2023-06-15', verifiedBy:'Biometrics Unit, DHQ', fingerprintsComplete:true, facialComplete:true, retinalComplete:true, createdAt:new Date().toISOString() },
    { personnelId:4, facialScanDate:'2022-09-01', retinalScanDate:'2022-09-01', lastVerified:'2022-09-01', verifiedBy:'Biometrics Unit, SFC', fingerprintsComplete:true, facialComplete:true, retinalComplete:false, createdAt:new Date().toISOString() }
];

/* ── Default system users ─────────────────────────────── */
const SEED_USERS = [
    {
        username:  'admin',
        password:  'Admin@1234',
        fullName:  'System Administrator',
        role:      'superuser',
        email:     'admin@army.mil.ng',
        isActive:  true,
        createdAt: new Date().toISOString()
    },
    {
        username:  'viewer',
        password:  'Viewer@1234',
        fullName:  'Personnel Viewer',
        role:      'viewer',
        email:     'viewer@army.mil.ng',
        isActive:  true,
        createdAt: new Date().toISOString()
    }
];

const SEED_DOCUMENTS = [
    { personnelId:1, documentType:'Service ID', documentTitle:'Military Service Identification Card', documentNumber:'DHQ-2019-0011', issueDate:'2019-01-01', expiryDate:'2029-01-01', issuingAuthority:'Army HQ Abuja', fileName:'service_id_isa_amad.pdf', isVerified:true, verifiedBy:'DHQ Records', createdAt:new Date().toISOString() },
    { personnelId:1, documentType:'Passport', documentTitle:'Nigerian International Passport', documentNumber:'A12345678', issueDate:'2020-03-10', expiryDate:'2030-03-10', issuingAuthority:'Nigerian Immigration Service', fileName:'passport_isa_amad.pdf', isVerified:true, verifiedBy:'DHQ Records', createdAt:new Date().toISOString() },
    { personnelId:2, documentType:'Training Certificate', documentTitle:'Special Forces Qualification Badge', documentNumber:'SFQ/2014/0088', issueDate:'2014-05-20', expiryDate:null, issuingAuthority:'Special Forces School', fileName:'sfq_uche_igwe.pdf', isVerified:true, verifiedBy:'SFC Records', createdAt:new Date().toISOString() }
];

/* ═══════════════════════════════════════════════════════════
   MAIN APP CLASS
   ═══════════════════════════════════════════════════════════ */
class PersonnelManagementApp {

    constructor () {
        this.db           = new ArmyDB();
        this.currentPage  = 'dashboard';
        this.currentUser  = null;
        this.viewMode     = 'grid';
        this.filterStatus = '';
        this.filterUnit   = '';
        this.searchTerm   = '';
        this._confirmCb   = null;
    }

    /* ─── Bootstrap ──────────────────────────────────────── */
    async init () {
        try {
            await this.db.init();
            await this._seedIfEmpty();
        } catch (err) {
            console.error('DB init failed:', err);
            /* Show login screen anyway — _doLogin will show a clear message */
            document.getElementById('loginScreen').style.display = 'flex';
            this._bindModal();
            this._bindConfirm();
            this._initLoginScreen();
            return;
        }
        this._bindModal();
        this._bindConfirm();
        this._initLoginScreen();
        await this._checkSession();
    }

    async _seedIfEmpty () {
        const existing = await this.db.getAll('personnel');
        if (existing.length === 0) {
            for (const p of SEED_PERSONNEL)      await this.db.add('personnel',      p);
            for (const a of SEED_ASSIGNMENTS)    await this.db.add('assignments',    a);
            for (const r of SEED_REVIEWS)        await this.db.add('reviews',        r);
            for (const m of SEED_MEDICAL)        await this.db.add('medical',        m);
            for (const d of SEED_DEPLOYMENTS)    await this.db.add('deployments',    d);
            for (const s of SEED_SERVICE_RECORDS)await this.db.add('serviceRecords', s);
            for (const b of SEED_BIOMETRIC)      await this.db.add('biometric',      b);
            for (const d of SEED_DOCUMENTS)      await this.db.add('documents',      d);
        }
        const existingUsers = await this.db.getAll('users');
        if (existingUsers.length === 0) {
            for (const u of SEED_USERS) await this.db.add('users', u);
        }
    }

    /* ─── Authentication ─────────────────────────────────── */
    _initLoginScreen () {
        /* Enter key on username → focus password */
        document.getElementById('loginUsername').addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('loginPassword').focus();
            }
        });

        /* Enter key on password → login */
        document.getElementById('loginPassword').addEventListener('keydown', e => {
            if (e.key === 'Enter') { e.preventDefault(); this._doLogin(); }
        });

        /* Password show / hide toggle */
        document.getElementById('togglePwd').addEventListener('click', () => {
            const inp  = document.getElementById('loginPassword');
            const icon = document.getElementById('eyeIcon');
            inp.type   = inp.type === 'password' ? 'text' : 'password';
            icon.className = inp.type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
        });
    }

    async _checkSession () {
        const raw = localStorage.getItem('armyPMSSession');
        if (raw) {
            try {
                const s    = JSON.parse(raw);
                const user = await this.db.getById('users', s.userId);
                if (user && user.isActive) {
                    this.currentUser = user;
                    await this._startApp();
                    return;
                }
            } catch (e) { /* fall through to login */ }
        }
        document.getElementById('loginScreen').style.display = 'flex';
    }

    async _doLogin () {
        const username = (document.getElementById('loginUsername').value || '').trim();
        const password = (document.getElementById('loginPassword').value || '');
        const btn      = document.getElementById('loginSubmitBtn');
        const errBox   = document.getElementById('loginError');
        const errMsg   = document.getElementById('loginErrorMsg');

        const showError = (msg) => {
            errMsg.textContent = msg;
            errBox.style.display = 'flex';
            btn.disabled = false;
            btn.classList.remove('loading');
            btn.innerHTML = '<i class="fas fa-right-to-bracket"></i><span>Access System</span>';
        };

        if (!username || !password) {
            showError('Please enter both username and password.');
            return;
        }

        errBox.style.display = 'none';
        btn.disabled = true;
        btn.classList.add('loading');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Authenticating…</span>';

        try {
            /* Re-init DB if it failed during page load */
            if (!this.db.db) {
                await this.db.init();
                await this._seedIfEmpty();
            }

            await new Promise(r => setTimeout(r, 600));

            const users = await this.db.getAll('users');

            /* If no users exist yet (first run / upgrade race), re-seed */
            if (users.length === 0) {
                for (const u of SEED_USERS) await this.db.add('users', u);
                const fresh = await this.db.getAll('users');
                users.push(...fresh);
            }

            const user = users.find(u =>
                u.username === username &&
                u.password === password &&
                u.isActive !== false
            );

            if (!user) {
                document.getElementById('loginPassword').value = '';
                document.getElementById('loginPassword').focus();
                showError('Invalid username or password. Please try again.');
                return;
            }

            this.currentUser = user;
            localStorage.setItem('armyPMSSession', JSON.stringify({
                userId:    user.id,
                username:  user.username,
                loginTime: new Date().toISOString()
            }));

            document.getElementById('loginScreen').style.display = 'none';
            await this._startApp();

        } catch (err) {
            console.error('Login error:', err);
            showError('System error: ' + (err.message || err) + '. Please refresh and try again.');
        }
    }

    async _startApp () {
        document.getElementById('appWrapper').style.display = 'flex';
        this._bindNav();
        this._bindHeader();
        this._updateHeaderUser();
        await this.navigateTo('dashboard');
        this._refreshNotifBadge();
    }

    doLogout () {
        this.confirm('Sign Out', 'Are you sure you want to sign out of the system?', () => {
            localStorage.removeItem('armyPMSSession');
            this.currentUser = null;
            document.getElementById('appWrapper').style.display  = 'none';
            document.getElementById('loginScreen').style.display = 'flex';
            document.getElementById('loginUsername').value = '';
            document.getElementById('loginPassword').value = '';
            document.getElementById('loginError').style.display  = 'none';
            document.getElementById('loginSubmitBtn').disabled    = false;
            document.getElementById('loginSubmitBtn').classList.remove('loading');
            document.getElementById('loginSubmitBtn').innerHTML   = '<i class="fas fa-right-to-bracket"></i><span>Access System</span>';
            document.body.classList.remove('view-only');
        });
    }

    isSuper () { return this.currentUser?.role === 'superuser'; }

    _updateHeaderUser () {
        if (!this.currentUser) return;
        const u = this.currentUser;

        /* Header profile */
        const hName = document.getElementById('headerUserName');
        const hRole = document.getElementById('headerUserRole');
        const hIcon = document.getElementById('headerAvatarIcon');
        if (hName) hName.textContent = u.fullName.split(' ')[0];
        if (hRole) hRole.textContent = u.role === 'superuser' ? 'Super User' : 'Viewer';
        if (hIcon) hIcon.className   = u.role === 'superuser' ? 'fas fa-user-shield' : 'fas fa-eye';

        /* Sidebar user */
        const sName = document.getElementById('sidebarUserName');
        const sRole = document.getElementById('sidebarUserRole');
        const sIcon = document.getElementById('sidebarAvatarIcon');
        if (sName) sName.textContent = u.fullName;
        if (sRole) sRole.textContent = u.role === 'superuser' ? 'Super User' : 'View Only';
        if (sIcon) sIcon.className   = u.role === 'superuser' ? 'fas fa-user-shield' : 'fas fa-eye';

        /* Viewer badge */
        const badge = document.getElementById('viewerBadge');
        if (badge) badge.style.display = this.isSuper() ? 'none' : 'flex';

        /* User management nav item (super only) */
        const umNav = document.getElementById('userMgmtNav');
        if (umNav) umNav.style.display = this.isSuper() ? 'flex' : 'none';

        /* Apply view-only class to body */
        document.body.classList.toggle('view-only', !this.isSuper());
    }

    /* ═══════════════════════════════════════════════════
       NOTIFICATION SYSTEM
       ═══════════════════════════════════════════════════ */

    async _buildNotifications () {
        const all         = await this.db.getAll('personnel');
        const medical     = await this.db.getAll('medical');
        const deployments = await this.db.getAll('deployments');
        const biometric   = await this.db.getAll('biometric');
        const documents   = await this.db.getAll('documents');
        const assignments = await this.db.getAll('assignments');

        const notifs = [];
        const today  = new Date();

        const persMap = Object.fromEntries(all.map(p => [p.id, p]));

        /* 1 — Personnel currently injured */
        all.filter(p => p.availabilityStatus === 'Injured').forEach(p => {
            notifs.push({
                id:      `injured_${p.id}`,
                type:    'danger',
                icon:    'fa-briefcase-medical',
                iconCls: 'ni-danger',
                msg:     `${p.fullName} is currently marked as Injured`,
                sub:     `${p.rank} · ${p.unit}`,
                time:    'Requires medical attention',
                page:    p.id,
                unread:  true
            });
        });

        /* 2 — Medical exams overdue (next exam date in the past) */
        medical.forEach(m => {
            if (!m.nextMedicalExam) return;
            const examDate = new Date(m.nextMedicalExam);
            if (examDate < today) {
                const p = persMap[m.personnelId];
                if (!p) return;
                const daysOverdue = Math.floor((today - examDate) / 86400000);
                notifs.push({
                    id:      `meddue_${m.personnelId}`,
                    type:    'warn',
                    icon:    'fa-stethoscope',
                    iconCls: 'ni-warn',
                    msg:     `Medical exam overdue for ${p.fullName}`,
                    sub:     `Was due ${daysOverdue} day${daysOverdue > 1 ? 's' : ''} ago`,
                    time:    m.nextMedicalExam,
                    page:    p.id,
                    unread:  true
                });
            }
        });

        /* 3 — Personnel on AWOL */
        all.filter(p => p.availabilityStatus === 'AWOL').forEach(p => {
            notifs.push({
                id:      `awol_${p.id}`,
                type:    'danger',
                icon:    'fa-triangle-exclamation',
                iconCls: 'ni-danger',
                msg:     `${p.fullName} is currently listed as AWOL`,
                sub:     `${p.rank} · ${p.unit} — Immediate action required`,
                time:    'URGENT',
                page:    p.id,
                unread:  true
            });
        });

        /* 4 — Active deployments */
        const activeOps = deployments.filter(d => d.status === 'Active');
        if (activeOps.length > 0) {
            notifs.push({
                id:      'active_ops',
                type:    'info',
                icon:    'fa-globe-africa',
                iconCls: 'ni-info',
                msg:     `${activeOps.length} active deployment operation${activeOps.length > 1 ? 's' : ''} in progress`,
                sub:     activeOps.map(d => d.operationName).join(', '),
                time:    'Operational',
                page:    null,
                nav:     'deployments',
                unread:  true
            });
        }

        /* 5 — Personnel with no biometric data registered */
        const bioPersonnelIds = new Set(biometric.map(b => b.personnelId));
        const noBio = all.filter(p => !bioPersonnelIds.has(p.id));
        if (noBio.length > 0) {
            notifs.push({
                id:      'no_biometric',
                type:    'warn',
                icon:    'fa-fingerprint',
                iconCls: 'ni-purple',
                msg:     `${noBio.length} operative${noBio.length > 1 ? 's have' : ' has'} no biometric data registered`,
                sub:     noBio.slice(0, 3).map(p => p.fullName).join(', ') + (noBio.length > 3 ? `…` : ''),
                time:    'Action required',
                page:    null,
                nav:     'biometric',
                unread:  false
            });
        }

        /* 6 — Documents expiring within 90 days */
        documents.forEach(d => {
            if (!d.expiryDate) return;
            const exp  = new Date(d.expiryDate);
            const days = Math.floor((exp - today) / 86400000);
            if (days >= 0 && days <= 90) {
                const p = persMap[d.personnelId];
                if (!p) return;
                notifs.push({
                    id:      `docexp_${d.id}`,
                    type:    days <= 30 ? 'danger' : 'warn',
                    icon:    'fa-file-circle-exclamation',
                    iconCls: days <= 30 ? 'ni-danger' : 'ni-warn',
                    msg:     `${d.documentTitle} expiring soon`,
                    sub:     `${p.fullName} · Expires in ${days} day${days !== 1 ? 's' : ''}`,
                    time:    d.expiryDate,
                    page:    p.id,
                    unread:  days <= 30
                });
            }
        });

        /* 7 — Assignments ending within 30 days */
        assignments.filter(a => a.status === 'Active' && a.endDate).forEach(a => {
            const end  = new Date(a.endDate);
            const days = Math.floor((end - today) / 86400000);
            if (days >= 0 && days <= 30) {
                const p = persMap[a.personnelId];
                if (!p) return;
                notifs.push({
                    id:      `assignend_${a.id}`,
                    type:    'info',
                    icon:    'fa-calendar-xmark',
                    iconCls: 'ni-info',
                    msg:     `Assignment ending in ${days} day${days !== 1 ? 's' : ''}`,
                    sub:     `${p.fullName} · ${a.assignmentTitle}`,
                    time:    a.endDate,
                    page:    p.id,
                    unread:  false
                });
            }
        });

        /* 8 — Personnel count summary */
        notifs.push({
            id:      'summary',
            type:    'green',
            icon:    'fa-users',
            iconCls: 'ni-green',
            msg:     `${all.length} total operatives registered in the system`,
            sub:     `${all.filter(p=>p.availabilityStatus==='Active').length} active · ${all.filter(p=>p.availabilityStatus==='Deployed').length} deployed · ${all.filter(p=>p.availabilityStatus==='Training').length} in training`,
            time:    'System summary',
            page:    null,
            nav:     'dashboard',
            unread:  false
        });

        return notifs;
    }

    async _toggleNotifPanel () {
        /* If panel already open, close it */
        const existing = document.getElementById('notifPanel');
        if (existing) { this._closeNotifPanel(); return; }

        /* Build panel */
        const notifs    = await this._buildNotifications();
        const unreadCnt = notifs.filter(n => n.unread).length;

        /* Update badge */
        const badge = document.getElementById('notifBadge');
        if (badge) {
            badge.textContent = unreadCnt > 0 ? unreadCnt : '';
            badge.style.display = unreadCnt > 0 ? 'flex' : 'none';
        }

        const panel = document.createElement('div');
        panel.id    = 'notifPanel';
        panel.className = 'notif-panel';

        panel.innerHTML = `
        <div class="notif-head">
            <div class="notif-head-title">
                <i class="fas fa-bell"></i> Notifications
                ${unreadCnt > 0 ? `<span class="notif-unread-count">${unreadCnt} new</span>` : ''}
            </div>
            <button class="notif-mark-all" onclick="app._markAllRead()">
                <i class="fas fa-check-double"></i> Mark all read
            </button>
        </div>

        <div class="notif-list" id="notifList">
            ${notifs.length === 0
                ? `<div class="notif-empty"><i class="fas fa-bell-slash"></i><span>No notifications</span></div>`
                : notifs.map(n => `
                <div class="notif-item ${n.unread ? 'unread' : ''}"
                     onclick="app._onNotifClick('${n.nav || ''}', ${n.page || 'null'})">
                    <div class="notif-icon ${n.iconCls}">
                        <i class="fas ${n.icon}"></i>
                    </div>
                    <div class="notif-content">
                        <div class="notif-msg">${n.msg}</div>
                        <div class="notif-sub">${n.sub}</div>
                        <div class="notif-time"><i class="fas fa-clock" style="font-size:9px"></i> ${n.time}</div>
                    </div>
                </div>`).join('')}
        </div>

        <div class="notif-footer">
            <a onclick="app._closeNotifPanel(); app.navigateTo('dashboard')">
                <i class="fas fa-arrow-right"></i> Go to Dashboard
            </a>
        </div>`;

        document.body.appendChild(panel);

        /* Backdrop to close on outside click */
        const backdrop = document.createElement('div');
        backdrop.id    = 'notifBackdrop';
        backdrop.className = 'notif-backdrop';
        backdrop.addEventListener('click', () => this._closeNotifPanel());
        document.body.appendChild(backdrop);
    }

    _closeNotifPanel () {
        document.getElementById('notifPanel')?.remove();
        document.getElementById('notifBackdrop')?.remove();
    }

    _markAllRead () {
        document.querySelectorAll('.notif-item.unread').forEach(el => el.classList.remove('unread'));
        const badge = document.getElementById('notifBadge');
        if (badge) { badge.textContent = ''; badge.style.display = 'none'; }
        const countEl = document.querySelector('.notif-unread-count');
        if (countEl) countEl.remove();
    }

    _onNotifClick (nav, personnelId) {
        this._closeNotifPanel();
        if (personnelId) {
            this.navigateTo('profile', personnelId);
        } else if (nav) {
            this.navigateTo(nav);
        }
    }

    async _refreshNotifBadge () {
        if (!this.db.db) return;
        try {
            const notifs = await this._buildNotifications();
            const count  = notifs.filter(n => n.unread).length;
            const badge  = document.getElementById('notifBadge');
            if (badge) {
                badge.textContent    = count > 0 ? count : '';
                badge.style.display = count > 0 ? 'flex' : 'none';
            }
        } catch (e) { /* silent */ }
    }

    _applyPermissions () {
        if (!this.currentUser) return;
        document.body.classList.toggle('view-only', !this.isSuper());
        if (this.isSuper()) return;

        /* Hide mutation buttons by matching text / icon content */
        const HIDE_TEXTS = [
            'Add Personnel','Add New Personnel','New Assignment','New Review',
            'New Deployment','Add Record','Register Biometrics','Upload Document',
            'Reset All Data','Import JSON','Edit Profile','Update Status',
            'Register','Upload','Add','Save','Update'
        ];
        const HIDE_TITLES = ['Edit','Delete','Update Status'];

        document.querySelectorAll('#pageContent button, #pageContent label.btn').forEach(btn => {
            const text  = (btn.textContent || '').trim();
            const title = (btn.getAttribute('title') || '');
            if (HIDE_TEXTS.includes(text) || HIDE_TITLES.includes(title)) {
                btn.style.display = 'none';
            }
        });
    }

    /* ─── Navigation ─────────────────────────────────────── */
    _bindNav () {
        document.querySelectorAll('.nav-item').forEach(el => {
            el.addEventListener('click', () => this.navigateTo(el.dataset.page));
        });
    }

    async navigateTo (page, data = null) {
        this.currentPage = page;

        document.querySelectorAll('.nav-item').forEach(el =>
            el.classList.toggle('active', el.dataset.page === page)
        );

        const pageNames = {
            dashboard:'Dashboard', personnel:'Personnel Records',
            assignments:'Assignment History', reviews:'Performance Reviews',
            availability:'Availability Status', deployments:'Deployments',
            medical:'Medical Records', biometric:'Biometric Data',
            documents:'Personal Documents', users:'User Management',
            advanced:'Advanced'
        };

        document.getElementById('breadcrumbCurrent').textContent = pageNames[page] || page;

        const content = document.getElementById('pageContent');
        content.innerHTML = `<div class="initial-loader"><i class="fas fa-spinner fa-spin"></i><p>Loading...</p></div>`;

        await this._renderPage(page, data, content);
        this._applyPermissions();
    }

    async _renderPage (page, data, container) {
        switch (page) {
            case 'dashboard':    container.innerHTML = await this.renderDashboard();       break;
            case 'personnel':    container.innerHTML = await this.renderPersonnelList();  this._bindPersonnelPage(); break;
            case 'assignments':  container.innerHTML = await this.renderAssignments(data); break;
            case 'reviews':      container.innerHTML = await this.renderReviews(data);    break;
            case 'availability': container.innerHTML = await this.renderAvailability();   break;
            case 'deployments':  container.innerHTML = await this.renderDeployments(data); break;
            case 'medical':      container.innerHTML = await this.renderMedical(data);    break;
            case 'biometric':    container.innerHTML = await this.renderBiometric(data);  break;
            case 'documents':    container.innerHTML = await this.renderDocuments(data);  break;
            case 'users':        container.innerHTML = await this.renderUsers();          break;
            case 'advanced':     container.innerHTML = this.renderAdvanced();             break;
            case 'profile':      container.innerHTML = await this.renderProfile(data);    this._bindProfilePage(data); break;
            default: container.innerHTML = '<div class="empty-state"><i class="fas fa-tools"></i><h3>Coming Soon</h3><p>This section is under development.</p></div>';
        }
    }

    /* ─── Header bindings ────────────────────────────────── */
    _bindHeader () {
        const toggle = document.getElementById('sidebarToggle');
        if (toggle) toggle.addEventListener('click', () => {
            document.querySelector('.sidebar').classList.toggle('collapsed');
        });

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.doLogout());

        const notifBtn = document.getElementById('notifBtn');
        if (notifBtn) notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this._toggleNotifPanel();
        });

        const globalSearch = document.getElementById('globalSearch');
        if (globalSearch) globalSearch.addEventListener('input', e => this._globalSearch(e.target.value));

        const fullscreenBtn = document.getElementById('fullscreenBtn');
        if (fullscreenBtn) fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) document.documentElement.requestFullscreen();
            else document.exitFullscreen();
        });
    }

    async _globalSearch (q) {
        if (!q || q.length < 2) return;
        const all = await this.db.getAll('personnel');
        const results = all.filter(p =>
            p.fullName.toLowerCase().includes(q.toLowerCase()) ||
            p.serviceNumber.toLowerCase().includes(q.toLowerCase())
        );
        if (results.length > 0) {
            this.currentPage = 'personnel';
            document.querySelectorAll('.nav-item').forEach(el =>
                el.classList.toggle('active', el.dataset.page === 'personnel')
            );
            document.getElementById('breadcrumbCurrent').textContent = `Search: "${q}"`;
            document.getElementById('pageContent').innerHTML = await this._buildPersonnelGrid(results);
            this._bindPersonnelCards();
        }
    }

    /* ─── Modal helpers ─────────────────────────────────── */
    _bindModal () {
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
        document.getElementById('modalOverlay').addEventListener('click', e => {
            if (e.target.id === 'modalOverlay') this.closeModal();
        });
    }

    openModal (title, bodyHtml, opts = {}) {
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalBody').innerHTML    = bodyHtml;
        if (opts.wide) document.getElementById('modalBox').style.maxWidth = '900px';
        else document.getElementById('modalBox').style.maxWidth = '700px';
        document.getElementById('modalOverlay').classList.add('open');
    }

    closeModal () {
        document.getElementById('modalOverlay').classList.remove('open');
        document.getElementById('modalBox').style.maxWidth = '700px';
    }

    /* ─── Confirm dialog ─────────────────────────────────── */
    _bindConfirm () {
        document.getElementById('confirmNo').addEventListener('click',  () => {
            document.getElementById('confirmOverlay').classList.remove('open');
            this._confirmCb = null;
        });
        document.getElementById('confirmYes').addEventListener('click', () => {
            document.getElementById('confirmOverlay').classList.remove('open');
            if (typeof this._confirmCb === 'function') this._confirmCb();
            this._confirmCb = null;
        });
    }

    confirm (title, msg, cb) {
        document.getElementById('confirmTitle').textContent = title;
        document.getElementById('confirmMsg').textContent   = msg;
        this._confirmCb = cb;
        document.getElementById('confirmOverlay').classList.add('open');
    }

    /* ─── Toast ─────────────────────────────────────────── */
    toast (message, type = 'success', sub = '') {
        const icons = { success:'fa-check-circle', error:'fa-times-circle', warn:'fa-exclamation-circle', info:'fa-info-circle' };
        const el = document.createElement('div');
        el.className = `toast toast-${type}`;
        el.innerHTML = `
            <i class="fas ${icons[type] || icons.info}"></i>
            <div class="toast-content">
                <div class="toast-title">${message}</div>
                ${sub ? `<div class="toast-sub">${sub}</div>` : ''}
            </div>`;
        const stack = document.getElementById('toastStack');
        stack.appendChild(el);
        setTimeout(() => {
            el.classList.add('removing');
            setTimeout(() => el.remove(), 320);
        }, 3500);
    }

    /* ═══════════════════════════════════════════════════
       DASHBOARD
       ═══════════════════════════════════════════════════ */
    async renderDashboard () {
        const all         = await this.db.getAll('personnel');
        const assignments = await this.db.getAll('assignments');
        const reviews     = await this.db.getAll('reviews');
        const deployments = await this.db.getAll('deployments');

        const stats = {
            total:      all.length,
            active:     all.filter(p => p.availabilityStatus === 'Active').length,
            deployed:   all.filter(p => p.availabilityStatus === 'Deployed').length,
            training:   all.filter(p => p.availabilityStatus === 'Training').length,
            onLeave:    all.filter(p => p.availabilityStatus === 'On Leave').length,
            injured:    all.filter(p => p.availabilityStatus === 'Injured').length,
        };

        const recent = [...all].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0,6);

        const statusData = [
            { key:'Active',   count:stats.active,   cls:'badge-active',   icon:'fa-circle-check',   color:'#00a651' },
            { key:'Deployed', count:stats.deployed, cls:'badge-deployed', icon:'fa-location-dot',   color:'#2563eb' },
            { key:'Training', count:stats.training, cls:'badge-training', icon:'fa-graduation-cap', color:'#8b5cf6' },
            { key:'On Leave', count:stats.onLeave,  cls:'badge-on-leave', icon:'fa-umbrella-beach', color:'#f59e0b' },
            { key:'Injured',  count:stats.injured,  cls:'badge-injured',  icon:'fa-briefcase-medical',color:'#ef4444'},
        ];

        return `
        <div class="dashboard-header">
            <div>
                <h2>Personnel Overview</h2>
                <p>Nigerian Defence Army — Real-time personnel data</p>
            </div>
            <div style="display:flex;gap:10px">
                <button class="btn btn-primary" onclick="app.openAddPersonnelModal()">
                    <i class="fas fa-user-plus"></i> Add Personnel
                </button>
                <button class="btn btn-outline" onclick="app.navigateTo('personnel')">
                    <i class="fas fa-list"></i> View All
                </button>
            </div>
        </div>

        <!-- Stats Row -->
        <div class="stats-grid">
            <div class="stat-card" onclick="app.navigateTo('personnel')" style="border-top:3px solid #00a651">
                <div class="stat-icon" style="background:#dcfce7;color:#00a651"><i class="fas fa-users"></i></div>
                <div class="stat-data">
                    <div class="stat-value">${stats.total}</div>
                    <div class="stat-label">Total Personnel</div>
                </div>
            </div>
            ${statusData.map(s => `
            <div class="stat-card" onclick="app.navigateTo('availability')" style="border-top:3px solid ${s.color}">
                <div class="stat-icon" style="background:${s.color}20;color:${s.color}"><i class="fas ${s.icon}"></i></div>
                <div class="stat-data">
                    <div class="stat-value" style="color:${s.color}">${s.count}</div>
                    <div class="stat-label">${s.key}</div>
                </div>
            </div>`).join('')}
            <div class="stat-card" onclick="app.navigateTo('deployments')" style="border-top:3px solid #0ea5e9">
                <div class="stat-icon" style="background:#e0f2fe;color:#0ea5e9"><i class="fas fa-globe-africa"></i></div>
                <div class="stat-data">
                    <div class="stat-value" style="color:#0ea5e9">${deployments.filter(d=>d.status==='Active').length}</div>
                    <div class="stat-label">Active Ops</div>
                </div>
            </div>
        </div>

        <!-- Dashboard Grid -->
        <div class="dashboard-grid">

            <!-- Recent Personnel -->
            <div class="card">
                <div class="card-header">
                    <span class="card-title"><i class="fas fa-id-badge text-green" style="margin-right:8px"></i>Recent Personnel</span>
                    <button class="btn btn-ghost btn-sm" onclick="app.navigateTo('personnel')">View All</button>
                </div>
                <div class="card-body" style="padding:8px 12px">
                    <div class="personnel-list-mini">
                        ${recent.map(p => `
                        <div class="personnel-mini-item" onclick="app.navigateTo('profile',${p.id})">
                            <div class="mini-avatar"><i class="fas fa-user-tie"></i></div>
                            <div class="mini-info">
                                <div class="mini-name">${p.fullName}</div>
                                <div class="mini-sub">${p.rank} &bull; ${p.unit}</div>
                            </div>
                            <span class="badge-status badge-${this._statusClass(p.availabilityStatus)}">${p.availabilityStatus}</span>
                        </div>`).join('')}
                    </div>
                </div>
            </div>

            <!-- Right column -->
            <div style="display:flex;flex-direction:column;gap:16px">

                <!-- Quick Stats -->
                <div class="card">
                    <div class="card-header">
                        <span class="card-title"><i class="fas fa-chart-pie text-green" style="margin-right:8px"></i>Status Breakdown</span>
                    </div>
                    <div class="card-body" style="padding:14px 18px">
                        ${statusData.map(s => `
                        <div style="margin-bottom:10px">
                            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
                                <span style="font-weight:600;color:${s.color}">${s.key}</span>
                                <span>${s.count} / ${stats.total}</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width:${stats.total?Math.round(s.count/stats.total*100):0}%;background:${s.color}"></div>
                            </div>
                        </div>`).join('')}
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="card">
                    <div class="card-header">
                        <span class="card-title"><i class="fas fa-bolt text-green" style="margin-right:8px"></i>Quick Actions</span>
                    </div>
                    <div class="card-body" style="display:flex;flex-direction:column;gap:8px;padding:14px">
                        <button class="btn btn-primary" style="justify-content:flex-start" onclick="app.openAddPersonnelModal()"><i class="fas fa-user-plus"></i> Add New Personnel</button>
                        <button class="btn btn-outline" style="justify-content:flex-start" onclick="app.navigateTo('reviews')"><i class="fas fa-star"></i> Performance Reviews</button>
                        <button class="btn btn-outline" style="justify-content:flex-start" onclick="app.navigateTo('deployments')"><i class="fas fa-globe-africa"></i> Manage Deployments</button>
                        <button class="btn btn-ghost" style="justify-content:flex-start" onclick="app.navigateTo('advanced')"><i class="fas fa-file-export"></i> Export / Reports</button>
                    </div>
                </div>

            </div>
        </div>`;
    }

    /* ═══════════════════════════════════════════════════
       PERSONNEL LIST
       ═══════════════════════════════════════════════════ */
    async renderPersonnelList () {
        const all = await this.db.getAll('personnel');
        const units = [...new Set(all.map(p => p.unit))].sort();

        return `
        <div class="page-toolbar">
            <div class="toolbar-left">
                <div class="search-input-wrap">
                    <i class="fas fa-search"></i>
                    <input type="text" id="personnelSearch" placeholder="Search by name or service no..." value="${this.searchTerm}">
                </div>
                <select class="filter-select" id="statusFilter">
                    <option value="">All Statuses</option>
                    ${['Active','Deployed','On Leave','Injured','Training','Retired'].map(s => `<option value="${s}" ${this.filterStatus===s?'selected':''}>${s}</option>`).join('')}
                </select>
                <select class="filter-select" id="unitFilter">
                    <option value="">All Units</option>
                    ${units.map(u => `<option value="${u}" ${this.filterUnit===u?'selected':''}>${u}</option>`).join('')}
                </select>
            </div>
            <div class="toolbar-right">
                <div class="view-toggle">
                    <button class="view-btn ${this.viewMode==='grid'?'active':''}" id="gridViewBtn" title="Grid view"><i class="fas fa-th-large"></i></button>
                    <button class="view-btn ${this.viewMode==='list'?'active':''}" id="listViewBtn" title="List view"><i class="fas fa-list"></i></button>
                </div>
                <button class="btn btn-primary" onclick="app.openAddPersonnelModal()">
                    <i class="fas fa-user-plus"></i> Add Personnel
                </button>
            </div>
        </div>
        <div id="personnelContainer">${await this._buildPersonnelGrid(all)}</div>`;
    }

    _bindPersonnelPage () {
        const search = document.getElementById('personnelSearch');
        const statusF = document.getElementById('statusFilter');
        const unitF   = document.getElementById('unitFilter');

        if (search)  search.addEventListener('input',  () => this._applyFilters());
        if (statusF) statusF.addEventListener('change', () => this._applyFilters());
        if (unitF)   unitF.addEventListener('change',  () => this._applyFilters());

        document.getElementById('gridViewBtn')?.addEventListener('click', () => {
            this.viewMode = 'grid';
            document.getElementById('gridViewBtn').classList.add('active');
            document.getElementById('listViewBtn').classList.remove('active');
            this._applyFilters();
        });
        document.getElementById('listViewBtn')?.addEventListener('click', () => {
            this.viewMode = 'list';
            document.getElementById('listViewBtn').classList.add('active');
            document.getElementById('gridViewBtn').classList.remove('active');
            this._applyFilters();
        });

        this._bindPersonnelCards();
    }

    async _applyFilters () {
        const q       = document.getElementById('personnelSearch')?.value || '';
        const status  = document.getElementById('statusFilter')?.value   || '';
        const unit    = document.getElementById('unitFilter')?.value     || '';
        this.searchTerm   = q;
        this.filterStatus = status;
        this.filterUnit   = unit;

        let all = await this.db.getAll('personnel');
        if (q)      all = all.filter(p => p.fullName.toLowerCase().includes(q.toLowerCase()) || p.serviceNumber.toLowerCase().includes(q.toLowerCase()));
        if (status) all = all.filter(p => p.availabilityStatus === status);
        if (unit)   all = all.filter(p => p.unit === unit);

        document.getElementById('personnelContainer').innerHTML = await this._buildPersonnelGrid(all);
        this._bindPersonnelCards();
    }

    async _buildPersonnelGrid (list) {
        if (!list || list.length === 0) {
            return `<div class="empty-state">
                <i class="fas fa-users-slash"></i>
                <h3>No Personnel Found</h3>
                <p>No personnel match your search criteria. Try adjusting the filters.</p>
            </div>`;
        }

        if (this.viewMode === 'list') {
            return `<div class="card"><div class="table-wrap"><table class="data-table">
                <thead><tr>
                    <th>Service No.</th><th>Name</th><th>Rank</th><th>Unit</th>
                    <th>Status</th><th>Years Service</th><th>Actions</th>
                </tr></thead>
                <tbody>
                ${list.map(p => `
                <tr>
                    <td><code style="font-size:11px;background:#f1f5f9;padding:2px 6px;border-radius:4px">${p.serviceNumber}</code></td>
                    <td><strong>${p.fullName}</strong></td>
                    <td>${p.rank}</td>
                    <td>${p.unit}</td>
                    <td><span class="badge-status badge-${this._statusClass(p.availabilityStatus)}">${p.availabilityStatus}</span></td>
                    <td>${p.yearsService || '—'} yrs</td>
                    <td>
                        <div style="display:flex;gap:4px">
                            <button class="action-btn" title="View Profile" onclick="app.navigateTo('profile',${p.id})"><i class="fas fa-eye"></i></button>
                            <button class="action-btn" title="Edit" onclick="app.openEditPersonnelModal(${p.id})"><i class="fas fa-pen"></i></button>
                            <button class="action-btn danger" title="Delete" onclick="app.deletePersonnel(${p.id})"><i class="fas fa-trash"></i></button>
                        </div>
                    </td>
                </tr>`).join('')}
                </tbody></table></div></div>`;
        }

        return `<div class="personnel-grid">
            ${list.map(p => `
            <div class="personnel-card" data-id="${p.id}">
                <div class="card-photo-row">
                    <div class="pcard-avatar"><i class="fas fa-user-tie"></i></div>
                    <div class="pcard-info">
                        <div class="pcard-unit"><span class="pcard-unit-dot"></span>${p.unit}</div>
                        <div class="pcard-name">${p.fullName}</div>
                        <div class="pcard-rank">${p.rank}</div>
                    </div>
                </div>
                <div class="card-details">
                    <div class="detail-item">
                        <span class="detail-key">Service No.</span>
                        <span class="detail-val" style="font-size:11px">${p.serviceNumber}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-key">Gender</span>
                        <span class="detail-val">${p.gender}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-key">Specialisation</span>
                        <span class="detail-val truncate">${p.specialisation || '—'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-key">Years Service</span>
                        <span class="detail-val">${p.yearsService || '—'}</span>
                    </div>
                </div>
                <div class="card-footer-row">
                    <span class="badge-status badge-${this._statusClass(p.availabilityStatus)}">${p.availabilityStatus}</span>
                    <div class="card-actions">
                        <button class="action-btn" title="View Profile" onclick="app.navigateTo('profile',${p.id})"><i class="fas fa-eye"></i></button>
                        <button class="action-btn" title="Edit" onclick="app.openEditPersonnelModal(${p.id})"><i class="fas fa-pen"></i></button>
                        <button class="action-btn danger" title="Delete" onclick="app.deletePersonnel(${p.id})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>`).join('')}
        </div>`;
    }

    _bindPersonnelCards () {
        document.querySelectorAll('.personnel-card').forEach(card => {
            card.addEventListener('click', e => {
                if (!e.target.closest('button')) {
                    this.navigateTo('profile', parseInt(card.dataset.id));
                }
            });
        });
    }

    /* ═══════════════════════════════════════════════════
       PERSONNEL PROFILE
       ═══════════════════════════════════════════════════ */
    async renderProfile (id) {
        const p = await this.db.getById('personnel', id);
        if (!p) return `<div class="empty-state"><i class="fas fa-user-slash"></i><h3>Personnel Not Found</h3></div>`;

        const assignments = await this.db.getByIndex('assignments',   'personnelId', id);
        const reviews     = await this.db.getByIndex('reviews',       'personnelId', id);
        const medical     = (await this.db.getByIndex('medical',      'personnelId', id))[0];
        const biometric   = (await this.db.getByIndex('biometric',    'personnelId', id))[0];
        const documents   = await this.db.getByIndex('documents',     'personnelId', id);
        const serviceRecs = await this.db.getByIndex('serviceRecords','personnelId', id);
        const deployments = await this.db.getByIndex('deployments',   'personnelId', id);

        return `
        <!-- Back button -->
        <div style="margin-bottom:16px">
            <button class="btn btn-ghost btn-sm" onclick="app.navigateTo('personnel')">
                <i class="fas fa-arrow-left"></i> Back to Personnel
            </button>
        </div>

        <!-- Profile Header Card -->
        <div class="profile-header-card">
            <div class="profile-photo-large"><i class="fas fa-user-tie"></i></div>
            <div class="profile-header-info">
                <div class="profile-header-service">${p.serviceNumber}</div>
                <div class="profile-header-name">${p.fullName}</div>
                <div class="profile-header-rank">${p.rank}</div>
                <div class="profile-header-unit"><i class="fas fa-building" style="margin-right:5px;opacity:.6"></i>${p.unit} &nbsp;|&nbsp; <i class="fas fa-shield-halved" style="margin-right:5px;opacity:.6"></i>${p.securityClearance || 'Confidential'}</div>
                <div class="profile-header-meta">
                    <div class="pmeta-item"><span class="pmeta-label">Status</span><span class="pmeta-value"><span class="badge-status badge-${this._statusClass(p.availabilityStatus)}">${p.availabilityStatus}</span></span></div>
                    <div class="pmeta-item"><span class="pmeta-label">Years of Service</span><span class="pmeta-value">${p.yearsService || '—'}</span></div>
                    <div class="pmeta-item"><span class="pmeta-label">Specialisation</span><span class="pmeta-value">${p.specialisation || '—'}</span></div>
                    <div class="pmeta-item"><span class="pmeta-label">Enlisted</span><span class="pmeta-value">${p.dateEnlisted || '—'}</span></div>
                </div>
            </div>
            <div class="profile-header-actions">
                <button class="btn btn-primary btn-sm" onclick="app.openEditPersonnelModal(${p.id})"><i class="fas fa-pen"></i> Edit Profile</button>
                <button class="btn btn-ghost btn-sm" onclick="app.openStatusModal(${p.id})"><i class="fas fa-circle-dot"></i> Update Status</button>
                <button class="btn btn-ghost btn-sm" style="background:rgba(255,255,255,.1);color:white;border-color:rgba(255,255,255,.2)" onclick="window.print()"><i class="fas fa-print"></i> Print</button>
            </div>
        </div>

        <!-- Profile Tabs -->
        <div class="profile-tabs" id="profileTabs">
            <div class="profile-tab active" data-tab="bio"><i class="fas fa-user"></i> Biographical</div>
            <div class="profile-tab" data-tab="assignments"><i class="fas fa-history"></i> Assignments (${assignments.length})</div>
            <div class="profile-tab" data-tab="reviews"><i class="fas fa-chart-line"></i> Reviews (${reviews.length})</div>
            <div class="profile-tab" data-tab="deployments"><i class="fas fa-globe-africa"></i> Deployments (${deployments.length})</div>
            <div class="profile-tab" data-tab="medical"><i class="fas fa-notes-medical"></i> Medical</div>
            <div class="profile-tab" data-tab="biometric"><i class="fas fa-fingerprint"></i> Biometric</div>
            <div class="profile-tab" data-tab="documents"><i class="fas fa-folder-open"></i> Documents (${documents.length})</div>
            <div class="profile-tab" data-tab="service"><i class="fas fa-medal"></i> Service Records (${serviceRecs.length})</div>
        </div>

        <!-- Tab Content -->
        <div id="tabContent">
            ${this._renderBioTab(p)}
        </div>
        `;
    }

    _bindProfilePage (id) {
        document.querySelectorAll('.profile-tab').forEach(tab => {
            tab.addEventListener('click', async () => {
                document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const tabName = tab.dataset.tab;
                document.getElementById('tabContent').innerHTML = '<div class="initial-loader"><i class="fas fa-spinner fa-spin"></i></div>';
                await this._renderProfileTab(tabName, id);
            });
        });
    }

    async _renderProfileTab (tabName, id) {
        const p = await this.db.getById('personnel', id);
        let html = '';
        switch (tabName) {
            case 'bio':         html = this._renderBioTab(p); break;
            case 'assignments': html = await this._renderAssignmentsTab(id); break;
            case 'reviews':     html = await this._renderReviewsTab(id); break;
            case 'deployments': html = await this._renderDeploymentsTab(id); break;
            case 'medical':     html = await this._renderMedicalTab(id); break;
            case 'biometric':   html = await this._renderBiometricTab(id); break;
            case 'documents':   html = await this._renderDocumentsTab(id); break;
            case 'service':     html = await this._renderServiceTab(id); break;
            default:            html = '<p>Tab not found.</p>';
        }
        document.getElementById('tabContent').innerHTML = html;
    }

    _renderBioTab (p) {
        return `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
            <div class="card">
                <div class="card-header"><span class="card-title">Biographical Data</span></div>
                <div class="card-body">
                    <div class="info-grid">
                        ${this._infoItem('Full Name',       p.fullName)}
                        ${this._infoItem('Service Number', p.serviceNumber)}
                        ${this._infoItem('Rank',           p.rank)}
                        ${this._infoItem('Unit',           p.unit)}
                        ${this._infoItem('Date of Birth',  p.dateOfBirth)}
                        ${this._infoItem('Gender',         p.gender)}
                        ${this._infoItem('Nationality',    p.nationality)}
                        ${this._infoItem('State of Origin',p.stateOfOrigin)}
                        ${this._infoItem('Religion',       p.religion)}
                        ${this._infoItem('Marital Status', p.maritalStatus)}
                        ${this._infoItem('Date Enlisted',  p.dateEnlisted)}
                        ${this._infoItem('Date Commissioned',p.dateCommissioned || 'N/A (NCO)')}
                        ${this._infoItem('Years of Service',p.yearsService + ' years')}
                        ${this._infoItem('Specialisation', p.specialisation)}
                    </div>
                </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:16px">
                <div class="card">
                    <div class="card-header"><span class="card-title">Contact Information</span></div>
                    <div class="card-body">
                        <div class="info-grid">
                            ${this._infoItem('Primary Phone', p.phone)}
                            ${this._infoItem('Email',         p.email)}
                            ${this._infoItem('Address',       p.residentialAddress, true)}
                            ${this._infoItem('Security Clearance', p.securityClearance)}
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header"><span class="card-title">Next of Kin</span></div>
                    <div class="card-body">
                        <div class="info-grid">
                            ${this._infoItem('Full Name',     p.nokFullName)}
                            ${this._infoItem('Relationship',  p.nokRelationship)}
                            ${this._infoItem('Phone',         p.nokPhone)}
                            ${this._infoItem('Address',       p.nokAddress, true)}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    async _renderAssignmentsTab (id) {
        const list = await this.db.getByIndex('assignments', 'personnelId', id);
        if (!list.length) return `<div class="empty-state"><i class="fas fa-history"></i><h3>No Assignments</h3><p>No assignment history on record.</p></div>`;
        return `
        <div class="card">
            <div class="card-header">
                <span class="card-title">Assignment History</span>
                <button class="btn btn-primary btn-sm" onclick="app.openAddAssignmentModal(${id})"><i class="fas fa-plus"></i> Add</button>
            </div>
            <div class="table-wrap">
                <table class="data-table">
                    <thead><tr><th>Assignment</th><th>Role</th><th>Location</th><th>Type</th><th>Period</th><th>Status</th></tr></thead>
                    <tbody>
                    ${list.map(a => `
                    <tr>
                        <td><strong>${a.assignmentTitle}</strong>${a.commandingOfficer?`<br><small style="color:var(--text-muted)">CO: ${a.commandingOfficer}</small>`:''}</td>
                        <td>${a.role||'—'}</td>
                        <td>${a.location||'—'}</td>
                        <td><span style="font-size:11px;background:#f1f5f9;padding:2px 8px;border-radius:999px">${a.assignmentType}</span></td>
                        <td style="font-size:12px">${a.startDate} — ${a.endDate||'Present'}</td>
                        <td><span class="badge-status ${a.status==='Active'?'badge-active':a.status==='Completed'?'badge-deployed':'badge-retired'}">${a.status}</span></td>
                    </tr>`).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
    }

    async _renderReviewsTab (id) {
        const list = await this.db.getByIndex('reviews', 'personnelId', id);
        if (!list.length) return `<div class="empty-state"><i class="fas fa-chart-line"></i><h3>No Reviews</h3><p>No performance reviews on record.</p></div>`;
        return `
        <div style="display:flex;flex-direction:column;gap:16px">
        ${list.map(r => `
        <div class="card">
            <div class="card-header">
                <div>
                    <span class="card-title">${r.reviewType} Review — ${r.reviewDate}</span>
                    <div style="font-size:12px;color:var(--text-muted);margin-top:2px">Reviewed by ${r.reviewerName} (${r.reviewerRank||''})</div>
                </div>
                <span class="badge-rating rating-${r.overallRating.toLowerCase().replace(' ','-')}">${r.overallRating}</span>
            </div>
            <div class="card-body">
                <!-- Score bars -->
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:16px">
                    ${[
                        ['Leadership',     r.leadershipScore],
                        ['Tactical',       r.tacticalScore],
                        ['Physical',       r.fitnessScore],
                        ['Discipline',     r.disciplineScore],
                        ['Teamwork',       r.teamScore],
                        ['Initiative',     r.initiativeScore],
                        ['Communication',  r.communicationScore],
                    ].map(([label, score]) => score ? `
                    <div>
                        <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:3px;color:var(--text-sec)">
                            <span>${label}</span><span>${score}/10</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width:${score*10}%"></div>
                        </div>
                    </div>` : '').join('')}
                    <div style="display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px">
                        <div style="font-size:28px;font-weight:800;color:var(--green)">${r.overallScore || '—'}</div>
                        <div style="font-size:11px;color:var(--text-muted)">Overall Score</div>
                    </div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
                    ${r.strengths ? `<div><div class="section-title" style="margin-bottom:4px">Strengths</div><p style="font-size:13px;color:var(--text-sec)">${r.strengths}</p></div>` : ''}
                    ${r.areasForImprovement ? `<div><div class="section-title" style="margin-bottom:4px">Areas for Improvement</div><p style="font-size:13px;color:var(--text-sec)">${r.areasForImprovement}</p></div>` : ''}
                </div>
                ${r.recommendations ? `<div class="mt-2"><div class="section-title" style="margin-bottom:4px">Recommendations</div><p style="font-size:13px">${r.recommendations}</p></div>` : ''}
                <div class="mt-2" style="display:flex;gap:10px">
                    ${r.promotionRecommended  ? `<span style="background:#dcfce7;color:#065f46;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:700"><i class="fas fa-arrow-up"></i> Promotion Recommended</span>` : ''}
                    ${r.commendationRecommended ? `<span style="background:#dbeafe;color:#1e40af;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:700"><i class="fas fa-medal"></i> Commendation Recommended</span>` : ''}
                </div>
            </div>
        </div>`).join('')}
        </div>`;
    }

    async _renderDeploymentsTab (id) {
        const list = await this.db.getByIndex('deployments', 'personnelId', id);
        if (!list.length) return `<div class="empty-state"><i class="fas fa-globe-africa"></i><h3>No Deployments</h3></div>`;
        return `
        <div style="display:flex;flex-direction:column;gap:12px">
        ${list.map(d => `
        <div class="card">
            <div class="card-header">
                <div>
                    <span class="card-title">${d.operationName}</span>
                    <div style="font-size:12px;color:var(--text-muted)">Code: ${d.operationCode||'—'} &bull; ${d.deploymentType}</div>
                </div>
                <span class="badge-status badge-${d.status==='Active'?'active':d.status==='Completed'?'deployed':'injured'}">${d.status}</span>
            </div>
            <div class="card-body">
                <div class="info-grid">
                    ${this._infoItem('Location',    d.deploymentLocation)}
                    ${this._infoItem('Country',     d.country)}
                    ${this._infoItem('Role',        d.role)}
                    ${this._infoItem('CO',          d.commandingOfficer)}
                    ${this._infoItem('Period',      d.startDate + ' — ' + (d.endDate||'Present'))}
                    ${this._infoItem('Classification', d.classification)}
                    ${this._infoItem('Injuries', d.injuriesSustained ? '<span style="color:#ef4444">Yes</span>' : 'None')}
                </div>
            </div>
        </div>`).join('')}
        </div>`;
    }

    async _renderMedicalTab (id) {
        const m = (await this.db.getByIndex('medical', 'personnelId', id))[0];
        if (!m) return `<div class="empty-state"><i class="fas fa-notes-medical"></i><h3>No Medical Record</h3><p>No medical data on file for this operative.</p>
            <button class="btn btn-primary mt-2" onclick="app.openAddMedicalModal(${id})"><i class="fas fa-plus"></i> Add Medical Record</button></div>`;
        const bmi = m.heightCm && m.weightKg ? (m.weightKg / ((m.heightCm/100)**2)).toFixed(1) : '—';
        return `
        <div style="display:flex;flex-direction:column;gap:16px">
            <!-- Vitals -->
            <div class="vitals-grid">
                <div class="vital-card"><div class="vital-val">${m.bloodType}</div><div class="vital-lbl">Blood Type</div></div>
                <div class="vital-card"><div class="vital-val">${m.heightCm||'—'}<span class="vital-unit">cm</span></div><div class="vital-lbl">Height</div></div>
                <div class="vital-card"><div class="vital-val">${m.weightKg||'—'}<span class="vital-unit">kg</span></div><div class="vital-lbl">Weight</div></div>
                <div class="vital-card"><div class="vital-val">${bmi}</div><div class="vital-lbl">BMI</div></div>
                <div class="vital-card"><div class="vital-val">${m.fitnesScore||'—'}<span class="vital-unit">/100</span></div><div class="vital-lbl">Fitness Score</div></div>
                <div class="vital-card"><div class="vital-val" style="font-size:16px">${m.fitnessLevel||'—'}</div><div class="vital-lbl">Fitness Level</div></div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
                <div class="card">
                    <div class="card-header"><span class="card-title">Medical Status</span>
                        <span class="badge-status badge-${m.medicalStatus==='Fit for Duty'?'active':m.medicalStatus==='Limited Duty'?'on-leave':'injured'}">${m.medicalStatus}</span>
                    </div>
                    <div class="card-body">
                        <div class="info-grid">
                            ${this._infoItem('Medical Status',        m.medicalStatus)}
                            ${this._infoItem('Psychological Status',  m.psychologicalStatus)}
                            ${this._infoItem('Last Exam',             m.lastMedicalExam)}
                            ${this._infoItem('Next Exam',             m.nextMedicalExam)}
                            ${this._infoItem('Physician',             m.examininingPhysician)}
                            ${this._infoItem('Vision (L/R)',          `${m.visionLeft||'—'} / ${m.visionRight||'—'}`)}
                            ${this._infoItem('Hearing',               m.hearingStatus)}
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header"><span class="card-title">Medical History</span></div>
                    <div class="card-body">
                        <div class="info-grid">
                            ${this._infoItem('Allergies',             m.allergies || 'None')}
                            ${this._infoItem('Chronic Conditions',    m.chronicConditions || 'None')}
                            ${this._infoItem('Current Medications',   m.currentMedications || 'None')}
                            ${this._infoItem('Psychological Notes',   m.psychologicalStatus)}
                        </div>
                        ${m.notes ? `<div class="mt-2"><div class="section-title">Notes</div><p style="font-size:13px;color:var(--text-sec)">${m.notes}</p></div>` : ''}
                    </div>
                </div>
            </div>
        </div>`;
    }

    async _renderBiometricTab (id) {
        const b = (await this.db.getByIndex('biometric', 'personnelId', id))[0];
        if (!b) return `<div class="empty-state"><i class="fas fa-fingerprint"></i><h3>No Biometric Data</h3>
            <button class="btn btn-primary mt-2" onclick="app.openAddBiometricModal(${id})"><i class="fas fa-plus"></i> Register Biometrics</button></div>`;
        return `
        <div class="biometric-grid">
            <div class="biometric-card">
                <div class="bio-icon"><i class="fas fa-fingerprint"></i></div>
                <div class="bio-title">Fingerprint Data</div>
                <div class="bio-status">${b.fingerprintsComplete ? '<span style="color:var(--green)"><i class="fas fa-check-circle"></i> All 10 prints captured</span>' : '<span style="color:#f59e0b">Incomplete</span>'}</div>
                <div class="fingerprint-grid">
                    ${['LT','LI','LM','LR','LP','RT','RI','RM','RR','RP'].map((f,i) => `
                    <div class="finger-item ${b.fingerprintsComplete?'captured':''}">
                        <i class="fas fa-fingerprint"></i>${f}
                    </div>`).join('')}
                </div>
                <div class="bio-date">Verified: ${b.lastVerified||'—'} by ${b.verifiedBy||'—'}</div>
            </div>
            <div class="biometric-card">
                <div class="bio-icon"><i class="fas fa-camera"></i></div>
                <div class="bio-title">Facial Recognition</div>
                <div class="bio-status">${b.facialComplete ? '<span style="color:var(--green)"><i class="fas fa-check-circle"></i> Scan captured</span>' : '<span style="color:#ef4444"><i class="fas fa-times-circle"></i> Not captured</span>'}</div>
                <div class="bio-date" style="margin-top:20px">Scan Date: ${b.facialScanDate||'—'}</div>
                <div style="margin-top:12px;background:var(--surface2);border-radius:var(--r);padding:16px;font-size:12px;color:var(--text-muted)">
                    Facial recognition data is stored in encrypted format and linked to the biometric authentication gateway.
                </div>
            </div>
            <div class="biometric-card">
                <div class="bio-icon"><i class="fas fa-eye"></i></div>
                <div class="bio-title">Retinal Scans</div>
                <div class="bio-status">${b.retinalComplete ? '<span style="color:var(--green)"><i class="fas fa-check-circle"></i> Both eyes captured</span>' : '<span style="color:#f59e0b"><i class="fas fa-exclamation-circle"></i> Incomplete</span>'}</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
                    <div style="background:var(--surface2);border-radius:var(--r);padding:12px;text-align:center">
                        <i class="fas fa-eye" style="font-size:24px;color:var(--green)"></i>
                        <div style="font-size:11px;margin-top:6px;color:var(--text-muted)">Left Eye</div>
                        <div style="font-size:11px;color:var(--green);margin-top:2px">${b.retinalComplete?'Captured':'Pending'}</div>
                    </div>
                    <div style="background:var(--surface2);border-radius:var(--r);padding:12px;text-align:center">
                        <i class="fas fa-eye" style="font-size:24px;color:var(--green)"></i>
                        <div style="font-size:11px;margin-top:6px;color:var(--text-muted)">Right Eye</div>
                        <div style="font-size:11px;color:var(--green);margin-top:2px">${b.retinalComplete?'Captured':'Pending'}</div>
                    </div>
                </div>
                <div class="bio-date">Scan Date: ${b.retinalScanDate||'—'}</div>
            </div>
        </div>`;
    }

    async _renderDocumentsTab (id) {
        const docs = await this.db.getByIndex('documents', 'personnelId', id);
        const docIcons = { 'Service ID':'fa-id-card', 'Passport':'fa-passport', 'Training Certificate':'fa-certificate', 'Award Certificate':'fa-medal', default:'fa-file-alt' };
        if (!docs.length) return `<div class="empty-state"><i class="fas fa-folder-open"></i><h3>No Documents</h3>
            <button class="btn btn-primary mt-2" onclick="app.openAddDocumentModal(${id})"><i class="fas fa-plus"></i> Upload Document</button></div>`;
        return `
        <div style="margin-bottom:12px;display:flex;justify-content:flex-end">
            <button class="btn btn-primary btn-sm" onclick="app.openAddDocumentModal(${id})"><i class="fas fa-upload"></i> Upload Document</button>
        </div>
        <div class="docs-grid">
        ${docs.map(d => `
        <div class="doc-card">
            <div class="doc-icon"><i class="fas ${docIcons[d.documentType]||docIcons.default}"></i></div>
            <div class="doc-name">${d.documentTitle}</div>
            <div class="doc-type">${d.documentType}</div>
            ${d.documentNumber ? `<div class="doc-meta"><i class="fas fa-hashtag"></i> ${d.documentNumber}</div>` : ''}
            ${d.issueDate ? `<div class="doc-meta"><i class="fas fa-calendar"></i> Issued: ${d.issueDate}</div>` : ''}
            ${d.expiryDate ? `<div class="doc-meta"><i class="fas fa-clock"></i> Expires: ${d.expiryDate}</div>` : ''}
            <div class="doc-meta">
                ${d.isVerified ? '<span style="color:var(--green)"><i class="fas fa-check-circle"></i> Verified</span>' : '<span style="color:#f59e0b"><i class="fas fa-clock"></i> Pending Verification</span>'}
            </div>
        </div>`).join('')}
        </div>`;
    }

    async _renderServiceTab (id) {
        const recs = await this.db.getByIndex('serviceRecords', 'personnelId', id);
        if (!recs.length) return `<div class="empty-state"><i class="fas fa-medal"></i><h3>No Service Records</h3></div>`;
        const typeColors = { Commendation:'badge-active', Award:'badge-deployed', Disciplinary:'badge-injured', Promotion:'badge-training', Demotion:'badge-retired', Citation:'badge-on-leave' };
        return `
        <div style="display:flex;flex-direction:column;gap:12px">
        ${recs.map(r => `
        <div class="card">
            <div class="card-header">
                <div>
                    <span class="card-title">${r.title}</span>
                    <div style="font-size:12px;color:var(--text-muted)">${r.recordDate} &bull; Ref: ${r.officialReference||'—'}</div>
                </div>
                <span class="badge-status ${typeColors[r.recordType]||'badge-active'}">${r.recordType}</span>
            </div>
            <div class="card-body">
                <p style="font-size:13px;color:var(--text-sec)">${r.description}</p>
                <div style="font-size:12px;color:var(--text-muted);margin-top:8px">
                    Issued by: ${r.issuedBy||'—'} | Authority: ${r.issuingAuthority||'—'}
                </div>
            </div>
        </div>`).join('')}
        </div>`;
    }

    _infoItem (label, value, wide = false) {
        return `<div class="info-item${wide?' style="grid-column:span 2"':''}">
            <span class="info-label">${label}</span>
            <span class="info-value ${!value?'empty':''}">${value || '—'}</span>
        </div>`;
    }

    /* ═══════════════════════════════════════════════════
       ASSIGNMENT HISTORY PAGE
       ═══════════════════════════════════════════════════ */
    async renderAssignments (personnelId) {
        const all  = await this.db.getAll('assignments');
        const pers = await this.db.getAll('personnel');
        const persMap = Object.fromEntries(pers.map(p => [p.id, p]));

        const filtered = personnelId
            ? all.filter(a => a.personnelId === personnelId)
            : all;

        return `
        <div class="page-toolbar">
            <h2 style="font-size:18px;font-weight:700">Assignment History</h2>
            <button class="btn btn-primary btn-sm" onclick="app.openAddAssignmentModal()"><i class="fas fa-plus"></i> New Assignment</button>
        </div>
        <div class="card">
            <div class="table-wrap">
                <table class="data-table">
                    <thead><tr><th>Personnel</th><th>Assignment</th><th>Role</th><th>Location</th><th>Type</th><th>Period</th><th>Status</th></tr></thead>
                    <tbody>
                    ${filtered.length === 0
                        ? `<tr><td colspan="7"><div class="empty-state"><i class="fas fa-history"></i><h3>No Assignments</h3></div></td></tr>`
                        : filtered.map(a => {
                            const p = persMap[a.personnelId];
                            return `<tr>
                                <td>${p ? `<strong>${p.fullName}</strong><br><small style="color:var(--text-muted)">${p.rank}</small>` : '—'}</td>
                                <td><strong>${a.assignmentTitle}</strong>${a.commandingOfficer?`<br><small style="color:var(--text-muted)">CO: ${a.commandingOfficer}</small>`:''}</td>
                                <td>${a.role||'—'}</td>
                                <td>${a.location||'—'}</td>
                                <td><span style="font-size:11px;background:#f1f5f9;padding:2px 8px;border-radius:999px">${a.assignmentType}</span></td>
                                <td style="font-size:12px">${a.startDate} — ${a.endDate||'Present'}</td>
                                <td><span class="badge-status badge-${a.status==='Active'?'active':a.status==='Completed'?'deployed':'retired'}">${a.status}</span></td>
                            </tr>`;
                          }).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
    }

    /* ═══════════════════════════════════════════════════
       PERFORMANCE REVIEWS PAGE
       ═══════════════════════════════════════════════════ */
    async renderReviews () {
        const all  = await this.db.getAll('reviews');
        const pers = await this.db.getAll('personnel');
        const persMap = Object.fromEntries(pers.map(p => [p.id, p]));

        return `
        <div class="page-toolbar">
            <h2 style="font-size:18px;font-weight:700">Performance Reviews</h2>
            <button class="btn btn-primary btn-sm" onclick="app.openAddReviewModal()"><i class="fas fa-plus"></i> New Review</button>
        </div>
        <div class="card">
            <div class="table-wrap">
                <table class="data-table">
                    <thead><tr><th>Personnel</th><th>Review Type</th><th>Period</th><th>Date</th><th>Reviewer</th><th>Score</th><th>Rating</th><th>Promo</th></tr></thead>
                    <tbody>
                    ${all.length === 0
                        ? `<tr><td colspan="8"><div class="empty-state"><i class="fas fa-chart-line"></i><h3>No Reviews</h3></div></td></tr>`
                        : all.map(r => {
                            const p = persMap[r.personnelId];
                            return `<tr>
                                <td>${p?`<strong>${p.fullName}</strong><br><small>${p.rank}</small>`:'—'}</td>
                                <td>${r.reviewType}</td>
                                <td style="font-size:12px">${r.reviewPeriodStart} — ${r.reviewPeriodEnd}</td>
                                <td>${r.reviewDate}</td>
                                <td style="font-size:12px">${r.reviewerName}</td>
                                <td><strong>${r.overallScore||'—'}</strong>/10</td>
                                <td><span class="badge-rating rating-${(r.overallRating||'').toLowerCase().replace(' ','-')}">${r.overallRating}</span></td>
                                <td>${r.promotionRecommended?'<span style="color:var(--green)"><i class="fas fa-check"></i></span>':'—'}</td>
                            </tr>`;
                          }).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
    }

    /* ═══════════════════════════════════════════════════
       AVAILABILITY STATUS
       ═══════════════════════════════════════════════════ */
    async renderAvailability () {
        const all = await this.db.getAll('personnel');
        const groups = {
            'Active':   all.filter(p => p.availabilityStatus === 'Active'),
            'Deployed': all.filter(p => p.availabilityStatus === 'Deployed'),
            'Training': all.filter(p => p.availabilityStatus === 'Training'),
            'On Leave': all.filter(p => p.availabilityStatus === 'On Leave'),
            'Injured':  all.filter(p => p.availabilityStatus === 'Injured'),
        };

        const colCls = { Active:'status-col-active', Deployed:'status-col-deployed', Training:'status-col-training', 'On Leave':'status-col-leave', Injured:'status-col-injured' };
        const colIcons = { Active:'fa-circle-check', Deployed:'fa-location-dot', Training:'fa-graduation-cap', 'On Leave':'fa-umbrella-beach', Injured:'fa-briefcase-medical' };

        return `
        <div class="page-toolbar">
            <h2 style="font-size:18px;font-weight:700">Availability Status Board</h2>
            <div style="font-size:13px;color:var(--text-muted)">Real-time operative availability</div>
        </div>

        <!-- Summary cards -->
        <div class="stats-grid" style="margin-bottom:24px">
            ${Object.entries(groups).map(([status, list]) => `
            <div class="stat-card" style="border-top:3px solid var(--status-${status.toLowerCase().replace(' ','-')})">
                <div class="stat-icon" style="background:var(--status-${status.toLowerCase().replace(' ','-')})20;color:var(--status-${status.toLowerCase().replace(' ','-')})">
                    <i class="fas ${colIcons[status]}"></i>
                </div>
                <div class="stat-data">
                    <div class="stat-value">${list.length}</div>
                    <div class="stat-label">${status}</div>
                </div>
            </div>`).join('')}
        </div>

        <!-- Kanban columns -->
        <div class="status-board">
            ${Object.entries(groups).map(([status, list]) => `
            <div class="status-column">
                <div class="status-column-header ${colCls[status]}">
                    <div class="status-col-title">
                        <i class="fas ${colIcons[status]}"></i> ${status}
                    </div>
                    <span class="status-col-count">${list.length}</span>
                </div>
                <div class="status-col-body">
                    ${list.length === 0
                        ? `<div style="padding:20px;text-align:center;font-size:12px;color:var(--text-muted)">No personnel</div>`
                        : list.map(p => `
                        <div class="status-person-card" onclick="app.navigateTo('profile',${p.id})">
                            <div class="status-mini-avatar"><i class="fas fa-user-tie"></i></div>
                            <div>
                                <div class="status-mini-name">${p.fullName}</div>
                                <div class="status-mini-rank">${p.rank} &bull; ${p.unit}</div>
                            </div>
                        </div>`).join('')}
                </div>
            </div>`).join('')}
        </div>

        <!-- Full table -->
        <div class="card mt-2">
            <div class="card-header">
                <span class="card-title">Full Status Register</span>
            </div>
            <div class="table-wrap">
                <table class="data-table">
                    <thead><tr><th>Service No.</th><th>Name</th><th>Rank</th><th>Unit</th><th>Status</th><th>Specialisation</th><th>Action</th></tr></thead>
                    <tbody>
                    ${all.map(p => `<tr>
                        <td><code style="font-size:11px;background:#f1f5f9;padding:2px 6px;border-radius:4px">${p.serviceNumber}</code></td>
                        <td><strong>${p.fullName}</strong></td>
                        <td>${p.rank}</td>
                        <td>${p.unit}</td>
                        <td><span class="badge-status badge-${this._statusClass(p.availabilityStatus)}">${p.availabilityStatus}</span></td>
                        <td style="font-size:12px">${p.specialisation||'—'}</td>
                        <td><button class="btn btn-ghost btn-sm" onclick="app.openStatusModal(${p.id})"><i class="fas fa-pencil"></i> Update</button></td>
                    </tr>`).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
    }

    /* ═══════════════════════════════════════════════════
       DEPLOYMENTS
       ═══════════════════════════════════════════════════ */
    async renderDeployments () {
        const all  = await this.db.getAll('deployments');
        const pers = await this.db.getAll('personnel');
        const persMap = Object.fromEntries(pers.map(p => [p.id, p]));

        const active    = all.filter(d => d.status === 'Active');
        const completed = all.filter(d => d.status === 'Completed');

        return `
        <div class="page-toolbar">
            <h2 style="font-size:18px;font-weight:700">Deployment Records</h2>
            <button class="btn btn-primary btn-sm" onclick="app.openAddDeploymentModal()"><i class="fas fa-plus"></i> New Deployment</button>
        </div>

        <div class="stats-grid" style="margin-bottom:20px">
            <div class="stat-card" style="border-top:3px solid var(--green)">
                <div class="stat-icon" style="background:#dcfce7;color:var(--green)"><i class="fas fa-globe-africa"></i></div>
                <div class="stat-data"><div class="stat-value">${all.length}</div><div class="stat-label">Total Deployments</div></div>
            </div>
            <div class="stat-card" style="border-top:3px solid #2563eb">
                <div class="stat-icon" style="background:#dbeafe;color:#2563eb"><i class="fas fa-location-dot"></i></div>
                <div class="stat-data"><div class="stat-value" style="color:#2563eb">${active.length}</div><div class="stat-label">Active Ops</div></div>
            </div>
            <div class="stat-card" style="border-top:3px solid #64748b">
                <div class="stat-icon" style="background:#f1f5f9;color:#64748b"><i class="fas fa-check-circle"></i></div>
                <div class="stat-data"><div class="stat-value">${completed.length}</div><div class="stat-label">Completed</div></div>
            </div>
        </div>

        ${active.length > 0 ? `
        <h3 style="font-size:15px;font-weight:700;margin-bottom:12px;color:#2563eb"><i class="fas fa-location-dot" style="margin-right:6px"></i>Active Operations</h3>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px">
        ${active.map(d => {
            const p = persMap[d.personnelId];
            return `<div class="card" style="border-left:4px solid #2563eb">
                <div class="card-body" style="display:flex;align-items:center;gap:20px">
                    <div style="flex:1">
                        <div style="font-weight:700;font-size:15px">${d.operationName}</div>
                        <div style="font-size:12px;color:var(--text-muted)">${d.deploymentType} &bull; ${d.operationCode||''} &bull; ${d.classification}</div>
                    </div>
                    <div style="text-align:center">
                        <div style="font-size:12px;color:var(--text-muted)">Personnel</div>
                        <div style="font-weight:600;font-size:13px">${p?p.fullName:'—'}</div>
                        <div style="font-size:11px;color:var(--text-muted)">${p?p.rank:''}</div>
                    </div>
                    <div style="text-align:center">
                        <div style="font-size:12px;color:var(--text-muted)">Location</div>
                        <div style="font-weight:600;font-size:13px">${d.deploymentLocation}</div>
                        <div style="font-size:11px;color:var(--text-muted)">${d.country}</div>
                    </div>
                    <div style="text-align:center">
                        <div style="font-size:12px;color:var(--text-muted)">Since</div>
                        <div style="font-weight:600;font-size:13px">${d.startDate}</div>
                    </div>
                    <span class="badge-status badge-deployed">Active</span>
                </div>
            </div>`;
        }).join('')}
        </div>` : ''}

        <h3 style="font-size:15px;font-weight:700;margin-bottom:12px"><i class="fas fa-list" style="margin-right:6px"></i>All Deployments</h3>
        <div class="card">
            <div class="table-wrap">
                <table class="data-table">
                    <thead><tr><th>Personnel</th><th>Operation</th><th>Location</th><th>Type</th><th>Period</th><th>Role</th><th>Status</th></tr></thead>
                    <tbody>
                    ${all.length === 0
                        ? `<tr><td colspan="7"><div class="empty-state"><i class="fas fa-globe-africa"></i><h3>No Deployments</h3></div></td></tr>`
                        : all.map(d => {
                            const p = persMap[d.personnelId];
                            return `<tr>
                                <td>${p?`<strong>${p.fullName}</strong><br><small>${p.rank}</small>`:'—'}</td>
                                <td><strong>${d.operationName}</strong><br><small style="color:var(--text-muted)">${d.operationCode||''}</small></td>
                                <td>${d.deploymentLocation}, ${d.country}</td>
                                <td><span style="font-size:11px;background:#f1f5f9;padding:2px 8px;border-radius:999px">${d.deploymentType}</span></td>
                                <td style="font-size:12px">${d.startDate} — ${d.endDate||'Present'}</td>
                                <td style="font-size:12px">${d.role||'—'}</td>
                                <td><span class="badge-status badge-${d.status==='Active'?'deployed':d.status==='Completed'?'active':'injured'}">${d.status}</span></td>
                            </tr>`;
                          }).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
    }

    /* ═══════════════════════════════════════════════════
       MEDICAL RECORDS PAGE
       ═══════════════════════════════════════════════════ */
    async renderMedical () {
        const all   = await this.db.getAll('medical');
        const pers  = await this.db.getAll('personnel');
        const persMap = Object.fromEntries(pers.map(p => [p.id, p]));

        return `
        <div class="page-toolbar">
            <h2 style="font-size:18px;font-weight:700">Medical Records</h2>
            <button class="btn btn-primary btn-sm" onclick="app.openAddMedicalModal()"><i class="fas fa-plus"></i> Add Record</button>
        </div>
        <div class="card">
            <div class="table-wrap">
                <table class="data-table">
                    <thead><tr><th>Personnel</th><th>Blood Type</th><th>Fitness</th><th>Medical Status</th><th>Psychological</th><th>Last Exam</th><th>Next Exam</th></tr></thead>
                    <tbody>
                    ${all.length === 0
                        ? `<tr><td colspan="7"><div class="empty-state"><i class="fas fa-notes-medical"></i><h3>No Medical Records</h3></div></td></tr>`
                        : all.map(m => {
                            const p = persMap[m.personnelId];
                            return `<tr>
                                <td>${p?`<strong>${p.fullName}</strong><br><small>${p.rank} &bull; ${p.unit}</small>`:'—'}</td>
                                <td><span style="font-weight:700;font-size:16px">${m.bloodType}</span></td>
                                <td><span class="badge-rating rating-${(m.fitnessLevel||'').toLowerCase()}">${m.fitnessLevel||'—'}</span>
                                    <div style="font-size:11px;color:var(--text-muted)">${m.fitnesScore||'—'}/100</div></td>
                                <td><span class="badge-status badge-${m.medicalStatus==='Fit for Duty'?'active':m.medicalStatus==='Limited Duty'?'on-leave':'injured'}">${m.medicalStatus}</span></td>
                                <td><span class="badge-status badge-${m.psychologicalStatus==='Fit'?'active':'on-leave'}">${m.psychologicalStatus}</span></td>
                                <td>${m.lastMedicalExam||'—'}</td>
                                <td>${m.nextMedicalExam||'—'}</td>
                            </tr>`;
                          }).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
    }

    /* ═══════════════════════════════════════════════════
       BIOMETRIC DATA PAGE
       ═══════════════════════════════════════════════════ */
    async renderBiometric () {
        const all  = await this.db.getAll('biometric');
        const pers = await this.db.getAll('personnel');
        const persMap = Object.fromEntries(pers.map(p => [p.id, p]));

        return `
        <div class="page-toolbar">
            <h2 style="font-size:18px;font-weight:700">Biometric Data Registry</h2>
            <button class="btn btn-primary btn-sm" onclick="app.openAddBiometricModal()"><i class="fas fa-plus"></i> Register Biometrics</button>
        </div>

        <div class="stats-grid" style="margin-bottom:20px">
            <div class="stat-card" style="border-top:3px solid var(--green)">
                <div class="stat-icon" style="background:#dcfce7;color:var(--green)"><i class="fas fa-fingerprint"></i></div>
                <div class="stat-data"><div class="stat-value">${all.filter(b=>b.fingerprintsComplete).length}</div><div class="stat-label">Fingerprints Captured</div></div>
            </div>
            <div class="stat-card" style="border-top:3px solid #8b5cf6">
                <div class="stat-icon" style="background:#ede9fe;color:#8b5cf6"><i class="fas fa-camera"></i></div>
                <div class="stat-data"><div class="stat-value" style="color:#8b5cf6">${all.filter(b=>b.facialComplete).length}</div><div class="stat-label">Facial Scans</div></div>
            </div>
            <div class="stat-card" style="border-top:3px solid #0ea5e9">
                <div class="stat-icon" style="background:#e0f2fe;color:#0ea5e9"><i class="fas fa-eye"></i></div>
                <div class="stat-data"><div class="stat-value" style="color:#0ea5e9">${all.filter(b=>b.retinalComplete).length}</div><div class="stat-label">Retinal Scans</div></div>
            </div>
            <div class="stat-card" style="border-top:3px solid #ef4444">
                <div class="stat-icon" style="background:#fee2e2;color:#ef4444"><i class="fas fa-users"></i></div>
                <div class="stat-data"><div class="stat-value" style="color:#ef4444">${pers.length - all.length}</div><div class="stat-label">Pending Registration</div></div>
            </div>
        </div>

        <div class="card">
            <div class="table-wrap">
                <table class="data-table">
                    <thead><tr><th>Personnel</th><th>Fingerprints</th><th>Facial</th><th>Retinal</th><th>Last Verified</th><th>Verified By</th></tr></thead>
                    <tbody>
                    ${all.length === 0
                        ? `<tr><td colspan="6"><div class="empty-state"><i class="fas fa-fingerprint"></i><h3>No Biometric Records</h3></div></td></tr>`
                        : all.map(b => {
                            const p = persMap[b.personnelId];
                            const tick = `<span style="color:var(--green)"><i class="fas fa-check-circle"></i></span>`;
                            const cross = `<span style="color:#ef4444"><i class="fas fa-times-circle"></i></span>`;
                            return `<tr>
                                <td>${p?`<strong>${p.fullName}</strong><br><small>${p.rank}</small>`:'—'}</td>
                                <td>${b.fingerprintsComplete?tick:cross} ${b.fingerprintsComplete?'Complete':'Incomplete'}</td>
                                <td>${b.facialComplete?tick:cross} ${b.facialComplete?'Captured':'Pending'}</td>
                                <td>${b.retinalComplete?tick:cross} ${b.retinalComplete?'Captured':'Pending'}</td>
                                <td>${b.lastVerified||'—'}</td>
                                <td style="font-size:12px">${b.verifiedBy||'—'}</td>
                            </tr>`;
                          }).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Personnel without biometrics -->
        ${pers.filter(p => !all.find(b => b.personnelId === p.id)).length > 0 ? `
        <div class="card mt-2" style="border-color:#ef4444">
            <div class="card-header" style="background:#fff5f5">
                <span class="card-title" style="color:#ef4444"><i class="fas fa-exclamation-triangle" style="margin-right:6px"></i>Personnel Without Biometric Registration</span>
            </div>
            <div class="card-body">
                <div style="display:flex;flex-wrap:wrap;gap:8px">
                ${pers.filter(p => !all.find(b => b.personnelId === p.id)).map(p => `
                    <div style="display:flex;align-items:center;gap:8px;background:#fff5f5;border:1px solid #fecaca;padding:6px 12px;border-radius:var(--r-sm)">
                        <i class="fas fa-user-slash" style="color:#ef4444;font-size:12px"></i>
                        <span style="font-size:12px;font-weight:600">${p.fullName}</span>
                        <button class="btn btn-danger btn-sm" style="padding:2px 8px;font-size:11px" onclick="app.openAddBiometricModal(${p.id})">Register</button>
                    </div>`).join('')}
                </div>
            </div>
        </div>` : ''}`;
    }

    /* ═══════════════════════════════════════════════════
       PERSONAL DOCUMENTS PAGE
       ═══════════════════════════════════════════════════ */
    async renderDocuments () {
        const docs = await this.db.getAll('documents');
        const pers = await this.db.getAll('personnel');
        const persMap = Object.fromEntries(pers.map(p => [p.id, p]));
        const docIcons = { 'Service ID':'fa-id-card', 'Passport':'fa-passport', 'Training Certificate':'fa-certificate', 'Award Certificate':'fa-medal', default:'fa-file-alt' };

        return `
        <div class="page-toolbar">
            <h2 style="font-size:18px;font-weight:700">Personal Documents Vault</h2>
            <button class="btn btn-primary btn-sm" onclick="app.openAddDocumentModal()"><i class="fas fa-upload"></i> Upload Document</button>
        </div>

        <div class="stats-grid" style="margin-bottom:20px">
            <div class="stat-card" style="border-top:3px solid var(--green)">
                <div class="stat-icon" style="background:#dcfce7;color:var(--green)"><i class="fas fa-folder-open"></i></div>
                <div class="stat-data"><div class="stat-value">${docs.length}</div><div class="stat-label">Total Documents</div></div>
            </div>
            <div class="stat-card" style="border-top:3px solid #2563eb">
                <div class="stat-icon" style="background:#dbeafe;color:#2563eb"><i class="fas fa-shield-check"></i></div>
                <div class="stat-data"><div class="stat-value" style="color:#2563eb">${docs.filter(d=>d.isVerified).length}</div><div class="stat-label">Verified</div></div>
            </div>
            <div class="stat-card" style="border-top:3px solid #f59e0b">
                <div class="stat-icon" style="background:#fef3c7;color:#f59e0b"><i class="fas fa-clock"></i></div>
                <div class="stat-data"><div class="stat-value" style="color:#f59e0b">${docs.filter(d=>!d.isVerified).length}</div><div class="stat-label">Pending Verification</div></div>
            </div>
        </div>

        <div class="docs-grid">
        ${docs.length === 0
            ? `<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-folder-open"></i><h3>No Documents</h3></div>`
            : docs.map(d => {
                const p = persMap[d.personnelId];
                return `<div class="doc-card">
                    <div style="display:flex;align-items:center;justify-content:space-between">
                        <div class="doc-icon"><i class="fas ${docIcons[d.documentType]||docIcons.default}"></i></div>
                        ${d.isVerified ? '<span style="background:#dcfce7;color:#065f46;padding:2px 8px;border-radius:999px;font-size:10px;font-weight:700"><i class="fas fa-check"></i> Verified</span>'
                            : '<span style="background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:999px;font-size:10px;font-weight:700">Pending</span>'}
                    </div>
                    <div class="doc-name">${d.documentTitle}</div>
                    <div class="doc-type">${d.documentType}</div>
                    ${p ? `<div class="doc-meta"><i class="fas fa-user"></i> ${p.fullName}</div>` : ''}
                    ${d.documentNumber ? `<div class="doc-meta"><i class="fas fa-hashtag"></i> ${d.documentNumber}</div>` : ''}
                    ${d.issueDate ? `<div class="doc-meta"><i class="fas fa-calendar-plus"></i> ${d.issueDate}</div>` : ''}
                    ${d.expiryDate ? `<div class="doc-meta"><i class="fas fa-calendar-xmark"></i> Expires: ${d.expiryDate}</div>` : ''}
                </div>`;
              }).join('')}
        </div>`;
    }

    /* ═══════════════════════════════════════════════════
       USER MANAGEMENT PAGE  (Super User only)
       ═══════════════════════════════════════════════════ */
    async renderUsers () {
        if (!this.isSuper()) {
            return `<div class="empty-state">
                <i class="fas fa-lock"></i>
                <h3>Access Restricted</h3>
                <p>User Management is only accessible to Super Users.</p>
            </div>`;
        }

        const users = await this.db.getAll('users');

        return `
        <div class="page-toolbar">
            <div>
                <h2 style="font-size:18px;font-weight:700">User Management</h2>
                <p style="font-size:12px;color:var(--text-muted);margin-top:2px">Manage system user accounts and access privileges</p>
            </div>
            <button class="btn btn-primary" onclick="app.openAddUserModal()">
                <i class="fas fa-user-plus"></i> Add New User
            </button>
        </div>

        <!-- Stats -->
        <div class="stats-grid" style="margin-bottom:20px">
            <div class="stat-card" style="border-top:3px solid var(--green)">
                <div class="stat-icon" style="background:#dcfce7;color:var(--green)"><i class="fas fa-users"></i></div>
                <div class="stat-data"><div class="stat-value">${users.length}</div><div class="stat-label">Total Users</div></div>
            </div>
            <div class="stat-card" style="border-top:3px solid #065f46">
                <div class="stat-icon" style="background:#dcfce7;color:#065f46"><i class="fas fa-user-shield"></i></div>
                <div class="stat-data"><div class="stat-value">${users.filter(u=>u.role==='superuser').length}</div><div class="stat-label">Super Users</div></div>
            </div>
            <div class="stat-card" style="border-top:3px solid #2563eb">
                <div class="stat-icon" style="background:#dbeafe;color:#2563eb"><i class="fas fa-eye"></i></div>
                <div class="stat-data"><div class="stat-value">${users.filter(u=>u.role==='viewer').length}</div><div class="stat-label">Viewers</div></div>
            </div>
            <div class="stat-card" style="border-top:3px solid var(--green)">
                <div class="stat-icon" style="background:#dcfce7;color:var(--green)"><i class="fas fa-circle-check"></i></div>
                <div class="stat-data"><div class="stat-value">${users.filter(u=>u.isActive).length}</div><div class="stat-label">Active Accounts</div></div>
            </div>
        </div>

        <!-- Users Grid -->
        <div style="display:flex;flex-direction:column;gap:10px">
        ${users.length === 0
            ? `<div class="empty-state"><i class="fas fa-users-slash"></i><h3>No Users</h3></div>`
            : users.map(u => {
                const isMe = u.id === this.currentUser?.id;
                return `
                <div class="user-card">
                    <div class="user-card-avatar ${u.role==='superuser'?'uav-super':'uav-viewer'}">
                        <i class="fas ${u.role==='superuser'?'fa-user-shield':'fa-eye'}"></i>
                    </div>
                    <div class="user-card-info">
                        <div class="user-card-name">
                            ${u.fullName}
                            ${isMe ? '<span class="you-badge">YOU</span>' : ''}
                        </div>
                        <div class="user-card-uname">@${u.username} &bull; ${u.email||'—'}</div>
                        <div class="user-card-meta">
                            <span class="user-role-badge ${u.role==='superuser'?'role-superuser':'role-viewer'}">
                                <i class="fas ${u.role==='superuser'?'fa-user-shield':'fa-eye'}"></i>
                                ${u.role === 'superuser' ? 'Super User' : 'Viewer'}
                            </span>
                            &nbsp;&bull;&nbsp;
                            <span style="color:${u.isActive?'var(--green)':'#ef4444'};font-weight:600">
                                <i class="fas ${u.isActive?'fa-circle-check':'fa-circle-xmark'}"></i>
                                ${u.isActive ? 'Active' : 'Inactive'}
                            </span>
                            &nbsp;&bull;&nbsp;
                            Created: ${u.createdAt ? u.createdAt.slice(0,10) : '—'}
                        </div>
                    </div>
                    <div class="card-actions">
                        <button class="action-btn" title="Edit User" onclick="app.openEditUserModal(${u.id})">
                            <i class="fas fa-pen"></i>
                        </button>
                        ${!isMe ? `<button class="action-btn danger" title="Delete User" onclick="app.deleteUser(${u.id})">
                            <i class="fas fa-trash"></i>
                        </button>` : ''}
                    </div>
                </div>`;
              }).join('')}
        </div>

        <!-- Privileges Info -->
        <div class="card mt-3">
            <div class="card-header"><span class="card-title"><i class="fas fa-info-circle text-green" style="margin-right:8px"></i>Privilege Levels</span></div>
            <div class="card-body">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
                    <div>
                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
                            <div style="width:36px;height:36px;border-radius:50%;background:#dcfce7;color:#065f46;display:flex;align-items:center;justify-content:center;font-size:16px"><i class="fas fa-user-shield"></i></div>
                            <strong>Super User</strong>
                        </div>
                        <ul style="font-size:13px;color:var(--text-sec);list-style:none;display:flex;flex-direction:column;gap:6px">
                            <li><i class="fas fa-check" style="color:var(--green);margin-right:6px"></i>View all personnel data</li>
                            <li><i class="fas fa-check" style="color:var(--green);margin-right:6px"></i>Add, edit and delete personnel</li>
                            <li><i class="fas fa-check" style="color:var(--green);margin-right:6px"></i>Manage assignments, reviews, deployments</li>
                            <li><i class="fas fa-check" style="color:var(--green);margin-right:6px"></i>Update availability status</li>
                            <li><i class="fas fa-check" style="color:var(--green);margin-right:6px"></i>Add and manage user accounts</li>
                            <li><i class="fas fa-check" style="color:var(--green);margin-right:6px"></i>Export, import and reset database</li>
                        </ul>
                    </div>
                    <div>
                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
                            <div style="width:36px;height:36px;border-radius:50%;background:#dbeafe;color:#1e40af;display:flex;align-items:center;justify-content:center;font-size:16px"><i class="fas fa-eye"></i></div>
                            <strong>Viewer</strong>
                        </div>
                        <ul style="font-size:13px;color:var(--text-sec);list-style:none;display:flex;flex-direction:column;gap:6px">
                            <li><i class="fas fa-check" style="color:#2563eb;margin-right:6px"></i>View all personnel profiles</li>
                            <li><i class="fas fa-check" style="color:#2563eb;margin-right:6px"></i>View assignments, reviews, deployments</li>
                            <li><i class="fas fa-check" style="color:#2563eb;margin-right:6px"></i>View medical and biometric records</li>
                            <li><i class="fas fa-check" style="color:#2563eb;margin-right:6px"></i>Print reports and profiles</li>
                            <li><i class="fas fa-times" style="color:#ef4444;margin-right:6px"></i>Cannot add, edit or delete any data</li>
                            <li><i class="fas fa-times" style="color:#ef4444;margin-right:6px"></i>Cannot manage user accounts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    }

    openAddUserModal () {
        this.openModal('Add New User Account', this._userForm());
        document.getElementById('userSaveBtn')?.addEventListener('click', () => this._saveUser());
    }

    async openEditUserModal (id) {
        const u = await this.db.getById('users', id);
        if (!u) return;
        this.openModal(`Edit User — ${u.fullName}`, this._userForm(u));
        document.getElementById('userSaveBtn')?.addEventListener('click', () => this._saveUser(id));
    }

    _userForm (u = {}) {
        return `
        <form id="userForm">
            <div class="form-grid form-grid-2">
                <div class="form-group" style="grid-column:span 2">
                    <label class="form-label">Full Name <span class="req">*</span></label>
                    <input class="form-input" name="fullName" required value="${u.fullName||''}">
                </div>
                <div class="form-group">
                    <label class="form-label">Username <span class="req">*</span></label>
                    <input class="form-input" name="username" required value="${u.username||''}" ${u.id?'readonly':''}>
                </div>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input class="form-input" type="email" name="email" value="${u.email||''}">
                </div>
                <div class="form-group">
                    <label class="form-label">${u.id ? 'New Password (leave blank to keep)' : 'Password <span class="req">*</span>'}</label>
                    <input class="form-input" type="password" name="password" ${u.id?'':'required'} placeholder="${u.id?'Leave blank to keep current':'Enter password'}">
                </div>
                <div class="form-group">
                    <label class="form-label">Privilege Level <span class="req">*</span></label>
                    <select class="form-select" name="role">
                        <option value="superuser" ${(u.role||'')===   'superuser'?'selected':''}>Super User — Full access</option>
                        <option value="viewer"    ${(u.role||'viewer')==='viewer'   ?'selected':''}>Viewer — Read-only access</option>
                    </select>
                </div>
                <div class="form-group" style="grid-column:span 2">
                    <label class="form-label">
                        <input type="checkbox" name="isActive" ${(u.isActive!==false)?'checked':''} style="margin-right:6px">
                        Account Active
                    </label>
                </div>
            </div>

            <!-- Privilege preview -->
            <div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--r-sm);padding:12px;margin-top:12px;font-size:12px;color:var(--text-sec)">
                <strong>Super User:</strong> Can add/edit/delete all data and manage user accounts.<br>
                <strong>Viewer:</strong> Can only view and print data. No edits allowed.
            </div>
        </form>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:20px;padding-top:16px;border-top:1px solid var(--border)">
            <button class="btn btn-ghost" onclick="app.closeModal()">Cancel</button>
            <button class="btn btn-primary" id="userSaveBtn"><i class="fas fa-save"></i> Save User</button>
        </div>`;
    }

    async _saveUser (id = null) {
        const form = document.getElementById('userForm');
        const data = Object.fromEntries(new FormData(form).entries());
        data.isActive = form.querySelector('[name=isActive]').checked;

        if (!data.fullName || !data.username) {
            this.toast('Full name and username are required.', 'error'); return;
        }
        if (!id && !data.password) {
            this.toast('Password is required for new users.', 'error'); return;
        }

        try {
            if (id) {
                const existing = await this.db.getById('users', id);
                const updated  = { ...existing, fullName: data.fullName, email: data.email, role: data.role, isActive: data.isActive };
                if (data.password) updated.password = data.password;
                await this.db.put('users', updated);
                this.toast(`${data.fullName} updated.`, 'success');
            } else {
                const existing = await this.db.getAll('users');
                if (existing.find(u => u.username === data.username)) {
                    this.toast('Username already exists.', 'error'); return;
                }
                await this.db.add('users', { username: data.username, password: data.password, fullName: data.fullName, email: data.email, role: data.role, isActive: data.isActive });
                this.toast(`User "${data.username}" created.`, 'success');
            }
            this.closeModal();
            await this.navigateTo('users');
        } catch (err) {
            this.toast('Error saving user: ' + (err.message || err), 'error');
        }
    }

    async deleteUser (id) {
        if (id === this.currentUser?.id) {
            this.toast('You cannot delete your own account.', 'error'); return;
        }
        const u = await this.db.getById('users', id);
        if (!u) return;
        this.confirm('Delete User', `Delete account for "${u.fullName}" (@${u.username})? This cannot be undone.`, async () => {
            await this.db.delete('users', id);
            this.toast(`User "${u.username}" deleted.`, 'warn');
            await this.navigateTo('users');
        });
    }

    /* ═══════════════════════════════════════════════════
       ADVANCED PAGE
       ═══════════════════════════════════════════════════ */
    renderAdvanced () {
        return `
        <div class="page-toolbar">
            <h2 style="font-size:18px;font-weight:700">Advanced Settings</h2>
        </div>
        <div class="advanced-grid">
            <div class="advanced-card">
                <div class="advanced-card-icon"><i class="fas fa-file-export"></i></div>
                <h3>Export Data</h3>
                <p>Export all personnel data as a JSON backup file for archival or transfer.</p>
                <button class="btn btn-primary" onclick="app.exportData()"><i class="fas fa-download"></i> Export JSON</button>
            </div>
            <div class="advanced-card">
                <div class="advanced-card-icon"><i class="fas fa-file-import"></i></div>
                <h3>Import Data</h3>
                <p>Restore personnel data from a previously exported JSON backup file.</p>
                <label class="btn btn-outline" style="cursor:pointer">
                    <i class="fas fa-upload"></i> Import JSON
                    <input type="file" accept=".json" style="display:none" onchange="app.importData(event)">
                </label>
            </div>
            <div class="advanced-card">
                <div class="advanced-card-icon"><i class="fas fa-print"></i></div>
                <h3>Print Report</h3>
                <p>Generate and print a comprehensive personnel status report.</p>
                <button class="btn btn-outline" onclick="window.print()"><i class="fas fa-print"></i> Print Report</button>
            </div>
            <div class="advanced-card">
                <div class="advanced-card-icon"><i class="fas fa-database"></i></div>
                <h3>Database Info</h3>
                <p>View database schema and technical documentation.</p>
                <button class="btn btn-ghost" onclick="app.showDbInfo()"><i class="fas fa-info-circle"></i> View Schema</button>
            </div>
            <div class="advanced-card" style="border-color:#ef4444">
                <div class="advanced-card-icon" style="background:#fee2e2;color:#ef4444"><i class="fas fa-trash-can"></i></div>
                <h3>Reset Database</h3>
                <p>Clear all data and reset to factory defaults with sample seed data. <strong>This is irreversible.</strong></p>
                <button class="btn btn-danger" data-sup onclick="app.resetDatabase()"><i class="fas fa-exclamation-triangle"></i> Reset All Data</button>
            </div>
            <div class="advanced-card">
                <div class="advanced-card-icon" style="background:#dcfce7;color:#065f46"><i class="fas fa-users-cog"></i></div>
                <h3>User Management</h3>
                <p>Add, edit and manage system user accounts and their privilege levels (Super User / Viewer).</p>
                <button class="btn btn-primary" data-sup onclick="app.navigateTo('users')"><i class="fas fa-users-cog"></i> Manage Users</button>
            </div>
            <div class="advanced-card">
                <div class="advanced-card-icon"><i class="fas fa-shield-halved"></i></div>
                <h3>About System</h3>
                <p>Nigerian Defence Army Personnel Management System v1.0<br>Built with IndexedDB &bull; Vanilla JS</p>
                <div style="font-size:11px;color:var(--text-muted);margin-top:4px">Schema: <code>sql/schema.sql</code></div>
            </div>
        </div>

        <!-- Current session card -->
        <div class="card mt-3">
            <div class="card-header"><span class="card-title"><i class="fas fa-user-circle text-green" style="margin-right:8px"></i>Current Session</span></div>
            <div class="card-body">
                <div class="info-grid">
                    ${this._infoItem('Logged in as', this.currentUser?.fullName || '—')}
                    ${this._infoItem('Username',     '@' + (this.currentUser?.username || '—'))}
                    ${this._infoItem('Privilege',    this.currentUser?.role === 'superuser' ? 'Super User' : 'Viewer')}
                    ${this._infoItem('Access Level', this.currentUser?.role === 'superuser' ? 'Full Read-Write' : 'Read Only')}
                </div>
                <div style="margin-top:16px">
                    <button class="btn btn-danger btn-sm" onclick="app.doLogout()"><i class="fas fa-right-from-bracket"></i> Sign Out</button>
                </div>
            </div>
        </div>`;
    }

    /* ═══════════════════════════════════════════════════
       ADD / EDIT PERSONNEL MODAL
       ═══════════════════════════════════════════════════ */
    openAddPersonnelModal () {
        this.openModal('Add New Personnel', this._personnelForm(), { wide: true });
        document.getElementById('personnelSaveBtn')?.addEventListener('click', () => this._savePersonnel());
    }

    async openEditPersonnelModal (id) {
        const p = await this.db.getById('personnel', id);
        if (!p) return;
        this.openModal(`Edit — ${p.fullName}`, this._personnelForm(p), { wide: true });
        document.getElementById('personnelSaveBtn')?.addEventListener('click', () => this._savePersonnel(id));
    }

    _personnelForm (p = {}) {
        const ranks = ['Private','Private First Class','Corporal','Sergeant','Staff Sergeant','Master Sergeant','Sergeant Major','Warrant Officer','Second Lieutenant','Lieutenant','Captain','Major','Lieutenant Colonel','Colonel','Brigadier General','Major General','Lieutenant General','General'];
        const units = ['DHQ','1DIV','2DIV','3AD','82DIV','JAJI','SFC','MIB'];
        const statuses = ['Active','Deployed','On Leave','Injured','Training','Retired','AWOL'];
        const clearances = ['Unclassified','Confidential','Secret','Top Secret'];

        return `
        <form id="personnelForm">
        <!-- Biographical -->
        <div class="section-title mb-1">Biographical Data</div>
        <div class="form-grid form-grid-3" style="margin-bottom:16px">
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">Full Name <span class="req">*</span></label>
                <input class="form-input" name="fullName" required value="${p.fullName||''}">
            </div>
            <div class="form-group">
                <label class="form-label">Service Number <span class="req">*</span></label>
                <input class="form-input" name="serviceNumber" required value="${p.serviceNumber||''}">
            </div>
            <div class="form-group">
                <label class="form-label">Rank <span class="req">*</span></label>
                <select class="form-select" name="rank" required>
                    ${ranks.map(r => `<option value="${r}" ${p.rank===r?'selected':''}>${r}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Unit <span class="req">*</span></label>
                <select class="form-select" name="unit" required>
                    ${units.map(u => `<option value="${u}" ${p.unit===u?'selected':''}>${u}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Gender <span class="req">*</span></label>
                <select class="form-select" name="gender">
                    <option value="Male"   ${p.gender==='Male'?'selected':''}>Male</option>
                    <option value="Female" ${p.gender==='Female'?'selected':''}>Female</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Date of Birth <span class="req">*</span></label>
                <input class="form-input" type="date" name="dateOfBirth" required value="${p.dateOfBirth||''}">
            </div>
            <div class="form-group">
                <label class="form-label">State of Origin</label>
                <input class="form-input" name="stateOfOrigin" value="${p.stateOfOrigin||''}">
            </div>
            <div class="form-group">
                <label class="form-label">Religion</label>
                <input class="form-input" name="religion" value="${p.religion||''}">
            </div>
            <div class="form-group">
                <label class="form-label">Marital Status</label>
                <select class="form-select" name="maritalStatus">
                    ${['Single','Married','Divorced','Widowed'].map(s => `<option value="${s}" ${p.maritalStatus===s?'selected':''}>${s}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Date Enlisted <span class="req">*</span></label>
                <input class="form-input" type="date" name="dateEnlisted" required value="${p.dateEnlisted||''}">
            </div>
            <div class="form-group">
                <label class="form-label">Date Commissioned</label>
                <input class="form-input" type="date" name="dateCommissioned" value="${p.dateCommissioned||''}">
            </div>
            <div class="form-group">
                <label class="form-label">Years of Service</label>
                <input class="form-input" type="number" name="yearsService" value="${p.yearsService||''}">
            </div>
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">Specialisation</label>
                <input class="form-input" name="specialisation" value="${p.specialisation||''}">
            </div>
        </div>

        <!-- Contact -->
        <div class="section-title mb-1">Contact Information</div>
        <div class="form-grid form-grid-2" style="margin-bottom:16px">
            <div class="form-group">
                <label class="form-label">Primary Phone</label>
                <input class="form-input" name="phone" value="${p.phone||''}">
            </div>
            <div class="form-group">
                <label class="form-label">Email</label>
                <input class="form-input" type="email" name="email" value="${p.email||''}">
            </div>
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">Residential Address</label>
                <textarea class="form-textarea" name="residentialAddress" rows="2">${p.residentialAddress||''}</textarea>
            </div>
        </div>

        <!-- Next of Kin -->
        <div class="section-title mb-1">Next of Kin</div>
        <div class="form-grid form-grid-2" style="margin-bottom:16px">
            <div class="form-group">
                <label class="form-label">Full Name</label>
                <input class="form-input" name="nokFullName" value="${p.nokFullName||''}">
            </div>
            <div class="form-group">
                <label class="form-label">Relationship</label>
                <input class="form-input" name="nokRelationship" value="${p.nokRelationship||''}">
            </div>
            <div class="form-group">
                <label class="form-label">Phone</label>
                <input class="form-input" name="nokPhone" value="${p.nokPhone||''}">
            </div>
            <div class="form-group">
                <label class="form-label">Address</label>
                <input class="form-input" name="nokAddress" value="${p.nokAddress||''}">
            </div>
        </div>

        <!-- Status -->
        <div class="section-title mb-1">Status & Clearance</div>
        <div class="form-grid form-grid-2">
            <div class="form-group">
                <label class="form-label">Availability Status</label>
                <select class="form-select" name="availabilityStatus">
                    ${statuses.map(s => `<option value="${s}" ${(p.availabilityStatus||'Active')===s?'selected':''}>${s}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Security Clearance</label>
                <select class="form-select" name="securityClearance">
                    ${clearances.map(c => `<option value="${c}" ${(p.securityClearance||'Confidential')===c?'selected':''}>${c}</option>`).join('')}
                </select>
            </div>
        </div>
        </form>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:20px;padding-top:16px;border-top:1px solid var(--border)">
            <button class="btn btn-ghost" onclick="app.closeModal()">Cancel</button>
            <button class="btn btn-primary" id="personnelSaveBtn"><i class="fas fa-save"></i> Save Personnel</button>
        </div>`;
    }

    async _savePersonnel (id = null) {
        const form  = document.getElementById('personnelForm');
        const data  = Object.fromEntries(new FormData(form).entries());

        if (!data.fullName || !data.serviceNumber || !data.rank || !data.unit || !data.dateOfBirth || !data.dateEnlisted) {
            this.toast('Please fill in all required fields.', 'error'); return;
        }

        try {
            if (id) {
                const existing = await this.db.getById('personnel', id);
                await this.db.put('personnel', { ...existing, ...data });
                this.toast(`${data.fullName} updated successfully.`, 'success');
            } else {
                await this.db.add('personnel', data);
                this.toast(`${data.fullName} added successfully.`, 'success');
            }
            this.closeModal();
            await this.navigateTo('personnel');
        } catch (err) {
            this.toast('Error saving personnel: ' + (err.message || err), 'error');
        }
    }

    async deletePersonnel (id) {
        const p = await this.db.getById('personnel', id);
        if (!p) return;
        this.confirm('Delete Personnel', `Are you sure you want to permanently delete ${p.fullName}? All associated records will also be removed.`, async () => {
            await this.db.delete('personnel', id);
            this.toast(`${p.fullName} deleted.`, 'warn');
            await this.navigateTo('personnel');
        });
    }

    /* ═══════════════════════════════════════════════════
       STATUS UPDATE MODAL
       ═══════════════════════════════════════════════════ */
    async openStatusModal (id) {
        const p = await this.db.getById('personnel', id);
        const statuses = ['Active','Deployed','On Leave','Injured','Training','Retired','AWOL'];
        this.openModal(`Update Status — ${p.fullName}`, `
        <div class="form-grid">
            <div class="form-group">
                <label class="form-label">Current Status</label>
                <div><span class="badge-status badge-${this._statusClass(p.availabilityStatus)}">${p.availabilityStatus}</span></div>
            </div>
            <div class="form-group">
                <label class="form-label">New Status <span class="req">*</span></label>
                <select class="form-select" id="newStatusSelect">
                    ${statuses.map(s => `<option value="${s}" ${p.availabilityStatus===s?'selected':''}>${s}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Reason / Notes</label>
                <textarea class="form-textarea" id="statusNotes" rows="3" placeholder="Reason for status change..."></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Expected Return Date (if applicable)</label>
                <input class="form-input" type="date" id="expectedReturn">
            </div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:16px">
            <button class="btn btn-ghost" onclick="app.closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="app._updateStatus(${id})"><i class="fas fa-save"></i> Update Status</button>
        </div>`);
    }

    async _updateStatus (id) {
        const p         = await this.db.getById('personnel', id);
        const newStatus = document.getElementById('newStatusSelect').value;
        const notes     = document.getElementById('statusNotes').value;

        await this.db.add('availabilityLogs', {
            personnelId: id,
            previousStatus: p.availabilityStatus,
            newStatus,
            changeDate: new Date().toISOString(),
            reason: notes,
            authorizedBy: 'System Admin'
        });

        await this.db.put('personnel', { ...p, availabilityStatus: newStatus });
        this.closeModal();
        this.toast(`${p.fullName}'s status updated to ${newStatus}.`, 'success');
        if (this.currentPage === 'profile') await this.navigateTo('profile', id);
        else await this.navigateTo(this.currentPage);
    }

    /* ═══════════════════════════════════════════════════
       ADD ASSIGNMENT MODAL
       ═══════════════════════════════════════════════════ */
    async openAddAssignmentModal (personnelId = null) {
        const pers = await this.db.getAll('personnel');
        this.openModal('Add Assignment', `
        <div class="form-grid form-grid-2">
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">Personnel <span class="req">*</span></label>
                <select class="form-select" id="a_personnelId">
                    <option value="">-- Select Personnel --</option>
                    ${pers.map(p => `<option value="${p.id}" ${personnelId===p.id?'selected':''}>${p.fullName} (${p.rank})</option>`).join('')}
                </select>
            </div>
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">Assignment Title <span class="req">*</span></label>
                <input class="form-input" id="a_title" placeholder="e.g. Operation Safe Corridor">
            </div>
            <div class="form-group">
                <label class="form-label">Role</label>
                <input class="form-input" id="a_role" placeholder="e.g. Infantry Commander">
            </div>
            <div class="form-group">
                <label class="form-label">Location</label>
                <input class="form-input" id="a_location" placeholder="e.g. Borno State">
            </div>
            <div class="form-group">
                <label class="form-label">Type</label>
                <select class="form-select" id="a_type">
                    ${['Regular','Deployment','Training','Special Operation','Attached','Exchange'].map(t => `<option>${t}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Status</label>
                <select class="form-select" id="a_status">
                    <option>Active</option><option>Completed</option><option>Terminated</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Start Date <span class="req">*</span></label>
                <input class="form-input" type="date" id="a_startDate">
            </div>
            <div class="form-group">
                <label class="form-label">End Date</label>
                <input class="form-input" type="date" id="a_endDate">
            </div>
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">Commanding Officer</label>
                <input class="form-input" id="a_co">
            </div>
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">Notes</label>
                <textarea class="form-textarea" id="a_notes" rows="2"></textarea>
            </div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:16px">
            <button class="btn btn-ghost" onclick="app.closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="app._saveAssignment()"><i class="fas fa-save"></i> Save</button>
        </div>`);
    }

    async _saveAssignment () {
        const pid = parseInt(document.getElementById('a_personnelId').value);
        const title = document.getElementById('a_title').value;
        if (!pid || !title) { this.toast('Please fill required fields.', 'error'); return; }
        await this.db.add('assignments', {
            personnelId: pid,
            assignmentTitle: title,
            role:            document.getElementById('a_role').value,
            location:        document.getElementById('a_location').value,
            assignmentType:  document.getElementById('a_type').value,
            status:          document.getElementById('a_status').value,
            startDate:       document.getElementById('a_startDate').value,
            endDate:         document.getElementById('a_endDate').value,
            commandingOfficer: document.getElementById('a_co').value,
            notes:           document.getElementById('a_notes').value,
        });
        this.toast('Assignment saved.', 'success');
        this.closeModal();
        await this.navigateTo('assignments');
    }

    /* ═══════════════════════════════════════════════════
       ADD REVIEW MODAL
       ═══════════════════════════════════════════════════ */
    async openAddReviewModal () {
        const pers = await this.db.getAll('personnel');
        this.openModal('Add Performance Review', `
        <div class="form-grid form-grid-2">
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">Personnel <span class="req">*</span></label>
                <select class="form-select" id="r_pid">
                    <option value="">-- Select --</option>
                    ${pers.map(p => `<option value="${p.id}">${p.fullName} (${p.rank})</option>`).join('')}
                </select>
            </div>
            <div class="form-group"><label class="form-label">Review Period Start</label><input class="form-input" type="date" id="r_ps"></div>
            <div class="form-group"><label class="form-label">Review Period End</label><input class="form-input" type="date" id="r_pe"></div>
            <div class="form-group"><label class="form-label">Review Date</label><input class="form-input" type="date" id="r_date" value="${new Date().toISOString().slice(0,10)}"></div>
            <div class="form-group"><label class="form-label">Review Type</label>
                <select class="form-select" id="r_type">${['Annual','Semi-Annual','Special','Pre-Deployment','Post-Deployment'].map(t=>`<option>${t}</option>`).join('')}</select>
            </div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Reviewer Name</label><input class="form-input" id="r_reviewer"></div>
            <div class="form-group"><label class="form-label">Reviewer Rank</label><input class="form-input" id="r_rank"></div>
            <div class="form-group"><label class="form-label">Overall Rating</label>
                <select class="form-select" id="r_rating">${['Outstanding','Excellent','Good','Satisfactory','Needs Improvement','Unsatisfactory'].map(r=>`<option>${r}</option>`).join('')}</select>
            </div>
            <div class="form-group"><label class="form-label">Overall Score (0-10)</label><input class="form-input" type="number" min="0" max="10" step="0.1" id="r_score"></div>
            <div class="form-group"><label class="form-label">Leadership (1-10)</label><input class="form-input" type="number" min="1" max="10" id="r_lead"></div>
            <div class="form-group"><label class="form-label">Tactical (1-10)</label><input class="form-input" type="number" min="1" max="10" id="r_tact"></div>
            <div class="form-group"><label class="form-label">Physical Fitness (1-10)</label><input class="form-input" type="number" min="1" max="10" id="r_fit"></div>
            <div class="form-group"><label class="form-label">Discipline (1-10)</label><input class="form-input" type="number" min="1" max="10" id="r_disc"></div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Strengths</label><textarea class="form-textarea" id="r_strengths" rows="2"></textarea></div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Areas for Improvement</label><textarea class="form-textarea" id="r_improve" rows="2"></textarea></div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Recommendations</label><textarea class="form-textarea" id="r_rec" rows="2"></textarea></div>
            <div class="form-group"><label class="form-label"><input type="checkbox" id="r_promo" style="margin-right:6px"> Promotion Recommended</label></div>
            <div class="form-group"><label class="form-label"><input type="checkbox" id="r_comm" style="margin-right:6px"> Commendation Recommended</label></div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:16px">
            <button class="btn btn-ghost" onclick="app.closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="app._saveReview()"><i class="fas fa-save"></i> Save Review</button>
        </div>`, { wide: true });
    }

    async _saveReview () {
        const pid = parseInt(document.getElementById('r_pid').value);
        if (!pid) { this.toast('Select a personnel.', 'error'); return; }
        await this.db.add('reviews', {
            personnelId: pid,
            reviewPeriodStart: document.getElementById('r_ps').value,
            reviewPeriodEnd:   document.getElementById('r_pe').value,
            reviewDate:        document.getElementById('r_date').value,
            reviewType:        document.getElementById('r_type').value,
            reviewerName:      document.getElementById('r_reviewer').value,
            reviewerRank:      document.getElementById('r_rank').value,
            overallRating:     document.getElementById('r_rating').value,
            overallScore:      parseFloat(document.getElementById('r_score').value)||null,
            leadershipScore:   parseInt(document.getElementById('r_lead').value)||null,
            tacticalScore:     parseInt(document.getElementById('r_tact').value)||null,
            fitnessScore:      parseInt(document.getElementById('r_fit').value)||null,
            disciplineScore:   parseInt(document.getElementById('r_disc').value)||null,
            strengths:         document.getElementById('r_strengths').value,
            areasForImprovement: document.getElementById('r_improve').value,
            recommendations:   document.getElementById('r_rec').value,
            promotionRecommended:    document.getElementById('r_promo').checked,
            commendationRecommended: document.getElementById('r_comm').checked,
        });
        this.toast('Review saved.', 'success');
        this.closeModal();
        await this.navigateTo('reviews');
    }

    /* ═══════════════════════════════════════════════════
       ADD DEPLOYMENT MODAL
       ═══════════════════════════════════════════════════ */
    async openAddDeploymentModal () {
        const pers = await this.db.getAll('personnel');
        this.openModal('Add Deployment', `
        <div class="form-grid form-grid-2">
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">Personnel</label>
                <select class="form-select" id="d_pid"><option value="">-- Select --</option>
                ${pers.map(p=>`<option value="${p.id}">${p.fullName} (${p.rank})</option>`).join('')}</select>
            </div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Operation Name</label><input class="form-input" id="d_op"></div>
            <div class="form-group"><label class="form-label">Operation Code</label><input class="form-input" id="d_code"></div>
            <div class="form-group"><label class="form-label">Type</label>
                <select class="form-select" id="d_type">${['Counter-Terrorism','Peacekeeping','Border Security','Humanitarian','Training','Intelligence','Special Operations'].map(t=>`<option>${t}</option>`).join('')}</select>
            </div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Location</label><input class="form-input" id="d_loc"></div>
            <div class="form-group"><label class="form-label">Country</label><input class="form-input" id="d_country" value="Nigeria"></div>
            <div class="form-group"><label class="form-label">Role</label><input class="form-input" id="d_role"></div>
            <div class="form-group"><label class="form-label">Start Date</label><input class="form-input" type="date" id="d_start"></div>
            <div class="form-group"><label class="form-label">End Date</label><input class="form-input" type="date" id="d_end"></div>
            <div class="form-group"><label class="form-label">Status</label>
                <select class="form-select" id="d_status"><option>Active</option><option>Completed</option><option>Aborted</option></select>
            </div>
            <div class="form-group"><label class="form-label">Classification</label>
                <select class="form-select" id="d_class">${['Unclassified','Confidential','Secret','Top Secret'].map(c=>`<option>${c}</option>`).join('')}</select>
            </div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Commanding Officer</label><input class="form-input" id="d_co"></div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:16px">
            <button class="btn btn-ghost" onclick="app.closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="app._saveDeployment()"><i class="fas fa-save"></i> Save</button>
        </div>`);
    }

    async _saveDeployment () {
        const pid = parseInt(document.getElementById('d_pid').value);
        const op  = document.getElementById('d_op').value;
        if (!pid || !op) { this.toast('Fill required fields.', 'error'); return; }
        await this.db.add('deployments', {
            personnelId: pid,
            operationName:   op,
            operationCode:   document.getElementById('d_code').value,
            deploymentType:  document.getElementById('d_type').value,
            deploymentLocation: document.getElementById('d_loc').value,
            country:         document.getElementById('d_country').value,
            role:            document.getElementById('d_role').value,
            startDate:       document.getElementById('d_start').value,
            endDate:         document.getElementById('d_end').value,
            status:          document.getElementById('d_status').value,
            classification:  document.getElementById('d_class').value,
            commandingOfficer: document.getElementById('d_co').value,
            injuriesSustained: false,
        });
        this.toast('Deployment record saved.', 'success');
        this.closeModal();
        await this.navigateTo('deployments');
    }

    /* ═══════════════════════════════════════════════════
       ADD MEDICAL MODAL
       ═══════════════════════════════════════════════════ */
    async openAddMedicalModal (personnelId = null) {
        const pers = await this.db.getAll('personnel');
        this.openModal('Add Medical Record', `
        <div class="form-grid form-grid-2">
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">Personnel</label>
                <select class="form-select" id="m_pid">
                    <option value="">-- Select --</option>
                    ${pers.map(p=>`<option value="${p.id}" ${personnelId===p.id?'selected':''}>${p.fullName} (${p.rank})</option>`).join('')}
                </select>
            </div>
            <div class="form-group"><label class="form-label">Blood Type</label>
                <select class="form-select" id="m_bt">${['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(t=>`<option>${t}</option>`).join('')}</select>
            </div>
            <div class="form-group"><label class="form-label">Height (cm)</label><input class="form-input" type="number" id="m_h"></div>
            <div class="form-group"><label class="form-label">Weight (kg)</label><input class="form-input" type="number" id="m_w"></div>
            <div class="form-group"><label class="form-label">Fitness Level</label>
                <select class="form-select" id="m_fl">${['Excellent','Good','Satisfactory','Poor','Unfit'].map(f=>`<option>${f}</option>`).join('')}</select>
            </div>
            <div class="form-group"><label class="form-label">Fitness Score (/100)</label><input class="form-input" type="number" min="0" max="100" id="m_fs"></div>
            <div class="form-group"><label class="form-label">Medical Status</label>
                <select class="form-select" id="m_ms">${['Fit for Duty','Limited Duty','Medical Leave','Hospitalized','Unfit for Duty'].map(s=>`<option>${s}</option>`).join('')}</select>
            </div>
            <div class="form-group"><label class="form-label">Psychological Status</label>
                <select class="form-select" id="m_ps">${['Fit','Under Observation','Unfit','Conditionally Fit'].map(s=>`<option>${s}</option>`).join('')}</select>
            </div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Allergies</label><input class="form-input" id="m_al" placeholder="None if none"></div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Chronic Conditions</label><input class="form-input" id="m_cc" placeholder="None if none"></div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Current Medications</label><input class="form-input" id="m_cm" placeholder="None if none"></div>
            <div class="form-group"><label class="form-label">Last Medical Exam</label><input class="form-input" type="date" id="m_lme"></div>
            <div class="form-group"><label class="form-label">Next Medical Exam</label><input class="form-input" type="date" id="m_nme"></div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Examining Physician</label><input class="form-input" id="m_phy"></div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Notes</label><textarea class="form-textarea" id="m_notes" rows="2"></textarea></div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:16px">
            <button class="btn btn-ghost" onclick="app.closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="app._saveMedical()"><i class="fas fa-save"></i> Save</button>
        </div>`, { wide: true });
    }

    async _saveMedical () {
        const pid = parseInt(document.getElementById('m_pid').value);
        if (!pid) { this.toast('Select a personnel.', 'error'); return; }
        await this.db.add('medical', {
            personnelId:        pid,
            bloodType:          document.getElementById('m_bt').value,
            heightCm:           parseFloat(document.getElementById('m_h').value)||null,
            weightKg:           parseFloat(document.getElementById('m_w').value)||null,
            fitnessLevel:       document.getElementById('m_fl').value,
            fitnesScore:        parseInt(document.getElementById('m_fs').value)||null,
            medicalStatus:      document.getElementById('m_ms').value,
            psychologicalStatus:document.getElementById('m_ps').value,
            allergies:          document.getElementById('m_al').value,
            chronicConditions:  document.getElementById('m_cc').value,
            currentMedications: document.getElementById('m_cm').value,
            lastMedicalExam:    document.getElementById('m_lme').value,
            nextMedicalExam:    document.getElementById('m_nme').value,
            examininingPhysician:document.getElementById('m_phy').value,
            notes:              document.getElementById('m_notes').value,
        });
        this.toast('Medical record saved.', 'success');
        this.closeModal();
        await this.navigateTo('medical');
    }

    /* ═══════════════════════════════════════════════════
       ADD BIOMETRIC MODAL
       ═══════════════════════════════════════════════════ */
    async openAddBiometricModal (personnelId = null) {
        const pers = await this.db.getAll('personnel');
        this.openModal('Register Biometric Data', `
        <div class="form-grid form-grid-2">
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">Personnel</label>
                <select class="form-select" id="b_pid">
                    <option value="">-- Select --</option>
                    ${pers.map(p=>`<option value="${p.id}" ${personnelId===p.id?'selected':''}>${p.fullName} (${p.rank})</option>`).join('')}
                </select>
            </div>
            <div class="form-group"><label class="form-label"><input type="checkbox" id="b_fp" style="margin-right:6px"> Fingerprints Captured (all 10)</label></div>
            <div class="form-group"><label class="form-label"><input type="checkbox" id="b_fa" style="margin-right:6px"> Facial Recognition Scan</label></div>
            <div class="form-group"><label class="form-label"><input type="checkbox" id="b_re" style="margin-right:6px"> Retinal Scans (both eyes)</label></div>
            <div class="form-group"><label class="form-label">Scan Date</label><input class="form-input" type="date" id="b_date" value="${new Date().toISOString().slice(0,10)}"></div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Verified By</label><input class="form-input" id="b_by" value="Biometrics Unit, DHQ"></div>
        </div>
        <div style="background:#f0fdf4;border:1px solid var(--green);border-radius:var(--r);padding:12px;margin-top:12px;font-size:12px;color:#065f46">
            <i class="fas fa-lock" style="margin-right:6px"></i>
            All biometric data is encrypted and stored securely. Actual biometric payloads are integrated with the secure authentication gateway.
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:16px">
            <button class="btn btn-ghost" onclick="app.closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="app._saveBiometric()"><i class="fas fa-save"></i> Save</button>
        </div>`);
    }

    async _saveBiometric () {
        const pid = parseInt(document.getElementById('b_pid').value);
        if (!pid) { this.toast('Select a personnel.', 'error'); return; }
        const scanDate = document.getElementById('b_date').value;
        await this.db.add('biometric', {
            personnelId:        pid,
            fingerprintsComplete: document.getElementById('b_fp').checked,
            facialComplete:     document.getElementById('b_fa').checked,
            retinalComplete:    document.getElementById('b_re').checked,
            facialScanDate:     document.getElementById('b_fa').checked ? scanDate : null,
            retinalScanDate:    document.getElementById('b_re').checked ? scanDate : null,
            lastVerified:       scanDate,
            verifiedBy:         document.getElementById('b_by').value,
        });
        this.toast('Biometric data registered.', 'success');
        this.closeModal();
        await this.navigateTo('biometric');
    }

    /* ═══════════════════════════════════════════════════
       ADD DOCUMENT MODAL
       ═══════════════════════════════════════════════════ */
    async openAddDocumentModal (personnelId = null) {
        const pers = await this.db.getAll('personnel');
        this.openModal('Upload Document', `
        <div class="form-grid form-grid-2">
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">Personnel</label>
                <select class="form-select" id="doc_pid">
                    <option value="">-- Select --</option>
                    ${pers.map(p=>`<option value="${p.id}" ${personnelId===p.id?'selected':''}>${p.fullName} (${p.rank})</option>`).join('')}
                </select>
            </div>
            <div class="form-group"><label class="form-label">Document Type</label>
                <select class="form-select" id="doc_type">${['National ID','Service ID','Passport','Birth Certificate','Educational Certificate','Training Certificate','Medical Certificate','Award Certificate','Service Record','Other'].map(t=>`<option>${t}</option>`).join('')}</select>
            </div>
            <div class="form-group" style="grid-column:span 2"><label class="form-label">Document Title</label><input class="form-input" id="doc_title"></div>
            <div class="form-group"><label class="form-label">Document Number</label><input class="form-input" id="doc_num"></div>
            <div class="form-group"><label class="form-label">Issuing Authority</label><input class="form-input" id="doc_auth"></div>
            <div class="form-group"><label class="form-label">Issue Date</label><input class="form-input" type="date" id="doc_issue"></div>
            <div class="form-group"><label class="form-label">Expiry Date</label><input class="form-input" type="date" id="doc_exp"></div>
            <div class="form-group"><label class="form-label"><input type="checkbox" id="doc_verified" style="margin-right:6px"> Document Verified</label></div>
            <div class="form-group" style="grid-column:span 2">
                <label class="form-label">File (reference name)</label>
                <input class="form-input" id="doc_file" placeholder="e.g. service_id_john_doe.pdf">
            </div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:16px">
            <button class="btn btn-ghost" onclick="app.closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="app._saveDocument()"><i class="fas fa-save"></i> Save</button>
        </div>`);
    }

    async _saveDocument () {
        const pid = parseInt(document.getElementById('doc_pid').value);
        if (!pid) { this.toast('Select a personnel.', 'error'); return; }
        await this.db.add('documents', {
            personnelId:      pid,
            documentType:     document.getElementById('doc_type').value,
            documentTitle:    document.getElementById('doc_title').value,
            documentNumber:   document.getElementById('doc_num').value,
            issuingAuthority: document.getElementById('doc_auth').value,
            issueDate:        document.getElementById('doc_issue').value,
            expiryDate:       document.getElementById('doc_exp').value,
            isVerified:       document.getElementById('doc_verified').checked,
            verifiedBy:       document.getElementById('doc_verified').checked ? 'System Admin' : null,
            fileName:         document.getElementById('doc_file').value,
        });
        this.toast('Document saved.', 'success');
        this.closeModal();
        await this.navigateTo('documents');
    }

    /* ═══════════════════════════════════════════════════
       ADVANCED ACTIONS
       ═══════════════════════════════════════════════════ */
    async exportData () {
        const data = await this.db.exportAll();
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href     = url;
        a.download = `army_pms_backup_${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.toast('Data exported successfully.', 'success');
    }

    async importData (e) {
        const file = e.target.files[0];
        if (!file) return;
        const text = await file.text();
        try {
            const data = JSON.parse(text);
            this.confirm('Import Data', 'This will overwrite all existing data. Continue?', async () => {
                const stores = Object.keys(data);
                for (const store of stores) {
                    await this.db.clearStore(store);
                    for (const item of data[store]) {
                        delete item.id;
                        await this.db.add(store, item);
                    }
                }
                this.toast('Data imported successfully.', 'success');
                await this.navigateTo('dashboard');
            });
        } catch (err) {
            this.toast('Invalid backup file.', 'error');
        }
    }

    showDbInfo () {
        this.openModal('Database Schema', `
        <div style="background:#0f1b2d;color:#e6edf3;padding:16px;border-radius:var(--r);font-family:monospace;font-size:12px;overflow-x:auto;white-space:pre-wrap">
Tables:
  personnel         — Core personnel profiles (biographical, contact, NOK, status)
  biometric_data    — Fingerprints, facial, retinal scan references (encrypted)
  medical_records   — Health stats, fitness, psychological evaluations
  assignment_history— All past and current unit assignments
  performance_reviews—Evaluation scores, ratings, commendations
  service_records   — Awards, commendations, disciplinary actions
  deployment_records— Operational deployment history
  personal_documents— Document metadata and secure file references
  availability_logs — Status change audit trail
  system_users      — Authentication and role management
  audit_log         — Full database activity audit trail

See sql/schema.sql for full DDL with all columns, indices and FK constraints.
        </div>`);
    }

    async resetDatabase () {
        this.confirm('Reset Database', 'This will permanently delete ALL data and reload sample data. This cannot be undone.', async () => {
            const stores = ['personnel','assignments','reviews','medical','biometric','documents','deployments','serviceRecords','availabilityLogs'];
            for (const s of stores) await this.db.clearStore(s);
            await this._seedIfEmpty();
            this.toast('Database reset to defaults.', 'warn');
            await this.navigateTo('dashboard');
            this._applyPermissions();
        });
    }

    /* ─── Helpers ────────────────────────────────────── */
    _statusClass (status) {
        const map = {
            'Active': 'active',
            'Deployed': 'deployed',
            'On Leave': 'on-leave',
            'Injured': 'injured',
            'Training': 'training',
            'Retired': 'retired',
            'AWOL': 'awol',
        };
        return map[status] || 'active';
    }
}

/* ── Bootstrap ─────────────────────────────────────────── */
const app = new PersonnelManagementApp();
document.addEventListener('DOMContentLoaded', () => app.init().catch(console.error));
