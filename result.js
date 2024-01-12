// Mengambil nilai dari URL parameter
let urlParams = new URLSearchParams(window.location.search);
let namaValue = urlParams.get('fullname');
let roleValue = urlParams.get('role');
let availabilityValue = urlParams.get('availability');
let usiaValue = urlParams.get('usia');
let lokasiValue = urlParams.get('lokasi');
let pengalamanValue = urlParams.get('pengalaman');
let emailValue = urlParams.get('email');

// Menampilkan nilai pada tabel hasil
document.getElementById("resultNama").innerText = namaValue;
document.getElementById("resultRole").innerText = roleValue;
document.getElementById("resultAvailability").innerText = availabilityValue;
document.getElementById("resultUsia").innerText = usiaValue;
document.getElementById("resultLokasi").innerText = lokasiValue;
document.getElementById("resultPengalaman").innerText = pengalamanValue;
document.getElementById("resultEmail").innerText = emailValue;
