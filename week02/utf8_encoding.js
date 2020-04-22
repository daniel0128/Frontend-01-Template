/**
 * Front end training's homework for week02 
 * @author SW 
 * daniel0128.git.com
 * about unicode and utf:
 * http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html
 * an excellent tool for transfering unicode to utf-8:
 * https://onlineunicodetools.com/convert-unicode-to-utf8
*/

/**
 * encode a whole string to utf(endian not implemented)
 * @param {string} str string to encode
 */
function UTF8_Encoding(str) {
    // this will not work when a single unicode has a too large codepoint, eg, '🧙' will split to 2 chars
    // let charArr = str.split('').map(ch => ch.codePointAt(0));

    let charArr = [];
    for (let cp of str) {
        charArr = charArr.concat(unicodeToUTF8(cp.codePointAt(0)));
    }
    return new Uint8Array(charArr).buffer;
}

/**
 * encode single unicode to utf-8
 * @param {Number} code 
 * @returns {Array} 
 */
function unicodeToUTF8(code) {
    let utfArray = [];
    if (code >=0 && code <= 0x7f) {
        // if code is 7 bits long or shorter, directly push the code to array
        utfArray.push(code);
    } else if (code >=0x80 && code<=0x7ff) {
        // if code is 7 ~ 15 bits long
        // one way to do:
        let remain = code >> 5; 
        remain |= 3<<7;
        utfArray.push(remain);
        code &= 0b111111;
        code |= 1<<7;
        utfArray.push(code);
    } else if (code >= 0x800 && code<= 0xffff) {
        // if code is 3 bytes long:
        // another way to do(convert to string)
        let codes = code.toString(2).padStart(15, '0').replace(/(\d)(?=(?:\d{6})+$)/g, '$1 ').split(' ');  // pad string to length of 15 and split every 6 chars
        utfArray.push(parseInt(codes[0],2)|(7<<5));
        utfArray.push(parseInt(codes[1],2) | 1 <<7);
        utfArray.push(parseInt(codes[2],2) | 1<< 7);
    } else if (code>=0x10000 && code<=0x10ffff) {
        // if code is 4 bytes long:
        code.toString(2).padStart(23, '0').replace(/(\d)(?=(?:\d{6})+$)/g, '$1,').split(',')
        .map((code, i) => i === 0? utfArray.push(parseInt(code, 2) | 15 << 4).toString(2) : utfArray.push(parseInt(code,2) | 1 << 7).toString(2));
    }

    return utfArray;
}

Array.prototype.toString = Uint8Array.prototype.toString = function() {
    let arr = [];
    this.forEach(v => arr.push(v.toString(16)));
    return '[' + arr.join(', ') +']';
}
