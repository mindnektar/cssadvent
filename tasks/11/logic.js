var info = [
    'Äh...',
    'Waaas ist das?! Eine leere Leinwand, und das an unserem Tag? DAS geht mal gar nicht. Das wird schnurstracks geändert. Moment, ich grab da mal was aus... Hier, du kannst das hier benutzen:',
    '<img src="tasks/11/heart.png" />',
    '<strong>Aufgabe:</strong> Tapeziere die gesamte Leinwand mit diesem Herzchen!'
];

var hints = [
    'Du kennst bereits die Eigenschaft <span class="c">background-color</span>. Wie du eventuell vermutet haben magst, ist diese lediglich eine Untereigenschaft von <span class="c">background</span>, welche wesentlich mehr auf dem Kasten hat und eine Kombination der folgenden Werte kennt: URL eines Hintergrundbilds (<span class="c">background-image</span>), Ausrichtung des Hintergrundbilds (<span class="c">background-attachment</span>), ob das Bild wiederholt dargestellt werden soll (<span class="c">background-repeat</span>), die Position, an der es angezeigt werden soll (<span class="c">background-position</span>), die Größe des Bildes (<span class="c">background-size</span>) - und eben die Farbe. Um die Aufgabe zu lösen, benötigst du zwei dieser Untereigenschaften.',
    'Die erste ist <span class="c">background-image</span>. Der Wert notiert sich wie folgt: <span class="c">url(url-des-bildes.png)</span>.',
    'Die zweite ist <span class="c">background-repeat</span> und kennt die Werte <span class="c">no-repeat</span> (das ist der Standard), <span class="c">repeat-x</span>, <span class="c">repeat-y</span> und <span class="c">repeat</span>. Welcher Wert wird wohl benötigt, damit sich das Bild in alle Richtungen wiederholt?',
    'Öh... ja, ganz recht, es gibt keine Elemente, denen du überhaupt einen Hintergrund geben kannst. Oder? Doch: Auch das <span class="c">body</span>-Element, welches das gesamte gerenderte Dokument umfasst, kann gestylt werden!'
];

var passed = false;

function check() {console.log($('body').css('background-image'));
    if (!$('body').css('background-image').match(/url(.*tasks\/11\/heart.png)/) || $('body').css('background-repeat') !== 'repeat') {
        if (!passed) {
            return 'Das süße Herzchen zieht sich noch nicht über die komplette Leinwand.';
        } else {
            $('body').html('<div id="container"><p>BÄM! Damit hättest du jetzt nicht gerechnet, oder? Was man nicht alles anstellen kann... :)</p><p>Ich wünsche uns beiden alles nur erdenkliche Liebe und Gute zu unserem zweiten Jahrestag und hoffe auf noch ganz, ganz viele weitere! Ein Leben ohne dich ist schon längst unvorstellbar geworden - ich genieße jeden einzelnen Tag mit dir, auch wenn\'s mal nicht so rund läuft. Ich danke dir für die Liebe, die du mir schenkst!</p><p>Zur Feier des Tages möchte ich dich gerne ins Copper House in der Davidstraße einladen, damit unsere Gaumen gebührend verwöhnt werden können. Um 20 Uhr geht\'s los! :D</p><p>Ich liebe dich sehr!</p><p>Dein Marzinpan</p></div>');
        }
    }

    passed = true;

    return 'Hach, da wird einem ja ganz warm in der Magengegend. Aber schon ein wenig zu viel des Guten, oder? Ja, ich finde, du solltest die Herzen wieder entfernen. Im Ernst! Weg damit!';
}
