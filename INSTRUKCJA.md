# pushtomain.pl — instrukcja

Wszystko od zera do działającej strony pod własną domeną. Nie musisz nic instalować
na komputerze — całość da się zrobić w przeglądarce.

---

## Krok 1 — Załóż repozytorium

1. Wejdź na [github.com/new](https://github.com/new).
2. **Repository name:** wpisz `TWOJ-NICK.github.io` — dokładnie swoją nazwę użytkownika
   z GitHuba, potem `.github.io`. Jeśli Twój nick to `kowalski`, wpisujesz `kowalski.github.io`.
3. Ustaw **Public**. Prywatne repozytoria wymagają płatnego planu.
4. Nie zaznaczaj „Add a README file".
5. Kliknij **Create repository**.

> Dlaczego taka nazwa? Repo o nazwie `nick.github.io` GitHub traktuje jako Twoją
> główną stronę i serwuje ją z katalogu głównego. Każde inne repo dostałoby adres
> z dopiskiem `/nazwa-repo/`, co komplikuje ścieżki.

---

## Krok 2 — Wrzuć pliki

**Przez przeglądarkę (najprostsze):**

1. Rozpakuj `pushtomain.zip` u siebie na komputerze.
2. Na stronie nowego repozytorium kliknij **uploading an existing file**.
3. Przeciągnij **zawartość** folderu `pushtomain` — czyli `_config.yml`, `index.html`,
   foldery `_posts`, `_layouts` itd. **Nie przeciągaj samego folderu `pushtomain`.**
4. Na dole wpisz opis commita, np. `pierwsza wersja bloga`, i kliknij **Commit changes**.

**Uwaga na pliki zaczynające się od kropki.** `.gitignore` może się nie przeciągnąć,
bo systemy ukrywają takie pliki. Nic się nie stanie, jeśli go zabraknie — możesz go
dodać później przez **Add file → Create new file**.

**Przez terminal (jeśli masz gita):**

```bash
cd pushtomain
git init
git add .
git commit -m "pierwsza wersja bloga"
git branch -M main
git remote add origin https://github.com/TWOJ-NICK/TWOJ-NICK.github.io.git
git push -u origin main
```

---

## Krok 3 — Włącz GitHub Pages

1. W repozytorium: **Settings** (górne menu) → **Pages** (lewa kolumna).
2. W sekcji **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)**
3. **Save**.

Pierwszy build trwa 1–3 minuty. Postęp widać w zakładce **Actions**.
Po zakończeniu strona żyje pod `https://TWOJ-NICK.github.io`.

Sprawdź, czy działa, zanim przejdziesz dalej.

---

## Krok 4 — Uzupełnij swoje dane

Otwórz `_config.yml` w repozytorium (kliknij plik, potem ikonę ołówka) i zmień:

```yaml
author:
  name: Twoje Imię          # ← tu
  email: kontakt@...        # ← tu
  github: twoj-nick         # ← tu
  linkedin: twoj-profil     # ← tu

learning_since: "marca 2026"  # ← od kiedy się uczysz
```

Zapisz przez **Commit changes**. Strona przebuduje się sama w ~1 minutę.

> `_config.yml` to jedyny plik, którego zmiany **nie** pojawiają się przy podglądzie
> lokalnym bez restartu serwera. Na GitHubie działa normalnie.

---

## Krok 5 — Podłącz pushtomain.pl

GitHub Pages, w przeciwieństwie do Google Sites, obsługuje gołą domenę.
Możesz mieć `pushtomain.pl` bez `www`.

### 5a. Zgłoś domenę w GitHubie

**Settings → Pages → Custom domain** → wpisz `pushtomain.pl` → **Save**.

Zrób to **przed** zmianami w DNS. GitHub zaleca tę kolejność, żeby nikt inny
nie przechwycił domeny wskazującej na Pages.

### 5b. Dodaj rekordy DNS u rejestratora

Zaloguj się do panelu, w którym kupiłeś domenę (nazwa.pl, home.pl, OVH, cyber_Folks…),
znajdź **Rekordy DNS / Strefa DNS** i dodaj:

**Cztery rekordy A** dla gołej domeny, host `@`:

<cite index="11-1">185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153</cite>

**Cztery rekordy AAAA** (IPv6), też host `@`:

<cite index="11-1">2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153</cite>

**Jeden rekord CNAME**, host `www`, wartość `TWOJ-NICK.github.io.`
(z kropką na końcu, bez nazwy repozytorium).

Usuń wszystkie stare rekordy A/CNAME dla `@` i `www`, jeśli jakieś zostały —
konfliktujące wpisy to najczęstsza przyczyna „nie działa".

### 5c. Włącz HTTPS

Wróć do **Settings → Pages**. Kiedy GitHub potwierdzi DNS (od kilku minut do 24 godzin),
odblokuje się checkbox **Enforce HTTPS**. Zaznacz go.

