import arr from './arr.js'
//

function CalculaDiferencaDiaginal (arr){
     let diagonalLeft = 0
     let diagonalRight = 0
                        
            for(let i = 0; i < arr.length; i++){
           diagonalLeft += arr[i][i]; //4
           diagonalRight += arr[i][arr.length - 1 - i]
          
            
        }
        return Math.abs (diagonalLeft - diagonalRight)
    }
        
       
CalculaDiferencaDiaginal(arr)


/*  [[11, 2, 4],
    [4, 5, 6], 
    [10, 8, -12]];
    d = 0


 */