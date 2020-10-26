let input;
let img;

function previewFile() {
  const preview = document.querySelector("#canvas img");
  const file = document.querySelector("input[type=file]").files[0];

 
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      preview.src = reader.result;
      console.log(reader.result);
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}


function  markingTime() {
  var d = new Date();

  var month = d.getMonth() + 1;
  var day = d.getDate();

  var output =
    d.getFullYear() +
    "/" +
    (month < 10 ? "0" : "") +
    month +
    "/" +
    (day < 10 ? "0" : "") +
    day;
  var strinout = convert("official @claymachine on " + output);
  $("#timestamp").html(strinout);
}
function convert(input) {
  let output = "";
  for (var i = 0; i < input.length; i++) {
    output += input[i].charCodeAt(0).toString(2) + " ";
  }
  output = output.replace(/0/g, ".");
  output = output.replace(/1/g, "|");
  return output;
}
markingTime();

$("#select-target").on("change", function () {
 
  if (this.value == "telegram") {
    $("#canvas #qrcode").removeClass().addClass("telegram");
    $("#console").html("set to telegram, 0 0000 0001");
  }
  else if (this.value == "whatsapp") {
    $("#canvas #qrcode").removeClass().addClass("whatsapp");
    $("#console").html("set to whatsapp, 0 0000 0010");
  }
  else if (this.value == "youtube") {
    $("#canvas #qrcode").removeClass().addClass("youtube");
    $("#console").html("set to youtube, 0 0000 0011");
  }
  else if (this.value == "instagram") {
    $("#canvas #qrcode").removeClass().addClass("instagram");
    $("#console").html("set to instagram, 0 0000 0100");
  }
  else if (this.value == "twitter") {
    $("#canvas #qrcode").removeClass().addClass("twitter");
    $("#console").html("set to twitter, 0 0000 0101");
  }
  else if (this.value == "email") {
    $("#canvas #qrcode").removeClass().addClass("email");
    $("#console").html("set to email, 0 0000 0110");
  }
  else if (this.value == "soundcloud") {
    $("#canvas #qrcode").removeClass().addClass("soundcloud");
    $("#console").html("set to soundcloud, 0 0000 0111");
  }
  else if (this.value == "tiktok") {
    $("#canvas #qrcode").removeClass().addClass("tiktok");
    $("#console").html("set to tiktok, 0 0000 1000");
  }
  else if (this.value == "genius") {
    $("#canvas #qrcode").removeClass().addClass("genius");
    $("#console").html("set to genius, 0 0000 1001");
  }
  else if (this.value == "blog") {
    $("#canvas #qrcode").removeClass().addClass("blog");
    $("#console").html("set to blog, 0 0000 1010");
  }



  console.log(this.value);
});