import { HiOutlineMail } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

function Email() {
  const email = "castaneda.kevin@uabc.edu.mx";

  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      <div className="flex items-center mb-5">
        <HiOutlineMail className="text-slate-700 dark:text-slate-400 mr-2" size={30} />
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-300">Email</h1>
      </div>
      <div className="flex items-center">
        <input
          readOnly
          value={email}
          className="w-10/12 dark:rounded dark:bg-gray-700/35 focus:outline-none
          font-semibold text-slate-700 bg-slate-300 rounded dark:text-slate-200 py-3 px-4 mr-4 h-10"
        />
        <a href={`mailto:${email}`}>
          <IoSend className="text-slate-700 dark:text-slate-400" size={18} />
        </a>
      </div>
    </div>
  );
}

export default Email;
