const calculadora = require("../models/calculadora.js");

//teste 1
test("Somar 2 + 2 deveria retornar 4", () => {
  let esperado = 4;
  let recebido = calculadora.somar(2, 2);
  expect(recebido).toBe(esperado);
});
//teste 2
test("Somar 100 + 77 deveria retornar 177", () => {
  let esperado = 177;
  let recebido = calculadora.somar(100, 77);
  expect(recebido).toBe(esperado);
});
//teste 3
test("Somar 'banana' + 100 deveria retornar 'Erro'", () => {
  let esperado = "Erro";
  let recebido = calculadora.somar("banana", 100);
  expect(recebido).toBe(esperado);
});
//teste 4
test("Somar 100 + 'banana' deveria retornar 'Erro'", () => {
  let esperado = "Erro";
  let recebido = calculadora.somar(100, "banana");
  expect(recebido).toBe(esperado);
});
//teste 5
test("Somar vazio + 100 deveria retornar 'Erro'", () => {
  let esperado = "Erro";
  let recebido = calculadora.somar(null, 100);
  expect(recebido).toBe(esperado);
});
//teste 6
test("Somar vazio + 100 deveria retornar 'Erro'", () => {
  let esperado = "Erro";
  let recebido = calculadora.somar(100, null);
  expect(recebido).toBe(esperado);
});
//teste 7
test("Somar '' + 100 deveria retornar 'Erro'", () => {
  let esperado = "Erro";
  let recebido = calculadora.somar("", 100);
  expect(recebido).toBe(esperado);
});
//teste 8
test("Somar '' + 100 deveria retornar 'Erro'", () => {
  let esperado = "Erro";
  let recebido = calculadora.somar(100, "");
  expect(recebido).toBe(esperado);
});
//teste 9
test("Somar 0.8 + 100 deveria retornar 100.8", () => {
  let esperado = 100.8;
  let recebido = calculadora.somar(100, 0.8);
  expect(recebido).toBe(esperado);
});
//teste 10
test("Somar 'maçã' + 'banana' deveria retornar Erro", () => {
  let esperado = "Erro";
  let recebido = calculadora.somar("maçã", "banana");
  expect(recebido).toBe(esperado);
});
