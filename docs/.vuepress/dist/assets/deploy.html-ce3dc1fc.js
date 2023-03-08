import{_ as t,M as e,p as o,q as p,R as n,t as s,N as r,a1 as c}from"./framework-5866ffd3.js";const l={},i=n("h1",{id:"🖥️部署指南-编写中",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🖥️部署指南-编写中","aria-hidden":"true"},"#"),s(" 🖥️部署指南（编写中...）")],-1),u=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"编写中页面提醒"),n("p",null,"本页面仍处于编写状态中，内容可能不全面，会对阅读造成一定的影响！")],-1),d={href:"https://www.github.com/NIANIANKNIA/NIASERVER-V4",target:"_blank",rel:"noopener noreferrer"},k=c(`<h3 id="下载对应版本的行为包" tabindex="-1"><a class="header-anchor" href="#下载对应版本的行为包" aria-hidden="true">#</a> 下载对应版本的行为包</h3><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;USEMenu&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;USEShop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;USERandomDATA&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;USETpa&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;USEHome&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MoneyScoreboardName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;money&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MoneyScoreboardName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;能源币&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;TimeScoreboardName&quot;</span><span class="token operator">:</span><span class="token string">&quot;time&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;OPTAG&quot;</span><span class="token operator">:</span> <span class="token string">&quot;op&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;OPMENUPassword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;pos&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;islandCfg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;R&quot;</span><span class="token operator">:</span>  <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;CX&quot;</span><span class="token operator">:</span> <span class="token number">402</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;CY&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;CZ&quot;</span><span class="token operator">:</span> <span class="token number">547</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可选-根据需求删除多余文件" tabindex="-1"><a class="header-anchor" href="#可选-根据需求删除多余文件" aria-hidden="true">#</a> （可选）根据需求删除多余文件</h3><h3 id="可选-本地测试" tabindex="-1"><a class="header-anchor" href="#可选-本地测试" aria-hidden="true">#</a> （可选）本地测试</h3><h3 id="部署到服务器上" tabindex="-1"><a class="header-anchor" href="#部署到服务器上" aria-hidden="true">#</a> 部署到服务器上</h3>`,6);function v(m,h){const a=e("ExternalLinkIcon");return o(),p("div",null,[i,u,n("blockquote",null,[n("p",null,[n("a",d,[s("NIA服务器V4"),r(a)]),s("仍处于开发状态中")])]),k])}const b=t(l,[["render",v],["__file","deploy.html.vue"]]);export{b as default};