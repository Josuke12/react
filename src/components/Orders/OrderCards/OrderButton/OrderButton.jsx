import style from './OrderButton.module.css';
import Btn from './Btn/Btn.jsx';

const OrderButton = () => {
	return (
		<div className={style.orderButton}>
			<h4>Создание заказа</h4>
			<p>Для создания заказа нужно нажать на кнопку “Создать заказа”, а затем указать информацию о заказе.</p>
			<Btn />
		</div>
	);
};

export default OrderButton;