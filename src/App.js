import Default from './components/Default/Default.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import Orders from './components/Orders/Orders.jsx';
import CreateOrder from './components/CreateOrder/CreateOrder.jsx';
import {Routes, Route} from 'react-router-dom';

const App = (props) => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Default user={props.state.user} />} />
				<Route path="/orders" element={<Orders user={props.state.user} />} />
				<Route path="/create" element={<CreateOrder createPage={props.state.createPage} user={props.state.user.session} />} />
				<Route path="/register" element={<Register registerPage={props.state.registerPage} user={props.state.user.session} />} />
				<Route path="/login" element={<Login loginPage={props.state.loginPage} user={props.state.user.session} />} />
			</Routes>
		</div>
	);
};

export default App;