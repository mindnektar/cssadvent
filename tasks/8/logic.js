var info = [
    'Der Weihnachstbaum muss warten? Dann verzieren wir halt Texte!',
    'Schau dir diese schöne Prosa an. Da kann man doch bestimmt ein Bisschen dran herumdoktern. Wir lieben es doch so sehr, jeden Scheiß anzutatschen, also los geht\'s!',
    '<strong>Aufgabe:</strong> Zunächst wollen wir die Tragweite der ersten beiden Sätze noch etwas hervorheben. Stelle das Wort "ziemlich" im ersten Satz kursiv dar und das Wort "nicht" im zweiten Satz fett. Den gesamten dritten Satz streichen wir durch, der ist Quatsch. Und den vierten Satz soll bitte rechts ausgerichtet sein!'
];

var hints = [
    'Um einen Text kursiv darzustellen, hilft dir die Eigenschaft <span class="c">font-style</span>. Diese kennt die Werte <span class="c">normal</span> (das ist der Standard) und <span class="c">italic</span> sowie <span class="c">oblique</span>. Beide sind synonym und stehen für kursiv.',
    'Die Breite von Texten kann mit <span class="c">font-weight</span> angepasst werden. Auch hier ist <span class="c">normal</span> der Standardwert, während <span class="c">bold</span> für fett steht - außerdem gibt es noch <span class="c">lighter</span> für dünne Schrift und <span class="c">bolder</span>, wenn\'s noch fetter als fett sein soll, was aber nur von bestimmten Schriftarten unterstützt wird.',
    'Passend zu unserer Aufgabe heißt die Eigenschaft zum Durchstreichen von Texten <span class="c">text-decoration</span>. Der Wert dafür ist <span class="c">line-through</span>, außerdem kennt <span class="c">text-decoration</span> noch <span class="c">underline</span> und <span class="c">overline</span>. Der Standardwert ist hier <span class="c">none</span>',
    'Zuguterletzt wird zum Ausrichten eines Textes die Eigenschaft <span class="c">text-align</span> verwendet. Diese übernimmt die Werte <span class="c">left</span>, <span class="c">center</span>, <span class="c">right</span> sowie <span class="c">justify</span>, welcher den Text im Blocksatz darstellt (wie der in Aufgabe 4, erinnerst du dich?).'
];

function check() {
    if ($('#paragraph1 span').css('font-style') !== 'italic' && $('#paragraph1 span').css('font-style') !== 'oblique') {
        return 'Das Wort "ziemlich" ist noch nicht kursiv.';
    }

    if ($('#paragraph2 span').css('font-weight') !== '700') {
        return 'Das Wort "nicht" ist noch nicht fett.';
    }

    if ($('#paragraph3').css('text-decoration') !== 'line-through') {
        return 'Niemand mag Rosenkohl! Der Text ist noch nicht durchgestrichen.';
    }

    if ($('#paragraph4').css('text-align') !== 'right') {
        return 'Der letzte Text ist noch nicht rechts ausgerichtet.';
    }

    return 'Wunderprächtig! Wieder haben wir unsere unverkennbare Handschrift hinterlassen.'
}
