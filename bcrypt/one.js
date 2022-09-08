let bcrypt = require("bcrypt")
let person_Details = {
  fname: "Dilip",
  mobile: "7708738852",
  email: "dilip001@gmail.com",
  password: "Kill pill pandey",
  creditcardnumber: "9876 5432 1098",
  cvv: "123"
}
let salt = bcrypt.genSaltSync(5)
let new_fname = bcrypt.hashSync(person_Details.fname, salt)
let new_mobile = bcrypt.hashSync(person_Details.mobile, salt)
let new_email = bcrypt.hashSync(person_Details.email, salt)
let new_password = bcrypt.hashSync(person_Details.password, salt)
let new_creditcardnumber = bcrypt.hashSync(person_Details.creditcardnumber,salt)
let new_cvv = bcrypt.hashSync(person_Details.cvv,salt)

let newperson_details = { ...person_Details, fname: new_fname, mobile: new_mobile, email: new_email, password: new_password, creditcardnumber: new_creditcardnumber, cvv: new_cvv }



console.log(newperson_details);
