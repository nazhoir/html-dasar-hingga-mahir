---
sidebar_position: 4
---

# Dokumen HTML

## Struktur Dokumen HTML

Bagian pertama dari bab tentang  HTML Dasar ini kita akan mempelajari mengenai hal apa saja yang wajib ada di dalam struktur dokumen HTML. Yang kemudian dari struktur itu bisa menampilkan tulisan atau perintah yang kita inginkan di browser.

Secara garis besar dokumen HTML dibagi menjadi dua bagian.
1. Bagian Deklarasi dokumen HTML. Bagian ini berfungsi agar browser kita bisa mengidentifikasikan file atau dokumen apa yang akan dijalankan oleh browser. 
2. Bagian yang body / tubuh yang mana dibagian inilah nantinya kita akan menampilakan sesuatu yang kita ingin kan.  

Semua dokumen HTML harus dimulai dengan penulisan deklarasi tipe dokumen. Dokumen HTML diawali dengan penulisan **`<!DOCTYPE html>`**. Kemudian dokumen HTML dilanjutkan dengan menuliskan **`<html>`** setelah **`<!DOCTYPE html>`** dan harus di akhiri dengan penulisan **`</html>`**.

Perlu diketahui tidak semua tulisan yang kamu tuliskan bisa muncul di browser, hanya bagian dari dokumen HTML adalah antara **`<body>`** dan **`</body>`** yang bisa terlihat ditampilan browser.

#### Contoh

```html title=index.html
<!DOCTYPE html>
<html>
<body>

<h1>Ini Judul Pada HTML</h1>
<p>Ini merupakan paragraf</p>

</body>
</html>
```

### Deklarasi <!DOCTYPE>

Deklarasi `<!DOCTYPE>` mewakili jenis dokumen, dan membantu browser untuk menampilkan halaman web dengan benar.

Itu hanya boleh muncul sekali, di bagian atas halaman (sebelum tag HTML apa pun).

Deklarasi `<!DOCTYPE>` tidak peka huruf besar/kecil.

Deklarasi `<!DOCTYPE>` untuk HTML5 adalah:

```html
<!DOCTYPE html>
```


### Judul HTML

Judul HTML didefinisikan dengan tag `<h1>` hingga `<h6>`.

`<h1>` mendefinisikan heading yang paling penting. `<h6>` mendefinisikan heading yang paling tidak penting:

#### Contoh :

```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
```


### Paragraf HTML
Paragraf HTML didefinisikan dengan tag `<p>`:

#### Contoh :

```html
<p>Ini adalah paragraf.</p>
<p>Ini adalah paragraf lain.</p>

```

### Tautan HTML
Tautan HTML didefinisikan dengan tag `<a>`:

#### Contoh:
```html
<a href="https://www.w3schools.com">Ini adalah tautan</a>
```

Tujuan tautan ditentukan dalam atribut href.

Atribut digunakan untuk memberikan informasi tambahan tentang elemen HTML.

Anda akan mempelajari lebih lanjut tentang atribut di bab selanjutnya.


### Gambar HTML
Gambar HTML didefinisikan dengan tag `<img>`.

File sumber (src), teks alternatif (alt), lebar, dan tinggi disediakan sebagai atribut:

#### Contoh :

```html
<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">
```

## Cara Melihat Sumber HTML

Pernahkah Anda melihat halaman Web dan bertanya-tanya "Hei! Bagaimana mereka melakukannya?"

### Lihat Kode Sumber HTML:

Klik kanan di halaman HTML dan pilih "Lihat Sumber Halaman" (di Chrome) atau "Lihat Sumber" (di Edge), atau yang serupa di browser lain. Ini akan membuka jendela yang berisi kode sumber HTML halaman.

### Periksa Elemen HTML:

Klik kanan pada elemen (atau area kosong), dan pilih "Inspect" atau "Inspect Element" untuk melihat elemen apa yang dibuat (Anda akan melihat HTML dan CSS). Anda juga dapat mengedit HTML atau CSS dengan cepat di panel Elemen atau Gaya yang terbuka.