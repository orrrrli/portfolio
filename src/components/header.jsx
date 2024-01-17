import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

function Header() {
  const handleDownloadResume = () => {
    // Coloca la URL correcta de tu archivo PDF
    const pdfUrl = "/src/components/documents/CV_OrlandoCastaneda.pdf";
    
    // Crea un elemento <a> para simular el clic y la descarga
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_OrlandoCastaneda.pdf";
    link.click();
  };

  return (
    <div className="grid grid-flow-col auto-cols-max mx-auto max-w-3xl px-5 mb-5 flex-col gap-2 border-b-2 border-slate-300 dark:border-slate-600">
      <div className="mx-auto max-w-3xl px-5 mb-5 dark:bg-slate-800">
        <img className="rounded-full h-40 w-30" src="profilepic.jpg" alt="Orlando Castaneda" />
      </div>
      <div className="flex mx-auto max-w-3xl px-5 mb-5 flex-col gap-2 dark:bg-slate-800 place-self-center">
        <h1 className="font-bold text-4xl text-slate-800 dark:text-slate-200">Orlando Castaneda </h1>
        <h2 className="font-bold text-xl text-slate-800 dark:text-slate-200">Software Engineer in the 7th grade. Constantly learning </h2>
        <div className="dark:bg-slate-800">
          <button
            className="flex font-semibold items-center px-4 py-2 rounded bg-slate-200 hover:bg-slate-400 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-900"
            onClick={handleDownloadResume}
          >
            <BsFillFileEarmarkPersonFill className="mr-2" size={18}></BsFillFileEarmarkPersonFill>
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
