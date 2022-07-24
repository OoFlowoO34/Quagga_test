Quagga.init(
  {
    config: {
      numOfWorkers: 4,
      locate: false,
      frequency: 10,
      debug: false,
    },
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector("#camera"), // Or '#yourElement' (optional)
    },
    decoder: {
      readers: ["ean_reader"],
    },

    halfSample: true,
    patchSize: "medium", // x-small, small, medium, large, x-large
    debug: {
      showCanvas: false,
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
