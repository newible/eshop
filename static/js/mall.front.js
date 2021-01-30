var hascategoryul = false;
$(document).ready(function() {
	$('.news').bind('click',function(){
		var that=this;
		if($('.newsSubject').attr("style").indexOf("display: none")!=-1){
			$('.newsSubject').show();
		}else{
			$('.newsSubject').hide();
		}
	});
	
	if($('.flexslider').length>0){
		$('.flexslider').flexslider({  
	        directionNav: true,  
	        slideshowSpeed: 5000,
	        pauseOnAction: false  
	    });  
	}
	
	$(".searchtag").click(function() {
		searchByKeyword();
	});
	$('.searchinput').bind('keypress', function(event) {
		if (event.keyCode == "13") {
			searchByKeyword();
		}
	});
	if($(".categoryul").length>0){
		var from_=$(".categoryul").attr("data-from");
		var url = $(".wrap").attr("data-path") + "/categorysale/data";
		if(from_=="search"){
			url =$(".wrap").attr("data-path") + "/product/search/condition?keyword="+$(".searchinput").val();
		}
		getX({url:url,success:function(data){
			hascategoryul = true;
			if(data.state==1){
				appendCateMenu(data.data,$(".categoryul"),$(".categoryul").attr('data-from'),null,0,21);
				
				$(".categoryul").find("li a").bind("click",function(){
					if($(this).parent().find("ul").length>0){
						var tag = $(this).parent().find("ul:first");
						tag.toggle();
						
					}else{
						loadProduct($(this).attr("data-id"));
					}
					$(this).addClass("current").parent().siblings().find("a").removeClass("current");
				})
				var categoryId = $(".categoryul").attr('data-selected-categoryId');
				
				function showParents($element){
					if($element.length>0){
						$element.show();
						showParents($element.parent());
					}
				}
				var $element = $(".categoryul").find("li[data-category-id='"+categoryId+"']");
				if($element.length>0){
					$element.find("a").addClass("current");
					showParents($element.parent());
				}
			}
		}});
	}
});

function appendCateMenu(data,$parent,from_,parentData,index,fontsize){
	var margin = 30*index;
	var fontsize = fontsize - index*2;
	index++;
	$(data).each(function(i,o){
		var $li =$('<li data-category-id="'+o.id+'"></li>');
		if(from_=="search" && o.count){ 
			$li.append('<a href="javascript:;" style="font-size:'+fontsize+'px" class="categoryMenu" data-id="'+o.id+'" data-imgPathPC="'+o.imgPathPc+'">'+o.name+'<samp class="categoryMenuCount" style="font-size: 14px;font-weight: 0;">（'+o.count+'）</samp></a>');
		}else{
			let fontColor = "";
			let notFontColor = "notFontColor";
			if(o.fontColor){
				fontColor = "color:"+o.fontColor+";";
				notFontColor =""; 
			}
			$li.append('<a href="javascript:;" style="font-size:'+fontsize+'px;'+fontColor+'" class="categoryMenu '+notFontColor+'" data-id="'+o.id+'" data-imgPathPC="'+o.imgPathPc+'">'+o.name+'</a>');
		}
		$($parent).append($li);
		
		if(o.children && o.children.length>0){
			var parentId = parentData==null?"":parentData.id;
			var $ul = $('<ul style="margin-left:'+margin+'px;display:none;" data-category-id="'+parentId+'" ></ul>').appendTo($li);
			appendCateMenu(o.children,$ul,from_,o,index,fontsize);
		} 
	});
	$(".categoryMenu").bind("click",function(event){
		$(this).parent().siblings().find("ul").hide();
	});
}

function checkMobile(mobile) {
	var reg = /^1[0-9]{10}$/;
	if (mobile == null || mobile == "" || !reg.exec(mobile))
		return false;
	return true;
}

function searchByKeyword() {
	var keyword = $(".searchinput").val();
	var url = $(".wrap").attr("data-path") + "/product/search/page?keyword="+keyword;
	window.location.href=url;
}

/*
 * loading 不为空 添加loading进度条{msg:"loading..."}
 */
