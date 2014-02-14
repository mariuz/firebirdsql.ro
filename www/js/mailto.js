// return first element with given name
function getElementValueByName(eName)
{
if(document.getElementsByName(eName).item(0))
{
 return document.getElementsByName(eName).item(0).value;
 }
 else return '';
}
function MembershipMailTo() 
{
//var v=getElementValueByName("m_pname");
//alert(v);
var mSubject='Membership%20Application%20Form';
var mAddress='mailto:contactff@firebirdsql.org';
// check if all required fields are fulfilled

// m_pname
if(!getElementValueByName("m_pname"))
{
 alert("Given name field is empty!");
 return false;
}
// m_pfname
if(!getElementValueByName("m_pfname"))
{
 alert("Family name field is empty!");
 return false;
}
// m_pemail1
if(!getElementValueByName("m_pemail1"))
{
 alert("Email field is empty!");
 return false;
}
// m_pemail2
if(!getElementValueByName("m_pemail2"))
{
 alert("Email (confirm) field is empty!");
 return false;
}
// email must be equal with email2
if(getElementValueByName("m_pemail1")!=getElementValueByName("m_pemail2"))
{
 alert("Emails are not equal!");
 return false;
}
// we do NOT check if email is valid - user must send data to us using own e-mail client :)

// m_paddress1
if(!getElementValueByName("m_paddress1"))
{
 alert("Address field is empty!");
 return false;
}

// m_pcity
if(!getElementValueByName("m_pcity"))
{
 alert("City field is empty!");
 return false;
}

// m_pstate
if(!getElementValueByName("m_pstate"))
{
 alert("County/State field is empty!");
 return false;
}
// m_pzip
if(!getElementValueByName("m_pzip"))
{
 alert("Postcode/Zip field is empty!");
 return false;
}

if(!getElementValueByName("m_pcountry"))
{
 alert("Please, select your country!");
 return false;
}
if(getElementValueByName("m_corporate"))
{
// check company name if corporate membership
	if(!getElementValueByName("m_pcountry"))
	{
	alert("Please, select your country!");
	return false;
	}
 
}
if(!getElementValueByName("m_confirm"))
{
 alert("You must check confirm field!");
 return false;
}
// all checks complete, constructing body text
var mSubject='subject=Membership%20Application%20Form';
var str="**** Application for "+getElementValueByName("m_type")+" Membership: "+getElementValueByName("m_psalutation")+" "+getElementValueByName("m_pfname")+", "+getElementValueByName("m_pname")+" *****\n";

//str+=("TYPE:"+getElementValueByName("m_type")+"\n");
str+=("Given Names:"+getElementValueByName("m_pname")+"\n");
str+=("Surname:"+getElementValueByName("m_pfname")+"\n");
str+=("Email:"+getElementValueByName("m_pemail1")+"\n");
str+=("Tel (work):"+getElementValueByName("m_pwphone")+"\n");
str+=("Tel (home):"+getElementValueByName("m_phphone")+"\n");
str+=("Tel (cell):"+getElementValueByName("m_mphone")+"\n");
str+=("Address1:"+getElementValueByName("m_paddress1")+"\n");
str+=("Address2:"+getElementValueByName("m_paddress2")+"\n");
str+=("City or Town:"+getElementValueByName("m_pcity")+"\n");
str+=("State or Province:"+getElementValueByName("m_pstate")+"\n");
str+=("Postal Code:"+getElementValueByName("m_pzip")+"\n")
str+=("Country:"+getElementValueByName("m_pcountry")+"\n");
str+=("Corporate:"+getElementValueByName("m_ccorporate")+"\n");
str+=("Company:"+getElementValueByName("m_cname")+"\n");
str+=("Job Title:"+getElementValueByName("m_ctitle")+"\n");
str+=("Company Addr1:"+getElementValueByName("m_caddress1")+"\n");
str+=("Company Addr2:"+getElementValueByName("m_caddress2")+"\n");
str+=("Company City:"+getElementValueByName("m_ccity")+"\n");
str+=("Company State:"+getElementValueByName("m_cstate")+"\n");
str+=("Company Country:"+getElementValueByName("m_ccountry")+"\n");
str+=("Accept Association Rules\n");
str+=("*** end of autogenerated application form***\n");
var myUrl=mAddress+"?"+mSubject+"&Body="+encodeURIComponent(str);
//alert(myUrl);
location.href=myUrl;
}