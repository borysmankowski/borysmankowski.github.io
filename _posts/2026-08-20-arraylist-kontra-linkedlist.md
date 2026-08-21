---
title: "ArrayList kontra LinkedList — przestałem zgadywać"
date: 2026-08-20 21:15:00 +0200
summary: "Wszystkie kursy mówią to samo zdanie o wstawianiu w środek. Sprawdziłem, czy to prawda, i wynik był inny, niż się spodziewałem."
tags: [java, kolekcje]
ref: 9e2f0c3
---

Każdy kurs powtarza to samo: *`ArrayList` jest szybki przy odczycie, `LinkedList`
przy wstawianiu w środek*. Powtarzałem to na pamięć, nie rozumiejąc dlaczego.
Postanowiłem sprawdzić.

## Skąd bierze się różnica

`ArrayList` trzyma elementy w **jednej ciągłej tablicy**. Kiedy proszę o element numer 5000,
JVM liczy adres i wchodzi tam od razu.

`LinkedList` to **łańcuch węzłów** — każdy trzyma wartość i wskaźnik do następnego.
Żeby dojść do elementu 5000, trzeba przejść przez 4999 poprzednich.

```java
List<Integer> tablica = new ArrayList<>();
List<Integer> lancuch = new LinkedList<>();

for (int i = 0; i < 100_000; i++) {
    tablica.add(i);
    lancuch.add(i);
}

// to jest natychmiastowe
tablica.get(50_000);

// to musi przejść przez pół listy
lancuch.get(50_000);
```

Różnica w moim teście: **0,00002 ms** kontra **0,4 ms**. Dwadzieścia tysięcy razy.

## Gdzie się zaczyna schody

Skoro `LinkedList` ma szybkie wstawianie, sprawdziłem to:

```java
long start = System.nanoTime();
for (int i = 0; i < 50_000; i++) {
    lancuch.add(lancuch.size() / 2, i);   // wstaw w środek
}
System.out.println((System.nanoTime() - start) / 1_000_000 + " ms");
```

I `LinkedList` **przegrał** z `ArrayList`. To nie miało sensu, dopóki nie zrozumiałem,
gdzie leży pułapka.

<div class="note" markdown="1">
<span class="note__label">Gdzie się wyłożyłem</span>

Samo wstawienie węzła w `LinkedList` jest faktycznie natychmiastowe — trzeba tylko
przepiąć dwa wskaźniki. Ale **żeby dojść do miejsca wstawienia, trzeba się tam doczołgać**.
Metoda `add(index, element)` to najpierw przejście przez pół listy, a dopiero potem
tanie wstawienie.

Zdanie z kursów jest prawdziwe tylko wtedy, gdy **już trzymasz iterator** w tym miejscu:

```java
ListIterator<Integer> it = lancuch.listIterator(polowa);
it.add(42);   // TO jest szybkie
```

Przez trzy dni myślałem, że kursy kłamią. Kursy po prostu pomijały połowę zdania.
</div>

## Ściąga, którą sobie zapisałem

| operacja | ArrayList | LinkedList |
|---|---|---|
| `get(i)` | O(1) | O(n) |
| `add(el)` na koniec | O(1)* | O(1) |
| `add(0, el)` na początek | O(n) | O(1) |
| `add(i, el)` w środek | O(n) | O(n) |
| pamięć na element | mało | dużo (2 wskaźniki) |

\* okazjonalnie O(n), kiedy tablica musi urosnąć

## Wniosek, który mi został

**W praktyce prawie zawsze `ArrayList`.** Procesory lubią ciągłą pamięć —
ciągła tablica mieści się w cache, rozrzucone węzły nie. `LinkedList` wygrywa
w wąskim przypadku: dużo wstawiania i usuwania na początku kolekcji.
A jeśli tego potrzebuję, to i tak lepszym wyborem jest `ArrayDeque`.

Następnie: `HashMap` i pytanie, dlaczego trzeba nadpisywać `equals()` razem z `hashCode()`.
