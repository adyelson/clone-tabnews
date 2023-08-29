function somar(numero1, numero2) {
  if (typeof numero1 != "number" || typeof numero2 != "number") return "Erro";
  if (typeof numero1 == null || typeof numero2 == null) return "Erro";
  return numero1 + numero2;
}

exports.somar = somar;
