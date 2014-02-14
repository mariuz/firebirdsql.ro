var onHashChange = function(event) {
	//get hash function
	var getHashValue = function() {
		var arr = window.location.hash.split("#");
		var hasValue = arr[1];
		//sets default
		if (typeof hasValue == "undefined") {
			return false;
		}

		var hashLen = hasValue.indexOf("?");
		if(hashLen>0){
			hasValue = hasValue.substring(0,hashLen);
		}
		return hasValue;
	}

	//last hash
	var lastHash = getHashValue();

	//checker
	(function watchHash() {
		var hash = getHashValue();

		if (hash !== lastHash) {
			event();
			lastHash = hash;
		}
		
		var t = setTimeout(watchHash, 100);

	})();
}; 

onHashChange(function() 
{
	var hTab = document.location.hash;
	if (hTab)
	{	
		if (hTab == '#welcome')       $("#idDiv_1").trigger('click');
		if (hTab == '#get-started')   $("#idDiv_2").trigger('click');
		if (hTab == '#stay-in-touch') $("#idDiv_3").trigger('click');
		if (hTab == '#consider-your-contribution') $("#idDiv_4").trigger('click');
	}	
});

(function($) {

	$.fn.htmlMenuTab = function(options)
	{
	  
		// default configuration properties
		var defaults = {
		   staticURL  :	''
		}; 
		
		var options = $.extend(defaults, options);  
		
		return this.each(function() 
		{
			var obj = $(this);	
			
			var hTab = document.location.hash;
			if (hTab)
			{
				if (hTab == '#welcome')       OpenDiv1();
				if (hTab == '#get-started')   OpenDiv2();
				if (hTab == '#stay-in-touch') OpenDiv3();
				if (hTab == '#consider-your-contribution') OpenDiv4();
			}
			
			$('#idDiv_1', obj).click(function(){ OpenDiv1(); });			
			$('#idDiv_2', obj).click(function(){ OpenDiv2(); });			
			$('#idDiv_3', obj).click(function(){ OpenDiv3(); });			
			$('#idDiv_4', obj).click(function(){ OpenDiv4(); });
			
			function OpenDiv1()
			{
				loadHtmlBlock('idBlockInfo',  options.staticURL + '/en/start/tab.html');
				document.location.hash = "#welcome";
				$('#idSpan_1', obj).removeClass('c54').addClass('c02');
				$('#idTd_1'  ,  obj).addClass('ver_l_bg');
				$('#idImg_1' , obj).attr({src: '/img/site/menu/ver_l.gif'});				
				$('#idTd_2'  , obj).removeClass().addClass('ver_r_bg');
				$('#idImg_2' , obj).attr({src: '/img/site/menu/ver_r.gif'});
				$('#idTd_1b' , obj).removeClass();
				$('#idTd_2b' , obj).removeClass();
				$('#idTd_3b' , obj).removeClass();
				$('#idImg_1b', obj).attr({src: '/img/site/menu/or_r.gif'});
				$('#idImgTop_1', obj).attr({src: '/img/site/menu/top_sel.png'});
				$('#idImgBottom_1', obj).attr({src: '/img/site/menu/bottom_sel.png'});
				
				$('#idImg_2b', obj).attr({src: '/img/site/vid.gif'});
				$('#idImg_3b', obj).attr({src: '/img/site/vid.gif'});
				
				$('#idImgTop_2', obj).attr({src: '/img/site/menu/top.png'});
				$('#idImgBottom_2', obj).attr({src: '/img/site/menu/bottom.png'});
				$('#idImgTop_3', obj).attr({src: '/img/site/menu/top.png'});
				$('#idImgBottom_3', obj).attr({src: '/img/site/menu/bottom.png'});
				$('#idImgTop_4', obj).attr({src: '/img/site/menu/top.png'});
				$('#idImgBottom_4', obj).attr({src: '/img/site/menu/bottom.png'});
								
				$('#idSpan_2', obj).removeClass('c02').addClass('c54');
				$('#idSpan_3', obj).removeClass('c02').addClass('c54');
				$('#idSpan_4', obj).removeClass('c02').addClass('c54');
				
				$('#idImg_3' , obj).attr({src: '/img/site/vid.gif'});
				$('#idTd_3'  , obj).removeClass();
				
				$('#idImg_4', obj).attr({src: '/img/site/vid.gif'});
				$('#idTd_4', obj).removeClass();
								
				$('#idImg_5', obj).attr({src: '/img/site/vid.gif'});
				$('#idTd_5', obj).removeClass();
				
				$('#idTd_4b'  , obj).addClass('or_bg');
				$('#idTd_5b'  , obj).addClass('or_bg');
				$('#idTd_6b'  , obj).addClass('or_bg');
				$('#idTd_7b'  , obj).addClass('or_bg');
				$('#idTd_8b'  , obj).addClass('or_bg');
				$('#idTd_9b'  , obj).addClass('or_bg');
			}
			
			function OpenDiv2()
			{
				//ajaxCallJSON('providers/Menu/ajaxGetInfo', { divId:'idBlockInfo' , paddress:'get-started'}, '/' );				
				loadHtmlBlock('idBlockInfo',  options.staticURL + '/ro/get-started/tab.html');
				document.location.hash = "#get-started";
				$('#idTd_2'  , obj).removeClass().addClass('ver_l_bg');
				$('#idImg_2' , obj).attr({src: '/img/site/menu/ver_l.gif'});
				$('#idTd_3b' , obj).removeClass();
				$('#idImg_1b', obj).attr({src: '/img/site/menu/or_l.gif'});
				$('#idTd_4b' , obj).removeClass();
				$('#idTd_5b' , obj).removeClass();
				$('#idImg_2b', obj).attr({src: '/img/site/menu/or_r.gif'});
				$('#idTd_3'  , obj).removeClass().addClass('ver_r_bg');
				$('#idImg_3' , obj).attr({src: '/img/site/menu/ver_r.gif'});
								
				$('#idImgTop_1', obj).attr({src: '/img/site/menu/top.png'});
				$('#idImgBottom_1', obj).attr({src: '/img/site/menu/bottom.png'});
				$('#idImgTop_2', obj).attr({src: '/img/site/menu/top_sel.png'});
				$('#idImgBottom_2', obj).attr({src: '/img/site/menu/bottom_sel.png'});
				$('#idImgTop_3', obj).attr({src: '/img/site/menu/top.png'});
				$('#idImgBottom_3', obj).attr({src: '/img/site/menu/bottom.png'});
				$('#idImgTop_4', obj).attr({src: '/img/site/menu/top.png'});
				$('#idImgBottom_4', obj).attr({src: '/img/site/menu/bottom.png'});
				
				$('#idTd_1'  , obj).removeClass();
				$('#idTd_4'  , obj).removeClass();
				$('#idTd_5'  , obj).removeClass();
				
				$('#idImg_1' , obj).attr({src: '/img/site/vid.gif'});
				$('#idImg_4' , obj).attr({src: '/img/site/vid.gif'});
				$('#idImg_5' , obj).attr({src: '/img/site/vid.gif'});
								
				$('#idTd_1b' , obj).addClass('or_bg');
				$('#idTd_2b' , obj).addClass('or_bg');
				$('#idTd_6b' , obj).addClass('or_bg');
				$('#idTd_7b' , obj).addClass('or_bg');
				$('#idTd_8b' , obj).addClass('or_bg');
				$('#idTd_9b' , obj).addClass('or_bg');
				
				$('#idSpan_1', obj).removeClass('c02').addClass('c54');
				$('#idSpan_2', obj).removeClass('c54').addClass('c02');
				$('#idSpan_3', obj).removeClass('c02').addClass('c54');
				$('#idSpan_4', obj).removeClass('c02').addClass('c54');
				
				$('#idImg_3b' , obj).attr({src: '/img/site/vid.gif'});	
			}
			
			function OpenDiv3()
			{
				document.location.hash = "#stay-in-touch";
				loadHtmlBlock('idBlockInfo', options.staticURL + '/en/stay-in-touch/tab.html');
				$('#idImgTop_1'   , obj).attr({src: '/img/site/menu/top.png'});
				$('#idImgBottom_1', obj).attr({src: '/img/site/menu/bottom.png'});
				$('#idImgTop_2'   , obj).attr({src: '/img/site/menu/top.png'});
				$('#idImgBottom_2', obj).attr({src: '/img/site/menu/bottom.png'});
				$('#idImgTop_3'   , obj).attr({src: '/img/site/menu/top_sel.png'});
				$('#idImgBottom_3', obj).attr({src: '/img/site/menu/bottom_sel.png'});
				$('#idImgTop_4'   , obj).attr({src: '/img/site/menu/top.png'});
				$('#idImgBottom_4', obj).attr({src: '/img/site/menu/bottom.png'});
				
				$('#idTd_1'  , obj).removeClass();
				$('#idTd_2'  , obj).removeClass();
				$('#idTd_3'  , obj).removeClass().addClass('ver_l_bg');
				$('#idTd_4'  , obj).removeClass().addClass('ver_r_bg');
				$('#idTd_5'  , obj).removeClass();
				
				$('#idImg_1' , obj).attr({src: '/img/site/vid.gif'});
				$('#idImg_2' , obj).attr({src: '/img/site/vid.gif'});
				$('#idImg_3' , obj).attr({src: '/img/site/menu/ver_l.gif'});
				$('#idImg_4' , obj).attr({src: '/img/site/menu/ver_r.gif'});
				$('#idImg_5' , obj).attr({src: '/img/site/vid.gif'});
				
				$('#idImg_1b' , obj).attr({src: '/img/site/vid.gif'});
				$('#idImg_2b' , obj).attr({src: '/img/site/menu/or_l.gif'});
				$('#idImg_3b' , obj).attr({src: '/img/site/menu/or_r.gif'});
								
				$('#idTd_1b' , obj).addClass('or_bg');
				$('#idTd_2b' , obj).addClass('or_bg');
				$('#idTd_3b' , obj).addClass('or_bg');
				$('#idTd_4b' , obj).addClass('or_bg');
				$('#idTd_5b' , obj).removeClass();
				$('#idTd_6b' , obj).removeClass();
				$('#idTd_7b' , obj).removeClass();
				$('#idTd_8b' , obj).addClass('or_bg');
				$('#idTd_9b' , obj).addClass('or_bg');
				
				$('#idSpan_1', obj).removeClass('c02').addClass('c54');
				$('#idSpan_2', obj).removeClass('c02').addClass('c54');
				$('#idSpan_3', obj).removeClass('c54').addClass('c02');
				$('#idSpan_4', obj).removeClass('c02').addClass('c54');	
			}
			
			function OpenDiv4()
			{
				//ajaxCallJSON('providers/Menu/ajaxGetInfo', { divId:'idBlockInfo' , paddress:'consider-your-contribution'}, '/' );
				document.location.hash = "#consider-your-contribution";
				loadHtmlBlock('idBlockInfo', options.staticURL + '/en/consider-your-contribution/tab.html'); 
				$('#idImgTop_1'   , obj).attr({src: '/img/site/menu/top.png'});
				$('#idImgBottom_1', obj).attr({src: '/img/site/menu/bottom.png'});
				$('#idImgTop_2'   , obj).attr({src: '/img/site/menu/top.png'});
				$('#idImgBottom_2', obj).attr({src: '/img/site/menu/bottom.png'});
				$('#idImgTop_3'   , obj).attr({src: '/img/site/menu/top.png'});
				$('#idImgBottom_3', obj).attr({src: '/img/site/menu/bottom.png'});
				$('#idImgTop_4'   , obj).attr({src: '/img/site/menu/top_sel.png'});
				$('#idImgBottom_4', obj).attr({src: '/img/site/menu/bottom_sel.png'});
				
				$('#idTd_1'  , obj).removeClass();
				$('#idTd_2'  , obj).removeClass();
				$('#idTd_3'  , obj).removeClass();
				$('#idTd_4'  , obj).removeClass().addClass('ver_l_bg');
				$('#idTd_5'  , obj).removeClass().addClass('ver_r_bg');
				
				$('#idImg_1' , obj).attr({src: '/img/site/vid.gif'});
				$('#idImg_2' , obj).attr({src: '/img/site/vid.gif'});
				$('#idImg_3' , obj).attr({src: '/img/site/vid.gif'});
				$('#idImg_4' , obj).attr({src: '/img/site/menu/ver_l.gif'});
				$('#idImg_5' , obj).attr({src: '/img/site/menu/ver_r.gif'});
				
				$('#idImg_1b' , obj).attr({src: '/img/site/vid.gif'});
				$('#idImg_2b' , obj).attr({src: '/img/site/vid.gif'});
				$('#idImg_3b' , obj).attr({src: '/img/site/menu/or_l.gif'});
							
				$('#idTd_1b' , obj).addClass('or_bg');
				$('#idTd_2b' , obj).addClass('or_bg');
				$('#idTd_3b' , obj).addClass('or_bg');
				$('#idTd_4b' , obj).addClass('or_bg');
				$('#idTd_5b' , obj).addClass('or_bg');
				$('#idTd_6b' , obj).addClass('or_bg');
				$('#idTd_7b' , obj).removeClass();
				$('#idTd_8b' , obj).removeClass();
				$('#idTd_9b' , obj).removeClass();
				
				$('#idSpan_1', obj).removeClass('c02').addClass('c54');
				$('#idSpan_2', obj).removeClass('c02').addClass('c54');
				$('#idSpan_3', obj).removeClass('c02').addClass('c54');
				$('#idSpan_4', obj).removeClass('c54').addClass('c02');	
			}
			
	    });
		
	}
	
})(jQuery);
