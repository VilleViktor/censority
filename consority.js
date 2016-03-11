var lang = require('./language/languages').language;
lang.customWords = [];


// check if wants to do by callback or not!
function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var gatherAll = function (lang) {
    var all = Object.keys(lang).map(function (value, index) {
        return lang[value];
    });
    return [].concat.apply([], all);
};


var regex = function (words) {
    return new RegExp(words.join("|"), "gi");
};

var checkWords = function (message, language) {
    return message.replace(regex(language), function (match) {
        var stars = '';
        for (var i = 0; i < match.length; i++) {
            stars += '*';
        }
        return stars;
    });
};

var badWords = gatherAll(lang);


var censority = function (msg) {
    this.msg = msg;
};

censority.prototype.all = function (c) {
    return isFunction(c) ? c(checkWords(this.msg, badWords)) : checkWords(this.msg, badWords);
};


censority.prototype.swedish = function (c) {
    return isFunction(c) ? c(checkWords(this.msg, lang.swedish)) : checkWords(this.msg, lang.swedish);
};


censority.prototype.english = function (c) {
    return isFunction(c) ? c(checkWords(this.msg, lang.english)) : checkWords(this.msg, lang.english);
};

censority.prototype.custom = function (c) {
    return isFunction(c) ? c(checkWords(this.msg, lang.customWords)) : checkWords(this.msg, lang.customWords);
};

censority.prototype.censur = function (msg) {
    return new censority(msg);
};


censority.prototype.addCustomWord = function (word) {
    console.log(typeof word);
    if (typeof word === 'object') {
        word.forEach(function (w) {
            lang.customWords.push(w);
        })
    } else if (typeof word === 'string' || 'number') {
        lang.customWords.push(word);
    } else {
        return console.log(word + 'is not object, string nor number!')
    }

    badWords = gatherAll(lang);
};


exports = module.exports = censority;
