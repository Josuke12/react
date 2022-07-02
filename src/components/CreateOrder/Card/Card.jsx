import style from './Card.module.css';
import Title from './Title/Title.jsx';
import Inputs from './Inputs/Inputs.jsx';
import CreateButton from './CreateButton/CreateButton.jsx';

const Card = (props) => {
	return (
		<div className={style.card}>
			<Title />
			<Inputs createPage={props.createPage}/>
			<CreateButton />
		</div>
	);
};

export default Card;