function person2(first, last , age, branch){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.branch = branch;

}
const p = new person2("Vasanth", "Katkuri", 20,"IT");
console.log(p.firstName+" " +p.lastName+" is studying in "+p.branch+" his age is: "+p.age);