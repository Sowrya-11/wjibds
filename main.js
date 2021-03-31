
//mam this is not displaying in the munu
menu = ["Onion paneer pizza", "Sweet corn cheese pizza", "Chicken barbeque pizza", "Cheese panner pizza", "Vegetable pizza"]
function getmenu(){
var html_data;
html_data="<ol class='menu_list'>"
menu.sort();

for(var i=0; i<menu.length; i++){
html_data=html_data+'<li>' +menu[i]+  '</li'
}
html_data=html_data+"</ol>"
document.getElementById("display_addedmenu").innerHTML = html_data;
}
function add_item(){
    var html_data;
    var item=document.getElementById("add_item").value;
    menu.push(item);
    menu.sort();
    html_data="<section class='cards'>";
    htmldata=html_data+'<div class="card">' + '<img src="pizzaImg.png"/>' + menu[i] + "</div>";
    html_data=html_data + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;

}