(function() {
  const config = {
    apiKey: "AIzaSyBRclH8b1FB2stIsmmdApdXIejFH2-SO1o",
    authDomain: "computer-project-1.firebaseapp.com",
    databaseURL: "https://computer-project-1.firebaseio.com",
    projectId: "computer-project-1",
    storageBucket: "computer-project-1.appspot.com",
    messagingSenderId: "642615160738"
};
  firebase.initializeApp(config);
  // Create References
}());

function saveOnClick(){
  var dbname=document.getElementById('innames');
  var dbprice=document.getElementById('inprices');
  var dbnamelist1=document.getElementById('innameslist1');
  var dbnamelist2=document.getElementById('innameslist2');
  var dbnamelist3=document.getElementById('innameslist3');
  var dbnamelist4=document.getElementById('innameslist4');
  insertDataList(dbname.value,dbprice.value,dbnamelist1.value,
                  dbnamelist2.value,dbnamelist3.value,dbnamelist4.value);
}

function insertDataList(name,price,list1,list2,list3,list4) { //push 
var firebaseRef=firebase.database().ref("menu");//reference หลังจาก Order มันจะเจนคียร์
var newMessageRef = firebaseRef.push({name_menu:name,price:price}).child("list");
var newta=newMessageRef;
newta.push(list1);
newta.push(list2);
newta.push(list3);
newta.push(list4);
  console.log("list1="+list1);
}

var dbRefMenus = firebase.database().ref("menu");
var txt = "<table class='table'><tr><th>เมนูอาหาร</th><th>ราคา</th><th>แก้ไขข้อมูล</th></tr>"; 
dbRefMenus.on('value', function(snapshot){
var t='';
var i=0;
var j=0;
snapshot.forEach(function(childSnapshot){
t += "<tr><td class='success' data-toggle='collapse' data-target='#ullist_"+ i +"'>" + childSnapshot.val().name_menu;
t +="<span class='fa arrow'></span></span>";
t += "<div id='ullist_" + i + "' class='collapse'><ul>";
childSnapshot.child("list").forEach(function(listSnapshot){
    t += "<li>"+ listSnapshot.val()+"</li>";
});
t += "<td class='success'>" + childSnapshot.val().price + "</td>";
t += "<td class='success'><button class='panel-heading btn btn-warning' data-toggle='modal' data-target='#" + childSnapshot.key + "'>Edit</button>&nbsp&nbsp\
<button class='panel-heading btn btn-danger' onClick='delOnClick(\""+childSnapshot.key+"\")'>Delete</button></td>\
  <div class='modal fade' id='" + childSnapshot.key + "' role='dialog'>\
    <div class='modal-dialog'>\
      <div class='modal-content'>\
        <div class='modal-header'>\
          <button type='button' class='close' data-dismiss='modal'>&times;</button>\
          <h4 class='modal-title'>แก้ไขข้อมูล</h4>\
        </div>\
        <div class='modal-body col-sm-6'>\
            name:<input id='innames_"+i+"' value='"+childSnapshot.val().name_menu+"' class='form-control'>\
            price:<input id='inprices_"+i+"' value='"+childSnapshot.val().price+"' class='form-control'>"
t+="</div><div class='modal-footer'>"
t+="<button class='btn btn-warning' data-dismiss='modal' onClick='editOnClick(\""+i+"\",\""+j+"\",\""+childSnapshot.key+"\")'>ยืนยัน</button>";
t+= "</div></div></div></div></tr>";     
i++;
});
document.getElementById('tb').innerHTML = txt + t + "</table>";
});

function delOnClick(x){
var Refmenu=firebase.database().ref("menu/" + x);
var deletedmenu=Refmenu.remove();
console.log("Delete Success");
}

function editOnClick(i,j,chk){
  var dbname=document.getElementById("innames_"+i);
  var dbprice=document.getElementById('inprices_'+i);
  var dblist=document.getElementById('inlists_'+j);

  upDateData(dbname.value,dbprice.value,chk);
}

function upDateData(name,price,x) {
var firebaseRef=firebase.database().ref("menu/" + x);
var newMessageRef = firebaseRef.update({name_menu:name,price:price});

console.log(name);
console.log(price);
console.log(x);
}

function writeUserData(userId, name, price) {
  var firebaseRef=firebase.database().ref("menu/menu_"+ userId);
   firebaseRef.set({
    name_menu: name,
    price: price
  });
}




