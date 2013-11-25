<h1>Node.js</h1>

<p>2012-08-14 13:16:54 +08:00 Tuesday</p>

<p><a href="http://nodejs.org/" target="_blank">http://nodejs.org/</a></p>

<p>Node.js is a platform built on&nbsp;<a href="http://code.google.com/p/v8/">Chrome&#39;s JavaScript runtime</a>&nbsp;for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</p>

<p>2013-09-04 20:13</p>

<p>npm 也是一个包，所以搜索 npm 包就可以看到 npm 当前的最新版本</p>

<p>今天 brew install node 安装了 node 的最新版本 v0.10.17，可能是因为更新了 brew 的缘故吧。发现 npm 相应版本也变成了 v1.3.8，不过最新已经是 v1.3.9。</p>

<p>2013-08-27 03:39 Tuesday</p>

<p>npm 也是 npm 的一个包，所以 npm update npm -g 可以用来更新 npm 自己。</p>

<p>实际 Node 最新版本已经到 v0.10.17 了，不过 v0.10.12 应该已经够用了。而新版本的 Node 带来的就是新版本的 npm</p>

<pre>
$ brew upgrade node
==&gt; Upgrading 1 outdated package, with result:
node 0.10.12
==&gt; Upgrading node
==&gt; Downloading http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz
######################################################################## 100.0%
==&gt; Patching
patching file tools/gyp/pylib/gyp/xcode_emulation.py
==&gt; ./configure --prefix=/usr/local/Cellar/node/0.10.12
==&gt; make install
🍺  /usr/local/Cellar/node/0.10.12: 1096 files, 15M, built in 5.9 minutes</pre>

<pre>
$ npm -v
1.2.32
</pre>

<pre>
$ which npm
/usr/local/bin/npm</pre>

<pre>
$ ll /usr/local/bin/npm&nbsp;
lrwxr-xr-x &nbsp;1 mlhch &nbsp;admin &nbsp;30 &nbsp;8 27 03:51 /usr/local/bin/npm -&gt; ../Cellar/node/0.10.12/bin/npm
</pre>

<h3>node 0.10 的不兼容问题，很严重</h3>

<p>2013-05-01 19:29 Wednsday</p>

<p>http://stackoverflow.com/questions/15357274/yeoman-yo-webapp-fails-with-typeerror</p>

<p>Yap, node 0.10 isn&#39;t officially supported yet and there are many plugins and libraries that break.</p>

<p>比如在这个版本下试图执行 bower 命令，会看到如下错误：</p>

<pre>
$ bower

