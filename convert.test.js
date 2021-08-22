const konvertsuhu = require("./konvertsuhu");

test("test celcius ke celcius", () => {
   const konvers = new konvertsuhu();
   expect(konvers.convCel("celcius", 5)).toBe(5);
});

// test("test celcius ke farenheit", () => {
//    const konvers = new konvertsuhu();
//    expect(konvers.convCel("farenheit", 5)).toBe(41);
// });

// test("test celcius ke reamur", () => {
//    const konvers = new konvertsuhu();
//    expect(konvers.convCel("reamur", 5)).toBe(4);
// });

// test("test farenheit ke reamur", () => {
//    const konvers = new konvertsuhu();
//    expect(konvers.convFar("reamur", 5)).toBe(-12);
// });

// test("test farenheit ke farenheit", () => {
//    const konvers = new konvertsuhu();
//    expect(konvers.convFar("farenheit", 5)).toBe(5);
// });

// test("test farenheit ke celcius", () => {
//    const konvers = new konvertsuhu();
//    expect(konvers.convFar("celcius", 5)).toBe(-15);
// });

// test("test reamur ke reamur", () => {
//    const konvers = new konvertsuhu();
//    expect(konvers.convRea("reamur", 5)).toBe(5);
// });

// test("test reamur ke farenheit", () => {
//    const konvers = new konvertsuhu();
//    expect(konvers.convRea("farenheit", 5)).toBe(43.25);
// });

// test("test reamur ke celcius", () => {
//    const konvers = new konvertsuhu();
//    expect(konvers.convRea("celcius", 5)).toBe(6.25);
// });
