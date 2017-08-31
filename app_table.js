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

  const tempN1 = firebase.database().ref().child("status/table_1"); //check status table_1
  tempN1.on('value', function(snapshot) {
        var data = snapshot.val();
        if(data==0||data=="0"){
          $("#wang1").show();
          $("#nonwang1").hide();
          $("#waitwang1").hide();
          console.log(data);
        }else if(data==1||data=="1"){
          $("#nonwang1").show();
          $("#wang1").hide();
          $("#waitwang1").hide();
        }else if(data==2||data=="2"){
          $("#nonwang1").hide();
          $("#wang1").hide();
          $("#waitwang1").show();
        }
        console.log(data);       
   });

  const tempN2 = firebase.database().ref().child("status/table_2"); //check status table_1
  tempN2.on('value', function(snapshot) {
        var data = snapshot.val();
         if(data==0||data=="0"){
          $("#wang2").show();
          $("#nonwang2").hide();
          $("#waitwang2").hide();
        }else if(data==1||data=="1"){
          $("#nonwang2").show();
          $("#wang2").hide();
          $("#waitwang2").hide();
        }else if(data==2||data=="2"){
          $("#nonwang2").hide();
          $("#wang2").hide();
          $("#waitwang2").show();
        }
        console.log(data);       
   });
    
  const tempN3 = firebase.database().ref().child("status/table_3"); //check status table_1
  tempN3.on('value', function(snapshot) {
       var data = snapshot.val();
         if(data==0||data=="0"){
          $("#wang3").show();
          $("#nonwang3").hide();
          $("#waitwang3").hide();
        }else if(data==1||data=="1"){
          $("#nonwang3").show();
          $("#wang3").hide();
          $("#waitwang3").hide();
        }else if(data==2||data=="2"){
          $("#nonwang3").hide();
          $("#wang3").hide();
          $("#waitwang3").show();
        }
        console.log(data);       
   });  

}());

function status1(){
 var count=1; //red
 var txt;
    if (confirm("ชำระเงิน") == true) {
      var firebaseRef=firebase.database().ref("status/table_1");
count=0;
firebaseRef.set(count);
      var delrequirement=firebase.database().ref("requirement/table_1");
delrequirement.remove();
    var dbRefOrders = firebase.database().ref('orders/table_1');
dbRefOrders.on('value', function(snapshot){
snapshot.forEach(function(childSnapshot){
    var setzorocheckcolor = firebase.database().ref('orders/table_1/'+childSnapshot.key+"/checkcolor");
setzorocheckcolor.set(0);
    var setzoroprice = firebase.database().ref('orders/table_1/'+childSnapshot.key+"/price");
setzoroprice.set(0);
    var setzorosummenu = firebase.database().ref('orders/table_1/'+childSnapshot.key+"/sum_menu");
setzorosummenu.set(0);
  }); 
});
count=1;  
}else{      
    var firebaseRef=firebase.database().ref("status/table_1");
count=1;
       firebaseRef.set(count);
count=1;
  }
}

function status2(){
 var count=1; //red
 var txt;
    if (confirm("ชำระเงิน") == true) {
      var firebaseRef=firebase.database().ref("status/table_2");
count=0;
firebaseRef.set(count);
      var delrequirement=firebase.database().ref("requirement/table_2");
delrequirement.remove();
    var dbRefOrders = firebase.database().ref('orders/table_2');
dbRefOrders.on('value', function(snapshot){
snapshot.forEach(function(childSnapshot){
    var setzorocheckcolor = firebase.database().ref('orders/table_2/'+childSnapshot.key+"/checkcolor");
setzorocheckcolor.set(0);
    var setzoroprice = firebase.database().ref('orders/table_2/'+childSnapshot.key+"/price");
setzoroprice.set(0);
    var setzorosummenu = firebase.database().ref('orders/table_2/'+childSnapshot.key+"/sum_menu");
setzorosummenu.set(0);
  }); 
});
count=1;  
}else{      
    var firebaseRef=firebase.database().ref("status/table_2");
count=1;
        firebaseRef.set(count);
count=1;
  }
}

