/**
 * WARNING:
 * Before making modifications to this file, make absolutely sure that
 * you've used the functions and their respective flags (if any) properly.
 * These functions work for almost every webpage, so there are more chances
 * you've used something incorrectly.
 *
 * When making modifications, you also need to test out if the modified code
 * works for each and every webpage.
 */

export const KeyEvent = {
    DOM_VK_CANCEL: 3,
    DOM_VK_HELP: 6,
    DOM_VK_BACK_SPACE: 8,
    DOM_VK_TAB: 9,
    DOM_VK_CLEAR: 12,
    DOM_VK_RETURN: 13,
    DOM_VK_ENTER: 14,
    DOM_VK_SHIFT: 16,
    DOM_VK_CONTROL: 17,
    DOM_VK_ALT: 18,
    DOM_VK_PAUSE: 19,
    DOM_VK_CAPS_LOCK: 20,
    DOM_VK_ESCAPE: 27,
    DOM_VK_SPACE: 32,
    DOM_VK_PAGE_UP: 33,
    DOM_VK_PAGE_DOWN: 34,
    DOM_VK_END: 35,
    DOM_VK_HOME: 36,
    DOM_VK_LEFT: 37,
    DOM_VK_UP: 38,
    DOM_VK_RIGHT: 39,
    DOM_VK_DOWN: 40,
    DOM_VK_PRINTSCREEN: 44,
    DOM_VK_INSERT: 45,
    DOM_VK_DELETE: 46,
    DOM_VK_0: 48,
    DOM_VK_1: 49,
    DOM_VK_2: 50,
    DOM_VK_3: 51,
    DOM_VK_4: 52,
    DOM_VK_5: 53,
    DOM_VK_6: 54,
    DOM_VK_7: 55,
    DOM_VK_8: 56,
    DOM_VK_9: 57,
    DOM_VK_SEMICOLON: 59,
    DOM_VK_EQUALS: 61,
    DOM_VK_A: 65,
    DOM_VK_B: 66,
    DOM_VK_C: 67,
    DOM_VK_D: 68,
    DOM_VK_E: 69,
    DOM_VK_F: 70,
    DOM_VK_G: 71,
    DOM_VK_H: 72,
    DOM_VK_I: 73,
    DOM_VK_J: 74,
    DOM_VK_K: 75,
    DOM_VK_L: 76,
    DOM_VK_M: 77,
    DOM_VK_N: 78,
    DOM_VK_O: 79,
    DOM_VK_P: 80,
    DOM_VK_Q: 81,
    DOM_VK_R: 82,
    DOM_VK_S: 83,
    DOM_VK_T: 84,
    DOM_VK_U: 85,
    DOM_VK_V: 86,
    DOM_VK_W: 87,
    DOM_VK_X: 88,
    DOM_VK_Y: 89,
    DOM_VK_Z: 90,
    DOM_VK_CONTEXT_MENU: 93,
    DOM_VK_NUMPAD0: 96,
    DOM_VK_NUMPAD1: 97,
    DOM_VK_NUMPAD2: 98,
    DOM_VK_NUMPAD3: 99,
    DOM_VK_NUMPAD4: 100,
    DOM_VK_NUMPAD5: 101,
    DOM_VK_NUMPAD6: 102,
    DOM_VK_NUMPAD7: 103,
    DOM_VK_NUMPAD8: 104,
    DOM_VK_NUMPAD9: 105,
    DOM_VK_MULTIPLY: 106,
    DOM_VK_ADD: 107,
    DOM_VK_SEPARATOR: 108,
    DOM_VK_SUBTRACT: 109,
    DOM_VK_DECIMAL: 110,
    DOM_VK_DIVIDE: 111,
    DOM_VK_F1: 112,
    DOM_VK_F2: 113,
    DOM_VK_F3: 114,
    DOM_VK_F4: 115,
    DOM_VK_F5: 116,
    DOM_VK_F6: 117,
    DOM_VK_F7: 118,
    DOM_VK_F8: 119,
    DOM_VK_F9: 120,
    DOM_VK_F10: 121,
    DOM_VK_F11: 122,
    DOM_VK_F12: 123,
    DOM_VK_F13: 124,
    DOM_VK_F14: 125,
    DOM_VK_F15: 126,
    DOM_VK_F16: 127,
    DOM_VK_F17: 128,
    DOM_VK_F18: 129,
    DOM_VK_F19: 130,
    DOM_VK_F20: 131,
    DOM_VK_F21: 132,
    DOM_VK_F22: 133,
    DOM_VK_F23: 134,
    DOM_VK_F24: 135,
    DOM_VK_NUM_LOCK: 144,
    DOM_VK_SCROLL_LOCK: 145,
    DOM_VK_COMMA: 188,
    DOM_VK_PERIOD: 190,
    DOM_VK_SLASH: 191,
    DOM_VK_BACK_QUOTE: 192,
    DOM_VK_OPEN_BRACKET: 219,
    DOM_VK_BACK_SLASH: 220,
    DOM_VK_CLOSE_BRACKET: 221,
    DOM_VK_QUOTE: 222,
    DOM_VK_META: 224
};

