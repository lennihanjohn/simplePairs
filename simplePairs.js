const ARRAY =  [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9] 

function Pairs(arr, sum){
		const paired = []
		const reversedPaired = []
 		let length = arr.length;
    // Consider all possible pairs and reversed pairs
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] == sum){
            	const verOne = [arr[i], arr[j]]
              const verTwo = [arr[j], arr[i]]
            	paired.push(verOne)
              reversedPaired.push(verTwo)

            }
         }
     }
  	// combine two array to be one
     const totalPaired = paired.concat(reversedPaired)
     //find unique one from the combined list
     const uniquPaird = [...new Set(totalPaired.map(JSON.stringify))].map(JSON.parse)
     // find pair one from paired list only
      const sameCombPaird = [...new Set(paired.map(JSON.stringify))].map(JSON.parse)
      console.log(totalPaired)
      console.log(uniquPaird)
      console.log(sameCombPaird)
  
}

Pairs(ARRAY, 10);
