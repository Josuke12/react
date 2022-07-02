import style from './SocialsList.module.css';
import Social from '../../../../globals/Social/Social.jsx';

const SocialsList = () => {
	return (
		<div className={style.socials}>
			<Social social="vk" />
			<Social social="twitter" />
			<Social social="facebook" />
		</div>
	);
};

export default SocialsList;