import style from './Card.module.css';
import Title from './Title/Title.jsx';
import Inputs from './Inputs/Inputs.jsx';
import RegButton from './LoginButton/LoginButton.jsx';

const Card = (props) => {
	return (
		<div className={style.card}>
			<Title />
			<Inputs loginPage={props.loginPage}/>
			<RegButton />
		</div>
	);
};

export default Card;