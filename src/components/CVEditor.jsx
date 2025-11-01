import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDownload } from '@fortawesome/free-solid-svg-icons';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CVEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cvRef = useRef();

  const { template = 'Modern', example = 'Software Engineer' } = location.state || {};

  const [cvData, setCvData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    education: [],
    experience: [],
    skills: [],
  });

  const handleInputChange = (section, field, value) => {
    setCvData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const addEntry = (section) => {
    setCvData(prev => ({
      ...prev,
      [section]: [
        ...prev[section],
        section === 'education'
          ? { institution: '', degree: '', year: '' }
          : { company: '', position: '', duration: '', description: '' }
      ]
    }));
  };

  const handleDownload = async () => {
    const input = cvRef.current;
    if (!input) return;

    try {
      // Hide the download button before capturing
      const downloadButton = document.querySelector('.download-button');
      if (downloadButton) downloadButton.style.visibility = 'hidden';

      // Create canvas with higher quality
      const canvas = await html2canvas(input, {
        scale: 3,
        logging: false,
        useCORS: true,
        scrollY: -window.scrollY,
        allowTaint: true,
        backgroundColor: '#ffffff',
      });

      // Restore the download button
      if (downloadButton) downloadButton.style.visibility = 'visible';

      // Create PDF with proper dimensions
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Add image to PDF
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      // Generate filename
      const fileName = `CV_${cvData.personalInfo.name || 'MyCV'}_${new Date().toISOString().slice(0, 10)}.pdf`;

      // Save the PDF
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to download CV. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Editor Controls */}
        <div className="no-print bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => navigate('/resources')}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to Templates
            </button>

            <button
              onClick={handleDownload}
              className="download-button bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg flex items-center"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download CV
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">Personal Information</h3>
              <input 
                type="text" 
                placeholder="Full Name" 
                value={cvData.personalInfo.name}
                onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
                className="w-full p-2 border rounded text-black" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={cvData.personalInfo.email}
                onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                className="w-full p-2 border rounded text-black" 
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                value={cvData.personalInfo.phone}
                onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                className="w-full p-2 border rounded text-black" 
              />
              <input 
                type="text" 
                placeholder="Address" 
                value={cvData.personalInfo.address}
                onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                className="w-full p-2 border rounded text-black" 
              />
            </div>

            {/* Education */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-black">Education</h3>
                <button 
                  onClick={() => addEntry('education')}
                  className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-black"
                >
                  Add Education
                </button>
              </div>
              {cvData.education.map((edu, index) => (
                <div key={index} className="space-y-2 p-3 border rounded">
                  <input 
                    type="text" 
                    placeholder="Institution" 
                    value={edu.institution}
                    onChange={(e) => {
                      const updated = [...cvData.education];
                      updated[index].institution = e.target.value;
                      setCvData({ ...cvData, education: updated });
                    }} 
                    className="w-full p-2 border rounded text-black" 
                  />
                  <input 
                    type="text" 
                    placeholder="Degree" 
                    value={edu.degree}
                    onChange={(e) => {
                      const updated = [...cvData.education];
                      updated[index].degree = e.target.value;
                      setCvData({ ...cvData, education: updated });
                    }} 
                    className="w-full p-2 border rounded text-black" 
                  />
                  <input 
                    type="text" 
                    placeholder="Year" 
                    value={edu.year}
                    onChange={(e) => {
                      const updated = [...cvData.education];
                      updated[index].year = e.target.value;
                      setCvData({ ...cvData, education: updated });
                    }} 
                    className="w-full p-2 border rounded text-black" 
                  />
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-black">Work Experience</h3>
                <button 
                  onClick={() => addEntry('experience')}
                  className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-black"
                >
                  Add Experience
                </button>
              </div>
              {cvData.experience.map((exp, index) => (
                <div key={index} className="space-y-2 p-3 border rounded">
                  <input 
                    type="text" 
                    placeholder="Company" 
                    value={exp.company}
                    onChange={(e) => {
                      const updated = [...cvData.experience];
                      updated[index].company = e.target.value;
                      setCvData({ ...cvData, experience: updated });
                    }} 
                    className="w-full p-2 border rounded text-black" 
                  />
                  <input 
                    type="text" 
                    placeholder="Position" 
                    value={exp.position}
                    onChange={(e) => {
                      const updated = [...cvData.experience];
                      updated[index].position = e.target.value;
                      setCvData({ ...cvData, experience: updated });
                    }} 
                    className="w-full p-2 border rounded text-black" 
                  />
                  <input 
                    type="text" 
                    placeholder="Duration" 
                    value={exp.duration}
                    onChange={(e) => {
                      const updated = [...cvData.experience];
                      updated[index].duration = e.target.value;
                      setCvData({ ...cvData, experience: updated });
                    }} 
                    className="w-full p-2 border rounded text-black" 
                  />
                  <textarea 
                    placeholder="Description" 
                    value={exp.description}
                    onChange={(e) => {
                      const updated = [...cvData.experience];
                      updated[index].description = e.target.value;
                      setCvData({ ...cvData, experience: updated });
                    }} 
                    className="w-full p-2 border rounded text-black" 
                    rows="3" 
                  />
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.map((skill, index) => (
                  <div key={index} className="flex items-center bg-gray-200 px-3 py-1 rounded">
                    <span className="text-black">{skill}</span>
                    <button 
                      onClick={() => {
                        const updated = [...cvData.skills];
                        updated.splice(index, 1);
                        setCvData({ ...cvData, skills: updated });
                      }} 
                      className="ml-2 text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Add skill"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      setCvData({ ...cvData, skills: [...cvData.skills, e.target.value.trim()] });
                      e.target.value = '';
                    }
                  }} 
                  className="flex-grow p-2 border rounded-l text-black" 
                />
                <button 
                  onClick={(e) => {
                    const input = e.target.previousElementSibling;
                    if (input.value.trim()) {
                      setCvData({ ...cvData, skills: [...cvData.skills, input.value.trim()] });
                      input.value = '';
                    }
                  }} 
                  className="bg-blue-600 text-white px-3 rounded-r"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CV Preview */}
        <div 
          ref={cvRef} 
          className={`bg-white shadow-lg p-8 ${template.toLowerCase()}-template`}
          style={{
            width: '210mm',
            minHeight: '297mm',
            margin: '0 auto',
          }}
        >
          <style jsx>{`
            .modern-template { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              color: #333;
            }
            .classic-template { 
              font-family: 'Times New Roman', Times, serif;
              color: #222;
            }
            .creative-template { 
              font-family: 'Arial', sans-serif;
              color: #444;
            }
          `}</style>

          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {cvData.personalInfo.name || 'Your Name'}
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              {cvData.personalInfo.email && <span>{cvData.personalInfo.email}</span>}
              {cvData.personalInfo.phone && <span>{cvData.personalInfo.phone}</span>}
              {cvData.personalInfo.address && <span>{cvData.personalInfo.address}</span>}
            </div>
          </header>

          {cvData.education.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4">Education</h2>
              {cvData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{edu.institution || 'Institution Name'}</h3>
                    <span className="text-gray-600">{edu.year || 'Year'}</span>
                  </div>
                  <p>{edu.degree || 'Degree/Certificate'}</p>
                </div>
              ))}
            </section>
          )}

          {cvData.experience.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4">Work Experience</h2>
              {cvData.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{exp.company || 'Company Name'}</h3>
                    <span className="text-gray-600">{exp.duration || 'Duration'}</span>
                  </div>
                  <p className="font-medium">{exp.position || 'Position'}</p>
                  <p className="text-gray-700 mt-1">{exp.description || 'Job description'}</p>
                </div>
              ))}
            </section>
          )}

          {cvData.skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.map((skill, index) => (
                  <span key={index} className="bg-gray-200 px-3 py-1 rounded text-black">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVEditor;