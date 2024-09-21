const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);



const JsUser = {
    name: "Varun",
    "full name": "Varun Bansal",
    age: 18,
    location: "Jaipur",
    email: "vb60490@gmial.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)

console.log(JsUser["full name"])


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Varun",
            lastname: "Bansal"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);



