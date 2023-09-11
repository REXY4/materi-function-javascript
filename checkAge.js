// kita function javascript
//arrow function
// const checkAgeForWatchMovie1 = (name, dob) => {
//     const dobData = new Date(dob);
//     const yearsNow = new Date(Date.now());
//     const age = parseInt(yearsNow.getFullYear()) - parseInt(dobData.getFullYear());
//     const maxAge = 18;
//     if (age >= maxAge) {
//         //expresion
//         return `${name} sudah berumur ${age}, Boleh Nonton One Piece`
//     } else {
//         return `${name} masih berumur ${age} Belum Boleh Nonton One Piece`
//     }
// }


// const checkAgeForWatchMovie1 = (name, dob, maxAge) => {
//     const dobData = new Date(dob);
//     const yearsNow = new Date(Date.now());
//     const age = parseInt(yearsNow.getFullYear()) - parseInt(dobData.getFullYear());
//     if (age >= maxAge) {
//         return {
//             name: name,
//             access: true,
//             age: age,
//         }
//     } else {
//         return {
//             name: name,
//             access: false,
//             age: age,
//         }
//     }
// }

//algoritma
// urutan dasar yang kita buat untuk membuat sebuah sofware,
//ketika di sutuh membuat validasi untuk check umur kelayakann customer;
// 1. membuat satu fungsi untuk validasi umur customer;
// 2. di dalam funsi saya membuat 3 parameter, yang butuhkan dalah nama, tanggal lahir, batasan umur;
// 3.saya membuat kalkulasi untuk umur customer dengan rumus
// Umur = Tahun Sekarang - Tahun Lahir
// 4.saya membuat perkondisian untuk menentukan nilai batasan umur
// 5. output nya saya ingin membuat di dalamnya sebuah object yang berisi nama, acess, umur,
//     acess buat menentukan boleh atau tidak

const validasiCustomerAge = (nama, dob, maxAge) => {
    const thisYears = new Date(Date.now()).getFullYear();
    const thisDob = new Date(dob).getFullYear();
    const age = parseInt(thisYears) - parseInt(thisDob);
    if (age >= maxAge) {
        return {
            nama: nama,
            age: age,
            access: true
        }
    } else {
        return {
            nama: nama,
            age: age,
            access: false
        }
    }
}

const JadwalSholat = (time) => {
    if (time == 19.30) {
        return {
            message: "Sholat Isya",
            access: true
        }
    } else {
        return {
            message: "",
            access: false
        }
    }
}


module.exports = { validasiCustomerAge, JadwalSholat }


// function checkAfeForWatchMoview2(age) {
//     const maxAge = 18;
//     if (age >= maxAge) {
//         return "Boleh Nonton One Piece"
//     } else {
//         return "Belum Boleh Nonton One Piece"
//     }
// }






