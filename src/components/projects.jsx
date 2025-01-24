import { FaLaptopCode } from "react-icons/fa6";
import { IoMdLink } from "react-icons/io";
import PropTypes from "prop-types";
import { Tooltip } from 'react-tooltip';

const ProjectItem = ({ title, description, technologies, buttons, imgPath }) => {
  const renderTechnologies = () => {
    return technologies.map((tech, index) => {
      const iconPath = `/${tech.toLowerCase()}.svg`;

      return (
        <div key={tech} data-tooltip-id={`my-tooltip-${tech}`}>
          <img
            key={index}
            src={iconPath}
            alt={`${tech} icon`}
            className="mr-2"
            style={{ width: "34px", height: "34px" }}
          />
          <Tooltip id={`my-tooltip-${tech}`} className="dark:bg-gray-900">
            <div >
              <h2>{tech}</h2>
            </div>
          </Tooltip>
        </div>
      );
    });
  };

  return (
    <div className="mx-auto sm:flex sm:mx-auto lg:flex lg:mx-auto md:flex md:mx-auto max-w-3xl px-5 mb-2 py-2"> {/* Este div es para agrupar los componentes que voy a renderizar en el funcion de react*/}
      <img src={imgPath} alt="imagen del proyecto" className="rounded-lg w-96 mx-auto" />
      <div className="mx-auto max-w-sm px-4 my-5">
        <h2 className="font-bold text-xl py-2">{title}</h2>
        <p className="font-semibold text-sm">{description}</p>
        <div className="flex px-1 my-2">{renderTechnologies()}</div>
        <div className="grid grid-flow-col auto-cols-max px-1 py-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="flex text-xs font-semibold items-center px-2 py-2 mr-2 rounded bg-slate-200 hover:bg-slate-400 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              <IoMdLink className="mr-1" size={20} />
              <a href={button.url}>{button.label}</a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Projects() {
  return (
    <div>
      <div className="flex flex-col md:flex-row mx-auto max-w-3xl px-5 mb-5"> {/* Este div es para el titulo */}
        <FaLaptopCode className="text-slate-700 dark:text-slate-400 mr-2" size={30}></FaLaptopCode>
        <h1 className="font-black text-2xl text-slate-800 dark:text-slate-200">Projects</h1>
      </div>
      <div>
        <div className="x-5 mb-5 dark:text-slate-300 text-slate-700"> {/* Este div me ayuda a modificar el full screen */}
          <ProjectItem
            title="Services Finder"
            description="A Full-Stack project to find services from freelancers in your area."
            imgPath="/servicesfinder.png"
            technologies={["react", "tailwind", "express", "mongodb"]}
            buttons={[
              { label: "Live", url:"https://service-finder-chi.vercel.app/" }]}
          />
          <ProjectItem
            title="Appointment scheduling app"
            description="A mobile app to schedule appointments with a doctor."
            imgPath="/fastbooking.png"
            technologies={["react", "tailwind", "csharp", "mysql"]}
            buttons={[
              { label: "FrontEnd", url: "https://github.com/Ericucho31/FastBooking" }
            ]}
          />
          <ProjectItem
            title="Medical Landing Page "
            description="A page to show the services of a doctor and his information."
            imgPath="/dr.png"
            technologies={["react", "tailwind", "vite"]}
            buttons={[{ label: "Live", url: "https://docramsesv.vercel.app/"
            }]}
          />
          <ProjectItem
            title="Devine Transport Landing Page"
            description="A landing page for a transportation company."
            imgPath="/devine1.png"
            technologies={["remix", "react", "chakra"]}
            buttons={[{ label: "Live", url: "https://www.devinetransports.com/" }]}
          />

          <ProjectItem
            title="Ventas360"
            description="A Full-Stack project to keep track of income/expenses, adaptable for any type of business."
            imgPath="controldeventas.png"
            technologies={["vue", "bootstrap", "swagger", "smss"]}
            buttons={[
              { label: "Backend", url: "https://github.com/orrrrli/BackEndControlDeVentas" },
              { label: "Frontend", url: "https://github.com/orrrrli/ControlDeVentas" },
            ]}
          />
        </div>
      </div>
    </div>  
  );
}
export default Projects;
