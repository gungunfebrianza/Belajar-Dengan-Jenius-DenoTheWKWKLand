## Typescript

**Typescript** adalah sebuah ***superset javascript*** yang dikembangkan oleh ***Microsoft***, sebuah ***open source project*** yang menginspirasi **Ryan Dahl** untuk mengembangkan **Deno** sebuah ***Runtime Engine*** yang dapat digunakan untuk mengeksekusi ***Typescript***.

<img src="Assets/SupersetJavascript.png">

Jika anda melihat gambar di atas pasti faham, setiap ***Javascript Code*** adalah sebuah ***Typescript***. ***Typerscript*** memberikan kelebihan baru untuk ***javascript*** sehingga seringkali disebut dengan ***Extended*** ***Javascript***. 

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

#### *Type Inference*

Selain ketiga tersebut kita bisa menggunakan tipe ***any*** yang bisa di isi apa saja atau disebut ***Type Inference***.

```typescript
var hmm: any = 4;
hmm = "maybe a string instead";
hmm = false;
```

#### *Typed Array*

Contoh sebuah ***collection***, di dalam ***typescript*** terdapat terdapat ***typed*** ***Array***.

```typescript
var list: number[] = [1, 2, 3];
```

#### ***Generic Array***

Contoh sebuah ***collection***, di dalam ***typescript*** terdapat ***generic array***.

```typescript
var list: Array<number> = [1, 2, 3];
```

#### *Enumeration*

Contoh sebuah ***Enumeration***.

```typescript
enum Love {Maudy, Ayunda, Faza};
var c: Love = Love.Maudy;
```

#### *Function Return Void*

Contoh sebuah ***function*** dengan ***return void***.

```typescript
function beauty(): void {
	alert("Maudy is beautiful");
}
```

#### *Lambda*

Contoh **lambda** dan **type inference**.

```typescript
var func1 = function(i: number): number { return i * i; }
var func2 = function(i: number) { return i * i; }
var func3 = (i: number): number => { return i * i; }
var func4 = (i: number) => { return i * i; }
var func5 = (i: number) => i * i;
```

#### *Interface*

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

Contoh ***Interface*** untuk sebuah ***function***.

```typescript
interface fungsiCari {
	(source: string, subString: string): boolean;
}

var data: fungsiCari;
data = function(src: string, sub: string) {
	return src.search(sub) != -1;
}	
```

