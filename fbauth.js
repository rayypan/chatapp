import { Auth, authInstance, RTDB_USERS_ROOT } from './fbinit.js';
import * as rtdb from './fbrtdb.js';
import * as util from './util.js';

let userName = null;
let userUid = localStorage.getItem('userUid') || null;

Auth.onAuthStateChanged(authInstance, (user) => {
    if (!user) {
        console.log('fbauth.js: user not authenticated');
        return;
    }
    userUid = user.uid;
    if (!userName) rtdb.get(RTDB_USERS_ROOT, userUid, (data) => {
        userName = data?.name || null;
        console.log(`fbauth.js: onAuthStateChanged(): userName: ${userName}`);
    });
});

export const getName = function() {
    return userName;
}

export const getUid = function() {
    return userUid;
}

export const authenticate = function(email, name) {
    Auth.signInAnonymously(authInstance).then(({ user }) => {
        userUid = user.uid;
        localStorage.setItem('userUid', userUid);
        rtdb.set(RTDB_USERS_ROOT, userUid, { email, name }, () => {
            console.log(`fbauth.js: authenticate::rtdb.set(): success`);
            if (!userName) rtdb.get(RTDB_USERS_ROOT, userUid, (data) => {
                userName = data?.name || null;
                console.log(`fbauth.js: authenticate(): userName: ${userName}`);
            });
        });
        console.log(`fbauth.js: authenticate(): success: uid: ${userUid}`);
    }).catch((error) => {
        console.log(`fbauth.js: authenticate('${email}', '${name}'): error: ${error}`);
    });
}

export const isAuthenticated = function() {
    return null != userUid;
}

console.log('fbauth.js loaded');
