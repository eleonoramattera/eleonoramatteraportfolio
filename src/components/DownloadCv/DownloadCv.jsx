import React from "react";
import { Link } from "react-router-dom";
import "./DownloadCv.css";

function DownloadCv() {
  const pdfURL = "https://drive.google.com/drive/folders/1KptnJsz4LIun5RTDZCF8dbazZuvBWt-1";

  return (
    <Link to={pdfURL} target="_blank" download className="cv">
      Visualizza curriculum vitae
    </Link>
  );
}

export default DownloadCv;
