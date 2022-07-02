import style from './Register.module.css';
import Card from './Card/Card.jsx';
import {Navigate} from 'react-router-dom';

const Register = (props) => {
	if(props.user.auth === true) return <Navigate to="/" />
	return (
		<div className={style.register}>
			<Card registerPage={props.registerPage}/>
		</div>
	);
};

export default Register;