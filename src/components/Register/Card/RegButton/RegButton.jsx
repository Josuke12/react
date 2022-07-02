import style from './RegButton.module.css';

const RegButton = (props) => {
	return <button onClick={props.registerHander} className={style.regButton}>Создать аккаунт</button>
}

export default RegButton;