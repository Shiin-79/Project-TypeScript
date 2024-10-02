# Project-TypeScript

## Prasyarat
Sebelum memulai, pastikan kamu telah menginstal hal-hal berikut di sistem kamu:

- Git
- Node.js (versi terbaru)
- npm
- Opsional: Docker jika menggunakan container

## Clone Repository
Clone repository ini ke dalam direktori lokal kamu menggunakan perintah git:

```bash
git clone https://github.com/Shiin-79/Project-TypeScript.git
```

## Masuk ke Direktori Proyek
Setelah cloning selesai, masuk ke dalam direktori proyek:

```bash
cd Project-TypeScript
```

## Install Dependencies
Install dependencies dengan menggunakan perintah npm:

```bash
npm install
``` 
## Atur Variabel Lingkungan
Di proyek ini memerlukan file .env untuk konfigurasi environment, buat file .env di root directory proyek dan tambahkan variabel lingkungan yang diperlukan seperti contoh di bawah ini:

```bash
DATABASE_URL="mysql://root:PasswordMysql@url:port/namadatabase"
```
ubah variabel lingkungan sesuai kebutuhanmu (PasswordMysql, url:port dan namadatabase)


## Setup Database
Migrate database dengan menggunakan perintah:

```bash
npx prisma migrate dev
```

## Run Server
Mulai server dengan menggunakan perintah yarn start:

```bash
npm start
``` 

## Lisensi
Project ini dilisensikan di bawah [MIT License](./LICENSE).