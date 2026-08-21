---
title: "Dlaczego zacząłem pisać ten blog"
date: 2026-08-02 19:00:00 +0200
summary: "Trzeci raz przerabiałem ten sam rozdział o kolekcjach i trzeci raz nic z niego nie pamiętałem. Coś było nie tak z metodą."
tags: [meta]
ref: c0ffee1
---

Trzeci raz otworzyłem rozdział o kolekcjach. Przeczytałem, pokiwałem głową, zamknąłem.
Dzień później nie umiałem powiedzieć, czym różni się `ArrayList` od `LinkedList`.

Problem nie leżał w materiale. Leżał w tym, że **czytanie o kodzie czuje się jak nauka,
a nią nie jest**. Mózg rozpoznaje znajome słowa i uznaje sprawę za załatwioną.

## Test wyjaśniania

Jest prosty sposób, żeby to sprawdzić: spróbuj wytłumaczyć rzecz komuś, kto jej nie zna.
Jeśli po dwóch zdaniach uciekasz w cytat z dokumentacji — nie rozumiesz, tylko pamiętasz kształt zdania.

Ten blog to mój sposób na wymuszenie tego testu. Zasada jest jedna:

> Nie uznaję tematu za przerobiony, dopóki nie napiszę o nim wpisu,
> który zrozumiałby ja sprzed tygodnia.

## Jak będą wyglądać wpisy

Każdy ma tę samą kośćbę, bo dzięki temu nie zaczynam od pustej strony:

- **Problem** — czego rano nie rozumiałem
- **Co odkryłem** — wyjaśnienie plus działający kod
- **Gdzie się wyłożyłem** — błędy, stack trace'y, ślepe uliczki
- **Następny krok** — co biorę dalej

Sekcja z błędami jest tu najważniejsza. Wpisów „co to jest ArrayList" są tysiące.
Wpisów „dlaczego dostawałem `ConcurrentModificationException` i co mi to powiedziało
o iteratorach" — znacznie mniej. A to właśnie ich ludzie szukają o 23:00,
kiedy coś nie działa.

## Plan na najbliższe miesiące

W mniej więcej takiej kolejności:

1. Podstawy języka — typy, sterowanie, metody
2. Kolekcje i generyki
3. Obiektowość na serio — nie „klasa to szablon", tylko po co to komu
4. Wyjątki i obsługa błędów
5. Testy jednostkowe, JUnit
6. Dopiero potem Spring

Jeśli za pół roku ten plan będzie wyglądał naiwnie — tym lepiej, będzie o czym napisać.
