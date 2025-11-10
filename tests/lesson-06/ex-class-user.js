class User {
    name = '';
    age = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("Xin chao, toi la " + this.name);
    }
}

let user1 = new User("Meo", 3);
let user2 = new User("Mer", 1);

user1.sayHello();
user2.sayHello();