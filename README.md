# Hinweise zum Prozess-Worker
<!--
  Copyright (C) 2022 - present Ioannis Theodosiadis, Hochschule Karlsruhe
-->
Autoren: [Ioannis Theodosiadis](mailto:thio1011@h-ka.de), [Erik Dwornik](mailto:dwer1011@h-ka.de),
[Jan Riesterer](mailto:rija1027@h-ka.de), [Tugba Güneysu](mailto:gutu1011@h-ka.de)

> Diese Datei ist in Markdown geschrieben und kann mit `<Strg><Shift>v` in
> Visual Studio Code leicht gelesen werden.

## Inhalt
- [Vorbereitung der Installation](#vorbereitung-der-installation)
- [Installation](#installation)
  - [Node Modules](#node-modules)
  - [Camunda Run](#camunda-run)

- [Sonstiges](#sonstiges)
  - [Node Bestpractices](#node-bestpractices)

---

## Vorbereitung der Installation

- Das Beispiel _nicht_ in einem Pfad mit _Leerzeichen_ installieren.
  Viele Javascript-Bibliotheken werden unter Linux entwickelt und dort benutzt
  man **keine** Leerzeichen in Pfaden. Ebenso würde ich das Beispiel nicht auf
  dem  _Desktop_ auspacken bzw. installieren.

- Bei [GitHub](https://github.com) oder [GitLab](https://gitlab.com)
  registrieren, falls man dort noch nicht registriert ist.

- Link zum [Repository](https://github.com/1oannis/camunda)

---

## Installation

### Node Modules

- Der _camunda-external-task-client-js_ im Projekt-Verzeichnis heruntergeladen.
  ```powershell
      npm i
  ```

### Camunda Run

- Für _Camunda Platform 7 Run_ wird JDK 15 Benötigt
  - Hier bei _Oracle_ erhältlich für Win x64[JDK 15.0.2](https://www.oracle.com/java/technologies/javase/jdk15-archive-downloads.html#license-lightbox)
- Hier geht es zum Download von [Camunda Platform 7 Run](https://downloads.camunda.cloud/release/camunda-bpm/run/7.18/camunda-bpm-run-7.18.0.zip)

## 




## Sonstiges

### Node Bestpractices

- Sehr empfehlenswert ist https://github.com/goldbergyoni/nodebestpractices