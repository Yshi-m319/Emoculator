function safeEval(val){
    return Function('"use strict";return ('+val+')')();
}

var answer = safeEval("1+1");
console.log(answer);