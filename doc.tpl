<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title><?php echo $title?></title>
<meta content="text/html; charset=utf-8" http-equiv="content-type" />
<script type="text/javascript" src="ckeditor/ckeditor.js"></script>
<link type="text/css" rel="stylesheet" href="doc.css" />
<style type="text/css">
html, body {
	height: 100%;
	margin: 0px;
	padding: 0px;
}

a:link { color: blue; text-decoration: none; }
a:visited { text-decoration: none; }
a:hover, a:active {	color: red; text-decoration: underline }
.cke_format_panel {
    height: 315px !important;
    width: 150px;
}
</style>
<script type="text/javascript">
if (location.search == '?edit') {
	window.onbeforeunload = function() {
		return '注意保存文章内容!';
	}
}
</script>
</head>
<body>
<div id="toolbar" style="padding: 5px; display: none">
<a href="./">Return to list</a>
&nbsp; | &nbsp;
<a href="?edit">Edit</a>
&nbsp; | &nbsp;
<a onclick="this.href='save.php?rename=' + encodeURIComponent(document.getElementById('rename').value)" href="#">Rename</a>
<input id="rename" type="text" size="60" style="padding: 0px" />
</div>
<div id="article" style="border: 1px solid silver; padding: 5px">
<form method="post" action="save.php">
<div>
<textarea id="editor1" name="editor1" rows="5" cols="80"><?php echo htmlspecialchars($content)?></textarea>
</div>
</form>
</div>
<script type="text/javascript">
if (location.search != '?edit') {
	document.getElementById('toolbar').style.display = 'block';
	document.getElementById('article').innerHTML = document.getElementById('editor1').value;
	document.body.style.height = 'auto';
	document.body.style.padding = '20px';
} else {
	CKEDITOR.replace('editor1', {
		height : document.getElementsByTagName('html')[0].offsetHeight - 138
	});
	CKEDITOR.instances.editor1.on('instanceReady', function() {
		var btn_Save = document.getElementById('cke_9');
		var f = btn_Save.onclick;
		btn_Save.onclick = function() {
			window.onbeforeunload = null;
			f.call(window);
			return false;
		}
	});
}
</script>
</body>
</html>
