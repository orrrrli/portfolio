import { MdOutlineWork } from "react-icons/md";
import PropTypes from "prop-types";
const ExperienceItem = ({ title, date, description, tasks }) => {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300">
      <h2 className="font-bold text-xl text-slate-900 dark:text-white">{title}</h2>
      <h3 className="font-medium text-sm text-slate-500 dark:text-slate-400 mt-1 mb-3">{date}</h3>
      <p className="font-normal text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li className="flex items-start text-sm text-slate-600 dark:text-slate-400 leading-relaxed" key={index}>
            <span className="mr-3 text-slate-400 dark:text-slate-500 mt-0.5">•</span>
            <span>{task.replace('• ', '')}</span>
          </li>
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

function Experience() {
  return (
    <div className="mb-12">
      <div className="flex mx-auto max-w-3xl px-5 mb-6 items-center">
        <MdOutlineWork className="text-slate-700 dark:text-slate-400 mr-3" size={28}></MdOutlineWork>
        <h1 className="font-extrabold tracking-tight text-3xl text-slate-900 dark:text-white"
        >Experience</h1>
      </div>
      <div className="flex mx-auto max-w-3xl px-5 flex-col space-y-6">
        <ExperienceItem
          title="Infotek - FullStack Developer"
          date="March 2024 — Present"
          description="An Android application designed to streamline marketplace management processes. The project focuses on enabling efficient inventory tracking and robust product management."
          tasks={[
            "Created and maintained RESTful APIs using ASP.NET Core 8 and Entity Framework, ensuring a scalable and secure backend architecture.",
            "Developed interactive UI components using Kotlin and Jetpack Compose, enhancing the user experience with smooth interactions and a modern design.",
            "Collaborated with stakeholders to analyze use cases and requirements, ensuring alignment between business objectives and the application mobile.",
          ]}></ExperienceItem>
        <ExperienceItem
          title="OmniTEK Dev - FrontEnd Landing Page"
          date="February 2023 — August 2023"
          description="The project consisted of the design and development of a website with the objective of improving reach and communication with clients."
          tasks={[
            "Design and development of reusable components following the Atomic Design methodology with React for different sections of the application.",
            "Integration of the Chakra UI framework into the project to build and style components.",
            "Using the Remix development framework to create modern React-based web applications.",
          ]}></ExperienceItem>
      </div>
    </div>
  )
}
export default Experience;