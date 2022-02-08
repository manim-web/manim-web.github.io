(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.tV(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)H.tW(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.n3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.n3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.n3(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=="string")q=a[q]
q.$callName=g[r]
s.push(q)}var q=s[0]
q.$R=e
q.$D=f
var p=i
if(typeof p=="number")p+=x
var o=h[0]
q.$stubName=o
var n=tearOff(s,j||0,p,c,o,d)
a[b]=n
if(c)q.$tearOff=n}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={ms:function ms(){},
jb:function(a,b,c){if(b.h("O<0>").b(a))return new H.eY(a,b.h("@<0>").a3(c).h("eY<1,2>"))
return new H.cD(a,b.h("@<0>").a3(c).h("cD<1,2>"))},
ac:function(a){return new H.db("Field '"+a+"' has been assigned during initialization.")},
f:function(a){return new H.db("Field '"+a+"' has not been initialized.")},
m7:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
nY:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lT:function(a,b,c){return a},
be:function(a,b,c,d){P.bc(b,"start")
if(c!=null){P.bc(c,"end")
if(b>c)H.c(P.a_(b,0,c,"start",null))}return new H.aC(a,b,c,d.h("aC<0>"))},
mA:function(a,b,c,d){if(t.gt.b(a))return new H.e_(a,b,c.h("@<0>").a3(d).h("e_<1,2>"))
return new H.cM(a,b,c.h("@<0>").a3(d).h("cM<1,2>"))},
nV:function(a,b,c){if(t.gt.b(a)){P.bc(b,"count")
return new H.d3(a,b,c.h("d3<0>"))}P.bc(b,"count")
return new H.bZ(a,b,c.h("bZ<0>"))},
ah:function(){return new P.ch("No element")},
qb:function(){return new P.ch("Too few elements")},
nW:function(a,b,c){H.hK(a,0,J.K(a)-1,b,c)},
hK:function(a,b,c,d,e){if(c-b<=32)H.qM(a,b,c,d,e)
else H.qL(a,b,c,d,e)},
qM:function(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.X(a);s<=c;++s){q=r.j(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.j(a,p-1),q)
if(typeof o!=="number")return o.bB()
o=o>0}else o=!1
if(!o)break
n=p-1
r.v(a,p,r.j(a,n))
p=n}r.v(a,p,q)}},
qL:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=C.d.aX(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.aX(a4+a5,2),f=g-j,e=g+j,d=J.X(a3),c=d.j(a3,i),b=d.j(a3,f),a=d.j(a3,g),a0=d.j(a3,e),a1=d.j(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.bB()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.bB()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.bB()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.bB()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.bB()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.bB()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.bB()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.bB()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.bB()
if(a2>0){s=a1
a1=a0
a0=s}d.v(a3,i,c)
d.v(a3,g,a)
d.v(a3,h,a1)
d.v(a3,f,d.j(a3,a4))
d.v(a3,e,d.j(a3,a5))
r=a4+1
q=a5-1
if(J.S(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.j(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.v(a3,p,d.j(a3,r))
d.v(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.j(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.v(a3,p,d.j(a3,r))
l=r+1
d.v(a3,r,d.j(a3,q))
d.v(a3,q,o)
q=m
r=l
break}else{d.v(a3,p,d.j(a3,q))
d.v(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.j(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.v(a3,p,d.j(a3,r))
d.v(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.j(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.j(a3,q),b)<0){d.v(a3,p,d.j(a3,r))
l=r+1
d.v(a3,r,d.j(a3,q))
d.v(a3,q,o)
r=l}else{d.v(a3,p,d.j(a3,q))
d.v(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.v(a3,a4,d.j(a3,a2))
d.v(a3,a2,b)
a2=q+1
d.v(a3,a5,d.j(a3,a2))
d.v(a3,a2,a0)
H.hK(a3,a4,r-2,a6,a7)
H.hK(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.S(a6.$2(d.j(a3,r),b),0);)++r
for(;J.S(a6.$2(d.j(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.j(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.v(a3,p,d.j(a3,r))
d.v(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.j(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.j(a3,q),b)<0){d.v(a3,p,d.j(a3,r))
l=r+1
d.v(a3,r,d.j(a3,q))
d.v(a3,q,o)
r=l}else{d.v(a3,p,d.j(a3,q))
d.v(a3,q,o)}q=m
break}}H.hK(a3,r,q,a6,a7)}else H.hK(a3,r,q,a6,a7)},
cm:function cm(){},
dS:function dS(a,b){this.a=a
this.$ti=b},
cD:function cD(a,b){this.a=a
this.$ti=b},
eY:function eY(a,b){this.a=a
this.$ti=b},
eV:function eV(){},
lb:function lb(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.$ti=b},
db:function db(a){this.a=a},
a8:function a8(a){this.a=a},
mh:function mh(){},
O:function O(){},
C:function C(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
M:function M(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cM:function cM(a,b,c){this.a=a
this.b=b
this.$ti=c},
e_:function e_(a,b,c){this.a=a
this.b=b
this.$ti=c},
eq:function eq(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
J:function J(a,b,c){this.a=a
this.b=b
this.$ti=c},
an:function an(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
e4:function e4(a,b,c){this.a=a
this.b=b
this.$ti=c},
e5:function e5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
eH:function eH(a,b,c){this.a=a
this.b=b
this.$ti=c},
e1:function e1(a){this.$ti=a},
e2:function e2(a){this.$ti=a},
ar:function ar(a,b){this.a=a
this.$ti=b},
cT:function cT(a,b){this.a=a
this.$ti=b},
bl:function bl(){},
bB:function bB(){},
dv:function dv(){},
W:function W(a,b){this.a=a
this.$ti=b},
ff:function ff(){},
pm:function(a){var s,r=H.pl(a)
if(r!=null)return r
s="minified:"+a
return s},
tF:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
m:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bI(a)
return s},
bO:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
nM:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.b(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.b.E(q,o)|32)>r)return n}return parseInt(a,b)},
qv:function(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=C.b.eW(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kq:function(a){return H.qt(a)},
qt:function(a){var s,r,q,p
if(a instanceof P.Q)return H.b0(H.av(a),null)
if(J.bs(a)===C.b3||t.cx.b(a)){s=C.a7(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.b0(H.av(a),null)},
qu:function(){if(!!self.location)return self.location.href
return null},
nL:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
qw:function(a){var s,r,q,p=H.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.e)(a),++r){q=a[r]
if(!H.lM(q))throw H.d(H.fn(q))
if(q<=65535)C.a.q(p,q)
else if(q<=1114111){C.a.q(p,55296+(C.d.d6(q-65536,10)&1023))
C.a.q(p,56320+(q&1023))}else throw H.d(H.fn(q))}return H.nL(p)},
nN:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.lM(q))throw H.d(H.fn(q))
if(q<0)throw H.d(H.fn(q))
if(q>65535)return H.qw(a)}return H.nL(a)},
qx:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bb:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.d.d6(s,10)|55296)>>>0,s&1023|56320)}}throw H.d(P.a_(a,0,1114111,null,null))},
bh:function(a){throw H.d(H.fn(a))},
b:function(a,b){if(a==null)J.K(a)
throw H.d(H.cs(a,b))},
cs:function(a,b){var s,r="index"
if(!H.lM(b))return new P.bJ(!0,b,r,null)
s=H.Z(J.K(a))
if(b<0||b>=s)return P.h9(b,a,r,null,s)
return P.dn(b,r)},
tq:function(a,b,c){if(a<0||a>c)return P.a_(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a_(b,a,c,"end",null)
return new P.bJ(!0,b,"end",null)},
fn:function(a){return new P.bJ(!0,a,null,null)},
d:function(a){var s,r
if(a==null)a=new P.hm()
s=new Error()
s.dartException=a
r=H.tX
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
tX:function(){return J.bI(this.dartException)},
c:function(a){throw H.d(a)},
e:function(a){throw H.d(P.aw(a))},
c1:function(a){var s,r,q,p,o,n
a=H.nb(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.kJ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kK:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
o1:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mt:function(a,b){var s=b==null,r=s?null:b.method
return new H.hd(a,r,s?null:b.receiver)},
aT:function(a){if(a==null)return new H.hn(a)
if(a instanceof H.e3)return H.cv(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return H.cv(a,a.dartException)
return H.td(a)},
cv:function(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
td:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.d.d6(r,16)&8191)===10)switch(q){case 438:return H.cv(a,H.mt(H.m(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.m(s)+" (Error "+q+")"
return H.cv(a,new H.ex(p,e))}}if(a instanceof TypeError){o=$.pr()
n=$.ps()
m=$.pt()
l=$.pu()
k=$.px()
j=$.py()
i=$.pw()
$.pv()
h=$.pA()
g=$.pz()
f=o.bu(s)
if(f!=null)return H.cv(a,H.mt(H.az(s),f))
else{f=n.bu(s)
if(f!=null){f.method="call"
return H.cv(a,H.mt(H.az(s),f))}else{f=m.bu(s)
if(f==null){f=l.bu(s)
if(f==null){f=k.bu(s)
if(f==null){f=j.bu(s)
if(f==null){f=i.bu(s)
if(f==null){f=l.bu(s)
if(f==null){f=h.bu(s)
if(f==null){f=g.bu(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){H.az(s)
return H.cv(a,new H.ex(s,f==null?e:f.method))}}}return H.cv(a,new H.hZ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.eI()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.cv(a,new P.bJ(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.eI()
return a},
ct:function(a){var s
if(a instanceof H.e3)return a.b
if(a==null)return new H.f6(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f6(a)},
oW:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.v(0,a[s],a[r])}return b},
tD:function(a,b,c,d,e,f){t.gY.a(a)
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.io("Unsupported number of arguments for wrapped closure"))},
dG:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.tD)
a.$identity=s
return s},
q0:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.hP().constructor.prototype):Object.create(new H.cZ(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.bT
if(typeof r!=="number")return r.K()
$.bT=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.ny(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}t.K.a(d)
j.$S=H.pX(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ny(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
pX:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.p1,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
s=c?H.pU:H.pT
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.d("Error in functionType of tearoff")},
pY:function(a,b,c,d){var s=H.nw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ny:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.q_(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.pY(r,!p,s,b)
if(r===0){p=$.bT
if(typeof p!=="number")return p.K()
$.bT=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.dQ
return new Function(p+(o==null?$.dQ=H.j6("self"):o)+";return "+n+"."+H.m(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.bT
if(typeof p!=="number")return p.K()
$.bT=p+1
m+=p
p="return function("+m+"){return this."
o=$.dQ
return new Function(p+(o==null?$.dQ=H.j6("self"):o)+"."+H.m(s)+"("+m+");}")()},
pZ:function(a,b,c,d){var s=H.nw,r=H.pV
switch(b?-1:a){case 0:throw H.d(new H.hD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
q_:function(a,b){var s,r,q,p,o,n,m,l=$.dQ
if(l==null)l=$.dQ=H.j6("self")
s=$.nv
if(s==null)s=$.nv=H.j6("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.pZ(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.m(r)+"(this."+s+");"
n=$.bT
if(typeof n!=="number")return n.K()
$.bT=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.m(r)+"(this."+s+", "+m+");"
n=$.bT
if(typeof n!=="number")return n.K()
$.bT=n+1
return new Function(o+n+"}")()},
n3:function(a,b,c,d,e,f,g){return H.q0(a,b,c,d,!!e,!!f,g)},
pT:function(a,b){return H.iC(v.typeUniverse,H.av(a.a),b)},
pU:function(a,b){return H.iC(v.typeUniverse,H.av(a.c),b)},
nw:function(a){return a.a},
pV:function(a){return a.c},
j6:function(a){var s,r,q,p=new H.cZ("self","target","receiver","name"),o=J.k1(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.d(P.ab("Field name "+a+" not found."))},
b8:function(a){if(a==null)H.te("boolean expression must not be null")
return a},
te:function(a){throw H.d(new H.i8(a))},
tV:function(a){throw H.d(new P.fT(a))},
tw:function(a){return v.getIsolateTag(a)},
tW:function(a){return H.c(new H.db(a))},
uJ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
tH:function(a){var s,r,q,p,o,n=H.az($.p0.$1(a)),m=$.lX[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.mb[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=H.iF($.oP.$2(a,n))
if(q!=null){m=$.lX[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.mb[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.mg(s)
$.lX[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.mb[n]=s
return s}if(p==="-"){o=H.mg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.pd(a,s)
if(p==="*")throw H.d(P.hY(n))
if(v.leafTags[n]===true){o=H.mg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.pd(a,s)},
pd:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.n9(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
mg:function(a){return J.n9(a,!1,null,!!a.$ida)},
tJ:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.mg(s)
else return J.n9(s,c,null,null)},
tA:function(){if(!0===$.n5)return
$.n5=!0
H.tB()},
tB:function(){var s,r,q,p,o,n,m,l
$.lX=Object.create(null)
$.mb=Object.create(null)
H.tz()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.pf.$1(o)
if(n!=null){m=H.tJ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
tz:function(){var s,r,q,p,o,n,m=C.aU()
m=H.dF(C.aV,H.dF(C.aW,H.dF(C.a8,H.dF(C.a8,H.dF(C.aX,H.dF(C.aY,H.dF(C.aZ(C.a7),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.p0=new H.m8(p)
$.oP=new H.m9(o)
$.pf=new H.ma(n)},
dF:function(a,b){return a(b)||b},
mr:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.d(P.aH("Illegal RegExp pattern ("+String(n)+")",a,null))},
cw:function(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof H.cK){s=C.b.az(a,c)
return b.b.test(s)}else{s=J.nk(b,C.b.az(a,c))
return!s.gai(s)}},
oV:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nb:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bt:function(a,b,c){var s
if(typeof b=="string")return H.tS(a,b,c)
if(b instanceof H.cK){s=b.giX()
s.lastIndex=0
return a.replace(s,H.oV(c))}throw H.d("String.replaceAll(Pattern) UNIMPLEMENTED")},
tS:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nb(b),'g'),H.oV(c))},
tT:function(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return H.pk(a,s,s+b.length,c)},
pk:function(a,b,c,d){var s=a.substring(0,b),r=a.substring(c)
return s+d+r},
d1:function d1(){},
v:function v(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eW:function eW(a,b){this.a=a
this.$ti=b},
c9:function c9(a,b){this.a=a
this.$ti=b},
ha:function ha(){},
cb:function cb(a,b){this.a=a
this.$ti=b},
kJ:function kJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ex:function ex(a,b){this.a=a
this.b=b},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a){this.a=a},
hn:function hn(a){this.a=a},
e3:function e3(a,b){this.a=a
this.b=b},
f6:function f6(a){this.a=a
this.b=null},
b9:function b9(){},
hR:function hR(){},
hP:function hP(){},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hD:function hD(a){this.a=a},
i8:function i8(a){this.a=a},
bw:function bw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k3:function k3(a){this.a=a},
k4:function k4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ej:function ej(a,b){this.a=a
this.$ti=b},
ek:function ek(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
m8:function m8(a){this.a=a},
m9:function m9(a){this.a=a},
ma:function ma(a){this.a=a},
cK:function cK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dA:function dA(a){this.b=a},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dt:function dt(a,b){this.a=a
this.c=b},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
ix:function ix(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
mV:function(a){return a},
qn:function(a){return new Int8Array(a)},
lG:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.cs(b,a))},
rK:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.d(H.tq(a,b,c))
return b},
hj:function hj(){},
dg:function dg(){},
ev:function ev(){},
hi:function hi(){},
ew:function ew(){},
cN:function cN(){},
f3:function f3(){},
f4:function f4(){},
nR:function(a,b){var s=b.c
return s==null?b.c=H.mP(a,b.z,!0):s},
nQ:function(a,b){var s=b.c
return s==null?b.c=H.fa(a,"bm",[b.z]):s},
nS:function(a){var s=a.y
if(s===6||s===7||s===8)return H.nS(a.z)
return s===11||s===12},
qD:function(a){return a.cy},
aQ:function(a){return H.lA(v.typeUniverse,a,!1)},
tC:function(a,b){var s,r,q,p,o
if(a==null)return null
s=b.Q
r=a.cx
if(r==null)r=a.cx=new Map()
q=b.cy
p=r.get(q)
if(p!=null)return p
o=H.c6(v.typeUniverse,a.z,s,0)
r.set(q,o)
return o},
c6:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.c6(a,s,a0,a1)
if(r===s)return b
return H.oj(a,r,!0)
case 7:s=b.z
r=H.c6(a,s,a0,a1)
if(r===s)return b
return H.mP(a,r,!0)
case 8:s=b.z
r=H.c6(a,s,a0,a1)
if(r===s)return b
return H.oi(a,r,!0)
case 9:q=b.Q
p=H.fm(a,q,a0,a1)
if(p===q)return b
return H.fa(a,b.z,p)
case 10:o=b.z
n=H.c6(a,o,a0,a1)
m=b.Q
l=H.fm(a,m,a0,a1)
if(n===o&&l===m)return b
return H.mN(a,n,l)
case 11:k=b.z
j=H.c6(a,k,a0,a1)
i=b.Q
h=H.ta(a,i,a0,a1)
if(j===k&&h===i)return b
return H.oh(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.fm(a,g,a0,a1)
o=b.z
n=H.c6(a,o,a0,a1)
if(f===g&&n===o)return b
return H.mO(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.d(P.j3("Attempted to substitute unexpected RTI kind "+c))}},
fm:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.c6(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
tb:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.c6(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
ta:function(a,b,c,d){var s,r=b.a,q=H.fm(a,r,c,d),p=b.b,o=H.fm(a,p,c,d),n=b.c,m=H.tb(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.iq()
s.a=q
s.b=o
s.c=m
return s},
a:function(a,b){a[v.arrayRti]=b
return a},
n4:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.p1(s)
return a.$S()}return null},
p3:function(a,b){var s
if(H.nS(b))if(a instanceof H.b9){s=H.n4(a)
if(s!=null)return s}return H.av(a)},
av:function(a){var s
if(a instanceof P.Q){s=a.$ti
return s!=null?s:H.mX(a)}if(Array.isArray(a))return H.x(a)
return H.mX(J.bs(a))},
x:function(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
H:function(a){var s=a.$ti
return s!=null?s:H.mX(a)},
mX:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.rU(a,s)},
rU:function(a,b){var s=a instanceof H.b9?a.__proto__.__proto__.constructor:b,r=H.ru(v.typeUniverse,s.name)
b.$ccache=r
return r},
p1:function(a){var s,r,q
H.Z(a)
s=v.types
r=s[a]
if(typeof r=="string"){q=H.lA(v.typeUniverse,r,!1)
s[a]=q
return q}return r},
m3:function(a){var s=a instanceof H.b9?H.n4(a):null
return H.oT(s==null?H.av(a):s)},
oT:function(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new H.iz(a)
q=H.lA(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new H.iz(q):p},
rT:function(a){var s,r,q,p=this
if(p===t.K)return H.fj(p,a,H.rZ)
if(!H.c7(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.fj(p,a,H.t1)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.lM
else if(r===t.W||r===t.p)q=H.rY
else if(r===t.N)q=H.t_
else q=r===t.k4?H.oE:null
if(q!=null)return H.fj(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.tG)){p.r="$i"+s
return H.fj(p,a,H.t0)}}else if(s===7)return H.fj(p,a,H.rR)
return H.fj(p,a,H.rP)},
fj:function(a,b,c){a.b=c
return a.b(b)},
rS:function(a){var s,r=this,q=H.rO
if(!H.c7(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.rI
else if(r===t.K)q=H.rH
else{s=H.fp(r)
if(s)q=H.rQ}r.a=q
return r.a(a)},
n0:function(a){var s,r=a.y
if(!H.c7(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&H.n0(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rP:function(a){var s=this
if(a==null)return H.n0(s)
return H.ae(v.typeUniverse,H.p3(a,s),null,s,null)},
rR:function(a){if(a==null)return!0
return this.z.b(a)},
t0:function(a){var s,r=this
if(a==null)return H.n0(r)
s=r.r
if(a instanceof P.Q)return!!a[s]
return!!J.bs(a)[s]},
rO:function(a){var s,r=this
if(a==null){s=H.fp(r)
if(s)return a}else if(r.b(a))return a
H.oC(a,r)},
rQ:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.oC(a,s)},
oC:function(a,b){throw H.d(H.og(H.o9(a,H.p3(a,b),H.b0(b,null))))},
iI:function(a,b,c,d){var s=null
if(H.ae(v.typeUniverse,a,s,b,s))return a
throw H.d(H.og("The type argument '"+H.b0(a,s)+"' is not a subtype of the type variable bound '"+H.b0(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
o9:function(a,b,c){var s=P.fX(a),r=H.b0(b==null?H.av(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
og:function(a){return new H.f9("TypeError: "+a)},
b_:function(a,b){return new H.f9("TypeError: "+H.o9(a,null,b))},
rZ:function(a){return a!=null},
rH:function(a){if(a!=null)return a
throw H.d(H.b_(a,"Object"))},
t1:function(a){return!0},
rI:function(a){return a},
oE:function(a){return!0===a||!1===a},
iE:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.b_(a,"bool"))},
uA:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.b_(a,"bool"))},
uz:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.b_(a,"bool?"))},
aP:function(a){if(typeof a=="number")return a
throw H.d(H.b_(a,"double"))},
uB:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.b_(a,"double"))},
fi:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.b_(a,"double?"))},
lM:function(a){return typeof a=="number"&&Math.floor(a)===a},
Z:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.b_(a,"int"))},
uD:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.b_(a,"int"))},
uC:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.b_(a,"int?"))},
rY:function(a){return typeof a=="number"},
lD:function(a){if(typeof a=="number")return a
throw H.d(H.b_(a,"num"))},
uF:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.b_(a,"num"))},
uE:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.b_(a,"num?"))},
t_:function(a){return typeof a=="string"},
az:function(a){if(typeof a=="string")return a
throw H.d(H.b_(a,"String"))},
uG:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.b_(a,"String"))},
iF:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.b_(a,"String?"))},
t7:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.b0(a[q],b)
return s},
oD:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)C.a.q(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.b(a5,j)
m=C.b.K(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.b0(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.b0(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.b0(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.b0(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.b0(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
b0:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.b0(a.z,b)
return s}if(l===7){r=a.z
s=H.b0(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.b0(a.z,b)+">"
if(l===9){p=H.tc(a.z)
o=a.Q
return o.length!==0?p+("<"+H.t7(o,b)+">"):p}if(l===11)return H.oD(a,b,null)
if(l===12)return H.oD(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.b(b,n)
return b[n]}return"?"},
tc:function(a){var s,r=H.pl(a)
if(r!=null)return r
s="minified:"+a
return s},
ok:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ru:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lA(a,b,!1)
else if(typeof m=="number"){s=m
r=H.fb(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.fa(a,b,q)
n[b]=o
return o}else return m},
rs:function(a,b){return H.oy(a.tR,b)},
rr:function(a,b){return H.oy(a.eT,b)},
lA:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.oe(H.oc(a,null,b,c))
r.set(b,s)
return s},
iC:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.oe(H.oc(a,b,c,!0))
q.set(c,r)
return r},
rt:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.mN(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
cp:function(a,b){b.a=H.rS
b.b=H.rT
return b},
fb:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.bx(null,null)
s.y=b
s.cy=c
r=H.cp(a,s)
a.eC.set(c,r)
return r},
oj:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.rp(a,b,r,c)
a.eC.set(r,s)
return s},
rp:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.c7(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.bx(null,null)
q.y=6
q.z=b
q.cy=c
return H.cp(a,q)},
mP:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.ro(a,b,r,c)
a.eC.set(r,s)
return s},
ro:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.c7(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.fp(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.fp(q.z))return q
else return H.nR(a,b)}}p=new H.bx(null,null)
p.y=7
p.z=b
p.cy=c
return H.cp(a,p)},
oi:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.rm(a,b,r,c)
a.eC.set(r,s)
return s},
rm:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.c7(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.fa(a,"bm",[b])
else if(b===t.P||b===t.T)return t.gK}q=new H.bx(null,null)
q.y=8
q.z=b
q.cy=c
return H.cp(a,q)},
rq:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.bx(null,null)
s.y=13
s.z=b
s.cy=q
r=H.cp(a,s)
a.eC.set(q,r)
return r},
iB:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
rl:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
fa:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.iB(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.bx(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.cp(a,r)
a.eC.set(p,q)
return q},
mN:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.iB(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.bx(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.cp(a,o)
a.eC.set(q,n)
return n},
oh:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.iB(m)
if(j>0){s=l>0?",":""
r=H.iB(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.rl(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.bx(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.cp(a,o)
a.eC.set(q,r)
return r},
mO:function(a,b,c,d){var s,r=b.cy+("<"+H.iB(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.rn(a,b,c,r,d)
a.eC.set(r,s)
return s},
rn:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.c6(a,b,r,0)
m=H.fm(a,c,r,0)
return H.mO(a,n,m,c!==m)}}l=new H.bx(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.cp(a,l)},
oc:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
oe:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.rg(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.od(a,r,h,g,!1)
else if(q===46)r=H.od(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.cn(a.u,a.e,g.pop()))
break
case 94:g.push(H.rq(a.u,g.pop()))
break
case 35:g.push(H.fb(a.u,5,"#"))
break
case 64:g.push(H.fb(a.u,2,"@"))
break
case 126:g.push(H.fb(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.mM(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.fa(p,n,o))
else{m=H.cn(p,a.e,n)
switch(m.y){case 11:g.push(H.mO(p,m,o,a.n))
break
default:g.push(H.mN(p,m,o))
break}}break
case 38:H.rh(a,g)
break
case 42:p=a.u
g.push(H.oj(p,H.cn(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.mP(p,H.cn(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.oi(p,H.cn(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.iq()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
H.mM(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.oh(p,H.cn(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.mM(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.rj(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.cn(a.u,a.e,i)},
rg:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
od:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.ok(s,o.z)[p]
if(n==null)H.c('No "'+p+'" in "'+H.qD(o)+'"')
d.push(H.iC(s,o,n))}else d.push(p)
return m},
rh:function(a,b){var s=b.pop()
if(0===s){b.push(H.fb(a.u,1,"0&"))
return}if(1===s){b.push(H.fb(a.u,4,"1&"))
return}throw H.d(P.j3("Unexpected extended operation "+H.m(s)))},
cn:function(a,b,c){if(typeof c=="string")return H.fa(a,c,a.sEA)
else if(typeof c=="number")return H.ri(a,b,c)
else return c},
mM:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.cn(a,b,c[s])},
rj:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.cn(a,b,c[s])},
ri:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.d(P.j3("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.d(P.j3("Bad index "+c+" for "+b.l(0)))},
ae:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.c7(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.c7(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.ae(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.ae(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.ae(a,b.z,c,d,e)
if(r===6)return H.ae(a,b.z,c,d,e)
return r!==7}if(r===6)return H.ae(a,b.z,c,d,e)
if(p===6){s=H.nR(a,d)
return H.ae(a,b,c,s,e)}if(r===8){if(!H.ae(a,b.z,c,d,e))return!1
return H.ae(a,H.nQ(a,b),c,d,e)}if(r===7){s=H.ae(a,t.P,c,d,e)
return s&&H.ae(a,b.z,c,d,e)}if(p===8){if(H.ae(a,b,c,d.z,e))return!0
return H.ae(a,b,c,H.nQ(a,d),e)}if(p===7){s=H.ae(a,b,c,t.P,e)
return s||H.ae(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.gY)return!0
if(p===12){if(b===t.dY)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.ae(a,k,c,j,e)||!H.ae(a,j,e,k,c))return!1}return H.oF(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return H.oF(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.rX(a,b,c,d,e)}return!1},
oF:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.ae(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!H.ae(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.ae(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.ae(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!H.ae(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
rX:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.ae(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.ok(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.ae(a,H.iC(a,b,l[p]),c,r[p],e))return!1
return!0},
fp:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.c7(a))if(r!==7)if(!(r===6&&H.fp(a.z)))s=r===8&&H.fp(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
tG:function(a){var s
if(!H.c7(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
c7:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
oy:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
bx:function bx(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
iq:function iq(){this.c=this.b=this.a=null},
iz:function iz(a){this.a=a},
im:function im(){},
f9:function f9(a){this.a=a},
pl:function(a){return v.mangledGlobalNames[a]},
tM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
n9:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iJ:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.n5==null){H.tA()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.d(P.hY("Return interceptor for "+H.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ls
if(o==null)o=$.ls=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.tH(a)
if(p!=null)return p
if(typeof a=="function")return C.b5
s=Object.getPrototypeOf(a)
if(s==null)return C.aD
if(s===Object.prototype)return C.aD
if(typeof q=="function"){o=$.ls
if(o==null)o=$.ls=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.a3,enumerable:false,writable:true,configurable:true})
return C.a3}return C.a3},
nD:function(a,b){if(a<0||a>4294967295)throw H.d(P.a_(a,0,4294967295,"length",null))
return J.nE(new Array(a),b)},
mq:function(a,b){if(a<0)throw H.d(P.ab("Length must be a non-negative integer: "+a))
return H.a(new Array(a),b.h("A<0>"))},
nE:function(a,b){return J.k1(H.a(a,b.h("A<0>")),b)},
k1:function(a,b){a.fixed$length=Array
return a},
qd:function(a,b){var s=t.bP
return J.nm(s.a(a),s.a(b))},
nF:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
qe:function(a,b){var s,r
for(s=a.length;b<s;){r=C.b.E(a,b)
if(r!==32&&r!==13&&!J.nF(r))break;++b}return b},
qf:function(a,b){var s,r
for(;b>0;b=s){s=b-1
r=C.b.M(a,s)
if(r!==32&&r!==13&&!J.nF(r))break}return b},
bs:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.ei.prototype}if(typeof a=="string")return J.bL.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.hc.prototype
if(a.constructor==Array)return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.iJ(a)},
tu:function(a){if(typeof a=="number")return J.cc.prototype
if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(a.constructor==Array)return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.iJ(a)},
X:function(a){if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(a.constructor==Array)return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.iJ(a)},
aR:function(a){if(a==null)return a
if(a.constructor==Array)return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.iJ(a)},
oX:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.ei.prototype}if(a==null)return a
if(!(a instanceof P.Q))return J.bQ.prototype
return a},
oY:function(a){if(typeof a=="number")return J.cc.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bQ.prototype
return a},
oZ:function(a){if(typeof a=="number")return J.cc.prototype
if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bQ.prototype
return a},
m2:function(a){if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bQ.prototype
return a},
p_:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.iJ(a)},
tv:function(a){if(a==null)return a
if(!(a instanceof P.Q))return J.bQ.prototype
return a},
fs:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.tu(a).K(a,b)},
S:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bs(a).Y(a,b)},
bi:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.oZ(a).A(a,b)},
pG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.oY(a).L(a,b)},
Y:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.tF(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.X(a).j(a,b)},
ft:function(a,b,c){return J.aR(a).v(a,b,c)},
pH:function(a,b,c,d){return J.p_(a).mF(a,b,c,d)},
pI:function(a,b,c,d){return J.p_(a).n0(a,b,c,d)},
nj:function(a,b){return J.aR(a).q(a,b)},
af:function(a,b){return J.aR(a).R(a,b)},
nk:function(a,b){return J.m2(a).cd(a,b)},
nl:function(a,b){return J.m2(a).M(a,b)},
nm:function(a,b){return J.oZ(a).aE(a,b)},
iO:function(a,b){return J.aR(a).an(a,b)},
aE:function(a){return J.aR(a).gah(a)},
cx:function(a){return J.bs(a).gJ(a)},
cy:function(a){return J.X(a).gai(a)},
cz:function(a){return J.X(a).gcN(a)},
I:function(a){return J.aR(a).gH(a)},
aF:function(a){return J.aR(a).gt(a)},
K:function(a){return J.X(a).gm(a)},
pJ:function(a){return J.tv(a).gaq(a)},
nn:function(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.oX(a).gfm(a)},
no:function(a,b,c){return J.aR(a).dN(a,b,c)},
r:function(a,b,c){return J.aR(a).eJ(a,b,c)},
pK:function(a,b,c){return J.m2(a).kh(a,b,c)},
pL:function(a,b){return J.X(a).sm(a,b)},
iP:function(a,b){return J.aR(a).bd(a,b)},
np:function(a,b){return J.aR(a).cw(a,b)},
pM:function(a){return J.oY(a).bw(a)},
fu:function(a){return J.aR(a).aw(a)},
bI:function(a){return J.bs(a).l(a)},
nq:function(a){return J.m2(a).eW(a)},
pN:function(a,b){return J.aR(a).eZ(a,b)},
b3:function b3(){},
hc:function hc(){},
d9:function d9(){},
cL:function cL(){},
hw:function hw(){},
bQ:function bQ(){},
bM:function bM(){},
A:function A(a){this.$ti=a},
k2:function k2(a){this.$ti=a},
aB:function aB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cc:function cc(){},
d8:function d8(){},
ei:function ei(){},
bL:function bL(){}},P={
r6:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.tf()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.dG(new P.l8(q),1)).observe(s,{childList:true})
return new P.l7(q,s,r)}else if(self.setImmediate!=null)return P.tg()
return P.th()},
r7:function(a){self.scheduleImmediate(H.dG(new P.l9(t.M.a(a)),0))},
r8:function(a){self.setImmediate(H.dG(new P.la(t.M.a(a)),0))},
r9:function(a){t.M.a(a)
P.rk(0,a)},
rk:function(a,b){var s=new P.ly()
s.mt(a,b)
return s},
bF:function(a){return new P.i9(new P.au($.aa,a.h("au<0>")),a.h("i9<0>"))},
bE:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
ao:function(a,b){P.rJ(a,b)},
bD:function(a,b){b.h1(0,a)},
bC:function(a,b){b.jE(H.aT(a),H.ct(a))},
rJ:function(a,b){var s,r,q=new P.lE(b),p=new P.lF(b)
if(a instanceof P.au)a.j9(q,p,t.z)
else{s=t.z
if(t.g7.b(a))a.hH(q,p,s)
else{r=new P.au($.aa,t.j_)
r.a=4
r.c=a
r.j9(q,p,s)}}},
bG:function(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.aa.kv(new P.lQ(s),t.ef,t.S,t.z)},
re:function(a){return new P.dz(a,1)},
mJ:function(){return C.e2},
mK:function(a){return new P.dz(a,3)},
n_:function(a,b){return new P.f8(a,b.h("f8<0>"))},
j4:function(a,b){var s=H.lT(a,"error",t.K)
return new P.dN(s,b==null?P.pS(a):b)},
pS:function(a){var s
if(t.fz.b(a)){s=a.gdT()
if(s!=null)return s}return C.b0},
lh:function(a,b){var s,r,q
for(s=t.j_;r=a.a,r===2;)a=s.a(a.c)
if(r>=4){q=b.e2()
b.a=a.a
b.c=a.c
P.dy(b,q)}else{q=t.f.a(b.c)
b.a=2
b.c=a
a.j1(q)}},
dy:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b={},a=b.a=a0
for(s=t.u,r=t.f,q=t.g7;!0;){p={}
o=a.a===8
if(a1==null){if(o){n=s.a(a.c)
P.lN(c,c,a.b,n.a,n.b)}return}p.a=a1
m=a1.a
for(a=a1;m!=null;a=m,m=l){a.a=null
P.dy(b.a,a)
p.a=m
l=m.a}k=b.a
j=k.c
p.b=o
p.c=j
i=!o
if(i){h=a.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=a.b.b
if(o){h=k.b===g
h=!(h||h)}else h=!1
if(h){s.a(j)
P.lN(c,c,k.b,j.a,j.b)
return}f=$.aa
if(f!==g)$.aa=g
else f=c
a=a.c
if((a&15)===8)new P.lp(p,b,o).$0()
else if(i){if((a&1)!==0)new P.lo(p,j).$0()}else if((a&2)!==0)new P.ln(b,p).$0()
if(f!=null)$.aa=f
a=p.c
if(q.b(a)){k=p.a.$ti
k=k.h("bm<2>").b(a)||!k.Q[1].b(a)}else k=!1
if(k){q.a(a)
e=p.a.b
if(a.a>=4){d=r.a(e.c)
e.c=null
a1=e.e3(d)
e.a=a.a
e.c=a.c
b.a=a
continue}else P.lh(a,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a1=e.e3(d)
a=p.b
k=p.c
if(!a){e.$ti.c.a(k)
e.a=4
e.c=k}else{s.a(k)
e.a=8
e.c=k}b.a=e
a=e}},
t5:function(a,b){var s
if(t.ng.b(a))return b.kv(a,t.z,t.K,t.k)
s=t.mq
if(s.b(a))return s.a(a)
throw H.d(P.nr(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
t4:function(){var s,r
for(s=$.dD;s!=null;s=$.dD){$.fl=null
r=s.b
$.dD=r
if(r==null)$.fk=null
s.a.$0()}},
t9:function(){$.mY=!0
try{P.t4()}finally{$.fl=null
$.mY=!1
if($.dD!=null)$.nf().$1(P.oQ())}},
oK:function(a){var s=new P.ia(a),r=$.fk
if(r==null){$.dD=$.fk=s
if(!$.mY)$.nf().$1(P.oQ())}else $.fk=r.b=s},
t8:function(a){var s,r,q,p=$.dD
if(p==null){P.oK(a)
$.fl=$.fk
return}s=new P.ia(a)
r=$.fl
if(r==null){s.b=p
$.dD=$.fl=s}else{q=r.b
s.b=q
$.fl=r.b=s
if(q==null)$.fk=s}},
tQ:function(a){var s=null,r=$.aa
if(C.l===r){P.dE(s,s,C.l,a)
return}P.dE(s,s,r,t.M.a(r.jv(a)))},
ud:function(a,b){H.lT(a,"stream",t.K)
return new P.iv(b.h("iv<0>"))},
lN:function(a,b,c,d,e){P.t8(new P.lO(d,e))},
oH:function(a,b,c,d,e){var s,r=$.aa
if(r===c)return d.$0()
$.aa=c
s=r
try{r=d.$0()
return r}finally{$.aa=s}},
oI:function(a,b,c,d,e,f,g){var s,r=$.aa
if(r===c)return d.$1(e)
$.aa=c
s=r
try{r=d.$1(e)
return r}finally{$.aa=s}},
t6:function(a,b,c,d,e,f,g,h,i){var s,r=$.aa
if(r===c)return d.$2(e,f)
$.aa=c
s=r
try{r=d.$2(e,f)
return r}finally{$.aa=s}},
dE:function(a,b,c,d){t.M.a(d)
if(C.l!==c)d=c.jv(d)
P.oK(d)},
l8:function l8(a){this.a=a},
l7:function l7(a,b,c){this.a=a
this.b=b
this.c=c},
l9:function l9(a){this.a=a},
la:function la(a){this.a=a},
ly:function ly(){},
lz:function lz(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=!1
this.$ti=b},
lE:function lE(a){this.a=a},
lF:function lF(a){this.a=a},
lQ:function lQ(a){this.a=a},
dz:function dz(a,b){this.a=a
this.b=b},
co:function co(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
f8:function f8(a,b){this.a=a
this.$ti=b},
dN:function dN(a,b){this.a=a
this.b=b},
ib:function ib(){},
f7:function f7(a,b){this.a=a
this.$ti=b},
cU:function cU(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
au:function au(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
le:function le(a,b){this.a=a
this.b=b},
lm:function lm(a,b){this.a=a
this.b=b},
li:function li(a){this.a=a},
lj:function lj(a){this.a=a},
lk:function lk(a,b,c){this.a=a
this.b=b
this.c=c},
lg:function lg(a,b){this.a=a
this.b=b},
ll:function ll(a,b){this.a=a
this.b=b},
lf:function lf(a,b,c){this.a=a
this.b=b
this.c=c},
lp:function lp(a,b,c){this.a=a
this.b=b
this.c=c},
lq:function lq(a){this.a=a},
lo:function lo(a,b){this.a=a
this.b=b},
ln:function ln(a,b){this.a=a
this.b=b},
ia:function ia(a){this.a=a
this.b=null},
eJ:function eJ(){},
kB:function kB(a,b){this.a=a
this.b=b},
kC:function kC(a,b){this.a=a
this.b=b},
eK:function eK(){},
hQ:function hQ(){},
iv:function iv(a){this.$ti=a},
fe:function fe(){},
lO:function lO(a,b){this.a=a
this.b=b},
iu:function iu(){},
lw:function lw(a,b){this.a=a
this.b=b},
lx:function lx(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function(a,b){return new H.bw(a.h("@<0>").a3(b).h("bw<1,2>"))},
z:function(a,b,c){return b.h("@<0>").a3(c).h("mv<1,2>").a(H.oW(a,new H.bw(b.h("@<0>").a3(c).h("bw<1,2>"))))},
bn:function(a,b){return new H.bw(a.h("@<0>").a3(b).h("bw<1,2>"))},
mw:function(a){return new P.c4(a.h("c4<0>"))},
nH:function(a){return new P.c4(a.h("c4<0>"))},
mL:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
rf:function(a,b,c){var s=new P.cV(a,b,c.h("cV<0>"))
s.c=a.e
return s},
qa:function(a,b,c){var s,r
if(P.mZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.a([],t.s)
C.a.q($.bg,a)
try{P.t2(a,s)}finally{if(0>=$.bg.length)return H.b($.bg,-1)
$.bg.pop()}r=P.kD(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
k_:function(a,b,c){var s,r
if(P.mZ(a))return b+"..."+c
s=new P.a5(b)
C.a.q($.bg,a)
try{r=s
r.a=P.kD(r.a,a,", ")}finally{if(0>=$.bg.length)return H.b($.bg,-1)
$.bg.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mZ:function(a){var s,r
for(s=$.bg.length,r=0;r<s;++r)if(a===$.bg[r])return!0
return!1},
t2:function(a,b){var s,r,q,p,o,n,m,l=a.gH(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=H.m(l.gu())
C.a.q(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return H.b(b,-1)
r=b.pop()
if(0>=b.length)return H.b(b,-1)
q=b.pop()}else{p=l.gu();++j
if(!l.n()){if(j<=4){C.a.q(b,H.m(p))
return}r=H.m(p)
if(0>=b.length)return H.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gu();++j
for(;l.n();p=o,o=n){n=l.gu();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2;--j}C.a.q(b,"...")
return}}q=H.m(p)
r=H.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)C.a.q(b,m)
C.a.q(b,q)
C.a.q(b,r)},
hf:function(a,b,c){var s=P.a4(b,c)
a.bi(0,new P.k5(s,b,c))
return s},
mx:function(a,b){var s,r,q=P.mw(b)
for(s=J.I(a),r=s.$ti.c;s.n();)q.q(0,b.a(r.a(s.d)))
return q},
qh:function(a,b){var s=t.bP
return J.nm(s.a(a),s.a(b))},
mz:function(a){var s,r={}
if(P.mZ(a))return"{...}"
s=new P.a5("")
try{C.a.q($.bg,a)
s.a+="{"
r.a=!0
a.bi(0,new P.k6(r,s))
s.a+="}"}finally{if(0>=$.bg.length)return H.b($.bg,-1)
$.bg.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
my:function(a){return new P.em(P.bN(P.qi(null),null,!1,a.h("0?")),a.h("em<0>"))},
qi:function(a){return 8},
c4:function c4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ir:function ir(a){this.a=a
this.c=this.b=null},
cV:function cV(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eh:function eh(){},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(){},
w:function w(){},
eo:function eo(){},
k6:function k6(a,b){this.a=a
this.b=b},
dd:function dd(){},
em:function em(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
f2:function f2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
aY:function aY(){},
eF:function eF(){},
dB:function dB(){},
iD:function iD(){},
fc:function fc(a,b){this.a=a
this.$ti=b},
f1:function f1(){},
f5:function f5(){},
fg:function fg(){},
fh:function fh(){},
r0:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.r1(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
r1:function(a,b,c,d){var s=a?$.pC():$.pB()
if(s==null)return null
if(0===c&&d===b.length)return P.o4(s,b)
return P.o4(s,b.subarray(c,P.aL(c,d,b.length)))},
o4:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.aT(r)}return null},
nu:function(a,b,c,d,e,f){if(C.d.Z(f,4)!==0)throw H.d(P.aH("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.aH("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.aH("Invalid base64 padding, more than two '=' characters",a,b))},
rG:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
rF:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.X(a),r=0;r<p;++r){q=s.j(a,b+r)
if((q&4294967040)>>>0!==0)q=255
if(r>=p)return H.b(o,r)
o[r]=q}return o},
kQ:function kQ(){},
kP:function kP(){},
fH:function fH(){},
iA:function iA(){},
fI:function fI(a,b){this.a=a
this.b=b},
fK:function fK(){},
fL:function fL(){},
cE:function cE(){},
cF:function cF(){},
fW:function fW(){},
i1:function i1(){},
i2:function i2(a){this.a=a},
lB:function lB(a){this.a=a
this.b=16
this.c=0},
cu:function(a,b){var s=H.nM(a,b)
if(s!=null)return s
throw H.d(P.aH(a,null,null))},
bS:function(a){var s=H.qv(a)
if(s!=null)return s
throw H.d(P.aH("Invalid double",a,null))},
q4:function(a){if(a instanceof H.b9)return a.l(0)
return"Instance of '"+H.kq(a)+"'"},
bN:function(a,b,c,d){var s,r=c?J.mq(a,d):J.nD(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
en:function(a,b,c){var s,r=H.a([],c.h("A<0>"))
for(s=J.I(a);s.n();)C.a.q(r,c.a(s.gu()))
if(b)return r
return J.k1(r,c)},
i:function(a,b,c){var s
if(b)return P.nI(a,c)
s=J.k1(P.nI(a,c),c)
return s},
nI:function(a,b){var s,r
if(Array.isArray(a))return H.a(a.slice(0),b.h("A<0>"))
s=H.a([],b.h("A<0>"))
for(r=J.I(a);r.n();)C.a.q(s,r.gu())
return s},
nJ:function(a,b){var s=P.en(a,!1,b)
s.fixed$length=Array
s.immutable$list=Array
return s},
ad:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.aL(b,c,r)
return H.nN(b>0||c<r?s.slice(b,c):s)}if(t.hD.b(a))return H.qx(a,b,P.aL(b,c,a.length))
return P.qQ(a,b,c)},
qP:function(a){return H.bb(a)},
qQ:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.d(P.a_(b,0,J.K(a),o,o))
s=c==null
if(!s&&c<b)throw H.d(P.a_(c,b,J.K(a),o,o))
r=J.I(a)
for(q=0;q<b;++q)if(!r.n())throw H.d(P.a_(b,0,q,o,o))
p=[]
if(s)for(;r.n();)p.push(r.gu())
else for(q=b;q<c;++q){if(!r.n())throw H.d(P.a_(c,b,q,o,o))
p.push(r.gu())}return H.nN(p)},
ay:function(a){return new H.cK(a,H.mr(a,!1,!0,!1,!1,!1))},
kD:function(a,b,c){var s=J.I(b)
if(!s.n())return a
if(c.length===0){do a+=H.m(s.gu())
while(s.n())}else{a+=H.m(s.gu())
for(;s.n();)a=a+c+H.m(s.gu())}return a},
mG:function(){var s=H.qu()
if(s!=null)return P.mH(s)
throw H.d(P.T("'Uri.base' is not supported"))},
fX:function(a){if(typeof a=="number"||H.oE(a)||null==a)return J.bI(a)
if(typeof a=="string")return JSON.stringify(a)
return P.q4(a)},
j3:function(a){return new P.dM(a)},
ab:function(a){return new P.bJ(!1,null,null,a)},
nr:function(a,b,c){return new P.bJ(!0,a,b,c)},
aI:function(a){var s=null
return new P.dm(s,s,!1,s,s,a)},
dn:function(a,b){return new P.dm(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.dm(b,c,!0,a,d,"Invalid value")},
nP:function(a,b,c,d){if(a<b||a>c)throw H.d(P.a_(a,b,c,d,null))
return a},
aL:function(a,b,c){if(0>a||a>c)throw H.d(P.a_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.a_(b,a,c,"end",null))
return b}return c},
bc:function(a,b){if(a<0)throw H.d(P.a_(a,0,null,b,null))
return a},
h9:function(a,b,c,d,e){var s=H.Z(e==null?J.K(b):e)
return new P.h8(s,!0,a,c,"Index out of range")},
T:function(a){return new P.i_(a)},
hY:function(a){return new P.eS(a)},
am:function(a){return new P.ch(a)},
aw:function(a){return new P.fR(a)},
aH:function(a,b,c){return new P.e7(a,b,c)},
na:function(a){H.tM(a)},
oz:function(a,b){return 65536+((a&1023)<<10)+(b&1023)},
mH:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.b.E(a5,4)^58)*3|C.b.E(a5,0)^100|C.b.E(a5,1)^97|C.b.E(a5,2)^116|C.b.E(a5,3)^97)>>>0
if(s===0)return P.o2(a4<a4?C.b.B(a5,0,a4):a5,5,a3).gkI()
else if(s===32)return P.o2(C.b.B(a5,5,a4),0,a3).gkI()}r=P.bN(8,0,!1,t.S)
C.a.v(r,0,0)
C.a.v(r,1,-1)
C.a.v(r,2,-1)
C.a.v(r,7,-1)
C.a.v(r,3,0)
C.a.v(r,4,0)
C.a.v(r,5,a4)
C.a.v(r,6,a4)
if(P.oJ(a5,0,a4,0,r)>=14)C.a.v(r,7,a4)
q=r[1]
if(q>=0)if(P.oJ(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
if(k)if(p>q+3){j=a3
k=!1}else{i=o>0
if(i&&o+1===n){j=a3
k=!1}else{if(!(m<a4&&m===n+2&&C.b.al(a5,"..",n)))h=m>n+2&&C.b.al(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.b.al(a5,"file",0)){if(p<=0){if(!C.b.al(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.b.B(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=C.b.cq(a5,n,m,"/");++a4
m=f}j="file"}else if(C.b.al(a5,"http",0)){if(i&&o+3===n&&C.b.al(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.b.cq(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.b.al(a5,"https",0)){if(i&&o+4===n&&C.b.al(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.b.cq(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.b.B(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.br(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.rB(a5,0,q)
else{if(q===0)P.dC(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.ot(a5,d,p-1):""
b=P.oq(a5,p,o,!1)
i=o+1
if(i<n){a=H.nM(C.b.B(a5,i,n),a3)
a0=P.mR(a==null?H.c(P.aH("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.or(a5,n,m,a3,j,b!=null)
a2=m<l?P.os(a5,m+1,l,a3):a3
return new P.cq(j,c,b,a0,a1,a2,l<a4?P.op(a5,l+1,a4):a3)},
r_:function(a){H.az(a)
return P.mU(a,0,a.length,C.t,!1)},
qZ:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.kM(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.b.M(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.cu(C.b.B(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.b(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.cu(C.b.B(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.b(j,q)
j[q]=o
return j},
o3:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.kN(a),c=new P.kO(d,a)
if(a.length<2)d.$1("address is too short")
s=H.a([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.b.M(a,r)
if(n===58){if(r===b){++r
if(C.b.M(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
C.a.q(s,-1)
p=!0}else C.a.q(s,c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.a.gt(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)C.a.q(s,c.$2(q,a0))
else{k=P.qZ(a,q,a0)
C.a.q(s,(k[0]<<8|k[1])>>>0)
C.a.q(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.b(j,h)
j[h]=0
e=h+1
if(e>=16)return H.b(j,e)
j[e]=0
h+=2}else{e=C.d.d6(g,8)
if(h<0||h>=16)return H.b(j,h)
j[h]=e
e=h+1
if(e>=16)return H.b(j,e)
j[e]=g&255
h+=2}}return j},
om:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
rz:function(a,b){var s,r,q,p,o,n
for(s=a.length,r=0;r<s;++r){q=C.b.E(a,r)
p=C.b.E(b,r)
o=q^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122)continue}return!1}}return!0},
dC:function(a,b,c){throw H.d(P.aH(c,a,b))},
rw:function(a,b){var s,r,q,p,o
for(s=a.length,r=0;r<s;++r){q=a[r]
p=J.X(q)
o=p.gm(q)
if(0>o)H.c(P.a_(0,0,p.gm(q),null,null))
if(H.cw(q,"/",0)){s=P.T("Illegal path character "+H.m(q))
throw H.d(s)}}},
ol:function(a,b,c){var s,r,q,p
for(s=H.be(a,c,null,H.x(a).c),r=s.$ti,s=new H.M(s,s.gm(s),r.h("M<C.E>")),r=r.h("C.E");s.n();){q=r.a(s.d)
p=P.ay('["*/:<>?\\\\|]')
if(H.cw(q,p,0)){s=P.T("Illegal character in path: "+q)
throw H.d(s)}}},
rx:function(a,b){var s
if(!(65<=a&&a<=90))s=97<=a&&a<=122
else s=!0
if(s)return
s=P.T("Illegal drive letter "+P.qP(a))
throw H.d(s)},
mR:function(a,b){if(a!=null&&a===P.om(b))return null
return a},
oq:function(a,b,c,d){var s,r,q,p,o,n
if(a==null)return null
if(b===c)return""
if(C.b.M(a,b)===91){s=c-1
if(C.b.M(a,s)!==93)P.dC(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.ry(a,r,s)
if(q<s){p=q+1
o=P.ow(a,C.b.al(a,"25",p)?q+3:p,s,"%25")}else o=""
P.o3(a,r,q)
return C.b.B(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.b.M(a,n)===58){q=C.b.aT(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.ow(a,C.b.al(a,"25",p)?q+3:p,c,"%25")}else o=""
P.o3(a,b,q)
return"["+C.b.B(a,b,q)+o+"]"}return P.rD(a,b,c)},
ry:function(a,b,c){var s=C.b.aT(a,"%",b)
return s>=b&&s<c?s:c},
ow:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a5(d):null
for(s=b,r=s,q=!0;s<c;){p=C.b.M(a,s)
if(p===37){o=P.mS(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a5("")
m=i.a+=C.b.B(a,r,s)
if(n)o=C.b.B(a,s,s+3)
else if(o==="%")P.dC(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.b(C.J,n)
n=(C.J[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a5("")
if(r<s){i.a+=C.b.B(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.b.M(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.b.B(a,r,s)
if(i==null){i=new P.a5("")
n=i}else n=i
n.a+=j
n.a+=P.mQ(p)
s+=k
r=s}}}if(i==null)return C.b.B(a,b,c)
if(r<c)i.a+=C.b.B(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
rD:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.b.M(a,s)
if(o===37){n=P.mS(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a5("")
l=C.b.B(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.b.B(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.b(C.ah,m)
m=(C.ah[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a5("")
if(r<s){q.a+=C.b.B(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.b(C.E,m)
m=(C.E[m]&1<<(o&15))!==0}else m=!1
if(m)P.dC(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.b.M(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.b.B(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a5("")
m=q}else m=q
m.a+=l
m.a+=P.mQ(o)
s+=j
r=s}}}}if(q==null)return C.b.B(a,b,c)
if(r<c){l=C.b.B(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
rB:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.oo(C.b.E(a,b)))P.dC(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.b.E(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.b(C.H,p)
p=(C.H[p]&1<<(q&15))!==0}else p=!1
if(!p)P.dC(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.b.B(a,b,c)
return P.rv(r?a.toLowerCase():a)},
rv:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ot:function(a,b,c){if(a==null)return""
return P.fd(a,b,c,C.bp,!1)},
or:function(a,b,c,d,e,f){var s=e==="file",r=s||f,q=P.fd(a,b,c,C.ai,!0)
if(q.length===0){if(s)return"/"}else if(r&&!C.b.a2(q,"/"))q="/"+q
return P.rC(q,e,f)},
rC:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.b.a2(a,"/"))return P.mT(a,!s||c)
return P.c5(a)},
os:function(a,b,c,d){if(a!=null)return P.fd(a,b,c,C.G,!0)
return null},
op:function(a,b,c){if(a==null)return null
return P.fd(a,b,c,C.G,!0)},
mS:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.b.M(a,b+1)
r=C.b.M(a,n)
q=H.m7(s)
p=H.m7(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.d.d6(o,4)
if(n>=8)return H.b(C.J,n)
n=(C.J[n]&1<<(o&15))!==0}else n=!1
if(n)return H.bb(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.b.B(a,b,b+3).toUpperCase()
return null},
mQ:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.b.E(k,a>>>4)
s[2]=C.b.E(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.d.n2(a,6*q)&63|r
if(o>=p)return H.b(s,o)
s[o]=37
m=o+1
l=C.b.E(k,n>>>4)
if(m>=p)return H.b(s,m)
s[m]=l
l=o+2
m=C.b.E(k,n&15)
if(l>=p)return H.b(s,l)
s[l]=m
o+=3}}return P.ad(s,0,null)},
fd:function(a,b,c,d,e){var s=P.ov(a,b,c,d,e)
return s==null?C.b.B(a,b,c):s},
ov:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.b.M(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.b(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.mS(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.b(C.E,n)
n=(C.E[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.dC(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.b.M(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.mQ(o)}}if(p==null){p=new P.a5("")
n=p}else n=p
n.a+=C.b.B(a,q,r)
n.a+=H.m(m)
if(typeof l!=="number")return H.bh(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.b.B(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
ou:function(a){if(C.b.a2(a,"."))return!0
return C.b.ap(a,"/.")!==-1},
c5:function(a){var s,r,q,p,o,n,m
if(!P.ou(a))return a
s=H.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.S(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.b(s,-1)
s.pop()
if(s.length===0)C.a.q(s,"")}p=!0}else if("."===n)p=!0
else{C.a.q(s,n)
p=!1}}if(p)C.a.q(s,"")
return C.a.aG(s,"/")},
mT:function(a,b){var s,r,q,p,o,n
if(!P.ou(a))return!b?P.on(a):a
s=H.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.a.gt(s)!==".."){if(0>=s.length)return H.b(s,-1)
s.pop()
p=!0}else{C.a.q(s,"..")
p=!1}else if("."===n)p=!0
else{C.a.q(s,n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.b(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.a.gt(s)==="..")C.a.q(s,"")
if(!b){if(0>=s.length)return H.b(s,0)
C.a.v(s,0,P.on(s[0]))}return C.a.aG(s,"/")},
on:function(a){var s,r,q,p=a.length
if(p>=2&&P.oo(C.b.E(a,0)))for(s=1;s<p;++s){r=C.b.E(a,s)
if(r===58)return C.b.B(a,0,s)+"%3A"+C.b.az(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.b(C.H,q)
q=(C.H[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
rE:function(a,b){if(a.pk("package")&&a.c==null)return P.oL(b,0,b.length)
return-1},
ox:function(a){var s,r,q,p=a.ghy(),o=p.length
if(o>0&&J.K(p[0])===2&&J.nl(p[0],1)===58){if(0>=o)return H.b(p,0)
P.rx(J.nl(p[0],0),!1)
P.ol(p,!1,1)
s=!0}else{P.ol(p,!1,0)
s=!1}r=a.geC()&&!s?""+"\\":""
if(a.gds()){q=a.gbt(a)
if(q.length!==0)r=r+"\\"+q+"\\"}r=P.kD(r,p,"\\")
o=s&&o===1?r+"\\":r
return o.charCodeAt(0)==0?o:o},
rA:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.b.E(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.d(P.ab("Invalid URL encoding"))}}return s},
mU:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.b.E(a,o)
if(r<=127)if(r!==37)q=!1
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.t!==d)q=!1
else q=!0
if(q)return C.b.B(a,b,c)
else p=new H.a8(C.b.B(a,b,c))}else{p=H.a([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.b.E(a,o)
if(r>127)throw H.d(P.ab("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.d(P.ab("Truncated URI"))
C.a.q(p,P.rA(a,o+1))
o+=2}else C.a.q(p,r)}}return d.eh(0,p)},
oo:function(a){var s=a|32
return 97<=s&&s<=122},
o2:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.a([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.b.E(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.d(P.aH(k,a,r))}}if(q<0&&r>b)throw H.d(P.aH(k,a,r))
for(;p!==44;){C.a.q(j,r);++r
for(o=-1;r<s;++r){p=C.b.E(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)C.a.q(j,o)
else{n=C.a.gt(j)
if(p!==44||r!==n+7||!C.b.al(a,"base64",n+1))throw H.d(P.aH("Expecting '='",a,r))
break}}C.a.q(j,r)
m=r+1
if((j.length&1)===1)a=C.aT.pv(a,m,s)
else{l=P.ov(a,m,s,C.G,!0)
if(l!=null)a=C.b.cq(a,m,s,l)}return new P.kL(a,j,c)},
rM:function(){var s,r,q,p,o,n,m="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",l=".",k=":",j="/",i="?",h="#",g=H.a(new Array(22),t.bs)
for(s=0;s<22;++s)g[s]=new Uint8Array(96)
r=new P.lI(g)
q=new P.lJ()
p=new P.lK()
o=t.hb
n=o.a(r.$2(0,225))
q.$3(n,m,1)
q.$3(n,l,14)
q.$3(n,k,34)
q.$3(n,j,3)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(14,225))
q.$3(n,m,1)
q.$3(n,l,15)
q.$3(n,k,34)
q.$3(n,j,234)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(15,225))
q.$3(n,m,1)
q.$3(n,"%",225)
q.$3(n,k,34)
q.$3(n,j,9)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(1,225))
q.$3(n,m,1)
q.$3(n,k,34)
q.$3(n,j,10)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(2,235))
q.$3(n,m,139)
q.$3(n,j,131)
q.$3(n,l,146)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(3,235))
q.$3(n,m,11)
q.$3(n,j,68)
q.$3(n,l,18)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(4,229))
q.$3(n,m,5)
p.$3(n,"AZ",229)
q.$3(n,k,102)
q.$3(n,"@",68)
q.$3(n,"[",232)
q.$3(n,j,138)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(5,229))
q.$3(n,m,5)
p.$3(n,"AZ",229)
q.$3(n,k,102)
q.$3(n,"@",68)
q.$3(n,j,138)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(6,231))
p.$3(n,"19",7)
q.$3(n,"@",68)
q.$3(n,j,138)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(7,231))
p.$3(n,"09",7)
q.$3(n,"@",68)
q.$3(n,j,138)
q.$3(n,i,172)
q.$3(n,h,205)
q.$3(o.a(r.$2(8,8)),"]",5)
n=o.a(r.$2(9,235))
q.$3(n,m,11)
q.$3(n,l,16)
q.$3(n,j,234)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(16,235))
q.$3(n,m,11)
q.$3(n,l,17)
q.$3(n,j,234)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(17,235))
q.$3(n,m,11)
q.$3(n,j,9)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(10,235))
q.$3(n,m,11)
q.$3(n,l,18)
q.$3(n,j,234)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(18,235))
q.$3(n,m,11)
q.$3(n,l,19)
q.$3(n,j,234)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(19,235))
q.$3(n,m,11)
q.$3(n,j,234)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(11,235))
q.$3(n,m,11)
q.$3(n,j,10)
q.$3(n,i,172)
q.$3(n,h,205)
n=o.a(r.$2(12,236))
q.$3(n,m,12)
q.$3(n,i,12)
q.$3(n,h,205)
n=o.a(r.$2(13,237))
q.$3(n,m,13)
q.$3(n,i,13)
p.$3(o.a(r.$2(20,245)),"az",21)
r=o.a(r.$2(21,245))
p.$3(r,"az",21)
p.$3(r,"09",21)
q.$3(r,"+-.",21)
return g},
oJ:function(a,b,c,d,e){var s,r,q,p,o=$.pE()
for(s=b;s<c;++s){if(d<0||d>=o.length)return H.b(o,d)
r=o[d]
q=C.b.E(a,s)^96
p=r[q>95?31:q]
d=p&31
C.a.v(e,p>>>5,s)}return d},
of:function(a){if(a.b===7&&C.b.a2(a.a,"package")&&a.c<=0)return P.oL(a.a,a.e,a.f)
return-1},
oL:function(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=C.b.M(a,s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
a3:function a3(){},
dM:function dM(a){this.a=a},
hX:function hX(){},
hm:function hm(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dm:function dm(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h8:function h8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i_:function i_(a){this.a=a},
eS:function eS(a){this.a=a},
ch:function ch(a){this.a=a},
fR:function fR(a){this.a=a},
hr:function hr(){},
eI:function eI(){},
fT:function fT(a){this.a=a},
io:function io(a){this.a=a},
e7:function e7(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
U:function U(){},
ep:function ep(a,b,c){this.a=a
this.b=b
this.$ti=c},
aq:function aq(){},
Q:function Q(){},
iy:function iy(){},
hC:function hC(a){this.a=a},
hB:function hB(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a5:function a5(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a,b){this.a=a
this.b=b},
cq:function cq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.x=null},
kL:function kL(a,b,c){this.a=a
this.b=b
this.c=c},
lI:function lI(a){this.a=a},
lJ:function lJ(){},
lK:function lK(){},
br:function br(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
id:function id(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.x=null},
pb:function(a,b,c){H.iI(c,t.p,"T","min")
return Math.min(c.a(a),c.a(b))},
pa:function(a,b,c){H.iI(c,t.p,"T","max")
return Math.max(c.a(a),c.a(b))},
it:function it(){this.b=this.a=0},
cO:function cO(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
qq:function(a){var s=new Path2D(a)
s.toString
return s},
lt:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ob:function(a,b,c,d){var s=W.lt(W.lt(W.lt(W.lt(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
lc:function(a,b,c,d,e){var s=c==null?null:W.oN(new W.ld(c),t.fq)
s=new W.f_(a,b,s,!1,e.h("f_<0>"))
s.nb()
return s},
oN:function(a,b){var s=$.aa
if(s===C.l)return a
return s.nV(a,b)},
y:function y(){},
fC:function fC(){},
fF:function fF(){},
cC:function cC(){},
dR:function dR(){},
bK:function bK(){},
jh:function jh(){},
dX:function dX(){},
t:function t(){},
u:function u(){},
aV:function aV(){},
h0:function h0(){},
ba:function ba(){},
b5:function b5(){},
ht:function ht(){},
hF:function hF(){},
bA:function bA(){},
dw:function dw(){},
l6:function l6(a){this.a=a},
eX:function eX(){},
mn:function mn(a,b){this.a=a
this.$ti=b},
eZ:function eZ(){},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
f_:function f_(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ld:function ld(a){this.a=a}},A={ai:function ai(a,b){this.a=a
this.$ti=b},k0:function k0(a){this.a=a},f0:function f0(a,b){this.a=a
this.b=null
this.$ti=b},
qm:function(a){switch(a){case"http://www.w3.org/1999/xhtml":return"html"
case"http://www.w3.org/1998/Math/MathML":return"math"
case"http://www.w3.org/2000/svg":return"svg"
case"http://www.w3.org/1999/xlink":return"xlink"
case"http://www.w3.org/XML/1998/namespace":return"xml"
case"http://www.w3.org/2000/xmlns/":return"xmlns"
default:return null}},
a6:function(a){H.iF(a)
if(a==null)return!1
return A.n8(C.b.E(a,0))},
n8:function(a){switch(a){case 9:case 10:case 12:case 13:case 32:return!0}return!1},
aS:function(a){var s,r
if(a==null)return!1
s=C.b.E(a,0)
if(!(s>=97&&s<=122))r=s>=65&&s<=90
else r=!0
return r},
mf:function(a){var s
if(a==null)return!1
s=C.b.E(a,0)
return s>=48&&s<58},
p7:function(a){if(a==null)return!1
switch(C.b.E(a,0)){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 65:case 66:case 67:case 68:case 69:case 70:case 97:case 98:case 99:case 100:case 101:case 102:return!0}return!1},
pR:function(a){H.Z(a)
return a>=65&&a<=90?a+97-65:a},
kr:function kr(){},
hE:function hE(){},
kv:function kv(a){this.a=a},
nz:function(a){return new A.as(Math.cos(a),Math.sin(a))},
as:function as(a,b){this.a=a
this.b=b},
nC:function(a,b){return A.qc(a,b,b)},
qc:function(a,b,c){return P.n_(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$nC(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return P.re(s[m])
case 5:case 3:s.length===n||(0,H.e)(s),++m
q=2
break
case 4:return P.mJ()
case 1:return P.mK(o)}}},c)},
cr:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mW:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911}},G={
oB:function(a,b){var s,r,q,p,o,n,m=null
for(s=a.length,r=!b,q=m,p=0;p<s;++p){switch(C.b.E(a,p)){case 34:o=r?'\\"':m
break
case 39:o=b?"\\'":m
break
default:o=m}n=o==null
if(!n&&q==null)q=new P.a5(C.b.B(a,0,p))
if(q!=null)q.a+=n?a[p]:o}if(q==null)s=a
else{s=q.a
s=s.charCodeAt(0)==0?s:s}return s},
mF:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=0;r<s;++r){q=a[r]
p=H.az(q.j(0,"value"))
o=p.length
if(e===o){for(n=d,m=!0,l=0;l<o;++l,n=j){k=C.b.E(p,l)
j=n+1
i=C.b.M(c,n)
if(m)if(i!==k){h=i>=65&&i<=90&&i+32===k
m=h}else m=!0
else m=!1
if(!m)break}if(m)return H.Z(q.j(0,b))}}return-1},
qV:function(a){var s,r
if(a===24)return"%"
else for(s=0;s<26;++s){r=C.ab[s]
if(H.Z(r.j(0,"unit"))===a)return H.iF(r.j(0,"value"))}return"<BAD UNIT>"},
o_:function(a){switch(a){case 0:return"ERROR"
case 1:return"end of file"
case 2:return"("
case 3:return")"
case 4:return"["
case 5:return"]"
case 6:return"{"
case 7:return"}"
case 8:return"."
case 9:return";"
case 10:return"@"
case 11:return"#"
case 12:return"+"
case 13:return">"
case 14:return"~"
case 15:return"*"
case 16:return"|"
case 17:return":"
case 18:return"_"
case 19:return","
case 20:return" "
case 21:return"\t"
case 22:return"\n"
case 23:return"\r"
case 24:return"%"
case 25:return"'"
case 26:return'"'
case 27:return"/"
case 28:return"="
case 30:return"^"
case 31:return"$"
case 32:return"<"
case 33:return"!"
case 34:return"-"
case 35:return"\\"
default:throw H.d("Unknown TOKEN")}},
nZ:function(a){switch(a){case 641:case 642:case 643:case 644:case 645:case 646:case 647:case 648:case 649:case 650:case 651:case 652:case 653:case 654:case 655:case 656:case 600:case 601:case 602:case 603:case 604:case 605:case 606:case 607:case 608:case 609:case 610:case 612:case 613:case 614:case 615:case 617:return!0
default:return!1}},
hW:function(a){var s
if(!(a>=97&&a<=122))s=a>=65&&a<=90||a===95||a>=160||a===92
else s=!0
return s},
lv:function lv(a){this.a=a
this.d=this.c=null},
bp:function bp(a,b){this.a=a
this.b=b},
h4:function h4(a,b,c){this.c=a
this.a=b
this.b=c},
kG:function kG(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.a=f
_.b=g
_.c=h
_.e=_.d=!1
_.f=i
_.r=0},
kH:function kH(){}},F={df:function df(a){this.b=a},es:function es(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},aW:function aW(){},fO:function fO(a){this.e=null
this.b=a
this.d=null},ja:function ja(){},
oR:function(a,b,c){var s,r
if(c){if(!$.iG.as(a)){s=t.S
$.iG.v(0,a,P.bn(s,s))}if(!$.iG.j(0,a).as(b)){s=$.iG.j(0,a)
s.toString
s.v(0,b,F.oR(a,b,!1))}s=$.iG.j(0,a).j(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=C.a.eA(B.D(b+1,1,1),1,new F.lU(),s)
return C.d.b6(C.a.eA(B.D(a-b,a,-1),1,new F.lV(),s),r)},
iK:function(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
lU:function lU(){},
lV:function lV(){},
i0:function i0(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
dc:function(a,b,c){return F.qg(a,b,c,c)},
qg:function(a,b,c,d){return P.n_(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$dc(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.X(s),l=0
case 2:if(!(l<m.gm(s))){p=4
break}k=m.j(s,l)
p=H.b8(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return P.mJ()
case 1:return P.mK(n)}}},d)}},L={
qs:function(a,b){return new L.kp(b)},
kp:function kp(a){this.x=a},
nU:function(a){var s=new L.hH(1,M.iL(),0,a)
s.f=s.bb()
return s},
e6:function(a){var s=new L.fZ(1,M.iL(),0,a)
s.f=s.bb()
s.ip(a,0,M.iL(),1,null)
return s},
qW:function(a,b,c,d,e){var s=new L.eQ(d,c,b,a)
s.f=s.bb()
s.ip(a,b,c,d,e)
return s},
aN:function aN(){},
fE:function fE(a,b,c,d,e){var _=this
_.y=a
_.Q=_.z=null
_.a=b
_.b=c
_.c=d
_.f=null
_.r=e
_.x=null},
hI:function hI(){},
hH:function hH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=null
_.r=d
_.x=null},
fZ:function fZ(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.f=null
_.r=d
_.x=null},
eQ:function eQ(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.f=null
_.r=d
_.x=null},
eT:function eT(a,b,c,d,e,f){var _=this
_.y=a
_.a=b
_.b=c
_.c=d
_.f=null
_.r=e
_.x=null
_.$ti=f},
dI:function dI(){},
i6:function i6(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d}},B={ca:function ca(a,b){this.b=a
this.a=b},cl:function cl(a){this.a=a},hT:function hT(a){this.a=a},hk:function hk(a){this.a=a},hG:function hG(a,b){this.b=a
this.a=b},ce:function ce(a,b){this.b=a
this.a=b},eG:function eG(a,b,c){this.b=a
this.c=b
this.a=c},aZ:function aZ(){},cG:function cG(a,b){this.b=a
this.a=b},hh:function hh(a,b,c){this.d=a
this.b=b
this.a=c},fJ:function fJ(a,b,c,d){var _=this
_.d=a
_.e=b
_.b=c
_.a=d},h3:function h3(a,b){this.b=a
this.a=b},fQ:function fQ(a,b){this.b=a
this.a=b},dk:function dk(a,b){this.b=a
this.a=b},dl:function dl(a,b,c){this.d=a
this.b=b
this.a=c},eA:function eA(a,b,c){this.f=a
this.b=b
this.a=c},hy:function hy(a,b,c){this.d=a
this.b=b
this.a=c},dr:function dr(a,b){this.b=a
this.a=b},hl:function hl(a,b,c){this.d=a
this.b=b
this.a=c},hq:function hq(a){this.a=a},hp:function hp(a){this.a=a},aj:function aj(a,b,c){this.c=a
this.d=b
this.a=c},ho:function ho(a,b,c){this.c=a
this.d=b
this.a=c},bq:function bq(){},he:function he(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},hv:function hv(a,b,c){this.c=a
this.d=b
this.a=c},fV:function fV(a,b,c){this.c=a
this.d=b
this.a=c},fY:function fY(a,b,c){this.c=a
this.d=b
this.a=c},fD:function fD(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},hU:function hU(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},h2:function h2(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},h1:function h1(a,b,c){this.c=a
this.d=b
this.a=c},hA:function hA(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},fP:function fP(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},hz:function hz(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},i4:function i4(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},V:function V(){},ap:function ap(){},i5:function i5(){},
mE:function(a){return new B.c0(a,P.a4(t.K,t.N))},
aG:function aG(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(){},
lu:function lu(){},
ii:function ii(){},
ak:function ak(){},
d2:function d2(a){var _=this
_.a=null
_.b=a
_.e=_.d=_.c=null},
dW:function dW(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=null
_.b=d
_.e=_.d=_.c=null},
c0:function c0(a,b){var _=this
_.x=a
_.a=null
_.b=b
_.e=_.d=_.c=null},
R:function R(a,b,c){var _=this
_.x=a
_.y=b
_.a=null
_.b=c
_.e=_.d=_.c=null},
dT:function dT(a,b){var _=this
_.x=a
_.a=null
_.b=b
_.e=_.d=_.c=null},
al:function al(a,b){this.b=a
this.a=b},
h_:function h_(a){this.a=a},
jn:function jn(){},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){},
ik:function ik(){},
il:function il(){},
ip:function ip(){},
nT:function(a){switch(a){case"before":case"after":case"first-line":case"first-letter":return!0
default:return!1}},
qH:function(a){var s,r
for(;a!=null;){s=a.b.j(0,"lang")
if(s!=null)return s
r=a.a
a=r instanceof B.R?r:null}return null},
eE:function eE(){this.a=null},
ky:function ky(){},
kz:function kz(){},
kx:function kx(){},
kw:function kw(a){this.a=a},
nc:function(a,b,c,d){var s
if(c==null)c=a.length
if(c<b)c=b
s=a.length
return C.a.be(a,b,c>s?s:c)},
n1:function(a){var s,r
for(s=a.length,r=0;r<s;++r)if(!A.n8(C.b.E(a,r)))return!1
return!0},
pc:function(a,b){var s,r=a.length
if(r===b)return a
b-=r
for(s=0,r="";s<b;++s)r+="0"
r+=a
return r.charCodeAt(0)==0?r:r},
tt:function(a,b){var s={}
s.a=a
if(b==null)return a
b.bi(0,new B.m1(s))
return s.a},
p:function p(a,b,c){this.a=a
this.b=b
this.$ti=c},
m1:function m1(a){this.a=a},
D:function(a,b,c){var s,r=H.a([],t.t)
if(c>0)for(s=b;s<a;s+=c)C.a.q(r,s)
else for(s=b;s>a;s+=c)C.a.q(r,s)
return r},
cW:function(a,b){var s,r,q,p=J.X(a)
if(p.gai(a))return H.a([],b.h("A<B<j,0>>"))
s=H.a([],b.h("A<B<j,0>>"))
for(r=t.pc.a3(b).h("B<1,2>"),q=0;q<p.gm(a);++q)C.a.q(s,new S.B(q,p.j(a,q),r))
return s},
iM:function(a,b){if(a.length===0)return b.a(0)
return C.a.aZ(a,new B.ml(b))},
fq:function(a,b,c){var s,r,q,p,o,n,m,l=H.a([],t.b)
for(s=B.D(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,H.e)(s),++o){n=s[o]
if(typeof n!=="number")return n.b4()
m=n/q
l.push(H.a([c*(1-m)+b*m],p))}return S.aA(null,l)},
iH:function(a,b,c){var s,r,q,p,o=B.D(C.f.fY((a-b)/c),0,1),n=H.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,H.e)(o),++q){p=o[q]
if(typeof p!=="number")return p.A()
n.push(H.a([p*c+b],r))}return S.aA(null,n)},
cX:function(a,b,c){var s,r,q,p,o,n=J.X(a)
if(n.gai(a))return a
s=n.gm(a)
if(s>b)throw H.d("Trying to stretch an array to a length shorter than its own")
r=B.D(b,0,1)
q=H.x(r)
p=q.h("J<1,q>")
o=new H.J(r,q.h("q(1)").a(new B.mk(b,s)),p)
q=H.a([],c.h("A<0>"))
for(r=new H.M(o,o.gm(o),p.h("M<C.E>")),p=p.h("C.E");r.n();)q.push(n.j(a,C.f.bw(p.a(r.d))))
return q},
tK:function(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=H.a([],c.h("A<0>"))
for(s=B.D(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.A()
n=C.f.b6(p*o,l)
if(n<0||n>=o)return H.b(a,n)
k.push(a[n])}s=H.a([],d.h("A<0>"))
for(r=B.D(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,H.e)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.A()
m=C.f.b6(p*n,l)
if(m<0||m>=n)return H.b(b,m)
s.push(b[m])}return new S.B(k,s,c.h("@<l<0>>").a3(d.h("l<0>")).h("B<1,2>"))},
bH:function(a,b){var s=F.dc(a,new B.mm(b),b)
return P.i(s,!0,s.$ti.h("k.E"))},
nd:function(a,b){var s=P.i(a,!0,b)
if(0>=s.length)return H.b(s,-1)
s.pop()
return s},
po:function(a,b){var s,r,q,p=H.a([],b.h("A<0>")),o=P.nH(b)
for(s=H.x(a).h("W<1>"),r=new H.W(a,s),r=new H.M(r,r.gm(r),s.h("M<C.E>")),s=s.h("C.E");r.n();){q=s.a(r.d)
if(!o.F(0,q)){C.a.q(p,q)
o.q(0,q)}}s=b.h("W<0>")
return P.i(new H.W(p,s),!0,s.h("C.E"))},
oO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=H.a([],c.h("A<l<0>>"))
for(s=B.D(a.length,0,1),r=s.length,q=c.h("A<0>"),p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=s[p]
n=H.a([],q)
for(m=B.D(b,0,1),l=m.length,k=0;k<m.length;m.length===l||(0,H.e)(m),++k){j=m[k]
if(typeof o!=="number")return o.K()
if(typeof j!=="number")return H.bh(j)
n.push(C.a.j(a,C.f.Z(o+j,a.length)))}i.push(n)}return i},
ml:function ml(a){this.a=a},
mk:function mk(a,b){this.a=a
this.b=b},
mm:function mm(a){this.a=a},
n7:function(a,b,c){var s,r,q=t.H,p=B.fo(S.aA(null,J.r(a,new B.mc(),q).aw(0)),S.aA(null,J.r(b,new B.md(),q).aw(0)),c,t.A)
q=p.gak(p)
s=H.x(q)
r=s.h("J<1,N>")
return P.i(new H.J(q,s.h("N(1)").a(new B.me()),r),!0,r.h("C.E"))},
fo:function(a,b,c,d){return d.a(J.fs(J.bi(a,1-c),J.bi(b,c)))},
p4:function(a,b,c,d){return d.a(J.fs(J.bi(a,1-c),J.bi(b,c)))},
n6:function(a,b,c){if(c>=1)return new S.B(b-1,1,t.d7)
if(c<=0)return new S.B(a,0,t.d7)
return new S.B(J.pM(B.fo(a,b,c,t.W)),C.f.Z((b-a)*c,1),t.d7)},
n2:function(a){return new B.lS(a,a.length-1)},
mi:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=H.a([],t.l)
for(r=B.D(J.K(a.a),0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p){if(a.gm(a)===0)H.c(H.ah())
s.push(a.j(0,a.gm(a)-1))}return s}s=t.l
r=H.a([],s)
for(q=a.a,o=J.X(q),n=B.D(o.gm(q),0,1),m=n.length,l=a.$ti,k=l.h("w.E"),l=l.h("aC<w.E>"),p=0;p<n.length;n.length===m||(0,H.e)(n),++p){j=H.Z(n[p])
i=new H.aC(a,j,null,l)
i.c9(a,j,null,k)
r.push(B.n2(i.aw(0)).$1(b))}h=(c-b)/(1-b)
s=H.a([],s)
for(q=B.D(o.gm(q),0,1),o=q.length,n=t.V,m=t.mN,p=0;p<q.length;q.length===o||(0,H.e)(q),++p){g=q[p]
if(typeof g!=="number")return g.K()
l=H.Z(g+1)
P.aL(0,l,r.length)
k=new H.aC(r,0,l,m)
k.c9(r,0,l,n)
s.push(B.n2(k.aw(0)).$1(h))}return s},
tx:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=a5.length-1
if(a4<1){s=t.l
return new S.B(H.a([C.e],s),H.a([C.e],s),t.dI)}s=2*a4
r=t.o
q=S.bj(0,new S.B(4,s,r))
p=new B.m6(a4,q)
p.$4$start$step(-1,0,1,2)
p.$4$start$step(1,0,2,2)
p.$4$start$step(2,1,0,2)
p.$4$start$step(1,1,1,2)
p.$5$end$start$step(-2,2,s-2,1,2)
p.$5$end$start$step(1,3,s-3,0,2)
q.aC(new S.B(2,-2,r),-1)
q.aC(new S.B(1,-1,r),2)
o=S.bj(0,new S.B(s,3,r))
n=t.V
m=B.bH(a5,n)
for(l=B.cW(B.D(s,1,2),t.S),k=l.length,j=0;j<l.length;l.length===k||(0,H.e)(l),++j){i=l[j]
for(h=B.D(3,0,1),g=h.length,f=i.b,e=i.a,d=0;d<h.length;h.length===g||(0,H.e)(h),++d){c=h[d]
o.aC(new S.B(f,c,r),2*C.a.j(m,e).c7(c))}}for(l=B.D(3,0,1),k=l.length,j=0;j<l.length;l.length===k||(0,H.e)(l),++j){c=l[j]
o.aC(new S.B(0,c,r),C.a.gah(a5).c7(c))}for(l=B.D(3,0,1),k=l.length,h=s-1,j=0;j<l.length;l.length===k||(0,H.e)(l),++j){c=l[j]
o.aC(new S.B(h,c,r),C.a.gt(a5).c7(c))}l=J.pG(C.a.gah(a5),C.a.gt(a5)).bj()
b=S.bj(0,new S.B(s,3,r))
if(l<=1e-12){a=B.tp(new S.B(2,1,r),q)
for(s=t.t,s=new A.ai(H.a([H.a([0,1,-2,-1],s),H.a([2,-1,1,-2],s)],t.fC),t.lb),s=s.gH(s);s.n();){a0=s.b
if(a0==null)a0=H.c(P.am("No element"))
l=a.b
k=(l==null?H.c(H.f("shape")):l).a
if(typeof k!=="number")return H.bh(k)
c=C.d.Z(-1,k)
k=a0.length
if(0>=k)return H.b(a0,0)
h=a0[0]
l=l.b
if(typeof h!=="number")return h.Z()
if(typeof l!=="number")return H.bh(l)
a1=C.f.Z(h,l)
if(1>=k)return H.b(a0,1)
a.aC(new S.B(c,a1,r),a0[1])}s=t.n
r=H.a([],s)
for(l=B.D(a.gaa(a).b,0,1),k=l.length,j=0;j<l.length;l.length===k||(0,H.e)(l),++j){a0=l[j]
h=J.bs(a0)
if(!h.Y(a0,0)){g=a.b
g=(g==null?H.c(H.f("shape")):g).b
if(typeof g!=="number")return g.L()
g=h.Y(a0,g-1)
h=g}else h=!0
if(h)r.push(1)
else r.push(0)}r=H.a([r],t.b)
C.a.R(r,B.bH(a.gak(a),t.H))
a.siq(t.jj.a(r))
r=o.gak(o)
if(0>=a5.length)return H.b(a5,0)
l=J.bi(a5[0],2)
C.a.sah(r,H.a([l.a,l.b,l.c],s))
C.a.st(o.gak(o),H.a([0,0,0],s))
for(s=B.D(3,0,1),r=s.length,j=0;j<s.length;s.length===r||(0,H.e)(s),++j)b.i1(s[j],a.f4().bN(o).ez())}else for(s=B.D(3,0,1),r=s.length,j=0;j<s.length;s.length===r||(0,H.e)(s),++j)b.i1(s[j],q.f4().bN(o).ez())
s=H.a([],t.l)
for(r=b.hV(),l=r.length,j=0;j<r.length;r.length===l||(0,H.e)(r),++j){a2=r[j]
k=a2.length
if(0>=k)return H.b(a2,0)
h=a2[0]
if(1>=k)return H.b(a2,1)
g=a2[1]
if(2>=k)return H.b(a2,2)
s.push(new M.h(h,g,a2[2]))}r=F.dc(s,new B.m4(),n)
a3=P.i(r,!0,r.$ti.h("k.E"))
n=F.dc(s,new B.m5(),n)
return new S.B(a3,P.i(n,!0,n.$ti.h("k.E")),t.dI)},
tp:function(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=a8.b,a6=t.o,a7=S.bj(0,new S.B(3,3,a6))
for(s=B.D(a8.a+a5+1,0,1),r=s.length,q=t.jj,p=t.n,o=t.b,n=0;n<s.length;s.length===r||(0,H.e)(s),++n){m=s[n]
l=a7.hV()
if(typeof m!=="number")return m.L()
k=H.Z(Math.max(0,m-a5))
j=H.x(l)
i=j.h("aC<1>")
h=new H.aC(l,k,null,i)
h.c9(l,k,null,j.c)
j=i.h("J<C.E,l<q>>")
g=S.aA(null,P.i(new H.J(h,i.h("l<q>(C.E)").a(new B.lW(a5,m)),j),!0,j.h("C.E")))
H.Z(m)
j=a9.a
if(m<0||m>=j.length)return H.b(j,m)
l=j[m]
j=Math.max(0,a5-m)
f=B.ts(g,J.iP(l,j).aw(0))
l=H.a([],o)
i=a7.b
i=B.D((i==null?H.c(H.f("shape")):i).a,0,1)
h=i.length
e=0
for(;e<i.length;i.length===h||(0,H.e)(i),++e){d=i[e]
c=H.a([],p)
b=a7.b
b=B.D((b==null?H.c(H.f("shape")):b).b,0,1)
a=b.length
a0=0
for(;a0<b.length;b.length===a||(0,H.e)(b),++a0){a1=b[a0]
if(typeof d!=="number")return d.cV()
if(d>=k){if(typeof a1!=="number")return a1.cV()
if(a1>=j){a2=d-k
a3=a1-j
a6.a(new S.B(a2,a3,a6))
a4=f.a
if(a2>>>0!==a2||a2>=a4.length)return H.b(a4,a2)
c.push(J.Y(a4[a2],a3))}else{a6.a(new S.B(d,a1,a6))
a2=a7.a
if(d>>>0!==d||d>=a2.length)return H.b(a2,d)
c.push(J.Y(a2[d],a1))}}else{a6.a(new S.B(d,a1,a6))
a2=a7.a
if(d>>>0!==d||d>=a2.length)return H.b(a2,d)
c.push(J.Y(a2[d],a1))}}l.push(c)}a7.siq(q.a(l))}return a7},
ts:function(a,b){return a.bM(0,new B.m_(b))},
mc:function mc(){},
md:function md(){},
me:function me(){},
lS:function lS(a,b){this.a=a
this.b=b},
lR:function lR(){},
m6:function m6(a,b){this.a=a
this.b=b},
m4:function m4(){},
m5:function m5(){},
lW:function lW(a,b){this.a=a
this.b=b},
m_:function m_(a){this.a=a},
cJ:function cJ(){},
p5:function(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
p6:function(a,b){var s=a.length,r=b+2
if(s<r)return!1
if(!B.p5(C.b.M(a,b)))return!1
if(C.b.M(a,b+1)!==58)return!1
if(s===r)return!0
return C.b.M(a,r)===47},
tE:function(a){var s,r,q
if(a.gm(a)===0)return!0
s=a.gah(a)
for(r=H.be(a,1,null,a.$ti.h("C.E")),q=r.$ti,r=new H.M(r,r.gm(r),q.h("M<C.E>")),q=q.h("C.E");r.n();)if(!J.S(q.a(r.d),s))return!1
return!0},
tO:function(a,b,c){var s=C.a.ap(a,null)
if(s<0)throw H.d(P.ab(H.m(a)+" contains no null elements."))
C.a.v(a,s,b)},
ph:function(a,b,c){var s=C.a.ap(a,b)
if(s<0)throw H.d(P.ab(H.m(a)+" contains no elements matching "+b.l(0)+"."))
C.a.v(a,s,null)},
to:function(a,b){var s,r,q
for(s=new H.a8(a),r=t.E,s=new H.M(s,s.gm(s),r.h("M<w.E>")),r=r.h("w.E"),q=0;s.n();)if(r.a(s.d)===b)++q
return q},
m0:function(a,b,c){var s,r,q
if(b.length===0)for(s=0;!0;){r=C.b.aT(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=C.b.ap(a,b)
for(;r!==-1;){q=r===0?0:C.b.eI(a,"\n",r-1)+1
if(c===r-q)return q
r=C.b.aT(a,b,r+1)}return null}},V={jU:function jU(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r="no quirks"
_.z=_.y=_.x=null
_.Q=!0
_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=null},a9:function a9(){},ko:function ko(a){this.a=a},kn:function kn(a){this.a=a},bv:function bv(a,b){this.a=a
this.b=b},fM:function fM(a,b){this.a=a
this.b=b},dP:function dP(a,b){this.a=a
this.b=b},h6:function h6(a,b){this.a=a
this.b=b},fB:function fB(a,b){this.a=a
this.b=b},d5:function d5(a,b){this.c=!1
this.a=a
this.b=b},jY:function jY(a){this.a=a},jX:function jX(a){this.a=a},hS:function hS(a,b){this.a=a
this.b=b},eg:function eg(a,b){this.a=a
this.b=b},d7:function d7(a,b,c){var _=this
_.c=null
_.d=a
_.a=b
_.b=c},jZ:function jZ(){},eb:function eb(a,b){this.a=a
this.b=b},ec:function ec(a,b){this.a=a
this.b=b},cI:function cI(a,b){this.a=a
this.b=b},ee:function ee(a,b){this.a=a
this.b=b},d6:function d6(a,b){this.a=a
this.b=b},ef:function ef(a,b){this.a=a
this.b=b},h7:function h7(a,b){this.a=a
this.b=b},h5:function h5(a,b){this.a=a
this.b=b},fz:function fz(a,b){this.a=a
this.b=b},ed:function ed(a,b){this.a=a
this.b=b},fA:function fA(a,b){this.a=a
this.b=b},fx:function fx(a,b){this.a=a
this.b=b},fy:function fy(a,b){this.a=a
this.b=b},aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
rW:function(a){if(1<=a&&a<=8)return!0
if(14<=a&&a<=31)return!0
if(127<=a&&a<=159)return!0
if(55296<=a&&a<=57343)return!0
if(64976<=a&&a<=65007)return!0
switch(a){case 11:case 65534:case 65535:case 131070:case 131071:case 196606:case 196607:case 262142:case 262143:case 327678:case 327679:case 393214:case 393215:case 458750:case 458751:case 524286:case 524287:case 589822:case 589823:case 655358:case 655359:case 720894:case 720895:case 786430:case 786431:case 851966:case 851967:case 917502:case 917503:case 983038:case 983039:case 1048574:case 1048575:case 1114110:case 1114111:return!0}return!1},
ti:function(a){var s=P.ay("[\t-\r -/:-@[-`{-~]")
if(a==null)return null
return C.cM.j(0,H.bt(a,s,"").toLowerCase())},
rN:function(a,b){switch(a){case"ascii":return new H.a8(C.aS.eh(0,b))
case"utf-8":return new H.a8(C.t.eh(0,b))
default:throw H.d(P.ab("Encoding "+a+" not supported"))}},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=!0
_.d=b
_.f=_.e=null
_.r=c
_.x=null
_.y=d
_.z=0},
b6:function(a,b,c,d,e){var s=t.O,r=a!=null?H.a([a],s):H.a([],s),q=H.a([c],s)
return new V.eO(q,d!=null?H.a([d],s):H.a([],s),e,r,b)},
ci:function(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.I(o);o.n();){r=o.gu()
s.push(new V.N(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.I(s);s.n();){q=s.gu()
r.push(new V.N(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.I(r);r.n();){p=r.gu()
q.push(new V.N(p.a,p.b,p.c,p.d))}r=q}else r=null
return new V.eO(o,s,a.c,r,a.e)},
qU:function(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null
V.b6(a2,0,C.c,a2,0)
s=a3.k3
r=a3.k4
q=V.ci(a3.r1)
p=a3.r2
p=p==null?a2:V.aO(p)
o=a3.rx
o=o==null?a2:V.aO(o)
n=a3.db
n=n==null?a2:J.r(n,new K.a0(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a3.dx
l=l==null?a2:J.r(l,new K.a1(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a3.dy
k=k==null?a2:J.r(k,new K.a2(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a3.x
j=a3.y
i=a3.ged()
h=a3.ch
g=a3.ga0(a3).p()
f=a3.gI(a3)
e=a3.c
if(e===$)e=H.c(H.f("target"))
e=e==null?a2:e.p()
d=H.a([],t.r)
for(c=a3.gO(),b=c.length,a=0;a<c.length;c.length===b||(0,H.e)(c),++a)d.push(c[a].p())
c=a3.ga7()
b=H.a([],t.l)
for(a0=J.I(a3.gw(a3));a0.n();){a1=a0.gu()
b.push(new M.h(a1.a,a1.b,a1.c))}return new V.eP(s,new M.h(r.a,r.b,r.c),q,p,o,k,j,i,a3.Q,h,a3.cx,a3.cy,n,l,m,g,f,e,d,c,b)},
pO:function(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null
V.b6(a2,0,C.c,a2,0)
s=a3.k3
r=a3.k4
q=V.ci(a3.r1)
p=a3.r2
p=p==null?a2:V.aO(p)
o=a3.rx
o=o==null?a2:V.aO(o)
n=a3.db
n=n==null?a2:J.r(n,new K.a0(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a3.dx
l=l==null?a2:J.r(l,new K.a1(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a3.dy
k=k==null?a2:J.r(k,new K.a2(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a3.x
j=a3.y
i=a3.ged()
h=a3.ch
g=a3.ga0(a3).p()
f=a3.gI(a3)
e=a3.c
if(e===$)e=H.c(H.f("target"))
e=e==null?a2:e.p()
d=H.a([],t.r)
for(c=a3.gO(),b=c.length,a=0;a<c.length;c.length===b||(0,H.e)(c),++a)d.push(c[a].p())
c=a3.ga7()
b=H.a([],t.l)
for(a0=J.I(a3.gw(a3));a0.n();){a1=a0.gu()
b.push(new M.h(a1.a,a1.b,a1.c))}return new V.dK(a3.aS,a3.ac,a3.ad,a3.ao,a3.br,s,new M.h(r.a,r.b,r.c),q,p,o,k,j,i,a3.Q,h,a3.cx,a3.cy,n,l,m,g,f,e,d,c,b)},
pP:function(a,b,c){var s=null,r=new V.cA(0,a,1,C.e,9,0.35,C.m,V.b6(s,0,C.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.b0(C.c)
if(a===0)r.fg(H.a([C.z,C.j],t.l))
r.cR(c,b)
return r},
pQ:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
V.b6(a1,0,C.c,a1,0)
s=a2.k3
r=a2.k4
q=V.ci(a2.r1)
p=a2.r2
p=p==null?a1:V.aO(p)
o=a2.rx
o=o==null?a1:V.aO(o)
n=a2.db
n=n==null?a1:J.r(n,new K.a0(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a2.dx
l=l==null?a1:J.r(l,new K.a1(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a2.dy
k=k==null?a1:J.r(k,new K.a2(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a2.x
j=a2.y
i=a2.ch
h=a2.ga0(a2).p()
g=a2.gI(a2)
f=a2.c
if(f===$)f=H.c(H.f("target"))
f=f==null?a1:f.p()
e=H.a([],t.r)
for(d=a2.gO(),c=d.length,b=0;b<d.length;d.length===c||(0,H.e)(d),++b)e.push(d[b].p())
d=a2.ga7()
c=H.a([],t.l)
for(a=J.I(a2.gw(a2));a.n();){a0=a.gu()
c.push(new M.h(a0.a,a0.b,a0.c))}return new V.cA(a2.aS,a2.ac,a2.ad,a2.ao,a2.br,s,new M.h(r.a,r.b,r.c),q,p,o,k,j,a2.z,a2.Q,i,a2.cx,a2.cy,n,l,m,h,g,f,e,d,c)},
nx:function(a,b,c){var s=null,r=new V.d_(0,6.283185307179586,c,a,9,0.35,C.m,V.b6(s,0,C.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.b0(b)
return r},
pW:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
V.b6(a1,0,C.c,a1,0)
s=a2.k3
r=a2.k4
q=V.ci(a2.r1)
p=a2.r2
p=p==null?a1:V.aO(p)
o=a2.rx
o=o==null?a1:V.aO(o)
n=a2.db
n=n==null?a1:J.r(n,new K.a0(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a2.dx
l=l==null?a1:J.r(l,new K.a1(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a2.dy
k=k==null?a1:J.r(k,new K.a2(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a2.x
j=a2.y
i=a2.ch
h=a2.ga0(a2).p()
g=a2.gI(a2)
f=a2.c
if(f===$)f=H.c(H.f("target"))
f=f==null?a1:f.p()
e=H.a([],t.r)
for(d=a2.gO(),c=d.length,b=0;b<d.length;d.length===c||(0,H.e)(d),++b)e.push(d[b].p())
d=a2.ga7()
c=H.a([],t.l)
for(a=J.I(a2.gw(a2));a.n();){a0=a.gu()
c.push(new M.h(a0.a,a0.b,a0.c))}return new V.d_(a2.aS,a2.ac,a2.ad,a2.ao,a2.br,s,new M.h(r.a,r.b,r.c),q,p,o,k,j,!0,a2.Q,i,a2.cx,a2.cy,n,l,m,h,g,f,e,d,c)},
nA:function(a){var s=null,r=new V.dY(0,6.283185307179586,0.08,a,9,0.35,C.m,V.b6(s,0,C.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.b0(C.c)
return r},
nB:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
V.b6(a1,0,C.c,a1,0)
s=a2.k3
r=a2.k4
q=V.ci(a2.r1)
p=a2.r2
p=p==null?a1:V.aO(p)
o=a2.rx
o=o==null?a1:V.aO(o)
n=a2.db
n=n==null?a1:J.r(n,new K.a0(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a2.dx
l=l==null?a1:J.r(l,new K.a1(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a2.dy
k=k==null?a1:J.r(k,new K.a2(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a2.x
j=a2.y
i=a2.ch
h=a2.ga0(a2).p()
g=a2.gI(a2)
f=a2.c
if(f===$)f=H.c(H.f("target"))
f=f==null?a1:f.p()
e=H.a([],t.r)
for(d=a2.gO(),c=d.length,b=0;b<d.length;d.length===c||(0,H.e)(d),++b)e.push(d[b].p())
d=a2.ga7()
c=H.a([],t.l)
for(a=J.I(a2.gw(a2));a.n();){a0=a.gu()
c.push(new M.h(a0.a,a0.b,a0.c))}return new V.dY(a2.aS,a2.ac,a2.ad,a2.ao,a2.br,s,new M.h(r.a,r.b,r.c),q,p,o,k,j,!0,a2.Q,i,a2.cx,a2.cy,n,l,m,h,g,f,e,d,c)},
q3:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
V.b6(a1,0,C.c,a1,0)
s=a2.k3
r=a2.k4
q=V.ci(a2.r1)
p=a2.r2
p=p==null?a1:V.aO(p)
o=a2.rx
o=o==null?a1:V.aO(o)
n=a2.db
n=n==null?a1:J.r(n,new K.a0(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a2.dx
l=l==null?a1:J.r(l,new K.a1(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a2.dy
k=k==null?a1:J.r(k,new K.a2(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a2.x
j=a2.y
i=a2.ch
h=a2.ga0(a2).p()
g=a2.gI(a2)
f=a2.c
if(f===$)f=H.c(H.f("target"))
f=f==null?a1:f.p()
e=H.a([],t.r)
for(d=a2.gO(),c=d.length,b=0;b<d.length;d.length===c||(0,H.e)(d),++b)e.push(d[b].p())
d=a2.ga7()
c=H.a([],t.l)
for(a=J.I(a2.gw(a2));a.n();){a0=a.gu()
c.push(new M.h(a0.a,a0.b,a0.c))}return new V.e0(a2.aS,a2.ac,a2.ad,a2.ao,a2.br,s,new M.h(r.a,r.b,r.c),q,p,o,k,j,!0,a2.Q,i,a2.cx,a2.cy,n,l,m,h,g,f,e,d,c)},
mu:function(a,b,c){var s=null,r=new V.ax(0,s,c,b,0.35,C.m,V.b6(s,0,C.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.b0(a)
return r},
nG:function(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=a4.ad,a3=a4.ao
V.b6(a1,0,C.c,a1,0)
s=a4.k3
r=a4.k4
q=V.ci(a4.r1)
p=a4.r2
p=p==null?a1:V.aO(p)
o=a4.rx
o=o==null?a1:V.aO(o)
n=a4.db
n=n==null?a1:J.r(n,new K.a0(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a4.dx
l=l==null?a1:J.r(l,new K.a1(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a4.dy
k=k==null?a1:J.r(k,new K.a2(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a4.x
j=a4.y
i=a4.ch
h=a4.ga0(a4).p()
g=a4.gI(a4)
f=a4.c
if(f===$)f=H.c(H.f("target"))
f=f==null?a1:f.p()
e=H.a([],t.r)
for(d=a4.gO(),c=d.length,b=0;b<d.length;d.length===c||(0,H.e)(d),++b)e.push(d[b].p())
d=a4.ga7()
c=H.a([],t.l)
for(a=J.I(a4.gw(a4));a.n();){a0=a.gu()
c.push(new M.h(a0.a,a0.b,a0.c))}return new V.ax(a4.aS,a4.ac,a2,a3,s,new M.h(r.a,r.b,r.c),q,p,o,k,j,a4.z,a4.Q,i,a4.cx,a4.cy,n,l,m,h,g,f,e,d,c)},
qr:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.r(d,new K.a0(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.i(d,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.gaJ()
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new V.ez(q,p,a.z,a.Q,o,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
qB:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.r(d,new K.a0(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.i(d,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.gaJ()
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new V.eB(q,p,a.z,a.Q,o,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
qX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.r(d,new K.a0(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.i(d,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.gaJ()
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new V.eR(q,p,a.z,a.Q,o,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
aO:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.r(d,new K.a0(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.i(d,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.ci
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new V.dL(q,p,a.z,a.Q,o,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
qz:function(a,b,c){var s=null,r=H.a([C.A,C.M,C.y,C.N],t.l),q=new V.dp(4,0,!1,0.01,!1,0.000001,4,s,s,s,a,s,s,s,s,s)
q.am(a,s,s)
q.dU(r,a)
q.fq(a,b,c)
return q},
qA:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.r(d,new K.a0(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.i(d,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new V.dp(q,p,a.z,a.Q,o,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
qC:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.r(d,new K.a0(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.i(d,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new V.eC(q,p,a.z,a.Q,o,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hV:function hV(a){this.b=a},
eP:function eP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
_.k3=a
_.k4=b
_.r1=c
_.r2=d
_.rx=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.ch=j
_.cx=k
_.cy=l
_.db=m
_.dx=n
_.dy=o
_.a=p
_.b=q
_.c=r
_.d=s
_.e=null
_.f=a0
_.r=a1},
dK:function dK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.aS=a
_.ac=b
_.ad=c
_.ao=d
_.br=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
cA:function cA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.aS=a
_.ac=b
_.ad=c
_.ao=d
_.br=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
d_:function d_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.aS=a
_.ac=b
_.ad=c
_.ao=d
_.br=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
dY:function dY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.aS=a
_.ac=b
_.ad=c
_.ao=d
_.br=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
e0:function e0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.aS=a
_.ac=b
_.ad=c
_.ao=d
_.br=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
ax:function ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){var _=this
_.aS=a
_.ac=b
_.ad=c
_.ao=d
_.k3=e
_.k4=f
_.r1=g
_.r2=h
_.rx=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.ch=n
_.cx=o
_.cy=p
_.db=q
_.dx=r
_.dy=s
_.a=a0
_.b=a1
_.c=a2
_.d=a3
_.e=null
_.f=a4
_.r=a5},
ez:function ez(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
eB:function eB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
eR:function eR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
dL:function dL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.ci=0
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
dp:function dp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
eC:function eC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
rL:function(a){var s,r,q,p,o,n,m,l,k,j,i
if(C.b.a2(a,"#"))a=C.b.ky(a,"#","")
s=a.length
if(!C.a.F(H.a([3,4,6,8],t.t),s))throw H.d("Hex string #"+a+" not well formated")
if(s===3||s===4){s=t.s
r=H.a([],s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
C.a.R(r,H.a([n,n],s))}a=C.a.aG(r,"")}if(a.length===6)a+="ff"
m=new V.lH()
l=C.b.B(a,0,2)
k=C.b.B(a,2,4)
j=C.b.B(a,4,6)
i=C.b.B(a,6,8)
return new V.N(m.$1(l),m.$1(k),m.$1(j),m.$1(i))},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lH:function lH(){},
hM:function(a,b,c,d){if(a<0)H.c(P.aI("Offset may not be negative, was "+a+"."))
else if(c<0)H.c(P.aI("Line may not be negative, was "+c+"."))
else if(b<0)H.c(P.aI("Column may not be negative, was "+b+"."))
return new V.bz(d,a,c,b)},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hO:function hO(){}},Z={fU:function fU(a){this.a=a},ic:function ic(){},fv:function fv(){},iQ:function iQ(a){this.a=a},iR:function iR(a){this.a=a},iS:function iS(a){this.a=a},fN:function fN(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.f=0
_.r=c
_.x=!1
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.b=_.a=null},dJ:function dJ(){}},K={jl:function jl(a){this.a=a
this.b=-1},jc:function jc(a){this.a=a},
qE:function(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a0.r2,c=a0.gbs(a0),b=a0.r1,a=a0.db
a=a==null?e:J.r(a,new K.a0(),t.G)
if(a==null)a=H.a([],t.O)
s=t.G
a=P.i(a,!0,s)
r=a0.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a0.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a0.x
p=a0.y
o=a0.ch
n=a0.ga0(a0).p()
m=a0.gI(a0)
l=a0.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a0.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a0.ga7()
i=H.a([],t.l)
for(g=J.I(a0.gw(a0));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new K.cd(!0,c,b,d,!0,P.bn(t.N,t.h),q,p,a0.z,a0.Q,o,a0.cx,a0.cy,a,r,s,n,m,l,k,j,i)},
tU:function(a){var s,r,q,p,o
a=H.bt(a,"\n",",")
a=H.bt(a,"-",",-")
a=H.bt(a,"e,-","e-")
s=H.a([],t.n)
for(r=C.b.cz(a,P.ay("[ ,]")),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p){o=r[p]
if(J.K(o)!==0)s.push(P.bS(o))}return s},
p2:function(a,b,c){var s,r,q,p,o,n,m,l,k=H.a([],c.h("A<l<0>>"))
for(s=B.D(C.d.b6(a.length,b),0,1),r=s.length,q=H.x(a),p=q.c,q=q.h("aC<1>"),o=0;o<s.length;s.length===r||(0,H.e)(s),++o){n=s[o]
if(typeof n!=="number")return n.A()
m=H.Z(n*b)
l=new H.aC(a,m,null,q)
l.c9(a,m,null,p)
k.push(l.qb(0,b).aw(0))}return k},
pn:function(a,b,c,d){var s=a*d-b*c<0?-1:1
return s*Math.acos(Math.min(1,Math.max((a*c+b*d)/(Math.sqrt(a*a+b*b)*Math.sqrt(c*c+d*d)),-1)))},
tr:function(d4,d5,d6,d7,d8,d9,e0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=d4.a,d1=d4.b,d2=e0.a,d3=e0.b
if(d5===0||d6===0)return H.a([d4,e0,e0],t.l)
d7*=0.017453292519943295
d8=d8!==0?1:0
d9=d9!==0?1:0
s=Math.cos(d7)
r=Math.sin(d7)
q=(d0-d2)/2
p=(d1-d3)/2
o=q*s+p*r
n=-q*r+p*s
m=Math.abs(d5)
l=Math.abs(d6)
k=o*o
j=n*n
i=k/(m*m)+j/(l*l)
if(i>1){h=Math.sqrt(i)
m*=h
l*=h}g=[m,l]
m=g[0]
l=g[1]
f=m*m
e=l*l
j=f*j
k=e*k
d=Math.sqrt(Math.max((f*e-j-k)/(j+k),0))
k=(d8===d9?-1:1)*d
c=k*(m*n)/l
b=k*(-l*o)/m
q=(o-c)/m
p=(n-b)/l
a=K.pn(1,0,q,p)
a0=C.f.Z(K.pn(q,p,(-o-c)/m,(-n-b)/l)/1,360)
if(d9===0&&a0>0)a0-=360
else if(d9===1&&a0<0)a0+=360
a1=[c*s-b*r+(d0+d2)/2,c*r+b*s+(d1+d3)/2,a,a0*0.017453292519943295]
a2=a1[0]
a3=a1[1]
a=a1[2]
a0=a1[3]
k=a0/0.017453292519943295
a4=C.f.fY(Math.abs(k/(C.f.Z(k,90)===0?90:36)))
a5=a0/a4
s=Math.cos(d7)
r=Math.sin(d7)
a6=Math.sin(a5)*(Math.sqrt(4+3*Math.pow(Math.tan(a5/2),2))-1)/3
k=t.l
a7=H.a([],k)
for(j=B.D(a4,0,1),a8=j.length,a9=-d5,b0=a9*s,b1=d6*r,a9*=r,b2=d6*s,b3=a4-1,b4=d5*s,b5=d5*r,b6=d1,b7=d0,b8=a,b9=0;b9<j.length;j.length===a8||(0,H.e)(j),++b9,b6=c8,b7=c9,b8=c1){c0=j[b9]
c1=b8+a5
c2=Math.cos(b8)
c3=Math.sin(b8)
c4=Math.cos(c1)
c5=Math.sin(c1)
c6=a2+b4*c4-b1*c5
c7=a3+b5*c4+b2*c5
if(J.S(c0,b3)){c8=d3
c9=d2}else{c8=c7
c9=c6}C.a.R(a7,H.a([new M.h(b7+a6*(b0*c3-b1*c2),b6+a6*(a9*c3+b2*c2),0),new M.h(c9-a6*(b0*c5-b1*c4),c8-a6*(a9*c5+b2*c4),0),new M.h(c9,c8,0)],k))}return a7},
qF:function(a){var s=null,r=new K.dq(a,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
return r},
qG:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.r(d,new K.a0(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.i(d,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new K.dq(a.k3,a.k4,q,p,a.z,a.Q,o,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
cd:function cd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
_.k3=a
_.k4=b
_.r1=c
_.r2=d
_.rx=e
_.ry=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m
_.db=n
_.dx=o
_.dy=p
_.a=q
_.b=r
_.c=s
_.d=a0
_.e=null
_.f=a1
_.r=a2},
ks:function ks(){},
dq:function dq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.k3=a
_.k4=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.cy=i
_.db=j
_.dx=k
_.dy=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
ku:function ku(){},
kt:function kt(){},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
r3:function(a){var s=null,r=new K.P(4,0,!1,0.01,!1,0.000001,4,s,s,s,a,s,s,s,s,s)
r.am(a,s,s)
return r},
r4:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a.db
c=c==null?d:J.r(c,new K.a0(),t.G)
if(c==null)c=H.a([],t.O)
s=t.G
c=P.i(c,!0,s)
r=a.dx
r=r==null?d:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?d:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.gaJ()
p=a.y
o=a.ged()
n=a.ch
m=a.ga0(a).p()
l=a.gI(a)
k=a.c
if(k===$)k=H.c(H.f("target"))
k=k==null?d:k.p()
j=H.a([],t.r)
for(i=a.gO(),h=i.length,g=0;g<i.length;i.length===h||(0,H.e)(i),++g)j.push(i[g].p())
i=a.ga7()
h=H.a([],t.l)
for(f=J.I(a.gw(a));f.n();){e=f.gu()
h.push(new M.h(e.a,e.b,e.c))}return new K.P(q,p,o,a.Q,n,a.cx,a.cy,c,r,s,m,l,k,j,i,h)},
o5:function(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.I(o);o.n();){r=o.gu()
s.push(new V.N(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.I(s);s.n();){q=s.gu()
r.push(new V.N(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.I(r);r.n();){p=r.gu()
q.push(new V.N(p.a,p.b,p.c,p.d))}r=q}else r=null
return new K.ck(o,s,a.c,r,a.e)},
i3:function(a){var s=null,r=new K.c3(4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.fs(a)
return r},
r2:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.r(d,new K.a0(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.i(d,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new K.c3(q,p,a.z,a.Q,o,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
o6:function(a){var s=null,r=new K.eU(0.01,0.01,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.saL(t.y.a(H.a([a],t.l)))
return r},
r5:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.r(d,new K.a0(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.i(d,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new K.eU(a.k3,a.k4,q,p,a.z,a.Q,o,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
q1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.r(d,new K.a0(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.i(d,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new K.dU(q,p,a.z,a.Q,o,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
P:function P(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
a0:function a0(){},
a1:function a1(){},
a2:function a2(){},
l1:function l1(){},
l2:function l2(){},
kV:function kV(a){this.a=a},
kW:function kW(a,b){this.a=a
this.b=b},
kZ:function kZ(a,b){this.a=a
this.b=b},
kY:function kY(a,b){this.a=a
this.b=b},
kR:function kR(a,b){this.a=a
this.b=b},
kX:function kX(){},
kU:function kU(a){this.a=a},
kS:function kS(){},
kT:function kT(){},
l0:function l0(){},
l_:function l_(){},
ck:function ck(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c3:function c3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
eU:function eU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.k3=a
_.k4=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.cy=i
_.db=j
_.dx=k
_.dy=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
dU:function dU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p}},T={
aM:function(a,b,c,d){return new T.cg(b==null?P.a4(t.K,t.N):b,c,a,d)},
b7:function b7(){},
c_:function c_(){},
cg:function cg(a,b,c,d){var _=this
_.e=a
_.r=!1
_.x=b
_.b=c
_.c=d
_.a=null},
L:function L(a,b){this.b=a
this.c=b
this.a=null},
bd:function bd(){},
n:function n(a,b,c){var _=this
_.e=a
_.b=b
_.c=c
_.a=null},
G:function G(a,b){this.b=a
this.c=b
this.a=null},
cQ:function cQ(a,b){this.b=a
this.c=b
this.a=null},
d0:function d0(a,b){this.b=a
this.c=b
this.a=null},
dV:function dV(a){var _=this
_.c=_.b=null
_.d=""
_.e=a
_.a=null},
eM:function eM(){var _=this
_.d=_.c=_.b=_.a=null},
j7:function j7(a){this.c=a
this.d=8
this.r=null},
j8:function j8(){},
j9:function j9(){}},Y={lZ:function lZ(){},lY:function lY(){},ea:function ea(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=null
_.r=e
_.y=_.x=null
_.z=f
_.cy=_.cx=_.ch=_.Q=null
_.db=g
_.dx=h},jV:function jV(a){this.a=a},jW:function jW(a){this.a=a},
qp:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=P.i(a.rx,!0,t.W),c=a.db
c=c==null?e:J.r(c,new K.a0(),t.G)
if(c==null)c=H.a([],t.O)
s=t.G
c=P.i(c,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new Y.di(a.k3,a.k4,a.r1,a.r2,d,a.ry,q,p,a.z,a.Q,o,a.cx,a.cy,c,r,s,n,m,l,k,j,i)},
q5:function(a,b,c,d,e,f,g){var s=null,r=new Y.e9(d,e,g,f,c,b,new Y.jw(d),4,0,!1,0.01,!1,0.000001,4,s,s,s,a,s,s,s,s,s)
r.am(a,s,s)
r.cv(C.k)
return r},
mp:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=P.i(a.rx,!0,t.W),c=a.db
c=c==null?e:J.r(c,new K.a0(),t.G)
if(c==null)c=H.a([],t.O)
s=t.G
c=P.i(c,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new Y.e9(a.ac,a.k3,a.k4,a.r1,a.r2,d,a.ry,q,p,a.z,a.Q,o,a.cx,a.cy,c,r,s,n,m,l,k,j,i)},
di:function di(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
_.k3=a
_.k4=b
_.r1=c
_.r2=d
_.rx=e
_.ry=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m
_.db=n
_.dx=o
_.dy=p
_.a=q
_.b=r
_.c=s
_.d=a0
_.e=null
_.f=a1
_.r=a2},
kl:function kl(a){this.a=a},
e9:function e9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
_.ac=a
_.k3=b
_.k4=c
_.r1=d
_.r2=e
_.rx=f
_.ry=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.a=r
_.b=s
_.c=a0
_.d=a1
_.e=null
_.f=a2
_.r=a3},
jw:function jw(a){this.a=a},
qT:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.r(d,new K.a0(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.i(d,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new Y.eN(a.k3,a.k4,q,p,a.z,a.Q,o,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
qI:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.ac,c=a2.ad,b=a2.r2,a=a2.ao,a0=a2.r1,a1=a2.db
a1=a1==null?e:J.r(a1,new K.a0(),t.G)
if(a1==null)a1=H.a([],t.O)
s=t.G
a1=P.i(a1,!0,s)
r=a2.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a2.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a2.x
p=a2.y
o=a2.ch
n=a2.ga0(a2).p()
m=a2.gI(a2)
l=a2.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a2.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a2.ga7()
i=H.a([],t.l)
for(g=J.I(a2.gw(a2));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new Y.bY(d,c,!0,a,a0,b,!0,P.bn(t.N,t.h),q,p,a2.z,a2.Q,o,a2.cx,a2.cy,a1,r,s,n,m,l,k,j,i)},
qJ:function(a){var s,r,q,p,o,n,m,l,k,j="(){}[]|.\\"
if(a==="\\over"||a==="\\overline"||a==="\\sqrt"||a==="\\sqrt{"||C.b.bq(a,"_")||C.b.bq(a,"^")||C.b.bq(a,"dot"))a+="{\\quad}"
if(a==="\\substack")a="\\quad"
if(a.length===0)a="\\quad"
if(C.b.a2(a,"\\\\"))a=H.bt(a,"\\\\","\\quad\\\\")
s=t.s
r=H.a([],s)
for(q=t.N,p=B.bH(H.a(a.split("\\left"),s),q),o=p.length,n=0;n<p.length;p.length===o||(0,H.e)(p),++n){m=p[n]
l=J.X(m)
if(l.gm(m)!==0){l=l.j(m,0)
l=H.cw(j,l,0)}else l=!1
if(l)r.push(m)}k=r.length
r=H.a([],s)
for(s=B.bH(H.a(a.split("\\right"),s),q),q=s.length,n=0;n<s.length;s.length===q||(0,H.e)(s),++n){m=s[n]
p=J.X(m)
if(p.gm(m)!==0){p=p.j(m,0)
p=H.cw(j,p,0)}else p=!1
if(p)r.push(m)}if(k!==r.length){a=H.bt(a,"\\left","\\big")
a=H.bt(a,"\\right","\\big")}return Y.qK(a)},
qK:function(a){var s=a.split("{").length-1-(a.split("\\{").length-1)+(a.split("\\\\{").length-1),r=a.split("}").length-1-(a.split("\\}").length-1)+(a.split("\\\\}").length-1)
for(;r>s;){a="{"+a;++s}for(;s>r;){a+="}";++r}return a},
qj:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=t.N,c=P.i(a5.hh,!0,d),b=P.i(a5.cj,!0,d),a=a5.ac,a0=a5.ad,a1=a5.r2,a2=a5.ao,a3=a5.r1,a4=a5.db
a4=a4==null?e:J.r(a4,new K.a0(),t.G)
if(a4==null)a4=H.a([],t.O)
s=t.G
a4=P.i(a4,!0,s)
r=a5.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a5.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a5.x
p=a5.y
o=a5.ch
n=a5.ga0(a5).p()
m=a5.gI(a5)
l=a5.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a5.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a5.ga7()
i=H.a([],t.l)
for(g=J.I(a5.gw(a5));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new Y.er(a5.b2,c,a5.ci,b,a,a0,!0,a2,a3,a1,!0,P.bn(d,t.h),q,p,a5.z,a5.Q,o,a5.cx,a5.cy,a4,r,s,n,m,l,k,j,i)},
qk:function(a,b,c){var s,r,q,p,o,n,m,l=O.nX(a,P.ay("{{(.*?)}}")),k=t.s,j=H.a([],k)
for(s=P.i(c.gaO(),!0,t.N),C.a.R(s,b),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)j.push("("+H.nb(s[q])+")")
p=C.a.aG(j,"|")
o=H.a([],k)
if(p.length!==0){n=P.ay(p)
for(j=l.length,q=0;q<l.length;l.length===j||(0,H.e)(l),++q)C.a.R(o,O.nX(l[q],n))}else o=l
k=H.a([],k)
for(j=o.length,q=0;q<o.length;o.length===j||(0,H.e)(o),++q){m=o[q]
if(J.K(m)!==0)k.push(m)}return k},
eN:function eN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.k3=a
_.k4=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.cy=i
_.db=j
_.dx=k
_.dy=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
bY:function bY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.ac=a
_.ad=b
_.ao=null
_.k3=c
_.k4=d
_.r1=e
_.r2=f
_.rx=g
_.ry=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.ch=m
_.cx=n
_.cy=o
_.db=p
_.dx=q
_.dy=r
_.a=s
_.b=a0
_.c=a1
_.d=a2
_.e=null
_.f=a3
_.r=a4},
er:function er(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.b2=a
_.hh=b
_.ci=c
_.cj=d
_.ac=e
_.ad=f
_.ao=null
_.k3=g
_.k4=h
_.r1=i
_.r2=j
_.rx=k
_.ry=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.ch=q
_.cx=r
_.cy=s
_.db=a0
_.dx=a1
_.dy=a2
_.a=a3
_.b=a4
_.c=a5
_.d=a6
_.e=null
_.f=a7
_.r=a8},
k7:function k7(a,b){this.a=a
this.b=b},
ql:function(a){var s,r,q,p,o,n,m=a.ga0(a).p(),l=a.gI(a),k=a.c
if(k===$)k=H.c(H.f("target"))
k=k==null?null:k.p()
s=H.a([],t.r)
for(r=a.gO(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)s.push(r[p].p())
r=a.ga7()
q=H.a([],t.l)
for(o=J.I(a.gw(a));o.n();){n=o.gu()
q.push(new M.h(n.a,n.b,n.c))}return new Y.F(m,l,k,s,r,q)},
q6:function(a){var s,r,q,p,o,n,m=a.ga0(a).p(),l=a.gI(a),k=a.c
if(k===$)k=H.c(H.f("target"))
k=k==null?null:k.p()
s=H.a([],t.r)
for(r=a.gO(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)s.push(r[p].p())
r=a.ga7()
q=H.a([],t.l)
for(o=J.I(a.gw(a));o.n();){n=o.gu()
q.push(new M.h(n.a,n.b,n.c))}return new Y.d4(m,l,k,s,r,q)},
F:function F(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
kh:function kh(a){this.a=a},
kg:function kg(a){this.a=a},
kf:function kf(a){this.a=a},
ke:function ke(a){this.a=a},
ki:function ki(a,b){this.a=a
this.b=b},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kc:function kc(){},
kb:function kb(){},
kd:function kd(a){this.a=a},
d4:function d4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
bk:function bk(a){this.b=a},
b1:function b1(){},
jm:function jm(){this.a=null},
aK:function aK(a,b,c){this.a=a
this.b=b
this.$ti=c},
hg:function hg(){},
eu:function eu(a,b,c){this.c=a
this.a=b
this.b=c},
bW:function bW(a,b,c){this.c=a
this.a=b
this.b=c},
bX:function bX(a,b,c){this.c=a
this.a=b
this.b=c},
bV:function bV(a,b,c){this.c=a
this.a=b
this.b=c},
et:function et(a){this.a=a},
qN:function(a,b){var s=H.a([0],t.t)
s=new Y.hL(b,s,new Uint32Array(H.mV(J.fu(a))))
s.io(a,b)
return s},
c8:function(a,b){if(b<0)H.c(P.aI("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)H.c(P.aI("Offset "+b+u.D+a.gm(a)+"."))
return new Y.b2(a,b)},
mI:function(a,b,c){if(c<b)H.c(P.ab("End "+c+" must come after start "+b+"."))
else if(c>a.c.length)H.c(P.aI("End "+c+u.D+a.gm(a)+"."))
else if(b<0)H.c(P.aI("Start may not be negative, was "+b+"."))
return new Y.at(a,b,c)},
hL:function hL(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
b2:function b2(a,b){this.a=a
this.b=b},
at:function at(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(){},
ty:function(a,b,c,d){var s,r,q,p,o,n=P.bn(d,c.h("l<0>"))
for(s=c.h("A<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.j(0,p)
if(o==null){o=H.a([],s)
n.v(0,p,o)
p=o}else p=o
C.a.q(p,q)}return n}},D={
t3:function(a,b){var s,r,q
if(a.gm(a)!==b.gm(b))return!1
if(a.gai(a))return!0
for(s=a.gaO(),s=s.gH(s);s.n();){r=s.gu()
q=b.j(0,r)
if(q==null&&!b.as(r))return!1
if(!J.S(a.j(0,r),q))return!1}return!0},
o0:function(a,b,c,d){var s,r,q,p,o=a.gaq(a)
if(d==null)if(!o.gai(o)&&o.gt(o) instanceof B.c0){s=t.oI.a(o.gt(o))
s.jo(0,b)
if(c!=null){r=c.a
q=s.e
s.e=r.fn(0,Y.c8(q.a,q.b).b,Y.c8(r,c.c).b)}}else{r=B.mE(b)
r.e=c
o.q(0,r)}else{p=o.ap(o,d)
if(p>0){r=p-1
q=o.a
if(r>=q.length)return H.b(q,r)
r=q[r] instanceof B.c0}else r=!1
if(r){r=p-1
q=o.a
if(r<0||r>=q.length)return H.b(q,r)
t.oI.a(q[r]).jo(0,b)}else{r=B.mE(b)
r.e=c
o.bK(0,p,r)}}},
fw:function fw(a){this.a=a},
kI:function kI(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.f=_.e=null
_.r=!1},
qS:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=M.nt(a.oL),c=a.db
c=c==null?e:J.r(c,new K.a0(),t.G)
if(c==null)c=H.a([],t.O)
s=t.G
c=P.i(c,!0,s)
r=a.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ch
n=a.ga0(a).p()
m=a.gI(a)
l=a.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a.ga7()
i=H.a([],t.l)
for(g=J.I(a.gw(a));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}return new D.eL(a.oK,d,q,p,a.z,a.Q,o,a.cx,a.cy,c,r,s,n,m,l,k,j,i)},
eL:function eL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.oK=a
_.oL=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.cy=i
_.db=j
_.dx=k
_.dy=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
hN:function hN(){},
oU:function(){var s,r,q,p,o=null
try{o=P.mG()}catch(s){if(t.mA.b(H.aT(s))){r=$.lL
if(r!=null)return r
throw s}else throw s}if(J.S(o,$.oA)){r=$.lL
r.toString
return r}$.oA=o
if($.ne()==$.fr())r=$.lL=o.kB(".").l(0)
else{q=o.hI()
p=q.length-1
r=$.lL=p===0?q:C.b.B(q,0,p)}return r}},M={
mB:function(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5=b0.b2,a6=b0.ev,a7=P.i(b0.k0,!0,t.W),a8=b0.oP,a9=b0.hi
if(a9!=null){s=H.x(a9)
s=P.i(new H.J(a9,s.h("ax(1)").a(new M.kj()),s.h("J<1,ax>")),!0,t.F)
a9=s}else a9=a4
s=b0.dn
if(s!=null){r=H.x(s)
r=P.i(new H.J(s,r.h("ax(1)").a(new M.kk()),r.h("J<1,ax>")),!0,t.F)
s=r}else s=a4
r=b0.ad
q=b0.ao
V.b6(a4,0,C.c,a4,0)
p=b0.k3
o=b0.k4
n=V.ci(b0.r1)
m=b0.r2
m=m==null?a4:V.aO(m)
l=b0.rx
l=l==null?a4:V.aO(l)
k=b0.db
k=k==null?a4:J.r(k,new K.a0(),t.G)
if(k==null)k=H.a([],t.O)
j=t.G
k=P.i(k,!0,j)
i=b0.dx
i=i==null?a4:J.r(i,new K.a1(),j)
i=P.i(i==null?H.a([],t.O):i,!0,j)
h=b0.dy
h=h==null?a4:J.r(h,new K.a2(),j)
j=P.i(h==null?H.a([],t.O):h,!0,j)
h=b0.x
g=b0.y
f=b0.ch
e=b0.ga0(b0).p()
d=b0.gI(b0)
c=b0.c
if(c===$)c=H.c(H.f("target"))
c=c==null?a4:c.p()
b=H.a([],t.r)
for(a=b0.gO(),a0=a.length,a1=0;a1<a.length;a.length===a0||(0,H.e)(a),++a1)b.push(a[a1].p())
a=b0.ga7()
a0=H.a([],t.l)
for(a2=J.I(b0.gw(b0));a2.n();){a3=a2.gu()
a0.push(new M.h(a3.a,a3.b,a3.c))}return new M.dh(b0.dm,a5,b0.hh,b0.ci,b0.cj,b0.k_,a6,a7,!1,b0.oM,b0.k5,b0.oN,b0.oO,new M.h(a8.a,a8.b,a8.c),b0.oQ,b0.k6,b0.oR,b0.oS,b0.oT,b0.oU,a9,s,b0.aS,b0.ac,r,q,p,new M.h(o.a,o.b,o.c),n,m,l,h,g,b0.z,b0.Q,f,b0.cx,b0.cy,k,i,j,e,d,c,b,a,a0)},
ns:function(a,b,c,d,e,f,g,h){var s=null,r=new M.cB(b,a,c,f,e,d,h,g,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.fs(s)
r.il(a,b,c,d,e,f,g,h)
return r},
nt:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a1.en,c=M.dO(a1.eo),b=M.dO(a1.ep),a=M.dO(a1.eq),a0=a1.db
a0=a0==null?e:J.r(a0,new K.a0(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.i(a0,!0,s)
r=a1.dx
r=r==null?e:J.r(r,new K.a1(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a1.dy
q=q==null?e:J.r(q,new K.a2(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.ch
n=a1.ga0(a1).p()
m=a1.gI(a1)
l=a1.c
if(l===$)l=H.c(H.f("target"))
l=l==null?e:l.p()
k=H.a([],t.r)
for(j=a1.gO(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].p())
j=a1.ga7()
i=H.a([],t.l)
for(g=J.I(a1.gw(a1));g.n();){f=g.gu()
i.push(new M.h(f.a,f.b,f.c))}d=new M.cB(new M.h(d.a,d.b,d.c),c,b,a,a1.el,a1.em,a1.hf,a1.hg,q,p,a1.z,a1.Q,o,a1.cx,a1.cy,a0,r,s,n,m,l,k,j,i)
d.im(a1)
return d},
qo:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=C.B.bO(C.P),a4=C.n.bO(C.n),a5=C.a4.bO(C.O),a6=t.b1,a7=H.a([],a6)
for(s=a8.gjr(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)a7.push(s[q].p())
a6=H.a([],a6)
for(s=a8.gjW(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)a6.push(s[q].p())
s=a8.ew
s=s==null?a2:K.o5(s)
r=K.o5(a8.hj)
p=a8.en
o=M.dO(a8.eo)
n=M.dO(a8.ep)
m=M.dO(a8.eq)
l=a8.db
l=l==null?a2:J.r(l,new K.a0(),t.G)
if(l==null)l=H.a([],t.O)
k=t.G
l=P.i(l,!0,k)
j=a8.dx
j=j==null?a2:J.r(j,new K.a1(),k)
j=P.i(j==null?H.a([],t.O):j,!0,k)
i=a8.dy
i=i==null?a2:J.r(i,new K.a2(),k)
k=P.i(i==null?H.a([],t.O):i,!0,k)
i=a8.x
h=a8.y
g=a8.ch
f=a8.ga0(a8).p()
e=a8.gI(a8)
d=a8.c
if(d===$)d=H.c(H.f("target"))
d=d==null?a2:d.p()
c=H.a([],t.r)
for(b=a8.gO(),a=b.length,q=0;q<b.length;b.length===a||(0,H.e)(b),++q)c.push(b[q].p())
b=a8.ga7()
a=H.a([],t.l)
for(a0=J.I(a8.gw(a8));a0.n();){a1=a0.gu()
a.push(new M.h(a1.a,a1.b,a1.c))}a3=new M.ey(a3,a4,a5,r,s,a8.k7,a8.k8,a8.jX,a7,a6,new M.h(p.a,p.b,p.c),o,n,m,a8.el,a8.em,a8.hf,a8.hg,i,h,a8.z,a8.Q,g,a8.cx,a8.cy,l,j,k,f,e,d,c,b,a)
a3.im(a8)
return a3},
cY:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){return new M.aJ(a,f,c,g,a0,e,q,p,h,n,d,m,j,k,l,i,s,r,b,o)},
dO:function(a){return new M.aJ(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.x,a.y,a.z,a.Q,a.ch,a.cx,a.cy,a.db,a.dx,a.dy,a.fr,a.fx,a.fy)},
dh:function dh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var _=this
_.dm=a
_.b2=b
_.hh=c
_.ci=d
_.cj=e
_.k_=f
_.ev=g
_.k0=h
_.qy=i
_.oM=j
_.k5=k
_.oN=l
_.oO=m
_.oP=n
_.oQ=o
_.k6=p
_.oR=q
_.oS=r
_.oT=s
_.oU=a0
_.hi=a1
_.dn=a2
_.aS=a3
_.ac=a4
_.ad=a5
_.ao=a6
_.k3=a7
_.k4=a8
_.r1=a9
_.r2=b0
_.rx=b1
_.x=b2
_.y=b3
_.z=b4
_.Q=b5
_.ch=b6
_.cx=b7
_.cy=b8
_.db=b9
_.dx=c0
_.dy=c1
_.a=c2
_.b=c3
_.c=c4
_.d=c5
_.e=null
_.f=c6
_.r=c7},
kj:function kj(){},
kk:function kk(){},
fS:function fS(){},
jg:function jg(a){this.a=a},
cB:function cB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.en=a
_.eo=b
_.ep=c
_.eq=d
_.eu=_.es=_.er=null
_.el=e
_.em=f
_.hf=g
_.hg=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.ch=m
_.cx=n
_.cy=o
_.db=p
_.dx=q
_.dy=r
_.a=s
_.b=a0
_.c=a1
_.d=a2
_.e=null
_.f=a3
_.r=a4},
j5:function j5(){},
ey:function ey(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
_.dn=a
_.oV=b
_.oW=c
_.hj=d
_.ew=e
_.k7=f
_.k8=g
_.jX=h
_.jY=i
_.jZ=j
_.en=k
_.eo=l
_.ep=m
_.eq=n
_.eu=_.es=_.er=null
_.el=o
_.em=p
_.hf=q
_.hg=r
_.x=s
_.y=a0
_.z=a1
_.Q=a2
_.ch=a3
_.cx=a4
_.cy=a5
_.db=a6
_.dx=a7
_.dy=a8
_.a=a9
_.b=b0
_.c=b1
_.d=b2
_.e=null
_.f=b3
_.r=b4},
aJ:function aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r
_.fx=s
_.fy=a0},
h:function h(a,b,c){this.a=a
this.b=b
this.c=c},
l4:function l4(a){this.a=a},
l5:function l5(){},
l3:function l3(){},
oG:function(a){if(t.jJ.b(a))return a
throw H.d(P.nr(a,"uri","Value must be a String or a Uri"))},
oM:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new P.a5("")
o=""+(a+"(")
p.a=o
n=H.x(b)
m=n.h("aC<1>")
l=new H.aC(b,0,s,m)
l.c9(b,0,s,n.c)
m=o+new H.J(l,m.h("o(C.E)").a(new M.lP()),m.h("J<C.E,o>")).aG(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw H.d(P.ab(p.l(0)))}},
jd:function jd(a){this.a=a},
je:function je(){},
jf:function jf(){},
lP:function lP(){},
p8:function(a,b,c){H.aP(a)
H.fi(b)
H.fi(c)
return a},
pj:function(a,b,c){var s
H.aP(a)
H.fi(b)
H.fi(c)
if(b==null)b=10
s=1/(1+Math.exp(-(-b/2)))
return Math.min(1,Math.max((1/(1+Math.exp(-(b*(a-0.5))))-s)/(1-2*s),0))}},U={
q2:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.dx
if(f==null)f=H.c(H.f("draggedListener"))
s=a.dy
if(s==null)s=H.c(H.f("pressedListener"))
r=a.fr
if(r==null)r=H.c(H.f("releasedListener"))
q=a.fx
p=V.nB(a.x)
o=a.ga0(a).p()
n=a.gI(a)
m=a.c
if(m===$)m=H.c(H.f("target"))
m=m==null?null:m.p()
l=H.a([],t.r)
for(k=a.gO(),j=k.length,i=0;i<k.length;k.length===j||(0,H.e)(k),++i)l.push(k[i].p())
k=a.ga7()
j=H.a([],t.l)
for(h=J.I(a.gw(a));h.n();){g=h.gu()
j.push(new M.h(g.a,g.b,g.c))}return new U.dZ(f,s,r,q,p,o,n,m,l,k,j)},
hb:function hb(){},
dZ:function dZ(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.dx=a
_.dy=b
_.fr=c
_.fx=d
_.x=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=null
_.f=j
_.r=k},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
q7:function(a,b){var s=U.q8(H.a([U.ra(a,!0)],t.pg)),r=new U.jR(b).$0(),q=C.d.l(C.a.gt(s).b+1),p=U.q9(s)?0:3,o=H.x(s)
return new U.jx(s,r,null,1+Math.max(q.length,p),new H.J(s,o.h("j(1)").a(new U.jz()),o.h("J<1,j>")).aZ(0,C.a5),!B.tE(new H.J(s,o.h("Q?(1)").a(new U.jA()),o.h("J<1,Q?>"))),new P.a5(""))},
q9:function(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.S(r.c,q.c))return!1}return!0},
q8:function(a){var s,r,q,p=Y.ty(a,new U.jC(),t.C,t.ot)
for(s=p.gak(p),s=s.gH(s);s.n();)J.np(s.gu(),new U.jD())
s=p.gak(p)
r=H.H(s)
q=r.h("e4<k.E,bf>")
return P.i(new H.e4(s,r.h("k<bf>(k.E)").a(new U.jE()),q),!0,q.h("k.E"))},
ra:function(a,b){return new U.aD(new U.lr(a).$0(),!0)},
rc:function(a){var s,r,q,p,o,n,m=a.ga_(a)
if(!C.b.F(m,"\r\n"))return a
s=a.gX()
r=s.gaB(s)
for(s=m.length-1,q=0;q<s;++q)if(C.b.E(m,q)===13&&C.b.E(m,q+1)===10)--r
s=a.gV(a)
p=a.ga1()
o=a.gX().gaj()
p=V.hM(r,a.gX().gar(),o,p)
o=H.bt(m,"\r\n","\n")
n=a.gb1()
return X.kA(s,p,o,H.bt(n,"\r\n","\n"))},
rd:function(a){var s,r,q,p,o,n,m
if(!C.b.bq(a.gb1(),"\n"))return a
if(C.b.bq(a.ga_(a),"\n\n"))return a
s=C.b.B(a.gb1(),0,a.gb1().length-1)
r=a.ga_(a)
q=a.gV(a)
p=a.gX()
if(C.b.bq(a.ga_(a),"\n")){o=B.m0(a.gb1(),a.ga_(a),a.gV(a).gar())
o.toString
o=o+a.gV(a).gar()+a.gm(a)===a.gb1().length}else o=!1
if(o){r=C.b.B(a.ga_(a),0,a.ga_(a).length-1)
if(r.length===0)p=q
else{o=a.gX()
o=o.gaB(o)
n=a.ga1()
m=a.gX().gaj()
p=V.hM(o-1,U.oa(s),m-1,n)
o=a.gV(a)
o=o.gaB(o)
n=a.gX()
q=o===n.gaB(n)?p:a.gV(a)}}return X.kA(q,p,r,s)},
rb:function(a){var s,r,q,p,o
if(a.gX().gar()!==0)return a
if(a.gX().gaj()===a.gV(a).gaj())return a
s=C.b.B(a.ga_(a),0,a.ga_(a).length-1)
r=a.gV(a)
q=a.gX()
q=q.gaB(q)
p=a.ga1()
o=a.gX().gaj()
p=V.hM(q-1,s.length-C.b.hq(s,"\n")-1,o-1,p)
return X.kA(r,p,s,C.b.bq(a.gb1(),"\n")?C.b.B(a.gb1(),0,a.gb1().length-1):a.gb1())},
oa:function(a){var s=a.length
if(s===0)return 0
else if(C.b.M(a,s-1)===10)return s===1?0:s-C.b.eI(a,"\n",s-2)-1
else return s-C.b.hq(a,"\n")-1},
jx:function jx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jR:function jR(a){this.a=a},
jz:function jz(){},
jy:function jy(){},
jA:function jA(){},
jC:function jC(){},
jD:function jD(){},
jE:function jE(){},
jB:function jB(a){this.a=a},
jS:function jS(){},
jF:function jF(a){this.a=a},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a,b){this.a=a
this.b=b},
jO:function jO(a){this.a=a},
jP:function jP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jK:function jK(a,b){this.a=a
this.b=b},
jL:function jL(a,b){this.a=a
this.b=b},
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jH:function jH(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b){this.a=a
this.b=b},
lr:function lr(a){this.a=a},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tR:function(a,b,c){var s,r,q,p,o,n,m=t.y
m.a(a)
m.a(b)
s=B.fo(S.iT(a),S.iT(b),c,t.A)
m=H.a([],t.l)
for(r=s.gak(s),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p){o=r[p]
n=J.X(o)
m.push(new M.h(n.j(o,0),n.j(o,1),n.j(o,2)))}return m}},O={
nX:function(a,b){var s,r,q,p,o,n,m,l,k,j,i=C.b.cz(a,b),h=b.cd(0,a),g=P.i(h,!0,H.H(h).h("k.E"))
h=i.length
s=g.length
r=H.a([],t.s)
for(h=B.D(h+s,0,1),s=h.length,q=t.N,p=0;p<h.length;h.length===s||(0,H.e)(h),++p){o=h[p]
if(typeof o!=="number")return o.Z()
if(C.f.Z(o,2)===0){n=C.f.aX(o,2)
if(n<0||n>=i.length)return H.b(i,n)
C.a.q(r,i[n])}else{n=C.f.aX(o-1,2)
if(n<0||n>=g.length)return H.b(g,n)
m=g[n]
l=m.hX(B.D(m.ghW()+1,1,1))
k=H.x(l)
j=k.h("an<1>")
j=H.jb(new H.an(l,k.h("E(1)").a(new O.kE()),j),j.h("k.E"),q)
C.a.R(r,P.i(j,!0,H.H(j).h("k.E")))}}return r},
kE:function kE(){},
qR:function(){var s,r,q,p,o,n,m,l,k,j=null
if(P.mG().gaV()!=="file")return $.fr()
s=P.mG()
if(!C.b.bq(s.gaU(s),"/"))return $.fr()
r=P.ot(j,0,0)
q=P.oq(j,0,0,!1)
p=P.os(j,0,0,j)
o=P.op(j,0,0)
n=P.mR(j,"")
if(q==null)s=r.length!==0||n!=null||!1
else s=!1
if(s)q=""
s=q==null
m=!s
l=P.or("a/b",0,3,j,"",m)
k=s&&!C.b.a2(l,"/")
if(k)l=P.mT(l,m)
else l=P.c5(l)
if(new P.cq("",r,s&&C.b.a2(l,"//")?"":q,n,l,p,o).hI()==="a\\b")return $.iN()
return $.pq()},
kF:function kF(){}},S={
aA:function(a,b){var s,r,q=new S.bu(b)
if(a==null){s=q.gak(q).length
r=q.gak(q).length!==0?J.K(C.a.gah(q.gak(q))):0
a=new S.B(s,r,t.o)
s=a}else s=a
q.smv(t.o.a(s))
return q},
bj:function(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=H.a([],t.b)
for(s=B.D(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=H.a([],q)
for(n=B.D(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.e)(n),++l)o.push(a)
j.push(o)}return S.aA(b,j)},
iT:function(a){var s,r,q,p,o=H.a([],t.b)
for(s=J.aR(a),r=s.gH(a),q=t.n;r.n();){p=r.gu()
o.push(H.a([p.a,p.b,p.c],q))}return S.aA(new S.B(s.gm(a),3,t.o),o)},
fG:function(a){var s,r,q,p,o,n,m,l,k,j,i=H.a([],t.b)
for(s=B.D(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=s[p]
n=H.a([],q)
for(m=B.D(a,0,1),l=m.length,k=J.bs(o),j=0;j<m.length;m.length===l||(0,H.e)(m),++j)if(k.Y(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return S.aA(new S.B(a,a,t.o),i)},
tP:function(a,b){var s=S.pi(a),r=S.tY(b)
return C.a.aZ(H.a([r,s,r.f4()],t.fp),new S.mj())},
pi:function(a){var s=t.n
return S.aA(null,H.a([H.a([Math.cos(a),-Math.sin(a),0],s),H.a([Math.sin(a),Math.cos(a),0],s),H.a([0,0,1],s)],t.b))},
tY:function(a){var s,r,q,p,o,n
if(a.bj()===0)return S.fG(3)
s=a.b4(0,Math.sqrt(a.bj()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.kM(0)
p=q.b4(0,Math.sqrt(q.bj()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=S.aA(null,H.a([H.a([Math.cos(r),0,Math.sin(r)],q),H.a([0,1,0],q),H.a([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return S.pi(o).bN(n)},
tN:function(a,b){var s,r,q,p,o=a/2,n=b.b4(0,Math.sqrt(b.bj())).A(0,Math.sin(o)),m=H.a([],t.b)
for(s=[n.a,n.b,n.c],r=s.length,q=t.n,p=0;p<r;++p)m.push(H.a([s[p]],q))
m.push(H.a([Math.cos(o)],q))
return S.aA(null,m)},
tk:function(a,b){var s,r,q,p,o,n,m=6.283185307179586/a,l=t.hR,k=H.a([],l)
for(s=B.D(a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
if(typeof p!=="number")return H.bh(p)
o=m*p
k.push(new A.as(Math.cos(o),Math.sin(o)))}l=H.a([],l)
for(s=k.length,r=b.a,o=b.b,q=0;q<k.length;k.length===s||(0,H.e)(k),++q)l.push(k[q].A(0,new A.as(r,o)))
k=H.a([],t.l)
for(s=l.length,q=0;q<l.length;l.length===s||(0,H.e)(l),++q){n=l[q]
k.push(new M.h(n.a,n.b,0))}return k},
bu:function bu(a){this.a=a
this.b=null},
iZ:function iZ(a){this.a=a},
j1:function j1(a){this.a=a},
j0:function j0(a){this.a=a},
j_:function j_(a){this.a=a},
iY:function iY(a){this.a=a},
iX:function iX(a,b){this.a=a
this.b=b},
iW:function iW(a){this.a=a},
j2:function j2(a){this.a=a},
iV:function iV(){},
iU:function iU(a){this.a=a},
mj:function mj(){},
B:function B(a,b,c){this.a=a
this.b=b
this.$ti=c},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
du:function du(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},X={
hs:function(a,b){var s,r,q,p,o,n=b.l1(a)
b.c2(a)
if(n!=null)a=C.b.az(a,n.length)
s=t.s
r=H.a([],s)
q=H.a([],s)
s=a.length
if(s!==0&&b.bL(C.b.E(a,0))){if(0>=s)return H.b(a,0)
C.a.q(q,a[0])
p=1}else{C.a.q(q,"")
p=0}for(o=p;o<s;++o)if(b.bL(C.b.E(a,o))){C.a.q(r,C.b.B(a,p,o))
C.a.q(q,a[o])
p=o+1}if(p<s){C.a.q(r,C.b.az(a,p))
C.a.q(q,"")}return new X.km(b,n,r,q)},
km:function km(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
nK:function(a){return new X.hu(a)},
hu:function hu(a){this.a=a},
kA:function(a,b,c,d){var s=new X.bP(d,a,b,c)
s.mr(a,b,c)
if(!C.b.F(d,c))H.c(P.ab('The context line "'+d+'" must contain "'+c+'".'))
if(B.m0(d,c,a.gar())==null)H.c(P.ab('The span text "'+c+'" must start at column '+(a.gar()+1)+' in a line within "'+d+'".'))
return s},
bP:function bP(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d}},E={hx:function hx(a,b,c){this.d=a
this.e=b
this.f=c}},Q={
tI:function(){var s,r,q,p,o,n=t.N
$.hJ.v(0,"align*",P.bn(n,n))
$.hJ.j(0,"align*").v(0,u.w,"<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 2.8.2 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='114.24917pt' height='25.314645pt' viewBox='114.730983 -15.407233 114.24917 25.314645'>\n<defs>\n<path id='g5-40' d='M3.297634 2.391034C3.297634 2.361146 3.297634 2.34122 3.128269 2.171856C1.882939 .916563 1.564134-.966376 1.564134-2.49066C1.564134-4.224159 1.942715-5.957659 3.16812-7.202989C3.297634-7.32254 3.297634-7.342466 3.297634-7.372354C3.297634-7.442092 3.257783-7.47198 3.198007-7.47198C3.098381-7.47198 2.201743-6.794521 1.613948-5.529265C1.105853-4.433375 .986301-3.327522 .986301-2.49066C.986301-1.713574 1.09589-.508095 1.643836 .617684C2.241594 1.843088 3.098381 2.49066 3.198007 2.49066C3.257783 2.49066 3.297634 2.460772 3.297634 2.391034Z'/>\n<path id='g5-41' d='M2.879203-2.49066C2.879203-3.267746 2.769614-4.473225 2.221669-5.599004C1.62391-6.824408 .767123-7.47198 .667497-7.47198C.607721-7.47198 .56787-7.43213 .56787-7.372354C.56787-7.342466 .56787-7.32254 .757161-7.143213C1.733499-6.156912 2.30137-4.572852 2.30137-2.49066C2.30137-.787049 1.932752 .966376 .697385 2.221669C.56787 2.34122 .56787 2.361146 .56787 2.391034C.56787 2.450809 .607721 2.49066 .667497 2.49066C.767123 2.49066 1.663761 1.8132 2.251557 .547945C2.759651-.547945 2.879203-1.653798 2.879203-2.49066Z'/>\n<path id='g5-61' d='M7.183064-3.457036C7.183064-3.656289 6.993773-3.656289 6.854296-3.656289H.886675C.747198-3.656289 .557908-3.656289 .557908-3.457036S.747198-3.257783 .896638-3.257783H6.844334C6.993773-3.257783 7.183064-3.257783 7.183064-3.457036ZM7.183064-1.524284C7.183064-1.723537 6.993773-1.723537 6.844334-1.723537H.896638C.747198-1.723537 .557908-1.723537 .557908-1.524284S.747198-1.325031 .886675-1.325031H6.854296C6.993773-1.325031 7.183064-1.325031 7.183064-1.524284Z'/>\n<path id='g5-94' d='M4.004981-5.280199L2.49066-6.894147L.976339-5.280199L1.105853-5.140722L2.49066-6.216687L3.875467-5.140722L4.004981-5.280199Z'/>\n<path id='g3-100' d='M4.961395-1.424658C4.961395-1.524284 4.871731-1.524284 4.841843-1.524284C4.742217-1.524284 4.732254-1.484433 4.702366-1.344956C4.533001-.697385 4.353674-.109589 3.945205-.109589C3.676214-.109589 3.646326-.368618 3.646326-.56787C3.646326-.806974 3.666252-.876712 3.706102-1.046077L5.140722-6.804483C5.140722-6.804483 5.140722-6.914072 5.011208-6.914072C4.861768-6.914072 3.915318-6.824408 3.745953-6.804483C3.666252-6.794521 3.606476-6.744707 3.606476-6.615193C3.606476-6.495641 3.696139-6.495641 3.845579-6.495641C4.323786-6.495641 4.343711-6.425903 4.343711-6.326276L4.313823-6.127024L3.716065-3.765878C3.536737-4.134496 3.247821-4.403487 2.799502-4.403487C1.633873-4.403487 .398506-2.938979 .398506-1.484433C.398506-.547945 .946451 .109589 1.723537 .109589C1.92279 .109589 2.420922 .069738 3.01868-.637609C3.098381-.219178 3.447073 .109589 3.92528 .109589C4.273973 .109589 4.503113-.119552 4.662516-.438356C4.83188-.797011 4.961395-1.424658 4.961395-1.424658ZM3.566625-3.138232L3.068493-1.185554C3.01868-1.006227 3.01868-.986301 2.86924-.816936C2.430884-.268991 2.022416-.109589 1.743462-.109589C1.24533-.109589 1.105853-.657534 1.105853-1.046077C1.105853-1.544209 1.424658-2.769614 1.653798-3.227895C1.96264-3.815691 2.410959-4.184309 2.809465-4.184309C3.457036-4.184309 3.596513-3.367372 3.596513-3.307597S3.576588-3.188045 3.566625-3.138232Z'/>\n<path id='g3-101' d='M4.283935-1.066002C4.283935-1.125778 4.224159-1.195517 4.164384-1.195517C4.11457-1.195517 4.094645-1.175592 4.034869-1.09589C3.247821-.109589 2.161893-.109589 2.042341-.109589C1.265255-.109589 1.175592-.946451 1.175592-1.265255C1.175592-1.384807 1.185554-1.693649 1.334994-2.30137H1.863014C2.15193-2.30137 2.889166-2.321295 3.387298-2.530511C4.084682-2.82939 4.134496-3.417186 4.134496-3.556663C4.134496-3.995019 3.755915-4.403487 3.068493-4.403487C1.96264-4.403487 .458281-3.437111 .458281-1.693649C.458281-.67746 1.046077 .109589 2.022416 .109589C3.447073 .109589 4.283935-.946451 4.283935-1.066002ZM3.805729-3.556663C3.805729-2.520548 2.211706-2.520548 1.803238-2.520548H1.39477C1.783313-4.034869 2.809465-4.184309 3.068493-4.184309C3.536737-4.184309 3.805729-3.895392 3.805729-3.556663Z'/>\n<path id='g3-102' d='M5.499377-6.336239C5.499377-6.794521 5.041096-7.023661 4.632628-7.023661C4.293898-7.023661 3.666252-6.844334 3.367372-5.858032C3.307597-5.648817 3.277709-5.549191 3.038605-4.293898H2.351183C2.161893-4.293898 2.052304-4.293898 2.052304-4.104608C2.052304-3.985056 2.141968-3.985056 2.331258-3.985056H2.988792L2.241594-.049813C2.062267 .916563 1.892902 1.823163 1.374844 1.823163C1.334994 1.823163 1.085928 1.823163 .896638 1.643836C1.354919 1.613948 1.444583 1.255293 1.444583 1.105853C1.444583 .876712 1.265255 .757161 1.075965 .757161C.816936 .757161 .52802 .976339 .52802 1.354919C.52802 1.803238 .966376 2.042341 1.374844 2.042341C1.92279 2.042341 2.321295 1.454545 2.500623 1.075965C2.819427 .448319 3.048568-.757161 3.058531-.826899L3.656289-3.985056H4.513076C4.712329-3.985056 4.811955-3.985056 4.811955-4.184309C4.811955-4.293898 4.712329-4.293898 4.542964-4.293898H3.716065C3.825654-4.871731 3.815691-4.851806 3.92528-5.429639C3.965131-5.638854 4.104608-6.346202 4.164384-6.465753C4.254047-6.655044 4.423412-6.804483 4.632628-6.804483C4.672478-6.804483 4.931507-6.804483 5.120797-6.625156C4.682441-6.585305 4.582814-6.236613 4.582814-6.087173C4.582814-5.858032 4.762142-5.738481 4.951432-5.738481C5.210461-5.738481 5.499377-5.957659 5.499377-6.336239Z'/>\n<path id='g3-103' d='M3.58655 .667497L4.692403-3.755915C4.702366-3.815691 4.722291-3.865504 4.722291-3.935243C4.722291-4.104608 4.60274-4.204234 4.433375-4.204234C4.333748-4.204234 4.064757-4.134496 4.024907-3.775841C3.845579-4.144458 3.496887-4.403487 3.098381-4.403487C1.96264-4.403487 .727273-3.008717 .727273-1.574097C.727273-.587796 1.334994 0 2.052304 0C2.6401 0 3.108344-.468244 3.20797-.577833L3.217933-.56787L2.889166 .747198C2.849315 .836862 2.510585 1.823163 1.454545 1.823163C1.265255 1.823163 .936488 1.8132 .657534 1.723537C.956413 1.633873 1.066002 1.374844 1.066002 1.205479C1.066002 1.046077 .956413 .856787 .687422 .856787C.468244 .856787 .14944 1.036115 .14944 1.43462C.14944 1.843088 .518057 2.042341 1.474471 2.042341C2.719801 2.042341 3.437111 1.265255 3.58655 .667497ZM3.875467-3.178082L3.39726-1.275218C3.337484-1.016189 3.108344-.767123 2.889166-.577833C2.67995-.398506 2.371108-.219178 2.082192-.219178C1.58406-.219178 1.43462-.737235 1.43462-1.135741C1.43462-1.613948 1.723537-2.789539 1.992528-3.297634C2.261519-3.785803 2.689913-4.184309 3.108344-4.184309C3.765878-4.184309 3.905355-3.377335 3.905355-3.327522S3.88543-3.217933 3.875467-3.178082Z'/>\n<path id='g3-116' d='M3.128269-1.424658C3.128269-1.524284 3.048568-1.524284 3.008717-1.524284C2.919054-1.524284 2.909091-1.494396 2.859278-1.384807C2.430884-.348692 1.902864-.109589 1.564134-.109589C1.354919-.109589 1.255293-.239103 1.255293-.56787C1.255293-.806974 1.275218-.876712 1.315068-1.046077L2.052304-3.985056H2.988792C3.188045-3.985056 3.287671-3.985056 3.287671-4.184309C3.287671-4.293898 3.188045-4.293898 3.008717-4.293898H2.132005C2.49066-5.708593 2.540473-5.907846 2.540473-5.967621C2.540473-6.136986 2.420922-6.236613 2.251557-6.236613C2.221669-6.236613 1.942715-6.22665 1.853051-5.877958L1.464508-4.293898H.52802C.328767-4.293898 .229141-4.293898 .229141-4.104608C.229141-3.985056 .308842-3.985056 .508095-3.985056H1.384807C.667497-1.155666 .627646-.986301 .627646-.806974C.627646-.268991 1.006227 .109589 1.544209 .109589C2.560399 .109589 3.128269-1.344956 3.128269-1.424658Z'/>\n<path id='g0-90' d='M9.39477 .926526C9.39477 .388543 8.856787 0 8.308842 0C7.551681 0 6.993773 1.085928 6.445828 3.118306C6.41594 3.227895 5.061021 8.229141 3.965131 14.744707C3.706102 16.268991 3.417186 17.932752 3.088418 19.317559C2.909091 20.044832 2.450809 21.917808 1.643836 21.917808C1.285181 21.917808 1.036115 21.688667 1.036115 21.688667C1.354919 21.668742 1.524284 21.449564 1.524284 21.200498C1.524284 20.871731 1.275218 20.712329 1.046077 20.712329C.806974 20.712329 .557908 20.861768 .557908 21.210461C.557908 21.718555 1.05604 22.136986 1.663761 22.136986C3.178082 22.136986 3.745953 19.805729 4.4533 16.916563C5.220423 13.768369 5.867995 10.590286 6.405978 7.392279C6.774595 5.270237 7.143213 3.277709 7.481943 1.992528C7.601494 1.504359 7.940224 .219178 8.328767 .219178C8.637609 .219178 8.886675 .408468 8.926526 .448319C8.597758 .468244 8.428394 .687422 8.428394 .936488C8.428394 1.265255 8.67746 1.424658 8.9066 1.424658C9.145704 1.424658 9.39477 1.275218 9.39477 .926526Z'/>\n<path id='g1-0' d='M5.467497-1.743462C5.467497-1.917808 5.307098-1.917808 5.209465-1.917808H1.011208C.913574-1.917808 .753176-1.917808 .753176-1.743462C.753176-1.57609 .920548-1.57609 1.011208-1.57609H5.209465C5.300125-1.57609 5.467497-1.57609 5.467497-1.743462Z'/>\n<path id='g1-49' d='M7.392279-1.506351C7.392279-2.322291 6.792528-3.075467 5.927771-3.075467C4.930511-3.075467 4.309838-2.280448 4.02391-1.910834C3.682192-2.329265 3.068493-3.075467 2.036364-3.075467C1.157659-3.075467 .54396-2.336239 .54396-1.499377C.54396-.683437 1.143711 .069738 2.008468 .069738C3.005729 .069738 3.626401-.72528 3.912329-1.094894C4.254047-.676463 4.867746 .069738 5.899875 .069738C6.77858 .069738 7.392279-.669489 7.392279-1.506351ZM7.197011-1.506351C7.197011-.808966 6.625156-.313823 6.018431-.313823C5.362889-.313823 4.902615-.871731 4.254047-1.652802C4.679452-2.329265 5.300125-2.810461 5.983562-2.810461C6.701868-2.810461 7.197011-2.182814 7.197011-1.506351ZM3.682192-1.352927C3.256787-.676463 2.636115-.195268 1.952677-.195268C1.234371-.195268 .739228-.822914 .739228-1.499377C.739228-2.196762 1.311083-2.691905 1.917808-2.691905C2.57335-2.691905 3.033624-2.133998 3.682192-1.352927Z'/>\n<path id='g4-43' d='M5.620922-1.743462C5.620922-1.917808 5.460523-1.917808 5.362889-1.917808H3.228892V-4.05878C3.228892-4.14944 3.228892-4.316812 3.061519-4.316812C2.887173-4.316812 2.887173-4.156413 2.887173-4.05878V-1.917808H.746202C.655542-1.917808 .488169-1.917808 .488169-1.750436C.488169-1.57609 .648568-1.57609 .746202-1.57609H2.887173V.564882C2.887173 .655542 2.887173 .822914 3.054545 .822914C3.228892 .822914 3.228892 .662516 3.228892 .564882V-1.57609H5.362889C5.453549-1.57609 5.620922-1.57609 5.620922-1.743462Z'/>\n<path id='g4-50' d='M3.521793-1.26924H3.284682C3.263761-1.115816 3.194022-.704359 3.103362-.63462C3.047572-.592777 2.510585-.592777 2.412951-.592777H1.129763C1.862017-1.241345 2.106102-1.436613 2.524533-1.764384C3.040598-2.175841 3.521793-2.608219 3.521793-3.270735C3.521793-4.11457 2.782565-4.630635 1.889913-4.630635C1.025156-4.630635 .439352-4.02391 .439352-3.382316C.439352-3.02665 .739228-2.991781 .808966-2.991781C.976339-2.991781 1.17858-3.110336 1.17858-3.361395C1.17858-3.486924 1.129763-3.731009 .767123-3.731009C.983313-4.226152 1.457534-4.379577 1.785305-4.379577C2.48269-4.379577 2.84533-3.835616 2.84533-3.270735C2.84533-2.66401 2.412951-2.182814 2.189788-1.931756L.509091-.27198C.439352-.209215 .439352-.195268 .439352 0H3.312578L3.521793-1.26924Z'/>\n<path id='g2-25' d='M4.491158-2.803487C4.491158-3.005729 4.309838-3.005729 4.191283-3.005729H1.562142C1.276214-3.005729 1.080946-2.942964 .767123-2.650062C.585803-2.489664 .313823-2.113076 .313823-2.050311C.313823-1.966625 .404483-1.966625 .432379-1.966625C.509091-1.966625 .516065-1.980573 .557908-2.043337C.913574-2.531507 1.345953-2.531507 1.499377-2.531507H1.924782C1.708593-1.764384 1.332005-.941469 1.12279-.523039C1.080946-.432379 1.011208-.285928 .990286-.258032C.983313-.230137 .969365-.202242 .969365-.153425C.969365-.041843 1.053051 .069738 1.21345 .069738C1.492403 .069738 1.569116-.244085 1.736488-.871731L2.168867-2.531507H2.998755C2.894147-2.113076 2.740722-1.478456 2.740722-.927522C2.740722-.648568 2.775592-.460274 2.817435-.306849C2.929016 .041843 3.019676 .069738 3.131258 .069738C3.291656 .069738 3.459029-.076712 3.459029-.244085C3.459029-.299875 3.445081-.327771 3.403238-.397509C3.270735-.655542 3.145205-1.053051 3.145205-1.624907C3.145205-1.75741 3.145205-2.036364 3.242839-2.531507H4.11457C4.2401-2.531507 4.29589-2.531507 4.372603-2.587298C4.470237-2.657036 4.491158-2.768618 4.491158-2.803487Z'/>\n<path id='g2-102' d='M4.212204-4.414446C4.212204-4.735243 3.870486-4.909589 3.514819-4.909589C3.20797-4.909589 2.866252-4.735243 2.677958-4.38655C2.538481-4.128518 2.48269-3.814695 2.336239-3.005729H1.785305C1.645828-3.005729 1.555168-3.005729 1.555168-2.852304C1.555168-2.75467 1.645828-2.75467 1.771357-2.75467H2.287422L1.673724 .54396C1.638854 .697385 1.520299 1.227397 1.185554 1.227397C1.185554 1.227397 1.011208 1.227397 .878705 1.143711C1.164633 1.053051 1.185554 .801993 1.185554 .760149C1.185554 .606725 1.066999 .502117 .9066 .502117C.718306 .502117 .509091 .662516 .509091 .927522C.509091 1.241345 .836862 1.422665 1.185554 1.422665C1.63188 1.422665 1.93873 .962391 2.022416 .808966C2.273474 .341719 2.433873-.516065 2.447821-.599751L2.838356-2.75467H3.521793C3.66127-2.75467 3.75193-2.75467 3.75193-2.908095C3.75193-3.005729 3.66127-3.005729 3.535741-3.005729H2.887173C3.047572-3.891407 3.103362-4.212204 3.159153-4.414446C3.194022-4.56787 3.347447-4.714321 3.514819-4.714321C3.514819-4.714321 3.710087-4.714321 3.84259-4.630635C3.556663-4.539975 3.535741-4.288917 3.535741-4.247073C3.535741-4.093649 3.654296-3.989041 3.814695-3.989041C4.002989-3.989041 4.212204-4.14944 4.212204-4.414446Z'/>\n<path id='g2-105' d='M2.259527-4.358655C2.259527-4.470237 2.175841-4.623661 1.980573-4.623661C1.792279-4.623661 1.590037-4.442341 1.590037-4.2401C1.590037-4.121544 1.680697-3.975093 1.868991-3.975093C2.071233-3.975093 2.259527-4.170361 2.259527-4.358655ZM2.440847-.99726C2.440847-1.08792 2.350187-1.08792 2.329265-1.08792C2.231631-1.08792 2.224658-1.046077 2.196762-.969365C2.036364-.411457 1.729514-.125529 1.457534-.125529C1.318057-.125529 1.283188-.216189 1.283188-.369614C1.283188-.530012 1.332005-.662516 1.39477-.81594L1.617933-1.373848L1.959651-2.259527C1.980573-2.329265 2.001494-2.412951 2.001494-2.48269C2.001494-2.810461 1.72254-3.075467 1.338979-3.075467C.648568-3.075467 .327771-2.127024 .327771-2.008468C.327771-1.917808 .425405-1.917808 .446326-1.917808C.54396-1.917808 .550934-1.952677 .571856-2.02939C.753176-2.629141 1.060025-2.880199 1.318057-2.880199C1.429639-2.880199 1.492403-2.824408 1.492403-2.636115C1.492403-2.475716 1.45056-2.371108 1.276214-1.93873L.836862-.81594C.808966-.72528 .774097-.641594 .774097-.523039C.774097-.195268 1.053051 .069738 1.436613 .069738C2.133998 .069738 2.440847-.892653 2.440847-.99726Z'/>\n<path id='g2-116' d='M2.608219-.99726C2.608219-1.08792 2.517559-1.08792 2.496638-1.08792C2.412951-1.08792 2.405978-1.073973 2.350187-.955417C2.154919-.516065 1.799253-.125529 1.415691-.125529C1.26924-.125529 1.171606-.216189 1.171606-.467248C1.171606-.536986 1.199502-.683437 1.21345-.753176L1.715567-2.75467H2.426899C2.559402-2.75467 2.650062-2.75467 2.650062-2.908095C2.650062-3.005729 2.559402-3.005729 2.440847-3.005729H1.778331L2.036364-4.037858C2.043337-4.072727 2.057285-4.107597 2.057285-4.135492C2.057285-4.261021 1.959651-4.358655 1.820174-4.358655C1.645828-4.358655 1.54122-4.2401 1.492403-4.05878C1.443587-3.884433 1.534247-4.219178 1.227397-3.005729H.516065C.383562-3.005729 .292902-3.005729 .292902-2.852304C.292902-2.75467 .376588-2.75467 .502117-2.75467H1.164633L.753176-1.108842C.711333-.934496 .648568-.683437 .648568-.592777C.648568-.18132 .99726 .069738 1.39477 .069738C2.168867 .069738 2.608219-.9066 2.608219-.99726Z'/>\n</defs>\n<g id='page1'>\n<use x='115.071731' y='-.000046' xlink:href='#g5-94'/>\n<use x='114.730983' y='0' xlink:href='#g3-103'/>\n<use x='119.840287' y='0' xlink:href='#g5-40'/>\n<use x='123.714765' y='0' xlink:href='#g3-102'/>\n<use x='129.664713' y='0' xlink:href='#g5-41'/>\n<use x='136.306523' y='0' xlink:href='#g5-61'/>\n<use x='146.822793' y='-13.56037' xlink:href='#g0-90'/>\n<use x='156.785449' y='-11.097408' xlink:href='#g4-43'/>\n<use x='162.901519' y='-11.097408' xlink:href='#g1-49'/>\n<use x='152.35761' y='9.077182' xlink:href='#g1-0'/>\n<use x='158.58429' y='9.077182' xlink:href='#g1-49'/>\n<use x='173.002497' y='0' xlink:href='#g3-103'/>\n<use x='178.111805' y='0' xlink:href='#g5-40'/>\n<use x='181.986283' y='0' xlink:href='#g3-116'/>\n<use x='185.583918' y='0' xlink:href='#g5-41'/>\n<use x='189.458396' y='0' xlink:href='#g3-101'/>\n<use x='194.097268' y='-4.113496' xlink:href='#g1-0'/>\n<use x='200.323947' y='-4.113496' xlink:href='#g4-50'/>\n<use x='204.295048' y='-4.113496' xlink:href='#g2-25'/>\n<use x='209.204114' y='-4.113496' xlink:href='#g2-105'/>\n<use x='212.022841' y='-4.113496' xlink:href='#g2-102'/>\n<use x='216.689425' y='-4.113496' xlink:href='#g2-116'/>\n<use x='220.197086' y='0' xlink:href='#g3-100'/>\n<use x='225.382519' y='0' xlink:href='#g3-116'/>\n</g>\n</svg>")
n=document
s=n.getElementById("canvas-container")
s.toString
r=H.a([],t.dw)
q=new Y.et(0)
q.fp(0)
n=n.createElement("canvas")
t.jQ.a(n)
p=new Z.fN(n,s,r,C.e,C.e,q,C.e,C.e)
p.a=new F.fO($.dH())
s.appendChild(n).toString
o=new Q.e8()
o.mq()
o.x=p
o.gax(o).gdE()
o.gax(o).jw(o.gau())
n=o.gau()
n.r=o.gax(o)
n.gax(n).jw(n)
s=n.gax(n)
r=s.gdE()
r.m6(s)
s=s.d.getContext("2d")
s.toString
r.e=s
n.d=n.c/1.7777777777777777
s=n.gax(n).gdE()
r=n.c
q=n.d
s.gbh().setTransform(1280/r,0,0,-720/q,640-0/r,360-0/q)
n.gax(n).gdE().eU(C.u)
o.cU()},
e8:function e8(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.a=_.fy=0
_.x=_.f=_.d=null},
jo:function jo(a){this.a=a},
jv:function jv(a){this.a=a},
jq:function jq(a,b){this.a=a
this.b=b},
jr:function jr(a){this.a=a},
js:function js(){},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a,b){this.a=a
this.b=b},
jt:function jt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var w=[C,H,J,P,W,A,G,F,L,B,V,Z,K,T,Y,D,M,U,O,S,X,E,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ms.prototype={}
J.b3.prototype={
Y:function(a,b){return a===b},
gJ:function(a){return H.bO(a)},
l:function(a){return"Instance of '"+H.kq(a)+"'"}}
J.hc.prototype={
l:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iE:1}
J.d9.prototype={
Y:function(a,b){return null==b},
l:function(a){return"null"},
gJ:function(a){return 0},
$iaq:1}
J.cL.prototype={
gJ:function(a){return 0},
l:function(a){return String(a)}}
J.hw.prototype={}
J.bQ.prototype={}
J.bM.prototype={
l:function(a){var s=a[$.pp()]
if(s==null)return this.mb(a)
return"JavaScript function for "+J.bI(s)},
$icH:1}
J.A.prototype={
q:function(a,b){H.x(a).c.a(b)
if(!!a.fixed$length)H.c(P.T("add"))
a.push(b)},
eT:function(a,b){if(!!a.fixed$length)H.c(P.T("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dn(b,null))
return a.splice(b,1)[0]},
bK:function(a,b,c){H.x(a).c.a(c)
if(!!a.fixed$length)H.c(P.T("insert"))
if(b<0||b>a.length)throw H.d(P.dn(b,null))
a.splice(b,0,c)},
eD:function(a,b,c){var s,r
H.x(a).h("k<1>").a(c)
if(!!a.fixed$length)H.c(P.T("insertAll"))
P.nP(b,0,a.length,"index")
if(!t.gt.b(c))c=J.fu(c)
s=J.K(c)
a.length=a.length+s
r=b+s
this.dR(a,r,a.length,a,b)
this.lI(a,b,r,c)},
dD:function(a){if(!!a.fixed$length)H.c(P.T("removeLast"))
if(a.length===0)throw H.d(H.cs(a,-1))
return a.pop()},
a8:function(a,b){var s
if(!!a.fixed$length)H.c(P.T("remove"))
for(s=0;s<a.length;++s)if(J.S(a[s],b)){a.splice(s,1)
return!0}return!1},
fK:function(a,b,c){var s,r,q,p,o
H.x(a).h("E(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!H.b8(b.$1(p)))s.push(p)
if(a.length!==r)throw H.d(P.aw(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
eZ:function(a,b){var s=H.x(a)
return new H.an(a,s.h("E(1)").a(b),s.h("an<1>"))},
R:function(a,b){var s
H.x(a).h("k<1>").a(b)
if(!!a.fixed$length)H.c(P.T("addAll"))
if(Array.isArray(b)){this.mE(a,b)
return}for(s=J.I(b);s.n();)a.push(s.gu())},
mE:function(a,b){var s,r
t.m.a(b)
s=b.length
if(s===0)return
if(a===b)throw H.d(P.aw(a))
for(r=0;r<s;++r)a.push(b[r])},
bi:function(a,b){var s,r
H.x(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw H.d(P.aw(a))}},
eJ:function(a,b,c){var s=H.x(a)
return new H.J(a,s.a3(c).h("1(2)").a(b),s.h("@<1>").a3(c).h("J<1,2>"))},
aG:function(a,b){var s,r=P.bN(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.v(r,s,H.m(a[s]))
return r.join(b)},
aY:function(a){return this.aG(a,"")},
bd:function(a,b){return H.be(a,b,null,H.x(a).c)},
aZ:function(a,b){var s,r,q
H.x(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw H.d(H.ah())
if(0>=s)return H.b(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw H.d(P.aw(a))}return r},
eA:function(a,b,c,d){var s,r,q
d.a(b)
H.x(a).a3(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw H.d(P.aw(a))}return r},
an:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
be:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a_(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a_(c,b,a.length,"end",null))
if(b===c)return H.a([],H.x(a))
return H.a(a.slice(b,c),H.x(a))},
dN:function(a,b,c){P.aL(b,c,a.length)
return H.be(a,b,c,H.x(a).c)},
gah:function(a){if(a.length>0)return a[0]
throw H.d(H.ah())},
gt:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.d(H.ah())},
dR:function(a,b,c,d,e){var s,r,q,p,o
H.x(a).h("k<1>").a(d)
if(!!a.immutable$list)H.c(P.T("setRange"))
P.aL(b,c,a.length)
s=c-b
if(s===0)return
P.bc(e,"skipCount")
if(t.gs.b(d)){r=d
q=e}else{r=J.iP(d,e).bx(0,!1)
q=0}p=J.X(r)
if(q+s>p.gm(r))throw H.d(H.qb())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.j(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.j(r,q+o)},
lI:function(a,b,c,d){return this.dR(a,b,c,d,0)},
b8:function(a,b){var s,r
H.x(a).h("E(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(H.b8(b.$1(a[r])))return!0
if(a.length!==s)throw H.d(P.aw(a))}return!1},
cK:function(a,b){var s,r
H.x(a).h("E(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!H.b8(b.$1(a[r])))return!1
if(a.length!==s)throw H.d(P.aw(a))}return!0},
cw:function(a,b){var s,r=H.x(a)
r.h("j(1,1)?").a(b)
if(!!a.immutable$list)H.c(P.T("sort"))
s=b==null?J.rV():b
H.nW(a,s,r.c)},
lR:function(a){return this.cw(a,null)},
aT:function(a,b,c){var s,r=a.length
if(c>=r)return-1
for(s=c;s<r;++s){if(s>=a.length)return H.b(a,s)
if(J.S(a[s],b))return s}return-1},
ap:function(a,b){return this.aT(a,b,0)},
F:function(a,b){var s
for(s=0;s<a.length;++s)if(J.S(a[s],b))return!0
return!1},
gai:function(a){return a.length===0},
gcN:function(a){return a.length!==0},
l:function(a){return P.k_(a,"[","]")},
bx:function(a,b){var s=H.a(a.slice(0),H.x(a))
return s},
aw:function(a){return this.bx(a,!0)},
gH:function(a){return new J.aB(a,a.length,H.x(a).h("aB<1>"))},
gJ:function(a){return H.bO(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.c(P.T("set length"))
if(b<0)throw H.d(P.a_(b,0,null,"newLength",null))
if(b>a.length)H.x(a).c.a(null)
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.cs(a,b))
return a[b]},
v:function(a,b,c){H.x(a).c.a(c)
if(!!a.immutable$list)H.c(P.T("indexed set"))
if(b>=a.length||b<0)throw H.d(H.cs(a,b))
a[b]=c},
kc:function(a,b){var s
H.x(a).h("E(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(H.b8(b.$1(a[s])))return s
return-1},
sah:function(a,b){H.x(a).c.a(b)
if(a.length===0)throw H.d(H.ah())
this.v(a,0,b)},
st:function(a,b){var s
H.x(a).c.a(b)
s=a.length
if(s===0)throw H.d(H.ah())
this.v(a,s-1,b)},
$iO:1,
$ik:1,
$il:1}
J.k2.prototype={}
J.aB.prototype={
gu:function(){return this.$ti.c.a(this.d)},
n:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.d(H.e(q))
s=r.c
if(s>=p){r.siF(null)
return!1}r.siF(q[s]);++r.c
return!0},
siF:function(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
J.cc.prototype={
aE:function(a,b){var s
H.lD(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.geH(b)
if(this.geH(a)===s)return 0
if(this.geH(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
geH:function(a){return a===0?1/a<0:a<0},
gfm:function(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
bw:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.d(P.T(""+a+".toInt()"))},
fY:function(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw H.d(P.T(""+a+".ceil()"))},
p0:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.d(P.T(""+a+".floor()"))},
hJ:function(a,b){var s
if(b>20)throw H.d(P.a_(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.geH(a))return"-"+s
return s},
qg:function(a,b){var s,r,q,p
if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",null))
s=a.toString(b)
if(C.b.M(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)H.c(P.T("Unexpected toString result: "+s))
q=r.length
if(1>=q)return H.b(r,1)
s=r[1]
if(3>=q)return H.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+C.b.A("0",p)},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
K:function(a,b){H.lD(b)
return a+b},
A:function(a,b){return a*b},
Z:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
b6:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.j6(a,b)},
aX:function(a,b){return(a|0)===a?a/b|0:this.j6(a,b)},
j6:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.d(P.T("Result of truncating division is "+H.m(s)+": "+H.m(a)+" ~/ "+b))},
d6:function(a,b){var s
if(a>0)s=this.j4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
n2:function(a,b){if(b<0)throw H.d(H.fn(b))
return this.j4(a,b)},
j4:function(a,b){return b>31?0:a>>>b},
$iag:1,
$iq:1,
$ia7:1}
J.d8.prototype={
gfm:function(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
$ij:1}
J.ei.prototype={}
J.bL.prototype={
M:function(a,b){if(b<0)throw H.d(H.cs(a,b))
if(b>=a.length)H.c(H.cs(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.d(H.cs(a,b))
return a.charCodeAt(b)},
fT:function(a,b,c){var s=b.length
if(c>s)throw H.d(P.a_(c,0,s,null,null))
return new H.iw(b,a,c)},
cd:function(a,b){return this.fT(a,b,0)},
kh:function(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw H.d(P.a_(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(this.M(b,c+r)!==this.E(a,r))return q
return new H.dt(c,a)},
K:function(a,b){H.az(b)
return a+b},
bq:function(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.az(a,r-s)},
ky:function(a,b,c){P.nP(0,0,a.length,"startIndex")
return H.tT(a,b,c,0)},
cz:function(a,b){if(typeof b=="string")return H.a(a.split(b),t.s)
else if(b instanceof H.cK&&b.giW().exec("").length-2===0)return H.a(a.split(b.b),t.s)
else return this.mO(a,b)},
cq:function(a,b,c,d){var s=P.aL(b,c,a.length)
return H.pk(a,b,s,d)},
mO:function(a,b){var s,r,q,p,o,n,m=H.a([],t.s)
for(s=J.nk(b,a),s=s.gH(s),r=0,q=1;s.n();){p=s.gu()
o=p.gV(p)
n=p.gX()
q=n-o
if(q===0&&r===o)continue
C.a.q(m,this.B(a,r,o))
r=n}if(r<a.length||q>0)C.a.q(m,this.az(a,r))
return m},
al:function(a,b,c){var s
t.oc.a(b)
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.pK(b,a,c)!=null},
a2:function(a,b){return this.al(a,b,0)},
B:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.dn(b,null))
if(b>c)throw H.d(P.dn(b,null))
if(c>a.length)throw H.d(P.dn(c,null))
return a.substring(b,c)},
az:function(a,b){return this.B(a,b,null)},
eW:function(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.E(p,0)===133){s=J.qe(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.M(p,r)===133?J.qf(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
A:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.b_)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
pw:function(a,b){var s=b-a.length
if(s<=0)return a
return a+this.A(" ",s)},
aT:function(a,b,c){var s
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ap:function(a,b){return this.aT(a,b,0)},
eI:function(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
hq:function(a,b){return this.eI(a,b,null)},
oi:function(a,b,c){var s=a.length
if(c>s)throw H.d(P.a_(c,0,s,null,null))
return H.cw(a,b,c)},
F:function(a,b){return this.oi(a,b,0)},
aE:function(a,b){var s
H.az(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
l:function(a){return a},
gJ:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm:function(a){return a.length},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.cs(a,b))
return a[b]},
$iag:1,
$idj:1,
$io:1}
H.cm.prototype={
gH:function(a){var s=H.H(this)
return new H.dS(J.I(this.gbo()),s.h("@<1>").a3(s.Q[1]).h("dS<1,2>"))},
gm:function(a){return J.K(this.gbo())},
gai:function(a){return J.cy(this.gbo())},
gcN:function(a){return J.cz(this.gbo())},
bd:function(a,b){var s=H.H(this)
return H.jb(J.iP(this.gbo(),b),s.c,s.Q[1])},
an:function(a,b){return H.H(this).Q[1].a(J.iO(this.gbo(),b))},
gah:function(a){return H.H(this).Q[1].a(J.aE(this.gbo()))},
gt:function(a){return H.H(this).Q[1].a(J.aF(this.gbo()))},
l:function(a){return J.bI(this.gbo())}}
H.dS.prototype={
n:function(){return this.a.n()},
gu:function(){return this.$ti.Q[1].a(this.a.gu())},
$iU:1}
H.cD.prototype={
gbo:function(){return this.a}}
H.eY.prototype={$iO:1}
H.eV.prototype={
j:function(a,b){return this.$ti.Q[1].a(J.Y(this.a,b))},
v:function(a,b,c){var s=this.$ti
J.ft(this.a,b,s.c.a(s.Q[1].a(c)))},
sm:function(a,b){J.pL(this.a,b)},
q:function(a,b){var s=this.$ti
J.nj(this.a,s.c.a(s.Q[1].a(b)))},
R:function(a,b){var s=this.$ti
J.af(this.a,H.jb(s.h("k<2>").a(b),s.Q[1],s.c))},
cw:function(a,b){var s
this.$ti.h("j(2,2)?").a(b)
s=b==null?null:new H.lb(this,b)
J.np(this.a,s)},
dN:function(a,b,c){var s=this.$ti
return H.jb(J.no(this.a,b,c),s.c,s.Q[1])},
$iO:1,
$il:1}
H.lb.prototype={
$2:function(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.Q[1]
return this.b.$2(s.a(a),s.a(b))},
$S:function(){return this.a.$ti.h("j(1,1)")}}
H.aU.prototype={
gbo:function(){return this.a}}
H.db.prototype={
l:function(a){var s="LateInitializationError: "+this.a
return s}}
H.a8.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.b.M(this.a,b)}}
H.mh.prototype={
$0:function(){var s=new P.au($.aa,t.av)
s.iy(null)
return s},
$S:45}
H.O.prototype={}
H.C.prototype={
gH:function(a){var s=this
return new H.M(s,s.gm(s),H.H(s).h("M<C.E>"))},
gai:function(a){return this.gm(this)===0},
gah:function(a){if(this.gm(this)===0)throw H.d(H.ah())
return this.an(0,0)},
gt:function(a){var s=this
if(s.gm(s)===0)throw H.d(H.ah())
return s.an(0,s.gm(s)-1)},
aG:function(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=H.m(p.an(0,0))
if(o!==p.gm(p))throw H.d(P.aw(p))
for(r=s,q=1;q<o;++q){r=r+b+H.m(p.an(0,q))
if(o!==p.gm(p))throw H.d(P.aw(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=H.m(p.an(0,q))
if(o!==p.gm(p))throw H.d(P.aw(p))}return r.charCodeAt(0)==0?r:r}},
aY:function(a){return this.aG(a,"")},
aZ:function(a,b){var s,r,q,p=this
H.H(p).h("C.E(C.E,C.E)").a(b)
s=p.gm(p)
if(s===0)throw H.d(H.ah())
r=p.an(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.an(0,q))
if(s!==p.gm(p))throw H.d(P.aw(p))}return r},
bd:function(a,b){return H.be(this,b,null,H.H(this).h("C.E"))},
bx:function(a,b){return P.i(this,b,H.H(this).h("C.E"))},
aw:function(a){return this.bx(a,!0)}}
H.aC.prototype={
c9:function(a,b,c,d){var s,r=this.b
P.bc(r,"start")
s=this.c
if(s!=null){P.bc(s,"end")
if(r>s)throw H.d(P.a_(r,0,s,"start",null))}},
gmQ:function(){var s=J.K(this.a),r=this.c
if(r==null||r>s)return s
return r},
gn7:function(){var s=J.K(this.a),r=this.b
if(r>s)return s
return r},
gm:function(a){var s,r=J.K(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.L()
return s-q},
an:function(a,b){var s=this,r=s.gn7()+b
if(b<0||r>=s.gmQ())throw H.d(P.h9(b,s,"index",null,null))
return J.iO(s.a,r)},
bd:function(a,b){var s,r,q=this
P.bc(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new H.e1(q.$ti.h("e1<1>"))
return H.be(q.a,s,r,q.$ti.c)},
qb:function(a,b){var s,r,q,p=this
P.bc(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return H.be(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return H.be(p.a,r,q,p.$ti.c)}},
bx:function(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.X(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.mq(0,n):J.nD(0,n)}r=P.bN(s,m.an(n,o),b,p.$ti.c)
for(q=1;q<s;++q){C.a.v(r,q,m.an(n,o+q))
if(m.gm(n)<l)throw H.d(P.aw(p))}return r},
aw:function(a){return this.bx(a,!0)}}
H.M.prototype={
gu:function(){return this.$ti.c.a(this.d)},
n:function(){var s,r=this,q=r.a,p=J.X(q),o=p.gm(q)
if(r.b!==o)throw H.d(P.aw(q))
s=r.c
if(s>=o){r.sbW(null)
return!1}r.sbW(p.an(q,s));++r.c
return!0},
sbW:function(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
H.cM.prototype={
gH:function(a){var s=H.H(this)
return new H.eq(J.I(this.a),this.b,s.h("@<1>").a3(s.Q[1]).h("eq<1,2>"))},
gm:function(a){return J.K(this.a)},
gai:function(a){return J.cy(this.a)},
gah:function(a){return this.b.$1(J.aE(this.a))},
gt:function(a){return this.b.$1(J.aF(this.a))},
an:function(a,b){return this.b.$1(J.iO(this.a,b))}}
H.e_.prototype={$iO:1}
H.eq.prototype={
n:function(){var s=this,r=s.b
if(r.n()){s.sbW(s.c.$1(r.gu()))
return!0}s.sbW(null)
return!1},
gu:function(){return this.$ti.Q[1].a(this.a)},
sbW:function(a){this.a=this.$ti.h("2?").a(a)}}
H.J.prototype={
gm:function(a){return J.K(this.a)},
an:function(a,b){return this.b.$1(J.iO(this.a,b))}}
H.an.prototype={
gH:function(a){return new H.cS(J.I(this.a),this.b,this.$ti.h("cS<1>"))}}
H.cS.prototype={
n:function(){var s,r
for(s=this.a,r=this.b;s.n();)if(H.b8(r.$1(s.gu())))return!0
return!1},
gu:function(){return this.a.gu()}}
H.e4.prototype={
gH:function(a){var s=this.$ti
return new H.e5(J.I(this.a),this.b,C.a6,s.h("@<1>").a3(s.Q[1]).h("e5<1,2>"))}}
H.e5.prototype={
gu:function(){return this.$ti.Q[1].a(this.d)},
n:function(){var s,r,q=this
if(q.c==null)return!1
for(s=q.a,r=q.b;!q.c.n();){q.sbW(null)
if(s.n()){q.siG(null)
q.siG(J.I(r.$1(s.gu())))}else return!1}q.sbW(q.c.gu())
return!0},
siG:function(a){this.c=this.$ti.h("U<2>?").a(a)},
sbW:function(a){this.d=this.$ti.h("2?").a(a)},
$iU:1}
H.bZ.prototype={
bd:function(a,b){P.bc(b,"count")
return new H.bZ(this.a,this.b+b,H.H(this).h("bZ<1>"))},
gH:function(a){return new H.eH(J.I(this.a),this.b,H.H(this).h("eH<1>"))}}
H.d3.prototype={
gm:function(a){var s=J.K(this.a)-this.b
if(s>=0)return s
return 0},
bd:function(a,b){P.bc(b,"count")
return new H.d3(this.a,this.b+b,this.$ti)},
$iO:1}
H.eH.prototype={
n:function(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.n()
this.b=0
return s.n()},
gu:function(){return this.a.gu()}}
H.e1.prototype={
gH:function(a){return C.a6},
gai:function(a){return!0},
gm:function(a){return 0},
gah:function(a){throw H.d(H.ah())},
gt:function(a){throw H.d(H.ah())},
an:function(a,b){throw H.d(P.a_(b,0,0,"index",null))},
bd:function(a,b){P.bc(b,"count")
return this}}
H.e2.prototype={
n:function(){return!1},
gu:function(){throw H.d(H.ah())},
$iU:1}
H.ar.prototype={
gH:function(a){return new H.cT(J.I(this.a),this.$ti.h("cT<1>"))}}
H.cT.prototype={
n:function(){var s,r
for(s=this.a,r=this.$ti.c;s.n();)if(r.b(s.gu()))return!0
return!1},
gu:function(){return this.$ti.c.a(this.a.gu())},
$iU:1}
H.bl.prototype={
sm:function(a,b){throw H.d(P.T("Cannot change the length of a fixed-length list"))},
q:function(a,b){H.av(a).h("bl.E").a(b)
throw H.d(P.T("Cannot add to a fixed-length list"))},
R:function(a,b){H.av(a).h("k<bl.E>").a(b)
throw H.d(P.T("Cannot add to a fixed-length list"))}}
H.bB.prototype={
v:function(a,b,c){H.H(this).h("bB.E").a(c)
throw H.d(P.T("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.d(P.T("Cannot change the length of an unmodifiable list"))},
q:function(a,b){H.H(this).h("bB.E").a(b)
throw H.d(P.T("Cannot add to an unmodifiable list"))},
R:function(a,b){H.H(this).h("k<bB.E>").a(b)
throw H.d(P.T("Cannot add to an unmodifiable list"))},
cw:function(a,b){H.H(this).h("j(bB.E,bB.E)?").a(b)
throw H.d(P.T("Cannot modify an unmodifiable list"))}}
H.dv.prototype={}
H.W.prototype={
gm:function(a){return J.K(this.a)},
an:function(a,b){var s=this.a,r=J.X(s)
return r.an(s,r.gm(s)-1-b)}}
H.ff.prototype={}
H.d1.prototype={
l:function(a){return P.mz(this)},
gjV:function(a){return this.oG(a,H.H(this).h("ep<1,2>"))},
oG:function(a,b){var s=this
return P.n_(function(){var r=a
var q=0,p=1,o,n,m,l,k
return function $async$gjV(c,d){if(c===1){o=d
q=p}while(true)switch(q){case 0:n=s.gaO(),n=n.gH(n),m=H.H(s),m=m.h("@<1>").a3(m.Q[1]).h("ep<1,2>")
case 2:if(!n.n()){q=3
break}l=n.gu()
k=s.j(0,l)
k.toString
q=4
return new P.ep(l,k,m)
case 4:q=2
break
case 3:return P.mJ()
case 1:return P.mK(o)}}},b)},
$ib4:1}
H.v.prototype={
gm:function(a){return this.a},
as:function(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.as(b))return null
return this.iH(b)},
iH:function(a){return this.b[H.az(a)]},
bi:function(a,b){var s,r,q,p,o=H.H(this)
o.h("~(1,2)").a(b)
s=this.c
for(r=s.length,o=o.Q[1],q=0;q<r;++q){p=s[q]
b.$2(p,o.a(this.iH(p)))}},
gaO:function(){return new H.eW(this,H.H(this).h("eW<1>"))}}
H.eW.prototype={
gH:function(a){var s=this.a.c
return new J.aB(s,s.length,H.x(s).h("aB<1>"))},
gm:function(a){return this.a.c.length}}
H.c9.prototype={
d4:function(){var s,r=this,q=r.$map
if(q==null){s=r.$ti
q=new H.bw(s.h("@<1>").a3(s.Q[1]).h("bw<1,2>"))
H.oW(r.a,q)
r.$map=q}return q},
as:function(a){return this.d4().as(a)},
j:function(a,b){return this.d4().j(0,b)},
bi:function(a,b){this.$ti.h("~(1,2)").a(b)
this.d4().bi(0,b)},
gaO:function(){return this.d4().gaO()},
gm:function(a){var s=this.d4()
return s.gm(s)}}
H.ha.prototype={
l:function(a){var s="<"+C.a.aG([H.oT(this.$ti.c)],", ")+">"
return this.a.l(0)+" with "+s}}
H.cb.prototype={
$2:function(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S:function(){return H.tC(H.n4(this.a),this.$ti)}}
H.kJ.prototype={
bu:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
H.ex.prototype={
l:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.hd.prototype={
l:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.hZ.prototype={
l:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hn.prototype={
l:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$ibU:1}
H.e3.prototype={}
H.f6.prototype={
l:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icf:1}
H.b9.prototype={
l:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.pm(r==null?"unknown":r)+"'"},
$icH:1,
gqx:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hR.prototype={}
H.hP.prototype={
l:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.pm(s)+"'"}}
H.cZ.prototype={
Y:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cZ))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gJ:function(a){var s,r=this.c
if(r==null)s=H.bO(this.a)
else s=typeof r!=="object"?J.cx(r):H.bO(r)
return(s^H.bO(this.b))>>>0},
l:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.kq(t.K.a(s))+"'")}}
H.hD.prototype={
l:function(a){return"RuntimeError: "+this.a}}
H.i8.prototype={
l:function(a){return"Assertion failed: "+P.fX(this.a)}}
H.bw.prototype={
gm:function(a){return this.a},
gai:function(a){return this.a===0},
gaO:function(){return new H.ej(this,H.H(this).h("ej<1>"))},
gak:function(a){var s=H.H(this)
return H.mA(this.gaO(),new H.k3(this),s.c,s.Q[1])},
as:function(a){var s,r,q=this
if(typeof a=="string"){s=q.b
if(s==null)return!1
return q.iE(s,a)}else if(typeof a=="number"&&(a&0x3ffffff)===a){r=q.c
if(r==null)return!1
return q.iE(r,a)}else return q.pe(a)},
pe:function(a){var s=this,r=s.d
if(r==null)return!1
return s.eG(s.dY(r,s.eF(a)),a)>=0},
j:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.d5(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.d5(p,b)
q=r==null?n:r.b
return q}else return o.pf(b)},
pf:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.dY(p,q.eF(a))
r=q.eG(s,a)
if(r<0)return null
return s[r].b},
v:function(a,b,c){var s,r,q=this,p=H.H(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.is(s==null?q.b=q.fI():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.is(r==null?q.c=q.fI():r,b,c)}else q.ph(b,c)},
ph:function(a,b){var s,r,q,p,o=this,n=H.H(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.fI()
r=o.eF(a)
q=o.dY(s,r)
if(q==null)o.fL(s,r,[o.ft(a,b)])
else{p=o.eG(q,a)
if(p>=0)q[p].b=b
else q.push(o.ft(a,b))}},
eP:function(a,b){var s,r=this,q=H.H(r)
q.c.a(a)
q.h("2()").a(b)
if(r.as(a))return q.Q[1].a(r.j(0,a))
s=b.$0()
r.v(0,a,s)
return s},
a8:function(a,b){var s=this
if(typeof b=="string")return s.j3(s.b,b)
else if(typeof b=="number"&&(b&0x3ffffff)===b)return s.j3(s.c,b)
else return s.pg(b)},
pg:function(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.eF(a)
r=o.dY(n,s)
q=o.eG(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.jb(p)
if(r.length===0)o.fC(n,s)
return p.b},
bi:function(a,b){var s,r,q=this
H.H(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw H.d(P.aw(q))
s=s.c}},
is:function(a,b,c){var s,r=this,q=H.H(r)
q.c.a(b)
q.Q[1].a(c)
s=r.d5(a,b)
if(s==null)r.fL(a,b,r.ft(b,c))
else s.b=c},
j3:function(a,b){var s
if(a==null)return null
s=this.d5(a,b)
if(s==null)return null
this.jb(s)
this.fC(a,b)
return s.b},
iu:function(){this.r=this.r+1&67108863},
ft:function(a,b){var s=this,r=H.H(s),q=new H.k4(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.iu()
return q},
jb:function(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.iu()},
eF:function(a){return J.cx(a)&0x3ffffff},
eG:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.S(a[r].a,b))return r
return-1},
l:function(a){return P.mz(this)},
d5:function(a,b){return a[b]},
dY:function(a,b){return a[b]},
fL:function(a,b,c){a[b]=c},
fC:function(a,b){delete a[b]},
iE:function(a,b){return this.d5(a,b)!=null},
fI:function(){var s="<non-identifier-key>",r=Object.create(null)
this.fL(r,s,r)
this.fC(r,s)
return r},
$imv:1}
H.k3.prototype={
$1:function(a){var s=this.a,r=H.H(s)
return r.Q[1].a(s.j(0,r.c.a(a)))},
$S:function(){return H.H(this.a).h("2(1)")}}
H.k4.prototype={}
H.ej.prototype={
gm:function(a){return this.a.a},
gai:function(a){return this.a.a===0},
gH:function(a){var s=this.a,r=new H.ek(s,s.r,this.$ti.h("ek<1>"))
r.c=s.e
return r},
F:function(a,b){return this.a.as(b)}}
H.ek.prototype={
gu:function(){return this.$ti.c.a(this.d)},
n:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.d(P.aw(q))
s=r.c
if(s==null){r.sit(null)
return!1}else{r.sit(s.a)
r.c=s.c
return!0}},
sit:function(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
H.m8.prototype={
$1:function(a){return this.a(a)},
$S:32}
H.m9.prototype={
$2:function(a,b){return this.a(a,b)},
$S:35}
H.ma.prototype={
$1:function(a){return this.a(H.az(a))},
$S:40}
H.cK.prototype={
l:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
giX:function(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=H.mr(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
giW:function(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=H.mr(s.a+"|()",r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
k9:function(a){var s=this.b.exec(a)
if(s==null)return null
return new H.dA(s)},
fT:function(a,b,c){var s=b.length
if(c>s)throw H.d(P.a_(c,0,s,null,null))
return new H.i7(this,b,c)},
cd:function(a,b){return this.fT(a,b,0)},
mT:function(a,b){var s,r=t.K.a(this.giX())
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new H.dA(s)},
mS:function(a,b){var s,r=t.K.a(this.giW())
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
if(0>=s.length)return H.b(s,-1)
if(s.pop()!=null)return null
return new H.dA(s)},
kh:function(a,b,c){if(c<0||c>b.length)throw H.d(P.a_(c,0,b.length,null,null))
return this.mS(b,c)},
$idj:1}
H.dA.prototype={
gV:function(a){return this.b.index},
gX:function(){var s=this.b
return s.index+s[0].length},
ghW:function(){return this.b.length-1},
hX:function(a){var s,r,q,p,o
t.L.a(a)
s=H.a([],t.J)
for(r=a.length,q=this.b,p=0;p<a.length;a.length===r||(0,H.e)(a),++p){o=H.Z(a[p])
if(o<0||o>=q.length)return H.b(q,o)
C.a.q(s,q[o])}return s},
$ide:1,
$icP:1}
H.i7.prototype={
gH:function(a){return new H.dx(this.a,this.b,this.c)}}
H.dx.prototype={
gu:function(){return t.lu.a(this.d)},
n:function(){var s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
s=n.c
r=m.length
if(s<=r){q=n.a
p=q.mT(m,s)
if(p!=null){n.d=p
o=p.gX()
if(p.b.index===o){if(q.b.unicode){s=n.c
q=s+1
if(q<r){s=C.b.M(m,s)
if(s>=55296&&s<=56319){s=C.b.M(m,q)
s=s>=56320&&s<=57343}else s=!1}else s=!1}else s=!1
o=(s?o+1:o)+1}n.c=o
return!0}}n.b=n.d=null
return!1},
$iU:1}
H.dt.prototype={
gX:function(){return this.a+this.c.length},
ghW:function(){return 0},
hX:function(a){var s,r,q,p,o
t.L.a(a)
s=H.a([],t.s)
for(r=a.length,q=this.c,p=0;p<a.length;a.length===r||(0,H.e)(a),++p){o=H.Z(a[p])
if(o!==0)H.c(P.dn(o,null))
C.a.q(s,q)}return s},
$ide:1,
gV:function(a){return this.a}}
H.iw.prototype={
gH:function(a){return new H.ix(this.a,this.b,this.c)},
gah:function(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new H.dt(r,s)
throw H.d(H.ah())}}
H.ix.prototype={
n:function(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new H.dt(s,o)
q.c=r===q.c?r+1:r
return!0},
gu:function(){var s=this.d
s.toString
return s},
$iU:1}
H.hj.prototype={}
H.dg.prototype={
gm:function(a){return a.length},
$ida:1}
H.ev.prototype={
v:function(a,b,c){H.Z(c)
H.lG(b,a,a.length)
a[b]=c},
$iO:1,
$ik:1,
$il:1}
H.hi.prototype={
j:function(a,b){H.lG(b,a,a.length)
return a[b]}}
H.ew.prototype={
j:function(a,b){H.lG(b,a,a.length)
return a[b]},
be:function(a,b,c){return new Uint32Array(a.subarray(b,H.rK(b,c,a.length)))},
$iqY:1}
H.cN.prototype={
gm:function(a){return a.length},
j:function(a,b){H.lG(b,a,a.length)
return a[b]},
$icN:1,
$icR:1}
H.f3.prototype={}
H.f4.prototype={}
H.bx.prototype={
h:function(a){return H.iC(v.typeUniverse,this,a)},
a3:function(a){return H.rt(v.typeUniverse,this,a)}}
H.iq.prototype={}
H.iz.prototype={
l:function(a){return H.b0(this.a,null)}}
H.im.prototype={
l:function(a){return this.a}}
H.f9.prototype={}
P.l8.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:25}
P.l7.prototype={
$1:function(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:55}
P.l9.prototype={
$0:function(){this.a.$0()},
$S:20}
P.la.prototype={
$0:function(){this.a.$0()},
$S:20}
P.ly.prototype={
mt:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.dG(new P.lz(this,b),0),a)
else throw H.d(P.T("`setTimeout()` not found."))}}
P.lz.prototype={
$0:function(){this.b.$0()},
$S:1}
P.i9.prototype={
h1:function(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.iy(b)
else{s=r.a
if(q.h("bm<1>").b(b))s.iB(b)
else s.fz(q.c.a(b))}},
jE:function(a,b){var s=this.a
if(this.b)s.cA(a,b)
else s.mG(a,b)}}
P.lE.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:73}
P.lF.prototype={
$2:function(a,b){this.a.$2(1,new H.e3(a,t.k.a(b)))},
$S:84}
P.lQ.prototype={
$2:function(a,b){this.a(H.Z(a),b)},
$S:88}
P.dz.prototype={
l:function(a){return"IterationMarker("+this.b+", "+H.m(this.a)+")"}}
P.co.prototype={
gu:function(){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gu()},
n:function(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("U<1>");!0;){r=m.c
if(r!=null)if(r.n())return!0
else m.siY(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof P.dz){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.six(null)
return!1}if(0>=o.length)return H.b(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.I(r))
if(n instanceof P.co){r=m.d
if(r==null)r=m.d=[]
C.a.q(r,m.a)
m.a=n.a
continue}else{m.siY(n)
continue}}}}else{m.six(q)
return!0}}return!1},
six:function(a){this.b=this.$ti.h("1?").a(a)},
siY:function(a){this.c=this.$ti.h("U<1>?").a(a)},
$iU:1}
P.f8.prototype={
gH:function(a){return new P.co(this.a(),this.$ti.h("co<1>"))}}
P.dN.prototype={
l:function(a){return H.m(this.a)},
$ia3:1,
gdT:function(){return this.b}}
P.ib.prototype={
jE:function(a,b){var s
H.lT(a,"error",t.K)
s=this.a
if(s.a!==0)throw H.d(P.am("Future already completed"))
s.cA(a,b)}}
P.f7.prototype={
h1:function(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if(s.a!==0)throw H.d(P.am("Future already completed"))
s.iC(r.h("1/").a(b))}}
P.cU.prototype={
pr:function(a){if((this.c&15)!==6)return!0
return this.b.b.hE(t.iW.a(this.d),a.a,t.k4,t.K)},
p3:function(a){var s=this.e,r=t.z,q=t.K,p=a.a,o=this.$ti.h("2/"),n=this.b.b
if(t.ng.b(s))return o.a(n.q5(s,p,a.b,r,q,t.k))
else return o.a(n.hE(t.mq.a(s),p,r,q))}}
P.au.prototype={
hH:function(a,b,c){var s,r,q,p=this.$ti
p.a3(c).h("1/(2)").a(a)
s=$.aa
if(s!==C.l){c.h("@<0/>").a3(p.c).h("1(2)").a(a)
if(b!=null)b=P.t5(b,s)}r=new P.au(s,c.h("au<0>"))
q=b==null?1:3
this.fu(new P.cU(r,q,a,b,p.h("@<1>").a3(c).h("cU<1,2>")))
return r},
qd:function(a,b){return this.hH(a,null,b)},
j9:function(a,b,c){var s,r=this.$ti
r.a3(c).h("1/(2)").a(a)
s=new P.au($.aa,c.h("au<0>"))
this.fu(new P.cU(s,19,a,b,r.h("@<1>").a3(c).h("cU<1,2>")))
return s},
fu:function(a){var s,r=this,q=r.a
if(q<=1){a.a=t.f.a(r.c)
r.c=a}else{if(q===2){s=t.j_.a(r.c)
q=s.a
if(q<4){s.fu(a)
return}r.a=q
r.c=s.c}P.dE(null,null,r.b,t.M.a(new P.le(r,a)))}},
j1:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=t.f.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){n=t.j_.a(m.c)
s=n.a
if(s<4){n.j1(a)
return}m.a=s
m.c=n.c}l.a=m.e3(a)
P.dE(null,null,m.b,t.M.a(new P.lm(l,m)))}},
e2:function(){var s=t.f.a(this.c)
this.c=null
return this.e3(s)},
e3:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
iA:function(a){var s,r,q,p=this
p.a=1
try{a.hH(new P.li(p),new P.lj(p),t.P)}catch(q){s=H.aT(q)
r=H.ct(q)
P.tQ(new P.lk(p,s,r))}},
iC:function(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("bm<1>").b(a))if(q.b(a))P.lh(a,r)
else r.iA(a)
else{s=r.e2()
q.c.a(a)
r.a=4
r.c=a
P.dy(r,s)}},
fz:function(a){var s,r=this
r.$ti.c.a(a)
s=r.e2()
r.a=4
r.c=a
P.dy(r,s)},
cA:function(a,b){var s,r,q=this
t.k.a(b)
s=q.e2()
r=P.j4(a,b)
q.a=8
q.c=r
P.dy(q,s)},
iy:function(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("bm<1>").b(a)){this.iB(a)
return}this.mH(s.c.a(a))},
mH:function(a){var s=this
s.$ti.c.a(a)
s.a=1
P.dE(null,null,s.b,t.M.a(new P.lg(s,a)))},
iB:function(a){var s=this,r=s.$ti
r.h("bm<1>").a(a)
if(r.b(a)){if(a.a===8){s.a=1
P.dE(null,null,s.b,t.M.a(new P.ll(s,a)))}else P.lh(a,s)
return}s.iA(a)},
mG:function(a,b){this.a=1
P.dE(null,null,this.b,t.M.a(new P.lf(this,a,b)))},
$ibm:1}
P.le.prototype={
$0:function(){P.dy(this.a,this.b)},
$S:1}
P.lm.prototype={
$0:function(){P.dy(this.b,this.a.a)},
$S:1}
P.li.prototype={
$1:function(a){var s,r,q,p=this.a
p.a=0
try{p.fz(p.$ti.c.a(a))}catch(q){s=H.aT(q)
r=H.ct(q)
p.cA(s,r)}},
$S:25}
P.lj.prototype={
$2:function(a,b){this.a.cA(t.K.a(a),t.k.a(b))},
$S:87}
P.lk.prototype={
$0:function(){this.a.cA(this.b,this.c)},
$S:1}
P.lg.prototype={
$0:function(){this.a.fz(this.b)},
$S:1}
P.ll.prototype={
$0:function(){P.lh(this.b,this.a)},
$S:1}
P.lf.prototype={
$0:function(){this.a.cA(this.b,this.c)},
$S:1}
P.lp.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.kD(t.mY.a(q.d),t.z)}catch(p){s=H.aT(p)
r=H.ct(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=P.j4(s,r)
o.b=!0
return}if(l instanceof P.au&&l.a>=4){if(l.a===8){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.g7.b(l)){n=m.b.a
q=m.a
q.c=l.qd(new P.lq(n),t.z)
q.b=!1}},
$S:1}
P.lq.prototype={
$1:function(a){return this.a},
$S:64}
P.lo.prototype={
$0:function(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.hE(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=H.aT(l)
r=H.ct(l)
q=this.a
q.c=P.j4(s,r)
q.b=!0}},
$S:1}
P.ln.prototype={
$0:function(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.pr(s)&&p.a.e!=null){p.c=p.a.p3(s)
p.b=!1}}catch(o){r=H.aT(o)
q=H.ct(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=P.j4(r,q)
n.b=!0}},
$S:1}
P.ia.prototype={}
P.eJ.prototype={
gm:function(a){var s,r,q=this,p={},o=new P.au($.aa,t.hy)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new P.kB(p,q))
t.jE.a(new P.kC(p,o))
W.lc(q.a,q.b,r,!1,s.c)
return o}}
P.kB.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("~(1)")}}
P.kC.prototype={
$0:function(){this.b.iC(this.a.a)},
$S:1}
P.eK.prototype={}
P.hQ.prototype={}
P.iv.prototype={}
P.fe.prototype={$io8:1}
P.lO.prototype={
$0:function(){var s=t.K.a(H.d(this.a))
s.stack=this.b.l(0)
throw s},
$S:1}
P.iu.prototype={
q6:function(a){var s,r,q,p=null
t.M.a(a)
try{if(C.l===$.aa){a.$0()
return}P.oH(p,p,this,a,t.ef)}catch(q){s=H.aT(q)
r=H.ct(q)
P.lN(p,p,this,t.K.a(s),t.k.a(r))}},
q7:function(a,b,c){var s,r,q,p=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.l===$.aa){a.$1(b)
return}P.oI(p,p,this,a,b,t.ef,c)}catch(q){s=H.aT(q)
r=H.ct(q)
P.lN(p,p,this,t.K.a(s),t.k.a(r))}},
jv:function(a){return new P.lw(this,t.M.a(a))},
nV:function(a,b){return new P.lx(this,b.h("~(0)").a(a),b)},
kD:function(a,b){b.h("0()").a(a)
if($.aa===C.l)return a.$0()
return P.oH(null,null,this,a,b)},
hE:function(a,b,c,d){c.h("@<0>").a3(d).h("1(2)").a(a)
d.a(b)
if($.aa===C.l)return a.$1(b)
return P.oI(null,null,this,a,b,c,d)},
q5:function(a,b,c,d,e,f){d.h("@<0>").a3(e).a3(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.aa===C.l)return a.$2(b,c)
return P.t6(null,null,this,a,b,c,d,e,f)},
kv:function(a,b,c,d){return b.h("@<0>").a3(c).a3(d).h("1(2,3)").a(a)}}
P.lw.prototype={
$0:function(){return this.a.q6(this.b)},
$S:1}
P.lx.prototype={
$1:function(a){var s=this.c
return this.a.q7(this.b,s.a(a),s)},
$S:function(){return this.c.h("~(0)")}}
P.c4.prototype={
iZ:function(){return new P.c4(H.H(this).h("c4<1>"))},
gH:function(a){var s=this,r=new P.cV(s,s.r,H.H(s).h("cV<1>"))
r.c=s.e
return r},
gm:function(a){return this.a},
gai:function(a){return this.a===0},
gcN:function(a){return this.a!==0},
F:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.mM(b)},
mM:function(a){var s=this.d
if(s==null)return!1
return this.iI(s[this.iD(a)],a)>=0},
gah:function(a){var s=this.e
if(s==null)throw H.d(P.am("No elements"))
return H.H(this).c.a(s.a)},
gt:function(a){var s=this.f
if(s==null)throw H.d(P.am("No elements"))
return H.H(this).c.a(s.a)},
q:function(a,b){var s,r,q=this
H.H(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.iv(s==null?q.b=P.mL():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.iv(r==null?q.c=P.mL():r,b)}else return q.dV(b)},
dV:function(a){var s,r,q,p=this
H.H(p).c.a(a)
s=p.d
if(s==null)s=p.d=P.mL()
r=p.iD(a)
q=s[r]
if(q==null)s[r]=[p.fJ(a)]
else{if(p.iI(q,a)>=0)return!1
q.push(p.fJ(a))}return!0},
iv:function(a,b){H.H(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.fJ(b)
return!0},
mX:function(){this.r=this.r+1&1073741823},
fJ:function(a){var s,r=this,q=new P.ir(H.H(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.mX()
return q},
iD:function(a){return J.cx(a)&1073741823},
iI:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.S(a[r].a,b))return r
return-1}}
P.ir.prototype={}
P.cV.prototype={
gu:function(){return this.$ti.c.a(this.d)},
n:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.d(P.aw(q))
else if(r==null){s.sd3(null)
return!1}else{s.sd3(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
sd3:function(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
P.eh.prototype={}
P.k5.prototype={
$2:function(a,b){this.a.v(0,this.b.a(a),this.c.a(b))},
$S:26}
P.el.prototype={$iO:1,$ik:1,$il:1}
P.w.prototype={
gH:function(a){return new H.M(a,this.gm(a),H.av(a).h("M<w.E>"))},
an:function(a,b){return this.j(a,b)},
gai:function(a){return this.gm(a)===0},
gcN:function(a){return!this.gai(a)},
gah:function(a){if(this.gm(a)===0)throw H.d(H.ah())
return this.j(a,0)},
gt:function(a){if(this.gm(a)===0)throw H.d(H.ah())
return this.j(a,this.gm(a)-1)},
F:function(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.S(this.j(a,s),b))return!0
if(r!==this.gm(a))throw H.d(P.aw(a))}return!1},
cK:function(a,b){var s,r
H.av(a).h("E(w.E)").a(b)
s=this.gm(a)
for(r=0;r<s;++r){if(!H.b8(b.$1(this.j(a,r))))return!1
if(s!==this.gm(a))throw H.d(P.aw(a))}return!0},
b8:function(a,b){var s,r
H.av(a).h("E(w.E)").a(b)
s=this.gm(a)
for(r=0;r<s;++r){if(H.b8(b.$1(this.j(a,r))))return!0
if(s!==this.gm(a))throw H.d(P.aw(a))}return!1},
eZ:function(a,b){var s=H.av(a)
return new H.an(a,s.h("E(w.E)").a(b),s.h("an<w.E>"))},
eJ:function(a,b,c){var s=H.av(a)
return new H.J(a,s.a3(c).h("1(w.E)").a(b),s.h("@<w.E>").a3(c).h("J<1,2>"))},
bd:function(a,b){return H.be(a,b,null,H.av(a).h("w.E"))},
bx:function(a,b){var s,r,q,p,o=this
if(o.gai(a)){s=J.mq(0,H.av(a).h("w.E"))
return s}r=o.j(a,0)
q=P.bN(o.gm(a),r,!0,H.av(a).h("w.E"))
for(p=1;p<o.gm(a);++p)C.a.v(q,p,o.j(a,p))
return q},
aw:function(a){return this.bx(a,!0)},
q:function(a,b){var s
H.av(a).h("w.E").a(b)
s=this.gm(a)
this.sm(a,s+1)
this.v(a,s,b)},
R:function(a,b){var s,r
H.av(a).h("k<w.E>").a(b)
s=this.gm(a)
for(r=J.I(b);r.n();){this.q(a,r.gu());++s}},
dh:function(a){this.sm(a,0)},
dD:function(a){var s,r=this
if(r.gm(a)===0)throw H.d(H.ah())
s=r.j(a,r.gm(a)-1)
r.sm(a,r.gm(a)-1)
return s},
cw:function(a,b){var s,r=H.av(a)
r.h("j(w.E,w.E)?").a(b)
s=b==null?P.tj():b
H.nW(a,s,r.h("w.E"))},
dN:function(a,b,c){P.aL(b,c,this.gm(a))
return H.be(a,b,c,H.av(a).h("w.E"))},
oX:function(a,b,c,d){var s,r=H.av(a)
d=r.h("w.E").a(r.h("w.E?").a(d))
P.aL(b,c,this.gm(a))
for(s=b;s<c;++s)this.v(a,s,d)},
aT:function(a,b,c){var s
for(s=c;s<this.gm(a);++s)if(J.S(this.j(a,s),b))return s
return-1},
ap:function(a,b){return this.aT(a,b,0)},
l:function(a){return P.k_(a,"[","]")}}
P.eo.prototype={}
P.k6.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.m(a)
r.a=s+": "
r.a+=H.m(b)},
$S:61}
P.dd.prototype={
bi:function(a,b){var s,r,q=H.H(this)
q.h("~(1,2)").a(b)
for(s=this.gaO(),s=s.gH(s),q=q.Q[1];s.n();){r=s.gu()
b.$2(r,q.a(this.j(0,r)))}},
as:function(a){return this.gaO().F(0,a)},
gm:function(a){var s=this.gaO()
return s.gm(s)},
l:function(a){return P.mz(this)},
$ib4:1}
P.em.prototype={
gH:function(a){var s=this
return new P.f2(s,s.c,s.d,s.b,s.$ti.h("f2<1>"))},
gai:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
gah:function(a){var s,r=this,q=r.b
if(q===r.c)throw H.d(H.ah())
s=r.a
if(q>=s.length)return H.b(s,q)
return r.$ti.c.a(s[q])},
gt:function(a){var s,r=this,q=r.b,p=r.c
if(q===p)throw H.d(H.ah())
q=r.a
s=q.length
p=(p-1&s-1)>>>0
if(p<0||p>=s)return H.b(q,p)
return r.$ti.c.a(q[p])},
an:function(a,b){var s,r,q,p=this,o=p.gm(p)
if(0>b||b>=o)H.c(P.h9(b,p,"index",null,o))
s=p.a
r=s.length
q=(p.b+b&r-1)>>>0
if(q<0||q>=r)return H.b(s,q)
return p.$ti.c.a(s[q])},
dh:function(a){var s=this,r=s.b
if(r!==s.c){for(;r!==s.c;r=(r+1&s.a.length-1)>>>0)C.a.v(s.a,r,null)
s.b=s.c=0;++s.d}},
l:function(a){return P.k_(this,"{","}")},
kw:function(){var s,r,q=this,p=q.b
if(p===q.c)throw H.d(H.ah());++q.d
s=q.a
if(p>=s.length)return H.b(s,p)
r=q.$ti.c.a(s[p])
C.a.v(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
dV:function(a){var s,r,q,p,o=this,n=o.$ti
n.c.a(a)
C.a.v(o.a,o.c,a)
s=o.c
r=o.a.length
s=(s+1&r-1)>>>0
o.c=s
if(o.b===s){q=P.bN(r*2,null,!1,n.h("1?"))
n=o.a
s=o.b
p=n.length-s
C.a.dR(q,0,p,n,s)
C.a.dR(q,p,p+o.b,o.a,0)
o.b=0
o.c=o.a.length
o.sn9(q)}++o.d},
sn9:function(a){this.a=this.$ti.h("l<1?>").a(a)},
$inO:1}
P.f2.prototype={
gu:function(){return this.$ti.c.a(this.e)},
n:function(){var s,r,q=this,p=q.a
if(q.c!==p.d)H.c(P.aw(p))
s=q.d
if(s===q.b){q.sd3(null)
return!1}r=p.a
if(s>=r.length)return H.b(r,s)
q.sd3(r[s])
q.d=(q.d+1&p.a.length-1)>>>0
return!0},
sd3:function(a){this.e=this.$ti.h("1?").a(a)},
$iU:1}
P.aY.prototype={
gai:function(a){return this.gm(this)===0},
gcN:function(a){return this.gm(this)!==0},
l:function(a){return P.k_(this,"{","}")},
aG:function(a,b){var s,r=this.gH(this)
if(!r.n())return""
if(b===""){s=""
do s+=H.m(r.gu())
while(r.n())}else{s=""+H.m(r.gu())
for(;r.n();)s=s+b+H.m(r.gu())}return s.charCodeAt(0)==0?s:s},
bd:function(a,b){return H.nV(this,b,H.H(this).h("aY.E"))},
gah:function(a){var s=this.gH(this)
if(!s.n())throw H.d(H.ah())
return s.gu()},
gt:function(a){var s,r=this.gH(this)
if(!r.n())throw H.d(H.ah())
do s=r.gu()
while(r.n())
return s},
an:function(a,b){var s,r,q,p="index"
H.lT(b,p,t.S)
P.bc(b,p)
for(s=this.gH(this),r=0;s.n();){q=s.gu()
if(b===r)return q;++r}throw H.d(P.h9(b,this,p,null,r))}}
P.eF.prototype={$iO:1,$ik:1,$iby:1}
P.dB.prototype={
pi:function(a,b){var s,r,q=this.iZ()
for(s=this.gH(this);s.n();){r=s.gu()
if(b.F(0,r))q.q(0,r)}return q},
$iO:1,
$ik:1,
$iby:1}
P.iD.prototype={}
P.fc.prototype={
iZ:function(){return P.mw(this.$ti.c)},
gH:function(a){var s=this.a.gaO()
return s.gH(s)},
gm:function(a){var s=this.a
return s.gm(s)}}
P.f1.prototype={}
P.f5.prototype={}
P.fg.prototype={}
P.fh.prototype={}
P.kQ.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.aT(r)}return null},
$S:19}
P.kP.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.aT(r)}return null},
$S:19}
P.fH.prototype={
eh:function(a,b){var s
t.L.a(b)
s=C.aF.h4(b)
return s}}
P.iA.prototype={
h4:function(a){var s,r,q,p
t.L.a(a)
s=P.aL(0,null,a.gm(a))
for(r=0<s,q=~this.b>>>0;r;){p=a.j(0,0)
p.kN(0,q)
if(!this.a)throw H.d(P.aH("Invalid value in input: "+H.m(p),null,null))
return this.mN(a,0,s)}return P.ad(a,0,s)},
mN:function(a,b,c){var s,r,q
t.L.a(a)
for(s=~this.b>>>0,r=b,q="";r<c;++r){a.j(0,r).kN(0,s)
q+=H.bb(65533)}return q.charCodeAt(0)==0?q:q}}
P.fI.prototype={}
P.fK.prototype={
pv:function(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=P.aL(a1,a2,a0.length)
s=$.pD()
for(r=s.length,q=a1,p=q,o=null,n=-1,m=-1,l=0;q<a2;q=k){k=q+1
j=C.b.E(a0,q)
if(j===37){i=k+2
if(i<=a2){h=H.m7(C.b.E(a0,k))
g=H.m7(C.b.E(a0,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.b(s,f)
e=s[f]
if(e>=0){f=C.b.M("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a5("")
d=o}else d=o
d.a+=C.b.B(a0,p,q)
d.a+=H.bb(j)
p=k
continue}}throw H.d(P.aH("Invalid base64 data",a0,q))}if(o!=null){r=o.a+=C.b.B(a0,p,a2)
d=r.length
if(n>=0)P.nu(a0,m,a2,n,l,d)
else{c=C.d.Z(d-1,4)+1
if(c===1)throw H.d(P.aH(a,a0,a2))
for(;c<4;){r+="="
o.a=r;++c}}r=o.a
return C.b.cq(a0,a1,a2,r.charCodeAt(0)==0?r:r)}b=a2-a1
if(n>=0)P.nu(a0,m,a2,n,l,b)
else{c=C.d.Z(b,4)
if(c===1)throw H.d(P.aH(a,a0,a2))
if(c>1)a0=C.b.cq(a0,a2,a2,c===2?"==":"=")}return a0}}
P.fL.prototype={}
P.cE.prototype={}
P.cF.prototype={}
P.fW.prototype={}
P.i1.prototype={
eh:function(a,b){t.L.a(b)
return C.e_.h4(b)}}
P.i2.prototype={
h4:function(a){var s,r
t.L.a(a)
s=this.a
r=P.r0(s,a,0,null)
if(r!=null)return r
return new P.lB(s).ok(a,0,null,!0)}}
P.lB.prototype={
ok:function(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=P.aL(b,c,J.K(a))
if(b===s)return""
r=P.rF(a,b,s)
q=n.fA(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=P.rG(p)
n.b=0
throw H.d(P.aH(o,a,b+n.c))}return q},
fA:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.d.aX(b+c,2)
r=q.fA(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.fA(a,s,c,d)}return q.on(a,b,c,d)},
on:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a5(""),f=b+1,e=a.length
if(b<0||b>=e)return H.b(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.b.E("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.b.E(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.bb(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.bb(j)
break
case 65:g.a+=H.bb(j);--f
break
default:p=g.a+=H.bb(j)
g.a=p+H.bb(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.b(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.b(a,l)
g.a+=H.bb(a[l])}else g.a+=P.ad(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.bb(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.a3.prototype={
gdT:function(){return H.ct(this.$thrownJsError)}}
P.dM.prototype={
l:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fX(s)
return"Assertion failed"}}
P.hX.prototype={}
P.hm.prototype={
l:function(a){return"Throw of null."}}
P.bJ.prototype={
gfF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gfE:function(){return""},
l:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+H.m(n),l=q.gfF()+o+m
if(!q.a)return l
s=q.gfE()
r=P.fX(q.b)
return l+s+": "+r}}
P.dm.prototype={
gfF:function(){return"RangeError"},
gfE:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.m(q):""
else if(q==null)s=": Not greater than or equal to "+H.m(r)
else if(q>r)s=": Not in inclusive range "+H.m(r)+".."+H.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.m(r)
return s}}
P.h8.prototype={
gfF:function(){return"RangeError"},
gfE:function(){if(H.Z(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm:function(a){return this.f}}
P.i_.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.eS.prototype={
l:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.ch.prototype={
l:function(a){return"Bad state: "+this.a}}
P.fR.prototype={
l:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fX(s)+"."}}
P.hr.prototype={
l:function(a){return"Out of Memory"},
gdT:function(){return null},
$ia3:1}
P.eI.prototype={
l:function(a){return"Stack Overflow"},
gdT:function(){return null},
$ia3:1}
P.fT.prototype={
l:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.io.prototype={
l:function(a){return"Exception: "+this.a},
$ibU:1}
P.e7.prototype={
l:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.b.B(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.b.E(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.b.M(d,o)
if(n===10||n===13){m=o
break}}if(m-q>78)if(e-q<75){l=q+75
k=q
j=""
i="..."}else{if(m-e<75){k=m-75
l=m
i=""}else{k=e-36
l=e+36
i="..."}j="..."}else{l=m
k=q
j=""
i=""}h=C.b.B(d,k,l)
return f+j+h+i+"\n"+C.b.A(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.m(e)+")"):f},
$ibU:1}
P.k.prototype={
eJ:function(a,b,c){var s=H.H(this)
return H.mA(this,s.a3(c).h("1(k.E)").a(b),s.h("k.E"),c)},
eZ:function(a,b){var s=H.H(this)
return new H.an(this,s.h("E(k.E)").a(b),s.h("an<k.E>"))},
cK:function(a,b){var s
H.H(this).h("E(k.E)").a(b)
for(s=this.gH(this);s.n();)if(!H.b8(b.$1(s.gu())))return!1
return!0},
b8:function(a,b){var s
H.H(this).h("E(k.E)").a(b)
for(s=this.gH(this);s.n();)if(H.b8(b.$1(s.gu())))return!0
return!1},
bx:function(a,b){return P.i(this,b,H.H(this).h("k.E"))},
aw:function(a){return this.bx(a,!0)},
gm:function(a){var s,r=this.gH(this)
for(s=0;r.n();)++s
return s},
gai:function(a){return!this.gH(this).n()},
gcN:function(a){return!this.gai(this)},
bd:function(a,b){return H.nV(this,b,H.H(this).h("k.E"))},
gah:function(a){var s=this.gH(this)
if(!s.n())throw H.d(H.ah())
return s.gu()},
gt:function(a){var s,r=this.gH(this)
if(!r.n())throw H.d(H.ah())
do s=r.gu()
while(r.n())
return s},
an:function(a,b){var s,r,q
P.bc(b,"index")
for(s=this.gH(this),r=0;s.n();){q=s.gu()
if(b===r)return q;++r}throw H.d(P.h9(b,this,"index",null,r))},
l:function(a){return P.qa(this,"(",")")}}
P.U.prototype={}
P.ep.prototype={
l:function(a){return"MapEntry("+H.m(this.a)+": "+H.m(this.b)+")"}}
P.aq.prototype={
gJ:function(a){return P.Q.prototype.gJ.call(C.b4,this)},
l:function(a){return"null"}}
P.Q.prototype={constructor:P.Q,$iQ:1,
Y:function(a,b){return this===b},
gJ:function(a){return H.bO(this)},
l:function(a){return"Instance of '"+H.kq(this)+"'"},
toString:function(){return this.l(this)}}
P.iy.prototype={
l:function(a){return""},
$icf:1}
P.hC.prototype={
gH:function(a){return new P.hB(this.a)},
gt:function(a){var s,r,q=this.a,p=q.length
if(p===0)throw H.d(P.am("No elements."))
s=C.b.M(q,p-1)
if((s&64512)===56320&&p>1){r=C.b.M(q,p-2)
if((r&64512)===55296)return P.oz(r,s)}return s}}
P.hB.prototype={
gu:function(){return this.d},
n:function(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=C.b.E(n,o)
r=o+1
if((s&64512)===55296&&r<m){q=C.b.E(n,r)
if((q&64512)===56320){p.c=r+1
p.d=P.oz(s,q)
return!0}}p.c=r
p.d=s
return!0},
$iU:1}
P.a5.prototype={
gm:function(a){return this.a.length},
l:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iqO:1}
P.kM.prototype={
$2:function(a,b){throw H.d(P.aH("Illegal IPv4 address, "+a,this.a,b))},
$S:56}
P.kN.prototype={
$2:function(a,b){throw H.d(P.aH("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:54}
P.kO.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.cu(C.b.B(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:13}
P.cq.prototype={
gj7:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?""+o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.m(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.c(H.ac("_text"))}return o},
ghy:function(){var s,r=this,q=r.y
if(q==null){s=r.e
if(s.length!==0&&C.b.E(s,0)===47)s=C.b.az(s,1)
q=s.length===0?C.q:P.nJ(new H.J(H.a(s.split("/"),t.s),t.f5.a(P.tn()),t.iZ),t.N)
if(r.y==null)r.smD(q)
else q=H.c(H.ac("pathSegments"))}return q},
gJ:function(a){var s=this,r=s.z
if(r==null){r=C.b.gJ(s.gj7())
if(s.z==null)s.z=r
else r=H.c(H.ac("hashCode"))}return r},
gdI:function(){return this.b},
gbt:function(a){var s=this.c
if(s==null)return""
if(C.b.a2(s,"["))return C.b.B(s,1,s.length-1)
return s},
gcQ:function(a){var s=this.d
return s==null?P.om(this.a):s},
gcp:function(){var s=this.f
return s==null?"":s},
geB:function(){var s=this.r
return s==null?"":s},
pk:function(a){var s=this.a
if(a.length!==s.length)return!1
return P.rz(a,s)},
iV:function(a,b){var s,r,q,p,o,n
for(s=0,r=0;C.b.al(b,"../",r);){r+=3;++s}q=C.b.hq(a,"/")
while(!0){if(!(q>0&&s>0))break
p=C.b.eI(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
if(!n||o===3)if(C.b.M(a,p+1)===46)n=!n||C.b.M(a,p+2)===46
else n=!1
else n=!1
if(n)break;--s
q=p}return C.b.cq(a,q+1,null,C.b.az(b,r-3*s))},
kB:function(a){return this.dF(P.mH(a))},
dF:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
if(a.gaV().length!==0){s=a.gaV()
if(a.gds()){r=a.gdI()
q=a.gbt(a)
p=a.gdt()?a.gcQ(a):h}else{p=h
q=p
r=""}o=P.c5(a.gaU(a))
n=a.gcL()?a.gcp():h}else{s=i.a
if(a.gds()){r=a.gdI()
q=a.gbt(a)
p=P.mR(a.gdt()?a.gcQ(a):h,s)
o=P.c5(a.gaU(a))
n=a.gcL()?a.gcp():h}else{r=i.b
q=i.c
p=i.d
o=i.e
if(a.gaU(a)==="")n=a.gcL()?a.gcp():i.f
else{m=P.rE(i,o)
if(m>0){l=C.b.B(o,0,m)
o=a.geC()?l+P.c5(a.gaU(a)):l+P.c5(i.iV(C.b.az(o,l.length),a.gaU(a)))}else if(a.geC())o=P.c5(a.gaU(a))
else if(o.length===0)if(q==null)o=s.length===0?a.gaU(a):P.c5(a.gaU(a))
else o=P.c5("/"+a.gaU(a))
else{k=i.iV(o,a.gaU(a))
j=s.length===0
if(!j||q!=null||C.b.a2(o,"/"))o=P.c5(k)
else o=P.mT(k,!j||q!=null)}n=a.gcL()?a.gcp():h}}}return new P.cq(s,r,q,p,o,n,a.ghm()?a.geB():h)},
gds:function(){return this.c!=null},
gdt:function(){return this.d!=null},
gcL:function(){return this.f!=null},
ghm:function(){return this.r!=null},
geC:function(){return C.b.a2(this.e,"/")},
hI:function(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw H.d(P.T("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw H.d(P.T(u.z))
q=r.r
if((q==null?"":q)!=="")throw H.d(P.T(u.U))
q=$.ng()
if(q)q=P.ox(r)
else{if(r.c!=null&&r.gbt(r)!=="")H.c(P.T(u.Q))
s=r.ghy()
P.rw(s,!1)
q=P.kD(C.b.a2(r.e,"/")?""+"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q}return q},
l:function(a){return this.gj7()},
Y:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.jJ.b(b))if(q.a===b.gaV())if(q.c!=null===b.gds())if(q.b===b.gdI())if(q.gbt(q)===b.gbt(b))if(q.gcQ(q)===b.gcQ(b))if(q.e===b.gaU(b)){s=q.f
r=s==null
if(!r===b.gcL()){if(r)s=""
if(s===b.gcp()){s=q.r
r=s==null
if(!r===b.ghm()){if(r)s=""
s=s===b.geB()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
smD:function(a){this.y=t.fm.a(a)},
$ic2:1,
gaV:function(){return this.a},
gaU:function(a){return this.e}}
P.kL.prototype={
gkI:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.b(m,0)
s=o.a
m=m[0]+1
r=C.b.aT(s,"?",m)
q=s.length
if(r>=0){p=P.fd(s,r+1,q,C.G,!1)
q=r}else p=n
m=o.c=new P.id("data","",n,n,P.fd(s,m,q,C.ai,!1),p,n)}return m},
l:function(a){var s,r=this.b
if(0>=r.length)return H.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.lI.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.b(s,a)
s=s[a]
C.cO.oX(s,0,96,b)
return s},
$S:53}
P.lJ.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.b.E(b,r)^96
if(q>=96)return H.b(a,q)
a[q]=c}},
$S:24}
P.lK.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.b.E(b,0),r=C.b.E(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.b(a,q)
a[q]=c}},
$S:24}
P.br.prototype={
gds:function(){return this.c>0},
gdt:function(){return this.c>0&&this.d+1<this.e},
gcL:function(){return this.f<this.r},
ghm:function(){return this.r<this.a.length},
geC:function(){return C.b.al(this.a,"/",this.e)},
gaV:function(){var s=this.x
return s==null?this.x=this.mL():s},
mL:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.b.a2(r.a,"http"))return"http"
if(q===5&&C.b.a2(r.a,"https"))return"https"
if(s&&C.b.a2(r.a,"file"))return"file"
if(q===7&&C.b.a2(r.a,"package"))return"package"
return C.b.B(r.a,0,q)},
gdI:function(){var s=this.c,r=this.b+3
return s>r?C.b.B(this.a,r,s-1):""},
gbt:function(a){var s=this.c
return s>0?C.b.B(this.a,s,this.d):""},
gcQ:function(a){var s,r=this
if(r.gdt())return P.cu(C.b.B(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.b.a2(r.a,"http"))return 80
if(s===5&&C.b.a2(r.a,"https"))return 443
return 0},
gaU:function(a){return C.b.B(this.a,this.e,this.f)},
gcp:function(){var s=this.f,r=this.r
return s<r?C.b.B(this.a,s+1,r):""},
geB:function(){var s=this.r,r=this.a
return s<r.length?C.b.az(r,s+1):""},
ghy:function(){var s,r,q=this.e,p=this.f,o=this.a
if(C.b.al(o,"/",q))++q
if(q===p)return C.q
s=H.a([],t.s)
for(r=q;r<p;++r)if(C.b.M(o,r)===47){C.a.q(s,C.b.B(o,q,r))
q=r+1}C.a.q(s,C.b.B(o,q,p))
return P.nJ(s,t.N)},
iP:function(a){var s=this.d+1
return s+a.length===this.e&&C.b.al(this.a,a,s)},
pX:function(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new P.br(C.b.B(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.x)},
kB:function(a){return this.dF(P.mH(a))},
dF:function(a){if(a instanceof P.br)return this.n3(this,a)
return this.ja().dF(a)},
n3:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&C.b.a2(a.a,"file"))p=b.e!==b.f
else if(q&&C.b.a2(a.a,"http"))p=!b.iP("80")
else p=!(r===5&&C.b.a2(a.a,"https"))||!b.iP("443")
if(p){o=r+1
return new P.br(C.b.B(a.a,0,o)+C.b.az(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.x)}else return this.ja().dF(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new P.br(C.b.B(a.a,0,r)+C.b.az(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.x)}c=b.a
if(s<c.length){r=a.r
return new P.br(C.b.B(a.a,0,r)+C.b.az(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.x)}return a.pX()}s=b.a
if(C.b.al(s,"/",n)){m=a.e
l=P.of(this)
k=l>0?l:m
o=k-n
return new P.br(C.b.B(a.a,0,k)+C.b.az(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.x)}j=a.e
i=a.f
if(j===i&&a.c>0){for(;C.b.al(s,"../",n);)n+=3
o=j-n+1
return new P.br(C.b.B(a.a,0,j)+"/"+C.b.az(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.x)}h=a.a
l=P.of(this)
if(l>=0)g=l
else for(g=j;C.b.al(h,"../",g);)g+=3
f=0
while(!0){e=n+3
if(!(e<=c&&C.b.al(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(C.b.M(h,i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!C.b.al(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new P.br(C.b.B(h,0,i)+d+C.b.az(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.x)},
hI:function(){var s,r,q=this,p=q.b
if(p>=0){s=!(p===4&&C.b.a2(q.a,"file"))
p=s}else p=!1
if(p)throw H.d(P.T("Cannot extract a file path from a "+q.gaV()+" URI"))
p=q.f
s=q.a
if(p<s.length){if(p<q.r)throw H.d(P.T(u.z))
throw H.d(P.T(u.U))}r=$.ng()
if(r)p=P.ox(q)
else{if(q.c<q.d)H.c(P.T(u.Q))
p=C.b.B(s,q.e,p)}return p},
gJ:function(a){var s=this.y
return s==null?this.y=C.b.gJ(this.a):s},
Y:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
ja:function(){var s=this,r=null,q=s.gaV(),p=s.gdI(),o=s.c>0?s.gbt(s):r,n=s.gdt()?s.gcQ(s):r,m=s.a,l=s.f,k=C.b.B(m,s.e,l),j=s.r
l=l<j?s.gcp():r
return new P.cq(q,p,o,n,k,l,j<m.length?s.geB():r)},
l:function(a){return this.a},
$ic2:1}
P.id.prototype={}
W.y.prototype={}
W.fC.prototype={
l:function(a){var s=String(a)
s.toString
return s}}
W.fF.prototype={
l:function(a){var s=String(a)
s.toString
return s}}
W.cC.prototype={
sbs:function(a,b){a.height=b},
sqr:function(a,b){a.width=b},
$icC:1}
W.dR.prototype={
shk:function(a,b){a.fillStyle=b},
sih:function(a,b){a.strokeStyle=b},
m5:function(a,b){return a.stroke(b)},
$idR:1}
W.bK.prototype={
gm:function(a){return a.length}}
W.jh.prototype={
l:function(a){var s=String(a)
s.toString
return s}}
W.dX.prototype={
l:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.m(r)+", "
s=a.top
s.toString
s=r+H.m(s)+") "
r=a.width
r.toString
r=s+H.m(r)+" x "
s=a.height
s.toString
return r+H.m(s)},
Y:function(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gJ:function(a){var s,r,q,p=a.left
p.toString
p=C.f.gJ(p)
s=a.top
s.toString
s=C.f.gJ(s)
r=a.width
r.toString
r=C.f.gJ(r)
q=a.height
q.toString
return W.ob(p,s,r,C.f.gJ(q))},
$imC:1}
W.t.prototype={
l:function(a){var s=a.localName
s.toString
return s},
$it:1}
W.u.prototype={$iu:1}
W.aV.prototype={
mF:function(a,b,c,d){return a.addEventListener(b,H.dG(t.D.a(c),1),!1)},
n0:function(a,b,c,d){return a.removeEventListener(b,H.dG(t.D.a(c),1),!1)},
$iaV:1}
W.h0.prototype={
gm:function(a){return a.length}}
W.ba.prototype={$iba:1}
W.b5.prototype={
l:function(a){var s=a.nodeValue
return s==null?this.ma(a):s}}
W.ht.prototype={$iht:1}
W.hF.prototype={
gm:function(a){return a.length}}
W.bA.prototype={}
W.dw.prototype={
gnE:function(a){var s=new P.au($.aa,t.iS),r=t.hv.a(new W.l6(new P.f7(s,t.fD)))
this.mR(a)
r=W.oN(r,t.p)
r.toString
this.n1(a,r)
return s},
n1:function(a,b){var s=a.requestAnimationFrame(H.dG(t.hv.a(b),1))
s.toString
return s},
mR:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.l6.prototype={
$1:function(a){this.a.h1(0,H.lD(a))},
$S:52}
W.eX.prototype={
l:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.m(r)+", "
s=a.top
s.toString
s=r+H.m(s)+") "
r=a.width
r.toString
r=s+H.m(r)+" x "
s=a.height
s.toString
return r+H.m(s)},
Y:function(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gJ:function(a){var s,r,q,p=a.left
p.toString
p=C.f.gJ(p)
s=a.top
s.toString
s=C.f.gJ(s)
r=a.width
r.toString
r=C.f.gJ(r)
q=a.height
q.toString
return W.ob(p,s,r,C.f.gJ(q))}}
W.mn.prototype={}
W.eZ.prototype={}
W.ij.prototype={}
W.f_.prototype={
nZ:function(){var s=this
if(s.b==null)return $.ni()
s.nc()
s.b=null
s.smZ(null)
return $.ni()},
nb:function(){var s,r=this.d,q=r!=null
if(q&&!0){s=this.b
s.toString
t.D.a(r)
if(q)J.pH(s,this.c,r,!1)}},
nc:function(){var s,r=this.d
if(r!=null){s=this.b
s.toString
J.pI(s,this.c,t.D.a(r),!1)}},
smZ:function(a){this.d=t.D.a(a)}}
W.ld.prototype={
$1:function(a){return this.a.$1(t.fq.a(a))},
$S:51}
P.it.prototype={
ms:function(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=C.d.aX(a-s,k)
r=a>>>0
a=C.d.aX(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.d.aX(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+C.d.aX(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+C.d.aX(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=C.d.aX(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+C.d.aX(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.e1()
l.e1()
l.e1()
l.e1()},
e1:function(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=C.d.aX(o-n+(q-p)+(m-r),4294967296)>>>0},
$iqy:1}
P.cO.prototype={
l:function(a){return"Point("+H.m(this.a)+", "+H.m(this.b)+")"},
Y:function(a,b){if(b==null)return!1
return b instanceof P.cO&&this.a===b.a&&this.b===b.b},
gJ:function(a){var s=C.f.gJ(this.a),r=C.f.gJ(this.b),q=H.nY(H.nY(0,s),r)
q=q+((q&67108863)<<3)&536870911
q^=q>>>11
return q+((q&16383)<<15)&536870911}}
A.ai.prototype={
gH:function(a){var s=this.$ti,r=J.r(this.a,new A.k0(this),s.h("U<1>"))
return new A.f0(P.i(r,!1,r.$ti.h("C.E")),s.h("f0<1>"))}}
A.k0.prototype={
$1:function(a){return J.I(this.a.$ti.h("k<1>").a(a))},
$S:function(){return this.a.$ti.h("U<1>(k<1>)")}}
A.f0.prototype={
n:function(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].n()){p.siR(null)
return!1}if(r>4294967295)H.c(P.a_(r,0,4294967295,"length",null))
q=J.nE(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(s>=o.length)return H.b(o,s)
q[s]=o[s].gu()}p.siR(q)
return!0},
gu:function(){var s=this.b
return s==null?H.c(P.am("No element")):s},
siR:function(a){this.b=this.$ti.h("l<1>?").a(a)},
$iU:1}
G.lv.prototype={
ga9:function(){var s=this.d
return s==null?H.c(H.f("_peekToken")):s},
bE:function(){var s=this,r=s.ga9()
s.c=r
s.d=t.q.a(s.a.av(!1))
return r},
iU:function(a,b){var s=this
if(s.ga9().a===a){s.c=s.ga9()
s.d=t.q.a(s.a.av(!1))
return!0}else return!1},
e0:function(a){return this.iU(a,!1)},
aW:function(a){if(!this.iU(a,!1))this.fD(G.o_(a))},
fD:function(a){var s,r=this.bE(),q=null
try{q="expected "+a+", but found "+H.m(r)}catch(s){H.aT(s)
q="parsing error expected "+a}this.cC(q,r.b)},
cC:function(a,b){var s=$.lC;(s==null?H.c(H.f("messages")):s).oH(0,a,b)},
af:function(a){var s=this.c
if(s==null||s.b.aE(0,a)<0)return a
return a.oJ(0,this.c.b)},
pH:function(){var s,r=this,q=H.a([],t.b7),p=r.ga9(),o=r.a
o.e=!0
do{s=r.ks()
if(s!=null)C.a.q(q,s)}while(r.e0(19))
o.e=!1
if(q.length!==0)return new B.hG(q,r.af(p.b))
return null},
ks:function(){var s,r=H.a([],t.iM),q=this.ga9()
for(;!0;){s=this.lP(r.length===0)
if(s!=null)C.a.q(r,s)
else break}if(r.length===0)return null
return new B.ce(r,this.af(q.b))},
pE:function(){var s,r,q,p,o,n,m=this.ks()
if(m!=null)for(s=m.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
if(p.b!==513){o=$.lC
if(o==null)o=H.c(H.f("messages"))
n=new F.es(C.K,"compound selector can not contain combinator",p.a,o.b.x)
C.a.q(o.c,n)
o.a.$1(n)}}return m},
lP:function(a){var s,r,q,p,o,n,m=this,l=m.ga9()
switch(m.ga9().a){case 12:m.aW(12)
s=515
r=!1
break
case 13:m.aW(13)
s=516
r=!1
break
case 14:m.aW(14)
s=517
r=!1
break
case 36:m.aW(36)
s=513
r=!0
break
default:s=513
r=!1}if(s===513&&!a){q=m.c
if(q!=null){q=q.b
q=Y.c8(q.a,q.c)
p=m.ga9().b
p=q.b!==Y.c8(p.a,p.b).b
q=p}else q=!1
if(q)s=514}o=m.af(l.b)
n=r?new B.cG(new B.hT(o),o):m.i7()
if(n==null)l=s===515||s===516||s===517
else l=!1
if(l)n=new B.cG(new B.ca("",o),o)
if(n!=null)return new B.eG(s,n,o)
return null},
i7:function(){var s,r,q=this,p=q.ga9().b
switch(q.ga9().a){case 15:s=new B.cl(q.af(q.bE().b))
break
case 511:s=q.bJ()
break
default:if(G.nZ(q.ga9().a))s=q.bJ()
else{if(q.ga9().a===9)return null
s=null}break}if(q.e0(16)){switch(q.ga9().a){case 15:r=new B.cl(q.af(q.bE().b))
break
case 511:r=q.bJ()
break
default:q.cC("expected element name or universal(*), but found "+q.ga9().l(0),q.ga9().b)
r=null
break}return new B.hh(s,new B.cG(r,r.a),q.af(p))}else if(s!=null)return new B.cG(s,q.af(p))
else return q.lQ()},
iw:function(a){var s,r=this.c
if(r!=null&&r.a===a){r=r.b
r=Y.c8(r.a,r.c)
s=this.ga9().b
return r.b!==Y.c8(s.a,s.b).b}return!1},
lQ:function(){var s=this,r=s.ga9().b
switch(s.ga9().a){case 11:s.aW(11)
if(s.iw(11)){s.cC("Not a valid ID selector expected #id",s.af(r))
return null}return new B.h3(s.bJ(),s.af(r))
case 8:s.aW(8)
if(s.iw(8)){s.cC("Not a valid class selector expected .className",s.af(r))
return null}return new B.fQ(s.bJ(),s.af(r))
case 17:return s.pF(r)
case 4:return s.pD()
case 62:s.cC("name must start with a alpha character, but found a number",s.ga9().b)
s.bE()
break}return null},
pF:function(a){var s,r,q,p,o,n,m,l,k=this
k.aW(17)
s=k.e0(17)
if(k.ga9().a===511)r=k.bJ()
else return null
q=r.b.toLowerCase()
if(k.ga9().a===2){p=!s
if(p&&q==="not"){k.aW(2)
o=k.i7()
k.aW(3)
p=k.af(a)
return new B.hl(o,new B.hk(p),p)}else{if(p)p=q==="host"||q==="host-context"||q==="global-context"
else p=!1
if(p){k.aW(2)
n=k.pE()
if(n==null){k.fD("a selector argument")
return null}k.aW(3)
return new B.eA(n,r,k.af(a))}else{p=k.a
p.d=!0
k.aW(2)
m=k.af(a)
l=k.pG()
p.d=!1
if(l instanceof B.dr){k.aW(3)
return s?new B.hy(!1,r,m):new B.eA(l,r,m)}else{k.fD("CSS expression")
return null}}}}p=!s
return!p||C.dX.a.as(q)?new B.dl(p,r,k.af(a)):new B.dk(r,k.af(a))},
pG:function(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="_peekToken",f=i.ga9().b,e=H.a([],t.oQ)
for(s=i.a,r=t.q,q=h,p=q,o=!0;o;){n=i.d
switch((n==null?H.c(H.f(g)):n).a){case 12:f=n.b
i.c=n
i.d=r.a(s.av(!1))
C.a.q(e,new B.hq(i.af(f)))
p=n
break
case 34:f=n.b
i.c=n
i.d=r.a(s.av(!1))
C.a.q(e,new B.hp(i.af(f)))
p=n
break
case 60:i.c=n
i.d=r.a(s.av(!1))
q=P.cu(n.ga_(n),h)
p=n
break
case 62:i.c=n
i.d=r.a(s.av(!1))
q=P.bS(n.ga_(n))
p=n
break
case 25:q="'"+G.oB(i.hB(!1),!0)+"'"
return new B.aj(q,q,i.af(f))
case 26:q='"'+G.oB(i.hB(!1),!1)+'"'
return new B.aj(q,q,i.af(f))
case 511:q=i.bJ()
break
default:o=!1}if(o&&q!=null){m=i.af(f)
l=i.d
k=(l==null?H.c(H.f(g)):l).a
switch(k){case 600:j=new B.fV(q,p.ga_(p),m)
n=i.d
i.c=n==null?H.c(H.f(g)):n
i.d=r.a(s.av(!1))
break
case 601:j=new B.fY(q,p.ga_(p),m)
n=i.d
i.c=n==null?H.c(H.f(g)):n
i.d=r.a(s.av(!1))
break
case 602:case 603:case 604:case 605:case 606:case 607:j=new B.he(k,q,p.ga_(p),m)
n=i.d
i.c=n==null?H.c(H.f(g)):n
i.d=r.a(s.av(!1))
break
case 608:case 609:case 610:case 611:j=new B.fD(k,q,p.ga_(p),m)
n=i.d
i.c=n==null?H.c(H.f(g)):n
i.d=r.a(s.av(!1))
break
case 612:case 613:j=new B.hU(k,q,p.ga_(p),m)
n=i.d
i.c=n==null?H.c(H.f(g)):n
i.d=r.a(s.av(!1))
break
case 614:case 615:j=new B.h2(k,q,p.ga_(p),m)
n=i.d
i.c=n==null?H.c(H.f(g)):n
i.d=r.a(s.av(!1))
break
case 24:j=new B.hv(q,p.ga_(p),m)
n=i.d
i.c=n==null?H.c(H.f(g)):n
i.d=r.a(s.av(!1))
break
case 617:j=new B.h1(q,p.ga_(p),m)
n=i.d
i.c=n==null?H.c(H.f(g)):n
i.d=r.a(s.av(!1))
break
case 618:case 619:case 620:j=new B.hA(k,q,p.ga_(p),m)
n=i.d
i.c=n==null?H.c(H.f(g)):n
i.d=r.a(s.av(!1))
break
case 621:j=new B.fP(k,q,p.ga_(p),m)
n=i.d
i.c=n==null?H.c(H.f(g)):n
i.d=r.a(s.av(!1))
break
case 622:j=new B.hz(k,q,p.ga_(p),m)
n=i.d
i.c=n==null?H.c(H.f(g)):n
i.d=r.a(s.av(!1))
break
case 623:case 624:case 625:case 626:j=new B.i4(k,q,p.ga_(p),m)
n=i.d
i.c=n==null?H.c(H.f(g)):n
i.d=r.a(s.av(!1))
break
default:j=q instanceof B.ca?new B.aj(q,q.b,m):new B.ho(q,p.ga_(p),m)}C.a.q(e,j)
q=h}}return new B.dr(e,i.af(f))},
pD:function(){var s,r,q,p=this,o=p.ga9()
if(p.e0(4)){s=p.bJ()
switch(p.ga9().a){case 28:case 530:case 531:case 532:case 533:case 534:r=p.ga9().a
p.bE()
break
default:r=535}if(r!==535)q=p.ga9().a===511?p.bJ():p.hB(!1)
else q=null
p.aW(5)
return new B.fJ(r,q,s,p.af(o.b))}return null},
hB:function(a){var s,r,q,p,o=this,n=o.ga9(),m=o.a,l=m.c
m.c=!1
switch(o.ga9().a){case 25:o.bE()
o.ga9()
s=25
break
case 26:o.bE()
o.ga9()
s=26
break
default:o.cC("unexpected string",o.af(n.b))
s=-1
break}n=t.q
r=""
while(!0){q=o.d
if((q==null?H.c(H.f("_peekToken")):q).a!==s)p=q.a!==1
else p=!1
if(!p)break
o.c=q
o.d=n.a(m.av(!1))
r+=q.ga_(q)}m.c=l
if(s!==3)o.bE()
return r.charCodeAt(0)==0?r:r},
bJ:function(){var s=this.bE(),r=s.a
if(r!==511&&!G.nZ(r)){if($.lC==null)H.c(H.f("messages"))
return new B.ca("",this.af(s.b))}return new B.ca(s.ga_(s),this.af(s.b))}}
G.bp.prototype={
ga_:function(a){var s=this.b
return P.ad(C.r.be(s.a.c,s.b,s.c),0,null)},
l:function(a){var s=G.o_(this.a),r=C.b.eW(this.ga_(this))
if(s!==r){if(r.length>10)r=C.b.B(r,0,8)+"..."
return s+"("+r+")"}else return s}}
G.h4.prototype={
ga_:function(a){return this.c}}
G.kG.prototype={
av:function(a){var s,r,q,p,o,n,m,l,k=this
k.r=k.f
s=k.cE()
switch(s){case 10:case 13:case 32:case 9:return k.p_()
case 0:return k.P(1)
case 64:r=k.cF()
if(G.hW(r)||r===45){q=k.f
p=k.r
k.r=q
k.cE()
k.ex()
o=k.b
n=k.r
m=G.mF(C.bs,"type",o,n,k.f-n)
if(m===-1){n=k.r
m=G.mF(C.bl,"type",o,n,k.f-n)}if(m!==-1)return k.P(m)
else{k.r=p
k.f=q}}return k.P(10)
case 46:l=k.r
if(k.ps())if(k.ey().a===60){k.r=l
return k.P(62)}else return k.P(65)
return k.P(8)
case 40:return k.P(2)
case 41:return k.P(3)
case 123:return k.P(6)
case 125:return k.P(7)
case 91:return k.P(4)
case 93:if(k.ag(93)&&k.ag(62))return k.cO()
return k.P(5)
case 35:return k.P(11)
case 43:if(k.j_(s))return k.ey()
return k.P(12)
case 45:if(k.d||!1)return k.P(34)
else if(k.j_(s))return k.ey()
else if(G.hW(s)||s===45)return k.ex()
return k.P(34)
case 62:return k.P(13)
case 126:if(k.ag(61))return k.P(530)
return k.P(14)
case 42:if(k.ag(61))return k.P(534)
return k.P(15)
case 38:return k.P(36)
case 124:if(k.ag(61))return k.P(531)
return k.P(16)
case 58:return k.P(17)
case 44:return k.P(19)
case 59:return k.P(9)
case 37:return k.P(24)
case 39:return k.P(25)
case 34:return k.P(26)
case 47:if(k.ag(42))return k.oZ()
return k.P(27)
case 60:if(k.ag(33))if(k.ag(45)&&k.ag(45))return k.oY()
else{if(k.ag(91)){o=k.ch.a
o=k.ag(C.b.E(o,0))&&k.ag(C.b.E(o,1))&&k.ag(C.b.E(o,2))&&k.ag(C.b.E(o,3))&&k.ag(C.b.E(o,4))&&k.ag(91)}else o=!1
if(o)return k.cO()}return k.P(32)
case 61:return k.P(28)
case 94:if(k.ag(61))return k.P(532)
return k.P(30)
case 36:if(k.ag(61))return k.P(533)
return k.P(31)
case 33:return k.ex()
default:if(!k.e&&s===92)return k.P(35)
if(k.c)o=(s===k.x||s===k.y)&&k.cF()===k.z
else o=!1
if(o){k.cE()
k.r=k.f
return k.P(508)}else{o=s===118
if(o&&k.ag(97)&&k.ag(114)&&k.ag(45))return k.P(400)
else if(o&&k.ag(97)&&k.ag(114)&&k.cF()===45)return k.P(401)
else if(G.hW(s)||s===45)return k.ex()
else if(s>=48&&s<=57)return k.ey()}return k.P(65)}},
cO:function(){return this.av(!1)},
ex:function(){var s,r,q,p,o,n,m,l,k,j=this,i=H.a([],t.t),h=j.f
j.f=j.r
r=j.b
s=r.length
while(!0){q=j.f
if(!(q<s)){s=q
break}p=C.b.M(r,q)
if(p===92&&j.c){o=j.f=q+1
j.oz(o+6)
q=j.f
if(q!==o){C.a.q(i,P.cu("0x"+C.b.B(r,o,q),null))
q=j.f
if(q===s){s=q
break}p=C.b.M(r,q)
if(q-o!==6)n=p===32||p===9||p===13||p===10
else n=!1
if(n)j.f=q+1}else{if(q===s){s=q
break}j.f=q+1
C.a.q(i,C.b.M(r,q))}}else{if(q>=h)if(j.d)if(!G.hW(p))n=p>=48&&p<=57
else n=!0
else{if(!G.hW(p))n=p>=48&&p<=57
else n=!0
n=n||p===45}else n=!0
if(n){C.a.q(i,p);++j.f}else{s=q
break}}}m=j.a.fn(0,j.r,s)
l=P.ad(i,0,null)
if(!j.d&&!j.e){s=j.r
k=G.mF(C.ab,"unit",r,s,j.f-s)}else k=-1
if(k===-1)k=C.b.B(r,j.r,j.f)==="!important"?505:-1
return new G.h4(l,k>=0?k:511,m)},
ey:function(){var s,r=this
r.jR()
if(r.cF()===46){r.cE()
s=r.cF()
if(s>=48&&s<=57){r.jR()
return r.P(62)}else --r.f}return r.P(60)},
ps:function(){var s=this.f,r=this.b
if(s<r.length){r=C.b.M(r,s)
r=r>=48&&r<=57}else r=!1
if(r){this.f=s+1
return!0}return!1},
oz:function(a){var s,r,q=this.b
a=Math.min(a,q.length)
for(;s=this.f,s<a;){r=C.b.M(q,s)
if(!(r>=48&&r<=57))if(!(r>=97&&r<=102))r=r>=65&&r<=70
else r=!0
else r=!0
if(r)this.f=s+1
else return}},
oY:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.cE()
if(s===0){r=n.a
q=n.r
p=n.f
o=new Y.at(r,q,p)
o.aK(r,q,p)
return new G.bp(67,o)}else if(s===45)if(n.ag(45))if(n.ag(62))if(n.c)return n.cO()
else{r=n.a
q=n.r
p=n.f
o=new Y.at(r,q,p)
o.aK(r,q,p)
return new G.bp(504,o)}}},
oZ:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.cE()
if(s===0){r=n.a
q=n.r
p=n.f
o=new Y.at(r,q,p)
o.aK(r,q,p)
return new G.bp(67,o)}else if(s===42)if(n.ag(47))if(n.c)return n.cO()
else{r=n.a
q=n.r
p=n.f
o=new Y.at(r,q,p)
o.aK(r,q,p)
return new G.bp(64,o)}}}}
G.kH.prototype={
cE:function(){var s=this.f,r=this.b
if(s<r.length){this.f=s+1
return C.b.M(r,s)}else return 0},
j0:function(a){var s=this.f+a,r=this.b
if(s<r.length)return C.b.M(r,s)
else return 0},
cF:function(){return this.j0(0)},
ag:function(a){var s=this.f,r=this.b
if(s<r.length)if(C.b.M(r,s)===a){this.f=s+1
return!0}else return!1
else return!1},
j_:function(a){var s,r
if(a>=48&&a<=57)return!0
s=this.cF()
if(a===46)return s>=48&&s<=57
if(a===43||a===45){if(!(s>=48&&s<=57))if(s===46){r=this.j0(1)
r=r>=48&&r<=57}else r=!1
else r=!0
return r}return!1},
P:function(a){return new G.bp(a,this.a.fn(0,this.r,this.f))},
p_:function(){var s,r,q,p,o=this,n=--o.f
for(s=o.b,r=s.length;n<r;n=q){q=o.f=n+1
p=C.b.M(s,n)
if(!(p===32||p===9||p===13))if(p===10){if(!o.c){n=o.a
s=o.r
r=new Y.at(n,s,q)
r.aK(n,s,q)
return new G.bp(63,r)}}else{n=o.f=q-1
if(o.c)return o.cO()
else{s=o.a
r=o.r
q=new Y.at(s,r,n)
q.aK(s,r,n)
return new G.bp(63,q)}}}return o.P(1)},
jR:function(){var s,r,q,p
for(s=this.b,r=s.length;q=this.f,q<r;){p=C.b.M(s,q)
if(p>=48&&p<=57)this.f=q+1
else return}}}
F.df.prototype={
l:function(a){return this.b}}
F.es.prototype={
l:function(a){var s=this,r=s.d&&C.aj.as(s.a),q=r?C.aj.j(0,s.a):null,p=r?""+H.m(q):""
p=p+H.m(C.c8.j(0,s.a))+" "
p=(r?p+"\x1b[0m":p)+"on "+s.c.kk(0,s.b,q)
return p.charCodeAt(0)==0?p:p}}
F.k8.prototype={
oH:function(a,b,c){var s=new F.es(C.K,b,c,this.b.x)
C.a.q(this.c,s)
this.a.$1(s)}}
L.kp.prototype={}
B.ca.prototype={
U:function(a){return null},
l:function(a){var s=this.a
s=P.ad(C.r.be(s.a.c,s.b,s.c),0,null)
return s},
gI:function(a){return this.b}}
B.cl.prototype={
U:function(a){return null},
gI:function(a){return"*"}}
B.hT.prototype={
U:function(a){return null},
gI:function(a){return"&"}}
B.hk.prototype={
U:function(a){return null},
gI:function(a){return"not"}}
B.hG.prototype={
U:function(a){return C.a.b8(this.b,a.gkJ())}}
B.ce.prototype={
gm:function(a){return this.b.length},
U:function(a){return a.kK(this)}}
B.eG.prototype={
U:function(a){this.c.U(a)
return null},
l:function(a){var s=this.c.b
return s.gI(s)}}
B.aZ.prototype={
gI:function(a){var s=this.b
return s.gI(s)},
U:function(a){return this.b.U(a)}}
B.cG.prototype={
U:function(a){var s=this.b
return s instanceof B.cl||a.a.y===s.gI(s).toLowerCase()},
l:function(a){var s=this.b
return s.gI(s)}}
B.hh.prototype={
gkl:function(){var s=this.d
if(s instanceof B.cl)s="*"
else s=s==null?"":s.gI(s)
return s},
U:function(a){return a.qm(this)},
l:function(a){var s=this.gkl()+"|",r=t.g9.a(this.b).b
return s+r.gI(r)}}
B.fJ.prototype={
pq:function(){switch(this.d){case 28:return"="
case 530:return"~="
case 531:return"|="
case 532:return"^="
case 533:return"$="
case 534:return"*="
case 535:return""}return null},
qk:function(){var s=this.e
if(s!=null)if(s instanceof B.ca)return s.l(0)
else return'"'+H.m(s)+'"'
else return""},
U:function(a){return a.ql(this)},
l:function(a){var s=this.b
return"["+s.gI(s)+H.m(this.pq())+this.qk()+"]"}}
B.h3.prototype={
U:function(a){var s=a.a.b.j(0,"id"),r=s==null?"":s,q=this.b
return r===q.gI(q)},
l:function(a){return"#"+H.m(this.b)}}
B.fQ.prototype={
U:function(a){var s,r=a.a
r.toString
s=this.b
s=s.gI(s)
return new Z.fU(r).eR().F(0,s)},
l:function(a){return"."+H.m(this.b)}}
B.dk.prototype={
U:function(a){return a.qo(this)},
l:function(a){var s=this.b
return":"+s.gI(s)}}
B.dl.prototype={
U:function(a){a.qq(this)
return!1},
l:function(a){var s=this.d?":":"::",r=this.b
return s+r.gI(r)}}
B.eA.prototype={
U:function(a){return a.qn(this)}}
B.hy.prototype={
U:function(a){return a.qp(this)}}
B.dr.prototype={
U:function(a){a.nd(this.b)
return null}}
B.hl.prototype={
U:function(a){return!H.iE(this.d.U(a))}}
B.hq.prototype={
U:function(a){return null}}
B.hp.prototype={
U:function(a){return null}}
B.aj.prototype={
U:function(a){return null}}
B.ho.prototype={
U:function(a){return null}}
B.bq.prototype={
U:function(a){return null},
l:function(a){return this.d+H.m(G.qV(this.f))}}
B.he.prototype={
U:function(a){return null}}
B.hv.prototype={
U:function(a){return null}}
B.fV.prototype={
U:function(a){return null}}
B.fY.prototype={
U:function(a){return null}}
B.fD.prototype={
U:function(a){return null}}
B.hU.prototype={
U:function(a){return null}}
B.h2.prototype={
U:function(a){return null}}
B.h1.prototype={
U:function(a){return null}}
B.hA.prototype={
U:function(a){return null}}
B.fP.prototype={
U:function(a){return null}}
B.hz.prototype={
U:function(a){return null}}
B.i4.prototype={
U:function(a){return null}}
B.V.prototype={}
B.ap.prototype={}
B.i5.prototype={
nd:function(a){var s
t.fr.a(a)
for(s=0;s<a.length;++s)a[s].U(this)},
$io7:1}
B.aG.prototype={
l:function(a){var s=this.a,r=this.b
return s!=null?s+":"+r:r},
gJ:function(a){return 37*(37*(J.cx(this.a)&2097151)+C.b.gJ(this.b)&2097151)+C.b.gJ(this.c)&1073741823},
aE:function(a,b){var s,r,q
if(!(b instanceof B.aG))return 1
s=this.a
if(s==null)s=""
r=b.a
q=C.b.aE(s,r==null?"":r)
if(q!==0)return q
q=C.b.aE(this.b,b.b)
if(q!==0)return q
return C.b.aE(this.c,b.c)},
Y:function(a,b){if(b==null)return!1
if(!(b instanceof B.aG))return!1
return this.a==b.a&&this.b===b.b&&this.c===b.c},
$iag:1}
B.is.prototype={}
B.lu.prototype={}
B.ii.prototype={}
B.ak.prototype={
gaq:function(a){var s=this,r=s.c
if(r==null){r=new B.al(s,H.a([],t.d))
if(s.c==null)s.c=r
else r=H.c(H.ac("nodes"))}return r},
gjz:function(a){var s=this,r=s.d
if(r==null){r=new B.h_(s.gaq(s))
s.smP(r)}return r},
eS:function(a){var s=this.a
if(s!=null)C.a.a8(s.gaq(s).a,this)
return this},
pc:function(a,b,c){var s,r,q=this
if(c==null)q.gaq(q).q(0,b)
else{s=q.gaq(q)
r=q.gaq(q)
s.bK(0,r.ap(r,c),b)}},
dW:function(a,b,c){var s,r,q,p,o,n,m
H.iI(c,t.I,"T","_clone")
c.a(a)
if(b)for(s=this.gaq(this).a,r=H.x(s),s=new J.aB(s,s.length,r.h("aB<1>")),r=r.c,q=t.d;s.n();){p=r.a(s.d).di(0,!0)
o=a.c
if(o==null){o=new B.al(a,H.a([],q))
if(a.c==null)a.c=o
else o=H.c(H.ac("nodes"))}n=p.a
if(n!=null){m=n.c
if(m==null){m=new B.al(n,H.a([],q))
if(n.c==null){n.c=m
n=m}else n=H.c(H.ac("nodes"))}else n=m
C.a.a8(n.a,p)}p.a=o.b
o.bV(0,p)}return a},
sde:function(a,b){this.b=t.oP.a(b)},
smP:function(a){this.d=t.bk.a(a)}}
B.d2.prototype={
l:function(a){return"#document"},
di:function(a,b){return this.dW(new B.d2(P.a4(t.K,t.N)),!0,t.dA)}}
B.dW.prototype={
l:function(a){var s,r=this,q=r.y,p=q==null
if(!p||r.z!=null){if(p)q=""
s=r.z
if(s==null)s=""
return"<!DOCTYPE "+H.m(r.x)+' "'+q+'" "'+s+'">'}else return"<!DOCTYPE "+H.m(r.x)+">"},
di:function(a,b){return new B.dW(this.x,this.y,this.z,P.a4(t.K,t.N))}}
B.c0.prototype={
l:function(a){var s=J.bI(this.x)
this.x=s
return'"'+s+'"'},
di:function(a,b){var s=J.bI(this.x)
this.x=s
return B.mE(s)},
jo:function(a,b){var s=this.x;(!(s instanceof P.a5)?this.x=new P.a5(H.m(s)):s).a+=b}}
B.R.prototype={
geN:function(a){var s,r,q,p,o=this.a
if(o==null)return null
s=o.gaq(o)
for(r=s.ap(s,this)-1,o=s.a,q=o.length;r>=0;--r){if(r>=q)return H.b(o,r)
p=o[r]
if(p instanceof B.R)return p}return null},
gkm:function(a){var s,r,q,p,o,n=this.a
if(n==null)return null
s=n.gaq(n)
for(r=s.ap(s,this)+1,q=s.a,p=q.length;r<p;++r){if(r<0)return H.b(q,r)
o=q[r]
if(o instanceof B.R)return o}return null},
l:function(a){var s=A.qm(this.x)
return"<"+(s==null?"":s+" ")+H.m(this.y)+">"},
di:function(a,b){var s=this,r=t.K,q=t.N,p=new B.R(s.x,s.y,P.a4(r,q))
p.sde(0,P.hf(s.b,r,q))
return s.dW(p,b,t.h)}}
B.dT.prototype={
l:function(a){return"<!-- "+this.x+" -->"},
di:function(a,b){return new B.dT(this.x,P.a4(t.K,t.N))}}
B.al.prototype={
q:function(a,b){t.I.a(b)
b.eS(0)
b.a=this.b
this.bV(0,b)},
R:function(a,b){var s,r,q,p,o,n,m,l=this.mU(t.hl.a(b))
for(s=H.x(l).h("W<1>"),r=new H.W(l,s),r=new H.M(r,r.gm(r),s.h("M<C.E>")),q=this.b,s=s.h("C.E"),p=t.d;r.n();){o=s.a(r.d)
n=o.a
if(n!=null){m=n.c
if(m==null){m=new B.al(n,H.a([],p))
if(n.c==null){n.c=m
n=m}else n=H.c(H.ac("nodes"))}else n=m
C.a.a8(n.a,o)}o.a=q}this.me(0,l)},
bK:function(a,b,c){c.eS(0)
c.a=this.b
this.ii(0,b,c)},
dh:function(a){var s,r
for(s=this.a,r=H.x(s),s=new J.aB(s,s.length,r.h("aB<1>")),r=r.c;s.n();)r.a(s.d).a=null
this.mc(this)},
v:function(a,b,c){var s,r
t.I.a(c)
s=this.a
r=s.length
if(b<0||b>=r)return H.b(s,b)
s[b].a=null
c.eS(0)
c.a=this.b
this.md(0,b,c)},
mU:function(a){var s,r
t.hl.a(a)
s=H.a([],t.d)
for(r=J.I(a);r.n();)C.a.q(s,r.gu())
return s}}
B.h_.prototype={
v:function(a,b,c){var s,r,q
t.h.a(c)
s=t.v
s=P.i(new H.ar(this.a,s),!0,s.h("k.E"))
if(b<0||b>=s.length)return H.b(s,b)
s=s[b]
r=s.a
if(r==null)H.c(P.T("Node must have a parent to replace it."))
r=r.gaq(r)
q=s.a
q=q.gaq(q)
r.v(0,q.ap(q,s),c)},
sm:function(a,b){var s=t.v,r=P.i(new H.ar(this.a,s),!0,s.h("k.E")).length
if(b>=r)return
else if(b<0)throw H.d(P.ab("Invalid list length"))
this.pY(0,b,r)},
q:function(a,b){this.a.q(0,t.h.a(b))},
R:function(a,b){var s,r,q,p,o,n
for(s=J.I(t.cj.a(b)),r=this.a,q=t.d;s.n();){p=s.gu()
o=p.a
if(o!=null){n=o.c
if(n==null){n=new B.al(o,H.a([],q))
if(o.c==null){o.c=n
o=n}else o=H.c(H.ac("nodes"))}else o=n
C.a.a8(o.a,p)}p.a=r.b
r.bV(0,p)}},
cw:function(a,b){t.dU.a(b)
throw H.d(P.T("TODO(jacobr): should we impl?"))},
pY:function(a,b,c){var s=t.v
C.a.bi(C.a.be(P.i(new H.ar(this.a,s),!0,s.h("k.E")),b,c),new B.jn())},
eJ:function(a,b,c){var s,r
c.h("0(R)").a(b)
s=t.v
s=P.i(new H.ar(this.a,s),!0,s.h("k.E"))
r=H.x(s)
return new H.J(s,r.a3(c).h("1(2)").a(b),r.h("@<1>").a3(c).h("J<1,2>"))},
eZ:function(a,b){var s,r
t.cT.a(b)
s=t.v
s=P.i(new H.ar(this.a,s),!0,s.h("k.E"))
r=H.x(s)
return new H.an(s,r.h("E(1)").a(b),r.h("an<1>"))},
cK:function(a,b){var s
t.cT.a(b)
s=t.v
return C.a.cK(P.i(new H.ar(this.a,s),!0,s.h("k.E")),b)},
an:function(a,b){var s=t.v
s=P.i(new H.ar(this.a,s),!0,s.h("k.E"))
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
gai:function(a){var s=t.v
return P.i(new H.ar(this.a,s),!0,s.h("k.E")).length===0},
gm:function(a){var s=t.v
return P.i(new H.ar(this.a,s),!0,s.h("k.E")).length},
j:function(a,b){var s=t.v
s=P.i(new H.ar(this.a,s),!0,s.h("k.E"))
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
gH:function(a){var s=t.v
s=P.i(new H.ar(this.a,s),!0,s.h("k.E"))
return new J.aB(s,s.length,H.x(s).h("aB<1>"))},
dN:function(a,b,c){var s=t.v
s=P.i(new H.ar(this.a,s),!0,s.h("k.E"))
P.aL(b,c,s.length)
return H.be(s,b,c,H.x(s).c)},
gah:function(a){var s=t.v
return C.a.gah(P.i(new H.ar(this.a,s),!0,s.h("k.E")))},
gt:function(a){var s=t.v
return C.a.gt(P.i(new H.ar(this.a,s),!0,s.h("k.E")))},
$iO:1,
$il:1}
B.jn.prototype={
$1:function(a){return t.h.a(a).eS(0)},
$S:46}
B.ie.prototype={}
B.ig.prototype={}
B.ih.prototype={}
B.ik.prototype={}
B.il.prototype={}
B.ip.prototype={}
V.jU.prototype={
gaH:function(){var s=this.y
return s==null?this.y=this.giO():s},
giO:function(){var s=this,r=s.ch
if(r==null)r=s.ch=new V.bv(s,s.d)
return r},
giz:function(){var s=this,r=s.cx
if(r==null)r=s.cx=new V.fM(s,s.d)
return r},
gmI:function(){var s=this,r=s.cy
if(r==null)r=s.cy=new V.dP(s,s.d)
return r},
gca:function(){var s=this,r=s.db
if(r==null)r=s.db=new V.h6(s,s.d)
return r},
gab:function(){var s=this,r=s.dy
if(r==null)r=s.dy=new V.d5(s,s.d)
return r},
gj8:function(){var s=this,r=s.fr
if(r==null)r=s.fr=new V.hS(s,s.d)
return r},
gaM:function(){var s=this,r=s.fx
if(r==null)r=s.fx=new V.eg(s,s.d)
return r},
gdZ:function(){var s=this,r=s.fy
if(r==null){r=new V.d7(H.a([],t.ks),s,s.d)
if(s.fy==null)s.fy=r
else r=H.c(H.ac("_inTableTextPhase"))}return r},
giK:function(){var s=this,r=s.go
if(r==null)r=s.go=new V.eb(s,s.d)
return r},
giM:function(){var s=this,r=s.id
if(r==null)r=s.id=new V.ec(s,s.d)
return r},
gfH:function(){var s=this,r=s.k1
if(r==null)r=s.k1=new V.cI(s,s.d)
return r},
gfG:function(){var s=this,r=s.k2
if(r==null)r=s.k2=new V.ee(s,s.d)
return r},
giL:function(){var s=this,r=s.k3
if(r==null)r=s.k3=new V.d6(s,s.d)
return r},
gcb:function(){var s=this,r=s.k4
if(r==null)r=s.k4=new V.ef(s,s.d)
return r},
giN:function(){var s=this,r=s.ry
if(r==null)r=s.ry=new V.ed(s,s.d)
return r},
n_:function(){var s
this.bv(0)
for(;!0;)try{this.pn()
break}catch(s){if(H.aT(s) instanceof A.kr)this.bv(0)
else throw s}},
bv:function(a){var s=this
s.c.bv(0)
s.d.bv(0)
s.f=!1
C.a.sm(s.e,0)
s.r="no quirks"
s.y=s.giO()
s.Q=!0},
kg:function(a){var s,r,q=a.y
if(q==="annotation-xml"&&a.x==="http://www.w3.org/1998/Math/MathML"){q=a.b.j(0,"encoding")
if(q==null)s=null
else{r=t.E
s=P.ad(new H.J(new H.a8(q),r.h("j(w.E)").a(A.bR()),r.h("J<w.E,j>")),0,null)}return s==="text/html"||s==="application/xhtml+xml"}else return C.a.F(C.bw,new B.p(a.x,q,t.iA))},
p8:function(a,b){var s,r=this.d,q=r.c
if(q.length===0)return!1
s=C.a.gt(q)
q=s.x
if(q==r.a)return!1
r=s.y
if(C.a.F(C.ad,new B.p(q,r,t.iA))){if(b===2){q=t.ny.a(a).b
q=q!=="mglyph"&&q!=="malignmark"}else q=!1
if(q)return!1
if(b===1||b===0)return!1}if(r==="annotation-xml"&&b===2&&t.ny.a(a).b==="svg")return!1
if(this.kg(s))if(b===2||b===1||b===0)return!1
return!0},
pn:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
for(s=a3.c,r=a3.d,q=t.i,p=t.cw,o=t.ia,n=t.ny,m=t.lH,l=t.g4,k=a3.e,j=t.jK,i=s.a,h=t.z;s.n();){g=s.cy
g.toString
for(f=g;f!=null;){e=f.gcn(f)
if(e===6){j.a(f)
d=f.a
c=f.c
if(c==null){c=f.c=J.bI(f.b)
f.b=null}if(d==null){b=i.x
if(b==null)d=null
else{a=i.z
new Y.b2(b,a).bn(b,a)
d=new Y.at(b,a,a)
d.aK(b,a,a)}}C.a.q(k,new V.aX(c,d,f.e))
f=null}else{a0=a3.y
if(a0==null){c=a3.ch
if(c==null){c=new V.bv(a3,r)
a3.ch=c
a0=c}else a0=c
a3.y=a0}if(a3.p8(g,e)){a0=a3.r2
if(a0==null){a0=new V.h5(a3,r)
a3.r2=a0}}switch(e){case 1:f=a0.a6(l.a(f))
break
case 0:f=a0.aP(m.a(f))
break
case 2:f=a0.N(n.a(f))
break
case 3:f=a0.T(o.a(f))
break
case 4:f=a0.co(p.a(f))
break
case 5:f=a0.kr(q.a(f))
break}}}if(g instanceof T.cg)if(g.c&&!g.r){d=g.a
g=P.z(["name",g.b],h,h)
if(d==null){c=i.x
if(c==null)d=null
else{b=i.z
new Y.b2(c,b).bn(c,b)
d=new Y.at(c,b,b)
d.aK(c,b,b)}}C.a.q(k,new V.aX("non-void-element-with-trailing-solidus",d,g))}}a1=[]
for(a2=!0;a2;){s=a3.y
if(s==null){s=a3.ch
if(s==null){s=new V.bv(a3,r)
a3.ch=s}s=a3.y=s}a1.push(s)
s=a3.y
if(s==null){s=a3.ch
if(s==null){s=new V.bv(a3,r)
a3.ch=s}s=a3.y=s}a2=s.ae()}},
giT:function(){var s=this.c.a,r=s.x
if(r==null)s=null
else{s=Y.c8(r,s.z)
r=s.b
r=Y.mI(s.a,r,r)
s=r}return s},
G:function(a,b,c){var s=new V.aX(b,a==null?this.giT():a,c)
C.a.q(this.e,s)},
a5:function(a,b){return this.G(a,b,C.ak)},
jg:function(a){var s=a.e.a8(0,"definitionurl")
if(s!=null)a.e.v(0,"definitionURL",s)},
jh:function(a){var s,r,q,p,o,n
for(s=a.e.gaO(),s=P.i(s,!0,H.H(s).h("k.E")),r=s.length,q=0;q<r;++q){p=H.az(s[q])
o=C.c9.j(0,p)
if(o!=null){n=a.e
p=n.a8(0,p)
p.toString
n.v(0,o,p)}}},
fQ:function(a){var s,r,q,p,o,n
for(s=a.e.gaO(),s=P.i(s,!0,H.H(s).h("k.E")),r=s.length,q=0;q<r;++q){p=H.az(s[q])
o=C.c7.j(0,p)
if(o!=null){n=a.e
p=n.a8(0,p)
p.toString
n.v(0,o,p)}}},
kA:function(){var s,r,q,p,o,n,m,l,k=this
for(s=k.d,r=s.c,q=H.x(r).h("W<1>"),p=new H.W(r,q),p=new H.M(p,p.gm(p),q.h("M<C.E>")),q=q.h("C.E"),o=s.a;p.n();){n=q.a(p.d)
m=n.y
if(0>=r.length)return H.b(r,0)
l=n===r[0]
if(l)m=k.x
switch(m){case"select":case"colgroup":case"head":case"html":break}if(!l&&n.x!=o)continue
switch(m){case"select":r=k.k4
if(r==null){r=k.k4=new V.ef(k,s)
s=r}else s=r
k.y=s
return
case"td":r=k.k3
if(r==null){r=k.k3=new V.d6(k,s)
s=r}else s=r
k.y=s
return
case"th":r=k.k3
if(r==null){r=k.k3=new V.d6(k,s)
s=r}else s=r
k.y=s
return
case"tr":r=k.k2
if(r==null){r=k.k2=new V.ee(k,s)
s=r}else s=r
k.y=s
return
case"tbody":r=k.k1
if(r==null){r=k.k1=new V.cI(k,s)
s=r}else s=r
k.y=s
return
case"thead":r=k.k1
if(r==null){r=k.k1=new V.cI(k,s)
s=r}else s=r
k.y=s
return
case"tfoot":r=k.k1
if(r==null){r=k.k1=new V.cI(k,s)
s=r}else s=r
k.y=s
return
case"caption":r=k.go
if(r==null){r=k.go=new V.eb(k,s)
s=r}else s=r
k.y=s
return
case"colgroup":r=k.id
if(r==null){r=k.id=new V.ec(k,s)
s=r}else s=r
k.y=s
return
case"table":r=k.fx
if(r==null){r=k.fx=new V.eg(k,s)
s=r}else s=r
k.y=s
return
case"head":r=k.dy
if(r==null){r=k.dy=new V.d5(k,s)
s=r}else s=r
k.y=s
return
case"body":r=k.dy
if(r==null){r=k.dy=new V.d5(k,s)
s=r}else s=r
k.y=s
return
case"frameset":r=k.ry
if(r==null){r=k.ry=new V.ed(k,s)
s=r}else s=r
k.y=s
return
case"html":r=k.cy
if(r==null){r=k.cy=new V.dP(k,s)
s=r}else s=r
k.y=s
return}}k.y=k.gab()},
dA:function(a,b){var s,r,q=this
q.d.S(a)
s=t.c
r=q.c
if(b==="RAWTEXT")r.si(s.a(r.geQ()))
else r.si(s.a(r.gcS()))
q.z=q.gaH()
q.y=q.gj8()}}
V.a9.prototype={
ae:function(){throw H.d(P.hY(null))},
co:function(a){var s=this.b
s.cM(a,C.a.gt(s.c))
return null},
kr:function(a){this.a.a5(a.a,"unexpected-doctype")
return null},
a6:function(a){this.b.c1(a.gaF(a),a.a)
return null},
aP:function(a){this.b.c1(a.gaF(a),a.a)
return null},
N:function(a){throw H.d(P.hY(null))},
bm:function(a){var s,r=this.a
if(!r.f&&a.b==="html")r.a5(a.a,"non-html-root")
s=this.b.c
if(0>=s.length)return H.b(s,0)
s[0].e=a.a
a.e.bi(0,new V.ko(this))
r.f=!1
return null},
T:function(a){throw H.d(P.hY(null))},
cP:function(a){var s,r=a.b,q=this.b.c
if(0>=q.length)return H.b(q,-1)
s=q.pop()
for(;s.y!=r;){if(0>=q.length)return H.b(q,-1)
s=q.pop()}}}
V.ko.prototype={
$2:function(a,b){var s
t.K.a(a)
H.az(b)
s=this.a.b.c
if(0>=s.length)return H.b(s,0)
s[0].b.eP(a,new V.kn(b))},
$S:27}
V.kn.prototype={
$0:function(){return this.a},
$S:7}
V.bv.prototype={
aP:function(a){return null},
co:function(a){var s=this.b
s.cM(a,s.gbH(s))
return null},
kr:function(a){var s,r,q,p,o,n=this,m=a.d,l=a.b
if(l==null)s=null
else{r=t.E
s=P.ad(new H.J(new H.a8(l),r.h("j(w.E)").a(A.bR()),r.h("J<w.E,j>")),0,null)}q=a.c
p=a.e
if(m==="html")if(s==null)l=q!=null&&q!=="about:legacy-compat"
else l=!0
else l=!0
if(l)n.a.a5(a.a,"unknown-doctype")
if(s==null)s=""
l=n.b
o=new B.dW(a.d,a.b,a.c,P.a4(t.K,t.N))
o.e=a.a
l=l.gbH(l)
l.gaq(l).q(0,o)
if(p)if(a.d==="html"){l=C.b.gig(s)
if(!C.a.b8(C.bd,l))if(!C.a.F(C.br,s))if(!(C.a.b8(C.ac,l)&&q==null))l=q!=null&&q.toLowerCase()==="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd"
else l=!0
else l=!0
else l=!0}else l=!0
else l=!0
if(l)n.a.r="quirks"
else{l=C.b.gig(s)
if(!C.a.b8(C.bx,l))l=C.a.b8(C.ac,l)&&q!=null
else l=!0
if(l)n.a.r="limited quirks"}l=n.a
l.y=l.giz()
return null},
bF:function(){var s=this.a
s.r="quirks"
s.y=s.giz()},
a6:function(a){this.a.a5(a.a,"expected-doctype-but-got-chars")
this.bF()
return a},
N:function(a){var s=t.z
this.a.G(a.a,"expected-doctype-but-got-start-tag",P.z(["name",a.b],s,s))
this.bF()
return a},
T:function(a){var s=t.z
this.a.G(a.a,"expected-doctype-but-got-end-tag",P.z(["name",a.b],s,s))
this.bF()
return a},
ae:function(){var s=this.a
s.a5(s.giT(),"expected-doctype-but-got-eof")
this.bF()
return!0}}
V.fM.prototype={
eE:function(){var s=this.b,r=s.jJ(0,T.aM("html",P.a4(t.K,t.N),null,!1))
C.a.q(s.c,r)
s=s.gbH(s)
s.gaq(s).q(0,r)
s=this.a
s.y=s.gmI()},
ae:function(){this.eE()
return!0},
co:function(a){var s=this.b
s.cM(a,s.gbH(s))
return null},
aP:function(a){return null},
a6:function(a){this.eE()
return a},
N:function(a){if(a.b==="html")this.a.f=!0
this.eE()
return a},
T:function(a){var s,r=a.b
switch(r){case"head":case"body":case"html":case"br":this.eE()
return a
default:s=t.z
this.a.G(a.a,"unexpected-end-tag-before-html",P.z(["name",r],s,s))
return null}}}
V.dP.prototype={
N:function(a){switch(a.b){case"html":return this.a.gab().N(a)
case"head":this.d0(a)
return null
default:this.d0(T.aM("head",P.a4(t.K,t.N),null,!1))
return a}},
T:function(a){var s,r=a.b
switch(r){case"head":case"body":case"html":case"br":this.d0(T.aM("head",P.a4(t.K,t.N),null,!1))
return a
default:s=t.z
this.a.G(a.a,"end-tag-after-implied-root",P.z(["name",r],s,s))
return null}},
ae:function(){this.d0(T.aM("head",P.a4(t.K,t.N),null,!1))
return!0},
aP:function(a){return null},
a6:function(a){this.d0(T.aM("head",P.a4(t.K,t.N),null,!1))
return a},
d0:function(a){var s=this.b
s.S(a)
s.sp5(C.a.gt(s.c))
s=this.a
s.y=s.gca()}}
V.h6.prototype={
N:function(a){var s,r,q,p,o,n=this,m=null
switch(a.b){case"html":return n.a.gab().N(a)
case"title":n.a.dA(a,"RCDATA")
return m
case"noscript":case"noframes":case"style":n.a.dA(a,"RAWTEXT")
return m
case"script":n.b.S(a)
s=n.a
r=s.c
r.si(t.c.a(r.gbT()))
s.z=s.gaH()
s.y=s.gj8()
return m
case"base":case"basefont":case"bgsound":case"command":case"link":s=n.b
s.S(a)
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()
a.r=!0
return m
case"meta":s=n.b
s.S(a)
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()
a.r=!0
q=a.e
s=n.a.c.a
if(!s.b){p=q.j(0,"charset")
o=q.j(0,"content")
if(p!=null)s.jy(p)
else if(o!=null)s.jy(new K.jc(new K.jl(o)).px())}return m
case"head":n.a.a5(a.a,"two-heads-are-not-better-than-one")
return m
default:n.dk(new T.L("head",!1))
return a}},
T:function(a){var s,r=a.b
switch(r){case"head":this.dk(a)
return null
case"br":case"html":case"body":this.dk(new T.L("head",!1))
return a
default:s=t.z
this.a.G(a.a,"unexpected-end-tag",P.z(["name",r],s,s))
return null}},
ae:function(){this.dk(new T.L("head",!1))
return!0},
a6:function(a){this.dk(new T.L("head",!1))
return a},
dk:function(a){var s=this.a,r=s.d,q=r.c
if(0>=q.length)return H.b(q,-1)
q.pop()
q=s.dx
if(q==null)r=s.dx=new V.fB(s,r)
else r=q
s.y=r}}
V.fB.prototype={
N:function(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.a.gab().N(a)
case"body":p=r.a
p.Q=!1
r.b.S(a)
p.y=p.gab()
return q
case"frameset":r.b.S(a)
p=r.a
p.y=p.giN()
return q
case"base":case"basefont":case"bgsound":case"link":case"meta":case"noframes":case"script":case"style":case"title":r.lV(a)
return q
case"head":s=t.z
r.a.G(a.a,"unexpected-start-tag",P.z(["name",p],s,s))
return q
default:r.bF()
return a}},
T:function(a){var s,r=a.b
switch(r){case"body":case"html":case"br":this.bF()
return a
default:s=t.z
this.a.G(a.a,"unexpected-end-tag",P.z(["name",r],s,s))
return null}},
ae:function(){this.bF()
return!0},
a6:function(a){this.bF()
return a},
lV:function(a){var s,r,q=this.a,p=t.z
q.G(a.a,"unexpected-start-tag-out-of-my-head",P.z(["name",a.b],p,p))
p=this.b
s=p.c
C.a.q(s,t.h.a(p.e))
q.gca().N(a)
for(q=H.x(s).h("W<1>"),p=new H.W(s,q),p=new H.M(p,p.gm(p),q.h("M<C.E>")),q=q.h("C.E");p.n();){r=q.a(p.d)
if(r.y==="head"){C.a.a8(s,r)
break}}},
bF:function(){this.b.S(T.aM("body",P.a4(t.K,t.N),null,!1))
var s=this.a
s.y=s.gab()
s.Q=!0}}
V.d5.prototype={
N:function(a){var s,r,q,p,o,n=this,m=null,l="p",k="button",j="unexpected-start-tag",i="unexpected-start-tag-implies-end-tag",h="RAWTEXT",g=a.b
switch(g){case"html":return n.bm(a)
case"base":case"basefont":case"bgsound":case"command":case"link":case"meta":case"noframes":case"script":case"style":case"title":return n.a.gca().N(a)
case"body":n.lS(a)
return m
case"frameset":n.lU(a)
return m
case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":n.i8(a)
return m
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":g=n.b
if(g.a4(l,k))n.bI(new T.L(l,!1))
s=g.c
if(C.a.F(C.F,C.a.gt(s).y)){r=t.z
n.a.G(a.a,j,P.z(["name",a.b],r,r))
if(0>=s.length)return H.b(s,-1)
s.pop()}g.S(a)
return m
case"pre":case"listing":g=n.b
if(g.a4(l,k))n.bI(new T.L(l,!1))
g.S(a)
n.a.Q=!1
n.c=!0
return m
case"form":g=n.b
if(g.f!=null){g=t.z
n.a.G(a.a,j,P.z(["name","form"],g,g))}else{if(g.a4(l,k))n.bI(new T.L(l,!1))
g.S(a)
g.ska(C.a.gt(g.c))}return m
case"li":case"dd":case"dt":n.lY(a)
return m
case"plaintext":g=n.b
if(g.a4(l,k))n.bI(new T.L(l,!1))
g.S(a)
g=n.a.c
g.si(t.c.a(g.gpA()))
return m
case"a":g=n.b
q=g.jS("a")
if(q!=null){s=t.z
n.a.G(a.a,i,P.z(["startName","a","endName","a"],s,s))
n.jU(new T.L("a",!1))
C.a.a8(g.c,q)
C.a.a8(g.d.a,q)}g.aI()
n.fP(a)
return m
case"b":case"big":case"code":case"em":case"font":case"i":case"s":case"small":case"strike":case"strong":case"tt":case"u":n.b.aI()
n.fP(a)
return m
case"nobr":g=n.b
g.aI()
if(g.b9("nobr")){s=t.z
n.a.G(a.a,i,P.z(["startName","nobr","endName","nobr"],s,s))
n.T(new T.L("nobr",!1))
g.aI()}n.fP(a)
return m
case"button":return n.lT(a)
case"applet":case"marquee":case"object":g=n.b
g.aI()
g.S(a)
g.d.q(0,m)
n.a.Q=!1
return m
case"xmp":g=n.b
if(g.a4(l,k))n.bI(new T.L(l,!1))
g.aI()
g=n.a
g.Q=!1
g.dA(a,h)
return m
case"table":g=n.a
if(g.r!=="quirks")if(n.b.a4(l,k))n.T(new T.L(l,!1))
n.b.S(a)
g.Q=!1
g.y=g.gaM()
return m
case"area":case"br":case"embed":case"img":case"keygen":case"wbr":n.ie(a)
return m
case"param":case"source":case"track":g=n.b
g.S(a)
g=g.c
if(0>=g.length)return H.b(g,-1)
g.pop()
a.r=!0
return m
case"input":g=n.a
p=g.Q
n.ie(a)
s=a.e.j(0,"type")
if(s==null)s=m
else{r=t.E
r=P.ad(new H.J(new H.a8(s),r.h("j(w.E)").a(A.bR()),r.h("J<w.E,j>")),0,m)
s=r}if(s==="hidden")g.Q=p
return m
case"hr":g=n.b
if(g.a4(l,k))n.bI(new T.L(l,!1))
g.S(a)
g=g.c
if(0>=g.length)return H.b(g,-1)
g.pop()
a.r=!0
n.a.Q=!1
return m
case"image":g=t.z
n.a.G(a.a,"unexpected-start-tag-treated-as",P.z(["originalName","image","newName","img"],g,g))
n.N(T.aM("img",a.e,m,a.c))
return m
case"isindex":n.lX(a)
return m
case"textarea":n.b.S(a)
g=n.a
s=g.c
s.si(t.c.a(s.gcS()))
n.c=!0
g.Q=!1
return m
case"iframe":g=n.a
g.Q=!1
g.dA(a,h)
return m
case"noembed":case"noscript":n.a.dA(a,h)
return m
case"select":g=n.b
g.aI()
g.S(a)
g=n.a
g.Q=!1
if(g.gaM()===g.gaH()||g.giK()===g.gaH()||g.giM()===g.gaH()||g.gfH()===g.gaH()||g.gfG()===g.gaH()||g.giL()===g.gaH()){s=g.r1
if(s==null)s=g.r1=new V.h7(g,g.d)
g.y=s}else g.y=g.gcb()
return m
case"rp":case"rt":g=n.b
if(g.b9("ruby")){g.ct()
o=C.a.gt(g.c)
if(o.y!=="ruby")n.a.a5(o.e,"undefined-error")}g.S(a)
return m
case"option":case"optgroup":g=n.b
if(C.a.gt(g.c).y==="option")n.a.gaH().T(new T.L("option",!1))
g.aI()
n.a.d.S(a)
return m
case"math":g=n.b
g.aI()
s=n.a
s.jg(a)
s.fQ(a)
a.x="http://www.w3.org/1998/Math/MathML"
g.S(a)
if(a.c){g=g.c
if(0>=g.length)return H.b(g,-1)
g.pop()
a.r=!0}return m
case"svg":g=n.b
g.aI()
s=n.a
s.jh(a)
s.fQ(a)
a.x="http://www.w3.org/2000/svg"
g.S(a)
if(a.c){g=g.c
if(0>=g.length)return H.b(g,-1)
g.pop()
a.r=!0}return m
case"caption":case"col":case"colgroup":case"frame":case"head":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s=t.z
n.a.G(a.a,"unexpected-start-tag-ignored",P.z(["name",g],s,s))
return m
default:g=n.b
g.aI()
g.S(a)
return m}},
T:function(a){var s,r,q,p,o,n=this,m=null,l="end-tag-too-early",k="unexpected-end-tag",j=a.b
switch(j){case"body":n.jT(a)
return m
case"html":return n.ha(a)
case"address":case"article":case"aside":case"blockquote":case"button":case"center":case"details":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"listing":case"menu":case"nav":case"ol":case"pre":case"section":case"summary":case"ul":if(j==="pre")n.c=!1
s=n.b
r=s.b9(j)
if(r)s.ct()
j=C.a.gt(s.c).y
s=a.b
if(j!=s){j=t.z
n.a.G(a.a,l,P.z(["name",s],j,j))}if(r)n.cP(a)
return m
case"form":j=n.b
q=j.f
j.f=null
if(q==null||!j.b9(q)){j=t.z
n.a.G(a.a,k,P.z(["name","form"],j,j))}else{j.ct()
j=j.c
if(!J.S(C.a.gt(j),q)){s=t.z
n.a.G(a.a,"end-tag-too-early-ignored",P.z(["name","form"],s,s))}C.a.a8(j,q)}return m
case"p":n.bI(a)
return m
case"dd":case"dt":case"li":p=j==="li"?"list":m
s=n.b
j=s.a4(j,p)
o=a.b
if(!j){j=t.z
n.a.G(a.a,k,P.z(["name",o],j,j))}else{s.c6(o)
j=C.a.gt(s.c).y
s=a.b
if(j!=s){j=t.z
n.a.G(a.a,l,P.z(["name",s],j,j))}n.cP(a)}return m
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":n.oB(a)
return m
case"a":case"b":case"big":case"code":case"em":case"font":case"i":case"nobr":case"s":case"small":case"strike":case"strong":case"tt":case"u":n.jU(a)
return m
case"applet":case"marquee":case"object":s=n.b
if(s.b9(j))s.ct()
j=C.a.gt(s.c).y
o=a.b
if(j!=o){j=t.z
n.a.G(a.a,l,P.z(["name",o],j,j))}if(s.b9(a.b)){n.cP(a)
s.fZ()}return m
case"br":j=t.z
n.a.G(a.a,"unexpected-end-tag-treated-as",P.z(["originalName","br","newName","br element"],j,j))
j=n.b
j.aI()
j.S(T.aM("br",P.a4(t.K,t.N),m,!1))
j=j.c
if(0>=j.length)return H.b(j,-1)
j.pop()
return m
default:n.oD(a)
return m}},
pj:function(a,b){var s,r
if(a.y!=b.y||a.x!=b.x)return!1
else{s=a.b
s=s.gm(s)
r=b.b
if(s!==r.gm(r))return!1
else for(s=a.b.gaO(),s=s.gH(s);s.n();){r=s.gu()
if(!J.S(a.b.j(0,r),b.b.j(0,r)))return!1}}return!0},
fP:function(a){var s,r,q,p,o,n,m=this.b
m.S(a)
s=C.a.gt(m.c)
r=[]
for(m=m.d,q=H.H(m).h("W<w.E>"),p=new H.W(m,q),p=new H.M(p,p.gm(p),q.h("M<C.E>")),o=t.h,q=q.h("C.E");p.n();){n=q.a(p.d)
if(n==null)break
else{o.a(n)
if(this.pj(n,s))r.push(n)}}if(r.length===3)C.a.a8(m.a,C.a.gt(r))
m.q(0,s)},
ae:function(){var s,r,q,p
for(s=this.b.c,r=H.x(s).h("W<1>"),s=new H.W(s,r),s=new H.M(s,s.gm(s),r.h("M<C.E>")),r=r.h("C.E");s.n();){q=r.a(s.d)
switch(q.y){case"dd":case"dt":case"li":case"p":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":case"body":case"html":continue}s=this.a
p=q.e
if(p==null){r=s.c.a
q=r.x
if(q==null)p=null
else{r=r.z
new Y.b2(q,r).bn(q,r)
p=new Y.at(q,r,r)
p.aK(q,r,r)}}C.a.q(s.e,new V.aX("expected-closing-tag-but-got-eof",p,C.ak))
break}return!1},
a6:function(a){var s
if(a.gaF(a)==="\x00")return null
s=this.b
s.aI()
s.c1(a.gaF(a),a.a)
s=this.a
if(s.Q&&!B.n1(a.gaF(a)))s.Q=!1
return null},
aP:function(a){var s,r,q,p=this
if(p.c){s=a.gaF(a)
r=p.c=!1
if(C.b.a2(s,"\n")){q=C.a.gt(p.b.c)
if(C.a.F(C.by,q.y)){r=q.gaq(q)
r=r.gai(r)}if(r)s=C.b.az(s,1)}if(s.length!==0){r=p.b
r.aI()
r.c1(s,a.a)}}else{r=p.b
r.aI()
r.c1(a.gaF(a),a.a)}return null},
lS:function(a){var s,r=this.a,q=t.z
r.G(a.a,"unexpected-start-tag",P.z(["name","body"],q,q))
q=this.b.c
s=q.length
if(s!==1){if(1>=s)return H.b(q,1)
q=q[1].y!=="body"}else q=!0
if(!q){r.Q=!1
a.e.bi(0,new V.jY(this))}},
lU:function(a){var s,r,q,p=this.a,o=t.z
p.G(a.a,"unexpected-start-tag",P.z(["name","frameset"],o,o))
o=this.b
s=o.c
r=s.length
if(r!==1){if(1>=r)return H.b(s,1)
q=s[1].y!=="body"}else q=!0
if(!q)if(p.Q){if(1>=r)return H.b(s,1)
r=s[1].a
if(r!=null){r=r.gaq(r)
if(1>=s.length)return H.b(s,1)
C.a.a8(r.a,s[1])}for(;C.a.gt(s).y!=="html";){if(0>=s.length)return H.b(s,-1)
s.pop()}o.S(a)
p.y=p.giN()}},
i8:function(a){var s=this.b
if(s.a4("p","button"))this.bI(new T.L("p",!1))
s.S(a)},
lY:function(a){var s,r,q,p,o,n,m,l,k=this.a
k.Q=!1
s=a.b
s.toString
s=C.cL.j(0,s)
s.toString
for(r=this.b,q=r.c,p=H.x(q).h("W<1>"),q=new H.W(q,p),q=new H.M(q,q.gm(q),p.h("M<C.E>")),o=t.X,p=p.h("C.E");q.n();){n=p.a(q.d)
m=n.y
if(C.a.F(s,m)){s=k.y
if(s==null){s=k.ch
if(s==null){s=new V.bv(k,k.d)
k.ch=s}s=k.y=s}s.T(new T.L(m,!1))
break}l=n.x
if(C.a.F(C.Y,new B.p(l==null?"http://www.w3.org/1999/xhtml":l,m,o))&&!C.a.F(C.bk,m))break}if(r.a4("p","button"))k.gaH().T(new T.L("p",!1))
r.S(a)},
lT:function(a){var s=this.b,r=this.a
if(s.b9("button")){s=t.z
r.G(a.a,"unexpected-start-tag-implies-end-tag",P.z(["startName","button","endName","button"],s,s))
this.T(new T.L("button",!1))
return a}else{s.aI()
s.S(a)
r.Q=!1}return null},
ie:function(a){var s=this.b
s.aI()
s.S(a)
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()
a.r=!0
this.a.Q=!1},
lX:function(a){var s,r,q,p,o,n=this,m=null,l="action",k=t.z
n.a.G(a.a,"deprecated-tag",P.z(["name","isindex"],k,k))
if(n.b.f!=null)return
k=t.K
s=t.N
r=P.a4(k,s)
q=a.e.j(0,l)
if(q!=null)r.v(0,l,q)
n.N(T.aM("form",r,m,!1))
n.N(T.aM("hr",P.a4(k,s),m,!1))
n.N(T.aM("label",P.a4(k,s),m,!1))
p=a.e.j(0,"prompt")
if(p==null)p="This is a searchable index. Enter search keywords: "
n.a6(new T.G(m,p))
o=P.hf(a.e,k,s)
o.a8(0,l)
o.a8(0,"prompt")
o.v(0,"name","isindex")
n.N(T.aM("input",o,m,a.c))
n.T(new T.L("label",!1))
n.N(T.aM("hr",P.a4(k,s),m,!1))
n.T(new T.L("form",!1))},
bI:function(a){var s=this,r="unexpected-end-tag",q=s.b
if(!q.a4("p","button")){s.i8(T.aM("p",P.a4(t.K,t.N),null,!1))
q=t.z
s.a.G(a.a,r,P.z(["name","p"],q,q))
s.bI(new T.L("p",!1))}else{q.c6("p")
if(C.a.gt(q.c).y!=="p"){q=t.z
s.a.G(a.a,r,P.z(["name","p"],q,q))}s.cP(a)}},
jT:function(a){var s,r,q,p,o,n=this,m=n.b
if(!m.b9("body")){n.a.a5(a.a,"undefined-error")
return}else{m=m.c
if(C.a.gt(m).y==="body")C.a.gt(m)
else for(m=B.nc(m,2,null,t.h),s=m.length,r=0;r<s;++r){q=m[r].y
switch(q){case"dd":case"dt":case"li":case"optgroup":case"option":case"p":case"rp":case"rt":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":case"body":case"html":continue}m=n.a
p=a.a
s=t.z
s=P.z(["gotName","body","expectedName",q],s,s)
if(p==null){q=m.c.a
o=q.x
if(o==null)p=null
else{q=q.z
new Y.b2(o,q).bn(o,q)
p=new Y.at(o,q,q)
p.aK(o,q,q)}}C.a.q(m.e,new V.aX("expected-one-end-tag-but-got-another",p,s))
break}}m=n.a
s=m.rx
if(s==null)s=m.rx=new V.fz(m,m.d)
m.y=s},
ha:function(a){if(this.b.b9("body")){this.jT(new T.L("body",!1))
return a}return null},
oB:function(a){var s,r,q,p,o,n,m
for(s=this.b,r=0;r<6;++r)if(s.b9(C.F[r])){q=s.c
p=C.a.gt(q).y
if(p!=null&&C.a.F(C.W,p)){if(0>=q.length)return H.b(q,-1)
q.pop()
s.c6(null)}break}q=s.c
o=C.a.gt(q).y
n=a.b
if(o!=n){o=t.z
this.a.G(a.a,"end-tag-too-early",P.z(["name",n],o,o))}for(r=0;r<6;++r)if(s.b9(C.F[r])){if(0>=q.length)return H.b(q,-1)
m=q.pop()
for(;!C.a.F(C.F,m.y);){if(0>=q.length)return H.b(q,-1)
m=q.pop()}break}},
jU:function(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6="nodes"
for(s=this.b,r=s.d,q=r.a,p=H.H(r).h("aW.E"),o=s.c,n=t.K,m=t.N,l=t.h,k=t.d,j=t.X,i=this.a,h=t.z,g=i.c.a,i=i.e,f=0;f<8;){++f
e=s.jS(b7.b)
if(e!=null)d=C.a.F(o,e)&&!s.b9(e.y)
else d=!0
if(d){c=b7.a
s=P.z(["name",b7.b],h,h)
if(c==null){r=g.x
if(r==null)c=b5
else{q=g.z
new Y.b2(r,q).bn(r,q)
c=new Y.at(r,q,q)
c.aK(r,q,q)}}C.a.q(i,new V.aX("adoption-agency-1.1",c,s))
return}else if(!C.a.F(o,e)){c=b7.a
s=P.z(["name",b7.b],h,h)
if(c==null){r=g.x
if(r==null)c=b5
else{p=g.z
new Y.b2(r,p).bn(r,p)
c=new Y.at(r,p,p)
c.aK(r,p,p)}}C.a.q(i,new V.aX("adoption-agency-1.2",c,s))
C.a.a8(q,e)
return}d=C.a.gt(o)
if(e==null?d!=null:e!==d){c=b7.a
d=P.z(["name",b7.b],h,h)
if(c==null){b=g.x
if(b==null)c=b5
else{a=g.z
new Y.b2(b,a).bn(b,a)
c=new Y.at(b,a,a)
c.aK(b,a,a)}}C.a.q(i,new V.aX("adoption-agency-1.3",c,d))}a0=C.a.ap(o,e)
d=B.nc(o,a0,b5,l)
b=d.length
a2=0
while(!0){if(!(a2<d.length)){a1=b5
break}a3=d[a2]
a4=a3.x
if(a4==null)a4="http://www.w3.org/1999/xhtml"
if(C.a.F(C.Y,new B.p(a4,a3.y,j))){a1=a3
break}d.length===b||(0,H.e)(d);++a2}if(a1==null){if(0>=o.length)return H.b(o,-1)
a3=o.pop()
for(;a3!==e;){if(0>=o.length)return H.b(o,-1)
a3=o.pop()}C.a.a8(q,a3)
return}d=a0-1
if(d<0||d>=o.length)return H.b(o,d)
a5=o[d]
a6=r.ap(r,e)
a7=C.a.ap(o,a1)
for(a8=a1,a9=0;a9<3;){++a9;--a7
if(a7<0||a7>=o.length)return H.b(o,a7)
b0=o[a7]
if(!r.F(r,b0)){C.a.a8(o,b0)
continue}if(b0===e)break
if(a8===a1)a6=r.ap(r,b0)+1
d=b0.y
b1=new B.R(b0.x,d,P.a4(n,m))
b1.sde(0,P.hf(b0.b,n,m))
b2=b0.dW(b1,!1,l)
C.a.v(q,r.ap(r,b0),p.a(b2))
C.a.v(o,C.a.ap(o,b0),b2)
d=a8.a
if(d!=null){b=d.c
if(b==null){b=new B.al(d,H.a([],k))
if(d.c==null){d.c=b
d=b}else d=H.c(H.ac(b6))}else d=b
C.a.a8(d.a,a8)}d=b2.c
if(d==null){d=new B.al(b2,H.a([],k))
if(b2.c==null)b2.c=d
else d=H.c(H.ac(b6))}b=a8.a
if(b!=null){a=b.c
if(a==null){a=new B.al(b,H.a([],k))
if(b.c==null){b.c=a
b=a}else b=H.c(H.ac(b6))}else b=a
C.a.a8(b.a,a8)}a8.a=d.b
d.bV(0,a8)
a8=b2}d=a8.a
if(d!=null){b=d.c
if(b==null){b=new B.al(d,H.a([],k))
if(d.c==null){d.c=b
d=b}else d=H.c(H.ac(b6))}else d=b
C.a.a8(d.a,a8)}if(C.a.F(C.X,a5.y)){b3=s.f9()
d=b3[0]
b=b3[1]
a=d.c
if(b==null){if(a==null){b=new B.al(d,H.a([],k))
if(d.c==null){d.c=b
d=b}else d=H.c(H.ac(b6))}else d=a
b=a8.a
if(b!=null){a=b.c
if(a==null){a=new B.al(b,H.a([],k))
if(b.c==null){b.c=a
b=a}else b=H.c(H.ac(b6))}else b=a
C.a.a8(b.a,a8)}a8.a=d.b
d.bV(0,a8)}else{if(a==null){a=new B.al(d,H.a([],k))
if(d.c==null){d.c=a
d=a}else d=H.c(H.ac(b6))}else d=a
b=a.ap(a,b)
a=a8.a
if(a!=null){b4=a.c
if(b4==null){b4=new B.al(a,H.a([],k))
if(a.c==null){a.c=b4
a=b4}else a=H.c(H.ac(b6))}else a=b4
C.a.a8(a.a,a8)}a8.a=d.b
d.ii(0,b,a8)}}else{d=a5.c
if(d==null){d=new B.al(a5,H.a([],k))
if(a5.c==null)a5.c=d
else d=H.c(H.ac(b6))}b=a8.a
if(b!=null){a=b.c
if(a==null){a=new B.al(b,H.a([],k))
if(b.c==null){b.c=a
b=a}else b=H.c(H.ac(b6))}else b=a
C.a.a8(b.a,a8)}a8.a=d.b
d.bV(0,a8)}d=e.y
b1=new B.R(e.x,d,P.a4(n,m))
b1.sde(0,P.hf(e.b,n,m))
d=e.dW(b1,!1,l)
b=d.c
if(b==null){b=new B.al(d,H.a([],k))
if(d.c==null)d.c=b
else b=H.c(H.ac(b6))}a=a1.c
if(a==null){a=new B.al(a1,H.a([],k))
if(a1.c==null)a1.c=a
else a=H.c(H.ac(b6))}b.R(0,a)
a=a1.c
if(a==null){b=new B.al(a1,H.a([],k))
if(a1.c==null)a1.c=b
else b=H.c(H.ac(b6))}else b=a
b.dh(0)
b=a1.c
if(b==null){b=new B.al(a1,H.a([],k))
if(a1.c==null)a1.c=b
else b=H.c(H.ac(b6))}a=d.a
if(a!=null){b4=a.c
if(b4==null){b4=new B.al(a,H.a([],k))
if(a.c==null){a.c=b4
a=b4}else a=H.c(H.ac(b6))}else a=b4
C.a.a8(a.a,d)}d.a=b.b
b.bV(0,d)
C.a.a8(q,e)
C.a.bK(q,H.Z(Math.min(a6,q.length)),p.a(d))
C.a.a8(o,e)
C.a.bK(o,C.a.ap(o,a1)+1,d)}},
oD:function(a){var s,r,q,p,o,n,m,l,k,j,i,h="unexpected-end-tag"
for(s=this.b,r=s.c,q=H.x(r).h("W<1>"),p=new H.W(r,q),p=new H.M(p,p.gm(p),q.h("M<C.E>")),o=t.X,q=q.h("C.E");p.n();){n=q.a(p.d)
m=n.y
l=a.b
if(m==l){k=C.a.gt(r).y
if(k!=l&&C.a.F(C.W,k)){if(0>=r.length)return H.b(r,-1)
r.pop()
s.c6(l)}s=C.a.gt(r).y
q=a.b
if(s!=q){s=this.a
j=a.a
p=t.z
p=P.z(["name",q],p,p)
if(j==null){q=s.c.a
o=q.x
if(o==null)j=null
else{q=q.z
new Y.b2(o,q).bn(o,q)
j=new Y.at(o,q,q)
j.aK(o,q,q)}}C.a.q(s.e,new V.aX(h,j,p))}while(!0){if(0>=r.length)return H.b(r,-1)
if(!!J.S(r.pop(),n))break}break}else{i=n.x
if(C.a.F(C.Y,new B.p(i==null?"http://www.w3.org/1999/xhtml":i,m,o))){s=this.a
j=a.a
r=t.z
r=P.z(["name",a.b],r,r)
if(j==null){q=s.c.a
p=q.x
if(p==null)j=null
else{q=q.z
new Y.b2(p,q).bn(p,q)
j=new Y.at(p,q,q)
j.aK(p,q,q)}}C.a.q(s.e,new V.aX(h,j,r))
break}}}}}
V.jY.prototype={
$2:function(a,b){var s
t.K.a(a)
H.az(b)
s=this.a.b.c
if(1>=s.length)return H.b(s,1)
s[1].b.eP(a,new V.jX(b))},
$S:27}
V.jX.prototype={
$0:function(){return this.a},
$S:7}
V.hS.prototype={
N:function(a){throw H.d(P.am("Cannot process start stag in text phase"))},
T:function(a){var s,r,q=this
if(a.b==="script"){s=q.b.c
if(0>=s.length)return H.b(s,-1)
s.pop()
s=q.a
r=s.z
r.toString
s.y=r
return null}s=q.b.c
if(0>=s.length)return H.b(s,-1)
s.pop()
s=q.a
r=s.z
r.toString
s.y=r
return null},
a6:function(a){this.b.c1(a.gaF(a),a.a)
return null},
ae:function(){var s=this.b.c,r=C.a.gt(s),q=this.a,p=t.z
q.G(r.e,"expected-named-closing-tag-but-got-eof",P.z(["name",r.y],p,p))
if(0>=s.length)return H.b(s,-1)
s.pop()
s=q.z
s.toString
q.y=s
return!0}}
V.eg.prototype={
N:function(a){var s,r,q=this,p=null
switch(a.b){case"html":return q.bm(a)
case"caption":q.h0()
s=q.b
s.d.q(0,p)
s.S(a)
s=q.a
s.y=s.giK()
return p
case"colgroup":q.i9(a)
return p
case"col":q.i9(T.aM("colgroup",P.a4(t.K,t.N),p,!1))
return a
case"tbody":case"tfoot":case"thead":q.ib(a)
return p
case"td":case"th":case"tr":q.ib(T.aM("tbody",P.a4(t.K,t.N),p,!1))
return a
case"table":return q.lZ(a)
case"style":case"script":return q.a.gca().N(a)
case"input":s=a.e.j(0,"type")
if(s==null)s=p
else{r=t.E
r=P.ad(new H.J(new H.a8(s),r.h("j(w.E)").a(A.bR()),r.h("J<w.E,j>")),0,p)
s=r}if(s==="hidden"){q.a.a5(a.a,"unexpected-hidden-input-in-table")
s=q.b
s.S(a)
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()}else q.ia(a)
return p
case"form":q.a.a5(a.a,"unexpected-form-in-table")
s=q.b
if(s.f==null){s.S(a)
r=s.c
s.ska(C.a.gt(r))
if(0>=r.length)return H.b(r,-1)
r.pop()}return p
default:q.ia(a)
return p}},
T:function(a){var s,r,q=this,p=a.b
switch(p){case"table":q.c0(a)
return null
case"body":case"caption":case"col":case"colgroup":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s=t.z
q.a.G(a.a,"unexpected-end-tag",P.z(["name",p],s,s))
return null
default:s=q.a
r=t.z
s.G(a.a,"unexpected-end-tag-implies-table-voodoo",P.z(["name",p],r,r))
r=q.b
r.r=!0
s.gab().T(a)
r.r=!1
return null}},
h0:function(){var s=this.b.c
while(!0){if(!(C.a.gt(s).y!=="table"&&C.a.gt(s).y!=="html"))break
if(0>=s.length)return H.b(s,-1)
s.pop()}},
ae:function(){var s=C.a.gt(this.b.c)
if(s.y!=="html")this.a.a5(s.e,"eof-in-table")
return!1},
aP:function(a){var s=this.a,r=s.gaH()
s.y=s.gdZ()
s.gdZ().c=r
s.gaH().aP(a)
return null},
a6:function(a){var s=this.a,r=s.gaH()
s.y=s.gdZ()
s.gdZ().c=r
s.gaH().a6(a)
return null},
i9:function(a){var s
this.h0()
this.b.S(a)
s=this.a
s.y=s.giM()},
ib:function(a){var s
this.h0()
this.b.S(a)
s=this.a
s.y=s.gfH()},
lZ:function(a){var s=this.a,r=t.z
s.G(a.a,"unexpected-start-tag-implies-end-tag",P.z(["startName","table","endName","table"],r,r))
s.gaH().T(new T.L("table",!1))
return a},
ia:function(a){var s=this.a,r=t.z
s.G(a.a,u.M,P.z(["name",a.b],r,r))
r=this.b
r.r=!0
s.gab().N(a)
r.r=!1},
c0:function(a){var s,r,q=this,p=q.b
if(p.a4("table","table")){p.ct()
p=p.c
s=C.a.gt(p).y
if(s!=="table"){r=t.z
q.a.G(a.a,"end-tag-too-early-named",P.z(["gotName","table","expectedName",s],r,r))}for(;C.a.gt(p).y!=="table";){if(0>=p.length)return H.b(p,-1)
p.pop()}if(0>=p.length)return H.b(p,-1)
p.pop()
q.a.kA()}else q.a.a5(a.a,"undefined-error")}}
V.d7.prototype={
dq:function(){var s,r,q=this,p=q.d
if(p.length===0)return
s=H.x(p)
r=new H.J(p,s.h("o(1)").a(new V.jZ()),s.h("J<1,o>")).aG(0,"")
if(!B.n1(r)){p=q.a.gaM()
s=p.b
s.r=!0
p.a.gab().a6(new T.G(null,r))
s.r=!1}else if(r.length!==0)q.b.c1(r,null)
q.so4(H.a([],t.ks))},
co:function(a){var s
this.dq()
s=this.c
s.toString
this.a.y=s
return a},
ae:function(){this.dq()
var s=this.c
s.toString
this.a.y=s
return!0},
a6:function(a){if(a.gaF(a)==="\x00")return null
C.a.q(this.d,a)
return null},
aP:function(a){C.a.q(this.d,a)
return null},
N:function(a){var s
this.dq()
s=this.c
s.toString
this.a.y=s
return a},
T:function(a){var s
this.dq()
s=this.c
s.toString
this.a.y=s
return a},
so4:function(a){this.d=t.oX.a(a)}}
V.jZ.prototype={
$1:function(a){t.g.a(a)
return a.gaF(a)},
$S:43}
V.eb.prototype={
N:function(a){switch(a.b){case"html":return this.bm(a)
case"caption":case"col":case"colgroup":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return this.m_(a)
default:return this.a.gab().N(a)}},
T:function(a){var s,r=this,q=a.b
switch(q){case"caption":r.oA(a)
return null
case"table":return r.c0(a)
case"body":case"col":case"colgroup":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s=t.z
r.a.G(a.a,"unexpected-end-tag",P.z(["name",q],s,s))
return null
default:return r.a.gab().T(a)}},
ae:function(){this.a.gab().ae()
return!1},
a6:function(a){return this.a.gab().a6(a)},
m_:function(a){var s,r=this.a
r.a5(a.a,"undefined-error")
s=this.b.a4("caption","table")
r.gaH().T(new T.L("caption",!1))
if(s)return a
return null},
oA:function(a){var s,r,q=this,p=q.b
if(p.a4("caption","table")){p.ct()
s=p.c
if(C.a.gt(s).y!=="caption"){r=t.z
q.a.G(a.a,"expected-one-end-tag-but-got-another",P.z(["gotName","caption","expectedName",C.a.gt(s).y],r,r))}for(;C.a.gt(s).y!=="caption";){if(0>=s.length)return H.b(s,-1)
s.pop()}if(0>=s.length)return H.b(s,-1)
s.pop()
p.fZ()
p=q.a
p.y=p.gaM()}else q.a.a5(a.a,"undefined-error")},
c0:function(a){var s,r=this.a
r.a5(a.a,"undefined-error")
s=this.b.a4("caption","table")
r.gaH().T(new T.L("caption",!1))
if(s)return a
return null}}
V.ec.prototype={
N:function(a){var s,r=this
switch(a.b){case"html":return r.bm(a)
case"col":s=r.b
s.S(a)
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()
return null
default:s=C.a.gt(r.b.c).y
r.dj(new T.L("colgroup",!1))
return s==="html"?null:a}},
T:function(a){var s,r=this
switch(a.b){case"colgroup":r.dj(a)
return null
case"col":s=t.z
r.a.G(a.a,"no-end-tag",P.z(["name","col"],s,s))
return null
default:s=C.a.gt(r.b.c).y
r.dj(new T.L("colgroup",!1))
return s==="html"?null:a}},
ae:function(){if(C.a.gt(this.b.c).y==="html")return!1
else{this.dj(new T.L("colgroup",!1))
return!0}},
a6:function(a){var s=C.a.gt(this.b.c).y
this.dj(new T.L("colgroup",!1))
return s==="html"?null:a},
dj:function(a){var s=this.b.c,r=this.a
if(C.a.gt(s).y==="html")r.a5(a.a,"undefined-error")
else{if(0>=s.length)return H.b(s,-1)
s.pop()
r.y=r.gaM()}}}
V.cI.prototype={
N:function(a){var s,r=this,q=a.b
switch(q){case"html":return r.bm(a)
case"tr":r.ic(a)
return null
case"td":case"th":s=t.z
r.a.G(a.a,"unexpected-cell-in-table-body",P.z(["name",q],s,s))
r.ic(T.aM("tr",P.a4(t.K,t.N),null,!1))
return a
case"caption":case"col":case"colgroup":case"tbody":case"tfoot":case"thead":return r.c0(a)
default:return r.a.gaM().N(a)}},
T:function(a){var s,r=this,q=a.b
switch(q){case"tbody":case"tfoot":case"thead":r.ej(a)
return null
case"table":return r.c0(a)
case"body":case"caption":case"col":case"colgroup":case"html":case"td":case"th":case"tr":s=t.z
r.a.G(a.a,"unexpected-end-tag-in-table-body",P.z(["name",q],s,s))
return null
default:return r.a.gaM().T(a)}},
h_:function(){for(var s=this.b.c;!C.a.F(C.bB,C.a.gt(s).y);){if(0>=s.length)return H.b(s,-1)
s.pop()}C.a.gt(s).toString},
ae:function(){this.a.gaM().ae()
return!1},
aP:function(a){return this.a.gaM().aP(a)},
a6:function(a){return this.a.gaM().a6(a)},
ic:function(a){var s
this.h_()
this.b.S(a)
s=this.a
s.y=s.gfG()},
ej:function(a){var s=this.b,r=this.a
if(s.a4(a.b,"table")){this.h_()
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()
r.y=r.gaM()}else{s=t.z
r.G(a.a,"unexpected-end-tag-in-table-body",P.z(["name",a.b],s,s))}},
c0:function(a){var s=this,r="table",q=s.b
if(q.a4("tbody",r)||q.a4("thead",r)||q.a4("tfoot",r)){s.h_()
s.ej(new T.L(C.a.gt(q.c).y,!1))
return a}else s.a.a5(a.a,"undefined-error")
return null}}
V.ee.prototype={
N:function(a){var s,r,q=this
switch(a.b){case"html":return q.bm(a)
case"td":case"th":q.jA()
s=q.b
s.S(a)
r=q.a
r.y=r.giL()
s.d.q(0,null)
return null
case"caption":case"col":case"colgroup":case"tbody":case"tfoot":case"thead":case"tr":s=q.b.a4("tr","table")
q.ek(new T.L("tr",!1))
return!s?null:a
default:return q.a.gaM().N(a)}},
T:function(a){var s,r=this,q=a.b
switch(q){case"tr":r.ek(a)
return null
case"table":q=r.b.a4("tr","table")
r.ek(new T.L("tr",!1))
return!q?null:a
case"tbody":case"tfoot":case"thead":return r.ej(a)
case"body":case"caption":case"col":case"colgroup":case"html":case"td":case"th":s=t.z
r.a.G(a.a,"unexpected-end-tag-in-table-row",P.z(["name",q],s,s))
return null
default:return r.a.gaM().T(a)}},
jA:function(){var s,r,q,p,o,n,m,l,k
for(s=this.b.c,r=this.a,q=t.z,p=r.c.a;!0;){o=C.a.gt(s)
n=o.y
if(n==="tr"||n==="html")break
m=o.e
n=P.z(["name",C.a.gt(s).y],q,q)
if(m==null){l=p.x
if(l==null)m=null
else{k=p.z
new Y.b2(l,k).bn(l,k)
m=new Y.at(l,k,k)
m.aK(l,k,k)}}C.a.q(r.e,new V.aX("unexpected-implied-end-tag-in-table-row",m,n))
if(0>=s.length)return H.b(s,-1)
s.pop()}},
ae:function(){this.a.gaM().ae()
return!1},
aP:function(a){return this.a.gaM().aP(a)},
a6:function(a){return this.a.gaM().a6(a)},
ek:function(a){var s=this.b,r=this.a
if(s.a4("tr","table")){this.jA()
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()
r.y=r.gfH()}else r.a5(a.a,"undefined-error")},
ej:function(a){if(this.b.a4(a.b,"table")){this.ek(new T.L("tr",!1))
return a}else{this.a.a5(a.a,"undefined-error")
return null}}}
V.d6.prototype={
N:function(a){switch(a.b){case"html":return this.bm(a)
case"caption":case"col":case"colgroup":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return this.m0(a)
default:return this.a.gab().N(a)}},
T:function(a){var s,r=this,q=a.b
switch(q){case"td":case"th":r.hc(a)
return null
case"body":case"caption":case"col":case"colgroup":case"html":s=t.z
r.a.G(a.a,"unexpected-end-tag",P.z(["name",q],s,s))
return null
case"table":case"tbody":case"tfoot":case"thead":case"tr":return r.oC(a)
default:return r.a.gab().T(a)}},
jB:function(){var s=this.b
if(s.a4("td","table"))this.hc(new T.L("td",!1))
else if(s.a4("th","table"))this.hc(new T.L("th",!1))},
ae:function(){this.a.gab().ae()
return!1},
a6:function(a){return this.a.gab().a6(a)},
m0:function(a){var s=this.b
if(s.a4("td","table")||s.a4("th","table")){this.jB()
return a}else{this.a.a5(a.a,"undefined-error")
return null}},
hc:function(a){var s,r=this,q=r.b,p=q.a4(a.b,"table"),o=a.b
if(p){q.c6(o)
p=q.c
o=C.a.gt(p).y
s=a.b
if(o!=s){p=t.z
r.a.G(a.a,"unexpected-cell-end-tag",P.z(["name",s],p,p))
r.cP(a)}else{if(0>=p.length)return H.b(p,-1)
p.pop()}q.fZ()
q=r.a
q.y=q.gfG()}else{q=t.z
r.a.G(a.a,"unexpected-end-tag",P.z(["name",o],q,q))}},
oC:function(a){if(this.b.a4(a.b,"table")){this.jB()
return a}else this.a.a5(a.a,"undefined-error")
return null}}
V.ef.prototype={
N:function(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.bm(a)
case"option":p=r.b
s=p.c
if(C.a.gt(s).y==="option"){if(0>=s.length)return H.b(s,-1)
s.pop()}p.S(a)
return q
case"optgroup":p=r.b
s=p.c
if(C.a.gt(s).y==="option"){if(0>=s.length)return H.b(s,-1)
s.pop()}if(C.a.gt(s).y==="optgroup"){if(0>=s.length)return H.b(s,-1)
s.pop()}p.S(a)
return q
case"select":r.a.a5(a.a,"unexpected-select-in-select")
r.hb(new T.L("select",!1))
return q
case"input":case"keygen":case"textarea":return r.lW(a)
case"script":return r.a.gca().N(a)
default:s=t.z
r.a.G(a.a,"unexpected-start-tag-in-select",P.z(["name",p],s,s))
return q}},
T:function(a){var s,r,q=this,p=null,o="unexpected-end-tag-in-select",n=a.b
switch(n){case"option":n=q.b.c
if(C.a.gt(n).y==="option"){if(0>=n.length)return H.b(n,-1)
n.pop()}else{n=t.z
q.a.G(a.a,o,P.z(["name","option"],n,n))}return p
case"optgroup":n=q.b.c
if(C.a.gt(n).y==="option"){s=n.length
r=s-2
if(r<0)return H.b(n,r)
r=n[r].y==="optgroup"
s=r}else s=!1
if(s){if(0>=n.length)return H.b(n,-1)
n.pop()}if(C.a.gt(n).y==="optgroup"){if(0>=n.length)return H.b(n,-1)
n.pop()}else{n=t.z
q.a.G(a.a,o,P.z(["name","optgroup"],n,n))}return p
case"select":q.hb(a)
return p
default:s=t.z
q.a.G(a.a,o,P.z(["name",n],s,s))
return p}},
ae:function(){var s=C.a.gt(this.b.c)
if(s.y!=="html")this.a.a5(s.e,"eof-in-select")
return!1},
a6:function(a){if(a.gaF(a)==="\x00")return null
this.b.c1(a.gaF(a),a.a)
return null},
lW:function(a){var s="select"
this.a.a5(a.a,"unexpected-input-in-select")
if(this.b.a4(s,s)){this.hb(new T.L(s,!1))
return a}return null},
hb:function(a){var s=this.a
if(this.b.a4("select","select")){this.cP(a)
s.kA()}else s.a5(a.a,"undefined-error")}}
V.h7.prototype={
N:function(a){var s,r,q=a.b
switch(q){case"caption":case"table":case"tbody":case"tfoot":case"thead":case"tr":case"td":case"th":s=this.a
r=t.z
s.G(a.a,u.a,P.z(["name",q],r,r))
s.gcb().T(new T.L("select",!1))
return a
default:return this.a.gcb().N(a)}},
T:function(a){switch(a.b){case"caption":case"table":case"tbody":case"tfoot":case"thead":case"tr":case"td":case"th":return this.c0(a)
default:return this.a.gcb().T(a)}},
ae:function(){this.a.gcb().ae()
return!1},
a6:function(a){return this.a.gcb().a6(a)},
c0:function(a){var s=this.a,r=t.z
s.G(a.a,u.r,P.z(["name",a.b],r,r))
if(this.b.a4(a.b,"table")){s.gcb().T(new T.L("select",!1))
return a}return null}}
V.h5.prototype={
a6:function(a){var s
if(a.gaF(a)==="\x00"){a.c="\ufffd"
a.b=null}else{s=this.a
if(s.Q&&!B.n1(a.gaF(a)))s.Q=!1}return this.mi(a)},
N:function(a){var s,r,q,p,o,n=this,m=n.b,l=m.c,k=C.a.gt(l)
if(!C.a.F(C.ba,a.b))if(a.b==="font")s=a.e.as("color")||a.e.as("face")||a.e.as("size")
else s=!1
else s=!0
if(s){s=n.a
r=t.z
s.G(a.a,u.G,P.z(["name",a.b],r,r))
m=m.a
r=t.h
q=t.iA
while(!0){if(C.a.gt(l).x!=m)if(!s.kg(C.a.gt(l))){p=r.a(C.a.gt(l))
p=!C.a.F(C.ad,new B.p(p.x,p.y,q))}else p=!1
else p=!1
if(!p)break
if(0>=l.length)return H.b(l,-1)
l.pop()}return a}else{s=k.x
if(s==="http://www.w3.org/1998/Math/MathML")n.a.jg(a)
else if(s==="http://www.w3.org/2000/svg"){o=C.bG.j(0,a.b)
if(o!=null)a.b=o
n.a.jh(a)}n.a.fQ(a)
a.x=s
m.S(a)
if(a.c){if(0>=l.length)return H.b(l,-1)
l.pop()
a.r=!0}return null}},
T:function(a){var s,r,q,p=this,o=null,n=p.b,m=n.c,l=m.length-1,k=C.a.gt(m),j=k.y
if(j==null)j=o
else{s=t.E
s=P.ad(new H.J(new H.a8(j),s.h("j(w.E)").a(A.bR()),s.h("J<w.E,j>")),0,o)
j=s}s=a.b
if(j!=s){j=t.z
p.a.G(a.a,"unexpected-end-tag",P.z(["name",s],j,j))}n=n.a
j=t.E
s=j.h("j(w.E)")
j=j.h("J<w.E,j>")
while(!0){if(!!0){r=o
break}c$0:{q=k.y
q=q==null?o:P.ad(new H.J(new H.a8(q),s.a(A.bR()),j),0,o)
if(q==a.b){n=p.a
j=n.y
if(j==null){j=n.ch
if(j==null){j=new V.bv(n,n.d)
n.ch=j}j=n.y=j}s=n.fy
if(s==null){s=new V.d7(H.a([],t.ks),n,n.d)
if(n.fy==null)n.fy=s
else s=H.c(H.ac("_inTableTextPhase"))}if(j===s){j=n.y
if(j==null){j=n.ch
if(j==null){j=new V.bv(n,n.d)
n.ch=j}j=n.y=j}t.aB.a(j)
j.dq()
j=j.c
j.toString
n.y=j}while(!0){if(0>=m.length)return H.b(m,-1)
if(!!J.S(m.pop(),k))break}r=o
break}--l
if(l<0||l>=m.length)return H.b(m,l)
k=m[l]
if(k.x!=n)break c$0
else{n=p.a
m=n.y
if(m==null){m=n.ch
if(m==null){m=new V.bv(n,n.d)
n.ch=m}m=n.y=m
n=m}else n=m
r=n.T(a)
break}}}return r}}
V.fz.prototype={
N:function(a){var s,r,q=a.b
if(q==="html")return this.a.gab().N(a)
s=this.a
r=t.z
s.G(a.a,"unexpected-start-tag-after-body",P.z(["name",q],r,r))
s.y=s.gab()
return a},
T:function(a){var s,r,q=a.b
if(q==="html"){this.ha(a)
return null}s=this.a
r=t.z
s.G(a.a,"unexpected-end-tag-after-body",P.z(["name",q],r,r))
s.y=s.gab()
return a},
ae:function(){return!1},
co:function(a){var s=this.b,r=s.c
if(0>=r.length)return H.b(r,0)
s.cM(a,r[0])
return null},
a6:function(a){var s=this.a
s.a5(a.a,"unexpected-char-after-body")
s.y=s.gab()
return a},
ha:function(a){var s,r
for(s=this.b.c,r=H.x(s).h("W<1>"),s=new H.W(s,r),s=new H.M(s,s.gm(s),r.h("M<C.E>")),r=r.h("C.E");s.n();)if(r.a(s.d).y==="html")break
s=this.a
r=s.x2
if(r==null)r=s.x2=new V.fx(s,s.d)
s.y=r}}
V.ed.prototype={
N:function(a){var s,r=this,q=a.b
switch(q){case"html":return r.bm(a)
case"frameset":r.b.S(a)
return null
case"frame":q=r.b
q.S(a)
q=q.c
if(0>=q.length)return H.b(q,-1)
q.pop()
return null
case"noframes":return r.a.gab().N(a)
default:s=t.z
r.a.G(a.a,"unexpected-start-tag-in-frameset",P.z(["name",q],s,s))
return null}},
T:function(a){var s,r=this,q=a.b
switch(q){case"frameset":q=r.b.c
if(C.a.gt(q).y==="html")r.a.a5(a.a,u.q)
else{if(0>=q.length)return H.b(q,-1)
q.pop()}q=C.a.gt(q)
if(q.y!=="frameset"){q=r.a
s=q.x1
if(s==null)s=q.x1=new V.fA(q,q.d)
q.y=s}return null
default:s=t.z
r.a.G(a.a,"unexpected-end-tag-in-frameset",P.z(["name",q],s,s))
return null}},
ae:function(){var s=C.a.gt(this.b.c)
if(s.y!=="html")this.a.a5(s.e,"eof-in-frameset")
return!1},
a6:function(a){this.a.a5(a.a,"unexpected-char-in-frameset")
return null}}
V.fA.prototype={
N:function(a){var s,r=a.b
switch(r){case"html":return this.bm(a)
case"noframes":return this.a.gca().N(a)
default:s=t.z
this.a.G(a.a,"unexpected-start-tag-after-frameset",P.z(["name",r],s,s))
return null}},
T:function(a){var s,r=a.b,q=this.a
switch(r){case"html":r=q.y1
if(r==null)r=q.y1=new V.fy(q,q.d)
q.y=r
return null
default:s=t.z
q.G(a.a,"unexpected-end-tag-after-frameset",P.z(["name",r],s,s))
return null}},
ae:function(){return!1},
a6:function(a){this.a.a5(a.a,"unexpected-char-after-frameset")
return null}}
V.fx.prototype={
N:function(a){var s,r,q=a.b
if(q==="html")return this.a.gab().N(a)
s=this.a
r=t.z
s.G(a.a,"expected-eof-but-got-start-tag",P.z(["name",q],r,r))
s.y=s.gab()
return a},
ae:function(){return!1},
co:function(a){var s=this.b
s.cM(a,s.gbH(s))
return null},
aP:function(a){return this.a.gab().aP(a)},
a6:function(a){var s=this.a
s.a5(a.a,"expected-eof-but-got-char")
s.y=s.gab()
return a},
T:function(a){var s=this.a,r=t.z
s.G(a.a,"expected-eof-but-got-end-tag",P.z(["name",a.b],r,r))
s.y=s.gab()
return a}}
V.fy.prototype={
N:function(a){var s,r=a.b,q=this.a
switch(r){case"html":return q.gab().N(a)
case"noframes":return q.gca().N(a)
default:s=t.z
q.G(a.a,"expected-eof-but-got-start-tag",P.z(["name",r],s,s))
return null}},
ae:function(){return!1},
co:function(a){var s=this.b
s.cM(a,s.gbH(s))
return null},
aP:function(a){return this.a.gab().aP(a)},
a6:function(a){this.a.a5(a.a,"expected-eof-but-got-char")
return null},
T:function(a){var s=t.z
this.a.G(a.a,"expected-eof-but-got-end-tag",P.z(["name",a.b],s,s))
return null}}
V.aX.prototype={
l:function(a){var s,r,q=this.b
q.toString
s=C.bF.j(0,this.a)
s.toString
r=q.kk(0,B.tt(s,this.c),null)
return q.a.a==null?"ParserError on "+r:"On "+r},
$ibU:1}
A.kr.prototype={}
Z.fU.prototype={
eR:function(){var s,r,q,p,o=P.mw(t.N),n=this.a.b.j(0,"class")
for(s=(n==null?"":n).split(" "),r=s.length,q=0;q<r;++q){p=J.nq(s[q])
if(p.length!==0)o.q(0,p)}return o}}
Z.ic.prototype={
l:function(a){return this.eR().aG(0," ")},
gH:function(a){var s=this.eR()
return P.rf(s,s.r,H.H(s).c)},
gm:function(a){return this.eR().a}}
K.jl.prototype={
saA:function(a){if(this.b>=this.a.length)throw H.d(P.am("No more elements"))
this.b=a},
gaA:function(){var s=this.b
if(s>=this.a.length)throw H.d(P.am("No more elements"))
if(s>=0)return s
else return 0},
n4:function(a){var s,r,q,p,o=this
t.pi.a(a)
if(a==null)a=A.oS()
s=o.gaA()
for(r=o.a,q=r.length;s<q;){if(s<0)return H.b(r,s)
p=r[s]
if(!H.b8(a.$1(p))){o.b=s
return p}++s}o.b=s
return null},
j5:function(){return this.n4(null)},
n5:function(a){var s,r,q,p
t.gS.a(a)
s=this.gaA()
for(r=this.a,q=r.length;s<q;){if(s<0)return H.b(r,s)
p=r[s]
if(H.b8(a.$1(p))){this.b=s
return p}++s}return null},
iS:function(a){var s=C.b.aT(this.a,a,this.gaA())
if(s>=0){this.b=s+a.length-1
return!0}else throw H.d(P.am("No more elements"))},
fM:function(a,b){if(b==null)b=this.a.length
if(b<0)b+=this.a.length
return C.b.B(this.a,a,b)},
n6:function(a){return this.fM(a,null)}}
K.jc.prototype={
px:function(){var s,r,q,p,o,n,m,l
try{p=this.a
p.iS("charset")
p.saA(p.gaA()+1)
p.j5()
o=p.a
n=p.gaA()
m=o.length
if(n<0||n>=m)return H.b(o,n)
if(o[n]!=="=")return null
p.saA(p.gaA()+1)
p.j5()
n=p.gaA()
if(n<0||n>=m)return H.b(o,n)
if(o[n]!=='"'){n=p.gaA()
if(n<0||n>=m)return H.b(o,n)
n=o[n]==="'"}else n=!0
if(n){n=p.gaA()
if(n<0||n>=m)return H.b(o,n)
s=o[n]
p.saA(p.gaA()+1)
r=p.gaA()
p.iS(s)
p=p.fM(r,p.gaA())
return p}else{q=p.gaA()
try{p.n5(A.oS())
o=p.fM(q,p.gaA())
return o}catch(l){if(H.aT(l) instanceof P.ch){p=p.n6(q)
return p}else throw l}}}catch(l){if(H.aT(l) instanceof P.ch)return null
else throw l}}}
V.jT.prototype={
bv:function(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.soI(P.my(t.N))
s=i.z=0
i.smK(H.a([],t.t))
r=i.f
if(r==null){q=i.a
q.toString
p=i.e
p.toString
r=V.rN(q,p)
i.sj2(r)}for(q=r.a,p=q.length,o=t.L,n=!1,m=!1;s<p;++s){l=C.b.E(q,s)
if(n){if(l===10){n=!1
continue}n=!1}o.a(r)
k=s+1
j=k<r.gm(r)&&(r.j(0,s)&64512)===55296&&(r.j(0,k)&64512)===56320
if(!j&&!m)if(V.rW(l)){k=i.r
k.dV(k.$ti.c.a("invalid-codepoint"))
if(55296<=l&&l<=57343)l=65533}if(l===13){n=!0
l=10}C.a.q(i.y,l)
m=j}i.x=Y.qN(i.y,i.d)},
jy:function(a){var s=P.am("cannot change encoding when parsing a String.")
throw H.d(s)},
C:function(){var s,r,q=this,p=q.z,o=q.y
if(p>=o.length)return null
p=q.iQ(o,p)
o=q.y
s=q.z
r=s+1
if(p){q.z=r
p=o.length
if(s<0||s>=p)return H.b(o,s)
s=o[s]
q.z=r+1
if(r<0||r>=p)return H.b(o,r)
r=P.ad(H.a([s,o[r]],t.t),0,null)
p=r}else{q.z=r
if(s<0||s>=o.length)return H.b(o,s)
p=H.bb(o[s])}return p},
pz:function(){var s,r,q=this,p=q.z,o=q.y
if(p>=o.length)return null
p=q.iQ(o,p)
o=q.y
s=q.z
r=o.length
if(p){if(s<0||s>=r)return H.b(o,s)
p=o[s];++s
if(s>=r)return H.b(o,s)
s=P.ad(H.a([p,o[s]],t.t),0,null)
p=s}else{if(s<0||s>=r)return H.b(o,s)
p=H.bb(o[s])}return p},
iQ:function(a,b){var s,r
t.L.a(a)
s=b+1
r=J.X(a)
return s<r.gm(a)&&(H.Z(r.j(a,b))&64512)===55296&&(H.Z(r.j(a,s))&64512)===56320},
cf:function(a,b){var s,r,q=this,p=q.z
while(!0){s=q.pz()
if(s!=null)r=H.cw(a,s,0)===b
else r=!1
if(!r)break
q.z=q.z+s.length}return P.ad(C.a.be(q.y,p,q.z),0,null)},
bg:function(a){return this.cf(a,!1)},
W:function(a){if(a!=null)this.z=this.z-a.length},
sj2:function(a){this.f=t.f8.a(a)},
soI:function(a){this.r=t.f_.a(a)},
smK:function(a){this.y=t.L.a(a)}}
F.aW.prototype={
gm:function(a){return this.a.length},
gH:function(a){var s=this.a
return new J.aB(s,s.length,H.x(s).h("aB<1>"))},
j:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
v:function(a,b,c){C.a.v(this.a,b,H.H(this).h("aW.E").a(c))},
sm:function(a,b){C.a.sm(this.a,b)},
q:function(a,b){C.a.q(this.a,H.H(this).h("aW.E").a(b))},
bK:function(a,b,c){return C.a.bK(this.a,b,H.H(this).h("aW.E").a(c))},
R:function(a,b){C.a.R(this.a,H.H(this).h("k<aW.E>").a(b))}}
B.eE.prototype={
ku:function(a,b,c,d){var s,r,q,p,o,n
t.jB.a(d)
for(s=b.gaq(b),s=s.gH(s),r=new H.cT(s,t.pl),q=c.b,p=this.gkJ(),o=t.h;r.n();){n=o.a(s.gu())
this.a=n
if(C.a.b8(q,p))C.a.q(d,n)
this.ku(0,n,c,d)}},
kK:function(a){var s,r,q,p,o,n,m,l,k,j,i=this
t.dT.a(a)
s=i.a
for(r=a.b,q=H.x(r).h("W<1>"),r=new H.W(r,q),r=new H.M(r,r.gm(r),q.h("M<C.E>")),q=q.h("C.E"),p=!0,o=null;r.n();){n=q.a(r.d)
if(o==null)p=H.iE(n.c.U(i))
else if(o===514){m=n.c
do{l=i.a.a
k=l instanceof B.R?l:null
i.a=k}while(k!=null&&!H.iE(m.U(i)))
if(i.a==null)p=!1}else if(o===517){m=n.c
do{k=i.a
k=k.geN(k)
i.a=k}while(k!=null&&!H.iE(m.U(i)))
if(i.a==null)p=!1}if(!p)break
j=n.b
switch(j){case 515:n=i.a
i.a=n.geN(n)
break
case 516:l=i.a.a
i.a=l instanceof B.R?l:null
break
case 514:case 517:o=j
break
case 513:break
default:throw H.d(i.jc(a))}if(i.a==null){p=!1
break}}i.a=s
return p},
d7:function(a){return new P.eS("'"+a.l(0)+"' selector of type "+H.m3(a).l(0)+" is not implemented")},
jc:function(a){return new P.e7("'"+a.l(0)+"' is not a valid selector",null,null)},
qo:function(a){var s=this,r=a.b
switch(r.gI(r)){case"root":r=s.a
return r.y==="html"&&r.a==null
case"empty":r=s.a
r=r.gaq(r)
return r.b8(r,new B.ky())
case"blank":r=s.a
r=r.gaq(r)
return r.b8(r,new B.kz())
case"first-child":r=s.a
return r.geN(r)==null
case"last-child":r=s.a
return r.gkm(r)==null
case"only-child":r=s.a
if(r.geN(r)==null){r=s.a
r=r.gkm(r)==null}else r=!1
return r
case"link":return s.a.b.j(0,"href")!=null
case"visited":return!1}if(B.nT(r.gI(r)))return!1
throw H.d(s.d7(a))},
qq:function(a){var s=a.b
if(B.nT(s.gI(s)))return!1
throw H.d(this.d7(a))},
qp:function(a){return H.c(this.d7(a))},
qn:function(a){var s,r,q,p,o,n,m=this,l=a.b
switch(l.gI(l)){case"nth-child":s=t.b9.a(a.f).b
l=s.length
if(l===1){if(0>=l)return H.b(s,0)
r=s[0] instanceof B.aj}else r=!1
if(r){if(0>=l)return H.b(s,0)
q=t.mH.a(s[0])
p=m.a.a
if(p!=null){l=H.lD(q.c)
if(l>0){r=p.gaq(p)
l=r.ap(r,m.a)===l}else l=!1}else l=!1
return l}break
case"lang":l=t.b9.a(a.f)
l=l.a
l.toString
o=P.ad(C.r.be(l.a.c,l.b,l.c),0,null)
n=B.qH(m.a)
return n!=null&&C.b.a2(n,o)}throw H.d(m.d7(a))},
qm:function(a){if(!H.iE(t.g9.a(a.b).U(this)))return!1
if(a.d instanceof B.cl)return!0
if(a.gkl()==="")return this.a.x==null
throw H.d(this.d7(a))},
ql:function(a){var s,r,q=a.b,p=this.a.b.j(0,q.gI(q).toLowerCase())
if(p==null)return!1
q=a.d
if(q===535)return!0
s=H.m(a.e)
switch(q){case 28:return p===s
case 530:return C.a.b8(H.a(p.split(" "),t.s),new B.kw(s))
case 531:if(C.b.a2(p,s)){q=p.length
r=s.length
if(q!==r){if(r>=q)return H.b(p,r)
q=p[r]==="-"}else q=!0}else q=!1
return q
case 532:return C.b.a2(p,s)
case 533:return C.b.bq(p,s)
case 534:return C.b.F(p,s)
default:throw H.d(this.jc(a))}}}
B.ky.prototype={
$1:function(a){var s
t.I.a(a)
if(!(a instanceof B.R))if(a instanceof B.c0){s=J.bI(a.x)
a.x=s
s=s.length!==0}else s=!1
else s=!0
return!s},
$S:31}
B.kz.prototype={
$1:function(a){var s
t.I.a(a)
if(!(a instanceof B.R))if(a instanceof B.c0){s=J.bI(a.x)
a.x=s
s=new P.hC(s).b8(0,new B.kx())}else s=!1
else s=!0
return!s},
$S:31}
B.kx.prototype={
$1:function(a){return!A.n8(H.Z(a))},
$S:12}
B.kw.prototype={
$1:function(a){H.az(a)
return a.length!==0&&a===this.a},
$S:8}
T.b7.prototype={}
T.c_.prototype={}
T.cg.prototype={
gcn:function(a){return 2},
saF:function(a,b){this.e=t.oP.a(b)}}
T.L.prototype={
gcn:function(a){return 3}}
T.bd.prototype={
gaF:function(a){var s=this,r=s.c
if(r==null){r=s.c=J.bI(s.b)
s.b=null}return r}}
T.n.prototype={
gcn:function(a){return 6}}
T.G.prototype={
gcn:function(a){return 1}}
T.cQ.prototype={
gcn:function(a){return 0}}
T.d0.prototype={
gcn:function(a){return 4}}
T.dV.prototype={
gcn:function(a){return 5}}
T.eM.prototype={}
Y.lZ.prototype={
$0:function(){var s,r,q=P.bn(t.N,t.bF)
for(s=C.Z.gaO(),s=s.gH(s);s.n();){r=s.gu()
if(0>=r.length)return H.b(r,0)
J.nj(q.eP(r[0],new Y.lY()),r)}return q},
$S:33}
Y.lY.prototype={
$0:function(){return H.a([],t.s)},
$S:34}
Y.ea.prototype={
gm1:function(a){var s=this.y
return s==null?H.c(H.f("state")):s},
gu:function(){var s=this.cy
s.toString
return s},
e_:function(a){var s=this.ch
s.toString
C.a.gt(s).b=this.dx.l(0)},
cD:function(a){},
cc:function(a){this.e_(a)},
bX:function(a){var s,r=this
H.az(a)
if(r.ch==null)r.sfw(0,H.a([],t.kG))
s=r.db
s.a=""
s.a=a
r.dx.a=""
s=r.ch
s.toString
C.a.q(s,new T.eM())},
n:function(){var s,r=this,q=r.a,p=r.r
while(!0){s=q.r
if(!(s.b===s.c&&p.b===p.c))break
if(!H.b8(r.m2(0))){r.cy=null
return!1}}if(!s.gai(s)){q=q.r.kw()
r.cy=new T.n(null,null,q)}else r.sna(p.kw())
return!0},
bv:function(a){var s=this
s.Q=0
s.r.dh(0)
s.x=null
s.z.a=""
s.sfw(0,null)
s.sfv(null)
s.si(t.c.a(s.gD()))},
k:function(a){var s=this.r
s.dV(s.$ti.c.a(a))},
oh:function(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="illegal-codepoint-for-numeric-entity"
if(a){s=A.tm()
r=16}else{s=A.tl()
r=10}q=[]
p=k.a
o=p.C()
while(!0){if(!(H.b8(s.$1(o))&&o!=null))break
q.push(o)
o=p.C()}n=P.cu(C.a.aY(q),r)
m=C.bH.j(0,n)
if(m!=null){l=t.z
l=P.z(["charAsInt",n],l,l)
k.k(new T.n(l,j,i))}else if(55296<=n&&n<=57343||n>1114111){l=t.z
l=P.z(["charAsInt",n],l,l)
k.k(new T.n(l,j,i))
m="\ufffd"}else{if(!(1<=n&&n<=8))if(!(14<=n&&n<=31))if(!(127<=n&&n<=159))l=64976<=n&&n<=65007||C.a.F(C.bg,n)
else l=!0
else l=!0
else l=!0
if(l){l=t.z
l=P.z(["charAsInt",n],l,l)
k.k(new T.n(l,j,i))}m=P.ad(H.a([n],t.t),0,j)}if(o!==";"){k.k(new T.n(j,j,"numeric-entity-without-semicolon"))
p.W(o)}return m},
ee:function(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=H.a([h.C()],t.J)
if(0>=g.length)return H.b(g,0)
if(!A.a6(g[0])){if(0>=g.length)return H.b(g,0)
s=g[0]
s=s==="<"||s==="&"||s==null||a===s}else s=!0
if(s){if(0>=g.length)return H.b(g,0)
h.W(g[0])
r="&"}else{if(0>=g.length)return H.b(g,0)
s=g[0]
if(s==="#"){C.a.q(g,h.C())
if(C.a.gt(g)==="x"||C.a.gt(g)==="X"){C.a.q(g,h.C())
q=!0}else q=!1
if(!(q&&A.p7(C.a.gt(g))))s=!q&&A.mf(C.a.gt(g))
else s=!0
if(s){h.W(C.a.gt(g))
r=j.oh(q)}else{j.k(new T.n(i,i,"expected-numeric-entity"))
if(0>=g.length)return H.b(g,-1)
h.W(g.pop())
r="&"+C.a.aY(g)}}else{p=$.pF()
s.toString
o=p.j(0,s)
if(o==null)o=C.q
for(;C.a.gt(g)!=null;){s=J.pN(o,new Y.jV(C.a.aY(g)))
o=P.i(s,!0,s.$ti.h("k.E"))
if(o.length===0)break
C.a.q(g,h.C())}m=g.length-1
while(!0){if(!(m>1)){n=i
break}l=C.a.aY(C.a.be(g,0,m))
if(C.Z.as(l)){n=l
break}--m}if(n!=null){s=n.length
p=s-1
if(p<0)return H.b(n,p)
s=n[p]!==";"
if(s)j.k(new T.n(i,i,"named-entity-without-semicolon"))
if(s)if(b){if(m<0||m>=g.length)return H.b(g,m)
s=g[m]
if(!(A.aS(s)||A.mf(s))){if(m>=g.length)return H.b(g,m)
s=g[m]==="="}else s=!0}else s=!1
else s=!1
if(s){if(0>=g.length)return H.b(g,-1)
h.W(g.pop())
r="&"+C.a.aY(g)}else{r=C.Z.j(0,n)
if(0>=g.length)return H.b(g,-1)
h.W(g.pop())
r=H.m(r)+C.a.aY(B.nc(g,m,i,t.jv))}}else{j.k(new T.n(i,i,"expected-named-entity"))
if(0>=g.length)return H.b(g,-1)
h.W(g.pop())
r="&"+C.a.aY(g)}}}if(b)j.dx.a+=r
else{if(A.a6(r))k=new T.cQ(i,r)
else k=new T.G(i,r)
j.k(k)}},
jG:function(){return this.ee(null,!1)},
ba:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.x
j.toString
if(j instanceof T.c_){s=j.b
if(s==null)s=k
else{r=t.E
r=P.ad(new H.J(new H.a8(s),r.h("j(w.E)").a(A.bR()),r.h("J<w.E,j>")),0,k)
s=r}j.b=s
if(j instanceof T.L){if(l.ch!=null)l.k(new T.n(k,k,"attributes-in-end-tag"))
if(j.c)l.k(new T.n(k,k,"this-closing-flag-on-end-tag"))
q=j}else if(j instanceof T.cg){j.saF(0,P.a4(t.K,t.N))
s=l.ch
if(s!=null)for(r=s.length,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=s[p]
n=j.e
m=o.a
m.toString
n.eP(m,new Y.jW(o))}q=j}else q=j
l.sfw(0,k)
l.sfv(k)}else q=j
l.k(q)
l.si(t.c.a(l.gD()))},
om:function(){var s=this,r=null,q=s.a,p=q.C()
if(p==="&")s.si(t.c.a(s.goE()))
else if(p==="<")s.si(t.c.a(s.gq9()))
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.G(r,"\x00"))}else if(p==null)return!1
else if(A.a6(p)){q=p+q.cf(" \n\r\t\f",!0)
s.k(new T.cQ(r,q))}else{q=p+q.bg("&<\x00")
s.k(new T.G(r,q))}return!0},
oF:function(){this.jG()
this.si(t.c.a(this.gD()))
return!0},
pV:function(){var s=this,r=null,q=s.a,p=q.C()
if(p==="&")s.si(t.c.a(s.go2()))
else if(p==="<")s.si(t.c.a(s.gpT()))
else if(p==null)return!1
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.G(r,"\ufffd"))}else if(A.a6(p)){q=p+q.cf(" \n\r\t\f",!0)
s.k(new T.cQ(r,q))}else{q=p+q.bg("&<")
s.k(new T.G(r,q))}return!0},
o3:function(){this.jG()
this.si(t.c.a(this.gcS()))
return!0},
pO:function(){var s=this,r=null,q=s.a,p=q.C()
if(p==="<")s.si(t.c.a(s.gpM()))
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.G(r,"\ufffd"))}else if(p==null)return!1
else{q=p+q.bg("<\x00")
s.k(new T.G(r,q))}return!0},
ly:function(){var s=this,r=null,q=s.a,p=q.C()
if(p==="<")s.si(t.c.a(s.glw()))
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.G(r,"\ufffd"))}else if(p==null)return!1
else{q=p+q.bg("<\x00")
s.k(new T.G(r,q))}return!0},
pB:function(){var s=this,r=null,q=s.a,p=q.C()
if(p==null)return!1
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.G(r,"\ufffd"))}else{q=p+q.bg("\x00")
s.k(new T.G(r,q))}return!0},
qa:function(){var s=this,r=null,q=s.a,p=q.C()
if(p==="!")s.si(t.c.a(s.gpo()))
else if(p==="/")s.si(t.c.a(s.go5()))
else if(A.aS(p)){s.x=T.aM(p,r,r,!1)
s.si(t.c.a(s.gkE()))}else if(p===">"){s.k(new T.n(r,r,"expected-tag-name-but-got-right-bracket"))
s.k(new T.G(r,"<>"))
s.si(t.c.a(s.gD()))}else if(p==="?"){s.k(new T.n(r,r,"expected-tag-name-but-got-question-mark"))
q.W(p)
s.si(t.c.a(s.gfX()))}else{s.k(new T.n(r,r,"expected-tag-name"))
s.k(new T.G(r,"<"))
q.W(p)
s.si(t.c.a(s.gD()))}return!0},
o6:function(){var s,r=this,q=null,p=r.a,o=p.C()
if(A.aS(o)){r.x=new T.L(o,!1)
r.si(t.c.a(r.gkE()))}else if(o===">"){r.k(new T.n(q,q,u.g))
r.si(t.c.a(r.gD()))}else if(o==null){r.k(new T.n(q,q,"expected-closing-tag-but-got-eof"))
r.k(new T.G(q,"</"))
r.si(t.c.a(r.gD()))}else{s=t.z
s=P.z(["data",o],s,s)
r.k(new T.n(s,q,"expected-closing-tag-but-got-char"))
p.W(o)
r.si(t.c.a(r.gfX()))}return!0},
q8:function(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))r.si(t.c.a(r.gbG()))
else if(p===">")r.ba()
else if(p==null){r.k(new T.n(q,q,"eof-in-tag-name"))
r.si(t.c.a(r.gD()))}else if(p==="/")r.si(t.c.a(r.gbC()))
else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
s=t.fn.a(r.x)
s.b=H.m(s.b)+"\ufffd"}else{s=t.fn.a(r.x)
s.b=H.m(s.b)+p}return!0},
pU:function(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.z.a=""
s.si(t.c.a(s.gpR()))}else{s.k(new T.G(null,"<"))
r.W(q)
s.si(t.c.a(s.gcS()))}return!0},
pS:function(){var s=this,r=s.a,q=r.C()
if(A.aS(q)){s.z.a+=H.m(q)
s.si(t.c.a(s.gpP()))}else{s.k(new T.G(null,"</"))
r.W(q)
s.si(t.c.a(s.gcS()))}return!0},
e4:function(){var s=this.x
return s instanceof T.c_&&s.b.toLowerCase()===this.z.l(0).toLowerCase()},
pQ:function(){var s,r=this,q=r.e4(),p=r.a,o=p.C()
if(A.a6(o)&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbG()))}else if(o==="/"&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbC()))}else if(o===">"&&q){r.x=new T.L(r.z.l(0),!1)
r.ba()
r.si(t.c.a(r.gD()))}else{s=r.z
if(A.aS(o))s.a+=H.m(o)
else{s="</"+s.l(0)
r.k(new T.G(null,s))
p.W(o)
r.si(t.c.a(r.gcS()))}}return!0},
pN:function(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.z.a=""
s.si(t.c.a(s.gpK()))}else{s.k(new T.G(null,"<"))
r.W(q)
s.si(t.c.a(s.geQ()))}return!0},
pL:function(){var s=this,r=s.a,q=r.C()
if(A.aS(q)){s.z.a+=H.m(q)
s.si(t.c.a(s.gpI()))}else{s.k(new T.G(null,"</"))
r.W(q)
s.si(t.c.a(s.geQ()))}return!0},
pJ:function(){var s,r=this,q=r.e4(),p=r.a,o=p.C()
if(A.a6(o)&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbG()))}else if(o==="/"&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbC()))}else if(o===">"&&q){r.x=new T.L(r.z.l(0),!1)
r.ba()
r.si(t.c.a(r.gD()))}else{s=r.z
if(A.aS(o))s.a+=H.m(o)
else{s="</"+s.l(0)
r.k(new T.G(null,s))
p.W(o)
r.si(t.c.a(r.geQ()))}}return!0},
lx:function(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.z.a=""
s.si(t.c.a(s.glh()))}else if(q==="!"){s.k(new T.G(null,"<!"))
s.si(t.c.a(s.gll()))}else{s.k(new T.G(null,"<"))
r.W(q)
s.si(t.c.a(s.gbT()))}return!0},
li:function(){var s=this,r=s.a,q=r.C()
if(A.aS(q)){s.z.a+=H.m(q)
s.si(t.c.a(s.glf()))}else{s.k(new T.G(null,"</"))
r.W(q)
s.si(t.c.a(s.gbT()))}return!0},
lg:function(){var s,r=this,q=r.e4(),p=r.a,o=p.C()
if(A.a6(o)&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbG()))}else if(o==="/"&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbC()))}else if(o===">"&&q){r.x=new T.L(r.z.l(0),!1)
r.ba()
r.si(t.c.a(r.gD()))}else{s=r.z
if(A.aS(o))s.a+=H.m(o)
else{s="</"+s.l(0)
r.k(new T.G(null,s))
p.W(o)
r.si(t.c.a(r.gbT()))}}return!0},
lm:function(){var s=this,r=s.a,q=r.C()
if(q==="-"){s.k(new T.G(null,"-"))
s.si(t.c.a(s.glj()))}else{r.W(q)
s.si(t.c.a(s.gbT()))}return!0},
lk:function(){var s=this,r=s.a,q=r.C()
if(q==="-"){s.k(new T.G(null,"-"))
s.si(t.c.a(s.gi0()))}else{r.W(q)
s.si(t.c.a(s.gbT()))}return!0},
lv:function(){var s=this,r=null,q=s.a,p=q.C()
if(p==="-"){s.k(new T.G(r,"-"))
s.si(t.c.a(s.glo()))}else if(p==="<")s.si(t.c.a(s.gfc()))
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.G(r,"\ufffd"))}else if(p==null)s.si(t.c.a(s.gD()))
else{q=p+q.bg("<-\x00")
s.k(new T.G(r,q))}return!0},
lp:function(){var s=this,r=null,q=s.a.C()
if(q==="-"){s.k(new T.G(r,"-"))
s.si(t.c.a(s.gi0()))}else if(q==="<")s.si(t.c.a(s.gfc()))
else if(q==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.G(r,"\ufffd"))
s.si(t.c.a(s.gbl()))}else if(q==null)s.si(t.c.a(s.gD()))
else{s.k(new T.G(r,q))
s.si(t.c.a(s.gbl()))}return!0},
ln:function(){var s=this,r=null,q=s.a.C()
if(q==="-")s.k(new T.G(r,"-"))
else if(q==="<")s.si(t.c.a(s.gfc()))
else if(q===">"){s.k(new T.G(r,">"))
s.si(t.c.a(s.gbT()))}else if(q==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.G(r,"\ufffd"))
s.si(t.c.a(s.gbl()))}else if(q==null)s.si(t.c.a(s.gD()))
else{s.k(new T.G(r,q))
s.si(t.c.a(s.gbl()))}return!0},
lu:function(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.z.a=""
s.si(t.c.a(s.gls()))}else if(A.aS(q)){r="<"+H.m(q)
s.k(new T.G(null,r))
r=s.z
r.a=""
r.a+=H.m(q)
s.si(t.c.a(s.gl7()))}else{s.k(new T.G(null,"<"))
r.W(q)
s.si(t.c.a(s.gbl()))}return!0},
lt:function(){var s=this,r=s.a,q=r.C()
if(A.aS(q)){r=s.z
r.a=""
r.a+=H.m(q)
s.si(t.c.a(s.glq()))}else{s.k(new T.G(null,"</"))
r.W(q)
s.si(t.c.a(s.gbl()))}return!0},
lr:function(){var s,r=this,q=r.e4(),p=r.a,o=p.C()
if(A.a6(o)&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbG()))}else if(o==="/"&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbC()))}else if(o===">"&&q){r.x=new T.L(r.z.l(0),!1)
r.ba()
r.si(t.c.a(r.gD()))}else{s=r.z
if(A.aS(o))s.a+=H.m(o)
else{s="</"+s.l(0)
r.k(new T.G(null,s))
p.W(o)
r.si(t.c.a(r.gbl()))}}return!0},
l8:function(){var s=this,r=s.a,q=r.C()
if(A.a6(q)||q==="/"||q===">"){s.k(new T.G(q==null?new P.a5(""):null,q))
r=t.c
if(s.z.l(0).toLowerCase()==="script")s.si(r.a(s.gbS()))
else s.si(r.a(s.gbl()))}else if(A.aS(q)){s.k(new T.G(q==null?new P.a5(""):null,q))
s.z.a+=H.m(q)}else{r.W(q)
s.si(t.c.a(s.gbl()))}return!0},
le:function(){var s=this,r=null,q=s.a.C()
if(q==="-"){s.k(new T.G(r,"-"))
s.si(t.c.a(s.glb()))}else if(q==="<"){s.k(new T.G(r,"<"))
s.si(t.c.a(s.gfb()))}else if(q==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.G(r,"\ufffd"))}else if(q==null){s.k(new T.n(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else s.k(new T.G(r,q))
return!0},
lc:function(){var s=this,r=null,q=s.a.C()
if(q==="-"){s.k(new T.G(r,"-"))
s.si(t.c.a(s.gl9()))}else if(q==="<"){s.k(new T.G(r,"<"))
s.si(t.c.a(s.gfb()))}else if(q==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.G(r,"\ufffd"))
s.si(t.c.a(s.gbS()))}else if(q==null){s.k(new T.n(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else{s.k(new T.G(r,q))
s.si(t.c.a(s.gbS()))}return!0},
la:function(){var s=this,r=null,q=s.a.C()
if(q==="-")s.k(new T.G(r,"-"))
else if(q==="<"){s.k(new T.G(r,"<"))
s.si(t.c.a(s.gfb()))}else if(q===">"){s.k(new T.G(r,">"))
s.si(t.c.a(s.gbT()))}else if(q==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.G(r,"\ufffd"))
s.si(t.c.a(s.gbS()))}else if(q==null){s.k(new T.n(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else{s.k(new T.G(r,q))
s.si(t.c.a(s.gbS()))}return!0},
ld:function(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.k(new T.G(null,"/"))
s.z.a=""
s.si(t.c.a(s.gl5()))}else{r.W(q)
s.si(t.c.a(s.gbS()))}return!0},
l6:function(){var s=this,r=s.a,q=r.C()
if(A.a6(q)||q==="/"||q===">"){s.k(new T.G(q==null?new P.a5(""):null,q))
r=t.c
if(s.z.l(0).toLowerCase()==="script")s.si(r.a(s.gbl()))
else s.si(r.a(s.gbS()))}else if(A.aS(q)){s.k(new T.G(q==null?new P.a5(""):null,q))
s.z.a+=H.m(q)}else{r.W(q)
s.si(t.c.a(s.gbS()))}return!0},
nN:function(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))q.cf(" \n\r\t\f",!0)
else{q=p==null
if(!q&&A.aS(p)){s.bX(p)
s.si(t.c.a(s.gbZ()))}else if(p===">")s.ba()
else if(p==="/")s.si(t.c.a(s.gbC()))
else if(q){s.k(new T.n(r,r,"expected-attribute-name-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(C.b.F("'\"=<",p)){s.k(new T.n(r,r,"invalid-character-in-attribute-name"))
s.bX(p)
s.si(t.c.a(s.gbZ()))}else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.bX("\ufffd")
s.si(t.c.a(s.gbZ()))}else{s.bX(p)
s.si(t.c.a(s.gbZ()))}}return!0},
nG:function(){var s,r,q,p,o=this,n=null,m=o.a,l=m.C()
if(l==="="){o.si(t.c.a(o.gjt()))
s=!0
r=!1}else if(A.aS(l)){q=o.db
q.a+=H.m(l)
q.a+=m.cf("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",!0)
s=!1
r=!1}else if(l===">"){s=!0
r=!0}else{if(A.a6(l)){o.si(t.c.a(o.gns()))
s=!0}else if(l==="/"){o.si(t.c.a(o.gbC()))
s=!0}else if(l==="\x00"){o.k(new T.n(n,n,"invalid-codepoint"))
o.db.a+="\ufffd"
s=!1}else if(l==null){o.k(new T.n(n,n,"eof-in-attribute-name"))
o.si(t.c.a(o.gD()))
s=!0}else{if(C.b.F("'\"<",l)){o.k(new T.n(n,n,"invalid-character-in-attribute-name"))
o.db.a+=l}else o.db.a+=l
s=!1}r=!1}if(s){o.e_(-1)
m=o.db.a
q=t.E
p=P.ad(new H.J(new H.a8(m.charCodeAt(0)==0?m:m),q.h("j(w.E)").a(A.bR()),q.h("J<w.E,j>")),0,n)
m=o.ch
m.toString
C.a.gt(m).a=p
if(o.cx==null)o.sfv(P.nH(t.N))
if(o.cx.F(0,p))o.k(new T.n(n,n,"duplicate-attribute"))
o.cx.q(0,p)
if(r)o.ba()}return!0},
nt:function(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))q.cf(" \n\r\t\f",!0)
else if(p==="=")s.si(t.c.a(s.gjt()))
else if(p===">")s.ba()
else{q=p==null
if(!q&&A.aS(p)){s.bX(p)
s.si(t.c.a(s.gbZ()))}else if(p==="/")s.si(t.c.a(s.gbC()))
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.bX("\ufffd")
s.si(t.c.a(s.gbZ()))}else if(q){s.k(new T.n(r,r,"expected-end-of-tag-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(C.b.F("'\"<",p)){s.k(new T.n(r,r,"invalid-character-after-attribute-name"))
s.bX(p)
s.si(t.c.a(s.gbZ()))}else{s.bX(p)
s.si(t.c.a(s.gbZ()))}}return!0},
nO:function(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))q.cf(" \n\r\t\f",!0)
else if(p==='"'){s.cD(0)
s.si(t.c.a(s.gnH()))}else if(p==="&"){s.si(t.c.a(s.gec()))
q.W(p)
s.cD(0)}else if(p==="'"){s.cD(0)
s.si(t.c.a(s.gnJ()))}else if(p===">"){s.k(new T.n(r,r,u.A))
s.ba()}else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.cD(-1)
s.dx.a+="\ufffd"
s.si(t.c.a(s.gec()))}else if(p==null){s.k(new T.n(r,r,"expected-attribute-value-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(C.b.F("=<`",p)){s.k(new T.n(r,r,"equals-in-unquoted-attribute-value"))
s.cD(-1)
s.dx.a+=p
s.si(t.c.a(s.gec()))}else{s.cD(-1)
s.dx.a+=p
s.si(t.c.a(s.gec()))}return!0},
nI:function(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==='"'){r.cc(-1)
r.e_(0)
r.si(t.c.a(r.gji()))}else if(o==="&")r.ee('"',!0)
else if(o==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
r.dx.a+="\ufffd"}else if(o==null){r.k(new T.n(q,q,"eof-in-attribute-value-double-quote"))
r.cc(-1)
r.si(t.c.a(r.gD()))}else{s=r.dx
s.a+=o
s.a+=p.bg('"&')}return!0},
nK:function(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="'"){r.cc(-1)
r.e_(0)
r.si(t.c.a(r.gji()))}else if(o==="&")r.ee("'",!0)
else if(o==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
r.dx.a+="\ufffd"}else if(o==null){r.k(new T.n(q,q,"eof-in-attribute-value-single-quote"))
r.cc(-1)
r.si(t.c.a(r.gD()))}else{s=r.dx
s.a+=o
s.a+=p.bg("'&")}return!0},
nL:function(){var s,r=this,q=null,p=r.a,o=p.C()
if(A.a6(o)){r.cc(-1)
r.si(t.c.a(r.gbG()))}else if(o==="&")r.ee(">",!0)
else if(o===">"){r.cc(-1)
r.ba()}else if(o==null){r.k(new T.n(q,q,"eof-in-attribute-value-no-quotes"))
r.cc(-1)
r.si(t.c.a(r.gD()))}else if(C.b.F("\"'=<`",o)){r.k(new T.n(q,q,u.V))
r.dx.a+=o}else if(o==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
r.dx.a+="\ufffd"}else{s=r.dx
s.a+=o
s.a+=p.bg("&>\"'=<` \n\r\t\f")}return!0},
nu:function(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))s.si(t.c.a(s.gbG()))
else if(p===">")s.ba()
else if(p==="/")s.si(t.c.a(s.gbC()))
else if(p==null){s.k(new T.n(r,r,"unexpected-EOF-after-attribute-value"))
q.W(p)
s.si(t.c.a(s.gD()))}else{s.k(new T.n(r,r,u.H))
q.W(p)
s.si(t.c.a(s.gbG()))}return!0},
lz:function(){var s=this,r=null,q=s.a,p=q.C()
if(p===">"){t.fn.a(s.x).c=!0
s.ba()}else if(p==null){s.k(new T.n(r,r,"unexpected-EOF-after-solidus-in-tag"))
q.W(p)
s.si(t.c.a(s.gD()))}else{s.k(new T.n(r,r,u.B))
q.W(p)
s.si(t.c.a(s.gbG()))}return!0},
nW:function(){var s=this,r=s.a,q=r.bg(">")
q=H.bt(q,"\x00","\ufffd")
s.k(new T.d0(null,q))
r.C()
s.si(t.c.a(s.gD()))
return!0},
pp:function(){var s,r,q,p,o,n=this,m=n.a,l=H.a([m.C()],t.J)
if(C.a.gt(l)==="-"){C.a.q(l,m.C())
if(C.a.gt(l)==="-"){n.x=new T.d0(new P.a5(""),null)
n.si(t.c.a(n.goe()))
return!0}}else if(C.a.gt(l)==="d"||C.a.gt(l)==="D"){r=0
while(!0){if(!(r<6)){s=!0
break}q=C.bq[r]
p=m.C()
C.a.q(l,p)
if(p!=null)o=!H.cw(q,p,0)
else o=!0
if(o){s=!1
break}++r}if(s){n.x=new T.dV(!0)
n.si(t.c.a(n.got()))
return!0}}else{if(C.a.gt(l)==="["){o=n.f
if(o!=null){o=o.d.c
o=o.length!==0&&C.a.gt(o).x!=n.f.d.a}else o=!1}else o=!1
if(o){r=0
while(!0){if(!(r<6)){s=!0
break}q=C.bz[r]
C.a.q(l,m.C())
if(C.a.gt(l)!==q){s=!1
break}++r}if(s){n.si(t.c.a(n.go_()))
return!0}}}n.k(new T.n(null,null,"expected-dashes-or-doctype"))
for(;o=l.length,o!==0;){if(0>=o)return H.b(l,-1)
o=l.pop()
if(o!=null)m.z=m.z-o.length}n.si(t.c.a(n.gfX()))
return!0},
of:function(){var s,r=this,q=null,p=r.a.C()
if(p==="-")r.si(t.c.a(r.goc()))
else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
t.g.a(r.x).b.a+="\ufffd"}else if(p===">"){r.k(new T.n(q,q,"incorrect-comment"))
s=r.x
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-comment"))
s=r.x
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else{t.g.a(r.x).b.a+=p
r.si(t.c.a(r.gc_()))}return!0},
od:function(){var s,r,q=this,p=null,o=q.a.C()
if(o==="-")q.si(t.c.a(q.gjD()))
else if(o==="\x00"){q.k(new T.n(p,p,"invalid-codepoint"))
t.g.a(q.x).b.a+="-\ufffd"}else if(o===">"){q.k(new T.n(p,p,"incorrect-comment"))
s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else if(o==null){q.k(new T.n(p,p,"eof-in-comment"))
s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else{s=t.g.a(q.x).b
r=s.a+="-"
s.a=r+o
q.si(t.c.a(q.gc_()))}return!0},
og:function(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="-")r.si(t.c.a(r.gjC()))
else if(o==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
t.g.a(r.x).b.a+="\ufffd"}else if(o==null){r.k(new T.n(q,q,"eof-in-comment"))
p=r.x
p.toString
r.k(p)
r.si(t.c.a(r.gD()))}else{s=t.g.a(r.x)
s.b.a+=o
p=p.bg("-\x00")
s.b.a+=p}return!0},
oa:function(){var s,r,q=this,p=null,o=q.a.C()
if(o==="-")q.si(t.c.a(q.gjD()))
else if(o==="\x00"){q.k(new T.n(p,p,"invalid-codepoint"))
t.g.a(q.x).b.a+="-\ufffd"
q.si(t.c.a(q.gc_()))}else if(o==null){q.k(new T.n(p,p,"eof-in-comment-end-dash"))
s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else{s=t.g.a(q.x).b
r=s.a+="-"
s.a=r+o
q.si(t.c.a(q.gc_()))}return!0},
ob:function(){var s,r,q=this,p=null,o=q.a.C()
if(o===">"){s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else if(o==="\x00"){q.k(new T.n(p,p,"invalid-codepoint"))
t.g.a(q.x).b.a+="--\ufffd"
q.si(t.c.a(q.gc_()))}else if(o==="!"){q.k(new T.n(p,p,u.d))
q.si(t.c.a(q.go8()))}else if(o==="-"){q.k(new T.n(p,p,u.K))
s=t.g.a(q.x)
o.toString
s.b.a+=o}else if(o==null){q.k(new T.n(p,p,"eof-in-comment-double-dash"))
s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else{q.k(new T.n(p,p,"unexpected-char-in-comment"))
s=t.g.a(q.x).b
r=s.a+="--"
s.a=r+o
q.si(t.c.a(q.gc_()))}return!0},
o9:function(){var s,r,q=this,p=null,o=q.a.C()
if(o===">"){s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else if(o==="-"){t.g.a(q.x).b.a+="--!"
q.si(t.c.a(q.gjC()))}else if(o==="\x00"){q.k(new T.n(p,p,"invalid-codepoint"))
t.g.a(q.x).b.a+="--!\ufffd"
q.si(t.c.a(q.gc_()))}else if(o==null){q.k(new T.n(p,p,"eof-in-comment-end-bang-state"))
s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else{s=t.g.a(q.x).b
r=s.a+="--!"
s.a=r+o
q.si(t.c.a(q.gc_()))}return!0},
ou:function(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))s.si(t.c.a(s.gju()))
else if(p==null){s.k(new T.n(r,r,"expected-doctype-name-but-got-eof"))
q=t.i.a(s.x)
q.e=!1
s.k(q)
s.si(t.c.a(s.gD()))}else{s.k(new T.n(r,r,"need-space-after-doctype"))
q.W(p)
s.si(t.c.a(s.gju()))}return!0},
nP:function(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))return!0
else if(p===">"){r.k(new T.n(q,q,u.f))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
t.i.a(r.x).d="\ufffd"
r.si(t.c.a(r.gh7()))}else if(p==null){r.k(new T.n(q,q,"expected-doctype-name-but-got-eof"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{t.i.a(r.x).d=p
r.si(t.c.a(r.gh7()))}return!0},
oo:function(){var s,r,q,p=this,o=null,n=p.a.C()
if(A.a6(n)){s=t.i.a(p.x)
r=s.d
if(r==null)r=o
else{q=t.E
q=P.ad(new H.J(new H.a8(r),q.h("j(w.E)").a(A.bR()),q.h("J<w.E,j>")),0,o)
r=q}s.d=r
p.si(t.c.a(p.gnv()))}else if(n===">"){s=t.i.a(p.x)
r=s.d
if(r==null)r=o
else{q=t.E
q=P.ad(new H.J(new H.a8(r),q.h("j(w.E)").a(A.bR()),q.h("J<w.E,j>")),0,o)
r=q}s.d=r
r=p.x
r.toString
p.k(r)
p.si(t.c.a(p.gD()))}else if(n==="\x00"){p.k(new T.n(o,o,"invalid-codepoint"))
s=t.i.a(p.x)
s.d=H.m(s.d)+"\ufffd"
p.si(t.c.a(p.gh7()))}else if(n==null){p.k(new T.n(o,o,"eof-in-doctype-name"))
s=t.i.a(p.x)
s.e=!1
r=s.d
if(r==null)r=o
else{q=t.E
q=P.ad(new H.J(new H.a8(r),q.h("j(w.E)").a(A.bR()),q.h("J<w.E,j>")),0,o)
r=q}s.d=r
r=p.x
r.toString
p.k(r)
p.si(t.c.a(p.gD()))}else{s=t.i.a(p.x)
s.d=H.m(s.d)+n}return!0},
nw:function(){var s,r,q,p,o=this,n=o.a,m=n.C()
if(A.a6(m))return!0
else if(m===">"){n=o.x
n.toString
o.k(n)
o.si(t.c.a(o.gD()))}else if(m==null){t.i.a(o.x).e=!1
n.W(m)
o.k(new T.n(null,null,"eof-in-doctype"))
n=o.x
n.toString
o.k(n)
o.si(t.c.a(o.gD()))}else{if(m==="p"||m==="P"){r=0
while(!0){if(!(r<5)){s=!0
break}q=C.bf[r]
m=n.C()
if(m!=null)p=!H.cw(q,m,0)
else p=!0
if(p){s=!1
break}++r}if(s){o.si(t.c.a(o.gny()))
return!0}}else if(m==="s"||m==="S"){r=0
while(!0){if(!(r<5)){s=!0
break}q=C.bt[r]
m=n.C()
if(m!=null)p=!H.cw(q,m,0)
else p=!0
if(p){s=!1
break}++r}if(s){o.si(t.c.a(o.gnB()))
return!0}}n.W(m)
n=t.z
n=P.z(["data",m],n,n)
o.k(new T.n(n,null,u.S))
t.i.a(o.x).e=!1
o.si(t.c.a(o.gcI()))}return!0},
nz:function(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))s.si(t.c.a(s.gfU()))
else if(p==="'"||p==='"'){s.k(new T.n(r,r,"unexpected-char-in-doctype"))
q.W(p)
s.si(t.c.a(s.gfU()))}else if(p==null){s.k(new T.n(r,r,"eof-in-doctype"))
q=t.i.a(s.x)
q.e=!1
s.k(q)
s.si(t.c.a(s.gD()))}else{q.W(p)
s.si(t.c.a(s.gfU()))}return!0},
nQ:function(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))return!0
else if(p==='"'){t.i.a(r.x).b=""
r.si(t.c.a(r.gop()))}else if(p==="'"){t.i.a(r.x).b=""
r.si(t.c.a(r.gor()))}else if(p===">"){r.k(new T.n(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new T.n(q,q,"unexpected-char-in-doctype"))
t.i.a(r.x).e=!1
r.si(t.c.a(r.gcI()))}return!0},
oq:function(){var s,r=this,q=null,p=r.a.C()
if(p==='"')r.si(t.c.a(r.gjj()))
else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
s=t.i.a(r.x)
s.b=H.m(s.b)+"\ufffd"}else if(p===">"){r.k(new T.n(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.x)
s.b=H.m(s.b)+p}return!0},
os:function(){var s,r=this,q=null,p=r.a.C()
if(p==="'")r.si(t.c.a(r.gjj()))
else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
s=t.i.a(r.x)
s.b=H.m(s.b)+"\ufffd"}else if(p===">"){r.k(new T.n(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.x)
s.b=H.m(s.b)+p}return!0},
nx:function(){var s,r=this,q=null,p="unexpected-char-in-doctype",o=r.a.C()
if(A.a6(o))r.si(t.c.a(r.gnS()))
else if(o===">"){s=r.x
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else if(o==='"'){r.k(new T.n(q,q,p))
t.i.a(r.x).c=""
r.si(t.c.a(r.gh8()))}else if(o==="'"){r.k(new T.n(q,q,p))
t.i.a(r.x).c=""
r.si(t.c.a(r.gh9()))}else if(o==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new T.n(q,q,p))
t.i.a(r.x).e=!1
r.si(t.c.a(r.gcI()))}return!0},
nT:function(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))return!0
else if(p===">"){s=r.x
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==='"'){t.i.a(r.x).c=""
r.si(t.c.a(r.gh8()))}else if(p==="'"){t.i.a(r.x).c=""
r.si(t.c.a(r.gh9()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new T.n(q,q,"unexpected-char-in-doctype"))
t.i.a(r.x).e=!1
r.si(t.c.a(r.gcI()))}return!0},
nC:function(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))s.si(t.c.a(s.gfV()))
else if(p==="'"||p==='"'){s.k(new T.n(r,r,"unexpected-char-in-doctype"))
q.W(p)
s.si(t.c.a(s.gfV()))}else if(p==null){s.k(new T.n(r,r,"eof-in-doctype"))
q=t.i.a(s.x)
q.e=!1
s.k(q)
s.si(t.c.a(s.gD()))}else{q.W(p)
s.si(t.c.a(s.gfV()))}return!0},
nR:function(){var s,r=this,q=null,p="unexpected-char-in-doctype",o=r.a.C()
if(A.a6(o))return!0
else if(o==='"'){t.i.a(r.x).c=""
r.si(t.c.a(r.gh8()))}else if(o==="'"){t.i.a(r.x).c=""
r.si(t.c.a(r.gh9()))}else if(o===">"){r.k(new T.n(q,q,p))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(o==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new T.n(q,q,p))
t.i.a(r.x).e=!1
r.si(t.c.a(r.gcI()))}return!0},
ov:function(){var s,r=this,q=null,p=r.a.C()
if(p==='"')r.si(t.c.a(r.gjk()))
else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
s=t.i.a(r.x)
s.c=H.m(s.c)+"\ufffd"}else if(p===">"){r.k(new T.n(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.x)
s.c=H.m(s.c)+p}return!0},
ow:function(){var s,r=this,q=null,p=r.a.C()
if(p==="'")r.si(t.c.a(r.gjk()))
else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
s=t.i.a(r.x)
s.c=H.m(s.c)+"\ufffd"}else if(p===">"){r.k(new T.n(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.x)
s.c=H.m(s.c)+p}return!0},
nA:function(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))return!0
else if(p===">"){s=r.x
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new T.n(q,q,"unexpected-char-in-doctype"))
r.si(t.c.a(r.gcI()))}return!0},
nX:function(){var s=this,r=s.a,q=r.C()
if(q===">"){r=s.x
r.toString
s.k(r)
s.si(t.c.a(s.gD()))}else if(q==null){r.W(q)
r=s.x
r.toString
s.k(r)
s.si(t.c.a(s.gD()))}return!0},
o0:function(){var s,r,q,p=this,o=H.a([],t.s)
for(s=p.a,r=0;!0;){q=s.C()
if(q==null)break
if(q==="\x00"){p.k(new T.n(null,null,"invalid-codepoint"))
q="\ufffd"}C.a.q(o,q)
if(q==="]"&&r<2)++r
else{if(q===">"&&r===2){if(0>=o.length)return H.b(o,-1)
o.pop()
if(0>=o.length)return H.b(o,-1)
o.pop()
if(0>=o.length)return H.b(o,-1)
o.pop()
break}r=0}}if(o.length!==0){s=C.a.aY(o)
p.k(new T.G(null,s))}p.si(t.c.a(p.gD()))
return!0},
si:function(a){this.y=t.a5.a(a)},
sfw:function(a,b){this.ch=t.jq.a(b)},
sfv:function(a){this.cx=t.oA.a(a)},
sna:function(a){this.cy=t.nU.a(a)},
$iU:1,
m2:function(a){return this.gm1(this).$0()}}
Y.jV.prototype={
$1:function(a){return C.b.a2(H.az(a),this.a)},
$S:8}
Y.jW.prototype={
$0:function(){var s=this.a.b
return s==null?H.c(H.f("value")):s},
$S:7}
D.fw.prototype={
q:function(a,b){var s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/1999/xhtml"
t.mV.a(b)
if(b!=null)for(s=H.H(j).h("W<w.E>"),r=new H.W(j,s),r=new H.M(r,r.gm(r),s.h("M<C.E>")),q=b.y,p=b.x,s=s.h("C.E"),o=0;r.n();){n=s.a(r.d)
if(n==null)break
m=n.x
if(m==null)m=i
l=n.y
k=p==null?i:p
l=k===m&&q==l
if(l&&D.t3(n.b,b.b))++o
if(o===3){C.a.a8(j.a,n)
break}}j.bV(0,b)}}
D.kI.prototype={
gbH:function(a){var s=this.b
return s==null?H.c(H.f("document")):s},
bv:function(a){var s=this
C.a.sm(s.c,0)
s.d.sm(0,0)
s.f=s.e=null
s.r=!1
s.b=new B.d2(P.a4(t.K,t.N))},
a4:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="We should never reach this point",g="http://www.w3.org/1999/xhtml",f=a instanceof B.ak
if(b!=null)switch(b){case"button":s=C.V
r=C.b9
q=!1
break
case"list":s=C.V
r=C.bh
q=!1
break
case"table":s=C.bE
r=C.I
q=!1
break
case"select":s=C.bA
r=C.I
q=!0
break
default:throw H.d(P.am(h))}else{s=C.V
r=C.I
q=!1}for(p=this.c,o=H.x(p).h("W<1>"),p=new H.W(p,o),p=new H.M(p,p.gm(p),o.h("M<C.E>")),n=t.X,m=!f,o=o.h("C.E");p.n();){l=o.a(p.d)
if(m){k=l.y
k=k==null?a==null:k===a}else k=!1
if(!k)k=f&&l===a
else k=!0
if(k)return!0
else{j=l.x
k=j==null
i=k?g:j
l=l.y
if(!C.a.F(s,new B.p(i,l,n)))l=C.a.F(r,new B.p(k?g:j,l,n))
else l=!0
if(q!==l)return!1}}throw H.d(P.am(h))},
b9:function(a){return this.a4(a,null)},
aI:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g.gm(g)===0)return
s=g.a
r=s.length
q=r-1
if(q<0)return H.b(s,q)
p=s[q]
if(p==null||C.a.F(h.c,p))return
r=h.c
while(!0){if(!(p!=null&&!C.a.F(r,p)))break
if(q===0){q=-1
break}--q
if(q<0||q>=s.length)return H.b(s,q)
p=s[q]}for(r=H.H(g).h("aW.E"),o=t.K,n=t.N;!0;){++q
if(q<0||q>=s.length)return H.b(s,q)
p=s[q]
m=p.y
l=p.x
k=P.hf(p.b,o,n)
j=new T.cg(k,l,m,!1)
j.a=p.e
i=h.S(j)
C.a.v(s,q,r.a(i))
if(g.gm(g)===0)H.c(H.ah())
if(i===g.j(0,g.gm(g)-1))break}},
fZ:function(){var s=this.d,r=s.dD(s)
while(!0){if(!(!s.gai(s)&&r!=null))break
r=s.dD(s)}},
jS:function(a){var s,r,q
for(s=this.d,r=H.H(s).h("W<w.E>"),s=new H.W(s,r),s=new H.M(s,s.gm(s),r.h("M<C.E>")),r=r.h("C.E");s.n();){q=r.a(s.d)
if(q==null)break
else if(q.y==a)return q}return null},
cM:function(a,b){var s=b.gaq(b),r=new B.dT(a.gaF(a),P.a4(t.K,t.N))
r.e=a.a
s.q(0,r)},
jJ:function(a,b){var s,r,q=b.b,p=b.x
if(p==null)p=this.a
this.gbH(this)
s=p===""?null:p
r=new B.R(s,q,P.a4(t.K,t.N))
r.sde(0,b.e)
r.e=b.a
return r},
S:function(a){if(this.r)return this.pd(a)
return this.ke(a)},
ke:function(a){var s,r,q,p=this,o=a.b,n=a.x
if(n==null)n=p.a
p.gbH(p)
s=n===""?null:n
r=new B.R(s,o,P.a4(t.K,t.N))
r.sde(0,a.e)
r.e=a.a
q=p.c
J.pJ(C.a.gt(q)).q(0,r)
C.a.q(q,r)
return r},
pd:function(a){var s,r,q=this,p=q.jJ(0,a),o=q.c
if(!C.a.F(C.X,C.a.gt(o).y))return q.ke(a)
else{s=q.f9()
r=s[1]
if(r==null){r=s[0]
r.gaq(r).q(0,p)}else s[0].pc(0,p,r)
C.a.q(o,p)}return p},
c1:function(a,b){var s,r=this.c,q=C.a.gt(r)
if(this.r){r=C.a.gt(r)
r=!C.a.F(C.X,r.y)}else r=!0
if(r)D.o0(q,a,b,null)
else{s=this.f9()
r=s[0]
r.toString
D.o0(r,a,b,t.mV.a(s[1]))}},
f9:function(){var s,r,q,p=this.c,o=H.x(p).h("W<1>"),n=new H.W(p,o)
n=new H.M(n,n.gm(n),o.h("M<C.E>"))
o=o.h("C.E")
while(!0){if(!n.n()){s=null
break}s=o.a(n.d)
if(s.y==="table")break}if(s!=null){r=s.a
if(r!=null)q=s
else{o=C.a.ap(p,s)-1
if(o<0||o>=p.length)return H.b(p,o)
r=p[o]
q=null}}else{if(0>=p.length)return H.b(p,0)
r=p[0]
q=null}return H.a([r,q],t.fA)},
c6:function(a){var s=this.c,r=C.a.gt(s).y
if(r!=a&&C.a.F(C.W,r)){if(0>=s.length)return H.b(s,-1)
s.pop()
this.c6(a)}},
ct:function(){return this.c6(null)},
sp5:function(a){this.e=t.e1.a(a)},
ska:function(a){this.f=t.mV.a(a)}}
B.p.prototype={
gJ:function(a){return 37*J.cx(this.a)+J.cx(this.b)},
Y:function(a,b){if(b==null)return!1
return b instanceof B.p&&b.a==this.a&&b.b==this.b}}
B.m1.prototype={
$2:function(a,b){var s,r,q,p,o,n,m,l,k,j=new P.a5(""),i="%("+H.m(a)+")"
for(s=this.a,r=i.length,q=J.bs(b),p=0,o="";n=s.a,m=C.b.aT(n,i,p),m>=0;){j.a=o+C.b.B(n,p,m)
m+=r
l=m
while(!0){o=s.a
if(l>=o.length)return H.b(o,l)
if(!A.mf(o[l]))break;++l}if(l>m){k=P.cu(C.b.B(s.a,m,l),null)
m=l}else k=0
o=s.a
if(m>=o.length)return H.b(o,m)
o=o[m]
switch(o){case"s":o=j.a+=H.m(b)
break
case"d":o=j.a+=B.pc(q.l(b),k)
break
case"x":o=j.a+=B.pc(C.d.qg(H.Z(b),16),k)
break
default:throw H.d(P.T("formatStr does not support format character "+o))}p=m+1}r=j.a=o+C.b.B(n,p,n.length)
s.a=r.charCodeAt(0)==0?r:r},
$S:26}
L.aN.prototype={
gfo:function(){var s=this.x
return s==null?H.c(H.f("startingMobject")):s},
l:function(a){var s=this.r
return this.bb()+"("+s.gI(s)+", runTime: "+H.m(this.a)+"s)"},
bb:function(){var s=this.ik(0),r=P.ay("^Instance of '(.*?)'$").k9(s).b
if(1>=r.length)return H.b(r,1)
r=r[1]
r.toString
return r},
df:function(){this.x=this.h5()
this.du(0)},
hl:function(){this.du(1)},
dg:function(a){},
h5:function(){return this.r.p()},
dJ:function(){return H.a([this.r,this.gfo()],t.r)},
hN:function(){var s,r,q,p=H.a([],t.Z)
for(s=this.dJ(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)p.push(s[q].dL())
s=t.Y
return P.i(new A.ai(p,s),!0,s.h("k.E"))},
cr:function(a){var s,r,q
for(s=this.kO(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].hK(a)},
kO:function(){var s,r,q,p,o=H.a([],t.r)
for(s=this.dJ(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
o.push(p)}return o},
du:function(a){a=Math.min(1,Math.max(a,0))
this.kf(this.b.$1(a))},
kf:function(a){var s,r,q,p,o,n=this.hN()
for(s=B.D(n.length,0,1),r=s.length,q=this.c,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=s[p]
this.hp(C.a.j(n,o),Math.min(1,Math.max(a*((n.length-1)*q+1)-H.Z(o)*q,0)))}},
hp:function(a,b){t.a.a(a)}}
L.fE.prototype={
gjn:function(){var s=this.z
return s==null?H.c(H.f("animationsTiming")):s},
gkj:function(){var s=this.Q
return s==null?H.c(H.f("maxEndTime")):s},
mm:function(a,b,c,d,e){var s,r,q=H.a([],t.r)
for(s=this.y,r=0;r<2;++r)q.push(s[r].r)
this.r.aN(t.a.a(B.po(q,t.j)))
this.pb()},
dJ:function(){return t.ek.a(this.r).gO()},
df:function(){var s,r
for(s=this.y,r=0;r<2;++r)s[r].df()},
hl:function(){var s,r
for(s=this.y,r=0;r<2;++r)s[r].hl()},
dg:function(a){var s,r
for(s=this.y,r=0;r<2;++r)s[r].dg(a)},
cr:function(a){var s,r
for(s=this.y,r=0;r<2;++r)s[r].cr(a)},
pb:function(){var s,r,q,p,o=this
o.smu(t.dq.a(o.kQ()))
s=H.a([],t.n)
for(r=o.gjn(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)s.push(r[p].c)
o.Q=H.aP(C.a.eA(s,0,C.C,t.W))
if(o.a===0)o.a=o.gkj()},
kQ:function(){var s,r,q,p,o,n,m,l,k=H.a([],t.bB)
for(s=this.y,r=t.oM,q=this.c,p=1-q,o=0,n=0;n<2;++n){m=s[n]
l=o+m.a
C.a.q(k,new S.cj(m,o,l,r))
o=o*p+l*q}return k},
du:function(a){var s,r,q,p,o,n,m,l=a*this.gkj()
for(s=this.gjn(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
o=p.b
n=p.c-o
m=n!==0?Math.min(1,Math.max((l-o)/n,0)):0
p.a.du(m)}},
smu:function(a){this.z=t.az.a(a)}}
L.hI.prototype={
hp:function(a,b){var s,r
t.a.a(a)
s=J.X(a)
r=[0,b]
s.j(a,0).dB(s.j(a,1),r[0],r[1])}}
L.hH.prototype={}
L.fZ.prototype={
jL:function(){return this.r},
h5:function(){var s=this.m9()
s.he(1)
if(s instanceof K.P){s.cv(C.k)
s.i3(C.k,0)}return s}}
L.eQ.prototype={
ghG:function(){var s=this.y
return s==null?H.c(H.f("targetMobject")):s},
ghF:function(){var s=this.z
return s==null?H.c(H.f("targetCopy")):s},
ip:function(a,b,c,d,e){if(e!=null)this.y=e
this.pa()},
pa:function(){if(this.cx!=null)return
this.spy(U.pe())},
df:function(){var s=this
s.y=s.jL()
s.z=s.ghG().p()
s.r.fR(s.ghF())
s.m7()},
jL:function(){return this.ghG()},
dg:function(a){this.m8(a)},
dJ:function(){var s=this
return H.a([s.r,s.gfo(),s.ghG(),s.ghF()],t.r)},
hN:function(){var s,r,q=H.a([],t.Z)
for(s=[this.r,this.gfo(),this.ghF()],r=0;r<3;++r)q.push(s[r].dL())
s=t.Y
return P.i(new A.ai(q,s),!0,s.h("k.E"))},
hp:function(a,b){var s,r,q,p,o,n
t.a.a(a)
s=J.X(a)
r=s.j(a,0)
q=s.j(a,1)
s=s.j(a,2)
p=this.cx
o=t.j
o.a(q)
o.a(s)
t.lX.a(p)
n=p==null?U.pe():p
r.saL(t.y.a(n.$3(q.gw(q),s.gw(s),b)))
r.ho(q,s,b)},
spy:function(a){this.cx=t.lX.a(a)}}
L.eT.prototype={
kf:function(a){var s=this.$ti.c.a(this.r)
this.y.$2(s,a)}}
T.j7.prototype={
gax:function(a){var s=this.r
return s==null?H.c(H.f("display")):s},
hd:function(a){var s,r,q,p
t.a.a(a)
s=new T.j8()
r=H.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,H.e)(a),++p)C.a.R(r,s.$1(a[p]))
return B.po(r,t.j)},
hC:function(a){var s,r,q,p,o="renderer"
for(s=this.hd(t.a.a(a)),r=H.x(s).h("W<1>"),s=new H.W(s,r),s=new H.M(s,s.gm(s),r.h("M<C.E>")),r=r.h("C.E");s.n();){q=r.a(s.d)
p=this.r
if(q instanceof K.P){p=(p==null?H.c(H.f("display")):p).a;(p==null?H.c(H.f(o)):p).q_(q)}else if((p==null?H.c(H.f("display")):p).a==null)H.c(H.f(o))}},
kF:function(a,b){t.y.a(b)
return!C.a.cK(b,new T.j9())?H.a([C.e],t.l):b}}
T.j8.prototype={
$1:function(a){return a.bR()},
$S:36}
T.j9.prototype={
$1:function(a){t.V.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:37}
L.dI.prototype={
gdE:function(){var s=this.a
return s==null?H.c(H.f("renderer")):s},
gau:function(){var s=this.b
return s==null?H.c(H.f("camera")):s},
jw:function(a){var s
this.b=a
s=this.d
C.a9.sqr(s,1280)
C.a9.sbs(s,720)},
eb:function(a){return a},
f3:function(a,b){var s,r,q=this
q.gau()
s=F.iK(a,0,1280,-q.gau().c/2,q.gau().c/2)
q.gau()
r=F.iK(b,720,0,-q.gau().d/2,q.gau().d/2)
q.gau()
return new M.h(s,r,0).K(0,C.e)}}
Z.fv.prototype={
dz:function(){var s=0,r=P.bF(t.W),q,p=this,o,n,m
var $async$dz=P.bG(function(a,b){if(a===1)return P.bC(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return P.ao(C.e1.gnE(m),$async$dz)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return P.bD(q,r)}})
return P.bE($async$dz,r)},
f6:function(a){var s,r,q,p
t.n8.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.gau()
p=F.iK(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
this.gau()
return new M.h(p,F.iK(a.b,q,r,0,720),0)},
fW:function(){var s=this,r=s.d,q=t.eX,p=q.h("~(1)?"),o=p.a(new Z.iQ(s))
t.jE.a(null)
q=q.c
C.a.R(s.r,H.a([W.lc(r,"mousemove",o,!1,q),W.lc(r,"mousedown",p.a(new Z.iR(s)),!1,q),W.lc(r,"mouseup",p.a(new Z.iS(s)),!1,q)],t.dw))},
qh:function(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].nZ()}}
Z.iQ.prototype={
$1:function(a){var s,r,q,p
t.gD.a(a)
s=this.a
r=s.ch
s.cx=new M.h(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.f6(new P.cO(r,q,t.n8))
q=s.f3(p.a,p.b)
s.ch=q
q.L(0,s.cx)
q=s.ch
$.dH().ei(new Y.eu(q,C.D,"MouseMovedEvent"))
if(s.x){r=s.z=s.ch
s.y.L(0,r)
$.dH().ei(new Y.bV(r,C.x,"MouseDraggedEvent"))}},
$S:16}
Z.iR.prototype={
$1:function(a){var s,r,q,p,o
t.gD.a(a)
s=this.a
r=s.ch
s.cx=new M.h(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.f6(new P.cO(r,q,t.n8))
s.ch=s.f3(p.a,p.b)
q=a.button
q.toString
r=new Y.et(q)
r.fp(q)
s.Q=r
r=s.ch
$.dH().ei(new Y.bW(r,C.v,"MousePressedEvent"))
s.x=!0
r=s.ch
q=r.a
o=r.b
r=r.c
s.y=new M.h(q,o,r)
s.z=new M.h(q,o,r)},
$S:16}
Z.iS.prototype={
$1:function(a){var s,r,q,p
t.gD.a(a)
s=this.a
r=s.ch
s.cx=new M.h(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.f6(new P.cO(r,q,t.n8))
s.ch=s.f3(p.a,p.b)
q=a.button
q.toString
r=new Y.et(q)
r.fp(q)
s.Q=r
r=s.ch
$.dH().ei(new Y.bX(r,C.w,"MouseReleasedEvent"))
s.x=!1},
$S:16}
Z.fN.prototype={}
M.dh.prototype={
p:function(){return M.mB(this)},
nq:function(){var s,r,q,p=this,o=t.b1,n=H.a([],o),m=p.k6?-1:1,l=p.ev
l.toString
s=p.k_
s=B.iH(p.b2+m*s/2,l,s).aQ(0)
l=s.length
r=p.cj
q=0
for(;q<s.length;s.length===l||(0,H.e)(s),++q)n.push(p.hU(s[q],r))
p.sqe(n)
o=H.a([],o)
for(n=p.k0,l=n.length,r*=p.k5,q=0;q<n.length;n.length===l||(0,H.e)(n),++q)o.push(p.hU(n[q],r))
p.snU(o)
o=p.hi
o.toString
o=P.i(o,!0,t.j)
n=p.dn
n.toString
C.a.R(o,n)
p.aN(t.a.a(o))},
hU:function(a,b){var s,r=this,q=C.o.A(0,b),p=V.mu(C.c,C.L.A(0,b),q)
p.hD(0,r.b5().L(0,r.bc()).dd())
p.c3(r.hw(a))
p.b0(r.f1())
p.cv(J.Y(r.bz(),0))
q=J.aE(r.bA(!1))
s=r.x
p.i3(q,s)
return p},
hw:function(a){var s=this,r=F.iK(a,s.dm,s.b2,0,1)
return B.fo(s.bc(),s.b5(),r,t.V)},
kp:function(a){var s,r=this,q=r.bc(),p=r.b5(),o=p.L(0,q),n=o.b4(0,Math.sqrt(o.bj()))
o=n.jQ(a.L(0,q))
s=n.jQ(p.L(0,q))
return B.fo(r.dm,r.b2,o/s,t.W)},
sqe:function(a){this.hi=t.gv.a(a)},
snU:function(a){this.dn=t.gv.a(a)}}
M.kj.prototype={
$1:function(a){return t.F.a(a).p()},
$S:30}
M.kk.prototype={
$1:function(a){return t.F.a(a).p()},
$S:30}
M.fS.prototype={
hR:function(a,b){var s
t.f3.a(a)
s=Y.q5(C.c,C.bn,1e-8,a,b,this.em,this.el)
s.ce(new M.jg(this))
return s}}
M.jg.prototype={
$1:function(a){return this.a.eg(a)},
$S:3}
M.cB.prototype={
gc4:function(){var s=this.er
return s==null?H.c(H.f("xAxis")):s},
gc5:function(){var s=this.es
return s==null?H.c(H.f("yAxis")):s},
il:function(a,b,c,d,e,f,g,h){var s=this
s.er=s.jI(e,d,s.ep.bO(s.gjO()))
s.es=s.jI(h,g,s.eq.bO(s.gjP()))
s.gc5().eV(0,-1.5707963267948966,C.e,C.m)
s.eu=K.i3(H.a([s.gc4(),s.gc5()],t.U))
s.aN(t.a.a(H.a([s.gc4(),s.gc5()],t.r)))
s.aD(s.en)},
jI:function(b8,b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.a.aZ(H.a([c0,this.eo,this.gjN()],t.iX),new M.j5()),b7=b6.a
if(b7==null)b7=C.S
s=b6.e
if(s==null)s=1
r=b6.f
r=r!==!1
q=b6.r
if(q==null)q=0.1
p=b6.x
if(p==null)p=1
o=b6.y
n=b6.z
if(n==null)n=H.a([0],t.n)
m=b6.Q
l=b6.ch
k=b6.cx
if(k==null)k=2
j=b6.cy
if(j==null)j=0
i=b6.db
if(i==null)i=0.75
h=b6.d
if(h==null)h=C.o
g=b6.dx
if(g==null)g=0.25
f=b6.b
f=f!==!1
e=b6.dy
if(e==null)e=0.25
d=b6.fr
if(d==null)d=0.25
c=b6.fx
b=b6.c
a=V.b6(b5,0,C.c,b5,0)
b=new M.dh(b8,b9,s,r,q,p,o,n,m===!0,l,k,j,i,h,g,f,c,b!==!1,e,d,b5,b5,0,b5,C.j,C.z,0.35,C.m,a,b5,b5,4,0,!1,0.01,!1,0.000001,4,b5,b5,b5,C.c,b5,b5,b5,b5,b5)
b.am(C.c,b5,b5)
b.b0(b7)
d=Math.max(e,d)
b.k3=d
if(f)b.b2=b.b2+d/2
b.ad=C.j.A(0,s).A(0,b8)
b7=C.j.A(0,s).A(0,b.b2)
b.ao=b7
b.cR(b.ad,b7)
b.aD(b.hw(j).A(0,-1))
if(b.ev==null)b.ev=p*C.f.fY(b8/p)
if(f){a0=b.k3
a1=b.f1()
a2=V.ci(a)
b7=a2.a
b7=b7==null?b5:J.cy(b7)
if(b7!==!1)a2=a2.qs(a1.p())
b7=a2.b
b7=b7==null?b5:J.cy(b7)
if(b7!==!1)a2=a2.qt(a1.p())
a3=S.tN(3.141592653589793,C.m).aQ(0)
b7=a3.length
if(0>=b7)return H.b(a3,0)
a4=a3[0]
if(1>=b7)return H.b(a3,1)
a5=a3[1]
if(2>=b7)return H.b(a3,2)
a6=a3[2]
if(3>=b7)return H.b(a3,3)
a7=a3[3]
b7=a5*0
s=a6*0
a8=a7+b7-s
q=a7*0
p=a4*0
a9=q+a6-p
b0=q+p-a5
p=-a4
b1=p-b7-s
s=-a6
b7=-a5
p=S.tk(3,new M.h(a8*a7+b1*p+a9*s-b0*b7,a9*a7+b1*b7+b0*p-a8*s,b0*a7+b1*s+a8*b7-a9*p))
b2=new V.dL(4,0,!1,0.01,!1,0.000001,4,b5,b5,b5,C.c,b5,b5,b5,b5,b5)
b2.am(C.c,b5,b5)
b2.dU(p,C.c)
b2.hD(0,3.141592653589793)
b2.fl(a0,!0)
b2.dQ(a0,!0)
b2.ki(b)
b2.fk(a2)
b3=b.b5()
b4=J.Y(b.gw(b),J.K(b.gw(b))-2)
b2.hD(0,-b4.L(0,b3).dd()-J.aE(b2.gw(b2)).L(0,b2.eM(0.5)).dd()-3.141592653589793)
b2.aD(b3.L(0,J.aE(b2.gw(b2))))
b.q0(b2,C.dZ)
b.rx=b2
b.aN(t.a.a(H.a([b2],t.r)))}if(r)b.nq()
b7=b6.fy
b.fi(b7==null?4:b7)
return b},
eg:function(a){var s,r,q,p,o,n="getStart",m=this.gc4().hw(0),l=new M.h(m.a,m.b,m.c),k=H.a([a.a,a.b,a.c],t.n),j=this.eu
k=new A.ai(H.a([k,(j==null?H.c(H.f("axes")):j).gO()],t.bo),t.c2)
k=k.gH(k)
j=t.f7
for(;k.n();){s=k.b
if(s==null)s=H.c(P.am("No element"))
if(1>=s.length)return H.b(s,1)
r=j.a(s[1])
q=r.dm
p=(H.aP(s[0])-q)/(r.b2-q)+0
q=r.r2
if(q!=null){q.at(n)
q=q.r
q=J.aE(q==null?H.c(H.f("points")):q)}else q=r.d2()
o=r.rx
if(o!=null){o.at(n)
o=o.r
o=J.aE(o==null?H.c(H.f("points")):o)}else o=r.d1()
l=l.K(0,q.A(0,1-p).K(0,o.A(0,p)).L(0,m))}return l},
hA:function(a){return new M.h(this.gc4().kp(a),this.gc5().kp(a),0)},
im:function(a){var s=this
s.er=M.mB(a.gc4())
s.es=M.mB(a.gc5())
s.eu=K.i3(H.a([s.gc4(),s.gc5()],t.U))},
p:function(){return M.nt(this)},
gjN:function(){return C.P},
gjO:function(){return C.n},
gjP:function(){return C.O}}
M.j5.prototype={
$2:function(a,b){var s=t.fy
return s.a(a).bO(s.a(b))},
$S:41}
M.ey.prototype={
p:function(){return M.qo(this)},
gjr:function(){var s=this.jY
return s==null?H.c(H.f("backgroundLines")):s},
gjW:function(){var s=this.jZ
return s==null?H.c(H.f("fadedLines")):s},
p9:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.ew==null){s=h.hj
r=t.O
q=H.a([],r)
p=H.a([],r)
o=s.b
r=J.I(o==null?H.a([],r):o)
for(;r.n();){o=r.gu()
n=o.d
p.push(new V.N(o.a,o.b,o.c,n*0.5))}h.ew=new K.ck(q,p,s.c*0.5,s.d,s.e*0.5)}s=h.jX
m=h.hS(h.gc4(),h.gc5(),h.k7,s)
l=h.hS(h.gc5(),h.gc4(),h.k8,s)
s=t.F
r=P.i(m[0],!0,s)
C.a.R(r,l[0])
s=P.i(m[1],!0,s)
C.a.R(s,l[1])
k=[r,s]
s=t.p1
h.smB(s.a(k[0]))
h.smC(s.a(k[1]))
j=K.i3(h.gjr())
j.fk(h.hj)
i=K.i3(h.gjW())
s=h.ew
s.toString
i.fk(s)
h.nr(H.a([j,i],t.r))},
hS:function(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="getStart",e=a.bc(),d=V.mu(C.c,a.b5(),e),c=1+a2,b=1/c*a1
e=t.b1
s=H.a([],e)
r=H.a([],e)
e=a0.dm
q=[B.iH(a0.b2,0,b).aQ(0),B.iH(e,0,-b).aQ(0)]
for(p=t.W,o=0;o<2;++o)for(n=B.cW(q[o],p),m=n.length,l=0;l<n.length;n.length===m||(0,H.e)(n),++l){k=n[l]
j=V.nG(d)
i=(k.b-e)/(a0.b2-e)+0
h=a0.r2
if(h!=null){h.at(f)
h=h.r
h=J.aE(h==null?H.c(H.f("points")):h)}else h=a0.d2()
g=a0.rx
if(g!=null){g.at(f)
g=g.r
g=J.aE(g==null?H.c(H.f("points")):g)}else g=a0.d1()
j.aD(h.A(0,1-i).K(0,g.A(0,i)))
if(C.d.Z(k.a,c)===0)C.a.q(s,j)
else C.a.q(r,j)}return H.a([s,r],t.km)},
smB:function(a){this.jY=t.gv.a(a)},
smC:function(a){this.jZ=t.gv.a(a)},
gjN:function(){return this.dn},
gjO:function(){return this.oV},
gjP:function(){return this.oW}}
M.aJ.prototype={
bO:function(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a
if(a==null)a=a0.a
s=b.e
if(s==null)s=a0.e
r=b.f
if(r==null)r=a0.f
q=b.r
if(q==null)q=a0.r
p=b.x
if(p==null)p=a0.x
o=b.z
if(o==null)o=a0.z
n=b.Q
if(n==null)n=a0.Q
m=b.ch
if(m==null)m=a0.ch
l=b.cx
if(l==null)l=a0.cx
k=b.cy
if(k==null)k=a0.cy
j=b.db
if(j==null)j=a0.db
i=b.d
if(i==null)i=a0.d
h=b.dx
if(h==null)h=a0.dx
g=b.b
if(g==null)g=a0.b
f=b.dy
if(f==null)f=a0.dy
e=b.fr
if(e==null)e=a0.fr
d=b.c
if(d==null)d=a0.c
c=b.fy
if(c==null)c=a0.fy
return M.cY(a,a0.fx,d,n,r,g,i,a0.y,h,l,k,j,m,o,c,p,q,e,f,s)}}
Y.di.prototype={
l2:function(a){var s=this.k3
if(s>0)return s
return Math.pow(10,(a===0?0:C.f.p0(Math.min(0,Math.log(Math.abs(a))/2.302585092994046)))-2)},
bQ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.rx,b=H.x(c)
b=P.i(new H.an(c,b.h("E(1)").a(new Y.kl(d)),b.h("an<1>")),!0,t.W)
c=t.n
s=H.a([d.k4,d.r1],c)
for(r=b.length,q=d.r2,p=0;p<r;++p){o=b[p]
if(typeof o!=="number")return o.L()
C.a.R(s,H.a([o-q,o+q],c))}C.a.lR(s)
for(c=B.D(s.length/2|0,0,1),b=c.length,r=t.l,q=t.V,n=t.y,p=0;p<c.length;c.length===b||(0,H.e)(c),++p){m=c[p]
if(typeof m!=="number")return m.K()
l=C.a.j(s,m+0)
k=C.a.j(s,m+1)
j=B.iH(k,l,d.l2(l)).aQ(0)
if(!J.S(C.a.gt(j),k))C.a.q(j,k)
i=H.a([],r)
for(h=j.length,g=0;g<j.length;j.length===h||(0,H.e)(j),++g){f=H.aP(j[g])
i.push(d.ry.$1(f))}h=H.a([],r)
for(f=i.length,g=0;g<i.length;i.length===f||(0,H.e)(i),++g){e=i[g]
l=e.a
if(!(isNaN(l)||isNaN(e.b)||isNaN(e.c))&&isFinite(l)&&isFinite(e.b)&&isFinite(e.c))h.push(e)}if(h.length!==0){i=n.a(H.a([C.a.gah(h)],r))
f=d.r
J.af(f==null?H.c(H.f("points")):f,i)
d.np(B.bH(h,q))}}},
p:function(){return Y.qp(this)}}
Y.kl.prototype={
$1:function(a){var s
H.aP(a)
s=this.a
return a>=s.k4&&a<=s.r1},
$S:42}
Y.e9.prototype={
p:function(){return Y.mp(this)}}
Y.jw.prototype={
$1:function(a){H.aP(a)
return new M.h(a,this.a.$1(a),0)},
$S:29}
V.eO.prototype={
kL:function(a,b){var s,r
if(a==null)s=null
else s=a
if(s==null)s=C.k
if(b==null)r=null
else r=b
if(r==null)r=C.k
return V.b6(C.k,this.e,s,r,this.c)},
qs:function(a){return this.kL(a,null)},
qt:function(a){return this.kL(null,a)}}
V.hV.prototype={
l:function(a){return this.b}}
V.eP.prototype={
p:function(){return V.qU(this)},
q0:function(a,b){var s=this
if(Math.sqrt(s.bc().L(0,s.b5()).bj())===0)return
if(b===C.dY)s.cR(a.eM(0.5),s.b5())
else s.cR(s.bc(),a.eM(0.5))},
c8:function(a,b){this.fj(a,!1)
this.ff(C.k,!1)
this.ml(a,!0)},
b0:function(a){return this.c8(a,!0)},
b5:function(){var s=this.rx
if(s!=null){s.at("getStart")
s=J.aE(s.gw(s))}else s=this.d1()
return s},
bc:function(){var s=this.r2
if(s!=null){s.at("getStart")
s=J.aE(s.gw(s))}else s=this.d2()
return s}}
V.dK.prototype={
p:function(){return V.pO(this)},
bQ:function(){var s=this
s.lH()
s.i_(s.ad,C.e)
s.aD(s.ao)},
lH:function(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=H.a([],i)
for(s=j.aS,r=j.ac,q=j.br,s=B.fq(q,r+s,s).aQ(0),p=s.length,o=0;o<s.length;s.length===p||(0,H.e)(s),++o){n=s[o]
h.push(C.j.A(0,Math.cos(n)).K(0,C.L.A(0,Math.sin(n))))}s=H.a([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,H.e)(h),++o){n=h[o]
s.push(new M.h(-n.b,n.a,n.c))}p=H.a([],i)
for(m=B.D(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,H.e)(m),++o){k=m[o]
p.push(C.a.j(h,k).K(0,C.a.j(s,k).A(0,q)))}i=H.a([],i)
for(r=B.D(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,H.e)(r),++o){k=r[o]
i.push(C.a.j(h,k).L(0,C.a.j(s,k).A(0,q)))}s=t.V
j.fd(B.nd(h,s),p,i,B.bH(h,s))}}
V.cA.prototype={
p:function(){return V.pQ(this)}}
V.d_.prototype={
p:function(){return V.pW(this)},
ged:function(){return!0}}
V.dY.prototype={
p:function(){return V.nB(this)}}
V.e0.prototype={
p:function(){return V.q3(this)}}
V.ax.prototype={
p:function(){return V.nG(this)},
bQ:function(){var s=this
s.fg(H.a([s.ad,s.ao],t.l))
s.nm()},
nm:function(){var s,r,q=this,p=q.aS
if(p===0)return
s=Math.sqrt(q.bc().L(0,q.b5()).bj())
if(s<2*p)return
r=p/s
q.dB(q,r,1-r)},
cR:function(a,b){var s=this
if(s.bc().Y(0,s.b5())){s.ad=a
s.ao=b
s.bQ()}return s.mh(a,b)}}
V.ez.prototype={
dU:function(a,b){var s=P.i(a,!0,t.V)
s.push(C.a.gah(a))
this.fg(s)},
p:function(){return V.qr(this)},
q4:function(b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="points",b2="getStart",b3=b0.dX(0),b4=t.nC,b5=H.a([],b4)
for(s=t.V,r=B.oO(b3,3,s),q=r.length,p=J.oX(b6),o=0;o<r.length;r.length===q||(0,H.e)(r),++o){n=r[o]
m=n.length
if(0>=m)return H.b(n,0)
l=n[0]
if(1>=m)return H.b(n,1)
k=n[1]
if(2>=m)return H.b(n,2)
j=n[2]
i=k.L(0,l)
h=j.L(0,k)
m=i.a
g=i.b
f=i.c
e=m*m+g*g+f*f
d=i.b4(0,Math.sqrt(e))
c=h.a
b=h.b
a=h.c
a0=c*c+b*b+a*a
a1=h.b4(0,Math.sqrt(a0))
a2=Math.acos((m*c+g*b+f*a)/(Math.sqrt(a0)*Math.sqrt(e)))*p.gfm(b6)
a3=b6*Math.tan(a2/2)/2
a4=J.nn(i.ol(h).c)
e=k.L(0,d.A(0,a3))
C.a.q(b5,V.pP(a4*a2,k.K(0,a1.A(0,a3)),e))}r=t.l
q=t.y
b0.saL(q.a(H.a([],r)))
b4=H.a([C.a.gt(b5)],b4)
p=t.aY
C.a.R(b4,B.nd(b5,p))
for(b4=B.oO(b4,2,p),p=b4.length,o=0;o<b4.length;b4.length===p||(0,H.e)(b4),++o){a5=b4[o]
m=a5.length
if(0>=m)return H.b(a5,0)
a6=a5[0]
if(1>=m)return H.b(a5,1)
a7=a5[1]
m=a6.r
m=q.a(P.i(m==null?H.c(H.f(b1)):m,!0,s))
g=b0.r
J.af(g==null?H.c(H.f(b1)):g,m)
m=a6.rx
if(m!=null){m.at(b2)
m=m.r
m=J.aE(m==null?H.c(H.f(b1)):m)}else m=a6.d1()
g=a7.r2
if(g!=null){g.at(b2)
g=g.r
g=J.aE(g==null?H.c(H.f(b1)):g)}else g=a7.d2()
a8=V.mu(C.c,g,m)
m=a8.r2
if(m!=null){m.at(b2)
m=m.r
m=J.aE(m==null?H.c(H.f(b1)):m)}else m=a8.d2()
g=a8.rx
if(g!=null){g.at(b2)
g=g.r
g=J.aE(g==null?H.c(H.f(b1)):g)}else g=a8.d1()
g=m.L(0,g)
m=g.a
f=g.b
g=g.c
g=Math.sqrt(m*m+f*f+g*g)
f=a6.kR()
m=a6.r
m=C.f.bw(g/f*C.d.b6(J.K(m==null?H.c(H.f(b1)):m),a6.cy))
g=a8.r
if(C.d.Z(J.K(g==null?H.c(H.f(b1)):g),a8.cy)===1){g=a8.r
a9=J.aF(g==null?H.c(H.f(b1)):g)}else a9=null
g=a8.r
a8.saL(q.a(a8.hn(m,P.i(g==null?H.c(H.f(b1)):g,!0,s))))
if(a9!=null){m=q.a(H.a([a9],r))
g=a8.r
J.af(g==null?H.c(H.f(b1)):g,m)}m=a8.r
m=q.a(P.i(m==null?H.c(H.f(b1)):m,!0,s))
g=b0.r
J.af(g==null?H.c(H.f(b1)):g,m)}}}
V.eB.prototype={
p:function(){return V.qB(this)}}
V.eR.prototype={
p:function(){return V.qX(this)}}
V.dL.prototype={
p:function(){return V.aO(this)},
saJ:function(a){this.ci=H.aP(a)},
gaJ:function(){return this.ci}}
V.dp.prototype={
fq:function(a,b,c){this.fl(c,!0)
this.dQ(b,!0)},
p:function(){return V.qA(this)}}
V.eC.prototype={
p:function(){return V.qC(this)}}
D.eL.prototype={
p:function(){return D.qS(this)}}
K.cd.prototype={
p:function(){return K.qE(this)},
bQ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if($.mD.as(d.r2)){s=$.mD.j(0,d.r2).p()
d.sbf(t.a.a(s.gO()))
d.sbs(0,s.gbs(s))
d.r1=s.r1
d.k3=d.rx=!0
return}r=d.r2
q=H.a([],t.bD)
p=t.il
o=H.a([],p)
n=H.a([],t.lB)
o=new D.kI("http://www.w3.org/1999/xhtml",o,new D.fw(n))
o.bv(0)
n=P.my(t.N)
m=H.a([],t.t)
m=new V.jT(V.ti(c),c,n,m)
m.sj2(new H.a8(r))
m.a="utf-8"
m.b=!0
m.bv(0)
r=new Y.ea(m,!0,!0,!1,P.my(t.nU),new P.a5(""),new P.a5(""),new P.a5(""))
r.bv(0)
l=new V.jU(!1,r,o,q)
r.f=l
l.n_()
k=o.gbH(o)
j=H.a([],p)
r=t.kU
i=H.a([],r)
h=L.qs("memory",!1)
r=H.a([],r)
$.lC=new F.k8(C.a.gnn(i),h,r)
r=new H.a8("svg")
q=H.a([0],t.t)
g=new Y.hL(c,q,new Uint32Array(H.mV(r.aw(r))))
g.io(r,c)
r=new G.kG(85,117,43,63,new H.a8("CDATA"),g,"svg",!0,0)
q=new G.lv(r)
q.d=t.q.a(r.cO())
r.e=!0
f=q.pH()
if(f==null||i.length!==0)H.c(P.aH("'svg' is not a valid selector: "+H.m(i),c,c))
new B.eE().ku(0,k,f,j)
r=j.length
q=t.a
e=0
for(;e<j.length;j.length===r||(0,H.e)(j),++e)d.aN(q.a(d.f5(j[e],new K.eD(C.u,c,c))))
$.mD.v(0,d.r2,d.p())},
f5:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=null,i=t.U,h=H.a([],i),g=a.y,f=g==null?j:g.toLowerCase(),e=b.bP(k.by(a))
if(f==="defs")k.qi(a)
else if(f!=="style")if(C.a.F(H.a(["g","svg","symbol"],t.s),f)){i=H.a([],i)
for(g=t.v,g=P.i(new H.ar(a.gjz(a).a,g),!0,g.h("k.E")),s=H.x(g),g=new J.aB(g,g.length,s.h("aB<1>")),s=s.c;g.n();)C.a.R(i,k.f5(s.a(g.d),e))
C.a.R(h,i)}else if(f==="path"){r=a.b.j(0,"d")
if(r!=null&&r.length!==0)C.a.q(h,k.eL(r,e,a))}else if(f==="use")C.a.R(h,k.qj(a,e))
else if(f==="rect"){q=k.aR(a.b.j(0,"rx"))
i=a.b
if(q===0){i=k.aR(i.j(0,"width"))
p=V.qz(C.c,k.aR(a.b.j(0,"height")),i)}else{i=k.aR(i.j(0,"width"))
g=k.aR(a.b.j(0,"height"))
s=H.a([C.A,C.M,C.y,C.N],t.l)
p=new V.eC(4,0,!1,0.01,!1,0.000001,4,j,j,j,C.c,j,j,j,j,j)
p.am(C.c,j,j)
p.dU(s,C.c)
p.fq(C.c,g,i)
p.q4(q)}p.aD(p.ay(C.e).L(0,p.ay(C.A)))
C.a.q(h,k.bY(e.bP(k.by(a)),p))}else if(f==="ellipse"){o=k.aR(a.b.j(0,"cx"))
n=k.aR(a.b.j(0,"cy"))
m=k.aR(a.b.j(0,"rx"))
l=k.aR(a.b.j(0,"ry"))
p=new V.e0(0,6.283185307179586,1,C.e,9,0.35,C.m,V.b6(j,0,C.c,j,0),j,j,4,0,!1,0.01,!1,0.000001,4,j,j,j,C.c,j,j,j,j,j)
p.am(C.c,j,j)
p.b0(C.c)
p.fl(m*2,!0)
p.dQ(l*2,!0)
p.aD(C.j.A(0,o).K(0,C.o.A(0,n)))
C.a.q(h,k.bY(e.bP(k.by(a)),p))}else if(f==="circle"){o=k.aR(a.b.j(0,"cx"))
n=k.aR(a.b.j(0,"cy"))
p=V.nx(C.e,C.c,k.aR(a.b.j(0,"r")))
p.aD(C.j.A(0,o).K(0,C.o.A(0,n)))
C.a.q(h,k.bY(e.bP(k.by(a)),p))}else if(f==="polygon"||f==="polyline")C.a.q(h,k.pC(a,e))
else P.na("Unknown SVG element "+H.m(f))
k.p4(a,K.i3(h))
return h},
eL:function(a,b,c){var s=K.qF(a)
if(c!=null)return this.bY(b.bP(this.by(c)),s)
else return this.bY(b,s)},
ko:function(a,b){return this.eL(a,b,null)},
qj:function(a,b){var s,r,q,p=a.b,o=p.gaO(),n=P.i(o,!0,H.H(o).h("k.E"))
o=p.gak(p)
s=P.i(o,!0,H.H(o).h("k.E"))
r=C.a.kc(n,new K.ks())
if(r>=0){if(r>=s.length)return H.b(s,r)
q=s[r]}else q=null
o=q==null?null:H.a(q.split("#"),t.s)
if(o==null)o=[]
q=C.a.aG(B.bH(o,t.z),"")
o=this.ry
if(!o.as(q))P.na("SVG ref "+q+" not recognized")
o=o.j(0,q)
o.toString
return this.f5(o,b.bP(this.by(a)))},
aR:function(a){var s,r,q,p,o,n
if(a===""||a==null||a==="none")a="0.0"
s=P.i(C.af,!0,t.N)
s.push("+")
s.push("-")
s.push(".")
s.push("e")
s.push("E")
r=H.a([],t.s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
if(C.a.F(s,n))r.push(n)}return P.bS(C.a.aY(r))},
pC:function(a,b){var s,r,q,p,o,n=this,m=a.b.j(0,"points")
m.toString
for(s=m,r=0;r<10;++r){q=C.af[r]
m=" "+q
p=" L"+q
s=H.bt(s,m,p)}b=b.bP(n.by(a))
o=n.ko("M"+s,b)
return n.bY(b.bP(n.by(a)),o)},
jH:function(a){var s,r,q,p,o,n
if(a===""||a==="none")return C.k
if(a==null)return null
s=H.a([3,4,6,8],t.t)
if(a==="currentcolor")return this.ga0(this)
else if(C.b.a2(a,"rgba")){r=H.a(a.split(""),t.s)
q=a.length-1
P.aL(5,q,r.length)
p=H.be(r,5,q,t.N).aY(0).split(",")
q=p.length
if(0>=q)return H.b(p,0)
r=P.bS(p[0])
if(1>=q)return H.b(p,1)
o=P.bS(p[1])
if(2>=q)return H.b(p,2)
n=P.bS(p[2])
if(3>=q)return H.b(p,3)
return new V.N(r,o,n,P.bS(p[3]))}else if(C.b.a2(a,"rgb")){r=H.a(a.split(""),t.s)
q=a.length-1
P.aL(4,q,r.length)
p=H.be(r,4,q,t.N).aY(0).split(",")
q=p.length
if(0>=q)return H.b(p,0)
r=P.bS(p[0])
if(1>=q)return H.b(p,1)
o=P.bS(p[1])
if(2>=q)return H.b(p,2)
return new V.N(r,o,P.bS(p[2]),1)}else if(C.b.a2(a,"#")||C.a.F(s,a.length))return V.rL(a)
else{P.na("unimplented type of color: "+a)
return null}},
bY:function(a,b){b.lM(a.a,a.b,a.c)
return b},
by:function(a){var s,r,q=a.b.j(0,"fill"),p=q==null?null:q.toLowerCase()
q=a.b.j(0,"stroke")
s=q==null?null:q.toLowerCase()
r=a.b.j(0,"stroke-width")
return new K.eD(this.jH(p),this.jH(s),this.aR(r))},
p4:function(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a1.b.j(0,"x")!=null&&a1.b.j(0,"y")!=null){s=this.aR(a1.b.j(0,"x"))
r=this.aR(a1.b.j(0,"y"))
a2.aD(C.j.A(0,s).K(0,C.o.A(0,r)))}q=a1.b.j(0,"transform")
if(q==null)q=""
p=["matrix","translate","scale","rotate","skewX","skewY"]
o=H.a([],t.s)
for(n=0;n<6;++n)o.push(p[n]+"[^)]*\\)")
m=P.ay(C.a.aG(o,"|")).cd(0,q)
l=P.ay("[-+]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][-+]?\\d+)?")
for(o=new H.dx(m.a,m.b,m.c),k=t.lu,j=t.n,i=t.o,h=t.b;o.n();){g=k.a(o.d).b
if(0>=g.length)return H.b(g,0)
f=g[0].split("(")
g=f.length
if(0>=g)return H.b(f,0)
e=J.nq(f[0])
d=H.a([],j)
if(1>=g)return H.b(f,1)
g=l.cd(0,f[1])
g=new H.dx(g.a,g.b,g.c)
for(;g.n();){c=k.a(g.d).b
if(0>=c.length)return H.b(c,0)
c=c[0]
c.toString
d.push(P.bS(c))}switch(e){case"matrix":b=S.aA(null,H.a([d],h)).q1(3,2)
i.a(new S.B(2,0,i))
g=b.a
if(2>=g.length)return H.b(g,2)
g=J.Y(g[2],0)
i.a(new S.B(2,1,i))
d=b.a
if(2>=d.length)return H.b(d,2)
d=J.Y(d[2],1)
a=S.fG(3)
i.a(new S.B(0,0,i))
c=b.a
if(0>=c.length)return H.b(c,0)
c=J.Y(c[0],0)
a.aC(i.a(new S.B(0,0,i)),c)
i.a(new S.B(0,1,i))
c=b.a
if(0>=c.length)return H.b(c,0)
c=J.Y(c[0],1)
a.aC(i.a(new S.B(0,1,i)),c)
i.a(new S.B(1,0,i))
c=b.a
if(1>=c.length)return H.b(c,1)
c=J.Y(c[1],0)
a.aC(i.a(new S.B(1,0,i)),c)
i.a(new S.B(1,1,i))
c=b.a
if(1>=c.length)return H.b(c,1)
c=J.Y(c[1],1)
a.aC(i.a(new S.B(1,1,i)),c)
c=i.a(new S.B(1,0,i))
a0=a.a
if(1>=a0.length)return H.b(a0,1)
a.aC(c,J.Y(a0[1],0)*-1)
c=i.a(new S.B(1,1,i))
a0=a.a
if(1>=a0.length)return H.b(a0,1)
a.aC(c,J.Y(a0[1],1)*-1)
c=i.a(new S.B(1,2,i))
a0=a.a
if(1>=a0.length)return H.b(a0,1)
a.aC(c,J.Y(a0[1],2)*-1)
c=i.a(new S.B(0,1,i))
a0=a.a
if(0>=a0.length)return H.b(a0,0)
a.aC(c,J.Y(a0[0],1)*-1)
c=i.a(new S.B(1,1,i))
a0=a.a
if(1>=a0.length)return H.b(a0,1)
a.aC(c,J.Y(a0[1],1)*-1)
c=i.a(new S.B(2,1,i))
a0=a.a
if(2>=a0.length)return H.b(a0,2)
a.aC(c,J.Y(a0[2],1)*-1)
a2.nF(a)
a2.aD(C.j.A(0,g).K(0,C.o.A(0,d)))
break
case"scale":g=d.length
if(g===1){if(0>=g)return H.b(d,0)
g=d[0]
a2.hY(0,new M.h(g,g,1),C.e)}else if(g===2){if(0>=g)return H.b(d,0)
c=d[0]
if(1>=g)return H.b(d,1)
a2.hY(0,new M.h(c,d[1],1),C.e)}break
case"translate":g=d.length
if(0>=g)return H.b(d,0)
s=d[0]
if(g===2){if(1>=g)return H.b(d,1)
r=d[1]}else r=0
a2.aD(C.j.A(0,s).K(0,C.o.A(0,r)))
break}}},
hM:function(a){var s,r=t.il,q=H.a([],r)
if(a.b.as("id"))return H.a([a],r)
for(r=t.v,r=P.i(new H.ar(a.gjz(a).a,r),!0,r.h("k.E")),s=H.x(r),r=new J.aB(r,r.length,s.h("aB<1>")),s=s.c;r.n();)C.a.R(q,this.hM(s.a(r.d)))
return q},
qi:function(a){var s,r,q,p,o,n
for(s=this.hM(a),r=s.length,q=this.ry,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=s[p]
n=o.b.j(0,"id")
n.toString
q.v(0,n,o)}},
ht:function(){var s,r=this
r.aD(r.ay(C.e).A(0,C.aE).A(0,-1))
if(r.gbs(r)!=null){s=r.gbs(r)
s.toString
r.lG(s)}},
sbs:function(a,b){this.k4=H.fi(b)},
soj:function(a,b){this.r2=H.az(b)},
gbs:function(a){return this.k4}}
K.ks.prototype={
$1:function(a){var s
t.K.a(a)
s=J.bs(a)
return C.b.F(s.l(a),"href")&&C.b.F(s.l(a),"xlink")},
$S:44}
K.dq.prototype={
p:function(){return K.qG(this)},
l_:function(){var s=H.a(["M","L","H","V","C","S","Q","T","A","Z"],t.s),r=P.i(s,!0,t.N)
C.a.R(r,new H.J(s,t.gL.a(new K.ku()),t.gQ))
return r},
bQ:function(){var s,r,q,p,o,n,m,l=this,k=P.ay("["+C.a.aY(l.l_())+"]"),j=l.k3,i=k.cd(0,j),h=t.N,g=H.H(i)
g=H.mA(i,g.h("o(k.E)").a(new K.kt()),g.h("k.E"),h)
s=P.i(g,!0,H.H(g).h("k.E"))
r=B.bH(C.b.cz(j,k),h)
for(j=B.D(s.length,0,1),i=j.length,q=null,p=0;p<j.length;j.length===i||(0,H.e)(j),++p,q=n){o=j[p]
n=C.a.j(s,o)
m=C.a.j(r,o)
l.p2(n,m,q==null?"":q)}l.eV(0,3.141592653589793,C.e,C.j)},
p2:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a="addCubicBezierCurveTo",a0="points",a1=a4.toUpperCase(),a2=J.cz(b.gw(b))?J.aF(b.gw(b)):new M.h(0,0,0),a3=b.m4(a1,a5,a4!==a4.toUpperCase(),a2)
switch(a1){case"M":if(0>=a3.length)return H.b(a3,0)
s=t.V
r=t.y.a(H.a([s.a(a3[0])],t.l))
J.af(b.gw(b),r)
for(s=B.bH(a3,s),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)b.d9(s[q])
return
case"H":case"V":case"L":for(s=a3.length,q=0;q<a3.length;a3.length===s||(0,H.e)(a3),++q)b.d9(a3[q])
return
case"C":for(s=B.D(a3.length,0,3),r=s.length,p=t.l,o=t.y,n=b.cy,m=t.V,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){l=s[q]
if(typeof l!=="number")return l.K()
k=C.a.j(a3,l+0)
j=C.a.j(a3,l+1)
i=C.a.j(a3,l+2)
m.a(k)
m.a(j)
m.a(i)
b.at(a)
h=b.r
if(C.d.Z(J.K(h==null?H.c(H.f(a0)):h),n)===1){k=o.a(H.a([k,j,i],p))
j=b.r
J.af(j==null?H.c(H.f(a0)):j,k)}else{h=b.r
k=o.a(H.a([J.aF(h==null?H.c(H.f(a0)):h),k,j,i],p))
j=b.r
J.af(j==null?H.c(H.f(a0)):j,k)}}return
case"S":g=C.a.F(H.a(["C","S"],t.s),a6.toUpperCase())?J.Y(b.gw(b),J.K(b.gw(b))-2):a2
for(s=B.D(a3.length,0,2),r=s.length,p=t.l,o=t.y,n=b.cy,m=t.V,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){l=s[q]
f=a2.A(0,2).L(0,g)
k=C.a.j(a3,l)
if(typeof l!=="number")return l.K()
j=l+1
i=C.a.j(a3,j)
m.a(k)
m.a(i)
b.at(a)
h=b.r
if(C.d.Z(J.K(h==null?H.c(H.f(a0)):h),n)===1){k=o.a(H.a([f,k,i],p))
i=b.r
J.af(i==null?H.c(H.f(a0)):i,k)}else{h=b.r
k=o.a(H.a([J.aF(h==null?H.c(H.f(a0)):h),f,k,i],p))
i=b.r
J.af(i==null?H.c(H.f(a0)):i,k)}a2=C.a.j(a3,j)
g=C.a.j(a3,l)}return
case"Q":for(s=B.D(a3.length,0,2),r=s.length,p=t.l,o=t.y,n=b.cy,m=t.V,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){l=s[q]
k=C.a.j(a3,l)
if(typeof l!=="number")return l.K()
j=C.a.j(a3,l+1)
m.a(k)
m.a(j)
i=k.A(0,0.6666666666666666)
h=b.r
i=i.K(0,J.aF(h==null?H.c(H.f(a0)):h).A(0,0.3333333333333333))
k=k.A(0,0.6666666666666666).K(0,j.A(0,0.3333333333333333))
b.at(a)
h=b.r
if(C.d.Z(J.K(h==null?H.c(H.f(a0)):h),n)===1){k=o.a(H.a([i,k,j],p))
j=b.r
J.af(j==null?H.c(H.f(a0)):j,k)}else{h=b.r
k=o.a(H.a([J.aF(h==null?H.c(H.f(a0)):h),i,k,j],p))
j=b.r
J.af(j==null?H.c(H.f(a0)):j,k)}}return
case"T":e=C.a.F(H.a(["Q","T"],t.s),a6.toUpperCase())?J.bi(J.Y(b.gw(b),J.K(b.gw(b))-2),1.5).L(0,J.bi(J.aF(b.gw(b)),0.5)):a2
for(s=a3.length,r=t.l,p=t.y,o=b.cy,n=t.V,q=0;q<a3.length;a3.length===s||(0,H.e)(a3),++q,e=c,a2=d){d=a3[q]
c=a2.A(0,2).L(0,e)
n.a(d)
m=c.A(0,0.6666666666666666)
k=b.r
m=m.K(0,J.aF(k==null?H.c(H.f(a0)):k).A(0,0.3333333333333333))
k=c.A(0,0.6666666666666666).K(0,d.A(0,0.3333333333333333))
b.at(a)
j=b.r
if(C.d.Z(J.K(j==null?H.c(H.f(a0)):j),o)===1){m=p.a(H.a([m,k,d],r))
k=b.r
J.af(k==null?H.c(H.f(a0)):k,m)}else{j=b.r
m=p.a(H.a([J.aF(j==null?H.c(H.f(a0)):j),m,k,d],r))
k=b.r
J.af(k==null?H.c(H.f(a0)):k,m)}}return
case"A":for(s=B.D(a3.length,0,3),r=s.length,p=t.l,o=t.y,n=b.cy,m=t.V,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){l=s[q]
k=C.a.j(a3,l)
if(typeof l!=="number")return l.K()
j=C.a.j(a3,l+1)
i=C.a.j(a3,l+2)
m.a(k)
m.a(j)
m.a(i)
b.at(a)
h=b.r
if(C.d.Z(J.K(h==null?H.c(H.f(a0)):h),n)===1){k=o.a(H.a([k,j,i],p))
j=b.r
J.af(j==null?H.c(H.f(a0)):j,k)}else{h=b.r
k=o.a(H.a([J.aF(h==null?H.c(H.f(a0)):h),k,j,i],p))
j=b.r
J.af(j==null?H.c(H.f(a0)):j,k)}}return
case"Z":if(!b.jF(J.aE(b.gw(b)),J.aF(b.gw(b)))){s=C.a.gt(b.dO(P.i(b.gw(b),!0,t.V)))
if(0>=s.length)return H.b(s,0)
b.d9(s[0])}return}},
m4:function(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=K.tU(a0),c=t.l,b=H.a([],c)
if(a==="A"){for(c=K.p2(d,2,t.W),s=c.length,r=null,q=0;q<c.length;c.length===s||(0,H.e)(c),++q){p=c[q]
if(r!=null)a2=r
if(a1){if(5>=p.length)return H.b(p,5)
o=p[5]
if(typeof o!=="number")return o.K()
C.a.v(p,5,o+a2.a)
if(6>=p.length)return H.b(p,6)
o=p[6]
if(typeof o!=="number")return o.K()
C.a.v(p,6,o+a2.b)}o=p.length
if(5>=o)return H.b(p,5)
n=p[5]
if(a2.a===n){if(6>=o)return H.b(p,6)
m=a2.b===p[6]}else m=!1
if(m)continue
m=p[0]
l=p[1]
k=p[2]
j=p[3]
i=p[4]
if(6>=o)return H.b(p,6)
C.a.R(b,K.tr(a2,m,l,k,j,i,new M.h(n,p[6],0)))
n=p.length
if(5>=n)return H.b(p,5)
i=p[5]
if(6>=n)return H.b(p,6)
r=new M.h(i,p[6],0)}return b}else if(a==="H")if(a1){c=H.a([],c)
for(s=d.length,q=0;q<d.length;d.length===s||(0,H.e)(d),++q)c.push(new M.h(d[q],0,0))
b=c
a1=!0}else{c=H.a([],c)
for(s=d.length,o=a2.b,q=0;q<d.length;d.length===s||(0,H.e)(d),++q)c.push(new M.h(d[q],o,0))
b=c
a1=!1}else if(a==="V")if(a1){c=H.a([],c)
for(s=d.length,q=0;q<d.length;d.length===s||(0,H.e)(d),++q)c.push(new M.h(0,d[q],0))
b=c
a1=!0}else{c=H.a([],c)
for(s=d.length,o=a2.a,q=0;q<d.length;d.length===s||(0,H.e)(d),++q)c.push(new M.h(o,d[q],0))
b=c
a1=!1}else{c=H.a([],c)
for(s=K.p2(d,2,t.W),o=s.length,q=0;q<s.length;s.length===o||(0,H.e)(s),++q){h=s[q]
n=h.length
if(0>=n)return H.b(h,0)
m=h[0]
if(1>=n)return H.b(h,1)
c.push(new M.h(m,h[1],0))}b=c}if(!a1)return b
if(a==="Q"||a==="S")g=2
else g=a==="C"?3:1
for(c=B.D(b.length,0,1),s=c.length,f=a2,q=0;q<c.length;c.length===s||(0,H.e)(c),++q){e=c[q]
C.a.v(b,e,C.a.j(b,e).K(0,f))
if(typeof e!=="number")return e.K()
if(C.f.Z(e+1,g)===0)f=C.a.j(b,e)}return b}}
K.ku.prototype={
$1:function(a){return H.az(a).toLowerCase()},
$S:28}
K.kt.prototype={
$1:function(a){var s=t.lu.a(a).b
if(0>=s.length)return H.b(s,0)
s=s[0]
s.toString
return s},
$S:93}
K.eD.prototype={
bP:function(a){var s,r,q=a.a
if(q==null)q=this.a
s=a.b
if(s==null)s=this.b
r=a.c
return new K.eD(q,s,r==null?this.c:r)},
l:function(a){return"fill: "+H.m(this.a)+", stroke: "+H.m(this.b)+" "+H.m(this.c)+"pt"}}
Y.eN.prototype={
p:function(){return Y.qT(this)}}
Y.bY.prototype={
p:function(){return Y.qI(this)},
jK:function(){var s=this,r=s.ac
C.b.eW(r)
s.ac=Y.qJ(r)
if(!$.hJ.as(s.ad)||!$.hJ.j(0,s.ad).as(s.ac))throw H.d(s.ac+" need to be preloaded")
r=$.hJ.j(0,s.ad).j(0,s.ac)
r.toString
s.soj(0,r)
s.saL(t.y.a(H.a([],t.l)))
s.sbf(t.a.a(H.a([],t.r)))
s.bQ()
s.ht()
s.b0(s.ga0(s))
s.dP(0.035)},
l:function(a){return this.bb()+"("+this.ac+")"},
eL:function(a,b,c){var s=null,r=new Y.eN(a,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
if(c!=null)return this.bY(b.bP(this.by(c)),r)
else return this.bY(b,r)},
ko:function(a,b){return this.eL(a,b,null)},
sbs:function(a,b){this.ao=H.fi(b)},
gbs:function(a){return this.ao}}
Y.er.prototype={
p:function(){return Y.qj(this)},
nY:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="submobjects",a2=H.a([],t.nn)
for(s=a.cj,r=s.length,q=t.a,p=a.b2,o=t.s,n=t.N,m=t.h,l=t.j,k=t.r,j=0,i=0;i<s.length;s.length===r||(0,H.e)(s),++i,j=e){h=new Y.bY(s[i],a.ad,!0,2,a0,"",!0,P.bn(n,m),4,0,!1,0.01,!1,0.000001,4,a0,a0,a0,C.c,a0,a0,a0,a0,a0)
h.am(C.c,a0,a0)
g=h.r
if(J.cz(g==null?H.c(H.f("points")):g))h.ht()
h.a=C.c
h.jK()
g=h.d
f=(g==null?H.c(H.f(a1)):g).length
e=j+f+C.a.aG(H.a(p.split(" "),o),"").length
if(f===0){h.sbf(q.a(H.a([K.o6(C.e)],k)))
g=a.d
d=Math.min(j,(g==null?H.c(H.f(a1)):g).length-1)
if(d>>>0!==d||d>=g.length)return H.b(g,d)
g=l.a(g[d])
h.c3(g.ay(C.j))}else{g=a.d
if(g==null)g=H.c(H.f(a1))
P.aL(j,e,g.length)
c=H.x(g)
b=new H.aC(g,j,e,c.h("aC<1>"))
b.c9(g,j,e,c.c)
h.sbf(q.a(b.aw(0)))}C.a.q(a2,h)}a.sbf(q.a(a2))},
kZ:function(a,b,c){var s,r,q,p,o=new Y.k7(!0,!0),n=H.a([],t.nn)
for(s=this.gO(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
if(p instanceof Y.bY&&H.b8(o.$2(a,p.ac)))n.push(p)}return n},
lD:function(a,b,c,d){var s,r,q,p=this.kZ(a,!0,!0)
for(s=p.length,r=0;r<p.length;p.length===s||(0,H.e)(p),++r){q=p[r]
q.ff(b,!0)
q.fj(b,!0)
q.ij(b,!0)}},
lE:function(a){var s,r
t.fg.a(a)
for(s=a.gjV(a),s=new P.co(s.a(),s.$ti.h("co<1>"));s.n();){r=s.gu()
this.lD(r.a,r.b,!0,!0)}},
sqc:function(a){this.cj=t.bF.a(a)}}
Y.k7.prototype={
$2:function(a,b){var s
if(!this.a){a=a.toLowerCase()
b=b.toLowerCase()}s=C.b.F(b,a)
return s},
$S:47}
U.hb.prototype={
mp:function(a){this.aN(t.a.a(H.a([this.x],t.r)))
this.fW()},
fO:function(a,b,c,d){var s,r
H.iI(d,t.e,"IEvent","addEventListener")
s=new Y.aK(d.h("E(0)").a(c),b,d.h("aK<0>"))
r=$.dH()
t.d3.a(s)
r=r.gcg().j(0,b)
r.toString
C.a.q(r,s)
return s}}
U.dZ.prototype={
fW:function(){var s=this
s.smw(t.gG.a(s.fO(0,C.x,new U.ji(s),t.gn)))
s.smx(t.m4.a(s.fO(0,C.v,new U.jj(s),t.oJ)))
s.smy(t.mc.a(s.fO(0,C.w,new U.jk(s),t.nB)))},
p:function(){return U.q2(this)},
smw:function(a){this.dx=t.jA.a(a)},
smx:function(a){this.dy=t.dK.a(a)},
smy:function(a){this.fr=t.e0.a(a)}}
U.ji.prototype={
$1:function(a){var s
t.gn.a(a)
s=this.a
if(s.fx){s.x.c3(a.c)
return!0}return!1},
$S:48}
U.jj.prototype={
$1:function(a){var s,r=this.a,q=r.x,p=t.oJ.a(a).c,o=p.a
if(o>=q.ay(C.z).a-0.1)if(o<=q.ay(C.j).a+0.1){o=p.b
o=o>=q.ay(C.o).b-0.1&&o<=q.ay(C.L).b+0.1
s=o}else s=!1
else s=!1
if(s){r.fx=!0
q.c3(p)
return!0}return!1},
$S:49}
U.jk.prototype={
$1:function(a){t.nB.a(a)
return this.a.fx=!1},
$S:50}
Y.F.prototype={
ga0:function(a){var s=this.a
return s},
gI:function(a){var s=this.b
return s==null?H.c(H.f("name")):s},
gO:function(){var s=this.d
return s==null?H.c(H.f("submobjects")):s},
geX:function(){var s=this.e
if(s==null){s=H.a([],t.po)
this.smA(s)}return s},
ga7:function(){var s=this.f
return s==null?H.c(H.f("updatingSuspended")):s},
gw:function(a){var s=this.r
return s==null?H.c(H.f("points")):s},
am:function(a,b,c){var s=this,r=s.bb()
s.b=r
s.sbf(t.a.a(H.a([],t.r)))
s.f=!1
s.saL(t.y.a(H.a([],t.l)))
s.kd()
s.bQ()},
l:function(a){return this.bb()},
bb:function(){var s=this.ik(0),r=P.ay("^Instance of '(.*?)'$").k9(s).b
if(1>=r.length)return H.b(r,1)
r=r[1]
r.toString
return r},
kd:function(){},
bQ:function(){},
aN:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.F(a,this))throw H.d("Mobject can't contain itself")
s=P.i(a,!0,t.j)
for(r=this.gO(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p){o=r[p]
if(!C.a.F(a,o))s.push(o)}this.sbf(n.a(s))},
nr:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.F(a,this))throw H.d("Mobject can't contain itself")
s=H.a([],t.r)
for(r=this.gO(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p){o=r[p]
if(!C.a.F(a,o))s.push(o)}C.a.R(s,a)
this.sbf(n.a(s))},
cG:function(a,b,c){var s,r,q,p,o,n,m,l
t.ew.a(c)
if(b==null)b=this.ay(a)
for(s=this.dL(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,H.e)(s),++o){n=s[o]
m=H.a([],p)
l=n.r
l=J.I(l==null?H.c(H.f("points")):l)
for(;l.n();)m.push(J.fs(c.$1(l.gu().L(0,b)),b))
n.saL(q.a(m))}},
jp:function(a){return this.cG(C.e,null,a)},
p:function(){return Y.ql(this)},
kH:function(a,b){var s,r,q,p=this
if(p.ga7())return
for(s=p.geX(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].$2(p,a)
for(s=p.gO(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].kH(a,!0)},
hK:function(a){return this.kH(a,!0)},
ea:function(a){t.k5.a(a)
C.a.q(this.geX(),a)
this.hK(0)},
pZ:function(a){t.k5.a(a)
for(;C.a.F(this.geX(),a);)C.a.a8(this.geX(),a)},
aD:function(a){return this.jp(new Y.kh(a))},
hY:function(a,b,c){return this.cG(C.e,c,new Y.kg(b))},
fa:function(a,b,c){return this.cG(b,c,new Y.kf(a))},
dP:function(a){return this.fa(a,C.e,null)},
i_:function(a,b){return this.fa(a,C.e,b)},
eV:function(a,b,c,d){this.cG(C.e,c,new Y.ke(S.tP(b,d).gkG()))},
q3:function(a,b,c){return this.eV(a,b,c,C.m)},
hD:function(a,b){return this.eV(a,b,null,C.m)},
m3:function(a,b,c,d){return this.cG(c,d,new Y.ki(b,a))},
nF:function(a){var s={},r=S.fG(3)
s.a=r
s.a=r.bM(0,new Y.k9(a))
this.jp(new Y.ka(s))},
fS:function(a,b){this.aD(a.i6(0).A(0,new M.h(7.111111111111111,4,0)).L(0,this.ay(a)).L(0,a.A(0,b)).A(0,a.i6(0).nk(0)))},
kz:function(a,b,c,d,e){var s,r=this.hr(b)
if(r===0)return
s=a/r
if(e)this.m3(s,b,c,d)
else this.fa(s,c,d)},
fl:function(a,b){this.kz(a,0,C.e,null,b)},
dQ:function(a,b){this.kz(a,1,C.e,null,b)},
lG:function(a){return this.dQ(a,!1)},
c3:function(a){this.aD(a.L(0,this.ay(C.e)).A(0,new M.h(1,1,1)))},
pu:function(a,b){this.c3(a.ay(b==null?C.e:b))},
pt:function(a){return this.pu(a,null)},
cR:function(a,b){var s,r=this,q=r.bc(),p=r.b5(),o=p.L(0,q)
if(q.Y(0,p))throw H.d("Cannot position endpoints of a closed loop")
s=b.L(0,a)
r.i_(Math.sqrt(s.bj())/Math.sqrt(o.bj()),q)
r.q3(0,s.dd()-o.dd(),q)
r.aD(a.L(0,q))},
c8:function(a,b){var s,r,q
for(s=this.gO(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].c8(a,!0)
this.a=a},
dl:function(a,b){var s,r,q
for(s=this.gO(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].dl(a,!0)},
he:function(a){return this.dl(a,!0)},
bR:function(){var s,r,q,p,o=H.a([this],t.r)
for(s=this.gO(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)C.a.R(o,s[q].bR())
p=P.mx(o,t.j)
return P.i(p,!0,H.H(p).h("aY.E"))},
dL:function(){var s=this.bR(),r=H.x(s),q=r.h("an<1>")
return P.i(new H.an(s,r.h("E(1)").a(new Y.kc()),q),!0,q.h("k.E"))},
f0:function(){var s,r,q,p,o=H.a([],t.l)
for(s=this.dL(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q].r
C.a.R(o,p==null?H.c(H.f("points")):p)}return o},
f7:function(){return this.f0()},
dK:function(a,b,c){var s,r,q
t.hg.a(c)
if(c==null)c=this.f7()
s=H.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,H.e)(c),++q)s.push(c[q].c7(a))
if(b<0)return C.a.aZ(s,C.Q)
else if(b===0)return(C.a.aZ(s,C.Q)+C.a.aZ(s,C.C))/2
else return C.a.aZ(s,C.C)},
kU:function(a,b){return this.dK(a,b,null)},
ay:function(a){var s=this,r=s.f7()
if(r.length===0)return C.e
return new M.h(s.dK(0,C.f.bw(a.a),r),s.dK(1,C.f.bw(a.b),r),s.dK(2,C.f.bw(a.c),r))},
kS:function(){return C.a.aZ(this.f0(),new Y.kb()).b4(0,J.K(this.gw(this)))},
hr:function(a){var s,r,q,p=this.f0()
if(p.length===0)return 1
s=H.x(p)
r=new H.J(p,s.h("q(1)").a(new Y.kd(a)),s.h("J<1,q>"))
q=r.aZ(0,C.Q)
return r.aZ(0,C.C)-q},
f2:function(a,b){return this.kU(a,C.f.bw(C.e.c7(a)))},
bc:function(){this.at("getStart")
return J.aE(this.gw(this))},
b5:function(){this.at("getEnd")
return J.aF(this.gw(this))},
gm:function(a){return this.dS(0).length},
dS:function(a){var s=this,r=H.a([],t.r)
if(J.cz(s.gw(s)))r.push(s)
C.a.R(r,s.gO())
return r},
fR:function(a){var s,r,q,p,o,n,m=this
if(J.cy(m.gw(m))&&J.cz(a.gw(a)))a.kt()
if(J.cy(a.gw(a))&&J.cz(m.gw(m)))m.kt()
s=m.dS(0).length
r=a.dS(0).length
m.jf(Math.max(0,r-s))
a.jf(Math.max(0,s-r))
m.jl(a)
for(q=new A.ai(H.a([m.gO(),a.gO()],t.Z),t.Y),q=q.gH(q);q.n();){p=q.b
if(p==null)p=H.c(P.am("No element"))
o=p.length
if(0>=o)return H.b(p,0)
n=p[0]
if(1>=o)return H.b(p,1)
n.fR(p[1])}},
hT:function(){throw H.d("getPointMobject not implemented for "+H.m(this.gkY())+"()")},
jl:function(a){var s=this,r=J.K(s.gw(s)),q=J.K(a.gw(a))
if(r<q)s.jm(a)
else if(r>q)a.jm(s)},
jm:function(a){throw H.d("Not implemented")},
kt:function(){var s=this.p(),r=t.r,q=t.a
s.sbf(q.a(H.a([],r)))
this.saL(t.y.a(H.a([],t.l)))
this.aN(q.a(H.a([s],r)))},
jf:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.dS(0).length
if(s===0){r=H.a([],t.r)
for(q=B.D(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,H.e)(q),++o)r.push(a1.hT())
a1.sbf(t.a.a(r))}n=s+a2
r=t.t
q=H.a([],r)
for(p=B.D(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.e)(p),++o){l=p[o]
if(typeof l!=="number")return l.A()
q.push(C.f.b6(l*s,n))}p=H.a([],r)
for(m=B.D(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,H.e)(m),++o){i=m[o]
h=H.a([],r)
for(g=q.length,f=J.bs(i),e=0;e<q.length;q.length===g||(0,H.e)(q),++e)if(f.Y(i,q[e]))h.push(1)
else h.push(0)
p.push(B.iM(h,j))}d=H.a([],t.r)
for(r=new A.ai(H.a([a1.gO(),p],t.bo),t.c2),r=r.gH(r),q=t.j;r.n();){c=r.b
if(c==null)c=H.c(P.am("No element"))
p=c.length
if(0>=p)return H.b(c,0)
b=q.a(c[0])
if(1>=p)return H.b(c,1)
a=H.Z(c[1])
C.a.q(d,b)
for(p=B.D(a,1,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.e)(p),++o){a0=b.p()
a0.he(1)
C.a.q(d,a0)}}a1.sbf(t.a.a(d))},
ho:function(a,b,c){},
dB:function(a,b,c){},
js:function(a){var s,r,q,p,o,n,m
this.fR(a)
for(s=new A.ai(H.a([this.bR(),a.bR()],t.Z),t.Y),s=s.gH(s),r=t.V,q=t.y;s.n();){p=s.b
if(p==null)p=H.c(P.am("No element"))
o=p.length
if(0>=o)return H.b(p,0)
n=p[0]
if(1>=o)return H.b(p,1)
m=p[1]
o=m.r
n.saL(q.a(P.i(o==null?H.c(H.f("points")):o,!0,r)))
n.ho(n,m,1)}},
at:function(a){var s
if(J.cz(this.gw(this)))return
s="Cannot call Mobject."+a+" , the mobject doesn't have any points"
throw H.d(s)},
sbf:function(a){this.d=t.kQ.a(a)},
smA:function(a){this.e=t.gr.a(a)},
saL:function(a){this.r=t.hg.a(a)}}
Y.kh.prototype={
$1:function(a){return a.K(0,this.a)},
$S:3}
Y.kg.prototype={
$1:function(a){return a.A(0,this.a)},
$S:3}
Y.kf.prototype={
$1:function(a){return a.A(0,this.a)},
$S:3}
Y.ke.prototype={
$1:function(a){return a.bN(this.a)},
$S:3}
Y.ki.prototype={
$1:function(a){var s=this.a
return a.qu(s,a.c7(s)*this.b)},
$S:3}
Y.k9.prototype={
$2:function(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gaa(r).a
if(typeof s!=="number")return s.cV()
if(typeof q!=="number")return H.bh(q)
if(s<q){s=b.b
q=r.gaa(r).b
if(typeof s!=="number")return s.cV()
if(typeof q!=="number")return H.bh(q)
q=s>=q
s=q}else s=!0
return s?a:r.bk(b)},
$S:2}
Y.ka.prototype={
$1:function(a){return a.bN(this.a.a)},
$S:3}
Y.kc.prototype={
$1:function(a){t.j.a(a)
return J.K(a.gw(a))>0},
$S:15}
Y.kb.prototype={
$2:function(a,b){var s=t.V
return s.a(a).K(0,s.a(b))},
$S:23}
Y.kd.prototype={
$1:function(a){return t.V.a(a).c7(this.a)},
$S:21}
Y.d4.prototype={
p:function(){return Y.q6(this)}}
K.P.prototype={
p:function(){return K.r4(this)},
kd:function(){var s=this,r=s.db
s.lF(r==null?H.a([s.ga0(s)],t.O):r)
r=s.dx
if(r==null)r=H.a([s.ga0(s)],t.O)
s.lK(r,s.gaJ())
s.lC(s.dy,s.y)},
cZ:function(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=H.a([],s)
if(b!=null)C.a.R(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.cY(),p=q.length,o=0;o<q.length;q.length===p||(0,H.e)(q),++o)q[o].i2(r,!1)
if(r.length!==0){if(n.db==null)n.sck(r)
q=n.db
q.toString
q=J.K(q)
p=r.length
if(q<p){q=n.db
q.toString
n.sck(B.cX(q,p,t.G))}else{q=n.db
q.toString
if(p<J.K(q)){q=n.db
q.toString
n.sck(B.cX(r,J.K(q),t.G))}}s=H.a([],s)
q=n.db
q.toString
q=B.D(J.K(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.e)(q),++o)s.push(C.a.j(r,q[o]))
n.sck(s)}},
cv:function(a){return this.cZ(a,null,!0)},
ff:function(a,b){return this.cZ(a,null,b)},
i2:function(a,b){return this.cZ(null,a,b)},
lF:function(a){return this.cZ(null,a,!0)},
bD:function(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=H.a([],s)
if(c!=null)C.a.R(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.cY(),p=q.length,o=0;o<q.length;q.length===p||(0,H.e)(q),++o)q[o].lL(a,r,!1,e)
if(r.length!==0)if(a){if(n.dy==null)n.scH(r)
q=n.dy
q.toString
q=J.K(q)
p=r.length
if(q<p){q=n.dy
q.toString
n.scH(B.cX(q,p,t.G))}else{q=n.dy
q.toString
if(p<J.K(q)){q=n.dy
q.toString
n.scH(B.cX(r,J.K(q),t.G))}}s=H.a([],s)
q=n.dx
q.toString
q=B.D(J.K(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.e)(q),++o)s.push(C.a.j(r,q[o]))
n.sbU(s)}else{if(n.dx==null)n.sbU(r)
q=n.dx
q.toString
q=J.K(q)
p=r.length
if(q<p){q=n.dx
q.toString
n.sbU(B.cX(q,p,t.G))}else{q=n.dx
q.toString
if(p<J.K(q)){q=n.dx
q.toString
n.sbU(B.cX(r,J.K(q),t.G))}}s=H.a([],s)
q=n.dx
q.toString
q=B.D(J.K(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.e)(q),++o)s.push(C.a.j(r,q[o]))
n.sbU(s)}if(e!=null)if(a)n.y=e
else n.saJ(e)},
fh:function(a){return this.bD(!1,a,null,!0,null)},
fj:function(a,b){return this.bD(!1,a,null,b,null)},
lL:function(a,b,c,d){return this.bD(a,null,b,c,d)},
lJ:function(a,b){return this.bD(!1,null,a,b,null)},
i3:function(a,b){return this.bD(!1,a,null,!0,b)},
lK:function(a,b){return this.bD(!1,null,a,!0,b)},
fi:function(a){return this.bD(!1,null,null,!0,a)},
fe:function(a,b,c,d){return this.bD(!0,a,t.x.a(b),c,d)},
lB:function(a,b){return this.fe(null,a,b,null)},
lC:function(a,b){return this.fe(null,a,!0,b)},
i5:function(a,b){return this.lN(a.d,a.e,b,a.a,a.b,a.c)},
fk:function(a){return this.i5(a,!0)},
i4:function(a,b,c,d,e,f,g,h){var s=t.x
s.a(e)
s.a(g)
s.a(a)
this.cZ(d,e,c)
this.bD(!1,f,g,c,h)
this.fe(null,a,c,b)},
lN:function(a,b,c,d,e,f){return this.i4(a,b,c,null,d,null,e,f)},
lM:function(a,b,c){return this.i4(null,null,!0,a,null,b,null,c)},
f1:function(){var s=J.Y(this.bz(),0)
return s},
c8:function(a,b){this.ff(a,!0)
this.fj(a,!0)
this.ij(a,!0)},
b0:function(a){return this.c8(a,!0)},
hs:function(a,b){var s,r,q,p="removeWhere",o=a.bz(),n=a.cX(),m=a.gaJ(),l=a.bA(!0),k=a.y
this.i5(new K.ck(o,n,m,l,k),!1)
if(b){s=this.gO()
r=a.gO()
if(s.length===0)return
else if(r.length===0)r=H.a([a],t.r)
o=H.x(s).h("E(1)").a(new K.l1())
if(!!s.fixed$length)H.c(P.T(p))
C.a.fK(s,o,!0)
o=H.x(r).h("E(1)").a(new K.l2())
if(!!r.fixed$length)H.c(P.T(p))
C.a.fK(r,o,!0)
for(o=t.j,o=B.tK(s,r,o,o),o=P.en([o.a,o.b],!1,t.z),o=new A.ai(new H.aU(o,H.x(o).h("aU<1,l<P>>")),t.pn),o=o.gH(o);o.n();){q=o.b
if(q==null)q=H.c(P.am("No element"))
n=q.length
if(0>=n)return H.b(q,0)
m=q[0]
if(1>=n)return H.b(q,1)
m.hs(q[1],!0)}}},
ki:function(a){return this.hs(a,!0)},
dl:function(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=H.a([],n)
for(s=J.I(p.bz());s.n();){r=s.gu()
q=r.d
m.push(new V.N(r.a,r.b,r.c,q*o))}p.i2(m,!0)
m=H.a([],n)
for(s=J.I(p.cX());s.n();){r=s.gu()
q=r.d
m.push(new V.N(r.a,r.b,r.c,q*o))}p.lJ(m,!0)
n=H.a([],n)
for(m=J.I(p.bA(!0));m.n();){s=m.gu()
r=s.d
n.push(new V.N(s.a,s.b,s.c,r*o))}p.lB(n,!0)
p.mg(a,!0)},
he:function(a){return this.dl(a,!0)},
bz:function(){var s=this.db
return s==null?H.a([C.k],t.O):s},
bA:function(a){var s=a?this.dy:this.dx
return s==null||J.cy(s)?H.a([C.k],t.O):s},
cX:function(){return this.bA(!1)},
kX:function(){var s,r,q,p,o,n=this.ay(C.e),m=H.a([],t.b)
for(s=[C.j,C.L,C.m],r=t.n,q=0;q<3;++q){p=this.ay(s[q]).L(0,n)
m.push(H.a([p.a,p.b,p.c],r))}o=C.j.bN(S.aA(null,m).gkG())
return new S.B(n.L(0,o),n.K(0,o),t.iu)},
fd:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=t.y
f.a(a)
f.a(b)
f.a(c)
f.a(d)
s=g.cy
r=a.length
q=H.a([],t.l)
for(r=B.D(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,H.e)(r),++o)q.push(C.e)
g.saL(f.a(q))
n=H.a([a,b,c,d],t.Q)
for(f=B.D(s,0,1),r=f.length,q=t.S,o=0;o<f.length;f.length===r||(0,H.e)(f),++o){m=f[o]
l=C.a.j(n,m)
p=g.r
for(p=B.cW(B.D(J.K(p==null?H.c(H.f("points")):p),m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,H.e)(p),++j){i=p[j]
h=g.r
if(h==null)h=H.c(H.f("points"))
J.ft(h,i.b,l[C.d.Z(i.a,l.length)])}}},
no:function(a,b,c){var s,r,q=this
q.at("addCubicBezierCurveTo")
s=t.l
r=t.y
if(C.d.Z(J.K(q.gw(q)),q.cy)===1){s=r.a(H.a([a,b,c],s))
J.af(q.gw(q),s)}else{s=r.a(H.a([J.aF(q.gw(q)),a,b,c],s))
J.af(q.gw(q),s)}},
d9:function(a){var s,r,q,p,o,n,m=[]
for(s=B.fq(this.cy,1,0).ez(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
o=this.r
m.push(J.aF(o==null?H.c(H.f("points")):o).A(0,1-p).K(0,a.A(0,p)))}s=m.length
if(1>=s)return H.b(m,1)
r=t.V
o=r.a(m[1])
if(2>=s)return H.b(m,2)
n=r.a(m[2])
if(3>=s)return H.b(m,3)
return this.no(o,n,r.a(m[3]))},
np:function(a){var s,r
t.y.a(a)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.e)(a),++r)this.d9(a[r])},
fg:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=B.fq(this.cy,1,0).aQ(0)
r=t.V
q=S.iT(B.bH(a,r))
p=S.iT(B.nd(a,r))
r=H.a([],t.fp)
for(o=s.length,n=0;n<s.length;s.length===o||(0,H.e)(s),++n){m=s[n]
r.push(p.A(0,1-m).K(0,q.A(0,m)))}o=H.a([],t.Q)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,H.e)(r),++n){j=r[n]
i=H.a([],k)
h=j.a
g=h.length
f=0
for(;f<h.length;h.length===g||(0,H.e)(h),++f){e=h[f]
d=J.X(e)
i.push(new M.h(d.j(e,0),d.j(e,1),d.j(e,2)))}o.push(i)}r=o.length
if(0>=r)return H.b(o,0)
l=o[0]
if(1>=r)return H.b(o,1)
k=o[1]
if(2>=r)return H.b(o,2)
i=o[2]
if(3>=r)return H.b(o,3)
this.fd(l,k,i,o[3])},
o1:function(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8="No element",a9=this.cy
for(s=this.cY(),r=s.length,q=t.y,p=t.V,o=t.l,n=t.Q,m=t.b5,l=b0==="smooth",k=0;k<s.length;s.length===r||(0,H.e)(s),++k){j=s[k]
i=j.r
h=j.dO(P.i(i==null?H.c(H.f("points")):i,!0,p))
j.saL(q.a(H.a([],o)))
for(i=h.length,g=0;g<h.length;h.length===i||(0,H.e)(h),++g){f=h[g]
e=P.i(F.dc(f,new K.kV(a9),p),!0,p)
e.push(C.a.gt(f))
if(l){d=B.tx(e)
c=d.a
b=d.b}else{a=P.i(e,!0,p)
if(0>=a.length)return H.b(a,-1)
a.pop()
a0=B.bH(e,p)
e=H.a([],o)
for(a1=new A.ai(H.a([a,a0],n),m),a1=a1.gH(a1);a1.n();){a2=a1.b
if(a2==null)a2=H.c(P.am(a8))
a3=a2.length
if(0>=a3)return H.b(a2,0)
a4=a2[0]
if(1>=a3)return H.b(a2,1)
a3=a2[1]
e.push(p.a(J.fs(J.bi(a4,0.6666666666666667),J.bi(a3,0.3333333333333333))))}a1=H.a([],o)
for(a=new A.ai(H.a([a,a0],n),m),a=a.gH(a);a.n();){a2=a.b
if(a2==null)a2=H.c(P.am(a8))
a3=a2.length
if(0>=a3)return H.b(a2,0)
a4=a2[0]
if(1>=a3)return H.b(a2,1)
a3=a2[1]
a1.push(p.a(J.fs(J.bi(a4,0.33333333333333337),J.bi(a3,0.6666666666666666))))}b=a1
c=e}e=H.a([],o)
for(a=B.cW(f,p),a1=a.length,a3=J.X(b),a5=0;a5<a.length;a.length===a1||(0,H.e)(a),++a5){a6=a[a5]
a4=a6.a
if(typeof a4!=="number")return a4.Z()
a7=C.d.Z(a4,a9)
if(a7===1){if(a4<0||a4>=c.length)return H.b(c,a4)
e.push(c[a4])}else if(a7===2)e.push(a3.j(b,a4))
else e.push(a6.b)}q.a(e)
a=this.r
J.af(a==null?H.c(H.f("points")):a,e)}}},
ce:function(a){var s,r=this
t.ew.a(a)
s=r.Q
r.hZ(s)
r.mf(C.e,C.e,a)
r.hZ(1/s)
if(r.ch)r.o1("smooth")},
hZ:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(s=this.cY(),r=s.length,q=t.l,p=t.n,o=t.b,n=this.cy,m=0;m<s.length;s.length===r||(0,H.e)(s),++m){l=s[m]
k=l.r
if(J.K(k==null?H.c(H.f("points")):k)<n)continue
j=l.kP()
k=H.a([],o)
if(0>=j.length)return H.b(j,0)
i=j[0]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.e)(i),++g){f=i[g]
k.push(H.a([f.a,f.b,f.c],p))}e=S.aA(a4,k)
k=H.a([],o)
if(1>=j.length)return H.b(j,1)
i=j[1]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.e)(i),++g){f=i[g]
k.push(H.a([f.a,f.b,f.c],p))}d=S.aA(a4,k)
k=H.a([],o)
if(2>=j.length)return H.b(j,2)
i=j[2]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.e)(i),++g){f=i[g]
k.push(H.a([f.a,f.b,f.c],p))}c=S.aA(a4,k)
k=H.a([],o)
if(3>=j.length)return H.b(j,3)
i=j[3]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.e)(i),++g){f=i[g]
k.push(H.a([f.a,f.b,f.c],p))}b=S.aA(a4,k)
a=d.L(0,e)
a0=c.L(0,b)
k=H.a([],q)
i=a.b
i=e.K(0,S.bj(a5,i==null?H.c(H.f("shape")):i).A(0,a)).a
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.e)(i),++g){a1=i[g]
a2=J.X(a1)
k.push(new M.h(a2.j(a1,0),a2.j(a1,1),a2.j(a1,2)))}i=H.a([],q)
h=a0.b
h=b.K(0,S.bj(a5,h==null?H.c(H.f("shape")):h).A(0,a0)).a
a2=h.length
g=0
for(;g<h.length;h.length===a2||(0,H.e)(h),++g){a1=h[g]
a3=J.X(a1)
i.push(new M.h(a3.j(a1,0),a3.j(a1,1),a3.j(a1,2)))}h=j.length
if(0>=h)return H.b(j,0)
a2=j[0]
if(3>=h)return H.b(j,3)
l.fd(a2,k,i,j[3])}},
h2:function(a,b){var s=this.cx,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
jF:function(a,b){var s
if(!this.h2(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.cx+0.00001*Math.abs(s))return!1
return!0},
f_:function(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=F.dc(a,new K.kW(l,C.d.Z(J.K(a),this.cy)),t.V)
l.a=P.i(s,!0,s.$ti.h("k.E"))
s=H.a([],t.ez)
for(r=B.D(J.K(l.a),0,4),q=r.length,p=t.cn,o=0;o<r.length;r.length===q||(0,H.e)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.K()
s.push(new S.du(J.Y(m,n+0),J.Y(l.a,n+1),J.Y(l.a,n+2),J.Y(l.a,n+3),p))}return s},
iJ:function(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.gw.a(b)
s=this.cy
r=B.D(a.length,s,s)
q=H.x(r)
q=P.i(new H.an(r,q.h("E(1)").a(b),q.h("an<1>")),!0,t.S)
q.push(a.length)
r=H.a([0],t.t)
C.a.R(r,q)
p=H.a([],t.Q)
for(r=new A.ai(H.a([r,q],t.fC),t.lb),r=r.gH(r),q=H.x(a),o=q.c,q=q.h("aC<1>");r.n();){n=r.b
if(n==null)n=H.c(P.am("No element"))
if(1>=n.length)return H.b(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.L()
if(typeof l!=="number")return H.bh(l)
if(m-l>=s){H.Z(l)
H.Z(m)
P.aL(l,m,a.length)
k=new H.aC(a,l,m,q)
k.c9(a,l,m,o)
p.push(k.aw(0))}}return p},
dO:function(a){t.y.a(a)
return this.iJ(a,new K.kZ(this,a))},
l3:function(a){t.y.a(a)
return this.iJ(a,new K.kY(this,a))},
eM:function(a){var s=this,r=s.cy,q=B.n6(0,C.d.b6(J.K(s.gw(s)),r),a),p=q.a
return B.n2(J.no(s.gw(s),r*p,r*(p+1)).aw(0)).$1(q.b)},
kP:function(){var s,r,q,p=H.a([],t.Q)
for(s=B.D(this.cy,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)p.push(this.dX(s[q]))
return p},
dX:function(a){var s=F.dc(this.gw(this),new K.kR(this,a),t.V)
return P.i(s,!0,s.$ti.h("k.E"))},
hO:function(){var s,r=this
if(J.K(r.gw(r))===1)return r.gw(r)
s=t.b5
s=A.nC(P.i(new A.ai(H.a([r.dX(0),r.dX(r.cy-1)],t.Q),s),!0,s.h("k.E")),t.V)
return P.i(s,!0,s.$ti.h("k.E"))},
f7:function(){var s,r,q,p=H.a([],t.l)
for(s=this.cY(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)C.a.R(p,s[q].hO())
return p},
kR:function(){var s,r,q,p,o=this,n=4*C.d.b6(J.K(o.gw(o)),o.cy)+1,m=t.l,l=H.a([],m)
for(s=B.fq(n,1,0).aQ(0),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)l.push(o.eM(s[q]))
m=H.a([],m)
for(s=B.D(n-1,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
if(typeof p!=="number")return p.K()
m.push(C.a.j(l,p+1).L(0,C.a.j(l,p)))}l=t.aQ
return B.iM(P.i(new H.J(m,t.eL.a(new K.kX()),l),!0,l.h("C.E")),t.W)},
jl:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.bX.a(a2)
a0.nD(a2)
if(J.K(a0.gw(a0))===J.K(a2.gw(a2)))return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
if(J.cy(n==null?H.c(H.f(a1)):n)){n=q.a(H.a([o.ay(C.e)],r))
m=o.r
J.af(m==null?H.c(H.f(a1)):m,n)}n=o.r
if(C.d.Z(J.K(n==null?H.c(H.f(a1)):n),o.cy)===1){n=o.r
o.d9(J.aF(n==null?H.c(H.f(a1)):n))}}s=t.V
l=a0.dO(P.i(a0.gw(a0),!0,s))
k=a2.dO(P.i(a2.gw(a2),!0,s))
j=Math.max(l.length,k.length)
i=H.a([],r)
h=H.a([],r)
g=a0.cy
f=new K.kU(g)
for(s=B.D(j,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){e=s[p]
d=f.$2(l,e)
c=f.$2(k,e)
n=J.X(c)
m=J.X(d)
b=Math.max(0,C.d.b6(n.gm(c)-m.gm(d),g))
a=Math.max(0,C.d.b6(m.gm(d)-n.gm(c),g))
d=a0.hn(b,d)
c=a0.hn(a,c)
C.a.R(i,d)
C.a.R(h,c)}a0.saL(q.a(i))
a2.saL(q.a(h))},
hn:function(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=H.a([],t.l)
for(r=B.D(this.cy*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)C.a.R(s,a8)
return s}o=this.f_(a8)
n=o.length
m=n+a7
s=t.t
r=H.a([],s)
for(q=B.D(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,H.e)(q),++p){k=q[p]
if(typeof k!=="number")return k.A()
r.push(C.f.b6(k*n,m))}q=H.a([],s)
for(l=B.D(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,H.e)(l),++p){k=l[p]
h=H.a([],s)
for(g=r.length,f=J.bs(k),e=0;e<r.length;r.length===g||(0,H.e)(r),++e)h.push(f.Y(k,r[e])?1:0)
q.push(B.iM(h,i))}d=H.a([],t.l)
for(s=new A.ai(H.a([o,q],t.bo),t.c2),s=s.gH(s),r=t.W,q=t.b,l=t.lx,j=t.z,i=t.cn;s.n();){c=s.b
if(c==null)c=H.c(P.am(a6))
h=c.length
if(0>=h)return H.b(c,0)
b=i.a(c[0])
if(1>=h)return H.b(c,1)
a=B.fq(H.Z(c[1])+1,1,0).aQ(0)
for(h=new A.ai(H.a([a,B.bH(a,r)],q),l),h=h.gH(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.n();){a2=h.b
if(a2==null)a2=H.c(P.am(a6))
a3=P.en([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return H.b(a2,0)
a5=a2[0]
if(1>=a4)return H.b(a2,1)
C.a.R(d,B.mi(new H.aU(a3,H.x(a3).h("aU<1,h>")),a5,a2[1]))}}return d},
nD:function(a){var s,r,q,p,o,n,m,l,k=new K.kS(),j=new K.kT()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.X(o)
l=J.X(n)
if(m.gm(o)>l.gm(n))j.$3(p,a,B.cX(n,m.gm(o),r))
else if(l.gm(n)>m.gm(o))j.$3(p,this,B.cX(o,l.gm(n),r))}},
hT:function(){var s=this.ay(C.e),r=K.o6(s)
r.ki(this)
return r},
ho:function(a,b,c){var s,r=this,q=t.bX
q.a(a)
q.a(b)
r.sck(B.n7(a.bz(),b.bz(),c))
r.sbU(B.n7(a.cX(),b.cX(),c))
r.scH(B.n7(a.bA(!0),b.bA(!0),c))
q=t.W
r.saJ(B.p4(a.gaJ(),b.gaJ(),c,q))
r.snM(B.p4(a.y,b.y,c,q))
s=new K.l0()
if(c===1){q=b.db
r.sck(q!=null?s.$1(q):null)
q=b.dx
r.sbU(q!=null?s.$1(q):null)
q=b.dy
r.scH(q!=null?s.$1(q):null)
r.saJ(b.gaJ())
r.y=b.y}},
dB:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
t.bX.a(a)
if(b<=0&&c>=1){e.saL(t.y.a(P.i(a.gw(a),!0,t.V)))
return}s=t.y
r=a.f_(s.a(P.i(a.gw(a),!0,t.V)))
q=r.length
p=B.n6(0,q,b)
o=B.n6(0,q,c)
n=p.a
m=p.b
l=o.a
k=o.b
e.saL(s.a(H.a([],t.l)))
if(q===0)return
j=r.length
if(n===l){if(n>>>0!==n||n>=j)return H.b(r,n)
j=J.fu(r[n])
j=s.a(B.mi(new H.aU(j,H.x(j).h("aU<1,h>")),m,k))
J.af(e.gw(e),j)}else{if(n>>>0!==n||n>=j)return H.b(r,n)
j=J.fu(r[n])
j=s.a(B.mi(new H.aU(j,H.x(j).h("aU<1,h>")),m,1))
J.af(e.gw(e),j)
for(j=n+1,P.aL(j,l,r.length),j=H.be(r,j,l,H.x(r).c),i=j.$ti,j=new H.M(j,j.gm(j),i.h("M<C.E>")),i=i.h("C.E"),h=t.z;j.n();){g=i.a(j.d)
g=P.en([g.a,g.b,g.c,g.d],!1,h)
g=s.a(new H.aU(g,H.x(g).h("aU<1,h>")))
f=e.r
J.af(f==null?H.c(H.f("points")):f,g)}if(l>>>0!==l||l>=r.length)return H.b(r,l)
j=J.fu(r[l])
j=s.a(B.mi(new H.aU(j,H.x(j).h("aU<1,h>")),0,k))
J.af(e.gw(e),j)}},
cY:function(){var s,r,q,p,o=H.a([],t.U)
for(s=this.bR(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
if(p instanceof K.P)o.push(p)}return o},
saJ:function(a){this.x=H.aP(a)},
snM:function(a){this.y=H.aP(a)},
sck:function(a){this.db=t.x.a(a)},
sbU:function(a){this.dx=t.x.a(a)},
scH:function(a){this.dy=t.x.a(a)},
gaJ:function(){return this.x},
ged:function(){return this.z}}
K.a0.prototype={
$1:function(a){return t.G.a(a).p()},
$S:9}
K.a1.prototype={
$1:function(a){return t.G.a(a).p()},
$S:9}
K.a2.prototype={
$1:function(a){return t.G.a(a).p()},
$S:9}
K.l1.prototype={
$1:function(a){return!(t.j.a(a) instanceof K.P)},
$S:15}
K.l2.prototype={
$1:function(a){return!(t.j.a(a) instanceof K.P)},
$S:15}
K.kV.prototype={
$2:function(a,b){t.V.a(b)
return C.d.Z(a,this.a)===0},
$S:5}
K.kW.prototype={
$2:function(a,b){t.V.a(b)
return a<J.K(this.a.a)-this.b},
$S:5}
K.kZ.prototype={
$1:function(a){var s,r,q
H.Z(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.b(s,r)
r=s[r]
if(a<0||a>=q)return H.b(s,a)
return!this.a.jF(r,s[a])},
$S:12}
K.kY.prototype={
$1:function(a){var s,r,q
H.Z(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.b(s,r)
r=s[r]
if(a<0||a>=q)return H.b(s,a)
return!this.a.h2(r,s[a])},
$S:12}
K.kR.prototype={
$2:function(a,b){t.V.a(b)
return C.d.Z(a,this.a.cy)===this.b},
$S:5}
K.kX.prototype={
$1:function(a){return Math.sqrt(t.V.a(a).bj())},
$S:21}
K.kU.prototype={
$2:function(a,b){var s,r,q,p
t.ls.a(a)
s=a.length
if(b>=s){s=H.a([],t.l)
for(r=B.D(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)s.push(C.a.gt(C.a.gt(a)))
return s}if(b<0)return H.b(a,b)
return a[b]},
$S:57}
K.kS.prototype={
$2:function(a,b){switch(a){case"fillColors":return b.bz()
case"strokeColors":return b.cX()
case"backgroundStrokeColors":return b.bA(!1)
default:throw H.d(u.v+a)}},
$S:58}
K.kT.prototype={
$3:function(a,b,c){t.ev.a(c)
switch(a){case"fillColors":b.sck(c)
break
case"strokeColors":b.sbU(c)
break
case"backgroundStrokeColors":b.scH(c)
break
default:throw H.d(u.v+a)}},
$S:59}
K.l0.prototype={
$1:function(a){var s=t.G
return P.i(J.r(t.ev.a(a),new K.l_(),s),!0,s)},
$S:60}
K.l_.prototype={
$1:function(a){return t.G.a(a).p()},
$S:9}
K.ck.prototype={}
K.c3.prototype={
fs:function(a){var s=a==null?H.a([],t.r):a
this.aN(t.a.a(s))},
p:function(){return K.r2(this)}}
K.eU.prototype={
p:function(){return K.r5(this)}}
K.dU.prototype={
mn:function(a,b,c,d){var s,r,q,p,o,n,m,l
if(c>0){s=1/c
r=s*d
q=B.fq(c+1,1,0).b4(0,1).L(0,s).K(0,r).aQ(0)
p=H.a([],t.r)
for(o=q.length,n=0;n<q.length;q.length===o||(0,H.e)(q),++n){m=q[n]
if(typeof m!=="number")return m.K()
l=a.p()
l.dB(a,m,m+r)
p.push(l)}this.aN(t.a.a(p))}this.hs(a,!1)},
p:function(){return K.q1(this)}}
Z.dJ.prototype={
gax:function(a){var s=this.d
return s==null?H.c(H.f("display")):s},
lO:function(a){this.d=a}}
F.fO.prototype={
gbh:function(){var s=this.e
return s==null?H.c(H.f("ctx")):s},
eU:function(a){var s,r,q=this,p=q.gax(q).gau(),o=q.gax(q).eb(a)
C.p.shk(q.gbh(),o.dH())
s=p.c
r=p.d
q.gbh().fillRect(0-s/2,0-r/2,p.c,p.d)},
q_:function(a){var s,r,q,p,o,n,m=this,l=t.y.a(P.i(a.gw(a),!0,t.V)),k=m.gax(m).gau().kF(a,l)
if(k.length===0)return
s=a.l3(k)
for(l=s.length,r="",q=0;q<s.length;s.length===l||(0,H.e)(s),++q)r+=m.l4(a,s[q])
p=W.qq(r)
m.jq(p,a,!0)
o=a.bz()
if(J.K(o)>1)C.p.shk(m.gbh(),m.jM(a,o))
else{n=m.gax(m).eb(J.Y(a.bz(),0))
C.p.shk(m.gbh(),n.dH())}m.gbh().fill(p)
m.jq(p,a,!1)},
l4:function(a,b){var s,r,q,p,o,n,m,l,k,j
t.y.a(b)
s=a.f_(b)
r=J.aR(b)
q=r.gah(b)
p="M "+H.m(q.a)+" "+H.m(q.b)
o=a.h2(r.gah(b),r.gt(b))
for(r=s.length,n=0;n<s.length;s.length===r||(0,H.e)(s),++n){m=s[n]
l=m.b
k=m.c
j=m.d
p+=" C "+H.m(l.a)+" "+H.m(l.b)+" "+H.m(k.a)+" "+H.m(k.b)+" "+H.m(j.a)+" "+H.m(j.b)}return o?p+" Z":p},
jM:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.ev.a(b)
s=a.kX()
r=t.y.a(H.a([s.a,s.b],t.l))
q=g.gax(g).gau().kF(a,r)
r=g.gbh()
p=q.length
if(0>=p)return H.b(q,0)
o=q[0]
n=o.a
o=o.b
if(1>=p)return H.b(q,1)
p=q[1]
p=r.createLinearGradient(n,o,p.a,p.b)
p.toString
o=J.X(b)
m=1/(o.gm(b)-1)
l=B.iH(m+1,0,m).aQ(0)
for(r=B.D(o.gm(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,H.e)(r),++k){j=r[k]
i=g.d
if(i==null)i=H.c(H.f("display"))
h=i.eb(o.j(b,j))
p.addColorStop(C.a.j(l,j),h.dH())}return p},
jq:function(a,b,c){var s,r,q,p,o=this,n=c?b.y:b.gaJ()
if(n===0)return
s=b.bA(c)
r=o.gax(o).gau().c
o.gbh().lineWidth=n*0.01*(r/14.222222222222221)
r=J.aR(s)
q=r.cK(s,new F.ja())
if(r.gai(s)||q)return
if(r.gm(s)>1)C.p.sih(o.gbh(),o.jM(b,s))
else{p=o.gax(o).eb(J.aE(b.bA(c)))
C.p.sih(o.gbh(),p.dH())}C.p.m5(o.gbh(),a)}}
F.ja.prototype={
$1:function(a){return t.G.a(a).d===0},
$S:78}
A.hE.prototype={
gdv:function(){var s=this.d
return s==null?H.c(H.f("mobjects")):s},
gau:function(){var s=this.f
return s==null?H.c(H.f("camera")):s},
gax:function(a){var s=this.x
return s==null?H.c(H.f("display")):s},
mq:function(){this.f=new T.j7(14.222222222222221)
new P.it().ms(0)
this.sir(t.a.a(H.a([],t.r)))},
cU:function(){var s=0,r=P.bF(t.z),q=1,p,o=[],n=this,m,l,k
var $async$cU=P.bG(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:n.gax(n).fW()
s=2
return P.ao(null,$async$cU)
case 2:q=4
s=7
return P.ao(n.bp(),$async$cU)
case 7:q=1
s=6
break
case 4:q=3
k=p
H.aT(k)
throw k
s=6
break
case 3:s=1
break
case 6:l=n.gau()
l.gax(l).gdE().eU(C.u)
n.gau().hC(n.gdv())
s=8
return P.ao(null,$async$cU)
case 8:n.gax(n).qh()
return P.bD(null,r)
case 1:return P.bC(p,r)}})
return P.bE($async$cU,r)},
cr:function(a){var s,r,q
for(s=this.gdv(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].hK(a)},
aN:function(a){t.a.a(a)
this.q2(a)
C.a.eD(this.gdv(),0,a)},
kC:function(a,b){var s,r=this,q=t.a
q.a(b)
s=P.i(b,!0,t.j)
C.a.R(s,r.gau().hd(b))
r.sir(q.a(r.l0(r.gdv(),s)))},
q2:function(a){return this.kC(!0,a)},
l0:function(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=H.a([],t.r)
new A.kv(s).$2(a,P.mx(b,H.x(b).c))
return s},
eO:function(a){var s=0,r=P.bF(t.z),q=this,p,o,n,m
var $async$eO=P.bG(function(b,c){if(b===1)return P.bC(c,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<a.a)){s=3
break}o=q.x
s=4
return P.ao((o==null?H.c(H.f("display")):o).dz(),$async$eO)
case 4:n=c
p+=n
o=a.a
a.cr(n)
a.du(p/o)
q.cr(n)
o=q.f
o=(o==null?H.c(H.f("camera")):o).r
o=(o==null?H.c(H.f("display")):o).a;(o==null?H.c(H.f("renderer")):o).eU(C.u)
o=q.f
if(o==null)o=H.c(H.f("camera"))
m=q.d
o.hC(m==null?H.c(H.f("mobjects")):m)
q.a+=n
s=2
break
case 3:return P.bD(null,r)}})
return P.bE($async$eO,r)},
b3:function(a,b){var s=0,r=P.bF(t.z),q=this,p,o
var $async$b3=P.bG(function(c,d){if(c===1)return P.bC(d,r)
while(true)switch(s){case 0:o=q.gau().hd(q.gdv())
b.df()
p=b.r
if(!C.a.F(o,p)){q.aN(t.a.a(H.a([p],t.r)))
C.a.R(o,p.bR())}s=2
return P.ao(q.eO(b),$async$b3)
case 2:b.hl()
b.dg(q)
q.cr(0)
return P.bD(null,r)}})
return P.bE($async$b3,r)},
eY:function(){var s=0,r=P.bF(t.z),q=this,p,o,n,m
var $async$eY=P.bG(function(a,b){if(a===1)return P.bC(b,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<1)){s=3
break}o=q.x
s=4
return P.ao((o==null?H.c(H.f("display")):o).dz(),$async$eY)
case 4:n=b
p+=n
q.cr(n)
o=q.f
o=(o==null?H.c(H.f("camera")):o).r
o=(o==null?H.c(H.f("display")):o).a;(o==null?H.c(H.f("renderer")):o).eU(C.u)
o=q.f
if(o==null)o=H.c(H.f("camera"))
m=q.d
o.hC(m==null?H.c(H.f("mobjects")):m)
q.a+=n
s=2
break
case 3:return P.bD(null,r)}})
return P.bE($async$eY,r)},
ef:function(){var s=0,r=P.bF(t.z),q=this
var $async$ef=P.bG(function(a,b){if(a===1)return P.bC(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}s=4
return P.ao(q.eY(),$async$ef)
case 4:s=2
break
case 3:return P.bD(null,r)}})
return P.bE($async$ef,r)},
sir:function(a){this.d=t.kQ.a(a)}}
A.kv.prototype={
$2:function(a,b){var s,r,q,p,o,n
t.a.a(a)
t.ns.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,H.e)(a),++q){p=a[q]
if(b.F(0,p))continue
o=p.bR()
n=b.pi(0,P.mx(o,H.x(o).c))
if(n.a!==0){o=p.d
this.$2(o==null?H.c(H.f("submobjects")):o,n)}else C.a.q(r,p)}},
$S:62}
B.ml.prototype={
$2:function(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S:function(){return this.a.h("0(0,0)")}}
B.mk.prototype={
$1:function(a){return H.Z(a)/this.a*this.b},
$S:63}
B.mm.prototype={
$2:function(a,b){this.a.a(b)
return a!==0},
$S:function(){return this.a.h("E(j,0)")}}
B.mc.prototype={
$1:function(a){return t.G.a(a).aw(0)},
$S:17}
B.md.prototype={
$1:function(a){return t.G.a(a).aw(0)},
$S:17}
B.me.prototype={
$1:function(a){var s
t.H.a(a)
s=J.X(a)
return new V.N(s.j(a,0),s.j(a,1),s.j(a,2),s.j(a,3))},
$S:65}
B.lS.prototype={
$1:function(a){var s,r,q,p,o,n,m,l=H.a([],t.l)
for(s=B.cW(this.a,t.V),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,H.e)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return H.bh(m)
l.push(J.bi(n.b,Math.pow(q,p-m)*Math.pow(a,m)*F.oR(p,m,!0)))}return C.a.aZ(l,new B.lR())},
$S:29}
B.lR.prototype={
$2:function(a,b){var s=t.V
return s.a(a).K(0,s.a(b))},
$S:23}
B.m6.prototype={
$5$end$start$step:function(a,b,c,d,e){var s,r,q,p,o
for(s=B.D(c==null?2*this.a:c,d,e),r=s.length,q=this.b,p=t.o,o=0;o<s.length;s.length===r||(0,H.e)(s),++o)q.aC(new S.B(b,s[o],p),a)},
$2:function(a,b){return this.$5$end$start$step(a,b,null,0,1)},
$4$start$step:function(a,b,c,d){return this.$5$end$start$step(a,b,null,c,d)},
$S:66}
B.m4.prototype={
$2:function(a,b){t.V.a(b)
return C.d.Z(a,2)===0},
$S:5}
B.m5.prototype={
$2:function(a,b){t.V.a(b)
return C.d.Z(a,2)===1},
$S:5}
B.lW.prototype={
$1:function(a){return J.iP(t.H.a(a),Math.max(this.a-this.b,0)).aw(0)},
$S:67}
B.m_.prototype={
$2:function(a,b){var s
t.o.a(b)
s=b.a
return J.S(s,b.b)?C.a.j(this.a,s):a},
$S:2}
V.N.prototype={
p:function(){var s=this
return new V.N(s.a,s.b,s.c,s.d)},
aw:function(a){var s=this,r=H.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
dH:function(){var s=this
return"rgba("+C.f.bw(s.a*255)+", "+C.f.bw(s.b*255)+", "+C.f.bw(s.c*255)+", "+H.m(s.d)+")"},
l:function(a){return this.dH()}}
V.lH.prototype={
$1:function(a){return P.cu(a,16)/255},
$S:68}
A.as.prototype={
Y:function(a,b){var s,r=this
if(b==null)return!1
if(!(b instanceof A.as&&r.a===b.a&&r.b===b.b))s=typeof b=="number"&&r.a===b&&r.b===0
else s=!0
return s},
K:function(a,b){t.ck.a(b)
return new A.as(this.a+b.a,this.b+b.b)},
A:function(a,b){var s=this.a,r=b.a,q=this.b,p=b.b
return new A.as(s*r-q*p,s*p+q*r)}}
Y.bk.prototype={
l:function(a){return this.b}}
Y.b1.prototype={}
Y.jm.prototype={
gcg:function(){var s=this.a
return s==null?H.c(H.f("eventListeners")):s},
mo:function(){var s,r,q=P.bn(t.cY,t.oR)
for(s=t.fO,r=0;r<6;++r)q.v(0,C.be[r],H.a([],s))
this.smz(t.fY.a(q))},
cB:function(a,b,c){var s,r,q
H.iI(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=P.i(c.h("l<aK<0>>").a(b),!0,c.h("aK<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=C.a.gt(s)
C.a.a8(s,q)
q.$ti.c.a(a)
r=q.a.$1(a)}},
ei:function(a){var s,r=this
switch(a.a){case C.D:t.m6.a(a)
s=r.gcg().j(0,C.D)
s.toString
r.cB(a,s,t.e)
break
case C.v:t.oJ.a(a)
s=r.gcg().j(0,C.v)
s.toString
r.cB(a,s,t.e)
break
case C.w:t.nB.a(a)
s=r.gcg().j(0,C.w)
s.toString
r.cB(a,s,t.e)
break
case C.x:t.gn.a(a)
s=r.gcg().j(0,C.x)
s.toString
r.cB(a,s,t.e)
break
case C.T:t.lY.a(a)
s=r.gcg().j(0,C.T)
s.toString
r.cB(a,s,t.e)
break
case C.U:t.am.a(a)
s=r.gcg().j(0,C.U)
s.toString
r.cB(a,s,t.e)
break}},
smz:function(a){this.a=t.pp.a(a)}}
Y.aK.prototype={}
Y.hg.prototype={}
Y.eu.prototype={}
Y.bW.prototype={}
Y.bX.prototype={}
Y.bV.prototype={}
Y.et.prototype={
fp:function(a){switch(this.a){case 0:break
case 1:break
case 2:break
default:break}}}
O.kE.prototype={
$1:function(a){return H.iF(a)!=null},
$S:10}
F.lU.prototype={
$2:function(a,b){return H.Z(a)*H.Z(b)},
$S:13}
F.lV.prototype={
$2:function(a,b){return H.Z(a)*H.Z(b)},
$S:13}
S.bu.prototype={
gak:function(a){var s=this.a
return s},
gaa:function(a){var s=this.b
return s==null?H.c(H.f("shape")):s},
K:function(a,b){return this.bM(0,new S.iZ(typeof b=="number"?S.bj(b,this.gaa(this)):t.A.a(b)))},
L:function(a,b){return this.bM(0,new S.j1(typeof b=="number"?S.bj(b,this.gaa(this)):t.A.a(b)))},
A:function(a,b){return this.bM(0,new S.j0(typeof b=="number"?S.bj(b,this.gaa(this)):t.A.a(b)))},
b4:function(a,b){var s=S.bj(b,this.gaa(this))
return this.bM(0,new S.j_(s))},
bM:function(a,b){var s,r,q,p=this
t.iJ.a(b)
s=B.cW(p.gak(p),t.H)
r=H.x(s)
q=r.h("J<1,l<q>>")
q=P.i(new H.J(s,r.h("l<q>(1)").a(new S.iY(b)),q),!0,q.h("C.E"))
return S.aA(p.gaa(p),q)},
bk:function(a){var s,r
t.o.a(a)
s=a.a
r=this.gak(this)
if(s>>>0!==s||s>=r.length)return H.b(r,s)
return J.Y(r[s],a.b)},
aC:function(a,b){var s,r,q,p,o=this
t.o.a(a)
s=a.a
r=o.gaa(o).a
if(typeof s!=="number")return s.Z()
if(typeof r!=="number")return H.bh(r)
q=C.d.Z(s,r)
r=a.b
s=o.gaa(o).b
if(typeof r!=="number")return r.Z()
if(typeof s!=="number")return H.bh(s)
p=C.f.Z(r,s)
s=o.gak(o)
if(q<0||q>=s.length)return H.b(s,q)
J.ft(s[q],p,b)},
n8:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.gaa(f).a
if(typeof e!=="number")return e.L()
s=f.gaa(f).b
if(typeof s!=="number")return s.L()
r=H.a([],t.b)
for(q=B.D(f.gaa(f).a,0,1),p=q.length,o=t.n,n=0;n<q.length;q.length===p||(0,H.e)(q),++n){m=q[n]
if(!J.S(m,a)){l=H.a([],o)
k=f.b
k=B.D((k==null?H.c(H.f("shape")):k).a,0,1)
j=k.length
i=0
for(;i<k.length;k.length===j||(0,H.e)(k),++i){h=k[i]
if(!J.S(h,b)){g=f.a
l.push(J.Y(C.a.j(g,m),h))}}r.push(l)}}return S.aA(new S.B(e-1,s-1,t.o),r)},
hP:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(J.S(h.gaa(h).a,2)){s=h.gak(h)
if(0>=s.length)return H.b(s,0)
r=J.Y(s[0],0)
s=h.gak(h)
if(0>=s.length)return H.b(s,0)
q=J.Y(s[0],1)
s=h.gak(h)
if(1>=s.length)return H.b(s,1)
p=J.Y(s[1],0)
s=h.gak(h)
if(1>=s.length)return H.b(s,1)
return r*J.Y(s[1],1)-q*p}s=h.gaa(h).a
if(typeof s!=="number")return s.L()
o=h.gaa(h).b
if(typeof o!=="number")return o.L()
n=new S.B(s-1,o-1,t.o)
o=H.a([],t.n)
for(s=B.D(h.gaa(h).a,0,1),m=s.length,l=0;l<s.length;s.length===m||(0,H.e)(s),++l){k=s[l]
if(typeof k!=="number")return k.Z()
j=C.f.Z(k,2)===0?1:-1
i=h.a
if(0>=i.length)return H.b(i,0)
o.push(j*S.bj(J.Y(i[0],k),n).A(0,h.n8(0,k)).hP())}return B.iM(o,t.W)},
f4:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(a8.hP()===0)throw H.d("This matrix is not inversible")
s=a8.gaa(a8).a
r=a8.gaa(a8).b
q=a8.p()
p=S.fG(s)
for(o=B.D(r,0,1),n=o.length,m=s-1,l=r-1,k=t.o,j=0;j<o.length;o.length===n||(0,H.e)(o),++j){i=o[j]
for(h=i,g=-1,f=-1;h!==s;++h){k.a(new S.B(h,i,k))
e=q.a
if(h<0||h>=e.length)return H.b(e,h)
d=J.Y(e[h],i)
if(d>f){f=d
g=h}}e=q.a
c=e.length
if(g<0||g>=c)return H.b(e,g)
b=e[g]
if(i>>>0!==i||i>=c)return H.b(e,i)
e[g]=e[i]
C.a.v(e,i,b)
e=p.a
c=e.length
if(g>=c)return H.b(e,g)
a=e[g]
if(i!==(i|0)||i>=c)return H.b(e,i)
e[g]=e[i]
C.a.v(e,i,a)
e=J.X(b)
a0=e.j(b,i)
for(a1=i;a1<r;++a1){c=e.j(b,a1)
if(typeof c!=="number")return c.b4()
e.v(b,a1,c/a0)}for(c=J.X(a),a1=l;a1>=0;--a1){a2=c.j(a,a1)
if(typeof a2!=="number")return a2.b4()
c.v(a,a1,a2/a0)}for(a1=i+1,g=m;g>=0;--g)if(g!==i){a2=q.a
if(g>=a2.length)return H.b(a2,g)
a3=a2[g]
a2=p.a
if(g>=a2.length)return H.b(a2,g)
a4=a2[g]
a2=J.X(a3)
a0=a2.j(a3,i)
for(a5=a1;a5!==r;++a5){a6=a2.j(a3,a5)
a7=e.j(b,a5)
if(typeof a7!=="number")return a7.A()
if(typeof a6!=="number")return a6.L()
a2.v(a3,a5,a6-a7*a0)}for(a2=J.X(a4),a5=l;a5>0;--a5){a6=a2.j(a4,a5)
a7=c.j(a,a5)
if(typeof a7!=="number")return a7.A()
if(typeof a6!=="number")return a6.L()
a2.v(a4,a5,a6-a7*a0);--a5
a7=a2.j(a4,a5)
a6=c.j(a,a5)
if(typeof a6!=="number")return a6.A()
if(typeof a7!=="number")return a7.L()
a2.v(a4,a5,a7-a6*a0)}if(a5===0){a6=a2.j(a4,0)
a7=c.j(a,0)
if(typeof a7!=="number")return a7.A()
if(typeof a6!=="number")return a6.L()
a2.v(a4,0,a6-a7*a0)}}}return p},
aQ:function(a){var s=this.gak(this),r=H.x(s),q=r.h("J<1,q>")
return P.i(new H.J(s,r.h("q(1)").a(new S.iW(a)),q),!0,q.h("C.E"))},
i1:function(a,b){var s,r,q,p,o
t.H.a(b)
for(s=B.D(this.gaa(this).a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
o=this.a
J.ft(C.a.j(o,p),a,C.a.j(b,p))}},
gkG:function(){return this.bM(0,new S.j2(this))},
hV:function(){var s,r,q,p,o=H.a([],t.b)
for(s=this.gak(this),r=s.length,q=t.W,p=0;p<s.length;s.length===r||(0,H.e)(s),++p)o.push(P.en(s[p],!0,q))
return o},
bN:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.gaa(c),a=c.gaa(c).b,a0=a2.gaa(a2).b,a1=S.bj(0,new S.B(c.gaa(c).a,a2.gaa(a2).b,t.o))
for(b=B.D(b.a,0,1),s=b.length,r=0;r<b.length;b.length===s||(0,H.e)(b),++r){q=b[r]
for(p=B.D(a0,0,1),o=p.length,n=0;n<p.length;p.length===o||(0,H.e)(p),++n){m=p[n]
for(l=B.D(a,0,1),k=l.length,j=0;j<l.length;l.length===k||(0,H.e)(l),++j){i=l[j]
h=a1.a
h=C.a.j(h,q)
g=J.X(h)
f=g.j(h,m)
e=c.a
e=J.Y(C.a.j(e,q),i)
d=a2.a
d=J.Y(C.a.j(d,i),m)
if(typeof e!=="number")return e.A()
if(typeof d!=="number")return H.bh(d)
if(typeof f!=="number")return f.K()
g.v(h,m,f+e*d)}}}return a1},
p:function(){return this.ce(new S.iV())},
ce:function(a){return this.bM(0,new S.iU(t.f3.a(a)))},
ez:function(){var s,r,q,p,o=H.a([],t.n)
for(s=this.gak(this),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)for(p=J.I(s[q]);p.n();)o.push(p.gu())
return o},
l:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=H.m(d.gaa(d).a)+"x"+H.m(d.gaa(d).b),b=H.a([],t.t)
for(s=d.gak(d),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)for(p=J.I(s[q]);p.n();)b.push(C.f.hJ(p.gu(),6).length)
o=C.a.eA(b,6,C.a5,t.S)
for(b=d.gak(d),s=b.length,r=o+4,p=t.s,n="",q=0;q<b.length;b.length===s||(0,H.e)(b),++q){m=b[q]
n+="      "
for(l=J.I(m);l.n();){k=l.gu()
j=k<0?"-":" "
k=Math.abs(k)
i=C.f.hJ(k,6)
h=H.a([],p)
for(i=B.D(r-i.length,0,1),g=i.length,f=0;f<i.length;i.length===g||(0,H.e)(i),++f)h.push(" ")
e=C.a.aY(h)
n=n+j+C.f.hJ(k,6)+e}n+="\n"}return c+" matrix\n"+n},
q1:function(a,b){var s,r,q,p,o,n,m,l,k=this.ez(),j=S.bj(0,new S.B(a,b,t.o))
for(s=B.cW(k,t.W),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
o=p.a
n=C.d.Z(o,a)
m=C.d.b6(o,a)
l=j.a
if(n>=l.length)return H.b(l,n)
J.ft(l[n],m,p.b)}return j},
siq:function(a){this.a=t.n_.a(a)},
smv:function(a){this.b=t.nm.a(a)}}
S.iZ.prototype={
$2:function(a,b){return a+this.a.bk(t.o.a(b))},
$S:2}
S.j1.prototype={
$2:function(a,b){return a-this.a.bk(t.o.a(b))},
$S:2}
S.j0.prototype={
$2:function(a,b){return a*this.a.bk(t.o.a(b))},
$S:2}
S.j_.prototype={
$2:function(a,b){return a/this.a.bk(t.o.a(b))},
$S:2}
S.iY.prototype={
$1:function(a){var s,r,q
t.kk.a(a)
s=B.cW(a.b,t.W)
r=H.x(s)
q=r.h("J<1,q>")
return P.i(new H.J(s,r.h("q(1)").a(new S.iX(this.a,a)),q),!0,q.h("C.E"))},
$S:70}
S.iX.prototype={
$1:function(a){t.d7.a(a)
return this.a.$2(a.b,new S.B(this.b.a,a.a,t.o))},
$S:71}
S.iW.prototype={
$1:function(a){return J.Y(t.H.a(a),this.a)},
$S:72}
S.j2.prototype={
$2:function(a,b){var s=t.o
s.a(b)
return this.a.bk(new S.B(b.b,b.a,s))},
$S:2}
S.iV.prototype={
$1:function(a){return a},
$S:6}
S.iU.prototype={
$2:function(a,b){t.o.a(b)
return this.a.$1(a)},
$S:2}
S.mj.prototype={
$2:function(a,b){var s=t.A
return s.a(a).bN(s.a(b))},
$S:74}
M.h.prototype={
Y:function(a,b){if(b==null)return!1
return b instanceof M.h&&this.a===b.a&&this.b===b.b&&this.c===b.c},
K:function(a,b){var s=this
if(typeof b=="number")return new M.h(s.a+b,s.b+b,s.c+b)
else if(b instanceof M.h)return new M.h(s.a+b.a,s.b+b.b,s.c+b.c)
else throw H.d("Vector3 only support addition by num or Vector3")},
L:function(a,b){var s=this
if(typeof b=="number")return new M.h(s.a-b,s.b-b,s.c-b)
else if(b instanceof M.h)return new M.h(s.a-b.a,s.b-b.b,s.c-b.c)
else throw H.d("Vector3 only support subtraction by num or Vector3")},
A:function(a,b){var s=this
if(typeof b=="number")return new M.h(s.a*b,s.b*b,s.c*b)
else if(b instanceof M.h)return new M.h(s.a*b.a,s.b*b.b,s.c*b.c)
else throw H.d("Vector3 only support multiplication by num or Vector3")},
b4:function(a,b){return new M.h(this.a/b,this.b/b,this.c/b)},
bj:function(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
c7:function(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw H.d("No component at index "+a+" on a vector3")}},
qf:function(){var s=t.n
s=S.aA(null,H.a([H.a([this.a],s),H.a([this.b],s),H.a([this.c],s)],t.b))
return s},
hL:function(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new M.h(s,r,c==null?this.c:c)},
qv:function(a){return this.hL(a,null,null)},
qw:function(a){return this.hL(null,a,null)},
kM:function(a){return this.hL(null,null,a)},
qu:function(a,b){if(a===0)return this.qv(b)
else if(a===1)return this.qw(b)
else if(a===2)return this.kM(b)
else throw H.d("Cannot index a vector3 with index="+a)},
bN:function(a){var s=S.fG(3).bM(0,new M.l4(a)).bN(this.qf()),r=t.o
return new M.h(s.bk(new S.B(0,0,r)),s.bk(new S.B(1,0,r)),s.bk(new S.B(2,0,r)))},
jQ:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ol:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new M.h(s*r-q*p,q*o-n*r,n*p-s*o)},
ce:function(a){t.f3.a(a)
return new M.h(a.$1(this.a),a.$1(this.b),a.$1(this.c))},
i6:function(a){return this.ce(new M.l5())},
nk:function(a){return this.ce(new M.l3())},
dd:function(){var s=this.a
if(s===0&&this.b===0)return 0
return Math.atan2(this.b,s)},
l:function(a){return"vec3("+H.m(this.a)+", "+H.m(this.b)+", "+H.m(this.c)+")"}}
M.l4.prototype={
$2:function(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gaa(r).a
if(typeof s!=="number")return s.cV()
if(typeof q!=="number")return H.bh(q)
if(s<q){s=b.b
q=r.gaa(r).b
if(typeof s!=="number")return s.cV()
if(typeof q!=="number")return H.bh(q)
q=s>=q
s=q}else s=!0
return s?a:r.bk(b)},
$S:2}
M.l5.prototype={
$1:function(a){return J.nn(a)},
$S:6}
M.l3.prototype={
$1:function(a){return Math.abs(a)},
$S:6}
M.jd.prototype={
nl:function(a,b){var s,r,q=t.J
M.oM("absolute",H.a([b,null,null,null,null,null,null],q))
s=this.a
s=s.b_(b)>0&&!s.c2(b)
if(s)return b
s=D.oU()
r=H.a([s,b,null,null,null,null,null,null],q)
M.oM("join",r)
return this.pl(new H.ar(r,t.na))},
pl:function(a){var s,r,q,p,o,n,m,l,k,j
t.bq.a(a)
for(s=a.$ti,r=s.h("E(k.E)").a(new M.je()),q=a.gH(a),s=new H.cS(q,r,s.h("cS<k.E>")),r=this.a,p=!1,o=!1,n="";s.n();){m=q.gu()
if(r.c2(m)&&o){l=X.hs(m,r)
k=n.charCodeAt(0)==0?n:n
n=C.b.B(k,0,r.cT(k,!0))
l.b=n
if(r.dw(n))C.a.v(l.e,0,r.gcu())
n=""+l.l(0)}else if(r.b_(m)>0){o=!r.c2(m)
n=""+m}else{j=m.length
if(j!==0){if(0>=j)return H.b(m,0)
j=r.h3(m[0])}else j=!1
if(!j)if(p)n+=r.gcu()
n+=m}p=r.dw(m)}return n.charCodeAt(0)==0?n:n},
cz:function(a,b){var s=X.hs(b,this.a),r=s.d,q=H.x(r),p=q.h("an<1>")
s.skn(P.i(new H.an(r,q.h("E(1)").a(new M.jf()),p),!0,p.h("k.E")))
r=s.b
if(r!=null)C.a.bK(s.d,0,r)
return s.d},
hv:function(a){var s
if(!this.mY(a))return a
s=X.hs(a,this.a)
s.hu()
return s.l(0)},
mY:function(a){var s,r,q,p,o,n,m,l,k=this.a,j=k.b_(a)
if(j!==0){if(k===$.iN())for(s=0;s<j;++s)if(C.b.E(a,s)===47)return!0
r=j
q=47}else{r=0
q=null}for(p=new H.a8(a).a,o=p.length,s=r,n=null;s<o;++s,n=q,q=m){m=C.b.M(p,s)
if(k.bL(m)){if(k===$.iN()&&m===47)return!0
if(q!=null&&k.bL(q))return!0
if(q===46)l=n==null||n===46||k.bL(n)
else l=!1
if(l)return!0}}if(q==null)return!0
if(k.bL(q))return!0
if(q===46)k=n==null||k.bL(n)||n===46
else k=!1
if(k)return!0
return!1},
pW:function(a){var s,r,q,p,o,n,m=this,l='Unable to find a path to "',k=m.a,j=k.b_(a)
if(j<=0)return m.hv(a)
s=D.oU()
if(k.b_(s)<=0&&k.b_(a)>0)return m.hv(a)
if(k.b_(a)<=0||k.c2(a))a=m.nl(0,a)
if(k.b_(a)<=0&&k.b_(s)>0)throw H.d(X.nK(l+a+'" from "'+s+'".'))
r=X.hs(s,k)
r.hu()
q=X.hs(a,k)
q.hu()
j=r.d
p=j.length
if(p!==0){if(0>=p)return H.b(j,0)
j=J.S(j[0],".")}else j=!1
if(j)return q.l(0)
j=r.b
p=q.b
if(j!=p)j=j==null||p==null||!k.hz(j,p)
else j=!1
if(j)return q.l(0)
while(!0){j=r.d
p=j.length
if(p!==0){o=q.d
n=o.length
if(n!==0){if(0>=p)return H.b(j,0)
j=j[0]
if(0>=n)return H.b(o,0)
o=k.hz(j,o[0])
j=o}else j=!1}else j=!1
if(!j)break
C.a.eT(r.d,0)
C.a.eT(r.e,1)
C.a.eT(q.d,0)
C.a.eT(q.e,1)}j=r.d
p=j.length
if(p!==0){if(0>=p)return H.b(j,0)
j=J.S(j[0],"..")}else j=!1
if(j)throw H.d(X.nK(l+a+'" from "'+s+'".'))
j=t.N
C.a.eD(q.d,0,P.bN(r.d.length,"..",!1,j))
C.a.v(q.e,0,"")
C.a.eD(q.e,1,P.bN(r.d.length,k.gcu(),!1,j))
k=q.d
j=k.length
if(j===0)return"."
if(j>1&&J.S(C.a.gt(k),".")){C.a.dD(q.d)
k=q.e
if(0>=k.length)return H.b(k,-1)
k.pop()
if(0>=k.length)return H.b(k,-1)
k.pop()
C.a.q(k,"")}q.b=""
q.kx()
return q.l(0)},
kq:function(a){var s,r,q=this,p=M.oG(a)
if(p.gaV()==="file"&&q.a===$.fr())return p.l(0)
else if(p.gaV()!=="file"&&p.gaV()!==""&&q.a!==$.fr())return p.l(0)
s=q.hv(q.a.hx(M.oG(p)))
r=q.pW(s)
return q.cz(0,r).length>q.cz(0,s).length?s:r}}
M.je.prototype={
$1:function(a){return H.az(a)!==""},
$S:8}
M.jf.prototype={
$1:function(a){return H.az(a).length!==0},
$S:8}
M.lP.prototype={
$1:function(a){H.iF(a)
return a==null?"null":'"'+a+'"'},
$S:75}
B.cJ.prototype={
l1:function(a){var s,r=this.b_(a)
if(r>0)return C.b.B(a,0,r)
if(this.c2(a)){if(0>=a.length)return H.b(a,0)
s=a[0]}else s=null
return s},
hz:function(a,b){return a===b}}
X.km.prototype={
kx:function(){var s,r,q=this
while(!0){s=q.d
if(!(s.length!==0&&J.S(C.a.gt(s),"")))break
C.a.dD(q.d)
s=q.e
if(0>=s.length)return H.b(s,-1)
s.pop()}s=q.e
r=s.length
if(r!==0)C.a.v(s,r-1,"")},
hu:function(){var s,r,q,p,o,n,m=this,l=H.a([],t.s)
for(s=m.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=s[p]
n=J.bs(o)
if(!(n.Y(o,".")||n.Y(o,"")))if(n.Y(o,"..")){n=l.length
if(n!==0){if(0>=n)return H.b(l,-1)
l.pop()}else ++q}else C.a.q(l,o)}if(m.b==null)C.a.eD(l,0,P.bN(q,"..",!1,t.N))
if(l.length===0&&m.b==null)C.a.q(l,".")
m.skn(l)
s=m.a
m.slA(P.bN(l.length+1,s.gcu(),!0,t.N))
r=m.b
if(r==null||l.length===0||!s.dw(r))C.a.v(m.e,0,"")
r=m.b
if(r!=null&&s===$.iN()){r.toString
m.b=H.bt(r,"/","\\")}m.kx()},
l:function(a){var s,r,q=this,p=q.b
p=p!=null?""+p:""
for(s=0;s<q.d.length;++s){r=q.e
if(s>=r.length)return H.b(r,s)
r=p+H.m(r[s])
p=q.d
if(s>=p.length)return H.b(p,s)
p=r+H.m(p[s])}p+=H.m(C.a.gt(q.e))
return p.charCodeAt(0)==0?p:p},
skn:function(a){this.d=t.bF.a(a)},
slA:function(a){this.e=t.bF.a(a)}}
X.hu.prototype={
l:function(a){return"PathException: "+this.a},
$ibU:1}
O.kF.prototype={
l:function(a){return this.gI(this)}}
E.hx.prototype={
h3:function(a){return C.b.F(a,"/")},
bL:function(a){return a===47},
dw:function(a){var s=a.length
return s!==0&&C.b.M(a,s-1)!==47},
cT:function(a,b){if(a.length!==0&&C.b.E(a,0)===47)return 1
return 0},
b_:function(a){return this.cT(a,!1)},
c2:function(a){return!1},
hx:function(a){var s
if(a.gaV()===""||a.gaV()==="file"){s=a.gaU(a)
return P.mU(s,0,s.length,C.t,!1)}throw H.d(P.ab("Uri "+a.l(0)+" must have scheme 'file:'."))},
gI:function(){return"posix"},
gcu:function(){return"/"}}
F.i0.prototype={
h3:function(a){return C.b.F(a,"/")},
bL:function(a){return a===47},
dw:function(a){var s=a.length
if(s===0)return!1
if(C.b.M(a,s-1)!==47)return!0
return C.b.bq(a,"://")&&this.b_(a)===s},
cT:function(a,b){var s,r,q,p,o=a.length
if(o===0)return 0
if(C.b.E(a,0)===47)return 1
for(s=0;s<o;++s){r=C.b.E(a,s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=C.b.aT(a,"/",C.b.al(a,"//",s+1)?s+3:s)
if(q<=0)return o
if(!b||o<q+3)return q
if(!C.b.a2(a,"file://"))return q
if(!B.p6(a,q+1))return q
p=q+3
return o===p?p:q+4}}return 0},
b_:function(a){return this.cT(a,!1)},
c2:function(a){return a.length!==0&&C.b.E(a,0)===47},
hx:function(a){return a.l(0)},
gI:function(){return"url"},
gcu:function(){return"/"}}
L.i6.prototype={
h3:function(a){return C.b.F(a,"/")},
bL:function(a){return a===47||a===92},
dw:function(a){var s=a.length
if(s===0)return!1
s=C.b.M(a,s-1)
return!(s===47||s===92)},
cT:function(a,b){var s,r,q=a.length
if(q===0)return 0
s=C.b.E(a,0)
if(s===47)return 1
if(s===92){if(q<2||C.b.E(a,1)!==92)return 1
r=C.b.aT(a,"\\",2)
if(r>0){r=C.b.aT(a,"\\",r+1)
if(r>0)return r}return q}if(q<3)return 0
if(!B.p5(s))return 0
if(C.b.E(a,1)!==58)return 0
q=C.b.E(a,2)
if(!(q===47||q===92))return 0
return 3},
b_:function(a){return this.cT(a,!1)},
c2:function(a){return this.b_(a)===1},
hx:function(a){var s,r
if(a.gaV()!==""&&a.gaV()!=="file")throw H.d(P.ab("Uri "+a.l(0)+" must have scheme 'file:'."))
s=a.gaU(a)
if(a.gbt(a)===""){if(s.length>=3&&C.b.a2(s,"/")&&B.p6(s,1))s=C.b.ky(s,"/","")}else s="\\\\"+a.gbt(a)+s
r=H.bt(s,"/","\\")
return P.mU(r,0,r.length,C.t,!1)},
o7:function(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
hz:function(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.o7(C.b.E(a,r),C.b.E(b,r)))return!1
return!0},
gI:function(){return"windows"},
gcu:function(){return"\\"}}
Y.hL.prototype={
gm:function(a){return this.c.length},
gpm:function(){return this.b.length},
io:function(a,b){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o===13){n=p+1
if(n<r){if(n>=r)return H.b(s,n)
m=s[n]!==10}else m=!0
if(m)o=10}if(o===10)C.a.q(q,p+1)}},
fn:function(a,b,c){return Y.mI(this,b,c)},
cW:function(a){var s,r=this
if(a<0)throw H.d(P.aI("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw H.d(P.aI("Offset "+a+u.D+r.gm(r)+"."))
s=r.b
if(a<C.a.gah(s))return-1
if(a>=C.a.gt(s))return s.length-1
if(r.mV(a)){s=r.d
s.toString
return s}return r.d=r.mJ(a)-1},
mV:function(a){var s,r,q,p=this.d
if(p==null)return!1
s=this.b
r=s.length
if(p>>>0!==p||p>=r)return H.b(s,p)
if(a<s[p])return!1
if(!(p>=r-1)){q=p+1
if(q>=r)return H.b(s,q)
q=a<s[q]}else q=!0
if(q)return!0
if(!(p>=r-2)){q=p+2
if(q>=r)return H.b(s,q)
q=a<s[q]
s=q}else s=!0
if(s){this.d=p+1
return!0}return!1},
mJ:function(a){var s,r,q=this.b,p=q.length,o=p-1
for(s=0;s<o;){r=s+C.d.aX(o-s,2)
if(r<0||r>=p)return H.b(q,r)
if(q[r]>a)o=r
else s=r+1}return o},
aQ:function(a){var s,r,q,p=this
if(a<0)throw H.d(P.aI("Offset may not be negative, was "+a+"."))
else if(a>p.c.length)throw H.d(P.aI("Offset "+a+" must be not be greater than the number of characters in the file, "+p.gm(p)+"."))
s=p.cW(a)
r=p.b
if(s<0||s>=r.length)return H.b(r,s)
q=r[s]
if(q>a)throw H.d(P.aI("Line "+s+" comes after offset "+a+"."))
return a-q},
dM:function(a){var s,r,q,p
if(a<0)throw H.d(P.aI("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw H.d(P.aI("Line "+a+" must be less than the number of lines in the file, "+this.gpm()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw H.d(P.aI("Line "+a+" doesn't have 0 columns."))
return q}}
Y.b2.prototype={
ga1:function(){return this.a.a},
gaj:function(){return this.a.cW(this.b)},
gar:function(){return this.a.aQ(this.b)},
bn:function(a,b){var s,r=this.b
if(r<0)throw H.d(P.aI("Offset may not be negative, was "+r+"."))
else{s=this.a
if(r>s.c.length)throw H.d(P.aI("Offset "+r+u.D+s.gm(s)+"."))}},
gaB:function(a){return this.b}}
Y.at.prototype={
ga1:function(){return this.a.a},
gm:function(a){return this.c-this.b},
gV:function(a){return Y.c8(this.a,this.b)},
gX:function(){return Y.c8(this.a,this.c)},
ga_:function(a){return P.ad(C.r.be(this.a.c,this.b,this.c),0,null)},
gb1:function(){var s=this,r=s.a,q=s.c,p=r.cW(q)
if(r.aQ(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":P.ad(C.r.be(r.c,r.dM(p),r.dM(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.dM(p+1)
return P.ad(C.r.be(r.c,r.dM(r.cW(s.b)),q),0,null)},
aK:function(a,b,c){var s,r=this.c,q=this.b
if(r<q)throw H.d(P.ab("End "+r+" must come after start "+q+"."))
else{s=this.a
if(r>s.c.length)throw H.d(P.aI("End "+r+u.D+s.gm(s)+"."))
else if(q<0)throw H.d(P.aI("Start may not be negative, was "+q+"."))}},
aE:function(a,b){var s
t.hs.a(b)
if(!(b instanceof Y.at))return this.mk(0,b)
s=C.d.aE(this.b,b.b)
return s===0?C.d.aE(this.c,b.c):s},
Y:function(a,b){var s=this
if(b==null)return!1
if(!t.lS.b(b))return s.mj(0,b)
return s.b===b.b&&s.c===b.c&&J.S(s.a.a,b.a.a)},
gJ:function(a){return Y.ds.prototype.gJ.call(this,this)},
oJ:function(a,b){var s,r=this,q=r.a
if(!J.S(q.a,b.a.a))throw H.d(P.ab('Source URLs "'+H.m(r.ga1())+'" and  "'+H.m(b.ga1())+"\" don't match."))
s=Math.min(r.b,b.b)
return Y.mI(q,s,Math.max(r.c,b.c))},
$imo:1,
$ibP:1}
U.jx.prototype={
p6:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a
a.je(C.a.gah(a0).c)
s=a.e
r=P.bN(s,null,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a0.length;++o){n=a0[o]
if(o>0){m=a0[o-1]
l=m.c
k=n.c
if(!J.S(l,k)){a.e6("\u2575")
q.a+="\n"
a.je(k)}else if(m.b+1!==n.b){a.nj("...")
q.a+="\n"}}for(l=n.d,k=H.x(l).h("W<1>"),j=new H.W(l,k),j=new H.M(j,j.gm(j),k.h("M<C.E>")),k=k.h("C.E"),i=n.b,h=n.a;j.n();){g=k.a(j.d)
f=g.a
if(f.gV(f).gaj()!==f.gX().gaj()&&f.gV(f).gaj()===i&&a.mW(C.b.B(h,0,f.gV(f).gar()))){e=C.a.ap(r,null)
if(e<0)H.c(P.ab(H.m(r)+" contains no null elements."))
C.a.v(r,e,g)}}a.ni(i)
q.a+=" "
a.nh(n,r)
if(s)q.a+=" "
d=C.a.kc(l,new U.jS())
if(d===-1)c=null
else{if(d<0||d>=l.length)return H.b(l,d)
c=l[d]}k=c!=null
if(k){j=c.a
g=j.gV(j).gaj()===i?j.gV(j).gar():0
a.nf(h,g,j.gX().gaj()===i?j.gX().gar():h.length,p)}else a.e8(h)
q.a+="\n"
if(k)a.ng(n,c,r)
for(k=l.length,b=0;b<k;++b){l[b].toString
continue}}a.e6("\u2575")
a0=q.a
return a0.charCodeAt(0)==0?a0:a0},
je:function(a){var s=this
if(!s.f||a==null)s.e6("\u2577")
else{s.e6("\u250c")
s.b7(new U.jF(s),"\x1b[34m")
s.r.a+=" "+$.nh().kq(a)}s.r.a+="\n"},
e5:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f={}
t.eU.a(b)
f.a=!1
f.b=null
s=c==null
if(s)r=null
else r=g.b
for(q=b.length,p=g.b,s=!s,o=g.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
if(k)j=null
else{i=l.a
j=i.gV(i).gaj()}h=k?null:l.a.gX().gaj()
if(s&&l===c){g.b7(new U.jM(g,j,a),r)
n=!0}else if(n)g.b7(new U.jN(g,l),r)
else if(k)if(f.a)g.b7(new U.jO(g),f.b)
else o.a+=" "
else g.b7(new U.jP(f,g,c,j,a,l,h),p)}},
nh:function(a,b){return this.e5(a,b,null)},
nf:function(a,b,c,d){var s=this
s.e8(C.b.B(a,0,b))
s.b7(new U.jG(s,a,b,c),d)
s.e8(C.b.B(a,c,a.length))},
ng:function(a,b,c){var s,r,q,p,o=this
t.eU.a(c)
s=o.b
r=b.a
if(r.gV(r).gaj()===r.gX().gaj()){o.fN()
r=o.r
r.a+=" "
o.e5(a,c,b)
if(c.length!==0)r.a+=" "
o.b7(new U.jH(o,a,b),s)
r.a+="\n"}else{q=a.b
if(r.gV(r).gaj()===q){if(C.a.F(c,b))return
B.tO(c,b,t.C)
o.fN()
r=o.r
r.a+=" "
o.e5(a,c,b)
o.b7(new U.jI(o,a,b),s)
r.a+="\n"}else if(r.gX().gaj()===q){p=r.gX().gar()===a.a.length
if(p&&!0){B.ph(c,b,t.C)
return}o.fN()
r=o.r
r.a+=" "
o.e5(a,c,b)
o.b7(new U.jJ(o,p,a,b),s)
r.a+="\n"
B.ph(c,b,t.C)}}},
jd:function(a,b,c){var s=c?0:1,r=this.r
s=r.a+=C.b.A("\u2500",1+b+this.fB(C.b.B(a.a,0,b+s))*3)
r.a=s+"^"},
ne:function(a,b){return this.jd(a,b,!0)},
e8:function(a){var s,r,q,p
for(s=new H.a8(a),r=t.E,s=new H.M(s,s.gm(s),r.h("M<w.E>")),q=this.r,r=r.h("w.E");s.n();){p=r.a(s.d)
if(p===9)q.a+=C.b.A(" ",4)
else q.a+=H.bb(p)}},
e7:function(a,b,c){var s={}
s.a=c
if(b!=null)s.a=C.d.l(b+1)
this.b7(new U.jQ(s,this,a),"\x1b[34m")},
e6:function(a){return this.e7(a,null,null)},
nj:function(a){return this.e7(null,null,a)},
ni:function(a){return this.e7(null,a,null)},
fN:function(){return this.e7(null,null,null)},
fB:function(a){var s,r,q
for(s=new H.a8(a),r=t.E,s=new H.M(s,s.gm(s),r.h("M<w.E>")),r=r.h("w.E"),q=0;s.n();)if(r.a(s.d)===9)++q
return q},
mW:function(a){var s,r,q
for(s=new H.a8(a),r=t.E,s=new H.M(s,s.gm(s),r.h("M<w.E>")),r=r.h("w.E");s.n();){q=r.a(s.d)
if(q!==32&&q!==9)return!1}return!0},
b7:function(a,b){var s
t.M.a(a)
s=this.b!=null
if(s&&b!=null)this.r.a+=b
a.$0()
if(s&&b!=null)this.r.a+="\x1b[0m"}}
U.jR.prototype={
$0:function(){return this.a},
$S:76}
U.jz.prototype={
$1:function(a){var s=t.nR.a(a).d,r=H.x(s)
r=new H.an(s,r.h("E(1)").a(new U.jy()),r.h("an<1>"))
return r.gm(r)},
$S:77}
U.jy.prototype={
$1:function(a){var s=t.C.a(a).a
return s.gV(s).gaj()!==s.gX().gaj()},
$S:11}
U.jA.prototype={
$1:function(a){return t.nR.a(a).c},
$S:79}
U.jC.prototype={
$1:function(a){return t.C.a(a).a.ga1()},
$S:80}
U.jD.prototype={
$2:function(a,b){var s=t.C
return s.a(a).a.aE(0,s.a(b).a)},
$S:81}
U.jE.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.eW.a(a)
s=H.a([],t.dg)
for(r=J.aR(a),q=r.gH(a),p=t.pg;q.n();){o=q.gu().a
n=o.gb1()
m=B.m0(n,o.ga_(o),o.gV(o).gar())
m.toString
m=C.b.cd("\n",C.b.B(n,0,m))
l=m.gm(m)
k=o.ga1()
j=o.gV(o).gaj()-l
for(o=n.split("\n"),m=o.length,i=0;i<m;++i){h=o[i]
if(s.length===0||j>C.a.gt(s).b)C.a.q(s,new U.bf(h,j,k,H.a([],p)));++j}}g=H.a([],p)
for(q=s.length,p=t.aP,f=0,i=0;i<s.length;s.length===q||(0,H.e)(s),++i){h=s[i]
o=p.a(new U.jB(h))
if(!!g.fixed$length)H.c(P.T("removeWhere"))
C.a.fK(g,o,!0)
e=g.length
for(o=r.bd(a,f),o=o.gH(o);o.n();){m=o.gu()
d=m.a
if(d.gV(d).gaj()>h.b)break
if(!J.S(d.ga1(),h.c))break
C.a.q(g,m)}f+=g.length-e
C.a.R(h.d,g)}return s},
$S:82}
U.jB.prototype={
$1:function(a){var s=t.C.a(a).a,r=this.a
return!J.S(s.ga1(),r.c)||s.gX().gaj()<r.b},
$S:11}
U.jS.prototype={
$1:function(a){t.C.a(a)
return!0},
$S:11}
U.jF.prototype={
$0:function(){this.a.r.a+=C.b.A("\u2500",2)+">"
return null},
$S:1}
U.jM.prototype={
$0:function(){var s=this.b===this.c.b?"\u250c":"\u2514"
this.a.r.a+=s},
$S:1}
U.jN.prototype={
$0:function(){var s=this.b==null?"\u2500":"\u253c"
this.a.r.a+=s},
$S:1}
U.jO.prototype={
$0:function(){this.a.r.a+="\u2500"
return null},
$S:1}
U.jP.prototype={
$0:function(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.b7(new U.jK(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gX().gar()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.b7(new U.jL(r,o),p.b)}}},
$S:1}
U.jK.prototype={
$0:function(){var s=this.a.a?"\u252c":"\u250c"
this.b.r.a+=s},
$S:1}
U.jL.prototype={
$0:function(){this.a.r.a+=this.b},
$S:1}
U.jG.prototype={
$0:function(){var s=this
return s.a.e8(C.b.B(s.b,s.c,s.d))},
$S:1}
U.jH.prototype={
$0:function(){var s,r,q=this.a,p=this.c.a,o=p.gV(p).gar(),n=p.gX().gar()
p=this.b.a
s=q.fB(C.b.B(p,0,o))
r=q.fB(C.b.B(p,o,n))
o+=s*3
q=q.r
q.a+=C.b.A(" ",o)
q.a+=C.b.A("^",Math.max(n+(s+r)*3-o,1))},
$S:1}
U.jI.prototype={
$0:function(){var s=this.c.a
return this.a.ne(this.b,s.gV(s).gar())},
$S:1}
U.jJ.prototype={
$0:function(){var s=this,r=s.a
if(s.b)r.r.a+=C.b.A("\u2500",3)
else r.jd(s.c,Math.max(s.d.a.gX().gar()-1,0),!1)},
$S:1}
U.jQ.prototype={
$0:function(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=r.a+=C.b.pw(q,s.d)
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:1}
U.aD.prototype={
l:function(a){var s=""+"primary ",r=this.a
r=s+(""+r.gV(r).gaj()+":"+r.gV(r).gar()+"-"+r.gX().gaj()+":"+r.gX().gar())
return r.charCodeAt(0)==0?r:r}}
U.lr.prototype={
$0:function(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&B.m0(o.gb1(),o.ga_(o),o.gV(o).gar())!=null)){s=o.gV(o)
s=V.hM(s.gaB(s),0,0,o.ga1())
r=o.gX()
r=r.gaB(r)
q=o.ga1()
p=B.to(o.ga_(o),10)
o=X.kA(s,V.hM(r,U.oa(o.ga_(o)),p,q),o.ga_(o),o.ga_(o))}return U.rb(U.rd(U.rc(o)))},
$S:83}
U.bf.prototype={
l:function(a){return""+this.b+': "'+this.a+'" ('+C.a.aG(this.d,", ")+")"}}
V.bz.prototype={
h6:function(a){var s=this.a
if(!J.S(s,a.ga1()))throw H.d(P.ab('Source URLs "'+H.m(s)+'" and "'+H.m(a.ga1())+"\" don't match."))
return Math.abs(this.b-a.gaB(a))},
aE:function(a,b){var s
t.hq.a(b)
s=this.a
if(!J.S(s,b.ga1()))throw H.d(P.ab('Source URLs "'+H.m(s)+'" and "'+H.m(b.ga1())+"\" don't match."))
return this.b-b.gaB(b)},
Y:function(a,b){if(b==null)return!1
return t.hq.b(b)&&J.S(this.a,b.ga1())&&this.b===b.gaB(b)},
gJ:function(a){var s=this.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l:function(a){var s=this,r="<"+H.m3(s).l(0)+": "+s.b+" ",q=s.a
return r+(H.m(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iag:1,
ga1:function(){return this.a},
gaB:function(a){return this.b},
gaj:function(){return this.c},
gar:function(){return this.d}}
D.hN.prototype={
h6:function(a){if(!J.S(this.a.a,a.ga1()))throw H.d(P.ab('Source URLs "'+H.m(this.ga1())+'" and "'+H.m(a.ga1())+"\" don't match."))
return Math.abs(this.b-a.gaB(a))},
aE:function(a,b){t.hq.a(b)
if(!J.S(this.a.a,b.ga1()))throw H.d(P.ab('Source URLs "'+H.m(this.ga1())+'" and "'+H.m(b.ga1())+"\" don't match."))
return this.b-b.gaB(b)},
Y:function(a,b){if(b==null)return!1
return t.hq.b(b)&&J.S(this.a.a,b.ga1())&&this.b===b.gaB(b)},
gJ:function(a){var s=this.a.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l:function(a){var s=this.b,r="<"+H.m3(this).l(0)+": "+s+" ",q=this.a,p=q.a
return r+(H.m(p==null?"unknown source":p)+":"+(q.cW(s)+1)+":"+(q.aQ(s)+1))+">"},
$iag:1,
$ibz:1}
V.hO.prototype={
mr:function(a,b,c){var s,r=this.b,q=this.a
if(!J.S(r.ga1(),q.ga1()))throw H.d(P.ab('Source URLs "'+H.m(q.ga1())+'" and  "'+H.m(r.ga1())+"\" don't match."))
else if(r.gaB(r)<q.gaB(q))throw H.d(P.ab("End "+r.l(0)+" must come after start "+q.l(0)+"."))
else{s=this.c
if(s.length!==q.h6(r))throw H.d(P.ab('Text "'+s+'" must be '+q.h6(r)+" characters long."))}},
gV:function(a){return this.a},
gX:function(){return this.b},
ga_:function(a){return this.c}}
Y.ds.prototype={
ga1:function(){return this.gV(this).ga1()},
gm:function(a){var s,r=this.gX()
r=r.gaB(r)
s=this.gV(this)
return r-s.gaB(s)},
aE:function(a,b){var s
t.hs.a(b)
s=this.gV(this).aE(0,b.gV(b))
return s===0?this.gX().aE(0,b.gX()):s},
kk:function(a,b,c){var s,r,q=this,p=""+("line "+(q.gV(q).gaj()+1)+", column "+(q.gV(q).gar()+1))
if(q.ga1()!=null){s=q.ga1()
s=p+(" of "+$.nh().kq(s))
p=s}p+=": "+b
r=q.p7(c)
if(r.length!==0)p=p+"\n"+r
return p.charCodeAt(0)==0?p:p},
p7:function(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return U.q7(s,a).p6()},
Y:function(a,b){if(b==null)return!1
return t.hs.b(b)&&this.gV(this).Y(0,b.gV(b))&&this.gX().Y(0,b.gX())},
gJ:function(a){var s,r=this.gV(this)
r=r.gJ(r)
s=this.gX()
return r+31*s.gJ(s)},
l:function(a){var s=this
return"<"+H.m3(s).l(0)+": from "+s.gV(s).l(0)+" to "+s.gX().l(0)+' "'+s.ga_(s)+'">'},
$iag:1,
$ibo:1}
X.bP.prototype={
gb1:function(){return this.d}}
S.B.prototype={
l:function(a){return"["+H.m(this.a)+", "+H.m(this.b)+"]"},
Y:function(a,b){if(b==null)return!1
return b instanceof S.B&&J.S(b.a,this.a)&&J.S(b.b,this.b)},
gJ:function(a){var s=J.cx(this.a),r=J.cx(this.b)
return A.mW(A.cr(A.cr(0,C.d.gJ(s)),C.d.gJ(r)))}}
S.cj.prototype={
l:function(a){return"["+this.a.l(0)+", "+H.m(this.b)+", "+H.m(this.c)+"]"},
Y:function(a,b){if(b==null)return!1
return b instanceof S.cj&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gJ:function(a){var s=H.bO(this.a),r=C.f.gJ(this.b),q=C.f.gJ(this.c)
return A.mW(A.cr(A.cr(A.cr(0,C.d.gJ(s)),C.d.gJ(r)),C.d.gJ(q)))}}
S.du.prototype={
aw:function(a){var s=this
return P.en([s.a,s.b,s.c,s.d],!1,t.z)},
l:function(a){var s=this
return"["+s.a.l(0)+", "+s.b.l(0)+", "+s.c.l(0)+", "+s.d.l(0)+"]"},
Y:function(a,b){var s=this
if(b==null)return!1
return b instanceof S.du&&b.a.Y(0,s.a)&&b.b.Y(0,s.b)&&b.c.Y(0,s.c)&&b.d.Y(0,s.d)},
gJ:function(a){var s=this,r=H.bO(s.a),q=H.bO(s.b),p=H.bO(s.c),o=H.bO(s.d)
return A.mW(A.cr(A.cr(A.cr(A.cr(0,C.d.gJ(r)),C.d.gJ(q)),C.d.gJ(p)),C.d.gJ(o)))}}
Q.e8.prototype={
gdG:function(){var s=this.y
return s==null?H.c(H.f("timeAxes")):s},
gcm:function(){var s=this.z
return s==null?H.c(H.f("frequencyAxes")):s},
gcJ:function(){var s=this.Q
return s==null?H.c(H.f("circlePlane")):s},
gjx:function(){var s=this.cy
return s==null?H.c(H.f("centerOfMass")):s},
gcl:function(){var s=this.db
return s==null?H.c(H.f("fourierDot")):s},
gdr:function(){var s=this.dx
return s==null?H.c(H.f("fourierGraph")):s},
gcs:function(){var s=this.dy
return s==null?H.c(H.f("wave")):s},
gdC:function(){var s=this.fr
return s==null?H.c(H.f("polarized")):s},
geK:function(){var s=this.fx
return s==null?H.c(H.f("partialFourierGraph")):s},
bp:function(){var s=0,r=P.bF(t.z),q=this,p,o,n,m,l,k
var $async$bp=P.bG(function(a,b){if(a===1)return P.bC(b,r)
while(true)switch(s){case 0:s=2
return P.ao(q.dc(),$async$bp)
case 2:q.fy=5
s=3
return P.ao(q.da(),$async$bp)
case 3:p=M.ns(M.cY(C.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),C.e,M.cY(null,null,null,null,null,null,null,null,null,null,null,null,B.D(6,1,1),null,null,null,null,null,null,1),5,0,M.cY(null,null,null,null,null,null,C.z,null,null,null,null,null,null,null,null,0.5,null,null,null,1.4),1,-1)
p.b0(C.R)
q.z=p
p=q.gcm()
p.aD(q.gcJ().ay(C.e.K(0,C.j)).L(0,p.ay(C.e.L(0,C.j))).K(0,C.j.A(0,0.5)).A(0,C.aE))
p=q.gcm()
o=p.hr(1)
n=p.hr(0)
m=H.a([C.A,C.M,C.y,C.N],t.l)
l=new D.eL(0.25,p,4,0,!1,0.01,!1,0.000001,4,null,null,null,C.c,null,null,null,null,null)
l.am(C.c,null,null)
l.dU(m,C.c)
l.fq(C.c,o+0.5,n+0.5)
l.pt(p)
l.fh(C.c)
l.cv(C.k)
l.fh(C.R)
q.cx=l
q.gcm()
l=L.e6(q.gcm())
p=q.cx
p=t.cG.a(H.a([l,L.e6(p==null?H.c(H.f("frequencyBox")):p)],t.lq))
o=new Y.d4(C.c,null,null,null,null,null)
o.am(C.c,null,null)
n=t.a
o.aN(n.a(C.bm))
o=new L.fE(p,0,M.pg(),0,o)
o.f=o.bb()
o.mm(p,null,0,M.pg(),0)
s=4
return P.ao(q.b3(0,o),$async$bp)
case 4:q.dx=q.kV(q.gcs())
s=5
return P.ao(q.d8(),$async$bp)
case 5:s=6
return P.ao(q.d_(),$async$bp)
case 6:s=7
return P.ao(q.e9(),$async$bp)
case 7:q.gcl().pZ(q.gkb())
o=q.gcl()
k=new U.dZ(null,null,null,!1,o,C.c,null,null,null,null,null)
k.am(C.c,null,null)
k.mp(o)
k.ea(q.gox())
q.aN(n.a(H.a([k],t.r)))
s=8
return P.ao(q.ef(),$async$bp)
case 8:return P.bD(null,r)}})
return P.bE($async$bp,r)},
e9:function(){var s=0,r=P.bF(t.z),q=this,p
var $async$e9=P.bG(function(a,b){if(a===1)return P.bC(b,r)
while(true)switch(s){case 0:p=new Y.er(" ",C.q,C.a_,H.a([],t.s),"","align*",!0,2,null,"",!0,P.bn(t.N,t.h),4,0,!1,0.01,!1,0.000001,4,null,null,null,C.c,null,null,null,null,null)
p.am(C.c,null,null)
if(J.cz(p.gw(p)))p.ht()
p.a=C.c
p.ad="align*"
p.sqc(Y.qk(u.w,C.q,C.a_))
p.ac=C.a.aG(p.cj," ")
p.jK()
p.nY()
p.lE(C.a_)
p.fS(C.M,0.5)
p.dP(1.2)
s=2
return P.ao(q.b3(0,L.nU(p)),$async$e9)
case 2:return P.bD(null,r)}})
return P.bE($async$e9,r)},
d8:function(){var s=0,r=P.bF(t.z),q=this,p,o
var $async$d8=P.bG(function(a,b){if(a===1)return P.bC(b,r)
while(true)switch(s){case 0:o=K.r3(C.c)
o.cv(C.k)
p=q.gdr()
p.at("getEnd")
o.saL(t.y.a(H.a([J.aF(p.gw(p))],t.l)))
q.fx=o
o=V.nA(C.e)
o.b0(C.aa)
q.cy=o
o=q.gdr()
o.at("getEnd")
o=V.nA(J.aF(o.gw(o)))
o.b0(C.aa)
q.db=o
q.gjx().ea(new Q.jo(q))
s=2
return P.ao(q.b3(0,L.e6(q.gjx())),$async$d8)
case 2:s=3
return P.ao(q.b3(0,L.e6(q.gcl())),$async$d8)
case 3:q.gcl().ea(q.gkb())
return P.bD(null,r)}})
return P.bE($async$d8,r)},
p1:function(a,b){var s
t.j.a(a)
H.aP(b)
s=this.geK()
s.at("getStart")
a.c3(J.aE(s.gw(s)))
return a},
d_:function(){var s=0,r=P.bF(t.z),q=this,p,o
var $async$d_=P.bG(function(a,b){if(a===1)return P.bC(b,r)
while(true)switch(s){case 0:o=t.r
q.aN(H.a([q.gcl(),q.geK()],o))
q.geK().ea(new Q.jv(q))
s=2
return P.ao(q.b3(0,q.hQ(q.gcs(),q.gdC(),5,2,12)),$async$d_)
case 2:s=3
return P.ao(q.b3(0,q.hQ(q.gcs(),q.gdC(),2,0,10)),$async$d_)
case 3:p=t.a
q.kC(!0,p.a(H.a([q.geK()],o)))
q.aN(p.a(H.a([q.gdr()],o)))
return P.bD(null,r)}})
return P.bE($async$d_,r)},
dc:function(){var s=0,r=P.bF(t.z),q=this,p,o
var $async$dc=P.bG(function(a,b){if(a===1)return P.bC(b,r)
while(true)switch(s){case 0:p=t.n
o=M.cY(null,null,null,null,null,null,null,null,null,null,null,null,null,H.a([0,1,2,3,4],p),null,0.25,null,null,null,2)
p=M.cY(null,null,null,null,null,null,null,null,null,null,null,null,null,H.a([],p),null,null,null,null,null,0.5)
p=M.ns(M.cY(null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null),C.e,o,4.4,0,p,2.5,-1)
p.b0(C.S)
p.fS(C.A,0.5)
q.y=p
q.gdG()
q.dy=q.kT()
s=2
return P.ao(q.b3(0,L.e6(q.gdG())),$async$dc)
case 2:s=3
return P.ao(q.b3(0,L.nU(q.gcs())),$async$dc)
case 3:return P.bD(null,r)}})
return P.bE($async$dc,r)},
da:function(){var s=0,r=P.bF(t.z),q=this,p,o,n,m
var $async$da=P.bG(function(a,b){if(a===1)return P.bC(b,r)
while(true)switch(s){case 0:m=new M.ey(C.B.bO(C.P),C.n.bO(C.n),C.a4.bO(C.O),C.e0,null,1,1,1,null,null,C.e,C.B,C.n,C.n,-2.1,2.1,-2.1,2.1,4,0,!1,0.01,!1,0.000001,4,null,null,null,C.c,null,null,null,null,null)
m.am(C.c,null,null)
m.fs(null)
m.il(C.B,C.e,C.n,2.1,-2.1,C.n,2.1,-2.1)
m.ch=!0
m.p9()
m.fi(1)
m.dP(0.8)
m.fS(C.N,0.5)
q.Q=m
m=V.nx(C.e,C.c,1)
p=m.f1()
o=new K.dU(4,0,!1,0.01,!1,0.000001,4,null,null,null,p,null,null,null,null,null)
o.am(p,null,null)
o.mn(m,p,50,0.5)
o.fi(2)
o.dP(0.8)
o.aD(q.gcJ().eg(C.e))
q.ch=o
o=q.gcJ()
p=q.ch
o.aN(H.a([p==null?H.c(H.f("dashedCircle")):p],t.r))
q.gcJ()
n=q.f8(q.gcs(),q.fy)
q.fr=Y.mp(q.gcs())
s=2
return P.ao(q.b3(0,L.e6(q.gcJ())),$async$da)
case 2:s=3
return P.ao(q.b3(0,L.qW(q.gdC(),0,M.iL(),1,n)),$async$da)
case 3:return P.bD(null,r)}})
return P.bE($async$da,r)},
oy:function(a,b){var s,r,q,p,o=this
t.j.a(a)
H.aP(b)
s=o.gcm()
r=o.gcl()
q=Math.min(5,Math.max(s.hA(new M.h(r.f2(0,null),r.f2(1,null),r.f2(2,null))).a,0))
r=o.gdr().ac.$1(q)
p=o.gcm().eg(new M.h(q,r,0))
o.gcl().c3(p)
o.fy=q
o.gdC().js(o.f8(o.gcs(),q))
return a},
kV:function(a){return this.gcm().hR(new Q.jq(this,a),0.016666666666666666)},
kW:function(a,b){var s,r=b.hO(),q=new Q.jr(this),p=H.a([],t.hR)
for(s=J.I(r);s.n();)p.push(q.$2(s.gu(),a))
s=p.length
return J.bi(C.a.aZ(p,new Q.js()),new A.as(1/s,0))},
kT:function(){var s=t.f3.a(new Q.jp(1,0.9,C.b8))
s=this.gdG().hR(s,0.016666666666666666)
s.fh(C.b1)
s.cv(C.k)
return s},
f8:function(a,b){var s=Y.mp(a)
s.ce(new Q.ju(this,b))
return s},
hQ:function(a,b,c,d,e){var s=new L.eT(new Q.jt(this,c,d,a),e,M.iL(),0,b,t.oL)
s.f=s.bb()
return s}}
Q.jo.prototype={
$2:function(a,b){t.j.a(a)
H.aP(b)
a.c3(this.a.gdC().kS())
return a},
$S:4}
Q.jv.prototype={
$2:function(a,b){var s
t.j.a(a)
H.aP(b)
s=this.a
a.dB(s.gdr(),s.fy/5,1)
return a},
$S:4}
Q.jq.prototype={
$1:function(a){return this.a.kW(H.aP(a),this.b).a},
$S:6}
Q.jr.prototype={
$2:function(a,b){var s=this.a.gdG().hA(a)
return A.nz(-6.283185307179586*b*s.a).A(0,new A.as(s.b,0))},
$S:85}
Q.js.prototype={
$2:function(a,b){var s=t.ck
return s.a(a).K(0,s.a(b))},
$S:86}
Q.jp.prototype={
$1:function(a){var s,r,q,p
H.aP(a)
s=H.a([],t.g2)
for(r=this.c,q=6.283185307179586*a,p=0;p<1;++p)s.push(Math.cos(q*r[p]))
return this.a+this.b*B.iM(s,t.p)},
$S:6}
Q.ju.prototype={
$1:function(a){var s=this.a,r=s.gdG().hA(a),q=A.nz(-6.283185307179586*this.b*r.a).A(0,new A.as(r.b,0))
return s.gcJ().eg(new M.h(q.a,q.b,0))},
$S:3}
Q.jt.prototype={
$2:function(a,b){var s=this,r=s.a,q=H.aP(B.fo(s.b,s.c,b,t.z))
r.fy=q
a.js(r.f8(s.d,q))
return a},
$S:4};(function aliases(){var s=J.b3.prototype
s.ma=s.l
s=J.cL.prototype
s.mb=s.l
s=P.w.prototype
s.mc=s.dh
s=P.Q.prototype
s.ik=s.l
s=V.a9.prototype
s.mi=s.a6
s=F.aW.prototype
s.md=s.v
s.bV=s.q
s.ii=s.bK
s.me=s.R
s=L.aN.prototype
s.m7=s.df
s.m8=s.dg
s.m9=s.h5
s=Y.F.prototype
s.mf=s.cG
s.mh=s.cR
s.ij=s.c8
s.mg=s.dl
s.d2=s.bc
s.d1=s.b5
s=K.P.prototype
s.ml=s.c8
s=Z.dJ.prototype
s.m6=s.lO
s=Y.ds.prototype
s.mk=s.aE
s.mj=s.Y})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._static_1,o=hunkHelpers._static_0,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0u,k=hunkHelpers._instance_2u
s(J,"rV","qd",22)
r(J.A.prototype,"gnn","q",38)
q(J.bL.prototype,"gig",1,1,null,["$2","$1"],["al","a2"],69,0)
p(P,"tf","r7",14)
p(P,"tg","r8",14)
p(P,"th","r9",14)
o(P,"oQ","t9",1)
s(P,"tj","qh",22)
p(P,"tn","r_",28)
n(P,"tL",2,null,["$1$2","$2"],["pb",function(a,b){return P.pb(a,b,t.p)}],89,0)
n(P,"p9",2,null,["$1$2","$2"],["pa",function(a,b){return P.pa(a,b,t.p)}],90,0)
p(A,"oS","a6",10)
p(A,"tl","mf",10)
p(A,"tm","p7",10)
p(A,"bR","pR",91)
m(B.eE.prototype,"gkJ","kK",39)
var j
l(j=Y.ea.prototype,"gD","om",0)
l(j,"goE","oF",0)
l(j,"gcS","pV",0)
l(j,"go2","o3",0)
l(j,"geQ","pO",0)
l(j,"gbT","ly",0)
l(j,"gpA","pB",0)
l(j,"gq9","qa",0)
l(j,"go5","o6",0)
l(j,"gkE","q8",0)
l(j,"gpT","pU",0)
l(j,"gpR","pS",0)
l(j,"gpP","pQ",0)
l(j,"gpM","pN",0)
l(j,"gpK","pL",0)
l(j,"gpI","pJ",0)
l(j,"glw","lx",0)
l(j,"glh","li",0)
l(j,"glf","lg",0)
l(j,"gll","lm",0)
l(j,"glj","lk",0)
l(j,"gbl","lv",0)
l(j,"glo","lp",0)
l(j,"gi0","ln",0)
l(j,"gfc","lu",0)
l(j,"gls","lt",0)
l(j,"glq","lr",0)
l(j,"gl7","l8",0)
l(j,"gbS","le",0)
l(j,"glb","lc",0)
l(j,"gl9","la",0)
l(j,"gfb","ld",0)
l(j,"gl5","l6",0)
l(j,"gbG","nN",0)
l(j,"gbZ","nG",0)
l(j,"gns","nt",0)
l(j,"gjt","nO",0)
l(j,"gnH","nI",0)
l(j,"gnJ","nK",0)
l(j,"gec","nL",0)
l(j,"gji","nu",0)
l(j,"gbC","lz",0)
l(j,"gfX","nW",0)
l(j,"gpo","pp",0)
l(j,"goe","of",0)
l(j,"goc","od",0)
l(j,"gc_","og",0)
l(j,"gjC","oa",0)
l(j,"gjD","ob",0)
l(j,"go8","o9",0)
l(j,"got","ou",0)
l(j,"gju","nP",0)
l(j,"gh7","oo",0)
l(j,"gnv","nw",0)
l(j,"gny","nz",0)
l(j,"gfU","nQ",0)
l(j,"gop","oq",0)
l(j,"gor","os",0)
l(j,"gjj","nx",0)
l(j,"gnS","nT",0)
l(j,"gnB","nC",0)
l(j,"gfV","nR",0)
l(j,"gh8","ov",0)
l(j,"gh9","ow",0)
l(j,"gjk","nA",0)
l(j,"gcI","nX",0)
l(j,"go_","o0",0)
l(Y.F.prototype,"gkY","bb",7)
k(j=Q.e8.prototype,"gkb","p1",4)
k(j,"gox","oy",4)
n(U,"pe",3,null,["$3"],["tR"],92,0)
n(M,"pg",1,null,["$3$inflection$pauseRatio","$1"],["p8",function(a){return M.p8(a,null,null)}],18,0)
n(M,"iL",1,null,["$3$inflection$pauseRatio","$1"],["pj",function(a){return M.pj(a,null,null)}],18,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.Q,null)
q(P.Q,[H.ms,J.b3,J.aB,P.k,H.dS,H.b9,P.a3,P.f1,H.M,P.U,H.e5,H.e2,H.cT,H.bl,H.bB,H.d1,H.kJ,H.hn,H.e3,H.f6,P.dd,H.k4,H.ek,H.cK,H.dA,H.dx,H.dt,H.ix,H.bx,H.iq,H.iz,P.ly,P.i9,P.dz,P.co,P.dN,P.ib,P.cU,P.au,P.ia,P.eJ,P.eK,P.hQ,P.iv,P.fe,P.fg,P.ir,P.cV,P.w,P.f2,P.aY,P.f5,P.iD,P.cE,P.lB,P.hr,P.eI,P.io,P.e7,P.ep,P.aq,P.iy,P.hB,P.a5,P.cq,P.kL,P.br,W.mn,P.it,P.cO,A.f0,G.lv,G.bp,G.kH,F.df,F.es,F.k8,L.kp,B.V,B.i5,B.aG,B.is,B.lu,B.ii,B.ak,V.jU,V.a9,V.aX,A.kr,K.jl,K.jc,V.jT,T.b7,T.eM,Y.ea,D.kI,B.p,L.aN,T.j7,L.dI,Y.F,M.aJ,K.ck,V.hV,K.eD,Z.dJ,A.hE,V.N,A.as,Y.bk,Y.b1,Y.jm,Y.aK,Y.et,S.bu,M.h,M.jd,O.kF,X.km,X.hu,Y.hL,D.hN,Y.ds,U.jx,U.aD,U.bf,V.bz,S.B,S.cj,S.du])
q(J.b3,[J.hc,J.d9,J.cL,J.A,J.cc,J.bL,H.hj,W.aV,W.dR,W.jh,W.dX,W.u,W.ht])
q(J.cL,[J.hw,J.bQ,J.bM])
r(J.k2,J.A)
q(J.cc,[J.d8,J.ei])
q(P.k,[H.cm,H.O,H.cM,H.an,H.e4,H.bZ,H.ar,H.eW,P.eh,H.iw,P.hC])
q(H.cm,[H.cD,H.ff])
r(H.eY,H.cD)
r(H.eV,H.ff)
q(H.b9,[H.lb,H.mh,H.ha,H.hR,H.k3,H.m8,H.m9,H.ma,P.l8,P.l7,P.l9,P.la,P.lz,P.lE,P.lF,P.lQ,P.le,P.lm,P.li,P.lj,P.lk,P.lg,P.ll,P.lf,P.lp,P.lq,P.lo,P.ln,P.kB,P.kC,P.lO,P.lw,P.lx,P.k5,P.k6,P.kQ,P.kP,P.kM,P.kN,P.kO,P.lI,P.lJ,P.lK,W.l6,W.ld,A.k0,B.jn,V.ko,V.kn,V.jY,V.jX,V.jZ,B.ky,B.kz,B.kx,B.kw,Y.lZ,Y.lY,Y.jV,Y.jW,B.m1,T.j8,T.j9,Z.iQ,Z.iR,Z.iS,M.kj,M.kk,M.jg,M.j5,Y.kl,Y.jw,K.ks,K.ku,K.kt,Y.k7,U.ji,U.jj,U.jk,Y.kh,Y.kg,Y.kf,Y.ke,Y.ki,Y.k9,Y.ka,Y.kc,Y.kb,Y.kd,K.a0,K.a1,K.a2,K.l1,K.l2,K.kV,K.kW,K.kZ,K.kY,K.kR,K.kX,K.kU,K.kS,K.kT,K.l0,K.l_,F.ja,A.kv,B.ml,B.mk,B.mm,B.mc,B.md,B.me,B.lS,B.lR,B.m6,B.m4,B.m5,B.lW,B.m_,V.lH,O.kE,F.lU,F.lV,S.iZ,S.j1,S.j0,S.j_,S.iY,S.iX,S.iW,S.j2,S.iV,S.iU,S.mj,M.l4,M.l5,M.l3,M.je,M.jf,M.lP,U.jR,U.jz,U.jy,U.jA,U.jC,U.jD,U.jE,U.jB,U.jS,U.jF,U.jM,U.jN,U.jO,U.jP,U.jK,U.jL,U.jG,U.jH,U.jI,U.jJ,U.jQ,U.lr,Q.jo,Q.jv,Q.jq,Q.jr,Q.js,Q.jp,Q.ju,Q.jt])
r(H.aU,H.eV)
q(P.a3,[H.db,P.hX,H.hd,H.hZ,H.hD,P.dM,H.im,P.hm,P.bJ,P.i_,P.eS,P.ch,P.fR,P.fT])
r(P.el,P.f1)
q(P.el,[H.dv,F.aW])
r(H.a8,H.dv)
q(H.O,[H.C,H.e1,H.ej])
q(H.C,[H.aC,H.J,H.W,P.em])
r(H.e_,H.cM)
q(P.U,[H.eq,H.cS,H.eH])
r(H.d3,H.bZ)
q(H.d1,[H.v,H.c9])
r(H.cb,H.ha)
r(H.ex,P.hX)
q(H.hR,[H.hP,H.cZ])
r(H.i8,P.dM)
r(P.eo,P.dd)
r(H.bw,P.eo)
q(P.eh,[H.i7,P.f8,A.ai,B.ip])
r(H.dg,H.hj)
r(H.f3,H.dg)
r(H.f4,H.f3)
r(H.ev,H.f4)
q(H.ev,[H.hi,H.ew,H.cN])
r(H.f9,H.im)
r(P.f7,P.ib)
r(P.iu,P.fe)
r(P.dB,P.fg)
q(P.dB,[P.c4,P.fh])
r(P.eF,P.f5)
r(P.fc,P.fh)
q(P.cE,[P.fW,P.fK])
q(P.fW,[P.fH,P.i1])
r(P.cF,P.hQ)
q(P.cF,[P.iA,P.fL,P.i2])
r(P.fI,P.iA)
q(P.bJ,[P.dm,P.h8])
r(P.id,P.cq)
q(W.aV,[W.b5,W.dw])
q(W.b5,[W.t,W.bK])
r(W.y,W.t)
q(W.y,[W.fC,W.fF,W.cC,W.h0,W.hF])
r(W.bA,W.u)
r(W.ba,W.bA)
r(W.eX,W.dX)
r(W.eZ,P.eJ)
r(W.ij,W.eZ)
r(W.f_,P.eK)
r(G.h4,G.bp)
r(G.kG,G.kH)
q(B.V,[B.ca,B.cl,B.hT,B.hk,B.hG,B.ce,B.eG,B.aZ,B.dr,B.ap])
q(B.aZ,[B.cG,B.hh,B.fJ,B.h3,B.fQ,B.dk,B.dl,B.hl])
r(B.eA,B.dk)
r(B.hy,B.dl)
q(B.ap,[B.hq,B.hp,B.aj])
q(B.aj,[B.ho,B.bq,B.hv,B.fV,B.fY,B.h1])
q(B.bq,[B.he,B.fD,B.hU,B.h2,B.hA,B.fP,B.hz,B.i4])
q(B.ak,[B.ie,B.dW,B.c0,B.ik,B.dT])
r(B.ig,B.ie)
r(B.ih,B.ig)
r(B.d2,B.ih)
r(B.il,B.ik)
r(B.R,B.il)
q(F.aW,[B.al,D.fw])
r(B.h_,B.ip)
q(V.a9,[V.bv,V.fM,V.dP,V.h6,V.fB,V.d5,V.hS,V.eg,V.d7,V.eb,V.ec,V.cI,V.ee,V.d6,V.ef,V.h7,V.h5,V.fz,V.ed,V.fA,V.fx,V.fy])
r(Z.ic,P.eF)
r(Z.fU,Z.ic)
r(B.eE,B.i5)
q(T.b7,[T.c_,T.bd,T.dV])
q(T.c_,[T.cg,T.L])
q(T.bd,[T.n,T.G,T.cQ,T.d0])
q(L.aN,[L.fE,L.hI,L.eQ,L.eT])
r(L.hH,L.hI)
r(L.fZ,L.eQ)
r(Z.fv,L.dI)
r(Z.fN,Z.fv)
q(Y.F,[K.P,U.hb,Y.d4])
q(K.P,[V.eP,K.c3,Y.di,V.ez,K.cd,K.dq,K.eU,K.dU])
q(V.eP,[V.ax,V.dK])
r(M.dh,V.ax)
r(M.fS,K.c3)
r(M.cB,M.fS)
r(M.ey,M.cB)
r(Y.e9,Y.di)
r(V.eO,K.ck)
q(V.dK,[V.cA,V.d_])
q(V.d_,[V.dY,V.e0])
q(V.ez,[V.eB,V.dp])
r(V.eR,V.eB)
r(V.dL,V.eR)
q(V.dp,[V.eC,D.eL])
r(Y.eN,K.dq)
r(Y.bY,K.cd)
r(Y.er,Y.bY)
r(U.dZ,U.hb)
r(F.fO,Z.dJ)
r(Y.hg,Y.b1)
q(Y.hg,[Y.eu,Y.bW,Y.bX,Y.bV])
r(B.cJ,O.kF)
q(B.cJ,[E.hx,F.i0,L.i6])
r(Y.b2,D.hN)
q(Y.ds,[Y.at,V.hO])
r(X.bP,V.hO)
r(Q.e8,A.hE)
s(H.dv,H.bB)
s(H.ff,P.w)
s(H.f3,P.w)
s(H.f4,H.bl)
s(P.f1,P.w)
s(P.f5,P.aY)
s(P.fg,P.aY)
s(P.fh,P.iD)
s(B.ie,B.is)
s(B.ig,B.lu)
s(B.ih,B.ii)
s(B.ik,B.is)
s(B.il,B.ii)
s(B.ip,P.w)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",q:"double",a7:"num",o:"String",E:"bool",aq:"Null",l:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["E()","~()","q(q,B<j,j>)","h(h)","F(F,q)","E(j,h)","q(q)","o()","E(o)","N(N)","E(o?)","E(aD)","E(j)","j(j,j)","~(~())","E(F)","~(ba)","l<q>(N)","q(q{inflection:q?,pauseRatio:q?})","@()","aq()","q(h)","j(@,@)","h(h,h)","~(cR,o,j)","aq(@)","~(@,@)","~(Q,o)","o(o)","h(q)","ax(ax)","E(ak)","@(@)","b4<o,l<o>>()","l<o>()","@(@,o)","l<F>(F)","E(h)","~(Q?)","E(ce)","@(o)","aJ(aJ,aJ)","E(q)","o(bd)","E(Q)","bm<aq>()","~(R)","E(o,o)","E(bV)","E(bW)","E(bX)","~(u)","~(a7)","cR(@,@)","~(o[@])","aq(~())","~(o,j)","l<h>(l<l<h>>,@)","l<N>(o,P)","~(o,P,l<N>)","l<N>(l<N>)","~(Q?,Q?)","~(l<F>,by<F>)","q(j)","au<@>(@)","N(l<q>)","~(q,j{end:j?,start:j,step:j})","l<q>(l<q>)","q(o)","E(dj[j])","l<q>(B<j,l<q>>)","q(B<j,q>)","q(l<q>)","~(@)","bu(bu,bu)","o(o?)","o?()","j(bf)","E(N)","c2?(bf)","c2?(aD)","j(aD,aD)","l<bf>(l<aD>)","bP()","aq(@,cf)","as(h,q)","as(as,as)","aq(Q,cf)","~(j,@)","0^(0^,0^)<a7>","0^(0^,0^)<a7>","j(j)","l<h>(l<h>,l<h>,q)","o(cP)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.rs(v.typeUniverse,JSON.parse('{"hw":"cL","bQ":"cL","bM":"cL","u_":"u","u6":"u","tZ":"t","u7":"t","ui":"t","u0":"y","ub":"y","u8":"b5","u4":"b5","uc":"ba","u2":"bA","u1":"bK","uj":"bK","hc":{"E":[]},"d9":{"aq":[]},"A":{"l":["1"],"O":["1"],"k":["1"]},"k2":{"A":["1"],"l":["1"],"O":["1"],"k":["1"]},"aB":{"U":["1"]},"cc":{"q":[],"a7":[],"ag":["a7"]},"d8":{"q":[],"j":[],"a7":[],"ag":["a7"]},"ei":{"q":[],"a7":[],"ag":["a7"]},"bL":{"o":[],"ag":["o"],"dj":[]},"O":{"k":["1"]},"cm":{"k":["2"]},"dS":{"U":["2"]},"cD":{"cm":["1","2"],"k":["2"],"k.E":"2"},"eY":{"cD":["1","2"],"cm":["1","2"],"O":["2"],"k":["2"],"k.E":"2"},"eV":{"w":["2"],"l":["2"],"cm":["1","2"],"O":["2"],"k":["2"]},"aU":{"eV":["1","2"],"w":["2"],"l":["2"],"cm":["1","2"],"O":["2"],"k":["2"],"w.E":"2","k.E":"2"},"db":{"a3":[]},"a8":{"w":["j"],"bB":["j"],"l":["j"],"O":["j"],"k":["j"],"w.E":"j","bB.E":"j"},"C":{"O":["1"],"k":["1"]},"aC":{"C":["1"],"O":["1"],"k":["1"],"C.E":"1","k.E":"1"},"M":{"U":["1"]},"cM":{"k":["2"],"k.E":"2"},"e_":{"cM":["1","2"],"O":["2"],"k":["2"],"k.E":"2"},"eq":{"U":["2"]},"J":{"C":["2"],"O":["2"],"k":["2"],"C.E":"2","k.E":"2"},"an":{"k":["1"],"k.E":"1"},"cS":{"U":["1"]},"e4":{"k":["2"],"k.E":"2"},"e5":{"U":["2"]},"bZ":{"k":["1"],"k.E":"1"},"d3":{"bZ":["1"],"O":["1"],"k":["1"],"k.E":"1"},"eH":{"U":["1"]},"e1":{"O":["1"],"k":["1"],"k.E":"1"},"e2":{"U":["1"]},"ar":{"k":["1"],"k.E":"1"},"cT":{"U":["1"]},"dv":{"w":["1"],"bB":["1"],"l":["1"],"O":["1"],"k":["1"]},"W":{"C":["1"],"O":["1"],"k":["1"],"C.E":"1","k.E":"1"},"d1":{"b4":["1","2"]},"v":{"d1":["1","2"],"b4":["1","2"]},"eW":{"k":["1"],"k.E":"1"},"c9":{"d1":["1","2"],"b4":["1","2"]},"ha":{"b9":[],"cH":[]},"cb":{"b9":[],"cH":[]},"ex":{"a3":[]},"hd":{"a3":[]},"hZ":{"a3":[]},"hn":{"bU":[]},"f6":{"cf":[]},"b9":{"cH":[]},"hR":{"b9":[],"cH":[]},"hP":{"b9":[],"cH":[]},"cZ":{"b9":[],"cH":[]},"hD":{"a3":[]},"i8":{"a3":[]},"bw":{"dd":["1","2"],"mv":["1","2"],"b4":["1","2"]},"ej":{"O":["1"],"k":["1"],"k.E":"1"},"ek":{"U":["1"]},"cK":{"dj":[]},"dA":{"cP":[],"de":[]},"i7":{"k":["cP"],"k.E":"cP"},"dx":{"U":["cP"]},"dt":{"de":[]},"iw":{"k":["de"],"k.E":"de"},"ix":{"U":["de"]},"dg":{"da":["1"]},"ev":{"w":["j"],"da":["j"],"l":["j"],"O":["j"],"k":["j"],"bl":["j"]},"hi":{"w":["j"],"da":["j"],"l":["j"],"O":["j"],"k":["j"],"bl":["j"],"w.E":"j","bl.E":"j"},"ew":{"w":["j"],"qY":[],"da":["j"],"l":["j"],"O":["j"],"k":["j"],"bl":["j"],"w.E":"j","bl.E":"j"},"cN":{"w":["j"],"cR":[],"da":["j"],"l":["j"],"O":["j"],"k":["j"],"bl":["j"],"w.E":"j","bl.E":"j"},"im":{"a3":[]},"f9":{"a3":[]},"au":{"bm":["1"]},"co":{"U":["1"]},"f8":{"k":["1"],"k.E":"1"},"dN":{"a3":[]},"f7":{"ib":["1"]},"fe":{"o8":[]},"iu":{"fe":[],"o8":[]},"c4":{"dB":["1"],"aY":["1"],"by":["1"],"O":["1"],"k":["1"],"aY.E":"1"},"cV":{"U":["1"]},"eh":{"k":["1"]},"el":{"w":["1"],"l":["1"],"O":["1"],"k":["1"]},"eo":{"dd":["1","2"],"b4":["1","2"]},"dd":{"b4":["1","2"]},"em":{"C":["1"],"nO":["1"],"O":["1"],"k":["1"],"C.E":"1","k.E":"1"},"f2":{"U":["1"]},"eF":{"aY":["1"],"by":["1"],"O":["1"],"k":["1"]},"dB":{"aY":["1"],"by":["1"],"O":["1"],"k":["1"]},"fc":{"dB":["1"],"aY":["1"],"iD":["1"],"by":["1"],"O":["1"],"k":["1"],"aY.E":"1"},"fH":{"cE":["o","l<j>"]},"iA":{"cF":["l<j>","o"]},"fI":{"cF":["l<j>","o"]},"fK":{"cE":["l<j>","o"]},"fL":{"cF":["l<j>","o"]},"fW":{"cE":["o","l<j>"]},"i1":{"cE":["o","l<j>"]},"i2":{"cF":["l<j>","o"]},"q":{"a7":[],"ag":["a7"]},"j":{"a7":[],"ag":["a7"]},"l":{"O":["1"],"k":["1"]},"a7":{"ag":["a7"]},"cP":{"de":[]},"by":{"O":["1"],"k":["1"]},"o":{"ag":["o"],"dj":[]},"dM":{"a3":[]},"hX":{"a3":[]},"hm":{"a3":[]},"bJ":{"a3":[]},"dm":{"a3":[]},"h8":{"a3":[]},"i_":{"a3":[]},"eS":{"a3":[]},"ch":{"a3":[]},"fR":{"a3":[]},"hr":{"a3":[]},"eI":{"a3":[]},"fT":{"a3":[]},"io":{"bU":[]},"e7":{"bU":[]},"iy":{"cf":[]},"hC":{"k":["j"],"k.E":"j"},"hB":{"U":["j"]},"a5":{"qO":[]},"cq":{"c2":[]},"br":{"c2":[]},"id":{"c2":[]},"ba":{"u":[]},"bA":{"u":[]},"y":{"t":[],"aV":[]},"fC":{"t":[],"aV":[]},"fF":{"t":[],"aV":[]},"cC":{"t":[],"aV":[]},"bK":{"aV":[]},"dX":{"mC":["a7"]},"t":{"aV":[]},"h0":{"t":[],"aV":[]},"b5":{"aV":[]},"hF":{"t":[],"aV":[]},"dw":{"aV":[]},"eX":{"mC":["a7"]},"eZ":{"eJ":["1"]},"ij":{"eZ":["1"],"eJ":["1"]},"f_":{"eK":["1"]},"it":{"qy":[]},"ai":{"k":["l<1>"],"k.E":"l<1>"},"f0":{"U":["l<1>"]},"h4":{"bp":[]},"ce":{"V":[]},"eG":{"V":[]},"ap":{"V":[]},"ca":{"V":[]},"cl":{"V":[]},"hT":{"V":[]},"hk":{"V":[]},"hG":{"V":[]},"aZ":{"V":[]},"cG":{"aZ":[],"V":[]},"hh":{"aZ":[],"V":[]},"fJ":{"aZ":[],"V":[]},"h3":{"aZ":[],"V":[]},"fQ":{"aZ":[],"V":[]},"dk":{"aZ":[],"V":[]},"dl":{"aZ":[],"V":[]},"eA":{"dk":[],"aZ":[],"V":[]},"hy":{"dl":[],"aZ":[],"V":[]},"dr":{"V":[]},"hl":{"aZ":[],"V":[]},"hq":{"ap":[],"V":[]},"hp":{"ap":[],"V":[]},"aj":{"ap":[],"V":[]},"ho":{"aj":[],"ap":[],"V":[]},"bq":{"aj":[],"ap":[],"V":[]},"he":{"bq":[],"aj":[],"ap":[],"V":[]},"hv":{"aj":[],"ap":[],"V":[]},"fV":{"aj":[],"ap":[],"V":[]},"fY":{"aj":[],"ap":[],"V":[]},"fD":{"bq":[],"aj":[],"ap":[],"V":[]},"hU":{"bq":[],"aj":[],"ap":[],"V":[]},"h2":{"bq":[],"aj":[],"ap":[],"V":[]},"h1":{"aj":[],"ap":[],"V":[]},"hA":{"bq":[],"aj":[],"ap":[],"V":[]},"fP":{"bq":[],"aj":[],"ap":[],"V":[]},"hz":{"bq":[],"aj":[],"ap":[],"V":[]},"i4":{"bq":[],"aj":[],"ap":[],"V":[]},"i5":{"o7":[]},"aG":{"ag":["Q"]},"d2":{"ak":[]},"R":{"ak":[]},"dW":{"ak":[]},"c0":{"ak":[]},"dT":{"ak":[]},"al":{"aW":["ak"],"w":["ak"],"l":["ak"],"O":["ak"],"k":["ak"],"w.E":"ak","aW.E":"ak"},"h_":{"w":["R"],"l":["R"],"O":["R"],"k":["R"],"w.E":"R","k.E":"R"},"aX":{"bU":[]},"bv":{"a9":[]},"fM":{"a9":[]},"dP":{"a9":[]},"h6":{"a9":[]},"fB":{"a9":[]},"d5":{"a9":[]},"hS":{"a9":[]},"eg":{"a9":[]},"d7":{"a9":[]},"eb":{"a9":[]},"ec":{"a9":[]},"cI":{"a9":[]},"ee":{"a9":[]},"d6":{"a9":[]},"ef":{"a9":[]},"h7":{"a9":[]},"h5":{"a9":[]},"fz":{"a9":[]},"ed":{"a9":[]},"fA":{"a9":[]},"fx":{"a9":[]},"fy":{"a9":[]},"fU":{"aY":["o"],"by":["o"],"O":["o"],"k":["o"],"aY.E":"o"},"ic":{"aY":["o"],"by":["o"],"O":["o"],"k":["o"]},"aW":{"w":["1"],"l":["1"],"O":["1"],"k":["1"]},"eE":{"o7":[]},"bd":{"b7":[]},"c_":{"b7":[]},"cg":{"c_":[],"b7":[]},"L":{"c_":[],"b7":[]},"n":{"bd":[],"b7":[]},"G":{"bd":[],"b7":[]},"cQ":{"bd":[],"b7":[]},"d0":{"bd":[],"b7":[]},"dV":{"b7":[]},"ea":{"U":["b7"]},"fw":{"aW":["R?"],"w":["R?"],"l":["R?"],"O":["R?"],"k":["R?"],"w.E":"R?","aW.E":"R?"},"fE":{"aN":[]},"hI":{"aN":[]},"hH":{"aN":[]},"fZ":{"aN":[]},"eQ":{"aN":[]},"eT":{"aN":[]},"fv":{"dI":[]},"fN":{"dI":[]},"dh":{"ax":[],"P":[],"F":[]},"fS":{"c3":[],"P":[],"F":[]},"cB":{"c3":[],"P":[],"F":[]},"ey":{"cB":[],"c3":[],"P":[],"F":[]},"di":{"P":[],"F":[]},"e9":{"di":[],"P":[],"F":[]},"eP":{"P":[],"F":[]},"dK":{"P":[],"F":[]},"cA":{"P":[],"F":[]},"ax":{"P":[],"F":[]},"eO":{"ck":[]},"d_":{"P":[],"F":[]},"dY":{"P":[],"F":[]},"e0":{"P":[],"F":[]},"ez":{"P":[],"F":[]},"eB":{"P":[],"F":[]},"eR":{"P":[],"F":[]},"dL":{"P":[],"F":[]},"dp":{"P":[],"F":[]},"eC":{"P":[],"F":[]},"eL":{"P":[],"F":[]},"cd":{"P":[],"F":[]},"dq":{"P":[],"F":[]},"bY":{"cd":[],"P":[],"F":[]},"eN":{"P":[],"F":[]},"er":{"bY":[],"cd":[],"P":[],"F":[]},"hb":{"F":[]},"dZ":{"F":[]},"d4":{"F":[]},"P":{"F":[]},"c3":{"P":[],"F":[]},"eU":{"P":[],"F":[]},"dU":{"P":[],"F":[]},"fO":{"dJ":[]},"hg":{"b1":[]},"bW":{"b1":[]},"bX":{"b1":[]},"bV":{"b1":[]},"eu":{"b1":[]},"hu":{"bU":[]},"hx":{"cJ":[]},"i0":{"cJ":[]},"i6":{"cJ":[]},"mo":{"bP":[],"bo":[],"ag":["bo"]},"b2":{"bz":[],"ag":["bz"]},"at":{"mo":[],"bP":[],"bo":[],"ag":["bo"]},"bz":{"ag":["bz"]},"hN":{"bz":[],"ag":["bz"]},"bo":{"ag":["bo"]},"hO":{"bo":[],"ag":["bo"]},"ds":{"bo":[],"ag":["bo"]},"bP":{"bo":[],"ag":["bo"]},"e8":{"hE":[]},"cR":{"l":["j"],"O":["j"],"k":["j"]}}'))
H.rr(v.typeUniverse,JSON.parse('{"dv":1,"ff":2,"dg":1,"hQ":2,"eh":1,"el":1,"eo":2,"eF":1,"f1":1,"f5":1,"fg":1,"fh":1}'))
var u={D:" must not be greater than the number of characters in the file, ",U:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",v:"No color list in VMobject with attribute name ",w:"\\hat{g}(f) = \\int^{+\\infty}_{-\\infty} g(t) e^{-2 \\pi ift} dt",A:"expected-attribute-value-but-got-right-bracket",g:"expected-closing-tag-but-got-right-bracket",f:"expected-doctype-name-but-got-right-bracket",S:"expected-space-or-right-bracket-in-doctype",d:"unexpected-bang-after-double-dash-in-comment",H:"unexpected-character-after-attribute-value",B:"unexpected-character-after-soldius-in-tag",V:"unexpected-character-in-unquoted-attribute-value",K:"unexpected-dash-after-double-dash-in-comment",q:"unexpected-frameset-in-frameset-innerhtml",G:"unexpected-html-element-in-foreign-content",M:"unexpected-start-tag-implies-table-voodoo",r:"unexpected-table-element-end-tag-in-select-in-table",a:"unexpected-table-element-start-tag-in-select-in-table"}
var t=(function rtii(){var s=H.aQ
return{pc:s("@<j>"),aY:s("cA"),A:s("bu"),u:s("dN"),fy:s("aJ"),jQ:s("cC"),g4:s("G"),E:s("a8"),G:s("N"),cw:s("d0"),bP:s("ag<@>"),ck:s("as"),B:s("v<o,o>"),R:s("v<o,@>"),i:s("dV"),dA:s("d2"),gt:s("O<@>"),h:s("R"),ia:s("L"),fz:s("a3"),fq:s("u"),d3:s("aK<b1>"),gG:s("aK<bV>"),m4:s("aK<bW>"),mc:s("aK<bX>"),cY:s("bk"),e:s("b1"),mA:s("bU"),lS:s("mo"),gY:s("cH"),g7:s("bm<@>"),ha:s("c9<df,o>"),ek:s("d4"),aB:s("d7"),id:s("cb<q>"),Y:s("ai<F>"),c2:s("ai<Q>"),pn:s("ai<P>"),b5:s("ai<h>"),lx:s("ai<q>"),lb:s("ai<j>"),cj:s("k<R>"),hl:s("k<ak>"),bq:s("k<o>"),e7:s("k<@>"),lq:s("A<aN>"),nC:s("A<cA>"),fp:s("A<bu>"),iX:s("A<aJ>"),O:s("A<N>"),hR:s("A<as>"),il:s("A<R>"),fO:s("A<aK<b1>>"),oQ:s("A<ap>"),b1:s("A<ax>"),km:s("A<l<ax>>"),Z:s("A<l<F>>"),bo:s("A<l<Q>>"),Q:s("A<l<h>>"),b:s("A<l<q>>"),fC:s("A<l<j>>"),bV:s("A<b4<o,@>>"),kU:s("A<es>"),r:s("A<F>"),d:s("A<ak>"),a8:s("A<p<o,o>>"),bD:s("A<aX>"),b7:s("A<ce>"),iM:s("A<eG>"),nn:s("A<bY>"),dw:s("A<eK<@>>"),s:s("A<o>"),ks:s("A<bd>"),kG:s("A<eM>"),bB:s("A<cj<aN,q,q>>"),ez:s("A<du<h,h,h,h>>"),bs:s("A<cR>"),U:s("A<P>"),l:s("A<h>"),pg:s("A<aD>"),dg:s("A<bf>"),n:s("A<q>"),m:s("A<@>"),t:s("A<j>"),lB:s("A<R?>"),fA:s("A<ak?>"),J:s("A<o?>"),g2:s("A<a7>"),po:s("A<F(F,q)>"),T:s("d9"),dY:s("bM"),dX:s("da<@>"),lY:s("u9"),am:s("ua"),F:s("ax"),oP:s("mv<Q,o>"),cG:s("l<aN>"),ev:s("l<N>"),jB:s("l<R>"),oR:s("l<aK<b1>>"),p1:s("l<ax>"),ls:s("l<l<h>>"),jj:s("l<l<q>>"),a:s("l<F>"),bF:s("l<o>"),oX:s("l<bd>"),fr:s("l<V>"),dq:s("l<cj<aN,q,q>>"),y:s("l<h>"),eW:s("l<aD>"),H:s("l<q>"),gs:s("l<@>"),L:s("l<j>"),eU:s("l<aD?>"),mH:s("aj"),fg:s("b4<o,N>"),fY:s("b4<bk,l<aK<b1>>>"),gQ:s("J<o,o>"),iZ:s("J<o,@>"),aQ:s("J<h,q>"),j:s("F"),k5:s("F(F,q)"),gn:s("bV"),gD:s("ba"),m6:s("eu"),oJ:s("bW"),nB:s("bX"),hD:s("cN"),I:s("ak"),P:s("aq"),f7:s("dh"),K:s("Q"),w:s("p<o,o>"),X:s("p<o,o?>"),iA:s("p<o?,o?>"),jK:s("n"),oc:s("dj"),n8:s("cO<a7>"),f_:s("nO<o>"),mx:s("mC<a7>"),lu:s("cP"),dT:s("ce"),b9:s("dr"),ns:s("by<F>"),hq:s("bz"),hs:s("bo"),ol:s("bP"),lH:s("cQ"),k:s("cf"),ny:s("cg"),N:s("o"),g:s("bd"),gL:s("o(o)"),mN:s("aC<h>"),fn:s("c_"),oI:s("c0"),q:s("bp"),iu:s("B<h,h>"),d7:s("B<j,q>"),o:s("B<j,j>"),dI:s("B<l<h>,l<h>>"),kk:s("B<j,l<q>>"),oM:s("cj<aN,q,q>"),cn:s("du<h,h,h,h>"),hb:s("cR"),cx:s("bQ"),oL:s("eT<F>"),jJ:s("c2"),bX:s("P"),V:s("h"),ew:s("h(h)"),v:s("ar<R>"),na:s("ar<o>"),pl:s("cT<R>"),eX:s("ij<ba>"),av:s("au<aq>"),j_:s("au<@>"),hy:s("au<j>"),iS:s("au<a7>"),C:s("aD"),nR:s("bf"),fD:s("f7<a7>"),k4:s("E"),c:s("E()"),cT:s("E(R)"),iW:s("E(Q)"),gS:s("E(o)"),aP:s("E(aD)"),gw:s("E(j)"),W:s("q"),iJ:s("q(q,B<j,j>)"),eL:s("q(h)"),f3:s("q(q)"),z:s("@"),mY:s("@()"),mq:s("@(Q)"),ng:s("@(Q,cf)"),f5:s("@(o)"),S:s("j"),eK:s("0&*"),_:s("Q*"),mV:s("R?"),jA:s("aK<bV>?"),dK:s("aK<bW>?"),e0:s("aK<bX>?"),gK:s("bm<aq>?"),x:s("l<N>?"),bk:s("l<R>?"),gv:s("l<ax>?"),n_:s("l<l<q>>?"),kQ:s("l<F>?"),fm:s("l<o>?"),jq:s("l<eM>?"),az:s("l<cj<aN,q,q>>?"),hg:s("l<h>?"),lX:s("l<h>(l<h>,l<h>,q)?"),f8:s("l<j>?"),gr:s("l<F(F,q)>?"),pp:s("b4<bk,l<aK<b1>>>?"),e1:s("ak?"),iD:s("Q?"),oA:s("by<o>?"),g9:s("aZ?"),jv:s("o?"),nU:s("b7?"),nm:s("B<j,j>?"),ot:s("c2?"),f:s("cU<@,@>?"),dd:s("aD?"),nF:s("ir?"),a5:s("E()?"),pi:s("E(o)?"),D:s("@(u)?"),dU:s("j(R,R)?"),jE:s("~()?"),p:s("a7"),ef:s("~"),M:s("~()"),hv:s("~(a7)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.a9=W.cC.prototype
C.p=W.dR.prototype
C.b3=J.b3.prototype
C.a=J.A.prototype
C.d=J.d8.prototype
C.b4=J.d9.prototype
C.f=J.cc.prototype
C.b=J.bL.prototype
C.b5=J.bM.prototype
C.r=H.ew.prototype
C.cO=H.cN.prototype
C.aD=J.hw.prototype
C.a3=J.bQ.prototype
C.e1=W.dw.prototype
C.aF=new P.fI(!1,127)
C.z=new M.h(-1,0,0)
C.O=new M.aJ(null,null,null,C.z,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c=new V.N(1,1,1,1)
C.y=new M.h(1,-1,0)
C.B=new M.aJ(C.c,!1,null,C.y,null,!1,null,null,null,null,null,null,null,null,0.5,0.1,null,null,null,2)
C.S=new V.N(0.73333,0.73333,0.73333,1)
C.o=new M.h(0,-1,0)
C.b6=H.a(s([0]),t.n)
C.P=new M.aJ(C.S,!0,!1,C.o,1,!0,0.1,1,null,C.b6,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
C.n=new M.aJ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.a4=new M.aJ(null,null,null,C.y,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.C=new H.cb(P.p9(),t.id)
C.a5=new H.cb(P.p9(),H.aQ("cb<j>"))
C.Q=new H.cb(P.tL(),t.id)
C.aS=new P.fH()
C.e3=new P.fL()
C.aT=new P.fK()
C.a6=new H.e2(H.aQ("e2<0&>"))
C.a7=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.aU=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.aZ=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.aV=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.aW=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.aY=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.aX=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.a8=function(hooks) { return hooks; }

C.b_=new P.hr()
C.t=new P.i1()
C.l=new P.iu()
C.b0=new P.iy()
C.k=new V.N(0,0,0,0)
C.u=new V.N(0,0,0,1)
C.b1=new V.N(1,1,0,1)
C.aa=new V.N(0.98824,0.38431,0.33333,1)
C.R=new V.N(0.36078,0.81569,0.70196,1)
C.D=new Y.bk("EventType.mouseMovedEvent")
C.v=new Y.bk("EventType.mousePressedEvent")
C.w=new Y.bk("EventType.mouseReleasedEvent")
C.x=new Y.bk("EventType.mouseDraggedEvent")
C.T=new Y.bk("EventType.keyPressedEvent")
C.U=new Y.bk("EventType.keyReleasedEvent")
C.b8=H.a(s([2]),t.n)
C.E=H.a(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.ar=new B.p("http://www.w3.org/1999/xhtml","applet",t.w)
C.at=new B.p("http://www.w3.org/1999/xhtml","caption",t.w)
C.a2=new B.p("http://www.w3.org/1999/xhtml","html",t.w)
C.aw=new B.p("http://www.w3.org/1999/xhtml","marquee",t.w)
C.aC=new B.p("http://www.w3.org/1999/xhtml","object",t.w)
C.a0=new B.p("http://www.w3.org/1999/xhtml","table",t.w)
C.av=new B.p("http://www.w3.org/1999/xhtml","td",t.w)
C.ap=new B.p("http://www.w3.org/1999/xhtml","th",t.w)
C.ay=new B.p("http://www.w3.org/1998/Math/MathML","mi",t.w)
C.as=new B.p("http://www.w3.org/1998/Math/MathML","mo",t.w)
C.aA=new B.p("http://www.w3.org/1998/Math/MathML","mn",t.w)
C.au=new B.p("http://www.w3.org/1998/Math/MathML","ms",t.w)
C.aq=new B.p("http://www.w3.org/1998/Math/MathML","mtext",t.w)
C.dr=new B.p("http://www.w3.org/1998/Math/MathML","annotation-xml",t.w)
C.a1=new B.p("http://www.w3.org/2000/svg","foreignObject",t.w)
C.az=new B.p("http://www.w3.org/2000/svg","desc",t.w)
C.ao=new B.p("http://www.w3.org/2000/svg","title",t.w)
C.V=H.a(s([C.ar,C.at,C.a2,C.aw,C.aC,C.a0,C.av,C.ap,C.ay,C.as,C.aA,C.au,C.aq,C.dr,C.a1,C.az,C.ao]),t.m)
C.aB=new B.p("http://www.w3.org/1999/xhtml","button",t.w)
C.b9=H.a(s([C.aB]),t.m)
C.ba=H.a(s(["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","menu","meta","nobr","ol","p","pre","ruby","s","small","span","strike","strong","sub","sup","table","tt","u","ul","var"]),t.s)
C.F=H.a(s(["h1","h2","h3","h4","h5","h6"]),t.s)
C.W=H.a(s(["dd","dt","li","option","optgroup","p","rp","rt"]),t.s)
C.G=H.a(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.bd=H.a(s(["+//silmaril//dtd html pro v0r11 19970101//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//as//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sq//dtd html 2.0 hotmetal + extensions//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"]),t.s)
C.be=H.a(s([C.D,C.v,C.w,C.x,C.T,C.U]),H.aQ("A<bk>"))
C.H=H.a(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.bf=H.a(s(["uU","bB","lL","iI","cC"]),t.s)
C.bg=H.a(s([11,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),t.t)
C.X=H.a(s(["table","tbody","tfoot","thead","tr"]),t.s)
C.an=new B.p("http://www.w3.org/1999/xhtml","ol",t.w)
C.ax=new B.p("http://www.w3.org/1999/xhtml","ul",t.w)
C.bh=H.a(s([C.an,C.ax]),t.m)
C.i=H.a(s(["unit","value"]),t.s)
C.bJ=new H.v(2,{unit:600,value:"em"},C.i,t.R)
C.c_=new H.v(2,{unit:601,value:"ex"},C.i,t.R)
C.c3=new H.v(2,{unit:602,value:"px"},C.i,t.R)
C.bV=new H.v(2,{unit:603,value:"cm"},C.i,t.R)
C.bY=new H.v(2,{unit:604,value:"mm"},C.i,t.R)
C.bT=new H.v(2,{unit:605,value:"in"},C.i,t.R)
C.bI=new H.v(2,{unit:606,value:"pt"},C.i,t.R)
C.c6=new H.v(2,{unit:607,value:"pc"},C.i,t.R)
C.bS=new H.v(2,{unit:608,value:"deg"},C.i,t.R)
C.c2=new H.v(2,{unit:609,value:"rad"},C.i,t.R)
C.bM=new H.v(2,{unit:610,value:"grad"},C.i,t.R)
C.c0=new H.v(2,{unit:611,value:"turn"},C.i,t.R)
C.bN=new H.v(2,{unit:612,value:"ms"},C.i,t.R)
C.bZ=new H.v(2,{unit:613,value:"s"},C.i,t.R)
C.bP=new H.v(2,{unit:614,value:"hz"},C.i,t.R)
C.c4=new H.v(2,{unit:615,value:"khz"},C.i,t.R)
C.bR=new H.v(2,{unit:617,value:"fr"},C.i,t.R)
C.bL=new H.v(2,{unit:618,value:"dpi"},C.i,t.R)
C.bO=new H.v(2,{unit:619,value:"dpcm"},C.i,t.R)
C.bU=new H.v(2,{unit:620,value:"dppx"},C.i,t.R)
C.bK=new H.v(2,{unit:621,value:"ch"},C.i,t.R)
C.bX=new H.v(2,{unit:622,value:"rem"},C.i,t.R)
C.c1=new H.v(2,{unit:623,value:"vw"},C.i,t.R)
C.bW=new H.v(2,{unit:624,value:"vh"},C.i,t.R)
C.c5=new H.v(2,{unit:625,value:"vmin"},C.i,t.R)
C.bQ=new H.v(2,{unit:626,value:"vmax"},C.i,t.R)
C.ab=H.a(s([C.bJ,C.c_,C.c3,C.bV,C.bY,C.bT,C.bI,C.c6,C.bS,C.c2,C.bM,C.c0,C.bN,C.bZ,C.bP,C.c4,C.bR,C.bL,C.bO,C.bU,C.bK,C.bX,C.c1,C.bW,C.c5,C.bQ]),t.bV)
C.ac=H.a(s(["-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"]),t.s)
C.bk=H.a(s(["address","div","p"]),t.s)
C.ad=H.a(s([C.ay,C.as,C.aA,C.au,C.aq]),t.a8)
C.h=H.a(s(["type","value"]),t.s)
C.cu=new H.v(2,{type:670,value:"top-left-corner"},C.h,t.R)
C.co=new H.v(2,{type:671,value:"top-left"},C.h,t.R)
C.cC=new H.v(2,{type:672,value:"top-center"},C.h,t.R)
C.cD=new H.v(2,{type:673,value:"top-right"},C.h,t.R)
C.ca=new H.v(2,{type:674,value:"top-right-corner"},C.h,t.R)
C.ch=new H.v(2,{type:675,value:"bottom-left-corner"},C.h,t.R)
C.cs=new H.v(2,{type:676,value:"bottom-left"},C.h,t.R)
C.cB=new H.v(2,{type:677,value:"bottom-center"},C.h,t.R)
C.cc=new H.v(2,{type:678,value:"bottom-right"},C.h,t.R)
C.cj=new H.v(2,{type:679,value:"bottom-right-corner"},C.h,t.R)
C.cA=new H.v(2,{type:680,value:"left-top"},C.h,t.R)
C.cl=new H.v(2,{type:681,value:"left-middle"},C.h,t.R)
C.ci=new H.v(2,{type:682,value:"right-bottom"},C.h,t.R)
C.ce=new H.v(2,{type:683,value:"right-top"},C.h,t.R)
C.cw=new H.v(2,{type:684,value:"right-middle"},C.h,t.R)
C.cx=new H.v(2,{type:685,value:"right-bottom"},C.h,t.R)
C.bl=H.a(s([C.cu,C.co,C.cC,C.cD,C.ca,C.ch,C.cs,C.cB,C.cc,C.cj,C.cA,C.cl,C.ci,C.ce,C.cw,C.cx]),t.bV)
C.af=H.a(s(["0","1","2","3","4","5","6","7","8","9"]),t.s)
C.bm=H.a(s([]),t.r)
C.q=H.a(s([]),t.s)
C.bn=H.a(s([]),t.n)
C.I=H.a(s([]),t.m)
C.bp=H.a(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.bq=H.a(s(["oO","cC","tT","yY","pP","eE"]),t.s)
C.br=H.a(s(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),t.s)
C.cI=new H.v(2,{type:641,value:"import"},C.h,t.R)
C.cr=new H.v(2,{type:642,value:"media"},C.h,t.R)
C.cp=new H.v(2,{type:643,value:"page"},C.h,t.R)
C.cG=new H.v(2,{type:644,value:"charset"},C.h,t.R)
C.cv=new H.v(2,{type:645,value:"stylet"},C.h,t.R)
C.cd=new H.v(2,{type:646,value:"keyframes"},C.h,t.R)
C.cy=new H.v(2,{type:647,value:"-webkit-keyframes"},C.h,t.R)
C.cH=new H.v(2,{type:648,value:"-moz-keyframes"},C.h,t.R)
C.ct=new H.v(2,{type:649,value:"-ms-keyframes"},C.h,t.R)
C.ck=new H.v(2,{type:650,value:"-o-keyframes"},C.h,t.R)
C.cK=new H.v(2,{type:651,value:"font-face"},C.h,t.R)
C.cn=new H.v(2,{type:652,value:"namespace"},C.h,t.R)
C.cq=new H.v(2,{type:653,value:"host"},C.h,t.R)
C.cb=new H.v(2,{type:654,value:"mixin"},C.h,t.R)
C.cz=new H.v(2,{type:655,value:"include"},C.h,t.R)
C.cF=new H.v(2,{type:656,value:"content"},C.h,t.R)
C.cg=new H.v(2,{type:657,value:"extend"},C.h,t.R)
C.cE=new H.v(2,{type:658,value:"-moz-document"},C.h,t.R)
C.cf=new H.v(2,{type:659,value:"supports"},C.h,t.R)
C.cm=new H.v(2,{type:660,value:"viewport"},C.h,t.R)
C.cJ=new H.v(2,{type:661,value:"-ms-viewport"},C.h,t.R)
C.bs=H.a(s([C.cI,C.cr,C.cp,C.cG,C.cv,C.cd,C.cy,C.cH,C.ct,C.ck,C.cK,C.cn,C.cq,C.cb,C.cz,C.cF,C.cg,C.cE,C.cf,C.cm,C.cJ]),t.bV)
C.bt=H.a(s(["yY","sS","tT","eE","mM"]),t.s)
C.d3=new B.p("http://www.w3.org/1998/Math/MathML","annotaion-xml",t.w)
C.bw=H.a(s([C.d3,C.a1,C.az,C.ao]),t.a8)
C.J=H.a(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.bx=H.a(s(["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"]),t.s)
C.by=H.a(s(["pre","listing","textarea"]),t.s)
C.ah=H.a(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.ai=H.a(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.bz=H.a(s(["C","D","A","T","A","["]),t.s)
C.cR=new B.p("http://www.w3.org/1999/xhtml","optgroup",t.w)
C.dT=new B.p("http://www.w3.org/1999/xhtml","option",t.w)
C.bA=H.a(s([C.cR,C.dT]),t.m)
C.bB=H.a(s(["tbody","tfoot","thead","html"]),t.s)
C.bE=H.a(s([C.a2,C.a0]),t.m)
C.dH=new B.p("http://www.w3.org/1999/xhtml","address",t.w)
C.cT=new B.p("http://www.w3.org/1999/xhtml","area",t.w)
C.dW=new B.p("http://www.w3.org/1999/xhtml","article",t.w)
C.dh=new B.p("http://www.w3.org/1999/xhtml","aside",t.w)
C.dp=new B.p("http://www.w3.org/1999/xhtml","base",t.w)
C.d9=new B.p("http://www.w3.org/1999/xhtml","basefont",t.w)
C.db=new B.p("http://www.w3.org/1999/xhtml","bgsound",t.w)
C.dB=new B.p("http://www.w3.org/1999/xhtml","blockquote",t.w)
C.d8=new B.p("http://www.w3.org/1999/xhtml","body",t.w)
C.dg=new B.p("http://www.w3.org/1999/xhtml","br",t.w)
C.dF=new B.p("http://www.w3.org/1999/xhtml","center",t.w)
C.cW=new B.p("http://www.w3.org/1999/xhtml","col",t.w)
C.dK=new B.p("http://www.w3.org/1999/xhtml","colgroup",t.w)
C.dj=new B.p("http://www.w3.org/1999/xhtml","command",t.w)
C.dP=new B.p("http://www.w3.org/1999/xhtml","dd",t.w)
C.ds=new B.p("http://www.w3.org/1999/xhtml","details",t.w)
C.d4=new B.p("http://www.w3.org/1999/xhtml","dir",t.w)
C.d2=new B.p("http://www.w3.org/1999/xhtml","div",t.w)
C.dN=new B.p("http://www.w3.org/1999/xhtml","dl",t.w)
C.dk=new B.p("http://www.w3.org/1999/xhtml","dt",t.w)
C.cV=new B.p("http://www.w3.org/1999/xhtml","embed",t.w)
C.cQ=new B.p("http://www.w3.org/1999/xhtml","fieldset",t.w)
C.dz=new B.p("http://www.w3.org/1999/xhtml","figure",t.w)
C.dO=new B.p("http://www.w3.org/1999/xhtml","footer",t.w)
C.d6=new B.p("http://www.w3.org/1999/xhtml","form",t.w)
C.dl=new B.p("http://www.w3.org/1999/xhtml","frame",t.w)
C.cS=new B.p("http://www.w3.org/1999/xhtml","frameset",t.w)
C.cZ=new B.p("http://www.w3.org/1999/xhtml","h1",t.w)
C.dV=new B.p("http://www.w3.org/1999/xhtml","h2",t.w)
C.cU=new B.p("http://www.w3.org/1999/xhtml","h3",t.w)
C.dt=new B.p("http://www.w3.org/1999/xhtml","h4",t.w)
C.dS=new B.p("http://www.w3.org/1999/xhtml","h5",t.w)
C.dy=new B.p("http://www.w3.org/1999/xhtml","h6",t.w)
C.dc=new B.p("http://www.w3.org/1999/xhtml","head",t.w)
C.dU=new B.p("http://www.w3.org/1999/xhtml","header",t.w)
C.di=new B.p("http://www.w3.org/1999/xhtml","hr",t.w)
C.dI=new B.p("http://www.w3.org/1999/xhtml","iframe",t.w)
C.dA=new B.p("http://www.w3.org/1999/xhtml","image",t.w)
C.dm=new B.p("http://www.w3.org/1999/xhtml","img",t.w)
C.dv=new B.p("http://www.w3.org/1999/xhtml","input",t.w)
C.dG=new B.p("http://www.w3.org/1999/xhtml","isindex",t.w)
C.df=new B.p("http://www.w3.org/1999/xhtml","li",t.w)
C.de=new B.p("http://www.w3.org/1999/xhtml","link",t.w)
C.dE=new B.p("http://www.w3.org/1999/xhtml","listing",t.w)
C.d_=new B.p("http://www.w3.org/1999/xhtml","men",t.w)
C.dC=new B.p("http://www.w3.org/1999/xhtml","meta",t.w)
C.dd=new B.p("http://www.w3.org/1999/xhtml","nav",t.w)
C.dQ=new B.p("http://www.w3.org/1999/xhtml","noembed",t.w)
C.dq=new B.p("http://www.w3.org/1999/xhtml","noframes",t.w)
C.dn=new B.p("http://www.w3.org/1999/xhtml","noscript",t.w)
C.dJ=new B.p("http://www.w3.org/1999/xhtml","p",t.w)
C.cX=new B.p("http://www.w3.org/1999/xhtml","param",t.w)
C.dw=new B.p("http://www.w3.org/1999/xhtml","plaintext",t.w)
C.cP=new B.p("http://www.w3.org/1999/xhtml","pre",t.w)
C.du=new B.p("http://www.w3.org/1999/xhtml","script",t.w)
C.da=new B.p("http://www.w3.org/1999/xhtml","section",t.w)
C.d5=new B.p("http://www.w3.org/1999/xhtml","select",t.w)
C.d0=new B.p("http://www.w3.org/1999/xhtml","style",t.w)
C.dL=new B.p("http://www.w3.org/1999/xhtml","tbody",t.w)
C.d1=new B.p("http://www.w3.org/1999/xhtml","textarea",t.w)
C.dD=new B.p("http://www.w3.org/1999/xhtml","tfoot",t.w)
C.d7=new B.p("http://www.w3.org/1999/xhtml","thead",t.w)
C.dx=new B.p("http://www.w3.org/1999/xhtml","title",t.w)
C.cY=new B.p("http://www.w3.org/1999/xhtml","tr",t.w)
C.dR=new B.p("http://www.w3.org/1999/xhtml","wbr",t.w)
C.dM=new B.p("http://www.w3.org/1999/xhtml","xmp",t.w)
C.Y=H.a(s([C.dH,C.ar,C.cT,C.dW,C.dh,C.dp,C.d9,C.db,C.dB,C.d8,C.dg,C.aB,C.at,C.dF,C.cW,C.dK,C.dj,C.dP,C.ds,C.d4,C.d2,C.dN,C.dk,C.cV,C.cQ,C.dz,C.dO,C.d6,C.dl,C.cS,C.cZ,C.dV,C.cU,C.dt,C.dS,C.dy,C.dc,C.dU,C.di,C.a2,C.dI,C.dA,C.dm,C.dv,C.dG,C.df,C.de,C.dE,C.aw,C.d_,C.dC,C.dd,C.dQ,C.dq,C.dn,C.aC,C.an,C.dJ,C.cX,C.dw,C.cP,C.du,C.da,C.d5,C.d0,C.a0,C.dL,C.av,C.d1,C.dD,C.ap,C.d7,C.dx,C.cY,C.ax,C.dR,C.dM,C.a1]),t.a8)
C.b7=H.a(s(["AElig","AElig;","AMP","AMP;","Aacute","Aacute;","Abreve;","Acirc","Acirc;","Acy;","Afr;","Agrave","Agrave;","Alpha;","Amacr;","And;","Aogon;","Aopf;","ApplyFunction;","Aring","Aring;","Ascr;","Assign;","Atilde","Atilde;","Auml","Auml;","Backslash;","Barv;","Barwed;","Bcy;","Because;","Bernoullis;","Beta;","Bfr;","Bopf;","Breve;","Bscr;","Bumpeq;","CHcy;","COPY","COPY;","Cacute;","Cap;","CapitalDifferentialD;","Cayleys;","Ccaron;","Ccedil","Ccedil;","Ccirc;","Cconint;","Cdot;","Cedilla;","CenterDot;","Cfr;","Chi;","CircleDot;","CircleMinus;","CirclePlus;","CircleTimes;","ClockwiseContourIntegral;","CloseCurlyDoubleQuote;","CloseCurlyQuote;","Colon;","Colone;","Congruent;","Conint;","ContourIntegral;","Copf;","Coproduct;","CounterClockwiseContourIntegral;","Cross;","Cscr;","Cup;","CupCap;","DD;","DDotrahd;","DJcy;","DScy;","DZcy;","Dagger;","Darr;","Dashv;","Dcaron;","Dcy;","Del;","Delta;","Dfr;","DiacriticalAcute;","DiacriticalDot;","DiacriticalDoubleAcute;","DiacriticalGrave;","DiacriticalTilde;","Diamond;","DifferentialD;","Dopf;","Dot;","DotDot;","DotEqual;","DoubleContourIntegral;","DoubleDot;","DoubleDownArrow;","DoubleLeftArrow;","DoubleLeftRightArrow;","DoubleLeftTee;","DoubleLongLeftArrow;","DoubleLongLeftRightArrow;","DoubleLongRightArrow;","DoubleRightArrow;","DoubleRightTee;","DoubleUpArrow;","DoubleUpDownArrow;","DoubleVerticalBar;","DownArrow;","DownArrowBar;","DownArrowUpArrow;","DownBreve;","DownLeftRightVector;","DownLeftTeeVector;","DownLeftVector;","DownLeftVectorBar;","DownRightTeeVector;","DownRightVector;","DownRightVectorBar;","DownTee;","DownTeeArrow;","Downarrow;","Dscr;","Dstrok;","ENG;","ETH","ETH;","Eacute","Eacute;","Ecaron;","Ecirc","Ecirc;","Ecy;","Edot;","Efr;","Egrave","Egrave;","Element;","Emacr;","EmptySmallSquare;","EmptyVerySmallSquare;","Eogon;","Eopf;","Epsilon;","Equal;","EqualTilde;","Equilibrium;","Escr;","Esim;","Eta;","Euml","Euml;","Exists;","ExponentialE;","Fcy;","Ffr;","FilledSmallSquare;","FilledVerySmallSquare;","Fopf;","ForAll;","Fouriertrf;","Fscr;","GJcy;","GT","GT;","Gamma;","Gammad;","Gbreve;","Gcedil;","Gcirc;","Gcy;","Gdot;","Gfr;","Gg;","Gopf;","GreaterEqual;","GreaterEqualLess;","GreaterFullEqual;","GreaterGreater;","GreaterLess;","GreaterSlantEqual;","GreaterTilde;","Gscr;","Gt;","HARDcy;","Hacek;","Hat;","Hcirc;","Hfr;","HilbertSpace;","Hopf;","HorizontalLine;","Hscr;","Hstrok;","HumpDownHump;","HumpEqual;","IEcy;","IJlig;","IOcy;","Iacute","Iacute;","Icirc","Icirc;","Icy;","Idot;","Ifr;","Igrave","Igrave;","Im;","Imacr;","ImaginaryI;","Implies;","Int;","Integral;","Intersection;","InvisibleComma;","InvisibleTimes;","Iogon;","Iopf;","Iota;","Iscr;","Itilde;","Iukcy;","Iuml","Iuml;","Jcirc;","Jcy;","Jfr;","Jopf;","Jscr;","Jsercy;","Jukcy;","KHcy;","KJcy;","Kappa;","Kcedil;","Kcy;","Kfr;","Kopf;","Kscr;","LJcy;","LT","LT;","Lacute;","Lambda;","Lang;","Laplacetrf;","Larr;","Lcaron;","Lcedil;","Lcy;","LeftAngleBracket;","LeftArrow;","LeftArrowBar;","LeftArrowRightArrow;","LeftCeiling;","LeftDoubleBracket;","LeftDownTeeVector;","LeftDownVector;","LeftDownVectorBar;","LeftFloor;","LeftRightArrow;","LeftRightVector;","LeftTee;","LeftTeeArrow;","LeftTeeVector;","LeftTriangle;","LeftTriangleBar;","LeftTriangleEqual;","LeftUpDownVector;","LeftUpTeeVector;","LeftUpVector;","LeftUpVectorBar;","LeftVector;","LeftVectorBar;","Leftarrow;","Leftrightarrow;","LessEqualGreater;","LessFullEqual;","LessGreater;","LessLess;","LessSlantEqual;","LessTilde;","Lfr;","Ll;","Lleftarrow;","Lmidot;","LongLeftArrow;","LongLeftRightArrow;","LongRightArrow;","Longleftarrow;","Longleftrightarrow;","Longrightarrow;","Lopf;","LowerLeftArrow;","LowerRightArrow;","Lscr;","Lsh;","Lstrok;","Lt;","Map;","Mcy;","MediumSpace;","Mellintrf;","Mfr;","MinusPlus;","Mopf;","Mscr;","Mu;","NJcy;","Nacute;","Ncaron;","Ncedil;","Ncy;","NegativeMediumSpace;","NegativeThickSpace;","NegativeThinSpace;","NegativeVeryThinSpace;","NestedGreaterGreater;","NestedLessLess;","NewLine;","Nfr;","NoBreak;","NonBreakingSpace;","Nopf;","Not;","NotCongruent;","NotCupCap;","NotDoubleVerticalBar;","NotElement;","NotEqual;","NotEqualTilde;","NotExists;","NotGreater;","NotGreaterEqual;","NotGreaterFullEqual;","NotGreaterGreater;","NotGreaterLess;","NotGreaterSlantEqual;","NotGreaterTilde;","NotHumpDownHump;","NotHumpEqual;","NotLeftTriangle;","NotLeftTriangleBar;","NotLeftTriangleEqual;","NotLess;","NotLessEqual;","NotLessGreater;","NotLessLess;","NotLessSlantEqual;","NotLessTilde;","NotNestedGreaterGreater;","NotNestedLessLess;","NotPrecedes;","NotPrecedesEqual;","NotPrecedesSlantEqual;","NotReverseElement;","NotRightTriangle;","NotRightTriangleBar;","NotRightTriangleEqual;","NotSquareSubset;","NotSquareSubsetEqual;","NotSquareSuperset;","NotSquareSupersetEqual;","NotSubset;","NotSubsetEqual;","NotSucceeds;","NotSucceedsEqual;","NotSucceedsSlantEqual;","NotSucceedsTilde;","NotSuperset;","NotSupersetEqual;","NotTilde;","NotTildeEqual;","NotTildeFullEqual;","NotTildeTilde;","NotVerticalBar;","Nscr;","Ntilde","Ntilde;","Nu;","OElig;","Oacute","Oacute;","Ocirc","Ocirc;","Ocy;","Odblac;","Ofr;","Ograve","Ograve;","Omacr;","Omega;","Omicron;","Oopf;","OpenCurlyDoubleQuote;","OpenCurlyQuote;","Or;","Oscr;","Oslash","Oslash;","Otilde","Otilde;","Otimes;","Ouml","Ouml;","OverBar;","OverBrace;","OverBracket;","OverParenthesis;","PartialD;","Pcy;","Pfr;","Phi;","Pi;","PlusMinus;","Poincareplane;","Popf;","Pr;","Precedes;","PrecedesEqual;","PrecedesSlantEqual;","PrecedesTilde;","Prime;","Product;","Proportion;","Proportional;","Pscr;","Psi;","QUOT","QUOT;","Qfr;","Qopf;","Qscr;","RBarr;","REG","REG;","Racute;","Rang;","Rarr;","Rarrtl;","Rcaron;","Rcedil;","Rcy;","Re;","ReverseElement;","ReverseEquilibrium;","ReverseUpEquilibrium;","Rfr;","Rho;","RightAngleBracket;","RightArrow;","RightArrowBar;","RightArrowLeftArrow;","RightCeiling;","RightDoubleBracket;","RightDownTeeVector;","RightDownVector;","RightDownVectorBar;","RightFloor;","RightTee;","RightTeeArrow;","RightTeeVector;","RightTriangle;","RightTriangleBar;","RightTriangleEqual;","RightUpDownVector;","RightUpTeeVector;","RightUpVector;","RightUpVectorBar;","RightVector;","RightVectorBar;","Rightarrow;","Ropf;","RoundImplies;","Rrightarrow;","Rscr;","Rsh;","RuleDelayed;","SHCHcy;","SHcy;","SOFTcy;","Sacute;","Sc;","Scaron;","Scedil;","Scirc;","Scy;","Sfr;","ShortDownArrow;","ShortLeftArrow;","ShortRightArrow;","ShortUpArrow;","Sigma;","SmallCircle;","Sopf;","Sqrt;","Square;","SquareIntersection;","SquareSubset;","SquareSubsetEqual;","SquareSuperset;","SquareSupersetEqual;","SquareUnion;","Sscr;","Star;","Sub;","Subset;","SubsetEqual;","Succeeds;","SucceedsEqual;","SucceedsSlantEqual;","SucceedsTilde;","SuchThat;","Sum;","Sup;","Superset;","SupersetEqual;","Supset;","THORN","THORN;","TRADE;","TSHcy;","TScy;","Tab;","Tau;","Tcaron;","Tcedil;","Tcy;","Tfr;","Therefore;","Theta;","ThickSpace;","ThinSpace;","Tilde;","TildeEqual;","TildeFullEqual;","TildeTilde;","Topf;","TripleDot;","Tscr;","Tstrok;","Uacute","Uacute;","Uarr;","Uarrocir;","Ubrcy;","Ubreve;","Ucirc","Ucirc;","Ucy;","Udblac;","Ufr;","Ugrave","Ugrave;","Umacr;","UnderBar;","UnderBrace;","UnderBracket;","UnderParenthesis;","Union;","UnionPlus;","Uogon;","Uopf;","UpArrow;","UpArrowBar;","UpArrowDownArrow;","UpDownArrow;","UpEquilibrium;","UpTee;","UpTeeArrow;","Uparrow;","Updownarrow;","UpperLeftArrow;","UpperRightArrow;","Upsi;","Upsilon;","Uring;","Uscr;","Utilde;","Uuml","Uuml;","VDash;","Vbar;","Vcy;","Vdash;","Vdashl;","Vee;","Verbar;","Vert;","VerticalBar;","VerticalLine;","VerticalSeparator;","VerticalTilde;","VeryThinSpace;","Vfr;","Vopf;","Vscr;","Vvdash;","Wcirc;","Wedge;","Wfr;","Wopf;","Wscr;","Xfr;","Xi;","Xopf;","Xscr;","YAcy;","YIcy;","YUcy;","Yacute","Yacute;","Ycirc;","Ycy;","Yfr;","Yopf;","Yscr;","Yuml;","ZHcy;","Zacute;","Zcaron;","Zcy;","Zdot;","ZeroWidthSpace;","Zeta;","Zfr;","Zopf;","Zscr;","aacute","aacute;","abreve;","ac;","acE;","acd;","acirc","acirc;","acute","acute;","acy;","aelig","aelig;","af;","afr;","agrave","agrave;","alefsym;","aleph;","alpha;","amacr;","amalg;","amp","amp;","and;","andand;","andd;","andslope;","andv;","ang;","ange;","angle;","angmsd;","angmsdaa;","angmsdab;","angmsdac;","angmsdad;","angmsdae;","angmsdaf;","angmsdag;","angmsdah;","angrt;","angrtvb;","angrtvbd;","angsph;","angst;","angzarr;","aogon;","aopf;","ap;","apE;","apacir;","ape;","apid;","apos;","approx;","approxeq;","aring","aring;","ascr;","ast;","asymp;","asympeq;","atilde","atilde;","auml","auml;","awconint;","awint;","bNot;","backcong;","backepsilon;","backprime;","backsim;","backsimeq;","barvee;","barwed;","barwedge;","bbrk;","bbrktbrk;","bcong;","bcy;","bdquo;","becaus;","because;","bemptyv;","bepsi;","bernou;","beta;","beth;","between;","bfr;","bigcap;","bigcirc;","bigcup;","bigodot;","bigoplus;","bigotimes;","bigsqcup;","bigstar;","bigtriangledown;","bigtriangleup;","biguplus;","bigvee;","bigwedge;","bkarow;","blacklozenge;","blacksquare;","blacktriangle;","blacktriangledown;","blacktriangleleft;","blacktriangleright;","blank;","blk12;","blk14;","blk34;","block;","bne;","bnequiv;","bnot;","bopf;","bot;","bottom;","bowtie;","boxDL;","boxDR;","boxDl;","boxDr;","boxH;","boxHD;","boxHU;","boxHd;","boxHu;","boxUL;","boxUR;","boxUl;","boxUr;","boxV;","boxVH;","boxVL;","boxVR;","boxVh;","boxVl;","boxVr;","boxbox;","boxdL;","boxdR;","boxdl;","boxdr;","boxh;","boxhD;","boxhU;","boxhd;","boxhu;","boxminus;","boxplus;","boxtimes;","boxuL;","boxuR;","boxul;","boxur;","boxv;","boxvH;","boxvL;","boxvR;","boxvh;","boxvl;","boxvr;","bprime;","breve;","brvbar","brvbar;","bscr;","bsemi;","bsim;","bsime;","bsol;","bsolb;","bsolhsub;","bull;","bullet;","bump;","bumpE;","bumpe;","bumpeq;","cacute;","cap;","capand;","capbrcup;","capcap;","capcup;","capdot;","caps;","caret;","caron;","ccaps;","ccaron;","ccedil","ccedil;","ccirc;","ccups;","ccupssm;","cdot;","cedil","cedil;","cemptyv;","cent","cent;","centerdot;","cfr;","chcy;","check;","checkmark;","chi;","cir;","cirE;","circ;","circeq;","circlearrowleft;","circlearrowright;","circledR;","circledS;","circledast;","circledcirc;","circleddash;","cire;","cirfnint;","cirmid;","cirscir;","clubs;","clubsuit;","colon;","colone;","coloneq;","comma;","commat;","comp;","compfn;","complement;","complexes;","cong;","congdot;","conint;","copf;","coprod;","copy","copy;","copysr;","crarr;","cross;","cscr;","csub;","csube;","csup;","csupe;","ctdot;","cudarrl;","cudarrr;","cuepr;","cuesc;","cularr;","cularrp;","cup;","cupbrcap;","cupcap;","cupcup;","cupdot;","cupor;","cups;","curarr;","curarrm;","curlyeqprec;","curlyeqsucc;","curlyvee;","curlywedge;","curren","curren;","curvearrowleft;","curvearrowright;","cuvee;","cuwed;","cwconint;","cwint;","cylcty;","dArr;","dHar;","dagger;","daleth;","darr;","dash;","dashv;","dbkarow;","dblac;","dcaron;","dcy;","dd;","ddagger;","ddarr;","ddotseq;","deg","deg;","delta;","demptyv;","dfisht;","dfr;","dharl;","dharr;","diam;","diamond;","diamondsuit;","diams;","die;","digamma;","disin;","div;","divide","divide;","divideontimes;","divonx;","djcy;","dlcorn;","dlcrop;","dollar;","dopf;","dot;","doteq;","doteqdot;","dotminus;","dotplus;","dotsquare;","doublebarwedge;","downarrow;","downdownarrows;","downharpoonleft;","downharpoonright;","drbkarow;","drcorn;","drcrop;","dscr;","dscy;","dsol;","dstrok;","dtdot;","dtri;","dtrif;","duarr;","duhar;","dwangle;","dzcy;","dzigrarr;","eDDot;","eDot;","eacute","eacute;","easter;","ecaron;","ecir;","ecirc","ecirc;","ecolon;","ecy;","edot;","ee;","efDot;","efr;","eg;","egrave","egrave;","egs;","egsdot;","el;","elinters;","ell;","els;","elsdot;","emacr;","empty;","emptyset;","emptyv;","emsp13;","emsp14;","emsp;","eng;","ensp;","eogon;","eopf;","epar;","eparsl;","eplus;","epsi;","epsilon;","epsiv;","eqcirc;","eqcolon;","eqsim;","eqslantgtr;","eqslantless;","equals;","equest;","equiv;","equivDD;","eqvparsl;","erDot;","erarr;","escr;","esdot;","esim;","eta;","eth","eth;","euml","euml;","euro;","excl;","exist;","expectation;","exponentiale;","fallingdotseq;","fcy;","female;","ffilig;","fflig;","ffllig;","ffr;","filig;","fjlig;","flat;","fllig;","fltns;","fnof;","fopf;","forall;","fork;","forkv;","fpartint;","frac12","frac12;","frac13;","frac14","frac14;","frac15;","frac16;","frac18;","frac23;","frac25;","frac34","frac34;","frac35;","frac38;","frac45;","frac56;","frac58;","frac78;","frasl;","frown;","fscr;","gE;","gEl;","gacute;","gamma;","gammad;","gap;","gbreve;","gcirc;","gcy;","gdot;","ge;","gel;","geq;","geqq;","geqslant;","ges;","gescc;","gesdot;","gesdoto;","gesdotol;","gesl;","gesles;","gfr;","gg;","ggg;","gimel;","gjcy;","gl;","glE;","gla;","glj;","gnE;","gnap;","gnapprox;","gne;","gneq;","gneqq;","gnsim;","gopf;","grave;","gscr;","gsim;","gsime;","gsiml;","gt","gt;","gtcc;","gtcir;","gtdot;","gtlPar;","gtquest;","gtrapprox;","gtrarr;","gtrdot;","gtreqless;","gtreqqless;","gtrless;","gtrsim;","gvertneqq;","gvnE;","hArr;","hairsp;","half;","hamilt;","hardcy;","harr;","harrcir;","harrw;","hbar;","hcirc;","hearts;","heartsuit;","hellip;","hercon;","hfr;","hksearow;","hkswarow;","hoarr;","homtht;","hookleftarrow;","hookrightarrow;","hopf;","horbar;","hscr;","hslash;","hstrok;","hybull;","hyphen;","iacute","iacute;","ic;","icirc","icirc;","icy;","iecy;","iexcl","iexcl;","iff;","ifr;","igrave","igrave;","ii;","iiiint;","iiint;","iinfin;","iiota;","ijlig;","imacr;","image;","imagline;","imagpart;","imath;","imof;","imped;","in;","incare;","infin;","infintie;","inodot;","int;","intcal;","integers;","intercal;","intlarhk;","intprod;","iocy;","iogon;","iopf;","iota;","iprod;","iquest","iquest;","iscr;","isin;","isinE;","isindot;","isins;","isinsv;","isinv;","it;","itilde;","iukcy;","iuml","iuml;","jcirc;","jcy;","jfr;","jmath;","jopf;","jscr;","jsercy;","jukcy;","kappa;","kappav;","kcedil;","kcy;","kfr;","kgreen;","khcy;","kjcy;","kopf;","kscr;","lAarr;","lArr;","lAtail;","lBarr;","lE;","lEg;","lHar;","lacute;","laemptyv;","lagran;","lambda;","lang;","langd;","langle;","lap;","laquo","laquo;","larr;","larrb;","larrbfs;","larrfs;","larrhk;","larrlp;","larrpl;","larrsim;","larrtl;","lat;","latail;","late;","lates;","lbarr;","lbbrk;","lbrace;","lbrack;","lbrke;","lbrksld;","lbrkslu;","lcaron;","lcedil;","lceil;","lcub;","lcy;","ldca;","ldquo;","ldquor;","ldrdhar;","ldrushar;","ldsh;","le;","leftarrow;","leftarrowtail;","leftharpoondown;","leftharpoonup;","leftleftarrows;","leftrightarrow;","leftrightarrows;","leftrightharpoons;","leftrightsquigarrow;","leftthreetimes;","leg;","leq;","leqq;","leqslant;","les;","lescc;","lesdot;","lesdoto;","lesdotor;","lesg;","lesges;","lessapprox;","lessdot;","lesseqgtr;","lesseqqgtr;","lessgtr;","lesssim;","lfisht;","lfloor;","lfr;","lg;","lgE;","lhard;","lharu;","lharul;","lhblk;","ljcy;","ll;","llarr;","llcorner;","llhard;","lltri;","lmidot;","lmoust;","lmoustache;","lnE;","lnap;","lnapprox;","lne;","lneq;","lneqq;","lnsim;","loang;","loarr;","lobrk;","longleftarrow;","longleftrightarrow;","longmapsto;","longrightarrow;","looparrowleft;","looparrowright;","lopar;","lopf;","loplus;","lotimes;","lowast;","lowbar;","loz;","lozenge;","lozf;","lpar;","lparlt;","lrarr;","lrcorner;","lrhar;","lrhard;","lrm;","lrtri;","lsaquo;","lscr;","lsh;","lsim;","lsime;","lsimg;","lsqb;","lsquo;","lsquor;","lstrok;","lt","lt;","ltcc;","ltcir;","ltdot;","lthree;","ltimes;","ltlarr;","ltquest;","ltrPar;","ltri;","ltrie;","ltrif;","lurdshar;","luruhar;","lvertneqq;","lvnE;","mDDot;","macr","macr;","male;","malt;","maltese;","map;","mapsto;","mapstodown;","mapstoleft;","mapstoup;","marker;","mcomma;","mcy;","mdash;","measuredangle;","mfr;","mho;","micro","micro;","mid;","midast;","midcir;","middot","middot;","minus;","minusb;","minusd;","minusdu;","mlcp;","mldr;","mnplus;","models;","mopf;","mp;","mscr;","mstpos;","mu;","multimap;","mumap;","nGg;","nGt;","nGtv;","nLeftarrow;","nLeftrightarrow;","nLl;","nLt;","nLtv;","nRightarrow;","nVDash;","nVdash;","nabla;","nacute;","nang;","nap;","napE;","napid;","napos;","napprox;","natur;","natural;","naturals;","nbsp","nbsp;","nbump;","nbumpe;","ncap;","ncaron;","ncedil;","ncong;","ncongdot;","ncup;","ncy;","ndash;","ne;","neArr;","nearhk;","nearr;","nearrow;","nedot;","nequiv;","nesear;","nesim;","nexist;","nexists;","nfr;","ngE;","nge;","ngeq;","ngeqq;","ngeqslant;","nges;","ngsim;","ngt;","ngtr;","nhArr;","nharr;","nhpar;","ni;","nis;","nisd;","niv;","njcy;","nlArr;","nlE;","nlarr;","nldr;","nle;","nleftarrow;","nleftrightarrow;","nleq;","nleqq;","nleqslant;","nles;","nless;","nlsim;","nlt;","nltri;","nltrie;","nmid;","nopf;","not","not;","notin;","notinE;","notindot;","notinva;","notinvb;","notinvc;","notni;","notniva;","notnivb;","notnivc;","npar;","nparallel;","nparsl;","npart;","npolint;","npr;","nprcue;","npre;","nprec;","npreceq;","nrArr;","nrarr;","nrarrc;","nrarrw;","nrightarrow;","nrtri;","nrtrie;","nsc;","nsccue;","nsce;","nscr;","nshortmid;","nshortparallel;","nsim;","nsime;","nsimeq;","nsmid;","nspar;","nsqsube;","nsqsupe;","nsub;","nsubE;","nsube;","nsubset;","nsubseteq;","nsubseteqq;","nsucc;","nsucceq;","nsup;","nsupE;","nsupe;","nsupset;","nsupseteq;","nsupseteqq;","ntgl;","ntilde","ntilde;","ntlg;","ntriangleleft;","ntrianglelefteq;","ntriangleright;","ntrianglerighteq;","nu;","num;","numero;","numsp;","nvDash;","nvHarr;","nvap;","nvdash;","nvge;","nvgt;","nvinfin;","nvlArr;","nvle;","nvlt;","nvltrie;","nvrArr;","nvrtrie;","nvsim;","nwArr;","nwarhk;","nwarr;","nwarrow;","nwnear;","oS;","oacute","oacute;","oast;","ocir;","ocirc","ocirc;","ocy;","odash;","odblac;","odiv;","odot;","odsold;","oelig;","ofcir;","ofr;","ogon;","ograve","ograve;","ogt;","ohbar;","ohm;","oint;","olarr;","olcir;","olcross;","oline;","olt;","omacr;","omega;","omicron;","omid;","ominus;","oopf;","opar;","operp;","oplus;","or;","orarr;","ord;","order;","orderof;","ordf","ordf;","ordm","ordm;","origof;","oror;","orslope;","orv;","oscr;","oslash","oslash;","osol;","otilde","otilde;","otimes;","otimesas;","ouml","ouml;","ovbar;","par;","para","para;","parallel;","parsim;","parsl;","part;","pcy;","percnt;","period;","permil;","perp;","pertenk;","pfr;","phi;","phiv;","phmmat;","phone;","pi;","pitchfork;","piv;","planck;","planckh;","plankv;","plus;","plusacir;","plusb;","pluscir;","plusdo;","plusdu;","pluse;","plusmn","plusmn;","plussim;","plustwo;","pm;","pointint;","popf;","pound","pound;","pr;","prE;","prap;","prcue;","pre;","prec;","precapprox;","preccurlyeq;","preceq;","precnapprox;","precneqq;","precnsim;","precsim;","prime;","primes;","prnE;","prnap;","prnsim;","prod;","profalar;","profline;","profsurf;","prop;","propto;","prsim;","prurel;","pscr;","psi;","puncsp;","qfr;","qint;","qopf;","qprime;","qscr;","quaternions;","quatint;","quest;","questeq;","quot","quot;","rAarr;","rArr;","rAtail;","rBarr;","rHar;","race;","racute;","radic;","raemptyv;","rang;","rangd;","range;","rangle;","raquo","raquo;","rarr;","rarrap;","rarrb;","rarrbfs;","rarrc;","rarrfs;","rarrhk;","rarrlp;","rarrpl;","rarrsim;","rarrtl;","rarrw;","ratail;","ratio;","rationals;","rbarr;","rbbrk;","rbrace;","rbrack;","rbrke;","rbrksld;","rbrkslu;","rcaron;","rcedil;","rceil;","rcub;","rcy;","rdca;","rdldhar;","rdquo;","rdquor;","rdsh;","real;","realine;","realpart;","reals;","rect;","reg","reg;","rfisht;","rfloor;","rfr;","rhard;","rharu;","rharul;","rho;","rhov;","rightarrow;","rightarrowtail;","rightharpoondown;","rightharpoonup;","rightleftarrows;","rightleftharpoons;","rightrightarrows;","rightsquigarrow;","rightthreetimes;","ring;","risingdotseq;","rlarr;","rlhar;","rlm;","rmoust;","rmoustache;","rnmid;","roang;","roarr;","robrk;","ropar;","ropf;","roplus;","rotimes;","rpar;","rpargt;","rppolint;","rrarr;","rsaquo;","rscr;","rsh;","rsqb;","rsquo;","rsquor;","rthree;","rtimes;","rtri;","rtrie;","rtrif;","rtriltri;","ruluhar;","rx;","sacute;","sbquo;","sc;","scE;","scap;","scaron;","sccue;","sce;","scedil;","scirc;","scnE;","scnap;","scnsim;","scpolint;","scsim;","scy;","sdot;","sdotb;","sdote;","seArr;","searhk;","searr;","searrow;","sect","sect;","semi;","seswar;","setminus;","setmn;","sext;","sfr;","sfrown;","sharp;","shchcy;","shcy;","shortmid;","shortparallel;","shy","shy;","sigma;","sigmaf;","sigmav;","sim;","simdot;","sime;","simeq;","simg;","simgE;","siml;","simlE;","simne;","simplus;","simrarr;","slarr;","smallsetminus;","smashp;","smeparsl;","smid;","smile;","smt;","smte;","smtes;","softcy;","sol;","solb;","solbar;","sopf;","spades;","spadesuit;","spar;","sqcap;","sqcaps;","sqcup;","sqcups;","sqsub;","sqsube;","sqsubset;","sqsubseteq;","sqsup;","sqsupe;","sqsupset;","sqsupseteq;","squ;","square;","squarf;","squf;","srarr;","sscr;","ssetmn;","ssmile;","sstarf;","star;","starf;","straightepsilon;","straightphi;","strns;","sub;","subE;","subdot;","sube;","subedot;","submult;","subnE;","subne;","subplus;","subrarr;","subset;","subseteq;","subseteqq;","subsetneq;","subsetneqq;","subsim;","subsub;","subsup;","succ;","succapprox;","succcurlyeq;","succeq;","succnapprox;","succneqq;","succnsim;","succsim;","sum;","sung;","sup1","sup1;","sup2","sup2;","sup3","sup3;","sup;","supE;","supdot;","supdsub;","supe;","supedot;","suphsol;","suphsub;","suplarr;","supmult;","supnE;","supne;","supplus;","supset;","supseteq;","supseteqq;","supsetneq;","supsetneqq;","supsim;","supsub;","supsup;","swArr;","swarhk;","swarr;","swarrow;","swnwar;","szlig","szlig;","target;","tau;","tbrk;","tcaron;","tcedil;","tcy;","tdot;","telrec;","tfr;","there4;","therefore;","theta;","thetasym;","thetav;","thickapprox;","thicksim;","thinsp;","thkap;","thksim;","thorn","thorn;","tilde;","times","times;","timesb;","timesbar;","timesd;","tint;","toea;","top;","topbot;","topcir;","topf;","topfork;","tosa;","tprime;","trade;","triangle;","triangledown;","triangleleft;","trianglelefteq;","triangleq;","triangleright;","trianglerighteq;","tridot;","trie;","triminus;","triplus;","trisb;","tritime;","trpezium;","tscr;","tscy;","tshcy;","tstrok;","twixt;","twoheadleftarrow;","twoheadrightarrow;","uArr;","uHar;","uacute","uacute;","uarr;","ubrcy;","ubreve;","ucirc","ucirc;","ucy;","udarr;","udblac;","udhar;","ufisht;","ufr;","ugrave","ugrave;","uharl;","uharr;","uhblk;","ulcorn;","ulcorner;","ulcrop;","ultri;","umacr;","uml","uml;","uogon;","uopf;","uparrow;","updownarrow;","upharpoonleft;","upharpoonright;","uplus;","upsi;","upsih;","upsilon;","upuparrows;","urcorn;","urcorner;","urcrop;","uring;","urtri;","uscr;","utdot;","utilde;","utri;","utrif;","uuarr;","uuml","uuml;","uwangle;","vArr;","vBar;","vBarv;","vDash;","vangrt;","varepsilon;","varkappa;","varnothing;","varphi;","varpi;","varpropto;","varr;","varrho;","varsigma;","varsubsetneq;","varsubsetneqq;","varsupsetneq;","varsupsetneqq;","vartheta;","vartriangleleft;","vartriangleright;","vcy;","vdash;","vee;","veebar;","veeeq;","vellip;","verbar;","vert;","vfr;","vltri;","vnsub;","vnsup;","vopf;","vprop;","vrtri;","vscr;","vsubnE;","vsubne;","vsupnE;","vsupne;","vzigzag;","wcirc;","wedbar;","wedge;","wedgeq;","weierp;","wfr;","wopf;","wp;","wr;","wreath;","wscr;","xcap;","xcirc;","xcup;","xdtri;","xfr;","xhArr;","xharr;","xi;","xlArr;","xlarr;","xmap;","xnis;","xodot;","xopf;","xoplus;","xotime;","xrArr;","xrarr;","xscr;","xsqcup;","xuplus;","xutri;","xvee;","xwedge;","yacute","yacute;","yacy;","ycirc;","ycy;","yen","yen;","yfr;","yicy;","yopf;","yscr;","yucy;","yuml","yuml;","zacute;","zcaron;","zcy;","zdot;","zeetrf;","zeta;","zfr;","zhcy;","zigrarr;","zopf;","zscr;","zwj;","zwnj;"]),t.s)
C.Z=new H.v(2231,{AElig:"\xc6","AElig;":"\xc6",AMP:"&","AMP;":"&",Aacute:"\xc1","Aacute;":"\xc1","Abreve;":"\u0102",Acirc:"\xc2","Acirc;":"\xc2","Acy;":"\u0410","Afr;":"\ud835\udd04",Agrave:"\xc0","Agrave;":"\xc0","Alpha;":"\u0391","Amacr;":"\u0100","And;":"\u2a53","Aogon;":"\u0104","Aopf;":"\ud835\udd38","ApplyFunction;":"\u2061",Aring:"\xc5","Aring;":"\xc5","Ascr;":"\ud835\udc9c","Assign;":"\u2254",Atilde:"\xc3","Atilde;":"\xc3",Auml:"\xc4","Auml;":"\xc4","Backslash;":"\u2216","Barv;":"\u2ae7","Barwed;":"\u2306","Bcy;":"\u0411","Because;":"\u2235","Bernoullis;":"\u212c","Beta;":"\u0392","Bfr;":"\ud835\udd05","Bopf;":"\ud835\udd39","Breve;":"\u02d8","Bscr;":"\u212c","Bumpeq;":"\u224e","CHcy;":"\u0427",COPY:"\xa9","COPY;":"\xa9","Cacute;":"\u0106","Cap;":"\u22d2","CapitalDifferentialD;":"\u2145","Cayleys;":"\u212d","Ccaron;":"\u010c",Ccedil:"\xc7","Ccedil;":"\xc7","Ccirc;":"\u0108","Cconint;":"\u2230","Cdot;":"\u010a","Cedilla;":"\xb8","CenterDot;":"\xb7","Cfr;":"\u212d","Chi;":"\u03a7","CircleDot;":"\u2299","CircleMinus;":"\u2296","CirclePlus;":"\u2295","CircleTimes;":"\u2297","ClockwiseContourIntegral;":"\u2232","CloseCurlyDoubleQuote;":"\u201d","CloseCurlyQuote;":"\u2019","Colon;":"\u2237","Colone;":"\u2a74","Congruent;":"\u2261","Conint;":"\u222f","ContourIntegral;":"\u222e","Copf;":"\u2102","Coproduct;":"\u2210","CounterClockwiseContourIntegral;":"\u2233","Cross;":"\u2a2f","Cscr;":"\ud835\udc9e","Cup;":"\u22d3","CupCap;":"\u224d","DD;":"\u2145","DDotrahd;":"\u2911","DJcy;":"\u0402","DScy;":"\u0405","DZcy;":"\u040f","Dagger;":"\u2021","Darr;":"\u21a1","Dashv;":"\u2ae4","Dcaron;":"\u010e","Dcy;":"\u0414","Del;":"\u2207","Delta;":"\u0394","Dfr;":"\ud835\udd07","DiacriticalAcute;":"\xb4","DiacriticalDot;":"\u02d9","DiacriticalDoubleAcute;":"\u02dd","DiacriticalGrave;":"`","DiacriticalTilde;":"\u02dc","Diamond;":"\u22c4","DifferentialD;":"\u2146","Dopf;":"\ud835\udd3b","Dot;":"\xa8","DotDot;":"\u20dc","DotEqual;":"\u2250","DoubleContourIntegral;":"\u222f","DoubleDot;":"\xa8","DoubleDownArrow;":"\u21d3","DoubleLeftArrow;":"\u21d0","DoubleLeftRightArrow;":"\u21d4","DoubleLeftTee;":"\u2ae4","DoubleLongLeftArrow;":"\u27f8","DoubleLongLeftRightArrow;":"\u27fa","DoubleLongRightArrow;":"\u27f9","DoubleRightArrow;":"\u21d2","DoubleRightTee;":"\u22a8","DoubleUpArrow;":"\u21d1","DoubleUpDownArrow;":"\u21d5","DoubleVerticalBar;":"\u2225","DownArrow;":"\u2193","DownArrowBar;":"\u2913","DownArrowUpArrow;":"\u21f5","DownBreve;":"\u0311","DownLeftRightVector;":"\u2950","DownLeftTeeVector;":"\u295e","DownLeftVector;":"\u21bd","DownLeftVectorBar;":"\u2956","DownRightTeeVector;":"\u295f","DownRightVector;":"\u21c1","DownRightVectorBar;":"\u2957","DownTee;":"\u22a4","DownTeeArrow;":"\u21a7","Downarrow;":"\u21d3","Dscr;":"\ud835\udc9f","Dstrok;":"\u0110","ENG;":"\u014a",ETH:"\xd0","ETH;":"\xd0",Eacute:"\xc9","Eacute;":"\xc9","Ecaron;":"\u011a",Ecirc:"\xca","Ecirc;":"\xca","Ecy;":"\u042d","Edot;":"\u0116","Efr;":"\ud835\udd08",Egrave:"\xc8","Egrave;":"\xc8","Element;":"\u2208","Emacr;":"\u0112","EmptySmallSquare;":"\u25fb","EmptyVerySmallSquare;":"\u25ab","Eogon;":"\u0118","Eopf;":"\ud835\udd3c","Epsilon;":"\u0395","Equal;":"\u2a75","EqualTilde;":"\u2242","Equilibrium;":"\u21cc","Escr;":"\u2130","Esim;":"\u2a73","Eta;":"\u0397",Euml:"\xcb","Euml;":"\xcb","Exists;":"\u2203","ExponentialE;":"\u2147","Fcy;":"\u0424","Ffr;":"\ud835\udd09","FilledSmallSquare;":"\u25fc","FilledVerySmallSquare;":"\u25aa","Fopf;":"\ud835\udd3d","ForAll;":"\u2200","Fouriertrf;":"\u2131","Fscr;":"\u2131","GJcy;":"\u0403",GT:">","GT;":">","Gamma;":"\u0393","Gammad;":"\u03dc","Gbreve;":"\u011e","Gcedil;":"\u0122","Gcirc;":"\u011c","Gcy;":"\u0413","Gdot;":"\u0120","Gfr;":"\ud835\udd0a","Gg;":"\u22d9","Gopf;":"\ud835\udd3e","GreaterEqual;":"\u2265","GreaterEqualLess;":"\u22db","GreaterFullEqual;":"\u2267","GreaterGreater;":"\u2aa2","GreaterLess;":"\u2277","GreaterSlantEqual;":"\u2a7e","GreaterTilde;":"\u2273","Gscr;":"\ud835\udca2","Gt;":"\u226b","HARDcy;":"\u042a","Hacek;":"\u02c7","Hat;":"^","Hcirc;":"\u0124","Hfr;":"\u210c","HilbertSpace;":"\u210b","Hopf;":"\u210d","HorizontalLine;":"\u2500","Hscr;":"\u210b","Hstrok;":"\u0126","HumpDownHump;":"\u224e","HumpEqual;":"\u224f","IEcy;":"\u0415","IJlig;":"\u0132","IOcy;":"\u0401",Iacute:"\xcd","Iacute;":"\xcd",Icirc:"\xce","Icirc;":"\xce","Icy;":"\u0418","Idot;":"\u0130","Ifr;":"\u2111",Igrave:"\xcc","Igrave;":"\xcc","Im;":"\u2111","Imacr;":"\u012a","ImaginaryI;":"\u2148","Implies;":"\u21d2","Int;":"\u222c","Integral;":"\u222b","Intersection;":"\u22c2","InvisibleComma;":"\u2063","InvisibleTimes;":"\u2062","Iogon;":"\u012e","Iopf;":"\ud835\udd40","Iota;":"\u0399","Iscr;":"\u2110","Itilde;":"\u0128","Iukcy;":"\u0406",Iuml:"\xcf","Iuml;":"\xcf","Jcirc;":"\u0134","Jcy;":"\u0419","Jfr;":"\ud835\udd0d","Jopf;":"\ud835\udd41","Jscr;":"\ud835\udca5","Jsercy;":"\u0408","Jukcy;":"\u0404","KHcy;":"\u0425","KJcy;":"\u040c","Kappa;":"\u039a","Kcedil;":"\u0136","Kcy;":"\u041a","Kfr;":"\ud835\udd0e","Kopf;":"\ud835\udd42","Kscr;":"\ud835\udca6","LJcy;":"\u0409",LT:"<","LT;":"<","Lacute;":"\u0139","Lambda;":"\u039b","Lang;":"\u27ea","Laplacetrf;":"\u2112","Larr;":"\u219e","Lcaron;":"\u013d","Lcedil;":"\u013b","Lcy;":"\u041b","LeftAngleBracket;":"\u27e8","LeftArrow;":"\u2190","LeftArrowBar;":"\u21e4","LeftArrowRightArrow;":"\u21c6","LeftCeiling;":"\u2308","LeftDoubleBracket;":"\u27e6","LeftDownTeeVector;":"\u2961","LeftDownVector;":"\u21c3","LeftDownVectorBar;":"\u2959","LeftFloor;":"\u230a","LeftRightArrow;":"\u2194","LeftRightVector;":"\u294e","LeftTee;":"\u22a3","LeftTeeArrow;":"\u21a4","LeftTeeVector;":"\u295a","LeftTriangle;":"\u22b2","LeftTriangleBar;":"\u29cf","LeftTriangleEqual;":"\u22b4","LeftUpDownVector;":"\u2951","LeftUpTeeVector;":"\u2960","LeftUpVector;":"\u21bf","LeftUpVectorBar;":"\u2958","LeftVector;":"\u21bc","LeftVectorBar;":"\u2952","Leftarrow;":"\u21d0","Leftrightarrow;":"\u21d4","LessEqualGreater;":"\u22da","LessFullEqual;":"\u2266","LessGreater;":"\u2276","LessLess;":"\u2aa1","LessSlantEqual;":"\u2a7d","LessTilde;":"\u2272","Lfr;":"\ud835\udd0f","Ll;":"\u22d8","Lleftarrow;":"\u21da","Lmidot;":"\u013f","LongLeftArrow;":"\u27f5","LongLeftRightArrow;":"\u27f7","LongRightArrow;":"\u27f6","Longleftarrow;":"\u27f8","Longleftrightarrow;":"\u27fa","Longrightarrow;":"\u27f9","Lopf;":"\ud835\udd43","LowerLeftArrow;":"\u2199","LowerRightArrow;":"\u2198","Lscr;":"\u2112","Lsh;":"\u21b0","Lstrok;":"\u0141","Lt;":"\u226a","Map;":"\u2905","Mcy;":"\u041c","MediumSpace;":"\u205f","Mellintrf;":"\u2133","Mfr;":"\ud835\udd10","MinusPlus;":"\u2213","Mopf;":"\ud835\udd44","Mscr;":"\u2133","Mu;":"\u039c","NJcy;":"\u040a","Nacute;":"\u0143","Ncaron;":"\u0147","Ncedil;":"\u0145","Ncy;":"\u041d","NegativeMediumSpace;":"\u200b","NegativeThickSpace;":"\u200b","NegativeThinSpace;":"\u200b","NegativeVeryThinSpace;":"\u200b","NestedGreaterGreater;":"\u226b","NestedLessLess;":"\u226a","NewLine;":"\n","Nfr;":"\ud835\udd11","NoBreak;":"\u2060","NonBreakingSpace;":"\xa0","Nopf;":"\u2115","Not;":"\u2aec","NotCongruent;":"\u2262","NotCupCap;":"\u226d","NotDoubleVerticalBar;":"\u2226","NotElement;":"\u2209","NotEqual;":"\u2260","NotEqualTilde;":"\u2242\u0338","NotExists;":"\u2204","NotGreater;":"\u226f","NotGreaterEqual;":"\u2271","NotGreaterFullEqual;":"\u2267\u0338","NotGreaterGreater;":"\u226b\u0338","NotGreaterLess;":"\u2279","NotGreaterSlantEqual;":"\u2a7e\u0338","NotGreaterTilde;":"\u2275","NotHumpDownHump;":"\u224e\u0338","NotHumpEqual;":"\u224f\u0338","NotLeftTriangle;":"\u22ea","NotLeftTriangleBar;":"\u29cf\u0338","NotLeftTriangleEqual;":"\u22ec","NotLess;":"\u226e","NotLessEqual;":"\u2270","NotLessGreater;":"\u2278","NotLessLess;":"\u226a\u0338","NotLessSlantEqual;":"\u2a7d\u0338","NotLessTilde;":"\u2274","NotNestedGreaterGreater;":"\u2aa2\u0338","NotNestedLessLess;":"\u2aa1\u0338","NotPrecedes;":"\u2280","NotPrecedesEqual;":"\u2aaf\u0338","NotPrecedesSlantEqual;":"\u22e0","NotReverseElement;":"\u220c","NotRightTriangle;":"\u22eb","NotRightTriangleBar;":"\u29d0\u0338","NotRightTriangleEqual;":"\u22ed","NotSquareSubset;":"\u228f\u0338","NotSquareSubsetEqual;":"\u22e2","NotSquareSuperset;":"\u2290\u0338","NotSquareSupersetEqual;":"\u22e3","NotSubset;":"\u2282\u20d2","NotSubsetEqual;":"\u2288","NotSucceeds;":"\u2281","NotSucceedsEqual;":"\u2ab0\u0338","NotSucceedsSlantEqual;":"\u22e1","NotSucceedsTilde;":"\u227f\u0338","NotSuperset;":"\u2283\u20d2","NotSupersetEqual;":"\u2289","NotTilde;":"\u2241","NotTildeEqual;":"\u2244","NotTildeFullEqual;":"\u2247","NotTildeTilde;":"\u2249","NotVerticalBar;":"\u2224","Nscr;":"\ud835\udca9",Ntilde:"\xd1","Ntilde;":"\xd1","Nu;":"\u039d","OElig;":"\u0152",Oacute:"\xd3","Oacute;":"\xd3",Ocirc:"\xd4","Ocirc;":"\xd4","Ocy;":"\u041e","Odblac;":"\u0150","Ofr;":"\ud835\udd12",Ograve:"\xd2","Ograve;":"\xd2","Omacr;":"\u014c","Omega;":"\u03a9","Omicron;":"\u039f","Oopf;":"\ud835\udd46","OpenCurlyDoubleQuote;":"\u201c","OpenCurlyQuote;":"\u2018","Or;":"\u2a54","Oscr;":"\ud835\udcaa",Oslash:"\xd8","Oslash;":"\xd8",Otilde:"\xd5","Otilde;":"\xd5","Otimes;":"\u2a37",Ouml:"\xd6","Ouml;":"\xd6","OverBar;":"\u203e","OverBrace;":"\u23de","OverBracket;":"\u23b4","OverParenthesis;":"\u23dc","PartialD;":"\u2202","Pcy;":"\u041f","Pfr;":"\ud835\udd13","Phi;":"\u03a6","Pi;":"\u03a0","PlusMinus;":"\xb1","Poincareplane;":"\u210c","Popf;":"\u2119","Pr;":"\u2abb","Precedes;":"\u227a","PrecedesEqual;":"\u2aaf","PrecedesSlantEqual;":"\u227c","PrecedesTilde;":"\u227e","Prime;":"\u2033","Product;":"\u220f","Proportion;":"\u2237","Proportional;":"\u221d","Pscr;":"\ud835\udcab","Psi;":"\u03a8",QUOT:'"',"QUOT;":'"',"Qfr;":"\ud835\udd14","Qopf;":"\u211a","Qscr;":"\ud835\udcac","RBarr;":"\u2910",REG:"\xae","REG;":"\xae","Racute;":"\u0154","Rang;":"\u27eb","Rarr;":"\u21a0","Rarrtl;":"\u2916","Rcaron;":"\u0158","Rcedil;":"\u0156","Rcy;":"\u0420","Re;":"\u211c","ReverseElement;":"\u220b","ReverseEquilibrium;":"\u21cb","ReverseUpEquilibrium;":"\u296f","Rfr;":"\u211c","Rho;":"\u03a1","RightAngleBracket;":"\u27e9","RightArrow;":"\u2192","RightArrowBar;":"\u21e5","RightArrowLeftArrow;":"\u21c4","RightCeiling;":"\u2309","RightDoubleBracket;":"\u27e7","RightDownTeeVector;":"\u295d","RightDownVector;":"\u21c2","RightDownVectorBar;":"\u2955","RightFloor;":"\u230b","RightTee;":"\u22a2","RightTeeArrow;":"\u21a6","RightTeeVector;":"\u295b","RightTriangle;":"\u22b3","RightTriangleBar;":"\u29d0","RightTriangleEqual;":"\u22b5","RightUpDownVector;":"\u294f","RightUpTeeVector;":"\u295c","RightUpVector;":"\u21be","RightUpVectorBar;":"\u2954","RightVector;":"\u21c0","RightVectorBar;":"\u2953","Rightarrow;":"\u21d2","Ropf;":"\u211d","RoundImplies;":"\u2970","Rrightarrow;":"\u21db","Rscr;":"\u211b","Rsh;":"\u21b1","RuleDelayed;":"\u29f4","SHCHcy;":"\u0429","SHcy;":"\u0428","SOFTcy;":"\u042c","Sacute;":"\u015a","Sc;":"\u2abc","Scaron;":"\u0160","Scedil;":"\u015e","Scirc;":"\u015c","Scy;":"\u0421","Sfr;":"\ud835\udd16","ShortDownArrow;":"\u2193","ShortLeftArrow;":"\u2190","ShortRightArrow;":"\u2192","ShortUpArrow;":"\u2191","Sigma;":"\u03a3","SmallCircle;":"\u2218","Sopf;":"\ud835\udd4a","Sqrt;":"\u221a","Square;":"\u25a1","SquareIntersection;":"\u2293","SquareSubset;":"\u228f","SquareSubsetEqual;":"\u2291","SquareSuperset;":"\u2290","SquareSupersetEqual;":"\u2292","SquareUnion;":"\u2294","Sscr;":"\ud835\udcae","Star;":"\u22c6","Sub;":"\u22d0","Subset;":"\u22d0","SubsetEqual;":"\u2286","Succeeds;":"\u227b","SucceedsEqual;":"\u2ab0","SucceedsSlantEqual;":"\u227d","SucceedsTilde;":"\u227f","SuchThat;":"\u220b","Sum;":"\u2211","Sup;":"\u22d1","Superset;":"\u2283","SupersetEqual;":"\u2287","Supset;":"\u22d1",THORN:"\xde","THORN;":"\xde","TRADE;":"\u2122","TSHcy;":"\u040b","TScy;":"\u0426","Tab;":"\t","Tau;":"\u03a4","Tcaron;":"\u0164","Tcedil;":"\u0162","Tcy;":"\u0422","Tfr;":"\ud835\udd17","Therefore;":"\u2234","Theta;":"\u0398","ThickSpace;":"\u205f\u200a","ThinSpace;":"\u2009","Tilde;":"\u223c","TildeEqual;":"\u2243","TildeFullEqual;":"\u2245","TildeTilde;":"\u2248","Topf;":"\ud835\udd4b","TripleDot;":"\u20db","Tscr;":"\ud835\udcaf","Tstrok;":"\u0166",Uacute:"\xda","Uacute;":"\xda","Uarr;":"\u219f","Uarrocir;":"\u2949","Ubrcy;":"\u040e","Ubreve;":"\u016c",Ucirc:"\xdb","Ucirc;":"\xdb","Ucy;":"\u0423","Udblac;":"\u0170","Ufr;":"\ud835\udd18",Ugrave:"\xd9","Ugrave;":"\xd9","Umacr;":"\u016a","UnderBar;":"_","UnderBrace;":"\u23df","UnderBracket;":"\u23b5","UnderParenthesis;":"\u23dd","Union;":"\u22c3","UnionPlus;":"\u228e","Uogon;":"\u0172","Uopf;":"\ud835\udd4c","UpArrow;":"\u2191","UpArrowBar;":"\u2912","UpArrowDownArrow;":"\u21c5","UpDownArrow;":"\u2195","UpEquilibrium;":"\u296e","UpTee;":"\u22a5","UpTeeArrow;":"\u21a5","Uparrow;":"\u21d1","Updownarrow;":"\u21d5","UpperLeftArrow;":"\u2196","UpperRightArrow;":"\u2197","Upsi;":"\u03d2","Upsilon;":"\u03a5","Uring;":"\u016e","Uscr;":"\ud835\udcb0","Utilde;":"\u0168",Uuml:"\xdc","Uuml;":"\xdc","VDash;":"\u22ab","Vbar;":"\u2aeb","Vcy;":"\u0412","Vdash;":"\u22a9","Vdashl;":"\u2ae6","Vee;":"\u22c1","Verbar;":"\u2016","Vert;":"\u2016","VerticalBar;":"\u2223","VerticalLine;":"|","VerticalSeparator;":"\u2758","VerticalTilde;":"\u2240","VeryThinSpace;":"\u200a","Vfr;":"\ud835\udd19","Vopf;":"\ud835\udd4d","Vscr;":"\ud835\udcb1","Vvdash;":"\u22aa","Wcirc;":"\u0174","Wedge;":"\u22c0","Wfr;":"\ud835\udd1a","Wopf;":"\ud835\udd4e","Wscr;":"\ud835\udcb2","Xfr;":"\ud835\udd1b","Xi;":"\u039e","Xopf;":"\ud835\udd4f","Xscr;":"\ud835\udcb3","YAcy;":"\u042f","YIcy;":"\u0407","YUcy;":"\u042e",Yacute:"\xdd","Yacute;":"\xdd","Ycirc;":"\u0176","Ycy;":"\u042b","Yfr;":"\ud835\udd1c","Yopf;":"\ud835\udd50","Yscr;":"\ud835\udcb4","Yuml;":"\u0178","ZHcy;":"\u0416","Zacute;":"\u0179","Zcaron;":"\u017d","Zcy;":"\u0417","Zdot;":"\u017b","ZeroWidthSpace;":"\u200b","Zeta;":"\u0396","Zfr;":"\u2128","Zopf;":"\u2124","Zscr;":"\ud835\udcb5",aacute:"\xe1","aacute;":"\xe1","abreve;":"\u0103","ac;":"\u223e","acE;":"\u223e\u0333","acd;":"\u223f",acirc:"\xe2","acirc;":"\xe2",acute:"\xb4","acute;":"\xb4","acy;":"\u0430",aelig:"\xe6","aelig;":"\xe6","af;":"\u2061","afr;":"\ud835\udd1e",agrave:"\xe0","agrave;":"\xe0","alefsym;":"\u2135","aleph;":"\u2135","alpha;":"\u03b1","amacr;":"\u0101","amalg;":"\u2a3f",amp:"&","amp;":"&","and;":"\u2227","andand;":"\u2a55","andd;":"\u2a5c","andslope;":"\u2a58","andv;":"\u2a5a","ang;":"\u2220","ange;":"\u29a4","angle;":"\u2220","angmsd;":"\u2221","angmsdaa;":"\u29a8","angmsdab;":"\u29a9","angmsdac;":"\u29aa","angmsdad;":"\u29ab","angmsdae;":"\u29ac","angmsdaf;":"\u29ad","angmsdag;":"\u29ae","angmsdah;":"\u29af","angrt;":"\u221f","angrtvb;":"\u22be","angrtvbd;":"\u299d","angsph;":"\u2222","angst;":"\xc5","angzarr;":"\u237c","aogon;":"\u0105","aopf;":"\ud835\udd52","ap;":"\u2248","apE;":"\u2a70","apacir;":"\u2a6f","ape;":"\u224a","apid;":"\u224b","apos;":"'","approx;":"\u2248","approxeq;":"\u224a",aring:"\xe5","aring;":"\xe5","ascr;":"\ud835\udcb6","ast;":"*","asymp;":"\u2248","asympeq;":"\u224d",atilde:"\xe3","atilde;":"\xe3",auml:"\xe4","auml;":"\xe4","awconint;":"\u2233","awint;":"\u2a11","bNot;":"\u2aed","backcong;":"\u224c","backepsilon;":"\u03f6","backprime;":"\u2035","backsim;":"\u223d","backsimeq;":"\u22cd","barvee;":"\u22bd","barwed;":"\u2305","barwedge;":"\u2305","bbrk;":"\u23b5","bbrktbrk;":"\u23b6","bcong;":"\u224c","bcy;":"\u0431","bdquo;":"\u201e","becaus;":"\u2235","because;":"\u2235","bemptyv;":"\u29b0","bepsi;":"\u03f6","bernou;":"\u212c","beta;":"\u03b2","beth;":"\u2136","between;":"\u226c","bfr;":"\ud835\udd1f","bigcap;":"\u22c2","bigcirc;":"\u25ef","bigcup;":"\u22c3","bigodot;":"\u2a00","bigoplus;":"\u2a01","bigotimes;":"\u2a02","bigsqcup;":"\u2a06","bigstar;":"\u2605","bigtriangledown;":"\u25bd","bigtriangleup;":"\u25b3","biguplus;":"\u2a04","bigvee;":"\u22c1","bigwedge;":"\u22c0","bkarow;":"\u290d","blacklozenge;":"\u29eb","blacksquare;":"\u25aa","blacktriangle;":"\u25b4","blacktriangledown;":"\u25be","blacktriangleleft;":"\u25c2","blacktriangleright;":"\u25b8","blank;":"\u2423","blk12;":"\u2592","blk14;":"\u2591","blk34;":"\u2593","block;":"\u2588","bne;":"=\u20e5","bnequiv;":"\u2261\u20e5","bnot;":"\u2310","bopf;":"\ud835\udd53","bot;":"\u22a5","bottom;":"\u22a5","bowtie;":"\u22c8","boxDL;":"\u2557","boxDR;":"\u2554","boxDl;":"\u2556","boxDr;":"\u2553","boxH;":"\u2550","boxHD;":"\u2566","boxHU;":"\u2569","boxHd;":"\u2564","boxHu;":"\u2567","boxUL;":"\u255d","boxUR;":"\u255a","boxUl;":"\u255c","boxUr;":"\u2559","boxV;":"\u2551","boxVH;":"\u256c","boxVL;":"\u2563","boxVR;":"\u2560","boxVh;":"\u256b","boxVl;":"\u2562","boxVr;":"\u255f","boxbox;":"\u29c9","boxdL;":"\u2555","boxdR;":"\u2552","boxdl;":"\u2510","boxdr;":"\u250c","boxh;":"\u2500","boxhD;":"\u2565","boxhU;":"\u2568","boxhd;":"\u252c","boxhu;":"\u2534","boxminus;":"\u229f","boxplus;":"\u229e","boxtimes;":"\u22a0","boxuL;":"\u255b","boxuR;":"\u2558","boxul;":"\u2518","boxur;":"\u2514","boxv;":"\u2502","boxvH;":"\u256a","boxvL;":"\u2561","boxvR;":"\u255e","boxvh;":"\u253c","boxvl;":"\u2524","boxvr;":"\u251c","bprime;":"\u2035","breve;":"\u02d8",brvbar:"\xa6","brvbar;":"\xa6","bscr;":"\ud835\udcb7","bsemi;":"\u204f","bsim;":"\u223d","bsime;":"\u22cd","bsol;":"\\","bsolb;":"\u29c5","bsolhsub;":"\u27c8","bull;":"\u2022","bullet;":"\u2022","bump;":"\u224e","bumpE;":"\u2aae","bumpe;":"\u224f","bumpeq;":"\u224f","cacute;":"\u0107","cap;":"\u2229","capand;":"\u2a44","capbrcup;":"\u2a49","capcap;":"\u2a4b","capcup;":"\u2a47","capdot;":"\u2a40","caps;":"\u2229\ufe00","caret;":"\u2041","caron;":"\u02c7","ccaps;":"\u2a4d","ccaron;":"\u010d",ccedil:"\xe7","ccedil;":"\xe7","ccirc;":"\u0109","ccups;":"\u2a4c","ccupssm;":"\u2a50","cdot;":"\u010b",cedil:"\xb8","cedil;":"\xb8","cemptyv;":"\u29b2",cent:"\xa2","cent;":"\xa2","centerdot;":"\xb7","cfr;":"\ud835\udd20","chcy;":"\u0447","check;":"\u2713","checkmark;":"\u2713","chi;":"\u03c7","cir;":"\u25cb","cirE;":"\u29c3","circ;":"\u02c6","circeq;":"\u2257","circlearrowleft;":"\u21ba","circlearrowright;":"\u21bb","circledR;":"\xae","circledS;":"\u24c8","circledast;":"\u229b","circledcirc;":"\u229a","circleddash;":"\u229d","cire;":"\u2257","cirfnint;":"\u2a10","cirmid;":"\u2aef","cirscir;":"\u29c2","clubs;":"\u2663","clubsuit;":"\u2663","colon;":":","colone;":"\u2254","coloneq;":"\u2254","comma;":",","commat;":"@","comp;":"\u2201","compfn;":"\u2218","complement;":"\u2201","complexes;":"\u2102","cong;":"\u2245","congdot;":"\u2a6d","conint;":"\u222e","copf;":"\ud835\udd54","coprod;":"\u2210",copy:"\xa9","copy;":"\xa9","copysr;":"\u2117","crarr;":"\u21b5","cross;":"\u2717","cscr;":"\ud835\udcb8","csub;":"\u2acf","csube;":"\u2ad1","csup;":"\u2ad0","csupe;":"\u2ad2","ctdot;":"\u22ef","cudarrl;":"\u2938","cudarrr;":"\u2935","cuepr;":"\u22de","cuesc;":"\u22df","cularr;":"\u21b6","cularrp;":"\u293d","cup;":"\u222a","cupbrcap;":"\u2a48","cupcap;":"\u2a46","cupcup;":"\u2a4a","cupdot;":"\u228d","cupor;":"\u2a45","cups;":"\u222a\ufe00","curarr;":"\u21b7","curarrm;":"\u293c","curlyeqprec;":"\u22de","curlyeqsucc;":"\u22df","curlyvee;":"\u22ce","curlywedge;":"\u22cf",curren:"\xa4","curren;":"\xa4","curvearrowleft;":"\u21b6","curvearrowright;":"\u21b7","cuvee;":"\u22ce","cuwed;":"\u22cf","cwconint;":"\u2232","cwint;":"\u2231","cylcty;":"\u232d","dArr;":"\u21d3","dHar;":"\u2965","dagger;":"\u2020","daleth;":"\u2138","darr;":"\u2193","dash;":"\u2010","dashv;":"\u22a3","dbkarow;":"\u290f","dblac;":"\u02dd","dcaron;":"\u010f","dcy;":"\u0434","dd;":"\u2146","ddagger;":"\u2021","ddarr;":"\u21ca","ddotseq;":"\u2a77",deg:"\xb0","deg;":"\xb0","delta;":"\u03b4","demptyv;":"\u29b1","dfisht;":"\u297f","dfr;":"\ud835\udd21","dharl;":"\u21c3","dharr;":"\u21c2","diam;":"\u22c4","diamond;":"\u22c4","diamondsuit;":"\u2666","diams;":"\u2666","die;":"\xa8","digamma;":"\u03dd","disin;":"\u22f2","div;":"\xf7",divide:"\xf7","divide;":"\xf7","divideontimes;":"\u22c7","divonx;":"\u22c7","djcy;":"\u0452","dlcorn;":"\u231e","dlcrop;":"\u230d","dollar;":"$","dopf;":"\ud835\udd55","dot;":"\u02d9","doteq;":"\u2250","doteqdot;":"\u2251","dotminus;":"\u2238","dotplus;":"\u2214","dotsquare;":"\u22a1","doublebarwedge;":"\u2306","downarrow;":"\u2193","downdownarrows;":"\u21ca","downharpoonleft;":"\u21c3","downharpoonright;":"\u21c2","drbkarow;":"\u2910","drcorn;":"\u231f","drcrop;":"\u230c","dscr;":"\ud835\udcb9","dscy;":"\u0455","dsol;":"\u29f6","dstrok;":"\u0111","dtdot;":"\u22f1","dtri;":"\u25bf","dtrif;":"\u25be","duarr;":"\u21f5","duhar;":"\u296f","dwangle;":"\u29a6","dzcy;":"\u045f","dzigrarr;":"\u27ff","eDDot;":"\u2a77","eDot;":"\u2251",eacute:"\xe9","eacute;":"\xe9","easter;":"\u2a6e","ecaron;":"\u011b","ecir;":"\u2256",ecirc:"\xea","ecirc;":"\xea","ecolon;":"\u2255","ecy;":"\u044d","edot;":"\u0117","ee;":"\u2147","efDot;":"\u2252","efr;":"\ud835\udd22","eg;":"\u2a9a",egrave:"\xe8","egrave;":"\xe8","egs;":"\u2a96","egsdot;":"\u2a98","el;":"\u2a99","elinters;":"\u23e7","ell;":"\u2113","els;":"\u2a95","elsdot;":"\u2a97","emacr;":"\u0113","empty;":"\u2205","emptyset;":"\u2205","emptyv;":"\u2205","emsp13;":"\u2004","emsp14;":"\u2005","emsp;":"\u2003","eng;":"\u014b","ensp;":"\u2002","eogon;":"\u0119","eopf;":"\ud835\udd56","epar;":"\u22d5","eparsl;":"\u29e3","eplus;":"\u2a71","epsi;":"\u03b5","epsilon;":"\u03b5","epsiv;":"\u03f5","eqcirc;":"\u2256","eqcolon;":"\u2255","eqsim;":"\u2242","eqslantgtr;":"\u2a96","eqslantless;":"\u2a95","equals;":"=","equest;":"\u225f","equiv;":"\u2261","equivDD;":"\u2a78","eqvparsl;":"\u29e5","erDot;":"\u2253","erarr;":"\u2971","escr;":"\u212f","esdot;":"\u2250","esim;":"\u2242","eta;":"\u03b7",eth:"\xf0","eth;":"\xf0",euml:"\xeb","euml;":"\xeb","euro;":"\u20ac","excl;":"!","exist;":"\u2203","expectation;":"\u2130","exponentiale;":"\u2147","fallingdotseq;":"\u2252","fcy;":"\u0444","female;":"\u2640","ffilig;":"\ufb03","fflig;":"\ufb00","ffllig;":"\ufb04","ffr;":"\ud835\udd23","filig;":"\ufb01","fjlig;":"fj","flat;":"\u266d","fllig;":"\ufb02","fltns;":"\u25b1","fnof;":"\u0192","fopf;":"\ud835\udd57","forall;":"\u2200","fork;":"\u22d4","forkv;":"\u2ad9","fpartint;":"\u2a0d",frac12:"\xbd","frac12;":"\xbd","frac13;":"\u2153",frac14:"\xbc","frac14;":"\xbc","frac15;":"\u2155","frac16;":"\u2159","frac18;":"\u215b","frac23;":"\u2154","frac25;":"\u2156",frac34:"\xbe","frac34;":"\xbe","frac35;":"\u2157","frac38;":"\u215c","frac45;":"\u2158","frac56;":"\u215a","frac58;":"\u215d","frac78;":"\u215e","frasl;":"\u2044","frown;":"\u2322","fscr;":"\ud835\udcbb","gE;":"\u2267","gEl;":"\u2a8c","gacute;":"\u01f5","gamma;":"\u03b3","gammad;":"\u03dd","gap;":"\u2a86","gbreve;":"\u011f","gcirc;":"\u011d","gcy;":"\u0433","gdot;":"\u0121","ge;":"\u2265","gel;":"\u22db","geq;":"\u2265","geqq;":"\u2267","geqslant;":"\u2a7e","ges;":"\u2a7e","gescc;":"\u2aa9","gesdot;":"\u2a80","gesdoto;":"\u2a82","gesdotol;":"\u2a84","gesl;":"\u22db\ufe00","gesles;":"\u2a94","gfr;":"\ud835\udd24","gg;":"\u226b","ggg;":"\u22d9","gimel;":"\u2137","gjcy;":"\u0453","gl;":"\u2277","glE;":"\u2a92","gla;":"\u2aa5","glj;":"\u2aa4","gnE;":"\u2269","gnap;":"\u2a8a","gnapprox;":"\u2a8a","gne;":"\u2a88","gneq;":"\u2a88","gneqq;":"\u2269","gnsim;":"\u22e7","gopf;":"\ud835\udd58","grave;":"`","gscr;":"\u210a","gsim;":"\u2273","gsime;":"\u2a8e","gsiml;":"\u2a90",gt:">","gt;":">","gtcc;":"\u2aa7","gtcir;":"\u2a7a","gtdot;":"\u22d7","gtlPar;":"\u2995","gtquest;":"\u2a7c","gtrapprox;":"\u2a86","gtrarr;":"\u2978","gtrdot;":"\u22d7","gtreqless;":"\u22db","gtreqqless;":"\u2a8c","gtrless;":"\u2277","gtrsim;":"\u2273","gvertneqq;":"\u2269\ufe00","gvnE;":"\u2269\ufe00","hArr;":"\u21d4","hairsp;":"\u200a","half;":"\xbd","hamilt;":"\u210b","hardcy;":"\u044a","harr;":"\u2194","harrcir;":"\u2948","harrw;":"\u21ad","hbar;":"\u210f","hcirc;":"\u0125","hearts;":"\u2665","heartsuit;":"\u2665","hellip;":"\u2026","hercon;":"\u22b9","hfr;":"\ud835\udd25","hksearow;":"\u2925","hkswarow;":"\u2926","hoarr;":"\u21ff","homtht;":"\u223b","hookleftarrow;":"\u21a9","hookrightarrow;":"\u21aa","hopf;":"\ud835\udd59","horbar;":"\u2015","hscr;":"\ud835\udcbd","hslash;":"\u210f","hstrok;":"\u0127","hybull;":"\u2043","hyphen;":"\u2010",iacute:"\xed","iacute;":"\xed","ic;":"\u2063",icirc:"\xee","icirc;":"\xee","icy;":"\u0438","iecy;":"\u0435",iexcl:"\xa1","iexcl;":"\xa1","iff;":"\u21d4","ifr;":"\ud835\udd26",igrave:"\xec","igrave;":"\xec","ii;":"\u2148","iiiint;":"\u2a0c","iiint;":"\u222d","iinfin;":"\u29dc","iiota;":"\u2129","ijlig;":"\u0133","imacr;":"\u012b","image;":"\u2111","imagline;":"\u2110","imagpart;":"\u2111","imath;":"\u0131","imof;":"\u22b7","imped;":"\u01b5","in;":"\u2208","incare;":"\u2105","infin;":"\u221e","infintie;":"\u29dd","inodot;":"\u0131","int;":"\u222b","intcal;":"\u22ba","integers;":"\u2124","intercal;":"\u22ba","intlarhk;":"\u2a17","intprod;":"\u2a3c","iocy;":"\u0451","iogon;":"\u012f","iopf;":"\ud835\udd5a","iota;":"\u03b9","iprod;":"\u2a3c",iquest:"\xbf","iquest;":"\xbf","iscr;":"\ud835\udcbe","isin;":"\u2208","isinE;":"\u22f9","isindot;":"\u22f5","isins;":"\u22f4","isinsv;":"\u22f3","isinv;":"\u2208","it;":"\u2062","itilde;":"\u0129","iukcy;":"\u0456",iuml:"\xef","iuml;":"\xef","jcirc;":"\u0135","jcy;":"\u0439","jfr;":"\ud835\udd27","jmath;":"\u0237","jopf;":"\ud835\udd5b","jscr;":"\ud835\udcbf","jsercy;":"\u0458","jukcy;":"\u0454","kappa;":"\u03ba","kappav;":"\u03f0","kcedil;":"\u0137","kcy;":"\u043a","kfr;":"\ud835\udd28","kgreen;":"\u0138","khcy;":"\u0445","kjcy;":"\u045c","kopf;":"\ud835\udd5c","kscr;":"\ud835\udcc0","lAarr;":"\u21da","lArr;":"\u21d0","lAtail;":"\u291b","lBarr;":"\u290e","lE;":"\u2266","lEg;":"\u2a8b","lHar;":"\u2962","lacute;":"\u013a","laemptyv;":"\u29b4","lagran;":"\u2112","lambda;":"\u03bb","lang;":"\u27e8","langd;":"\u2991","langle;":"\u27e8","lap;":"\u2a85",laquo:"\xab","laquo;":"\xab","larr;":"\u2190","larrb;":"\u21e4","larrbfs;":"\u291f","larrfs;":"\u291d","larrhk;":"\u21a9","larrlp;":"\u21ab","larrpl;":"\u2939","larrsim;":"\u2973","larrtl;":"\u21a2","lat;":"\u2aab","latail;":"\u2919","late;":"\u2aad","lates;":"\u2aad\ufe00","lbarr;":"\u290c","lbbrk;":"\u2772","lbrace;":"{","lbrack;":"[","lbrke;":"\u298b","lbrksld;":"\u298f","lbrkslu;":"\u298d","lcaron;":"\u013e","lcedil;":"\u013c","lceil;":"\u2308","lcub;":"{","lcy;":"\u043b","ldca;":"\u2936","ldquo;":"\u201c","ldquor;":"\u201e","ldrdhar;":"\u2967","ldrushar;":"\u294b","ldsh;":"\u21b2","le;":"\u2264","leftarrow;":"\u2190","leftarrowtail;":"\u21a2","leftharpoondown;":"\u21bd","leftharpoonup;":"\u21bc","leftleftarrows;":"\u21c7","leftrightarrow;":"\u2194","leftrightarrows;":"\u21c6","leftrightharpoons;":"\u21cb","leftrightsquigarrow;":"\u21ad","leftthreetimes;":"\u22cb","leg;":"\u22da","leq;":"\u2264","leqq;":"\u2266","leqslant;":"\u2a7d","les;":"\u2a7d","lescc;":"\u2aa8","lesdot;":"\u2a7f","lesdoto;":"\u2a81","lesdotor;":"\u2a83","lesg;":"\u22da\ufe00","lesges;":"\u2a93","lessapprox;":"\u2a85","lessdot;":"\u22d6","lesseqgtr;":"\u22da","lesseqqgtr;":"\u2a8b","lessgtr;":"\u2276","lesssim;":"\u2272","lfisht;":"\u297c","lfloor;":"\u230a","lfr;":"\ud835\udd29","lg;":"\u2276","lgE;":"\u2a91","lhard;":"\u21bd","lharu;":"\u21bc","lharul;":"\u296a","lhblk;":"\u2584","ljcy;":"\u0459","ll;":"\u226a","llarr;":"\u21c7","llcorner;":"\u231e","llhard;":"\u296b","lltri;":"\u25fa","lmidot;":"\u0140","lmoust;":"\u23b0","lmoustache;":"\u23b0","lnE;":"\u2268","lnap;":"\u2a89","lnapprox;":"\u2a89","lne;":"\u2a87","lneq;":"\u2a87","lneqq;":"\u2268","lnsim;":"\u22e6","loang;":"\u27ec","loarr;":"\u21fd","lobrk;":"\u27e6","longleftarrow;":"\u27f5","longleftrightarrow;":"\u27f7","longmapsto;":"\u27fc","longrightarrow;":"\u27f6","looparrowleft;":"\u21ab","looparrowright;":"\u21ac","lopar;":"\u2985","lopf;":"\ud835\udd5d","loplus;":"\u2a2d","lotimes;":"\u2a34","lowast;":"\u2217","lowbar;":"_","loz;":"\u25ca","lozenge;":"\u25ca","lozf;":"\u29eb","lpar;":"(","lparlt;":"\u2993","lrarr;":"\u21c6","lrcorner;":"\u231f","lrhar;":"\u21cb","lrhard;":"\u296d","lrm;":"\u200e","lrtri;":"\u22bf","lsaquo;":"\u2039","lscr;":"\ud835\udcc1","lsh;":"\u21b0","lsim;":"\u2272","lsime;":"\u2a8d","lsimg;":"\u2a8f","lsqb;":"[","lsquo;":"\u2018","lsquor;":"\u201a","lstrok;":"\u0142",lt:"<","lt;":"<","ltcc;":"\u2aa6","ltcir;":"\u2a79","ltdot;":"\u22d6","lthree;":"\u22cb","ltimes;":"\u22c9","ltlarr;":"\u2976","ltquest;":"\u2a7b","ltrPar;":"\u2996","ltri;":"\u25c3","ltrie;":"\u22b4","ltrif;":"\u25c2","lurdshar;":"\u294a","luruhar;":"\u2966","lvertneqq;":"\u2268\ufe00","lvnE;":"\u2268\ufe00","mDDot;":"\u223a",macr:"\xaf","macr;":"\xaf","male;":"\u2642","malt;":"\u2720","maltese;":"\u2720","map;":"\u21a6","mapsto;":"\u21a6","mapstodown;":"\u21a7","mapstoleft;":"\u21a4","mapstoup;":"\u21a5","marker;":"\u25ae","mcomma;":"\u2a29","mcy;":"\u043c","mdash;":"\u2014","measuredangle;":"\u2221","mfr;":"\ud835\udd2a","mho;":"\u2127",micro:"\xb5","micro;":"\xb5","mid;":"\u2223","midast;":"*","midcir;":"\u2af0",middot:"\xb7","middot;":"\xb7","minus;":"\u2212","minusb;":"\u229f","minusd;":"\u2238","minusdu;":"\u2a2a","mlcp;":"\u2adb","mldr;":"\u2026","mnplus;":"\u2213","models;":"\u22a7","mopf;":"\ud835\udd5e","mp;":"\u2213","mscr;":"\ud835\udcc2","mstpos;":"\u223e","mu;":"\u03bc","multimap;":"\u22b8","mumap;":"\u22b8","nGg;":"\u22d9\u0338","nGt;":"\u226b\u20d2","nGtv;":"\u226b\u0338","nLeftarrow;":"\u21cd","nLeftrightarrow;":"\u21ce","nLl;":"\u22d8\u0338","nLt;":"\u226a\u20d2","nLtv;":"\u226a\u0338","nRightarrow;":"\u21cf","nVDash;":"\u22af","nVdash;":"\u22ae","nabla;":"\u2207","nacute;":"\u0144","nang;":"\u2220\u20d2","nap;":"\u2249","napE;":"\u2a70\u0338","napid;":"\u224b\u0338","napos;":"\u0149","napprox;":"\u2249","natur;":"\u266e","natural;":"\u266e","naturals;":"\u2115",nbsp:"\xa0","nbsp;":"\xa0","nbump;":"\u224e\u0338","nbumpe;":"\u224f\u0338","ncap;":"\u2a43","ncaron;":"\u0148","ncedil;":"\u0146","ncong;":"\u2247","ncongdot;":"\u2a6d\u0338","ncup;":"\u2a42","ncy;":"\u043d","ndash;":"\u2013","ne;":"\u2260","neArr;":"\u21d7","nearhk;":"\u2924","nearr;":"\u2197","nearrow;":"\u2197","nedot;":"\u2250\u0338","nequiv;":"\u2262","nesear;":"\u2928","nesim;":"\u2242\u0338","nexist;":"\u2204","nexists;":"\u2204","nfr;":"\ud835\udd2b","ngE;":"\u2267\u0338","nge;":"\u2271","ngeq;":"\u2271","ngeqq;":"\u2267\u0338","ngeqslant;":"\u2a7e\u0338","nges;":"\u2a7e\u0338","ngsim;":"\u2275","ngt;":"\u226f","ngtr;":"\u226f","nhArr;":"\u21ce","nharr;":"\u21ae","nhpar;":"\u2af2","ni;":"\u220b","nis;":"\u22fc","nisd;":"\u22fa","niv;":"\u220b","njcy;":"\u045a","nlArr;":"\u21cd","nlE;":"\u2266\u0338","nlarr;":"\u219a","nldr;":"\u2025","nle;":"\u2270","nleftarrow;":"\u219a","nleftrightarrow;":"\u21ae","nleq;":"\u2270","nleqq;":"\u2266\u0338","nleqslant;":"\u2a7d\u0338","nles;":"\u2a7d\u0338","nless;":"\u226e","nlsim;":"\u2274","nlt;":"\u226e","nltri;":"\u22ea","nltrie;":"\u22ec","nmid;":"\u2224","nopf;":"\ud835\udd5f",not:"\xac","not;":"\xac","notin;":"\u2209","notinE;":"\u22f9\u0338","notindot;":"\u22f5\u0338","notinva;":"\u2209","notinvb;":"\u22f7","notinvc;":"\u22f6","notni;":"\u220c","notniva;":"\u220c","notnivb;":"\u22fe","notnivc;":"\u22fd","npar;":"\u2226","nparallel;":"\u2226","nparsl;":"\u2afd\u20e5","npart;":"\u2202\u0338","npolint;":"\u2a14","npr;":"\u2280","nprcue;":"\u22e0","npre;":"\u2aaf\u0338","nprec;":"\u2280","npreceq;":"\u2aaf\u0338","nrArr;":"\u21cf","nrarr;":"\u219b","nrarrc;":"\u2933\u0338","nrarrw;":"\u219d\u0338","nrightarrow;":"\u219b","nrtri;":"\u22eb","nrtrie;":"\u22ed","nsc;":"\u2281","nsccue;":"\u22e1","nsce;":"\u2ab0\u0338","nscr;":"\ud835\udcc3","nshortmid;":"\u2224","nshortparallel;":"\u2226","nsim;":"\u2241","nsime;":"\u2244","nsimeq;":"\u2244","nsmid;":"\u2224","nspar;":"\u2226","nsqsube;":"\u22e2","nsqsupe;":"\u22e3","nsub;":"\u2284","nsubE;":"\u2ac5\u0338","nsube;":"\u2288","nsubset;":"\u2282\u20d2","nsubseteq;":"\u2288","nsubseteqq;":"\u2ac5\u0338","nsucc;":"\u2281","nsucceq;":"\u2ab0\u0338","nsup;":"\u2285","nsupE;":"\u2ac6\u0338","nsupe;":"\u2289","nsupset;":"\u2283\u20d2","nsupseteq;":"\u2289","nsupseteqq;":"\u2ac6\u0338","ntgl;":"\u2279",ntilde:"\xf1","ntilde;":"\xf1","ntlg;":"\u2278","ntriangleleft;":"\u22ea","ntrianglelefteq;":"\u22ec","ntriangleright;":"\u22eb","ntrianglerighteq;":"\u22ed","nu;":"\u03bd","num;":"#","numero;":"\u2116","numsp;":"\u2007","nvDash;":"\u22ad","nvHarr;":"\u2904","nvap;":"\u224d\u20d2","nvdash;":"\u22ac","nvge;":"\u2265\u20d2","nvgt;":">\u20d2","nvinfin;":"\u29de","nvlArr;":"\u2902","nvle;":"\u2264\u20d2","nvlt;":"<\u20d2","nvltrie;":"\u22b4\u20d2","nvrArr;":"\u2903","nvrtrie;":"\u22b5\u20d2","nvsim;":"\u223c\u20d2","nwArr;":"\u21d6","nwarhk;":"\u2923","nwarr;":"\u2196","nwarrow;":"\u2196","nwnear;":"\u2927","oS;":"\u24c8",oacute:"\xf3","oacute;":"\xf3","oast;":"\u229b","ocir;":"\u229a",ocirc:"\xf4","ocirc;":"\xf4","ocy;":"\u043e","odash;":"\u229d","odblac;":"\u0151","odiv;":"\u2a38","odot;":"\u2299","odsold;":"\u29bc","oelig;":"\u0153","ofcir;":"\u29bf","ofr;":"\ud835\udd2c","ogon;":"\u02db",ograve:"\xf2","ograve;":"\xf2","ogt;":"\u29c1","ohbar;":"\u29b5","ohm;":"\u03a9","oint;":"\u222e","olarr;":"\u21ba","olcir;":"\u29be","olcross;":"\u29bb","oline;":"\u203e","olt;":"\u29c0","omacr;":"\u014d","omega;":"\u03c9","omicron;":"\u03bf","omid;":"\u29b6","ominus;":"\u2296","oopf;":"\ud835\udd60","opar;":"\u29b7","operp;":"\u29b9","oplus;":"\u2295","or;":"\u2228","orarr;":"\u21bb","ord;":"\u2a5d","order;":"\u2134","orderof;":"\u2134",ordf:"\xaa","ordf;":"\xaa",ordm:"\xba","ordm;":"\xba","origof;":"\u22b6","oror;":"\u2a56","orslope;":"\u2a57","orv;":"\u2a5b","oscr;":"\u2134",oslash:"\xf8","oslash;":"\xf8","osol;":"\u2298",otilde:"\xf5","otilde;":"\xf5","otimes;":"\u2297","otimesas;":"\u2a36",ouml:"\xf6","ouml;":"\xf6","ovbar;":"\u233d","par;":"\u2225",para:"\xb6","para;":"\xb6","parallel;":"\u2225","parsim;":"\u2af3","parsl;":"\u2afd","part;":"\u2202","pcy;":"\u043f","percnt;":"%","period;":".","permil;":"\u2030","perp;":"\u22a5","pertenk;":"\u2031","pfr;":"\ud835\udd2d","phi;":"\u03c6","phiv;":"\u03d5","phmmat;":"\u2133","phone;":"\u260e","pi;":"\u03c0","pitchfork;":"\u22d4","piv;":"\u03d6","planck;":"\u210f","planckh;":"\u210e","plankv;":"\u210f","plus;":"+","plusacir;":"\u2a23","plusb;":"\u229e","pluscir;":"\u2a22","plusdo;":"\u2214","plusdu;":"\u2a25","pluse;":"\u2a72",plusmn:"\xb1","plusmn;":"\xb1","plussim;":"\u2a26","plustwo;":"\u2a27","pm;":"\xb1","pointint;":"\u2a15","popf;":"\ud835\udd61",pound:"\xa3","pound;":"\xa3","pr;":"\u227a","prE;":"\u2ab3","prap;":"\u2ab7","prcue;":"\u227c","pre;":"\u2aaf","prec;":"\u227a","precapprox;":"\u2ab7","preccurlyeq;":"\u227c","preceq;":"\u2aaf","precnapprox;":"\u2ab9","precneqq;":"\u2ab5","precnsim;":"\u22e8","precsim;":"\u227e","prime;":"\u2032","primes;":"\u2119","prnE;":"\u2ab5","prnap;":"\u2ab9","prnsim;":"\u22e8","prod;":"\u220f","profalar;":"\u232e","profline;":"\u2312","profsurf;":"\u2313","prop;":"\u221d","propto;":"\u221d","prsim;":"\u227e","prurel;":"\u22b0","pscr;":"\ud835\udcc5","psi;":"\u03c8","puncsp;":"\u2008","qfr;":"\ud835\udd2e","qint;":"\u2a0c","qopf;":"\ud835\udd62","qprime;":"\u2057","qscr;":"\ud835\udcc6","quaternions;":"\u210d","quatint;":"\u2a16","quest;":"?","questeq;":"\u225f",quot:'"',"quot;":'"',"rAarr;":"\u21db","rArr;":"\u21d2","rAtail;":"\u291c","rBarr;":"\u290f","rHar;":"\u2964","race;":"\u223d\u0331","racute;":"\u0155","radic;":"\u221a","raemptyv;":"\u29b3","rang;":"\u27e9","rangd;":"\u2992","range;":"\u29a5","rangle;":"\u27e9",raquo:"\xbb","raquo;":"\xbb","rarr;":"\u2192","rarrap;":"\u2975","rarrb;":"\u21e5","rarrbfs;":"\u2920","rarrc;":"\u2933","rarrfs;":"\u291e","rarrhk;":"\u21aa","rarrlp;":"\u21ac","rarrpl;":"\u2945","rarrsim;":"\u2974","rarrtl;":"\u21a3","rarrw;":"\u219d","ratail;":"\u291a","ratio;":"\u2236","rationals;":"\u211a","rbarr;":"\u290d","rbbrk;":"\u2773","rbrace;":"}","rbrack;":"]","rbrke;":"\u298c","rbrksld;":"\u298e","rbrkslu;":"\u2990","rcaron;":"\u0159","rcedil;":"\u0157","rceil;":"\u2309","rcub;":"}","rcy;":"\u0440","rdca;":"\u2937","rdldhar;":"\u2969","rdquo;":"\u201d","rdquor;":"\u201d","rdsh;":"\u21b3","real;":"\u211c","realine;":"\u211b","realpart;":"\u211c","reals;":"\u211d","rect;":"\u25ad",reg:"\xae","reg;":"\xae","rfisht;":"\u297d","rfloor;":"\u230b","rfr;":"\ud835\udd2f","rhard;":"\u21c1","rharu;":"\u21c0","rharul;":"\u296c","rho;":"\u03c1","rhov;":"\u03f1","rightarrow;":"\u2192","rightarrowtail;":"\u21a3","rightharpoondown;":"\u21c1","rightharpoonup;":"\u21c0","rightleftarrows;":"\u21c4","rightleftharpoons;":"\u21cc","rightrightarrows;":"\u21c9","rightsquigarrow;":"\u219d","rightthreetimes;":"\u22cc","ring;":"\u02da","risingdotseq;":"\u2253","rlarr;":"\u21c4","rlhar;":"\u21cc","rlm;":"\u200f","rmoust;":"\u23b1","rmoustache;":"\u23b1","rnmid;":"\u2aee","roang;":"\u27ed","roarr;":"\u21fe","robrk;":"\u27e7","ropar;":"\u2986","ropf;":"\ud835\udd63","roplus;":"\u2a2e","rotimes;":"\u2a35","rpar;":")","rpargt;":"\u2994","rppolint;":"\u2a12","rrarr;":"\u21c9","rsaquo;":"\u203a","rscr;":"\ud835\udcc7","rsh;":"\u21b1","rsqb;":"]","rsquo;":"\u2019","rsquor;":"\u2019","rthree;":"\u22cc","rtimes;":"\u22ca","rtri;":"\u25b9","rtrie;":"\u22b5","rtrif;":"\u25b8","rtriltri;":"\u29ce","ruluhar;":"\u2968","rx;":"\u211e","sacute;":"\u015b","sbquo;":"\u201a","sc;":"\u227b","scE;":"\u2ab4","scap;":"\u2ab8","scaron;":"\u0161","sccue;":"\u227d","sce;":"\u2ab0","scedil;":"\u015f","scirc;":"\u015d","scnE;":"\u2ab6","scnap;":"\u2aba","scnsim;":"\u22e9","scpolint;":"\u2a13","scsim;":"\u227f","scy;":"\u0441","sdot;":"\u22c5","sdotb;":"\u22a1","sdote;":"\u2a66","seArr;":"\u21d8","searhk;":"\u2925","searr;":"\u2198","searrow;":"\u2198",sect:"\xa7","sect;":"\xa7","semi;":";","seswar;":"\u2929","setminus;":"\u2216","setmn;":"\u2216","sext;":"\u2736","sfr;":"\ud835\udd30","sfrown;":"\u2322","sharp;":"\u266f","shchcy;":"\u0449","shcy;":"\u0448","shortmid;":"\u2223","shortparallel;":"\u2225",shy:"\xad","shy;":"\xad","sigma;":"\u03c3","sigmaf;":"\u03c2","sigmav;":"\u03c2","sim;":"\u223c","simdot;":"\u2a6a","sime;":"\u2243","simeq;":"\u2243","simg;":"\u2a9e","simgE;":"\u2aa0","siml;":"\u2a9d","simlE;":"\u2a9f","simne;":"\u2246","simplus;":"\u2a24","simrarr;":"\u2972","slarr;":"\u2190","smallsetminus;":"\u2216","smashp;":"\u2a33","smeparsl;":"\u29e4","smid;":"\u2223","smile;":"\u2323","smt;":"\u2aaa","smte;":"\u2aac","smtes;":"\u2aac\ufe00","softcy;":"\u044c","sol;":"/","solb;":"\u29c4","solbar;":"\u233f","sopf;":"\ud835\udd64","spades;":"\u2660","spadesuit;":"\u2660","spar;":"\u2225","sqcap;":"\u2293","sqcaps;":"\u2293\ufe00","sqcup;":"\u2294","sqcups;":"\u2294\ufe00","sqsub;":"\u228f","sqsube;":"\u2291","sqsubset;":"\u228f","sqsubseteq;":"\u2291","sqsup;":"\u2290","sqsupe;":"\u2292","sqsupset;":"\u2290","sqsupseteq;":"\u2292","squ;":"\u25a1","square;":"\u25a1","squarf;":"\u25aa","squf;":"\u25aa","srarr;":"\u2192","sscr;":"\ud835\udcc8","ssetmn;":"\u2216","ssmile;":"\u2323","sstarf;":"\u22c6","star;":"\u2606","starf;":"\u2605","straightepsilon;":"\u03f5","straightphi;":"\u03d5","strns;":"\xaf","sub;":"\u2282","subE;":"\u2ac5","subdot;":"\u2abd","sube;":"\u2286","subedot;":"\u2ac3","submult;":"\u2ac1","subnE;":"\u2acb","subne;":"\u228a","subplus;":"\u2abf","subrarr;":"\u2979","subset;":"\u2282","subseteq;":"\u2286","subseteqq;":"\u2ac5","subsetneq;":"\u228a","subsetneqq;":"\u2acb","subsim;":"\u2ac7","subsub;":"\u2ad5","subsup;":"\u2ad3","succ;":"\u227b","succapprox;":"\u2ab8","succcurlyeq;":"\u227d","succeq;":"\u2ab0","succnapprox;":"\u2aba","succneqq;":"\u2ab6","succnsim;":"\u22e9","succsim;":"\u227f","sum;":"\u2211","sung;":"\u266a",sup1:"\xb9","sup1;":"\xb9",sup2:"\xb2","sup2;":"\xb2",sup3:"\xb3","sup3;":"\xb3","sup;":"\u2283","supE;":"\u2ac6","supdot;":"\u2abe","supdsub;":"\u2ad8","supe;":"\u2287","supedot;":"\u2ac4","suphsol;":"\u27c9","suphsub;":"\u2ad7","suplarr;":"\u297b","supmult;":"\u2ac2","supnE;":"\u2acc","supne;":"\u228b","supplus;":"\u2ac0","supset;":"\u2283","supseteq;":"\u2287","supseteqq;":"\u2ac6","supsetneq;":"\u228b","supsetneqq;":"\u2acc","supsim;":"\u2ac8","supsub;":"\u2ad4","supsup;":"\u2ad6","swArr;":"\u21d9","swarhk;":"\u2926","swarr;":"\u2199","swarrow;":"\u2199","swnwar;":"\u292a",szlig:"\xdf","szlig;":"\xdf","target;":"\u2316","tau;":"\u03c4","tbrk;":"\u23b4","tcaron;":"\u0165","tcedil;":"\u0163","tcy;":"\u0442","tdot;":"\u20db","telrec;":"\u2315","tfr;":"\ud835\udd31","there4;":"\u2234","therefore;":"\u2234","theta;":"\u03b8","thetasym;":"\u03d1","thetav;":"\u03d1","thickapprox;":"\u2248","thicksim;":"\u223c","thinsp;":"\u2009","thkap;":"\u2248","thksim;":"\u223c",thorn:"\xfe","thorn;":"\xfe","tilde;":"\u02dc",times:"\xd7","times;":"\xd7","timesb;":"\u22a0","timesbar;":"\u2a31","timesd;":"\u2a30","tint;":"\u222d","toea;":"\u2928","top;":"\u22a4","topbot;":"\u2336","topcir;":"\u2af1","topf;":"\ud835\udd65","topfork;":"\u2ada","tosa;":"\u2929","tprime;":"\u2034","trade;":"\u2122","triangle;":"\u25b5","triangledown;":"\u25bf","triangleleft;":"\u25c3","trianglelefteq;":"\u22b4","triangleq;":"\u225c","triangleright;":"\u25b9","trianglerighteq;":"\u22b5","tridot;":"\u25ec","trie;":"\u225c","triminus;":"\u2a3a","triplus;":"\u2a39","trisb;":"\u29cd","tritime;":"\u2a3b","trpezium;":"\u23e2","tscr;":"\ud835\udcc9","tscy;":"\u0446","tshcy;":"\u045b","tstrok;":"\u0167","twixt;":"\u226c","twoheadleftarrow;":"\u219e","twoheadrightarrow;":"\u21a0","uArr;":"\u21d1","uHar;":"\u2963",uacute:"\xfa","uacute;":"\xfa","uarr;":"\u2191","ubrcy;":"\u045e","ubreve;":"\u016d",ucirc:"\xfb","ucirc;":"\xfb","ucy;":"\u0443","udarr;":"\u21c5","udblac;":"\u0171","udhar;":"\u296e","ufisht;":"\u297e","ufr;":"\ud835\udd32",ugrave:"\xf9","ugrave;":"\xf9","uharl;":"\u21bf","uharr;":"\u21be","uhblk;":"\u2580","ulcorn;":"\u231c","ulcorner;":"\u231c","ulcrop;":"\u230f","ultri;":"\u25f8","umacr;":"\u016b",uml:"\xa8","uml;":"\xa8","uogon;":"\u0173","uopf;":"\ud835\udd66","uparrow;":"\u2191","updownarrow;":"\u2195","upharpoonleft;":"\u21bf","upharpoonright;":"\u21be","uplus;":"\u228e","upsi;":"\u03c5","upsih;":"\u03d2","upsilon;":"\u03c5","upuparrows;":"\u21c8","urcorn;":"\u231d","urcorner;":"\u231d","urcrop;":"\u230e","uring;":"\u016f","urtri;":"\u25f9","uscr;":"\ud835\udcca","utdot;":"\u22f0","utilde;":"\u0169","utri;":"\u25b5","utrif;":"\u25b4","uuarr;":"\u21c8",uuml:"\xfc","uuml;":"\xfc","uwangle;":"\u29a7","vArr;":"\u21d5","vBar;":"\u2ae8","vBarv;":"\u2ae9","vDash;":"\u22a8","vangrt;":"\u299c","varepsilon;":"\u03f5","varkappa;":"\u03f0","varnothing;":"\u2205","varphi;":"\u03d5","varpi;":"\u03d6","varpropto;":"\u221d","varr;":"\u2195","varrho;":"\u03f1","varsigma;":"\u03c2","varsubsetneq;":"\u228a\ufe00","varsubsetneqq;":"\u2acb\ufe00","varsupsetneq;":"\u228b\ufe00","varsupsetneqq;":"\u2acc\ufe00","vartheta;":"\u03d1","vartriangleleft;":"\u22b2","vartriangleright;":"\u22b3","vcy;":"\u0432","vdash;":"\u22a2","vee;":"\u2228","veebar;":"\u22bb","veeeq;":"\u225a","vellip;":"\u22ee","verbar;":"|","vert;":"|","vfr;":"\ud835\udd33","vltri;":"\u22b2","vnsub;":"\u2282\u20d2","vnsup;":"\u2283\u20d2","vopf;":"\ud835\udd67","vprop;":"\u221d","vrtri;":"\u22b3","vscr;":"\ud835\udccb","vsubnE;":"\u2acb\ufe00","vsubne;":"\u228a\ufe00","vsupnE;":"\u2acc\ufe00","vsupne;":"\u228b\ufe00","vzigzag;":"\u299a","wcirc;":"\u0175","wedbar;":"\u2a5f","wedge;":"\u2227","wedgeq;":"\u2259","weierp;":"\u2118","wfr;":"\ud835\udd34","wopf;":"\ud835\udd68","wp;":"\u2118","wr;":"\u2240","wreath;":"\u2240","wscr;":"\ud835\udccc","xcap;":"\u22c2","xcirc;":"\u25ef","xcup;":"\u22c3","xdtri;":"\u25bd","xfr;":"\ud835\udd35","xhArr;":"\u27fa","xharr;":"\u27f7","xi;":"\u03be","xlArr;":"\u27f8","xlarr;":"\u27f5","xmap;":"\u27fc","xnis;":"\u22fb","xodot;":"\u2a00","xopf;":"\ud835\udd69","xoplus;":"\u2a01","xotime;":"\u2a02","xrArr;":"\u27f9","xrarr;":"\u27f6","xscr;":"\ud835\udccd","xsqcup;":"\u2a06","xuplus;":"\u2a04","xutri;":"\u25b3","xvee;":"\u22c1","xwedge;":"\u22c0",yacute:"\xfd","yacute;":"\xfd","yacy;":"\u044f","ycirc;":"\u0177","ycy;":"\u044b",yen:"\xa5","yen;":"\xa5","yfr;":"\ud835\udd36","yicy;":"\u0457","yopf;":"\ud835\udd6a","yscr;":"\ud835\udcce","yucy;":"\u044e",yuml:"\xff","yuml;":"\xff","zacute;":"\u017a","zcaron;":"\u017e","zcy;":"\u0437","zdot;":"\u017c","zeetrf;":"\u2128","zeta;":"\u03b6","zfr;":"\ud835\udd37","zhcy;":"\u0436","zigrarr;":"\u21dd","zopf;":"\ud835\udd6b","zscr;":"\ud835\udccf","zwj;":"\u200d","zwnj;":"\u200c"},C.b7,t.B)
C.bb=H.a(s(["null-character","invalid-codepoint","incorrectly-placed-solidus","incorrect-cr-newline-entity","illegal-windows-1252-entity","cant-convert-numeric-entity","illegal-codepoint-for-numeric-entity","numeric-entity-without-semicolon","expected-numeric-entity-but-got-eof","expected-numeric-entity","named-entity-without-semicolon","expected-named-entity","attributes-in-end-tag","self-closing-flag-on-end-tag","expected-tag-name-but-got-right-bracket","expected-tag-name-but-got-question-mark","expected-tag-name",u.g,"expected-closing-tag-but-got-eof","expected-closing-tag-but-got-char","eof-in-tag-name","expected-attribute-name-but-got-eof","eof-in-attribute-name","invalid-character-in-attribute-name","duplicate-attribute","expected-end-of-tag-name-but-got-eof","expected-attribute-value-but-got-eof",u.A,"equals-in-unquoted-attribute-value",u.V,"invalid-character-after-attribute-name",u.H,"eof-in-attribute-value-double-quote","eof-in-attribute-value-single-quote","eof-in-attribute-value-no-quotes","unexpected-EOF-after-solidus-in-tag",u.B,"expected-dashes-or-doctype",u.d,"unexpected-space-after-double-dash-in-comment","incorrect-comment","eof-in-comment","eof-in-comment-end-dash",u.K,"eof-in-comment-double-dash","eof-in-comment-end-space-state","eof-in-comment-end-bang-state","unexpected-char-in-comment","need-space-after-doctype",u.f,"expected-doctype-name-but-got-eof","eof-in-doctype-name","eof-in-doctype",u.S,"unexpected-end-of-doctype","unexpected-char-in-doctype","eof-in-innerhtml","unexpected-doctype","non-html-root","expected-doctype-but-got-eof","unknown-doctype","expected-doctype-but-got-chars","expected-doctype-but-got-start-tag","expected-doctype-but-got-end-tag","end-tag-after-implied-root","expected-named-closing-tag-but-got-eof","two-heads-are-not-better-than-one","unexpected-end-tag","unexpected-start-tag-out-of-my-head","unexpected-start-tag","missing-end-tag","missing-end-tags","unexpected-start-tag-implies-end-tag","unexpected-start-tag-treated-as","deprecated-tag","unexpected-start-tag-ignored","expected-one-end-tag-but-got-another","end-tag-too-early","end-tag-too-early-named","end-tag-too-early-ignored","adoption-agency-1.1","adoption-agency-1.2","adoption-agency-1.3","unexpected-end-tag-treated-as","no-end-tag","unexpected-implied-end-tag-in-table","unexpected-implied-end-tag-in-table-body","unexpected-char-implies-table-voodoo","unexpected-hidden-input-in-table","unexpected-form-in-table",u.M,"unexpected-end-tag-implies-table-voodoo","unexpected-cell-in-table-body","unexpected-cell-end-tag","unexpected-end-tag-in-table-body","unexpected-implied-end-tag-in-table-row","unexpected-end-tag-in-table-row","unexpected-select-in-select","unexpected-input-in-select","unexpected-start-tag-in-select","unexpected-end-tag-in-select",u.a,u.r,"unexpected-char-after-body","unexpected-start-tag-after-body","unexpected-end-tag-after-body","unexpected-char-in-frameset","unexpected-start-tag-in-frameset",u.q,"unexpected-end-tag-in-frameset","unexpected-char-after-frameset","unexpected-start-tag-after-frameset","unexpected-end-tag-after-frameset","unexpected-end-tag-after-body-innerhtml","expected-eof-but-got-char","expected-eof-but-got-start-tag","expected-eof-but-got-end-tag","eof-in-table","eof-in-select","eof-in-frameset","eof-in-script-in-script","eof-in-foreign-lands","non-void-element-with-trailing-solidus",u.G,"unexpected-end-tag-before-html","undefined-error"]),t.s)
C.bF=new H.v(126,{"null-character":"Null character in input stream, replaced with U+FFFD.","invalid-codepoint":"Invalid codepoint in stream.","incorrectly-placed-solidus":"Solidus (/) incorrectly placed in tag.","incorrect-cr-newline-entity":"Incorrect CR newline entity, replaced with LF.","illegal-windows-1252-entity":"Entity used with illegal number (windows-1252 reference).","cant-convert-numeric-entity":"Numeric entity couldn't be converted to character (codepoint U+%(charAsInt)08x).","illegal-codepoint-for-numeric-entity":"Numeric entity represents an illegal codepoint: U+%(charAsInt)08x.","numeric-entity-without-semicolon":"Numeric entity didn't end with ';'.","expected-numeric-entity-but-got-eof":"Numeric entity expected. Got end of file instead.","expected-numeric-entity":"Numeric entity expected but none found.","named-entity-without-semicolon":"Named entity didn't end with ';'.","expected-named-entity":"Named entity expected. Got none.","attributes-in-end-tag":"End tag contains unexpected attributes.","self-closing-flag-on-end-tag":"End tag contains unexpected self-closing flag.","expected-tag-name-but-got-right-bracket":"Expected tag name. Got '>' instead.","expected-tag-name-but-got-question-mark":"Expected tag name. Got '?' instead. (HTML doesn't support processing instructions.)","expected-tag-name":"Expected tag name. Got something else instead","expected-closing-tag-but-got-right-bracket":"Expected closing tag. Got '>' instead. Ignoring '</>'.","expected-closing-tag-but-got-eof":"Expected closing tag. Unexpected end of file.","expected-closing-tag-but-got-char":"Expected closing tag. Unexpected character '%(data)s' found.","eof-in-tag-name":"Unexpected end of file in the tag name.","expected-attribute-name-but-got-eof":"Unexpected end of file. Expected attribute name instead.","eof-in-attribute-name":"Unexpected end of file in attribute name.","invalid-character-in-attribute-name":"Invalid character in attribute name","duplicate-attribute":"Dropped duplicate attribute on tag.","expected-end-of-tag-name-but-got-eof":"Unexpected end of file. Expected = or end of tag.","expected-attribute-value-but-got-eof":"Unexpected end of file. Expected attribute value.","expected-attribute-value-but-got-right-bracket":"Expected attribute value. Got '>' instead.","equals-in-unquoted-attribute-value":"Unexpected = in unquoted attribute","unexpected-character-in-unquoted-attribute-value":"Unexpected character in unquoted attribute","invalid-character-after-attribute-name":"Unexpected character after attribute name.","unexpected-character-after-attribute-value":"Unexpected character after attribute value.","eof-in-attribute-value-double-quote":'Unexpected end of file in attribute value (".',"eof-in-attribute-value-single-quote":"Unexpected end of file in attribute value (').","eof-in-attribute-value-no-quotes":"Unexpected end of file in attribute value.","unexpected-EOF-after-solidus-in-tag":"Unexpected end of file in tag. Expected >","unexpected-character-after-soldius-in-tag":"Unexpected character after / in tag. Expected >","expected-dashes-or-doctype":"Expected '--' or 'DOCTYPE'. Not found.","unexpected-bang-after-double-dash-in-comment":"Unexpected ! after -- in comment","unexpected-space-after-double-dash-in-comment":"Unexpected space after -- in comment","incorrect-comment":"Incorrect comment.","eof-in-comment":"Unexpected end of file in comment.","eof-in-comment-end-dash":"Unexpected end of file in comment (-)","unexpected-dash-after-double-dash-in-comment":"Unexpected '-' after '--' found in comment.","eof-in-comment-double-dash":"Unexpected end of file in comment (--).","eof-in-comment-end-space-state":"Unexpected end of file in comment.","eof-in-comment-end-bang-state":"Unexpected end of file in comment.","unexpected-char-in-comment":"Unexpected character in comment found.","need-space-after-doctype":"No space after literal string 'DOCTYPE'.","expected-doctype-name-but-got-right-bracket":"Unexpected > character. Expected DOCTYPE name.","expected-doctype-name-but-got-eof":"Unexpected end of file. Expected DOCTYPE name.","eof-in-doctype-name":"Unexpected end of file in DOCTYPE name.","eof-in-doctype":"Unexpected end of file in DOCTYPE.","expected-space-or-right-bracket-in-doctype":"Expected space or '>'. Got '%(data)s'","unexpected-end-of-doctype":"Unexpected end of DOCTYPE.","unexpected-char-in-doctype":"Unexpected character in DOCTYPE.","eof-in-innerhtml":"XXX innerHTML EOF","unexpected-doctype":"Unexpected DOCTYPE. Ignored.","non-html-root":"html needs to be the first start tag.","expected-doctype-but-got-eof":"Unexpected End of file. Expected DOCTYPE.","unknown-doctype":"Erroneous DOCTYPE.","expected-doctype-but-got-chars":"Unexpected non-space characters. Expected DOCTYPE.","expected-doctype-but-got-start-tag":"Unexpected start tag (%(name)s). Expected DOCTYPE.","expected-doctype-but-got-end-tag":"Unexpected end tag (%(name)s). Expected DOCTYPE.","end-tag-after-implied-root":"Unexpected end tag (%(name)s) after the (implied) root element.","expected-named-closing-tag-but-got-eof":"Unexpected end of file. Expected end tag (%(name)s).","two-heads-are-not-better-than-one":"Unexpected start tag head in existing head. Ignored.","unexpected-end-tag":"Unexpected end tag (%(name)s). Ignored.","unexpected-start-tag-out-of-my-head":"Unexpected start tag (%(name)s) that can be in head. Moved.","unexpected-start-tag":"Unexpected start tag (%(name)s).","missing-end-tag":"Missing end tag (%(name)s).","missing-end-tags":"Missing end tags (%(name)s).","unexpected-start-tag-implies-end-tag":"Unexpected start tag (%(startName)s) implies end tag (%(endName)s).","unexpected-start-tag-treated-as":"Unexpected start tag (%(originalName)s). Treated as %(newName)s.","deprecated-tag":"Unexpected start tag %(name)s. Don't use it!","unexpected-start-tag-ignored":"Unexpected start tag %(name)s. Ignored.","expected-one-end-tag-but-got-another":"Unexpected end tag (%(gotName)s). Missing end tag (%(expectedName)s).","end-tag-too-early":"End tag (%(name)s) seen too early. Expected other end tag.","end-tag-too-early-named":"Unexpected end tag (%(gotName)s). Expected end tag (%(expectedName)s).","end-tag-too-early-ignored":"End tag (%(name)s) seen too early. Ignored.","adoption-agency-1.1":"End tag (%(name)s) violates step 1, paragraph 1 of the adoption agency algorithm.","adoption-agency-1.2":"End tag (%(name)s) violates step 1, paragraph 2 of the adoption agency algorithm.","adoption-agency-1.3":"End tag (%(name)s) violates step 1, paragraph 3 of the adoption agency algorithm.","unexpected-end-tag-treated-as":"Unexpected end tag (%(originalName)s). Treated as %(newName)s.","no-end-tag":"This element (%(name)s) has no end tag.","unexpected-implied-end-tag-in-table":"Unexpected implied end tag (%(name)s) in the table phase.","unexpected-implied-end-tag-in-table-body":"Unexpected implied end tag (%(name)s) in the table body phase.","unexpected-char-implies-table-voodoo":"Unexpected non-space characters in table context caused voodoo mode.","unexpected-hidden-input-in-table":"Unexpected input with type hidden in table context.","unexpected-form-in-table":"Unexpected form in table context.","unexpected-start-tag-implies-table-voodoo":"Unexpected start tag (%(name)s) in table context caused voodoo mode.","unexpected-end-tag-implies-table-voodoo":"Unexpected end tag (%(name)s) in table context caused voodoo mode.","unexpected-cell-in-table-body":"Unexpected table cell start tag (%(name)s) in the table body phase.","unexpected-cell-end-tag":"Got table cell end tag (%(name)s) while required end tags are missing.","unexpected-end-tag-in-table-body":"Unexpected end tag (%(name)s) in the table body phase. Ignored.","unexpected-implied-end-tag-in-table-row":"Unexpected implied end tag (%(name)s) in the table row phase.","unexpected-end-tag-in-table-row":"Unexpected end tag (%(name)s) in the table row phase. Ignored.","unexpected-select-in-select":"Unexpected select start tag in the select phase treated as select end tag.","unexpected-input-in-select":"Unexpected input start tag in the select phase.","unexpected-start-tag-in-select":"Unexpected start tag token (%(name)s in the select phase. Ignored.","unexpected-end-tag-in-select":"Unexpected end tag (%(name)s) in the select phase. Ignored.","unexpected-table-element-start-tag-in-select-in-table":"Unexpected table element start tag (%(name)s) in the select in table phase.","unexpected-table-element-end-tag-in-select-in-table":"Unexpected table element end tag (%(name)s) in the select in table phase.","unexpected-char-after-body":"Unexpected non-space characters in the after body phase.","unexpected-start-tag-after-body":"Unexpected start tag token (%(name)s) in the after body phase.","unexpected-end-tag-after-body":"Unexpected end tag token (%(name)s) in the after body phase.","unexpected-char-in-frameset":"Unepxected characters in the frameset phase. Characters ignored.","unexpected-start-tag-in-frameset":"Unexpected start tag token (%(name)s) in the frameset phase. Ignored.","unexpected-frameset-in-frameset-innerhtml":"Unexpected end tag token (frameset) in the frameset phase (innerHTML).","unexpected-end-tag-in-frameset":"Unexpected end tag token (%(name)s) in the frameset phase. Ignored.","unexpected-char-after-frameset":"Unexpected non-space characters in the after frameset phase. Ignored.","unexpected-start-tag-after-frameset":"Unexpected start tag (%(name)s) in the after frameset phase. Ignored.","unexpected-end-tag-after-frameset":"Unexpected end tag (%(name)s) in the after frameset phase. Ignored.","unexpected-end-tag-after-body-innerhtml":"Unexpected end tag after body(innerHtml)","expected-eof-but-got-char":"Unexpected non-space characters. Expected end of file.","expected-eof-but-got-start-tag":"Unexpected start tag (%(name)s). Expected end of file.","expected-eof-but-got-end-tag":"Unexpected end tag (%(name)s). Expected end of file.","eof-in-table":"Unexpected end of file. Expected table content.","eof-in-select":"Unexpected end of file. Expected select content.","eof-in-frameset":"Unexpected end of file. Expected frameset content.","eof-in-script-in-script":"Unexpected end of file. Expected script content.","eof-in-foreign-lands":"Unexpected end of file. Expected foreign content","non-void-element-with-trailing-solidus":"Trailing solidus not allowed on element %(name)s","unexpected-html-element-in-foreign-content":"Element %(name)s not allowed in a non-html context","unexpected-end-tag-before-html":"Unexpected end tag (%(name)s) before html.","undefined-error":"Undefined error (this sucks and should be fixed)"},C.bb,t.B)
C.bc=H.a(s(["altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","clippath","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","foreignobject","glyphref","lineargradient","radialgradient","textpath"]),t.s)
C.bG=new H.v(36,{altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},C.bc,t.B)
C.bH=new H.c9([0,"\ufffd",13,"\r",128,"\u20ac",129,"\x81",130,"\u201a",131,"\u0192",132,"\u201e",133,"\u2026",134,"\u2020",135,"\u2021",136,"\u02c6",137,"\u2030",138,"\u0160",139,"\u2039",140,"\u0152",141,"\x8d",142,"\u017d",143,"\x8f",144,"\x90",145,"\u2018",146,"\u2019",147,"\u201c",148,"\u201d",149,"\u2022",150,"\u2013",151,"\u2014",152,"\u02dc",153,"\u2122",154,"\u0161",155,"\u203a",156,"\u0153",157,"\x9d",158,"\u017e",159,"\u0178"],H.aQ("c9<j,o>"))
C.bi=H.a(s(["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xml:lang","xml:space","xmlns","xmlns:xlink"]),t.s)
C.aI=new B.aG("xlink","actuate","http://www.w3.org/1999/xlink")
C.aL=new B.aG("xlink","arcrole","http://www.w3.org/1999/xlink")
C.aM=new B.aG("xlink","href","http://www.w3.org/1999/xlink")
C.aK=new B.aG("xlink","role","http://www.w3.org/1999/xlink")
C.aJ=new B.aG("xlink","show","http://www.w3.org/1999/xlink")
C.aR=new B.aG("xlink","title","http://www.w3.org/1999/xlink")
C.aQ=new B.aG("xlink","type","http://www.w3.org/1999/xlink")
C.aP=new B.aG("xml","base","http://www.w3.org/XML/1998/namespace")
C.aN=new B.aG("xml","lang","http://www.w3.org/XML/1998/namespace")
C.aG=new B.aG("xml","space","http://www.w3.org/XML/1998/namespace")
C.aO=new B.aG(null,"xmlns","http://www.w3.org/2000/xmlns/")
C.aH=new B.aG("xmlns","xlink","http://www.w3.org/2000/xmlns/")
C.c7=new H.v(12,{"xlink:actuate":C.aI,"xlink:arcrole":C.aL,"xlink:href":C.aM,"xlink:role":C.aK,"xlink:show":C.aJ,"xlink:title":C.aR,"xlink:type":C.aQ,"xml:base":C.aP,"xml:lang":C.aN,"xml:space":C.aG,xmlns:C.aO,"xmlns:xlink":C.aH},C.bi,H.aQ("v<o,aG>"))
C.K=new F.df("MessageLevel.severe")
C.am=new F.df("MessageLevel.warning")
C.al=new F.df("MessageLevel.info")
C.c8=new H.c9([C.K,"error",C.am,"warning",C.al,"info"],t.ha)
C.aj=new H.c9([C.K,"\x1b[31m",C.am,"\x1b[35m",C.al,"\x1b[32m"],t.ha)
C.a_=new H.v(0,{},C.q,H.aQ("v<o,N>"))
C.ak=new H.v(0,{},C.I,H.aQ("v<@,@>"))
C.bo=H.a(s(["attributename","attributetype","basefrequency","baseprofile","calcmode","clippathunits","contentscripttype","contentstyletype","diffuseconstant","edgemode","externalresourcesrequired","filterres","filterunits","glyphref","gradienttransform","gradientunits","kernelmatrix","kernelunitlength","keypoints","keysplines","keytimes","lengthadjust","limitingconeangle","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","numoctaves","pathlength","patterncontentunits","patterntransform","patternunits","pointsatx","pointsaty","pointsatz","preservealpha","preserveaspectratio","primitiveunits","refx","refy","repeatcount","repeatdur","requiredextensions","requiredfeatures","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","surfacescale","systemlanguage","tablevalues","targetx","targety","textlength","viewbox","viewtarget","xchannelselector","ychannelselector","zoomandpan"]),t.s)
C.c9=new H.v(62,{attributename:"attributeName",attributetype:"attributeType",basefrequency:"baseFrequency",baseprofile:"baseProfile",calcmode:"calcMode",clippathunits:"clipPathUnits",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",edgemode:"edgeMode",externalresourcesrequired:"externalResourcesRequired",filterres:"filterRes",filterunits:"filterUnits",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",limitingconeangle:"limitingConeAngle",markerheight:"markerHeight",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textlength:"textLength",viewbox:"viewBox",viewtarget:"viewTarget",xchannelselector:"xChannelSelector",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan"},C.bo,t.B)
C.bv=H.a(s(["li","dt","dd"]),t.s)
C.bu=H.a(s(["li"]),t.s)
C.ae=H.a(s(["dt","dd"]),t.s)
C.cL=new H.v(3,{li:C.bu,dt:C.ae,dd:C.ae},C.bv,H.aQ("v<o,l<o>>"))
C.bC=H.a(s(["437","850","852","855","857","860","861","862","863","865","866","869","ansix341968","ansix341986","arabic","ascii","asmo708","big5","big5hkscs","chinese","cp037","cp1026","cp154","cp367","cp424","cp437","cp500","cp775","cp819","cp850","cp852","cp855","cp857","cp860","cp861","cp862","cp863","cp864","cp865","cp866","cp869","cp936","cpgr","cpis","csascii","csbig5","cseuckr","cseucpkdfmtjapanese","csgb2312","cshproman8","csibm037","csibm1026","csibm424","csibm500","csibm855","csibm857","csibm860","csibm861","csibm863","csibm864","csibm865","csibm866","csibm869","csiso2022jp","csiso2022jp2","csiso2022kr","csiso58gb231280","csisolatin1","csisolatin2","csisolatin3","csisolatin4","csisolatin5","csisolatin6","csisolatinarabic","csisolatincyrillic","csisolatingreek","csisolatinhebrew","cskoi8r","csksc56011987","cspc775baltic","cspc850multilingual","cspc862latinhebrew","cspc8codepage437","cspcp852","csptcp154","csshiftjis","csunicode11utf7","cyrillic","cyrillicasian","ebcdiccpbe","ebcdiccpca","ebcdiccpch","ebcdiccphe","ebcdiccpnl","ebcdiccpus","ebcdiccpwt","ecma114","ecma118","elot928","eucjp","euckr","extendedunixcodepackedformatforjapanese","gb18030","gb2312","gb231280","gbk","greek","greek8","hebrew","hproman8","hzgb2312","ibm037","ibm1026","ibm367","ibm424","ibm437","ibm500","ibm775","ibm819","ibm850","ibm852","ibm855","ibm857","ibm860","ibm861","ibm862","ibm863","ibm864","ibm865","ibm866","ibm869","iso2022jp","iso2022jp2","iso2022kr","iso646irv1991","iso646us","iso88591","iso885910","iso8859101992","iso885911987","iso885913","iso885914","iso8859141998","iso885915","iso885916","iso8859162001","iso88592","iso885921987","iso88593","iso885931988","iso88594","iso885941988","iso88595","iso885951988","iso88596","iso885961987","iso88597","iso885971987","iso88598","iso885981988","iso88599","iso885991989","isoceltic","isoir100","isoir101","isoir109","isoir110","isoir126","isoir127","isoir138","isoir144","isoir148","isoir149","isoir157","isoir199","isoir226","isoir58","isoir6","koi8r","koi8u","korean","ksc5601","ksc56011987","ksc56011989","l1","l10","l2","l3","l4","l5","l6","l8","latin1","latin10","latin2","latin3","latin4","latin5","latin6","latin8","latin9","ms936","mskanji","pt154","ptcp154","r8","roman8","shiftjis","tis620","unicode11utf7","us","usascii","utf16","utf16be","utf16le","utf8","windows1250","windows1251","windows1252","windows1253","windows1254","windows1255","windows1256","windows1257","windows1258","windows936","x-x-big5"]),t.s)
C.cM=new H.v(227,{"437":"cp437","850":"cp850","852":"cp852","855":"cp855","857":"cp857","860":"cp860","861":"cp861","862":"cp862","863":"cp863","865":"cp865","866":"cp866","869":"cp869",ansix341968:"ascii",ansix341986:"ascii",arabic:"iso8859-6",ascii:"ascii",asmo708:"iso8859-6",big5:"big5",big5hkscs:"big5hkscs",chinese:"gbk",cp037:"cp037",cp1026:"cp1026",cp154:"ptcp154",cp367:"ascii",cp424:"cp424",cp437:"cp437",cp500:"cp500",cp775:"cp775",cp819:"windows-1252",cp850:"cp850",cp852:"cp852",cp855:"cp855",cp857:"cp857",cp860:"cp860",cp861:"cp861",cp862:"cp862",cp863:"cp863",cp864:"cp864",cp865:"cp865",cp866:"cp866",cp869:"cp869",cp936:"gbk",cpgr:"cp869",cpis:"cp861",csascii:"ascii",csbig5:"big5",cseuckr:"cp949",cseucpkdfmtjapanese:"euc_jp",csgb2312:"gbk",cshproman8:"hp-roman8",csibm037:"cp037",csibm1026:"cp1026",csibm424:"cp424",csibm500:"cp500",csibm855:"cp855",csibm857:"cp857",csibm860:"cp860",csibm861:"cp861",csibm863:"cp863",csibm864:"cp864",csibm865:"cp865",csibm866:"cp866",csibm869:"cp869",csiso2022jp:"iso2022_jp",csiso2022jp2:"iso2022_jp_2",csiso2022kr:"iso2022_kr",csiso58gb231280:"gbk",csisolatin1:"windows-1252",csisolatin2:"iso8859-2",csisolatin3:"iso8859-3",csisolatin4:"iso8859-4",csisolatin5:"windows-1254",csisolatin6:"iso8859-10",csisolatinarabic:"iso8859-6",csisolatincyrillic:"iso8859-5",csisolatingreek:"iso8859-7",csisolatinhebrew:"iso8859-8",cskoi8r:"koi8-r",csksc56011987:"cp949",cspc775baltic:"cp775",cspc850multilingual:"cp850",cspc862latinhebrew:"cp862",cspc8codepage437:"cp437",cspcp852:"cp852",csptcp154:"ptcp154",csshiftjis:"shift_jis",csunicode11utf7:"utf-7",cyrillic:"iso8859-5",cyrillicasian:"ptcp154",ebcdiccpbe:"cp500",ebcdiccpca:"cp037",ebcdiccpch:"cp500",ebcdiccphe:"cp424",ebcdiccpnl:"cp037",ebcdiccpus:"cp037",ebcdiccpwt:"cp037",ecma114:"iso8859-6",ecma118:"iso8859-7",elot928:"iso8859-7",eucjp:"euc_jp",euckr:"cp949",extendedunixcodepackedformatforjapanese:"euc_jp",gb18030:"gb18030",gb2312:"gbk",gb231280:"gbk",gbk:"gbk",greek:"iso8859-7",greek8:"iso8859-7",hebrew:"iso8859-8",hproman8:"hp-roman8",hzgb2312:"hz",ibm037:"cp037",ibm1026:"cp1026",ibm367:"ascii",ibm424:"cp424",ibm437:"cp437",ibm500:"cp500",ibm775:"cp775",ibm819:"windows-1252",ibm850:"cp850",ibm852:"cp852",ibm855:"cp855",ibm857:"cp857",ibm860:"cp860",ibm861:"cp861",ibm862:"cp862",ibm863:"cp863",ibm864:"cp864",ibm865:"cp865",ibm866:"cp866",ibm869:"cp869",iso2022jp:"iso2022_jp",iso2022jp2:"iso2022_jp_2",iso2022kr:"iso2022_kr",iso646irv1991:"ascii",iso646us:"ascii",iso88591:"windows-1252",iso885910:"iso8859-10",iso8859101992:"iso8859-10",iso885911987:"windows-1252",iso885913:"iso8859-13",iso885914:"iso8859-14",iso8859141998:"iso8859-14",iso885915:"iso8859-15",iso885916:"iso8859-16",iso8859162001:"iso8859-16",iso88592:"iso8859-2",iso885921987:"iso8859-2",iso88593:"iso8859-3",iso885931988:"iso8859-3",iso88594:"iso8859-4",iso885941988:"iso8859-4",iso88595:"iso8859-5",iso885951988:"iso8859-5",iso88596:"iso8859-6",iso885961987:"iso8859-6",iso88597:"iso8859-7",iso885971987:"iso8859-7",iso88598:"iso8859-8",iso885981988:"iso8859-8",iso88599:"windows-1254",iso885991989:"windows-1254",isoceltic:"iso8859-14",isoir100:"windows-1252",isoir101:"iso8859-2",isoir109:"iso8859-3",isoir110:"iso8859-4",isoir126:"iso8859-7",isoir127:"iso8859-6",isoir138:"iso8859-8",isoir144:"iso8859-5",isoir148:"windows-1254",isoir149:"cp949",isoir157:"iso8859-10",isoir199:"iso8859-14",isoir226:"iso8859-16",isoir58:"gbk",isoir6:"ascii",koi8r:"koi8-r",koi8u:"koi8-u",korean:"cp949",ksc5601:"cp949",ksc56011987:"cp949",ksc56011989:"cp949",l1:"windows-1252",l10:"iso8859-16",l2:"iso8859-2",l3:"iso8859-3",l4:"iso8859-4",l5:"windows-1254",l6:"iso8859-10",l8:"iso8859-14",latin1:"windows-1252",latin10:"iso8859-16",latin2:"iso8859-2",latin3:"iso8859-3",latin4:"iso8859-4",latin5:"windows-1254",latin6:"iso8859-10",latin8:"iso8859-14",latin9:"iso8859-15",ms936:"gbk",mskanji:"shift_jis",pt154:"ptcp154",ptcp154:"ptcp154",r8:"hp-roman8",roman8:"hp-roman8",shiftjis:"shift_jis",tis620:"cp874",unicode11utf7:"utf-7",us:"ascii",usascii:"ascii",utf16:"utf-16",utf16be:"utf-16-be",utf16le:"utf-16-le",utf8:"utf-8",windows1250:"cp1250",windows1251:"cp1251",windows1252:"cp1252",windows1253:"cp1253",windows1254:"cp1254",windows1255:"cp1255",windows1256:"cp1256",windows1257:"cp1257",windows1258:"cp1258",windows936:"gbk","x-x-big5":"big5"},C.bC,t.B)
C.bD=H.a(s(["after","before","first-letter","first-line"]),t.s)
C.cN=new H.v(4,{after:null,before:null,"first-letter":null,"first-line":null},C.bD,H.aQ("v<o,aq>"))
C.dX=new P.fc(C.cN,H.aQ("fc<o>"))
C.dY=new V.hV("TipSide.Start")
C.dZ=new V.hV("TipSide.End")
C.e_=new P.i2(!1)
C.ag=H.a(s([]),t.O)
C.b2=new V.N(0.16078,0.67059,0.79216,1)
C.bj=H.a(s([C.b2]),t.O)
C.e0=new K.ck(C.ag,C.bj,1,C.ag,0)
C.e=new M.h(0,0,0)
C.m=new M.h(0,0,1)
C.L=new M.h(0,1,0)
C.j=new M.h(1,0,0)
C.M=new M.h(1,1,0)
C.aE=new M.h(1,1,1)
C.A=new M.h(-1,1,0)
C.N=new M.h(-1,-1,0)
C.e2=new P.dz(null,2)})();(function staticFields(){$.ls=null
$.bT=0
$.dQ=null
$.nv=null
$.p0=null
$.oP=null
$.pf=null
$.lX=null
$.mb=null
$.n5=null
$.dD=null
$.fk=null
$.fl=null
$.mY=!1
$.aa=C.l
$.bg=H.a([],H.aQ("A<Q>"))
$.lC=null
$.mD=P.bn(t.N,H.aQ("cd"))
$.hJ=P.bn(t.N,H.aQ("b4<o,o>"))
$.iG=P.bn(t.S,H.aQ("b4<j,j>"))
$.oA=null
$.lL=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"u3","pp",function(){return H.tw("_$dart_dartClosure")})
s($,"uL","ni",function(){return C.l.kD(new H.mh(),H.aQ("bm<aq>"))})
s($,"uk","pr",function(){return H.c1(H.kK({
toString:function(){return"$receiver$"}}))})
s($,"ul","ps",function(){return H.c1(H.kK({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"um","pt",function(){return H.c1(H.kK(null))})
s($,"un","pu",function(){return H.c1(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"uq","px",function(){return H.c1(H.kK(void 0))})
s($,"ur","py",function(){return H.c1(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"up","pw",function(){return H.c1(H.o1(null))})
s($,"uo","pv",function(){return H.c1(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"ut","pA",function(){return H.c1(H.o1(void 0))})
s($,"us","pz",function(){return H.c1(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"uw","nf",function(){return P.r6()})
s($,"uu","pB",function(){return new P.kQ().$0()})
s($,"uv","pC",function(){return new P.kP().$0()})
s($,"ux","pD",function(){return H.qn(H.mV(H.a([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"uy","ng",function(){return typeof process!="undefined"&&Object.prototype.toString.call(process)=="[object process]"&&process.platform=="win32"})
s($,"uH","pE",function(){return P.rM()})
r($,"uK","pF",function(){return new Y.lZ().$0()})
r($,"u5","dH",function(){var q=new Y.jm()
q.mo()
return q})
s($,"uI","nh",function(){return new M.jd(H.aQ("cJ").a($.ne()))})
s($,"uf","pq",function(){return new E.hx(P.ay("/"),P.ay("[^/]$"),P.ay("^/"))})
s($,"uh","iN",function(){return new L.i6(P.ay("[/\\\\]"),P.ay("[^/\\\\]$"),P.ay("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])"),P.ay("^[/\\\\](?![/\\\\])"))})
s($,"ug","fr",function(){return new F.i0(P.ay("/"),P.ay("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$"),P.ay("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*"),P.ay("^/"))})
s($,"ue","ne",function(){return O.qR()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.b3,DOMError:J.b3,MediaError:J.b3,Navigator:J.b3,NavigatorConcurrentHardware:J.b3,NavigatorUserMediaError:J.b3,OverconstrainedError:J.b3,PositionError:J.b3,SQLError:J.b3,ArrayBufferView:H.hj,Int8Array:H.hi,Uint32Array:H.ew,Uint8Array:H.cN,HTMLAudioElement:W.y,HTMLBRElement:W.y,HTMLBaseElement:W.y,HTMLBodyElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLDivElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLImageElement:W.y,HTMLInputElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMediaElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableCellElement:W.y,HTMLTableDataCellElement:W.y,HTMLTableHeaderCellElement:W.y,HTMLTableColElement:W.y,HTMLTableElement:W.y,HTMLTableRowElement:W.y,HTMLTableSectionElement:W.y,HTMLTemplateElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLVideoElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,HTMLAnchorElement:W.fC,HTMLAreaElement:W.fF,HTMLCanvasElement:W.cC,CanvasRenderingContext2D:W.dR,CDATASection:W.bK,CharacterData:W.bK,Comment:W.bK,ProcessingInstruction:W.bK,Text:W.bK,DOMException:W.jh,DOMRectReadOnly:W.dX,SVGAElement:W.t,SVGAnimateElement:W.t,SVGAnimateMotionElement:W.t,SVGAnimateTransformElement:W.t,SVGAnimationElement:W.t,SVGCircleElement:W.t,SVGClipPathElement:W.t,SVGDefsElement:W.t,SVGDescElement:W.t,SVGDiscardElement:W.t,SVGEllipseElement:W.t,SVGFEBlendElement:W.t,SVGFEColorMatrixElement:W.t,SVGFEComponentTransferElement:W.t,SVGFECompositeElement:W.t,SVGFEConvolveMatrixElement:W.t,SVGFEDiffuseLightingElement:W.t,SVGFEDisplacementMapElement:W.t,SVGFEDistantLightElement:W.t,SVGFEFloodElement:W.t,SVGFEFuncAElement:W.t,SVGFEFuncBElement:W.t,SVGFEFuncGElement:W.t,SVGFEFuncRElement:W.t,SVGFEGaussianBlurElement:W.t,SVGFEImageElement:W.t,SVGFEMergeElement:W.t,SVGFEMergeNodeElement:W.t,SVGFEMorphologyElement:W.t,SVGFEOffsetElement:W.t,SVGFEPointLightElement:W.t,SVGFESpecularLightingElement:W.t,SVGFESpotLightElement:W.t,SVGFETileElement:W.t,SVGFETurbulenceElement:W.t,SVGFilterElement:W.t,SVGForeignObjectElement:W.t,SVGGElement:W.t,SVGGeometryElement:W.t,SVGGraphicsElement:W.t,SVGImageElement:W.t,SVGLineElement:W.t,SVGLinearGradientElement:W.t,SVGMarkerElement:W.t,SVGMaskElement:W.t,SVGMetadataElement:W.t,SVGPathElement:W.t,SVGPatternElement:W.t,SVGPolygonElement:W.t,SVGPolylineElement:W.t,SVGRadialGradientElement:W.t,SVGRectElement:W.t,SVGScriptElement:W.t,SVGSetElement:W.t,SVGStopElement:W.t,SVGStyleElement:W.t,SVGElement:W.t,SVGSVGElement:W.t,SVGSwitchElement:W.t,SVGSymbolElement:W.t,SVGTSpanElement:W.t,SVGTextContentElement:W.t,SVGTextElement:W.t,SVGTextPathElement:W.t,SVGTextPositioningElement:W.t,SVGTitleElement:W.t,SVGUseElement:W.t,SVGViewElement:W.t,SVGGradientElement:W.t,SVGComponentTransferFunctionElement:W.t,SVGFEDropShadowElement:W.t,SVGMPathElement:W.t,Element:W.t,AbortPaymentEvent:W.u,AnimationEvent:W.u,AnimationPlaybackEvent:W.u,ApplicationCacheErrorEvent:W.u,BackgroundFetchClickEvent:W.u,BackgroundFetchEvent:W.u,BackgroundFetchFailEvent:W.u,BackgroundFetchedEvent:W.u,BeforeInstallPromptEvent:W.u,BeforeUnloadEvent:W.u,BlobEvent:W.u,CanMakePaymentEvent:W.u,ClipboardEvent:W.u,CloseEvent:W.u,CustomEvent:W.u,DeviceMotionEvent:W.u,DeviceOrientationEvent:W.u,ErrorEvent:W.u,ExtendableEvent:W.u,ExtendableMessageEvent:W.u,FetchEvent:W.u,FontFaceSetLoadEvent:W.u,ForeignFetchEvent:W.u,GamepadEvent:W.u,HashChangeEvent:W.u,InstallEvent:W.u,MediaEncryptedEvent:W.u,MediaKeyMessageEvent:W.u,MediaQueryListEvent:W.u,MediaStreamEvent:W.u,MediaStreamTrackEvent:W.u,MessageEvent:W.u,MIDIConnectionEvent:W.u,MIDIMessageEvent:W.u,MutationEvent:W.u,NotificationEvent:W.u,PageTransitionEvent:W.u,PaymentRequestEvent:W.u,PaymentRequestUpdateEvent:W.u,PopStateEvent:W.u,PresentationConnectionAvailableEvent:W.u,PresentationConnectionCloseEvent:W.u,ProgressEvent:W.u,PromiseRejectionEvent:W.u,PushEvent:W.u,RTCDataChannelEvent:W.u,RTCDTMFToneChangeEvent:W.u,RTCPeerConnectionIceEvent:W.u,RTCTrackEvent:W.u,SecurityPolicyViolationEvent:W.u,SensorErrorEvent:W.u,SpeechRecognitionError:W.u,SpeechRecognitionEvent:W.u,SpeechSynthesisEvent:W.u,StorageEvent:W.u,SyncEvent:W.u,TrackEvent:W.u,TransitionEvent:W.u,WebKitTransitionEvent:W.u,VRDeviceEvent:W.u,VRDisplayEvent:W.u,VRSessionEvent:W.u,MojoInterfaceRequestEvent:W.u,ResourceProgressEvent:W.u,USBConnectionEvent:W.u,IDBVersionChangeEvent:W.u,AudioProcessingEvent:W.u,OfflineAudioCompletionEvent:W.u,WebGLContextEvent:W.u,Event:W.u,InputEvent:W.u,SubmitEvent:W.u,EventTarget:W.aV,HTMLFormElement:W.h0,MouseEvent:W.ba,DragEvent:W.ba,PointerEvent:W.ba,WheelEvent:W.ba,Document:W.b5,DocumentFragment:W.b5,HTMLDocument:W.b5,ShadowRoot:W.b5,XMLDocument:W.b5,Attr:W.b5,DocumentType:W.b5,Node:W.b5,Path2D:W.ht,HTMLSelectElement:W.hF,CompositionEvent:W.bA,FocusEvent:W.bA,KeyboardEvent:W.bA,TextEvent:W.bA,TouchEvent:W.bA,UIEvent:W.bA,Window:W.dw,DOMWindow:W.dw,ClientRect:W.eX,DOMRect:W.eX})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Int8Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.f3.$nativeSuperclassTag="ArrayBufferView"
H.f4.$nativeSuperclassTag="ArrayBufferView"
H.ev.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=Q.tI
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=fourier_transform.dart.js.map
