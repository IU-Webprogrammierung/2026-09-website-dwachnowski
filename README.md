# Persönlicher Webauftritt - Duncan Wachnowski

Dieses Projekt entstand im Rahmen des Moduls Web-Programmierung an der IU Internationalen Hochschule.

Ziel des Projekts ist die Entwicklung eines persönlichen, responsiven Webauftritts, der meine bisherigen Erfahrungen, gestalterischen Schwerpunkte, Projekte sowie meinen beruflichen und akademischen Werdegang präsentiert. Gleichzeitig dient die Webseite als Grundlage für ein später weiterentwickelbares Bewerbungs- und Portfolio-Projekt.

## Projektziel

Der Webauftritt soll als persönliches Portfolio dienen und einen übersichtlichen Einblick in meine bisherigen Arbeiten, Fähigkeiten und Erfahrungen ermöglichen.

Im Mittelpunkt standen eine klare Gestaltung, eine verständliche Navigation, responsives Verhalten auf unterschiedlichen Bildschirmgrößen sowie die praktische Anwendung von HTML, CSS und JavaScript.

## Seitenstruktur

Der Webauftritt besteht aus fünf zentralen miteinander verlinkten Inhaltsseiten:

- Start
- Über mich
- Projekte
- Laufbahn
- Kontakt

Ergänzend wurden weitere Seiten für Impressum, Datenschutz sowie eine individuelle 404-Fehlerseite umgesetzt.

## Inhalte

Die Startseite bietet einen kompakten Überblick über meine Person, ausgewählte Projekte und meinen bisherigen Werdegang.

Die Seite Über mich stellt meine gestalterischen Schwerpunkte, Fähigkeiten und eingesetzten Anwendungen vor.

Auf der Seite Projekte werden ausgewählte Arbeiten aus Studium, Beruf und persönlichen Projekten präsentiert. Dabei kommen unterschiedliche Medien wie Bilder, Bildergalerien und Video zum Einsatz.

Die Seite Laufbahn zeigt meinen beruflichen und akademischen Werdegang in Form einer visuellen Timeline.

Die Kontaktseite enthält Kontaktmöglichkeiten, Social-Media-Informationen und ein Kontaktformular.

## Projektstruktur

Die Dateien des Webauftritts wurden übersichtlich in verschiedene Bereiche gegliedert.

Dazu zählen:

- css/ für die Stylesheets
- js/ für JavaScript
- images/ für Bilddateien
- videos/ für Videoinhalte
- documents/ für zusätzliche Dokumente
- einzelne HTML-Dateien für die jeweiligen Seiten
- README.md für die Projektdokumentation

## Technologien und Methoden

Für die Entwicklung des Webauftritts wurden unter anderem folgende Technologien und Methoden eingesetzt:

- HTML5
- CSS3
- JavaScript
- semantisches HTML
- Flexbox
- CSS Grid
- Media Queries
- CSS Custom Properties
- responsive Webdesign
- Git
- GitHub
- Visual Studio Code
- Live Preview beziehungsweise lokaler Entwicklungsserver

Auf externe CSS- oder JavaScript-Frameworks wurde bewusst verzichtet. Die Gestaltung und Funktionalität wurden mit HTML, CSS und JavaScript umgesetzt.

## Responsive Design

Die Webseite wurde für unterschiedliche Bildschirmgrößen konzipiert und umgesetzt. Die Darstellung passt sich mithilfe von Media Queries an verschiedene Viewports an.

Auf größeren Bildschirmen werden mehrspaltige Layouts verwendet. Auf kleineren Geräten werden die Inhalte entsprechend angepasst und überwiegend einspaltig dargestellt.

Responsiv angepasst wurden unter anderem:

- Navigation
- Projektbereiche
- Bildergalerien
- Inhaltskarten
- Skills und Kompetenzbereiche
- Kontaktformular
- Laufbahn und Timeline
- Buttons und weitere Interaktionselemente

Die Webseite wurde während der Entwicklung auf unterschiedlichen Bildschirmgrößen überprüft.

## JavaScript und Interaktionen

JavaScript wird für verschiedene interaktive Funktionen des Webauftritts eingesetzt.

Dazu gehören unter anderem:

- mobile Navigation
- Dark- und Light-Mode
- Speicherung der ausgewählten Darstellung mit localStorage
- Back-to-top-Funktion
- dynamische Interaktionen innerhalb des Webauftritts

