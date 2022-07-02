import style from './Inputs.module.css';
import React from 'react';

const Inputs = (props) => {

	let nameElement = React.createRef();
	let loginElement = React.createRef();
	let passwordElement = React.createRef();

	const onChangeName = () => {
		const text = nameElement.current.value;
		props.registerPage.updateRegName(text);
	}

	const onChangeLogin = () => {
		const text = loginElement.current.value;
		props.registerPage.updateRegLogin(text);
	}

	const onChangePassword = () => {
		const text = passwordElement.current.value;
		props.registerPage.updateRegPassword(text);
	}


	return (
		<div className={style.inputs}>
			<input onChange={onChangeName} ref={nameElement} type="text" id="name" placeholder="Имя" name="name" value={props.registerPage.registerName} />
			<input onChange={onChangeLogin} ref={loginElement} type="text" id="login" placeholder="Логин" name="login" value={props.registerPage.registerLogin} />
			<input onChange={onChangePassword} ref={passwordElement} type="password" id="password" placeholder="Пароль" name="password" value={props.registerPage.registerPassword} />
		</div>
	);
};

export default Inputs;