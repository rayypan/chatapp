import { dbInstance, RTDB_USERS_ROOT, RTDB_ROOMS_ROOT, RTDB_CHATS_ROOT } from 'fbinit.js';
import * as Rtdb from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

const set = (root, key, data={}, onSet) => {
    Rtdb.set(Rtdb.ref(dbInstance, root + '/' + key), data).then(() => {
        onSet && onSet();
    }).catch((error) => {
        console.error(`fbrtdb.js: set(): ${error}`);
    });
}

const update = (root, key, data={}, onUpdate) => {
    Rtdb.update(Rtdb.ref(dbInstance, root + '/' + key), data).then(() => {
        onUpdate && onUpdate();
    }).catch((error) => {
        console.error(`fbrtdb.js: update(): ${error}`);
    });
}

const get = (root, key, onGet) => {
    Rtdb.get(Rtdb.child(Rtdb.ref(dbInstance), root + '/' + key)).then((snapshot) => {
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

const remove = (root, key, onRemove) => {
    get(key, (data) => {
        Rtdb.set(Rtdb.ref(dbInstance, root + '/' + key), null).then(() => {
            onRemove && onRemove(data);
        }).catch((error) => {
            console.error(`fbrtdb.js: remove(): ${error}`);
        });
    });
}

const addToRoom = function(roomid, name) {
    get(RTDB_ROOMS_ROOT, roomid, (data) => {
        const arr = [ ...Array.from(data), name ];
        update(RTDB_ROOMS_ROOT, roomid, arr, () => {
            console.log(`fbrtdb.js: addToRoom('${roomid}', '${name}'): success`);
        });
    });
}

const rmFromRoom = function(roomid, name) {
    get(RTDB_ROOMS_ROOT, roomid, (data) => {
        const arr = [ ...Array.from(data), name ];
        update(RTDB_ROOMS_ROOT, roomid, arr, () => {
            console.log(`fbrtdb.js: addToRoom('${roomid}', '${name}'): success`);
        });
    });
}

const sendMsg = function() {
    
}

export const rtdb = {
    addToRoom,
    sendMsg,
};

console.log('fbrtdb.js loaded');
