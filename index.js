
function makeLeaderBoard(arr){
    if(!arr || arr.length===0)
    {
        return "Please give valid 2d array"
    }
   
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i].length!==2)
        {
            return `Please provide 2d array. 2D array is not at index ${i} and value is arr[${i}]=${arr[i]}`
        }
        if(typeof arr[i][0]==="number")
        {
             return `Please provide string at index ${i} and value is arr[${i}][0]=${arr[i][0]}`
        }
        if(typeof arr[i][1]==="string")
        {
             return `Please provide string at index ${i} and value is arr[${i}][1]='${arr[i][1]}'`
        }
    }
   
    for(let i=0; i<arr.length; i++)
    {
        for(let j=0; j<arr.length-1-i; j++)
        {
            let marks1 = arr[j][1];
            let marks2 = arr[j+1][1];
            if(marks1<marks2)
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            else if(marks1===marks2)
            {
                let name1 = arr[j][0];
                let name2 = arr[j+1][0];
                if(name1>name2)
                {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }


    let newArray = []
    let rank = 1;
    let val = arr[0][1]
    for(let i=0; i<arr.length; i++)
    {
         if(arr[i][1]===val)
         {
            newArray.push([rank,arr[i][0]])
         }
         else{
            rank = i+1;
            newArray.push([rank,arr[i][0]])
         }
         val = arr[i][1];
    }
    return newArray
}

module.exports = makeLeaderBoard




