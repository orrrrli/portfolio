import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import profilePic from "/profilepic.jpg"; // Asegúrate de tener la ruta correcta

function Header() {
  const handleDownloadResume = () => {
    // Coloca la URL correcta de tu archivo PDF
    const pdfUrl = "/CV_OrlandoCastaneda.pdf";

    // Crea un elemento <a> para simular el clic y la descarga
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_OrlandoCastaneda.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col md:flex-row mx-auto max-w-3xl px-5 mb-5 items-center border-b-2 border-slate-300 dark:border-slate-600 py-4">
      {/* Imagen arriba en dispositivos móviles (flex-col en dispositivos pequeños) */}
      <div className="mx-auto mb-5 md:mb-0 w-32 h-30 md:w-48 md:h-38 overflow-hidden rounded-full md:order-1">
        {/* Utiliza la clase 'object-cover' para hacer la imagen responsive */}
        <img className="w-full h-full object-cover" src={profilePic} alt="Orlando Castaneda" />
      </div>
      <div className="flex flex-col mx-auto md:mx-0 max-w-md md:max`-w-full md:ml-8 dark:bg-slate-800 md:order-2">
        <h1 className="font-bold text-4xl text-slate-800 dark:text-slate-200 mb-2">Orlando Castaneda</h1>
        <h2 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-4">Software Engineer in the 7th grade. Constantly learning</h2>
        <div className="dark:bg-slate-800">
          <button
            className="flex font-semibold items-center px-4 py-2 rounded bg-slate-200 hover:bg-slate-400 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-900"
            onClick={handleDownloadResume}
          >
            <BsFillFileEarmarkPersonFill className="mr-2" size={18} />
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
