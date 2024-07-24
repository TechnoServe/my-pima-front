import React, { useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { saveAs } from 'file-saver';
import { GET_FVQAS_BY_PROJECT_IN_EXCEL, GET_OVERALL_REPORT, UPLOAD_APPROVED_FV } from '../../graphql/queries/farmVisitsRequests';
import './fvList.css';

const BEST_PRACTICES = [
  'Compost',
  'Record Book',
  '+-',
  'IPDM',
  'Nutrition',
  'Shade Management',
  'Weeding',
  'Stumping',
  'Pruning',
  'Main Stems',
];

const DownloadExcel = () => {
  const [selectedPractice, setSelectedPractice] = useState('');
  const [fileToUpload, setFileToUpload] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [fetchExcel, { loading: fetchingExcel, error: fetchError }] = useLazyQuery(GET_FVQAS_BY_PROJECT_IN_EXCEL, {
    onCompleted: (data) => {
      if (data.getFVQAsByProjectInExcel.status === 200) {
        const base64Content = data.getFVQAsByProjectInExcel.file.split(',')[1];
        const byteCharacters = atob(base64Content);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        saveAs(blob, `${selectedPractice}.xlsx`);
      } else {
        alert(data.getFVQAsByProjectInExcel.message);
      }
    },
  });

  const [fetchOverallReport, { loading: fetchingOverallReport, error: overallReportError }] = useLazyQuery(GET_OVERALL_REPORT, {
    onCompleted: (data) => {
      if (data.getOverallReport.status === 200) {
        const base64Content = data.getOverallReport.file.split(',')[1];
        const byteCharacters = atob(base64Content);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        saveAs(blob, 'Overall_Report.xlsx');
      } else {
        alert(data.getOverallReport.message);
      } 
    },
  });

  const [uploadApprovedFV, { loading: uploading, error: uploadError }] = useMutation(UPLOAD_APPROVED_FV, {
    onCompleted: (data) => {
      setUploadStatus(data.uploadApprovedFV.message);
    },
  });

  const handlePracticeSelect = (practiceName) => {
    setSelectedPractice(practiceName);
    fetchExcel({ variables: { projectId: 'a0E9J000000NTjpUAG', practiceName } });
  };

  const handleOverallReportDownload = () => {
    fetchOverallReport({ variables: { projectId: 'a0E9J000000NTjpUAG' } });
  };

  const handleFileChange = (event) => {
    setFileToUpload(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (fileToUpload) {
      uploadApprovedFV({ variables: { projectId: 'a0E9J000000NTjpUAG', file: fileToUpload } });
    }
  };

  return (
    <div className="download-excel">
      <h1>Farm Visit Data Management</h1>

      <div className="section">
        <h2>Select Best Practice to Download</h2>
        <div className="practice-list">
          {BEST_PRACTICES.map((practice) => (
            <button
              key={practice}
              className={`practice-button ${selectedPractice === practice ? 'selected' : ''}`}
              onClick={() => handlePracticeSelect(practice)}
            >
              {practice}
            </button>
          ))}
        </div>
        {fetchingExcel && <div className="spinner"></div>}
        {fetchError && <p className="error-message">Error: {fetchError.message}</p>}
      </div>

      <div className="section">
        <h2>Download Overall Report</h2>
        <button className="overall-report-button" onClick={handleOverallReportDownload}>
          Download Overall Report
        </button>
        {fetchingOverallReport && <div className="spinner"></div>}
        {overallReportError && <p className="error-message">Error: {overallReportError.message}</p>}
      </div>

      <div className="section">
        <h2>Upload Approved Farm Visits</h2>
        <div className="upload-section">
          <input type="file" onChange={handleFileChange} />
          <button className="upload-button" onClick={handleFileUpload}>
            Upload
          </button>
          {uploading && <div className="spinner"></div>}
          {uploadError && <p className="error-message">Error: {uploadError.message}</p>}
          {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
        </div>
      </div>
    </div>
  );
};

export default DownloadExcel;
