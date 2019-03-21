function changeVocals (str) {
    //code di sini
    var result =''
    var lib = 'AIUEOaiueo'

    
    for (var i =0; i<str.length; i++){
      var out =''
      out += str[i]
      for (var j=0; j<lib.length; j++){
        if (str[i] === lib[j]){

          // console.log(str[i] , 'di str sama dengan -->', lib[j], ' di lib')
          out = String.fromCharCode(str.charCodeAt(i)+1)
          // console.log(str[i], out);
        }
      }
      result += out
    }
    
    return result

  }
  
  function reverseWord (str) {
    //code di sini
    var result = ''
    for (var i=str.length-1; i>=0; i--){
      result += str[i]

    }
    // console.log(result)
    return result
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    result = ''
    var libL = 'abcdefghijklmnopqrstuvwxyz'
    var libU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i =0; i<str.length; i++){
      for (var j=0; j<libL.length || j<libU.length; j++){
        if (str[i] === libL[j]){
          result += str[i].toUpperCase()
        }
        else if (str[i] === libU[j]){
          result += str[i].toLowerCase()
        } 
      }
      if (str[i] === ' '){
        result += str[i]
      }
    }
    return result
  }
  
  function removeSpaces (str) {
    //code di sini
    var result = ''
    for (var i = 0 ; i<str.length; i++){
      var flag = false
      if (str[i] !== ' '){
        flag = true
      }
      if (flag){
        result += str[i]
      }
    }
    return result
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length <= 5){
      result = 'Minimal karakter yang diinputkan adalah 5 karakter !!'
      return result
    }
    var changeVoc = changeVocals(name)
    var revWord = reverseWord(changeVoc)
    var setLC_UC = setLowerUpperCase(revWord)
    var remSpace = removeSpaces (setLC_UC)

    return remSpace
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'