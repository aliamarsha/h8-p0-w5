// Kali Terus (Rekursif)

function kaliTerusRekursif(angka) {
  var stringAngka = String(angka)
  //console.log(stringAngka)

  if (stringAngka.length == 1){
      return Number(stringAngka)
  }
    var tampung = 1
    for (var i = 0; i < stringAngka.length; i++){
        tampung *= stringAngka[i]
    }
    
    return kaliTerusRekursif(tampung)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6