- [Typescript](#typescript)
    - [Typescript Quick Introduction](#typescript-cheatsheet)
        1. [Data Types](#type-inference)
        2. [Union](#union)
        3. [Type Inference](#type-inference)
        4. [Typed Array](#type-inference)
        5. [Generic Array](#generic-array)
        6. [Enumeration](#enumeration)
        7. [Void Type](#function-return-void)
        8. [Function Generic](#function-generic)
        9. [Function Constructor](#function-constructor)
        10. [Tuples](#tuples)
        11. [Lambda](#lambda)
        12. [Interface](#interface)
        13. [Class](#class)
        14. [Class & Properties](#class--properties)
        15. [Class & Constructor](#class--constructor)
        16. [Class & Static Member](#class--static-member)
        17. [Class Inheritance & Overriding](#class-inheritance--overriding)
        18. [Class & Generic](#class--generic)
        19. [Class & Moditifier](#class--moditifier)
        20. [Class & Readonly](#class--readonly)
        21. [Modules](#modules)
        22. [Namespace](#namespace)
        23. [Assertion](#assertion)
        24. [Promise](#promise)
        25. [Collection](#collection)
        26. [Destructuring](#destructuring)
        27. [Immutable](#immutable)
        28. [Type](#type)

## Typescript

**Typescript** adalah sebuah ***superset javascript*** yang dikembangkan oleh ***Microsoft***, sebuah ***open source project*** yang menginspirasi **Ryan Dahl** untuk mengembangkan **Deno** sebuah ***Runtime Engine*** yang dapat digunakan untuk mengeksekusi ***Typescript***.

<img src="Assets/SupersetJavascript.png">

Jika anda melihat gambar di atas pasti faham, setiap ***Javascript Code*** adalah sebuah ***Typescript***. ***Typerscript*** memberikan kelebihan baru untuk ***javascript*** sehingga seringkali disebut dengan ***Extended*** ***Javascript***.

> What if we could strengthen JavaScript with the things that are missing for large scale
> application development, like static typing, classes [and] modules... that’s what TypeScript
> is about.
> —Anders Hejlsberg

Kelebihan ini dapat digunakan untuk mempermudah pengembangan setiap ***large-scale application*** yang ditulis menggunakan bahasa pemrograman ***Javascript***. Di dalam ***typescript*** kita akan mempelajari konsep seperti :

1. ***Classes***,
2. ***Modules***,
3. ***Interface***,
4. ***Generics***,
5. Dan ***Static Typing*** menggunakan ***javascript***.

### Typescript Cheatsheet

Dibawah ini adalah ***cheatsheet*** yang akan kita lihat dengan cepat :

#### *Data Types*

Terdapat 3 Tipe data dalam ***typescript*** :

```typescript
var logika: boolean = false;
var usia: number = 26;
var nama: string = "Maudy Ayunda";
```

##### *Number*

Sebuah angka di dalam *typescript* merupakan tipe data *number*.

```typescript
let usia: number = 26;
```

***Javascript*** adalah bahasa dengan karakteristik ***types*** : ***Loosely typed language*** yaitu tidak mengenal ***type*** data seperti ***integer, short, long*** atau ***float*** dan seterusnya. Begitu juga di dalam ***typescript*** seluruh ***number*** representasinya di dalam sistem diubah menjadi 64 ***-bit floating point***.

Namun begitu kita tetap bisa menyimpan sebuah nilai angka desimal dalam variabel ***typescript***.

```typescript
let tinggi: number = 900.888;
```

***Typescript*** juga mendukung ***number-literal*** dalam bentuk ***hex, binary*** dan ***octal***. Perhatikan kode dibawah ini dan ***prefix*** yang digunakan :

```typescript
let dec: number = 27;
let hex: number = 0x001b;
let binary: number = 0b11011;
let octal: number= 0o0033;
```

##### *String*

Kita bisa menyimpan nilai ***string*** ke dalam sebuah variabel menggunakan ***double*** atau ***single quote***. Perhatikan kode di bawah ini :

```typescript
let nama: string = "Gun Gun Febrianza";
nama = 'Gun Gun Febrianza';
```

***Typescript*** juga mendukung ***template string*** menggunakan ***syntax ${expression}***. Perhatikan kode di bawah ini :

```typescript
var nama: string ="Gun Gun Febrianza";
let nama: string = `Hallo ${nama}, kami doakan semoga anda selalu sehat.`;
```

#### *Union*

Ada saatnya kita menginginkan variabel yang bisa disimpan dengan berbagai ***type***,  selain menggunakan ***type any*** kita bisa menggunakan ***union*** . Sebuah ***union*** ***type*** adalah ***type*** kombinasi dari berbagai  ***type***. Kode di bawah ini adalah variabel dengan kemampuan untuk bisa menampung dua ***type*** data sekaligus yaitu sebagai ***boolean*** atau ***number***.

```typescript
let isVisible : boolean|number = true;
isVisible = 1; // OK
isVisible = "yes"; // akan menghasilkan error
```

#### *Type Inference*

Selain ketiga tersebut kita bisa menggunakan tipe ***any*** yang bisa di isi apa saja atau disebut ***Type Inference***.

```typescript
var hmm: any = 4;
hmm = "maybe a string instead";
hmm = false;
```

Terkadang kita membutuhkan sifat ***dynamic typing*** bukan hanya ***static typing*** seperti yang telah kita lakukan
setiap kali hendak membuat sebuah variabel. Dalam ***typescript*** kita bisa menggunakan ***any-type***.

```typescript
let diaCantik: any = true; // inisialisasi dengan boolean
console.log(typeof diaCantik);

diaCantik = "benar"; // nilai variabel diubah menjadi string
console.log(typeof diaCantik);

diaCantik.fungsiX();
```

Pada kode di atas ***typeof*** adalah ***keyword*** yang digunakan untuk mengetahui tipe data suatu variabel. ***Any- Type*** yang digunakan akan membuat kompiler untuk tidak memberikan ***semantic error*** saat memeriksa ***type*** yang hendak digunakan.

***Any-type*** dapat digunakan sebagai contoh saat kita menghadapi kasus dimana kita membutuhkan ***function-parameter*** dengan karakteristik ***argument*** yang bersifat implisit atau tidak diketahui. Di bawah ini adalah contoh ***function*** dengan parameter implisit. Dikatakan implisit karena kita tidak akan pernah tau apa saja nilai yang akan dimasukan kedalam ***parameter***, karena ***parameter*** tidak memiliki ***type*** :

```typescript
function tulisNama(teman:any) {
	console.log(teman.namaKepanjangan);
}
```

#### *Typed Array*

Contoh sebuah ***collection***, di dalam ***typescript*** menggunakan ***typed data*** ***Array***.

```typescript
var list: number[] = [1, 2, 3];
```

#### ***Generic Array***

Contoh sebuah ***collection***, di dalam ***typescript*** menggunakan ***generic array***.

```typescript
var list: Array<number> = [1, 2, 3];
```

#### *Enumeration*

Contoh sebuah ***Enumeration***.

```typescript
enum Love {Maudy, Ayunda, Faza};
var c: Love = Love.Maudy;
```

Dengan ***enum*** kita bisa membuat ***naming*** yang mudah difahami untuk sebuah angka, ***index*** pada enum juga dimulai dari angka 0 dan seterusnya. Di bawah ini adalah contoh kode ***enum*** :

```typescript
enum Arah { kiri, atas, kanan, bawah }
```

Pada ***enum*** di atas, kiri memiliki ***index*** 0, atas memiliki ***index*** 1, kanan memiliki ***index*** 2 dan bawah memiliki ***index*** 3. Kita juga bisa mengubah ***index*** dari angka awal dalam sebuah ***enum***.

```typescript
enum Arah { kiri = 1, atas, kanan, bawah }
```

Selain itu kita juga bisa menjelaskan seluruh ***index*** dalam ***enum*** secara ***explicit*** :

```typescript
enum Arah { kiri = 1, atas = 2, kanan = 3, bawah = 4}
```

Untuk mengakses nilai yang ada di dalam sebuah ***enum*** kita bisa memanggilnya dengan cara :

```typescript
let nilai: number = Arah.kiri;
```

Atau menggunakan posisi ***index*** yang dimilikinya

```typescript
let nilai: number = Arah[1];
```

#### *Function Return Void*

**Function Return Void** adalah sebuah metode yang biasa digunakan untuk melanjutkan sebuah nilai yang telah ditentukan didalam **function** tersebut, tanpa perlu menggunakan **return statment**.

Contoh sebuah ***function*** menggunakan ***return void***.

```typescript
function beauty(): void {
	alert("Maudy is beautiful");
}
```

Sebuah ***type void*** digunakan sebagai ***return type*** dari sebuah ***function***. Dengan ***void*** sebuah ***function*** tetap
menghasilkan ***return*** yang tidak memiliki nilai.

#### *Function Generic*

**Function Generic** adalah sebuah metode yang biasa digunakan untuk menetukan sebuah type data menjadi type data dynamic, dimana type data dapat berubah- ubah sesuai dengan ketentuan type data yang diberikan.

Contoh sebuah ***function*** menggunakan ***single generic***.

```typescript
// single generic type data
function person <T> (name: T, age: T) : void {
   console.log(`my name ${name} and age ${age}`);
}
person <string> ("Maudy Ayunda", "28");
```

Contoh sebuah ***function*** menggunakan ***multiple generic***.

```typescript
// multiple generic type data
function profile <T, U> (name: T, age: U) : void {
  console.log(`my name ${name} and age ${age}`);
}
profile <string, number> ("Maudy Ayunda", 28);
}
```

#### *Function Constructor*

**Function Constructor** adalah sebuah  metode yang dapat membuat **function** menjadi dapat di instansiasi layaknya sebuah kelas, ini biasa  disebut juga sebagai versi mini dari sebuah class.

Contoh sebuah ***function*** menggunakan  **function constructor***.

```typescript
function Deno(this: any, name: string, release: number, creator: string) {
  this.name = name;
  this.release = release;
  this.creator = creator;
}

const resultI = new (Deno as any)("DenoJs", 2018, "Ryan Dyland");
console.log(resultI);
```
**prototype**  adalah fungsi dimana kita bisa membuat sebuah object baru dari object yang sudah ada.

Contoh sebuah ***function constructor*** menggunakan ***prototype***

```typescript
function Deno(this: any, name: string, release: number, creator: string) {
  this.name = name;
  this.release = release;
  this.creator = creator;
}

Deno.prototype.Node = function(this: any, name: string, release: number, creator: string, version: string) {
  this.name = name;
  this.release = release;
  this.creator = creator;
  this.version =  version;
}

const resultII = new (Deno as any)("Denojs", 2018, "Ryan Dyland", "v14.0.0");
resultII.Node("Nodejs", 2009, "Ryan Dyland")
console.log(resultII);
```

#### *Tuples*

**Tuples** adalah sebuah metode yang biasa digunakan untuk membuat sebuah type data layaknya seperti **array**, dimana **tuples** mempunyai sebuah kemiripan dengan type data **array** yaitu memiliki sebuah index dan value.

Di bawah ini terdapat sebuah ***tuple*** yang memiliki variabel ***string*** dan ***boolean***.

```typescript
let contohTuple: [string, boolean] = ["Gun Gun Febrianza", true];
```

Sebuah ***type string*** berada pada ***index*** ke 0 dan ***boolean*** ada pada ***index*** ke 1. Sebuah ***tuples*** bekerja seperti ***array*** hanya saja bisa memiliki ***type*** yang berbeda.

#### *Lambda*

**Lambada Function (Arrow Function)**  adalah sebuah metode dimana kita bisa membuat sebuah fungsi tersendiri, untuk masing - masing perintah yang telah kita tentukan, contoh yang paling umum adalah ketika kita ingin membuat sebuah fungsi custom dari masing - masing operasi pada `MySQL`

Contoh **lambda function** dan **type inference**.

```typescript
var func1 = function(i: number): number { return i * i; }
var func2 = function(i: number) { return i * i; }
var func3 = (i: number): number => { return i * i; }
var func4 = (i: number) => { return i * i; }
var func5 = (i: number) => i * i;
```

#### *Interface*

**Inteface** biasa digunakan untuk mendefinisikan sebuah property pada sebuah class atau object, dimana sebuah object atau class yang di berikan sebuah **interface**, maka harus mengikuti ketentuan yang berlaku pada **interface** tersebut.

Contoh **interface**, kita bisa membuat opsional ***properties*** yang ditandai dengan simbol ?

```typescript
interface Manusia {
nama: string;
umur?: number;
makan(): void;
}
```

Contoh ***Object*** hasil implementasi dari ***interface*** di atas.

```typescript
var m: Manusia = { nama: "Maudy", makan: () => {} };
var m: Manusia = { nama: "Maudy", umur: 22, makan: () => {} };
```

Contoh ***Interface*** menggunakan ***function***.

```typescript
interface fungsiCari {
	(source: string, subString: string): boolean;
}

var data: fungsiCari;
data = function(src: string, sub: string) {
	return src.search(sub) != -1;
}
```

Contoh ***Interface*** menggunakan ***type data array dan object***.

```typescript
interface Arr {
  [index: number] : number,
}

interface Obj {
  name: (name: string) => string
}


const numb: Arr = [1,2,3,4,5];

const person: Obj = {
   name: function(name: string) {
     return name;
   }
}

console.log(numb);
console.log(person.name("Maudy Ayunda"));
```

Contoh ***Interface*** menggunakan ***class***.

```typescript
interface IPerson {
  name: string,
  age: number,
  hobby: string
}

class Person implements IPerson {

   name: string;
   age: number;
   hobby: string;

   constructor(name: string, age: number, hobby: string) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
   }
}

const result = new Person("Maudy Ayunda", 28, "Modeling");
console.log(result);
```
### Class

**Class** disebut juga sebagai `Blue Print` atau `Parent Class` dimana sebuah metode yang digunakan untuk menciptakan suatu instant dari object itu sendiri dan **Class** juga merupakan grup dari suatu object dengan kemiripan `Attributes` / `Properties`, method dan bisa berelasi ke object turunannya.

#### *Class & Properties*

Contoh sebuah ***class*** menggunakan ***properties*** dan ***function***.

```typescript
class Math {
	x := number;
	hitungSQRT() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
```

#### *Class* & *Constructor*

Contoh sebuah ***class*** menggunakan ***constructor.***

```typescript
class Math {
	x := number;
	constructor(x: number, public y: number = 0) {
		this.x = x;
	}
}
```

#### *Class & Static* *Member*

Contoh sebuah ***class*** menggunakan ***static member***.

```typescript
class Math {
	x := number;
	constructor(x: number, public y: number = 0) {
		this.x = x;
	}
	static koordinat = new A(0, 0);
}
```

#### *Class Instance*

Contoh sebuah ***object*** dari ***Class Math***.

```typescript
var p1 = new Math(10 ,20);
var p2 = new Math(25); //maka y akan bernilai 0
```

#### *Class Inheritance & Overriding*

Contoh ***inheritance*** dan ***overriding*** dari ***Class Math***.

```typescript
class koordinat3D extends Math {
	constructor(x: number, y: number, public z: number = 0) {
		super(x, y); //wajib menggunakan keyword super
	}

	hitungSQRT() {
		var d = super.dist();
		return Math.sqrt(d * d + this.z * this.z);
	}
}

```

#### *Class & Generic*

Contoh sebuah ***class*** menggunakan ***type data generic***.

```typescript
// single generic in class
class Person <T>  {
   name: T;
   age: T;
   constructor(name: T, age: T) {
     this.name = name;
     this.age = age;
   }
}
const resultPerson = new Person<string>("Maudy Ayunda", "28");
console.log(resultPerson);

// multiple single generic in class
class Profile <T, U>  {
   name: T;
   age: U;
   constructor(name: T, age: U) {
     this.name = name;
     this.age = age;
   }
}
const resultProfile = new Profile<string, number>("Maudy Ayunda", 28);
console.log(resultProfile);
```

#### *Class & Moditifier*

Contoh sebuah ***class*** menggunakan ***moditifiter***.

```typescript
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
```

#### *Class & Readonly*

Contoh sebuah ***class*** menggunakan ***readonly*** property.

```typescript
class Deno {

  readonly deno = "D";
  node:string = "N";

  constructor(deno : any , node: string){
    this.deno = deno;
    this.node = node;
  }
}

const result = new Deno("Typescript", "JavaScript");
result.deno = "Typescript Server Side";
console.log(result);
```

#### *Modules*

**Modules** adalah sebuah metode yang biasa digunakan untuk memberikan sebuah nama alias untuk sebuah module yang nantinya akan digunakan.

Contoh menggunakan ***Modules***.

```typescript
module Geometry {
	export class Kubus {
		constructor(public lebarsisi: number = 0) {
		}

        area() {
            return Math.pow(this.lebarsisi, 2);
        }
	}
}

var s1 = new Geometry.Kubus (5);
```

Contoh penggunaan ***alias*** untuk menggunakan sebuah ***modules***.

```typescript
import G = Geometry;
var s2 = new G.Kubus (10);
```

#### *Namespace*

**Namespace** adalah sebuah metode  yang digunakan untuk memberikan sebuah label atau mengelompokan sebuah fungsi tertentu untuk digunakan.

Contoh menggunakan ***Namespace***

```typescript
namespace Framework {

  export function Deno(this: any, name: string, release: number, creator: string) {
    this.name = name;
    this.release = release;
    this.creator = creator;
  }

  export function Node(this: any, name: string, release: number, creator: string) {
    this.name = name;
    this.release = release;
    this.creator = creator;
  }

}

const deno = new (Framework.Deno as any)("Deno", 2018, "Ryan Dyland");
console.log(deno);

const node = new (Framework.Node as any)("Node", 2009, "Ryan Dyland");
console.log(node);
```

#### *Assertion*

**Assertion**  adalah sebuah metode dimana kita bisa melakukan perbandingan compare terhadap sebuah nilai yang telah tentukan.

Contoh sebuah ***assertion*** menggunakan **Variabel**.

```typescript
let code: any = 123;
let codeFirst = <number> code;
// alternative
let codeSecond = code as number;

console.log(typeof codeFirst)
console.log(typeof codeSecond);
```

Contoh sebuah ***assertion*** pada sebuah object menggunakan **Interface**

```typescript
// menggunakan interface
interface IPerson {
  name: string,
  age: number
}

const person = <IPerson> {};
person.name = "Maudy Ayunda";
person.age = 28;

console.log(person);
```

Contoh sebuah ***assertion*** pada sebuah object menggunakan **Type**

```typescript
type IProfile  = {
  name: string,
  age: number
}

const profile = <IProfile> {};
profile.name = "Maudy Ayunda";
profile.age = 28;

console.log(profile);
```

#### *Promise*

**Promise** adalah sebuah metode yang digunakan untuk menangani operasi `Asyncronus` dalam `Typescript`, mereka mudah digunakan ketika berhadapan dengan beberapa operasi `Asyncronus` dimana panggilan balik dapat membuat panggilan balik yang mengarah ke kode yang tidak dapat dieksekusi.

Contoh sebuah ***promise*** menggunakan **Assertion**

```typescript
// cara pertama
const person = async function(): Promise<string> {
    let name = "Maudy Ayunda";
    return name;
}
person().then(result => console.log(result));
```

Contoh sebuah ***promise*** menggunakan **Promise Constructor**

```typescript
// cara kedua
function person ()  {
  return new Promise((resolve, reject) => {
     let name = "Maudy Ayunda";
     resolve(name);
  })
}
person().then(result => console.log(result));
```

Contoh sebuah ***promise*** menggunakan **Promise Resolve**

```typescript
// cara ketiga
function person ()  {
  let name = "Maudy Ayunda";
  return Promise.resolve(name);
}
person().then(result => console.log(result));
```

#### *Collection*

**Collection** adalah sebuah metode yang digunakan untuk menangani sebuah operasi layaknya sebuah object dan array.

Contoh sebuah ***collection*** menggunakan **Map Constructor**

```typescript
const numb = new Map<string, number>([["satu", 1], ["dua", 2], ["tiga", 3]])
console.log(numb);
```

Contoh sebuah ***collection*** menggunakan **Set Constructor**

```typescript
const days = new Set <string> (["senin", "selasa", "rabu"]);
console.log(days);
```

#### *Destructuring*

**Destructuring** adalah sebuah metode yang digunakan untuk mengekstrak sebuah nilai dari property, tanpa perlu merujuk ke parent property tersebut.

Contoh sebuah ***destructuring*** pada sebuah function menggunakan parameter **Array**

```typescript
let days: string[] = ["senin","selasa","rabu"];

function Days([senin, selasa, rabu]: string[]) {
   console.log(senin, selasa, rabu);
}
Days(days);
```

Contoh sebuah ***destructuring*** pada sebuah function menggunakan parameter **Object**

```typescript
interface IPerson {
  name: string;
  age: number;
  hobby: string
}

let biodata = {
  name: "Maudy Ayunda",
  age: 28,
  hobby: "Modeling"
}

function person ({name, age, hobby}: IPerson) {
   console.log(`my name is ${name} and my age: ${age} and my ${hobby}`);
}
person(biodata);
```

Contoh sebuah ***destructuring*** pada sebuah function menggunakan parameter **Array Object**

```typescript
// function parameter destructuring menggunakan array
interface IPerson {
  name: string;
  age: number;
  hobby: string
}

let biodatas = [{
  name: "Raisa Andriana",
  age: 30,
  hobby:"Singer"
},
{
  name: "Maudy Ayunda",
  age: 28,
  hobby:"Modeling"
}
];

function person([{name, age, hobby}]: IPerson[]) {
  console.log(`my name is ${name} and my age: ${age} and my ${hobby}`);
}
person(biodatas);
```

Contoh sebuah ***destructuring*** menggunakan **Array**

```typescript
const numb: string[] = ["senin", "selasa", "rabu"];
const [senin, selasa, rabu] = numb;
console.log(`${senin} - ${selasa} - ${rabu}`);
```

Contoh sebuah ***destructuring*** menggunakan **Object**

```typescript
interface IPerson {
  name: string;
  age: number;
}

const person:IPerson = {
   name: "Maudy Ayunda",
   age: 28
}

const {name, age} = person;
console.log(`my name is : ${name} and my age is: ${age}`);
```

Contoh sebuah ***destructuring*** menggunakan **Array Object**

```typescript
interface IPerson {
  name: string;
  age: number;
}

const person: IPerson[] = [
  {
   name: "Maudy Ayunda",
   age: 28
  },
  {
    name: "Raisha Adriana",
    age: 30
  }
];

const [{name, age}]: IPerson[] = person;
console.log(`my name is : ${name} and my age is: ${age}`);
```

#### *Immutable*

**Immutable** adalah sebuah metode yang digunakan untuk menambahkan sebuah nilai baru, tanpa perlu merubah nilai aslinya.

Contoh sebuah ***immutable*** menggunakan **Concat** pada sebuah **Array**

```typescript
const firstNumb: number[] = [1,2,3,4,5];
const secodNumb: number[] = [6,7,8,9,10];
const result = firstNumb.concat(secodNumb);
```

Contoh sebuah ***immutable*** menggunakan  **Spread Operator** pada sebuah **Array**

```typescript
const firstNumb: number[] = [1,2,3,4,5];
const secodNumb: number[] = [6,7,8,9,10];
const result = [...firstNumb, ...secodNumb];
console.log(result);
```

Contoh sebuah ***immutable*** menggunakan **Object.defineProperty** pada sebuah **Object.**

```typescript
const Person = {
   name: "Maudy Ayunda",
   age: 28
}

Object.defineProperty(Person, "hobby", {
     value: "Modeling",
     writable: true,
     enumerable: true
});
console.log(Person);
```

Contoh sebuah ***immutable*** menggunakan  **Object.defineProperties** pada sebuah **Object.**

```typescript
const Person = {
   name: "Maudy Ayunda",
   age: 28
}

Object.defineProperties(Person, {
      city: {
        value: "Bandung",
        writable: true,
        enumerable: true
      },
      state: {
        value: "Jawa Barat",
        writable: true,
        enumerable: true
      },
      country: {
        value: "Indonesia",
        writable: true,
        enumerable: true
      }
});
console.log(Person);
```

#### *Type*

**Type** biasa digunakan untuk mendefinisikan sebuah property pada sebuah object, dimana sebuah object  yang di berikan sebuah type, maka harus mengikuti ketentuan yang berlaku pada type tersebut, type sangatlah mirip degan interface perbedaan spesifik antara **Type** dan **Interface** adalah type tidak bisa digunakan secara bersamaan dengan class dan inteface dapat digunakan secara bersamaan dengan class.

Contoh sebuah ***type*** menggunakan **Function**

```typescript
type fungsiCari = {
	(source: string, subString: string): boolean;
}

var data: fungsiCari;
data = function(src: string, sub: string) {
	return src.search(sub) !== -1;
}
console.log(data);
```

Contoh sebuah ***type*** menggunakan  **type data Array dan Object**

```typescript
type Arr = {
  [index: number] : number,
}

type Obj = {
  name: (name: string) => string
}


const numb: Arr = [1,2,3,4,5];

const person: Obj = {
   name: function(name: string) {
     return name;
   }
}

console.log(numb);
console.log(person.name("Maudy Ayunda"));
```

Contoh sebuah ***type*** pada sebuah **Object**

```typescript
type TPerson = {
  name: string;
  age: number;
}

const person: TPerson = {
  name: "Maudy Ayunda",
  age: 28
}

console.log(person);
```

Contoh sebuah ***type*** pada sebuah **Array Object**

```typescript
type TPerson = {
  name: string;
  age: number;
};

const person: TPerson[] = [
  {
    name: "Maudy Ayunda",
    age: 28
  },
  {
    name: "Raisa Adriana",
    age: 30
  }
];
console.log(person);
```

<p align="right">
    <b><a href="#typescript">↥ back to top</a></b>
</p>
