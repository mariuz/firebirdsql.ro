function loadHtmlBlock(targetId, blockUrl) 
{
	var currentTime = new Date();
	$.get(blockUrl + '?' + currentTime.getTime(), function(data) 
	{
		$('#' + targetId).html(data);
	});
}

function GetGoogleStatsCounter()
{
  var d = new Date();
  $("#googlestats").load("/analytics/google_analytics.html?"+d.getTime());   
}


function getHashFromString(hash) 
{			
		     if (!hash) return false;
		     hash = hash.replace(/^.*#/, '');		     		     	    		    
		     if ( hash == '' || !isNaN(hash) ) return false;
		     return (hash);
}

function addHash (hash)
{
  var address = new Array();
  address = document.location.href.split('/');   
  
  if (!address[5])
    return document.location.hash = hash;  
   
  if (address[5] != hash)
    return document.location.hash = hash;
  
  if (address[5] == hash)
    return document.location.hash = '';
}
	        	        
function getHash() 
{
   var hash = document.location.hash;
   return getHashFromString(hash);
}

function clearForm()
{
 if(document.getElementById('email').defaultValue == document.getElementById('email').value)
 {
   document.getElementById('email').className = "subscribe";
   document.getElementById('email').value = "";
 }
}

function TestimonialsPost()
{
	document.getElementById('formSend').submit(); 
	$("#divTestimonialsSucces").fadeIn();
	$(".txt").attr("value","");
}
 

//***** Banners *************
var mainTdWidth = 960;
function getScrollY() 
{
	if (window.screen)
	{
		var scroll;
		if ($.browser.msie) {
			scroll = document.documentElement.scrollTop;
		}
		else {
			scroll = window.scrollY;
		}
		return scroll;
	 }
	return 0;
}

function getWindowWidth() 
{
	var windowWidth = 0;
	if (typeof(window.innerWidth) == 'number') {
		windowWidth = window.innerWidth;
	}
	else {
		if (document.documentElement && document.documentElement.clientWidth) {
			windowWidth = document.documentElement.clientWidth;
		}
		else {
			if (document.body && document.body.clientWidth) {
				windowWidth = document.body.clientWidth;
			}
		}
	}
	return windowWidth;
}

function InsetBanners (div_id, file)
{
  var d = new Date();
  if (document.getElementById(div_id))
  {
    $.get('/68854C93/'+file+'.html?id='+d.getTime(),'', 
     function (data) 
     { 
         $('#' + div_id).html(data);        
     }
    );  
  }  
}

function InsetBannersGoogle (div_id, file, pos)
{
  var d = new Date();  
  if (document.getElementById(div_id))
  {
    $.get('/68854C93/'+file+'.html?id='+d.getTime(),'', 
     function(loadedHtml){
    	$('#'+div_id).html(loadedHtml);
    	$('#if_banner_'+pos).attr('src', '/68854C93/content_'+file+'.html?id='+d.getTime());
     });   
  }  
}

function InsetBannersBody (file, color)
{ 
  var d = new Date();   
  
  $.get('/banners/'+file+'.html?id='+d.getTime(),'', 
    function(loadedHtml)
    {
      loadedHtml = loadedHtml.replace(' ', '');				
	  if (loadedHtml && loadedHtml != '') 
		$("body").css('background', 'url('+loadedHtml+') no-repeat center top'+color);
    });  
}

var scroll_baners = new Array();

function FindBanners (Banners,pos)
{

 //--- Calculam ponderea de aparitie
 var pon = 0;
 for (i=0; i<Banners.length; i++) if (Banners[i].possition == pos) pon = pon + Banners[i].priority;       
 var round = Math.random();   
 var con = 1;
 var exists = true;
    
 for (i = Banners.length-1; i>=0; i--)
 {
   if (Banners[i].possition == pos)
   {
         con = con - Banners[i].priority/pon;
         //--- Includem banerul la locul lui ----
         if (round > con) 
         { 
           InsetBanners ('banners_'+Banners[i].possition, Banners[i].id);           
           i = 0;
         }
         
        exists = false;          
   }   
 } 
 
 if (exists)
 {
   //--- verificam daca categoria data are banere daca nare punem google ---
   //InsetBanners ('banners_'+pos, 'google_'+pos);
   /*   
     if (pos == 1 || pos == 2 || pos == 3 || pos == 11)
      InsetBannersGoogle ('banners_'+pos, 'google_'+pos, pos);
     else      
      InsetBanners ('banners_'+pos, 'google_'+pos);
   */
 }     
 
 
} 

function GetBanners (pos)
{   
   var d = new Date();
   $.get('/68854C93/68854C93.js?id='+d.getTime(), '', 
     function (data) 
     {       
       eval(data);       
       FindBanners(Banners,pos);       
     }
    ); 
}
//****end* Banners *************

//**** Comments ********
function SetCommentsSource(fbAppId, fbNumPosts, fbWidth, fbXid)
{
   var div_if = document.getElementById("div_comment");
   if (div_if)
   {
      div_if.innerHTML = '';      
      div_if.innerHTML = '<div id="fb-root"></div> <fb:comments href="'+fbXid+'"  numposts="'+fbNumPosts+'" width="'+fbWidth+'" ></fb:comments>';
                                                          
	  window.fbAsyncInit = function() 
      {
         FB.init({appId: fbAppId, status: true, cookie: true, xfbml: true});
      };
      
      (function() {
        var e = document.createElement('script');
        e.type = 'text/javascript';
        e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
        e.async = true;
        document.getElementById('fb-root').appendChild(e);
       }());
   }   
}

//***** end Comments ********