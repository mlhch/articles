<h1>JavaScript - RequireJS - r.js</h1>

<p>2013-11-27 19:50 Wednesday</p>

<p><a href="http://requirejs.org/docs/optimization.html" target="_blank">http://requirejs.org/docs/optimization.html</a>|<a href="https://npmjs.org/package/grunt-contrib-requirejs" target="_blank">https://npmjs.org/package/grunt-contrib-requirejs</a></p>

<h2>REQUIREMENTS&sect; 1</h2>

<p>The optimizer can be run using Node, Java with Rhino, or in the browser. The requirements for each option:</p>

<ul>
	<li>Node:&nbsp;(preferred)&nbsp;<a href="http://nodejs.org/">Node</a>&nbsp;0.4.0 or later.</li>
</ul>

<h2>DOWNLOAD&sect; 2</h2>

<p>1) You can download the tool on&nbsp;<a href="http://requirejs.org/docs/download.html#rjs">the download page</a>.</p>

<p>2) If you are using Node with NPM, you can install r.js globally as part of the &quot;requirejs&quot; package in NPM:</p>

<pre>
&gt; npm install -g requirejs
&gt; r.js -o app.build.js
</pre>

<p>If on Windows, you may need to type&nbsp;r.js.cmd&nbsp;instead of&nbsp;r.js. Or, you can use&nbsp;<a href="http://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/doskey.mspx?mfr=true">DOSKEY</a>:</p>

<pre>
DOSKEY r.js=r.js.cmd $*</pre>

<p>If you want to install requirejs locally in a project as an npm package, instead of globally:</p>

<pre>
&gt; npm install requirejs
</pre>

<p>With this local install, you can run the optimizer by running the&nbsp;r.js&nbsp;or&nbsp;r.js.cmd&nbsp;file found in the project&#39;s&nbsp;node_modules/.bin&nbsp;directory.</p>

<p>With the local install, you can also&nbsp;<a href="http://requirejs.org/docs/node.html#optimizer">use the optimizer via a function call</a>&nbsp;inside a node program.</p>

<p>The rest of this page assumes that r.js is just downloaded manually from the download page. It is normally the clearest, most portable way to use the optimizer.</p>
