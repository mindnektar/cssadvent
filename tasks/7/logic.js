var info = [
    'Die große Wanderschaft des blauen Quadrats',
    'Da ist unser Kumpel ja wieder! Ich hab mir flüstern lassen, dass er sich gerne dem roten Rechteck da drüben annähern würde. Dann wollen wir ihm den Wunsch doch erfüllen, oder?',
    '<strong>Aufgabe:</strong> Positioniere das blaue Quadrat so, dass seine obere Kante exakt an der unteren Kante des roten Rechtecks anliegt.'
];

var hints = [
    'Wenn du dir das rote Rechteck im Firebug anschaust, wirst du alle Eigenschaften finden, die du zum Lösen dieser Aufgabe brauchst!',
    'Die <span class="c">position</span>-Eigenschaft mit dem Wert <span class="c">absolute</span> erlaubt es dir - wie der Name schon sagt - Elemente absolut auf der Seite zu positionieren. Sie sind aus dem normalen Fluss der Elemente gerissen und können mit den Eigenschaften <span class="c">top</span>, <span class="c">left</span>, <span class="c">bottom</span> und <span class="c">right</span> auf den Pixel genau an beliebigen Stellen festgehalten werden, so dass sie andere Elemente überlappen.',
    'Der <span class="c">left</span>-Wert des roten Rechtecks ist <span class="c">320px</span>, und der <span class="c">top</span>-Wert ist <span class="c">150px</span>. Welche <span class="c">left</span>- und <span class="c">top</span>-Werte braucht das blaue Quadrat, um sich direkt unter dem Rechteck zu befinden?',
];

function check() {
    if ($('#red').css('left') !== '320px' || $('#red').css('top') !== '150px') {
        return 'Nein, das rote Rechteck soll bleiben, wo es ist.';
    }

    if ($('#blue').css('left') !== '320px' || $('#blue').css('top') !== '190px' || $('#blue').css('position') !== 'absolute') {
        return 'Das blaue Quadrat ist noch nicht richtig positioniert.';
    }

    return 'Endlich vereint! Mal gucken, was aus der Beziehung wird...';
}
