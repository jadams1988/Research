jQuery(document).ready(function(l){if(!window.console){window.console={log:function(){},warn:function(){},error:function(){},time:function(){},timeEnd:function(){}}}l(".wuForm").each(function(){wui.wuForm(l(this))});var G=l(".chosen-select");if(G.chosen){G.chosen()}o();var c=wui.bootstrapped;var F={page:new wui.Models.Page()};var m=new wui.Collections.Favorites();if(typeof c.popularcities!=="undefined"){m.loadAsync(c.popularcities)}if(c.favorites){var d=new wui.Collections.Favorites(c.favorites)}else{var d=new wui.Collections.Favorites();d.loadAsync(c.citylist)}var v={favorites:d,recents:new wui.Collections.Location(c.recents),popular:m};var n=_.pick(c,"localtime");F.page.set(n);var u=_.pick(c,"usertime");F.page.set(u);wui.page={models:F,collections:v,views:{}};var p={};var f=null;f=l("#favorites")[0];if(f){p.favoritesView=new wui.Views.Favorites({model:F.page,collections:{favorites:v.favorites,recents:v.recents,popular:v.popular},el:f})}wui.page.views=p;var G=l("#wuSearch");var j=G.attr("data-autoinitialize");if(G[0]&&j=="true"){var E=new wui.autocomplete({autosubmit:true,data:{ski:1,features:1},includeFavorites:true,includePWS:true,includeHeaderGeoLocate:true,includeRecents:true,includePopular:true,input:"#wuSearch",isMainSearchBox:true,minLength:0,showConditions:true,showFavoriteStars:true})}l("#wuSubmit").click(function(){l("#wuForm").submit()});if(!window.adsBlocked&&!l("body").hasClass("paid")){l("#top-ad-wrapper").attr("style","display: block !important;visibility:visible !important;");l(".ads-blocked").removeClass("hide")}l("#comments .text .postContent IMG").each(function(I){var H=l(this);H.css("max-width",501);var J=500;var a=H.width();if(a>J){H.width(J)}H.bind("load",function(L){var K=H.width();if(K>J){H.width(J)}})});wui.glossary.initialize();var q=334,i=162;l(".casterMapMarker").each(function(H){var a=l(this);var I=a.next("div").html();a.removeClass("none");var K=parseFloat(a.css("left"));var J=parseFloat(a.css("top"));if(K<-3){K=-3}if(K>311){K=311}if(J<-3){J=-3}if(J>141){J=141}K=100*K/q+"%";J=100*J/i+"%";a.css({left:K,top:J});new wui.tooltip({button:a,content:I,hoverClass:"hover",position:{collision:"fit none"}})});function o(){l(document).on("click",".button-group.toggle .button",function(a){wui.wuForm.buttonGroup.select(this)})}if(l("#share")[0]&&c&&c.async){var y=null;if(c.share){y=c.share}if(!y||y.autoInitialize!==false){wui.page.views.share=new wui.Views.Share({render:true,el:l("#share")[0]})}}if(l("#membership-wrap")[0]){wui.page.views.membership=new wui.Views.MembershipForm({render:true,el:l("#membership-wrap")[0]})}if(l("#wu-member-validated")[0]){l("#wu-member-validated").foundation("reveal","open")}if(l("#wu-member-not-validated")[0]){l("#wu-member-not-validated").foundation("reveal","open");wui.page.views.membershipAlmost=new wui.Views.MembershipAlmost({render:false,authenticated:true,el:l("#membership-not-validated")[0]})}l("body").on("click",".resend-validation-btn",function(){var I=l(this);var H=I.siblings(".resend-status");var a=I.data("email");var J=I.text();if(I.hasClass("disabled")){return false}I.addClass("disabled");H.addClass("loading");l.ajax("/member/sendvalidationemail",{data:{email:a},dataType:"json"}).then(function(K){var L=l.Deferred();if(K&&K.status==="success"){L.resolve(K)}else{L.reject(K)}}).done(function(K){H.text("Your email is on its way!")}).fail(function(L){var K="We were unable to resend validation email at this time. Please try again later.";if(L.errors&&L.errors.length){K=L.errors[0].error_string}else{}H.text(K)}).complete(function(){H.removeClass("loading")});return false});l(".flipper-item").on("change",function(K){var J=K.target;var I=l(J);var a=I.siblings('label["for='+J.id+'"]');var H=a.find(".flipper-label");var L=a.find(".flipper-input");if(J.checked){H.addClass("hide");L.removeClass("hide")}else{L.val("").addClass("hide");H.removeClass("hide")}});l(".flipper-label").on("click",function(a){if(l(this).find("input").is(":visible")&&this!==a.target){return false}});var w={CityPage:z,WunderMap:h,Index:k,NewsArticle:A,RadarSingleSite:B,RadarNationalMap:D,RadarRegionalMap:s,Video:C,SkiIndex:t,SkiResort:t,MemberSettings:r,Precip:e,SelectAlertLocation:x,VideoShare:b,Default:g};if(wui.bootstrapped.pageType){w[wui.bootstrapped.pageType]()}else{w.Default()}function z(){var a=_.pick(c.citypage,"zmw");F.page.set(a);var H=wui.api_done;H.done(function(){if(!wui.asyncCityPage){wui.api_data=wui.bootstrapped.API}wui.citypage.App=new wui.citypage.AppView({model:F.page,models:{},el:l("#city-page")[0]})})}function h(){var J=true;if(wui&&wui.autocomplete){var I=wui.bootstrapped.search;var H=new wui.autocomplete({appendTo:"#wmForm",autosubmit:false,data:{ski:1,features:0},includeFavorites:true,includeHeaderGeoLocate:true,includePWS:true,input:"#wuSearch",minLength:0,showConditions:true,showFavoriteStars:true,search:I,onSelect:function(K,a){wundermap.search.useAutocomplete(K,a)},onOpen:function(a,K){if(!J){return}J=false;if(H.options.search){var M=l(this).autocomplete("widget").children(".ui-menu-item").eq(0);var L=l(this).data("autocomplete").menu;L.next(new l.Event("click"));L.select(new l.Event("click"))}}})}l("#wuSearch").focus(function(){if(this.value.length==0){l(this).autocomplete("search")}});l("#wuSubmit").click(function(){l("#wmForm").submit()});if(!l("body").hasClass("paid")){wui.ads.initialize({interval:wui.bootstrapped.ads.interval,enableAdRefresh:wui.bootstrapped.ads.enableAdRefresh});wui.ads.start()}}function k(){if(wui.indexpage){wui.indexpage.App=new wui.indexpage.AppView({model:F.page,models:{},el:l("#city-page")[0]})}l("#list-slider").click(function(){if(l("#list").hasClass("hidden-right")){l("#list").removeClass("hidden-right");l("#list-slider").addClass("open")}else{l("#list").addClass("hidden-right");l("#list-slider").removeClass("open")}});l(".close-list").click(function(){if(l("#list-slider").hasClass("open")){l("#list").addClass("hidden-right");l("#list-slider").removeClass("open")}});var J=l("#hpSearch");if(J[0]){var H=new wui.autocomplete({autosubmit:true,data:{ski:1,features:1},includeFavorites:true,includePWS:true,includeRecents:true,includePopular:true,input:"#hpSearch",isMainSearchBox:true,minLength:0,showConditions:true,showFavoriteStars:true})}l(window).resize(function(){l(".video-slide").height(l("#image1").height())});var K=true;if(wui&&wui.autocomplete){var I=wui.bootstrapped.search;var H=new wui.autocomplete({appendTo:"#wmForm",autosubmit:false,data:{ski:0,features:0},includeFavorites:true,includeGeoLocate:true,includePWS:false,input:"#mapSearch",minLength:0,showConditions:true,showFavoriteStars:true,search:I,onSelect:function(L,a){wundermap.search.useAutocomplete(L,a)},onOpen:function(a,L){if(!K){return}K=false;if(H.options.search){var N=l(this).autocomplete("widget").children(".ui-menu-item").eq(0);var M=l(this).data("autocomplete").menu;M.next(new l.Event("click"));M.select(new l.Event("click"))}}})}l("#mapSearch").focus(function(){if(this.value.length==0){l(this).autocomplete("search")}});l("#map-search-button").click(function(){l("#wmForm").submit()});var J=l("#hp-video-tile");if(J[0]){wui.page.views.hpvideotile=new wui.Views.HPTileVideos({el:J[0]})}}function A(){var a=l("#video");if(a[0]&&a.data("videoId")){wui.App=new wui.Views.VideoApp({el:a[0],collid:a.data("videoId"),isSingleVideo:true})}}function B(){var H=wui.bootstrapped.radarstations.country;var a=new wui.Views.RadarApp({country:H});if(H=="au"||H=="ca"){a.views.radarMapselector=new wui.Views.RadarMapselector({models:{radblast:a.models.radblast},el:l("#radblast #map")[0],country:H})}}function D(){var H=wui.bootstrapped.radarstations.country;var a=new wui.Views.RadarApp({country:H});if(H=="au"){a.views.radarMapselector=new wui.Views.RadarMapselector({models:{radblast:a.models.radblast},el:l("#radar-regionmap #map")[0],country:H,lat:-27.9,lon:140.5,draggable:false})}else{if(H=="ca"){a.views.radarMapselector=new wui.Views.RadarMapselector({models:{radblast:a.models.radblast},el:l("#radar-regionmap #map")[0],country:H,lat:54,lon:-97.5,dragRefresh:true,maxbounds:false})}}}function s(){var H=wui.bootstrapped.radarstations.country;var a=new wui.Views.RadarApp({country:H})}function C(){var a=l("#video");if(a[0]){wui.App=new wui.Views.VideoApp({el:a[0],clipid:c.videos.clipid,playlists:c.videos.playlists})}if(wui.bootstrapped.videos.hasCondsCard==1){var a=l("#conditions-card");if(a[0]){wui.CondsCard=new wui.Views.CondsCard({el:a[0],models:{},home_zmw:c.indexpage.home_loc.zmw,geoip_lat:c.indexpage.geoip.lat,geoip_lon:c.indexpage.geoip.lon})}}}function t(){var a=new wui.Views.SkiApp({model:F.page})}function r(){if(l("#premium-box").length){var a=new wui.Views.UpgradeMembershipView({el:l("#premium-box")[0]})}if(l("#mobile-gift-box").length){var a=new wui.Views.UpgradeMembershipView({el:l("#mobile-gift-box")[0]})}}function e(){var a=_.pick(c.citypage,"zmw");F.page.set(a);var H=new wui.precip.AppView({el:l("#precip-start-stop")[0],model:F.page})}function x(){alertsApp.router=new alertsApp.Router();l(".initialLoad").hide();Backbone.history.start()}function b(){var a=l("#video");if(a[0]){wui.App=new wui.Views.VideoApp({el:a[0],collid:wui.bootstrapped.queryVideoId||"",isSingleVideo:true})}}function g(){if(!l("body").hasClass("paid")){wui.ads.initialize({interval:wui.bootstrapped.ads.interval,enableAdRefresh:wui.bootstrapped.ads.enableAdRefresh});wui.ads.start()}}l(document).foundation();if(wui.bootstrapped.showDailyDownpourTDU&&l("#ustream-tdu")[0]){wui.page.views.ustreamTDU=new wui.Views.UstreamTDUView({render:true,el:l("#ustream-tdu")[0]})}});