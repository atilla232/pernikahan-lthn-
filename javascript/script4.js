window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  const selectStatus = document.getElementById("status");
  form.addEventListener("submit", function (e) {
    if (selectStatus.value === "Pilih Salah Satu") {
      e.preventDefault(); // Mencegah pengiriman formulir
      alert("Harap Isi Konfirmasi Kehadiran Dengan Benar!");
    } else {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: "POST",
        body: data,
      }).then(() => {
        alert("Konfirmasi Kehadiran Berhasil Terkirim!");
      });
    }
  });
});
