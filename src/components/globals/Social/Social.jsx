import vk from './img/vk.svg';
import twitter from './img/twitter.svg';
import facebook from './img/facebook.svg';
import style from './Social.module.css';

const Social = (props) => {
	if(props.social === "vk") return <a href="https://vk.com/josuke12"><img className={style.icon} src={vk} alt="Вконтакте" /></a>
	else if(props.social === "twitter") return <a href="https://vk.com/josuke12"><img className={style.icon} src={twitter} alt="Твиттер" /></a>
	else if(props.social === "facebook") return <a href="https://vk.com/josuke12"><img className={style.icon} src={facebook} alt="Фейсбук" /></a>
};

export default Social;