var info = [
    'Quadrat-Diät',
    'Heute haben wir es mit einem besonders dicken Quadrat zu tun. Das können wir so natürlich nicht durchgehen lassen, daher muss der Kollege jetzt leider etwas abnehmen.',
    '<strong>Aufgabe:</strong> Halbiere die Höhe und die Breite des blauen Quadrats.'
];

var hints = [
    'Die CSS-Eigenschaften für Breite und Höhe heißen <span class="c">width</span> und <span class="c">height</span>.',
    'Wie bei <span class="c">color</span> lassen sich die Werte für <span class="c">width</span> und <span class="c">height</span> auf verschiedene Weisen angeben, z.B. als absolute Werte in Pixeln oder relativ in Prozent. Schau mit Firebug nach, welche Notation gewählt wurde und orientiere dich daran!'
];

function check() {
    var $square = $('#square');

    if ($square.width() !== 100 || $square.height() !== 100) {
        return 'Das Quadrat hat seine richtige Größe noch nicht erreicht.';
    }

    return 'Das nenn ich mal eine erfolgreiche Diät! Ist dir im Firebug aufgefallen, dass sich ein Ball hinter dem Quadrat versteckt hatte? Jetzt wird er auch endlich nicht mehr so platt gedrückt!'
}
