function find(source, pattern) {
    let table = new Array(pattern.length).fill(0);
    let k = 0
    for (let j = 1; j < pattern.length; j++) {
        if (pattern[j] === pattern[k]) {
            k++;
        } else {
            k = 0;
        }
        table[j] = k;
    }
// console.log(table)
// return
    let j = 0;
    for (let i = 0; i < source.length; i++) {
        if (source[i] === pattern[j]) {
            j ++
        } else {
            while (source[i] !== pattern[j] && j > 0) {
                j = table[j - 1];
            }
            if (source[i] === pattern[j]) {
                j++
            } else {
                j = 0
            }
        }

        if (j === pattern.length) 
            return true;
    }
    return false;
}