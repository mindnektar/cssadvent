var info = [
    'Schattenspiele und mehr',
    'Heute darfst du deiner Kreativität freien Lauf lassen. Wir haben hier einen Button in seinem Standard-Styling, wie es von deinem Browser und Betriebssystem vorgegeben ist. Nun wollen wir ihm einen schönen individuellen Stil verpassen!',
    '<strong>Aufgabe:</strong> Ändere folgende Eigenschaften des Buttons, nach Lust und Laune: Hintergrundfarbe, Textfarbe, Rahmenbreite, -stil und -farbe, sowie Innenabstand. Verpasse dem Button und seinem Text außerdem einen Schlagschatten und runde die Ecken des Buttons ab! Optional: Gib dem Button ein paar zusätzliche Eigenschaften, die nur dann in Kraft treten sollen, wenn der Button gerade gedrückt wird - damit auch klar wird, dass es sich um einen Button handelt.'
];

var hints = [
    'Eine Menge Dinge, die hier zu tun sind. Die ersten sechs angeforderten Eigenschaften sollten dir geläufig sein, also kommen wir direkt zum Schlagschatten. Die benötigte Eigenschaft lautet für HTML-Elemente <span class="c">box-shadow</span> und für Texte <span class="c">text-shadow</span>. Die Werte sind bei beiden fast gleich. <span class="c">box-shadow</span> kennt sechs durch Leerzeichen separierte Werte: Horizontale Versetzung des Schattens, vertikale Versetzung, Unschärfe des Schatten, seine Größe, seine Farbe und schließlich optional die Information, ob der Schatten innerhalb des Elements dargestellt werden soll statt außen. Die ersten vier Werte werden in Pixeln angegeben, die Schattenfarbe wie alle anderen Farben auch und letzterer mit dem Begriff <span class="c">inset</span> (soll der Schatten außen dargestellt werden, lässt man den Begriff einfach weg). <span class="c">text-shadow</span> arbeitet mit den gleichen Werten, mit dem Unterschied, dass die Schattengröße nicht angepasst werden kann und ihm <span class="c">inset</span> unbekannt ist.',
    'Abgerundete Ecken gehen ganz einfach, und zwar mit der Eigenschaft <span class="c">border-radius</span>. Auch dieser wird in Pixeln notiert - je höher die Zahl, desto höher der Radius der Rundungen... mmm, Rundungen.',
    'Es gibt in CSS eine Pseudoklasse, die genau dann greift, wenn über einem Element die Maustaste gedrückt gehalten wird. Wird sie losgelassen, verschwinden die über diese Pseudoklasse deklarierten Änderungen wieder. Diese heißt <span class="c">:active</span>.'
];

function check() {
    if ($('button').css('background-color') === 'rgb(212, 208, 200)') {
        return 'Du hast die Hintergrundfarbe noch nicht geändert.';
    }

    if ($('button').css('color') === 'rgb(0, 0, 0)') {
        return 'Du hast die Textfarbe noch nicht geändert.';
    }

    if ($('button').css('border-left-width') === '2px') {
        return 'Du hast die Rahmenbreite noch nicht geändert.';
    }

    if ($('button').css('border-left-style') === 'outset') {
        return 'Du hast den Rahmenstil noch nicht geändert.';
    }

    if ($('button').css('border-left-color') === 'rgb(212, 208, 200)') {
        return 'Du hast die Rahmenfarbe noch nicht geändert.';
    }

    if ($('button').css('padding-left') === '6px' && $('button').css('padding-top') === '0px') {
        return 'Du hast den Innenabstand noch nicht geändert.';
    }

    if ($('button').css('border-top-left-radius') === '0px') {
        return 'Du hast die Ecken noch nicht abgerundet.';
    }

    if ($('button').css('box-shadow') === 'none') {
        return 'Du hast dem Button noch keinen Schlagschatten gegeben.';
    }

    if ($('button').css('text-shadow') === 'none') {
        return 'Du hast dem Text im Button noch keinen Schlagschatten gegeben.';
    }

    return 'Tada! Fertig! Und, gefällt dir dein Button? Probier ruhig noch ein wenig daran herum und schau, wie die verschiedenen Eigenschaften miteinander harmonieren.';
}
