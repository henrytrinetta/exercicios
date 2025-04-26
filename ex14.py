valor = int(input("digite 1 para poupança, 2 para fundos de renda fixa e 3 para fundo de renda variavel: "))
inv = float(input("didgite o valor do investimento:"))
if valor == 1:
    ren = (valor * 3) / 100

if valor == 2:
    ren = (valor * 4) / 100

if valor == 3:
    ren = (valor * 5) / 100

inv = inv + ren
print("ajustado: ", inv)