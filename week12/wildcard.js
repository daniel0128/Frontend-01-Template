function wildcard(source, pattern) {
    let starCount = 0;

    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] ==="*") {
            starCount ++;
        }
    }

    if(starCount ===0 ) {
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] !== source[i] && pattern[i] !== '?') {
                return false;
            }
        }
        return
    }

    let i = 0
    
    for (; pattern[i] !== '*'; i++) {
        if (pattern[i] !== source[i] && pattern[i] !== '?') {
            return false;
        }
    }
    let lastIndex = i;

    for (let p =0; p < starCount - 1; p++) {
        i++;
        let subPattern = "";
        while(pattern[i] !== '*') {
            subPattern += pattern[i];
            i++;
        }
        let reg = new RegExp(subPattern.replace(/\?/g, "[\\s\\S]"), "g");
        reg.lastIndex = lastIndex;

        reg.exec(source);

        lastIndex = reg.lastIndex

    }

    for (let j = 0; j <= source.length - lastIndex && pattern[pattern.length - j] !== "*"; j++) {
        if (pattern[pattern.length - j] !== source[source.length - j] && pattern[pattern.length - j] !== '?') {
            return false;

        }
    }
    return true;
}