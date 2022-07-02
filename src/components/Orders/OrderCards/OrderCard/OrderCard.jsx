import style from './OrderCard.module.css';
import logo from './img/logo.svg';
import StatusCard from './StatusCard/StatusCard.jsx';

const OrderCard = props => {
	return (
		<div className={style.orderCard}>
			<img src={logo} alt="" />
			<h4>Заказ #{props.id}</h4>
			<h4>{props.category}</h4>
			<StatusCard status={props.status} />
		</div>
	);
};

export default OrderCard;