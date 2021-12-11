var originalusername = "anis"
var originalpassword = 1234

function login(username, password) {
    if (username == originalusername) {
        if (password == originalpassword) {
            console.log("login successfuly!");
        } else {
            console.log("wrong password");
        }
    } else {
        console.log("this  user does not existe");
    }


}

login("anis", 1234)
login("anis", 1256)
login("anfd", 1234)