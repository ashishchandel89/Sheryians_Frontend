
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

class Car{
    constructor(brand,speed){
        this.brand=brand;
        this.speed=speed;
    }
    drive(){
        console.log(this.brand+ " "+this.speed)
    }
}
let car1=new Car("BMW",200);
let car2=new Car("Creta",180);