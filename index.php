<!DOCTYPE html>
<?php
$task = isset($_GET['task']) ? $_GET['task'] : 1;
?>
<html>
<head>
<meta charset="utf-8">
<title>CSS Adventskalender</title>
<script type="text/javascript" src="js/lib/jquery/jquery.js"></script>
<script type="text/javascript" src="js/lib/codemirror/codemirror.js"></script>
<script type="text/javascript" src="js/lib/codemirror/mode/css.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<link type="text/css" rel="stylesheet" href="js/lib/codemirror/codemirror.css" />
<link type="text/css" rel="stylesheet" href="css/main.css" />
</head>

<body>
<div id="canvas">
    <div class="gutter">
        <div class="label">Leinwand</div>
        <iframe id="iframe" src="task.php?task=<?php echo $task; ?>"></iframe>
    </div>
</div>

<div id="info">
    <div class="gutter">
        <div class="label">Info</div>
        <div id="infotext"></div>
    </div>
</div>

<div id="controls">
    <div class="gutter">
        <button id="check">Prüfen</button>
        <button id="hint">Hinweis</button>
    </div>
</div>

<div id="css">
    <div class="gutter">
        <div class="label">CSS</div>
        <textarea id="csscode"></textarea>
    </div>
</div>
</body>
</html>
