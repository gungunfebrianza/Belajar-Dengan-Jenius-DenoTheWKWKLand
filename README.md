# Mastering Deno + PostgreSQL
<img src="Cover.png" width=66%>

## Table of Contents

- [Lets Destroy Node.js developer](#lets-destroy-nodejs-developer)
- [Installation](#installation)
    - [Install Deno For Windows](#install-deno-for-windows)
        1. [Install Chocolatey Package Manager](#1-install-chocolatey-package-manager)
        1. [Install Deno Via Package Manager](#2-install-deno-via-package-manager)
        1. [Check Deno](#3-check-deno)
    - [Install Deno For Linux](#install-deno-for-linux)
        1. [Install Deno via Curl](#1-install-deno-via-curl)
        1. [Install Deno via Package Manager](#2-install-deno-via-package-manager)
    - [Install Deno For MacOS](#install-deno-for-macos)
- [Deno 101](#deno-101)
    - [REPL Mode Execution](#repl-mode-execution)
    - [Script Execution](#script-execution)
    - [Eval Mode](#eval-mode)
    - [Deno Command](#deno-command)
        1. [Deno Options](#1-deno-options)
        2. [Deno Sub Command](#2-deno-sub-command)
        3. [Deno Command Structure](#3-deno-command-structure)
        4. [Run Javascript & Typescript Files](#run-javascript--typescript-files)
     - [Deno Cutom Build in Function](#deno-custom-build-in-function)
	      1. [Deno Router](#1-deno-router)
	      2. [Deno Env](#2-deno-env)
	      3. [Deno Flash](#3-deno-flash)
	      4. [Deno View](#4-deno-view)
- [Typescript](./Typescript.md)
    - [Typescript Quick Introduction](./Typescript.md#typescript-cheatsheet)
        1. [Data Types](./Typescript.md#type-inference)
        1. [Union](./Typescript.md#union)
        1. [Type Inference](./Typescript.md#type-inference)
        1. [Typed Array](./Typescript.md#type-inference)
        1. [Generic Array](./Typescript.md#generic-array)
        1. [Enumeration](./Typescript.md#enumeration)
        1. [Void Type](./Typescript.md#function-return-void)
        1. [Tuples](./Typescript.md#tuples)
        1. [Lambda](./Typescript.md#lambda)
        1. [Interface](./Typescript.md#interface)
        1. [Class & Properties](./Typescript.md#class--properties)
        1. [Class & Constructor](./Typescript.md#class--constructor)
        1. [Class & Static Member](./Typescript.md#class--static-member)
        1. [Class Inheritance & Overriding](./Typescript.md#class-inheritance--overriding)
        1. [Modules](./Typescript.md#modules)
- [Other Examples](#other-examples-)
- [Contributor](#contributor)

## Lets Destroy Node.js developer.

> "*When you are designing a program there are things that might be cute to add in, you always regret those*."
>
> Ryan Dahl - 10 Things i Regret About Node.js @ [JSConf Europe](https://www.youtube.com/watch?v=M3BM9TB-8yA)



## Installation

### Install Deno For Windows

Kita akan melakukan instalasi ***Deno*** menggunakan ***Package Manager*** yang disebut dengan ***Chocolatey*** :

#### 1. Install Chocolatey Package Manager

Jalankan **Powershell** (**run as administrator**), kemudian eksekusi perintah di bawah ini :

<img src="Assets/PoweshellSetup.JPG" width=55%>

Setelah itu eksekusi perintah ***powershell*** di bawah ini :

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Proses instalasi sedang di lakukan, kita akan memiliki ***directory* Chocolatey Package Repository** di :

```
C:\ProgramData\chocolatey\lib
```

Kita juga akan memiki ***directory*** untuk ***Chocolatey Binary*** di :

```
C:\ProgramData\chocolatey\bin
```

Pastikan ***chocholatey*** sudah terpasang dengan cara mengeksekusi perintah di bawah ini dalam **cmd.exe** :

```
choco
```

Maka informasi versi ***choco*** akan di tampilkan :

```
Chocolatey v0.10.15
```

#### 2. Install Deno Via Package Manager

Lakukan instalasi ***Deno*** menggunakan perintah di bawah ini :

```
choco install deno
```

Jika berhasil maka dalam d***irectory Chocolatey Package Repository***, ***package Deno*** akan tersimpan :

```
C:\ProgramData\chocolatey\lib\deno
```

#### 3. Check Deno

Check Eksistensi ***Deno*** dengan mengeksekusi perintah di bawah ini :

```
deno -V
```

Jika berhasil maka akan muncul informasi versi deno yang sedang kita gunakan :

<img src="Assets/Deno.JPG">

### Install Deno For Linux

#### 1. Install Deno via Curl

1. Buka terminal eksekusi perintah di bawah ini :

    ```
    curl -fsSL https://deno.land/x/install/install.sh | sh
    ```

2. Jika berhasil maka proses instalasi akan dilakukan :

    <img width="66%" src="Assets/CurlSetup.jpg">

    jalankan command `deno -V`, apabila muncul "__commnad not found: deno__"
    maka lanjut ke step berikutnya

3. Menambahkan path ke bash_profile atau bashrc

    - Eksekusi perintah `nano .bashrc` atau `nano .zshrc` tergantung dari **shell** yang kalian gunakan

    - Salin perintah di bawah ini dan simpan di baris terakhir di `.bashrc` atau `.zshrc`

        ```
        export DENO_INSTALL="/home/<username>/.deno"
        export PATH="$DENO_INSTALL/bin:$PATH"
        ```
      Ganti bagian `<username>` dengan username kalian

    - Save, lalu restart terminal dan jalankan `deno -V`

#### 2. Install Deno via Package Manager

##### Via [Brew](https://brew.sh/)

1. Install brew

    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    ```

2. Install Deno via Brew

    ```
    brew install deno
    ```

### Install Deno For MacOS


<p align="right">
    <b><a href="#mastering-deno--postgresql">↥ back to top</a></b>
</p>

---

## Deno 101

Untuk memulai menggunakan **Deno** ada 3 langkah yang bisa kita gunakan :

<img src="Assets/Deno.png">

### REPL Mode Execution

Untuk menggunakan Deno dalam Mode ***REPL*** **(Read – Eval – Print – Loop\)**, pada ***cmd.exe*** ketik :

```
deno
```

Eksekusi ***statement*** di bawah ini :

```javascript
1+1
```

Kemudian eksekusi ***statement*** di bawah ini untuk menampilkan pesan Hello World

```javascript
console.log("Hello World")
```

Jika berhasil maka akan memproduksi :

```
Hello World
```

Jika ingin keluar dari ***REPL Mode***, klik ***CTRL+Shift+D***.

### Script Execution

Jika kita ingin mengeksekusi sebuah ***file javascript*** yang telah diubah menjadi ***typescript*** menggunakan ***deno***, eksekusi perintah di bawah ini :

```
deno run https://deno.land/std/examples/welcome.ts
```

Maka anda akan melihat ***output*** informasi seperti di bawah ini :

```
Download https://deno.land/std/examples/welcome.ts
Warning Implicitly using master branch https://deno.land/std/examples/welcome.ts
Compile https://deno.land/std/examples/welcome.ts
Welcome to Deno 🦕
```

### Eval Mode

Mengeksekusi dalam mode ***eval*** jarang sekali dilakukan dan hanya digunakan di kasus-kasus tertentu saja. Di versi ***node.js*** sebelumnya ***eval*** mode merupakan model eksekusi yang rentan untuk dieksploitasi, pada ***deno*** kerentanan tersebut sudah di perbaiki.

Untuk mengetahui cara mengeksekusi dalam ***eval*** mode, eksekusi contoh kode di bawah ini :

```
deno eval "console.log(30933 + 404)"
```

### Deno Command

**Deno** memiliki ***Options & Sub Commands*** yang dapat kita gunakan :

#### 1. Deno Options

Saat kita mengeksekusi perintah dengan *options* di bawah ini :

```
deno --help
```

Terdapat struktur yang bisa kita pelajari :

<img src="Assets/DenoOptions.png">



#### 2. Deno Sub Command

Saat kita mengeksekusi perintah dengan *sub command* di bawah ini :

```
deno run https://a.com/test/hello.ts
```

Terdapat struktur yang bisa kita pelajari :

<img src="Assets/DenoSubCommand.png">



#### 3. Deno Command Structure

Kita dapat melihat gambaran besar lebih jauh dari ***Deno Options*** dan ***Sub-commands*** dengan gambar di bawah ini :

<img src="Assets/DenoCommand.png">

### Deno Custom Build In Function

#### 1. Deno Router

**Deno Router** adalah sebuah fungsi untuk menghandle router pada deno, dimana ini dapat mempermudah untuk menhandle request atau reponse yang diberikan oleh user.

### Before
```typescript
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
for await (const req of serve({ port: 8000 })) {
  req.respond({ body: "Hello World\n" });
}
```

### After
``` typescript
import { listenAndServe, ServerRequest, Response }  from "https://deno.land/std@0.50.0/http/server.ts";
import { httpRouter  }  from  "./helpers/routers.ts";

// run server
listenAndServe({ port: 3000 },  httpRouter);

// register router
router.get(req:  ServerRequest,  res:  Response)  {
 req.respond({body: "Hello Wordl"});
},
```
#### 2. Deno Env

**Deno Env** adalah sebuah fungsi untuk menghandle enviroment pada deno, dimana ini dapat digunakan user untuk mendaftarkan sebuah nilai untuk diberikan kedalam enviroment deno.

### Before
```typescript
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
for await (const req of serve({ port: 8000 })) {
  req.respond({ body: "Hello World\n" });
}
```

### After
``` typescript
import { listenAndServe, ServerRequest, Response }  from "https://deno.land/std@0.50.0/http/server.ts";
import { httpRouter }  from  "./helpers/routers.ts";
import { env }  from  "./helpers/env.ts";

// run server
listenAndServe({ port: env("PORT",3000).PORT },  httpRouter);

// register router
router.get(req:  ServerRequest,  res:  Response)  {
 req.respond({body: "Hello Wordl"});
},
```
#### 3. Deno Flash

**Deno Flash** adalah sebuah fungsi untuk menghandle sebuah nilai yang diberika oleh user, kemudian nilai tersebut akan diteruskan ke sebuah view, lalu kemdian akan di tampilkan baik itu berupa string atau json data.

### Before
```typescript
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
for await (const req of serve({ port: 8000 })) {
  req.respond({ body: "Hello World\n" });
}
```

### After
``` typescript
import { listenAndServe, ServerRequest, Response }  from "https://deno.land/std@0.50.0/http/server.ts";
import { httpRouter }  from  "./helpers/routers.ts";
import { env }  from  "./helpers/env.ts";
import { send }  from  "../helpers/flash.ts";

// run server
listenAndServe({ port: env("PORT",3000).PORT },  httpRouter);

// set router
router.get(req:  ServerRequest,  res:  Response)  {
 // untuk text atau html
 send(req, "Hello Wordl");

 // untuk json data
 send(req, {message: "Hello Wordl"});
}
```
#### 3. Deno View

**Deno View** adalah sebuah fungsi untuk merender sebuah template HTML, yang diberikan oleh user .

### Before
```typescript
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
for await (const req of serve({ port: 8000 })) {

const decoded  =  new  TextDecoder("utf-8");
const file = Deno.readFileSync(`${Deno.cwd()}/views/index.html`);
const view  =  decoded.decode(file);
req.respond({
 status:  200,
 headers:  new  Headers({  "content-type":  "text/html"  }),
 body:  view,
 });
}
```

### After
``` typescript
import { listenAndServe, ServerRequest, Response }  from "https://deno.land/std@0.50.0/http/server.ts";
import { httpRouter }  from  "./helpers/routers.ts";
import { env }  from  "./helpers/env.ts";
import { render }  from  "../helpers/render.ts";

// run server
listenAndServe({ port: env("PORT",3000).PORT },  httpRouter);

// register router
router.get(req:  ServerRequest,  res:  Response)  {
 // render html template
 render(req, "index.html");
}
```

### Run Javascript & Typescript Files

Buatlah dua buah ***file*** dengan nama ***Example.js*** dan ***Example.ts*** dan tulis kode di bawah ini :

```typescript
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
for await (const req of serve({ port: 8000 })) {
  req.respond({ body: "Hello World\n" });
}
```

Kemudian eksekusi perintah di bawah ini :

```
deno run Example.js
```

Anda akan mendapatkan error sebagai berikut :

```
error: Uncaught PermissionDenied: network access to "0.0.0.0:8000", run again with the --allow-net flag
```

Ini bukti bahwa ***deno*** memiliki mekanisme keamanan yang baik dengan menerapkan konsep ***Access Control*** yang baik, agar kita dapat menggunakannya tambahkan **--allow-net flag** setelah ***sub command*** :

```
deno run --allow-net Example.js
```

Buka browser anda dan kunjungi 127.0.0.1:8000

Untuk mengeksekusi ***typescript file*** :

```
deno run --allow-net Example.ts
```

<p align="right">
    <b><a href="#mastering-deno--postgresql">↥ back to top</a></b>
</p>

## Other Examples :

#### [Deno Simple Framework](https://github.com/nauvalazhar/deno-simple-framework) by Muhamad Nauval Azhar @[nauvalazhar](https://github.com/nauvalazhar)

## Contributor

+ [Arifin Izz](https://github.com/arifinizzah)
+ [Bramaudi](https://github.com/bramaudi)
+ [Restu Wahyu Saputra](https://github.com/restuwahyu13)

Feel free guys to make contribution for the community <3 just pull request.

## Sponsor
<img src="Assets/SponsorPinterCoding.png" width=25%>
<img src="Assets/SponsorMarketkoin.png" width=20%>

<p align="right">
    <b><a href="#mastering-deno--postgresql">↥ back to top</a></b>
</p>
