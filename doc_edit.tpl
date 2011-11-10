<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title></title>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<script type="text/javascript" src="ckeditor/ckeditor/ckeditor.js"></script>
<link type="text/css" rel="stylesheet" href="doc.css" />
<script type="text/javascript">
window.onbeforeunload = function() {
	return '确保离开前保存已更改内容！';
}
</script>
</head>

<body>
<div id="toolbar" style="padding: 5px">
	<a href="./">Back to article list</a>
	| <a href="<?php echo urlencode($filename_utf8)?>">View</a>
	| Use &lt;h1&gt;Title&lt;/h1&gt; to rename the article title and html filename
</div>

<form method="post" action="?save">
	<div>
	<textarea id="editor1" name="content" cols="80" rows="5"><?php echo htmlspecialchars($content)?></textarea>
	</div>
</form>
<script type="text/javascript">
CKEDITOR.replace('editor1', {
	height : document.getElementsByTagName('html')[0].offsetHeight
		- document.getElementById('toolbar').offsetHeight - 150
});
</script>

</body>
</html>