valor = float(input("digite o valor do carro: "))

if valor <= 12000:
    imposto = 0
    distribuidor = (valor * 5) / 100

if valor > 12000 and valor <= 25000:
    imposto = (valor * 10) / 100
    distribuidor = (valor * 15) / 100

if valor > 25000:
    imposto = (valor * 20) / 100
    distribuidor = (valor * 15) / 100

valor += imposto + distribuidor

print("custo pro consumidor: ", valor)