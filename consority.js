var lang = require('./language/languages').language;
lang.customWords = [];


// check if wants to do by callback or not!
function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var gatherAll = function(lang){
    var all = Object.keys(lang).map(function(value, index) {
        return lang[value];
    });
    return [].concat.apply([], all);
};




var regex = function(words){
    return new RegExp(words.join("|"), "gi");
};

var checkWords = function(message,language){
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
    return isFunction(c) ? c(checkWords(this.msg,badWords)) : checkWords(this.msg,badWords);
};


censority.prototype.swedish = function (c) {
    return isFunction(c) ? c(checkWords(this.msg,lang.swedish)) : checkWords(this.msg,lang.swedish);
};


censority.prototype.english = function (c) {
    return isFunction(c) ? c(checkWords(this.msg,lang.english)) : checkWords(this.msg,lang.english);
};

censority.prototype.custom = function (c) {
    return isFunction(c) ? c(checkWords(this.msg,lang.customWords)) : checkWords(this.msg,lang.customWords);
};

censority.prototype.addCustomWord = function(word){
    console.log(typeof word);
    if(typeof word === 'object'){
       word.forEach(function(w){
           lang.customWords.push(w);
       })
    } else if(typeof word === 'string' || 'number'){
        lang.customWords.push(word);
    } else{
      return console.log(word + 'is not object, string nor number!')
    }
    badWords = gatherAll(lang);
};


/*
// How to use. Example.

var testString = "Fuck this shit up man! Boy. You can't do shit.You know That right??? Ja jävlar vad coolt. Fan ta detta alltså";

// using callback function :
new censority(testString).all(function(msg){
});

// or just using sync return :
var s = new censority(testString).all();

// both's answer :
// **** this ***t up man! Boy. You can't do ***t.You know That right??? Ja *****r vad coolt. *** ta detta alltså

var s2 = new censority(testString).swedish();
console.log(s2);
// Fuck this shit up man! Boy. You can't do shit.You know That right??? Ja *****r vad coolt. *** ta detta alltså

var s3 = new censority(testString).english();
console.log(s3);
//**** this ***t up man! Boy. You can't do ***t.You know That right??? Ja jävlar vad coolt. Fan ta detta alltså
*/
