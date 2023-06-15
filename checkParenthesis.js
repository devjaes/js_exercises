/*
()()()() esto es valido
((())()()(((())))))), esto no es válido
*/

function checkParenthesis(str) {
    const regex = /^(\(\))+$/;
    return regex.test(str);
}

console.log(checkParenthesis("()()()()")); // Devuelve true
console.log(checkParenthesis("((())()()(((())))))")); // Devuelve false