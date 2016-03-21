# censorityjs

Censor language. 

I appreciate if people would help me expand the libraries for other languages. 

Right now there is a small library for swedish and a bigger one for english. 
Added a small library for some spannish words (I do not know any spanish so i used google-translate to 
get that library started).


## How to use
#### all();

```javascript
var testString = "Fuck this shit up man! Boy. You can't do shit.You know That right??? Ja jävlar vad coolt. Fan ta detta alltså";

var censority = require('censorityjs');

// using callback function :
new censority(testString).all(function(msg){
    console.log(msg);
});

// or just using sync return :
var s = new censority(testString).all();
console.log(s);

//both's answer :
//**** this ***t up man! Boy. You can't do ***t.You know That right??? Ja *****r vad coolt. *** ta detta alltså

// or by building a new censurity object by:

var cen = new censority();

// then you will have to call the function '.censur' when to censur an object. 

var censuredText = cen.censur('text to be censured').all();


```

#### by specific language :
```javascript
var testString = "Fuck this shit up man! Boy. You can't do shit.You know That right??? Ja jävlar vad coolt. Fan ta detta alltså";


// swedish version
var s = new censority(testString).swedish();
console.log(s);
//Fuck this shit up man! Boy. You can't do shit.You know That right??? Ja *****r vad coolt. *** ta detta alltså

//english version
var s3 = new censority(testString).english();
console.log(s3);
//**** this ***t up man! Boy. You can't do ***t.You know That right??? Ja jävlar vad coolt. Fan ta detta alltså


```

## Custom wordlist 
 To create a own word list and only use only that on.
 ```javascript 
 var censur = require('censorityjs');
 var cen = new censur();
 
 var arrayWithbadWords = ['badbad', 'very bad','extremly bad word'];
 cen.addCustomWord(arrayWithbadWords);

 // add just anoter word.
 cen.addCustomWord('This-word-is-bad');
 
 // then use the censurity-object with the built in function ".censur" as
 cen.censur('Text that should be censured').custom(function(msg){
    console.log(msg);
 });
 
 
 ```


 ## Nr of bad words
new feature. calculate number of bad words in a string.
 ```javascript 
// create new object
var cen = new censority();
cen.censur('bad-words-string!')
		.nrof('swe',	function(nr){	
			console.log(nr)
		});

cen.nrof(function(nr){
	console.log(nr);
});


 ```


## Versions
* 1.0.5: Removed unecessary "console.log" in swedish lib. Sorry for this inconvienience.  Also there is new aliases for shorter expressions, example  : swe = swedish . customWordlist = cW. 

* 1.0.4: Introduced consorityjs.nrof().  


#### Author: Viktor Larsson 
#### 
