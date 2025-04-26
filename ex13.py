valor = float(input("digite o valor do salario: "))

if valor <= 300:
    aumento = (valor * 50) / 100

if valor > 300 and valor <= 500:
    aumento = (valor * 40) / 100

if valor > 500 and valor <= 700:
    aumento = (valor * 30) / 100

if valor > 700 and valor <= 800:
    aumento = (valor * 20) / 100

if valor > 800 and valor <= 1000:
    aumento = (valor * 10) / 100

if valor > 1000:
    aumento = (valor * 5) / 100

salario = valor + aumento

print("novo salario: ", salario)