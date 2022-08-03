exports.numberFormat = (number) => {
  if (!number) return "";
  const numberFormat = new Intl.NumberFormat("es-CL");
  return numberFormat.format(parseInt(number, 10));
};
