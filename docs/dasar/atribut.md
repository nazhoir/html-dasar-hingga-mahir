---
sidebar_position: 6
---

# Atribut HTML
Atribut HTML memberikan infofmasi tambahan tentang elemen HTML.

## Atribut HTML
Semua elemen HTML dapat memiliki atribut
Atribut memberikan informasi tambahan tentang elemen
Atribut selalu ditentukan di tag awal
Atribut biasanya datang dalam pasangan nama/nilai seperti: nama="nilai"
Atribut href

Tag `<a>` mendefinisikan hyperlink. Atribut href menentukan URL halaman yang dituju tautan:

#### Contoh

```html title=belajar-html/index.html
<a href="https://www.w3schools.com">Kunjungi W3Schools</a>
```

Anda akan mempelajari lebih lanjut tentang tautan di bab Tautan HTML kami.

### Atribut src
Tag `<img>` digunakan untuk menyematkan gambar di halaman HTML. Atribut src menentukan jalur ke gambar yang akan ditampilkan:

#### Contoh

```html
<img src="img_girl.jpg">
```

Ada dua cara untuk menentukan URL di atribut src:

1. URL Absolut - Tautan ke gambar eksternal yang dihosting di situs web lain. Contoh: **`src="https://www.w3schools.com/images/img_girl.jpg"`**.


:::danger Perlu Diperhatikan 
 Gambar eksternal mungkin berada di bawah hak cipta. Jika Anda tidak mendapatkan izin untuk menggunakannya, Anda mungkin melanggar undang-undang hak cipta. Selain itu, Anda tidak dapat mengontrol gambar eksternal; itu bisa tiba-tiba dihapus atau diubah.
:::

2. URL Relatif - Tautan ke gambar yang dihosting di dalam situs web. Di sini, URL tidak menyertakan nama domain. Jika URL dimulai tanpa garis miring, itu akan relatif terhadap halaman saat ini. Contoh: **`src="img_girl.jpg"`**. Jika URL dimulai dengan garis miring, itu akan menjadi relatif terhadap domain. Contoh: **`src="/images/img_girl.jpg"`**.


:::tip
Hampir selalu yang terbaik adalah menggunakan URL relatif. Mereka tidak akan rusak jika Anda mengubah domain.
:::

Atribut lebar dan tinggi
Tag` <img>` juga harus berisi atribut lebar dan tinggi, yang menentukan lebar dan tinggi gambar (dalam piksel):

#### Contoh

```html
<img src="img_girl.jpg" lebar="500" tinggi="600">
```


### Atribut alt
Atribut alt yang diperlukan untuk tag` <img>` menentukan teks alternatif untuk gambar, jika gambar karena alasan tertentu tidak dapat ditampilkan. Hal ini dapat disebabkan oleh koneksi yang lambat, atau kesalahan pada atribut src, atau jika pengguna menggunakan pembaca layar.

#### Contoh

```html
<img src="img_girl.jpg" alt="Gadis berjaket">
```

#### Contoh

Lihat apa yang terjadi jika kami mencoba menampilkan gambar yang tidak ada:

```html
<img src="img_typo.jpg" alt="Gadis berjaket">
```

Anda akan mempelajari lebih lanjut tentang gambar di bab Gambar HTML kami.


### Atribut gaya

Atribut gaya digunakan untuk menambahkan gaya ke elemen, seperti warna, font, ukuran, dan lainnya.
#### Contoh

```html
<p style="color:red;">Ini adalah paragraf merah.</p>
```

Anda akan mempelajari lebih lanjut tentang gaya di bab Gaya HTML kami.

### Atribut lang (bahasa)


Anda harus selalu menyertakan atribut lang di dalam tag `<html>`, untuk mendeklarasikan bahasa halaman Web. Ini dimaksudkan untuk membantu mesin pencari dan browser.

Contoh berikut menentukan bahasa Inggris sebagai bahasa:


```html
<!DOCTYPE html>
<html lang="id">
<body>
...
</body>
</html>

```


Kode negara juga dapat ditambahkan ke kode bahasa di atribut lang. Jadi, dua karakter pertama menentukan bahasa halaman HTML, dan dua karakter terakhir menentukan negara.

Contoh berikut menentukan bahasa Inggris sebagai bahasa dan Amerika Serikat sebagai negara:

```html
<!DOCTYPE html>
<html lang="id-ID">
<body>
...
</body>
</html>
```

Anda dapat melihat semua kode bahasa di Referensi Kode Bahasa HTML kami.

### Judul Atribut

Atribut title mendefinisikan beberapa informasi tambahan tentang suatu elemen.

Nilai atribut title akan ditampilkan sebagai tooltip saat Anda mengarahkan mouse ke elemen:

#### Contoh
```html
<p title="I'm a tooltip">Ini adalah paragraf.</p>
```

## Kami Sarankan: Selalu Gunakan Atribut Huruf Kecil

Standar HTML tidak memerlukan nama atribut huruf kecil.

Atribut title (dan semua atribut lainnya) dapat ditulis dengan huruf besar atau kecil seperti **`title`** atau **`TITLE`**.

Namun, W3C merekomendasikan atribut huruf kecil dalam HTML, dan menuntut atribut huruf kecil untuk jenis dokumen yang lebih ketat seperti XHTML.

Di W3Schools kami selalu menggunakan nama atribut huruf kecil.

## Kami Sarankan: Selalu Kutip Nilai Atribut

Standar HTML tidak memerlukan tanda kutip di sekitar nilai atribut.

Namun, W3C merekomendasikan kutipan dalam HTML, dan meminta kutipan untuk jenis dokumen yang lebih ketat seperti XHTML.

#### Bagus:

```html
<a href="https://www.w3schools.com/html/">Kunjungi tutorial HTML kami</a>
```

#### Buruk:

```html
<a href=https://www.w3schools.com/html/ >Kunjungi tutorial HTML kami</a>
```

Terkadang Anda harus menggunakan tanda kutip. Contoh ini tidak akan menampilkan atribut judul dengan benar, karena berisi spasi:

#### Contoh
```html
<p title=Tentang W3Schools>
```


 Di W3Schools kami selalu menggunakan tanda kutip di sekitar nilai atribut.

## Kutipan Tunggal atau Ganda?

Tanda kutip ganda di sekitar nilai atribut adalah yang paling umum dalam HTML, tetapi tanda kutip tunggal juga dapat digunakan.

Dalam beberapa situasi, ketika nilai atribut itu sendiri berisi tanda kutip ganda, perlu menggunakan tanda kutip tunggal:
```html
<p title='John "ShotGun" Nelson'>
```

Atau sebaliknya:

```html
<p title="John 'ShotGun' Nelson">
```