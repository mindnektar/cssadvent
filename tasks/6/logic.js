var info = [
    'Vergiss Nikolaus, es ist Geisterstunde!',
    'So viele schöne bunte Kästchen. Zu viel des Guten, oder? Es wird Zeit, dass wir lernen, wie wir mit ein wenig Zauberkraft ungeliebte Elemente verschwinden lassen können!',
    '<strong>Aufgabe:</strong> Lass alle gelben Boxen komplett verschwinden. Auch alle blauen Boxen sollen verschwinden, doch der Platz, den sie eingenommen haben, soll weiterhin blockiert bleiben. Und: Alle grünen Boxen sollen halb verschwinden!'
];

var hints = [
    'Elemente unsichtbar und wieder sichtbar zu machen ist eine der häufigsten Aktionen im CSS. Die dafür genutzte Eigenschaft lautet <span class="c">display</span>, und der Wert zum Ausblenden des Elements ist <span class="c">none</span>. <span class="c">display</span> hat noch einige weitere Funktionen annehmen, aber dazu kommen wir später.',
    'Wie du siehst, wird der Platz, der vorher noch durch die gelben Boxen blockiert wurde, nun von den jeweils rechts daneben liegenden Elementen eingenommen. <span class="c">display: none;</span> bedeutet, dass das betroffene Element beim Rendern komplett ignoriert wird. Doch was, wenn das Element lediglich unsichtbar sein, doch weiter an seinem Platz sein soll? Dafür gibt es die Eigenschaft <span class="c">visibility</span>, welche die Werte <span class="c">visible</span> und <span class="c">hidden</span> kennt (es gibt noch eine dritte, doch die wird nur äußerst selten verwendet).',
    'Was mag mit "halb verschwinden" gemeint sein? Genau, Transparenz. Elemente können durchsichtig dargestellt werden, indem du die Eigenschaft <span class="c">opacity</span> verwendest. Diese nimmt Werte von 0 bis 1 an, wobei 1 für komplett sichtbar steht und 0 für komplett unsichtbar. Alles dazwischen ist transparent - je niedriger der Wert, desto transparenter. Dies bedeutet auch, dass <span class="c">opacity: 0;</span> den gleichen Effekt erzielt wie <span class="c">visibility: hidden;</span>.'
];

function check() {
    var msg;

    $.each($('.red'), function() {
        if (!$(this).is(':visible')) {
            msg = 'Die roten Boxen müssen sichtbar bleiben.';
            return false;
        }
    });

    if (msg) {
        return msg;
    }

    $.each($('.yellow'), function() {
        if ($(this).css('display') !== 'none') {
            msg = 'Die gelben Boxen müssen unsichtbar sein.';
            return false;
        }
    });

    if (msg) {
        return msg;
    }

    $.each($('.blue'), function() {
        if ($(this).css('visibility') !== 'hidden') {
            msg = 'Die blauen Boxen müssen unsichtbar sein, aber ihren Platz weiterhin blockieren.';
            return false;
        }
    });

    if (msg) {
        return msg;
    }

    $.each($('.green'), function() {
        if ($(this).css('opacity') !== '0.5') {
            msg = 'Die grünen Boxen müssen halbtransparent sein.';
            return false;
        }
    });

    if (msg) {
        return msg;
    }

    return 'Wunderbar! Am Dienstag waren die vielen bunten Kästen ja noch zu ertragen, aber wir müssen ja mit der Mode gehen, oder?';
}