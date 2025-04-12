peso = float(input("Digite seu preso: ").replace(',', '.'))


emagrecer = (peso*20) / 100
engordar = (peso*15) / 100

pesom = peso - emagrecer
pesog = peso + engordar

print('Valor caso emgareça 20%', pesom)
print('Valor caso engorde 15%', pesog)