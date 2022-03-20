alert('selamat datang di TravelAja');

const nama = prompt('Haloo.. Siapa nama kamu??....');
const wadah = document.querySelector(".user-name");

if (nama === null) {
    wadah.innerText = "Halo";
}else{
    wadah.innerText = "Halo " + nama;
}