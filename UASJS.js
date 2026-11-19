
/* =========================================
   ANEMIA-FREE!
   JAVASCRIPT
========================================= */


/* =========================================
   MENU NAVIGASI
========================================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function() {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


/* MENUTUP MENU SETELAH DIKLIK */

document.querySelectorAll(".nav-menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


/* =========================================
   DAFTAR ISI
========================================= */

const toggleContents =
    document.getElementById("toggleContents");

const contentsList =
    document.getElementById("contentsList");


toggleContents.addEventListener("click", function() {

    const hidden =
        contentsList.style.display === "none";

    contentsList.style.display =
        hidden ? "grid" : "none";

    toggleContents.innerHTML = hidden
        ? 'Sembunyikan <i class="fa-solid fa-chevron-up"></i>'
        : 'Tampilkan <i class="fa-solid fa-chevron-down"></i>';

});


/* =========================================
   FORMULIR KONSULTASI
========================================= */

const consultationForm =
    document.getElementById("consultationForm");

const formMessage =
    document.getElementById("formMessage");


consultationForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // MENGAMBIL NILAI INPUT

    const nama =
        document.getElementById("nama").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const telepon =
        document.getElementById("telepon").value.trim();

    const topik =
        document.getElementById("topik").value;

    const pesan =
        document.getElementById("pesan").value.trim();


    // POLA VALIDASI

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern =
        /^[0-9+\-\s]{8,16}$/;


    // VALIDASI KOLOM KOSONG

    if (!nama || !email || !telepon || !topik || !pesan) {

        showMessage(
            "Semua kolom wajib diisi!",
            "error"
        );

        return;

    }


    // VALIDASI NAMA

    if (nama.length < 3) {

        showMessage(
            "Nama minimal terdiri dari 3 karakter!",
            "error"
        );

        return;

    }


    // VALIDASI EMAIL

    if (!emailPattern.test(email)) {

        showMessage(
            "Format email tidak valid!",
            "error"
        );

        return;

    }


    // VALIDASI NOMOR TELEPON

    if (!phonePattern.test(telepon)) {

        showMessage(
            "Nomor telepon harus berisi 8-16 karakter angka atau tanda + dan -!",
            "error"
        );

        return;

    }


    // VALIDASI PESAN

    if (pesan.length < 5) {

        showMessage(
            "Pesan terlalu singkat. Silakan tuliskan pertanyaan dengan jelas!",
            "error"
        );

        return;

    }


    // JIKA SEMUA VALID

    showMessage(
        "Terima kasih, " + nama +
        "! Formulir berhasil divalidasi. Pengiriman pesan belum terhubung ke server.",
        "success"
    );


    // MENGOSONGKAN FORMULIR

    consultationForm.reset();

});


/* FUNGSI MENAMPILKAN PESAN */

function showMessage(message, type) {

    formMessage.textContent = message;

    formMessage.className =
        "form-message " + type;

}


/* =========================================
   TOMBOL KEMBALI KE ATAS
========================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function() {

    backToTop.style.display =
        window.scrollY > 350 ? "block" : "none";

});


backToTop.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
