anumero = int(input("Digite um numero: "))
bnumero = int(input("Digite um numero: "))
cnumero = int(input("Digite um numero: "))

if anumero > bnumero and anumero > cnumero:
    print("o maior numero é: ", anumero)


elif bnumero > anumero and bnumero > cnumero:
        print("o maior numero é: ", bnumero)

elif cnumero > anumero and cnumero > bnumero:
        print("o maior numero é: ", cnumero)

else :
    print("não existe um maior entre eles")