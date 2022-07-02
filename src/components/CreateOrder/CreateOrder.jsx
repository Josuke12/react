import style from './CreateOrder.module.css';
import Card from './Card/Card.jsx';

const CreateOrder = (props) => {
	return (
		<div className={style.createOrder}>
			<Card createPage={props.createPage}/>
		</div>
	);
};

export default CreateOrder;