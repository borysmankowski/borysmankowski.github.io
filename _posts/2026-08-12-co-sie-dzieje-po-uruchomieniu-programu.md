---
title: "Co się właściwie dzieje, kiedy klikam „Run”"
date: 2026-08-12 20:30:00 +0200
summary: "Klikałem zieloną strzałkę przez dwa miesiące, zanim sprawdziłem, co się pod nią kryje. Okazało się, że to trzy osobne kroki."
tags: [java, jvm, podstawy]
ref: 4b1d9a7
---

Przez dwa miesiące uruchamiałem programy zieloną strzałką w IntelliJ i nie zastanawiałem się,
co się dzieje dalej. Aż do momentu, kiedy kolega zapytał, czy Java jest kompilowana
czy interpretowana — i zorientowałem się, że nie umiem odpowiedzieć.

Odpowiedź brzmi: **jedno i drugie**. I właśnie to jest ciekawe.

## Trzy kroki zamiast jednego

Weźmy najprostszy możliwy program:

```java
public class Witaj {
    public static void main(String[] args) {
        System.out.println("Cześć, main!");
    }
}
```

Kiedy klikam „Run", dzieje się to:

**1. Kompilacja.** `javac Witaj.java` bierze mój kod źródłowy i tworzy plik `Witaj.class`.
W środku nie ma kodu maszynowego dla mojego procesora — jest **bytecode**, czyli instrukcje
dla maszyny wirtualnej. Można je podejrzeć:

```
javap -c Witaj.class
```

**2. Ładowanie.** JVM startuje i classloader wczytuje `Witaj.class` do pamięci,
sprawdzając przy okazji, czy bytecode nie jest uszkodzony albo złośliwy.

**3. Wykonanie.** JVM zaczyna interpretować bytecode instrukcja po instrukcji.
I tu wchodzi rzecz, która mnie zaskoczyła: jeśli jakiś fragment wykonuje się często,
kompilator **JIT** tłumaczy go w locie na prawdziwy kod maszynowy i od tej pory
program używa szybkiej wersji.

Dlatego Java bywa wolna przez pierwsze sekundy działania i szybka później.
To nie przypadek, tylko sposób działania.

## Po co ta cała warstwa pośrednia

Bytecode jest taki sam niezależnie od systemu. Kod maszynowy nie jest.
Ten sam plik `.class` uruchomi się na Windowsie, Linuksie i macOS-ie,
bo dla każdego z nich istnieje osobna JVM, która mówi w tym samym bytecode.

To jest to całe *write once, run anywhere* z reklam z lat 90.
Brzmiało jak slogan, dopóki nie zobaczyłem, gdzie dokładnie leży ta granica.

<div class="note" markdown="1">
<span class="note__label">Gdzie się wyłożyłem</span>

Próbowałem uruchomić `java Witaj.java` z katalogu wyżej i dostawałem:

```
Error: Could not find or load main class Witaj
```

Myślałem, że coś jest nie tak z instalacją Javy. Nie było — JVM po prostu szukała
klasy tam, gdzie jej nie było. Rozwiązanie to wskazanie katalogu z klasami:

```
java -cp . Witaj
```

Zajęło mi to półtorej godziny, bo szukałem błędu w kodzie zamiast w tym,
jak uruchamiam program. Lekcja: `Could not find or load main class` to prawie zawsze
problem ze ścieżką, nie z kodem.
</div>

## Co dalej

Chcę zajrzeć w to, jak JVM zarządza pamięcią — stos, sterta i dlaczego
`NullPointerException` w ogóle istnieje. Ale najpierw kolekcje,
bo bez nich nie napiszę niczego sensownego.
