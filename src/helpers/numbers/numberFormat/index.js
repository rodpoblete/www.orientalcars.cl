exports.numberFormat = (number) => {
  if (!number || number < 0) return "0";
  const numberFormat = new Intl.NumberFormat("es-CL");
  return numberFormat.format(parseInt(number, 10));
};
