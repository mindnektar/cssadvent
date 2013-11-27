<!DOCTYPE html>
<?php
$task = isset($_GET['task']) ? $_GET['task'] : 1;
?>
<html>
<head>
<meta charset="utf-8" />
<script type="text/javascript" src="js/lib/jquery/jquery.js"></script>
<script type="text/javascript" src="tasks/<?php echo $task; ?>/logic.js"></script>
<link type="text/css" rel="stylesheet" href="tasks/<?php echo $task; ?>/style.css" />
<style type="text/css" id="owncss"></style>
</head>

<body>
<?php require_once('tasks/' . $task . '/source.php'); ?>
</body>
</html>
