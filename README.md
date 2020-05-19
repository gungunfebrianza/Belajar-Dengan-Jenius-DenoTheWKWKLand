# Belajar Dengan Jenius Deno
<img src="Cover.png" width=66%>

## Table of Contents
- [Lets Destroy Node.js developer](#lets-destroy-nodejs-developer)
- Chapter 1
    - Belajar Open Web Platform
    - Subchapter 1 - Apa itu Open Web Platform
        - 1\. Technical Specification
        - 2\. HTML 5.2
            - Semantic Advantage
            - Connectivity Advantage
            - Storage Advantage
            - Multimedia Advantage
            - Performance Advantage
            - Device Access Advantage
            - Specification
        - 3\. Web Assembly
            - Safe
            - Fast
            - Portable Code
            - Compact Code
            - Specification
        - 4\. EcmaScript
            - Specification
        - 5\. Web Socket
            - Specification
            - Application
        - 6\. WebRTC
            - Specification
            - Application
        - 7\. WebGL
            - Specification
            - Application
    - Subchapter 2 - Apa itu Web Application?
        - 1\. Server
            - File Server
            - Mail Server
            - Proxy Server
            - Application Server
            - Database Server
            - Messaging Server
        - 2\. Virtual Private Server
            - Virtualization
            - Virtual Machine
            - Hypervisor
        - 3\. Web Server
        - 4\. Web Page
            - Static Web Page
            - Dynamic Web Page
            - Progressive Web Application (PWA)
            - Single Page Application (SPA)
        - 5\. Network
            - Local Area Network (LAN)
            - World Area Network (WAN)
            - Internet Service Provide (ISP)
        - 6\. Internet
            - Internet Transit
            - Satellite & Fiber Optic
        - 7\. Internet Exchange Point
        - 8\. Content Delivery Network (CDN)
        - 9\. Cloud Computing
            - Cloud Computing Execution Model
            - Cloud Service Provider
            - Scalability
            - Load Balancer
        - 10\. Serverless Computing
            - FaaS Provider
            - AWS Lambda
    - Subchapter 3 - Bedah Konsep HTTP
        - 1\. HTTP & URL
            - HTTP
            - Hypertext & Hyperlink
            - Hypermedia
            - World Wide Web (www)
            - Uniform Resources Identifier (URI)
            - URL / Web Resources
        - 2\. HTTP & DNS
            - IP Address
            - DNS Resolver
            - Root Server & TLD Server
        - 3\. HTTP Transaction
            - TCP Three-way Handshake
        - 4\. HTTP Request
            - HTTP Method
            - Message
            - HTTP Header
            - Header Attribute
            - MIME
        - 5\. HTTP Response
        - 6\. HTTP Status Message
    - Subchapter 4 - Web Security
        - 1\. Data in The Low Level
            - Host
            - Socket
            - Bit
            - Byte
            - Bytes
            - Character
            - ASCII
            - Data Transmission
            - Base64 Encoding
        - 2\. Cryptography
            - Cryptoanalys
            - Information Security
            - Ciphertext
            - Symmetric Cryptography
            - Hash Function
            - Message Authentication Codes (MAC)
            - Assymetric Cryptography
            - Cryptography Protocol
        - 3\. Man In The Middle (MITM) Attack
            - Eavesdropping
        - 4\. HTTPS
            - Perbedaan HTTP & HTTPS
            - Manfaat HTTPS
        - 5\. Secure Socket Layer (SSL)
            - Transport Socket Layer (TLS)
            - SSL Handshake
- Chapter 2
    - Setup Learning Environment
    - Subchapter 1 - Visual Studio Code
        - 1\. Install Programming Language Support
        - 2\. Install Keybinding
        - 3\. Install & Change Theme Editor
        - 4\. The File Explorer
        - 5\. Search Feature
        - 6\. Source Control
        - 7\. Debugger
        - 8\. Extension
            - Deno
            - Auto Fold
            - Better Comment
            - Bookmarks
            - Javascript (ES6) Code Snippets
            - Path Intellisense
            - VSCode Great Icons
        - 9\. The Terminal
            - Menambah Terminal Baru
            - Melakukan Split Terminal
            - Mengubah Posisi Terminal
            - Menghapus Terminal
        - 10\. Performance Optimization
        - 11\. Zen Mode
        - 12\. Display Multiple File
        - 13\. Font Ligature
    - Subchapter 2 - Web Browser
        - 1\. Web Browser
        - 2\. Web Console
            - Autocomplete
            - Syntax Highlighting
            - Execution History
        - 3\. Multiline Code Editor
        
- Chapter 3
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
        1. [Run Javascript & Typescript Files](#run-javascript--typescript-files)
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

#### [Denovel](https://github.com/fauzan121002/denovel/) - A Deno Framework for Web Artisan By Muhammad Fauzan @[fauzan121002](https://github.com/fauzan121002)
#### [Deno Simple Framework](https://github.com/nauvalazhar/deno-simple-framework) Simple Deno Framework for Beginner by Muhamad Nauval Azhar @[nauvalazhar](https://github.com/nauvalazhar)

## Contributor

+ [Arifin Izz](https://github.com/arifinizzah)
+ [Bramaudi](https://github.com/bramaudi)

Feel free guys to make contribution for the community <3 just pull request.

## Sponsor
<img src="Assets/SponsorPinterCoding.png" width=25%>
<img src="Assets/SponsorMarketkoin.png" width=20%>

<p align="right">
    <b><a href="#mastering-deno--postgresql">↥ back to top</a></b>
</p>
