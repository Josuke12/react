import style from './Title.module.css';
import logo from './img/logo.svg';
import {NavLink} from 'react-router-dom';

const Title = () => {
	return (
		<NavLink to="/" className={style.title}>
			<img src={logo} alt="" />
			<h1>Регистрация</h1>
		</NavLink>
	);
};

export default Title;