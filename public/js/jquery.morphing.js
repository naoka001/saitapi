/*
    Copyright (c) 2014 Katsushi OUGI
    Code released under the  MIT License(https://github.com/ANTON072/jquery.morphing.js/blob/gh-pages/LICENSE-MIT)
 */

!function(a,b,c){function d(b,c){this.el=b,this.settings=a.extend({},h,c),this._defaults=h,this._name=g,this.$el=a(this.el),this.circ=null,this.numVert=~~(3*Math.random())+this.settings.numVert,this.spring=.015*Math.random()+this.settings.spring,this.friction=.05*Math.random()+this.settings.friction,this.radius=this.settings.radius,this.fps=this.settings.fps,this.init()}function e(){var b=a(this.$el).find("img"),d=c.createElement("canvas");if(b.length>0)return d.width=b.width(),d.height=b.height(),this.$el.empty().append(a(d)),{img:b[0],canvas:d,numVert:this.numVert,spring:this.spring,friction:this.friction,radius:this.radius};d.width=a(this.$el).width(),d.height=a(this.$el).height();var e=this.$el.css("backgroundColor");return this.$el.css("backgroundColor","transparent").append(a(d)),{img:!1,canvas:d,numVert:this.numVert,spring:this.spring,friction:this.friction,radius:this.radius,color:e}}function f(a){function b(a,b){this.vX=0,this.vY=0,this.posX=a,this.posY=b,this.defX=a,this.defY=b,this.baseX=a,this.baseY=b,this.thetaX=0,this.thetaY=0,this.addThetaX=.05*Math.random(),this.addThetaY=.05*Math.random(),this.yugami=24*Math.random()-12}function c(a){var b=h[o-1],c=b.posX,d=b.posY,e=h[0],f=e.posX,i=e.posY;g.moveTo(.5*(c+f),.5*(d+i)+a);for(var j=0;o>j;j++)b=h[j],e=h[o-1>j?j+1:0],c=b.posX,d=b.posY,f=e.posX,i=e.posY,g.quadraticCurveTo(c,d+a,.5*(c+f),.5*(d+i)+a)}function d(a,b,c,d){var e=a-c,f=b-d;return Math.sqrt(e*e+f*f)}function e(a,b,c){var d=Math.atan2(b,a),e=Math.sqrt(a*a+b*b),f=-(a*i+b*j+c)/e,g=Math.cos(d)*f,h=Math.sin(d)*f;e=Math.sqrt(g*g+h*h);var k=n-5,l=[];if(k>e){var m,o;e>0?(m=Math.atan2(h,g),o=Math.acos(e/k)):(m=Math.atan2(b,a),o=Math.PI/2),l[0]=[],l[1]=[],l[0][0]=i+k*Math.cos(m+o),l[0][1]=j+k*Math.sin(m+o),l[1][0]=i+k*Math.cos(m-o),l[1][1]=j+k*Math.sin(m-o)}else e===k&&(l[0]=[],l[0][0]=g+i,l[0][1]=h+j);return l}var f=a.canvas,g=f.getContext("2d"),h=[],i=.5*f.width,j=.5*f.height,k=a.img?g.createPattern(a.img,"repeat"):!1,l=0,m=0,n=a.radius,o=a.numVert,p=a.spring,q=a.friction,r=a.img,s=!1;this.init=function(){for(var a=360/o,c=0;o>c;c++){var d=Math.PI*a*c/180;h.push(new b(n*Math.cos(d)+i,n*Math.sin(d)+j))}},this.update=function(){for(var b,d=0;o>d;d++){b=h[d];var e=(b.defX-b.posX)*p,i=(b.defY-b.posY)*p,j=b.vX=(b.vX+e)*q,l=b.vY=(b.vY+i)*q;b.posX+=j,b.posY+=l}g.clearRect(0,0,f.width,f.height),g.beginPath(),g.fillStyle=r?k:a.color,c(0),g.closePath(),g.fill()},this.addRandomMotion=function(a){for(var b=0;o>b;b++){var c=h[b];c.thetaX+=c.addThetaX,c.thetaY+=c.addThetaY,c.defX=c.baseX+c.yugami*Math.sin(c.thetaX)*a,c.defY=c.baseY+c.yugami*Math.cos(c.thetaY)*a}},f.onmouseover=function(a){var b=a.target.getBoundingClientRect();l=a.clientX-b.left,m=a.clientY-b.top},f.onmousemove=function(a){var b=a.target.getBoundingClientRect(),c=a.clientX-b.left,f=a.clientY-b.top,g=s,k=c-i,p=f-j;s=Math.sqrt(k*k+p*p)<=n-3;var q=l,r=m;if(l=c,m=f,g!==s){var t=d(q,r,l,m),u=l-q,v=m-r,w=r-m,x=-(q-l),y=-w*l-x*m,z=e(w,x,y);if(z.length>0){for(var A=.5*(l+q),B=.5*(m+r),C=[],D=0,E=z.length;E>D;D++)k=A-z[D][0],p=B-z[D][1],C[D]=k*k+p*p;var F=0,G=0;if(2===E){var H=C[0]<C[1]?0:1;F=z[H][0],G=z[H][1]}else F=z[0][0],G=z[0][1];var I=Math.sqrt(u*u+v*v);if(2>I||I>3.5){var J=Math.atan2(v,u),K=2>I?2:3.5;u=Math.cos(J)*K,v=Math.sin(J)*K}for(D=0;o>D;D++){var L=h[D];k=F-L.posX,p=G-L.posY,t=Math.sqrt(k*k+p*p);var M=10/t;t>200&&(M=.2),M>5&&(M=5),isNaN(t)&&(M=0),L.vX+=M*u,L.vY+=M*v}}}}}var g="morphing",h={numVert:6,spring:.005,friction:.9,radius:90,fps:45};d.prototype={init:function(){this.imgLoad(this.$el.find("img").attr("src")).done(a.proxy(this.motion,this))},imgLoad:function(b){var d=a.Deferred();if(!(this.$el.find("img").length>0))return d.resolve();var e=c.createElement("img");return e.src=b,e.onload=function(){return d.resolve()},d.promise()},motion:function(){this.circ=new f(e.apply(this)),this.circ.init(),this.circ.update(),setInterval(a.proxy(this.render,this),1e3/this.fps)},render:function(){this.circ.addRandomMotion(.5),this.circ.update()}},a.fn[g]=function(b){return this.each(function(){a.data(this,"plugin_"+g)||a.data(this,"plugin_"+g,new d(this,b))}),this}}(jQuery,window,document);