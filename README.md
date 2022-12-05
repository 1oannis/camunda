# Hinweise zum Projekt
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
  - [JSON Server](#json-server)
  - [Camunda Run](#camunda-run)
  - [Camunda Modeler](#camunda-modeler)
- [Nutzung](#nutzung)
  - [Camunda starten](#camunda-starten)

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

- Die aktuelle Version von [NodeJS v19.2.0](https://nodejs.org/download/release/v19.2.0/node-v19.2.0-win-x64.zip) als ZIP
  - Die neue Version einfach in den Ordner _node_ Ordner entpacken

- Den _camunda-external-task-client-js_ im Projekt-Verzeichnis heruntergeladen.
  ```powershell
      npm i
  ```

### JSON Server

- Um die _db.json_ für die Rest-API von _Camunda_ erreichbar zu machen, müssen wir diese z.B. in _json-server_ laden
- Infos hierzu gibt es bei https://github.com/typicode/json-server#getting-started
  - Einfach im Installationsverzeichnis 
  ```powershell
      npm install -g json-server
  ```
  - Die _db.json_ muss in dem Verzeichnis liegen, indem später der Server gestartet wird
### Camunda Run

- Für _Camunda Platform 7 Run_ wird JDK 15 benötigt
  - Hier bei _Oracle_ erhältlich für Win x64[JDK 15.0.2](https://www.oracle.com/java/technologies/javase/jdk15-archive-downloads.html#license-lightbox)
- Hier geht es zum Download von [Camunda Platform 7 Run](https://downloads.camunda.cloud/release/camunda-bpm/run/7.18/camunda-bpm-run-7.18.0.zip)

### Camunda Modeler

- Hier geht es zum Download vom [Camunda Modeler](https://downloads.camunda.cloud/release/camunda-modeler/5.5.1/camunda-modeler-5.5.1-win-x64.zip)

---

## Nutzung

### Camunda starten

Camunda Run
- Ins Verzeichnis navigieren, indem _Camunda Run_ installiert wurde
  - _start.bat_ ausführen

Camunda Modeler
- Ins Verzeichnis navigieren, indem _Camunda Modeler_ installiert wurde
  - _Camunda Modeler.exe_ ausführen








## Sonstiges

### Node Bestpractices

- Sehr empfehlenswert ist https://github.com/goldbergyoni/nodebestpractices