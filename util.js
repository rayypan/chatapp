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

/**
 * Returns UTC timestamp in ms (since Unix epoch).
 * @return {Number} Milliseconds time since Unix epoch.
 */
export const getTimeStampUTC = () => Date.now();

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
