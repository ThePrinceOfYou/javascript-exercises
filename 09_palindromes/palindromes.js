function palindromes(str) {
    let format = /^[!@#$%^&*()_+\-=\[\]{} ;':"\\|,.<>\/?]*$/;
    str = str.toLowerCase();
    strNoSpecialCharacter = "";
    for (let i = 0; i < str.length; i++) {
        if (!(str[i].match(format))) {
            strNoSpecialCharacter += str[i];
        }
    }

    let strReversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (!(str[i].match(format))) {
            strReversed += str[i];
        }
    }

    return (strNoSpecialCharacter == strReversed);
};

// Do not edit below this line
module.exports = palindromes;
