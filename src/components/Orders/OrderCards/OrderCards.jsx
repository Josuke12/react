import style from './OrderCards.module.css';
import OrderCard from './OrderCard/OrderCard.jsx';
import OrderButton from './OrderButton/OrderButton.jsx';

const OrderCards = (props) => {
	const orders = props.orders.map(order => <OrderCard id={order.id} category={order.category} status={order.status} />);
	return (
		<div className={style.orderCards}>
			{orders}
			<OrderButton />
		</div>
	);
};

export default OrderCards;