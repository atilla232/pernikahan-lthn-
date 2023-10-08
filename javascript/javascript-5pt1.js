const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || " ";
const pronoun = urlParams.get("p") || "Bapak/saudara/i";
const namaContaier = document.querySelector(".hero h4 span");
namaContaier.innerText = `${pronoun} ${nama},`.replace(/ ,$/, `'`);

document.querySelector("#nama").value = nama;
