import{_ as s,c as n,o as a,a as e}from"./app.074f018d.js";const D=JSON.parse('{"title":"uniqueNumber","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Type Definitions","slug":"type-definitions","link":"#type-definitions","children":[]}],"relativePath":"utils/maths/unique-number.md","lastUpdated":1667401506000}'),l={name:"utils/maths/unique-number.md"},p=e(`<h1 id="uniquenumber" tabindex="-1">uniqueNumber <a class="header-anchor" href="#uniquenumber" aria-hidden="true">#</a></h1><blockquote><p>Generates a unique number of a stated length.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">uniqueNumber</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@screaming/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">uniqueNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// 4-digit number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">uniqueNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// different 4-digit number</span></span>
<span class="line"></span></code></pre></div><h2 id="type-definitions" tabindex="-1">Type Definitions <a class="header-anchor" href="#type-definitions" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">length</span><span style="color:#676E95;"> - The unique number&#39;s length.</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> The generated unique number.</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">uniqueNumber</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"></span></code></pre></div>`,6),o=[p];function t(r,c,i,u,y,d){return a(),n("div",null,o)}const A=s(l,[["render",t]]);export{D as __pageData,A as default};