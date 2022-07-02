import style from './Inputs.module.css';
import React from 'react';

const Inputs = (props) => {

	let loginElement = React.createRef();
	let passwordElement = React.createRef();

	const onChangeLogin = () => {
		const text = loginElement.current.value;
		props.loginPage.updateLogLogin(text);
	}

	const onChangePassword = () => {
		const text = passwordElement.current.value;
		props.loginPage.updateLogPassword(text);
	}


	return (
		<div className={style.inputs}>
			<input onChange={onChangeLogin} ref={loginElement} type="text" placeholder="Логин" value={props.loginPage.loginLogin} />
			<input onChange={onChangePassword} ref={passwordElement} type="password" placeholder="Пароль" value={props.loginPage.loginPassword} />
		</div>
	);
};

export default Inputs;