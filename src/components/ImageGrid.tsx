import "./ImageGrid.css"; // Importing the CSS file

const ImageGrid = () => {
  const alunos = [
    {
      name: "Diogo Pinto",
      imageUrl: "FotoDoCidadao_-_copia.jpg",
      number: "67535",
    },
    {
      name: "Francisco Silva",
      imageUrl:
        "foto_FS.jpg",
      number: "70525",
    },
    {
      name: "Martim Latas",
      imageUrl: "foto_ML.png",
      number: "70596",
    },
    {
      name: "Rodrigo Costa",
      imageUrl: "trabalho-de-ipm.jpeg",
      number: "63703",
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
  ];

  return (
    <div className="page-container">
      {/* Logo at the top */}
      <div className="logo-container">
        <img
          src="https://i.ibb.co/PCZmkbw/track-and-taste-logo-transparent.png"
          alt="Logo"
          className="logo"
        />
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
            <a href={report.file} download className="download-button">
              Download Report {index + 1}
            </a>
          </div>
        ))}
      </div>

      {/* this is a comment */}
      {/* Site display */}
      <div className="group-name">
        <h1>Our Website - Track and Taste</h1>
      </div>

      <a className="goToSite" href="https://fpgsilva.github.io/TrackAndTaste/">
        Go to Track and Taste
      </a>
      <p></p>

      <div className="version-description">
        <p>v 0.1.0</p>
      </div>
    </div>
  );
};

export default ImageGrid;
