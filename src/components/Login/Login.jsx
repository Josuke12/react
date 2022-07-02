import style from './Login.module.css';
import Card from './Card/Card.jsx';

const Login = (props) => {
	return (
		<div className={style.login}>
			<Card loginPage={props.loginPage}/>
		</div>
	);
};

export default Login;