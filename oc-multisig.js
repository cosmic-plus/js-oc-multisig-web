!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.multisig=r():t.multisig=r()}(window,function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=7)}([function(t,r,e){var n=e(4);n.isBrowser?void 0===window.StellarSdk?console.error("Missing dependency: StellarSdk"):t.exports=window.StellarSdk:t.exports=n.nodeRequire("stellar-sdk")},function(t,r,e){t.exports=e(9)},function(t,r){function e(t,r,e,n,i,o,u){try{var a=t[o](u),c=a.value}catch(t){return void e(t)}a.done?r(c):Promise.resolve(c).then(n,i)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise(function(i,o){var u=t.apply(r,n);function a(t){e(u,i,o,a,c,"next",t)}function c(t){e(u,i,o,a,c,"throw",t)}a(void 0)})}}},function(t,r,e){var n=e(13),i=e(1),o=e(2),u=r,a=e(17),c=e(0);function s(t){if(t)return"public"===t?c.Networks.PUBLIC:"test"===t?c.Networks.TESTNET:t;var r=c.Network.current();return r?r.networkPassphrase():void 0}u.server=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.network,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.server,n=s(r);if(!n)throw new Error("No network selected.");return l(n,e)},u.network=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.network,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.server,n=s(),i=s(r);if(n!==i)console.log("Switch to network: "+r),c.Network.use(new c.Network(i)),n=i;else if(!n)throw new Error("No network selected.");return l(n,e)};var f={},p={};function l(t,r){if(r?p[t]=r:r=p[t],!r)throw new Error("No default server for requested network.");return f[r]||(f[r]=new c.Server(r)),f[r]}l(c.Networks.PUBLIC,"https://horizon.stellar.org"),l(c.Networks.TESTNET,"https://horizon-testnet.stellar.org"),u.accountCacheExpiration=300;var h={};function d(){return(d=o(i.mark(function t(r,e){return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return h[r]=e,t.next=3,a.timeout(1e3*u.accountCacheExpiration);case 3:delete h[r];case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}function v(){return(v=o(i.mark(function t(r,e){var n,o,u;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.FederationServer.resolve(e);case 2:if(n=t.sent,o=n.account_id){t.next=6;break}throw new Error("Invalid response from federation server.");case 6:return n.memo_type||void 0===n.memo||delete n.memo,e!==o&&(n.address=e),(u=r.aliases&&r.aliases[o])&&(n.alias=u),t.abrupt("return",n);case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}function m(t,r){return w.apply(this,arguments)}function w(){return(w=o(i.mark(function t(r,e){var o;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=u.txSources(r,e),t.abrupt("return",u.signersList.apply(u,[r].concat(n(o))));case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}u.address=function(t,r){if(h[r])return h[r];var e=function(t,r){return v.apply(this,arguments)}(t,r);return function(t,r){d.apply(this,arguments)}(r,e),e},u.account=function(){var t=o(i.mark(function t(r,e){var n,o,a,c,s,f=arguments;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=f.length>2&&void 0!==f[2]?f[2]:r.network,o=u.server(r,n),t.next=4,u.address(r,e);case 4:return a=t.sent,c=a.account_id,t.next=8,o.loadAccount(c);case 8:return s=t.sent,t.abrupt("return",s);case 10:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}(),u.accountIsEmpty=function(){var t=o(i.mark(function t(r,e){return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.account(r,e).then(function(){return!1}).catch(function(){return!0}));case 1:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}(),u.transaction=function(){var t=o(i.mark(function t(r,e){var n;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.server.transactions(),t.abrupt("return",n.transaction(e).call());case 2:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}(),u.accountSigners=function(){var t=o(i.mark(function t(r,e){var n;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.account(r,e);case 2:return n=t.sent,t.abrupt("return",n.signers);case 4:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}(),u.signersTable=function(){var t=o(i.mark(function t(r){var e,n,o,a,c,s,f=arguments;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e={},n=f.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=f[a];t.t0=i.keys(o);case 3:if((t.t1=t.t0()).done){t.next=11;break}return c=t.t1.value,t.next=7,u.account(r,o[c]);case 7:s=t.sent,e[s.id]||(e[s.id]=s.signers),t.next=3;break;case 11:return t.abrupt("return",e);case 12:case"end":return t.stop()}},t)}));return function(r){return t.apply(this,arguments)}}(),u.signersList=function(){var t=o(i.mark(function t(r){var e,n,o,a,c,s=arguments;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e=[],n=s.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=s[a];t.t0=i.keys(o);case 3:if((t.t1=t.t0()).done){t.next=11;break}return c=t.t1.value,t.next=7,u.account(r,o[c]);case 7:t.sent.signers.forEach(function(t){e.find(function(r){return r.key===t.key})||e.push(t.key)}),t.next=3;break;case 11:return t.abrupt("return",e);case 12:case"end":return t.stop()}},t)}));return function(r){return t.apply(this,arguments)}}(),u.txSources=function(t,r){var e=y(r);if(e.sources)return e.sources;var n=[r.source],i=function(t){var e=r.operations[t].source;e&&!n.find(function(t){return t===e})&&n.push(e)};for(var o in r.operations)i(o);return e.sources=n,n},u.txSignersList=function(){var t=o(i.mark(function t(r,e){var n;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(n=y(e)).signers||(n.signers=m(r,e)),t.abrupt("return",n.signers);case 3:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}();var g="extra_ocmultisig";function y(t){return t[g]||(t[g]={}),t[g]}},function(module,exports,__webpack_require__){(function(process,global){var env=exports;if(env.isBrowser="undefined"!=typeof window&&void 0!==window.document,env.isNode=void 0!==process&&process.versions&&process.versions.node,env.isEmbedded=env.isBrowser&&window.self!==window.top,env.window=env.isBrowser&&window,env.global=env.isNode&&global,env.nodeRequire=function(){},env.isNode){var stealth_require=eval("require");env.nodeRequire=function(t){return stealth_require(t)}}}).call(this,__webpack_require__(11),__webpack_require__(12))},function(t,r,e){var n=e(4);if(n.isBrowser){var i=new(e(0).Memo)("hash","0000000000000000000000000000000000000000000000000000000000000000");t.exports=i.value.__proto__.constructor}else t.exports=n.nodeRequire("safe-buffer").Buffer},function(t,r,e){var n=e(1),i=e(2),o=r,u=e(5),a=e(19),c=e(0),s=e(3);function f(t,r){if("string"==typeof r){var e=u.from(r).slice(0,28).toString();r=new c.Memo("text",e)}r&&t.addMemo(r)}function p(t,r,e){return l.apply(this,arguments)}function l(){return(l=i(n.mark(function t(r,e,i){var o,u,a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:Array.isArray(i)||(i=[i]),t.t0=n.keys(i);case 2:if((t.t1=t.t0()).done){t.next=11;break}return o=t.t1.value,u=i[o],t.next=7,h(r,u);case 7:a=t.sent,e.addOperation(a),t.next=2;break;case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}function h(t,r){return d.apply(this,arguments)}function d(){return(d=i(n.mark(function t(r,e){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.accountIsEmpty(r,e);case 2:if(!t.sent){t.next=6;break}return t.abrupt("return",m("createAccount",{destination:e,startingBalance:"1"}));case 6:return t.abrupt("return",m("payment",{destination:e,asset:c.Asset.native(),amount:"0.0000001"}));case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}function v(t,r){r instanceof u||(r=u.from(r));var e=100-t.operations.length;r.length>64*e&&console.log("Warning: message will be truncated.");for(var n=0;n<e;n++){var i=r.slice(64*n,64*n+64);if(0===i.length)break;var o=m("manageData",{name:"Send",value:i});t.addOperation(o)}}function m(t,r){return c.Operation[t](r)}function w(t){return"hash"===t._type||"return"===t._type?t._value.toString("hex"):t._value.toString("utf8")}function g(t){var r=[];return t.operations.forEach(function(t){(function(t){return"manageData"===t.type&&"Send"===t.name})(t)&&r.push(t.value)}),u.concat(r)}function y(t){return function(r){return!(r.operation_count<2)&&(!t||t(r))}}o.send=function(){var t=i(n.mark(function t(r,e,i,u,a){var c,f,p;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.account(r,e.publicKey());case 2:return c=t.sent,t.next=5,o.encode(r,c,i,u,a);case 5:return(f=t.sent).sign(e),p=s.network(r),t.abrupt("return",p.submitTransaction(f));case 9:case"end":return t.stop()}},t)}));return function(r,e,n,i,o){return t.apply(this,arguments)}}(),o.encode=function(){var t=i(n.mark(function t(r,e,i,o,u){var a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return f(a=new c.TransactionBuilder(e,{fee:100}),o),t.next=4,p(r,a,i);case 4:return v(a,u),t.abrupt("return",a.setTimeout(c.InfiniteTimeout).build());case 6:case"end":return t.stop()}},t)}));return function(r,e,n,i,o){return t.apply(this,arguments)}}(),o.read=function(){var t=i(n.mark(function t(r,e){var i,u,a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=s.network(r),u=i.transactions().transaction(e),t.next=4,u.call();case 4:return a=t.sent,t.abrupt("return",o.decode(r,a));case 6:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}(),o.decode=function(t,r){var e=new c.Transaction(r.envelope_xdr);return e.operations.length<2?null:{sender:r.source_account,object:w(e.memo),date:r.created_at,content:g(e)}},o.list=function(){var t=i(n.mark(function t(r,e,i){var u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.listRaw(r,e,i);case 2:return u=t.sent,t.abrupt("return",u.map(function(t){return o.decode(r,t)}));case 4:case"end":return t.stop()}},t)}));return function(r,e,n){return t.apply(this,arguments)}}(),o.listRaw=function(){var t=i(n.mark(function t(r,e){var i,o,u,c=arguments;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.length>2&&void 0!==c[2]?c[2]:{},t.next=3,s.accountIsEmpty(r,e);case 3:if(!t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:return o=s.server(r),u=o.transactions().forAccount(e),i.cursor&&u.cursor(i.cursor),i.order&&u.order(i.order),i.filter=y(i.filter),t.abrupt("return",a(u,i));case 11:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}(),o.find=function(){var t=i(n.mark(function t(r,e,i){var u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.list(r,e,{limit:1,filter:i});case 2:if(!(u=t.sent)[0]){t.next=5;break}return t.abrupt("return",u[0]);case 5:case"end":return t.stop()}},t)}));return function(r,e,n){return t.apply(this,arguments)}}()},function(t,r,e){var n={};function i(t){return function(){for(var r=Object.create(n),e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return t.apply(void 0,[r].concat(i))}}t.exports=function(t){var r={};for(var e in t)"function"==typeof t[e]&&(r[e]=i(t[e]));return Object.assign({},t,r)}(e(8))},function(t,r,e){var n,i=e(1),o=e(2),u=r,a=e(10),c=e(5),s=e(0),f=e(3),p=e(18),l=e(20);function h(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e.id||t.multisig.id||s.Keypair.random().publicKey(),i=new s.TransactionBuilder(r,{fee:100});i.addMemo(new s.Memo("text","Setup signature sharing"));var o=!0,u=function(t,r){i.addOperation(s.Operation.manageData({name:t,value:r})),o=!1};return n!==t.multisig.id&&u("config:multisig",n),e.network||(e.network="test"),(e.network||t.multisig.network)&&e.network!==t.multisig.network&&u("config:multisig:network",e.network),(e.server||t.multisig.server)&&e.server!==t.multisig.server&&u("config:multisig:server",e.server),o?null:i.setTimeout(s.InfiniteTimeout).build()}function d(t,r){var e=new s.TransactionBuilder(r,{fee:100});e.addMemo(new s.Memo("text","Disable signature sharing"));var n=function(t,r){e.addOperation(s.Operation.manageData({name:t,value:r}))};return n("config:multisig",null),r.data_attr["multisig:network"]&&n("config:multisig:network",null),r.data_attr["multisig:server"]&&n("config:multisig:server",null),e.setTimeout(s.InfiniteTimeout).build()}function v(t){return{id:m(t.data_attr["config:multisig"]),network:m(t.data_attr["config:multisig:network"])||"test",server:m(t.data_attr["config:multisig:server"])}}function m(t){if(t)return c.from(t,"base64").toString("utf8")}function w(t,r){return g.apply(this,arguments)}function g(){return(g=o(i.mark(function t(r,e){var n;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!((i=e)&&i._baseAccount&&i._baseAccount instanceof s.Account)){t.next=4;break}return t.abrupt("return",e);case 4:if(!(e instanceof s.Keypair)){t.next=8;break}e=e.publicKey(),t.next=14;break;case 8:if(!(e instanceof s.Account)){t.next=12;break}e=e._accountId,t.next=14;break;case 12:if("string"==typeof e){t.next=14;break}throw new TypeError("Invalid user parameter.");case 14:return t.next=16,f.account(r,e);case 16:return n=t.sent,t.abrupt("return",n);case 18:case"end":return t.stop()}var i},t)}))).apply(this,arguments)}function y(t,r){return x.apply(this,arguments)}function x(){return(x=o(i.mark(function t(r,e){return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.accountIsEmpty(r,e);case 2:if(!t.sent){t.next=8;break}if("test"!==r.network){t.next=7;break}return t.abrupt("return",a("https://friendbot.stellar.org/?addr="+e));case 7:throw new Error("Account doesn't exist on the requested network: "+r.network);case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}function b(t,r,e){return k.apply(this,arguments)}function k(){return(k=o(i.mark(function t(r,e,n){var o,u;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e instanceof s.Transaction)){t.next=8;break}return o=f.network(r),e.sign(n),(u=o.submitTransaction(e)).catch(function(t){return console.error(t.response)}),t.abrupt("return",u);case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)}function _(){n=s.Network.current()}function E(){s.Network.current()!==n&&(console.log("Restore network"),s.Network.use(n))}u.isEnabled=function(){var t=o(i.mark(function t(r,e){return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.config(r,e);case 2:return r.multisig=t.sent,t.abrupt("return",!!r.multisig);case 4:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}(),u.config=function(){var t=o(i.mark(function t(r,e){var n;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(r,e);case 2:if(n=t.sent,r.multisig=v(n),!r.multisig.id){t.next=8;break}return t.abrupt("return",r.multisig);case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}(),u.enable=function(){var t=o(i.mark(function t(r,e,n){var o,u;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(r,e);case 2:if(o=t.sent,r.multisig=v(o),!r.multisig.id){t.next=7;break}return console.log("On-chain signature sharing is already enabled on this account."),t.abrupt("return",null);case 7:return u=h(r,o,n),t.abrupt("return",b(r,u,e));case 9:case"end":return t.stop()}},t)}));return function(r,e,n){return t.apply(this,arguments)}}(),u.setup=function(){var t=o(i.mark(function t(r,e,n){var o,u;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(r,e);case 2:if(o=t.sent,r.multisig=v(o),r.multisig.id){t.next=6;break}throw new Error("On-chain signature sharing in not enabled on this account.");case 6:return u=h(r,o,n),t.abrupt("return",b(r,u,e));case 8:case"end":return t.stop()}},t)}));return function(r,e,n){return t.apply(this,arguments)}}(),u.disable=function(){var t=o(i.mark(function t(r,e){var n,o;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(r,e);case 2:if(n=t.sent,r.multisig=v(n),r.multisig.id){t.next=7;break}return console.log("On-chain signature sharing is already disabled on this account."),t.abrupt("return",null);case 7:return o=d(r,n),t.abrupt("return",b(r,o,e));case 9:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}(),u.pushSignatures=function(){var t=o(i.mark(function t(r,e,n){var o,u,a,c;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.account(r,e.source);case 2:if(o=t.sent,r.multisig=v(o),r.multisig.id){t.next=6;break}throw new Error("On-chain signature sharing in not enabled on this account.");case 6:return _(),u=n.publicKey(),t.next=10,y(r.multisig,u);case 10:return t.next=12,p.makePushTx(r,e,u);case 12:return a=t.sent,(c=b(r.multisig,a,n)).finally(E),t.abrupt("return",c);case 16:case"end":return t.stop()}},t)}));return function(r,e,n){return t.apply(this,arguments)}}(),u.pullSignatures=function(){var t=o(i.mark(function t(r,e){var n,o;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(r,e.source);case 2:if(n=t.sent,r.multisig=v(n),r.multisig.id){t.next=6;break}throw new Error("On-chain signature sharing in not enabled on this account.");case 6:return _(),t.next=9,p.pull(r,e);case 9:return o=t.sent,E(),t.abrupt("return",o);case 12:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}(),u.pushTransaction=function(){var t=o(i.mark(function t(r,e,n){var o,u,a,c;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(r,n);case 2:if(o=t.sent,r.multisig=v(o),r.multisig.id){t.next=6;break}throw new Error("On-chain transaction sharing is not enabled on this account.");case 6:if(u=n.publicKey(),o.signers.map(function(t){return t.key}).find(function(t){return t===u})){t.next=10;break}throw new Error("Not a co-signer for transaction source account: "+u);case 10:return _(),t.next=13,y(r.multisig,u);case 13:return(e=Object.create(e)).signatures=[],t.next=17,l.makePushTx(r,e,u);case 17:return a=t.sent,(c=b(r.multisig,a,n)).finally(E),t.abrupt("return",c);case 21:case"end":return t.stop()}},t)}));return function(r,e,n){return t.apply(this,arguments)}}(),u.listTransactions=function(){var t=o(i.mark(function t(r,e,n){var o;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(r,e);case 2:if(o=t.sent,r.multisig=v(o),r.multisig.id){t.next=6;break}throw new Error("On-chain transaction sharing is not enabled on this account.");case 6:return t.abrupt("return",l.list(r,o,n));case 7:case"end":return t.stop()}},t)}));return function(r,e,n){return t.apply(this,arguments)}}(),u.useNetwork=function(t,r,e){return f.network(t.__proto__,r,e)}},function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,r,e,n){var i=r&&r.prototype instanceof v?r:v,o=Object.create(i.prototype),u=new L(n||[]);return o._invoke=function(t,r,e){var n=f;return function(i,o){if(n===l)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw o;return j()}for(e.method=i,e.arg=o;;){var u=e.delegate;if(u){var a=E(u,e);if(a){if(a===d)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var c=s(t,r,e);if("normal"===c.type){if(n=e.done?h:p,c.arg===d)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=h,e.method="throw",e.arg=c.arg)}}}(t,e,u),o}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f="suspendedStart",p="suspendedYield",l="executing",h="completed",d={};function v(){}function m(){}function w(){}var g={};g[o]=function(){return this};var y=Object.getPrototypeOf,x=y&&y(y(O([])));x&&x!==e&&n.call(x,o)&&(g=x);var b=w.prototype=v.prototype=Object.create(g);function k(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function _(t){var r;this._invoke=function(e,i){function o(){return new Promise(function(r,o){!function r(e,i,o,u){var a=s(t[e],t,i);if("throw"!==a.type){var c=a.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,o,u)},function(t){r("throw",t,o,u)}):Promise.resolve(f).then(function(t){c.value=t,o(c)},function(t){return r("throw",t,o,u)})}u(a.arg)}(e,i,r,o)})}return r=r?r.then(o,o):o()}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=s(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,u=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=r,e.done=!0,e};return u.next=u}}return{next:j}}function j(){return{value:r,done:!0}}return m.prototype=b.constructor=w,w.constructor=m,w[a]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},k(_.prototype),_.prototype[u]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,i){var o=new _(c(r,e,n,i));return t.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},k(b),b[a]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],a=u.completion;if("root"===u.tryLoc)return i("end");if(u.tryLoc<=this.prev){var c=n.call(u,"catchLoc"),s=n.call(u,"finallyLoc");if(c&&s){if(this.prev<u.catchLoc)return i(u.catchLoc,!0);if(this.prev<u.finallyLoc)return i(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return i(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return i(u.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=r,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;S(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,r,e){var n=e(4);n.isBrowser?t.exports=e(0).axios:t.exports=n.nodeRequire("axios")},function(t,r){var e,n,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var c,s=[],f=!1,p=-1;function l(){f&&c&&(f=!1,c.length?s=c.concat(s):p=-1,s.length&&h())}function h(){if(!f){var t=a(l);f=!0;for(var r=s.length;r;){for(c=s,s=[];++p<r;)c&&c[p].run();p=-1,r=s.length}c=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(r){try{return n.call(null,t)}catch(r){return n.call(this,t)}}}(t)}}function d(t,r){this.fun=t,this.array=r}function v(){}i.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];s.push(new d(t,r)),1!==s.length||f||a(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){var n=e(14),i=e(15),o=e(16);t.exports=function(t){return n(t)||i(t)||o()}},function(t,r){t.exports=function(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}},function(t,r){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,r,e){"use strict";var n=r;n.delay=function(t){var r,e=!0;return function(){return e&&(e=!1,r=new Promise(function(r){return r(t())})),r}},n.timeout=function(t){return new Promise(function(r){return setTimeout(r,t)})},n.capitalize=function(t){return t.substr(0,1).toUpperCase()+t.slice(1)},n.shorter=function(t){return t.length>50?t.substr(0,5)+"..."+t.substr(-5):t},n.setHiddenProperty=function(t,r,e){Object.defineProperty(t,r,{value:e,enumerable:!1,configurable:!0})},n.deprecated=function(t,r,e){console.error("Warning: ".concat(r," is deprecated and will be removed after ").concat(t,". Please use ").concat(e," instead."))},n.useExtra=function(t){return t[i]||n.setHiddenProperty(t,i,{}),t[i]};var i="@cosmic-plus";n.isUtf8=function(t){return!t.match(/[\0-\x1F\x7F-\x9F\xAD\uD7FC-\uF8FF]/)},n.isBase64=function(t){return!!t.match(/^[0-9a-zA-Z+\/]*=*$/)},n.day=function(t){return(t?new Date(t):new Date).toISOString().replace(/T.*/,"")},n.copy=function(){return console.error("misc.copy() have been moved to html.copyString()")}},function(t,r,e){var n=e(1),i=e(2),o=r,u=e(5),a=e(0),c=e(6),s=e(3);function f(t,r){return t.filter(function(t){return!r.find(function(r){return t.toString()===r.toString()})})}function p(t,r,e){return l.apply(this,arguments)}function l(){return(l=i(n.mark(function t(r,e,i){var o,u,f,p,l,v;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.toString("base64"),t.next=3,s.accountIsEmpty(r.multisig,r.multisig.id);case 3:if(!t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:return t.next=7,c.listRaw(r.multisig,r.multisig.id,{filter:function(t){return"return"===t.memo_type&&t.memo===o}});case 7:u=t.sent,f=[],t.t0=n.keys(u);case 10:if((t.t1=t.t0()).done){t.next=19;break}if(p=t.t1.value,l=u[p],h(v=new a.Transaction(l.envelope_xdr),i)){t.next=16;break}return t.abrupt("continue",10);case 16:v.operations.forEach(function(t){d(t)&&f.push(t.value)}),t.next=10;break;case 19:return t.abrupt("return",f);case 20:case"end":return t.stop()}},t)}))).apply(this,arguments)}function h(t,r){return r.find(function(r){return r===t.source})}function d(t){return"manageData"===t.type&&"Send"===t.name}function v(t,r,e,n){var i=!1,o=t.signatures.map(function(t){return t.signature().toString()}),u=n.map(function(t){return a.Keypair.fromPublicKey(t)}),c=function(n){var c=r[n];if(o.find(function(t){return t===c.toString()}))return"continue";var s=u.find(function(t){return t.verify(e,c)});if(!s)return"continue";var f=function(t,r){return new(0,a.xdr.DecoratedSignature)({hint:t.signatureHint(),signature:r})}(s,c);t.signatures.push(f),o.push(c.toString()),i=!0};for(var s in r)c(s);return i}o.makePushTx=function(){var t=i(n.mark(function t(r,e,i){var o,l,h,d,v,m,w,g;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.signatures.map(function(t){return t.signature()}),e.signatures.length){t.next=3;break}return t.abrupt("return",null);case 3:return l=e.hash(),t.next=6,s.txSignersList(r,e);case 6:return h=t.sent,t.next=9,p(r,l,h);case 9:if(d=t.sent,f(o,d).length){t.next=13;break}return t.abrupt("return",null);case 13:return t.next=15,s.account(r.multisig,i);case 15:return v=t.sent,m=r.multisig.id,w=new a.Memo("return",l),g=u.concat(o),t.abrupt("return",c.encode(r.multisig,v,m,w,g));case 20:case"end":return t.stop()}},t)}));return function(r,e,n){return t.apply(this,arguments)}}(),o.pull=function(){var t=i(n.mark(function t(r,e){var i,o,u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.hash(),t.next=3,s.txSignersList(r,e);case 3:return o=t.sent,t.next=6,p(r,i,o);case 6:return u=t.sent,t.abrupt("return",v(e,u,i,o));case 8:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}()},function(t,r,e){var n=e(1),i=e(2);function o(t,r){return u.apply(this,arguments)}function u(){return(u=i(n.mark(function t(r,e){var i,o,u,a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:i=[];case 1:if(!r.records.length){t.next=18;break}if(!e){t.next=12;break}if(o=i.length+r.records.length,e!==o){t.next=8;break}return t.abrupt("return",i.concat(r.records));case 8:if(!(o>e)){t.next=12;break}return u=e-i.length,a=r.records.slice(0,u),t.abrupt("return",i.concat(a));case 12:return i=i.concat(r.records),t.next=15,r.next();case 15:r=t.sent,t.next=1;break;case 18:return t.abrupt("return",i);case 19:case"end":return t.stop()}},t)}))).apply(this,arguments)}function a(t,r){return c.apply(this,arguments)}function c(){return(c=i(n.mark(function t(r,e){var i,o,u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:i=[];case 1:if(!r.records.length){t.next=28;break}t.t0=n.keys(r.records);case 3:if((t.t1=t.t0()).done){t.next=23;break}if(o=t.t1.value,!e.limit||i.length!==e.limit){t.next=7;break}return t.abrupt("return",i);case 7:if(u=r.records[o],!e.breaker){t.next=14;break}return t.next=11,e.breaker(u);case 11:if(!t.sent){t.next=14;break}return t.abrupt("return",i);case 14:if(!e.filter){t.next=20;break}return t.next=17,e.filter(u);case 17:if(t.sent){t.next=20;break}return t.abrupt("continue",3);case 20:i.push(u),t.next=3;break;case 23:return t.next=25,r.next();case 25:r=t.sent,t.next=1;break;case 28:return t.abrupt("return",i);case 29:case"end":return t.stop()}},t)}))).apply(this,arguments)}t.exports=function(){var t=i(n.mark(function t(r){var e,i,u,c=arguments;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>1&&void 0!==c[1]?c[1]:{},i=e.limit?Math.min(e.limit,200):200,t.next=4,r.limit(i).call();case 4:if(u=t.sent,!e.filter&&!e.breaker){t.next=9;break}return t.abrupt("return",a(u,e));case 9:return t.abrupt("return",o(u,e.limit));case 10:case"end":return t.stop()}},t)}));return function(r){return t.apply(this,arguments)}}()},function(t,r,e){var n=e(1),i=e(2),o=r,u=e(0),a=e(6),c=e(3);function s(t,r){return"hash"===t.memo_type&&r.find(function(r){return r===t.source_account})}function f(t){var r=a.decode(null,t);return r.ledger=t.ledger_attr,r.xdr=r.content.toString("base64"),delete r.content,delete r.object,r}function p(t,r){return l.apply(this,arguments)}function l(){return(l=i(n.mark(function t(r,e){var i,o,u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.toString("base64"),o=function(t){return h(t,"hash",i)},t.next=4,a.find(r.multisig,r.multisig.id,o);case 4:return u=t.sent,t.abrupt("return",!!u);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function h(t,r,e){return t.memo_type===r&&t.memo===e}function d(t){return t.signers.map(function(t){return t.key})}o.list=function(){var t=i(n.mark(function t(r,e){var i,o,u,c,p=arguments;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"number"!=typeof(i=p.length>2&&void 0!==p[2]?p[2]:0)&&(i=+i),o={},u=d(e),o.filter=function(t){return s(t,u)},i&&(o.breaker=function(t){return t.ledger_attr<=i}),t.next=8,a.listRaw(r.multisig,r.multisig.id,o);case 8:return c=t.sent,t.abrupt("return",c.map(f));case 10:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}(),o.makePushTx=function(){var t=i(n.mark(function t(r,e,i){var o,s,f,l,h;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.hash(),t.next=3,p(r,o);case 3:if(!t.sent){t.next=6;break}return console.log("Transaction have already been pushed"),t.abrupt("return",null);case 6:return t.next=8,c.account(r.multisig,i);case 8:return s=t.sent,f=r.multisig.id,l=new u.Memo("hash",o),h=e.toEnvelope().toXDR(),t.abrupt("return",a.encode(r.multisig,s,f,l,h));case 13:case"end":return t.stop()}},t)}));return function(r,e,n){return t.apply(this,arguments)}}()}])});
//# sourceMappingURL=oc-multisig.js.map