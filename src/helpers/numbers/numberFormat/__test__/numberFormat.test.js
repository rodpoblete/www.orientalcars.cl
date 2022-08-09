const { numberFormat } = require("../index");

const caseTests = [
  { $numeroIngresado: 8300, $stringEsperado: "8.300" },
  { $numeroIngresado: 145000, $stringEsperado: "145.000" },
  { $numeroIngresado: 0, $stringEsperado: "0" },
  { $numeroIngresado: 500, $stringEsperado: "500" },
  { $numeroIngresado: 1100000, $stringEsperado: "1.100.000" },
  { $numeroIngresado: -1, $stringEsperado: "0" },
  { $numeroIngresado: "", $stringEsperado: "0" },
];

test.each(caseTests)(
  "Test para $numeroIngresado debe ser -> $stringEsperado",
  ({ $numeroIngresado, $stringEsperado }) => {
    const response = numberFormat($numeroIngresado);
    expect(response).toBe($stringEsperado);
  }
);
