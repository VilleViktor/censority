# censority

Censor language. 

I appreciate if people would help me expand the libraries for other languages. 

Right now there is a small library for swedish and a bigger one for english. 


## How to use

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
