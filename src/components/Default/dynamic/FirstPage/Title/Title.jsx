import style from './Title.module.css';
import ButtonsGroup from './ButtonsGroup/ButtonsGroup.jsx';

const Title = () => {
	return (
		<div className={style.title}>
			<h1>ФКУ КП-14 УФСИН РОССИИ ПО РЕСПУБЛИКИ МОРДОВИЯ</h1>
			<p>Коммерческий дочерний проект колонии для предоставления возможности оформлять заказы онлайн</p>
			<ButtonsGroup />
		</div>
	);
};

export default Title;