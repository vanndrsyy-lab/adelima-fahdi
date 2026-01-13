let dataString = "data string";
console.log(dataString);

// 1. escaping string (\' \" \\ \n \r \t \b \f)
let data1 = 'hafidz\tberkata sayaaangggggggg"';
console.log(data1);
let data2 = "ell berkata \"woeee no no sayang sayang\"";
console.log(data2);
let data3 = "el dan hafidz berjalan-jalan di tepi pantai, \nkereeen";
console.log(data3);

// 2. literal string (template literal string)
let namaDepan = "ell";
let namaBelakang = "ezeerrrr";
let umur = 10;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang; // menjadi masyalah
console.log(namaLengkap);

// lebih elehan supaya ini tidak bikin error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);