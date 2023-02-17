set1 = {5, 3, 2}

# add 1 elemento não necessáriamente ordenado, ou seja, no final da fila
set1.add(99)
# add mais de 1 elemento
set1.update([55, 5])

# erro pq não existe elemento
set1.remove(8)
# outra forma de remove
set1.discard(99)
print(set1)