/**
 * Backbone-Nested 1.1.2 - An extension of Backbone.js that keeps track of nested attributes
 *
 * http://afeld.github.com/backbone-nested/
 *
 * Copyright (c) 2011-2012 Aidan Feldman
 * MIT Licensed (LICENSE)
 */
(function(){var a=[];Backbone.NestedModel=Backbone.Model.extend({get:function(c){var d=Backbone.NestedModel.attrPath(c),b;Backbone.NestedModel.walkPath(this.attributes,d,function(g,f){var e=_.last(f);if(f.length===d.length){b=g[e]}});return b},has:function(c){var b=this.get(c);return !(b===null||_.isUndefined(b))},set:function(d,f,e){var c=Backbone.NestedModel.deepClone(this.attributes),h;if(_.isString(d)){h=Backbone.NestedModel.attrPath(d)}else{if(_.isArray(d)){h=d}}if(h){e=e||{};this._setAttr(c,h,f,e)}else{e=f||{};var b=d;for(var i in b){if(b.hasOwnProperty(i)){this._setAttr(c,Backbone.NestedModel.attrPath(i),e.unset?null:b[i],e)}}}if(!this._validate(c,e)){this.changed={};return false}if(e.unset&&h&&h.length===1){var g={};g[d]=null;Backbone.NestedModel.__super__.set.call(this,g,e)}else{if(e.unset&&h){e=_.extend({},e);delete e.unset}Backbone.NestedModel.__super__.set.call(this,c,e)}this._runDelayedTriggers();return this},clear:function(c){c=c||{};if(!c.silent&&this.validate&&!this.validate({},c)){return false}var e=this.changed={};var b=this;var d=function(h,g,f){_.each(h,function(k,i){var j=g;if(_.isArray(h)){j+="["+i+"]"}else{if(g){j+="."+i}else{j=i}}k=h[i];if(_.isObject(k)){d(k,j,f)}if(!f.silent){b._delayedChange(j,null,f)}e[j]=null})};d(this.attributes,"",c);this.attributes={};this._escapedAttributes={};if(!c.silent){this._delayedTrigger("change")}this._runDelayedTriggers();return this},add:function(b,d,c){var e=this.get(b);if(!_.isArray(e)){throw new Error("current value is not an array")}return this.set(b+"["+e.length+"]",d,c)},remove:function(c,b){b=b||{};var j=Backbone.NestedModel.attrPath(c),g=_.initial(j),d=this.get(g),h=_.last(j);if(!_.isArray(d)){throw new Error("remove() must be called on a nested array")}var f=!b.silent&&(d.length>=h+1),e=d[h];d.splice(h,1);b.silent=true;this.set(g,d,b);if(f){c=Backbone.NestedModel.createAttrStr(g);this.trigger("remove:"+c,this,e);for(var k=g.length;k>=1;k--){c=Backbone.NestedModel.createAttrStr(_.first(g,k));this.trigger("change:"+c,this,e)}this.trigger("change",this,e)}return this},toJSON:function(){return Backbone.NestedModel.deepClone(this.attributes)},_delayedTrigger:function(){a.push(arguments)},_delayedChange:function(b,d,c){this._delayedTrigger("change:"+b,this,d,c);if(!this.changed){this.changed={}}this.changed[b]=d},_runDelayedTriggers:function(){while(a.length>0){this.trigger.apply(this,a.shift())}},_setAttr:function(d,g,f,e){e=e||{};var c=g.length;var b=this;Backbone.NestedModel.walkPath(d,g,function(o,n){var h=_.last(n);var k=Backbone.NestedModel.createAttrStr(n);var m=!_.isEqual(o[h],f);if(n.length===c){if(e.unset){delete o[h];delete b._escapedAttributes[k]}else{o[h]=f}if(!e.silent&&_.isObject(f)&&m){var i=[];var l=function(t,s){if(_.indexOf(i,t)>-1){return}else{i.push(t)}var p,r;for(var q in t){if(t.hasOwnProperty(q)){p=s+"."+q;r=t[q];if(!_.isEqual(b.get(p),r)){b._delayedChange(p,r,e)}if(_.isObject(r)){l(r,p)}}}};l(f,k)}if(f===null){var j=Backbone.NestedModel.createAttrStr(_.initial(g));b._delayedTrigger("remove:"+j,b,o[h])}}else{if(!o[h]){if(_.isNumber(h)){o[h]=[]}else{o[h]={}}}}if(!e.silent){if(n.length>1&&m){b._delayedChange(k,o[h],e)}if(_.isArray(o[h])){b._delayedTrigger("add:"+k,b,o[h])}}})}},{attrPath:function(b){var c;if(_.isString(b)){c=(b==="")?[""]:b.match(/[^\.\[\]]+/g);c=_.map(c,function(d){return d.match(/^\d+$/)?parseInt(d,10):d})}else{c=b}return c},createAttrStr:function(c){var b=c[0];_.each(_.rest(c),function(d){b+=_.isNumber(d)?("["+d+"]"):("."+d)});return b},deepClone:function(b){return $.extend(true,{},b)},walkPath:function(d,g,h,c){var f=d,e;for(var b=0;b<g.length;b++){h.call(c||this,f,g.slice(0,b+1));e=g[b];f=f[e];if(!f){break}}}})}());