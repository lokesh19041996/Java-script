// function getPhotosFromServer() {
//   fetch("http://localhost:3000/photos").then((response) => {
//     return response.json()
//   }).then(res => {
//     console.log(res);

//   })
// }
// getPhotosFromServer()

let photos = JSON.parse(localStorage.getItem("photos"))
if (photos == null) {
  photos = []
}
async function getPhotosFromServer() {
  let userdetails = await fetch("http://localhost:3000/users1")
  photos = await userdetails.json()
  localStorage.setItem("photos", JSON.stringify(photos))
  // displayAllusers()
  // console.log(photos);
}

function displayAllusers() {
  document.querySelector("tbody").innerHTML = ""
  photos.map((user, i) => {
    var myTr = document.createElement("tr")
    for (a in user) {
      var myTd = document.createElement("td")
      myTd.innerHTML = user[a]
      myTr.appendChild(myTd)
    }

    var editTd = document.createElement("td")
    var editBtn = document.createElement("button")
    // editBtn.innerHTML = "edit"
    // editBtn.setAttribute("onclick", "edituser(" + i + ")")

    var anch = document.createElement("a")
    anch.innerHTML = "edit"
    anch.setAttribute("href", "edit.html?=" + i)
    editBtn.appendChild(anch)
    editBtn.setAttribute("class", "btn btn-warning")
    editTd.appendChild(editBtn)
    myTr.appendChild(editTd)


    // var delTd = document.createElement("td")
    // var delBtn = document.createElement("button")
    // delBtn.innerHTML = "delete"
    // delBtn.setAttribute("onclick", "deleteuser(" + i + ")")
    // delBtn.setAttribute("class", "btn btn-danger")
    // delTd.appendChild(delBtn)
    // myTr.appendChild(delTd)




    document.querySelector("tbody").appendChild(myTr)

  })
}
// getPhotosFromServer()
displayAllusers()
