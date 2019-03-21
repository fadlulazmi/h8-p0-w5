function totalDigitRekursif(angka) {
    // you can only write your code here!
    if (angka < 10){
        return angka
    } else {
        var arr = angka.toString().split('')
        var currentNum = Number(arr[0])
        var nextParam = Number(arr.splice(1).join(''))
        return currentNum + totalDigitRekursif(nextParam)
    }
  }
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5