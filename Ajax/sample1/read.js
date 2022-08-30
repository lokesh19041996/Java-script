var users=[];
function getproduct(){
    var getinfo=new XMLHttpRequest()
    getinfo.onreadystatechange=function(){
        if(getinfo.readyState==4 && getinfo.status==200){
           users=JSON.parse(getinfo.response)
           console.log(users)
           displaydata()
        }
    }
    getinfo.open("GET","http://localhost:3000/products")
    getinfo.send()
}
getproduct()

function displaydata(){
    document.querySelector("tbody").innerHTML=""
    users.forEach(function(user,i){
        var mytr=document.createElement("tr")
        for(a in user){
            if(a !=="image"){
                var mytd=document.createElement("td")
                mytd.innerHTML=user[a]
                mytr.appendChild(mytd)
            }else{
                var myImg = document.createElement("img")
                var mytd1=document.createElement("td")
                myImg.setAttribute("src",user[a])
                mytd1.appendChild(myImg)
                mytr.appendChild(mytd1)
            }
           
        }

        var edittd=document.createElement("td")
        var editbtn=document.createElement("button")
        editbtn.innerHTML="Edit"
        editbtn.setAttribute("onclick","edituser("+i+")")
        edittd.appendChild(editbtn)
        mytr.appendChild(edittd)

        var deltd=document.createElement("td")
        var delbtn=document.createElement("button")
        delbtn.innerHTML="DELETE"
        delbtn.setAttribute("onclick","deleteuser("+i+")")
        deltd.appendChild(delbtn)
        mytr.appendChild(deltd)

        document.querySelector("tbody").appendChild(mytr)
    }) 
}