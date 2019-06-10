# PnK 4

## Informacje wstępne

Jeśli przeszkadza ci obecne formatowanie tekstu, pobierz PDF: https://transfer.grupazpr.pl/download?di=_ql213zAaLYF8cxePGAUgTWhsutRmEJjnC1oyccSZog&key=086652b6bb816fb33282d0f87f647595

Zakładam, że każdy z was zapoznał się z template stringami oraz nową składnią funkcji. 
Będzie pojawiać się to na tyle często, że opanowanie tych małych elemencików jest niezbędne
w dalszym przyswajaniu wiedzy. 


Dzisiejszym tematem jest:

* Asynchroniczność
* Podstawy programowania funkcyjnego w JS 

1. Obecnie w JSie budowane są zarówno duże systemy backendowe jak i 
aplikacje klienckie (często z interaktywnym UI). Praca na dużych zbiorach danych, bądź z zewnętrznymi 
źródłami danych, potrafi być problematyczna i blokować nasze programy w najmniej spodziewanym momencie.

Wyobraźmy sobie sytuację, że tworzymy dashboard analityczny, który pobiera dane w interwale 1 sekundowym z 
serwisu RESTowego. Każde pobranie danych odświeża wybrane wykresy oraz aktualizuje tabelę. 
Bez zastosowania asynchroniczności interfejs użytkownika **blokowałby się** przy każdej próbie pobrania danych,
co w dalszej perspektywie czasowej poskutkowałoby irytacją użytkownika systemu. 

Początkowo asynchroniczność w JS była zaimplementowana za pomocą callbacków.
Callbacki i piekło z nimi związane, to przykry element historii JS, całe szczęście zostały one wyparte przez obietnice (promises).

Zanim przejdziecie dalej, proszę przeczytać ten artykuł związany z obietnicami: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

To co wprowadził ES7 i ES8 to `syntax sugar` na obietnice, który w znaczący sposób zwiększa czytelność naszego kodu. 
Całość składa się zawsze z dwóch słów kluczowych: `async` oraz `await`.

Przykład:

```
async function getWeather() {
  const result = await getMyWeather();

  return result.json();
} 

const currentWeather = getMyWeather();
console.log(currentWeather);
```

Niestety, więcej na ten temat nie będę się rozpisywał, ponieważ jest on na tyle rozległy, że zająłby spokojnie
dwie czy trzy PnK. W całym zagadnieniu chodzi o to, żebyście wiedzieli o istnieniu asynchroniczności i ewentualnie
wiedzieli jak ją obsłużyć. Nie musicie na tym etapie zagłębiać się we wszystkie kruczki.

Więcej na temat nowej składni znajdziecie na stronie: https://javascript.info/async-await

2. Programowanie funkcyjne w JS - czyli temat rzeka, jednak bez podstaw nie przejdziemy do dalszych
części kursu. 

To co chciałbym, żebyście dziś opanowali to instrukcja: `map`, `filter` oraz `reduce`. 

Bardzo dobry artykuł na ich temat znajdziecie tutaj: http://www.algosmart.pl/programowanie-funkcyjne-powtorka-reactjs-11/
(dokładniej proszę przeczytać akapit: Funkcyjna święta trójca).


Jak przeczytacie wszystkie podlinkowane treści, proszę przejść do ćwiczeń.
