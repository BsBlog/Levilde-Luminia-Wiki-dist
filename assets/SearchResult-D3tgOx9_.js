import{u as I,e as te,f as se,g as _,h as ae,P as le,t as re,i as ue,j as b,k,l as ie,w as M,m as s,n as ne,R as T,p as oe,q as ce,v as ve,C as de,x as pe,y as he,z as ye,A as me,B as Ee,D as w,E as ge,F as Se,G as fe,H as O,I as $,J as Ae}from"./app-CVXGDcss.js";const He=["/","/Get-Started/Coordinated-Vulnerability-Disclosure.html","/Get-Started/FAQ.html","/Get-Started/Feedback-and-Media-Support.html","/Get-Started/Security.html","/Get-Started/introduction.html","/Use-and-Play/Android%20TV%E8%AE%BE%E5%A4%87.html","/Use-and-Play/Android%E8%AE%BE%E5%A4%87.html","/Use-and-Play/Apple%20TV%E8%AE%BE%E5%A4%87.html","/Use-and-Play/MAC%E8%AE%BE%E5%A4%87.html","/Use-and-Play/Windows%E8%AE%BE%E5%A4%87.html","/Use-and-Play/iOS%E8%AE%BE%E5%A4%87.html","/en-US/","/en-US/Get-Started/introduction.html","/404.html","/Get-Started/","/Use-and-Play/","/en-US/Get-Started/"],Re="SEARCH_PRO_QUERY_HISTORY",E=I(Re,[]),ke=()=>{const{queryHistoryCount:a}=w,l=a>0;return{enabled:l,queryHistory:E,addQueryHistory:r=>{l&&(E.value=Array.from(new Set([r,...E.value.slice(0,a-1)])))},removeQueryHistory:r=>{E.value=[...E.value.slice(0,r),...E.value.slice(r+1)]}}},L=a=>He[a.id]+("anchor"in a?`#${a.anchor}`:""),we="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:j}=w,g=I(we,[]),Qe=()=>{const a=j>0;return{enabled:a,resultHistory:g,addResultHistory:l=>{if(a){const r={link:L(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,j-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},qe=a=>{const l=de(),r=_(),Q=pe(),i=b(0),A=k(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:q}=me(),S=Ee(c=>{const f=c.join(" "),{searchFilter:x=p=>p,splitWord:C,suggestionsFilter:F,...m}=l.value;f?(i.value+=1,y(c.join(" "),r.value,m).then(p=>x(p,f,r.value,Q.value)).then(p=>{i.value-=1,h.value=p}).catch(p=>{console.warn(p),i.value-=1,i.value||(h.value=[])})):h.value=[]},w.searchDelay-w.suggestDelay);M([a,r],([c])=>S(c),{immediate:!0}),ge(()=>{q()})}),{isSearching:A,results:h}};var Ce=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),Q=_(),i=ae(le),{enabled:A,addQueryHistory:h,queryHistory:y,removeQueryHistory:q}=ke(),{enabled:S,resultHistory:c,addResultHistory:f,removeResultHistory:x}=Qe(),C=A||S,F=re(a,"queries"),{results:m,isSearching:p}=qe(F),u=ue({isQuery:!0,index:0}),v=b(0),d=b(0),G=k(()=>C&&(y.value.length>0||c.value.length>0)),P=k(()=>m.value.length>0),U=k(()=>m.value[v.value]||null),V=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=t-1},Y=()=>{const{isQuery:e,index:t}=u;t===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},z=()=>{v.value=v.value>0?v.value-1:m.value.length-1,d.value=U.value.contents.length-1},J=()=>{v.value=v.value<m.value.length-1?v.value+1:0,d.value=0},W=()=>{d.value<U.value.contents.length-1?d.value+=1:J()},K=()=>{d.value>0?d.value-=1:z()},D=e=>e.map(t=>Ae(t)?t:s(t[0],t[1])),N=e=>{if(e.type==="customField"){const t=Se[e.index]||"$content",[n,R=""]=fe(t)?t[Q.value].split("$content"):t.split("$content");return e.display.map(o=>s("div",D([n,...o,R])))}return e.display.map(t=>s("div",D(t)))},H=()=>{v.value=0,d.value=0,l("updateQuery",""),l("close")},X=()=>A?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[s(O,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:n=>{n.preventDefault(),n.stopPropagation(),q(t)}})]))])):null,Z=()=>S?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>s(T,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{H()}},()=>[s(O,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(n=>D(n)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:n=>{n.preventDefault(),n.stopPropagation(),x(t)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(P.value){if(e.key==="ArrowUp")K();else if(e.key==="ArrowDown")W();else if(e.key==="Enter"){const t=U.value.contents[d.value];h(a.queries.join(" ")),f(t),r.push(L(t)),H()}}else if(S){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")Y();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(c.value[t].link),H())}}}}),M([v,d],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!P.value:!G.value}],id:"search-pro-results"},a.queries.length?p.value?s(ne,{hint:i.value.searching}):P.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},n)=>{const R=v.value===n;return s("li",{class:["search-pro-result-list-item",{active:R}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((o,ee)=>{const B=R&&d.value===ee;return s(T,{to:L(o),class:["search-pro-result-item",{active:B,"aria-selected":B}],onClick:()=>{h(a.queries.join(" ")),f(o),H()}},()=>[o.type==="text"?null:s(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?s("div",{class:"content-header"},o.header):null,s("div",N(o))])])})])})):i.value.emptyResult:C?G.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Ce as default};