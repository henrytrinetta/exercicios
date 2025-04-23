salario = float(input("Digite seu salario: "))
if salario < 500:
    salarior = salario + ((salario * 30) / 100)
    print("salario rajustado: ", salarior)

else:
    print("você não tem direito ao beneficio")