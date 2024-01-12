document.getElementById("button-click").addEventListener("click", function () {
    // Mengambil detail nilai dari formulir setelah tombol submit di pencet
    let namaValue = document.getElementById("fullname").value;
    let roleValue = document.getElementById("role").value;
    let availabilityValue = document.getElementsByName("availability")[0].value;
    let usiaValue = document.getElementById("usia").value;
    let lokasiValue = document.getElementById("lokasi").value;
    let pengalamanValue = document.getElementById("pengalaman").value;
    let emailValue = document.getElementById("email").value;

    // Menetapkan detail nilai formulir ke elemen tabel di halaman utama
    document.getElementById("availabilityValue").innerText = availabilityValue;
    document.getElementById("usiaValue").innerText = usiaValue;
    document.getElementById("lokasiValue").innerText = lokasiValue;
    document.getElementById("pengalamanValue").innerText = pengalamanValue;
    document.getElementById("emailValue").innerText = emailValue;

    // Mengirim nilai formulir ke halaman result.html
    document.getElementById("myForm").submit();
});
