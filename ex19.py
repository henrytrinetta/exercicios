angulo = float(input("Digite o valor do ângulo em graus: "))


voltas = int(angulo // 360)
resto = angulo % 360


if angulo < 0:
    sentido = "horário"
    resto = 360 + (angulo % -360) if angulo % -360 != 0 else 0
    voltas = abs(voltas)
else:
    sentido = "anti-horário"


if resto == 0 or resto == 360:
    quadrante = "sobre o eixo (0° ou 360°)"
elif 0 < resto < 90:
    quadrante = "1 quadrante"
elif resto == 90:
    quadrante = "sobre o eixo entre 1º e 2º quadrantes"
elif 90 < resto < 180:
    quadrante = "2 quadrante"
elif resto == 180:
    quadrante = "sobre o eixo entre 2º e 3º quadrantes"
elif 180 < resto < 270:
    quadrante = "3 quadrante"
elif resto == 270:
    quadrante = "sobre o eixo entre 3º e 4º quadrantes"
elif 270 < resto < 360:
    quadrante = "4 quadrante"


print(f"\nÂngulo reduzido: {resto:.2f}°")
print(f"Sentido da volta: {sentido}")
print(f"Número de voltas completas: {voltas}")
print(f"O ângulo está no {quadrante}.")
