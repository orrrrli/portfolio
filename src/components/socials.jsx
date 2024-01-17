import { LuAtSign } from "react-icons/lu";
import PropTypes from "prop-types";

const SocialButton = ({ label, url,socialIcon }) => {
    const renderSocialIcons = () => {
        return socialIcon.map((socialIcon, index) => {
          const iconPath = `/${socialIcon.toLowerCase()}.svg`;
    
          return (
            <img
              key={index}
              src={iconPath}
              alt={`${socialIcon} icon`}
              className="mr-2"
              style={{ width: '34px', height: '34px' }}
            />
          );
        });
      };
    return (
      <button
        className="flex text-md font-semibold items-center px-4 py-4 mr-2 rounded-lg border-solid border-2 border-slate-400 hover:border-3
         dark:text-slate-100 dark:border-slate-600 dark:hover:border-slate-400"
      > {renderSocialIcons()}
        <a href={url}>{label}</a>
      </button>
    );
  }

SocialButton.propTypes = {
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    socialIcon: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

function Socials () {
  return (
    <div className="mx-auto max-w-3xl px-5">
        <div className="flex mx-auto max-w-3xl px-5 mb-5 items-center">
            <LuAtSign className="text-slate-700 dark:text-slate-400 mr-2" size={30}></LuAtSign>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-300">Socials</h1>
        </div>
        <div className="grid grid-flow-col auto-cols-max gap-2 mb-4">
            <SocialButton
                label="Linkedin"
                url="https://www.linkedin.com/in/castasan-orlando/"
                socialIcon={['linkedin']}
            />
            <SocialButton
                label="Github"
                url="https://github.com/orrrrli"
                socialIcon={['github']}
            />
            <SocialButton
                label="Hashnode"
                url="https://hashnode.com/@sheikk"
                socialIcon={['hashnode']}
            />

        </div>
    </div>
    )
}
export default Socials