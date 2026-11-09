// patch.js — hanya mengganti ikon musik (putar/jeda) sesuai status audio.
// Klik tombol tetap ditangani script.js yang sudah ada.
(function () {
  var audio = document.getElementById('bg-music');
  var btn = document.getElementById('tombol-musik');
  if (!audio || !btn) return;
  var icon = btn.querySelector('i');
  function set(playing) {
    btn.classList.toggle('playing', playing);
    icon.className = playing ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
  }
  audio.addEventListener('play', function () { set(true); });
  audio.addEventListener('pause', function () { set(false); });
  set(!audio.paused);
})();