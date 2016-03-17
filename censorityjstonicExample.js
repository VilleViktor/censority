var cen = require("censorityjs");
var c = new cen();

var badWords = 'Fuck this shit up man. Im gonna through this fucker down the assfucking cliff motherfucker';

// storing badWords in c. 
c.censur(badWords);

// using c with different function .all .english .nrof etc etc

// callbackfunction
c.all(function(msg){
    console.log('1: ' + msg)
}); 

// not callback..
//var filteredBadWords = c.all();
//console.log('2: ' + filteredBadWords);

// nr of bad words
c.nrof(function(nr){
    console.log('3: Nr of bad words: ' + nr);
});

// censor by english
c.english(function(msg){
    console.log('4: ' + msg)
});

// censor by swedish
c.swedish(function(msg){
    console.log('5: ' + msg);
});

// custom words
var customWords = ['badWord1', 'badWord3',' bad' , 'Viktor','this','man','cliff'];
c.addCustomWord(customWords); // ad custom words
// now reuse badWords and try with custom words. 
c.custom(function(msg){
    console.log('6: ' + msg)
});

var newBadString = 'Just reuse the censorityjs-object.. Viktor this is your song lalala , cliff.';
c.censur(newBadString).all(function(msg){
    console.log('7: ' + msg);
});

