salario = float(input("Digite seu salario: "))
if salario <= 300:
    salarior = salario + ((salario * 35) / 100)
    print("salario rajustado: ", salarior)

else:
    salarior = salario + ((salario * 15) / 100)
    print("salario rajustado: ", salarior)