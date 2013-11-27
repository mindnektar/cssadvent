var info = [
    'Der erste Advent',
    'Verrückter Scheiß, da fällt der erste Advent dieses Jahr doch tatsächlich auf den ersten Dezember. Ich würde sagen, diesen unglaublichen Zufall sollte man betonen, indem man ihn <span style="color: red;">rot markiert</span>.',
    'Steht der Adventskranz bereit, brennt die erste Kerze?',
    '<strong>Aufgabe:</strong> Lass den Text "1. Advent" in <span style="color: red;">roter Farbe</span> erstrahlen.'
];

var hints = [
    'Öffne Firebug und markiere damit den Text "1. Advent". Wie du siehst, handelt es sich um ein span-Element mit einem id-Attribut. Im CSS-Code kannst du Elemente mit id-Attribut ansprechen, indem du zuerst ein Raute-Symbol (#) schreibst und anschließend den Wert des id-Attributs.',
    'Nun, da du das Element angesprochen hast, kannst du es mit CSS-Eigenschaften versehen. Dazu hängst du hinter den eben geschriebenen Selektor geschweifte Klammern. Innerhalb dieser Klammern soll sich dann die Liste der Eigenschaften befinden, mit denen du das Element ausstatten möchtest.',
    'Eine CSS-Eigenschaft notiert sich wie folgt: name: value;',
    'Um die Farbe eines Elements zu ändern, verwende die Eigenschaft "color".',
    'Der Wert der color-Eigenschaft kann auf verschieden Weisen notiert werden. Die folgenden Werte stehen alle für die Farbe rot: #FF0000, #F00, #ff0000, #f00, rgb(255,0,0)... oder ganz einfach red.'
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
