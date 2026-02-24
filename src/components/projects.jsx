import { FaLaptopCode } from "react-icons/fa6";
import { IoMdLink } from "react-icons/io";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";

const ProjectItem = ({
  title,
  description,
  techDescription,
  technologies,
  buttons,
  imgPath,
  imgClassName,
}) => {
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
            <div>
              <h2>{tech}</h2>
            </div>
          </Tooltip>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 mx-auto max-w-3xl px-5 mb-10 py-2 border-b border-slate-200 dark:border-slate-700 last:border-0">
      {/* Este div es para agrupar los componentes que voy a renderizar en el funcion de react*/}
      <div className="rounded-lg w-full sm:w-72 shrink-0 overflow-hidden">
        <img
          src={imgPath}
          alt="imagen del proyecto"
          className={imgClassName || "w-full h-auto object-contain"}
        />
      </div>
      <div className="flex-1 min-w-0 mt-0">
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="font-semibold text-sm">{description}</p>
        {techDescription && (
          <ul className="mt-2 mb-1 space-y-1">
            {techDescription.map((item, index) => (
              <li key={index} className="flex items-start text-xs">
                <span className="mr-2 mt-0.5 text-slate-500 dark:text-slate-400">
                  ▸
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
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
  techDescription: PropTypes.arrayOf(PropTypes.string),
  imgPath: PropTypes.string.isRequired,
  imgClassName: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

ProjectItem.defaultProps = {
  techDescription: null,
  imgClassName: null,
};

function Projects() {
  return (
    <div>
      <div className="flex flex-col md:flex-row mx-auto max-w-3xl px-5 mb-5">
        {" "}
        {/* Este div es para el titulo */}
        <FaLaptopCode
          className="text-slate-700 dark:text-slate-400 mr-2"
          size={30}
        ></FaLaptopCode>
        <h1 className="font-black text-2xl text-slate-800 dark:text-slate-200">
          Projects
        </h1>
      </div>
      <div>
        <div className="x-5 mb-5 dark:text-slate-300 text-slate-700">
          {" "}
          {/* Este div me ayuda a modificar el full screen */}
          <ProjectItem
            title="Services Finder"
            description="A Full-Stack project to find services from freelancers in your area."
            techDescription={[
              "Real-time messaging between clients and freelancers using WebSockets",
              "Quote approval system — clients can review, accept, or reject proposals",
              "RESTful API with Express and MongoDB for service and user management",
            ]}
            imgPath="/servicesfinder.png"
            imgClassName="w-full h-48 object-cover object-center"
            technologies={["react", "tailwind", "express", "mongodb"]}
            buttons={[]}
          />
          <ProjectItem
            title="Appointment Scheduling App"
            description="A mobile app to schedule appointments with a doctor."
            techDescription={[
              "Google Calendar API integration to display and sync appointments in real time",
              "C# RESTful backend handling scheduling logic, availability, and patient data",
              "PayPal payment integration for secure appointment booking and billing",
            ]}
            imgPath="/fastbooking.png"
            technologies={["react", "tailwind", "csharp", "mysql"]}
            buttons={[
              {
                label: "FrontEnd",
                url: "https://github.com/Ericucho31/FastBooking",
              },
            ]}
          />
          <ProjectItem
            title="Medical Landing Page"
            description="A page to show the services of a doctor and his information."
            techDescription={[
              "Dynamic content rendering with React components for services and specialties",
              "Responsive layout optimized for both desktop and mobile patients",
              "Fast load times with Vite build optimization and asset bundling",
            ]}
            imgPath="/dr.png"
            technologies={["react", "tailwind", "vite"]}
            buttons={[{ label: "Live", url: "https://docramsesv.vercel.app/" }]}
          />
          <ProjectItem
            title="Devine Transport Landing Page"
            description="A landing page for a transportation company."
            techDescription={[
              "Contact form with automated email sender — notifies both the client and the company",
              "Server-side rendering with Remix for fast page loads and SEO optimization",
              "Reusable Chakra UI component system for consistent design across sections",
            ]}
            imgPath="/devine1.png"
            technologies={["remix", "react", "chakra"]}
            buttons={[
              { label: "Live", url: "https://www.devinetransports.com/" },
            ]}
          />
          <ProjectItem
            title="Ventas360"
            description="A Full-Stack project to keep track of income/expenses, adaptable for any type of business."
            techDescription={[
              "RESTful API fully documented with Swagger for easy integration and testing",
              "SMS notification system to alert users on key financial transactions",
              "CRUD operations for sales, expenses, and product inventory management",
            ]}
            imgPath="controldeventas.png"
            technologies={["vue", "bootstrap", "swagger", "smss"]}
            buttons={[
              {
                label: "Backend",
                url: "https://github.com/orrrrli/BackEndControlDeVentas",
              },
              {
                label: "Frontend",
                url: "https://github.com/orrrrli/ControlDeVentas",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
export default Projects;
