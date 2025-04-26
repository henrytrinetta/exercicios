media = float(input("digite sua media: "))
renda = float(input("a renda da sua familia:"))
horas = int(input("digite o numero de horas comunitarias "))

if media >= 8.5 and renda <= 2500:
    print("elegivel")
else:
    if media > 8.0 and media < 8.5 and renda <= 2500 and horas >= 30:
        print("elegivel")
    else:
        print("inelegivel")
