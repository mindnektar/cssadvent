<?php
header('Content-Type: text/html; charset=UTF-8');
$list = array(
    'c4c' => 1,
    'c81' => 2,
    'ecc' => 3,
    'a87' => 4,
    'e4d' => 5,
    '167' => 6,
    '8f1' => 7,
    'c9f' => 8,
    '45c' => 9,
    'd3d' => 10,
    '651' => 11,
    'c20' => 12,
    'c51' => 13,
    'aab' => 14,
    '9bf' => 15,
    'c74' => 16,
    '70e' => 17,
    '6f4' => 18,
    '1f0' => 19,
    '98f' => 20,
    '3c5' => 21,
    'b6d' => 22,
    '376' => 23,
    '1ff' => 24
);
$task = isset($_GET['task']) ? $_GET['task'] : '';
$taskNo = isset($list[$task]) ? $list[$task] : '';
?>
<!DOCTYPE html>
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
<?php
if ($taskNo) {
?>
<div id="canvas">
    <div class="gutter">
        <div class="label">Leinwand</div>
        <iframe id="iframe" src="task.php?task=<?php echo $taskNo; ?>"></iframe>
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
<?php
} else {
?>
<input type="text" id="taskno" maxlength="3" />
<?php
}
?>
</body>
</html>