function postX(options,loading){
	var customBeforeSend = options.beforeSend;
	var customComplete = options.complete;
	var customSuccess = options.success;
	var customError = options.error;
	delete options.beforeSend;
	delete options.complete;
	delete options.success;
	delete options.error;
	var defaults={
			type:"POST",cache: false,
			contentType:"application/x-www-form-urlencoded; charset=utf-8",
			dataType:"json",timeout:30000, 
			data:{},
			beforeSend:function(xhr){
				xhr.withCredentials = true;
				if(loading){
					loading_(loading.msg);
				}
				if(customBeforeSend){
					customBeforeSend();
				}
			},
			complete:function(){
				if(loading){
					loading_remove();
				}
				if(customComplete){
					customComplete();
				}
			},
			success:function(data,status){
				if(customSuccess){
					customSuccess(data,status);
				}
			},
			error:function(request,statuText){
				if(request.status==401){
					window.location.href="/login";
				}else if(request.status==400){
					tip("请求参数错误!");
				} else{
					if(statuText == "timeout"){
						tip("请求超时!");
					}else{
						if(customError){
							customError(request,statuText);
						}else{
							tip(statuText);
						}
					}
				}
			}
	}	
	var opts = $.extend(defaults, options);
	$.ajax(opts);
}
/*
 * loading 不为空 添加loading进度条{msg:"loading..."}
 */
function getX(options,loading){
	var customBeforeSend = options.beforeSend;
	var customComplete = options.complete;
	var customSuccess = options.success;
	var customError = options.error;
	delete options.beforeSend;
	delete options.complete;
	delete options.success;
	delete options.error;
	var defaults={
			type:"get",
			contentType:"application/x-www-form-urlencoded; charset=utf-8",
			dataType:"json",
			timeout:30000,
			data:{},
			cache:false,
			beforeSend:function(){
				if(loading){
					loading_(loading.msg);
				}
				if(customBeforeSend){
					customBeforeSend();
				}
			},
			complete:function(){
				if(loading){
					loading_remove();
				}
				if(customComplete){
					customComplete();
				}
			},
			success:function(data,status){
				if(customSuccess){
					customSuccess(data,status);
				}
			},
			error:function(request,statuText){
				if(request.status==401){
					window.location.href="/login";
				}else if(request.status==400){
					tip("请求参数错误!");
				} else{
					if(statuText == "timeout"){
						tip("请求超时!");
					}else{
						if(customError){
							customError(request,statuText);
						}else{
							tip(statuText);
						}
					}
				}
			}
	}
	
	var opts = $.extend(defaults, options);
	$.ajax(opts);
}
function tip(msg){
	$(".tips p").html(msg);
	$(".tipsb").show();
}
function updateCartQuntity(num){
	var cartnum = $(".cartnum").html();
	$(".cartnum").html(Number(cartnum)+num);
}


