class Student {
    name = '';
    classCode = 0;
    addr = '';
    test1Grade = 0;
    test2Grade = 0;

    constructor(name, classCode, addr) {
        this.name = name;
        this.classCode = classCode;
        this.addr = addr;
    }

    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log("Class Code la " + this.classCode);
        console.log("Address la " + this.addr);
        console.log("Test 1 grade la " + this.test1Grade);
        console.log("Test 2 grade la " + this.test2Grade);
    }
}

