function productdetails() {
    var product = {
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: ""

    }
    for (a in product) {
        product[a] = document.getElementById(a).value;
    }
    //console.log(product)

    var postInfo = new XMLHttpRequest()
    postInfo.onreadystatechange = function () {
        if (postInfo.readyState == 4 && postInfo.status == 201) {
            console.log("data sended")
            getproduct()
        }
    }
    postInfo.open("POST", "http://localhost:3000/products")
    postInfo.setRequestHeader("Content-Type", "application/json")
    postInfo.send(JSON.stringify(product))
}