Durch localStorage bleibt die gewählte Darstellung auch nach einem erneuten Laden beziehungsweise Aufrufen der Webseite erhalten.

## Dark- und Light-Mode

Der Webauftritt verfügt über einen umschaltbaren Dark- und Light-Mode.

Die beiden Darstellungen verwenden unterschiedliche Farbkonzepte. Wiederkehrende Farben und Gestaltungseigenschaften werden über CSS Custom Properties verwaltet.

Die Auswahl der Nutzer:in wird mit localStorage gespeichert und beim erneuten Aufrufen der Webseite berücksichtigt.

## Barrierefreiheit

Bei der Entwicklung wurden grundlegende Anforderungen an barrierearmes Webdesign berücksichtigt.

Zu den umgesetzten Maßnahmen gehören:

- semantische HTML-Struktur
- sinnvole Überschriftenhierachie
- Alt-Texte für relevante Bilder
- ARIA-Attribute an geeigneten Interaktionselementen
- Skip-Link zum Hauptinhalt
- sichtbare Fokuszustände
- Tastaturbedienbarkeit
- verständliche Navigation
- eindeutige Link- und Buttonbeschriftungen
- ausreichende Farbkontraste
- ausreichend große Interaktionsflächen
- semantische Kennzeichung von Formularinhalten

Die Bedienbarkeit der Webseite wurde zusätzliche über die Tastatur beziehungsweise Tab-Navigation überprüft.

## Projekte und Medien

Auf der Projektseite werden unterschiedliche Arbeiten und Medienformate präsentiert.

Darunter zählen:

- UX/UI-Projekte
- Webdesign-Projekte
- audiovisuelle Arbeiten
- 3D-Renderings
- Bildergalerien

Bilder können bei entsprechenden Projekten zusätzlich in einer größeren Ansicht geöffnet werden.

Die einzelnen Projektbilder verfügen über beschreibende Alt-Texte. Bildergalerien wurden zusätzlich semantisch beziehungsweise mithilfe geeigneter ARIA-Beschriftungen gekennzeichnet.

## Performance und Medienoptimierung

Im Rahmen der Finalisierung wurde die Performance des Webauftritts überprüft und optimiert.

Zu den vorgenommenen Maßnahmen zählen:

- Lazy Loading bei geeigneten Bildern
- asynchrones Decodieren von Bildern
- Optimierung großer Bilddateien
- Einsatz des AVIF-Formats bei ausgewählten Bildern
- Anpassung von Bildgrößen an die Verwendung im Web
- Komprimierung des eingebundenen MP4-Videos
- Verwendung von preload="metadata" beim Video
- Reduzierung unnötig großer Mediendateien

Dadurch konnte insbesondere die übertragene Datenmenge der Projektseie deutlich reduziert werden.

Bei den großformatigen Projektbildern wurde bewusst auf eine weitere starke Komprimierung verzichtet, da zusätzliche Optimierungen zu einem sichtbar schlechteren Bildeindruck führten. Für ein gestalterisches Portfolio wurde in diesem Fall die visuelle Qualität der Arbeiten höher gewichtet als das Erreichen eines maximalen Lighthouse-Performance-Werts.

## Weitere Funktionen

Zusätzlich wurden verschiedene Funktionen und Erweiterungen umgesetzt:

- individuelle 404-Fehlerseite
- Dark- und Light-Mode
- Back-to-top-Button
- Skip-Link
- responsive Bildergalerien
- Kontaktformular
- Favicon
- Print-Styles
- Fokus- und Hover-Zustände
- externe Bildansichten mit geeigneten Sicherheitsattributen
- Speicherung von Einstellungen über localStorage

## Print-Darstellung

Für geeignete Inhalte wurde eine seperate Darstellung für den Druck über eine CSS Media Query umgesetzt.

Dadurch können Inhalte wie der berufliche und akademische Werdegang auch außerhalb der normalen Bildschirmdarstellung sinnvoll ausgegeben werden.

## Qualitätssicherung und Tests

Während der Entwicklung und Finalisierung wurde der Webauftritt regelmäßig überprüft.

Darunter kamen zum Einsatz:

