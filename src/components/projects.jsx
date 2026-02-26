import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { IoMdLink, IoMdClose } from "react-icons/io";
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
  onImageClick,
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
            className="mr-3 transition-transform hover:scale-110"
            style={{ width: "32px", height: "32px" }}
          />
          <Tooltip id={`my-tooltip-${tech}`} className="dark:bg-slate-900 rounded-md font-medium z-50">
            <div>
              <span>{tech.charAt(0).toUpperCase() + tech.slice(1)}</span>
            </div>
          </Tooltip>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-6 mx-auto max-w-3xl px-5 mb-8 p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 group">
      {/* Container for Image with Hover Effect - Made Clickable */}
      <div
        className="rounded-xl w-full md:w-1/3 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center relative cursor-pointer"
        onClick={() => onImageClick(imgPath)}
      >
        <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-xl flex items-center justify-center">
          <span className="text-white bg-slate-900/60 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            Click to expand
          </span>
        </div>
        <img
          src={imgPath}
          alt={`Screenshot of ${title} project`}
          className={imgClassName || "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 min-w-0 justify-between">
        <div>
          <h2 className="font-bold text-2xl text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h2>
          <p className="font-medium text-slate-700 dark:text-slate-300 mb-4">{description}</p>

          {techDescription && (
            <ul className="mb-5 space-y-2">
              {techDescription.map((item, index) => (
                <li key={index} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                  <span className="mr-3 text-slate-400 dark:text-slate-500 mt-0.5">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center mt-auto mb-5 gap-y-2">{renderTechnologies()}</div>

          <div className="flex flex-wrap gap-3">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 shadow-sm hover:shadow transition-all duration-200"
              >
                <IoMdLink className="mr-2" size={18} />
                {button.label}
              </a>
            ))}
          </div>
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
  onImageClick: PropTypes.func.isRequired,
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
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row mx-auto max-w-3xl px-5 mb-8 items-center md:items-start">
        <FaLaptopCode
          className="text-slate-700 dark:text-slate-400 mr-3"
          size={28}
        ></FaLaptopCode>
        <h1 className="font-extrabold tracking-tight text-3xl text-slate-900 dark:text-white">
          Projects
        </h1>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <ProjectItem
            title="Services Finder"
            description="A Full-Stack project to find services from freelancers in your area."
            techDescription={[
              "Real-time messaging between clients and freelancers using WebSockets",
              "Quote approval system — clients can review, accept, or reject proposals",
              "RESTful API with Express and MongoDB for service and user management",
            ]}
            imgPath="/servicesfinder.png"
            imgClassName="w-full h-48 md:h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            technologies={["react", "tailwind", "express", "mongodb"]}
            buttons={[]}
            onImageClick={setSelectedImage}
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
            onImageClick={setSelectedImage}
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
            onImageClick={setSelectedImage}
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
            onImageClick={setSelectedImage}
          />
          <ProjectItem
            title="Ventas360"
            description="A Full-Stack project to keep track of income/expenses, adaptable for any type of business."
            techDescription={[
              "RESTful API fully documented with Swagger for easy integration and testing",
              "SMS notification system to alert users on key financial transactions",
              "CRUD operations for sales, expenses, and product inventory management",
            ]}
            imgPath="/controldeventas.png"
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
            onImageClick={setSelectedImage}
          />
        </div>
      </div>

      {/* Full-screen Image Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 md:p-8 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 md:-right-10 text-slate-300 hover:text-white transition-colors bg-slate-800/80 hover:bg-slate-700 rounded-full p-2 backdrop-blur z-50 shadow-lg border border-slate-600"
              onClick={closeModal}
              title="Close image"
            >
              <IoMdClose size={28} />
            </button>
            <img
              src={selectedImage}
              alt="Full size project preview"
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-slate-700/50"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Projects;
