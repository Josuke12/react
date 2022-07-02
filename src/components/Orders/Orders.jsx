import style from './Orders.module.css';
import Header from '../Default/static/Header/Header.jsx';
import Footer from '../Default/static/Footer/Footer.jsx';
import OrderCards from './OrderCards/OrderCards.jsx';
import {Navigate} from 'react-router-dom';

const Orders = (props) => {
	if(props.user.session.auth === false) return <Navigate to="/" />
	return (
		<div className={style.orders}>
			<Header user={props.user}/>
			<div className={style.container}>
				<h1>Мои заказы</h1>
				<OrderCards orders={props.user.orders} />
			</div>
			<Footer />
		</div>
	);
};

export default Orders;