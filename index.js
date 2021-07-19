// buat data card
let dataAku = [
  { id: "1", name: "css", img: "./nilai/css.jpg" },
  { id: "2", name: "html", img: "./nilai/html.png" },
  { id: "3", name: "js", img: "./nilai/js.png" },
  { id: "4", name: "ts", img: "./nilai/ts.png" },
  { id: "5", name: "python", img: "./nilai/python.png" },
  { id: "6", name: "php", img: "./nilai/php.jpg" },
  { id: "7", name: "css", img: "./nilai/css.jpg" },
  { id: "8", name: "html", img: "./nilai/html.png" },
  { id: "9", name: "js", img: "./nilai/js.png" },
  { id: "10", name: "ts", img: "./nilai/ts.png" },
  { id: "11", name: "python", img: "./nilai/python.png" },
  { id: "12", name: "php", img: "./nilai/php.jpg" },
];

let time = false;
let harus = false;
let nilai = null;
let point = 0;
let newPointDifferentUser = [];
let newTimeDifferentUser = [];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(dataAku);

fro = `
<div style="display: flex;justify-content: center; align-items: center; height: 100vh;" id="front">
<div style="background-color: white;border-radius: 5%; margin-left: 10px;margin-right: 10px; width: 13%;" onclick="startGame()">
    <div style="text-align: center;">
        <h2 style="margin-top: 5%;">START GAME</h2>
    </div>
    
</div>
</div>
`;
document.getElementById("frontHal").innerHTML += fro;

en = `
<div id="end"  class="grid-container" >
</div>
`;
document.getElementById("endHal").innerHTML += en;

foo = `
<div id="foot" style="margin-top: 10%;" >
</div>
`;
document.getElementById("footHal").innerHTML += foo;

fin = `
<div id="finish"></div>
`;
document.getElementById("finishHal").innerHTML += fin;

function startGame() {
  let halFront = document.getElementById("front");
  halFront.remove();
  let halFoot = document.getElementById("foot");
  foot = `
      <div>
        <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: -10%; margin-left: 25%; display: flex;">
        <p>Time :<span style="margin-left: 5px; color: red" id="timer"></span></p> 
        </div>
        <div style="margin-top: -2.5%; margin-left: 67%; display: flex;">
          <p style="font-size: 18px; font-weight: bold;">Total Point</p>
          <p style="font-size: 18px; font-weight: bold; margin-left: 3%;">:</p>
          <p style="font-size: 18px; font-weight: bold; margin-left: 3%; color: green">${point}</p>
          </div>
        </div>
      </div>
      `;
  halFoot.innerHTML = foot;

  // coutDown
  var count = 30;
  var counter = setInterval(timer, 1000); //1 menit
  function timer() {
    if (!time) {
      count = count - 1;
      if (count <= 0) {
        newTimeDifferentUser.push(count);
        clearInterval(counter);
        return timeOf();
        // return
        //clear
      }
      document.getElementById("timer").innerHTML = count;
    } else {
      newTimeDifferentUser.push(count);
      clearInterval(counter);
      return timeOf();
    }
  }

  // map data / loop
  dataAku.map((item, index) => {
    let halBack = document.getElementById("end");
    output = `
        <div onclick="clickGame('${index}')" >
            <div  class="grid-item">
                <img id="${index}" name="${item.name}" src="avatar.jpg" style="width: 150px; height: 150px;"/>
            </div>
        </div>
        `;
    halBack.innerHTML += output;
  });
}

function clickGame(data) {
  // console.log(data, halBack)
  dataAku.map((item, index) => {
    // let halBack1 = document.getElementById('end') ... nilai
    if (index === parseFloat(data)) {
      // dapatkan gambar kedua dengan spesifik
      let halBackOld = document.getElementById(parseInt(nilai));
      let halBack = document.getElementById(parseInt(index));
      //
      if (halBack.className !== "success") {
        // simpan ke variable nilai untuk dipakai sebagai perbandingan
        nilai = halBack.id;
        // console.log('ini old', halBackOld)
        // console.log('ini new', halBack)
        // cek apakah halback masih menampilkan gambar avatar / deefault
        if (halBackOld) {
          if (index === parseInt(halBackOld.id)) {
            halBack.src = item.img;
            return;
          }
        }

        if (
          halBack.src.includes("avatar.jpg") ||
          halBackOld.src.includes("avatar.jpg")
        ) {
          halBack.src = item.img;
        }
        // tambah point jika gambar yang kewdua dan pertama sama namanya dan id keduanya harus beda karena id keduanya pasti berbeda dan buat nilai menjadi null agar gambar pertama menjadi kosong kembali untuk di gunakan memilih gambar selanjutnya
        if (
          halBack.name === halBackOld?.name &&
          halBack.id !== halBackOld?.id
        ) {
          point += 2;
          // console.log(point)
          nilai = null;
          halBack.className = "success";
          halBackOld.className = "success";
          // console.log('ini old1', halBackOld)
          // console.log('ini new1', halBack)
        } else if (!halBackOld?.src.includes("avatar.jpg")) {
          console.log("hi");
          halBack.className = "wadidaw";
          halBackOld.className = "wadidaw";
          setTimeout(() => {
            halBackOld.src = "avatar.jpg";
            halBack.src = "avatar.jpg";
          }, 1000);
          nilai = null;
          if (point > 0) {
            point -= 1;
          }
        }
      }
      let halBacka = document.getElementsByClassName("success");
      if (halBacka.length === 12) {
        time = true;
      }
    }
  });

  let halFoot = document.getElementById("foot");
  foot = `
  <div>
  <div style="font-size: 18px; font-weight: bold; margin-top: -10%; margin-left: 25%; display: flex;">
  <p>Time :<span style="margin-left: 5px; color: red" id="timer"></span></p> 
  </div>
  <div style="margin-top: -2.5%; margin-left: 67%; display: flex;">
    <p style="font-size: 18px; font-weight: bold;">Total Point</p>
    <p style="font-size: 18px; font-weight: bold; margin-left: 3%;">:</p>
    <p style="font-size: 18px; font-weight: bold; margin-left: 3%; color: green">${point}</p>
    </div>
  </div>
    `;
  halFoot.innerHTML = foot;
}

