import {
    Fbdb,
    dbInstance,
    RTDB_USERS_ROOT,
    RTDB_ROOMS_ROOT,
    RTDB_CHATS_ROOT } from './fbinit.js';

import * as util from './util.js';

export const set = (root, key, data={}, onSet) => {
    Fbdb.set(Fbdb.ref(dbInstance, root + '/' + key), data).then(() => {
        onSet && onSet();
    }).catch((error) => {
        console.error(`fbrtdb.js: set(): ${error}`);
    });
}

export const update = (root, key, data={}, onUpdate) => {
    Fbdb.update(Fbdb.ref(dbInstance, root + '/' + key), data).then(() => {
        onUpdate && onUpdate();
    }).catch((error) => {
        console.error(`fbrtdb.js: update(): ${error}`);
    });
}

export const get = (root, key, onGet) => {
    Fbdb.get(Fbdb.child(Fbdb.ref(dbInstance), root + '/' + key)).then((snapshot) => {
        if (!onGet) return;
        if (snapshot.exists()) onGet(snapshot);
        else {
            console.error(`fbrtdb.js: get(): empty snapshot for '${key}'`);
            onGet(null);
        }
    }).catch((error) => {
        console.error(`fbrtdb.js: get(): ${error}`);
    });
}

export const remove = (root, key, onRemove) => {
    get(key, (data) => {
        Fbdb.set(Fbdb.ref(dbInstance, root + '/' + key), null).then(() => {
            onRemove && onRemove(data);
        }).catch((error) => {
            console.error(`fbrtdb.js: remove(): ${error}`);
        });
    });
}

export const listen = (root, key, onChange) => {
    
}

export const addToRoom = function(roomid, name) {
    get(RTDB_ROOMS_ROOT, roomid, (data) => {
        const arr = [ ...Array.from(data), name ];
        update(RTDB_ROOMS_ROOT, roomid, arr, () => {
            console.log(`fbrtdb.js: addToRoom('${roomid}', '${name}'): success`);
        });
    });
}

export const rmFromRoom = function(roomid, name) {
    get(RTDB_ROOMS_ROOT, roomid, (data) => {
        const arr = Array.from(data).filter((e) => e !== name);
        update(RTDB_ROOMS_ROOT, roomid, arr, () => {
            console.log(`fbrtdb.js: rmFromRoom('${roomid}', '${name}'): success`);
        });
    });
}

export const sendMsg = function(msg) {
    update(RTDB_CHATS_ROOT, roomid, {
        [util.getTimeStampUTC()]: {
            name: [util.getName()],
            uid: [util.getUid()],
            msg: util.encode(msg),
        }
    }, () => {
        console.log(`fbrtdb.js: sendMsg('${msg.subtr(0,10)}...'): success`);
    });
}

console.log('fbrtdb.js loaded');
