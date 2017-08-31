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
}());
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
var Reforders1 = firebase.database().ref().child('orders/table_1');
var txt1 = "<table class='table table-striped table-bordered table-hover'><tr><th>รายการเสิร์ฟอาหาร</th><th>จำนวน</th></tr>";            
Reforders1.on('value', function(snapshot){
var cleartext='';
snapshot.forEach(function(childSnapshot){
if(childSnapshot.val().sum_menu!==0){ cleartext += "<tr>";
if(childSnapshot.val().checkcolor!==0){
          cleartext += "<td data-toggle='collapse' data-target='#1"+ childSnapshot.key +"' class='danger'>" + childSnapshot.val().name_menu;
}else if(childSnapshot.val().checkcolor==0){
          cleartext += "<td data-toggle='collapse' data-target='#1"+ childSnapshot.key +"' class='active'>" + childSnapshot.val().name_menu;
}
          cleartext +="<span ><span class='fa arrow'></span></span>";
          cleartext += "<div id='1" + childSnapshot.key + "' class='collapse'><ul>";         
var valname = childSnapshot.val().name_menu; 
var valsum = childSnapshot.val().sum_menu;
var valprice = childSnapshot.val().price;
var valcheck = childSnapshot.val().checkcolor;
var keychild = childSnapshot.key;  
childSnapshot.forEach(function(listSnapshot){
var snaplist = listSnapshot.val(); 
var keylist = listSnapshot.key;
if(snaplist!==valname&&snaplist!==valprice&&snaplist!==valsum&&snaplist!==valcheck){ //value of list not equal to value of name,price,sum,check
          cleartext += "<li>"+snaplist.list +" "+ snaplist.number+'</li>';        
cleartext+="<button class='btn btn-info btn-xs' onClick='MoveOnClick1(\""+valname+"\",\""+valprice+"\",\""+valsum+"\",\""+snaplist.list+"\",\""+snaplist.number+"\",\""+keychild+"\",\""+keylist+"\",\""+valcheck+"\")'>";
cleartext+="Done</button>";
}});
cleartext +="</li></ul></div></td>";
if(childSnapshot.val().checkcolor!==0){
cleartext += "<td class='danger'>" + childSnapshot.val().checkcolor + "</td>"; 
}else if(childSnapshot.val().checkcolor==0){
cleartext += "<td class='active'>" + childSnapshot.val().checkcolor + "</td>"; 
} 
}}); 
document.getElementById('tbs1').innerHTML = txt1 + cleartext + "</tbody></table>";
});
//////////////////////////////////////////////////////////////////////////
var Reforders2 = firebase.database().ref().child('orders/table_2');
var txt2 = "<table class='table table-striped table-bordered table-hover'><tr><th>รายการเสิร์ฟอาหาร</th><th>จำนวน</th></tr>";            
Reforders2.on('value', function(snapshot){
var cleartext='';
snapshot.forEach(function(childSnapshot){
if(childSnapshot.val().sum_menu!==0){ cleartext += "<tr>";
if(childSnapshot.val().checkcolor!==0){
          cleartext += "<td data-toggle='collapse' data-target='#2"+ childSnapshot.key +"' class='danger'>" + childSnapshot.val().name_menu;
}else if(childSnapshot.val().checkcolor==0){
          cleartext += "<td data-toggle='collapse' data-target='#2"+ childSnapshot.key +"' class='active'>" + childSnapshot.val().name_menu;
}
          cleartext +="<span ><span class='fa arrow'></span></span>";
          cleartext += "<div id='2" + childSnapshot.key + "' class='collapse'><ul>";                   
var valname = childSnapshot.val().name_menu; 
var valsum = childSnapshot.val().sum_menu;
var valprice = childSnapshot.val().price;
var valcheck = childSnapshot.val().checkcolor;
var keychild = childSnapshot.key;  
childSnapshot.forEach(function(listSnapshot){
var snaplist = listSnapshot.val(); 
var keylist = listSnapshot.key;
if(snaplist!==valname&&snaplist!==valprice&&snaplist!==valsum&&snaplist!==valcheck){ //value of list not equal to value of name,price,sum,check
          cleartext += "<li>"+snaplist.list +" "+ snaplist.number+'</li>';
cleartext+="<button class='btn btn-info btn-xs' onClick='MoveOnClick2(\""+valname+"\",\""+valprice+"\",\""+valsum+"\",\""+snaplist.list+"\",\""+snaplist.number+"\",\""+keychild+"\",\""+keylist+"\",\""+valcheck+"\")'>";
cleartext+="Done</button>";
}});
cleartext +="</li></ul></div></td>";
if(childSnapshot.val().checkcolor!==0){
cleartext += "<td class='danger'>" + childSnapshot.val().checkcolor + "</td>"; 
}else if(childSnapshot.val().checkcolor==0){
cleartext += "<td class='active'>" + childSnapshot.val().checkcolor + "</td>"; 
} 
}}); 
document.getElementById('tbs2').innerHTML = txt2 + cleartext + "</tbody></table>";
});
//////////////////////////////////////////////////////////////////////////
var Reforders3 = firebase.database().ref().child('orders/table_3');
var txt3 = "<table class='table table-striped table-bordered table-hover'><tr><th>รายการเสิร์ฟอาหาร</th><th>จำนวน</th></tr>";            
Reforders3.on('value', function(snapshot){
var cleartext='';
var clearcount=1;
snapshot.forEach(function(childSnapshot){
if(childSnapshot.val().sum_menu!==0){ cleartext += "<tr>";
if(childSnapshot.val().checkcolor!==0){
          cleartext += "<td data-toggle='collapse' data-target='#3"+ childSnapshot.key +"' class='danger'>" + childSnapshot.val().name_menu;
}else if(childSnapshot.val().checkcolor==0){
          cleartext += "<td data-toggle='collapse' data-target='#3"+ childSnapshot.key +"' class='active'>" + childSnapshot.val().name_menu;
}
          cleartext +="<span ><span class='fa arrow'></span></span>";
          cleartext += "<div id='3" + childSnapshot.key + "' class='collapse'><ul>";                
var valname = childSnapshot.val().name_menu; 
var valsum = childSnapshot.val().sum_menu;
var valprice = childSnapshot.val().price;
var valcheck = childSnapshot.val().checkcolor;
var keychild = childSnapshot.key;  
childSnapshot.forEach(function(listSnapshot){
var snaplist = listSnapshot.val(); 
var keylist = listSnapshot.key;
if(snaplist!==valname&&snaplist!==valprice&&snaplist!==valsum&&snaplist!==valcheck){ //value of list not equal to value of name,price,sum,check
          cleartext += "<li>"+snaplist.list +" "+ snaplist.number+'</li>';
cleartext+="<button class='btn btn-info btn-xs' onClick='MoveOnClick3(\""+valname+"\",\""+valprice+"\",\""+valsum+"\",\""+snaplist.list+"\",\""+snaplist.number+"\",\""+keychild+"\",\""+keylist+"\",\""+valcheck+"\")'>";
cleartext+="Done</button>";
}});
cleartext +="</li></ul></div></td>";
if(childSnapshot.val().checkcolor!==0){
cleartext += "<td class='danger'>" + childSnapshot.val().checkcolor + "</td>"; 
}else if(childSnapshot.val().checkcolor==0){
cleartext += "<td class='active'>" + childSnapshot.val().checkcolor + "</td>"; 
} 
}}); 
document.getElementById('tbs3').innerHTML = txt3 + cleartext + "</tbody></table>";
});
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
function MoveOnClick1(valname,valprice,valsum,lists,num,keychild,keylist,valcheck){ //function move and deleted
var Refclerorders=firebase.database().ref("clearorders"); //Refclearorders
var Reftable1 = Refclerorders.child("table_1"); //refchildtable1
var movedata=Reftable1;
        movedata.child(keychild).child(keylist).set({list:lists,number:parseInt(num)}); //movedata to clearorders/table_1
        movedata.child(keychild).update({name_menu:valname,price:parseInt(valprice),sum_menu:parseInt(valsum)});
console.log("keychild="+keychild);
var Refdelete=firebase.database().ref("orders/table_1/" + keychild+"/"+keylist); //Refdelete
var deletedlist=Refdelete.remove();
var Refcheck = firebase.database().ref("orders/table_1/" + keychild+"/checkcolor"); //Refcheckcolor
        valcheck--;  //devaule ลดค่า
Refcheck.set(valcheck); //put value of checkcolor
}

