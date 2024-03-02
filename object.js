// let contact = {
//   tel: "207-662-5412",
//   email: "RonaldSMurphy@freepost.org",
// };

// contact.email = {
//   private: "RonaldSMurphy@freepost.org",
//   work: "rsmurphy@briazz.com",
// };

// if (!contact.notes) {
//   // if undefined (check !)
//   contact.notes = "something really important";
// }

// contact && contact.email && console.log(contact.email.private);
// if ("notes" in contact) {
//   // if true
//   console.log(contact.notes);
// }
// delete contact.email.work;
// console.log(contact);

// let contact = {
//   tel: "207-662-5412",
//   email: "RonaldSMurphy@freepost.org",
// };
// let keys = Object.keys(contact);// this will return into array of object keys ["tel","email"]
// console.log(keys);//["tel","email"]

// const contact = {};
// contact.email = "rsmurphy@briazz.com";
// console.log(contact.email);
// delete contact.email;
// console.log(contact.email);

// let point0 = { x: 10, y: 20 };
// let point2 = { ...point0 };
// let point3 = { ...point0, z: 100 };
// let point4 = { ...point3, g: { z: 200, color: "red" } };

// console.log(point0);
// console.log(point2);
// console.log(point3);
// console.log(point4);

// let circle1 = {
//   radius: 100,
//   center: {
//     x: 100,
//     y: 100,
//   },
// };
// let circle2 = { ...circle1 };
// circle1.radius = 200;
// circle1.center.x = 200;
// console.log(circle2.radius);
// console.log(circle2.center.x);
// console.log(circle1 === circle2); // false
// console.log(circle1.center === center); // true !

// let circle = {
//   radius: 100,
//   center: {
//     x: 0,
//     y: 0,
//   },
//   getType() {
//     return typeof circle.radius === "number" ? "circle" : "unknown";
//   },
// };
// console.log(circle.getType());

//GETTER
/*let contact = {
  _tel: "207-662-5412",
  get tel() {
    return this._tel;
  },
};
console.log(contact.tel);
contact.tel = "100-100-1000";
console.log(contact.tel);
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email);*/

//SETTER
/*let contact = {
  _age: 36,
  firstName: "David",
  lastName: "Taylor",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  get age() {
    return this._age;
  },
  set age(a) {
    if (a > 0) this._age = a;
  },
};
console.log(contact.fullName);
contact.age = -20;
console.log(contact.age);*/
