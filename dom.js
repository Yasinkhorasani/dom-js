//Gib in der Konsole den Inhalt der Überschrift aus.

        // KONSTANTEN / VARIABLEN
        // DOM-Elemente sind global gut aufgehoben, weil sie so aus jeder Funktion heraus angesprochen werden können
        const elements = {};

        // FUNKTIONEN
        const output = () => {
            console.log( elements.header.innerText );
        }

        // Alle benötogten DOM-Elemente in ein globales Objekt "mappen" (verknüpfen)
        const domMapping = () => {
            elements.header = document.querySelector('h1');
        }

        // Die init()-Funktion sollte immer so kurz und übersichtlich wie möglich sein
        const init = () => {
            domMapping();
            output();
        }
        
        

        //Gib in der Konsole die Inhalte aller P-Tags aus
        const elements = {};

        // FUNKTIONEN
        const output = () => {
            // Da pTags ein Array ist, muss es iteriert werden, um auf die einzelnen Elemente zugreifen zu können
            for ( let i = 0; i < elements.pTags.length; i++){
                let pTag = elements.pTags[i];
                console.log(pTag.innerText);
            }
        }

        // Alle benötogten DOM-Elemente in ein globales Objekt "mappen" (verknüpfen)
        const domMapping = () => {
            elements.header = document.querySelector('h1');
            elements.pTags = Array.from(document.querySelectorAll('p'));
        }

        // Die init()-Funktion sollte immer so kurz und übersichtlich wie möglich sein
        const init = () => {
            domMapping();
            output();
        }
        
        //alternativ
        document.addEventListener("DOMContentLoaded", evt => {
            let pTags = Array.from(document.querySelectorAll('p'));
             for (let p of pTags) {
              console.log(p.innerText);
             }
            });
            //zweite alternative
            
        // DOM-Elemente sind global gut aufgehoben, weil sie so aus jeder Funktion heraus angesprochen werden können
        const elements = {};

        // FUNKTIONEN
        const output = () => {
            // Eine for-of-Schleife iteriert ein Array und schreibt die Attribute in eine Variable
            for (let pTag of elements.pTags) {
                console.log(pTag.innerText);
            }
        }

        // Alle benötogten DOM-Elemente in ein globales Objekt "mappen" (verknüpfen)
        const domMapping = () => {
            elements.header = document.querySelector('h1');
            elements.pTags = Array.from(document.querySelectorAll('p'));
        }

        const init = () => {
            domMapping();
            output();
        }




        //Gib in der Konsole die Inhalte aller P-Tags mit der Klasse "hallo" aus.
        const elements = {};

        // FUNKTIONEN
        const output = () => {
            // Eine for-of-Schleife iteriert ein Array und schreibt die Attribute in eine Variable
            for (let pTag of elements.pTags) {
                console.log(pTag.innerText);
            }
        }

        // Alle benötogten DOM-Elemente in ein globales Objekt "mappen" (verknüpfen)
        const domMapping = () => {
            elements.header = document.querySelector('h1');
            elements.pTags = Array.from(document.querySelectorAll('p.hallo'));
        }

        // Die init()-Funktion sollte immer so kurz und übersichtlich wie möglich sein
        const init = () => {
            domMapping();
            output();
        }
        //alternativ
        document.addEventListener("DOMContentLoaded", evt => {
            let pTags = Array.from(document.querySelectorAll('p.hallo'));
            for (let p of pTags) {
             console.log(p.innerText);
            }
           });



        //Alle Container mit der Klasse "welt" sollen zusätzlich die Klasse "highlight" zugewiesen bekommen.   
        const elements = {};

        // FUNKTIONEN
        const output = () => {
            for (let el of elements.welt) {
                el.classList.add('highlight');
            }
        }

        const domMapping = () => {
            elements.header = document.querySelector('h1');
            elements.pTags = Array.from(document.querySelectorAll('p.hallo'));
            elements.welt = Array.from(document.querySelectorAll('.hallo'));
        }

        const init = () => {
            domMapping();
            output();
        }


        //Alle P-Tags mit der Klasse Welt soll alle Klassen entfernt bekommen.
        const elements = {};

        // FUNKTIONEN
        const output = () => {
            /* Alternative 1: Über die Klassen iterieren
            for (let el of elements.pTags) {
                let classList = Array.from(el.classList);
                for (let theClass of classList) {
                    el.classList.remove(theClass);
                }
            }
            */
           
           /* Alternative 2: Klassen-Attribut neu schreiben
           for (let el of elements.pTags) {
               // das className-Attribut überschreibt die Klassen vollständig
               el.className = '';
            }
            */
           
           // Alternative 3: das ganze Attribut entfernen
           for (let el of elements.pTags) {
               el.removeAttribute('class');
           }             
        } 
        const domMapping = () => {
            elements.pTags = Array.from(document.querySelectorAll('p.welt'));
        }
        const init = () => {
            domMapping();
            output();
        }


        //Lege mit HTML-Code eine Tabelle mit 10 * 10 Feldern an.
        //Jedes der Felder soll eine individuelle Farbe erhalten.

    
        const elements = {};

        // FUNKTIONEN
        const createNumber = (min, max) => ~~(Math.random() * (max - min + 1) + min);

        // Erzeugen einer zufälligen Farbe
        const createColor = () => `hsl(${createNumber(0,360)}, 80%, 60%)`;

        const domMapping = () => {
            elements.output = document.querySelector('#output');
        }

        const drawTable = (numCells, numRows) => {
            const table = document.createElement('table');
            elements.output.append(table);

            // Anlegen der Tabellenzeilen
            for (let i = 0; i < numRows; i++) {
                const tr = document.createElement('tr');
                table.append(tr);

                // Anlegen der Tabellenfelder
                for (let j = 0; j < numCells; j++) {
                    const td = document.createElement('td');
                    tr.append(td);
                    td.className = 'feld';
                    td.style.backgroundColor = createColor();
                }
            }
        }

        const init = () => {
            domMapping();
            drawTable(10, 10);
            drawTable(5, 5);
            drawTable(15, 15);
        }
        
        //Alternative
        
        const elements = {};

        // Sammlung verschiedener Farben
        const colorNames = [
            'MediumSeaGreen',
            'DarkSeaGreen',
            'ForestGreen',
            'GreenYellow',
            'LimeGreen'
        ]

        // FUNKTIONEN
        const createNumber = (min, max) => ~~(Math.random() * (max - min + 1) + min);

        // Erzeugen einer zufälligen Farbe
        const createColor = () => {
            let index = createNumber(0, colorNames.length - 1);
            return colorNames[index];
        };

        const domMapping = () => {
            elements.output = document.querySelector('#output');
        }

        const drawTable = (numCells, numRows) => {
            const table = document.createElement('table');
            elements.output.append(table);

            // Anlegen der Tabellenzeilen
            for (let i = 1; i <= numRows; i++) {
                const tr = document.createElement('tr');
                table.append(tr);

                // Anlegen der Tabellenfelder
                for (let j = 1; j <= numCells; j++) {
                    const td = document.createElement('td');
                    tr.append(td);
                    td.className = 'feld';
                    td.style.backgroundColor = createColor();
                    td.innerHTML = i*j;
                }
            }
        }
        const init = () => {
            domMapping();

            drawTable(10, 10);
            drawTable(5, 5);
            drawTable(15, 15);
        }
