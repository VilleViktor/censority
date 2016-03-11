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

// using callback function :
new censority(testString).all(function(msg){
    console.log(msg);
});

// or just using sync return :
var s = new censority(testString).all();
console.log(s);

//both's answer :
//**** this ***t up man! Boy. You can't do ***t.You know That right??? Ja *****r vad coolt. *** ta detta alltså
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



#### Author: Viktor Larsson 
#### 
