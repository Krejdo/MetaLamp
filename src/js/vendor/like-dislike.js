/**
 * like-dislike.js v1.0.1
 * @link https://github.com/uagrace/like-dislike
 * @copyright 2016 Maxim Tkachuk <mxtkachuk@gmail.com>
 * Licensed under the MIT license
 */
!function(s){function i(i,t){
	this.element=i,this.opts=s.extend({},n,t),this.init()
}
	var t="like",e="dislike",n={
		click:null,
		beforeClick:null,
		initialValue:0,
		reverseMode:!0,
		readOnly:!1,
		likeBtnClass:"like",
		dislikeBtnClass:"dislike",
		activeClass:"activeBtn",
		disabledClass:"disabled"};
	i.prototype={
		init:function(){
			if(this.btns=s(this.element).find("."+this.opts.likeBtnClass+", ."+this.opts.dislikeBtnClass),this.readOnly(this.opts.readOnly),0!==this.opts.initialValue){
				var i=1===this.opts.initialValue?t:e;this.btnDown(i)
			}
			return this
		},
		readOnly:function(s){
			var i=this.btns;if(s)this.disable(i);else{if(!this.opts.reverseMode){var t=i.not("."+this.opts.activeClass);t.length&&(i=t)}this.enable(i)}
		},
		getBtn:function(i){
			return i===t?s(this.element).find("."+this.opts.likeBtnClass):i===e?s(this.element).find("."+this.opts.dislikeBtnClass):void s.error("Wrong btnType: "+i)
	},
	btnDown:function(s){
		var i=this.getBtn(s);i.addClass(this.opts.activeClass),this.opts.reverseMode||this.disable(i)
	},
	btnUp:function(s){
		var i=this.getBtn(s);i.removeClass(this.opts.activeClass),this.opts.reverseMode||this.enable(i)
	},
	enable:function(i){
		var n=this,l=n.opts;i.removeClass(l.disabledClass),l.beforeClick&&i.on("beforeClick",function(s){
			return l.beforeClick.call(n,s)
		}),
		i.on("click",function(i){
			var a=s(this);if(l.beforeClick&&!a.triggerHandler("beforeClick"))return!1;var o=a.hasClass(l.likeBtnClass)?t:e,r=n.btns.hasClass(l.activeClass),h=a.hasClass(l.activeClass),d=0,c=0,b=0;o===t?h?(n.btnUp(t),c=-1):(r&&(n.btnUp(e),b=-1),n.btnDown(t),c=1,d=1):h?(n.btnUp(e),b=-1):(r&&(n.btnUp(t),c=-1),n.btnDown(e),b=1,d=-1),l.click.call(n,d,c,b,i)
		})
	},
	disable:function(s){
		s.addClass(this.opts.disabledClass),s.off()
	}},
	s.fn.likeDislike=function(t){
		return this.each(function(){s.data(this,"plugin_LikeDislike")||s.data(this,"plugin_LikeDislike",new i(this,t))})
	}}(jQuery);

	$('#rating').likeDislike({
		initialValue: 0,
		click: function (value, l, d, event) {
			var likes = $(this.element).find('.likes');
	
			likes.text(parseInt(likes.text()) + l);
		}
	});