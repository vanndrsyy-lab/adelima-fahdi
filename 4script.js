// jadi ini adalah komen, jadi bebas aja

// 1. variabel dengan let
let nama = "aell";

// tampilkan data 
console.log(nama);

// kita ubah nilai variabel nama
nama = "elll";
console.log(nama);

// 2. variabel dengan var
var namaDepan = "AELLLL";
console.log(namaDepan);
namaDepan = "ELLL";
console.log(namaDepan);

// kelakukan dari let
let namaBelakang = "EZEERRRRR";
{
	let namaBelakang = "EZEERRRRR";
	console.log(namaBelakang);
}
console.log(namaBelakang);

// kelakukan dari var
var namaTengah = "Keren";
{
	var namaTengah = "CANTIK";
	console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus tanpa keyword akan jadi var
gorengan = "Bala-bala";
{
	gorengan = "Combro";
}
console.log(gorengan);

// 3. const

const TTL = "17 Februari 2008";
console.log(TTL);
// TTL = "11 Maret 2054"; gak boleh dilakukan karena sudah janji konstan