# Cypress_POM_TS_02
- Cypress with TypeScript and Page Objct Model

  
- Das Page Object Model hilft dabei, den Testcode sauber und wartbar zu halten, indem es die Interaktionen mit der Benutzeroberfläche in separate Klassen kapselt. Dies erleichtert die Wiederverwendung und Wartung des Codes.
 
# Grobe Anleitung für den Start
### Schritt 1: Voraussetzungen

Stelle sicher, dass du die folgenden Voraussetzungen erfüllst:
- **Git**: Git muss auf deinem Computer installiert sein. Du kannst Git von der offiziellen Website herunterladen und installieren.
- **Node.js und npm**: Node.js und npm müssen installiert sein. Du kannst Node.js von der offiziellen Website herunterladen und installieren.
- **Visual Studio Code**: VS Code muss auf deinem Computer installiert sein. Du kannst VS Code von der offiziellen Website herunterladen und installieren.

### Schritt 2: VS Code öffnen
Öffne Visual Studio Code.

### Schritt 3: Git-Erweiterung öffnen
Klicke auf das Git-Symbol in der Seitenleiste auf der linken Seite von VS Code, um die Git-Erweiterung zu öffnen.

### Schritt 4: Repository klonen
1. Klicke auf das Symbol für “Repository klonen” (das Symbol sieht aus wie ein Kettenglied).
2. Ein Eingabefeld erscheint oben in VS Code. Gib die URL des Repositorys ein, das du klonen möchtest, und drücke die Eingabetaste.
3. Wähle den Ordner aus, in den du das Repository klonen möchtest, und klicke auf “Repository klonen”.

### Schritt 5: In das Projektverzeichnis wechseln
Nachdem das Repository geklont wurde, wirst du gefragt, ob du das geklonte Repository öffnen möchtest. Klicke auf “Öffnen”, um das Projekt in VS Code zu öffnen.

### Schritt 6: Terminal öffnen
Öffne das integrierte Terminal in VS Code, indem du auf `Terminal` > `Neues Terminal` im oberen Menü klickst.

### Schritt 7: Abhängigkeiten installieren
Im Terminal, das sich im Projektverzeichnis befindet, führe den folgenden Befehl aus, um die Abhängigkeiten zu installieren:

```bash
npm install
```

Dieser Befehl liest die `package.json`-Datei und installiert alle Abhängigkeiten, die für das Projekt erforderlich sind.

### Schritt 8: Cypress öffnen
Nachdem Cypress installiert ist, kannst du es mit dem folgenden Befehl öffnen:

```bash
npx cypress open
```

Dieser Befehl startet die Cypress-Benutzeroberfläche, in der du deine Tests ausführen und verwalten kannst.

### Schritt 9: Erste Tests ausführen

In der Cypress-Benutzeroberfläche kannst du nun deine ersten Tests ausführen. Cypress bietet einige Beispieltests, die du ausprobieren kannst, um dich mit der Umgebung vertraut zu machen.

### Zusammenfassung der Schritte
1. **Git installieren** (falls nicht installiert): Git herunterladen
2. **Node.js und npm installieren** (falls nicht installiert): Node.js herunterladen
3. **VS Code installieren** (falls nicht installiert): VS Code herunterladen
4. **VS Code öffnen**
5. **Git-Erweiterung öffnen** (Git-Symbol in der Seitenleiste)
6. **Repository klonen** (URL eingeben und Ordner auswählen)
7. **Projektverzeichnis öffnen** (geklontes Repository öffnen)
8. **Terminal öffnen** (`Terminal` > `Neues Terminal`)
9. **Abhängigkeiten installieren** (`npm install` im Terminal ausführen)
10. **Cypress öffnen**: `npx cypress open` im Terminal ausführen
11. **Erste Tests ausführen**: Beispieltests in der Cypress-Benutzeroberfläche ausprobieren

Mit diesen Schritten solltest du in der Lage sein, ein Repository in VS Code zu klonen die Abhängigkeiten zu installieren und Cypress in deinem Projekt zu installieren und zu starten. Viel Erfolg!
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
- e2e.ts: Importiert die benutzerdefinierten Befehle.
- login.spec.ts: Enthält die eigentlichen Tests für die Login-Seite.
- Diese Struktur hilft dabei, den Testcode sauber, wartbar und wiederverwendbar zu halten.