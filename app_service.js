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
var RefRequirements = firebase.database().ref('requirement/table_1');
var req = "<table class='table table-striped table-bordered table-hover'><tr><th>รายการ</th></tr>";            
RefRequirements.on('value', function(snapshot){
   var q=''; //clear value q
  snapshot.forEach(function(childSnapshot){
    q += "<tr><td class='danger'>" + childSnapshot.val();
    q += " "+"<button class='btn btn-info pull-right' onClick='delOnClick1(\""+childSnapshot.key+"\")'>Done</button></td></tr>";  
console.log(snapshot.key);
  }); 
document.getElementById('req1').innerHTML = req + q + "</tbody></table>";
});
//////////////////////////////////////////////////////////////////////////
var RefRequirements = firebase.database().ref('requirement/table_2');
var req = "<table class='table table-striped table-bordered table-hover'><tr><th>รายการ</th></tr>";            
RefRequirements.on('value', function(snapshot){
   var q=''; //clear value q
  snapshot.forEach(function(childSnapshot){
    q += "<tr><td class='danger'>" + childSnapshot.val();
    q += " "+"<button class='btn btn-info pull-right' onClick='delOnClick2(\""+childSnapshot.key+"\")'>Done</button></td></tr>";   
console.log(snapshot.key);
  }); 
document.getElementById('req2').innerHTML = req + q + "</tbody></table>";
});
//////////////////////////////////////////////////////////////////////////
var RefRequirements = firebase.database().ref('requirement/table_3');
var req = "<table class='table table-striped table-bordered table-hover'><tr><th>รายการ</th></tr>";            
RefRequirements.on('value', function(snapshot){
   var q=''; //clear value q
  snapshot.forEach(function(childSnapshot){
    q += "<tr><td class='danger'>" + childSnapshot.val();
    q += " "+"<button class='btn btn-info pull-right' onClick='delOnClick3(\""+childSnapshot.key+"\")'>Done</button></td></tr>";   
console.log(snapshot.key);
  }); 
document.getElementById('req3').innerHTML = req + q + "</tbody></table>";
});
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
function delOnClick1(x){
var firebaseRef=firebase.database().ref("requirement/table_1/" + x);
var tat=firebaseRef.remove();
console.log("Delete Success");
console.log(x);
}
function delOnClick2(x){
var firebaseRef=firebase.database().ref("requirement/table_2/" + x);
var tat=firebaseRef.remove();
console.log("Delete Success");
console.log(x);
}
function delOnClick3(x){
var firebaseRef=firebase.database().ref("requirement/table_3/" + x);
var tat=firebaseRef.remove();
console.log("Delete Success");
console.log(x);
}
