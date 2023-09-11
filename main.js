const { validasiCustomerAge, JadwalSholat } = require("./checkAge");

function BeliTiketBioskop(name, dob) {
    const checkAge = validasiCustomerAge(name, dob, 15);
    //boleh menggunakan checkAge.access === true or checkAge.access === false
    // tapi boleh juga menggunakan (checkAge.access) ini nilai nya adalah true
    // (!checkAge.access) ini nilai nya false
    const checkSholat = JadwalSholat(19.30);
    if (checkAge.access) {
        if (checkSholat.access) {
            return `Belum bisa beli tiket karena masuk waktu ${checkSholat.message}`
        }
        return `Customer dengan nama ${checkAge.nama}, Boleh Membeli Tiket, karena sudah Berumur ${checkAge.age} Tahun`
    } else {
        if (checkSholat.access) {
            return `Belum bisa beli tiket karena masuk waktu ${checkSholat.message}`
        }
        return `Customer dengan nama ${checkAge.nama}, Tidak Boleh Membeli Tiket, karena masih berumur ${checkAge.age} Tahun`
    };
}

console.log(
    BeliTiketBioskop("jhon", "2010-04-05")
)
