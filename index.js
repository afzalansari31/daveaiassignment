//helper function to sum up all items in an array..
const sum =(array)=> array.reduce((partialSum , a) => partialSum + a,0);

//Time Complexity 0(n)
//Space Complexity 0(n)


const doAllocation =(nP,nB) =>{
    const returnedArray =[1,1];

    for (let i = 2 ; i < nB ; i++){
       if (sum(returnedArray) === nP){
           returnedArray.push (0);

       } else if (sum(returnedArray) < nP){
           let absValue = nP - sum(returnedArray);
           if(absValue >= returnedArray [i-1]+ returnedArray[i-2]){
               returnedArray.push(returnedArray[i-1]+returnedArray[i-2]);
           } else {
               returnedArray.push(absValue);
           }
       }
    }

    return returnedArray;
};

console.log(doAllocation(21 ,10));
