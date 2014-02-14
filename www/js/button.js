;(function($) {

	$.fn.htmlButton = function(options)
	{
	  
		// default configuration properties
		var defaults = {
			imgSrc    : '/img/site/btn/',
			imgType   : '.png',
			imgLeft   : 'btn_left_1',
			imgRight  : 'btn_right_1',
			btnBGround: 'btn_bg_1',
			extDefault: '_0',
			extSelect : '_1',
			link      : '',
			text      : 'More',
			align     : 'left'
		}; 
		
		var options = $.extend(defaults, options);  
		
		return this.each(function() 
		{
			var obj = $(this);			
			obj.append(
			   $('<div class="iPdivBotton" style="float: '+options.align+';"></div>')
			       .css({
					 'cursor': 'pointer'					 
				    }) 
			       .click(function(){
			    	   window.top.location = options.link;	 
			        })
			       .append(
			    		   '<table cellspacing="0" cellpadding="0" border="0"><tr>'+
			    		      '<td width="5"><img class="iPimgLeft" src="'+options.imgSrc+options.imgLeft +options.extDefault+options.imgType+'" alt="" /></td>'+
			    		      '<td class="iPCenter" style="background: url('+options.imgSrc+options.btnBGround+options.extDefault+options.imgType+') repeat-x top;"><div style="padding: 0px 5px 0px 5px; font-weight: bold;">'+options.text+'</div></td>'+
			    		      '<td width="5"><img class="iPimgRight" src="'+options.imgSrc+options.imgRight+options.extDefault+options.imgType+'" alt="" /></td>'+
			    		    '</tr></tabke>'
			    		   )			       
			);
			
			$('.iPdivBotton', obj).mouseover(function()
			{			
				$('.iPimgLeft',this) .attr({src: options.imgSrc+options.imgLeft +options.extSelect+options.imgType});
				$('.iPCenter',this).css({'background' : 'url("'+options.imgSrc+options.btnBGround+options.extDefault+options.imgType+'") repeat-x top;'});
				$('.iPimgRight',this).attr({src: options.imgSrc+options.imgRight+options.extSelect+options.imgType});
				
			});
			
			$('.iPdivBotton', obj).mouseout(function()
			{
				$('.iPimgLeft',this) .attr({src: options.imgSrc+options.imgLeft +options.extDefault+options.imgType});
				$('.iPCenter',this).css({'background' : 'url("'+options.imgSrc+options.btnBGround+options.extDefault+options.imgType+'") repeat-x top;'});
				$('.iPimgRight',this).attr({src: options.imgSrc+options.imgRight+options.extDefault+options.imgType});				
			});

	    });
		
	}
	
})(jQuery);