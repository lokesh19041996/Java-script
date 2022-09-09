let users = [{ "id": 1, "first_name": "Daisi", "last_name": "Whitmarsh", "email": "dwhitmarsh0@theatlantic.com", "gender": "Female", "ip_address": "224.20.103.230" },
{ "id": 2, "first_name": "Calvin", "last_name": "England", "email": "cengland1@angelfire.com", "gender": "Male", "ip_address": "71.93.193.207" },
{ "id": 3, "first_name": "Marcelo", "last_name": "Meachen", "email": "mmeachen2@hhs.gov", "gender": "Male", "ip_address": "70.178.118.207" },
{ "id": 4, "first_name": "Charlton", "last_name": "De Wolfe", "email": "cdewolfe3@geocities.jp", "gender": "Male", "ip_address": "163.204.250.1" },
{ "id": 5, "first_name": "Bert", "last_name": "Grealish", "email": "bgrealish4@paypal.com", "gender": "Male", "ip_address": "199.109.124.24" },
{ "id": 6, "first_name": "Greer", "last_name": "Morrott", "email": "gmorrott5@sakura.ne.jp", "gender": "Female", "ip_address": "88.8.121.35" },
{ "id": 7, "first_name": "Saundra", "last_name": "Conrard", "email": "sconrard6@slashdot.org", "gender": "Female", "ip_address": "89.254.80.144" },
{ "id": 8, "first_name": "Gerry", "last_name": "Bursnall", "email": "gbursnall7@omniture.com", "gender": "Male", "ip_address": "211.14.38.246" },
{ "id": 9, "first_name": "Nelia", "last_name": "Edmett", "email": "nedmett8@illinois.edu", "gender": "Non-binary", "ip_address": "221.210.54.55" },
{ "id": 10, "first_name": "Dru", "last_name": "Sorrel", "email": "dsorrel9@usda.gov", "gender": "Bigender", "ip_address": "10.16.143.162" }]

var id=null
function displayData() {
  rows = ""
  users.map((user) => {
    rows = rows + `<tr id="${user.id}"> 
    <td>${user.first_name}</td>
    <td>${user.last_name}</td>
    <td>${user.email}</td>
    <td>${user.gender}</td>
    <td><button class="btn btn-warning onclick="editMobile((e)">Edit</button></td>
    <td><button class="btn btn-danger onclick="deleteMobile(e)">delete</button></td>

    </tr>`
  })
  document.querySelector("tbody").innerHTML = rows
}


function editMobile(e) {
  console.log(e);
}

function deleteMobile(e) {
  console.log(e);
}