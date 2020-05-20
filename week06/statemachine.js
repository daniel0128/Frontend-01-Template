function abababxMatch(string) {
    let state = start;
    for (let c of string) {
        // console.log(c)
        state = state(c)
    }
    return state === end;
}

function start(c) {
    // console.log('start state')
    if (c == 'a') {
        // return end
        return foundA1;
    } else {
        return start;
    }
}

function foundA1(c) {
    if (c == 'b') {
        return foundB1;
    } else {
        return start(c);
    }
}

function foundB1(c) {
    if (c == 'a'){
        return foundA2;
    } else {
        return start(c);
    }
}

function foundA2(c) {
    if (c === 'b') {
        return foundB2;
    } else {
        return start(c);
    }
}

function foundB2(c) {
    if (c == 'a') {
        return foundA3;
    } else {
        return start(c);
    }
}

function foundA3(c) {
    if (c == 'b') {
        return foundB3;
    } else {
        return start(c);
    }
}

function foundB3(c) {
    if (c == 'x') {
        return end;
    } else {
        return foundB2(c)
    }
}

function end(c) {
    return end
}

function match(pattern, string) {
    let m = pattern.length;
    let n = string.length;
    let lps = longestPrefixSuffix(pattern);
    let i = 0;
    let j = 0;
    while(i < n) {
        if(pattern.charAt(j) == string.charAt(i)) {
            i++;
            j++;
        }
        if (j == m) {
            return true;
        } 
        if (j<m && i< n && pattern.charAt(j) != string.charAt(i)) {
            if (j!=0) {
                j = lps[j-1]
            } else {
                i++
            }
        }
    }
    return false;
    // return string.indexOf(pattern) >= 0;
}

function longestPrefixSuffix(pattern) {
    let l = pattern.length;
    let lps = new Array(l);
    lps.fill(0);
    let j = 0, i = 1;
    while (i < l) {
        if (pattern.charAt(i) == pattern.charAt(j)) {
            j++;
            lps[i] = j;
            i++;
        } else {
            if (j!=0) {
                j = lps[j-1];
            } else {
                lps[i++] = 0
            }
        }
    }
    return lps;
}

void (function() {
    let match = abababxMatch('432abababababx123');
    console.log(match);
})();

void (function() {
    console.log(match('abababx', 'abababaaababcabcaabcabababababababx'));
})();