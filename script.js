// Fungsi untuk menampilkan pesan selamat datang berdasarkan waktu
function greetUser() {
    const greetingElement = document.getElementById('greeting'); // Ambil elemen dengan id "greeting"
    const hours = new Date().getHours(); // Mendapatkan jam saat ini
  
    if (hours >= 5 && hours < 12) {
      greetingElement.textContent = "Selamat Pagi!"; // Greeting untuk pagi
    } else if (hours >= 12 && hours < 15) {
      greetingElement.textContent = "Selamat Siang!"; // Greeting untuk siang
    } else if (hours >= 15 && hours < 18) {
      greetingElement.textContent = "Selamat Sore!"; // Greeting untuk siang
    } else {
      greetingElement.textContent = "Selamat Malam!"; // Greeting untuk malam
    }
  }
  
  // Fungsi untuk menampilkan tanggal update secara dinamis
//function setUpdateDate() {
  //const updateDateElement = document.getElementById('update-date');
  //if (updateDateElement) {
     // const today = new Date();
     // today.setDate(today.getDate() - 1);
     // const options = { year: 'numeric', month: 'long', day: 'numeric' };
     // const formattedDate = today.toLocaleDateString('id-ID', options); // Format tanggal sesuai Indonesia
     // updateDateElement.textContent = `Update Per: ${formattedDate}`;
 // }
//}

// Pastikan fungsi ini dijalankan saat halaman selesai dimuat
window.onload = function() {
  greetUser(); // Fungsi lainnya
  setUpdateDate(); // Perbarui tanggal update
};

// Fungsi untuk toggle navigasi menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-header').querySelector('ul');
    navMenu.classList.toggle('show'); // Menambahkan/menghapus class 'show' untuk menampilkan/menyembunyikan menu
  }
  
  // Panggil fungsi toggleMenu saat tombol hamburger ditekan
  const menuToggle = document.getElementById('menu-toggle');
  menuToggle.addEventListener('click', toggleMenu); // Menambahkan event listener untuk tombol toggle menu

  // Fungsi untuk mengubah tema (Dark Mode)
function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('.main-header');
    const footer = document.querySelector('.footer');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
  
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
      header.classList.add('dark-mode');
      footer.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
      header.classList.remove('dark-mode');
      footer.classList.remove('dark-mode');
    }
  }

  // Fungsi untuk mengubah tema (Dark Mode)
function toggleDarkMode() {
  const body = document.body;
  const header = document.querySelector('.main-header');
  const footer = document.querySelector('.footer');
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    footer.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
  }
}

// Fungsi untuk menghasilkan QR Code
function generateQRCode() {
  const userId = document.getElementById('input-name').value;
  const password = document.getElementById('input-text').value;

  if (userId && password) {
    // QR Code untuk User ID
    QRCode.toDataURL(userId, function (err, url) {
      if (err) {
        console.error(err);
        return;
      }
      document.getElementById('result-user-id').innerHTML = 
        `<h3>User ID</h3><h4>${userId}</h4><img src="${url}" alt="QR Code User ID">`;
    });

    // QR Code untuk Password
    QRCode.toDataURL(password, function (err, url) {
      if (err) {
        console.error(err);
        return;
      }
      document.getElementById('result-password').innerHTML = 
        `<h3>Password</h3><h4>${password}</h4><img src="${url}" alt="QR Code Password">`;
    });
  } else {
    alert('Mohon masukkan User ID dan Password terlebih dahulu!');
  }
}

// JS UNTUK SCURITY

// DOM Elements
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

// Open Sidebar
menuToggle.addEventListener("click", () => {
  sidebar.style.left = "0";
});

// Close Sidebar
closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-250px";
});


function showMore(button) {
  // Cari elemen konten tambahan yang terkait dengan tombol yang diklik
  var moreContent = button.previousElementSibling;
  
  if (moreContent.style.display === "none") {
    moreContent.style.display = "inline";
    button.innerHTML = "Baca Lebih Sedikit";
  } else {
    moreContent.style.display = "none";
    button.innerHTML = "Baca Selengkapnya";
  }
}
