<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title><?php echo $title?></title>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<link type="text/css" rel="stylesheet" href="doc.css" />
</head>

<body>
<div id="toolbar" style="padding: 5px">
	<a href="./">Back to article list</a> | <a href="<?php echo urlencode($filename_utf8)?>?edit">Edit</a>
</div>

<div style="padding: 0px 30px"><!-- start --><?php echo $content?><!-- end --></div>

</body>
</html>