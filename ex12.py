valor = float(input("digite o valor do produto: "))

if valor <= 50:
    aumento = (valor * 5) / 100

if valor > 50 and valor <= 100:
    aumento = (valor * 10) / 100


if valor > 100:
    aumento = (valor * 15) / 100

preco = valor + aumento
if preco <= 80:
    print("preço: ", preco, "barato")

if preco > 80 and preco <= 120:
    print("preço: ", preco, "normal")
if preco > 120 and preco <= 200:
    print("preço: ", preco, "caro")
if preco > 200:
    print("preço: ", preco, "nuito caro")