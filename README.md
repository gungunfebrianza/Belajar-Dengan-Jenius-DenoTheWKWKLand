# Mastering-DenoTheWKWKLand
Lets Destroy Node.js developer.

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

#### 2. *Install Deno Via Package Manager*

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

<img src="assets/Deno.JPG">

### Install Deno For Linux

#### 1. Install Deno via curl

- Buka terminal lalu ketik 

    ``` curl -fsSL https://deno.land/x/install/install.sh | sh ```
    
- Jika sudah selesai maka akan terlihat seperti berikut

    <img src="Assets/CurlSetup.jpg">
    
    jalankan command `deno --help`, apabila muncul "__commnad not found: deno__"
    maka lanjut ke step berikutnya

- Menambahkan path ke `.bash_profile` / `.bashrc` 

    - ketik `nano .bashrc` atau `nano .zshrc` tergantung dari shell yg kalian gunakan
    
    - copy bagian yang seperti berikut lalu pastekan pada line terakhir `.bashrc` atau `.zshrc`
      
        ```
        export DENO_INSTALL="/home/<username>/.deno"
        export PATH="$DENO_INSTALL/bin:$PATH"
        ```
      
    - Save, lalu restart terminal dan jalankan `deno --help`
    
#### 2. Install Deno via package manager

### Install Deno For MacOS
