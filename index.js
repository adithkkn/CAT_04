var myapp=angular.module("myapp",[]);

myapp.controller("myctrl",function($scope,$http){
    $http.get("http://127.0.0.1:5500/blossoms").success(function(response){$scope.names=response;});
    console.log("json loading success");
});



function addtotable()
{
    var S_regno=prompt("Enter no");
    var S_name=prompt("Enter name");
    var S_class=prompt("Enter class");
    var S_event=prompt("Enter event");
    var S_team=prompt("Enter team");

    var url="http://127.0.0.1:5500"+"/add/"+S_regno+"/"+S_name+"/"+S_class+"/"+S_event+"/"+S_team;
    alert(url);
    var open=window.open(url,"_blank");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}
}


function deletefrom()
{
    var S_regno=prompt("Enter no");
    var url="http://127.0.0.1:5500"+"/delete/"+S_regno;
    var open=window.open(url,"_blank");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}

}

function edit()
{
    var S_regno=prompt("Enter student no");
    var S_name=prompt("Enter student name");
    var url="http://127.0.0.1:5500"+"/update/"+S_no+"/"+S_name;
    var open=window.open(url,"_blank");
    alert("function called");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}
}