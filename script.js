/* Skrip bersama untuk semua halaman. Biasanya tidak perlu diubah. */
(function () {
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function ada(t) { return t && t !== "#"; }
  function luar(t) { return /^https?:/i.test(t); }
  function atributTautan(t) {
    return 'href="' + esc(t) + '"' + (luar(t) ? ' target="_blank" rel="noopener"' : '');
  }

  /* ---------- Jam dan tanggal (WIB) ---------- */
  function perbaruiJam() {
    var now = new Date();
    var jamEl = document.getElementById("jam");
    var tglEl = document.getElementById("tanggal");
    var sapaEl = document.getElementById("sapaan");
    if (!jamEl && !tglEl && !sapaEl) return;
    try {
      var jam = new Intl.DateTimeFormat("id-ID", {
        timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23"
      }).format(now).replace(/\./g, ":");
      var tgl = new Intl.DateTimeFormat("id-ID", {
        timeZone: "Asia/Jakarta", weekday: "long", day: "numeric", month: "long", year: "numeric"
      }).format(now);
      var h = parseInt(new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta", hour: "numeric", hourCycle: "h23"
      }).format(now), 10);
      var sapa = h < 4 ? "Selamat malam" : h < 11 ? "Selamat pagi" : h < 15 ? "Selamat siang" : h < 18 ? "Selamat sore" : "Selamat malam";
      if (jamEl) jamEl.textContent = jam + " WIB";
      if (tglEl) tglEl.textContent = tgl;
      if (sapaEl) sapaEl.textContent = sapa;
    } catch (e) {
      if (jamEl) jamEl.textContent = now.toLocaleTimeString("id-ID");
      if (tglEl) tglEl.textContent = now.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    }
  }
  perbaruiJam();
  window.setInterval(perbaruiJam, 1000);

  /* ---------- Menu aktif ---------- */
  var here = location.pathname.split("/").pop() || "index.html";
  if (here.indexOf("bab-") === 0) here = "materi.html";
  if (document.body && document.body.getAttribute("data-menu")) here = document.body.getAttribute("data-menu");
  var links = document.querySelectorAll("nav a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") === here) links[i].setAttribute("aria-current", "page");
  }

  /* ---------- Tahun di kaki halaman ---------- */
  var th = document.getElementById("tahun");
  if (th) th.textContent = new Date().getFullYear();

  /* ---------- Daftar bab ---------- */
  function barisBab(m, tampilKelas) {
    var meta = (tampilKelas ? "Kelas " + esc(m.kelas) + " · " : "") + "Bab " + esc(m.bab);
    var aksi = ada(m.tautan)
      ? '<a class="btn kecil gelap" ' + atributTautan(m.tautan) + '>Buka materi</a>' +
        (m.pdf ? '<a class="btn kecil garis-gelap" href="' + esc(m.pdf) + '" download>Unduh PDF</a>' : "")
      : '<span class="label-segera">Segera</span>';
    return '<div class="bab ' + (ada(m.tautan) ? "ada" : "segera") + '">' +
      '<span class="no" aria-hidden="true">' + esc(m.bab) + '</span>' +
      '<div class="isi"><span class="meta">' + meta + '</span><b>' + esc(m.judul) + '</b><span>' + esc(m.ringkas) + '</span></div>' +
      '<div class="aksi">' + aksi + '</div></div>';
  }
  function urut(a, b) { return a.kelas - b.kelas || a.bab - b.bab; }

  if (typeof MATERI !== "undefined") {
    // Kartu "Materi terbaru" di hero beranda
    var kt = document.getElementById("kartu-terbaru");
    if (kt && MATERI.length) {
      var baru = MATERI[MATERI.length - 1];
      var m1 = document.getElementById("kt-meta");
      var m2 = document.getElementById("kt-judul");
      var m3 = document.getElementById("kt-ringkas");
      var m4 = document.getElementById("kt-tombol");
      if (m1) m1.textContent = "Materi terbaru · Kelas " + baru.kelas + " · Bab " + baru.bab;
      if (m2) m2.textContent = baru.judul;
      if (m3) m3.textContent = baru.ringkas;
      if (m4 && ada(baru.tautan)) m4.setAttribute("href", baru.tautan);
    }

    // Daftar bab Kelas 7 di beranda
    var beranda = document.getElementById("daftar-bab-beranda");
    if (beranda) {
      var k7 = MATERI.filter(function (m) { return String(m.kelas) === "7"; }).sort(urut);
      var html = k7.map(function (m) { return barisBab(m, false); }).join("");
      html += '<div class="bab segera"><span class="no" aria-hidden="true">+</span>' +
        '<div class="isi"><b>Bab berikutnya sedang disiapkan</b><span>Materi baru akan ditambahkan di sini.</span></div>' +
        '<div class="aksi"><span class="label-segera">Segera</span></div></div>';
      beranda.innerHTML = html;
    }

    // Halaman Materi dengan penyaring kelas
    var daftar = document.getElementById("daftar-materi");
    if (daftar) {
      var tampil = function (kelas) {
        var data = MATERI.filter(function (m) { return kelas === "semua" || String(m.kelas) === kelas; }).sort(urut);
        daftar.innerHTML = data.length
          ? data.map(function (m) { return barisBab(m, true); }).join("")
          : '<div class="kosong">Belum ada materi untuk kelas ini.</div>';
      };
      var tombol = document.querySelectorAll(".filter button");
      for (var j = 0; j < tombol.length; j++) {
        tombol[j].addEventListener("click", function () {
          for (var k = 0; k < tombol.length; k++) {
            tombol[k].classList.remove("aktif");
            tombol[k].setAttribute("aria-pressed", "false");
          }
          this.classList.add("aktif");
          this.setAttribute("aria-pressed", "true");
          tampil(this.getAttribute("data-kelas"));
        });
      }
      tampil("semua");
    }
  }

  /* ---------- Halaman Perangkat Ajar (kartu + pencarian) ---------- */
  var per = document.getElementById("daftar-perangkat");
  if (per && typeof PERANGKAT !== "undefined") {
    if (!PERANGKAT.length) {
      per.innerHTML = '<div class="kosong">Perangkat ajar akan segera ditambahkan.</div>';
    } else {
      var jenis = [];
      PERANGKAT.forEach(function (p) { if (jenis.indexOf(p.jenis) < 0) jenis.push(p.jenis); });
      per.innerHTML = jenis.map(function (jn) {
        var isi = PERANGKAT.filter(function (p) { return p.jenis === jn; }).map(function (p) {
          var aksi = ada(p.tautan)
            ? '<a class="btn kecil gelap" href="' + esc(p.tautan) + '">Lihat perangkat</a>'
            : '<span class="label-segera">Segera hadir</span>';
          return '<div class="kartu" data-cari="' + esc((p.nama + " " + p.jenis + " " + (p.ringkas || "")).toLowerCase()) + '"><b>' + esc(p.nama) + '</b>' + (p.ringkas ? '<p>' + esc(p.ringkas) + '</p>' : '') + '<div class="aksi">' + aksi + '</div></div>';
        }).join("");
        return '<section class="kelompok-perangkat"><h2 class="kelompok">' + esc(jn) + '</h2><div class="grid">' + isi + '</div></section>';
      }).join("") + '<div class="kosong" id="cari-kosong" hidden>Tidak ada perangkat yang cocok. Coba kata lain, misalnya "LKPD" atau "Bab 3".</div>';
      var cari = document.getElementById("cari-perangkat");
      if (cari) {
        cari.addEventListener("input", function () {
          var q = cari.value.trim().toLowerCase(), total = 0;
          Array.prototype.forEach.call(per.querySelectorAll(".kelompok-perangkat"), function (sec) {
            var tampak = 0;
            Array.prototype.forEach.call(sec.querySelectorAll(".kartu"), function (k) {
              var cocok = !q || k.getAttribute("data-cari").indexOf(q) >= 0;
              k.hidden = !cocok; if (cocok) tampak++;
            });
            sec.hidden = tampak === 0; total += tampak;
          });
          var kos = document.getElementById("cari-kosong"); if (kos) kos.hidden = total !== 0;
        });
      }
    }
  }

  /* ---------- Bagian Terbaru di beranda ---------- */
  var terbaru = document.getElementById("daftar-terbaru");
  if (terbaru) {
    var semua = [];
    function ambil(arr, jenis, label, n, peta) {
      (arr || []).slice().sort(function (x, y) { return String(y.tanggal || "").localeCompare(String(x.tanggal || "")); })
        .slice(0, n).forEach(function (x) { semua.push(peta(x, jenis, label)); });
    }
    ambil(typeof MATERI !== "undefined" ? MATERI : [], "materi", "Materi", 3, function (x, j, l) {
      return { j: j, label: l + " · Kelas " + x.kelas + " · Bab " + x.bab, judul: x.judul, ringkas: x.ringkas, tanggal: x.tanggal || "", tautan: x.tautan };
    });
    ambil(typeof PERANGKAT !== "undefined" ? PERANGKAT : [], "perangkat", "Perangkat", 3, function (x, j, l) {
      return { j: j, label: l + " · " + x.jenis, judul: x.nama, ringkas: x.ringkas, tanggal: x.tanggal || "", tautan: x.tautan };
    });
    ambil(typeof BERITA !== "undefined" ? BERITA : [], "berita", "", 4, function (x, j) {
      return { j: j, label: x.jenis || "Berita", judul: x.judul, ringkas: x.ringkas, tanggal: x.tanggal || "", tautan: x.tautan };
    });
    var BLN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    function fmtTgl(t) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(t); return m ? parseInt(m[3], 10) + " " + BLN[parseInt(m[2], 10) - 1] + " " + m[1] : ""; }
    function gambar(filter) {
      var daftar = semua.filter(function (x) { return filter === "semua" || x.j === filter; })
        .sort(function (x, y) { return y.tanggal.localeCompare(x.tanggal); }).slice(0, 6);
      terbaru.innerHTML = daftar.length ? daftar.map(function (x) {
        var buka = ada(x.tautan) ? '<a class="link-bawah" ' + atributTautan(x.tautan) + '>Baca selengkapnya</a>' : '<span class="label-segera">Segera</span>';
        return '<article class="kabar kabar-' + x.j + '"><div class="kabar-meta"><span class="kabar-label">' + esc(x.label) + '</span><time>' + esc(fmtTgl(x.tanggal)) + '</time></div><h3>' + esc(x.judul) + '</h3><p>' + esc(x.ringkas || "") + '</p>' + buka + '</article>';
      }).join("") : '<div class="kosong">Belum ada yang terbaru di kategori ini.</div>';
      tandaiMuncul();
    }
    var tab = document.querySelectorAll("[data-tab-terbaru]");
    Array.prototype.forEach.call(tab, function (t) {
      t.addEventListener("click", function () {
        Array.prototype.forEach.call(tab, function (o) { o.setAttribute("aria-pressed", "false"); o.classList.remove("aktif"); });
        t.setAttribute("aria-pressed", "true"); t.classList.add("aktif"); gambar(t.getAttribute("data-tab-terbaru"));
      });
    });
    window.setTimeout(function () { gambar("semua"); }, 0);
  }

  /* ---------- Daftar isi halaman bab: tertutup di layar kecil ---------- */
  var samping = document.querySelector("details.samping");
  if (samping && window.matchMedia && window.matchMedia("(max-width: 899px)").matches) {
    samping.removeAttribute("open");
  }

  /* ---------- Latihan soal pilihan ganda ---------- */
  var kuisList = document.querySelectorAll("[data-kuis]");
  Array.prototype.forEach.call(kuisList, function (kuis) {
    var soal = kuis.querySelectorAll(".soal");
    var skorTeks = kuis.querySelector(".skor-teks");
    var ulang = kuis.querySelector(".ulang");
    function hitung() {
      var terjawab = 0, benar = 0;
      Array.prototype.forEach.call(soal, function (s) {
        var j = s.getAttribute("data-jawab");
        if (j) { terjawab++; if (j === s.getAttribute("data-kunci")) benar++; }
      });
      if (!skorTeks) return;
      skorTeks.textContent = terjawab === 0 ? "Skor akan muncul setelah kamu menjawab."
        : terjawab < soal.length ? "Terjawab " + terjawab + " dari " + soal.length + " soal."
        : "Skor kamu: " + benar + " dari " + soal.length + ".";
    }
    kuis.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("button[data-pilih]") : null;
      if (!b) return;
      var s = b.closest(".soal");
      if (!s || s.getAttribute("data-jawab")) return;
      var pilih = b.getAttribute("data-pilih");
      var kunci = s.getAttribute("data-kunci");
      s.setAttribute("data-jawab", pilih);
      Array.prototype.forEach.call(s.querySelectorAll("button[data-pilih]"), function (t) {
        var k = t.getAttribute("data-pilih");
        var ket = t.querySelector(".ket");
        if (k === kunci) {
          t.classList.add("benar");
          if (ket) ket.textContent = pilih === kunci ? "Jawaban benar" : "Kunci jawaban";
        } else if (k === pilih) {
          t.classList.add("salah");
          if (ket) ket.textContent = "Belum tepat";
        }
      });
      hitung();
    });
    if (ulang) {
      ulang.addEventListener("click", function () {
        Array.prototype.forEach.call(soal, function (s) {
          s.removeAttribute("data-jawab");
          Array.prototype.forEach.call(s.querySelectorAll("button[data-pilih]"), function (t) {
            t.classList.remove("benar", "salah");
            var ket = t.querySelector(".ket");
            if (ket) ket.textContent = "";
          });
        });
        hitung();
      });
    }
    hitung();
  });

  /* ---------- Kolom diskusi (Giscus) ---------- */
  var wadah = document.getElementById("giscus-wadah");
  if (wadah && typeof GISCUS !== "undefined" && GISCUS.repoId && GISCUS.kategoriId) {
    var s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.async = true;
    s.crossOrigin = "anonymous";
    s.setAttribute("data-repo", GISCUS.repo);
    s.setAttribute("data-repo-id", GISCUS.repoId);
    s.setAttribute("data-category", GISCUS.kategori);
    s.setAttribute("data-category-id", GISCUS.kategoriId);
    s.setAttribute("data-mapping", "pathname");
    s.setAttribute("data-strict", "0");
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "top");
    s.setAttribute("data-theme", "light");
    s.setAttribute("data-lang", "id");
    s.setAttribute("data-loading", "lazy");
    wadah.appendChild(s);
    var info = document.getElementById("diskusi-belum-aktif");
    if (info) info.style.display = "none";
  }
  /* ---------- Interaksi: muncul saat digulir, progres baca, tombol ke atas ---------- */
  var kurangGerak = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pengamat = null;
  function tandaiMuncul() {
    var el = document.querySelectorAll(".kartu, .kabar, .bab, .jalur, .kisah, .tentang, .berkas, .unduh, .diskusi, .kuis-kartu");
    Array.prototype.forEach.call(el, function (e) {
      if (e.getAttribute("data-m")) return;
      e.setAttribute("data-m", "1");
      if (kurangGerak || !("IntersectionObserver" in window)) return;
      e.classList.add("siap-muncul");
      if (!pengamat) {
        pengamat = new IntersectionObserver(function (items) {
          items.forEach(function (it) { if (it.isIntersecting) { it.target.classList.add("tampak"); pengamat.unobserve(it.target); } });
        }, { threshold: 0.08 });
      }
      pengamat.observe(e);
    });
  }
  tandaiMuncul();

  var artikel = document.querySelector(".artikel");
  var bar = null;
  if (artikel) {
    bar = document.createElement("div"); bar.className = "progres-baca"; bar.setAttribute("aria-hidden", "true");
    bar.innerHTML = "<span></span>"; document.body.appendChild(bar);
  }
  var atas = document.createElement("button");
  atas.type = "button"; atas.className = "ke-atas"; atas.setAttribute("aria-label", "Kembali ke atas"); atas.innerHTML = "&#8593;";
  document.body.appendChild(atas);
  atas.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: kurangGerak ? "auto" : "smooth" }); });
  function saatGulir() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    atas.classList.toggle("tampak", y > 500);
    if (bar && artikel) {
      var r = artikel.getBoundingClientRect(), tinggi = artikel.offsetHeight - window.innerHeight * 0.6;
      var p = tinggi > 0 ? Math.min(1, Math.max(0, -r.top / tinggi)) : 0;
      bar.firstChild.style.width = (p * 100).toFixed(1) + "%";
    }
  }
  window.addEventListener("scroll", saatGulir, { passive: true }); saatGulir();
})();