/**
 * Returns UTC timestamp in ms (since Unix epoch).
 * @return {Number} Milliseconds time since Unix epoch.
 */
export const getTimeStampUTC = function() {
    return Date.now();
}

/**
 * Gets current time zone, date time or return a date object.
 * @param {Boolean} Optional, if false returns a date object
 * @return {String} Current date in Continent/City/YYYY-MM-DD @ HH:MM:SS format.
 * @return {Object} Date object (conditional).
 */
export const getLongDateTime = (long_time = true) => {
    let date_ob = new Date();
    if (!long_time) return date_ob;
    const date = ('0' + date_ob.getDate()).slice(-2);
    const months_array = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ];
    const month = months_array[date_ob.getMonth()];
    const year = date_ob.getFullYear();
    const hours = ('0' + date_ob.getHours()).slice(-2);
    const minutes = ('0' + date_ob.getMinutes()).slice(-2);
    const seconds = ('0' + date_ob.getSeconds()).slice(-2);
    
    return `${hours}:${minutes} ${month} ${date}, ${year} ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
}

/**
 * Get the name of the current browser.
 * @return {String} Name of current browser.
 */
export const getBrowser = () => {
    if (/Opera|OPR/.test(navigator.userAgent)) return 'opera';
    if (navigator.userAgent.includes('Chrome')) return 'chrome';
    if (navigator.userAgent.includes('Safari')) return 'safari';
    if (navigator.userAgent.includes('Firefox')) return 'firefox';
    if (navigator.userAgent.indexOf('MSIE') != -1 || !!document.documentMode == true) return 'IE';
    return 'unknown';
}

/**
 * Replace certain special characters of a string with 'ASCII[character_code]'.
 * @param {String} str The string to be encoded.
 * @return {String} The encoded string.
 */
export const encode = (str) => {
    let specialChars = '\n\r!"#$%&\'./<=>@[\\]{}';
    for (let character of specialChars) {
        str = str.replaceAll(character, `ASCII${character.charCodeAt(0)}`);
    }
    return str;
}

/**
 * Decode string from 'ASCII[character_code]' format to something more readable.
 * @param {String} str The string to be decoded.
 * @return {String} The decoded string.
 */
export const decode = (str) => {
    let specialChars = '\n\r!"#$%&\'./<=>@[\\]{}';
    for (let character of specialChars) {
        str = str.replaceAll(`ASCII${character.charCodeAt(0)}`, character);
    }
    return str;
}

/**
 * Returns an object comprising of current URL query fields and their values.
 * @param {Array} fields The fields whose values you need. Pass [] for all fields.
 * @param {String} querystr Optional, the query string. Default is location.search.
 * @return {Object} The query fields and their values. Values will always be Strings. For duplicate fields, an array of values is returned.
 */
export const getURLQuery = (fields, querystr = location.search) => {
    const Parameters = {};
    for (let item of querystr.split(/\?|\&/)) if (item) {
        if (item.split(/=/).length != 2) throw `Error: common.js: getURLQuery(): malformed URL parameter '${item}'`;
        let param = item.split(/=/)[0];
        let value = item.split(/=/)[1];
        if (!param || !value) continue;
        if (fields.length != 0 && !fields.includes(param)) continue;
        if (!Parameters.hasOwnProperty(param)) Parameters[param] = value;
        else if (Array.isArray(Parameters[param])) Parameters[param].push(value);
        else Parameters[param] = [Parameters[param], value];
    }
    return Parameters;
}

/**
 * Returns the value of a given query field of the current URL.
 * @param {String} field The field whose value you need.
 * @param {String} querystr Optional, the query string. Default is location.search.
 * @return {String} The value of the field.
 * @return {Array} If the query has duplicate fields.
 */
export const getURLQueryFieldValue = (field, querystr = location.search) => {
    let values = [];
    for (let item of querystr.split(/\?|\&/)) if (item) {
        if (item.split(/=/).length != 2) throw `Error: common.js: getURLQueryFieldValue(): malformed URL parameter '${item}'`;
        let param = item.split(/=/)[0];
        let value = item.split(/=/)[1];
        if (param && value && field.toLowerCase() == param.toLowerCase()) values.push(value);
    }
    return values.length > 0 ? (values.length == 1 ? values[0] : values) : undefined;
}

/**
 * Copy some text.
 * @param {String} str The string to be copied.
 */
export const copyPlainTxt = (copytext = '') => {
    copytext = copytext.replace(/<br>/g, '\n').replace(/<[^>]*>/g, '');
    navigator.clipboard.writeText(copytext).then(() => {
        // do nothing
    }).catch((error) => {
        console.error(`common.js: copyPlainTxt(): ${error}`);
    });
}

/**
 * Marker function.
 */
export const Marker = function() {
    let mark = 0;
    return (text = '') => {
        console.log(`MK ${mark++}: ${text}`);
    }
}

export const mark = Marker();

console.log('util.js loaded');
