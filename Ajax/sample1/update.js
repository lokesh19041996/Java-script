function edituser(i){
    index =i;
    console.log(users[i])
    for(a in users[i]){
        document.getElementById(a).value=users[i][a];
    }
}
function clearform(){
    var product={
        id:"",
        title:"",
        price:"",
        description:"",
        category:"",
        image:"",
        rating:""
    }
    for(a in product){
        document.getElementById(a).value="";
    }
}
function updateform(){

    var product={
        id:"",
        title:"",
        price:"",
        description:"",
        category:"",
        image:"",
        rating:""
     
    }
    
    for(a in product){
        product[a]=document.getElementById(a).value;
    }
    var postinfo=new XMLHttpRequest()
    postinfo.onreadystatechange=function(){
        if(postinfo.readyState==4 && postinfo.status==200){
            clearform()
            getproduct()
        }
    }
    postinfo.open("PUT","  http://localhost:3000/products/"+users[index].id)
    postinfo.setRequestHeader("Content-Type","application/json")
    postinfo.send(JSON.stringify(product))
}
getproduct()


