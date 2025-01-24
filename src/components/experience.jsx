import { MdOutlineWork } from "react-icons/md";
import PropTypes from "prop-types";
const ExperienceItem = ({ title, date, description, tasks }) => {
    return (
      <div>
        <h2 className="font-black text-xl">{title}</h2>
        <h3 className="font-light text-md text-slate-600 dark:text-slate-500 my-2">{date}</h3>
        <p className="font-semibold my-2">{description}</p>
        <ul className="my-2">
          {tasks.map((task, index) => (
            <li className="my-1" key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  ExperienceItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

function Experience () {
    return (
        <div>
            <div className="flex mx-auto max-w-3xl px-5 mb-5 items-center">
                <MdOutlineWork className="text-slate-700 dark:text-slate-400 mr-2" size={30}></MdOutlineWork><h1 className="font-bold text-2xl text-slate-800 dark:text-slate-200"
                >Experience</h1>
            </div>
            <div className="flex mx-auto max-w-3xl px-5 mb-5 flex-col space-y-4 text-slate-800 dark:text-slate-200">
                <ExperienceItem 
                    title="Infotek - FullStack Developer"
                    date="From March 2024 to Present"
                    description="An Android application designed to streamline marketplace management processes. The project focuses on enabling efficient inventory tracking and robust product management."
                    tasks={[
                        "• Created and maintained RESTful APIs using ASP.NET Core 8 and Entity Framework, ensuring a scalable and secure backend architecture.",
                        "• Developed interactive UI components using Kotlin and Jetpack Compose, enhancing the user experience with smooth interactions and a modern design.",
                        "• Collaborated with stakeholders to analyze use cases and requirements, ensuring alignment between business objectives and the application mobile.",
                    ]}></ExperienceItem>
                    <ExperienceItem 
                    title="OmniTEK Dev - FrontEnd Landing Page"
                    date="From June 2023 to December 2023"
                    description="The project consisted of the design and development of a website with the objective of improving reach and communication with clients."
                    tasks={[
                        "• Design and development of reusable components with React for different sections of the application.",
                        "• Integration of the Chakra UI framework into the project to build and style components.",
                        "• Using the Remix development framework to create modern React-based web applications.",
                    ]}></ExperienceItem>
            </div>
        </div>
    )
}
export default Experience;