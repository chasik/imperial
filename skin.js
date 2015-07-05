// Garden Gnome Software - Skin
// Pano2VR pro 4.5.0/10633
// Filename: skinforimperial.ggsk
// Generated Чт 2. апр 07:52:30 2015

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'imagestour/logobutton__o.png';
		preLoadImg.src=basePath + 'imagestour/_120__o.png';
		preLoadImg.src=basePath + 'imagestour/_2__o.png';
		preLoadImg.src=basePath + 'imagestour/_2__a.png';
		preLoadImg.src=basePath + 'imagestour/_4__o.png';
		preLoadImg.src=basePath + 'imagestour/_4__a.png';
		preLoadImg.src=basePath + 'imagestour/_3__o.png';
		preLoadImg.src=basePath + 'imagestour/_3__a.png';
		preLoadImg.src=basePath + 'imagestour/_6__o.png';
		preLoadImg.src=basePath + 'imagestour/_6__a.png';
		preLoadImg.src=basePath + 'imagestour/_8__o.png';
		preLoadImg.src=basePath + 'imagestour/_8__a.png';
		preLoadImg.src=basePath + 'imagestour/_9__o.png';
		preLoadImg.src=basePath + 'imagestour/_9__a.png';
		preLoadImg.src=basePath + 'imagestour/_17__o.png';
		preLoadImg.src=basePath + 'imagestour/_17__a.png';
		preLoadImg.src=basePath + 'imagestour/btn_fullscr__o.png';
		preLoadImg.src=basePath + 'imagestour/btn_fullscrout__o.png';
		preLoadImg.src=basePath + 'imagestour/btn_showmap__o.png';
		preLoadImg.src=basePath + 'imagestour/btn_hidemap__o.png';
		preLoadImg.src=basePath + 'imagestour/_110__o.png';
		preLoadImg.src=basePath + 'imagestour/_110__a.png';
		preLoadImg.src=basePath + 'imagestour/_111__o.png';
		preLoadImg.src=basePath + 'imagestour/_111__a.png';
		preLoadImg.src=basePath + 'imagestour/_112__o.png';
		preLoadImg.src=basePath + 'imagestour/_112__a.png';
		preLoadImg.src=basePath + 'imagestour/_113__o.png';
		preLoadImg.src=basePath + 'imagestour/_113__a.png';
		preLoadImg.src=basePath + 'imagestour/_114__o.png';
		preLoadImg.src=basePath + 'imagestour/_114__a.png';
		preLoadImg.src=basePath + 'imagestour/_115__o.png';
		preLoadImg.src=basePath + 'imagestour/_115__a.png';
	}
	
	this.addSkin=function() {
		this._logobutton=document.createElement('div');
		this._logobutton.ggId="LogoButton";
		this._logobutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logobutton.ggVisible=true;
		this._logobutton.className='ggskin ggskin_button';
		this._logobutton.ggType='button';
		this._logobutton.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-146 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -146px;';
		hs+='top:  3px;';
		hs+='width: 140px;';
		hs+='height: 123px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._logobutton.setAttribute('style',hs);
		this._logobutton__img=document.createElement('img');
		this._logobutton__img.className='ggskin ggskin_button';
		this._logobutton__img.setAttribute('src',basePath + 'imagestour/logobutton.png');
		this._logobutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._logobutton__img.className='ggskin ggskin_button';
		this._logobutton__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._logobutton__img);
		this._logobutton.appendChild(this._logobutton__img);
		this._logobutton.onclick=function () {
			me.player.openUrl("http:\/\/www.xn--32-6kctobwe1al.xn--p1ai","");
		}
		this._logobutton.onmouseover=function () {
			me._logobutton__img.src=basePath + 'imagestour/logobutton__o.png';
		}
		this._logobutton.onmouseout=function () {
			me._logobutton__img.src=basePath + 'imagestour/logobutton.png';
		}
		this.divSkin.appendChild(this._logobutton);
		this._marker_current_title=document.createElement('div');
		this._marker_current_title__text=document.createElement('div');
		this._marker_current_title.className='ggskin ggskin_textdiv';
		this._marker_current_title.ggTextDiv=this._marker_current_title__text;
		this._marker_current_title.ggId="marker_current_title";
		this._marker_current_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_current_title.ggVisible=true;
		this._marker_current_title.className='ggskin ggskin_text';
		this._marker_current_title.ggType='text';
		hs ='position:absolute;';
		hs+='left: 9px;';
		hs+='top:  235px;';
		hs+='width: 114px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_current_title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 114px;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_current_title__text.setAttribute('style',hs);
		this._marker_current_title.ggUpdateText=function() {
			var hs=me.player.userdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._marker_current_title.ggUpdateText();
		this._marker_current_title.appendChild(this._marker_current_title__text);
		this.divSkin.appendChild(this._marker_current_title);
		this.__120=document.createElement('div');
		this.__120.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 120";
		this.__120.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__120.ggVisible=true;
		this.__120.className='ggskin ggskin_button';
		this.__120.ggType='button';
		this.__120.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-332 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-23 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -332px;';
		hs+='top:  -23px;';
		hs+='width: 326px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__120.setAttribute('style',hs);
		this.__120__img=document.createElement('img');
		this.__120__img.className='ggskin ggskin_button';
		this.__120__img.setAttribute('src',basePath + 'imagestour/_120.png');
		this.__120__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__120__img.className='ggskin ggskin_button';
		this.__120__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__120__img);
		this.__120.appendChild(this.__120__img);
		this.__120.onclick=function () {
			me.player.openUrl("http:\/\/xn--3-htb.xn--b1afuibkbpj.xn--80asehdb\/?fromtour=imperial","_blank");
		}
		this.__120.onmouseover=function () {
			me._tt_hidemap_goto_moreturov.style[domTransition]='none';
			me._tt_hidemap_goto_moreturov.style.visibility='inherit';
			me._tt_hidemap_goto_moreturov.ggVisible=true;
			me.__120__img.src=basePath + 'imagestour/_120__o.png';
		}
		this.__120.onmouseout=function () {
			me._tt_hidemap_goto_moreturov.style[domTransition]='none';
			me._tt_hidemap_goto_moreturov.style.visibility='hidden';
			me._tt_hidemap_goto_moreturov.ggVisible=false;
			me.__120__img.src=basePath + 'imagestour/_120.png';
		}
		this.divSkin.appendChild(this.__120);
		this.__5=document.createElement('div');
		this.__5.ggId="\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 5";
		this.__5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__5.ggVisible=true;
		this.__5.className='ggskin ggskin_container';
		this.__5.ggType='container';
		this.__5.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-183 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-93 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -183px;';
		hs+='top:  -93px;';
		hs+='width: 112px;';
		hs+='height: 89px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__5.setAttribute('style',hs);
		this.__2=document.createElement('div');
		this.__2.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 2";
		this.__2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2.ggVisible=true;
		this.__2.className='ggskin ggskin_button';
		this.__2.ggType='button';
		hs ='position:absolute;';
		hs+='left: 34px;';
		hs+='top:  8px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__2.setAttribute('style',hs);
		this.__2__img=document.createElement('img');
		this.__2__img.className='ggskin ggskin_button';
		this.__2__img.setAttribute('src',basePath + 'imagestour/_2.png');
		this.__2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__2__img.className='ggskin ggskin_button';
		this.__2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__2__img);
		this.__2.appendChild(this.__2__img);
		this.__2.onmouseover=function () {
			me.__2__img.src=basePath + 'imagestour/_2__o.png';
			me.__2.ggIsOver=true;
		}
		this.__2.onmouseout=function () {
			me.__2__img.src=basePath + 'imagestour/_2.png';
			me.__2.ggIsOver=false;
			me.elementMouseDown['_2']=false;
		}
		this.__2.onmousedown=function () {
			me.__2__img.src=basePath + 'imagestour/_2__a.png';
			me.elementMouseDown['_2']=true;
		}
		this.__2.onmouseup=function () {
			if (me.__2.ggIsOver) {
				me.__2__img.src=basePath + 'imagestour/_2__o.png';
			} else {
				me.__2__img.src=basePath + 'imagestour/_2.png';
			}
			me.elementMouseDown['_2']=false;
		}
		this.__2.ontouchend=function () {
			me.elementMouseDown['_2']=false;
		}
		this.__5.appendChild(this.__2);
		this.__4=document.createElement('div');
		this.__4.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 4";
		this.__4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__4.ggVisible=true;
		this.__4.className='ggskin ggskin_button';
		this.__4.ggType='button';
		hs ='position:absolute;';
		hs+='left: 35px;';
		hs+='top:  47px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__4.setAttribute('style',hs);
		this.__4__img=document.createElement('img');
		this.__4__img.className='ggskin ggskin_button';
		this.__4__img.setAttribute('src',basePath + 'imagestour/_4.png');
		this.__4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__4__img.className='ggskin ggskin_button';
		this.__4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__4__img);
		this.__4.appendChild(this.__4__img);
		this.__4.onmouseover=function () {
			me.__4__img.src=basePath + 'imagestour/_4__o.png';
			me.__4.ggIsOver=true;
		}
		this.__4.onmouseout=function () {
			me.__4__img.src=basePath + 'imagestour/_4.png';
			me.__4.ggIsOver=false;
			me.elementMouseDown['_4']=false;
		}
		this.__4.onmousedown=function () {
			me.__4__img.src=basePath + 'imagestour/_4__a.png';
			me.elementMouseDown['_4']=true;
		}
		this.__4.onmouseup=function () {
			if (me.__4.ggIsOver) {
				me.__4__img.src=basePath + 'imagestour/_4__o.png';
			} else {
				me.__4__img.src=basePath + 'imagestour/_4.png';
			}
			me.elementMouseDown['_4']=false;
		}
		this.__4.ontouchend=function () {
			me.elementMouseDown['_4']=false;
		}
		this.__5.appendChild(this.__4);
		this.__3=document.createElement('div');
		this.__3.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 3";
		this.__3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3.ggVisible=true;
		this.__3.className='ggskin ggskin_button';
		this.__3.ggType='button';
		hs ='position:absolute;';
		hs+='left: 69px;';
		hs+='top:  27px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__3.setAttribute('style',hs);
		this.__3__img=document.createElement('img');
		this.__3__img.className='ggskin ggskin_button';
		this.__3__img.setAttribute('src',basePath + 'imagestour/_3.png');
		this.__3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__3__img.className='ggskin ggskin_button';
		this.__3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__3__img);
		this.__3.appendChild(this.__3__img);
		this.__3.onmouseover=function () {
			me.__3__img.src=basePath + 'imagestour/_3__o.png';
			me.__3.ggIsOver=true;
		}
		this.__3.onmouseout=function () {
			me.__3__img.src=basePath + 'imagestour/_3.png';
			me.__3.ggIsOver=false;
			me.elementMouseDown['_3']=false;
		}
		this.__3.onmousedown=function () {
			me.__3__img.src=basePath + 'imagestour/_3__a.png';
			me.elementMouseDown['_3']=true;
		}
		this.__3.onmouseup=function () {
			if (me.__3.ggIsOver) {
				me.__3__img.src=basePath + 'imagestour/_3__o.png';
			} else {
				me.__3__img.src=basePath + 'imagestour/_3.png';
			}
			me.elementMouseDown['_3']=false;
		}
		this.__3.ontouchend=function () {
			me.elementMouseDown['_3']=false;
		}
		this.__5.appendChild(this.__3);
		this.__6=document.createElement('div');
		this.__6.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 6";
		this.__6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__6.ggVisible=true;
		this.__6.className='ggskin ggskin_button';
		this.__6.ggType='button';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  28px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__6.setAttribute('style',hs);
		this.__6__img=document.createElement('img');
		this.__6__img.className='ggskin ggskin_button';
		this.__6__img.setAttribute('src',basePath + 'imagestour/_6.png');
		this.__6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__6__img.className='ggskin ggskin_button';
		this.__6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__6__img);
		this.__6.appendChild(this.__6__img);
		this.__6.onmouseover=function () {
			me.__6__img.src=basePath + 'imagestour/_6__o.png';
			me.__6.ggIsOver=true;
		}
		this.__6.onmouseout=function () {
			me.__6__img.src=basePath + 'imagestour/_6.png';
			me.__6.ggIsOver=false;
			me.elementMouseDown['_6']=false;
		}
		this.__6.onmousedown=function () {
			me.__6__img.src=basePath + 'imagestour/_6__a.png';
			me.elementMouseDown['_6']=true;
		}
		this.__6.onmouseup=function () {
			if (me.__6.ggIsOver) {
				me.__6__img.src=basePath + 'imagestour/_6__o.png';
			} else {
				me.__6__img.src=basePath + 'imagestour/_6.png';
			}
			me.elementMouseDown['_6']=false;
		}
		this.__6.ontouchend=function () {
			me.elementMouseDown['_6']=false;
		}
		this.__5.appendChild(this.__6);
		this.divSkin.appendChild(this.__5);
		this._zoominout=document.createElement('div');
		this._zoominout.ggId="ZoomInOut";
		this._zoominout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoominout.ggVisible=true;
		this._zoominout.className='ggskin ggskin_container';
		this._zoominout.ggType='container';
		this._zoominout.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-68 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-74 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -68px;';
		hs+='top:  -74px;';
		hs+='width: 111px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._zoominout.setAttribute('style',hs);
		this.__8=document.createElement('div');
		this.__8.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 8";
		this.__8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__8.ggVisible=true;
		this.__8.className='ggskin ggskin_button';
		this.__8.ggType='button';
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  8px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__8.setAttribute('style',hs);
		this.__8__img=document.createElement('img');
		this.__8__img.className='ggskin ggskin_button';
		this.__8__img.setAttribute('src',basePath + 'imagestour/_8.png');
		this.__8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__8__img.className='ggskin ggskin_button';
		this.__8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__8__img);
		this.__8.appendChild(this.__8__img);
		this.__8.onmouseover=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='inherit';
			me._tt_zoomout.ggVisible=true;
			me.__8__img.src=basePath + 'imagestour/_8__o.png';
			me.__8.ggIsOver=true;
		}
		this.__8.onmouseout=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='hidden';
			me._tt_zoomout.ggVisible=false;
			me.__8__img.src=basePath + 'imagestour/_8.png';
			me.__8.ggIsOver=false;
			me.elementMouseDown['_8']=false;
		}
		this.__8.onmousedown=function () {
			me.__8__img.src=basePath + 'imagestour/_8__a.png';
			me.elementMouseDown['_8']=true;
		}
		this.__8.onmouseup=function () {
			if (me.__8.ggIsOver) {
				me.__8__img.src=basePath + 'imagestour/_8__o.png';
			} else {
				me.__8__img.src=basePath + 'imagestour/_8.png';
			}
			me.elementMouseDown['_8']=false;
		}
		this.__8.ontouchend=function () {
			me.elementMouseDown['_8']=false;
		}
		this._tt_zoomout=document.createElement('div');
		this._tt_zoomout__text=document.createElement('div');
		this._tt_zoomout.className='ggskin ggskin_textdiv';
		this._tt_zoomout.ggTextDiv=this._tt_zoomout__text;
		this._tt_zoomout.ggId="tt_zoomout";
		this._tt_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout.ggVisible=false;
		this._tt_zoomout.className='ggskin ggskin_text';
		this._tt_zoomout.ggType='text';
		this._tt_zoomout.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -33px;';
		hs+='top:  -24px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._tt_zoomout.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout__text.setAttribute('style',hs);
		this._tt_zoomout__text.innerHTML="<b>\u041e\u0442\u0434\u0430\u043b\u0438\u0442\u044c<b>";
		this._tt_zoomout.appendChild(this._tt_zoomout__text);
		this.__8.appendChild(this._tt_zoomout);
		this._zoominout.appendChild(this.__8);
		this.__9=document.createElement('div');
		this.__9.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 9";
		this.__9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__9.ggVisible=true;
		this.__9.className='ggskin ggskin_button';
		this.__9.ggType='button';
		hs ='position:absolute;';
		hs+='left: 54px;';
		hs+='top:  8px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__9.setAttribute('style',hs);
		this.__9__img=document.createElement('img');
		this.__9__img.className='ggskin ggskin_button';
		this.__9__img.setAttribute('src',basePath + 'imagestour/_9.png');
		this.__9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__9__img.className='ggskin ggskin_button';
		this.__9__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__9__img);
		this.__9.appendChild(this.__9__img);
		this.__9.onmouseover=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='inherit';
			me._tt_zoomin.ggVisible=true;
			me.__9__img.src=basePath + 'imagestour/_9__o.png';
			me.__9.ggIsOver=true;
		}
		this.__9.onmouseout=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='hidden';
			me._tt_zoomin.ggVisible=false;
			me.__9__img.src=basePath + 'imagestour/_9.png';
			me.__9.ggIsOver=false;
			me.elementMouseDown['_9']=false;
		}
		this.__9.onmousedown=function () {
			me.__9__img.src=basePath + 'imagestour/_9__a.png';
			me.elementMouseDown['_9']=true;
		}
		this.__9.onmouseup=function () {
			if (me.__9.ggIsOver) {
				me.__9__img.src=basePath + 'imagestour/_9__o.png';
			} else {
				me.__9__img.src=basePath + 'imagestour/_9.png';
			}
			me.elementMouseDown['_9']=false;
		}
		this.__9.ontouchend=function () {
			me.elementMouseDown['_9']=false;
		}
		this._tt_zoomin=document.createElement('div');
		this._tt_zoomin__text=document.createElement('div');
		this._tt_zoomin.className='ggskin ggskin_textdiv';
		this._tt_zoomin.ggTextDiv=this._tt_zoomin__text;
		this._tt_zoomin.ggId="tt_zoomin";
		this._tt_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin.ggVisible=false;
		this._tt_zoomin.className='ggskin ggskin_text';
		this._tt_zoomin.ggType='text';
		this._tt_zoomin.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -28px;';
		hs+='top:  -24px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._tt_zoomin.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin__text.setAttribute('style',hs);
		this._tt_zoomin__text.innerHTML="<b>\u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u044c<b>";
		this._tt_zoomin.appendChild(this._tt_zoomin__text);
		this.__9.appendChild(this._tt_zoomin);
		this._zoominout.appendChild(this.__9);
		this.divSkin.appendChild(this._zoominout);
		this.__=document.createElement('div');
		this.__.ggId="\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438";
		this.__.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__.ggVisible=true;
		this.__.className='ggskin ggskin_container';
		this.__.ggType='container';
		this.__.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-117 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-76 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -117px;';
		hs+='top:  -76px;';
		hs+='width: 260px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__.setAttribute('style',hs);
		this.__13=document.createElement('div');
		this.__13.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 13";
		this.__13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__13.ggVisible=true;
		this.__13.className='ggskin ggskin_button';
		this.__13.ggType='button';
		this.__13.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-130 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-50 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -130px;';
		hs+='top:  -50px;';
		hs+='width: 260px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__13.setAttribute('style',hs);
		this.__13__img=document.createElement('img');
		this.__13__img.className='ggskin ggskin_button';
		this.__13__img.setAttribute('src',basePath + 'imagestour/_13.png');
		this.__13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__13__img.className='ggskin ggskin_button';
		this.__13__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__13__img);
		this.__13.appendChild(this.__13__img);
		this.__.appendChild(this.__13);
		this.__14=document.createElement('div');
		this.__14__text=document.createElement('div');
		this.__14.className='ggskin ggskin_textdiv';
		this.__14.ggTextDiv=this.__14__text;
		this.__14.ggId="\u0422\u0435\u043a\u0441\u0442 14";
		this.__14.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		this.__14.ggVisible=true;
		this.__14.className='ggskin ggskin_text';
		this.__14.ggType='text';
		this.__14.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-108 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -108px;';
		hs+='top:  23px;';
		hs+='width: 216px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__14.ggParameter) + ';';
		hs+='visibility: inherit;';
		this.__14.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 216px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: #730000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this.__14__text.setAttribute('style',hs);
		this.__14.ggUpdateText=function() {
			var hs="<b>\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this.__14.ggUpdateText();
		this.__14.appendChild(this.__14__text);
		this.__.appendChild(this.__14);
		this.__15=document.createElement('div');
		this.__15.ggId="\u041f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a 15";
		this.__15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__15.ggVisible=true;
		this.__15.className='ggskin ggskin_rectangle';
		this.__15.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 18px;';
		hs+='top:  59px;';
		hs+='width: 224px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #aa0000;';
		hs+='border: 1px solid #8f0000;';
		this.__15.setAttribute('style',hs);
		this.__.appendChild(this.__15);
		this.divSkin.appendChild(this.__);
		this.__17=document.createElement('div');
		this.__17.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 17";
		this.__17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__17.ggVisible=true;
		this.__17.className='ggskin ggskin_button';
		this.__17.ggType='button';
		this.__17.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(40 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-66 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 40px;';
		hs+='top:  -66px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__17.setAttribute('style',hs);
		this.__17__img=document.createElement('img');
		this.__17__img.className='ggskin ggskin_button';
		this.__17__img.setAttribute('src',basePath + 'imagestour/_17.png');
		this.__17__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__17__img.className='ggskin ggskin_button';
		this.__17__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__17__img);
		this.__17.appendChild(this.__17__img);
		this.__17.onclick=function () {
			me.player.toggleAutorotate();
		}
		this.__17.onmouseover=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='inherit';
			me._tt_autorotate.ggVisible=true;
			me.__17__img.src=basePath + 'imagestour/_17__o.png';
			me.__17.ggIsOver=true;
		}
		this.__17.onmouseout=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='hidden';
			me._tt_autorotate.ggVisible=false;
			me.__17__img.src=basePath + 'imagestour/_17.png';
			me.__17.ggIsOver=false;
		}
		this.__17.onmousedown=function () {
			me.__17__img.src=basePath + 'imagestour/_17__a.png';
		}
		this.__17.onmouseup=function () {
			if (me.__17.ggIsOver) {
				me.__17__img.src=basePath + 'imagestour/_17__o.png';
			} else {
				me.__17__img.src=basePath + 'imagestour/_17.png';
			}
		}
		this._tt_autorotate=document.createElement('div');
		this._tt_autorotate__text=document.createElement('div');
		this._tt_autorotate.className='ggskin ggskin_textdiv';
		this._tt_autorotate.ggTextDiv=this._tt_autorotate__text;
		this._tt_autorotate.ggId="tt_autorotate";
		this._tt_autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate.ggVisible=false;
		this._tt_autorotate.className='ggskin ggskin_text';
		this._tt_autorotate.ggType='text';
		this._tt_autorotate.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -29px;';
		hs+='top:  -24px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._tt_autorotate.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate__text.setAttribute('style',hs);
		this._tt_autorotate__text.innerHTML="<b>\u0410\u0432\u0442\u043e\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435<b>";
		this._tt_autorotate.appendChild(this._tt_autorotate__text);
		this.__17.appendChild(this._tt_autorotate);
		this.divSkin.appendChild(this.__17);
		this._btn_fullscr=document.createElement('div');
		this._btn_fullscr.ggId="btn_fullscr";
		this._btn_fullscr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_fullscr.ggVisible=true;
		this._btn_fullscr.className='ggskin ggskin_button';
		this._btn_fullscr.ggType='button';
		this._btn_fullscr.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(95 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-66 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 95px;';
		hs+='top:  -66px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._btn_fullscr.setAttribute('style',hs);
		this._btn_fullscr__img=document.createElement('img');
		this._btn_fullscr__img.className='ggskin ggskin_button';
		this._btn_fullscr__img.setAttribute('src',basePath + 'imagestour/btn_fullscr.png');
		this._btn_fullscr__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._btn_fullscr__img.className='ggskin ggskin_button';
		this._btn_fullscr__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btn_fullscr__img);
		this._btn_fullscr.appendChild(this._btn_fullscr__img);
		this._btn_fullscr.onclick=function () {
			me.player.enterFullscreen();
			me._btn_fullscr.style[domTransition]='none';
			me._btn_fullscr.style.visibility='hidden';
			me._btn_fullscr.ggVisible=false;
			me._btn_fullscrout.style[domTransition]='none';
			me._btn_fullscrout.style.visibility='inherit';
			me._btn_fullscrout.ggVisible=true;
		}
		this._btn_fullscr.onmouseover=function () {
			me._tt_fullscr.style[domTransition]='none';
			me._tt_fullscr.style.visibility='inherit';
			me._tt_fullscr.ggVisible=true;
			me._btn_fullscr__img.src=basePath + 'imagestour/btn_fullscr__o.png';
		}
		this._btn_fullscr.onmouseout=function () {
			me._tt_fullscr.style[domTransition]='none';
			me._tt_fullscr.style.visibility='hidden';
			me._tt_fullscr.ggVisible=false;
			me._btn_fullscr__img.src=basePath + 'imagestour/btn_fullscr.png';
		}
		this._tt_fullscr=document.createElement('div');
		this._tt_fullscr__text=document.createElement('div');
		this._tt_fullscr.className='ggskin ggskin_textdiv';
		this._tt_fullscr.ggTextDiv=this._tt_fullscr__text;
		this._tt_fullscr.ggId="tt_fullscr";
		this._tt_fullscr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscr.ggVisible=false;
		this._tt_fullscr.className='ggskin ggskin_text';
		this._tt_fullscr.ggType='text';
		this._tt_fullscr.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -33px;';
		hs+='top:  -24px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._tt_fullscr.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscr__text.setAttribute('style',hs);
		this._tt_fullscr__text.innerHTML="<b>\u041d\u0430 \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d<b>";
		this._tt_fullscr.appendChild(this._tt_fullscr__text);
		this._btn_fullscr.appendChild(this._tt_fullscr);
		this.divSkin.appendChild(this._btn_fullscr);
		this._btn_fullscrout=document.createElement('div');
		this._btn_fullscrout.ggId="btn_fullscrout";
		this._btn_fullscrout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_fullscrout.ggVisible=true;
		this._btn_fullscrout.className='ggskin ggskin_button';
		this._btn_fullscrout.ggType='button';
		this._btn_fullscrout.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(95 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-66 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 95px;';
		hs+='top:  -66px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._btn_fullscrout.setAttribute('style',hs);
		this._btn_fullscrout__img=document.createElement('img');
		this._btn_fullscrout__img.className='ggskin ggskin_button';
		this._btn_fullscrout__img.setAttribute('src',basePath + 'imagestour/btn_fullscrout.png');
		this._btn_fullscrout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._btn_fullscrout__img.className='ggskin ggskin_button';
		this._btn_fullscrout__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btn_fullscrout__img);
		this._btn_fullscrout.appendChild(this._btn_fullscrout__img);
		this._btn_fullscrout.onclick=function () {
			me.player.exitFullscreen();
			me._btn_fullscrout.style[domTransition]='none';
			me._btn_fullscrout.style.visibility='hidden';
			me._btn_fullscrout.ggVisible=false;
			me._btn_fullscr.style[domTransition]='none';
			me._btn_fullscr.style.visibility='inherit';
			me._btn_fullscr.ggVisible=true;
		}
		this._btn_fullscrout.onmouseover=function () {
			me._tt_fullscrout.style[domTransition]='none';
			me._tt_fullscrout.style.visibility='inherit';
			me._tt_fullscrout.ggVisible=true;
			me._btn_fullscrout__img.src=basePath + 'imagestour/btn_fullscrout__o.png';
		}
		this._btn_fullscrout.onmouseout=function () {
			me._tt_fullscrout.style[domTransition]='none';
			me._tt_fullscrout.style.visibility='hidden';
			me._tt_fullscrout.ggVisible=false;
			me._btn_fullscrout__img.src=basePath + 'imagestour/btn_fullscrout.png';
		}
		this._tt_fullscrout=document.createElement('div');
		this._tt_fullscrout__text=document.createElement('div');
		this._tt_fullscrout.className='ggskin ggskin_textdiv';
		this._tt_fullscrout.ggTextDiv=this._tt_fullscrout__text;
		this._tt_fullscrout.ggId="tt_fullscrout";
		this._tt_fullscrout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscrout.ggVisible=false;
		this._tt_fullscrout.className='ggskin ggskin_text';
		this._tt_fullscrout.ggType='text';
		this._tt_fullscrout.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -33px;';
		hs+='top:  -24px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._tt_fullscrout.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscrout__text.setAttribute('style',hs);
		this._tt_fullscrout__text.innerHTML="<b>\u041e\u043a\u043e\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c<b>";
		this._tt_fullscrout.appendChild(this._tt_fullscrout__text);
		this._btn_fullscrout.appendChild(this._tt_fullscrout);
		this.divSkin.appendChild(this._btn_fullscrout);
		this._btn_showmap=document.createElement('div');
		this._btn_showmap.ggId="btn_showmap";
		this._btn_showmap.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_showmap.ggVisible=true;
		this._btn_showmap.className='ggskin ggskin_button';
		this._btn_showmap.ggType='button';
		this._btn_showmap.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(150 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-66 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 150px;';
		hs+='top:  -66px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._btn_showmap.setAttribute('style',hs);
		this._btn_showmap__img=document.createElement('img');
		this._btn_showmap__img.className='ggskin ggskin_button';
		this._btn_showmap__img.setAttribute('src',basePath + 'imagestour/btn_showmap.png');
		this._btn_showmap__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._btn_showmap__img.className='ggskin ggskin_button';
		this._btn_showmap__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btn_showmap__img);
		this._btn_showmap.appendChild(this._btn_showmap__img);
		this._btn_showmap.onclick=function () {
			me._btn_showmap.style[domTransition]='none';
			me._btn_showmap.style.visibility='hidden';
			me._btn_showmap.ggVisible=false;
			me._btn_hidemap.style[domTransition]='none';
			me._btn_hidemap.style.visibility='inherit';
			me._btn_hidemap.ggVisible=true;
			flag=me._map_1_floor.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._map_1_floor.style[domTransition]='none';
			} else {
				me._map_1_floor.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._map_1_floor.ggParameter.rx=0;me._map_1_floor.ggParameter.ry=0;
				me._map_1_floor.style[domTransform]=parameterToTransform(me._map_1_floor.ggParameter);
			} else {
				me._map_1_floor.ggParameter.rx=0;me._map_1_floor.ggParameter.ry=0;
				me._map_1_floor.style[domTransform]=parameterToTransform(me._map_1_floor.ggParameter);
			}
			me._map_1_floor.ggPositonActive=!flag;
			flag=me._map_2_floor.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._map_2_floor.style[domTransition]='none';
			} else {
				me._map_2_floor.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._map_2_floor.ggParameter.rx=0;me._map_2_floor.ggParameter.ry=0;
				me._map_2_floor.style[domTransform]=parameterToTransform(me._map_2_floor.ggParameter);
			} else {
				me._map_2_floor.ggParameter.rx=0;me._map_2_floor.ggParameter.ry=0;
				me._map_2_floor.style[domTransform]=parameterToTransform(me._map_2_floor.ggParameter);
			}
			me._map_2_floor.ggPositonActive=!flag;
			flag=me._menu_buttons.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_buttons.style[domTransition]='none';
			} else {
				me._menu_buttons.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_buttons.ggParameter.rx=0;me._menu_buttons.ggParameter.ry=0;
				me._menu_buttons.style[domTransform]=parameterToTransform(me._menu_buttons.ggParameter);
			} else {
				me._menu_buttons.ggParameter.rx=0;me._menu_buttons.ggParameter.ry=0;
				me._menu_buttons.style[domTransform]=parameterToTransform(me._menu_buttons.ggParameter);
			}
			me._menu_buttons.ggPositonActive=!flag;
			flag=me._preview_group.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._preview_group.style[domTransition]='none';
			} else {
				me._preview_group.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._preview_group.ggParameter.rx=0;me._preview_group.ggParameter.ry=0;
				me._preview_group.style[domTransform]=parameterToTransform(me._preview_group.ggParameter);
			} else {
				me._preview_group.ggParameter.rx=0;me._preview_group.ggParameter.ry=0;
				me._preview_group.style[domTransform]=parameterToTransform(me._preview_group.ggParameter);
			}
			me._preview_group.ggPositonActive=!flag;
			flag=me._marker_current_title.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._marker_current_title.style[domTransition]='none';
			} else {
				me._marker_current_title.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._marker_current_title.ggParameter.rx=0;me._marker_current_title.ggParameter.ry=0;
				me._marker_current_title.style[domTransform]=parameterToTransform(me._marker_current_title.ggParameter);
			} else {
				me._marker_current_title.ggParameter.rx=0;me._marker_current_title.ggParameter.ry=0;
				me._marker_current_title.style[domTransform]=parameterToTransform(me._marker_current_title.ggParameter);
			}
			me._marker_current_title.ggPositonActive=!flag;
		}
		this._btn_showmap.onmouseover=function () {
			me._tt_showmap.style[domTransition]='none';
			me._tt_showmap.style.visibility='inherit';
			me._tt_showmap.ggVisible=true;
			me._btn_showmap__img.src=basePath + 'imagestour/btn_showmap__o.png';
		}
		this._btn_showmap.onmouseout=function () {
			me._tt_showmap.style[domTransition]='none';
			me._tt_showmap.style.visibility='hidden';
			me._tt_showmap.ggVisible=false;
			me._btn_showmap__img.src=basePath + 'imagestour/btn_showmap.png';
		}
		this._tt_showmap=document.createElement('div');
		this._tt_showmap__text=document.createElement('div');
		this._tt_showmap.className='ggskin ggskin_textdiv';
		this._tt_showmap.ggTextDiv=this._tt_showmap__text;
		this._tt_showmap.ggId="tt_showmap";
		this._tt_showmap.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_showmap.ggVisible=false;
		this._tt_showmap.className='ggskin ggskin_text';
		this._tt_showmap.ggType='text';
		this._tt_showmap.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -33px;';
		hs+='top:  -24px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._tt_showmap.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_showmap__text.setAttribute('style',hs);
		this._tt_showmap__text.innerHTML="<b>\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0443<b>";
		this._tt_showmap.appendChild(this._tt_showmap__text);
		this._btn_showmap.appendChild(this._tt_showmap);
		this.divSkin.appendChild(this._btn_showmap);
		this._btn_hidemap=document.createElement('div');
		this._btn_hidemap.ggId="btn_hidemap";
		this._btn_hidemap.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_hidemap.ggVisible=true;
		this._btn_hidemap.className='ggskin ggskin_button';
		this._btn_hidemap.ggType='button';
		this._btn_hidemap.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(150 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-66 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 150px;';
		hs+='top:  -66px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._btn_hidemap.setAttribute('style',hs);
		this._btn_hidemap__img=document.createElement('img');
		this._btn_hidemap__img.className='ggskin ggskin_button';
		this._btn_hidemap__img.setAttribute('src',basePath + 'imagestour/btn_hidemap.png');
		this._btn_hidemap__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._btn_hidemap__img.className='ggskin ggskin_button';
		this._btn_hidemap__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btn_hidemap__img);
		this._btn_hidemap.appendChild(this._btn_hidemap__img);
		this._btn_hidemap.onclick=function () {
			me._btn_hidemap.style[domTransition]='none';
			me._btn_hidemap.style.visibility='hidden';
			me._btn_hidemap.ggVisible=false;
			me._btn_showmap.style[domTransition]='none';
			me._btn_showmap.style.visibility='inherit';
			me._btn_showmap.ggVisible=true;
			flag=me._map_1_floor.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._map_1_floor.style[domTransition]='none';
			} else {
				me._map_1_floor.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._map_1_floor.ggParameter.rx=0;me._map_1_floor.ggParameter.ry=0;
				me._map_1_floor.style[domTransform]=parameterToTransform(me._map_1_floor.ggParameter);
			} else {
				me._map_1_floor.ggParameter.rx=-140;me._map_1_floor.ggParameter.ry=0;
				me._map_1_floor.style[domTransform]=parameterToTransform(me._map_1_floor.ggParameter);
			}
			me._map_1_floor.ggPositonActive=!flag;
			flag=me._map_2_floor.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._map_2_floor.style[domTransition]='none';
			} else {
				me._map_2_floor.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._map_2_floor.ggParameter.rx=0;me._map_2_floor.ggParameter.ry=0;
				me._map_2_floor.style[domTransform]=parameterToTransform(me._map_2_floor.ggParameter);
			} else {
				me._map_2_floor.ggParameter.rx=-140;me._map_2_floor.ggParameter.ry=0;
				me._map_2_floor.style[domTransform]=parameterToTransform(me._map_2_floor.ggParameter);
			}
			me._map_2_floor.ggPositonActive=!flag;
			flag=me._menu_buttons.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_buttons.style[domTransition]='none';
			} else {
				me._menu_buttons.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_buttons.ggParameter.rx=0;me._menu_buttons.ggParameter.ry=0;
				me._menu_buttons.style[domTransform]=parameterToTransform(me._menu_buttons.ggParameter);
			} else {
				me._menu_buttons.ggParameter.rx=-140;me._menu_buttons.ggParameter.ry=0;
				me._menu_buttons.style[domTransform]=parameterToTransform(me._menu_buttons.ggParameter);
			}
			me._menu_buttons.ggPositonActive=!flag;
			flag=me._preview_group.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._preview_group.style[domTransition]='none';
			} else {
				me._preview_group.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._preview_group.ggParameter.rx=0;me._preview_group.ggParameter.ry=0;
				me._preview_group.style[domTransform]=parameterToTransform(me._preview_group.ggParameter);
			} else {
				me._preview_group.ggParameter.rx=-140;me._preview_group.ggParameter.ry=0;
				me._preview_group.style[domTransform]=parameterToTransform(me._preview_group.ggParameter);
			}
			me._preview_group.ggPositonActive=!flag;
			flag=me._marker_current_title.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._marker_current_title.style[domTransition]='none';
			} else {
				me._marker_current_title.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._marker_current_title.ggParameter.rx=0;me._marker_current_title.ggParameter.ry=0;
				me._marker_current_title.style[domTransform]=parameterToTransform(me._marker_current_title.ggParameter);
			} else {
				me._marker_current_title.ggParameter.rx=0;me._marker_current_title.ggParameter.ry=-230;
				me._marker_current_title.style[domTransform]=parameterToTransform(me._marker_current_title.ggParameter);
			}
			me._marker_current_title.ggPositonActive=!flag;
		}
		this._btn_hidemap.onmouseover=function () {
			me._tt_hidemap.style[domTransition]='none';
			me._tt_hidemap.style.visibility='inherit';
			me._tt_hidemap.ggVisible=true;
			me._btn_hidemap__img.src=basePath + 'imagestour/btn_hidemap__o.png';
		}
		this._btn_hidemap.onmouseout=function () {
			me._tt_hidemap.style[domTransition]='none';
			me._tt_hidemap.style.visibility='hidden';
			me._tt_hidemap.ggVisible=false;
			me._btn_hidemap__img.src=basePath + 'imagestour/btn_hidemap.png';
		}
		this._tt_hidemap=document.createElement('div');
		this._tt_hidemap__text=document.createElement('div');
		this._tt_hidemap.className='ggskin ggskin_textdiv';
		this._tt_hidemap.ggTextDiv=this._tt_hidemap__text;
		this._tt_hidemap.ggId="tt_hidemap";
		this._tt_hidemap.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_hidemap.ggVisible=false;
		this._tt_hidemap.className='ggskin ggskin_text';
		this._tt_hidemap.ggType='text';
		this._tt_hidemap.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -32px;';
		hs+='top:  -24px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._tt_hidemap.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_hidemap__text.setAttribute('style',hs);
		this._tt_hidemap__text.innerHTML="<b>\u0421\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u0440\u0442\u0443<b>";
		this._tt_hidemap.appendChild(this._tt_hidemap__text);
		this._btn_hidemap.appendChild(this._tt_hidemap);
		this.divSkin.appendChild(this._btn_hidemap);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId="hide_template";
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		this._hide_template.className='ggskin ggskin_container';
		this._hide_template.ggType='container';
		hs ='position:absolute;';
		hs+='left: 478px;';
		hs+='top:  20px;';
		hs+='width: 187px;';
		hs+='height: 45px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='overflow: hidden;';
		this._hide_template.setAttribute('style',hs);
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark';
		this._markertemplate.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 60px;';
		hs+='top:  9px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.onmouseover=function () {
			me._marker_title37.style[domTransition]='none';
			me._marker_title37.style.visibility='inherit';
			me._marker_title37.ggVisible=true;
		}
		this._markertemplate.onmouseout=function () {
			me._marker_title37.style[domTransition]='none';
			me._marker_title37.style.visibility='hidden';
			me._marker_title37.ggVisible=false;
		}
		this._markertemplate.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title37=document.createElement('div');
		this._marker_title37__text=document.createElement('div');
		this._marker_title37.className='ggskin ggskin_textdiv';
		this._marker_title37.ggTextDiv=this._marker_title37__text;
		this._marker_title37.ggId="marker_title";
		this._marker_title37.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title37.ggVisible=false;
		this._marker_title37.className='ggskin ggskin_text';
		this._marker_title37.ggType='text';
		this._marker_title37.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title37.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title37__text.setAttribute('style',hs);
		this._marker_title37.ggUpdateText=function() {
			var hs="<b>"+me.player.userdata.title+"<b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._marker_title37.ggUpdateText();
		this._marker_title37.appendChild(this._marker_title37__text);
		this._markertemplate.appendChild(this._marker_title37);
		this._hide_template.appendChild(this._markertemplate);
		this._marker_active=document.createElement('div');
		this._marker_active.ggId="marker_active";
		this._marker_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active.ggVisible=true;
		this._marker_active.className='ggskin ggskin_image';
		this._marker_active.ggType='image';
		hs ='position:absolute;';
		hs+='left: 90px;';
		hs+='top:  8px;';
		hs+='width: 11px;';
		hs+='height: 11px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_active.setAttribute('style',hs);
		this._marker_active__img=document.createElement('img');
		this._marker_active__img.className='ggskin ggskin_image';
		this._marker_active__img.setAttribute('src',basePath + 'imagestour/marker_active.png');
		this._marker_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._marker_active__img.className='ggskin ggskin_image';
		this._marker_active__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._marker_active__img);
		this._marker_active.appendChild(this._marker_active__img);
		this._hide_template.appendChild(this._marker_active);
		this._marker_normal=document.createElement('div');
		this._marker_normal.ggId="marker_normal";
		this._marker_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal.ggVisible=true;
		this._marker_normal.className='ggskin ggskin_image';
		this._marker_normal.ggType='image';
		hs ='position:absolute;';
		hs+='left: 119px;';
		hs+='top:  7px;';
		hs+='width: 11px;';
		hs+='height: 11px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_normal.setAttribute('style',hs);
		this._marker_normal__img=document.createElement('img');
		this._marker_normal__img.className='ggskin ggskin_image';
		this._marker_normal__img.setAttribute('src',basePath + 'imagestour/marker_normal.png');
		this._marker_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._marker_normal__img.className='ggskin ggskin_image';
		this._marker_normal__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._marker_normal__img);
		this._marker_normal.appendChild(this._marker_normal__img);
		this._hide_template.appendChild(this._marker_normal);
		this.divSkin.appendChild(this._hide_template);
		this._map_1_floor=document.createElement('div');
		this._map_1_floor.ggId="map_1_floor";
		this._map_1_floor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_1_floor.ggVisible=true;
		this._map_1_floor.className='ggskin ggskin_container';
		this._map_1_floor.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 133px;';
		hs+='height: 214px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_1_floor.setAttribute('style',hs);
		this._map_1_floor_image=document.createElement('div');
		this._map_1_floor_image.ggId="map_1_floor_image";
		this._map_1_floor_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_1_floor_image.ggVisible=true;
		this._map_1_floor_image.className='ggskin ggskin_image';
		this._map_1_floor_image.ggType='image';
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  5px;';
		hs+='width: 124px;';
		hs+='height: 205px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_1_floor_image.setAttribute('style',hs);
		this._map_1_floor_image__img=document.createElement('img');
		this._map_1_floor_image__img.className='ggskin ggskin_image';
		this._map_1_floor_image__img.setAttribute('src',basePath + 'imagestour/map_1_floor_image.png');
		this._map_1_floor_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_1_floor_image__img.className='ggskin ggskin_image';
		this._map_1_floor_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_1_floor_image__img);
		this._map_1_floor_image.appendChild(this._map_1_floor_image__img);
		this._marker_node1=document.createElement('div');
		this._marker_node1.ggId="marker_node1";
		this._marker_node1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node1.ggVisible=true;
		this._marker_node1.className='ggskin ggskin_mark';
		this._marker_node1.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  167px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node1.setAttribute('style',hs);
		this._marker_node1.ggMarkerNodeId='{node1}';
		nodeMarker.push(this._marker_node1);
		this._marker_node1.onclick=function () {
			me.player.openNext('{node1}');
		}
		this._marker_node1.onmouseover=function () {
			me._marker_title36.style[domTransition]='none';
			me._marker_title36.style.visibility='inherit';
			me._marker_title36.ggVisible=true;
			me._preview2.style[domTransition]='none';
			me._preview2.style.visibility='inherit';
			me._preview2.ggVisible=true;
		}
		this._marker_node1.onmouseout=function () {
			me._marker_title36.style[domTransition]='none';
			me._marker_title36.style.visibility='hidden';
			me._marker_title36.ggVisible=false;
			me._preview2.style[domTransition]='none';
			me._preview2.style.visibility='hidden';
			me._preview2.ggVisible=false;
		}
		this._marker_node1.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title36=document.createElement('div');
		this._marker_title36__text=document.createElement('div');
		this._marker_title36.className='ggskin ggskin_textdiv';
		this._marker_title36.ggTextDiv=this._marker_title36__text;
		this._marker_title36.ggId="marker_title";
		this._marker_title36.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title36.ggVisible=false;
		this._marker_title36.className='ggskin ggskin_text';
		this._marker_title36.ggType='text';
		this._marker_title36.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title36.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title36__text.setAttribute('style',hs);
		this._marker_title36__text.innerHTML="<b>\u0425\u043e\u043b\u043b<b>";
		this._marker_title36.appendChild(this._marker_title36__text);
		this._marker_node1.appendChild(this._marker_title36);
		this._map_1_floor_image.appendChild(this._marker_node1);
		this._marker_node2=document.createElement('div');
		this._marker_node2.ggId="marker_node2";
		this._marker_node2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node2.ggVisible=true;
		this._marker_node2.className='ggskin ggskin_mark';
		this._marker_node2.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 85px;';
		hs+='top:  140px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node2.setAttribute('style',hs);
		this._marker_node2.ggMarkerNodeId='{node2}';
		nodeMarker.push(this._marker_node2);
		this._marker_node2.onclick=function () {
			me.player.openNext('{node2}');
		}
		this._marker_node2.onmouseover=function () {
			me._marker_title35.style[domTransition]='none';
			me._marker_title35.style.visibility='inherit';
			me._marker_title35.ggVisible=true;
			me._preview1.style[domTransition]='none';
			me._preview1.style.visibility='inherit';
			me._preview1.ggVisible=true;
		}
		this._marker_node2.onmouseout=function () {
			me._marker_title35.style[domTransition]='none';
			me._marker_title35.style.visibility='hidden';
			me._marker_title35.ggVisible=false;
			me._preview1.style[domTransition]='none';
			me._preview1.style.visibility='hidden';
			me._preview1.ggVisible=false;
		}
		this._marker_node2.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title35=document.createElement('div');
		this._marker_title35__text=document.createElement('div');
		this._marker_title35.className='ggskin ggskin_textdiv';
		this._marker_title35.ggTextDiv=this._marker_title35__text;
		this._marker_title35.ggId="marker_title";
		this._marker_title35.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title35.ggVisible=false;
		this._marker_title35.className='ggskin ggskin_text';
		this._marker_title35.ggType='text';
		this._marker_title35.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title35.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title35__text.setAttribute('style',hs);
		this._marker_title35__text.innerHTML="<b>\u041b\u0435\u0441\u0442\u043d\u0438\u0446\u0430<b>";
		this._marker_title35.appendChild(this._marker_title35__text);
		this._marker_node2.appendChild(this._marker_title35);
		this._map_1_floor_image.appendChild(this._marker_node2);
		this._marker_node3=document.createElement('div');
		this._marker_node3.ggId="marker_node3";
		this._marker_node3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node3.ggVisible=true;
		this._marker_node3.className='ggskin ggskin_mark';
		this._marker_node3.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 79px;';
		hs+='top:  117px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node3.setAttribute('style',hs);
		this._marker_node3.ggMarkerNodeId='{node3}';
		nodeMarker.push(this._marker_node3);
		this._marker_node3.onclick=function () {
			me.player.openNext('{node3}');
		}
		this._marker_node3.onmouseover=function () {
			me._marker_title34.style[domTransition]='none';
			me._marker_title34.style.visibility='inherit';
			me._marker_title34.ggVisible=true;
		}
		this._marker_node3.onmouseout=function () {
			me._marker_title34.style[domTransition]='none';
			me._marker_title34.style.visibility='hidden';
			me._marker_title34.ggVisible=false;
		}
		this._marker_node3.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title34=document.createElement('div');
		this._marker_title34__text=document.createElement('div');
		this._marker_title34.className='ggskin ggskin_textdiv';
		this._marker_title34.ggTextDiv=this._marker_title34__text;
		this._marker_title34.ggId="marker_title";
		this._marker_title34.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title34.ggVisible=false;
		this._marker_title34.className='ggskin ggskin_text';
		this._marker_title34.ggType='text';
		this._marker_title34.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title34.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title34__text.setAttribute('style',hs);
		this._marker_title34__text.innerHTML="<b>\u041b\u044e\u043a\u0441<b>";
		this._marker_title34.appendChild(this._marker_title34__text);
		this._marker_node3.appendChild(this._marker_title34);
		this._map_1_floor_image.appendChild(this._marker_node3);
		this._marker_node4=document.createElement('div');
		this._marker_node4.ggId="marker_node4";
		this._marker_node4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node4.ggVisible=true;
		this._marker_node4.className='ggskin ggskin_mark';
		this._marker_node4.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 39px;';
		hs+='top:  115px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node4.setAttribute('style',hs);
		this._marker_node4.ggMarkerNodeId='{node4}';
		nodeMarker.push(this._marker_node4);
		this._marker_node4.onclick=function () {
			me.player.openNext('{node4}');
		}
		this._marker_node4.onmouseover=function () {
			me._marker_title33.style[domTransition]='none';
			me._marker_title33.style.visibility='inherit';
			me._marker_title33.ggVisible=true;
		}
		this._marker_node4.onmouseout=function () {
			me._marker_title33.style[domTransition]='none';
			me._marker_title33.style.visibility='hidden';
			me._marker_title33.ggVisible=false;
		}
		this._marker_node4.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title33=document.createElement('div');
		this._marker_title33__text=document.createElement('div');
		this._marker_title33.className='ggskin ggskin_textdiv';
		this._marker_title33.ggTextDiv=this._marker_title33__text;
		this._marker_title33.ggId="marker_title";
		this._marker_title33.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title33.ggVisible=false;
		this._marker_title33.className='ggskin ggskin_text';
		this._marker_title33.ggType='text';
		this._marker_title33.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title33.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title33__text.setAttribute('style',hs);
		this._marker_title33__text.innerHTML="<b>\u0413\u043e\u0441\u0442\u0438\u043d\u0430\u044f<b>";
		this._marker_title33.appendChild(this._marker_title33__text);
		this._marker_node4.appendChild(this._marker_title33);
		this._map_1_floor_image.appendChild(this._marker_node4);
		this._marker_node5=document.createElement('div');
		this._marker_node5.ggId="marker_node5";
		this._marker_node5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node5.ggVisible=true;
		this._marker_node5.className='ggskin ggskin_mark';
		this._marker_node5.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 47px;';
		hs+='top:  81px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node5.setAttribute('style',hs);
		this._marker_node5.ggMarkerNodeId='{node5}';
		nodeMarker.push(this._marker_node5);
		this._marker_node5.onclick=function () {
			me.player.openNext('{node5}');
		}
		this._marker_node5.onmouseover=function () {
			me._marker_title32.style[domTransition]='none';
			me._marker_title32.style.visibility='inherit';
			me._marker_title32.ggVisible=true;
		}
		this._marker_node5.onmouseout=function () {
			me._marker_title32.style[domTransition]='none';
			me._marker_title32.style.visibility='hidden';
			me._marker_title32.ggVisible=false;
		}
		this._marker_node5.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title32=document.createElement('div');
		this._marker_title32__text=document.createElement('div');
		this._marker_title32.className='ggskin ggskin_textdiv';
		this._marker_title32.ggTextDiv=this._marker_title32__text;
		this._marker_title32.ggId="marker_title";
		this._marker_title32.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title32.ggVisible=false;
		this._marker_title32.className='ggskin ggskin_text';
		this._marker_title32.ggType='text';
		this._marker_title32.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title32.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title32__text.setAttribute('style',hs);
		this._marker_title32__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f<b>";
		this._marker_title32.appendChild(this._marker_title32__text);
		this._marker_node5.appendChild(this._marker_title32);
		this._map_1_floor_image.appendChild(this._marker_node5);
		this._marker_node6=document.createElement('div');
		this._marker_node6.ggId="marker_node6";
		this._marker_node6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node6.ggVisible=true;
		this._marker_node6.className='ggskin ggskin_mark';
		this._marker_node6.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  79px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node6.setAttribute('style',hs);
		this._marker_node6.ggMarkerNodeId='{node6}';
		nodeMarker.push(this._marker_node6);
		this._marker_node6.onclick=function () {
			me.player.openNext('{node6}');
		}
		this._marker_node6.onmouseover=function () {
			me._marker_title31.style[domTransition]='none';
			me._marker_title31.style.visibility='inherit';
			me._marker_title31.ggVisible=true;
		}
		this._marker_node6.onmouseout=function () {
			me._marker_title31.style[domTransition]='none';
			me._marker_title31.style.visibility='hidden';
			me._marker_title31.ggVisible=false;
		}
		this._marker_node6.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title31=document.createElement('div');
		this._marker_title31__text=document.createElement('div');
		this._marker_title31.className='ggskin ggskin_textdiv';
		this._marker_title31.ggTextDiv=this._marker_title31__text;
		this._marker_title31.ggId="marker_title";
		this._marker_title31.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title31.ggVisible=false;
		this._marker_title31.className='ggskin ggskin_text';
		this._marker_title31.ggType='text';
		this._marker_title31.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title31.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title31__text.setAttribute('style',hs);
		this._marker_title31__text.innerHTML="<b>\u0421\u0430\u0443\u043d\u0430<b>";
		this._marker_title31.appendChild(this._marker_title31__text);
		this._marker_node6.appendChild(this._marker_title31);
		this._map_1_floor_image.appendChild(this._marker_node6);
		this._marker_node7=document.createElement('div');
		this._marker_node7.ggId="marker_node7";
		this._marker_node7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node7.ggVisible=true;
		this._marker_node7.className='ggskin ggskin_mark';
		this._marker_node7.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 85px;';
		hs+='top:  29px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node7.setAttribute('style',hs);
		this._marker_node7.ggMarkerNodeId='{node7}';
		nodeMarker.push(this._marker_node7);
		this._marker_node7.onclick=function () {
			me.player.openNext('{node7}');
		}
		this._marker_node7.onmouseover=function () {
			me._marker_title30.style[domTransition]='none';
			me._marker_title30.style.visibility='inherit';
			me._marker_title30.ggVisible=true;
		}
		this._marker_node7.onmouseout=function () {
			me._marker_title30.style[domTransition]='none';
			me._marker_title30.style.visibility='hidden';
			me._marker_title30.ggVisible=false;
		}
		this._marker_node7.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title30=document.createElement('div');
		this._marker_title30__text=document.createElement('div');
		this._marker_title30.className='ggskin ggskin_textdiv';
		this._marker_title30.ggTextDiv=this._marker_title30__text;
		this._marker_title30.ggId="marker_title";
		this._marker_title30.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title30.ggVisible=false;
		this._marker_title30.className='ggskin ggskin_text';
		this._marker_title30.ggType='text';
		this._marker_title30.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title30.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title30__text.setAttribute('style',hs);
		this._marker_title30__text.innerHTML="<b>\u041a\u043e\u043c\u043d\u0430\u0442\u0430<b>";
		this._marker_title30.appendChild(this._marker_title30__text);
		this._marker_node7.appendChild(this._marker_title30);
		this._map_1_floor_image.appendChild(this._marker_node7);
		this._map_1_floor.appendChild(this._map_1_floor_image);
		this.divSkin.appendChild(this._map_1_floor);
		this._map_2_floor=document.createElement('div');
		this._map_2_floor.ggId="map_2_floor";
		this._map_2_floor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_2_floor.ggVisible=true;
		this._map_2_floor.className='ggskin ggskin_container';
		this._map_2_floor.ggType='container';
		hs ='position:absolute;';
		hs+='left: -13px;';
		hs+='top:  -5px;';
		hs+='width: 148px;';
		hs+='height: 217px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_2_floor.setAttribute('style',hs);
		this._map_2_floor_image=document.createElement('div');
		this._map_2_floor_image.ggId="map_2_floor_image";
		this._map_2_floor_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_2_floor_image.ggVisible=true;
		this._map_2_floor_image.className='ggskin ggskin_image';
		this._map_2_floor_image.ggType='image';
		hs ='position:absolute;';
		hs+='left: 18px;';
		hs+='top:  9px;';
		hs+='width: 124px;';
		hs+='height: 204px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_2_floor_image.setAttribute('style',hs);
		this._map_2_floor_image__img=document.createElement('img');
		this._map_2_floor_image__img.className='ggskin ggskin_image';
		this._map_2_floor_image__img.setAttribute('src',basePath + 'imagestour/map_2_floor_image.png');
		this._map_2_floor_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_2_floor_image__img.className='ggskin ggskin_image';
		this._map_2_floor_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_2_floor_image__img);
		this._map_2_floor_image.appendChild(this._map_2_floor_image__img);
		this._marker_node26=document.createElement('div');
		this._marker_node26.ggId="marker_node26";
		this._marker_node26.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node26.ggVisible=true;
		this._marker_node26.className='ggskin ggskin_mark';
		this._marker_node26.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  1px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node26.setAttribute('style',hs);
		this._marker_node26.ggMarkerNodeId='{node26}';
		nodeMarker.push(this._marker_node26);
		this._marker_node26.onclick=function () {
			me.player.openNext('{node26}');
		}
		this._marker_node26.onmouseover=function () {
			me._marker_title29.style[domTransition]='none';
			me._marker_title29.style.visibility='inherit';
			me._marker_title29.ggVisible=true;
		}
		this._marker_node26.onmouseout=function () {
			me._marker_title29.style[domTransition]='none';
			me._marker_title29.style.visibility='hidden';
			me._marker_title29.ggVisible=false;
		}
		this._marker_node26.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title29=document.createElement('div');
		this._marker_title29__text=document.createElement('div');
		this._marker_title29.className='ggskin ggskin_textdiv';
		this._marker_title29.ggTextDiv=this._marker_title29__text;
		this._marker_title29.ggId="marker_title";
		this._marker_title29.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title29.ggVisible=false;
		this._marker_title29.className='ggskin ggskin_text';
		this._marker_title29.ggType='text';
		this._marker_title29.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title29.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title29__text.setAttribute('style',hs);
		this._marker_title29__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 207<b>";
		this._marker_title29.appendChild(this._marker_title29__text);
		this._marker_node26.appendChild(this._marker_title29);
		this._map_2_floor_image.appendChild(this._marker_node26);
		this._marker_node28=document.createElement('div');
		this._marker_node28.ggId="marker_node28";
		this._marker_node28.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node28.ggVisible=true;
		this._marker_node28.className='ggskin ggskin_mark';
		this._marker_node28.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 80px;';
		hs+='top:  2px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node28.setAttribute('style',hs);
		this._marker_node28.ggMarkerNodeId='{node28}';
		nodeMarker.push(this._marker_node28);
		this._marker_node28.onclick=function () {
			me.player.openNext('{node28}');
		}
		this._marker_node28.onmouseover=function () {
			me._marker_title28.style[domTransition]='none';
			me._marker_title28.style.visibility='inherit';
			me._marker_title28.ggVisible=true;
		}
		this._marker_node28.onmouseout=function () {
			me._marker_title28.style[domTransition]='none';
			me._marker_title28.style.visibility='hidden';
			me._marker_title28.ggVisible=false;
		}
		this._marker_node28.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title28=document.createElement('div');
		this._marker_title28__text=document.createElement('div');
		this._marker_title28.className='ggskin ggskin_textdiv';
		this._marker_title28.ggTextDiv=this._marker_title28__text;
		this._marker_title28.ggId="marker_title";
		this._marker_title28.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title28.ggVisible=false;
		this._marker_title28.className='ggskin ggskin_text';
		this._marker_title28.ggType='text';
		this._marker_title28.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title28.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title28__text.setAttribute('style',hs);
		this._marker_title28__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 206<b>";
		this._marker_title28.appendChild(this._marker_title28__text);
		this._marker_node28.appendChild(this._marker_title28);
		this._map_2_floor_image.appendChild(this._marker_node28);
		this._marker_node12=document.createElement('div');
		this._marker_node12.ggId="marker_node12";
		this._marker_node12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node12.ggVisible=true;
		this._marker_node12.className='ggskin ggskin_mark';
		this._marker_node12.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 58px;';
		hs+='top:  13px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node12.setAttribute('style',hs);
		this._marker_node12.ggMarkerNodeId='{node12}';
		nodeMarker.push(this._marker_node12);
		this._marker_node12.onclick=function () {
			me.player.openNext('{node12}');
		}
		this._marker_node12.onmouseover=function () {
			me._marker_title27.style[domTransition]='none';
			me._marker_title27.style.visibility='inherit';
			me._marker_title27.ggVisible=true;
		}
		this._marker_node12.onmouseout=function () {
			me._marker_title27.style[domTransition]='none';
			me._marker_title27.style.visibility='hidden';
			me._marker_title27.ggVisible=false;
		}
		this._marker_node12.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title27=document.createElement('div');
		this._marker_title27__text=document.createElement('div');
		this._marker_title27.className='ggskin ggskin_textdiv';
		this._marker_title27.ggTextDiv=this._marker_title27__text;
		this._marker_title27.ggId="marker_title";
		this._marker_title27.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title27.ggVisible=false;
		this._marker_title27.className='ggskin ggskin_text';
		this._marker_title27.ggType='text';
		this._marker_title27.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title27.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title27__text.setAttribute('style',hs);
		this._marker_title27__text.innerHTML="<b>\u041a\u043e\u0440\u0438\u0434\u043e\u0440 4<b>";
		this._marker_title27.appendChild(this._marker_title27__text);
		this._marker_node12.appendChild(this._marker_title27);
		this._map_2_floor_image.appendChild(this._marker_node12);
		this._marker_node29=document.createElement('div');
		this._marker_node29.ggId="marker_node29";
		this._marker_node29.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node29.ggVisible=true;
		this._marker_node29.className='ggskin ggskin_mark';
		this._marker_node29.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 97px;';
		hs+='top:  25px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node29.setAttribute('style',hs);
		this._marker_node29.ggMarkerNodeId='{node29}';
		nodeMarker.push(this._marker_node29);
		this._marker_node29.onclick=function () {
			me.player.openNext('{node29}');
		}
		this._marker_node29.onmouseover=function () {
			me._marker_title26.style[domTransition]='none';
			me._marker_title26.style.visibility='inherit';
			me._marker_title26.ggVisible=true;
		}
		this._marker_node29.onmouseout=function () {
			me._marker_title26.style[domTransition]='none';
			me._marker_title26.style.visibility='hidden';
			me._marker_title26.ggVisible=false;
		}
		this._marker_node29.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title26=document.createElement('div');
		this._marker_title26__text=document.createElement('div');
		this._marker_title26.className='ggskin ggskin_textdiv';
		this._marker_title26.ggTextDiv=this._marker_title26__text;
		this._marker_title26.ggId="marker_title";
		this._marker_title26.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title26.ggVisible=false;
		this._marker_title26.className='ggskin ggskin_text';
		this._marker_title26.ggType='text';
		this._marker_title26.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title26.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title26__text.setAttribute('style',hs);
		this._marker_title26__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 205<b>";
		this._marker_title26.appendChild(this._marker_title26__text);
		this._marker_node29.appendChild(this._marker_title26);
		this._map_2_floor_image.appendChild(this._marker_node29);
		this._marker_node30=document.createElement('div');
		this._marker_node30.ggId="marker_node30";
		this._marker_node30.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node30.ggVisible=true;
		this._marker_node30.className='ggskin ggskin_mark';
		this._marker_node30.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 80px;';
		hs+='top:  30px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node30.setAttribute('style',hs);
		this._marker_node30.ggMarkerNodeId='{node30}';
		nodeMarker.push(this._marker_node30);
		this._marker_node30.onclick=function () {
			me.player.openNext('{node30}');
		}
		this._marker_node30.onmouseover=function () {
			me._marker_title25.style[domTransition]='none';
			me._marker_title25.style.visibility='inherit';
			me._marker_title25.ggVisible=true;
		}
		this._marker_node30.onmouseout=function () {
			me._marker_title25.style[domTransition]='none';
			me._marker_title25.style.visibility='hidden';
			me._marker_title25.ggVisible=false;
		}
		this._marker_node30.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title25=document.createElement('div');
		this._marker_title25__text=document.createElement('div');
		this._marker_title25.className='ggskin ggskin_textdiv';
		this._marker_title25.ggTextDiv=this._marker_title25__text;
		this._marker_title25.ggId="marker_title";
		this._marker_title25.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title25.ggVisible=false;
		this._marker_title25.className='ggskin ggskin_text';
		this._marker_title25.ggType='text';
		this._marker_title25.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title25.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title25__text.setAttribute('style',hs);
		this._marker_title25__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 205<b>";
		this._marker_title25.appendChild(this._marker_title25__text);
		this._marker_node30.appendChild(this._marker_title25);
		this._map_2_floor_image.appendChild(this._marker_node30);
		this._marker_node27=document.createElement('div');
		this._marker_node27.ggId="marker_node27";
		this._marker_node27.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node27.ggVisible=true;
		this._marker_node27.className='ggskin ggskin_mark';
		this._marker_node27.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 97px;';
		hs+='top:  7px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node27.setAttribute('style',hs);
		this._marker_node27.ggMarkerNodeId='{node27}';
		nodeMarker.push(this._marker_node27);
		this._marker_node27.onclick=function () {
			me.player.openNext('{node27}');
		}
		this._marker_node27.onmouseover=function () {
			me._marker_title24.style[domTransition]='none';
			me._marker_title24.style.visibility='inherit';
			me._marker_title24.ggVisible=true;
		}
		this._marker_node27.onmouseout=function () {
			me._marker_title24.style[domTransition]='none';
			me._marker_title24.style.visibility='hidden';
			me._marker_title24.ggVisible=false;
		}
		this._marker_node27.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title24=document.createElement('div');
		this._marker_title24__text=document.createElement('div');
		this._marker_title24.className='ggskin ggskin_textdiv';
		this._marker_title24.ggTextDiv=this._marker_title24__text;
		this._marker_title24.ggId="marker_title";
		this._marker_title24.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title24.ggVisible=false;
		this._marker_title24.className='ggskin ggskin_text';
		this._marker_title24.ggType='text';
		this._marker_title24.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title24.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title24__text.setAttribute('style',hs);
		this._marker_title24__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 206<b>";
		this._marker_title24.appendChild(this._marker_title24__text);
		this._marker_node27.appendChild(this._marker_title24);
		this._map_2_floor_image.appendChild(this._marker_node27);
		this._marker_node11=document.createElement('div');
		this._marker_node11.ggId="marker_node11";
		this._marker_node11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node11.ggVisible=true;
		this._marker_node11.className='ggskin ggskin_mark';
		this._marker_node11.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 58px;';
		hs+='top:  43px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node11.setAttribute('style',hs);
		this._marker_node11.ggMarkerNodeId='{node11}';
		nodeMarker.push(this._marker_node11);
		this._marker_node11.onclick=function () {
			me.player.openNext('{node11}');
		}
		this._marker_node11.onmouseover=function () {
			me._marker_title23.style[domTransition]='none';
			me._marker_title23.style.visibility='inherit';
			me._marker_title23.ggVisible=true;
		}
		this._marker_node11.onmouseout=function () {
			me._marker_title23.style[domTransition]='none';
			me._marker_title23.style.visibility='hidden';
			me._marker_title23.ggVisible=false;
		}
		this._marker_node11.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title23=document.createElement('div');
		this._marker_title23__text=document.createElement('div');
		this._marker_title23.className='ggskin ggskin_textdiv';
		this._marker_title23.ggTextDiv=this._marker_title23__text;
		this._marker_title23.ggId="marker_title";
		this._marker_title23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title23.ggVisible=false;
		this._marker_title23.className='ggskin ggskin_text';
		this._marker_title23.ggType='text';
		this._marker_title23.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title23.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title23__text.setAttribute('style',hs);
		this._marker_title23__text.innerHTML="<b>\u041a\u043e\u0440\u0438\u0434\u043e\u0440 3<b>";
		this._marker_title23.appendChild(this._marker_title23__text);
		this._marker_node11.appendChild(this._marker_title23);
		this._map_2_floor_image.appendChild(this._marker_node11);
		this._marker_node10=document.createElement('div');
		this._marker_node10.ggId="marker_node10";
		this._marker_node10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node10.ggVisible=true;
		this._marker_node10.className='ggskin ggskin_mark';
		this._marker_node10.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 58px;';
		hs+='top:  78px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node10.setAttribute('style',hs);
		this._marker_node10.ggMarkerNodeId='{node10}';
		nodeMarker.push(this._marker_node10);
		this._marker_node10.onclick=function () {
			me.player.openNext('{node10}');
		}
		this._marker_node10.onmouseover=function () {
			me._marker_title22.style[domTransition]='none';
			me._marker_title22.style.visibility='inherit';
			me._marker_title22.ggVisible=true;
		}
		this._marker_node10.onmouseout=function () {
			me._marker_title22.style[domTransition]='none';
			me._marker_title22.style.visibility='hidden';
			me._marker_title22.ggVisible=false;
		}
		this._marker_node10.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title22=document.createElement('div');
		this._marker_title22__text=document.createElement('div');
		this._marker_title22.className='ggskin ggskin_textdiv';
		this._marker_title22.ggTextDiv=this._marker_title22__text;
		this._marker_title22.ggId="marker_title";
		this._marker_title22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title22.ggVisible=false;
		this._marker_title22.className='ggskin ggskin_text';
		this._marker_title22.ggType='text';
		this._marker_title22.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title22.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title22__text.setAttribute('style',hs);
		this._marker_title22__text.innerHTML="<b>\u041a\u043e\u0440\u0438\u0434\u043e\u0440 2<b>";
		this._marker_title22.appendChild(this._marker_title22__text);
		this._marker_node10.appendChild(this._marker_title22);
		this._map_2_floor_image.appendChild(this._marker_node10);
		this._marker_node14=document.createElement('div');
		this._marker_node14.ggId="marker_node14";
		this._marker_node14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node14.ggVisible=true;
		this._marker_node14.className='ggskin ggskin_mark';
		this._marker_node14.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 78px;';
		hs+='top:  113px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node14.setAttribute('style',hs);
		this._marker_node14.ggMarkerNodeId='{node14}';
		nodeMarker.push(this._marker_node14);
		this._marker_node14.onclick=function () {
			me.player.openNext('{node14}');
		}
		this._marker_node14.onmouseover=function () {
			me._marker_title21.style[domTransition]='none';
			me._marker_title21.style.visibility='inherit';
			me._marker_title21.ggVisible=true;
		}
		this._marker_node14.onmouseout=function () {
			me._marker_title21.style[domTransition]='none';
			me._marker_title21.style.visibility='hidden';
			me._marker_title21.ggVisible=false;
		}
		this._marker_node14.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title21=document.createElement('div');
		this._marker_title21__text=document.createElement('div');
		this._marker_title21.className='ggskin ggskin_textdiv';
		this._marker_title21.ggTextDiv=this._marker_title21__text;
		this._marker_title21.ggId="marker_title";
		this._marker_title21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title21.ggVisible=false;
		this._marker_title21.className='ggskin ggskin_text';
		this._marker_title21.ggType='text';
		this._marker_title21.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title21.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title21__text.setAttribute('style',hs);
		this._marker_title21__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 201<b>";
		this._marker_title21.appendChild(this._marker_title21__text);
		this._marker_node14.appendChild(this._marker_title21);
		this._map_2_floor_image.appendChild(this._marker_node14);
		this._marker_node13=document.createElement('div');
		this._marker_node13.ggId="marker_node13";
		this._marker_node13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node13.ggVisible=true;
		this._marker_node13.className='ggskin ggskin_mark';
		this._marker_node13.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 96px;';
		hs+='top:  108px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node13.setAttribute('style',hs);
		this._marker_node13.ggMarkerNodeId='{node13}';
		nodeMarker.push(this._marker_node13);
		this._marker_node13.onclick=function () {
			me.player.openNext('{node13}');
		}
		this._marker_node13.onmouseover=function () {
			me._marker_title20.style[domTransition]='none';
			me._marker_title20.style.visibility='inherit';
			me._marker_title20.ggVisible=true;
		}
		this._marker_node13.onmouseout=function () {
			me._marker_title20.style[domTransition]='none';
			me._marker_title20.style.visibility='hidden';
			me._marker_title20.ggVisible=false;
		}
		this._marker_node13.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title20=document.createElement('div');
		this._marker_title20__text=document.createElement('div');
		this._marker_title20.className='ggskin ggskin_textdiv';
		this._marker_title20.ggTextDiv=this._marker_title20__text;
		this._marker_title20.ggId="marker_title";
		this._marker_title20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title20.ggVisible=false;
		this._marker_title20.className='ggskin ggskin_text';
		this._marker_title20.ggType='text';
		this._marker_title20.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title20.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title20__text.setAttribute('style',hs);
		this._marker_title20__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 201<b>";
		this._marker_title20.appendChild(this._marker_title20__text);
		this._marker_node13.appendChild(this._marker_title20);
		this._map_2_floor_image.appendChild(this._marker_node13);
		this._marker_node15=document.createElement('div');
		this._marker_node15.ggId="marker_node15";
		this._marker_node15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node15.ggVisible=true;
		this._marker_node15.className='ggskin ggskin_mark';
		this._marker_node15.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 33px;';
		hs+='top:  141px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node15.setAttribute('style',hs);
		this._marker_node15.ggMarkerNodeId='{node15}';
		nodeMarker.push(this._marker_node15);
		this._marker_node15.onclick=function () {
			me.player.openNext('{node15}');
		}
		this._marker_node15.onmouseover=function () {
			me._marker_title19.style[domTransition]='none';
			me._marker_title19.style.visibility='inherit';
			me._marker_title19.ggVisible=true;
		}
		this._marker_node15.onmouseout=function () {
			me._marker_title19.style[domTransition]='none';
			me._marker_title19.style.visibility='hidden';
			me._marker_title19.ggVisible=false;
		}
		this._marker_node15.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title19=document.createElement('div');
		this._marker_title19__text=document.createElement('div');
		this._marker_title19.className='ggskin ggskin_textdiv';
		this._marker_title19.ggTextDiv=this._marker_title19__text;
		this._marker_title19.ggId="marker_title";
		this._marker_title19.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title19.ggVisible=false;
		this._marker_title19.className='ggskin ggskin_text';
		this._marker_title19.ggType='text';
		this._marker_title19.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title19.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title19__text.setAttribute('style',hs);
		this._marker_title19__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 215<b>";
		this._marker_title19.appendChild(this._marker_title19__text);
		this._marker_node15.appendChild(this._marker_title19);
		this._map_2_floor_image.appendChild(this._marker_node15);
		this._marker_node18=document.createElement('div');
		this._marker_node18.ggId="marker_node18";
		this._marker_node18.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node18.ggVisible=true;
		this._marker_node18.className='ggskin ggskin_mark';
		this._marker_node18.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  127px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node18.setAttribute('style',hs);
		this._marker_node18.ggMarkerNodeId='{node18}';
		nodeMarker.push(this._marker_node18);
		this._marker_node18.onclick=function () {
			me.player.openNext('{node18}');
		}
		this._marker_node18.onmouseover=function () {
			me._marker_title18.style[domTransition]='none';
			me._marker_title18.style.visibility='inherit';
			me._marker_title18.ggVisible=true;
		}
		this._marker_node18.onmouseout=function () {
			me._marker_title18.style[domTransition]='none';
			me._marker_title18.style.visibility='hidden';
			me._marker_title18.ggVisible=false;
		}
		this._marker_node18.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title18=document.createElement('div');
		this._marker_title18__text=document.createElement('div');
		this._marker_title18.className='ggskin ggskin_textdiv';
		this._marker_title18.ggTextDiv=this._marker_title18__text;
		this._marker_title18.ggId="marker_title";
		this._marker_title18.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title18.ggVisible=false;
		this._marker_title18.className='ggskin ggskin_text';
		this._marker_title18.ggType='text';
		this._marker_title18.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title18.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title18__text.setAttribute('style',hs);
		this._marker_title18__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 214<b>";
		this._marker_title18.appendChild(this._marker_title18__text);
		this._marker_node18.appendChild(this._marker_title18);
		this._map_2_floor_image.appendChild(this._marker_node18);
		this._marker_node17=document.createElement('div');
		this._marker_node17.ggId="marker_node17";
		this._marker_node17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node17.ggVisible=true;
		this._marker_node17.className='ggskin ggskin_mark';
		this._marker_node17.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 20px;';
		hs+='top:  124px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node17.setAttribute('style',hs);
		this._marker_node17.ggMarkerNodeId='{node17}';
		nodeMarker.push(this._marker_node17);
		this._marker_node17.onclick=function () {
			me.player.openNext('{node17}');
		}
		this._marker_node17.onmouseover=function () {
			me._marker_title17.style[domTransition]='none';
			me._marker_title17.style.visibility='inherit';
			me._marker_title17.ggVisible=true;
		}
		this._marker_node17.onmouseout=function () {
			me._marker_title17.style[domTransition]='none';
			me._marker_title17.style.visibility='hidden';
			me._marker_title17.ggVisible=false;
		}
		this._marker_node17.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title17=document.createElement('div');
		this._marker_title17__text=document.createElement('div');
		this._marker_title17.className='ggskin ggskin_textdiv';
		this._marker_title17.ggTextDiv=this._marker_title17__text;
		this._marker_title17.ggId="marker_title";
		this._marker_title17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title17.ggVisible=false;
		this._marker_title17.className='ggskin ggskin_text';
		this._marker_title17.ggType='text';
		this._marker_title17.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title17.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title17__text.setAttribute('style',hs);
		this._marker_title17__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 214<b>";
		this._marker_title17.appendChild(this._marker_title17__text);
		this._marker_node17.appendChild(this._marker_title17);
		this._map_2_floor_image.appendChild(this._marker_node17);
		this._marker_node19=document.createElement('div');
		this._marker_node19.ggId="marker_node19";
		this._marker_node19.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node19.ggVisible=true;
		this._marker_node19.className='ggskin ggskin_mark';
		this._marker_node19.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 20px;';
		hs+='top:  108px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node19.setAttribute('style',hs);
		this._marker_node19.ggMarkerNodeId='{node19}';
		nodeMarker.push(this._marker_node19);
		this._marker_node19.onclick=function () {
			me.player.openNext('{node19}');
		}
		this._marker_node19.onmouseover=function () {
			me._marker_title16.style[domTransition]='none';
			me._marker_title16.style.visibility='inherit';
			me._marker_title16.ggVisible=true;
		}
		this._marker_node19.onmouseout=function () {
			me._marker_title16.style[domTransition]='none';
			me._marker_title16.style.visibility='hidden';
			me._marker_title16.ggVisible=false;
		}
		this._marker_node19.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title16=document.createElement('div');
		this._marker_title16__text=document.createElement('div');
		this._marker_title16.className='ggskin ggskin_textdiv';
		this._marker_title16.ggTextDiv=this._marker_title16__text;
		this._marker_title16.ggId="marker_title";
		this._marker_title16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title16.ggVisible=false;
		this._marker_title16.className='ggskin ggskin_text';
		this._marker_title16.ggType='text';
		this._marker_title16.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title16.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title16__text.setAttribute('style',hs);
		this._marker_title16__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 213<b>";
		this._marker_title16.appendChild(this._marker_title16__text);
		this._marker_node19.appendChild(this._marker_title16);
		this._map_2_floor_image.appendChild(this._marker_node19);
		this._marker_node9=document.createElement('div');
		this._marker_node9.ggId="marker_node9";
		this._marker_node9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node9.ggVisible=true;
		this._marker_node9.className='ggskin ggskin_mark';
		this._marker_node9.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 58px;';
		hs+='top:  110px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node9.setAttribute('style',hs);
		this._marker_node9.ggMarkerNodeId='{node9}';
		nodeMarker.push(this._marker_node9);
		this._marker_node9.onclick=function () {
			me.player.openNext('{node9}');
		}
		this._marker_node9.onmouseover=function () {
			me._marker_title15.style[domTransition]='none';
			me._marker_title15.style.visibility='inherit';
			me._marker_title15.ggVisible=true;
		}
		this._marker_node9.onmouseout=function () {
			me._marker_title15.style[domTransition]='none';
			me._marker_title15.style.visibility='hidden';
			me._marker_title15.ggVisible=false;
		}
		this._marker_node9.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title15=document.createElement('div');
		this._marker_title15__text=document.createElement('div');
		this._marker_title15.className='ggskin ggskin_textdiv';
		this._marker_title15.ggTextDiv=this._marker_title15__text;
		this._marker_title15.ggId="marker_title";
		this._marker_title15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title15.ggVisible=false;
		this._marker_title15.className='ggskin ggskin_text';
		this._marker_title15.ggType='text';
		this._marker_title15.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title15.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title15__text.setAttribute('style',hs);
		this._marker_title15__text.innerHTML="<b>\u041a\u043e\u0440\u0438\u0434\u043e\u0440 1<b>";
		this._marker_title15.appendChild(this._marker_title15__text);
		this._marker_node9.appendChild(this._marker_title15);
		this._map_2_floor_image.appendChild(this._marker_node9);
		this._marker_node20=document.createElement('div');
		this._marker_node20.ggId="marker_node20";
		this._marker_node20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node20.ggVisible=true;
		this._marker_node20.className='ggskin ggskin_mark';
		this._marker_node20.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  104px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node20.setAttribute('style',hs);
		this._marker_node20.ggMarkerNodeId='{node20}';
		nodeMarker.push(this._marker_node20);
		this._marker_node20.onclick=function () {
			me.player.openNext('{node20}');
		}
		this._marker_node20.onmouseover=function () {
			me._marker_title14.style[domTransition]='none';
			me._marker_title14.style.visibility='inherit';
			me._marker_title14.ggVisible=true;
		}
		this._marker_node20.onmouseout=function () {
			me._marker_title14.style[domTransition]='none';
			me._marker_title14.style.visibility='hidden';
			me._marker_title14.ggVisible=false;
		}
		this._marker_node20.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title14=document.createElement('div');
		this._marker_title14__text=document.createElement('div');
		this._marker_title14.className='ggskin ggskin_textdiv';
		this._marker_title14.ggTextDiv=this._marker_title14__text;
		this._marker_title14.ggId="marker_title";
		this._marker_title14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title14.ggVisible=false;
		this._marker_title14.className='ggskin ggskin_text';
		this._marker_title14.ggType='text';
		this._marker_title14.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title14.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title14__text.setAttribute('style',hs);
		this._marker_title14__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 213<b>";
		this._marker_title14.appendChild(this._marker_title14__text);
		this._marker_node20.appendChild(this._marker_title14);
		this._map_2_floor_image.appendChild(this._marker_node20);
		this._marker_node21=document.createElement('div');
		this._marker_node21.ggId="marker_node21";
		this._marker_node21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node21.ggVisible=true;
		this._marker_node21.className='ggskin ggskin_mark';
		this._marker_node21.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 20px;';
		hs+='top:  73px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node21.setAttribute('style',hs);
		this._marker_node21.ggMarkerNodeId='{node21}';
		nodeMarker.push(this._marker_node21);
		this._marker_node21.onclick=function () {
			me.player.openNext('{node21}');
		}
		this._marker_node21.onmouseover=function () {
			me._marker_title13.style[domTransition]='none';
			me._marker_title13.style.visibility='inherit';
			me._marker_title13.ggVisible=true;
		}
		this._marker_node21.onmouseout=function () {
			me._marker_title13.style[domTransition]='none';
			me._marker_title13.style.visibility='hidden';
			me._marker_title13.ggVisible=false;
		}
		this._marker_node21.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title13=document.createElement('div');
		this._marker_title13__text=document.createElement('div');
		this._marker_title13.className='ggskin ggskin_textdiv';
		this._marker_title13.ggTextDiv=this._marker_title13__text;
		this._marker_title13.ggId="marker_title";
		this._marker_title13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title13.ggVisible=false;
		this._marker_title13.className='ggskin ggskin_text';
		this._marker_title13.ggType='text';
		this._marker_title13.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title13.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title13__text.setAttribute('style',hs);
		this._marker_title13__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 211<b>";
		this._marker_title13.appendChild(this._marker_title13__text);
		this._marker_node21.appendChild(this._marker_title13);
		this._map_2_floor_image.appendChild(this._marker_node21);
		this._marker_node22=document.createElement('div');
		this._marker_node22.ggId="marker_node22";
		this._marker_node22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node22.ggVisible=true;
		this._marker_node22.className='ggskin ggskin_mark';
		this._marker_node22.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  69px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node22.setAttribute('style',hs);
		this._marker_node22.ggMarkerNodeId='{node22}';
		nodeMarker.push(this._marker_node22);
		this._marker_node22.onclick=function () {
			me.player.openNext('{node22}');
		}
		this._marker_node22.onmouseover=function () {
			me._marker_title12.style[domTransition]='none';
			me._marker_title12.style.visibility='inherit';
			me._marker_title12.ggVisible=true;
		}
		this._marker_node22.onmouseout=function () {
			me._marker_title12.style[domTransition]='none';
			me._marker_title12.style.visibility='hidden';
			me._marker_title12.ggVisible=false;
		}
		this._marker_node22.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title12=document.createElement('div');
		this._marker_title12__text=document.createElement('div');
		this._marker_title12.className='ggskin ggskin_textdiv';
		this._marker_title12.ggTextDiv=this._marker_title12__text;
		this._marker_title12.ggId="marker_title";
		this._marker_title12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title12.ggVisible=false;
		this._marker_title12.className='ggskin ggskin_text';
		this._marker_title12.ggType='text';
		this._marker_title12.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title12.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title12__text.setAttribute('style',hs);
		this._marker_title12__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 211<b>";
		this._marker_title12.appendChild(this._marker_title12__text);
		this._marker_node22.appendChild(this._marker_title12);
		this._map_2_floor_image.appendChild(this._marker_node22);
		this._marker_node23=document.createElement('div');
		this._marker_node23.ggId="marker_node23";
		this._marker_node23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node23.ggVisible=true;
		this._marker_node23.className='ggskin ggskin_mark';
		this._marker_node23.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 20px;';
		hs+='top:  20px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node23.setAttribute('style',hs);
		this._marker_node23.ggMarkerNodeId='{node23}';
		nodeMarker.push(this._marker_node23);
		this._marker_node23.onclick=function () {
			me.player.openNext('{node23}');
		}
		this._marker_node23.onmouseover=function () {
			me._marker_title11.style[domTransition]='none';
			me._marker_title11.style.visibility='inherit';
			me._marker_title11.ggVisible=true;
		}
		this._marker_node23.onmouseout=function () {
			me._marker_title11.style[domTransition]='none';
			me._marker_title11.style.visibility='hidden';
			me._marker_title11.ggVisible=false;
		}
		this._marker_node23.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title11=document.createElement('div');
		this._marker_title11__text=document.createElement('div');
		this._marker_title11.className='ggskin ggskin_textdiv';
		this._marker_title11.ggTextDiv=this._marker_title11__text;
		this._marker_title11.ggId="marker_title";
		this._marker_title11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title11.ggVisible=false;
		this._marker_title11.className='ggskin ggskin_text';
		this._marker_title11.ggType='text';
		this._marker_title11.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title11.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title11__text.setAttribute('style',hs);
		this._marker_title11__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 208<b>";
		this._marker_title11.appendChild(this._marker_title11__text);
		this._marker_node23.appendChild(this._marker_title11);
		this._map_2_floor_image.appendChild(this._marker_node23);
		this._marker_node24=document.createElement('div');
		this._marker_node24.ggId="marker_node24";
		this._marker_node24.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node24.ggVisible=true;
		this._marker_node24.className='ggskin ggskin_mark';
		this._marker_node24.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  23px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node24.setAttribute('style',hs);
		this._marker_node24.ggMarkerNodeId='{node24}';
		nodeMarker.push(this._marker_node24);
		this._marker_node24.onclick=function () {
			me.player.openNext('{node24}');
		}
		this._marker_node24.onmouseover=function () {
			me._marker_title10.style[domTransition]='none';
			me._marker_title10.style.visibility='inherit';
			me._marker_title10.ggVisible=true;
		}
		this._marker_node24.onmouseout=function () {
			me._marker_title10.style[domTransition]='none';
			me._marker_title10.style.visibility='hidden';
			me._marker_title10.ggVisible=false;
		}
		this._marker_node24.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title10=document.createElement('div');
		this._marker_title10__text=document.createElement('div');
		this._marker_title10.className='ggskin ggskin_textdiv';
		this._marker_title10.ggTextDiv=this._marker_title10__text;
		this._marker_title10.ggId="marker_title";
		this._marker_title10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title10.ggVisible=false;
		this._marker_title10.className='ggskin ggskin_text';
		this._marker_title10.ggType='text';
		this._marker_title10.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title10.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title10__text.setAttribute('style',hs);
		this._marker_title10__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 208<b>";
		this._marker_title10.appendChild(this._marker_title10__text);
		this._marker_node24.appendChild(this._marker_title10);
		this._map_2_floor_image.appendChild(this._marker_node24);
		this._marker_node25=document.createElement('div');
		this._marker_node25.ggId="marker_node25";
		this._marker_node25.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node25.ggVisible=true;
		this._marker_node25.className='ggskin ggskin_mark';
		this._marker_node25.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 20px;';
		hs+='top:  4px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node25.setAttribute('style',hs);
		this._marker_node25.ggMarkerNodeId='{node25}';
		nodeMarker.push(this._marker_node25);
		this._marker_node25.onclick=function () {
			me.player.openNext('{node25}');
		}
		this._marker_node25.onmouseover=function () {
			me._marker_title9.style[domTransition]='none';
			me._marker_title9.style.visibility='inherit';
			me._marker_title9.ggVisible=true;
		}
		this._marker_node25.onmouseout=function () {
			me._marker_title9.style[domTransition]='none';
			me._marker_title9.style.visibility='hidden';
			me._marker_title9.ggVisible=false;
		}
		this._marker_node25.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title9=document.createElement('div');
		this._marker_title9__text=document.createElement('div');
		this._marker_title9.className='ggskin ggskin_textdiv';
		this._marker_title9.ggTextDiv=this._marker_title9__text;
		this._marker_title9.ggId="marker_title";
		this._marker_title9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title9.ggVisible=false;
		this._marker_title9.className='ggskin ggskin_text';
		this._marker_title9.ggType='text';
		this._marker_title9.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title9.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title9__text.setAttribute('style',hs);
		this._marker_title9__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 207<b>";
		this._marker_title9.appendChild(this._marker_title9__text);
		this._marker_node25.appendChild(this._marker_title9);
		this._map_2_floor_image.appendChild(this._marker_node25);
		this._marker_node16=document.createElement('div');
		this._marker_node16.ggId="marker_node16";
		this._marker_node16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node16.ggVisible=true;
		this._marker_node16.className='ggskin ggskin_mark';
		this._marker_node16.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 54px;';
		hs+='top:  152px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node16.setAttribute('style',hs);
		this._marker_node16.ggMarkerNodeId='{node16}';
		nodeMarker.push(this._marker_node16);
		this._marker_node16.onclick=function () {
			me.player.openNext('{node16}');
		}
		this._marker_node16.onmouseover=function () {
			me._marker_title8.style[domTransition]='none';
			me._marker_title8.style.visibility='inherit';
			me._marker_title8.ggVisible=true;
		}
		this._marker_node16.onmouseout=function () {
			me._marker_title8.style[domTransition]='none';
			me._marker_title8.style.visibility='hidden';
			me._marker_title8.ggVisible=false;
		}
		this._marker_node16.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title8=document.createElement('div');
		this._marker_title8__text=document.createElement('div');
		this._marker_title8.className='ggskin ggskin_textdiv';
		this._marker_title8.ggTextDiv=this._marker_title8__text;
		this._marker_title8.ggId="marker_title";
		this._marker_title8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title8.ggVisible=false;
		this._marker_title8.className='ggskin ggskin_text';
		this._marker_title8.ggType='text';
		this._marker_title8.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title8.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title8__text.setAttribute('style',hs);
		this._marker_title8__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 215<b>";
		this._marker_title8.appendChild(this._marker_title8__text);
		this._marker_node16.appendChild(this._marker_title8);
		this._map_2_floor_image.appendChild(this._marker_node16);
		this._marker_node8=document.createElement('div');
		this._marker_node8.ggId="marker_node8";
		this._marker_node8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node8.ggVisible=true;
		this._marker_node8.className='ggskin ggskin_mark';
		this._marker_node8.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 94px;';
		hs+='top:  154px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node8.setAttribute('style',hs);
		this._marker_node8.ggMarkerNodeId='{node8}';
		nodeMarker.push(this._marker_node8);
		this._marker_node8.onclick=function () {
			me.player.openNext('{node8}');
		}
		this._marker_node8.onmouseover=function () {
			me._marker_title7.style[domTransition]='none';
			me._marker_title7.style.visibility='inherit';
			me._marker_title7.ggVisible=true;
		}
		this._marker_node8.onmouseout=function () {
			me._marker_title7.style[domTransition]='none';
			me._marker_title7.style.visibility='hidden';
			me._marker_title7.ggVisible=false;
		}
		this._marker_node8.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title7=document.createElement('div');
		this._marker_title7__text=document.createElement('div');
		this._marker_title7.className='ggskin ggskin_textdiv';
		this._marker_title7.ggTextDiv=this._marker_title7__text;
		this._marker_title7.ggId="marker_title";
		this._marker_title7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title7.ggVisible=false;
		this._marker_title7.className='ggskin ggskin_text';
		this._marker_title7.ggType='text';
		this._marker_title7.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title7.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title7__text.setAttribute('style',hs);
		this._marker_title7__text.innerHTML="<b>\u0425\u043e\u043b\u043b 2-\u043e\u0439 \u044d\u0442\u0430\u0436<b>";
		this._marker_title7.appendChild(this._marker_title7__text);
		this._marker_node8.appendChild(this._marker_title7);
		this._map_2_floor_image.appendChild(this._marker_node8);
		this._marker_node31=document.createElement('div');
		this._marker_node31.ggId="marker_node31";
		this._marker_node31.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node31.ggVisible=true;
		this._marker_node31.className='ggskin ggskin_mark';
		this._marker_node31.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 99px;';
		hs+='top:  85px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node31.setAttribute('style',hs);
		this._marker_node31.ggMarkerNodeId='{node31}';
		nodeMarker.push(this._marker_node31);
		this._marker_node31.onclick=function () {
			me.player.openNext('{node31}');
		}
		this._marker_node31.onmouseover=function () {
			me._marker_title6.style[domTransition]='none';
			me._marker_title6.style.visibility='inherit';
			me._marker_title6.ggVisible=true;
		}
		this._marker_node31.onmouseout=function () {
			me._marker_title6.style[domTransition]='none';
			me._marker_title6.style.visibility='hidden';
			me._marker_title6.ggVisible=false;
		}
		this._marker_node31.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title6=document.createElement('div');
		this._marker_title6__text=document.createElement('div');
		this._marker_title6.className='ggskin ggskin_textdiv';
		this._marker_title6.ggTextDiv=this._marker_title6__text;
		this._marker_title6.ggId="marker_title";
		this._marker_title6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title6.ggVisible=false;
		this._marker_title6.className='ggskin ggskin_text';
		this._marker_title6.ggType='text';
		this._marker_title6.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title6.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title6__text.setAttribute('style',hs);
		this._marker_title6__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 202<b>";
		this._marker_title6.appendChild(this._marker_title6__text);
		this._marker_node31.appendChild(this._marker_title6);
		this._map_2_floor_image.appendChild(this._marker_node31);
		this._marker_node32=document.createElement('div');
		this._marker_node32.ggId="marker_node32";
		this._marker_node32.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node32.ggVisible=true;
		this._marker_node32.className='ggskin ggskin_mark';
		this._marker_node32.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 82px;';
		hs+='top:  93px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node32.setAttribute('style',hs);
		this._marker_node32.ggMarkerNodeId='{node32}';
		nodeMarker.push(this._marker_node32);
		this._marker_node32.onclick=function () {
			me.player.openNext('{node32}');
		}
		this._marker_node32.onmouseover=function () {
			me._marker_title5.style[domTransition]='none';
			me._marker_title5.style.visibility='inherit';
			me._marker_title5.ggVisible=true;
		}
		this._marker_node32.onmouseout=function () {
			me._marker_title5.style[domTransition]='none';
			me._marker_title5.style.visibility='hidden';
			me._marker_title5.ggVisible=false;
		}
		this._marker_node32.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title5=document.createElement('div');
		this._marker_title5__text=document.createElement('div');
		this._marker_title5.className='ggskin ggskin_textdiv';
		this._marker_title5.ggTextDiv=this._marker_title5__text;
		this._marker_title5.ggId="marker_title";
		this._marker_title5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title5.ggVisible=false;
		this._marker_title5.className='ggskin ggskin_text';
		this._marker_title5.ggType='text';
		this._marker_title5.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title5.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title5__text.setAttribute('style',hs);
		this._marker_title5__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 202<b>";
		this._marker_title5.appendChild(this._marker_title5__text);
		this._marker_node32.appendChild(this._marker_title5);
		this._map_2_floor_image.appendChild(this._marker_node32);
		this._marker_node33=document.createElement('div');
		this._marker_node33.ggId="marker_node33";
		this._marker_node33.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node33.ggVisible=true;
		this._marker_node33.className='ggskin ggskin_mark';
		this._marker_node33.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 96px;';
		hs+='top:  65px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node33.setAttribute('style',hs);
		this._marker_node33.ggMarkerNodeId='{node33}';
		nodeMarker.push(this._marker_node33);
		this._marker_node33.onclick=function () {
			me.player.openNext('{node33}');
		}
		this._marker_node33.onmouseover=function () {
			me._marker_title4.style[domTransition]='none';
			me._marker_title4.style.visibility='inherit';
			me._marker_title4.ggVisible=true;
		}
		this._marker_node33.onmouseout=function () {
			me._marker_title4.style[domTransition]='none';
			me._marker_title4.style.visibility='hidden';
			me._marker_title4.ggVisible=false;
		}
		this._marker_node33.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title4=document.createElement('div');
		this._marker_title4__text=document.createElement('div');
		this._marker_title4.className='ggskin ggskin_textdiv';
		this._marker_title4.ggTextDiv=this._marker_title4__text;
		this._marker_title4.ggId="marker_title";
		this._marker_title4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title4.ggVisible=false;
		this._marker_title4.className='ggskin ggskin_text';
		this._marker_title4.ggType='text';
		this._marker_title4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title4.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title4__text.setAttribute('style',hs);
		this._marker_title4__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 203<br\/><b>";
		this._marker_title4.appendChild(this._marker_title4__text);
		this._marker_node33.appendChild(this._marker_title4);
		this._map_2_floor_image.appendChild(this._marker_node33);
		this._marker_node34=document.createElement('div');
		this._marker_node34.ggId="marker_node34";
		this._marker_node34.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node34.ggVisible=true;
		this._marker_node34.className='ggskin ggskin_mark';
		this._marker_node34.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 78px;';
		hs+='top:  69px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node34.setAttribute('style',hs);
		this._marker_node34.ggMarkerNodeId='{node34}';
		nodeMarker.push(this._marker_node34);
		this._marker_node34.onclick=function () {
			me.player.openNext('{node34}');
		}
		this._marker_node34.onmouseover=function () {
			me._marker_title3.style[domTransition]='none';
			me._marker_title3.style.visibility='inherit';
			me._marker_title3.ggVisible=true;
		}
		this._marker_node34.onmouseout=function () {
			me._marker_title3.style[domTransition]='none';
			me._marker_title3.style.visibility='hidden';
			me._marker_title3.ggVisible=false;
		}
		this._marker_node34.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title3=document.createElement('div');
		this._marker_title3__text=document.createElement('div');
		this._marker_title3.className='ggskin ggskin_textdiv';
		this._marker_title3.ggTextDiv=this._marker_title3__text;
		this._marker_title3.ggId="marker_title";
		this._marker_title3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title3.ggVisible=false;
		this._marker_title3.className='ggskin ggskin_text';
		this._marker_title3.ggType='text';
		this._marker_title3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title3.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title3__text.setAttribute('style',hs);
		this._marker_title3__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 203<b>";
		this._marker_title3.appendChild(this._marker_title3__text);
		this._marker_node34.appendChild(this._marker_title3);
		this._map_2_floor_image.appendChild(this._marker_node34);
		this._marker_node35=document.createElement('div');
		this._marker_node35.ggId="marker_node35";
		this._marker_node35.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node35.ggVisible=true;
		this._marker_node35.className='ggskin ggskin_mark';
		this._marker_node35.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 21px;';
		hs+='top:  38px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node35.setAttribute('style',hs);
		this._marker_node35.ggMarkerNodeId='{node35}';
		nodeMarker.push(this._marker_node35);
		this._marker_node35.onclick=function () {
			me.player.openNext('{node35}');
		}
		this._marker_node35.onmouseover=function () {
			me._marker_title2.style[domTransition]='none';
			me._marker_title2.style.visibility='inherit';
			me._marker_title2.ggVisible=true;
		}
		this._marker_node35.onmouseout=function () {
			me._marker_title2.style[domTransition]='none';
			me._marker_title2.style.visibility='hidden';
			me._marker_title2.ggVisible=false;
		}
		this._marker_node35.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title2=document.createElement('div');
		this._marker_title2__text=document.createElement('div');
		this._marker_title2.className='ggskin ggskin_textdiv';
		this._marker_title2.ggTextDiv=this._marker_title2__text;
		this._marker_title2.ggId="marker_title";
		this._marker_title2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title2.ggVisible=false;
		this._marker_title2.className='ggskin ggskin_text';
		this._marker_title2.ggType='text';
		this._marker_title2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title2.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title2__text.setAttribute('style',hs);
		this._marker_title2__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 209<b>";
		this._marker_title2.appendChild(this._marker_title2__text);
		this._marker_node35.appendChild(this._marker_title2);
		this._map_2_floor_image.appendChild(this._marker_node35);
		this._marker_node36=document.createElement('div');
		this._marker_node36.ggId="marker_node36";
		this._marker_node36.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node36.ggVisible=true;
		this._marker_node36.className='ggskin ggskin_mark';
		this._marker_node36.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 39px;';
		hs+='top:  34px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node36.setAttribute('style',hs);
		this._marker_node36.ggMarkerNodeId='{node36}';
		nodeMarker.push(this._marker_node36);
		this._marker_node36.onclick=function () {
			me.player.openNext('{node36}');
		}
		this._marker_node36.onmouseover=function () {
			me._marker_title1.style[domTransition]='none';
			me._marker_title1.style.visibility='inherit';
			me._marker_title1.ggVisible=true;
		}
		this._marker_node36.onmouseout=function () {
			me._marker_title1.style[domTransition]='none';
			me._marker_title1.style.visibility='hidden';
			me._marker_title1.ggVisible=false;
		}
		this._marker_node36.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title1=document.createElement('div');
		this._marker_title1__text=document.createElement('div');
		this._marker_title1.className='ggskin ggskin_textdiv';
		this._marker_title1.ggTextDiv=this._marker_title1__text;
		this._marker_title1.ggId="marker_title";
		this._marker_title1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title1.ggVisible=false;
		this._marker_title1.className='ggskin ggskin_text';
		this._marker_title1.ggType='text';
		this._marker_title1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title1__text.setAttribute('style',hs);
		this._marker_title1__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 209<b>";
		this._marker_title1.appendChild(this._marker_title1__text);
		this._marker_node36.appendChild(this._marker_title1);
		this._map_2_floor_image.appendChild(this._marker_node36);
		this._marker_node37=document.createElement('div');
		this._marker_node37.ggId="marker_node37";
		this._marker_node37.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node37.ggVisible=true;
		this._marker_node37.className='ggskin ggskin_mark';
		this._marker_node37.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 21px;';
		hs+='top:  54px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node37.setAttribute('style',hs);
		this._marker_node37.ggMarkerNodeId='{node37}';
		nodeMarker.push(this._marker_node37);
		this._marker_node37.onclick=function () {
			me.player.openNext('{node37}');
		}
		this._marker_node37.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='inherit';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node37.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._marker_node37.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title0=document.createElement('div');
		this._marker_title0__text=document.createElement('div');
		this._marker_title0.className='ggskin ggskin_textdiv';
		this._marker_title0.ggTextDiv=this._marker_title0__text;
		this._marker_title0.ggId="marker_title";
		this._marker_title0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title0.ggVisible=false;
		this._marker_title0.className='ggskin ggskin_text';
		this._marker_title0.ggType='text';
		this._marker_title0.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title0.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title0__text.setAttribute('style',hs);
		this._marker_title0__text.innerHTML="<b>\u041d\u043e\u043c\u0435\u0440 210<b>";
		this._marker_title0.appendChild(this._marker_title0__text);
		this._marker_node37.appendChild(this._marker_title0);
		this._map_2_floor_image.appendChild(this._marker_node37);
		this._marker_node38=document.createElement('div');
		this._marker_node38.ggId="marker_node38";
		this._marker_node38.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node38.ggVisible=true;
		this._marker_node38.className='ggskin ggskin_mark';
		this._marker_node38.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  57px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._marker_node38.setAttribute('style',hs);
		this._marker_node38.ggMarkerNodeId='{node38}';
		nodeMarker.push(this._marker_node38);
		this._marker_node38.onclick=function () {
			me.player.openNext('{node38}');
		}
		this._marker_node38.onmouseover=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='inherit';
			me._marker_title.ggVisible=true;
		}
		this._marker_node38.onmouseout=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
		}
		this._marker_node38.ggActivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.visibility='inherit';
			me.__.ggVisible=true;
		}
		this._marker_title=document.createElement('div');
		this._marker_title__text=document.createElement('div');
		this._marker_title.className='ggskin ggskin_textdiv';
		this._marker_title.ggTextDiv=this._marker_title__text;
		this._marker_title.ggId="marker_title";
		this._marker_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title.ggVisible=false;
		this._marker_title.className='ggskin ggskin_text';
		this._marker_title.ggType='text';
		this._marker_title.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -44px;';
		hs+='top:  20px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._marker_title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title__text.setAttribute('style',hs);
		this._marker_title__text.innerHTML="<b>\u0414\u0443\u0448\u0435\u0432\u0430\u044f 210<b>";
		this._marker_title.appendChild(this._marker_title__text);
		this._marker_node38.appendChild(this._marker_title);
		this._map_2_floor_image.appendChild(this._marker_node38);
		this._map_2_floor.appendChild(this._map_2_floor_image);
		this.divSkin.appendChild(this._map_2_floor);
		this.__53=document.createElement('div');
		this.__53.ggId="\u041c\u0430\u0440\u043a\u0435\u0440 53";
		this.__53.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__53.ggVisible=true;
		this.__53.className='ggskin ggskin_mark';
		this.__53.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 239px;';
		hs+='top:  18px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__53.setAttribute('style',hs);
		this.__53.ggMarkerNodeId='floor_1';
		nodeMarker.push(this.__53);
		this.__53.onclick=function () {
			me.player.openNext('floor_1');
		}
		this.__53.ggActivate=function () {
			me._map_1_floor.style[domTransition]='none';
			me._map_1_floor.style.visibility='inherit';
			me._map_1_floor.ggVisible=true;
		}
		this.__53.ggDeactivate=function () {
			me._map_1_floor.style[domTransition]='none';
			me._map_1_floor.style.visibility='hidden';
			me._map_1_floor.ggVisible=false;
		}
		this.__530=document.createElement('div');
		this.__530.ggId="\u041c\u0430\u0440\u043a\u0435\u0440 53";
		this.__530.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__530.ggVisible=true;
		this.__530.className='ggskin ggskin_mark';
		this.__530.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 43px;';
		hs+='top:  -2px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__530.setAttribute('style',hs);
		this.__530.ggMarkerNodeId='floor_2';
		nodeMarker.push(this.__530);
		this.__530.onclick=function () {
			me.player.openNext('floor_2');
		}
		this.__530.ggActivate=function () {
			me._map_2_floor.style[domTransition]='none';
			me._map_2_floor.style.visibility='inherit';
			me._map_2_floor.ggVisible=true;
		}
		this.__530.ggDeactivate=function () {
			me._map_2_floor.style[domTransition]='none';
			me._map_2_floor.style.visibility='hidden';
			me._map_2_floor.ggVisible=false;
		}
		this.__53.appendChild(this.__530);
		this.divSkin.appendChild(this.__53);
		this._preview_group=document.createElement('div');
		this._preview_group.ggId="preview_group";
		this._preview_group.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._preview_group.ggVisible=true;
		this._preview_group.className='ggskin ggskin_container';
		this._preview_group.ggType='container';
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  216px;';
		hs+='width: 125px;';
		hs+='height: 75px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._preview_group.setAttribute('style',hs);
		this._preview1=document.createElement('div');
		this._preview1.ggId="preview-1";
		this._preview1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._preview1.ggVisible=true;
		this._preview1.className='ggskin ggskin_image';
		this._preview1.ggType='image';
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  5px;';
		hs+='width: 120px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._preview1.setAttribute('style',hs);
		this._preview1__img=document.createElement('img');
		this._preview1__img.className='ggskin ggskin_image';
		this._preview1__img.setAttribute('src',basePath + 'imagestour/preview1.png');
		this._preview1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._preview1__img.className='ggskin ggskin_image';
		this._preview1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._preview1__img);
		this._preview1.appendChild(this._preview1__img);
		this._preview_group.appendChild(this._preview1);
		this._preview2=document.createElement('div');
		this._preview2.ggId="preview-2";
		this._preview2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._preview2.ggVisible=true;
		this._preview2.className='ggskin ggskin_image';
		this._preview2.ggType='image';
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  5px;';
		hs+='width: 120px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._preview2.setAttribute('style',hs);
		this._preview2__img=document.createElement('img');
		this._preview2__img.className='ggskin ggskin_image';
		this._preview2__img.setAttribute('src',basePath + 'imagestour/preview2.png');
		this._preview2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._preview2__img.className='ggskin ggskin_image';
		this._preview2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._preview2__img);
		this._preview2.appendChild(this._preview2__img);
		this._preview_group.appendChild(this._preview2);
		this.divSkin.appendChild(this._preview_group);
		this._menu_buttons=document.createElement('div');
		this._menu_buttons.ggId="menu_buttons";
		this._menu_buttons.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_buttons.ggVisible=true;
		this._menu_buttons.className='ggskin ggskin_container';
		this._menu_buttons.ggType='container';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  281px;';
		hs+='width: 131px;';
		hs+='height: 225px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_buttons.setAttribute('style',hs);
		this.__110=document.createElement('div');
		this.__110.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 110";
		this.__110.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__110.ggVisible=true;
		this.__110.className='ggskin ggskin_button';
		this.__110.ggType='button';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  6px;';
		hs+='width: 122px;';
		hs+='height: 26px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__110.setAttribute('style',hs);
		this.__110__img=document.createElement('img');
		this.__110__img.className='ggskin ggskin_button';
		this.__110__img.setAttribute('src',basePath + 'imagestour/_110.png');
		this.__110__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__110__img.className='ggskin ggskin_button';
		this.__110__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__110__img);
		this.__110.appendChild(this.__110__img);
		this.__110.onclick=function () {
			me._marker_node1.onclick();
		}
		this.__110.onmouseover=function () {
			me.__110__img.src=basePath + 'imagestour/_110__o.png';
			me.__110.ggIsOver=true;
		}
		this.__110.onmouseout=function () {
			me.__110__img.src=basePath + 'imagestour/_110.png';
			me.__110.ggIsOver=false;
		}
		this.__110.onmousedown=function () {
			me.__110__img.src=basePath + 'imagestour/_110__a.png';
		}
		this.__110.onmouseup=function () {
			if (me.__110.ggIsOver) {
				me.__110__img.src=basePath + 'imagestour/_110__o.png';
			} else {
				me.__110__img.src=basePath + 'imagestour/_110.png';
			}
		}
		this._menu_buttons.appendChild(this.__110);
		this.__111=document.createElement('div');
		this.__111.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 111";
		this.__111.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__111.ggVisible=true;
		this.__111.className='ggskin ggskin_button';
		this.__111.ggType='button';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  34px;';
		hs+='width: 122px;';
		hs+='height: 26px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__111.setAttribute('style',hs);
		this.__111__img=document.createElement('img');
		this.__111__img.className='ggskin ggskin_button';
		this.__111__img.setAttribute('src',basePath + 'imagestour/_111.png');
		this.__111__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__111__img.className='ggskin ggskin_button';
		this.__111__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__111__img);
		this.__111.appendChild(this.__111__img);
		this.__111.onclick=function () {
			me._marker_node8.onclick();
		}
		this.__111.onmouseover=function () {
			me.__111__img.src=basePath + 'imagestour/_111__o.png';
			me.__111.ggIsOver=true;
		}
		this.__111.onmouseout=function () {
			me.__111__img.src=basePath + 'imagestour/_111.png';
			me.__111.ggIsOver=false;
		}
		this.__111.onmousedown=function () {
			me.__111__img.src=basePath + 'imagestour/_111__a.png';
		}
		this.__111.onmouseup=function () {
			if (me.__111.ggIsOver) {
				me.__111__img.src=basePath + 'imagestour/_111__o.png';
			} else {
				me.__111__img.src=basePath + 'imagestour/_111.png';
			}
		}
		this._menu_buttons.appendChild(this.__111);
		this.__112=document.createElement('div');
		this.__112.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 112";
		this.__112.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__112.ggVisible=true;
		this.__112.className='ggskin ggskin_button';
		this.__112.ggType='button';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  62px;';
		hs+='width: 122px;';
		hs+='height: 26px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__112.setAttribute('style',hs);
		this.__112__img=document.createElement('img');
		this.__112__img.className='ggskin ggskin_button';
		this.__112__img.setAttribute('src',basePath + 'imagestour/_112.png');
		this.__112__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__112__img.className='ggskin ggskin_button';
		this.__112__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__112__img);
		this.__112.appendChild(this.__112__img);
		this.__112.onclick=function () {
			me._marker_node3.onclick();
		}
		this.__112.onmouseover=function () {
			me.__112__img.src=basePath + 'imagestour/_112__o.png';
			me.__112.ggIsOver=true;
		}
		this.__112.onmouseout=function () {
			me.__112__img.src=basePath + 'imagestour/_112.png';
			me.__112.ggIsOver=false;
		}
		this.__112.onmousedown=function () {
			me.__112__img.src=basePath + 'imagestour/_112__a.png';
		}
		this.__112.onmouseup=function () {
			if (me.__112.ggIsOver) {
				me.__112__img.src=basePath + 'imagestour/_112__o.png';
			} else {
				me.__112__img.src=basePath + 'imagestour/_112.png';
			}
		}
		this._menu_buttons.appendChild(this.__112);
		this.__113=document.createElement('div');
		this.__113.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 113";
		this.__113.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__113.ggVisible=true;
		this.__113.className='ggskin ggskin_button';
		this.__113.ggType='button';
		hs ='position:absolute;';
		hs+='left: 3px;';
		hs+='top:  90px;';
		hs+='width: 122px;';
		hs+='height: 26px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__113.setAttribute('style',hs);
		this.__113__img=document.createElement('img');
		this.__113__img.className='ggskin ggskin_button';
		this.__113__img.setAttribute('src',basePath + 'imagestour/_113.png');
		this.__113__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__113__img.className='ggskin ggskin_button';
		this.__113__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__113__img);
		this.__113.appendChild(this.__113__img);
		this.__113.onclick=function () {
			me._marker_node31.onclick();
		}
		this.__113.onmouseover=function () {
			me.__113__img.src=basePath + 'imagestour/_113__o.png';
			me.__113.ggIsOver=true;
		}
		this.__113.onmouseout=function () {
			me.__113__img.src=basePath + 'imagestour/_113.png';
			me.__113.ggIsOver=false;
		}
		this.__113.onmousedown=function () {
			me.__113__img.src=basePath + 'imagestour/_113__a.png';
		}
		this.__113.onmouseup=function () {
			if (me.__113.ggIsOver) {
				me.__113__img.src=basePath + 'imagestour/_113__o.png';
			} else {
				me.__113__img.src=basePath + 'imagestour/_113.png';
			}
		}
		this._menu_buttons.appendChild(this.__113);
		this.__114=document.createElement('div');
		this.__114.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 114";
		this.__114.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__114.ggVisible=true;
		this.__114.className='ggskin ggskin_button';
		this.__114.ggType='button';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  118px;';
		hs+='width: 122px;';
		hs+='height: 26px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__114.setAttribute('style',hs);
		this.__114__img=document.createElement('img');
		this.__114__img.className='ggskin ggskin_button';
		this.__114__img.setAttribute('src',basePath + 'imagestour/_114.png');
		this.__114__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__114__img.className='ggskin ggskin_button';
		this.__114__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__114__img);
		this.__114.appendChild(this.__114__img);
		this.__114.onclick=function () {
			me._marker_node27.onclick();
		}
		this.__114.onmouseover=function () {
			me.__114__img.src=basePath + 'imagestour/_114__o.png';
			me.__114.ggIsOver=true;
		}
		this.__114.onmouseout=function () {
			me.__114__img.src=basePath + 'imagestour/_114.png';
			me.__114.ggIsOver=false;
		}
		this.__114.onmousedown=function () {
			me.__114__img.src=basePath + 'imagestour/_114__a.png';
		}
		this.__114.onmouseup=function () {
			if (me.__114.ggIsOver) {
				me.__114__img.src=basePath + 'imagestour/_114__o.png';
			} else {
				me.__114__img.src=basePath + 'imagestour/_114.png';
			}
		}
		this._menu_buttons.appendChild(this.__114);
		this.__115=document.createElement('div');
		this.__115.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 115";
		this.__115.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__115.ggVisible=true;
		this.__115.className='ggskin ggskin_button';
		this.__115.ggType='button';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  146px;';
		hs+='width: 122px;';
		hs+='height: 26px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__115.setAttribute('style',hs);
		this.__115__img=document.createElement('img');
		this.__115__img.className='ggskin ggskin_button';
		this.__115__img.setAttribute('src',basePath + 'imagestour/_115.png');
		this.__115__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__115__img.className='ggskin ggskin_button';
		this.__115__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__115__img);
		this.__115.appendChild(this.__115__img);
		this.__115.onclick=function () {
			me._marker_node15.onclick();
		}
		this.__115.onmouseover=function () {
			me.__115__img.src=basePath + 'imagestour/_115__o.png';
			me.__115.ggIsOver=true;
		}
		this.__115.onmouseout=function () {
			me.__115__img.src=basePath + 'imagestour/_115.png';
			me.__115.ggIsOver=false;
		}
		this.__115.onmousedown=function () {
			me.__115__img.src=basePath + 'imagestour/_115__a.png';
		}
		this.__115.onmouseup=function () {
			if (me.__115.ggIsOver) {
				me.__115__img.src=basePath + 'imagestour/_115__o.png';
			} else {
				me.__115__img.src=basePath + 'imagestour/_115.png';
			}
		}
		this._menu_buttons.appendChild(this.__115);
		this.divSkin.appendChild(this._menu_buttons);
		this._tt_hidemap_goto_moreturov=document.createElement('div');
		this._tt_hidemap_goto_moreturov__text=document.createElement('div');
		this._tt_hidemap_goto_moreturov.className='ggskin ggskin_textdiv';
		this._tt_hidemap_goto_moreturov.ggTextDiv=this._tt_hidemap_goto_moreturov__text;
		this._tt_hidemap_goto_moreturov.ggId="tt_hidemap_goto_moreturov";
		this._tt_hidemap_goto_moreturov.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_hidemap_goto_moreturov.ggVisible=false;
		this._tt_hidemap_goto_moreturov.className='ggskin ggskin_text';
		this._tt_hidemap_goto_moreturov.ggType='text';
		this._tt_hidemap_goto_moreturov.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-326 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-51 + h) + 'px';
			}
			this.ggTextDiv.style.left=(0 + (321-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -326px;';
		hs+='top:  -51px;';
		hs+='width: 319px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_hidemap_goto_moreturov.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffff7f;';
		hs+='border: 1px solid #aa0000;';
		hs+='color: #aa0000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_hidemap_goto_moreturov__text.setAttribute('style',hs);
		this._tt_hidemap_goto_moreturov__text.innerHTML="<b>\u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442 \u041c\u041e\u0420\u0415\u0422\u0423\u0420\u041e\u0412.\u041e\u041d\u041b\u0410\u0419\u041d<b>";
		this._tt_hidemap_goto_moreturov.appendChild(this._tt_hidemap_goto_moreturov__text);
		this.divSkin.appendChild(this._tt_hidemap_goto_moreturov);
		me._btn_fullscrout.style[domTransition]='none';
		me._btn_fullscrout.style.visibility='hidden';
		me._btn_fullscrout.ggVisible=false;
		me._btn_showmap.style[domTransition]='none';
		me._btn_showmap.style.visibility='hidden';
		me._btn_showmap.ggVisible=false;
		this._markertemplate__normal=this._marker_normal.cloneNode(true);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left=0;
		this._markertemplate__normal.style.top=0;
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=this._marker_active.cloneNode(true);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left=0;
		this._markertemplate__active.style.top=0;
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this._marker_node1__normal=this._marker_normal.cloneNode(true);
		this._marker_node1__normal.style.visibility='inherit';
		this._marker_node1__normal.style.left=0;
		this._marker_node1__normal.style.top=0;
		this._marker_node1.ggMarkerNormal=this._marker_node1__normal;
		this._marker_node1__active=this._marker_active.cloneNode(true);
		this._marker_node1__active.style.visibility='hidden';
		this._marker_node1__active.style.left=0;
		this._marker_node1__active.style.top=0;
		this._marker_node1.ggMarkerActive=this._marker_node1__active;
		if (this._marker_node1.firstChild) {
			this._marker_node1.insertBefore(this._marker_node1__active,this._marker_node1.firstChild);
		} else {
			this._marker_node1.appendChild(this._marker_node1__active);
		}
		if (this._marker_node1.firstChild) {
			this._marker_node1.insertBefore(this._marker_node1__normal,this._marker_node1.firstChild);
		} else {
			this._marker_node1.appendChild(this._marker_node1__normal);
		}
		this._marker_node2__normal=this._marker_normal.cloneNode(true);
		this._marker_node2__normal.style.visibility='inherit';
		this._marker_node2__normal.style.left=0;
		this._marker_node2__normal.style.top=0;
		this._marker_node2.ggMarkerNormal=this._marker_node2__normal;
		this._marker_node2__active=this._marker_active.cloneNode(true);
		this._marker_node2__active.style.visibility='hidden';
		this._marker_node2__active.style.left=0;
		this._marker_node2__active.style.top=0;
		this._marker_node2.ggMarkerActive=this._marker_node2__active;
		if (this._marker_node2.firstChild) {
			this._marker_node2.insertBefore(this._marker_node2__active,this._marker_node2.firstChild);
		} else {
			this._marker_node2.appendChild(this._marker_node2__active);
		}
		if (this._marker_node2.firstChild) {
			this._marker_node2.insertBefore(this._marker_node2__normal,this._marker_node2.firstChild);
		} else {
			this._marker_node2.appendChild(this._marker_node2__normal);
		}
		this._marker_node3__normal=this._marker_normal.cloneNode(true);
		this._marker_node3__normal.style.visibility='inherit';
		this._marker_node3__normal.style.left=0;
		this._marker_node3__normal.style.top=0;
		this._marker_node3.ggMarkerNormal=this._marker_node3__normal;
		this._marker_node3__active=this._marker_active.cloneNode(true);
		this._marker_node3__active.style.visibility='hidden';
		this._marker_node3__active.style.left=0;
		this._marker_node3__active.style.top=0;
		this._marker_node3.ggMarkerActive=this._marker_node3__active;
		if (this._marker_node3.firstChild) {
			this._marker_node3.insertBefore(this._marker_node3__active,this._marker_node3.firstChild);
		} else {
			this._marker_node3.appendChild(this._marker_node3__active);
		}
		if (this._marker_node3.firstChild) {
			this._marker_node3.insertBefore(this._marker_node3__normal,this._marker_node3.firstChild);
		} else {
			this._marker_node3.appendChild(this._marker_node3__normal);
		}
		this._marker_node4__normal=this._marker_normal.cloneNode(true);
		this._marker_node4__normal.style.visibility='inherit';
		this._marker_node4__normal.style.left=0;
		this._marker_node4__normal.style.top=0;
		this._marker_node4.ggMarkerNormal=this._marker_node4__normal;
		this._marker_node4__active=this._marker_active.cloneNode(true);
		this._marker_node4__active.style.visibility='hidden';
		this._marker_node4__active.style.left=0;
		this._marker_node4__active.style.top=0;
		this._marker_node4.ggMarkerActive=this._marker_node4__active;
		if (this._marker_node4.firstChild) {
			this._marker_node4.insertBefore(this._marker_node4__active,this._marker_node4.firstChild);
		} else {
			this._marker_node4.appendChild(this._marker_node4__active);
		}
		if (this._marker_node4.firstChild) {
			this._marker_node4.insertBefore(this._marker_node4__normal,this._marker_node4.firstChild);
		} else {
			this._marker_node4.appendChild(this._marker_node4__normal);
		}
		this._marker_node5__normal=this._marker_normal.cloneNode(true);
		this._marker_node5__normal.style.visibility='inherit';
		this._marker_node5__normal.style.left=0;
		this._marker_node5__normal.style.top=0;
		this._marker_node5.ggMarkerNormal=this._marker_node5__normal;
		this._marker_node5__active=this._marker_active.cloneNode(true);
		this._marker_node5__active.style.visibility='hidden';
		this._marker_node5__active.style.left=0;
		this._marker_node5__active.style.top=0;
		this._marker_node5.ggMarkerActive=this._marker_node5__active;
		if (this._marker_node5.firstChild) {
			this._marker_node5.insertBefore(this._marker_node5__active,this._marker_node5.firstChild);
		} else {
			this._marker_node5.appendChild(this._marker_node5__active);
		}
		if (this._marker_node5.firstChild) {
			this._marker_node5.insertBefore(this._marker_node5__normal,this._marker_node5.firstChild);
		} else {
			this._marker_node5.appendChild(this._marker_node5__normal);
		}
		this._marker_node6__normal=this._marker_normal.cloneNode(true);
		this._marker_node6__normal.style.visibility='inherit';
		this._marker_node6__normal.style.left=0;
		this._marker_node6__normal.style.top=0;
		this._marker_node6.ggMarkerNormal=this._marker_node6__normal;
		this._marker_node6__active=this._marker_active.cloneNode(true);
		this._marker_node6__active.style.visibility='hidden';
		this._marker_node6__active.style.left=0;
		this._marker_node6__active.style.top=0;
		this._marker_node6.ggMarkerActive=this._marker_node6__active;
		if (this._marker_node6.firstChild) {
			this._marker_node6.insertBefore(this._marker_node6__active,this._marker_node6.firstChild);
		} else {
			this._marker_node6.appendChild(this._marker_node6__active);
		}
		if (this._marker_node6.firstChild) {
			this._marker_node6.insertBefore(this._marker_node6__normal,this._marker_node6.firstChild);
		} else {
			this._marker_node6.appendChild(this._marker_node6__normal);
		}
		this._marker_node7__normal=this._marker_normal.cloneNode(true);
		this._marker_node7__normal.style.visibility='inherit';
		this._marker_node7__normal.style.left=0;
		this._marker_node7__normal.style.top=0;
		this._marker_node7.ggMarkerNormal=this._marker_node7__normal;
		this._marker_node7__active=this._marker_active.cloneNode(true);
		this._marker_node7__active.style.visibility='hidden';
		this._marker_node7__active.style.left=0;
		this._marker_node7__active.style.top=0;
		this._marker_node7.ggMarkerActive=this._marker_node7__active;
		if (this._marker_node7.firstChild) {
			this._marker_node7.insertBefore(this._marker_node7__active,this._marker_node7.firstChild);
		} else {
			this._marker_node7.appendChild(this._marker_node7__active);
		}
		if (this._marker_node7.firstChild) {
			this._marker_node7.insertBefore(this._marker_node7__normal,this._marker_node7.firstChild);
		} else {
			this._marker_node7.appendChild(this._marker_node7__normal);
		}
		me._map_2_floor.style[domTransition]='none';
		me._map_2_floor.style.visibility='hidden';
		me._map_2_floor.ggVisible=false;
		this._marker_node26__normal=this._marker_normal.cloneNode(true);
		this._marker_node26__normal.style.visibility='inherit';
		this._marker_node26__normal.style.left=0;
		this._marker_node26__normal.style.top=0;
		this._marker_node26.ggMarkerNormal=this._marker_node26__normal;
		this._marker_node26__active=this._marker_active.cloneNode(true);
		this._marker_node26__active.style.visibility='hidden';
		this._marker_node26__active.style.left=0;
		this._marker_node26__active.style.top=0;
		this._marker_node26.ggMarkerActive=this._marker_node26__active;
		if (this._marker_node26.firstChild) {
			this._marker_node26.insertBefore(this._marker_node26__active,this._marker_node26.firstChild);
		} else {
			this._marker_node26.appendChild(this._marker_node26__active);
		}
		if (this._marker_node26.firstChild) {
			this._marker_node26.insertBefore(this._marker_node26__normal,this._marker_node26.firstChild);
		} else {
			this._marker_node26.appendChild(this._marker_node26__normal);
		}
		this._marker_node28__normal=this._marker_normal.cloneNode(true);
		this._marker_node28__normal.style.visibility='inherit';
		this._marker_node28__normal.style.left=0;
		this._marker_node28__normal.style.top=0;
		this._marker_node28.ggMarkerNormal=this._marker_node28__normal;
		this._marker_node28__active=this._marker_active.cloneNode(true);
		this._marker_node28__active.style.visibility='hidden';
		this._marker_node28__active.style.left=0;
		this._marker_node28__active.style.top=0;
		this._marker_node28.ggMarkerActive=this._marker_node28__active;
		if (this._marker_node28.firstChild) {
			this._marker_node28.insertBefore(this._marker_node28__active,this._marker_node28.firstChild);
		} else {
			this._marker_node28.appendChild(this._marker_node28__active);
		}
		if (this._marker_node28.firstChild) {
			this._marker_node28.insertBefore(this._marker_node28__normal,this._marker_node28.firstChild);
		} else {
			this._marker_node28.appendChild(this._marker_node28__normal);
		}
		this._marker_node12__normal=this._marker_normal.cloneNode(true);
		this._marker_node12__normal.style.visibility='inherit';
		this._marker_node12__normal.style.left=0;
		this._marker_node12__normal.style.top=0;
		this._marker_node12.ggMarkerNormal=this._marker_node12__normal;
		this._marker_node12__active=this._marker_active.cloneNode(true);
		this._marker_node12__active.style.visibility='hidden';
		this._marker_node12__active.style.left=0;
		this._marker_node12__active.style.top=0;
		this._marker_node12.ggMarkerActive=this._marker_node12__active;
		if (this._marker_node12.firstChild) {
			this._marker_node12.insertBefore(this._marker_node12__active,this._marker_node12.firstChild);
		} else {
			this._marker_node12.appendChild(this._marker_node12__active);
		}
		if (this._marker_node12.firstChild) {
			this._marker_node12.insertBefore(this._marker_node12__normal,this._marker_node12.firstChild);
		} else {
			this._marker_node12.appendChild(this._marker_node12__normal);
		}
		this._marker_node29__normal=this._marker_normal.cloneNode(true);
		this._marker_node29__normal.style.visibility='inherit';
		this._marker_node29__normal.style.left=0;
		this._marker_node29__normal.style.top=0;
		this._marker_node29.ggMarkerNormal=this._marker_node29__normal;
		this._marker_node29__active=this._marker_active.cloneNode(true);
		this._marker_node29__active.style.visibility='hidden';
		this._marker_node29__active.style.left=0;
		this._marker_node29__active.style.top=0;
		this._marker_node29.ggMarkerActive=this._marker_node29__active;
		if (this._marker_node29.firstChild) {
			this._marker_node29.insertBefore(this._marker_node29__active,this._marker_node29.firstChild);
		} else {
			this._marker_node29.appendChild(this._marker_node29__active);
		}
		if (this._marker_node29.firstChild) {
			this._marker_node29.insertBefore(this._marker_node29__normal,this._marker_node29.firstChild);
		} else {
			this._marker_node29.appendChild(this._marker_node29__normal);
		}
		this._marker_node30__normal=this._marker_normal.cloneNode(true);
		this._marker_node30__normal.style.visibility='inherit';
		this._marker_node30__normal.style.left=0;
		this._marker_node30__normal.style.top=0;
		this._marker_node30.ggMarkerNormal=this._marker_node30__normal;
		this._marker_node30__active=this._marker_active.cloneNode(true);
		this._marker_node30__active.style.visibility='hidden';
		this._marker_node30__active.style.left=0;
		this._marker_node30__active.style.top=0;
		this._marker_node30.ggMarkerActive=this._marker_node30__active;
		if (this._marker_node30.firstChild) {
			this._marker_node30.insertBefore(this._marker_node30__active,this._marker_node30.firstChild);
		} else {
			this._marker_node30.appendChild(this._marker_node30__active);
		}
		if (this._marker_node30.firstChild) {
			this._marker_node30.insertBefore(this._marker_node30__normal,this._marker_node30.firstChild);
		} else {
			this._marker_node30.appendChild(this._marker_node30__normal);
		}
		this._marker_node27__normal=this._marker_normal.cloneNode(true);
		this._marker_node27__normal.style.visibility='inherit';
		this._marker_node27__normal.style.left=0;
		this._marker_node27__normal.style.top=0;
		this._marker_node27.ggMarkerNormal=this._marker_node27__normal;
		this._marker_node27__active=this._marker_active.cloneNode(true);
		this._marker_node27__active.style.visibility='hidden';
		this._marker_node27__active.style.left=0;
		this._marker_node27__active.style.top=0;
		this._marker_node27.ggMarkerActive=this._marker_node27__active;
		if (this._marker_node27.firstChild) {
			this._marker_node27.insertBefore(this._marker_node27__active,this._marker_node27.firstChild);
		} else {
			this._marker_node27.appendChild(this._marker_node27__active);
		}
		if (this._marker_node27.firstChild) {
			this._marker_node27.insertBefore(this._marker_node27__normal,this._marker_node27.firstChild);
		} else {
			this._marker_node27.appendChild(this._marker_node27__normal);
		}
		this._marker_node11__normal=this._marker_normal.cloneNode(true);
		this._marker_node11__normal.style.visibility='inherit';
		this._marker_node11__normal.style.left=0;
		this._marker_node11__normal.style.top=0;
		this._marker_node11.ggMarkerNormal=this._marker_node11__normal;
		this._marker_node11__active=this._marker_active.cloneNode(true);
		this._marker_node11__active.style.visibility='hidden';
		this._marker_node11__active.style.left=0;
		this._marker_node11__active.style.top=0;
		this._marker_node11.ggMarkerActive=this._marker_node11__active;
		if (this._marker_node11.firstChild) {
			this._marker_node11.insertBefore(this._marker_node11__active,this._marker_node11.firstChild);
		} else {
			this._marker_node11.appendChild(this._marker_node11__active);
		}
		if (this._marker_node11.firstChild) {
			this._marker_node11.insertBefore(this._marker_node11__normal,this._marker_node11.firstChild);
		} else {
			this._marker_node11.appendChild(this._marker_node11__normal);
		}
		this._marker_node10__normal=this._marker_normal.cloneNode(true);
		this._marker_node10__normal.style.visibility='inherit';
		this._marker_node10__normal.style.left=0;
		this._marker_node10__normal.style.top=0;
		this._marker_node10.ggMarkerNormal=this._marker_node10__normal;
		this._marker_node10__active=this._marker_active.cloneNode(true);
		this._marker_node10__active.style.visibility='hidden';
		this._marker_node10__active.style.left=0;
		this._marker_node10__active.style.top=0;
		this._marker_node10.ggMarkerActive=this._marker_node10__active;
		if (this._marker_node10.firstChild) {
			this._marker_node10.insertBefore(this._marker_node10__active,this._marker_node10.firstChild);
		} else {
			this._marker_node10.appendChild(this._marker_node10__active);
		}
		if (this._marker_node10.firstChild) {
			this._marker_node10.insertBefore(this._marker_node10__normal,this._marker_node10.firstChild);
		} else {
			this._marker_node10.appendChild(this._marker_node10__normal);
		}
		this._marker_node14__normal=this._marker_normal.cloneNode(true);
		this._marker_node14__normal.style.visibility='inherit';
		this._marker_node14__normal.style.left=0;
		this._marker_node14__normal.style.top=0;
		this._marker_node14.ggMarkerNormal=this._marker_node14__normal;
		this._marker_node14__active=this._marker_active.cloneNode(true);
		this._marker_node14__active.style.visibility='hidden';
		this._marker_node14__active.style.left=0;
		this._marker_node14__active.style.top=0;
		this._marker_node14.ggMarkerActive=this._marker_node14__active;
		if (this._marker_node14.firstChild) {
			this._marker_node14.insertBefore(this._marker_node14__active,this._marker_node14.firstChild);
		} else {
			this._marker_node14.appendChild(this._marker_node14__active);
		}
		if (this._marker_node14.firstChild) {
			this._marker_node14.insertBefore(this._marker_node14__normal,this._marker_node14.firstChild);
		} else {
			this._marker_node14.appendChild(this._marker_node14__normal);
		}
		this._marker_node13__normal=this._marker_normal.cloneNode(true);
		this._marker_node13__normal.style.visibility='inherit';
		this._marker_node13__normal.style.left=0;
		this._marker_node13__normal.style.top=0;
		this._marker_node13.ggMarkerNormal=this._marker_node13__normal;
		this._marker_node13__active=this._marker_active.cloneNode(true);
		this._marker_node13__active.style.visibility='hidden';
		this._marker_node13__active.style.left=0;
		this._marker_node13__active.style.top=0;
		this._marker_node13.ggMarkerActive=this._marker_node13__active;
		if (this._marker_node13.firstChild) {
			this._marker_node13.insertBefore(this._marker_node13__active,this._marker_node13.firstChild);
		} else {
			this._marker_node13.appendChild(this._marker_node13__active);
		}
		if (this._marker_node13.firstChild) {
			this._marker_node13.insertBefore(this._marker_node13__normal,this._marker_node13.firstChild);
		} else {
			this._marker_node13.appendChild(this._marker_node13__normal);
		}
		this._marker_node15__normal=this._marker_normal.cloneNode(true);
		this._marker_node15__normal.style.visibility='inherit';
		this._marker_node15__normal.style.left=0;
		this._marker_node15__normal.style.top=0;
		this._marker_node15.ggMarkerNormal=this._marker_node15__normal;
		this._marker_node15__active=this._marker_active.cloneNode(true);
		this._marker_node15__active.style.visibility='hidden';
		this._marker_node15__active.style.left=0;
		this._marker_node15__active.style.top=0;
		this._marker_node15.ggMarkerActive=this._marker_node15__active;
		if (this._marker_node15.firstChild) {
			this._marker_node15.insertBefore(this._marker_node15__active,this._marker_node15.firstChild);
		} else {
			this._marker_node15.appendChild(this._marker_node15__active);
		}
		if (this._marker_node15.firstChild) {
			this._marker_node15.insertBefore(this._marker_node15__normal,this._marker_node15.firstChild);
		} else {
			this._marker_node15.appendChild(this._marker_node15__normal);
		}
		this._marker_node18__normal=this._marker_normal.cloneNode(true);
		this._marker_node18__normal.style.visibility='inherit';
		this._marker_node18__normal.style.left=0;
		this._marker_node18__normal.style.top=0;
		this._marker_node18.ggMarkerNormal=this._marker_node18__normal;
		this._marker_node18__active=this._marker_active.cloneNode(true);
		this._marker_node18__active.style.visibility='hidden';
		this._marker_node18__active.style.left=0;
		this._marker_node18__active.style.top=0;
		this._marker_node18.ggMarkerActive=this._marker_node18__active;
		if (this._marker_node18.firstChild) {
			this._marker_node18.insertBefore(this._marker_node18__active,this._marker_node18.firstChild);
		} else {
			this._marker_node18.appendChild(this._marker_node18__active);
		}
		if (this._marker_node18.firstChild) {
			this._marker_node18.insertBefore(this._marker_node18__normal,this._marker_node18.firstChild);
		} else {
			this._marker_node18.appendChild(this._marker_node18__normal);
		}
		this._marker_node17__normal=this._marker_normal.cloneNode(true);
		this._marker_node17__normal.style.visibility='inherit';
		this._marker_node17__normal.style.left=0;
		this._marker_node17__normal.style.top=0;
		this._marker_node17.ggMarkerNormal=this._marker_node17__normal;
		this._marker_node17__active=this._marker_active.cloneNode(true);
		this._marker_node17__active.style.visibility='hidden';
		this._marker_node17__active.style.left=0;
		this._marker_node17__active.style.top=0;
		this._marker_node17.ggMarkerActive=this._marker_node17__active;
		if (this._marker_node17.firstChild) {
			this._marker_node17.insertBefore(this._marker_node17__active,this._marker_node17.firstChild);
		} else {
			this._marker_node17.appendChild(this._marker_node17__active);
		}
		if (this._marker_node17.firstChild) {
			this._marker_node17.insertBefore(this._marker_node17__normal,this._marker_node17.firstChild);
		} else {
			this._marker_node17.appendChild(this._marker_node17__normal);
		}
		this._marker_node19__normal=this._marker_normal.cloneNode(true);
		this._marker_node19__normal.style.visibility='inherit';
		this._marker_node19__normal.style.left=0;
		this._marker_node19__normal.style.top=0;
		this._marker_node19.ggMarkerNormal=this._marker_node19__normal;
		this._marker_node19__active=this._marker_active.cloneNode(true);
		this._marker_node19__active.style.visibility='hidden';
		this._marker_node19__active.style.left=0;
		this._marker_node19__active.style.top=0;
		this._marker_node19.ggMarkerActive=this._marker_node19__active;
		if (this._marker_node19.firstChild) {
			this._marker_node19.insertBefore(this._marker_node19__active,this._marker_node19.firstChild);
		} else {
			this._marker_node19.appendChild(this._marker_node19__active);
		}
		if (this._marker_node19.firstChild) {
			this._marker_node19.insertBefore(this._marker_node19__normal,this._marker_node19.firstChild);
		} else {
			this._marker_node19.appendChild(this._marker_node19__normal);
		}
		this._marker_node9__normal=this._marker_normal.cloneNode(true);
		this._marker_node9__normal.style.visibility='inherit';
		this._marker_node9__normal.style.left=0;
		this._marker_node9__normal.style.top=0;
		this._marker_node9.ggMarkerNormal=this._marker_node9__normal;
		this._marker_node9__active=this._marker_active.cloneNode(true);
		this._marker_node9__active.style.visibility='hidden';
		this._marker_node9__active.style.left=0;
		this._marker_node9__active.style.top=0;
		this._marker_node9.ggMarkerActive=this._marker_node9__active;
		if (this._marker_node9.firstChild) {
			this._marker_node9.insertBefore(this._marker_node9__active,this._marker_node9.firstChild);
		} else {
			this._marker_node9.appendChild(this._marker_node9__active);
		}
		if (this._marker_node9.firstChild) {
			this._marker_node9.insertBefore(this._marker_node9__normal,this._marker_node9.firstChild);
		} else {
			this._marker_node9.appendChild(this._marker_node9__normal);
		}
		this._marker_node20__normal=this._marker_normal.cloneNode(true);
		this._marker_node20__normal.style.visibility='inherit';
		this._marker_node20__normal.style.left=0;
		this._marker_node20__normal.style.top=0;
		this._marker_node20.ggMarkerNormal=this._marker_node20__normal;
		this._marker_node20__active=this._marker_active.cloneNode(true);
		this._marker_node20__active.style.visibility='hidden';
		this._marker_node20__active.style.left=0;
		this._marker_node20__active.style.top=0;
		this._marker_node20.ggMarkerActive=this._marker_node20__active;
		if (this._marker_node20.firstChild) {
			this._marker_node20.insertBefore(this._marker_node20__active,this._marker_node20.firstChild);
		} else {
			this._marker_node20.appendChild(this._marker_node20__active);
		}
		if (this._marker_node20.firstChild) {
			this._marker_node20.insertBefore(this._marker_node20__normal,this._marker_node20.firstChild);
		} else {
			this._marker_node20.appendChild(this._marker_node20__normal);
		}
		this._marker_node21__normal=this._marker_normal.cloneNode(true);
		this._marker_node21__normal.style.visibility='inherit';
		this._marker_node21__normal.style.left=0;
		this._marker_node21__normal.style.top=0;
		this._marker_node21.ggMarkerNormal=this._marker_node21__normal;
		this._marker_node21__active=this._marker_active.cloneNode(true);
		this._marker_node21__active.style.visibility='hidden';
		this._marker_node21__active.style.left=0;
		this._marker_node21__active.style.top=0;
		this._marker_node21.ggMarkerActive=this._marker_node21__active;
		if (this._marker_node21.firstChild) {
			this._marker_node21.insertBefore(this._marker_node21__active,this._marker_node21.firstChild);
		} else {
			this._marker_node21.appendChild(this._marker_node21__active);
		}
		if (this._marker_node21.firstChild) {
			this._marker_node21.insertBefore(this._marker_node21__normal,this._marker_node21.firstChild);
		} else {
			this._marker_node21.appendChild(this._marker_node21__normal);
		}
		this._marker_node22__normal=this._marker_normal.cloneNode(true);
		this._marker_node22__normal.style.visibility='inherit';
		this._marker_node22__normal.style.left=0;
		this._marker_node22__normal.style.top=0;
		this._marker_node22.ggMarkerNormal=this._marker_node22__normal;
		this._marker_node22__active=this._marker_active.cloneNode(true);
		this._marker_node22__active.style.visibility='hidden';
		this._marker_node22__active.style.left=0;
		this._marker_node22__active.style.top=0;
		this._marker_node22.ggMarkerActive=this._marker_node22__active;
		if (this._marker_node22.firstChild) {
			this._marker_node22.insertBefore(this._marker_node22__active,this._marker_node22.firstChild);
		} else {
			this._marker_node22.appendChild(this._marker_node22__active);
		}
		if (this._marker_node22.firstChild) {
			this._marker_node22.insertBefore(this._marker_node22__normal,this._marker_node22.firstChild);
		} else {
			this._marker_node22.appendChild(this._marker_node22__normal);
		}
		this._marker_node23__normal=this._marker_normal.cloneNode(true);
		this._marker_node23__normal.style.visibility='inherit';
		this._marker_node23__normal.style.left=0;
		this._marker_node23__normal.style.top=0;
		this._marker_node23.ggMarkerNormal=this._marker_node23__normal;
		this._marker_node23__active=this._marker_active.cloneNode(true);
		this._marker_node23__active.style.visibility='hidden';
		this._marker_node23__active.style.left=0;
		this._marker_node23__active.style.top=0;
		this._marker_node23.ggMarkerActive=this._marker_node23__active;
		if (this._marker_node23.firstChild) {
			this._marker_node23.insertBefore(this._marker_node23__active,this._marker_node23.firstChild);
		} else {
			this._marker_node23.appendChild(this._marker_node23__active);
		}
		if (this._marker_node23.firstChild) {
			this._marker_node23.insertBefore(this._marker_node23__normal,this._marker_node23.firstChild);
		} else {
			this._marker_node23.appendChild(this._marker_node23__normal);
		}
		this._marker_node24__normal=this._marker_normal.cloneNode(true);
		this._marker_node24__normal.style.visibility='inherit';
		this._marker_node24__normal.style.left=0;
		this._marker_node24__normal.style.top=0;
		this._marker_node24.ggMarkerNormal=this._marker_node24__normal;
		this._marker_node24__active=this._marker_active.cloneNode(true);
		this._marker_node24__active.style.visibility='hidden';
		this._marker_node24__active.style.left=0;
		this._marker_node24__active.style.top=0;
		this._marker_node24.ggMarkerActive=this._marker_node24__active;
		if (this._marker_node24.firstChild) {
			this._marker_node24.insertBefore(this._marker_node24__active,this._marker_node24.firstChild);
		} else {
			this._marker_node24.appendChild(this._marker_node24__active);
		}
		if (this._marker_node24.firstChild) {
			this._marker_node24.insertBefore(this._marker_node24__normal,this._marker_node24.firstChild);
		} else {
			this._marker_node24.appendChild(this._marker_node24__normal);
		}
		this._marker_node25__normal=this._marker_normal.cloneNode(true);
		this._marker_node25__normal.style.visibility='inherit';
		this._marker_node25__normal.style.left=0;
		this._marker_node25__normal.style.top=0;
		this._marker_node25.ggMarkerNormal=this._marker_node25__normal;
		this._marker_node25__active=this._marker_active.cloneNode(true);
		this._marker_node25__active.style.visibility='hidden';
		this._marker_node25__active.style.left=0;
		this._marker_node25__active.style.top=0;
		this._marker_node25.ggMarkerActive=this._marker_node25__active;
		if (this._marker_node25.firstChild) {
			this._marker_node25.insertBefore(this._marker_node25__active,this._marker_node25.firstChild);
		} else {
			this._marker_node25.appendChild(this._marker_node25__active);
		}
		if (this._marker_node25.firstChild) {
			this._marker_node25.insertBefore(this._marker_node25__normal,this._marker_node25.firstChild);
		} else {
			this._marker_node25.appendChild(this._marker_node25__normal);
		}
		this._marker_node16__normal=this._marker_normal.cloneNode(true);
		this._marker_node16__normal.style.visibility='inherit';
		this._marker_node16__normal.style.left=0;
		this._marker_node16__normal.style.top=0;
		this._marker_node16.ggMarkerNormal=this._marker_node16__normal;
		this._marker_node16__active=this._marker_active.cloneNode(true);
		this._marker_node16__active.style.visibility='hidden';
		this._marker_node16__active.style.left=0;
		this._marker_node16__active.style.top=0;
		this._marker_node16.ggMarkerActive=this._marker_node16__active;
		if (this._marker_node16.firstChild) {
			this._marker_node16.insertBefore(this._marker_node16__active,this._marker_node16.firstChild);
		} else {
			this._marker_node16.appendChild(this._marker_node16__active);
		}
		if (this._marker_node16.firstChild) {
			this._marker_node16.insertBefore(this._marker_node16__normal,this._marker_node16.firstChild);
		} else {
			this._marker_node16.appendChild(this._marker_node16__normal);
		}
		this._marker_node8__normal=this._marker_normal.cloneNode(true);
		this._marker_node8__normal.style.visibility='inherit';
		this._marker_node8__normal.style.left=0;
		this._marker_node8__normal.style.top=0;
		this._marker_node8.ggMarkerNormal=this._marker_node8__normal;
		this._marker_node8__active=this._marker_active.cloneNode(true);
		this._marker_node8__active.style.visibility='hidden';
		this._marker_node8__active.style.left=0;
		this._marker_node8__active.style.top=0;
		this._marker_node8.ggMarkerActive=this._marker_node8__active;
		if (this._marker_node8.firstChild) {
			this._marker_node8.insertBefore(this._marker_node8__active,this._marker_node8.firstChild);
		} else {
			this._marker_node8.appendChild(this._marker_node8__active);
		}
		if (this._marker_node8.firstChild) {
			this._marker_node8.insertBefore(this._marker_node8__normal,this._marker_node8.firstChild);
		} else {
			this._marker_node8.appendChild(this._marker_node8__normal);
		}
		this._marker_node31__normal=this._marker_normal.cloneNode(true);
		this._marker_node31__normal.style.visibility='inherit';
		this._marker_node31__normal.style.left=0;
		this._marker_node31__normal.style.top=0;
		this._marker_node31.ggMarkerNormal=this._marker_node31__normal;
		this._marker_node31__active=this._marker_active.cloneNode(true);
		this._marker_node31__active.style.visibility='hidden';
		this._marker_node31__active.style.left=0;
		this._marker_node31__active.style.top=0;
		this._marker_node31.ggMarkerActive=this._marker_node31__active;
		if (this._marker_node31.firstChild) {
			this._marker_node31.insertBefore(this._marker_node31__active,this._marker_node31.firstChild);
		} else {
			this._marker_node31.appendChild(this._marker_node31__active);
		}
		if (this._marker_node31.firstChild) {
			this._marker_node31.insertBefore(this._marker_node31__normal,this._marker_node31.firstChild);
		} else {
			this._marker_node31.appendChild(this._marker_node31__normal);
		}
		this._marker_node32__normal=this._marker_normal.cloneNode(true);
		this._marker_node32__normal.style.visibility='inherit';
		this._marker_node32__normal.style.left=0;
		this._marker_node32__normal.style.top=0;
		this._marker_node32.ggMarkerNormal=this._marker_node32__normal;
		this._marker_node32__active=this._marker_active.cloneNode(true);
		this._marker_node32__active.style.visibility='hidden';
		this._marker_node32__active.style.left=0;
		this._marker_node32__active.style.top=0;
		this._marker_node32.ggMarkerActive=this._marker_node32__active;
		if (this._marker_node32.firstChild) {
			this._marker_node32.insertBefore(this._marker_node32__active,this._marker_node32.firstChild);
		} else {
			this._marker_node32.appendChild(this._marker_node32__active);
		}
		if (this._marker_node32.firstChild) {
			this._marker_node32.insertBefore(this._marker_node32__normal,this._marker_node32.firstChild);
		} else {
			this._marker_node32.appendChild(this._marker_node32__normal);
		}
		this._marker_node33__normal=this._marker_normal.cloneNode(true);
		this._marker_node33__normal.style.visibility='inherit';
		this._marker_node33__normal.style.left=0;
		this._marker_node33__normal.style.top=0;
		this._marker_node33.ggMarkerNormal=this._marker_node33__normal;
		this._marker_node33__active=this._marker_active.cloneNode(true);
		this._marker_node33__active.style.visibility='hidden';
		this._marker_node33__active.style.left=0;
		this._marker_node33__active.style.top=0;
		this._marker_node33.ggMarkerActive=this._marker_node33__active;
		if (this._marker_node33.firstChild) {
			this._marker_node33.insertBefore(this._marker_node33__active,this._marker_node33.firstChild);
		} else {
			this._marker_node33.appendChild(this._marker_node33__active);
		}
		if (this._marker_node33.firstChild) {
			this._marker_node33.insertBefore(this._marker_node33__normal,this._marker_node33.firstChild);
		} else {
			this._marker_node33.appendChild(this._marker_node33__normal);
		}
		this._marker_node34__normal=this._marker_normal.cloneNode(true);
		this._marker_node34__normal.style.visibility='inherit';
		this._marker_node34__normal.style.left=0;
		this._marker_node34__normal.style.top=0;
		this._marker_node34.ggMarkerNormal=this._marker_node34__normal;
		this._marker_node34__active=this._marker_active.cloneNode(true);
		this._marker_node34__active.style.visibility='hidden';
		this._marker_node34__active.style.left=0;
		this._marker_node34__active.style.top=0;
		this._marker_node34.ggMarkerActive=this._marker_node34__active;
		if (this._marker_node34.firstChild) {
			this._marker_node34.insertBefore(this._marker_node34__active,this._marker_node34.firstChild);
		} else {
			this._marker_node34.appendChild(this._marker_node34__active);
		}
		if (this._marker_node34.firstChild) {
			this._marker_node34.insertBefore(this._marker_node34__normal,this._marker_node34.firstChild);
		} else {
			this._marker_node34.appendChild(this._marker_node34__normal);
		}
		this._marker_node35__normal=this._marker_normal.cloneNode(true);
		this._marker_node35__normal.style.visibility='inherit';
		this._marker_node35__normal.style.left=0;
		this._marker_node35__normal.style.top=0;
		this._marker_node35.ggMarkerNormal=this._marker_node35__normal;
		this._marker_node35__active=this._marker_active.cloneNode(true);
		this._marker_node35__active.style.visibility='hidden';
		this._marker_node35__active.style.left=0;
		this._marker_node35__active.style.top=0;
		this._marker_node35.ggMarkerActive=this._marker_node35__active;
		if (this._marker_node35.firstChild) {
			this._marker_node35.insertBefore(this._marker_node35__active,this._marker_node35.firstChild);
		} else {
			this._marker_node35.appendChild(this._marker_node35__active);
		}
		if (this._marker_node35.firstChild) {
			this._marker_node35.insertBefore(this._marker_node35__normal,this._marker_node35.firstChild);
		} else {
			this._marker_node35.appendChild(this._marker_node35__normal);
		}
		this._marker_node36__normal=this._marker_normal.cloneNode(true);
		this._marker_node36__normal.style.visibility='inherit';
		this._marker_node36__normal.style.left=0;
		this._marker_node36__normal.style.top=0;
		this._marker_node36.ggMarkerNormal=this._marker_node36__normal;
		this._marker_node36__active=this._marker_active.cloneNode(true);
		this._marker_node36__active.style.visibility='hidden';
		this._marker_node36__active.style.left=0;
		this._marker_node36__active.style.top=0;
		this._marker_node36.ggMarkerActive=this._marker_node36__active;
		if (this._marker_node36.firstChild) {
			this._marker_node36.insertBefore(this._marker_node36__active,this._marker_node36.firstChild);
		} else {
			this._marker_node36.appendChild(this._marker_node36__active);
		}
		if (this._marker_node36.firstChild) {
			this._marker_node36.insertBefore(this._marker_node36__normal,this._marker_node36.firstChild);
		} else {
			this._marker_node36.appendChild(this._marker_node36__normal);
		}
		this._marker_node37__normal=this._marker_normal.cloneNode(true);
		this._marker_node37__normal.style.visibility='inherit';
		this._marker_node37__normal.style.left=0;
		this._marker_node37__normal.style.top=0;
		this._marker_node37.ggMarkerNormal=this._marker_node37__normal;
		this._marker_node37__active=this._marker_active.cloneNode(true);
		this._marker_node37__active.style.visibility='hidden';
		this._marker_node37__active.style.left=0;
		this._marker_node37__active.style.top=0;
		this._marker_node37.ggMarkerActive=this._marker_node37__active;
		if (this._marker_node37.firstChild) {
			this._marker_node37.insertBefore(this._marker_node37__active,this._marker_node37.firstChild);
		} else {
			this._marker_node37.appendChild(this._marker_node37__active);
		}
		if (this._marker_node37.firstChild) {
			this._marker_node37.insertBefore(this._marker_node37__normal,this._marker_node37.firstChild);
		} else {
			this._marker_node37.appendChild(this._marker_node37__normal);
		}
		this._marker_node38__normal=this._marker_normal.cloneNode(true);
		this._marker_node38__normal.style.visibility='inherit';
		this._marker_node38__normal.style.left=0;
		this._marker_node38__normal.style.top=0;
		this._marker_node38.ggMarkerNormal=this._marker_node38__normal;
		this._marker_node38__active=this._marker_active.cloneNode(true);
		this._marker_node38__active.style.visibility='hidden';
		this._marker_node38__active.style.left=0;
		this._marker_node38__active.style.top=0;
		this._marker_node38.ggMarkerActive=this._marker_node38__active;
		if (this._marker_node38.firstChild) {
			this._marker_node38.insertBefore(this._marker_node38__active,this._marker_node38.firstChild);
		} else {
			this._marker_node38.appendChild(this._marker_node38__active);
		}
		if (this._marker_node38.firstChild) {
			this._marker_node38.insertBefore(this._marker_node38__normal,this._marker_node38.firstChild);
		} else {
			this._marker_node38.appendChild(this._marker_node38__normal);
		}
		this.__53.ggMarkerNormal=null;
		this.__53.ggMarkerActive=null;
		this.__530.ggMarkerNormal=null;
		this.__530.ggMarkerActive=null;
		me._preview1.style[domTransition]='none';
		me._preview1.style.visibility='hidden';
		me._preview1.ggVisible=false;
		me._preview2.style[domTransition]='none';
		me._preview2.style.visibility='hidden';
		me._preview2.ggVisible=false;
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me.__.style[domTransition]='none';
			me.__.style.visibility='hidden';
			me.__.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
			me._btn_fullscr.style[domTransition]='none';
			me._btn_fullscr.style.visibility='inherit';
			me._btn_fullscr.ggVisible=true;
			me._btn_fullscrout.style[domTransition]='none';
			me._btn_fullscrout.style.visibility='hidden';
			me._btn_fullscrout.ggVisible=false;
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
		if (id=='lux_1_proxy') {
			me._marker_node3.onclick();
		}
	}
	this.hotspotProxyOver=function(id) {
		if (id=='lux_1_proxy') {
			me._marker_node3.onmouseover();
		}
	}
	this.hotspotProxyOut=function(id) {
		if (id=='lux_1_proxy') {
			me._marker_node3.onmouseout();
		}
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		this._marker_current_title.ggUpdateText();
		if (me.elementMouseDown['_2']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['_4']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['_3']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['_6']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['_8']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['_9']) {
			me.player.changeFovLog(-1,true);
		}
		this.__14.ggUpdateText();
		var hs='';
		if (me.__15.ggParameter) {
			hs+=parameterToTransform(me.__15.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me.__15.style[domTransform]=hs;
		this._marker_title37.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ActiveZone1') {
			this.__div=document.createElement('div');
			this.__div.ggId="ActiveZone1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 732px;';
			hs+='top:  205px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext2.style[domTransition]='none';
				me._hstext2.style.visibility='inherit';
				me._hstext2.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext2.style[domTransition]='none';
				me._hstext2.style.visibility='hidden';
				me._hstext2.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__118=document.createElement('div');
			this.__118.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 11";
			this.__118.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__118.ggVisible=true;
			this.__118.className='ggskin ggskin_button';
			this.__118.ggType='button';
			hs ='position:absolute;';
			hs+='left: -14px;';
			hs+='top:  -1px;';
			hs+='width: 29px;';
			hs+='height: 55px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__118.setAttribute('style',hs);
			this.__118__img=document.createElement('img');
			this.__118__img.className='ggskin ggskin_button';
			this.__118__img.setAttribute('src',basePath + 'imagestour/_118.png');
			this.__118__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__118__img.className='ggskin ggskin_button';
			this.__118__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__118__img);
			this.__118.appendChild(this.__118__img);
			this.__div.appendChild(this.__118);
			this._hstext2=document.createElement('div');
			this._hstext2__text=document.createElement('div');
			this._hstext2.className='ggskin ggskin_textdiv';
			this._hstext2.ggTextDiv=this._hstext2__text;
			this._hstext2.ggId="hstext";
			this._hstext2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext2.ggVisible=false;
			this._hstext2.className='ggskin ggskin_text';
			this._hstext2.ggType='text';
			this._hstext2.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  -20px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.8;';
			hs+='visibility: hidden;';
			this._hstext2.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffff7f;';
			hs+='border: 1px solid #aa0000;';
			hs+='color: #aa0000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext2__text.setAttribute('style',hs);
			this._hstext2__text.innerHTML="<b>"+me.hotspot.title+"<b>";
			this._hstext2.appendChild(this._hstext2__text);
			this.__div.appendChild(this._hstext2);
		} else
		if (hotspot.skinid=='ActiveZone_-30') {
			this.__div=document.createElement('div');
			this.__div.ggId="ActiveZone_-30";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 645px;';
			hs+='top:  204px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext1.style[domTransition]='none';
				me._hstext1.style.visibility='inherit';
				me._hstext1.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext1.style[domTransition]='none';
				me._hstext1.style.visibility='hidden';
				me._hstext1.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__117=document.createElement('div');
			this.__117.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 11";
			this.__117.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__117.ggVisible=true;
			this.__117.className='ggskin ggskin_button';
			this.__117.ggType='button';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  -1px;';
			hs+='width: 51px;';
			hs+='height: 49px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__117.setAttribute('style',hs);
			this.__117__img=document.createElement('img');
			this.__117__img.className='ggskin ggskin_button';
			this.__117__img.setAttribute('src',basePath + 'imagestour/_117.png');
			this.__117__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__117__img.className='ggskin ggskin_button';
			this.__117__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__117__img);
			this.__117.appendChild(this.__117__img);
			this.__div.appendChild(this.__117);
			this._hstext1=document.createElement('div');
			this._hstext1__text=document.createElement('div');
			this._hstext1.className='ggskin ggskin_textdiv';
			this._hstext1.ggTextDiv=this._hstext1__text;
			this._hstext1.ggId="hstext";
			this._hstext1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext1.ggVisible=false;
			this._hstext1.className='ggskin ggskin_text';
			this._hstext1.ggType='text';
			this._hstext1.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -52px;';
			hs+='top:  -20px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.8;';
			hs+='visibility: hidden;';
			this._hstext1.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffff7f;';
			hs+='border: 1px solid #aa0000;';
			hs+='color: #aa0000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext1__text.setAttribute('style',hs);
			this._hstext1__text.innerHTML="<b>"+me.hotspot.title+"<b>";
			this._hstext1.appendChild(this._hstext1__text);
			this.__div.appendChild(this._hstext1);
		} else
		if (hotspot.skinid=='ActiveZone_30') {
			this.__div=document.createElement('div');
			this.__div.ggId="ActiveZone_30";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 829px;';
			hs+='top:  206px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext0.style[domTransition]='none';
				me._hstext0.style.visibility='inherit';
				me._hstext0.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext0.style[domTransition]='none';
				me._hstext0.style.visibility='hidden';
				me._hstext0.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__116=document.createElement('div');
			this.__116.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 11";
			this.__116.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__116.ggVisible=true;
			this.__116.className='ggskin ggskin_button';
			this.__116.ggType='button';
			hs ='position:absolute;';
			hs+='left: -39px;';
			hs+='top:  0px;';
			hs+='width: 40px;';
			hs+='height: 57px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__116.setAttribute('style',hs);
			this.__116__img=document.createElement('img');
			this.__116__img.className='ggskin ggskin_button';
			this.__116__img.setAttribute('src',basePath + 'imagestour/_116.png');
			this.__116__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__116__img.className='ggskin ggskin_button';
			this.__116__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__116__img);
			this.__116.appendChild(this.__116__img);
			this.__div.appendChild(this.__116);
			this._hstext0=document.createElement('div');
			this._hstext0__text=document.createElement('div');
			this._hstext0.className='ggskin ggskin_textdiv';
			this._hstext0.ggTextDiv=this._hstext0__text;
			this._hstext0.ggId="hstext";
			this._hstext0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext0.ggVisible=false;
			this._hstext0.className='ggskin ggskin_text';
			this._hstext0.ggType='text';
			this._hstext0.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -53px;';
			hs+='top:  -21px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.8;';
			hs+='visibility: hidden;';
			this._hstext0.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffff7f;';
			hs+='border: 1px solid #aa0000;';
			hs+='color: #aa0000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext0__text.setAttribute('style',hs);
			this._hstext0__text.innerHTML="<b>"+me.hotspot.title+"<b>";
			this._hstext0.appendChild(this._hstext0__text);
			this.__div.appendChild(this._hstext0);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ActiveZone_150";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 823px;';
			hs+='top:  349px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__11=document.createElement('div');
			this.__11.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 11";
			this.__11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__11.ggVisible=true;
			this.__11.className='ggskin ggskin_button';
			this.__11.ggType='button';
			hs ='position:absolute;';
			hs+='left: -39px;';
			hs+='top:  -56px;';
			hs+='width: 42px;';
			hs+='height: 55px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__11.setAttribute('style',hs);
			this.__11__img=document.createElement('img');
			this.__11__img.className='ggskin ggskin_button';
			this.__11__img.setAttribute('src',basePath + 'imagestour/_11.png');
			this.__11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__11__img.className='ggskin ggskin_button';
			this.__11__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__11__img);
			this.__11.appendChild(this.__11__img);
			this.__div.appendChild(this.__11);
			this._hstext=document.createElement('div');
			this._hstext__text=document.createElement('div');
			this._hstext.className='ggskin ggskin_textdiv';
			this._hstext.ggTextDiv=this._hstext__text;
			this._hstext.ggId="hstext";
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.className='ggskin ggskin_text';
			this._hstext.ggType='text';
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -53px;';
			hs+='top:  -21px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.8;';
			hs+='visibility: hidden;';
			this._hstext.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffff7f;';
			hs+='border: 1px solid #aa0000;';
			hs+='color: #aa0000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext__text.setAttribute('style',hs);
			this._hstext__text.innerHTML="<b>"+me.hotspot.title+"<b>";
			this._hstext.appendChild(this._hstext__text);
			this.__div.appendChild(this._hstext);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};