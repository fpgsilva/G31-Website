import "./ImageGrid.css"; // Importing the CSS file
import reportimage1 from '/src/assets/Cover-Report-1.png';
import reportfile1 from '/src/assets/IPM-G31-Phase 1.pdf';

const ImageGrid = () => {
  const alunos = [
    { name: "Diogo Pinto", imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYIRIPFI7BnaFgEJyon4_vceBFkhJMg_AHQ&s",
        number: "67535" },
    {
      name: "Francisco Silva",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYIRIPFI7BnaFgEJyon4_vceBFkhJMg_AHQ&s",
      number: "70525",
    },
    {
      name: "Martim Latas",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1286243088364474394/1289988349590900838/mirav2.png?ex=66fad2c5&is=66f98145&hm=f1eea7e625b517e300ee10d69a51aaba6c001838ddd1c8f947fd3165c3b93c20&",
      number: "70596",
    },
    {
      name: "Rodrigo Costa",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1286243088364474394/1289990939812696134/e691cf03-d70d-4ae6-a09b-4d4b38286ff7.jpg?ex=66fad52e&is=66f983ae&hm=e7116a9fc979a3394f6ae6561bef9b2281bd3c2865bbee875ade512a113b0151&",
      number: "63703",
    },
  ];

  const reports = [
    { title: "Report 1", imageImport:reportimage1, file: reportfile1},
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
        <p>With this project of IPM we aim to build a website in which a user can find easily new recipes, among other things.</p>
        <p>This is the website where you can find the reports of the diferent phases of this project, along with the link to the application in question.</p>
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
            <div className="report-item" 
            key={index}>
                <p className="report-Title">{report.title}</p>
                <img src={report.imageImport} alt={report.title} className="report-image"/>
                <p></p>
                <a href="../assets/IPM-G31-Phase 1.pdf" download className="download-button">Download Report {index + 1}</a>
            </div>
        ))}
      </div>

        {/* this is a comment */}
        {/* Site display */}



        <div className="version-description">
        <p>v 0.0.3</p>
        </div>
    </div>
    
  );
};

export default ImageGrid;