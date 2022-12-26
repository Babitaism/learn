
function magicSquare(arr) {
    for (i = 0; i < arr.length; i++) {
        sumHorizontal = 0
        sumVertical = 0
        sumLeftDiagonal = 0
        sumRightDiagonal = 0
        subarr = arr[i]

        for (j = 0; j < subarr.length; j++) {

            if (j == subarr.length) {
                break
            }
            
            sumHorizontal = sumHorizontal + arr[i][j]
            sumVertical = sumVertical + arr[j][i]
    
            if (i == j) {
                sumLeftDiagonal = sumLeftDiagonal + arr[i][i]
            }

            if (i + j == subarr.length - 1) {
                sumRightDiagonal = sumRightDiagonal + arr[i][j]
            }

        }
    }

    return sumHorizontal == sumVertical == sumRightDiagonal == sumLeftDiagonal
}


arr = [[1, 1, 1, 1,1], [1, 1, 1, 1,1], [1, 1, 1, 1,1], [1, 1, 1, 1,1], [1,1,1,1,1]]
checkResult = magicSquare(arr)
console.log(checkResult)