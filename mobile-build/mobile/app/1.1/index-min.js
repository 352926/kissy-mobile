KISSY.add("mobile/app/1.0/index",function(c,h){function a(d){if(this instanceof a)a.superclass.constructor.call(this,d),this.init();else return new a(d)}var b=window.history;a.ATTRS={viewpath:{value:"index.html"},forceReload:{value:!0},page:{value:null},direction:{value:"none"},anim:{value:!0},dataload:{value:"true"},param:{value:null},pageCache:{value:!1},tapTrigger:{value:"a"},animWrapperAutoHeightSetting:{value:!0},basepath:{value:window.location.protocol+"//"+window.location.hostname+window.location.pathname.replace(/\/[^\/]+$/i,
"").replace(/\/$/,"")+"/"},initPostData:{value:null},signet:{value:{level:0,viewpath:"",hisurl:"",lastviewpath:"",forward:0,scrollTop:0}},fullRangeWidth:{value:function(){return document.body.offsetWidth}},webkitOptimize:{value:!0},positionMemory:{value:!0}};c.mix(a,{STARTUP:{},TEARDOWN:{},INCLUDEONCE:{},DESTORY:{},PAGECACHE:{},PAGESCROLL:{},STORAGE:{},APP:null,AndroidHis:{},includeOnce:function(d){var a=this.APP.get("viewpath");c.isFunction(this.INCLUDEONCE[a])||(this.INCLUDEONCE[a]=d,d.call(this.APP,
this.APP))},destory:function(d){var a=this.APP.get("viewpath");c.isFunction(this.DESTORY[a])||(this.DESTORY[a]=d)},startup:function(a){var e=this.APP.get("viewpath");c.isFunction(this.STARTUP[e])||(this.STARTUP[e]=a)},teardown:function(a){var e=this.APP.get("viewpath");c.isFunction(this.TEARDOWN[e])||(this.TEARDOWN[e]=a)},queryKey:function(a,c){var b=location["undefined"===typeof c||"hash"!==c?"search":"hash"].substr(1).match(RegExp("(^|&)"+a+"=([^&]*)(&|$)","i"));return null!=b?unescape(b[2]):null}});
c.extend(a,c.Base,{init:function(){this.MS=this.constructor;c.UA.opera&&0<c.UA.opera&&this.set("animWrapperAutoHeightSetting",!0);this.slide=new h("MS",{autoSlide:!1,effect:this.get("anim")?"hSlide":"none",touchmove:!1,adaptive_fixed_width:!0,contentClass:"MS-con",speed:450,pannelClass:"MS-pal",animWrapperAutoHeightSetting:this.get("animWrapperAutoHeightSetting"),webkitOptimize:this.get("webkitOptimize"),adaptive_width:this.get("fullRangeWidth")});this.positionTimmer=null;this.bindEvent();this.initLoad();
this.slide.hideURIbar();a.APP=this;return this},callDestory:function(){var a=this.MS.DESTORY[this.get("signet").lastviewpath];c.isFunction(a)&&a.call(this,this);return this},initPageStorage:function(){var a=this.get("viewpath");if(!c.isObject(this.MS.STORAGE[a])){var e=function(){};c.augment(e,c.Base.Attribute,c.EventTarget);this.MS.STORAGE[a]=new e}},callStartup:function(a){var e=this;e[location.hash]={node:e.get("page"),viewHeight:"fixed",config:function(a){var a={viewHeight:"undefined"===typeof a.viewHeight||
"auto"!==a.viewHeight?"fixed":"auto"},d;for(d in a)this[d]=a[d]}};c.isUndefined(a)&&(a=e.get("viewpath"));var b=e.MS.STARTUP[a],g=e.get("param");e.set("param",null);e.set("storage",e.MS.STORAGE[a]||{});c.isFunction(b)&&(b.call(e[location.hash],g),c.later(function(){e.slide.setViewSize(e[location.hash].viewHeight)},0));return this},callTeardown:function(a){c.isUndefined(a)&&(a=this.get("viewpath"));if(""!==a){var e=this.MS.TEARDOWN[a];this.rememberPosition(a);return c.isFunction(e)?e.call(this,this):
!0}},rememberPosition:function(a){this.MS.PAGESCROLL[a]=c.DOM.scrollTop()},recallPosition:function(){if(this.get("positionMemory")){var a=this.MS.PAGESCROLL[this.get("viewpath")];a&&(window.scrollTo(0,a),0===c.DOM.scrollTop()&&setTimeout(function(){window.scrollTo(0,a)},200))}},initLoad:function(){c.isUndefined(c.getHash().viewpath)||this.set("viewpath",c.getHash().viewpath);c.isNull(this.get("initPostData"))||(this.__post=this.get("initPostData"));this._go(this.get("viewpath"),"none");var a=this.formatUrlTail(this.get("viewpath"),
c.getHash()),e={level:0,viewpath:this.get("viewpath"),hisurl:a,forward:0,lastviewpath:"",scrollTop:c.DOM.scrollTop()};this.set("signet",e);b.replaceState(e,"",a);this.set("viewpath",c.getHash().viewpath)},rollback:function(){var a=this.formatUrlTail(this.get("viewpath"),c.getHash()),e={level:0,viewpath:this.get("viewpath"),hisurl:a,forward:0,lastviewpath:"",scrollTop:c.DOM.scrollTop()};this.set("signet",e);b.replaceState(e,"",a);this.set("viewpath",c.getHash().viewpath)},loading:function(){var a=
this,e=c.one("#MS-loading"),e=e?e:c.Node('<div id="MS-loading" style="display:none"><img src="http://img04.taobaocdn.com/tps/i4/T1aIsKXmReXXa679Pe-40-40.gif" /></div>').appendTo("body");e.one("img").css({"margin-top":"5px"});e.css({display:"none",position:"fixed",height:"50px",width:"50px",top:"50%",left:"50%","margin-top":"-25px","margin-left":"-25px","border-radius":"6px","text-align":"center","background-color":"white",opacity:0.7});a.loadingTimer=setTimeout(function(){e.css({display:"block"});
a.loadingTimer=null},350);return a},closeLoading:function(){this.loadingTimer&&clearTimeout(this.loadingTimer);var a=c.one("#MS-loading");a&&a.css({display:"none"});return this},getUrlPrefix:function(){var a=window.location;return a.pathname.replace(/\/.+\//i,"").replace("/","")+a.search},formatUrlTail:function(a,e){c.isUndefined(e)&&(e="");c.isString(e)&&(e=c.unparam(e));var b=c.setHash(c.merge(e,{viewpath:a}));return this.getUrlPrefix()+b.replace(/^.+#/i,"#")},setRouteHash:function(a,e){this.set("viewpath",
a);c.isUndefined(e)&&(e="");c.isString(e)&&(e=c.unparam(e));var f=this.formatUrlTail(a,c.getHash()),f={level:this.get("signet").level+1,viewpath:a,hisurl:c.setHash(f,e),forward:1,lastviewpath:a,scrollTop:c.DOM.scrollTop()},g=window.location,g=g.protocol+"//"+g.hostname+g.pathname+g.search,g=c.setHash(g,c.merge({viewpath:a},e));c.UA.android&&4.3>c.UA.android?window.location.href=g:(this.doHashChange(a,e),b.replaceState(f,"",g))},doHashChange:function(a,e){var b=c.setHash(c.merge({stamp:c.now(),viewpath:a},
e)).match(/#.*$/i)[0];window.location.hash=b},bindEvent:function(){var a=this;if(c.UA.android&&4.3>c.UA.android){var e=c.getHash().viewpath?c.getHash().viewpath:a.get("viewpath");a.MS.AndroidHis[e]=1}a.slide.con.delegate("click",a.get("tapTrigger"),function(e){var b=c.one(e.currentTarget);if(!c.isUndefined(b.attr("target"))&&""!==b.attr("target")||/^javascript:/i.test(b.attr("href")))return"top"==b.attr("target")&&(window.location.href=b.attr("href"),e.preventDefault()),!0;a.__clickEvent=!0;var h=
b.attr("href"),i=b.attr("data-param"),b=b.attr("dir");if(""===h)return!0;e.preventDefault();"back"===b?a.back(h,i):"forward"===b?a.forward(h,i):a.setRouteHash(h,i)});c.Event.on(window,"hashchange",function(){var e=a.get("signet"),g=c.getHash().viewpath;a.set("viewpath",c.getHash().viewpath);var h=!1,h=a.__clickEvent&&!0===a.__clickEvent?!0:!1;delete a.__clickEvent;c.isUndefined(g)||(a.formatUrlTail(g,c.getHash()),c.UA.android&&4.3>c.UA.android?a._androidHistoryMan(h):c.isUndefined(b.state)||c.isUndefined(b.state.level)?
(a._go(g,"none"),a.recordSignet(0,g)):0===a.get("signet").forward&&0<b.state.forward?(a.next(g),a.recordSignet(1,g)):b.state.level>e.level?0<a.get("signet").forward&&0>b.state.forward?(a.prev(g),a.recordSignet(1,g,-1)):(a.next(g),a.recordSignet(1,g)):(0<a.get("signet").forward&&0>b.state.forward?a.prev():0>a.get("signet").forward&&0<b.state.forward?a.next(g,function(){a.callDestory();a.slide.remove(a.slide.length-2)}):a.prev(function(){a.recallPosition()}),a.recordSignet(-1,g,b.state.forward)))})},
recordSignet:function(a,e,b){c.isUndefined(a)&&(a=0,e=c.getHash().viewpath,b=1);c.isUndefined(e)&&(e=c.getHash().viewpath,b=1);c.isUndefined(b)&&(b=1);var g=this.get("signet").level,h=this.formatUrlTail(e,c.getHash()),a={level:g+a,viewpath:e,hisurl:h,forward:b,lastviewpath:this.get("signet").viewpath,scrollTop:c.DOM.scrollTop()};this.set("signet",a);return a},destory:function(){},_go:function(a,b,f){if(!1===this.callTeardown(this.get("signet").viewpath))return this.rollback(),this;c.isUndefined(b)&&
(b="next",f=function(){});c.isFunction(b)&&(f=b,b="next");c.isUndefined(f)&&(f=function(){});this.loadData(a,b,f)},postback:function(a){this.__post=a.data;c.isString(a.path)?this.back(a.path,a.data,a.callback):this.back(a.data,a.callback)},postforward:function(a){this.__post=a.data;c.isString(a.path)?this.forward(a.path,a.data,a.callback):this.forward(a.data,a.callback)},back:function(a,e,f){c.isUndefined(a)&&(a=void 0,e={},f=function(){});c.isUndefined(e)&&(e={},f=function(){});c.isFunction(e)&&
(f=e,e={});c.isObject(a)&&(e=a,f=function(){},a=void 0);c.isObject(e)&&c.isUndefined(f)&&(f=function(){});c.isString(e)&&(e=c.unparam(e));this.set("param",c.merge(e,{from:this.get("signet").viewpath}));if(c.isString(a)){this.prev.apply(this,arguments);var g=this.recordSignet(1,a,-1);b.pushState(g,"",c.setHash(g.hisurl,e))}else b.back();this.set("viewpath",c.getHash().viewpath);return this},forward:function(a,e,f){c.isUndefined(e)&&(e={},f=function(){});c.isFunction(e)&&(f=e,e={});c.isObject(e)&&c.isUndefined(f)&&
(f=function(){});c.isString(e)&&(e=c.unparam(e));this.set("param",c.merge(e,{from:this.get("signet").viewpath}));this.next.apply(this,arguments);var g=this.recordSignet(1,a);b.pushState(g,"",c.setHash(g.hisurl,e));this.set("viewpath",c.getHash().viewpath);return this},_androidHistoryMan:function(a,b){var f=this;c.isUndefined(b)&&(b=f.get("viewpath"));if(a||!(b in f.MS.AndroidHis))f.next(b),f.recordSignet(1,b);else{f.prev(b,function(){f.recallPosition()});f.recordSignet(1,b,-1);for(var g in f.MS.AndroidHis)1==
f.MS.AndroidHis[g]&&delete f.MS.AndroidHis[g]}for(var h in f.MS.AndroidHis)f.MS.AndroidHis[h]=null;f.MS.AndroidHis[b]=1},next:function(a,b){var f=this;c.isFunction(a)&&(b=a,a=void 0);c.isUndefined(b)&&(b=function(){});if(c.isUndefined(a)){if(!1===f.callTeardown(f.get("signet").viewpath))return f.rollback(),this;f.slide.removeHeightTimmer();f.get("animWrapperAutoHeightSetting")&&window.scrollTo(0,0);f.slide.next(function(){f.slide.addHeightTimmer();c.isFunction(b)&&b.call(f.slide,f.slide);f.get("forceReload")&&
f.slide.remove(f.slide.length-2)});f.set("page",f.slide.getCurrentPannel());setTimeout(function(){f.callStartup()},0)}else f._go(a,"next","sdfsdfsdf=123")},prev:function(a,b){var f=this;c.isFunction(a)&&(b=a,a=void 0);c.isUndefined(b)&&(b=function(){});!c.isString(a)&&f.get("forceReload")&&(a=f.get("viewpath"));if(c.isUndefined(a)){if(!1===f.callTeardown(f.get("signet").viewpath))return f.rollback(),this;f.slide.removeHeightTimmer();f.slide.previous(function(){f.slide.addHeightTimmer();f.callDestory();
this.removeLast();c.isFunction(b)&&b.call(f.slide,f.slide)});f.set("page",f.slide.getCurrentPannel());setTimeout(function(){f.callStartup()},0)}else f._go(a,"prev",b)},getAjaxPath:function(a){return this.get("basepath")+a},loadData:function(a,b,f){var g=this;c.isUndefined(b)&&(b="next",f=function(){});c.isFunction(b)&&(f=b,b="next");c.isUndefined(f)&&(f=function(){});var h=function(a){g.closeLoading();var d=c.Node('<div class="MS-pal">'+a+"</div>");g.set("page",d);switch(b){case "prev":g.slide.add(d,
g.slide.currentTab);g.slide.relocateCurrentTab(g.slide.currentTab+1);c.execScript(a);setTimeout(function(){g.initPageStorage();g.callStartup()},0);setTimeout(function(){g.slide.removeHeightTimmer();g.slide.previous(function(){g.slide.addHeightTimmer();g.callDestory();c.isFunction(f)&&f.call(g.slide,g.slide);this.removeLast()})},150);break;case "next":g._fixScrollTopBefore(d);g.slide.add(d);c.execScript(a);setTimeout(function(){g.initPageStorage();g.callStartup()},0);setTimeout(function(){g.slide.removeHeightTimmer();
g.get("animWrapperAutoHeightSetting")&&window.scrollTo(0,0);g.slide.next(function(){g.callDestory();c.isFunction(f)&&f.call(g.slide,g.slide);g.get("forceReload")&&g.slide.remove(g.slide.length-2);g._fixScrollTopAfter(d)})},150);break;case "none":g.slide.add(d,g.slide.currentTab);g.callDestory();c.execScript(a);setTimeout(function(){g.initPageStorage();g.callStartup()},0);f.call(g.slide,g.slide);g.slide.removeLast()}},i=function(b){b=b.replace(/.*<\!--kdk{{--\>/ig,"").replace(/<\!--kdk}}--\>*/ig,"");
g.MS.PAGECACHE[a]=b;h(b)},j=g.getAjaxPath(a);g.loading();g.__post?(c.io.post(j,g.__post,i),delete g.__post):g.get("pageCache")&&!c.isUndefined(g.MS.PAGECACHE[a])?h(g.MS.PAGECACHE[a]):c.io.get(j,i)},_fixScrollTopBefore:function(a){if(!this.get("animWrapperAutoHeightSetting")){var b=c.DOM.scrollTop();a.css({"margin-top":b+"px"})}},_fixScrollTopAfter:function(a){var b=this,f=a.parent(),g=function(){a.appendTo(f).css({"margin-top":0,position:"relative",left:0});b.slide.addHeightTimmer();b.slide.hideURIbar()};
a.appendTo("body").css({"margin-top":0,position:"fixed",top:0,left:b.slide.con.offset().left+"px"});c.UA.opera&&0<c.UA.opera?(window.scrollTo(0,0),g()):c.Anim(window,{scrollTop:0},0.1,"easeBoth",function(){g()}).run()}});return a},{requires:["./slide","base","ajax"]});
KISSY.add("mobile/app/1.0/kissy2yui",function(c){c.augment(c.Node,{_delegate:function(){c.isFunction(arguments[1])?this.delegate(arguments[0],arguments[2],arguments[1]):this.delegate.apply(this,arguments);return this},indexOf:function(h){if(c.isUndefined(h))return null;h[0]&&(h=h[0]);var a=0;this.each(function(b,c){b[0]===h&&(a=c)});return a},size:function(){return this.length},set:function(c,a){"innerHTML"===c?this.html(a):this.attr(c,a);return this},get:function(c){var a=this,b={innerHTML:function(){return a.html()},
region:function(){return{height:a.height(),width:a.width()}}};if(c in b)return b[c]()},appendChild:function(){this.append.apply(this,arguments);return this},setStyle:function(c,a){this.css.apply(this,arguments);return this},setStyles:function(c){this.css.apply(this,arguments);return this},cloneNode:function(){return this.clone.apply(this,arguments)}});c.Node.create=function(h){return c.Node(h)}},{requires:["node","event"]});
KISSY.add("mobile/app/1.0/slide",function(c){var h=function(){if(!(this instanceof h))throw Error('please use "new Slide()"');this.init.apply(this,arguments)};h.plug=function(){};c.augment(h,c.Event.Target,{init:function(a,b){if(c.isObject(a))this.con=a;else if(/^#/i.test(a))this.con=c.one(a);else if(c.one("#"+a))this.con=c.one("#"+a);else if(c.one(a))this.con=c.one(a);else throw Error("Slide Container Hooker not found");this.buildParam(b);this.buildHTML();this.bindEvent();this.fire("ready",{index:0,
navnode:this.tabs.item(0),pannelnode:this.pannels.item(0)});if(this.reverse){var d;d=this.previous;this.previous=this.next;this.next=d}if(this.carousel)for(d=0;d<this.colspan;d++)this.fix_for_transition_when_carousel(2*d);this.fixSlideSize();this.layerSlide&&this.initLayer();return this},setWrapperSize:function(a){var b=this;c.isUndefined(a)&&(a=0);b.pannels=b.con.all("."+b.contentClass+" div."+b.pannelClass);b.length=b.pannels.length;({none:function(){},vSlide:function(){var c=b.animcon.get("region");
b.animwrap.setStyles({height:(b.length+a)*c.height/b.colspan+"px"})},hSlide:function(){var c=b.animcon.get("region");b.animwrap.setStyles({width:(b.length+a)*c.width/b.colspan+"px"})},fade:function(){}})[b.effect]();c.isUndefined(a)||b.relocateCurrentTab();return this},add:function(a,b){var d=this;if(c.isUndefined(b)||b>d.length)b=d.length;c.isString(a)&&(a=c.one(a));d.transitions&&a.css({visibility:"hidden"});b==d.length?(setTimeout(function(){d.setWrapperSize(1)},0),a.insertAfter(d.pannels[b-1])):
a.insertBefore(d.pannels[b]);d.setWrapperSize();d.fixSlideSize(d.currentTab);d.transitions&&a.css({visibility:""});return this},remove:function(a){if(1!==this.length)return a<=this.currentTab&&(this.currentTab--,this.length--),this.transitions&&this.con.css({display:"none"}),c.one(this.pannels[a]).remove(),this.setWrapperSize(),this.transitions&&this.con.css({display:"block"}),this.fixSlideSize(this.currentTab),this},removeLast:function(){this.remove(this.length-1);return this},renderLazyData:function(a){a.setStyle("display",
"none");if("1"!=a.attr("lazy-data")){a.attr("lazy-data","1");c.stamp(d);var b=a.get("innerHTML").replace(/&lt;/ig,"<").replace(/&gt;/ig,">"),d=c.Node.create("<div>"+b+"</div>");c.DOM.insertBefore(d,a);c.execScript(b)}},buildWrap:function(){this.animwrap=c.Node.create('<div style="height: 100%;"></div>');this.animwrap.set("innerHTML",this.animcon.get("innerHTML"));this.animcon.set("innerHTML","");this.animcon.appendChild(this.animwrap);this.pannels=this.con.all("."+this.contentClass+" div."+this.pannelClass);
return this},doEffectInit:function(){var a=this;({none:function(){a.pannels=a.con.all("."+a.contentClass+" div."+a.pannelClass);a.pannels.setStyles({display:"none"});a.pannels.item(a.defaultTab).setStyles({display:"block"})},vSlide:function(){a.buildWrap();var b=a.animcon.get("region");a.pannels.setStyles({"float":"none",overflow:"hidden"});a.animwrap.setStyles({height:a.length*b.height/a.colspan+"px",overflow:"hidden",top:-1*a.defaultTab*b.height+"px"})},hSlide:function(){a.buildWrap();var b=a.animcon.get("region");
a.pannels.setStyles({"float":"left",overflow:"hidden"});a.animwrap.setStyles({width:a.length*b.width/a.colspan+"px",overflow:"hidden",left:-1*a.defaultTab*b.width+"px"})},fade:function(){a.pannels=a.con.all("."+a.contentClass+" div."+a.pannelClass);a.pannels.setStyles({position:"absolute",zIndex:0});a.pannels.each(function(b,c){c==a.defaultTab?b.setStyles({opacity:1,display:"block"}):b.setStyles({opacity:0,diaplay:"none"})})}})[a.effect]();return this},buildHTML:function(){var a=this.con;this.tabs=
a.all("."+this.navClass+" "+this.triggerSelector);this.length=a.all("."+this.contentClass+" ."+this.pannelClass).size();a.one("."+this.navClass)||c.Node('<ul class="'+this.navClass+'" style="display:none"></ul>').appendTo(this.con);if(0===this.tabs.size()){for(var b=a.all("."+this.navClass),d="",e=0;e<this.length;e++){var f="";0===e&&(f=this.selectedClass);d+='<li class="'+f+'"><a href="javascript:void(0);">'+(e+1)+"</a></li>"}b.set("innerHTML",d)}this.tabs=a.all("."+this.navClass+" "+this.triggerSelector);
this.animcon=a.one("."+this.contentClass);this.animwrap=null;this.doEffectInit();this.fixSlideSize(this.currentTab);this.hightlightNav(this.getWrappedIndex(this.currentTab));!0===this.autoSlide&&this.play();return this},getCurrentPannel:function(){return c.one(this.pannels[this.currentTab])},renderWidth:function(){var a=this.animcon.get("region").width;"hSlide"==this.effect&&(a/=this.colspan);this.pannels.setStyles({width:a+"px"});return this},renderHeight:function(){var a=this.animcon.get("region").height;
"vSlide"==this.effect&&(a/=this.colspan);this.pannels.setStyles({height:a+"px"});return this},relocateCurrentTab:function(a){c.isUndefined(a)&&(a=this.currentTab);if("hSlide"==this.effect)return this.transitions?this.animwrap.setStyles({"-webkit-transition-duration":"0s","-webkit-transform":"translate3d("+-1*a*this.animcon.get("region").width+"px,0,0)","-webkit-backface-visibility":"hidden"}):this.animwrap.setStyles({left:-1*a*this.animcon.get("region").width}),this.currentTab=a,this},fixSlideSize:function(a){this.adaptive_fixed_width&&
this.renderWidth();this.adaptive_fixed_height&&this.renderHeight();this.adaptive_fixed_size&&this.renderHeight().renderWidth();this.resetSlideSize(a);return this},hideURIbar:function(){this.animcon.height("2500px");window.scrollTo(0,1);this.animcon.height(window.innerHeight+"px")},setViewSize:function(a){var b=c.one("body"),d=c.one("html"),a="auto"===a?"auto":"100%";b.setStyle("height",a);d.setStyle("height",a);this.animcon.setStyle("height",a);this.animcon.parent().height(a)},removeHeightTimmer:function(){c.isNull(this.heightTimmer)||
(clearInterval(this.heightTimmer),this.heightTimmer=null)},addHeightTimmer:function(){},resetSlideSize:function(a){var b;if("undefined"==typeof a||null===a)a=this.currentTab;if(!("hSlide"!=this.effect&&"vSlide"!=this.effect))return"hSlide"==this.effect&&(b=this.adaptive_width?this.adaptive_width():this.animcon.get("region").width,this.pannels.item(a).get("region"),b/=this.colspan,this.pannels.setStyles({width:b+"px",display:"block"}),this.animcon.setStyles({width:b*this.colspan+"px",overflow:"hidden"})),
"vSlide"==this.effect&&(b=this.pannels.item(a).get("region").width,a=this.adaptive_height?this.adaptive_height():this.animcon.get("region").height,a/=this.colspan,this.pannels.setStyles({height:a*this.colspan+"px",display:"block"}),this.animcon.setStyles({height:a*this.colspan+"px",overflow:"hidden"}),this.animWrapperAutoHeightSetting&&this.animcon.setStyles({width:b+"px"})),this},getWrappedIndex:function(a){var b=0;return b=this.carousel?a<this.colspan?this.length-3*this.colspan+a:a>=this.length-
this.colspan?a-(this.length-this.colspan):a-this.colspan:a},bindEvent:function(){var a=this;c.inArray(a.eventType,["click","mouseover","mouseenter"])&&a.con._delegate(a.eventType,function(b){b.halt();b=Number(a.tabs.indexOf(b.currentTarget));a.carousel&&(b=(b+1)%a.length);a.go(b);a.autoSlide&&a.stop().play()},"."+a.navClass+" "+a.triggerSelector);a.hoverStop&&(a.con._delegate("mouseover",function(){a.autoSlide&&a.stop()},"."+a.contentClass+" div."+a.pannelClass),a.con._delegate("mouseout",function(){a.autoSlide&&
a.play()},"."+a.contentClass+" div."+a.pannelClass));c.Event.on("resize",function(){a.fixSlideSize(a.currentTab);a.relocateCurrentTab()},window);a.on("beforeSwitch",function(){if(this.layerSlide&&this.isAming())return false});if("ontouchstart"in document.documentElement){if(!a.touchmove)return this;a.con._delegate("touchstart",function(b){a.stop();a.touching=true;a.is_last()&&a.carousel&&a.fix_next_carousel();a.is_first()&&a.carousel&&a.fix_pre_carousel();a.startX=b.changedTouches[0].clientX;a.startY=
b.changedTouches[0].clientY;a.animwrap.setStyles({"-webkit-transition-duration":"0s"});a.startT=Number(new Date)},"."+a.contentClass);a.con._delegate("touchend",function(b){a.touching=false;var c=b.changedTouches[0].clientX,b=Number(a.animcon.get("region").width);a.deltaX=Math.abs(c-a.startX);var e=Math.abs(c)<Math.abs(a.startX),c=!e,c=a.carousel?false:a.is_last()&&e||a.is_first()&&c,f=function(){a.animwrap.setStyles({"-webkit-transition-duration":Number(a.speed)/2+"s","-webkit-transform":"translate3d("+
-1*a.currentTab*a.animcon.get("region").width/a.colspan+"px,0,0)"})},g=function(){var b=a.animcon.get("region").width/a.colspan,b=parseInt((a.deltaX-b/2)/b,10);if(e){if(b>=1&&a.length>2){a.currentTab=a.currentTab+b;if(a.currentTab>=a.length-1)a.currentTab=a.length-2}a.next()}else{if(b>=1&&a.length>2)a.currentTab=a.currentTab-b<=0?1:a.currentTab+-1*b;a.previous()}};if(a.touchmove&&a.deltaX<30)f();else{!c&&(a.touchmove&&a.deltaX>b/3||!a.touchmove&&a.carousel||!a.carousel&&a.touchmove&&a.effect=="hSlide"||
!a.touchmove&&!a.carousel||Number(new Date)-a.startT<550)?g():f();a.autoSlide&&a.play()}},"."+a.contentClass);a.touchmove&&(a.con._delegate("touchmove",function(b){if(!(b.touches.length>1)){a.deltaX=b.touches[0].clientX-a.startX;var c=a.is_last()&&a.deltaX<0||a.is_first()&&a.deltaX>0;if(!a.carousel&&a.effect=="hSlide"&&c)a.deltaX=a.deltaX/3;a.isScrolling=Math.abs(a.deltaX)<Math.abs(b.touches[0].clientY-a.startY)?true:false;if(!a.isScrolling){b.halt();a.stop();b=Number(a.animcon.get("region").width/
a.colspan);a.animwrap.setStyles({"-webkit-transition-duration":"0s","-webkit-transform":"translate3d("+(a.deltaX-a.currentTab*b)+"px,0,0)"})}}},"."+a.contentClass),a.animwrap.on("webkitTransitionEnd",function(){}))}return this},initLayer:function(){var a=this;if(!("ontouchstart"in document.documentElement||0<c.UA.ie&&9>c.UA.ie)){var b="durationin,easingin,durationout,easingout,delayin,delayout,slideindirection,slideoutdirection,offsetin,offsetout,alpha,easeInStrong,easeOutStrong,easeBothStrong,easeNone,easeIn,easeOut,easeBoth,elasticIn,elasticOut,elasticBoth,backIn,backOut,backBoth,bounceIn,bounceOut,bounceBoth,left,top,right,bottom".split(","),
d={durationin:1E3,easingin:"easeIn",durationout:1E3,easingout:"easeOut",delayin:300,delayout:300,slideindirection:"right",slideoutdirection:"left",alpha:!0,offsetin:50,offsetout:50},e=function(a){var e=this,h=a.attr("rel").replace(/"'/ig,"").replace(RegExp("("+b.join("|")+")","ig"),'"$1"'),i=c.JSON.parse("{"+h+"}");c.each(d,function(a,b){var c=i[b];e[b]=void 0===c||null===c?a:c});this.el=a;this.left=Number(a.css("left").replace("px",""));this.top=Number(a.css("top").replace("px",""));this.animIn=
function(){var a=this,b=a.offsetin,d=a.slideindirection;({left:function(){a.el.css({left:a.left-b})},top:function(){a.el.css({top:a.top-b})},right:function(){a.el.css({left:a.left+b})},bottom:function(){a.el.css({top:a.top+b})}})[d]();setTimeout(function(){var b={};c.mix(b,{left:{left:a.left},top:{top:a.top},bottom:{top:a.top},right:{left:a.left}}[d]);a.alpha&&c.mix(b,{opacity:1});c.Anim(a.el,b,a.durationin/1E3,a.easingin,function(){}).run()},a.delayin);a.alpha&&a.el.css({opacity:0})};this.animOut=
function(){}};a.sublayers=[];a.pannels.each(function(b,c){("vSlide"==a.effect||"hSlide"==a.effect)&&b.css({position:"relative"});0===b.all('[alt="sublayer"]').length?a.sublayers[c]=[]:(void 0===a.sublayers[c]&&(a.sublayers[c]=[]),b.all('[alt="sublayer"]').each(function(b){a.sublayers[c].push(new e(b))}))});a.on("beforeSwitch",function(b){if(b.index===a.currentTab)return!1;a.subLayerRunin(b.index)});a.on("beforeTailSwitch",function(b){a.subLayerRunout(b.index)})}},subLayerRunin:function(a){c.each(this.sublayers[a],
function(a){a.animIn()})},subLayerRunout:function(a){c.each(this.sublayers[a],function(a){a.animOut()})},buildParam:function(a){var b=this;if(void 0===a||null===a)a={};c.each({autoSlide:!1,speed:500,timeout:3E3,effect:"none",eventType:"click",easing:"easeBoth",hoverStop:!0,selectedClass:"selected",conClass:"t-slide",navClass:"tab-nav",triggerSelector:"li",contentClass:"tab-content",pannelClass:"tab-pannel",carousel:!1,reverse:!1,touchmove:!1,adaptive_fixed_width:!1,adaptive_fixed_height:!1,adaptive_fixed_size:!1,
adaptive_width:!1,adaptive_height:!1,defaultTab:0,layerSlide:!1,layerClass:"tab-animlayer",colspan:1,animWrapperAutoHeightSetting:!0,webkitOptimize:!0},function(c,e){var f=a[e];b[e]=void 0===f||null===f?c:f});c.mix(b,{tabs:[],animcon:null,pannels:[],timmer:null,touching:!1});b.speed/=1E3;0!==b.defaultTab&&(b.defaultTab=Number(b.defaultTab)-1);b.carousel&&(b.defaultTab=b.colspan,b.effect="hSlide");b.currentTab=b.defaultTab;b.transitions="webkitTransition"in document.body.style&&b.webkitOptimize;return b},
fix_for_transition_when_carousel:function(a){"undefined"==typeof a&&(a=0);var b=this.con;this.animcon=this.con.one("."+this.contentClass);this.animwrap=this.animcon.one("div");this.pannels=b.all("."+this.contentClass+" div."+this.pannelClass);if("hSlide"==this.effect){var c=Number(this.animcon.get("region").width/this.colspan);this.animcon.get("region");this.animwrap.setStyle("width",this.pannels.size()*c+2*c);var e=this.pannels.item(a).cloneNode(!0),f=this.pannels.item(this.pannels.size()-1-a).cloneNode(!0);
this.animwrap.append(e);this.animwrap.prepend(f);this.transitions?this.animwrap.setStyles({"-webkit-transition-duration":"0s","-webkit-transform":"translate3d("+-1*c*(a/2+1)+"px,0,0)","-webkit-backface-visibility":"hidden",left:"0"}):this.animwrap.setStyle("left",-1*c*(a/2+1))}this.pannels=b.all("."+this.contentClass+" div."+this.pannelClass);this.length=this.pannels.size();return this},isAming:function(){return this.anim?this.anim.isRunning():!1},previous:function(a){try{if(this.isAming()&&this.carousel)return this}catch(b){}var c=
this.currentTab+this.length-1-(this.colspan-1);c>=this.length-this.colspan+1&&(c%=this.length-this.colspan+1);if(this.carousel&&this.is_first())return this.fix_pre_carousel(),this.previous.call(this),this;this.go(c,a);return this},is_last:function(){return this.currentTab==this.length-(this.colspan-1)-1?!0:!1},is_first:function(){return 0===this.currentTab?!0:!1},next:function(a){try{if(this.isAming()&&this.carousel)return this}catch(b){}var c=this.currentTab+1;c>=this.length-this.colspan+1&&(c%=
this.length-this.colspan+1);if(this.carousel&&this.is_last())return this.fix_next_carousel(),this.next.call(this),this;this.go(c,a);return this},fix_next_carousel:function(){this.currentTab=this.colspan;var a=this.con;"none"!=this.effect&&(this.pannels=a.all("."+this.contentClass+" div."+this.pannelClass));a="-"+Number(this.animcon.get("region").width).toString()+"px";"hSlide"==this.effect&&(this.transitions?this.animwrap.setStyles({"-webkit-transition-duration":"0s","-webkit-transform":"translate3d("+
a+",0,0)"}):this.animwrap.setStyle("left",a))},fix_pre_carousel:function(){this.currentTab=this.length-1-2*this.colspan+1;var a=this.con;"none"!=this.effect&&(this.pannels=a.all("."+this.contentClass+" div."+this.pannelClass));a="-"+(Number(this.animcon.get("region").width/this.colspan)*this.currentTab).toString()+"px";"hSlide"==this.effect&&(this.transitions?this.animwrap.setStyles({"-webkit-transition-duration":"0s","-webkit-transform":"translate3d("+a+",0,0)"}):this.animwrap.setStyle("left",a))},
hightlightNav:function(a){if(this.carousel&&1<this.colspan)return this;this.tabs.item(a)&&(this.tabs.removeClass(this.selectedClass),this.tabs.item(a).addClass(this.selectedClass));return this},switch_to:function(a,b){var d=this,e=function(){c.isFunction(b)&&b.apply(d,d);d.fire("afterSwitch",{index:d.currentTab,navnode:d.tabs.item(d.getWrappedIndex(d.currentTab)),pannelnode:d.pannels.item(d.currentTab)})};d.fire("beforeTailSwitch",{index:d.currentTab,navnode:d.tabs.item(d.getWrappedIndex(d.currentTab)),
pannelnode:d.pannels.item(d.currentTab)});d.hightlightNav(d.getWrappedIndex(a));d.fixSlideSize(a);d.autoSlide&&d.stop().play();a>=d.length&&(a%=d.length);if(a==d.currentTab)return this;if(d.anim)try{d.anim.stop(),d.anim=null}catch(f){}({none:function(a){d.pannels.setStyles({display:"none"});d.pannels.item(a).setStyles({display:"block"});e()},vSlide:function(a){d.transitions?(d.animwrap.setStyles({"-webkit-transition-duration":d.speed+"s","-webkit-transform":"translate3d(0,"+-1*a*d.animcon.get("region").height/
d.colspan+"px,0)","-webkit-backface-visibility":"hidden"}),d.anim=c.Anim(d.animwrap,{opacity:1},d.speed,d.easing,function(){e()})):d.anim=c.Anim(d.animwrap,{top:-1*a*d.animcon.get("region").height/d.colspan},d.speed,d.easing,function(){e()});d.anim.run()},hSlide:function(a){d.transitions?(d.animwrap.setStyles({"-webkit-transition-duration":d.speed+"s","-webkit-transform":"translate3d("+-1*a*d.animcon.get("region").width/d.colspan+"px,0,0)","-webkit-backface-visibility":"hidden"}),d.anim=c.Anim(d.animwrap,
{opacity:1},d.speed,d.easing,function(){e()})):d.anim=c.Anim(d.animwrap,{left:-1*a*d.animcon.get("region").width/d.colspan},d.speed,d.easing,function(){e()});d.anim.run()},fade:function(a){var b=d.currentTab;d.anim=c.Anim(d.pannels.item(a),{opacity:1},d.speed,d.easing,function(){d.pannels.item(b).setStyle("zIndex",0);d.pannels.item(a).setStyle("zIndex",1);d.pannels.item(b).setStyle("opacity",0);d.pannels.item(b).setStyles({display:"none"});e()});d.pannels.item(a).setStyles({display:"block"});d.pannels.item(a).setStyle("opacity",
0);d.pannels.item(b).setStyle("zIndex",1);d.pannels.item(a).setStyle("zIndex",2);d.anim.run()}})[d.effect](a);d.currentTab=a;d.fire("switch",{index:a,navnode:d.tabs.item(d.getWrappedIndex(a)),pannelnode:d.pannels.item(a)});var g=d.pannels.item(a).all(".data-lazyload");g&&g.each(function(a){d.renderLazyData(a)})},go:function(a,b){!1!==this.fire("beforeSwitch",{index:a,navnode:this.tabs.item(a),pannelnode:this.pannels.item(a)})&&(a+this.colspan>this.pannels.size()&&(a=this.pannels.size()-this.colspan),
this.switch_to(a,b));return this},play:function(){var a=this;null!==a.timer&&clearTimeout(a.timer);a.timer=setTimeout(function(){a.next().play()},Number(a.timeout));return this},stop:function(){clearTimeout(this.timer);this.timer=null;return this}});return h},{requires:["node","event","json","./util","./kissy2yui"]});
KISSY.add("mobile/app/1.0/util",function(c){c.mix(c,{setHash:function(c,a){var b,d;"object"==typeof c?(b=window.location.href,a=c):b=c;0>b.indexOf("#")&&(b+="#");var e=this.getHash(b);for(d in e)!(d in a)&&"viewpath"!==d&&delete e[d];for(d in a)e[d]=a[d];b=b.split("#")[0]+"#";for(d in e)b+=d+"="+e[d]+"&";return b=b.substr(0,b.length-1)},getHash:function(h){h=h||window.location.href;if(0>h.indexOf("#"))return{};h=h.split("#")[1];if(""===h)return{};"&"==h[h.length-1]&&(h=h.substr(0,h.length-1));h=h.replace(/"/ig,
"'");h=h.replace(/=/ig,'":"');h=h.replace(/&/ig,'","');return c.JSON.parse('{"'+(h+'"')+"}")},_globalEval:function(c){if(c&&/\S/.test(c)){var a=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0],b=document.createElement("script");b.text=c;a.insertBefore(b,a.firstChild);setTimeout(function(){a.removeChild(b)},1)}},execScript:function(h){var a=RegExp(/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig),b=c.one("head").getDOMNode(),d,e,f,g,k,i=/\stype="(javascript)|(text)\/template"/i,
j=/\ssrc=(['"])(.*?)\1/i,l=/\scharset=(['"])(.*?)\1/i;for(a.lastIndex=0;d=a.exec(h);)if(f=(e=d[1])?e.match(j):!1,!e.match(i))if(f&&f[2]){d=document.createElement("script");d.src=f[2];if((g=e.match(l))&&g[2])d.charset=g[2];d.async=!0;b.appendChild(d)}else(k=d[2])&&0<k.length&&this._globalEval(k)},isDaily:function(){return/daily\.taobao\.net/.test(window.location.hostname)?!0:!1}})},{requires:["node","sizzle","json"]});
