exports.moneyFormat = (amount) => {
  if (!amount) return "";
  const options = { style: "currency", currency: "CLP" };
  const numberFormat = new Intl.NumberFormat("es-CL", options);
  return numberFormat.format(parseInt(amount, 10));
};
