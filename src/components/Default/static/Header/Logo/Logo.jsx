import style from './Logo.module.css';
import logo from '../img/logo.svg';

const Logo = () => {
	return (
		<div className={style.logo}>
			<img src={logo} alt="Логотип" />
			<h2>УФСИН</h2>
		</div>
	);
};

export default Logo;