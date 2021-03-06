## Алгоритм Ганса Луна

Создать функцию-предикат, проверяющую карты на валидность.

Алгоритм Ганса Луна. Проверка валидности банковских карт.

Кредитная карта может в своем номере содержать от 13 до 16 цифр.

Первые цифры карты могут быть:

 - 4  Visa
 - 5  MasterCard
 - 37 American Express cards
 - 6  Discover cards

Условия:

Дана карта: **4388576018402626**

1) Удвойте каждую вторую цифру с права на лево. 
Если результат удвоения содержит две цифры, то сложите их
для получения односимвольного числа.
(то есть, если например цифра 6, удвоенная дает 12, 
то результат должен быть 3). 
Если результат удвоения одноциферный, то оставить как есть.

2) Сложить, все результаты удвоений на шаге 1.
Например, если мы имеем номер карты: 
**4388576018402626** то на шаге два, (2 2 4 1 6 5 8 4)
мы должны получить: 4 + 4 + 8 + 2 + 3 + 1 + 7 + 8 = 37

3) Сложить все цифры на нечетных позициях начиная с права на лево.
 то есть: **6 + 6 + 0 + 8 + 0 + 7 + 8 + 3 = 38**

4) Сложить результаты с шага 2 и с шага 3. **37 + 38 = 75**

5) Если полученная сумма кратна 10, то карта валидная, если нет, то номер фейковый.


Пример номеров настоящих: **4388576018410707**
