<?php
header('Content-Type:text/html;charset=utf8');

/**
 * [REQUEST_URI] => /articles/---template.html
 */
$query = str_replace('/articles/', '', $_SERVER['REQUEST_URI']);
$parts = explode('?', $query, 2);
if (count($parts) == 2) {
	if (preg_match('/(^|\/)([^\/]+)$/', $parts[0], $m)) {
		$filename_utf8 = urldecode($m[2]);
	}
	$action = $parts[1];
} else {
	if (preg_match('/(^|\/)([^\/]+)$/', $parts[0], $m)) {
		$filename_utf8 = urldecode($m[2]);
		$action = 'view';
	} else {
		$action = '';
	}
}


switch ($action) {
	case 'edit':
		$filename_gb2312 = iconv('utf-8', 'gb2312', $filename_utf8);
		$title = $filename_utf8;
		$content = getDocContent($filename_gb2312);
		include 'doc_edit.tpl';
		break;
		
	case 'save':
		$filename_gb2312 = iconv('utf-8', 'gb2312', $filename_utf8);
		$title = $filename_utf8;
		$content = isset($_POST['content']) ? $_POST['content'] : '';
		
		while ($content != ($_content = htmlspecialchars_decode($content))) {//pre(array($content,$_content),1);
			$content = $_content;
		}
		
		ob_start();
		include 'doc_view.tpl';
		$html = ob_get_clean();
		file_put_contents($filename_gb2312, $html);
		header("location: " . urlencode($filename_utf8));
		break;
		
	case 'view':
		$filename_gb2312 = iconv('utf-8', 'gb2312', $filename_utf8);
		$title = $filename_utf8;
		$content = getDocContent($filename_gb2312);
		include 'doc_view.tpl';
		break;
		
	default:
		$docList = getDocList();
		include 'doc_list.tpl';
}


function getDocContent($filename) {
	$content = file_get_contents($filename);
	if (preg_match('/<\!-- start -->(.*)<\!-- end -->/s', $content, $m)) {
		$content = $m[1];
	} elseif (preg_match('/<textarea .*?>(.*)<\/textarea>/s', $content, $m)) {
		$content = $m[1];
	}
	
	while ($content != ($_content = htmlspecialchars_decode($content))) {//pre(array($content,$_content),1);
		$content = $_content;
	}
	
	return $content;
}
function getDocList($dir = './') {
	$list = array();
	if ($dh = opendir($dir)) {
	    while (($file = readdir($dh)) !== false) {
	        if (substr($file, -5) == '.html' && filetype($dir . $file) == 'file') {
	        	$list[] = iconv('gb2312', 'utf-8', $file);
	        }
	    }
	    closedir($dh);
	}
	return $list;
}
function pre($var, $exit = 0) {
	echo '<pre>' . gettype($var) . "\n" . htmlspecialchars(print_r($var, 1)) . '</pre>';
	$exit && exit;
}
?>