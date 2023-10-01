function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
    return function namedAFunction(){
        console.log("");
    }
}

const returnsAnAnonymousFunction = function (){
    return function(){
        console.log("");
    }
}