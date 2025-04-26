valor = float(input("digite o valor: "))

if valor <= 300:
    aumento = (valor * 15) / 100

if valor > 300 and valor <= 600:
    aumento = (valor * 10) / 100

if valor > 600 and valor <= 900:
    aumento = (valor * 5) / 100

if valor > 900:
    imposto = 0



print("aumento: ", aumento)