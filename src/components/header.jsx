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
    <div className="flex flex-col md:flex-row mx-auto max-w-3xl px-5 mb-10 items-center border-b border-slate-200 dark:border-slate-700 pb-8 pt-4">
      {/* Imagen arriba en dispositivos móviles (flex-col en dispositivos pequeños) */}
      <div className="mx-auto mb-6 md:mb-0 w-36 h-36 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-slate-100 dark:border-slate-800 shadow-xl dark:shadow-blue-900/20 md:order-1 transition-transform duration-300 hover:scale-[1.02]">
        {/* Utiliza la clase 'object-cover' para hacer la imagen responsive */}
        <img className="w-full h-full object-cover" src={profilePic} alt="Orlando Castaneda" />
      </div>
      <div className="flex flex-col mx-auto md:mx-0 max-w-md md:max-w-full md:ml-10 md:order-2">
        <h1 className="font-extrabold tracking-tight text-4xl md:text-5xl text-slate-900 dark:text-white mb-3">
          Orlando Castaneda
        </h1>
        <h2 className="font-medium leading-relaxed text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6">
          Software Engineer from Universidad Autónoma de Baja California.
        </h2>
        <div>
          <button
            className="flex font-semibold items-center px-6 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white shadow-md hover:shadow-lg transition-all duration-200"
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

