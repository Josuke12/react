import Button from '../../../../../globals/Button/Button.jsx';
import style from './ButtonsGroup.module.css';

const ButtonsGroup = () => {
	return (
		<div className={style.buttons}>
			<Button button="contained" page="create" text="Сделать заказ" />
			<Button button="blue" page="#works" text="Наши цеха" />
		</div>
	);
};

export default ButtonsGroup;