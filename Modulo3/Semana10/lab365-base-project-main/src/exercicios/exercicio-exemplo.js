export const somaNumeros = (x, y) => {
  if (Number.isNaN(Number(x)) || Number.isNaN(Number(y))) {
    return "entrada inválida";
  }

  return x + y;
};
