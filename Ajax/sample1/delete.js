function deleteuser(i){
    var postinfo=new XMLHttpRequest()
    postinfo.onreadystatechange=function(){
        if(postinfo.readyState==4 && postinfo.status==200){
            getproduct()
        }
    }
    postinfo.open("DELETE","http://localhost:3000/products/"+users[i].id)
    postinfo.send()
}