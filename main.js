const { checkUangKembali } = require("./checkUangKembalian");
// const { validasiCustomerAge, JadwalSholat } = require("./checkAge");

// function BeliTiketBioskop(name, dob) {
//     const checkAge = validasiCustomerAge(name, dob, 15);
//     //boleh menggunakan checkAge.access === true or checkAge.access === false
//     // tapi boleh juga menggunakan (checkAge.access) ini nilai nya adalah true
//     // (!checkAge.access) ini nilai nya false
//     const checkSholat = JadwalSholat(19.30);
//     if (checkAge.access) {
//         if (checkSholat.access) {
//             return `Belum bisa beli tiket karena masuk waktu ${checkSholat.message}`
//         }
//         return `Customer dengan nama ${checkAge.nama}, Boleh Membeli Tiket, karena sudah Berumur ${checkAge.age} Tahun`
//     } else {
//         if (checkSholat.access) {
//             return `Belum bisa beli tiket karena masuk waktu ${checkSholat.message}`
//         }
//         return `Customer dengan nama ${checkAge.nama}, Tidak Boleh Membeli Tiket, karena masih berumur ${checkAge.age} Tahun`
//     };
// }


function Pembayaran(name, pay, price) {
    const checkChangeMoney = checkUangKembali(name, pay, price);
    if (checkChangeMoney.status == 0) {
        return `Berikan Uang kembali ke pada ${checkChangeMoney.name} sebesar Rp ${checkChangeMoney.changeMoney.toLocaleString()}`
    } else if (checkChangeMoney.status == 2) {
        return `Pembayaran ${checkChangeMoney.name} berhasil!`
    } else {
        return `Pembayaran ${checkChangeMoney.name} masih kurang sebesar Rp ${Math.abs(checkChangeMoney.changeMoney).toLocaleString()}`
    }
}

console.log(
    Pembayaran("jhoni", 5e6, 35e5)
)
