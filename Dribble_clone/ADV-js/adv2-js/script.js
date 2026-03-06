
// Que=1

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     login(){
//         return loggedin;
//     }
// }

// let user1=new User("Ashish","chandel078ashish@gmail.com");
// let user2=new User("Manish","chandel098manish@gmail.com");
// let user3=new User("Aakahsh","chandel08aakash@gmail.com");
// let user4=new User("Krish","chandel07krish@gmail.com");
// let user5=new User("Kanishak","chandel98kanishak@gmail.com");


// Que=2

// let Product={
//     name:"Addidas",
//     price:3000,
//     discount: 500,
//     finalprice: function(){
//         return this.price-this.discount;
//     }
// }
// console.log(Product.finalprice());


// Que=3

// class Car{
//     constructor(brand,speed){
//         this.brand=brand;
//         this.speed=speed;
//     }
//     drive(){
//         console.log(this.brand+ " "+this.speed)
//     }
// }
// let car1=new Car("BMW",200);
// let car2=new Car("Creta",180);


// Que=4

// class Student{
//     constructor(name,rollno){
//         this.name=name;
//         this.rollno=rollno;
//     }
//     print(){
//         console.log(this.name);
//         console.log(this.rollno);
//     }
// }
// let student1=new Student("Anshu",23098116780001);
// let student2=new Student("Ashish",23098116780002);
// let student3=new Student("Arshdeep",23098116780003);
// let student4=new Student("Aashu",23098116780004);
// student1.print();
// student2.print();
// student3.print();
// student4.print();


// Que=5

let obj={
    simple_fnc:function(){
        console.log(this);              // it returns object because it gained from its parent
    },

    arrow_fnc:()=>{
        console.log(this);              // it returns window
    }
}
