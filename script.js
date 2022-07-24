Quagga.init(
  {
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector("#camera"), // Or '#yourElement' (optional)
    },
    decoder: {
      readers: ["ean_reader"],
    },
  },
  function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
  }
);
const getresult = document.getElementById("result");

console.log(getresult);
Quagga.onDetected(function (data) {
  console.log(data);
  getresult.innerHTML = data.codeResult.code;
});
