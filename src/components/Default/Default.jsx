import Header from './static/Header/Header.jsx';
import Footer from './static/Footer/Footer.jsx';
import FirstPage from './dynamic/FirstPage/FirstPage.jsx';

const Default = (props) => {
	return (
		<div>
			<Header user={props.user}/>
			<FirstPage />
			<Footer />
		</div>
	);
};

export default Default;