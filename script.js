
function hobbyChoose(num){
    // alert(num);

    for(var i=1;i<=5;i++){   // when change the selected item, clear all items
        for(var j=1;j<=2;j++){
            document.getElementById("hobby" + i + "text" + j).required = false;
            document.getElementById("hobby" + i + "text" + j).style.display = "none";
            document.getElementById("hobby" + i + "text" + j).value = null;
            document.getElementsByName("uHobby" + i)[j-1].checked = false;
        }
    }
    

    if(num == ""){ // display none
        document.getElementById("hobby1").style.display = "none";
        document.getElementById("hobby2").style.display = "none";
        document.getElementById("hobby3").style.display = "none";
        document.getElementById("hobby4").style.display = "none";
        document.getElementById("hobby5").style.display = "none";
    }else{
        // alert("num="+num);
        switch(num){
            
            case "1":
                document.getElementById("hobby1").style.display = "block";
                document.getElementById("hobby2").style.display = "none";
                document.getElementById("hobby3").style.display = "none";
                document.getElementById("hobby4").style.display = "none";
                document.getElementById("hobby5").style.display = "none";
            break;

            case "2":
                document.getElementById("hobby1").style.display = "none";
                document.getElementById("hobby2").style.display = "block";
                document.getElementById("hobby3").style.display = "none";
                document.getElementById("hobby4").style.display = "none";
                document.getElementById("hobby5").style.display = "none";
            break;

            case "3":
                document.getElementById("hobby1").style.display = "none";
                document.getElementById("hobby2").style.display = "none";
                document.getElementById("hobby3").style.display = "block";
                document.getElementById("hobby4").style.display = "none";
                document.getElementById("hobby5").style.display = "none";
            break;

            case "4":
                document.getElementById("hobby1").style.display = "none";
                document.getElementById("hobby2").style.display = "none";
                document.getElementById("hobby3").style.display = "none";
                document.getElementById("hobby4").style.display = "block";
                document.getElementById("hobby5").style.display = "none";
            break;

            case "5":
                document.getElementById("hobby1").style.display = "none";
                document.getElementById("hobby2").style.display = "none";
                document.getElementById("hobby3").style.display = "none";
                document.getElementById("hobby4").style.display = "none";
                document.getElementById("hobby5").style.display = "block";
            break;
        }
    }
    
        
    
    
}

function uHobbyCheck(target){
    var hobbyname = "uHobby" + target;
    var hobbytext1 = "hobby" + target + "text1";
    var hobbytext2 = "hobby" + target + "text2";

    var checkboxHobby=document.getElementsByName(hobbyname);

    if(checkboxHobby[0].checked){
        document.getElementById(hobbytext1).style.display = "block";
        document.getElementById(hobbytext1).required = true;
    }else{
        document.getElementById(hobbytext1).style.display = "none";
        document.getElementById(hobbytext1).required = false;
        document.getElementById(hobbytext1).value = null;
    }
    if(checkboxHobby[1].checked){
        document.getElementById(hobbytext2).style.display = "block";
        document.getElementById(hobbytext2).required = true;
    }else{
        document.getElementById(hobbytext2).style.display = "none";
        document.getElementById(hobbytext2).required = false;
        document.getElementById(hobbytext2).value = null;
    }

}

function validateInput(object, type, nameType) {
    var regExName = /^[a-zA-Z]+$/	 
    var regExEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
    var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
    var regExZipCode = /^\d{5}$/;

    var name = 'errorMsg' + nameType;

    switch(type) {
        case 1:
            if(!object.value.trim().match(regExName)) {
                object.style.border = "2px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
        break;
        case 2:
            if(!object.value.match(regExEmail)) {
                object.style.border = "2px solid red";
                document.getElementById("errorMsgEmailId").style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById("errorMsgEmailId").style.display = "none";
            }
        break;
        case 3:
            if(!object.value.match(regExPhone)) {
                object.style.border = "2px solid red";
                document.getElementById("errorMsgPhone").style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById("errorMsgPhone").style.display = "none";
            }
        break;
        case 4:
            if(!object.value.match(regExZipCode)) {
                object.style.border = "2px solid red";
                document.getElementById("errorMsgZipCode").style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById("errorMsgZipCode").style.display = "none";
            }
        break;
    }
}