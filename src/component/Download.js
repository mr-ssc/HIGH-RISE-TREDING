import React from 'react';
import './Download.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Download = () => {
  // PDF data - files should be in public/pdf/ directory
  const pdfCatalog = [
    { 
      name: 'Catalouge', 
      icon: '/pdf-logo.png', // Store icons in public/pdf-icons/
      file: '/catalouge.pdf', // Store PDFs in public/pdf/
      description: 'Product catalog with all specifications'
    },
    // Add more PDFs as needed
  ];

  const handleDownload = (pdfFile) => {
    // Using the HTML5 download attribute
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + pdfFile;
    link.download = pdfFile.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <div className="download-page">
        <div className="pdf-catalog">
          <h2 className="section-title">Download Resources</h2>
          <p className="section-subtitle">Access our collection of documents and resources</p>
          
          <div className="pdf-grid">
            {pdfCatalog.map((pdf, index) => (
              <div key={index} className="pdf-card">
                <div className="pdf-card-inner">
                  <div className="pdf-card-front">
                    <img 
                      src={process.env.PUBLIC_URL + pdf.icon} 
                      alt={pdf.name} 
                      className="pdf-icon" 
                    />
                    <h3 className="pdf-name">{pdf.name}</h3>
                  </div>
                  <div className="pdf-card-back">
                    <p className="pdf-description">{pdf.description}</p>
                    <button 
                      className="download-btn"
                      onClick={() => handleDownload(pdf.file)}
                    >
                      <span className="btn-text">Download</span>
                      <span className="btn-icon">↓</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Download;