import React from "react";

function DownloadCv() {
  const pdfURL = "https:/path/file.pdf";
  //creare server

  return (
    <a href={pdfURL} download="nomefile.pdf">
      <button>Scarica PDF Interattivo</button>
    </a>
  );
}

export default DownloadCv;
