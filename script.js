/* Skrip bersama untuk semua halaman. Biasanya tidak perlu diubah. */
(function () {
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function ada(t) { return t && t !== "#"; }
  function aksi(tautan, label) {
    return ada(tautan)
      ? '<a class="link" href="' + esc(tautan) + '" target="_blank" rel="noopener">' + label + '</a>'
      : '<span class="soon">Segera hadir</span>';
  }
  function kartuMateri(m) {
    return '<div class="card"><span class="tag">Kelas ' + esc(m.kelas) + ' · Bab ' + esc(m.bab) + '</span>' +
      '<b>' + esc(m.judul) + '</b><p>' + esc(m.ringkas) + '</p>' + aksi(m.tautan, "Buka materi →") + '</div>';
  }

  // Tandai menu yang sedang aktif
  var here = location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll("nav a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") === here) links[i].setAttribute("aria-current", "page");
  }

  // Tahun di kaki halaman
  var th = document.getElementById("tahun");
  if (th) th.textContent = new Date().getFullYear();

  // Angka ringkasan di beranda
  var babEl = document.getElementById("stat-bab");
  if (babEl && typeof MATERI !== "undefined") babEl.textContent = MATERI.length;
  var perEl = document.getElementById("stat-perangkat");
  if (perEl && typeof PERANGKAT !== "undefined") {
    var n = PERANGKAT.filter(function (p) { return ada(p.tautan); }).length;
    perEl.textContent = n > 0 ? n : "Segera";
  }

  // Materi terbaru di beranda (maksimal 3)
  var terbaru = document.getElementById("materi-terbaru");
  if (terbaru && typeof MATERI !== "undefined") {
    var tiga = MATERI.slice(-3).reverse();
    terbaru.innerHTML = tiga.length ? tiga.map(kartuMateri).join("") : '<div class="kosong">Materi akan segera ditambahkan.</div>';
  }

  // Halaman Materi dengan penyaring kelas
  var daftar = document.getElementById("daftar-materi");
  if (daftar && typeof MATERI !== "undefined") {
    var tampil = function (kelas) {
      var data = MATERI.filter(function (m) { return kelas === "semua" || String(m.kelas) === kelas; });
      daftar.innerHTML = data.length ? data.map(kartuMateri).join("") : '<div class="kosong">Belum ada materi untuk kelas ini.</div>';
    };
    var tombol = document.querySelectorAll(".filter button");
    for (var j = 0; j < tombol.length; j++) {
      tombol[j].addEventListener("click", function () {
        for (var k = 0; k < tombol.length; k++) tombol[k].classList.remove("aktif");
        this.classList.add("aktif");
        tampil(this.getAttribute("data-kelas"));
      });
    }
    tampil("semua");
  }

  // Halaman Perangkat Ajar, dikelompokkan menurut jenis
  var per = document.getElementById("daftar-perangkat");
  if (per && typeof PERANGKAT !== "undefined") {
    if (!PERANGKAT.length) {
      per.innerHTML = '<div class="kosong">Perangkat ajar akan segera ditambahkan.</div>';
    } else {
      var jenis = [];
      PERANGKAT.forEach(function (p) { if (jenis.indexOf(p.jenis) < 0) jenis.push(p.jenis); });
      per.innerHTML = jenis.map(function (jn) {
        var isi = PERANGKAT.filter(function (p) { return p.jenis === jn; }).map(function (p) {
          return '<div class="card"><b>' + esc(p.nama) + '</b><p>&nbsp;</p>' + aksi(p.tautan, "Unduh / buka →") + '</div>';
        }).join("");
        return '<h3 class="kelompok">' + esc(jn) + '</h3><div class="grid tiga">' + isi + '</div>';
      }).join("");
    }
  }
})();
