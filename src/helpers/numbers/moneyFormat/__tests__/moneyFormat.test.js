const { moneyFormat } = require("../index");

const caseTests = [
  { montoIngresado: 500000, stringEsperado: "$500.000" },
  { montoIngresado: 5000009.5, stringEsperado: "$5.000.009" },
  { montoIngresado: "100000", stringEsperado: "$100.000" },
  { montoIngresado: "", stringEsperado: "" },
  { montoIngresado: 0, stringEsperado: "" },
  { montoIngresado: -900000, stringEsperado: "$-900.000" },
];

test.each(caseTests)(
  "Test para $montoIngresado debe ser -> $stringEsperado",
  ({ montoIngresado, stringEsperado }) => {
    const response = moneyFormat(montoIngresado);
    expect(response).toBe(stringEsperado);
  }
);
