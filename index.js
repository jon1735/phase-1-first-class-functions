function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
   return function bob() {

   }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}
