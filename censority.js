var lang = require('./language/languages').language;

lang.cW  =  lang.customWords = [];
lang.swe =  lang.se     =   lang.swedish;
lang.eng =                  lang.english;
lang.es  =  lang.esp    =   lang.spanish;

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


censority.prototype.spanish  =   function (callback) {
    return isFunction(callback) ? callback(checkWords(this.msg, lang.spanish)) : checkWords(this.msg, lang.spanish);
};


censority.prototype.custom = function (callback) {
    return isFunction(callback) ? callback(checkWords(this.msg, lang.customWords)) : checkWords(this.msg, lang.customWords);
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
    // update lang.cW and badWords
    lang.cW = lang.customWords; 
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


// king of "main-function". Almost always start from here..
censority.prototype.censur = function (msg, func1, func2) {
    this.msg = msg;
   /* if(isFunction(func1)){ // func1 is a callbackfunction;

    }

    // func1 is telling us that there is something going on :P
    if(typeof lang[func1] !== 'undefined' && !isFunction(func2)){ 

    } 

    // func1 is telling us that there is something going on :P 
    // and func2 is a callbackfunction
    if(typeof lang[func1] !== 'undefined' && isFunction(func2)){ 

    } 
*/

    return new censority(msg);
};

// aliases
    
censority.prototype.swe = censority.prototype.SE = censority.prototype.swedish ;
censority.prototype.eng = censority.prototype.english;

censority.prototype.addCW = censority.prototype.addCustomWord;
censority.prototype.censor = censority.prototype.filter = censority.prototype.censur;

exports = module.exports = censority;
