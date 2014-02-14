function getFormValues(formName)
{
    if (!document.getElementById(formName)) return false;
    
	var form = document.getElementById(formName);
	var formValues = {};
	for(i = 0; i < form.elements.length; i++)
	{
		if(form.elements[i].id != "")
		{
			if(form.elements[i].type == "checkbox" || form.elements[i].type == "radio")
			{
			    if (form.elements[i].id.indexOf('[]') == form.elements[i].id.length - 2)
				{
				  var name = form.elements[i].id.substr(0, form.elements[i].id.length - 2);
				  if (!(formValues[name]) || (formValues[name] == null) || (formValues[name] == 'undefined'))
				  {
				    formValues[name] = new Array();
				  }
				  if (form.elements[i].checked)
				  {
				    formValues[name].push(form.elements[i].value);
				  }
				}
				else
				{
				  formValues[form.elements[i].id] = form.elements[i].checked;
				}				
			}
			else 
			{			   
				formValues[form.elements[i].id] = form.elements[i].value;
			}
		}
	}
	return formValues;
}

function ajaxCallJSON(functionPath, data, url)
{		
	if(data == undefined) { data = null; }
	if(url  == undefined) { url  = '';} 
	$.post(url+"index.php?ajaxCall=" + functionPath, {data : $.toJSON(data)}, 
			function(xml)
			{
				//alert('XML');
		    $(xml).find('response').each(function(){
			  $(this).children().each(function(){
				//alert('Item: ' + this.nodeName);
				if(this.nodeName == "assign")
				{								
					var id = $(this).attr('to');
					var prop = $(this).attr("property");
					var value = $(this).text();
					$("#" + id).attr(prop, value);
					$("#" + id).find('script').each(function() {
						//alert('Evaluating: ' + $(this).html());
						eval($(this).html());
					});
				}
				else if(this.nodeName == "append")
				{
					var id = $(this).attr("to");
					var prop = $(this).attr("property");
					var value = $(this).text();
					$("#" + id).append(value);
				}
				else if(this.nodeName == "script")
				{
					eval($(this).text());
				}
				else if(this.nodeName == "timeout")
				{
					var wait = $(this).attr("wait");
					var value = $(this).text();
					setTimeout(value, wait);
				}
		      });
			});		    
		});
	
}