Certyfikat Let's Encrypt wystawia się automatycznie i za darmo. Do momentu jego wydania
przeglądarka może straszyć ostrzeżeniem — to normalne, przejdzie samo.

### 5d. Plik CNAME

W paczce jest już plik `CNAME` z treścią `pushtomain.pl`. Jeśli zrobiłeś krok 5a
przez interfejs GitHuba, plik mógł zostać nadpisany — to w porządku, ma zawierać
dokładnie tę jedną linijkę.

---

## Krok 6 — Twoje logo i zdjęcie

Logo jest już wgrane i przygotowane w kilku wariantach z pliku, który przesłałeś.
Tło zostało usunięte, więc działa na każdym kolorze.

| plik | gdzie się pojawia |
|---|---|
| `logo.png` | nagłówek strony (na białym) |
| `logo-white.png` | stopka (na grafitowym) — wersja odwrócona |
| `icon.png` | sama ikona, bez napisu |
| `favicon-32.png` | ikonka w karcie przeglądarki |
| `apple-touch-icon.png` | ikona po dodaniu strony do ekranu telefonu |

**Nic tu nie musisz robić.** Chyba że chcesz podmienić — wtedy zachowaj te same nazwy.

### Zdjęcie — to zrób koniecznie

`assets/img/avatar.jpg` to na razie szara sylwetka. **Wgraj tam swoje zdjęcie.**
Kwadrat, minimum 400×400 px, format `.jpg`.

Obie strony, które mi pokazałeś, mają zdjęcie autora w nagłówku i to nie przypadek —
to najmocniejszy sygnał, że za blogiem stoi człowiek, a nie generator treści.
Bez zdjęcia strona traci najwięcej.

### Grafika do social mediów

Dodaj `assets/img/og.png` w wymiarach **1200×630 px** — to obrazek, który pokaże się
przy linku wklejonym na LinkedIn czy Facebooka. Może być logo na białym tle.

## Krok 7 — Napisz pierwszy wpis

Każdy wpis to jeden plik `.md` w folderze `_posts`. Nazwa musi mieć format:

```
RRRR-MM-DD-tytul-po-myslnikach.md
```

Przykład: `2026-09-03-czym-jest-hashmap.md` → adres `pushtomain.pl/blog/czym-jest-hashmap/`

Na górze pliku idzie **front matter** między liniami `---`:

```markdown
---
title: "Czym właściwie jest HashMap"
date: 2026-09-03 20:00:00 +0200
summary: "Jedno zdanie, które pojawi się na liście wpisów i w wyszukiwarce."
tags: [java, kolekcje]
cover: /assets/img/okladki/hashmap.png   # opcjonalne
---

Tu zaczyna się treść.
```

Pole `cover` jest opcjonalne — ścieżka do okładki wpisu, np. `/assets/img/okladki/hashmap.png`
(najlepiej 1200×675 px). **Jeśli je pominiesz, okładka wygeneruje się sama** — grafitowy
kafelek z nazwą tagu. Wzór tła dobiera się automatycznie, więc karty na liście nie
wyglądają identycznie.

### Blok kodu

Otwierasz trzema backtickami plus `java`:

````markdown
```java
List<String> jezyki = new ArrayList<>();
jezyki.add("Java");
```
````

Kolorowanie składni działa od razu — Jekyll ma wbudowany Rouge.
Nie potrzebujesz gistów ani żadnych wtyczek.

### Ramka „gdzie się wyłożyłem"

To wyróżniony blok — najcenniejsza część każdego wpisu. Wklej w treść:

```html
<div class="note" markdown="1">
<span class="note__label">Gdzie się wyłożyłem</span>

Tu opisz błąd. Markdown w środku działa normalnie,
bo jest `markdown="1"`.
</div>
```

Renderuje się jako brzoskwiniowa ramka z paskiem w kolorze akcentu.

Atrybut `markdown="1"` jest obowiązkowy — bez niego treść w środku
zostanie potraktowana jak surowy HTML.

### Szablon do kopiowania

```markdown
---
title: ""
date: 2026-09-03 20:00:00 +0200
summary: ""
tags: [java]
---

## Problem

Czego rano nie rozumiałem.

## Co odkryłem

Wyjaśnienie plus kod.

<div class="note" markdown="1">
<span class="note__label">Gdzie się wyłożyłem</span>

Błąd, stack trace, ślepa uliczka.
</div>

## Następny krok

Co biorę dalej.
```

---

## Codzienna praca — jak dodać wpis w 3 minuty

1. Wejdź na `github.com/TWOJ-NICK/TWOJ-NICK.github.io/tree/main/_posts`
2. **Add file → Create new file**
3. Nazwa: `2026-09-03-nazwa-wpisu.md`
4. Wklej szablon, napisz treść
5. **Commit changes**
6. Poczekaj minutę, odśwież stronę

