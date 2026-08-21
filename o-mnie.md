---
layout: page
title: O mnie
permalink: /o-mnie/
summary: Kim jestem, czego się uczę i po co powstał ten blog.
lead: Kim jestem, czego się uczę i po co w ogóle powstał ten blog.
---

Cześć. Jestem **{{ site.author.name }}** i uczę się Javy od {{ site.learning_since }}.

Ten blog to mój dziennik nauki. Piszę go z trzech powodów:

1. **Żeby sprawdzić, czy naprawdę rozumiem.** Jeśli nie umiem czegoś wytłumaczyć w akapicie,
   to znaczy że tylko przekleiłem kod z tutoriala.
2. **Żeby mieć gdzie wracać.** Za pół roku nie będę pamiętał, dlaczego coś nie działało.
   Tutaj będzie zapisane.
3. **Żeby zostawić ślad.** Rekruter widzi konsekwencję lepiej niż certyfikat.

## Co tu znajdziesz

Wpisy o tym, czego akurat się uczę: podstawy języka, kolekcje, jak działa JVM,
programowanie obiektowe, testy, Spring — mniej więcej w tej kolejności.

Nie są to poradniki eksperta. To notatki kogoś, kto uczy się teraz, na głos,
razem z błędami po drodze. Jeśli zauważysz, że coś napisałem źle —
[napisz do mnie]({% if site.author.email %}mailto:{{ site.author.email }}{% else %}#{% endif %}),
poprawię i podziękuję.

## Czym się uczę

- **Kurs / książka:** *tu wpisz, z czego korzystasz*
- **Edytor:** IntelliJ IDEA Community
- **Wersja Javy:** 21 LTS
- **Kod:** wszystko ląduje na [GitHubie](https://github.com/{{ site.author.github }})

## Kontakt

{% if site.author.email %}Mail: [{{ site.author.email }}](mailto:{{ site.author.email }}){% endif %}
{% if site.author.linkedin %}· LinkedIn: [/{{ site.author.linkedin }}](https://linkedin.com/in/{{ site.author.linkedin }}){% endif %}
