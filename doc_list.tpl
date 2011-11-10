<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Article list</title>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<link type="text/css" rel="stylesheet" href="doc.css" />
</head>

<body>
<div style="padding: 20px 20px 0">
	<input type="button" onclick="location='./?create'" value="Create new article" />
	<input type="button" onclick="location='./'" value="order by nature" />
	<input type="button" onclick="location='./?mtime'" value="order by modify time" />
	<input type="button" onclick="location='./?ctime'" value="order by create time" />
</div>
<ul>
<?php foreach ($docList as $row) {?>
	<li>
		<a href="<?php echo urlencode($row['link']) . ($row['charset'] ? '?charset=' . $row['charset'] : '')?>"><?php
		 echo $row['file']?></a>
		<span class="mtime"><?php echo date('Y-m-d H:i:s', $row['mtime'])?></span>
		<span class="atime"><?php echo date('Y-m-d H:i:s', $row['atime'])?></span>
		<?php if ($row['atime'] != $row['ctime']) {?>
		<span class="ctime"><?php echo date('Y-m-d H:i:s', $row['ctime'])?></span>
		<?php }?>
	</li>
<?php }?>
</ul>

</body>
</html>