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
////////////////////////////////////////////////////////////////////////////
var dbRefcharts = firebase.database().ref('charts');
var tt="<table id='datatable' style='display:none'><thead><tr><th></th><th>TABLE1</th><th>TABLE2</th><th>TABLE3</th></tr></thead><tbody>";  
dbRefcharts.on('value', function(snapshot){
   var dt='';
  snapshot.forEach(function(childSnaphot){
       dt+="<tr><th>"+childSnaphot.val().name_menu+"</th>\
            <td>"+childSnaphot.val().summenu_table_1+"</td>\
            <td>"+childSnaphot.val().summenu_table_2+"</td>\
            <td>"+childSnaphot.val().summenu_table_3+"</td>"
     });
document.getElementById('charts').innerHTML=tt+dt+"</tr></table>";
////////////////////////////////////////////////////////////////////////////
 Highcharts.chart('container', {
    data: {
        table: 'datatable'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'จำนวนรายการที่สั่ง'
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'จำนวน'
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.point.y + ' ' + this.point.name.toLowerCase();
        }
    }
  });  
////////////////////////////////////////////////////////////////////////////            
});