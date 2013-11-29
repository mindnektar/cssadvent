var info = [
    'Treten Sie mir nicht auf den Fuß, Arschloch!',
    'Was sehen wir hier? Ein langer lilaner Kasten? Hmm, irgendwas stimmt da nicht... Wenn du es mit Firebug zu inspizieren versuchst, wirst du feststellen, dass es aus mehreren kleineren Quadraten besteht. Dass man das nicht auf den ersten Blick sieht, macht mich fertig. Das ändern wir!',
    '<strong>Aufgabe:</strong> Schaffe einen Abstand zwischen den vier Quadraten. 10 Pixel sollten reichen! Und in den Quadraten scheint es noch weitere Elemente zu geben... Also gib den Quadraten nach innen hin ebenfalls einen Abstand von 10 Pixeln!'
];

var hints = [
    'Im Firebug kannst du sehen, dass die Elemente mit der Klasse <span class="c">box</span> mit Hilfe der <span class="c">float</span>-Eigenschaft nebeneinander fließen. Um einen Abstand zwischen diesen Elementen zu schaffen, benötigen wir die Eigenschaft <span class="c">margin</span>. Diese kennt dieselben Werte wie <span class="c">width</span> und <span class="c">height</span>.',
    'Wenn du <span class="c">.box</span> einfach eine <span class="c">margin</span> von 10 Pixeln gibst, wirst du feststellen, dass der Abstand zwischen den Boxen größer ausfällt. Das liegt daran, dass der Außenabstand auf allen vier Seiten der Box angewandt wird - also oben, rechts, links und unten jeweils 10 Pixel. Dadurch ist der Abstand zwischen allen Elementen nun 20 Pixel. Wie verhindern wir das? Klar, man könnte die <span class="c">margin</span> halbieren und das Problem so lösen, doch wenn der Abstand zwischen den Boxen explizit 10 Pixel betragen und oben und unten unverändert sein soll, können wir auch die Untereigenschaften von <span class="c">margin</span> verwenden. Diese lauten <span class="c">margin-top</span>, <span class="c">margin-right</span>, <span class="c">margin-bottom</span> und <span class="c">margin-left</span>. Wenn wir also nur der rechten Seite der Boxen eine <span class="c">margin</span> zuweisen, sollte das Problem gelöst sein...',
    '<span class="c">margin</span> ist also für den Abstand zu anderen Elementen außerhalb des angesprochenen Elements zuständig. Um den Innenabstand zu verändern, benutzt du die Eigenschaft <span class="c">padding</span>. Diese wird ganz genau wie <span class="c">margin</span> verwendet.'
];

function check() {
    var msg;

    $.each($('.box'), function() {
        if ($(this).css('margin-top') !== '0px' || $(this).css('margin-right') !== '10px' || $(this).css('margin-bottom') !== '0px' || $(this).css('margin-left') !== '0px') {
            msg = 'Der Abstand zwischen den Boxen beträgt leider noch nicht 10 Pixel.';
            return false;
        }
    });

    if (msg) {
        return msg;
    }

    $.each($('.box'), function() {
        if ($(this).css('padding-top') !== '10px' || $(this).css('padding-right') !== '10px' || $(this).css('padding-bottom') !== '10px' || $(this).css('padding-left') !== '10px') {
            msg = 'Der Abstand innerhalb der Boxen muss 10 Pixel betragen.';
            return false;
        }
    });

    if (msg) {
        return msg;
    }

    return 'Na bitte! Da haben sich also orangene Quadrate hinter den lilanen versteckt! Endlich ein Bisschen Entfaltungsfreiraum für die armen geschundenen Quadrate.';
}