nota1 = float(input("digite a primeira nota: "))
nota2 = float(input("digite a segunda nota: "))
media = (nota1 + nota2) / 2

if media <= 4 and media >= 0:
    print("Reprovado - media: ", media)

elif media > 4 and media <= 7:
    print("Exame - media: ", media)

elif media > 7 and media <= 10:
    print("Aprovado - media: ", media)

else:
    print("nota incorreta")