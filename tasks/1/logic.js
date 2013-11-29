var info = [
    'Der erste Advent',
    'Verrückter Scheiß, da fällt der erste Advent dieses Jahr doch tatsächlich auf den ersten Dezember. Ich würde sagen, diesen unglaublichen Zufall sollte man betonen, indem man ihn rot markiert.',
    'Steht der Adventskranz bereit, brennt die erste Kerze?',
    '<strong>Aufgabe:</strong> Lass den Text "1. Advent" in roter Farbe erstrahlen.'
];

var hints = [
    'Öffne Firebug und markiere damit den Text "1. Advent". Wie du siehst, handelt es sich um ein <span class="c">span</span>-Element mit einem <span class="c">id</span>-Attribut. Im CSS-Code kannst du Elemente mit <span class="c">id</span>-Attribut ansprechen, indem du zuerst ein Raute-Symbol (#) schreibst und anschließend den Wert des <span class="c">id</span>-Attributs.',
    'Nun, da du das Element angesprochen hast, kannst du es mit CSS-Eigenschaften versehen. Dazu hängst du hinter den eben geschriebenen Selektor geschweifte Klammern. Innerhalb dieser Klammern soll sich dann die Liste der Eigenschaften befinden, mit denen du das Element ausstatten möchtest.',
    'Eine CSS-Eigenschaft notiert sich wie folgt: <span class="c">name: value;</span>.',
    'Um die Textfarbe eines Elements zu ändern, verwende die Eigenschaft <span class="c">color</span>.',
    'Der Wert der <span class="c">color</span>-Eigenschaft kann auf verschieden Weisen notiert werden. Die folgenden Werte stehen alle für die Farbe rot: <span class="c">#FF0000</span>, <span class="c">#F00</span>, <span class="c">#ff0000</span>, <span class="c">#f00</span>, <span class="c">rgb(255,0,0)</span>... oder ganz einfach <span class="c">red</span>.'
];

function check() {
    if ($('#text').css('color') !== 'rgb(0, 0, 0)') {
        return 'Nur der Text "1. Advent" soll rot markiert sein, der restliche Text nicht.';
    }

    if ($('#advent').css('color') !== 'rgb(255, 0, 0)') {
        return 'Leider ist der Text "1. Advent" noch nicht rot.';
    }

    return 'Jap! Ein sattes, leuchtendes Rot. Nun ist dem unfassbaren Ereignis ausreichend Respekt gezollt worden.';
}
