var info = [
    'Nur schweben ist schöner',
    'Na sieh einer an, unser blaues Quadrat ist zurück! Hey, warte... ich glaube, es spricht zu uns. Was will es? Es möchte, dass der Text unter ihm um es herum fließt? Na, den Wunsch kriegen wir doch bestimmt erfüllt.',
    '<strong>Aufgabe: </strong> Lass den Text um das blaue Quadrat herumfließen. Oh, und siehst du die vier Boxen weiter rechts? Sorge dafür, dass sie nebeneinander dargestellt werden!'
];

var hints = [
    'Elemente wie <span class="c">div</span> und <span class="c">p</span> sind sogenannte Block-Elemente, was bedeutet, dass diese innerhalb ihres Containers immer untereinander dargestellt werden. Daher befindet sich der Text unter dem blauen Quadrat und die vier roten Boxen jeweils untereinander. Dieses Verhalten lässt sich mit der <span class="c">float</span>-Eigenschaft beeinflussen. Wenn diese Eigenschaft den Wert <span class="c">left</span> hat, fließt das Element links, was bedeutet, dass der restliche Platz rechts daneben von den darunter liegenden Elementen ausgefüllt wird. Hat die Eigenschaft den Wert <span class="c">right</span>, so gilt dasselbe, nur umgekehrt.',
    'Um die roten Boxen nebeneinander anzuordnen, müssen sie alle fließen... Erinnerst du dich an den <span class="c">class</span>-Selektor?'
];

function check() {
    var msg;

    if ($('#square').css('float') !== 'left') {
        return 'Der Text muss um das blaue Quadrat fließen.';
    }

    $.each($('.box'), function() {
        if ($(this).css('float') !== 'left') {
            msg = 'Alle Boxen müssen nebeinander dargestellt sein.';
            return false;
        }
    });

    if (msg) {
        return msg;
    }

    return 'Bingo! Alles fließt und schwebt so schön, dass es einem fast schwindelig wird... Eines noch: Hast du <span class="c">#square</span> und <span class="c">.box</span> jeweils einzeln deklariert und somit <span class="c">float: left;</span> zweimal geschrieben? Dies ist nicht nötig, denn wenn mehrere Elemente die gleichen Eigenschaften haben sollen, kannst du die Selektoren auch einfach durch ein Komma trennen und dir so das doppelte Aufschreiben sparen.';
}
