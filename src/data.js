import Dexie from 'dexie'

export const getPPID = () => {
    return window.localStorage.getItem('PPID')
}

export const savePPID = (id) => {
    return window.localStorage.setItem('PPID', id)
}

export const initDexieDB = () => {
    const db = new Dexie('KidTrang')
    window.db = db

    db.version(1).stores({ profile: 'name, promptPayId' })
    db.open().catch((error) => console.warn('Database open error', error))
}