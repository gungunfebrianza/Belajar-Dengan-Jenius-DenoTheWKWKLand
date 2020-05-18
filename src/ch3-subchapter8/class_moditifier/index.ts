class Person {

   public name:string;
   protected age: number;
   private hobby: string;

   constructor(name: string, age: number, hobby: string) {
     this.name = name;
     this.age = age;
     this.hobby = hobby;
   }
}

const result = new Person("john doe", 23, "coding");
console.log(result);
