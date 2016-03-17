var lang = require('./language/languages').language;

lang.cW  = lang.customWords = [];
lang.swe = lang.swedish;
lang.eng = lang.english;


// check if wants to do by callback or not!
function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var gatherAll = function (lang) {
    var all =  Object.keys(lang).map(function (value, index) {
            return lang[value];
        });
    return [].concat.apply([], all );
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

censority.prototype.all = function (callback) {
    return isFunction(callback) ? callback(checkWords(this.msg, badWords)) : checkWords(this.msg, badWords);
};


censority.prototype.swedish = function (callback) {
    return isFunction(callback) ? callback(checkWords(this.msg, lang.swedish)) : checkWords(this.msg, lang.swedish);
};


censority.prototype.english = function (callback) {
    return isFunction(callback) ? callback(checkWords(this.msg, lang.english)) : checkWords(this.msg, lang.english);
};

censority.prototype.custom = function (callback) {
    return isFunction(callback) ? callback(checkWords(this.msg, lang.customWords)) : checkWords(this.msg, lang.customWords);
};

censority.prototype.censur = function (msg) {
    this.msg = msg;
    return new censority(msg);
};


censority.prototype.addCustomWord = function (word) {
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


var nrOF = function(msg, language){
        return msg.match(regex(language));
}


// Get number of bad words in a sentance or word-list etcetc.. 
censority.prototype.nrof = function(language,callback){
    var nr;
    if(isFunction(language)) {
        nr = nrOF(this.msg,badWords);
        return language(nr.length);
    }
    if(typeof lang[language] !== 'undefined') nr =  nrOF(this.msg,lang[language]);
    else nr = nrOF(this.msg,badWords);

    return nr !== null ? (isFunction(callback) ? callback(nr.length) : nr.length) : (isFunction(callback) ? callback(0) : 0);

}

exports = module.exports = censority;
