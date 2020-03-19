class VigenereCipheringMachine {
    a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    direct = true;
    constructor(direct) {
        if(direct !== undefined) this.direct = direct;
    }

    encrypt(str, key) {
        if(str === undefined || key === undefined) throw 'Not implemented';
        console.log(str + ' - ' + key);
        str = str.toUpperCase();
        key = key.toUpperCase();
        let iStr;
        let iKey;
        let result = '';
        let resultReverse = '';
        for(let i = 0, j = 0; i < str.length; i++) {
            if('A' <= str[i] && str[i] <= 'Z') {
                if(j < key.length) {
                    iStr = this.a.indexOf(str[i]);
                    iKey = this.a.indexOf(key[j]);
                } else {
                    iStr = this.a.indexOf(str[i]);
                    iKey = this.a.indexOf(key[j % key.length]);
                }
                result += this.a[(iStr + iKey) % 26];
                j++;
            } else {
                result += str[i];
            }
        }
        if(this.direct === false) {
            for(let i = result.length; i > -1; i--) {
                resultReverse += result[i];
            }
            return resultReverse;
        }
        return result;
    }

    decrypt(str, key) {
        if(str === undefined || key === undefined) throw 'Not implemented';
        str = str.toUpperCase();
        key = key.toUpperCase();
        let iStr;
        let iKey;
        let result = '';
        let resultReverse = '';
        for(let i = 0, j = 0; i < str.length; i++) {
            if('A' <= str[i] && str[i] <= 'Z') {
                if(j < key.length) {
                    iStr = this.a.indexOf(str[i]);
                    iKey = this.a.indexOf(key[j]);
                } else {
                    iStr = this.a.indexOf(str[i]);
                    iKey = this.a.indexOf(key[j % key.length]);
                }
                result += this.a[(iStr + 26 - iKey) % 26];
                j++;
            } else {
                result += str[i];
            }
        }
        if(this.direct === false) {
            for(let i = result.length; i > -1; i--) {
                resultReverse += result[i];
            }
            return resultReverse;
        }
        return result;
    }
}

module.exports = VigenereCipheringMachine;
