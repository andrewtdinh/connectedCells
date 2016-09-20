'use strict'

function outFunc(cb){
  return function(){
    return cb
  }
}