function status3(){
 var count=1; //red
 var txt;
    if (confirm("ชำระเงิน") == true) {
      var firebaseRef=firebase.database().ref("status/table_3");
count=0;
firebaseRef.set(count);
      var delrequirement=firebase.database().ref("requirement/table_3");
delrequirement.remove();
    var dbRefOrders = firebase.database().ref('orders/table_3');
dbRefOrders.on('value', function(snapshot){
snapshot.forEach(function(childSnapshot){
    var setzorocheckcolor = firebase.database().ref('orders/table_3/'+childSnapshot.key+"/checkcolor");
setzorocheckcolor.set(0);
    var setzoroprice = firebase.database().ref('orders/table_3/'+childSnapshot.key+"/price");
setzoroprice.set(0);
    var setzorosummenu = firebase.database().ref('orders/table_3/'+childSnapshot.key+"/sum_menu");
setzorosummenu.set(0);
  }); 
});
count=1;  
}else{      
    var firebaseRef=firebase.database().ref("status/table_3");
count=1;
       firebaseRef.set(count);
count=1;
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
var dbRefOrders = firebase.database().ref('orders/table_1');
var ordt = "<table class='table table-striped table-bordered table-hover'><tr><th>รายการ</th><th>จำนวน</th><th>ราคา</th></tr>";            
dbRefOrders.on('value', function(snapshot){
   var dt='';
   var num=0;
   var price=0;
  snapshot.forEach(function(childSnapshot){
    dt += "<tr><td class='success'>" + childSnapshot.val().name_menu + "</td>";
    dt += "<td class='success'>" + childSnapshot.val().sum_menu + "</td>";
    dt += "<td class='success'>" + childSnapshot.val().price + "</td></tr>";
num=num+childSnapshot.val().sum_menu;
price=price+childSnapshot.val().price;      
console.log(snapshot.key);
  }); 
dt += "</tr><tr><th>รวม</th><th>"+num+" จำนวน</th><th>"+price+" บาท</th><tr>";    
document.getElementById('tbs1').innerHTML = ordt + dt + "</table>";
});
//////////////////////////////////////////////////////////////////////////////////////////////
var dbRefOrders = firebase.database().ref('orders/table_2');
var ordt = "<table class='table table-striped table-bordered table-hover'><tr><th>รายการ</th><th>จำนวน</th><th>ราคา</th></tr>";          
dbRefOrders.on('value', function(snapshot){
   var dt='';
   var num=0;
   var price=0;
  snapshot.forEach(function(childSnapshot){
    dt += "<tr><td class='success'>" + childSnapshot.val().name_menu + "</td>";
    dt += "<td class='success'>" + childSnapshot.val().sum_menu + "</td>";
    dt += "<td class='success'>" + childSnapshot.val().price + "</td></tr>";
num=num+childSnapshot.val().sum_menu;
price=price+childSnapshot.val().price;      
console.log(snapshot.key);
  }); 
dt += "</tr><tr><th>รวม</th><th>"+num+" จำนวน</th><th>"+price+" บาท</th><tr>";  
document.getElementById('tbs2').innerHTML = ordt + dt + "</table>";
});
//////////////////////////////////////////////////////////////////////////////////////////////
var dbRefOrders = firebase.database().ref('orders/table_3');
var ordt = "<table class='table table-striped table-bordered table-hover'><tr><th>รายการ</th><th>จำนวน</th><th>ราคา</th></tr>";          
dbRefOrders.on('value', function(snapshot){
   var dt='';
   var num=0;
   var price=0;
  snapshot.forEach(function(childSnapshot){
    dt += "<tr><td class='success'>" + childSnapshot.val().name_menu + "</td>";
    dt += "<td class='success'>" + childSnapshot.val().sum_menu + "</td>";
    dt += "<td class='success'>" + childSnapshot.val().price + "</td></tr>";
num=num+childSnapshot.val().sum_menu;
price=price+childSnapshot.val().price;      
console.log(snapshot.key);
  }); 
dt += "</tr><tr><th>รวม</th><th>"+num+" จำนวน</th><th>"+price+" บาท</th><tr>";  
document.getElementById('tbs3').innerHTML = ordt + dt + "</table>";
});
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
var dbRefOrders = firebase.database().ref('orders/table_1');
var ord = "<table class='table table-striped table-bordered table-hover'><tr><th>รายการ</th><th>จำนวน</th><th>ราคา</th></tr>";            
dbRefOrders.on('value', function(snapshot){
   var d='';
   var num=0;
   var price=0;
  snapshot.forEach(function(childSnapshot){
    d += "<tr><td class='success'>" + childSnapshot.val().name_menu + "</td>";
    d += "<td class='success'>" + childSnapshot.val().sum_menu + "</td>"; 
    d += "<td class='success'>" + childSnapshot.val().price + "</td></tr>";  
num=num+childSnapshot.val().sum_menu;
price=price+childSnapshot.val().price;
console.log();
  });
d += "</tr><tr><th>รวม</th><th>"+num+" จำนวน</th><th>"+price+" บาท</th><tr>";  
document.getElementById('tb1').innerHTML = ord + d + "</table>";
});
//////////////////////////////////////////////////////////////////////////////////////////////
var dbRefOrders = firebase.database().ref('orders/table_2');
var ord = "<table class='table table-striped table-bordered table-hover'><tr><th>รายการ</th><th>จำนวน</th><th>ราคา</th></tr>";            
dbRefOrders.on('value', function(snapshot){
   var d='';
   var num=0;
   var price=0;
  snapshot.forEach(function(childSnapshot){
    d += "<tr><td class='success'>" + childSnapshot.val().name_menu + "</td>";
    d += "<td class='success'>" + childSnapshot.val().sum_menu + "</td>"; 
    d += "<td class='success'>" + childSnapshot.val().price + "</td></tr>"; 
num=num+childSnapshot.val().sum_menu;
price=price+childSnapshot.val().price;  
console.log();
  });
d += "</tr><tr><th>รวม</th><th>"+num+" จำนวน</th><th>"+price+" บาท</th><tr>";     
document.getElementById('tb2').innerHTML = ord + d + "</table>";
});
//////////////////////////////////////////////////////////////////////////////////////////////
var dbRefOrders = firebase.database().ref('orders/table_3');
var ord = "<table class='table table-striped table-bordered table-hover'><tr><th>รายการ</th><th>จำนวน</th><th>ราคา</th></tr>";            
dbRefOrders.on('value', function(snapshot){
   var d='';
   var num=0;
   var price=0;
  snapshot.forEach(function(childSnapshot){
    d += "<tr><td class='success'>" + childSnapshot.val().name_menu + "</td>";
    d += "<td class='success'>" + childSnapshot.val().sum_menu + "</td>"; 
    d += "<td class='success'>" + childSnapshot.val().price + "</td></tr>";  
console.log();
  });
d += "</tr><tr><th>รวม</th><th>"+num+" จำนวน</th><th>"+price+" บาท</th><tr>";  
document.getElementById('tb3').innerHTML = ord + d + "</table>";
});
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////