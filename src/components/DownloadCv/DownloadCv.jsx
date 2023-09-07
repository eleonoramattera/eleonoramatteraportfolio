import React from "react";
import { Button } from "react-bootstrap";
import "./DownloadCv.css";

function DownloadCv() {
  const pdfURL = "https:/path/file.pdf";
  //creare server

  return (
    <a href={pdfURL} download="nomefile.pdf">
      <button>Scarica CV</button>
    </a>
  );
}

export default DownloadCv;
