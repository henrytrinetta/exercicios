salario = float(input("digite o valor do seu salario: ").replace(',', '.'))
vendas= float(input("digite o valor do seu salario: ").replace(',', '.'))

vendas = (vendas*4) / 100

print("salario final: ", vendas + salario)