function renderGame() {
  let addHal = document.getElementById("finish");
  addHal.remove();

  shuffleArray(dataAku);

  point = 0;
  time = false;

  // coutDown
  var count = 30;
  var counter = setInterval(timer, 1000); //1 menit
  function timer() {
    if (!time) {
      count = count - 1;
      if (count <= 0) {
        newTimeDifferentUser.push(count);
        clearInterval(counter);
        return timeOf();
        // return
        //clear
      }
      document.getElementById("timer").innerHTML = count;
    } else {
      newTimeDifferentUser.push(count);
      clearInterval(counter);
      return timeOf();
    }
  }

  en = `
<div id="end"  class="grid-container" >
</div>
`;
  let halBack = document.getElementById("endHal");
  halBack.innerHTML += en;

  foo = `
<div id="foot" style="margin-top: 10%;" >
</div>
`;
  let halFoota = document.getElementById("footHal");
  halFoota.innerHTML += foo;

  fin = `
<div id="finish"></div>
`;
  let halFinish = document.getElementById("finishHal");
  halFinish.innerHTML += fin;

  let halFoot = document.getElementById("foot");
  foot = `
  <div>
    <div>
    <div style="font-size: 18px; font-weight: bold; margin-top: -10%; margin-left: 25%; display: flex;">
      <p>Time :<span style="margin-left: 5px; color: red" id="timer"></span></p> 
    </div>
    <div style="margin-top: -2.5%; margin-left: 67%; display: flex;">
      <p style="font-size: 18px; font-weight: bold;">Total Point</p>
      <p style="font-size: 18px; font-weight: bold; margin-left: 3%;">:</p>
      <p style="font-size: 18px; font-weight: bold; margin-left: 3%; color: green">${point}</p>
      </div>
    </div>
  </div>
    `;
  halFoot.innerHTML = foot;

  dataAku.map((item, index) => {
    let halBack = document.getElementById("end");
    output = `
    <div onclick="clickGame('${index}')" >
        <div  class="grid-item">
            <img id="${index}" name="${item.name}" src="avatar.jpg" style="width: 150px; height: 150px;"/>
        </div>
    </div>
    `;
    halBack.innerHTML += output;
  });
}

function timeOf() {
  let delHalBack = document.getElementById("end");
  let delHalFoot = document.getElementById("foot");
  newPointDifferentUser.push(point);
  console.log("hy", newTimeDifferentUser);

  let addHal = document.getElementById("finish");
  fin = `
      <div style="margin-top: 1%">
      <div class="container">
          <div style="margin: 1%;">
              <div class="row justify-content-between">
                  <div class="col-4" id="alert">
                  </div>
                  <div class="col-1">
                      <button type="button" class="btn btn-outline-light" style="height: 80%;" onClick="renderGame()">Main Lagi</button>
                  </div>
              </div>
          </div>
          <ol class="list-group list-group-numbered" id="pointUser">
          <a href="#" class="list-group-item list-group-item active" aria-current="true">
    CARDGAME Data
  </a>
              <ul class="list-group list-group-horizontal list-group-item-success">
                  <li class="list-group-item" style="width: 5%;">No</li>
                  <li class="list-group-item" style="width: 25%;">Time</li>
                  <li class="list-group-item" style="width: 70%;">Point</li>
              </ul>
          </ol>
        </div>
      </div>
    `;
  addHal.innerHTML += fin;

  console.log(newPointDifferentUser);
  newPointDifferentUser.map((item, index) => {
    let addPoint = document.getElementById("pointUser");
    addPoint.innerHTML += `      
      <ul class="list-group list-group-horizontal list-group-item-success">
    <li class="list-group-item" style="width: 5%;">${index + 1}</li>
    <li class="list-group-item" style="width: 25%;">${
      30 - newTimeDifferentUser[index]
    } Detik</li>
    <li class="list-group-item" style="width: 70%;">${item}</li>
    </ul>
      `;
  });
  delHalBack.remove();
  delHalFoot.remove();

  // alert nilai
  if (newPointDifferentUser.length >= 1) {
    let newpoint = newPointDifferentUser.reverse();
    console.log("ini newPoint", newpoint);
    console.log("ini newPoint 0", newpoint[0]);
    console.log("ini newPoint 1", newpoint[1]);
    let ale = document.getElementById("alert");
    if (newpoint[0] > newpoint[1]) {
      alert = `
      <div class="alert alert-danger" role="alert" style="width: 280%;">
      Pertahankan
      </div>
      `;
      ale.innerHTML += alert;
    } else if (newpoint[0] < newpoint[1]) {
      alert = `
      <div class="alert alert-secondary" role="alert" style="width: 280%;">
      Tingkatkan Lagi!!
      </div>
      `;
      ale.innerHTML += alert;
    } else if (newpoint[0] === newpoint[1]) {
      alert = `
      <div class="alert alert-warning" role="alert" style="width: 280%;">
        Good Job!!
      </div>
      `;
      ale.innerHTML += alert;
    } else {
      alert = `
      <div class="alert alert-dark" role="alert" style="width: 280%;">
        Semangat!!
      </div>
      `;
      ale.innerHTML += alert;
    }
  }
}
