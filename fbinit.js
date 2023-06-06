import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import * as _Fbdb from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js';
import * as _Auth from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

// firebase init
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    // defaults
    apiKey: 'AIzaSyAvjWUfHZfJIbc3vUhtqwEasjdX6bfYz78',
    authDomain: 'rayypan-chatapp.firebaseapp.com',
    projectId: 'rayypan-chatapp',
    storageBucket: 'rayypan-chatapp.appspot.com',
    messagingSenderId: '727355186020',
    appId: '1:727355186020:web:e9b3c9b9cf7ccf2ae03871',
    // customised
    authDomain: 'rayypan.github.io/chatapp',
    databaseURL: 'https://rayypan-chatapp-default-rtdb.asia-southeast1.firebasedatabase.app',
    messagingSenderId: '809208104657',
    appId: '1:809208104657:web:b251dc9676fa16bf1ba7f0',
};

// If hosted on localhost, use database at localhost
/* if (/localhost|127\.0\.0\.1/i.test(location.href))
    config.databaseURL = 'http://localhost:9000/?ns=rayypan-chatapp'; */

// Initialize Firebase
const app = initializeApp(config);
export const dbInstance = _Fbdb.getDatabase(app);
export const authInstance = _Auth.getAuth(app);

export const Fbdb = _Fbdb;
export const Auth = _Auth;

/* Seperates roots for preview and production databases.
 * This code checks if the URL is the production URL and accordingly sets the
 * database root.
 * Production URLs is https://rayypan.github.io/chatapp
 */
const ROOT = (!/rayypan.github.io\/chatapp/i.test(location.href) ? '/preview' : '/production');

export const RTDB_USERS_ROOT = ROOT + '/aa14ddd9-users';
export const RTDB_ROOMS_ROOT = ROOT + '/b9d6cc89-rooms';
export const RTDB_CHATS_ROOT = ROOT + '/ce441190-chats';

console.log('fbinit.js loaded');
