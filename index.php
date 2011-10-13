<?php
header('Content-Type:text/html;charset=utf8');

if (get_magic_quotes_gpc() && isset($_POST['content'])) {
	$_POST['content'] = stripslashes($_POST['content']);
}


/**
 * [REQUEST_URI] => /articles/---template.html
 */
$query = str_replace('/articles/', '', $_SERVER['REQUEST_URI']);
$parts = explode('?', $query, 2);
$params = array();
if (count($parts) == 2) {
	if (preg_match('/(^|\/)([^\/]+)$/', $parts[0], $m)) {
		$filename_utf8 = urldecode($m[2]);
	}
	if (count($parts2 = explode('=', $parts[1])) > 1) {
		$params[$parts2[0]] = $parts2[1];
		$action = 'view';
	} else {
		$action = $parts[1];
	}
} else {
	if (preg_match('/(^|\/)([^\/]+)$/', $parts[0], $m)) {
		$filename_utf8 = urldecode($m[2]);
		$action = 'view';
	} else {
		$action = '';
	}
}


switch ($action) {
	case 'create':
		$filename_utf8 = createNewDoc();
		header("location: " . urlencode($filename_utf8) . "?edit");
		break;
		
	case 'edit':
		$title = preg_replace('/\.html$/', '', $filename_utf8);
		$content = getDocContent($filename_utf8);
		if (!getDocTitle($content)) {
			$content = "<h1>$title</h1>\n\n$content";
		}
		include 'doc_edit.tpl';
		break;
		
	case 'save':
		$title = substr($filename_utf8, 0, -5);// remove .html
		$content = isset($_POST['content']) ? $_POST['content'] : '';
		
		while ($content != ($_content = htmlspecialchars_decode($content))) {//pre(array($content,$_content),1);
			$content = $_content;
		}
		$new_title = getDocTitle($content, $title);
		if ($new_title != $title) {
			unlink($filename_utf8);
			// $filename_gb2312 = iconv('utf-8', 'gb2312', $new_title) . '.html';
			$filename_utf8 = $new_title . '.html';
		}
		
		ob_start();
		include 'doc_view.tpl';
		$html = ob_get_clean();
		file_put_contents($filename_utf8, $html);
		header("location: " . urlencode($filename_utf8));
		break;
		
	case 'view':
		/**
		 * 还是统一用 utf8 命名文件名吧，这样不论在 Windows XP cn 上还是 Mac OS X 上都一样处理，
		 * 只不过会导致在 XP cn 上以文件系统方式查看文件名时，都是乱码，因为 utf8 的中文编码被当成 gb2312 处理了。
		 * EUC-CN is GB2312
		 */
		if (isset($params['charset']) && $params['charset'] == 'EUC-CN') {
			// 把原有 gb2312 编码的文件名中的内容复制到新的以 utf8 编码的文件名中
			$filename = mb_convert_encoding($filename_utf8, 'gb2312', 'utf-8');
			if (file_exists($filename)) {
				file_put_contents($filename_utf8, file_get_contents($filename));
				unlink($filename);
			}
		}
		$filename = $filename_utf8;
		
		$title = preg_replace('/\.html$/', '', $filename_utf8);
		$content = getDocContent($filename);
		if (!getDocTitle($content)) {
			$content = "<h1>$title</h1>\n\n$content";
		}
		if (preg_match('/<style .+?<\/style>/s', $content, $m)) {
			$style = $m[0];
			$content = str_replace($style, '', $content);
		}
		
		if (preg_match_all('/\{plugin\:([^\}]*)\}/s', $content, $m)) {
			for ($i = 0; $i < count($m[0]); $i++) {
				$parts = explode(',', $m[1][$i]);
				$plugin_func = array_shift($parts);
				if (file_exists('doc_plugin.php') && !function_exists($plugin_func)) {
					include_once 'doc_plugin.php';
				}
				if (function_exists($plugin_func)) {
					$content = str_replace($m[0][$i], call_user_func_array($plugin_func, $parts), $content);
				}
			}
		}
		
		include 'doc_view.tpl';
		break;
		
	default:
		$docList = getDocList();
		include 'doc_list.tpl';
}


function createNewDoc() {
	$i = 1;
	while (true) {
		$filename = 'New article' . ($i > 1 ? " ($i)" : '') . '.html';
		if (!file_exists($filename)) {
			break;
		}
		$i++;
	}
	return $filename;
}
function getDocTitle($content, $default = '') {
	if (preg_match_all('/<h1>(.*?)<\/h1>/si', $content, $m)) {
		$title = $m[1][0];
	} else {
		$title = $default;
	}
	return trim($title);
}
function getDocContent($filename) {
	if (file_exists($filename)) {
		$content = file_get_contents($filename);
	} else {
		touch($filename);
		$content = '';
	}
	
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
	$dh = opendir($dir);
	if ($dh) {
		while (($file = readdir($dh)) !== false) {
			if (substr($file, -5) == '.html' && filetype($dir . $file) == 'file') {
				/**
				 * EUC-CN is GB2312
				 * 如果原始文件的编码是 gb2312，那么特殊对待
				 */
				$charset = mb_detect_encoding($file, 'ASCII, UTF-8, EUC-CN');
				if ($charset == 'EUC-CN') {
					$file = mb_convert_encoding($file, 'utf-8', $charset);
					$link = $file;
				} else {
					$link = $file;
					$charset = '';
				}
				$list[] = compact('file', 'link', 'charset');
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