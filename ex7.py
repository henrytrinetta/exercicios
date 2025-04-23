n1 = float(input("digite o prmeiro numero: "))
n2 = float(input("digite o segundo numero: "))
escolha = int(input("digite 1 para media, 2 pra diferença, 3 pra produto"))

if escolha == 1:
    media = (n1 + n2) / 2
    print("media: ", media)

elif escolha == 2:
    if n1 > n2:
        dif = n1 - n2
    

    elif n2 > n1:
        dif = n2 - n1
    
    else:
        dif = 0

    print("diferença: ",dif)

elif escolha == 3:
    produto = n1 * n2
    print("produto: ", produto)

elif escolha == 4:
    divisao = n1 / n2
    print("divisão: ", divisao)

else:
    print("escolha incorreta")