
function zipWith(fn,a0,a1){

  let minorLength=0;
  let result=[];

  (a0.length > a1.length)?minorLength=a1.length:minorLength=a0.length;

  for(let pos=0; pos<minorLength; pos++){
    result.push(
      fn(
        a0[pos],a1[pos]
      ));

  }
  return result;
}