- W3C HTML Validator
- W3C CSS Validator
- Google Lighthouse
- Tests verschiedener Bildschirmgrößen und Breakpoints
- Tests der mobilen Navigation
- Tastaturbedienung über die Tab-Taste
- Überprüfung der Fokuszustände
- Überprüfung des Dark- und Light-Modes
- Überprüfung interner Verlinkungen
- Überprüfung der 404-Seite
- Überprüfung der responsiven Darstellung
- Tests der eingebundenen Bilder und Videos
- Tests des Webauftritts unabhängig vom lokalen Entwicklungsserver

Alle HTML-Seiten wurden im final überprüften Stand mit dem W3C Nu HTML Checker validiert und weisen keine HTML-Fehler oder Warnungen auf.

Auch die CSS-Datei wurde mit dem W3C CSS Validator überprüft und weist im final überprüften Stand keine CSS-Validierungsfehler auf.

Google Lighthouse wurde ergänzend eingesetzt, um unter anderem Performance, Barrierefreiheit, Best Practices und Suchmaschinenoptimierung zu überprüfen.

## Versionskontrolle

Das Projekt wird mit Git und GitHub verwaltet.

Die Entwicklung wurde über regelmäßige Commits dokumentiert. Dadurch bleiben einzelne Entwicklungsschritte und Änderungen nachvollziehbar und frühere Projektstände erhalten.

Die Versionskontrolle wurde während der verschiedenen Projektphasen kontinuierlich eingesetzt. Der finale Projektstand wird über den main-Branch verwaltet und auf GitHub bereitgestellt.

## Projektphasen

### Phase 1 - Konzeptionsphase

In der ersten Phase wurden das Grundkonzept, die Seitenstruktur, Desktop- und Mobile-Skizzen sowie die erste semantische HTML-Struktur erstellt.

Dabei wurden die grundlegenden Inhalte und die visuelle Ausrichtung des persönlichen Webauftritts festgelegt.

### Phase 2 - Erarbeitungs- und Reflexionsphase

In der zweiten Phase wurde die HTML-Struktur weiterentwickelt und das responsive Design mit CSS umgesetzt.

Bestehende Inhalte und Layouts wurden überarbeitet und Rückmeldungen aus dem Feedback der Tutoren in die weitere Entwicklung einbezogen.

Darüber hinaus wurden die verschiedenen Seiten des Portfolios weiter ausgearbeitet und für unterschiedliche Bildschirmgrößen optimiert.

### Phase 3 - Finalisierungsphase

In der abschließenden Phase wurde der Webauftritt technisch und gestalterisch finalisiert.

Dabei wurden unter anderem:

- bestehender HTML- und CSS-Code überprüft und überarbeitet
- responsive Darstellungen weiter optimiert
- JavaScript-Interaktionen ergänzt und überprüft
- Dark- und Light-Mode umgesetzt
- Einstellungen über localStorage gespeichert
- Maßnahmen zur Barrierefreiheit ergänzt
- Fokus- und Tastaturbedienung überprüft
- eine individuelle 404-Seite umgesetzt
- eine Print-Darstellung ergänzt
- Bilder und Videos für die Webdarstellung optimiert
- Performance-Optimierungen vorgenommen
- HTML und CSS validiert
- Lighthouse zur technischen Überprüfung eingesetzt
- der Webauftritt auf unterschiedlichen Bildschirmgrößen getestet

Durch die Finalisierungsphase wurde Webauftritt sowohl technisch als auch gestalterisch weiterentwickelt und für die finale Abgabe vorbereitet.

## Erkenntnisse aus dem Projekt

Im Verlauf des Projekts konnten insbesondere folgende Kenntnisse praktisch angewendet und vertieft werden:

- strukturierter Aufbau mehrseitiger Webseiten
- semantischer Einsatz von HTML5
- Gestaltung komplexerer Layouts mit Flexbox und CSS Grid
- Entwicklung responsiver Layouts mit Media Queries
- Verwendung von CSS Custom Properties
- Umsetzung von Dark- und Light-Themes
- Entwicklung interaktiver Funktionen mit JavaScript
- persistente Speicherung von Einstellungen mit localStorage
- grundlegende Maßnahmen zur Barrierefreiheit
- Optimierung von Bildern und Videos für das Web
- Verbesserung von Ladezeiten und Performance
- technische Prüfung mit W3C Validatoren und Lighthouse
- Versionskontrolle mit Git und GitHub
- schrittweise Refractoring und Weiterentwicklung eines bestehenden Webprojekts

Das Projekt hat damit sowohl gestalterische als auch technische Aspekte der modernen Frontend-Webentwicklung miteinander verbunden.
