// Password Generator

function changeVocals (str) {
    var tampungVokal = ""
    var vokal = "aeiou"

    for (var i = 0; i < str.length; i++){
        if (str[i] == "a"){
            tampungVokal += "b" 
        } 
        else if (str[i] == "e"){
            tampungVokal += "f"
        }
        else if(str[i] == "i"){
            tampungVokal += "j"
        }
        else if(str[i] == "o"){
            tampungVokal += "p"
        }
        else if (str[i] == "u"){
            tampungVokal += "v"
        }
        else if (str[i] == "A"){
            tampungVokal += "B"
        }
        else if (str[i] == "E"){
            tampungVokal += "F"
        }
        else if (str[i] == "I"){
            tampungVokal += "J"
        }
        else if (str[i] == "O"){
            tampungVokal += "P"
        }
        else if (str[i] == "U"){
            tampungVokal += "V"
        }
        else {
            tampungVokal += str[i]
        }
    }

    return tampungVokal
  }
  
  function reverseWord (str) {
    var tampungReverse = ""
    for (var i = str.length -1 ; i >=0; i--){
        tampungReverse += str[i]
    }
    return tampungReverse
  }
  
  function setLowerUpperCase (str) {
    var tampungCase = ""
    for (var i = 0; i < str.length; i++){
        if (str[i] == str[i].toUpperCase()){
            tampungCase += str[i].toLowerCase()
        } 
        else if (str[i] == str[i].toLowerCase()){
            tampungCase += str[i].toUpperCase()
        } 
    }
    return tampungCase
  }
  
  function removeSpaces (str) {
    var tampungSpace = ""
    for (var i = 0; i < str.length; i++){
        if (str[i] == " "){
            tampungSpace += ""
        } 
        else {
            tampungSpace += str[i]
        }
    }
    return tampungSpace
  }
  
  function passwordGenerator (name) {

    if (name.length < 5){
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }

    var alphabet = changeVocals(name); 
    var balik = reverseWord(alphabet); 
    var kapital = setLowerUpperCase(balik);
    var spasi = removeSpaces(kapital)

    return spasi
  }
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'