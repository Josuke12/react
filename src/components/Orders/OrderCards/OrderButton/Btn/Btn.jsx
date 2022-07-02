import style from './Btn.module.css';
import {NavLink} from 'react-router-dom';

const Btn = () => {
	return (
		<NavLink className={style.btn} to="/create">Создать заказ</NavLink>
	);
};

export default Btn;