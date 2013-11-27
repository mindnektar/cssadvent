$(function() {
    var codeMirror,
        hintCount = 0,
        $iframe, $update, $check, $hint, $infotext, $csscode;

    (function init() {
        cache();
        initCssCode();
        initInfo();

        $check.click(function() {
            $iframe.contents().find('#owncss').text(codeMirror.getDoc().getValue());

            message($iframe[0].contentWindow.check());
        });

        $hint.click(function() {
            var hint = $iframe[0].contentWindow.hints.shift();

            message(hint ? '<strong>Hinweis ' + ++hintCount + ':</strong> ' + hint : 'Ich habe leider keine weiteren Hinweise für dich. Du packst das schon!');
        });
    })();

    function initCssCode() {
        codeMirror = window.CodeMirror.fromTextArea($csscode[0], {
            value: '',
            mode: 'css',
            indentUnit: 4,
            lineNumbers: true,
            autofocus: true,
            extraKeys: {
                Tab: function(cm) {
                    cm.replaceSelection("    ", "end");
                }
            }
        });
    }

    function initInfo() {
        $iframe.load(function() {
            $.each($iframe[0].contentWindow.info, function(i, text) {
                message(text, i === 0 ? 'h1' : null);
            });
        });
    }

    function message(text, tag) {
        tag = tag || 'p';

        $infotext
            .append('<' + tag + '>' + text + '</' + tag + '>')
            .scrollTop($infotext.prop('scrollHeight'));
    }

    function cache() {
        $iframe = $('#iframe');
        $update = $('#update');
        $check = $('#check');
        $hint = $('#hint');
        $infotext = $('#infotext');
        $csscode = $('#csscode');
    }
});
