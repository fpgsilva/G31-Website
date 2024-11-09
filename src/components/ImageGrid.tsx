import "./ImageGrid.css"; // Importing the CSS file
import ImageSlider from "./ImageSlider";

const ImageGrid = () => {
  const alunos = [
    {
      name: "Diogo Pinto",
      imageUrl: "FotoDoCidadao_-_copia.jpg",
      number: "67535",
      goodDesign: "Good_and_Bad_design_67535.pdf",
    },
    {
      name: "Francisco Silva",
      imageUrl: "foto_FS.jpg",
      number: "70525",
      goodDesign: "cenas cool yh do chico pdf",
    },
    {
      name: "Martim Latas",
      imageUrl: "foto_ML.png",
      number: "70596",
      goodDesign: "Good_Bad_Design_Martim_Latas_70596.pdf",
    },
    {
      name: "Rodrigo Costa",
      imageUrl: "trabalho-de-ipm.jpeg",
      number: "63703",
      goodDesign: "BOM DESING_MAU DESING_Rodrigo.pdf",
    },
  ];

  const reports = [
    {
      title: "Report 1",
      imageImport: "Cover-Report-1.png",
      file: "IPM-G31-Phase 1.pdf",
    },
    {
      title: "Report 2",
      imageImport: "Cover-Report-2.png",
      file: "IPM-G31-Phase 2.pdf",
    },
    {
      title: "Report 3",
      imageImport: "Cover-Report-3.png",
      file: "IPM-G31-Phase 3.pdf",
    },
  ];

  return (
    <div className="page-container">
      {/* Logo at the top */}
      <div className="logo-container">
        <img
          src="track-and-taste-logo-Photoroom.png"
          alt="Logo"
          className="logo"
        />
      </div>

      <div className="arrow-container">
        <i className="arrow" />
      </div>

      <div>
        <ImageSlider />
      </div>

      {/* Group name */}
      <div className="group-name">
        <h1>GROUP 31</h1>
      </div>

      <div className="group-desc">
        <p>
          With this project of IPM we aim to build a website in which a user can
          find easily new recipes, among other things.
        </p>
        <p>
          This is the website where you can find the reports of the diferent
          phases of this project, along with the link to the application in
          question.
        </p>
      </div>

      {/* Student details grid */}
      <div className="image-grid">
        {alunos.map((aluno, index) => (
          <div className="image-item" key={index}>
            <img
              src={aluno.imageUrl}
              alt={aluno.name}
              className="aluno-image"
            />
            <p className="aluno-description">{aluno.name}</p>
            <p className="aluno-description">{aluno.number}</p>
            <p className="aluno-design">Good Design Bad Design</p>
            <div className="design-buttons">
              {/* Preview and Download buttons for Good Design Bad Design */}
              <a
                href={aluno.goodDesign}
                target="_blank"
                rel="noopener noreferrer"
                className="preview-button"
              >
                Preview
              </a>
              <a href={aluno.goodDesign} download className="download-button">
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="report-grid">
        {reports.map((report, index) => (
          <div className="report-item" key={index}>
            <p className="report-Title">{report.title}</p>
            <img
              src={report.imageImport}
              alt={report.title}
              className="report-image"
            />
            <p></p>
            {/* Preview button */}
            <a
              href={report.file}
              target="_blank"
              rel="noopener noreferrer"
              className="preview-button"
            >
              Preview Report {index + 1}
            </a>
            <a href={report.file} download className="download-button">
              Download Report {index + 1}
            </a>
          </div>
        ))}
      </div>

      {/* Site display */}
      <div className="group-name">
        <h1>Our Website - Track and Taste</h1>
      </div>

      <a className="goToSite" href="https://fpgsilva.github.io/TrackAndTaste/">
        Go to Track and Taste
      </a>

      <div className="version-description">
        <p>v 0.1.1</p>
      </div>
    </div>
  );
};

export default ImageGrid;
