function kaliTerusRekursif(angka) {
    // you can only write your code here!
    
    if (angka < 10){
        return angka
    } else {
        var arr = angka.toString().split('')
        var result = 1
        // console.log(arr);
        for (var i=0; i<arr.length; i++){
            result *= Number(arr[i]) 

        }
        return kaliTerusRekursif(result)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6