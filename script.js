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

    halfSample: true,
    patchSize: "x-small", // x-small, small, medium, large, x-large
    debug: {
      showCanvas: true,
      showPatches: false,
      showFoundPatches: false,
      showSkeleton: false,
      showLabels: false,
      showPatchLabels: false,
      showRemainingPatchLabels: false,
      boxFromPatches: {
        showTransformed: false,
        showTransformedBox: false,
        showBB: false,
      },
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
