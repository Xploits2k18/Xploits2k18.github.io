function dns2()
{
    setTimeout(function() {
     
    var str = document.getElementById('drop1').value
   var d=2;
var xmlhttp;

if (str=="")
  {
  document.getElementById("search").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  
        xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("search").innerHTML=xmlhttp.responseText;
    }
  }
  
  
      xmlhttp.open("GET","blacklist.jsp?dit1="+str,true);
xmlhttp.send();
     }, 100);
   // <-- this is the delay in milliseconds


}

//function like1()
//{
//    setTimeout(function() {
//     
//    var str = document.getElementById('drop1').value
//   var d=2;
//var xmlhttp;
//
//if (str=="")
//  {
//  document.getElementById("search1").innerHTML="";
//  return;
//  }
//if (window.XMLHttpRequest)
//  {// code for IE7+, Firefox, Chrome, Opera, Safari
//  
//        xmlhttp=new XMLHttpRequest();
//  }
//else
//  {// code for IE6, IE5
//  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//  }
//xmlhttp.onreadystatechange=function()
//  {
//  if (xmlhttp.readyState==4 && xmlhttp.status==200)
//    {
//    document.getElementById("search1").innerHTML=xmlhttp.responseText;
//    }
//  }
//  
//  
//      xmlhttp.open("GET","ManagerCountry.jsp?dit1="+str,true);
//xmlhttp.send();
//     }, 100);
//   // <-- this is the delay in milliseconds
//
//
//}


//function like1()
//{
//    var str1 = document.getElementById('drop1').value
//   var d=2;
//var xmlhttp;    
//if (str1=="")
//  {
//  document.getElementById("search1").innerHTML="";
//  return;
//  }
//if (window.XMLHttpRequest)
//  {// code for IE7+, Firefox, Chrome, Opera, Safari
//  xmlhttp=new XMLHttpRequest();
//  }
//else
//  {// code for IE6, IE5
//  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//  }
//xmlhttp.onreadystatechange=function()
//  {
//  if (xmlhttp.readyState==4 && xmlhttp.status==200)
//    {
//    document.getElementById("search1").innerHTML=xmlhttp.responseText;
//    }
//  }
//  
//xmlhttp.open("GET","UserDetails1.jsp?dit1="+str1,true);
//xmlhttp.send();
//}
//
//
//function like2()
//{
//    var str2 = document.getElementById('drop').value
//   var d=2;
//var xmlhttp;    
//if (str2=="")
//  {
//  document.getElementById("search").innerHTML="";
//  return;
//  }
//if (window.XMLHttpRequest)
//  {// code for IE7+, Firefox, Chrome, Opera, Safari
//  xmlhttp=new XMLHttpRequest();
//  }
//else
//  {// code for IE6, IE5
//  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//  }
//xmlhttp.onreadystatechange=function()
//  {
//  if (xmlhttp.readyState==4 && xmlhttp.status==200)
//    {
//    document.getElementById("search").innerHTML=xmlhttp.responseText;
//    }
//  }
//  
//xmlhttp.open("GET","Blind.jsp?dit1="+str2,true);
//xmlhttp.send();
//}



function checkform()
    {
        var f = document.forms["theform"].elements;
        var cansubmit = true;

        for (var i = 0; i < f.length; i++) {
            if (f[i].value.length == 0) cansubmit = false;
        }

        if (cansubmit) {
            document.getElementById('submitbutton').disabled = false;
        }
    }