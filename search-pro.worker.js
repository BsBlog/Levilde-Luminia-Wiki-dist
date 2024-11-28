const{entries:V}=Object,{fromEntries:et}=Object,st="ENTRIES",L="KEYS",T="VALUES",_="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===_)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==_).join("")}value(){return E(this._path).node.get(_)}result(){switch(this._type){case T:return this.value();case L:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],nt=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const c of e.keys())if(c===_){const a=o[d-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let h=0;h<c.length;++h,++a){const g=c[h],m=i*a,p=m-i;let l=o[m];const f=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let F=f;F<y;++F){const v=g!==t[F],z=o[p+F]+ +v,A=o[p+F+1]+1,w=o[m+F]+1,j=o[m+F+1]=Math.min(z,A,w);j<l&&(l=j)}if(l>s)continue t}R(e.get(c),t,s,n,o,a,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==_&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,st)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return nt(this._tree,t,s)}get(t){const s=k(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){const s=k(this._tree,t);return s!==void 0&&s.has(_)}keys(){return new D(this,L)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,I(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},k=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return k(e.get(s),t.slice(s.length))},I=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==_&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const c=new Map;c.set(u.slice(r),d),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(_),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;q(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&q(e.slice(0,-1),n,o)}},q=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],ut=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},it=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,M="or",$="and",rt="and_not",ct=(e,t)=>{e.includes(t)||e.push(t)},N=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},P=({score:e},{score:t})=>t-e,lt=()=>new Map,b=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ht={[M]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),N(n.terms,u)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);N(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[rt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},dt=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},at=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},ft=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,lt),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},gt={k:1.2,b:.7,d:.5},mt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(it),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:M,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:gt},pt={combineWith:$,prefix:(e,t,s)=>t===s.length-1},Ft={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},_t={...Ft,...U},K=Symbol("*"),yt=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,u]of e._documentIds){const i=n.boostDocument?n.boostDocument(u,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},X=(e,t=M)=>{if(e.length===0)return new Map;const s=t.toLowerCase(),n=ht[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map},S=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const c of Object.keys(u)){const a=u[c],h=e._fieldIds[c],g=o.get(h);if(g==null)continue;let m=g.size;const p=e._avgFieldLength[h];for(const l of g.keys()){if(!e._documentIds.has(l)){ft(e,h,l,s),m-=1;continue}const f=i?i(e._documentIds.get(l),s,e._storedFields.get(l)):1;if(!f)continue;const y=g.get(l),F=e._fieldLength.get(l)[h],v=dt(y,m,e._documentCount,F,p,r),z=n*a*f*v,A=d.get(l);if(A){A.score+=z,ct(A.terms,t);const w=G(A.match,s);w?w.push(c):A.match[s]=[c]}else d.set(l,{score:z,terms:[t],match:{[s]:[c]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((l,f)=>({...l,[f]:G(n.boost,f)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:c,prefix:a}={...J.weights,...i},h=e._index.get(t.term),g=S(e,t.term,t.term,1,h,o,u,d);let m,p;if(t.prefix&&(m=e._index.atPrefix(t.term)),t.fuzzy){const l=t.fuzzy===!0?.2:t.fuzzy,f=l<1?Math.min(r,Math.round(t.term.length*l)):l;f&&(p=e._index.fuzzyGet(t.term,f))}if(m)for(const[l,f]of m){const y=l.length-t.term.length;if(!y)continue;p?.delete(l);const F=a*l.length/(l.length+.3*y);S(e,t.term,l,F,f,o,u,d,g)}if(p)for(const l of p.keys()){const[f,y]=p.get(l);if(!y)continue;const F=c*l.length/(l.length+y);S(e,t.term,l,F,f,o,u,d,g)}return g},Y=(e,t,s={})=>{if(t===K)return yt(e,s);if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(g=>Y(e,g,a));return X(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,c=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(at(i)).map(a=>At(e,a,i));return X(c,i.combineWith)},Q=(e,t,s={})=>{const n=Y(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const c=r.length||1,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(d),queryTerms:r,match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return t===K&&s.boostDocument==null&&e._options.searchOptions.boostDocument==null||o.sort(P),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Q(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(P),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?_t:t.autoVacuum;this._options={...mt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...pt,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=b(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=b(u),h._avgFieldLength=i,h._storedFields=b(r),h._dirtCount=d||0,h._index=new C;for(const[g,m]of h._documentIds)h._idToShortId.set(m,g);for(const[g,m]of e){const p=new Map;for(const l of Object.keys(m)){let f=m[l];c===1&&(f=f.ds),p.set(parseInt(l,10),b(f))}h._index.set(g,p)}return h},B=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let h="";i===0?h=c.length>20?`… ${c.slice(-20)}`:c:a?h=c.length+i>100?`${c.slice(0,100-i)}… `:c:h=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const c=d+n.length;if(r(e.slice(u,d)),u=c,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},wt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),xt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),Z=(e,t,s={})=>{const n={};return Q(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),c=u.includes("#"),[a,h]=u.split(/[#@]/),g=Number(a),m=i.sort((l,f)=>l.length-f.length).filter((l,f)=>i.slice(f+1).every(y=>!y.includes(l))),{contents:p}=n[g]??={title:"",contents:[]};if(d)p.push([{type:"customField",id:g,index:h,display:m.map(l=>o.c.map(f=>B(f,l))).flat().filter(l=>l!==null)},r]);else{const l=m.map(f=>B(o.h,f)).filter(f=>f!==null);if(l.length&&p.push([{type:c?"heading":"title",id:g,...c&&{anchor:h},display:l},r]),"t"in o)for(const f of o.t){const y=m.map(F=>B(f,F)).filter(F=>F!==null);y.length&&p.push([{type:"text",id:g,...c&&{anchor:h},display:y},r])}}}),V(n).sort(([,o],[,u])=>"max"==="total"?wt(o,u):xt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=ut(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},tt=(e,t,s={})=>{const n=Ct(t,e,{fuzzy:.2,maxFuzzy:3,...s}).map(({suggestion:o})=>o);return e.includes(" ")?n:n.filter(o=>!o.includes(" "))},bt=et(V(JSON.parse("{\"/en-US/\":{\"documentCount\":4,\"nextId\":4,\"documentIds\":{\"0\":\"11\",\"1\":\"11#about-levilde-luminia\",\"2\":\"11#we-empower-the-world\",\"3\":\"11#usage-restrictions\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1,31],\"1\":[3,12],\"2\":[4,45],\"3\":[2,95]},\"averageFieldLength\":[2.5,45.75],\"storedFields\":{\"0\":{\"h\":\"Overview\",\"t\":[\"The complexity of this world is far beyond our imagination, and the more we know, the more we don't know.\",\"This is contemporary life, an era of information explosion, where everyone knows everything but knows nothing.\"]},\"1\":{\"h\":\"About Levilde Luminia\",\"t\":[\"Robot @Levilde_Luminia_Bot\",\"Channel @Levilde_Luminia\",\"Performance & security by Akari in Hong Kong\"]},\"2\":{\"h\":\"We empower the world\",\"t\":[\"Through innovative technology and seamless experience, we provide excellent streaming services, allowing users to enjoy high-quality content anytime, anywhere.\",\"We are committed to creating a diverse and personalized platform to meet the entertainment needs of every user.\",\"Through continuous optimization and refined management, we make entertainment more intelligent, convenient and rich.\"]},\"3\":{\"h\":\"Usage Restrictions\",\"t\":[\"When using Levilde Luminia services, there are some restrictions on the use of Levilde Luminia. These limits are subject to change.\",\"Playlists - Please do not create playlists, which will cause unnecessary disk scanning events.\",\"Server address - Please do not display or display the server address in any occasion, which may cause unnecessary conflicts.\",\"Concurrent video sessions - The number of concurrent video sessions per account is 2.\",\"Last Activity Time - After registration, the last activity time limit for each account is within 14 days. If the last activity time of the account is outside of 14 days, the account will be blocked. (If you are in a special list, you can ignore this restriction)\",\"Apart from this, we have almost no other restrictions. You can freely use Infuse to scan the media library, and you can also freely use web playback.\"]}},\"dirtCount\":0,\"index\":[[\"you\",{\"1\":{\"3\":4}}],[\"14\",{\"1\":{\"3\":2}}],[\"freely\",{\"1\":{\"3\":2}}],[\"from\",{\"1\":{\"3\":1}}],[\"for\",{\"1\":{\"3\":1}}],[\"far\",{\"1\":{\"0\":1}}],[\"2\",{\"1\":{\"3\":1}}],[\"video\",{\"1\":{\"3\":2}}],[\"unnecessary\",{\"1\":{\"3\":2}}],[\"use\",{\"1\":{\"3\":3}}],[\"user\",{\"1\":{\"2\":1}}],[\"users\",{\"1\":{\"2\":1}}],[\"using\",{\"1\":{\"3\":1}}],[\"usage\",{\"0\":{\"3\":1}}],[\"restriction\",{\"1\":{\"3\":1}}],[\"restrictions\",{\"0\":{\"3\":1},\"1\":{\"3\":2}}],[\"registration\",{\"1\":{\"3\":1}}],[\"refined\",{\"1\":{\"2\":1}}],[\"rich\",{\"1\":{\"2\":1}}],[\"robot\",{\"1\":{\"1\":1}}],[\"no\",{\"1\":{\"3\":1}}],[\"not\",{\"1\":{\"3\":2}}],[\"nothing\",{\"1\":{\"0\":1}}],[\"number\",{\"1\":{\"3\":1}}],[\"needs\",{\"1\":{\"2\":1}}],[\"media\",{\"1\":{\"3\":1}}],[\"meet\",{\"1\":{\"2\":1}}],[\"may\",{\"1\":{\"3\":1}}],[\"make\",{\"1\":{\"2\":1}}],[\"management\",{\"1\":{\"2\":1}}],[\"more\",{\"1\":{\"0\":2,\"2\":1}}],[\"days\",{\"1\":{\"3\":2}}],[\"display\",{\"1\":{\"3\":2}}],[\"disk\",{\"1\":{\"3\":1}}],[\"diverse\",{\"1\":{\"2\":1}}],[\"do\",{\"1\":{\"3\":2}}],[\"don\",{\"1\":{\"0\":1}}],[\"quality\",{\"1\":{\"2\":1}}],[\"have\",{\"1\":{\"3\":1}}],[\"high\",{\"1\":{\"2\":1}}],[\"hong\",{\"1\":{\"1\":1}}],[\"scan\",{\"1\":{\"3\":1}}],[\"scanning\",{\"1\":{\"3\":1}}],[\"special\",{\"1\":{\"3\":1}}],[\"subject\",{\"1\":{\"3\":1}}],[\"some\",{\"1\":{\"3\":1}}],[\"streaming\",{\"1\":{\"2\":1}}],[\"sessions\",{\"1\":{\"3\":2}}],[\"server\",{\"1\":{\"3\":2}}],[\"services\",{\"1\":{\"2\":1,\"3\":1}}],[\"seamless\",{\"1\":{\"2\":1}}],[\"security\",{\"1\":{\"1\":1}}],[\"please\",{\"1\":{\"3\":2}}],[\"playback\",{\"1\":{\"3\":1}}],[\"playlists\",{\"1\":{\"3\":2}}],[\"platform\",{\"1\":{\"2\":1}}],[\"per\",{\"1\":{\"3\":1}}],[\"personalized\",{\"1\":{\"2\":1}}],[\"performance\",{\"1\":{\"1\":1}}],[\"provide\",{\"1\":{\"2\":1}}],[\"kong\",{\"1\":{\"1\":1}}],[\"knows\",{\"1\":{\"0\":2}}],[\"know\",{\"1\":{\"0\":2}}],[\"can\",{\"1\":{\"3\":3}}],[\"cause\",{\"1\":{\"3\":2}}],[\"create\",{\"1\":{\"3\":1}}],[\"creating\",{\"1\":{\"2\":1}}],[\"change\",{\"1\":{\"3\":1}}],[\"channel\",{\"1\":{\"1\":1}}],[\"concurrent\",{\"1\":{\"3\":2}}],[\"conflicts\",{\"1\":{\"3\":1}}],[\"convenient\",{\"1\":{\"2\":1}}],[\"continuous\",{\"1\":{\"2\":1}}],[\"content\",{\"1\":{\"2\":1}}],[\"contemporary\",{\"1\":{\"0\":1}}],[\"committed\",{\"1\":{\"2\":1}}],[\"complexity\",{\"1\":{\"0\":1}}],[\"last\",{\"1\":{\"3\":3}}],[\"library\",{\"1\":{\"3\":1}}],[\"list\",{\"1\":{\"3\":1}}],[\"limit\",{\"1\":{\"3\":1}}],[\"limits\",{\"1\":{\"3\":1}}],[\"life\",{\"1\":{\"0\":1}}],[\"luminia\",{\"0\":{\"1\":1},\"1\":{\"1\":2,\"3\":2}}],[\"levilde\",{\"0\":{\"1\":1},\"1\":{\"1\":2,\"3\":2}}],[\"also\",{\"1\":{\"3\":1}}],[\"almost\",{\"1\":{\"3\":1}}],[\"allowing\",{\"1\":{\"2\":1}}],[\"apart\",{\"1\":{\"3\":1}}],[\"after\",{\"1\":{\"3\":1}}],[\"activity\",{\"1\":{\"3\":3}}],[\"account\",{\"1\":{\"3\":4}}],[\"address\",{\"1\":{\"3\":2}}],[\"a\",{\"1\":{\"2\":1,\"3\":1}}],[\"are\",{\"1\":{\"2\":1,\"3\":3}}],[\"akari\",{\"1\":{\"1\":1}}],[\"about\",{\"0\":{\"1\":1}}],[\"any\",{\"1\":{\"3\":1}}],[\"anywhere\",{\"1\":{\"2\":1}}],[\"anytime\",{\"1\":{\"2\":1}}],[\"an\",{\"1\":{\"0\":1}}],[\"and\",{\"1\":{\"0\":1,\"2\":4,\"3\":1}}],[\"blocked\",{\"1\":{\"3\":1}}],[\"be\",{\"1\":{\"3\":1}}],[\"beyond\",{\"1\":{\"0\":1}}],[\"by\",{\"1\":{\"1\":1}}],[\"bot\",{\"1\":{\"1\":1}}],[\"but\",{\"1\":{\"0\":1}}],[\"each\",{\"1\":{\"3\":1}}],[\"events\",{\"1\":{\"3\":1}}],[\"every\",{\"1\":{\"2\":1}}],[\"everything\",{\"1\":{\"0\":1}}],[\"everyone\",{\"1\":{\"0\":1}}],[\"entertainment\",{\"1\":{\"2\":2}}],[\"enjoy\",{\"1\":{\"2\":1}}],[\"excellent\",{\"1\":{\"2\":1}}],[\"experience\",{\"1\":{\"2\":1}}],[\"explosion\",{\"1\":{\"0\":1}}],[\"empower\",{\"0\":{\"2\":1}}],[\"era\",{\"1\":{\"0\":1}}],[\"time\",{\"1\":{\"3\":3}}],[\"to\",{\"1\":{\"2\":3,\"3\":2}}],[\"technology\",{\"1\":{\"2\":1}}],[\"t\",{\"1\":{\"0\":1}}],[\"through\",{\"1\":{\"2\":2}}],[\"this\",{\"1\":{\"0\":2,\"3\":2}}],[\"these\",{\"1\":{\"3\":1}}],[\"there\",{\"1\":{\"3\":1}}],[\"the\",{\"0\":{\"2\":1},\"1\":{\"0\":3,\"2\":1,\"3\":8}}],[\"within\",{\"1\":{\"3\":1}}],[\"will\",{\"1\":{\"3\":2}}],[\"which\",{\"1\":{\"3\":2}}],[\"when\",{\"1\":{\"3\":1}}],[\"where\",{\"1\":{\"0\":1}}],[\"web\",{\"1\":{\"3\":1}}],[\"we\",{\"0\":{\"2\":1},\"1\":{\"0\":2,\"2\":3,\"3\":1}}],[\"world\",{\"0\":{\"2\":1},\"1\":{\"0\":1}}],[\"ignore\",{\"1\":{\"3\":1}}],[\"if\",{\"1\":{\"3\":2}}],[\"infuse\",{\"1\":{\"3\":1}}],[\"information\",{\"1\":{\"0\":1}}],[\"intelligent\",{\"1\":{\"2\":1}}],[\"innovative\",{\"1\":{\"2\":1}}],[\"in\",{\"1\":{\"1\":1,\"3\":2}}],[\"imagination\",{\"1\":{\"0\":1}}],[\"is\",{\"1\":{\"0\":2,\"3\":3}}],[\"other\",{\"1\":{\"3\":1}}],[\"outside\",{\"1\":{\"3\":1}}],[\"our\",{\"1\":{\"0\":1}}],[\"occasion\",{\"1\":{\"3\":1}}],[\"or\",{\"1\":{\"3\":1}}],[\"on\",{\"1\":{\"3\":1}}],[\"optimization\",{\"1\":{\"2\":1}}],[\"of\",{\"1\":{\"0\":2,\"2\":1,\"3\":4}}],[\"overview\",{\"0\":{\"0\":1}}]],\"version\":2},\"/\":{\"documentCount\":21,\"nextId\":21,\"documentIds\":{\"0\":\"1\",\"1\":\"1#_1-目前没有兼容的流\",\"2\":\"2\",\"3\":\"2#_1-问题反馈\",\"4\":\"2#_2-媒体支援\",\"5\":\"3\",\"6\":\"3#关于-levilde-luminia\",\"7\":\"3#我们赋能世界\",\"8\":\"3#使用限制\",\"9\":\"4\",\"10\":\"5\",\"11\":\"6\",\"12\":\"7\",\"13\":\"7#下载并安装​\",\"14\":\"8\",\"15\":\"8#连接-emby-公益服务器\",\"16\":\"9\",\"17\":\"12\",\"18\":\"13\",\"19\":\"14\",\"20\":\"15\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[2,8],\"2\":[1],\"3\":[2,101],\"4\":[2,7],\"5\":[1,7],\"6\":[3,8],\"7\":[1,10],\"8\":[1,40],\"9\":[2],\"10\":[1],\"11\":[2],\"12\":[1,6],\"13\":[1,27],\"14\":[1,7],\"15\":[1,24],\"16\":[1],\"17\":[1,3],\"18\":[2],\"19\":[3],\"20\":[2]},\"averageFieldLength\":[1.5238095238095237,18.504629629629633],\"storedFields\":{\"0\":{\"h\":\"常见问题\"},\"1\":{\"h\":\"1. 目前没有兼容的流\",\"t\":[\"通过浏览器访问网页播放\",\"这通常出现在使用浏览器播放的情况下，大多数浏览器在音视频/字幕解码中有兼容性问题，需要 Emby 客户端或第三方播放器才能播放。\"]},\"2\":{\"h\":\"反馈与媒体支援\"},\"3\":{\"h\":\"1. 问题反馈\",\"t\":[\"在处理问题时，我们建议按以下格式进行反馈\",\"Please make sure of the following things 请确保以下事项\",\"You must check all the following, otherwise your issue may be closed directly. 你必须勾选以下所有内容，否则你的问题可能会被直接关闭。\",\" I have read the documentation. 我已经阅读了文档。\",\" I'm sure there are no duplicate feedbacks. 我确定没有重复的反馈。\",\" I'm sure it's due to Levilde Luminia and not something else(such as Network,Dependencies or Operational). 我确定是Levilde Luminia的问题，而不是其他原因（例如网络，依赖或操作）。\",\" I'm sure this issue is not fixed in the latest version. 我确定这个问题在最新版本中没有被修复。\",\"Application name and version / 应用程式名称及版本\",\"Which app and version are you using? Do not use latest or master as an answer. 你使用的是哪个应用程式及版本？请不要使用latest或master作为答案。\",\"Problem Description / 问题描述\",\"Config / 配置\",\"Please provide the configuration file of the application you are using. (hide privacy field) 请提供你使用的应用程式的配置文件。(隐藏隐私字段)\",\"Logs / 日志\",\"Please copy and paste any relevant log output. 请复制粘贴错误日志，或者截图\"]},\"4\":{\"h\":\"2.媒体支援\",\"t\":[\"所有与媒体相关的问题，请转到媒体支持与服务中心\",\"如果你在媒体支持与服务中心中没有找到请求的媒体，那么你也可以将相关链接（尽量是TMDB）发送在群组中。\"]},\"5\":{\"h\":\"概述\",\"t\":[\"这个世界的复杂程度远远超过我们想象能力，而我们知道的越多，我们不知道的就越多。\",\"这就是当代生活，一个信息爆炸，人人无所不知却又一无所知的时代。\"]},\"6\":{\"h\":\"关于 Levilde Luminia\",\"t\":[\"机器人 @Levilde_Luminia_Bot\",\"频道 @Levilde_Luminia\",\"性能和安全性由 Akari香港 提供\"]},\"7\":{\"h\":\"我们赋能世界\",\"t\":[\"通过创新的技术和无缝的体验，提供卓越的流媒体服务，让用户随时随地畅享高品质的内容。\",\"我们致力于打造一个多样化、个性化的平台，满足每一个用户的娱乐需求。\",\"通过持续优化与精细化管理，让娱乐更加智能、便捷和丰富。\"]},\"8\":{\"h\":\"使用限制\",\"t\":[\"使用 Levilde Luminia 服务时，Levilde Luminia 的使用存在一些限制。 这些限制可能会有变动。\",\"播放列表 - 请不要创建播放列表，这会引起不必要的磁盘扫描事件。\",\"服务器地址 - 请不要在任何场合展示、显示服务器地址，这可能会引起不必要的冲突。\",\"并发视频会话数 - 每个账户的并发视频会话数为 2 。\",\"最后活动时间 - 当注册之后，每个账户的最后活动时间期限为 14 天内，当账户的最后活动时间为 14 天外时，账户将被封禁。（如果你位于特殊列表内，你可以忽略此限制）\",\"除此之外，我们几乎没有其他限制，你可以自由的使用 Infuse 扫描媒体库，也可以自由的使用网页播放。\",\"题外话为什么使用「你」而不是「您」？ 用户与 Levilde Luminia 是相互尊重的关系，我们不会刻意营造距离感。\"]},\"9\":{\"h\":\"Android TV设备\"},\"10\":{\"h\":\"Android设备\"},\"11\":{\"h\":\"Apple TV设备\"},\"12\":{\"h\":\"MAC设备\",\"t\":[\"下面所有的截图均来自 Terminus 终点站 WIKI\",\"macOS 上使用官方客户端\"]},\"13\":{\"h\":\"\",\"t\":[\"从 App Store 下载并安装 Emby 官方客户端\",\"连接 Emby 公益服务器\",\"启动 App ，欢迎页面点 下一个\",\"点击 跳过 按钮，我们手动连接服务器（因为公益服账号不是 Emby Connect 账号，这是两个不同的东西）\",\"填写机器人给你的公益服地址和端口号 (注意: 机器人提供的地址和端口是写一起的，而这里要分开填写 )，然后点击 连接 按钮\",\"点击 手动登录 按钮\",\"填写自己的账号密码点击 登录 按钮\"]},\"14\":{\"h\":\"Windows设备\",\"t\":[\"下面所有的截图均来自 Terminus 终点站 WIKI\",\"Windows上使用 Emby Theater\"]},\"15\":{\"h\":\"\",\"t\":[\"启动 App ，可能会有如下提示\",\"询问是否安装插件以使用HDTV远程遥控，可以点 取消\",\"点击 下一个\",\"点击 跳过 按钮，我们手动连接服务器 ( 因为公益服账号不是 Emby Connect 账号，这是两个不同的东西 )\",\"填写机器人给你的公益服地址和端口号 (注意: 机器人提供的地址和端口是写一起的，而这里要分开填写)，然后点击 连接 按钮\",\"填写自己的账号密码点击 登录 按钮\"]},\"16\":{\"h\":\"iOS设备\"},\"17\":{\"h\":\"\",\"t\":[\"404 Not Found\"]},\"18\":{\"h\":\"Get Started\"},\"19\":{\"h\":\"Use and Play\"},\"20\":{\"h\":\"Get Started\"}},\"dirtCount\":0,\"index\":[[\"get\",{\"0\":{\"18\":1,\"20\":1}}],[\"404\",{\"1\":{\"17\":1}}],[\"取消\",{\"1\":{\"15\":1}}],[\"可以点\",{\"1\":{\"15\":1}}],[\"可能会有如下提示\",{\"1\":{\"15\":1}}],[\"询问是否安装插件以使用hdtv远程遥控\",{\"1\":{\"15\":1}}],[\"登录\",{\"1\":{\"13\":1,\"15\":1}}],[\"填写自己的账号密码点击\",{\"1\":{\"13\":1,\"15\":1}}],[\"填写机器人给你的公益服地址和端口号\",{\"1\":{\"13\":1,\"15\":1}}],[\"手动登录\",{\"1\":{\"13\":1}}],[\"然后点击\",{\"1\":{\"13\":1,\"15\":1}}],[\"注意\",{\"1\":{\"13\":1,\"15\":1}}],[\"账号\",{\"1\":{\"13\":1,\"15\":1}}],[\"账户将被封禁\",{\"1\":{\"8\":1}}],[\"因为公益服账号不是\",{\"1\":{\"13\":1,\"15\":1}}],[\"按钮\",{\"1\":{\"13\":4,\"15\":3}}],[\"跳过\",{\"1\":{\"13\":1,\"15\":1}}],[\"点击\",{\"1\":{\"13\":2,\"15\":2}}],[\"欢迎页面点\",{\"1\":{\"13\":1}}],[\"启动\",{\"1\":{\"13\":1,\"15\":1}}],[\"公益服务器\",{\"1\":{\"13\":1}}],[\"连接\",{\"1\":{\"13\":2,\"15\":1}}],[\"官方客户端\",{\"1\":{\"13\":1}}],[\"下一个\",{\"1\":{\"13\":1,\"15\":1}}],[\"下载并安装\",{\"1\":{\"13\":1}}],[\"下面所有的截图均来自\",{\"1\":{\"12\":1,\"14\":1}}],[\"从\",{\"1\":{\"13\":1}}],[\"上使用官方客户端\",{\"1\":{\"12\":1}}],[\"windows上使用\",{\"1\":{\"14\":1}}],[\"windows设备\",{\"0\":{\"14\":1}}],[\"wiki\",{\"1\":{\"12\":1,\"14\":1}}],[\"which\",{\"1\":{\"3\":1}}],[\"终点站\",{\"1\":{\"12\":1,\"14\":1}}],[\"是相互尊重的关系\",{\"1\":{\"8\":1}}],[\"用户与\",{\"1\":{\"8\":1}}],[\"您\",{\"1\":{\"8\":1}}],[\"题外话为什么使用\",{\"1\":{\"8\":1}}],[\"也可以自由的使用网页播放\",{\"1\":{\"8\":1}}],[\"扫描媒体库\",{\"1\":{\"8\":1}}],[\"除此之外\",{\"1\":{\"8\":1}}],[\"如果你位于特殊列表内\",{\"1\":{\"8\":1}}],[\"如果你在媒体支持与服务中心中没有找到请求的媒体\",{\"1\":{\"4\":1}}],[\"天外时\",{\"1\":{\"8\":1}}],[\"天内\",{\"1\":{\"8\":1}}],[\"当账户的最后活动时间为\",{\"1\":{\"8\":1}}],[\"当注册之后\",{\"1\":{\"8\":1}}],[\"每个账户的最后活动时间期限为\",{\"1\":{\"8\":1}}],[\"每个账户的并发视频会话数为\",{\"1\":{\"8\":1}}],[\"最后活动时间\",{\"1\":{\"8\":1}}],[\"并发视频会话数\",{\"1\":{\"8\":1}}],[\"显示服务器地址\",{\"1\":{\"8\":1}}],[\"服务器地址\",{\"1\":{\"8\":1}}],[\"服务时\",{\"1\":{\"8\":1}}],[\"播放列表\",{\"1\":{\"8\":1}}],[\"的使用存在一些限制\",{\"1\":{\"8\":1}}],[\"使用\",{\"1\":{\"8\":1}}],[\"使用限制\",{\"0\":{\"8\":1}}],[\"便捷和丰富\",{\"1\":{\"7\":1}}],[\"让娱乐更加智能\",{\"1\":{\"7\":1}}],[\"让用户随时随地畅享高品质的内容\",{\"1\":{\"7\":1}}],[\"满足每一个用户的娱乐需求\",{\"1\":{\"7\":1}}],[\"个性化的平台\",{\"1\":{\"7\":1}}],[\"通过持续优化与精细化管理\",{\"1\":{\"7\":1}}],[\"通过创新的技术和无缝的体验\",{\"1\":{\"7\":1}}],[\"通过浏览器访问网页播放\",{\"1\":{\"1\":1}}],[\"提供卓越的流媒体服务\",{\"1\":{\"7\":1}}],[\"提供\",{\"1\":{\"6\":1}}],[\"性能和安全性由\",{\"1\":{\"6\":1}}],[\"频道\",{\"1\":{\"6\":1}}],[\"bot\",{\"1\":{\"6\":1}}],[\"be\",{\"1\":{\"3\":1}}],[\"机器人提供的地址和端口是写一起的\",{\"1\":{\"13\":1,\"15\":1}}],[\"机器人\",{\"1\":{\"6\":1}}],[\"关于\",{\"0\":{\"6\":1}}],[\"人人无所不知却又一无所知的时代\",{\"1\":{\"5\":1}}],[\"一个信息爆炸\",{\"1\":{\"5\":1}}],[\"而这里要分开填写\",{\"1\":{\"13\":1,\"15\":1}}],[\"而不是\",{\"1\":{\"8\":1}}],[\"而不是其他原因\",{\"1\":{\"3\":1}}],[\"而我们知道的越多\",{\"1\":{\"5\":1}}],[\"这是两个不同的东西\",{\"1\":{\"13\":1,\"15\":1}}],[\"这可能会引起不必要的冲突\",{\"1\":{\"8\":1}}],[\"这会引起不必要的磁盘扫描事件\",{\"1\":{\"8\":1}}],[\"这些限制可能会有变动\",{\"1\":{\"8\":1}}],[\"这就是当代生活\",{\"1\":{\"5\":1}}],[\"这个世界的复杂程度远远超过我们想象能力\",{\"1\":{\"5\":1}}],[\"这通常出现在使用浏览器播放的情况下\",{\"1\":{\"1\":1}}],[\"概述\",{\"0\":{\"5\":1}}],[\"发送在群组中\",{\"1\":{\"4\":1}}],[\"尽量是tmdb\",{\"1\":{\"4\":1}}],[\"那么你也可以将相关链接\",{\"1\":{\"4\":1}}],[\"所有与媒体相关的问题\",{\"1\":{\"4\":1}}],[\"媒体支援\",{\"0\":{\"4\":1}}],[\"2\",{\"0\":{\"4\":1},\"1\":{\"8\":1}}],[\"或者截图\",{\"1\":{\"3\":1}}],[\"relevant\",{\"1\":{\"3\":1}}],[\"read\",{\"1\":{\"3\":1}}],[\"日志\",{\"1\":{\"3\":1}}],[\"隐藏隐私字段\",{\"1\":{\"3\":1}}],[\"hide\",{\"1\":{\"3\":1}}],[\"have\",{\"1\":{\"3\":1}}],[\"配置\",{\"1\":{\"3\":1}}],[\"问题描述\",{\"1\":{\"3\":1}}],[\"问题反馈\",{\"0\":{\"3\":1}}],[\"play\",{\"0\":{\"19\":1}}],[\"please\",{\"1\":{\"3\":3}}],[\"paste\",{\"1\":{\"3\":1}}],[\"privacy\",{\"1\":{\"3\":1}}],[\"provide\",{\"1\":{\"3\":1}}],[\"problem\",{\"1\":{\"3\":1}}],[\"请不要在任何场合展示\",{\"1\":{\"8\":1}}],[\"请不要创建播放列表\",{\"1\":{\"8\":1}}],[\"请不要使用latest或master作为答案\",{\"1\":{\"3\":1}}],[\"请转到媒体支持与服务中心\",{\"1\":{\"4\":1}}],[\"请复制粘贴错误日志\",{\"1\":{\"3\":1}}],[\"请提供你使用的应用程式的配置文件\",{\"1\":{\"3\":1}}],[\"请确保以下事项\",{\"1\":{\"3\":1}}],[\"你\",{\"1\":{\"8\":1}}],[\"你可以自由的使用\",{\"1\":{\"8\":1}}],[\"你可以忽略此限制\",{\"1\":{\"8\":1}}],[\"你使用的是哪个应用程式及版本\",{\"1\":{\"3\":1}}],[\"你必须勾选以下所有内容\",{\"1\":{\"3\":1}}],[\"use\",{\"0\":{\"19\":1},\"1\":{\"3\":1}}],[\"using\",{\"1\":{\"3\":2}}],[\"应用程式名称及版本\",{\"1\":{\"3\":1}}],[\"version\",{\"1\":{\"3\":3}}],[\"依赖或操作\",{\"1\":{\"3\":1}}],[\"例如网络\",{\"1\":{\"3\":1}}],[\"name\",{\"1\":{\"3\":1}}],[\"network\",{\"1\":{\"3\":1}}],[\"not\",{\"1\":{\"3\":3,\"17\":1}}],[\"no\",{\"1\":{\"3\":1}}],[\"else\",{\"1\":{\"3\":1}}],[\"emby\",{\"1\":{\"1\":1,\"13\":3,\"14\":1,\"15\":1}}],[\"log\",{\"1\":{\"3\":1}}],[\"logs\",{\"1\":{\"3\":1}}],[\"latest\",{\"1\":{\"3\":2}}],[\"luminia的问题\",{\"1\":{\"3\":1}}],[\"luminia\",{\"0\":{\"6\":1},\"1\":{\"3\":1,\"6\":2,\"8\":3}}],[\"levilde\",{\"0\":{\"6\":1},\"1\":{\"3\":1,\"6\":2,\"8\":3}}],[\"terminus\",{\"1\":{\"12\":1,\"14\":1}}],[\"tv设备\",{\"0\":{\"9\":1,\"11\":1}}],[\"to\",{\"1\":{\"3\":1}}],[\"this\",{\"1\":{\"3\":1}}],[\"things\",{\"1\":{\"3\":1}}],[\"theater\",{\"1\":{\"14\":1}}],[\"there\",{\"1\":{\"3\":1}}],[\"the\",{\"1\":{\"3\":6}}],[\"started\",{\"0\":{\"18\":1,\"20\":1}}],[\"store\",{\"1\":{\"13\":1}}],[\"such\",{\"1\":{\"3\":1}}],[\"sure\",{\"1\":{\"3\":4}}],[\"something\",{\"1\":{\"3\":1}}],[\"s\",{\"1\":{\"3\":1}}],[\"found\",{\"1\":{\"17\":1}}],[\"following\",{\"1\":{\"3\":2}}],[\"field\",{\"1\":{\"3\":1}}],[\"file\",{\"1\":{\"3\":1}}],[\"fixed\",{\"1\":{\"3\":1}}],[\"feedbacks\",{\"1\":{\"3\":1}}],[\"akari香港\",{\"1\":{\"6\":1}}],[\"any\",{\"1\":{\"3\":1}}],[\"answer\",{\"1\":{\"3\":1}}],[\"an\",{\"1\":{\"3\":1}}],[\"android设备\",{\"0\":{\"10\":1}}],[\"android\",{\"0\":{\"9\":1}}],[\"and\",{\"0\":{\"19\":1},\"1\":{\"3\":4}}],[\"apple\",{\"0\":{\"11\":1}}],[\"application\",{\"1\":{\"3\":2}}],[\"app\",{\"1\":{\"3\":1,\"13\":2,\"15\":1}}],[\"as\",{\"1\":{\"3\":2}}],[\"are\",{\"1\":{\"3\":3}}],[\"all\",{\"1\":{\"3\":1}}],[\"我们手动连接服务器\",{\"1\":{\"13\":1,\"15\":1}}],[\"我们不会刻意营造距离感\",{\"1\":{\"8\":1}}],[\"我们不知道的就越多\",{\"1\":{\"5\":1}}],[\"我们几乎没有其他限制\",{\"1\":{\"8\":1}}],[\"我们致力于打造一个多样化\",{\"1\":{\"7\":1}}],[\"我们赋能世界\",{\"0\":{\"7\":1}}],[\"我们建议按以下格式进行反馈\",{\"1\":{\"3\":1}}],[\"我确定这个问题在最新版本中没有被修复\",{\"1\":{\"3\":1}}],[\"我确定是levilde\",{\"1\":{\"3\":1}}],[\"我确定没有重复的反馈\",{\"1\":{\"3\":1}}],[\"我已经阅读了文档\",{\"1\":{\"3\":1}}],[\"description\",{\"1\":{\"3\":1}}],[\"dependencies\",{\"1\":{\"3\":1}}],[\"do\",{\"1\":{\"3\":1}}],[\"documentation\",{\"1\":{\"3\":1}}],[\"due\",{\"1\":{\"3\":1}}],[\"duplicate\",{\"1\":{\"3\":1}}],[\"directly\",{\"1\":{\"3\":1}}],[\"ios设备\",{\"0\":{\"16\":1}}],[\"infuse\",{\"1\":{\"8\":1}}],[\"in\",{\"1\":{\"3\":1}}],[\"is\",{\"1\":{\"3\":1}}],[\"issue\",{\"1\":{\"3\":2}}],[\"it\",{\"1\":{\"3\":1}}],[\"i\",{\"1\":{\"3\":4}}],[\"否则你的问题可能会被直接关闭\",{\"1\":{\"3\":1}}],[\"connect\",{\"1\":{\"13\":1,\"15\":1}}],[\"configuration\",{\"1\":{\"3\":1}}],[\"config\",{\"1\":{\"3\":1}}],[\"copy\",{\"1\":{\"3\":1}}],[\"closed\",{\"1\":{\"3\":1}}],[\"check\",{\"1\":{\"3\":1}}],[\"output\",{\"1\":{\"3\":1}}],[\"operational\",{\"1\":{\"3\":1}}],[\"or\",{\"1\":{\"3\":2}}],[\"otherwise\",{\"1\":{\"3\":1}}],[\"of\",{\"1\":{\"3\":2}}],[\"m\",{\"1\":{\"3\":3}}],[\"macos\",{\"1\":{\"12\":1}}],[\"mac设备\",{\"0\":{\"12\":1}}],[\"master\",{\"1\":{\"3\":1}}],[\"may\",{\"1\":{\"3\":1}}],[\"make\",{\"1\":{\"3\":1}}],[\"must\",{\"1\":{\"3\":1}}],[\"your\",{\"1\":{\"3\":1}}],[\"you\",{\"1\":{\"3\":3}}],[\"在处理问题时\",{\"1\":{\"3\":1}}],[\"反馈与媒体支援\",{\"0\":{\"2\":1}}],[\"客户端或第三方播放器才能播放\",{\"1\":{\"1\":1}}],[\"需要\",{\"1\":{\"1\":1}}],[\"字幕解码中有兼容性问题\",{\"1\":{\"1\":1}}],[\"大多数浏览器在音视频\",{\"1\":{\"1\":1}}],[\"目前没有兼容的流\",{\"0\":{\"1\":1}}],[\"14\",{\"1\":{\"8\":2}}],[\"1\",{\"0\":{\"1\":1,\"3\":1}}],[\"常见问题\",{\"0\":{\"0\":1}}]],\"version\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n,id:o}})=>{const u=bt[s];e==="suggest"?self.postMessage([e,o,tt(t,u,n)]):e==="search"?self.postMessage([e,o,Z(t,u,n)]):self.postMessage({suggestions:[e,o,tt(t,u,n)],results:[e,o,Z(t,u,n)]})};
//# sourceMappingURL=index.js.map
