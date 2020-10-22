function drawMatrix(x) {
  let n = x * 2 - 1
  let flag = 0
  let row = 1
  let col = 0
  let myArray = []
  for (let i = 1; i <= n; i++) {
      myArray[i] = []
      myArray[i][x] = row
      for(let j = 1; j < x; j++){
          let temp = row - j
          if (temp <= 0){
              temp = 0
          }
          col = x - j
          myArray[i][col] = temp
          myArray[i][n - col + 1] = temp
      }
      if(row === x){
          flag = 1
      }
      if(flag === 1){
          row--
      }else if(flag === 0){
          row++
      }
  }
  console.log(myArray)
}

drawMatrix(5)