n1 = int(input("Digite o numero a ser dividido: "))
n2 = int(input("Digite o numero divisor: "))

while n2 == 0:
    if n2 == 0:
        n2 = int(input("Digite o numero divisor: "))
        print("o divisor não pode ser 0")
        i = 0

res = n1 / n2

print(res)