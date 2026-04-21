/* ═══════════════════════════════════════════════════════════
   Nigerian Defence — Personnel Management System
   db.js  — IndexedDB persistence layer  v1.0
   ═══════════════════════════════════════════════════════════ */

class ArmyDB {
    constructor () {
        this.dbName    = 'NigerianDefencePMS';
        this.dbVersion = 1;
        this.db        = null;
    }

    /* ─── Open / Upgrade ─────────────────────────────────── */
    init () {
        return new Promise((resolve, reject) => {
            const req = indexedDB.open(this.dbName, this.dbVersion);

            req.onerror   = () => reject(req.error);
            req.onblocked = () => {
                console.warn('IndexedDB blocked — close other tabs and reload.');
                reject(new Error('Database blocked. Please close other tabs and refresh.'));
            };
            req.onsuccess = () => { this.db = req.result; resolve(this.db); };

            req.onupgradeneeded = (e) => {
                const db = e.target.result;

                /* personnel */
                if (!db.objectStoreNames.contains('personnel')) {
                    const s = db.createObjectStore('personnel', { keyPath: 'id', autoIncrement: true });
                    s.createIndex('serviceNumber', 'serviceNumber', { unique: true });
                    s.createIndex('fullName',      'fullName',      { unique: false });
                    s.createIndex('rank',          'rank',          { unique: false });
                    s.createIndex('status',        'availabilityStatus', { unique: false });
                    s.createIndex('unit',          'unit',          { unique: false });
                }

                /* assignments */
                if (!db.objectStoreNames.contains('assignments')) {
                    const s = db.createObjectStore('assignments', { keyPath: 'id', autoIncrement: true });
                    s.createIndex('personnelId', 'personnelId', { unique: false });
                    s.createIndex('status',      'status',      { unique: false });
                }

                /* reviews */
                if (!db.objectStoreNames.contains('reviews')) {
                    const s = db.createObjectStore('reviews', { keyPath: 'id', autoIncrement: true });
                    s.createIndex('personnelId', 'personnelId', { unique: false });
                }

                /* medical */
                if (!db.objectStoreNames.contains('medical')) {
                    const s = db.createObjectStore('medical', { keyPath: 'id', autoIncrement: true });
                    s.createIndex('personnelId', 'personnelId', { unique: false });
                }

                /* biometric */
                if (!db.objectStoreNames.contains('biometric')) {
                    const s = db.createObjectStore('biometric', { keyPath: 'id', autoIncrement: true });
                    s.createIndex('personnelId', 'personnelId', { unique: false });
                }

                /* documents */
                if (!db.objectStoreNames.contains('documents')) {
                    const s = db.createObjectStore('documents', { keyPath: 'id', autoIncrement: true });
                    s.createIndex('personnelId', 'personnelId', { unique: false });
                }

                /* deployments */
                if (!db.objectStoreNames.contains('deployments')) {
                    const s = db.createObjectStore('deployments', { keyPath: 'id', autoIncrement: true });
                    s.createIndex('personnelId', 'personnelId', { unique: false });
                    s.createIndex('status',      'status',      { unique: false });
                }

                /* serviceRecords */
                if (!db.objectStoreNames.contains('serviceRecords')) {
                    const s = db.createObjectStore('serviceRecords', { keyPath: 'id', autoIncrement: true });
                    s.createIndex('personnelId', 'personnelId', { unique: false });
                }

                /* availabilityLogs */
                if (!db.objectStoreNames.contains('availabilityLogs')) {
                    const s = db.createObjectStore('availabilityLogs', { keyPath: 'id', autoIncrement: true });
                    s.createIndex('personnelId', 'personnelId', { unique: false });
                }

                /* users (authentication) */
                if (!db.objectStoreNames.contains('users')) {
                    const s = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
                    s.createIndex('username', 'username', { unique: true });
                    s.createIndex('role',     'role',     { unique: false });
                }
            };
        });
    }

    /* ─── Generic CRUD helpers ───────────────────────────── */
    _tx (store, mode = 'readonly') {
        return this.db.transaction(store, mode).objectStore(store);
    }

    add (store, data) {
        return new Promise((res, rej) => {
            data.createdAt = data.createdAt || new Date().toISOString();
            data.updatedAt = new Date().toISOString();
            const req = this._tx(store, 'readwrite').add(data);
            req.onsuccess = () => res(req.result);
            req.onerror   = () => rej(req.error);
        });
    }

    put (store, data) {
        return new Promise((res, rej) => {
            data.updatedAt = new Date().toISOString();
            const req = this._tx(store, 'readwrite').put(data);
            req.onsuccess = () => res(req.result);
            req.onerror   = () => rej(req.error);
        });
    }

    delete (store, id) {
        return new Promise((res, rej) => {
            const req = this._tx(store, 'readwrite').delete(id);
            req.onsuccess = () => res();
            req.onerror   = () => rej(req.error);
        });
    }

    getAll (store) {
        return new Promise((res, rej) => {
            const req = this._tx(store).getAll();
            req.onsuccess = () => res(req.result);
            req.onerror   = () => rej(req.error);
        });
    }

    getById (store, id) {
        return new Promise((res, rej) => {
            const req = this._tx(store).get(id);
            req.onsuccess = () => res(req.result);
            req.onerror   = () => rej(req.error);
        });
    }

    getByIndex (store, indexName, value) {
        return new Promise((res, rej) => {
            const idx = this._tx(store).index(indexName);
            const req = idx.getAll(value);
            req.onsuccess = () => res(req.result);
            req.onerror   = () => rej(req.error);
        });
    }

    count (store) {
        return new Promise((res, rej) => {
            const req = this._tx(store).count();
            req.onsuccess = () => res(req.result);
            req.onerror   = () => rej(req.error);
        });
    }

    /* Export entire DB as JSON */
    async exportAll () {
        const stores = ['personnel','assignments','reviews','medical','biometric','documents','deployments','serviceRecords','availabilityLogs'];
        const out = {};
        for (const s of stores) out[s] = await this.getAll(s);
        return out;
    }

    /* Find user by username */
    async getUserByUsername (username) {
        return new Promise((res, rej) => {
            const idx = this._tx('users').index('username');
            const req = idx.get(username);
            req.onsuccess = () => res(req.result);
            req.onerror   = () => rej(req.error);
        });
    }

    /* Clear store */
    clearStore (store) {
        return new Promise((res, rej) => {
            const req = this._tx(store, 'readwrite').clear();
            req.onsuccess = () => res();
            req.onerror   = () => rej(req.error);
        });
    }
}
