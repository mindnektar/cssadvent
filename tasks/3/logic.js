var info = [
    'Viele viele bunte Hintergründe',
    'Heute sehen wir uns mit zwei Listen bestehend aus nummerierten farbigen Boxen konfrontiert. Du bist sicher auch der Meinung, dass die Herrschaften noch nicht farbig genug sind. Da geht noch was.',
    '<strong>Aufgabe: </strong> Alle roten Boxen sollen gelb werden. Oh, und alle Boxen mit ungeraden Zahlen machen wir orange!'
];

var hints = [
    'Dir wird aufgefallen sein, dass wir hier allein mit den <span class="c">id</span>-Selektoren der letzten beiden Aufgaben nicht weit kommen werden. Es müssen gleich vier Elemente auf einmal angesprochen werden. Wenn wir das Element mit der ID "list2" ansprechen, haben wir zwar die zweite Liste - wir brauchen jedoch die vier Elemente darin. Da hilft der <span class="c">tag</span>-Selektor weiter. Schreibe einfach den Namen des Elements auf, den du ansprechen möchtest, ohne Raute oder sonstiges Vorzeichen. Würdest du nun lediglich <span class="c">li</span> aufschreiben, wären damit alle acht <span class="c">li</span>-Elemente selektiert. Um nur die letzten vier Elemente zu erhalten, schreibst du einfach <span class="c">#list2 li</span>. CSS interpretiert von rechts nach links - in diesem Fall heißt das, es wird nach allen <span class="c">li</span>-Elementen gesucht, die sich in <span class="c">#list2</span> befinden.',
    'Die Eigenschaft zum Ändern der Hintergrundfarbe lautet <span class="c">background-color</span>. Die dafür zugelassenen Werte sind identisch mit denen für <span class="c">color</span>, die du vorgestern kennengelernt hast. Wenn du die Boxen gelb färben möchtest, wie lautet wohl einer der möglichen Werte?',
    'Du kennst jetzt <span class="c">id</span>- und <span class="c">tag</span>-Selektoren. Um nur die Boxen mit ungeraden Zahlen zu färben, benötigen wir einen weiteren Selektor-Typ: den <span class="c">class</span>-Selektor. Ein Element kann eine ID und mehrere Klassen haben. Der Unterschied ist, dass eine ID im gesamten HTML-Dokument nur ein einziges Mal vorkommen darf, Klassen dagegen jedoch mehrfach. Um ein Element mit einer bestimmten Klasse zu selektieren, schreibt man ein Punkt-Symbol (.) auf und ergänzt dahinter den Namen der Klasse.',
    'Nanu? Obwohl du alles richtig gemacht hast, bleiben die Boxen der zweiten Liste gelb? Das liegt daran, dass die verschiedenen Selektor-Typen (<span class="c">tag</span>, <span class="c">class</span> und <span class="c">id</span>) unterschiedliche Gewichtungen haben. IDs sind gewichtiger als Klassen und Klassen sind gewichtiger als Tags. Mit <span class="c">.uneven</span> sprichst du eine Klasse an, doch da die <span class="c">background-color</span> bereits durch einen <span class="c">id</span>-Selektor definiert wurde, hat der <span class="c">class</span>-Selektor keinen Effekt. Was tun? Der Zusatz <span class="c">!important</span> sagt dem Browser, dass alle anderen Deklarationen dieser Eigenschaft ignoriert und nur diese benutzt werden soll. Dieser Zusatz wird einfach nach dem Wert der Eigenschaft und vor dem abschließenden Semikolon eingefügt.'
];

function check() {
    var msg;

    $.each($('#list1 .even'), function() {
        if ($(this).css('background-color') !== 'rgb(0, 128, 0)') {
            msg = 'Die Boxen mit geraden Zahlen in der ersten Liste müssen grün bleiben.';
            return false;
        }
    });

    if (msg) {
        return msg;
    }

    $.each($('#list2 .even'), function() {
        if ($(this).css('background-color') !== 'rgb(255, 255, 0)') {
            msg = 'Die Boxen mit geraden Zahlen in der zweiten Liste müssen gelb sein.';
            return false;
        }
    });

    if (msg) {
        return msg;
    }

    $.each($('.uneven'), function() {
        if ($(this).css('background-color') !== 'rgb(255, 165, 0)') {
            msg = 'Alle Boxen mit ungeraden Zahlen müssen orange sein.';
            return false;
        }
    });

    if (msg) {
        return msg;
    }

    return 'Welch Farbenfreude! Ach, wenn wir doch nur Regenbogen kacken könnten...';
}