/* ${basePath} 无效果，写在了setting.html 中
function updateCartBag(carts){
	$("#cartBagDiv").html('');
//	let count = carts.length>4?4:carts.length;
	var cartbox =$('<div style="min-height: 160px;overflow-y:auto;max-height: 300px;"></div>');
	for(var i in carts){
		var cart = carts[i];
		var obj = "<table class='cartTab'>"
			+"<tr><td rowspan='4'><a href='/product/detail/"+cart.productColorId+".html' ><img class='cartImg' alt='' src='"+cart.productColorImg+"'></a></td></tr>"
			+"<tr><td><span style='font-size: 5px'>"+cart.sku.product.name+"</span></td></tr>"
			+"<tr><td><span style='font-size: 5px'>"+cart.sku.color.name+cart.sku.sizeAlias+"</span></td></tr>"
			+"<tr><td><span style='font-size: 5px'>￥"+cart.sku.product.tranPrice+" x "+cart.quantity+"</span></td></tr>"
			+"</table>";
		$(cartbox).append(obj);
	}
	let carta = $('<a style="margin: 20px auto 0px;background: #0047BB;font-size: 14px;color: #fff;width:150px;padding:7px 0;text-align:center;display:block;" href="${basePath}/shopping/cart/index" >立即购买</a>'); 
	$("#cartBagDiv").append(cartbox);
	$("#cartBagDiv").append(carta);
}*/
function dialog(title,content,fun){
	$('.dialog_ #dialog_cancel').mouseover(function(){
		$(this).css('color',"#000");
	});
	$('.dialog_ #dialog_cancel').mouseout(function(){
		$(this).css('color',"#ccc");
	});
	$('.dialog_ #dialog_title').html(title);
	$('.dialog_ #dialog_content').html(content);
	$('.dialog_ #dialog_save').unbind().bind('click',fun);
	$('.dialog_').show();
}
function dialog2(width_,height_,title,content){
	
	$('.dialog_ .dialog_text').css({"width":width_,"height":height_,"top":"20%"})
	
	$('.dialog_ #dialog_cancel').mouseover(function(){
		$(this).css('color',"#000");
	});
	$('.dialog_ #dialog_cancel').mouseout(function(){
		$(this).css('color',"#ccc");
	});
	$('.dialog_ #dialog_title').html(title);
	$('.dialog_ #dialog_content').html(content);
	
	$('.dialog_ #dialog_save').hide();
	$('.dialog_ #dialog_save').siblings().hide();
	$('.dialog_').show();
}
function dialogClose(){
	$('.dialog_').hide();
}
//about
function static_active(tag) {
	var box =$(tag).parent().find('.section_content_box');
	var has =box.attr("style").indexOf("display: none;");
	var basePath=$(tag).attr("data-path");
	if(has!=-1){
		box.show();
		$(tag).find('img').attr("src",basePath+"/images/arrow-up.png");
	}else{
		$(tag).find('img').attr("src",basePath+"/images/arrow-down.png");
		box.hide();
	}
}
function loading_(text){
	if(text==undefined){
		text="加载中..."
	}
	var loading_ = $('<div class="loading_ v-modal" style="z-index: 2006;"></div>');
	var loading_box = $('<div class="loading_box"></div>');
	var loading_con = $('<div class="loading_con"></div>');
	var loading_txt = $('<div class="loading_txt">'+text+'</div>');
//	var loading_img_left = $('<img class="loading_img_left flip-horizontal" src="/images/loading.gif"/>');
//	var loading_img_right = $('<img class="loading_img_right" src="/images/loading.gif"/>');
	$(loading_box).append(loading_con);
	$(loading_box).append(loading_txt);
//	$(loading_box).append(loading_img_left);
//	$(loading_box).append(loading_img_right);
	$(loading_).append(loading_box);
	$('body').append(loading_);
	$('.loading_con').animate({width:"100%"},8000);
}
function loading_remove(){
	$('.loading_con').stop();
	$('.loading_con').css("width","100%");
//	$('.loading_txt').stop();
	$('.loading_txt').css("color","white");
	$('.loading_txt').html("完成");
	setTimeout(function(){
		$('.loading_').remove();
	},500);
}
function nameVerification(inputVal){  
    //去除首尾空格  
    inputValinputVal = inputVal.replace(/^\s*|\s*$/g,"");  
    //零长字串不作处理  
    if ( inputVal.length == 0 )  
    {  
        return;  
    }  
    //只能匹配数字,字母或汉字  
    var _match = inputVal.match(/^[a-zA-Z0-9\u4e00-\u9fa5]+$/g);  
    //匹配数字或字母(包括大小写)  
    var codeMatch = inputVal.match(/[a-zA-Z0-9]/g);  
    //匹配汉字  
    var charMatch = inputVal.match(/[\u4e00-\u9fa5]/g);  
    //数字或字母个数  
    var codeNum = codeMatch ? codeMatch.length : 0;  
    //汉字个数  
    var charNum = charMatch ? charMatch.length : 0;  
    //成功  
    if ( _match && codeNum + 2*charNum <= 11 )  
    {  
        return true;  
    }  
    //失败  
    return false;
} 
function loadProduct(cateId,tag){
	window.location.href="/product/search/page?categoryId="+cateId;
}
function getScrollTop() {　　
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;　　
    if (document.body) {　　　　
        bodyScrollTop = document.body.scrollTop;　　
    }　　
    if (document.documentElement) {　　　　
        documentScrollTop = document.documentElement.scrollTop;　　
    }　　
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;　　
    return scrollTop;
}
//文档的总高度
function getScrollHeight() {　　
    var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;　　
    if (document.body) {　　　　
        bodyScrollHeight = document.body.scrollHeight;　　
    }　　
    if (document.documentElement) {　　　　
        documentScrollHeight = document.documentElement.scrollHeight;　　
    }　　
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;　　
    return scrollHeight;
}
//浏览器视口的高度
function getWindowHeight() {　　
    var windowHeight = 0;　　
    if (document.compatMode == "CSS1Compat") {　　　　
        windowHeight = document.documentElement.clientHeight;　　
    } else {　　　　
        windowHeight = document.body.clientHeight;　　
    }　　
    return windowHeight;
}