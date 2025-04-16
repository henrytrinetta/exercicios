nht = float(input("numero de horas trabalhadas: "))
sm = float(input("valor do salario minimo: "))
nhet = float(input("numero de horas extras trabalhadas: "))

ht = sm / 8
he = sm / 4
sb = ht * nht
qre = he * nhet
sr = sb + qre

print("o salario a receber é: ", sr)