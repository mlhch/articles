<h1>JavaScript - prototpye.js</h1>

<p>2013-12-07 22:50 Saturday</p>

<p><a href="http://prototypejs.org/" target="_blank">http://prototypejs.org/</a></p>

<ul>
	<li>
	<p>2013-12-07 23:01 Saturday</p>

	<p>近日 git rebase WEHUB Flowchart 项目，重拾 prototpye.js 1.6 版本破坏本地函数&nbsp;JSON.stringify 的原因是其覆盖了 Array.prototype.toJSON 方法</p>
	</li>
	<li>
	<p>2013-12-16 21:29 Monday</p>

	<p>今日发现 prototype.js 的一个 bug，在如下代码中，除了生成正常的 style=&quot;width: 100%; height: 50px;&quot; 外，还会生成&nbsp;undefined=&quot;width: 100%; height: 50px;&quot;</p>

	<pre>
this.containers.price = new Element(&#39;div&#39;, {
&nbsp; id: &#39;priceGraph&#39;,
&nbsp; style: &#39;width: 100%; height: &#39; + this.options.priceHeight + &#39;;&#39;
});</pre>

	<p>究其原因，是因为如下函数中有逻辑上的问题。其中 style 对应的函数&nbsp;table.values[attr] 在逻辑上正确设置 element.style.cssText = value 后，并无返回值，此时逻辑应该直接结束就对了。</p>

	<pre>
  function writeAttribute(element, name, value) {
    element = $(element);
    var attributes = {}, table = ATTRIBUTE_TRANSLATIONS.write;

    if (typeof name === &#39;object&#39;) {
      attributes = name;
    } else {
      attributes[name] = Object.isUndefined(value) ? true : value;
    }

    for (var attr in attributes) {
      name = table.names[attr] || attr;
      value = attributes[attr];
      if (table.values[attr])
        <span class="marker">name = table.values[attr](element, value);</span>
      if (value === false || value === null)
        element.removeAttribute(name);
      else if (value === true)
        element.setAttribute(name, name);
      else element.setAttribute(name, value);
    }

    return element;
  }</pre>

	<pre>
      style: function(element, value) {
        element.style.cssText = value ? value : &#39;&#39;;
      }
</pre>
	</li>
</ul>

<h4><a href="http://prototypejs.org/2012/08/08/prototype-1-7-1">Prototype 1.7.1</a></h4>

<p>Not long ago, I tagged Prototype 1.7.1, an update 18 months in the making. It features an overhaul of our DOM library and better coexistence with ES5 methods, but quite a bit more as well.</p>

<p>Prototype takes the complexity out of client-side web programming. Built to solve real-world problems, it adds useful extensions to the browser scripting environment and provides elegant APIs around the clumsy interfaces of Ajax and the Document Object Model.</p>

<h2>Download Prototype</h2>

<h3>Latest stable version</h3>

<p><a href="https://ajax.googleapis.com/ajax/libs/prototype/1.7.1.0/prototype.js">Download Prototype 1.7.1 (June 5, 2012)</a></p>

<h3>Prototype development</h3>

<p>You can browse the source code at our&nbsp;<a href="http://github.com/sstephenson/prototype/tree/master">GitHub repository</a>.</p>

<p>If you want the full development package (including unit tests), you can use&nbsp;<a href="http://git-scm.com/">Git</a>&nbsp;to clone the source code:</p>

<pre>
git clone git://github.com/sstephenson/prototype.git
</pre>

<p>Build the complete &ldquo;prototype.js&rdquo; file with the&nbsp;rake dist&nbsp;command. You can find more details about this in the&nbsp;<a href="http://prototypejs.org/contribute">contribution guide</a>.</p>

<h3>Compatibility</h3>

<p>The latest version of Prototype is compatible with the following browsers:</p>

<table>
	<thead>
		<tr>
			<th>Browser</th>
			<th>Version(s)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Mozilla Firefox</th>
			<td>&ge; 1.5</td>
		</tr>
		<tr>
			<th>Microsoft Internet Explorer for Windows</th>
			<td>&ge; 6.0</td>
		</tr>
		<tr>
			<th>Apple Safari</th>
			<td>&ge; 2.0.4</td>
		</tr>
		<tr>
			<th>Google Chrome</th>
			<td>&ge; 1.0</td>
		</tr>
		<tr>
			<th>Opera</th>
			<td>&ge; 9.25</td>
		</tr>
	</tbody>
</table>

<h3>Older versions</h3>

<h4>1.7</h4>

<ul>
	<li><a href="https://ajax.googleapis.com/ajax/libs/prototype/1.7.0.0/prototype.js">Download Prototype 1.7 (November 16, 2010)</a></li>
</ul>

<h4>1.6</h4>

<ul>
	<li><a href="http://prototypejs.org/assets/2009/8/31/prototype.js">Download Prototype 1.6.1 (September 1st, 2009)</a></li>
	<li><a href="http://prototypejs.org/assets/2008/9/29/prototype-1.6.0.3.js">Download Prototype 1.6.0.3 (September 29, 2008)</a></li>
	<li><a href="http://prototypejs.org/assets/2008/1/25/prototype-1.6.0.2.js">Download Prototype 1.6.0.2 (January 25, 2008)</a></li>
	<li><a href="http://prototypejs.org/assets/2007/11/6/prototype.js">Download Prototype 1.6.0 (November 7, 2007)</a></li>
</ul>

<h4>1.5</h4>

<ul>
	<li><a href="http://prototypejs.org/assets/2008/1/25/prototype-1.5.1.2.js">Download Prototype 1.5.1.2 (January 25, 2008)</a></li>
	<li><a href="http://prototypejs.org/assets/2007/6/20/prototype.js">Download Prototype 1.5.1.1 (June 19, 2007)</a></li>
	<li><a href="http://prototypejs.org/assets/2007/5/1/prototype.js">Download Prototype 1.5.1 (May 1, 2007)</a></li>
	<li><a href="http://prototypejs.org/assets/2007/1/18/prototype.js">Download Prototype 1.5.0 (January 18, 2007)</a></li>
</ul>

<ul>
	<li>&nbsp;</li>
</ul>
