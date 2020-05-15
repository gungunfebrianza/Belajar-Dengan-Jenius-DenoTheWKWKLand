# Mastering-DenoTheWKWKLand
Lets Destroy Node.js developer.

## Installation

### Install Deno For Windows

#### Install Chocolatey

Jalankan **Powershell** (**run as administrator**), kemudian eksekusi perintah di bawah ini :

<img src="Assets/PoweshellSetup.JPG" width=75%>

Setelah itu eksekusi perintah powershell di bawah ini :

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Proses instalasi sedang di lakukan, kita akan memiliki **directory Chocolatey Package Repository** di :

```
**C:\ProgramData\chocolatey\lib**
```

Membuat **directory di Chocolatey Binary** di :

```
**C:\ProgramData\chocolatey\bin**
```

Pastikan chocholatey sudah terpasang dengan cara mengeksekusi perintah di bawah ini dalam cmd.exe :

```
choco
Chocolatey v0.10.15
```



### Install Deno For Linux



### Install Deno For MacOS