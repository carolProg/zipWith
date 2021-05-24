function zipWith(fn, array0, array1){
    return Array.from({length:getNumIterations(array0, array1)}, appyFunctionTo(fn, array0, array1));

}

function getNumIterations({length:length0} , { length:length1 }){
    return ( length0 > length1 ) ? length1 : length0;
}

function applyFunctionTo(fn, array0, array1){
    return function( _, index ){
        return fn(array0[index], array1[index])
    }
}