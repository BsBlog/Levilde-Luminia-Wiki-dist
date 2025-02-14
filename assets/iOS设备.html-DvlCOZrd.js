import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,b as n,o as t}from"./app-D7MsoCzS.js";const e={};function r(g,i){return t(),a("div",null,i[0]||(i[0]=[n(`<h1 id="ios设备" tabindex="-1"><a class="header-anchor" href="#ios设备"><span>iOS设备</span></a></h1><blockquote><p>下面所有的截图均来自 <a href="https://embywiki.911997.xyz/" target="_blank" rel="noopener noreferrer">Terminus 终点站 WIKI</a></p></blockquote><ul><li><p><strong>iOS 上使用官方客户端</strong></p><h3 id="下载并安装" tabindex="-1"><a class="header-anchor" href="#下载并安装"><span><strong>下载并安装</strong></span></a></h3><p>从 <a href="https://apps.apple.com/us/app/emby/id992180193" target="_blank" rel="noopener noreferrer"><strong>App Store</strong></a> 下载并安装 Emby 官方客户端</p><h3 id="连接-emby-公益服务器" tabindex="-1"><a class="header-anchor" href="#连接-emby-公益服务器"><span><strong>连接 Emby 公益服务器</strong></span></a></h3><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img.2043d578.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>启动 App ，欢迎页面点 <strong>下一个</strong></p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_1.67d7007e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击 <strong>跳过</strong> 按钮，我们手动连接服务器（因为 <strong>公益服账号不是 Emby Connect 账号</strong>，这是两个不同的东西）</p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_2.db8b881c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>填写机器人给你的公益服地址和端口号（<strong>注意</strong>: 机器人提供的地址和端口是写一起的，而这里要分开填写），然后点击 <strong>连接</strong> 按钮</p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_3.3454a93a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击 <strong>手动登录</strong> 按钮</p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_4.4cd06e9f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>填写自己的账号密码点击 <strong>登录</strong> 按钮</p><h3 id="正版-或者-破解" tabindex="-1"><a class="header-anchor" href="#正版-或者-破解"><span><strong>正版 或者 破解</strong></span></a></h3><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_7.bad919a3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以直接点击 <strong>解锁 $4.99，这钱是付给 Emby 官方的。</strong></p><h3 id="使用-shadowrocket-破解" tabindex="-1"><a class="header-anchor" href="#使用-shadowrocket-破解"><span><strong>使用 Shadowrocket 破解</strong></span></a></h3><p>如果你有著名的翻墙软件 <a href="https://web.archive.org/web/20220524092827mp_/https://apps.apple.com/app/shadowrocket/id932747118" target="_blank" rel="noopener noreferrer">Shadowrocket</a> ( 小火箭 ) 且版本号大于 v2.1.62 ，那就可以用来破解 Emby 的 iOS 官方客户端。</p><p>下面我使用<strong>全新安装</strong> ( 也就是<strong>默认配置</strong> ) 的 Shadowrocket 来教大家如何破解 Emby。</p><p><strong>配置 Shadowrocket</strong></p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.29.18.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开 Shadowrocket ，选择下面的 <strong>配置</strong> ，再点击中间的本地配置文件 <strong>default.conf</strong></p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_3398.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在弹出菜单中选择 <strong>编辑纯文本</strong></p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.32.50.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>把配置文件拖到最底部</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Script]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">EmbyPremiere</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> type=http-response,script-path=https://raw.githubusercontent.com/rartv/SurgeScript/main/EmbyPremiere/EmbyPremiere.js,pattern=^https?:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\/\\/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mb3admin.com</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">admin</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">service</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">registration</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">validateDevice,max-size=131072,requires-body=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">,timeout=10,enable=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[MITM]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hostname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mb3admin.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制上面的代码，粘贴到最底部，然后点击右上角的 <strong>保存</strong></p><aside> ⚠️ 注意：由于破解脚本托管在 GitHub 上，如果您的网络连接不稳定或 GitHub 访问受限，可能无法获取脚本导致破解失败。 </aside><p><strong>这时请使用下面的备用脚本</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Script]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">EmbyPremiere</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> type=http-response,script-path=https://gitlab.com/iptv-org/embypublic/-/raw/master/Script/EmbyPremiere.js,pattern=^https?:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\/\\/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mb3admin.com</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">admin</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">service</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">registration</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">validateDevice,max-size=131072,requires-body=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">,timeout=10,enable=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[MITM]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hostname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mb3admin.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.42.21.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再点击中间的本地配置文件 **default.conf，**选择 <strong>编辑配置</strong></p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.44.26.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击 HTTPS 解密</p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.48.13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开 <strong>HTTPS 解密</strong> 的开关</p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.50.13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击 <strong>生成新的 CA 证书</strong></p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.51.59.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>证书生成后还需要 <strong>安装证书</strong></p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.55.25.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>证书下载到设置里后点击 <strong>已下载描述文件</strong></p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_c6f10bb114f9-1.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击右上角 <strong>安装</strong></p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-02.00.45.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在手机 <strong>设置 -&gt; 通用 -&gt; 关于本机 -&gt; 证书信任设置</strong>，找到刚才安装的 Shadowrocket 证书，将其开关打开</p><figure><img src="https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-02.02.55.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>回到 Shadowrocket ，上面显示 <strong>系统已信任</strong> ，说明我们正确安装并让系统信任我们的了证书，点右上角的**√** 保存即可完成破解</p></li></ul>`,3)]))}const d=s(e,[["render",r],["__file","iOS设备.html.vue"]]),o=JSON.parse('{"path":"/Use-and-Play/iOS%E8%AE%BE%E5%A4%87.html","title":"iOS设备","lang":"zh-CN","frontmatter":{"description":"iOS设备 下面所有的截图均来自 Terminus 终点站 WIKI iOS 上使用官方客户端 下载并安装 从 App Store 下载并安装 Emby 官方客户端 连接 Emby 公益服务器 启动 App ，欢迎页面点 下一个 点击 跳过 按钮，我们手动连接服务器（因为 公益服账号不是 Emby Connect 账号，这是两个不同的东西） 填写机器人...","head":[["meta",{"property":"og:url","content":"https://wiki.itsmyduty.top/Use-and-Play/iOS%E8%AE%BE%E5%A4%87.html"}],["meta",{"property":"og:site_name","content":"Levilde Luminia Wiki"}],["meta",{"property":"og:title","content":"iOS设备"}],["meta",{"property":"og:description","content":"iOS设备 下面所有的截图均来自 Terminus 终点站 WIKI iOS 上使用官方客户端 下载并安装 从 App Store 下载并安装 Emby 官方客户端 连接 Emby 公益服务器 启动 App ，欢迎页面点 下一个 点击 跳过 按钮，我们手动连接服务器（因为 公益服账号不是 Emby Connect 账号，这是两个不同的东西） 填写机器人..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img.2043d578.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-14T10:14:10.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-14T10:14:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"iOS设备\\",\\"image\\":[\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img.2043d578.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_1.67d7007e.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_2.db8b881c.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_3.3454a93a.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_4.4cd06e9f.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_7.bad919a3.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.29.18.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_3398.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.32.50.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.42.21.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.44.26.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.48.13.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.50.13.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.51.59.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.55.25.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_c6f10bb114f9-1.jpeg\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-02.00.45.png\\",\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-02.02.55.png\\"],\\"dateModified\\":\\"2025-02-14T10:14:10.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1739528050000,"updatedTime":1739528050000,"contributors":[{"name":"Bnq Dzj","username":"Bnq Dzj","email":"64721413+BnqDzj@users.noreply.github.com","commits":1,"url":"https://github.com/Bnq Dzj"}]},"readingTime":{"minutes":2.61,"words":784},"filePathRelative":"Use-and-Play/iOS设备.md","localizedDate":"2025年2月14日","autoDesc":true,"excerpt":"\\n<blockquote>\\n<p>下面所有的截图均来自 <a href=\\"https://embywiki.911997.xyz/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Terminus 终点站 WIKI</a></p>\\n</blockquote>\\n<ul>\\n<li>\\n<p><strong>iOS 上使用官方客户端</strong></p>\\n<h3><strong>下载并安装</strong></h3>\\n<p>从 <a href=\\"https://apps.apple.com/us/app/emby/id992180193\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>App Store</strong></a> 下载并安装 Emby 官方客户端</p>\\n<h3><strong>连接 Emby 公益服务器</strong></h3>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img.2043d578.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>启动 App ，欢迎页面点 <strong>下一个</strong></p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_1.67d7007e.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>点击 <strong>跳过</strong> 按钮，我们手动连接服务器（因为 <strong>公益服账号不是 Emby Connect 账号</strong>，这是两个不同的东西）</p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_2.db8b881c.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>填写机器人给你的公益服地址和端口号（<strong>注意</strong>: 机器人提供的地址和端口是写一起的，而这里要分开填写），然后点击 <strong>连接</strong> 按钮</p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_3.3454a93a.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>点击 <strong>手动登录</strong> 按钮</p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_4.4cd06e9f.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>填写自己的账号密码点击 <strong>登录</strong> 按钮</p>\\n<h3><strong>正版 或者 破解</strong></h3>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_7.bad919a3.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>可以直接点击 <strong>解锁 $4.99，这钱是付给 Emby 官方的。</strong></p>\\n<h3><strong>使用 Shadowrocket 破解</strong></h3>\\n<p>如果你有著名的翻墙软件 <a href=\\"https://web.archive.org/web/20220524092827mp_/https://apps.apple.com/app/shadowrocket/id932747118\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Shadowrocket</a> ( 小火箭 ) 且版本号大于 v2.1.62 ，那就可以用来破解 Emby 的 iOS 官方客户端。</p>\\n<p>下面我使用<strong>全新安装</strong> ( 也就是<strong>默认配置</strong> ) 的 Shadowrocket 来教大家如何破解 Emby。</p>\\n<p><strong>配置 Shadowrocket</strong></p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.29.18.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>打开 Shadowrocket ，选择下面的 <strong>配置</strong> ，再点击中间的本地配置文件 <strong>default.conf</strong></p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_3398.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>在弹出菜单中选择 <strong>编辑纯文本</strong></p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.32.50.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>把配置文件拖到最底部</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[Script]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">EmbyPremiere</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> =</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> type=http-response,script-path=https://raw.githubusercontent.com/rartv/SurgeScript/main/EmbyPremiere/EmbyPremiere.js,pattern=^https?:</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\/\\\\/</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">mb3admin.com</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\/</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">admin</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\/</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">service</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\/</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">registration</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\/</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">validateDevice,max-size=131072,requires-body=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">true</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">,timeout=10,enable=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">true</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[MITM]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">hostname</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> =</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> mb3admin.com</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>复制上面的代码，粘贴到最底部，然后点击右上角的 <strong>保存</strong></p>\\n  <aside>\\n  ⚠️ 注意：由于破解脚本托管在 GitHub 上，如果您的网络连接不稳定或 GitHub 访问受限，可能无法获取脚本导致破解失败。\\n  </aside>\\n<p><strong>这时请使用下面的备用脚本</strong></p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[Script]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">EmbyPremiere</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> =</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> type=http-response,script-path=https://gitlab.com/iptv-org/embypublic/-/raw/master/Script/EmbyPremiere.js,pattern=^https?:</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\/\\\\/</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">mb3admin.com</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\/</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">admin</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\/</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">service</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\/</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">registration</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\/</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">validateDevice,max-size=131072,requires-body=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">true</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">,timeout=10,enable=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">true</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[MITM]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">hostname</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> =</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> mb3admin.com</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.42.21.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>再点击中间的本地配置文件 **default.conf，**选择 <strong>编辑配置</strong></p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.44.26.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>点击 HTTPS 解密</p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.48.13.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>打开 <strong>HTTPS 解密</strong> 的开关</p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.50.13.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>点击 <strong>生成新的 CA 证书</strong></p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.51.59.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>证书生成后还需要 <strong>安装证书</strong></p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.55.25.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>证书下载到设置里后点击 <strong>已下载描述文件</strong></p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_c6f10bb114f9-1.jpeg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>点击右上角 <strong>安装</strong></p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-02.00.45.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>在手机 <strong>设置 -&gt; 通用 -&gt; 关于本机 -&gt; 证书信任设置</strong>，找到刚才安装的 Shadowrocket 证书，将其开关打开</p>\\n<figure><img src=\\"https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-02.02.55.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>回到 Shadowrocket ，上面显示 <strong>系统已信任</strong> ，说明我们正确安装并让系统信任我们的了证书，点右上角的**√** 保存即可完成破解</p>\\n</li>\\n</ul>"}');export{d as comp,o as data};
