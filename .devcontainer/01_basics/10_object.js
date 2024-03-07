//Singleton
//object.create

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Akash",
    "full name": "Akash Tundare",
    [mySym]: "mykey1",  //symbol ke synatx ke liye [] use karte hai
    age: 18,
    location: "Jaipur",
    email: "Akash@gmail.com",
    isLoggedIn: false,
}

//console.log(Jsuser.email);
//console.log(Jsuser["email"]);
//console.log(Jsuser["full name"]);
//console.log(Jsuser[mySym]);
//console.log(Jsuser);


/*Jsuser.greeting = function(){
    console.log("hello js user");
}
console.log(Jsuser.greeting());
*/

//Singleton Object
/*const tinderUser = new Object()
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
const user = {
    email: "some@gmail.com",
    fullname: {
        username:{
            firstname: "Akash",
            lastname: "Tundare"
        }
    }
}
//console.log(user.fullname.username);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);
const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "akash@gmail.com"
    },
    {
        id: 2,
        email: "akshay@gmail.com"
    }
]
console.log(users);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
*/

//Destructing objects

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor
const {courseInstructor: Instructor} = course
console.log(Instructor);








