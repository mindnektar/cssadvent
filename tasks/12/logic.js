var info = [
    'Das Eingabefeld, das nichts kann',
    'Das Eingabefeld muss auch nichts können, denn es liefert uns schon so die Möglichkeit, einen weiteren netten CSS-Trick zu lernen. CSS ist zwar eigentlich nur zum Designen da, es ist damit jedoch trotzdem möglich, auf einige bestimmte Interaktionen des Users zu reagieren.',
    '<strong>Aufgabe:</strong> Gib dem Eingabefeld eine beliebige andere Rahmenfarbe, sobald du die Maus darüber bewegst. Und sobald du es fokussiert hast, soll sich die Hintergrundfarbe ändern.'
];

var hints = [
    'Zur Bewältigung der Aufgabe werden sogenannte Pseudoklassen benötigt. Dabei handelt es sich um einen weiteren Selektortyp, welche als Vorzeichen einen Doppelpunkt (:) haben. Die Pseudo-Klassen, die du hier benötigst, heißen <span class="c">:hover</span> und <span class="c">:focus</span>.',
    'Selektoren können beliebig verkettet werden. Wenn du z.B. das <span class="c">div</span>-Element mit der ID <span class="c">hans</span> und der Klasse <span class="c">wurst</span> würdest ansprechen wollen, schreibt sich das so: <span class="c">div#hans.wurst</span>. Mit Pseudoklassen funktioniert das ganz genauso. Wenn du also ein <span class="c">input</span>-Element mit der <span class="c">:hover</span>-Pseudoklasse bearbeiten möchtest, wie wäre da die richtige Notation?'
];

function check() {
    var hoverMatch = top.codeMirror.getDoc().getValue().match(/input:hover\s*\{\s*border-color:\s*(.*);\s*\}/);

    if (!hoverMatch || $.inArray(hoverMatch[1], ['black', '#000', '#000000']) >= 0) {
        return 'Die Rahmenfarbe ändert sich noch nicht, wenn die Maus über das Eingabefeld bewegt wird.';
    }

    var focusMatch = top.codeMirror.getDoc().getValue().match(/input:focus\s*\{\s*background-color:\s*(.*);\s*\}/);

    if (!focusMatch || focusMatch[1].toLowerCase() === $.inArray(focusMatch[1], ['#eee', '#eeeeee']) >= 0) {
        return 'Die Hintergrundfarbe ändert sich noch nicht, wenn das Eingabefeld fokussiert wird.';
    }

    return 'Rüschtüsch! Jetzt verstehst du auch grob, wie das Styling bei Buttons oder Links (z.B. in Navigationen) funktioniert. Es gibt auch noch zahlreiche weitere Pseudoklassen, aber davon lernst du einige später kennen.';
}
