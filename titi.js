console.log("========================================");
console.log("Menghitung Jarak dan waktu tempuh");
console.log("========================================");
var JalurA = [[8,12],[4,7],[6,6]];
var JalurB = [[7,10],[3,9],[8,5]];

var JarakJalurA = JalurA[0][0] + JalurA[1][0] + JalurA[2][0];
var JarakTempuhA = JalurA[0][1] + JalurA[1][1] + JalurA[2][1];
var JarakJalurB = JalurB[0][0] + JalurB[1][0] + JalurB[2][0];
var JarakTempuhB = JalurB[0][1] + JalurB[1][1] + JalurB[2][1];

if (JarakJalurA>JarakJalurB){
    console.log("Jarak jalur Terpanjang adalah Jalur A dengan panjang"+JarakJalurA"km" );
    console.log("Jarak jalur Terpendek adalah Jalur B dengan panjang"+JarakJalurB"km" );
}else {
    console.log("Jarak jalur Terpanjang adalah Jalur B dengan panjang"+JarakJalurB"km" );
    console.log("Jarak jalur Terpendek adalah Jalur A dengan panjang"+JarakJalurA"km" );
}
if (JarakTempuhA<JarakTempuhB){
    console.log("Waktu tempuh terpanjang adalah Jalur A dengan waktu tempuh "+JarakTempuhA"menit" );
    console.log("Waktu tempuh terpendek adalah Jalur B dengan waktu tempuh"+JarakTempuhB"menit" );
}else {
    console.log("Waktu tempuh terpanjang adalah Jalur B dengan waktu tempuh "+JarakTempuhB"menit" );
    console.log("Waktu tempuh terpendek adalah Jalur A dengan waktu tempuh "+JarakTempuhA"menit );
}
console.log("Created By Tata Oky Candra - 20190801360");

