let btn = document.getElementById("submit");
btn.onclick = function () {
  let data = document.getElementById("input").value;
  let img = document.getElementById("img");
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
  img.style.display = "block";
};
