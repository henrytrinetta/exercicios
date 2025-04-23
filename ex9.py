saldo = float(input("Digite seu saldo médio do ultimo ano: "))

if saldo > 400:
    credito = (saldo * 30) / 100
elif saldo > 300 and saldo <= 400:
    credito = (saldo * 25) / 100
elif saldo > 200 and saldo <= 300:
    credito = (saldo * 20) / 100
elif saldo <= 200:
    credito = (saldo * 10) / 100


print("credito: ", credito)
