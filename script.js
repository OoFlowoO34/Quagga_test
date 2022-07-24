startQuagga();

function startQuagga() {
  const constraints = {
    width: {
      min: 640,
    },
    height: {
      min: 480,
    },
    aspectRatio: {
      min: 1,
      max: 2,
    },
    focusMode: "continuous",
  };

  Quagga.init(
    {
      config: {
        numOfWorkers: 4,
        locate: false,
        frequency: 10,
        debug: {
          showCanvas: true,
          showPatches: true,
          showFoundPatches: true,
          showSkeleton: true,
          showLabels: true,
          showPatchLabels: true,
          showRemainingPatchLabels: true,
          boxFromPatches: {
            showTransformed: true,
            showTransformedBox: true,
            showBB: true,
          },
        },
      },
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#camera"), // Or '#yourElement' (optional)
      },
      decoder: {
        readers: ["ean_reader"],
      },
      locator: {
        patchSize: "medium",
        halfSample: true,
      },
      area: {
        top: "25%",
        right: "0%",
        left: "0%",
        bottom: "25%",
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
}

// if (!("BarcodeDetector" in window)) {
//   console.log("Barcode Detector is not supported by this browser.");
// } else {
//   console.log("Barcode Detector supported!");

//   // create new detector
//   const barcodeDetector = new BarcodeDetector({
//     formats: ["code_39", "codabar", "ean_13"],
//   });
// }