function MoveOnClick2(valname,valprice,valsum,lists,num,keychild,keylist,valcheck){ //function move and deleted
var Refclerorders=firebase.database().ref("clearorders"); //Refclearorders
var Reftable2 = Refclerorders.child("table_2"); //refchildtable1
var movedata=Reftable2;
        movedata.child(keychild).child(keylist).set({list:lists,number:parseInt(num)}); //movedata to clearorders/table_1
        movedata.child(keychild).update({name_menu:valname,price:parseInt(valprice),sum_menu:parseInt(valsum)});
console.log("keychild="+keychild);
var Refdelete=firebase.database().ref("orders/table_2/" + keychild+"/"+keylist); //Refdelete
var deletedlist=Refdelete.remove();
var Refcheck = firebase.database().ref("orders/table_2/" + keychild+"/checkcolor"); //Refcheckcolor
        valcheck--;  //devaule ลดค่า
Refcheck.set(valcheck); //put value of checkcolor
console.log("lists="+lists);
console.log("checkcolor="+valcheck);
console.log("Delete Success");
console.log("keylist="+keylist);
}

function MoveOnClick3(valname,valprice,valsum,lists,num,keychild,keylist,valcheck){ //function move and deleted
var Refclerorders=firebase.database().ref("clearorders"); //Refclearorders
var Reftable3 = Refclerorders.child("table_3"); //refchildtable1
var movedata=Reftable3;
        movedata.child(keychild).child(keylist).set({list:lists,number:parseInt(num)}); //movedata to clearorders/table_1
        movedata.child(keychild).update({name_menu:valname,price:parseInt(valprice),sum_menu:parseInt(valsum)});
console.log("keychild="+keychild);
var Refdelete=firebase.database().ref("orders/table_3/" + keychild+"/"+keylist); //Refdelete
var deletedlist=Refdelete.remove();
var Refcheck = firebase.database().ref("orders/table_3/" + keychild+"/checkcolor"); //Refcheckcolor
        valcheck--;  //devaule ลดค่า
Refcheck.set(valcheck); //put value of checkcolor
console.log("lists="+lists);
console.log("checkcolor="+valcheck);
console.log("Delete Success");
console.log("keylist="+keylist);
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////