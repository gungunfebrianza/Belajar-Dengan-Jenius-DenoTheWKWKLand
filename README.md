# Mastering-DenoTheWKWKLand

## Table of Contens

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
        1. [Deno Sub Command](#2-deno-sub-command)
        1. [Deno Command Structure](#3-deno-command-structure)
- [Typescript](https://github.com/gungunfebrianza/Mastering-DenoTheWKWKLand/blob/master/Typescript.md)
- [Other Examples](#other-examples-)
- [Contributor](#contributor)

## Lets Destroy Node.js developer.

<img src="Cover.png" width=66%>

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

1. Buka terminal lalu ketik 

    ``` 
    curl -fsSL https://deno.land/x/install/install.sh | sh 
    ```
    
2. Jika sudah selesai maka akan terlihat seperti berikut

    <img width="66%" src="Assets/CurlSetup.jpg">
    
    jalankan command `deno -V`, apabila muncul "__commnad not found: deno__"
    maka lanjut ke step berikutnya

3. Menambahkan path ke bash_profile atau bashrc 

    - ketik `nano .bashrc` atau `nano .zshrc` tergantung dari shell yg kalian gunakan
    
    - copy bagian yang seperti berikut lalu pastekan pada line terakhir `.bashrc` atau `.zshrc`
      
        ```
        export DENO_INSTALL="/home/<username>/.deno"
        export PATH="$DENO_INSTALL/bin:$PATH"
        ```
      ganti bagian `<username>` dengan username kalian
      
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

## Other Examples :

#### [Deno Simple Framework](https://github.com/nauvalazhar/deno-simple-framework) by Muhamad Nauval Azhar @[nauvalazhar](nauvalazhar)

## Contributor

+ [Arifin Izz](https://github.com/arifinizzah)

Feel free guys to make contribution for the community <3 just pull request.
