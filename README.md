# Cypress_POM_TS_02
- Cypress with TypeScript and Page Objct Model

  
- Das Page Object Model hilft dabei, den Testcode sauber und wartbar zu halten, indem es die Interaktionen mit der Benutzeroberfläche in separate Klassen kapselt. Dies erleichtert die Wiederverwendung und Wartung des Codes.
 

# In diesem Beispiel haben wir:
- Fixtures verwendet, um Selektoren zu speichern.
- Page Object Model verwendet, um die Login-Seite zu kapseln.
- Benutzerdefinierte Befehle erstellt, um wiederholte Aktionen zu kapseln.
- Tests geschrieben, die unabhängig und gut strukturiert sind.

  
# Ordner Struktur
- cypress/
- ├── e2e/
- │ └── login.spec.ts
- ├── fixtures/
- │ └── appSelectors.json
- ├── pageObjects/
- │ └── loginPage.ts
- ├── support/
- │ ├── commands.ts
- │ └── e2e.ts
- └── cypress.json

  

# appSelector.json
- Diese Datei enthält die Selektoren für die Elemente auf der Login-Seite. 
- Sie ist im JSON-Format gespeichert und wird verwendet, um die Selektoren in den Page-Objekten und Tests zu referenzieren. 
- Dies hilft, die Selektoren an einem zentralen Ort zu verwalten und macht den Code wartbarer.

  

# loginPage.cy.ts
- Diese Datei definiert ein Page-Objekt für die Login-Seite. 
- Das Page-Objekt kapselt die Interaktionen mit der Login-Seite und stellt Methoden bereit, um Benutzername und Passwort einzugeben sowie den Login-Button zu klicken. 
- Die Selektoren werden aus der appSelectors.json-Datei importiert.

  

# commands.ts
- Diese Datei definiert benutzerdefinierte Cypress-Befehle. 
- In diesem Fall wird ein benutzerdefinierter Befehl login hinzugefügt, der die Methoden des loginPage-Objekts verwendet, um den Login-Prozess zu automatisieren. 
- Dies hilft, wiederholte Aktionen zu kapseln und den Testcode sauber und wiederverwendbar zu halten.

  

# e2e.ts
- Diese Datei importiert die benutzerdefinierten Befehle aus commands.ts. 
- Dies stellt sicher, dass die benutzerdefinierten Befehle in allen Tests verfügbar sind.
 
  

# login.spec.cy.ts
- Diese Datei enthält die eigentlichen Tests für die Login-Seite. Jeder Testfall ist in einem it-Block definiert. 
- Der beforeEach-Hook stellt sicher, dass die Login-Seite vor jedem Test aufgerufen wird. 
- Die Tests verwenden den benutzerdefinierten login-Befehl, um den Login-Prozess zu automatisieren und überprüfen dann die erwarteten Ergebnisse.

  

# Zusammengefasst:
- appSelectors.json: Enthält die Selektoren für die Elemente auf der Login-Seite.
- loginPage.ts: Definiert ein Page-Objekt für die Login-Seite und kapselt die Interaktionen.
- commands.ts: Definiert benutzerdefinierte Cypress-Befehle.
- index.ts: Importiert die benutzerdefinierten Befehle.
- login.spec.ts: Enthält die eigentlichen Tests für die Login-Seite.
- Diese Struktur hilft dabei, den Testcode sauber, wartbar und wiederverwendbar zu halten.