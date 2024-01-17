import { FaLaptopCode } from "react-icons/fa6";
import { IoMdLink } from "react-icons/io";

import PropTypes from "prop-types";

const ProjectItem = ({ title, description, technologies, buttons,imgPath }) => {
    const renderTechnologies = () => {
      return technologies.map((tech, index) => {
        const iconPath = `./src/components/icons/${tech.toLowerCase()}.svg`;
  
        return (
          <img
            key={index}
            src={iconPath}
            alt={`${tech} icon`}
            className="mr-2"
            style={{ width: '34px', height: '34px' }}
          />
        );
      });
    };
  
    return (
      <div className="grid grid-flow-col auto-cols-max mx-auto max-w-3xl px-5 mb-2 flex-col gap-2">
        <div>
          <img src={imgPath} alt="imagen del proyecto" className="rounded-lg" width={370} />
        </div>
        <div className="flex mx-auto max-w-sm px-5 mb-5 flex-col">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="font-semibold">{description}</p>
          <div className="flex px-2 my-2">{renderTechnologies()}</div>
          <div className="grid grid-flow-col auto-cols-max px-2 my-2">
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
    
function Projects () {
    return (
        <div>
            <div className="flex mx-auto max-w-3xl px-5 mb-5 items-center">
                <FaLaptopCode className="text-slate-700 dark:text-slate-400 mr-2" size={30}></FaLaptopCode><h1 className="font-black text-2xl text-slate-800 dark:text-slate-200"
                >Projects</h1>
            </div>
            <div className="text-slate-800 dark:text-slate-200">
                <ProjectItem title="Devine Transport Landing Page"
                description="A landing page for a transportation company."
                imgPath="/src/img/devine1.png"
                technologies={['remix','react','chakra-ui',]}
                buttons={[
                    {label: 'Live', url: 'https://www.devinetransports.com/'},
                
                ]} />

                <ProjectItem title="Ventas360" 
                description="A Full-Stack project to keep track of income/expenses, adaptable for any type of business."
                imgPath="/src/img/controldeventas.png"
                technologies={['vue','bootstrap','swagger','sql-server']}
                buttons={[
                    {label: 'Backend', url: 'https://github.com/orrrrli/BackEndControlDeVentas'},
                    {label: 'Frontend', url: 'https://github.com/orrrrli/ControlDeVentas'}
                ]} />
            </div>
        </div>
    )
}
export default Projects;