class konvertsuhu {
   constructor() {}

   convCel(akhir, angka) {
      if (akhir == "celcius") {
         return parseInt(angka);
      }
      if (akhir == "farenheit") {
         return (9 / 5) * parseInt(angka) + 32;
      }
      if (akhir == "reamur") {
         return (4 / 5) * parseInt(angka);
      }
   }

   convFar(akhir, angka) {
      if (akhir == "farenheit") {
         return parseInt(angka);
      }
      if (akhir == "celcius") {
         return (5 / 9) * (parseInt(angka) - 32);
      }
      if (akhir == "reamur") {
         return (4 / 9) * (parseInt(angka) - 32);
      }
   }

   convRea(akhir, angka) {
      if (akhir == "reamur") {
         return parseInt(angka);
      }
      if (akhir == "farenheit") {
         return (9 / 4) * parseInt(angka) + 32;
      }
      if (akhir == "celcius") {
         return (5 / 4) * parseInt(angka);
      }
   }
}

module.exports = konvertsuhu;
