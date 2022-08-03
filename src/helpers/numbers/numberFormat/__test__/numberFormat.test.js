const { numberFormat } = require("../index");

const caseTests = [
  { numeroIngresado: 8300, stringEsperado: "8.300" },
  { numeroIngresado: 145000, stringEsperado: "145.000" },
];

test.each(caseTests)(
  "Test para numeroIngresado debe ser -> stringEsperado",
  ({ numeroIngresado, stringEsperado }) => {
    const response = numberFormat(numeroIngresado);
    expect(response).toBe(stringEsperado);
  }
);
