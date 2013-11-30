var info = [
    'Ungünstige Rahmenbedingungen',
    'Vier einsame graue Quadrate, zitternd in der Kälte. Was können wir bloß tun, um ihr Wohlbefinden wieder herzustellen? Geben wir ihnen doch etwas zum Anziehen!',
    '<strong>Aufgabe:</strong> Gib dem ersten Quadrat einen zwei Pixel dicken durchgehenden schwarzen Rahmen. Das zweite Quadrat bekommt einen vier Pixel dicken gepunkteten blauen Rahmen. Das dritte Quadrat soll in einem feschen gestrichelten Orange gekleidet sein, einen Pixel dick. Das vierte Quadrat soll aussehen wie das erste, aber an der oberen Kante soll der Rahmen fort bleiben!'
];

var hints = [
    'Um ein Element mit einem Rahmen zu versehen, kommt dir die Eigenschaft <span class="c">border</span> zugute. Diese bekommt drei Werte übergeben, jeweils durch ein Leerzeichen getrennt. Der erste ist die Breite des Rahmens, der zweite der Stil, und der dritte die Farbe.',
    'Die korrekten Formate für Breite und Farbe sollten dir geläufig sein. Der Rahmenstil wird durch einen der folgenden Begriffe bestimmt: <span class="c">solid</span>, <span class="c">dashed</span>, <span class="c">dotted</span>, <span class="c">double</span>, <span class="c">groove</span>, <span class="c">ridge</span>, <span class="c">inset</span> und <span class="c">outset</span>. Experimentiere mit diesen Werten, um herauszufinden, welche zum Lösen der Aufgabe die richtigen sind!',
    'Mit diesen Informationen sollte das Einkleiden der ersten drei Quadrate kein Problem sein... doch wie lässt man eine Seite des Rahmens weg? <span class="c">border</span> hat wie <span class="c">margin</span> und <span class="c">padding</span> vier Untereigenschaften, die sich auf die Kanten des Elements beziehen. Wie mögen die wohl lauten? Ein Tip noch: Der Wert, um einen Rahmen oder Teilrahmen wieder zu entfernen, lautet <span class="c">none</span>.'
];

function check() {
    if ($('#one').css('border-top-width') !== '2px' || $('#one').css('border-right-width') !== '2px' || $('#one').css('border-bottom-width') !== '2px' || $('#one').css('border-left-width') !== '2px') {
        return 'Die Rahmenbreite bei Quadrat Numero 1 stimmt leider nicht.';
    }

    if ($('#one').css('border-top-style') !== 'solid' || $('#one').css('border-right-style') !== 'solid' || $('#one').css('border-bottom-style') !== 'solid' || $('#one').css('border-left-style') !== 'solid') {
        return 'Der Rahmenstil bei Quadrat Numero 1 stimmt leider nicht.';
    }

    if ($('#one').css('border-top-color') !== 'rgb(0, 0, 0)' || $('#one').css('border-right-color') !== 'rgb(0, 0, 0)' || $('#one').css('border-bottom-color') !== 'rgb(0, 0, 0)' || $('#one').css('border-left-color') !== 'rgb(0, 0, 0)') {
        return 'Die Rahmenfarbe bei Quadrat Numero 1 stimmt leider nicht.';
    }

    if ($('#two').css('border-top-width') !== '4px' || $('#two').css('border-right-width') !== '4px' || $('#two').css('border-bottom-width') !== '4px' || $('#two').css('border-left-width') !== '4px') {
        return 'Die Rahmenbreite bei Quadrat Numero 2 stimmt leider nicht.';
    }

    if ($('#two').css('border-top-style') !== 'dotted' || $('#two').css('border-right-style') !== 'dotted' || $('#two').css('border-bottom-style') !== 'dotted' || $('#two').css('border-left-style') !== 'dotted') {
        return 'Der Rahmenstil bei Quadrat Numero 2 stimmt leider nicht.';
    }

    if ($('#two').css('border-top-color') !== 'rgb(0, 0, 255)' || $('#two').css('border-right-color') !== 'rgb(0, 0, 255)' || $('#two').css('border-bottom-color') !== 'rgb(0, 0, 255)' || $('#two').css('border-left-color') !== 'rgb(0, 0, 255)') {
        return 'Die Rahmenfarbe bei Quadrat Numero 2 stimmt leider nicht.';
    }

    if ($('#three').css('border-top-width') !== '1px' || $('#three').css('border-right-width') !== '1px' || $('#three').css('border-bottom-width') !== '1px' || $('#three').css('border-left-width') !== '1px') {
        return 'Die Rahmenbreite bei Quadrat Numero 3 stimmt leider nicht.';
    }

    if ($('#three').css('border-top-style') !== 'dashed' || $('#three').css('border-right-style') !== 'dashed' || $('#three').css('border-bottom-style') !== 'dashed' || $('#three').css('border-left-style') !== 'dashed') {
        return 'Der Rahmenstil bei Quadrat Numero 3 stimmt leider nicht.';
    }

    if ($('#three').css('border-top-color') !== 'rgb(255, 165, 0)' || $('#three').css('border-right-color') !== 'rgb(255, 165, 0)' || $('#three').css('border-bottom-color') !== 'rgb(255, 165, 0)' || $('#three').css('border-left-color') !== 'rgb(255, 165, 0)') {
        return 'Die Rahmenfarbe bei Quadrat Numero 3 stimmt leider nicht.';
    }

    if ($('#four').css('border-top-width') !== '0px' || $('#four').css('border-right-width') !== '2px' || $('#four').css('border-bottom-width') !== '2px' || $('#four').css('border-left-width') !== '2px') {
        return 'Die Rahmenbreite bei Quadrat Numero 4 stimmt leider nicht.';
    }

    if ($('#four').css('border-top-style') !== 'none' || $('#four').css('border-right-style') !== 'solid' || $('#four').css('border-bottom-style') !== 'solid' || $('#four').css('border-left-style') !== 'solid') {
        return 'Der Rahmenstil bei Quadrat Numero 4 stimmt leider nicht.';
    }

    if ($('#four').css('border-top-color') !== 'rgb(0, 0, 0)' || $('#four').css('border-right-color') !== 'rgb(0, 0, 0)' || $('#four').css('border-bottom-color') !== 'rgb(0, 0, 0)' || $('#four').css('border-left-color') !== 'rgb(0, 0, 0)') {
        return 'Die Rahmenfarbe bei Quadrat Numero 4 stimmt leider nicht.';
    }

    return 'Die Quadrate werden uns ewig dankbar sein. Einen kleinen Hinweis hab ich für dich noch: <span class="c">border</span> hat noch weitere Untereigenschaften. Breite, Stil und Farbe lassen sich ebenfalls separat definieren, und zwar mit <span class="c">border-width</span>, <span class="c">border-style</span> und <span class="c">border-color</span>. Diese lassen sich wiederum mit den Kanteneigenschaften kombinieren, z.B. <span class="c">border-left-color</span> oder <span class="c">border-bottom-style</span>. Die Möglichkeiten sind schier grenzenlos!'
}