Wpis sam trafi na stronę główną, do archiwum, do sekcji tematycznej i do RSS-a.
Niczego nie dopisujesz ręcznie.

Na telefonie działa tak samo — aplikacja GitHub pozwala edytować pliki.

---

## Opcjonalnie — podgląd na komputerze

Przydaje się, gdy chcesz zobaczyć wpis przed publikacją.

**Wymaga Ruby.** Windows: [rubyinstaller.org](https://rubyinstaller.org/)
(wersja **Ruby+Devkit**). macOS/Linux: Ruby zwykle już jest.

```bash
gem install bundler
cd pushtomain
bundle install
bundle exec jekyll serve --livereload
```

Otwórz `http://localhost:4000`. Strona przeładowuje się przy każdym zapisie pliku.

Wpisy z przyszłą datą nie pokażą się domyślnie — dodaj flagę `--future`,
żeby je zobaczyć.

---

## Krok 8 — Google Search Console

Żeby wpisy pojawiały się w Google:

1. Wejdź na [search.google.com/search-console](https://search.google.com/search-console)
2. Dodaj zasób typu **Prefiks adresu URL**: `https://pushtomain.pl`
3. Zweryfikuj przez rekord TXT w DNS (ta sama zakładka co w kroku 5b)
4. W sekcji **Mapy witryn** dodaj: `sitemap.xml`

Mapa generuje się sama przy każdym buildzie, nie musisz jej aktualizować.

---

## Gdy coś nie działa

| objaw | przyczyna |
|---|---|
| Strona pusta / błąd builda | Zakładka **Actions** pokaże, w którym pliku jest problem. Najczęściej literówka w `_config.yml` — YAML jest wrażliwy na wcięcia. |
| Wpis się nie pojawia | Zła nazwa pliku (musi być `RRRR-MM-DD-`), data z przyszłości, albo brak `---` na górze. |
| Style się nie ładują | Sprawdź, czy `url` w `_config.yml` nie ma ukośnika na końcu. |
| Domena nie działa po godzinie | Sprawdź propagację na [dnschecker.org](https://dnschecker.org). Bywa, że trwa do 48 h. |
| Brak opcji „Enforce HTTPS" | GitHub jeszcze nie potwierdził DNS. Poczekaj, potem usuń i dodaj domenę ponownie w Settings → Pages. |
| Cudzysłowy łamią tytuł | Ujmij tytuł w cudzysłowy: `title: "Coś: z dwukropkiem"`. Dwukropek bez cudzysłowów psuje YAML. |

---

## Co jest gdzie

```
_config.yml          ustawienia — tu wpisujesz swoje dane
CNAME                domena (pushtomain.pl)
index.html           strona główna: powitanie + 4 ostatnie wpisy + CTA
blog.html            archiwum, pogrupowane po latach
notatki.html         wpisy pogrupowane po tagach (buduje się samo)
o-mnie.md            strona o Tobie — edytuj treść
404.html             strona błędu
feed.xml             RSS
sitemap.xml          mapa dla Google

_posts/              ← TU piszesz. Jeden plik = jeden wpis
_layouts/            szkielety stron (default, post, page)
_includes/           powtarzalne fragmenty (nagłówek, stopka, karta wpisu)
assets/css/style.css cały wygląd — kolory na samej górze pliku
assets/js/nav.js     menu na telefonie
assets/img/          logo, favicony, avatar
```

## Zmiana kolorów

Paleta jest wzięta **wprost z Twojego logo** — grafit `#111827` i biel `#F9FAFB`.
Dzięki temu logo nie odstaje od reszty strony.

Wszystko siedzi w pierwszych 30 liniach `assets/css/style.css`:

```css
--ink:         #111827;   /* grafit z logo — tekst, stopka, okładki */
--accent:      #F04E30;   /* akcent — linki, podkreślenia, przyciski */
--accent-dark: #C4361B;   /* akcent po najechaniu */
--accent-soft: #FEF1ED;   /* tło ramki "gdzie się wyłożyłem" */
```

Zmieniasz akcent w jednym miejscu i zmienia się na całej stronie.
Jeśli wermilion Ci nie leży, sprawdź np. `#2563EB` (niebieski),
`#059669` (zielony) albo `#7C3AED` (fiolet) — pamiętaj o dopasowaniu
dwóch pozostałych odcieni.

## Kroje pisma

- **Manrope** — nagłówki, menu, przyciski (mocny, geometryczny)
- **Inter** — tekst do czytania
- **JetBrains Mono** — kod, daty, tagi

Wszystkie z Google Fonts, ładują się same. Zmienisz je w `_includes/head.html`
i w zmiennych `--display`, `--sans`, `--mono` w CSS.
