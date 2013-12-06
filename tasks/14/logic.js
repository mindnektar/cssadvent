var info = [
    'Lass die Navigation nicht aus den Augen!',
    'Hier haben wir eine kleine Standardwebsite mit einer oben ausgerichteten Navigation. Sobald du anfängst, die Seite nach unten zu scrollen, verschwindet die Navigation. Doch was, wenn wir sie immer im Sichtbereich haben wollen?',
    '<strong>Aufgabe:</strong> Sorge dafür, dass die Navigation beim Scrollen immer am oberen Rand der Leinwand hängen bleibt.'
];

var hints = [
    'Die Eigenschaft, die wir hier benötigen, hast du vor einer Woche kennengelernt: <span class="c">position</span>. Beim letzten Mal versahen wir sie noch mit dem Wert <span class="c">absolute</span>, um ein Element auf der Seite mit Angabe von Pixelwerten direkt platzieren zu können. Heute soll sie den Wert <span class="c">fixed</span> erhalten, was sich wie <span class="c">absolute</span> verhält, jedoch mit einem wichtigen Unterschied: Seine Position ist nicht anhängig von einem Elternelement, sondern vom Browserfenster selbst - mit anderen Worten, ganz egal, was du mit deinem Browser anstellst, ob du die Größe veränderst oder wild herumscrollst, das Element bleibt immer an der gleichen Position.',
    'Sobald du das Element mit <span class="c">position: fixed;</span> versehen hast, ist die Aufgabe prinzipiell gelöst: Die Navigation folgt dir. Doch wie du siehst, hat sich die Breite der Navigation verändert: Sie füllt nicht mehr den ganzen verfügbaren Platz aus, sondern ist nur noch so breit wie ihr Inhalt. Das ist eine weitere Eigenart von als <span class="c">absolute</span> oder <span class="c">fixed</span> positionierten Elementen. Damit die Navigation wieder so breit ist wie vorher, welche Eigenschaft und welcher Wert wären dafür geeignet?',
    'Du benötigst die Eigenschaft <span class="c">width</span> und den Wert <span class="c">100%</span>.',
    'Nun haben wir noch das Problem, dass, selbst wenn die Seite nach ganz oben gescrollt ist, Text hinter der Navigation verschwindet. Wie können wir den Text etwas nach unten schieben? Das ist nicht ganz trivial, kommst du darauf?',
    'Die richtige Eigenschaft hast du bereits am 5.12. kennengelernt: <span class="c">padding</span>. Wenn wir dem Element mit der ID <span class="c">content</span> diese Eigenschaft vergeben, ändert sich der Innenabstand der Textblöcke. Wir wollen jedoch nicht den Innenabstand auf allen vier Seiten verändern, sondern nur oben. Erinnerst du dich, wie diese Untereigenschaft von <span class="c">margin</span> lautet? In jedem Falle sollten 65 Pixel ausreichen.'
];

function check() {
    if ($('#navigation').css('position') !== 'fixed') {
        return 'Die Navigation ist noch nicht fixiert.';
    }

    if ($('#navigation').width() / $('body').width() !== 1) {
        return 'Die Navigation ist noch zu schmal.';
    }

    if ($('#content').css('padding-top') !== '65px') {
        return 'Der obere Innenabstand der Textblöcke beträgt noch nicht 65 Pixel.';
    }

    return 'Sehr gut! Und schon haben wir eine Navigation, mit der man auch immer interagieren kann, egal wo auf der Seite wir uns befinden.';
}
