var info = [
    'Weihnachtszeit ist Süßigkeitenzeit',
    'Was haben wir hier? Sechs unterschiedlich große Kästen mit Buchstaben am Rand? Höchst verdächtig. Sieht stark wie ein Puzzle aus, das in die richtige Reihenfolge gebracht werden möchte. Ich wette, hier wird gleich eine bahnbrechende Weisheit offenbart!',
    '<strong>Aufgabe:</strong> Positioniere alle Kästen ganz oben rechts in die Ecke, so dass sie aufeinander liegen. Sorge jetzt dafür, dass sie so aufeinander liegen, dass ein sinnvoller Text lesbar wird!'
];

var hints = [
    'Erinnerst du dich noch an die Aufgabe von vorgestern? Da hast du absolutes Positionieren gelernt. Jedes der Kästen ist bereits absolut positioniert und jeweils mit einem <span class="c">left</span>- und einem <span class="c">top</span>-Wert versehen. Welche Werte musst du ihnen geben, damit sie ganz oben links platziert werden? Übrigens: Du kannst entweder jedem der sechs Elemente mühselig eigene <span class="c">left</span>- und <span class="c">top</span>-Werte geben, oder aber du verwendest einen Selektor, der alle sechs Elemente zusammenfassen kann. Da können wir auch gleich überprüfen, ob du dich noch an die Regeln der Gewichtungen und den <span class="c">!important</span>-Zusatz von vor sechs Tagen erinnerst...',
    'Du siehst, dass alle Kästen zwar aufeinander liegen, aber nicht in der Reihenfolge, die dich den Text lesen lassen würde. Um die Reihenfolge der Elemente aufeinander zu ändern, benutze die Eigenschaft <span class="c">z-index</span>. Dieser kann eine beliebige Zahl als Wert annehmen, wobei Folgendes gilt: Je höher der Wert, desto weiter vorne ist das Element.',
    'Unsicher, in welche Reihenfolge die Elemente gehören? Orientiere dich an der Breite der Kästen. Der breiteste gehört nach ganz hinten, der schmalste nach vorne.'
];

function check() {
    var msg;

    $.each($('div'), function() {
        if (parseInt($(this).css('left')) !== 0 || parseInt($(this).css('top')) !== 0) {
            msg = 'Es sind noch nicht alle Kästen ganz oben links positioniert.';
            return false;
        }
    });

    if (msg) {
        return msg;
    }

    var greenZ = isNaN(parseInt($('#green').css('z-index'))) ? 0 : $('#green').css('z-index'),
        blueZ = isNaN(parseInt($('#blue').css('z-index'))) ? 0 : $('#blue').css('z-index'),
        orangeZ = isNaN(parseInt($('#orange').css('z-index'))) ? 0 : $('#orange').css('z-index'),
        purpleZ = isNaN(parseInt($('#purple').css('z-index'))) ? 0 : $('#purple').css('z-index'),
        redZ = isNaN(parseInt($('#red').css('z-index'))) ? 0 : $('#red').css('z-index'),
        brownZ = isNaN(parseInt($('#brown').css('z-index'))) ? 0 : $('#brown').css('z-index');

    if (greenZ >= blueZ && blueZ > orangeZ && orangeZ >= purpleZ && purpleZ >= redZ && redZ > brownZ) {
        return 'Jaaaa, Schokolaaade! Schokolade ist der Hammer! Mehr Schokolaaaaadeee...';
    }

    return 'Der Satz ist leider noch nicht lesbar.'
}
