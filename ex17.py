idade = int(input("digite sua idade: "))
salario = float(input("digite a renda de sua familia:"))
dividas = float(input("digite o total da divida: "))
pagamentos = int(input("numero de pagamentos: "))
sal = (salario*20) / 100
if idade >= 25 and idade <= 60 and salario >= 3000 and dividas == 0:
    print("aprovado")


elif idade >= 25 and idade <= 60 and salario <= 3000 and divida <= sal and pagamentos > 1:
    print("aprovado")

else:
    print("não aprovado")