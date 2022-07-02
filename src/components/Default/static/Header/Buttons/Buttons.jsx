import Button from '../../../../globals/Button/Button.jsx';
import style from './Buttons.module.css';

const Buttons = (props) => {
	if(props.user.session.auth === true) {
		return (
			<div className={style.buttons}>
				<Button text={props.user.info.login} page="/orders" button="user"/>
			</div>
		);
	}
	return (
		<div className={style.buttons}>
			<Button text="Войти" page="login" button="contained"/>
			<span>или</span>
			<Button text="Зарегистрироваться" page="register" button="outlined"/>
		</div>
	);
};

export default Buttons;