path.js:360
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; throw new TypeError(&#39;Arguments to path.join must be strings&#39;);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ^
TypeError: Arguments to path.join must be strings
&nbsp;&nbsp;&nbsp; at path.js:360:15
&nbsp;&nbsp;&nbsp; at Array.filter (native)
&nbsp;&nbsp;&nbsp; at Object.exports.join (path.js:358:36)
&nbsp;&nbsp;&nbsp; at Object.&lt;anonymous&gt; (/usr/local/share/npm/lib/node_modules/bower/lib/core/config.js:28:22)
&nbsp;&nbsp;&nbsp; at Module._compile (module.js:456:26)
&nbsp;&nbsp;&nbsp; at Object.Module._extensions..js (module.js:474:10)
&nbsp;&nbsp;&nbsp; at Module.load (module.js:356:32)
&nbsp;&nbsp;&nbsp; at Function.Module._load (module.js:312:12)
&nbsp;&nbsp;&nbsp; at Module.require (module.js:364:17)
&nbsp;&nbsp;&nbsp; at require (module.js:380:17)</pre>

<p>这也正是造成 yeoman init angular 出错并且生成文件不完整的根源</p>

<pre>
$ yeoman init angular
Loading &quot;bower.js&quot; tasks and helpers...ERROR
&gt;&gt; TypeError: Arguments to path.join must be strings</pre>

<p>用 brew 切换回之前的版本，迅速解决问题。</p>

<pre>
$ brew switch node 0.10.1
Cleaning /usr/local/Cellar/node/0.10.1
Cleaning /usr/local/Cellar/node/0.8.14
5 links created for /usr/local/Cellar/node/0.10.1</pre>

<p>2013-04-30 00:58 Tuesday</p>

<p>查看当前版本</p>

<pre>
$ npm version
{ http_parser: &#39;1.0&#39;,
&nbsp; node: &#39;0.8.14&#39;,
&nbsp; v8: &#39;3.11.10.25&#39;,
&nbsp; ares: &#39;1.7.5-DEV&#39;,
&nbsp; uv: &#39;0.8&#39;,
&nbsp; zlib: &#39;1.2.3&#39;,
&nbsp; openssl: &#39;1.0.0f&#39;,
&nbsp; npm: &#39;1.1.65&#39; }</pre>

<pre>
$ brew upgrade npm
==&gt; Upgrading node
==&gt; Downloading http://nodejs.org/dist/v0.10.1/node-v0.10.1.tar.gz
######################################################################## 100.0%
==&gt; ./configure --prefix=/usr/local/Cellar/node/0.10.1
==&gt; make install
🍺&nbsp; /usr/local/Cellar/node/0.10.1: 821 files, 13M, built in 4.7 minutes</pre>

<pre>
$ npm version
{ http_parser: &#39;1.0&#39;,
&nbsp; node: &#39;0.10.1&#39;,
&nbsp; v8: &#39;3.14.5.8&#39;,
&nbsp; ares: &#39;1.9.0-DEV&#39;,
&nbsp; uv: &#39;0.10&#39;,
&nbsp; zlib: &#39;1.2.3&#39;,
&nbsp; openssl: &#39;1.0.1e&#39;,
&nbsp; npm: &#39;1.2.15&#39; }</pre>

<p>2013-04-30 00:58 Tuesday</p>

<p>Current Version: v0.10.5</p>

<h3>npm - Node Packaged Modules</h3>

<p><a href="https://npmjs.org/" target="_blank">https://npmjs.org/</a></p>

<p>Any package can be installed by using&nbsp;<a href="https://npmjs.org/doc/install.html">npm install</a>.<br />
Add your programs to this index by using&nbsp;<a href="https://npmjs.org/doc/publish.html">npm publish</a>.</p>

<h2>--global or -g</h2>

<p><a href="http://blog.nodejs.org/2011/03/23/npm-1-0-global-vs-local-installation/" target="_blank">http://blog.nodejs.org/2011/03/23/npm-1-0-global-vs-local-installation/</a></p>

<p>简单说，就是安装每个包时加 -g 参数会默认安装到&nbsp;&nbsp;/usr/local/share/npm/lib/node_modules/，查看时也需要加 -g 来查看，否则会查看当前目录下的 node_modules。</p>

<pre>
$ npm --help

Usage: npm &lt;command&gt;

where &lt;command&gt; is one of:
&nbsp;&nbsp;&nbsp; add-user, adduser, apihelp, author, bin, bugs, c, cache,
&nbsp;&nbsp;&nbsp; completion, config, ddp, dedupe, deprecate, docs, edit,
&nbsp;&nbsp;&nbsp; explore, faq, find, find-dupes, get, help, help-search,
&nbsp;&nbsp;&nbsp; home, i, info, init, install, isntall, la, link, list, ll,
&nbsp;&nbsp;&nbsp; ln, login, ls, outdated, owner, pack, prefix, prune,
&nbsp;&nbsp;&nbsp; publish, r, rb, rebuild, remove, restart, rm, root,
&nbsp;&nbsp;&nbsp; run-script, s, se, search, set, show, shrinkwrap, star,
&nbsp;&nbsp;&nbsp; start, stop, submodule, tag, test, tst, un, uninstall,
&nbsp;&nbsp;&nbsp; unlink, unpublish, unstar, up, update, version, view,
&nbsp;&nbsp;&nbsp; whoami

npm &lt;cmd&gt; -h&nbsp;&nbsp;&nbsp;&nbsp; quick help on &lt;cmd&gt;
npm -l&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; display full usage info
npm faq&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; commonly asked questions
npm help &lt;term&gt;&nbsp; search for help on &lt;term&gt;
npm help npm&nbsp;&nbsp;&nbsp;&nbsp; involved overview

Specify configs in the ini-formatted file:
&nbsp;&nbsp;&nbsp; /Users/mlhch/.npmrc
or on the command line via: npm &lt;command&gt; --key value
Config info can be viewed via: npm help config</pre>

<pre>
$ npm help npm
NPM(1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NPM(1)

NAME
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; npm -- node package manager

SYNOPSIS
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; npm &lt;command&gt; [args]

VERSION
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.1.65
...安钢六生活区60楼中间门3楼西户3138865
DIRECTORIES
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; See npm help folders to learn about where npm puts stuff.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In particular, npm has two modes of operation:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; o&nbsp;&nbsp; global mode:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; npm&nbsp; installs&nbsp; packages&nbsp; into&nbsp; the&nbsp; install&nbsp; prefix&nbsp; at&nbsp; prefix/lib/node_modules&nbsp; and bins are
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; installed in prefix/bin.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; o&nbsp;&nbsp; local mode:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; npm installs packages into the current project directory, which defaults to the current&nbsp; work-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ing&nbsp; directory.&nbsp;&nbsp; Packages&nbsp; are&nbsp; installed&nbsp; to&nbsp; ./node_modules,&nbsp; and&nbsp; bins&nbsp; are&nbsp; installed&nbsp; to
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ./node_modules/.bin.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Local mode is the default.&nbsp; Use --global or -g on any command to operate in global mode instead.
...</pre>

<hr />
<h2>Install on Ubuntu</h2>

<ol>
	<li>http://nodejs.org/download/</li>
	<li><a href="https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager">Installing from package managers</a></li>
	<li>https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager</li>
</ol>

<p>Example install:</p>

<pre>
sudo apt-get update
sudo apt-get install python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
</pre>

<p>It installs current stable Node on the current stable Ubuntu. Quantal (12.10) users may need to install the&nbsp;software-properties-common&nbsp;package for the&nbsp;add-apt-repository&nbsp;command to work:&nbsp;sudo apt-get install software-properties-common</p>

<p>As of Node.js v0.10.0, the nodejs package from&nbsp;<a href="https://chrislea.com/2013/03/15/upgrading-from-node-js-0-8-x-to-0-10-0-from-my-ppa/">Chris Lea</a>&#39;s repo includes both npm and nodejs-dev.</p>

<p>There is a naming conflict with the node package (Amateur Packet Radio Node Program), and the nodejs binary has been renamed from&nbsp;nodeto&nbsp;nodejs. You&#39;ll need to symlink&nbsp;/usr/bin/node&nbsp;to&nbsp;/usr/bin/nodejs&nbsp;or you could uninstall the Amateur Packet Radio Node Program to avoid that conflict.</p>

<hr />
<h2>Brew 安装 nodejs</h2>

<p>2013-02-18 10:51 星期一 已经转向了 Brew，所以要用 Brew 安装 nodejs 了</p>

<ul>
	<li><a href="http://nodejs.org/dist/v0.8.20/node-v0.8.20-x86.msi">Windows Installernode-v0.8.20-x86.msi</a></li>
	<li><a href="http://nodejs.org/dist/v0.8.20/node-v0.8.20.pkg">Macintosh Installernode-v0.8.20.pkg</a></li>
	<li><a href="http://nodejs.org/dist/v0.8.20/node-v0.8.20.tar.gz">Source Codenode-v0.8.20.tar.gz</a></li>
</ul>

<p>可以看到，brew 只安装到了 v0.8.14 版本，离当前版本 v0.8.20 还差很多，不过使用起来应该没问题了。</p>

<pre>
$ brew install nodejs
==&gt; Downloading http://nodejs.org/dist/v0.8.14/node-v0.8.14.tar.gz
######################################################################## 100.0%
==&gt; ./configure --prefix=/usr/local/Cellar/node/0.8.14
==&gt; make install
==&gt; Caveats
Homebrew installed npm.
We recommend prepending the following path to your PATH environment
variable to have npm-installed binaries picked up:
&nbsp; /usr/local/share/npm/bin
==&gt; Summary
/usr/local/Cellar/node/0.8.14: 861 files, 13M, built in 4.2 minutes</pre>

<p>安装完后，npm 命令也就可以用了。注意，最终 npm 的 node_modules 路径是&nbsp;/usr/local/share/npm/lib/node_modules/ 而不是 /usr/local/lib/node_modules</p>

<hr />
<h2>Macports 可安装 nodejs 和 npm</h2>

<pre>
$ port search node
...
nodejs @0.8.9 (devel, net)
&nbsp;&nbsp;&nbsp; Evented I/O for V8 JavaScript

nodejs-devel @0.9.2 (devel, net)
&nbsp;&nbsp;&nbsp; Evented I/O for V8 JavaScript

npm @1.1.61 (devel)
&nbsp;&nbsp;&nbsp; node package manager
...
</pre>

<pre>
$ sudo port install nodejs
Password:
---&gt;&nbsp; Computing dependencies for nodejs
---&gt;&nbsp; Dependencies to be installed: openssl zlib python27 bzip2 db46 gettext expat libiconv ncurses libedit python_select sqlite3
---&gt;&nbsp; Fetching archive for zlib
---&gt;&nbsp; Attempting to fetch zlib-1.2.7_0.darwin_11.x86_64.tbz2 from http://packages.macports.org/zlib
---&gt;&nbsp; Attempting to fetch zlib-1.2.7_0.darwin_11.x86_64.tbz2.rmd160 from http://packages.macports.org/zlib
---&gt;&nbsp; Installing zlib @1.2.7_0
---&gt;&nbsp; Activating zlib @1.2.7_0
---&gt;&nbsp; Cleaning zlib
---&gt;&nbsp; Fetching archive for openssl
---&gt;&nbsp; Attempting to fetch openssl-1.0.1c_0.darwin_11.x86_64.tbz2 from http://packages.macports.org/openssl
---&gt;&nbsp; Attempting to fetch openssl-1.0.1c_0.darwin_11.x86_64.tbz2.rmd160 from http://packages.macports.org/openssl
---&gt;&nbsp; Installing openssl @1.0.1c_0
---&gt;&nbsp; Activating openssl @1.0.1c_0
---&gt;&nbsp; Cleaning openssl
---&gt;&nbsp; Fetching archive for bzip2
---&gt;&nbsp; Attempting to fetch bzip2-1.0.6_0.darwin_11.x86_64.tbz2 from http://packages.macports.org/bzip2
---&gt;&nbsp; Attempting to fetch bzip2-1.0.6_0.darwin_11.x86_64.tbz2.rmd160 from http://packages.macports.org/bzip2
---&gt;&nbsp; Installing bzip2 @1.0.6_0
---&gt;&nbsp; Activating bzip2 @1.0.6_0
---&gt;&nbsp; Cleaning bzip2
---&gt;&nbsp; Fetching archive for db46
---&gt;&nbsp; Attempting to fetch db46-4.6.21_6.darwin_11.x86_64.tbz2 from http://packages.macports.org/db46
---&gt;&nbsp; Attempting to fetch db46-4.6.21_6.darwin_11.x86_64.tbz2.rmd160 from http://packages.macports.org/db46
---&gt;&nbsp; Installing db46 @4.6.21_6
---&gt;&nbsp; Activating db46 @4.6.21_6
---&gt;&nbsp; Cleaning db46
---&gt;&nbsp; Fetching archive for expat
---&gt;&nbsp; Attempting to fetch expat-2.1.0_0.darwin_11.x86_64.tbz2 from http://packages.macports.org/expat
---&gt;&nbsp; Attempting to fetch expat-2.1.0_0.darwin_11.x86_64.tbz2.rmd160 from http://packages.macports.org/expat
---&gt;&nbsp; Installing expat @2.1.0_0
---&gt;&nbsp; Activating expat @2.1.0_0
---&gt;&nbsp; Cleaning expat
---&gt;&nbsp; Fetching archive for libiconv
---&gt;&nbsp; Attempting to fetch libiconv-1.14_0.darwin_11.x86_64.tbz2 from http://packages.macports.org/libiconv
---&gt;&nbsp; Attempting to fetch libiconv-1.14_0.darwin_11.x86_64.tbz2.rmd160 from http://packages.macports.org/libiconv
---&gt;&nbsp; Installing libiconv @1.14_0
---&gt;&nbsp; Activating libiconv @1.14_0
---&gt;&nbsp; Cleaning libiconv
---&gt;&nbsp; Fetching archive for ncurses
---&gt;&nbsp; Attempting to fetch ncurses-5.9_1.darwin_11.x86_64.tbz2 from http://packages.macports.org/ncurses
---&gt;&nbsp; Attempting to fetch ncurses-5.9_1.darwin_11.x86_64.tbz2.rmd160 from http://packages.macports.org/ncurses
---&gt;&nbsp; Installing ncurses @5.9_1
---&gt;&nbsp; Activating ncurses @5.9_1
---&gt;&nbsp; Cleaning ncurses
---&gt;&nbsp; Fetching archive for gettext
---&gt;&nbsp; Attempting to fetch gettext-0.18.1.1_2.darwin_11.x86_64.tbz2 from http://packages.macports.org/gettext
---&gt;&nbsp; Attempting to fetch gettext-0.18.1.1_2.darwin_11.x86_64.tbz2.rmd160 from http://packages.macports.org/gettext
---&gt;&nbsp; Installing gettext @0.18.1.1_2
---&gt;&nbsp; Activating gettext @0.18.1.1_2
---&gt;&nbsp; Cleaning gettext
---&gt;&nbsp; Fetching archive for libedit
---&gt;&nbsp; Attempting to fetch libedit-20120601-3.0_0.darwin_11.x86_64.tbz2 from http://packages.macports.org/libedit
---&gt;&nbsp; Attempting to fetch libedit-20120601-3.0_0.darwin_11.x86_64.tbz2.rmd160 from http://packages.macports.org/libedit
---&gt;&nbsp; Installing libedit @20120601-3.0_0
---&gt;&nbsp; Activating libedit @20120601-3.0_0
---&gt;&nbsp; Cleaning libedit
---&gt;&nbsp; Fetching archive for python_select
---&gt;&nbsp; Attempting to fetch python_select-0.3_1.darwin_11.noarch.tbz2 from http://packages.macports.org/python_select
---&gt;&nbsp; Attempting to fetch python_select-0.3_1.darwin_11.noarch.tbz2.rmd160 from http://packages.macports.org/python_select
---&gt;&nbsp; Installing python_select @0.3_1
---&gt;&nbsp; Activating python_select @0.3_1
---&gt;&nbsp; Cleaning python_select
---&gt;&nbsp; Fetching archive for sqlite3
---&gt;&nbsp; Attempting to fetch sqlite3-3.7.14_1.darwin_11.x86_64.tbz2 from http://packages.macports.org/sqlite3
---&gt;&nbsp; Attempting to fetch sqlite3-3.7.14_1.darwin_11.x86_64.tbz2.rmd160 from http://packages.macports.org/sqlite3
---&gt;&nbsp; Installing sqlite3 @3.7.14_1
---&gt;&nbsp; Activating sqlite3 @3.7.14_1
---&gt;&nbsp; Cleaning sqlite3
---&gt;&nbsp; Fetching archive for python27
---&gt;&nbsp; Attempting to fetch python27-2.7.3_0.darwin_11.x86_64.tbz2 from http://packages.macports.org/python27
---&gt;&nbsp; Attempting to fetch python27-2.7.3_0.darwin_11.x86_64.tbz2.rmd160 from http://packages.macports.org/python27
---&gt;&nbsp; Installing python27 @2.7.3_0
---&gt;&nbsp; Activating python27 @2.7.3_0

To make python 2.7 the default (i.e. the version you get when you run &#39;python&#39;),
please run:

sudo port select --set python python27

---&gt;&nbsp; Cleaning python27
---&gt;&nbsp; Fetching archive for nodejs
---&gt;&nbsp; Attempting to fetch nodejs-0.8.9_0+python27+ssl.darwin_11.x86_64.tbz2 from http://packages.macports.org/nodejs
---&gt;&nbsp; Attempting to fetch nodejs-0.8.9_0+python27+ssl.darwin_11.x86_64.tbz2.rmd160 from http://packages.macports.org/nodejs
---&gt;&nbsp; Installing nodejs @0.8.9_0+python27+ssl
---&gt;&nbsp; Activating nodejs @0.8.9_0+python27+ssl
---&gt;&nbsp; Cleaning nodejs
---&gt;&nbsp; Updating database of binaries: 100.0%
---&gt;&nbsp; Scanning binaries for linking errors: 100.0%
---&gt;&nbsp; No broken files found.</pre>

<pre>
$ sudo port install npm
Password:
---&gt;&nbsp; Computing dependencies for npm
---&gt;&nbsp; Fetching archive for npm
---&gt;&nbsp; Attempting to fetch npm-1.1.61_0.darwin_11.noarch.tbz2 from http://packages.macports.org/npm
---&gt;&nbsp; Attempting to fetch npm-1.1.61_0.darwin_11.noarch.tbz2.rmd160 from http://packages.macports.org/npm
---&gt;&nbsp; Installing npm @1.1.61_0
---&gt;&nbsp; Activating npm @1.1.61_0

It is not recommended to install packages globally. But if you do so please be
aware that they won&#39;t get cleaned up when you deactivate or uninstall npm.
Globally installed packages will remain in /opt/local/lib/node_modules/ until
you manually delete them.

---&gt;&nbsp; Cleaning npm
---&gt;&nbsp; Updating database of binaries: 100.0%
---&gt;&nbsp; Scanning binaries for linking errors: 100.0%
---&gt;&nbsp; No broken files found.</pre>

<hr />
<p><a href="http://nodejs.org/dist/v0.8.6/node-v0.8.6.tar.gz">Source Code</a></p>

<p>编译安装 Node.js 需要 Python 环境，因为 ./configure 就是用 Python 写的。</p>

<pre>
[root@localhost node-v0.8.6]# ./configure
&nbsp; File &quot;./configure&quot;, line 325
&nbsp;&nbsp;&nbsp; o[&#39;default_configuration&#39;] = &#39;Debug&#39; if options.debug else &#39;Release&#39;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ^
</pre>

<p>用 yum 安装 python 后，错误依旧，可能的原因是 python 版本太低，打开 README.md 可见</p>

<pre>
### To build:

Unix/Macintosh. Requires python 2.6 or 2.7 and GNU make 3.81 or newer:

&nbsp;&nbsp;&nbsp; ./configure
&nbsp;&nbsp;&nbsp; make
&nbsp;&nbsp;&nbsp; make install

Windows:

&nbsp;&nbsp;&nbsp; vcbuild.bat
</pre>

<p>安装目前 Python 2 的 Python 2.7.3 最版本后，再次执行 ./configure，结果如下：</p>

<pre>
# ./configure
{ &#39;target_defaults&#39;: { &#39;cflags&#39;: [],
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;default_configuration&#39;: &#39;Release&#39;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;defines&#39;: [],
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;include_dirs&#39;: [],
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;libraries&#39;: []},
&nbsp; &#39;variables&#39;: { &#39;host_arch&#39;: &#39;x64&#39;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;node_install_npm&#39;: &#39;true&#39;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;node_install_waf&#39;: &#39;true&#39;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;node_prefix&#39;: &#39;&#39;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;node_shared_openssl&#39;: &#39;false&#39;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;node_shared_v8&#39;: &#39;false&#39;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;node_shared_zlib&#39;: &#39;false&#39;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;node_use_dtrace&#39;: &#39;false&#39;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;node_use_etw&#39;: &#39;false&#39;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;node_use_openssl&#39;: &#39;true&#39;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;target_arch&#39;: &#39;x64&#39;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;v8_no_strict_aliasing&#39;: 1,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;v8_use_snapshot&#39;: &#39;true&#39;}}
creating&nbsp; ./config.gypi
creating&nbsp; ./config.mk
</pre>

<p>不料 make 时又有错误</p>

<pre>
File &quot;../../tools/js2c.py&quot;, line 36, in &lt;module&gt;
&nbsp;&nbsp;&nbsp; import bz2
ImportError: No module named bz2
make[1]: *** [/root/node-v0.8.6/out/Release/obj/gen/libraries.cc] 错误 1
make[1]: Leaving directory `/root/node-v0.8.6/out&#39;
make: *** [node] 错误 2</pre>

<p>根据提示只 yum install bzip2 bzip2-devel 还不行，还需要重新编译 Python-2.7.3。然后再 make 就顺利通过了。</p>
