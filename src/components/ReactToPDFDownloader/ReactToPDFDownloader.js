import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import React from "react";


const ReactToPDFDownloader = ({ roofElementId, downloadFileName }) => {
  const downloadFileDocument = () => {
    console.log('click')
    const input = document.getElementById(roofElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a3");
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${downloadFileName}`);
    });
  };

  return (
    <div>
      <button className="bg-purple-900 px-9 py-3 rounded-md text-white hover:bg-amber-700 mt-5" onClick={downloadFileDocument}>
        Download Page PDF
      
      </button>
    </div>
  );
};

export default ReactToPDFDownloader;