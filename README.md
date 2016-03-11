# censority

Censor language. 

I appreciate if people would help me expand the libraries for other languages. 

Right now there is a small library for swedish and a bigger one for english. 

So when do you want to censor language? Let's say you have a "serious" blogg and some of the readers are commenting 
in a bad way. This is a way to sort out those words. Or you maybe just hate some swear words in some language ( not quite there yet though). Or maybe doing a project for kids etc etc etc....

## How to use
#### all();

```javascript
var testString = "Fuck this shit up man! Boy. You can't do shit.You know That right??? Ja jävlar vad coolt. Fan ta detta alltså";

var censority = require('censority');

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
 var censur = require('./censority');
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



#### Author: Viktor Larsson 
#### 
