import {renderDOM} from '../index.js';

let state = {
	registerPage: {
		registerName: '',
		registerLogin: '',
		registerPassword: '',
		updateRegName(name) {
			state.registerPage.registerName = name;
			renderDOM();
		},
		updateRegLogin(login) {
			state.registerPage.registerLogin = login;
			renderDOM();
		},
		updateRegPassword(password) {
			state.registerPage.registerPassword = password;
			renderDOM();
		}
	},
	loginPage: {
		loginLogin: '',
		loginPassword: '',
		updateLogLogin(login) {
			state.loginPage.loginLogin = login;
			renderDOM();
		},
		updateLogPassword(password) {
			state.loginPage.loginPassword = password;
			renderDOM();
		}
	},
	user: {
		info: {
			login: ""
		},
		session: {
			auth: false
		},
		orders: [
			{id: 1, category: "Кондитерские изделия", status: "accepted"},
			{id: 2, category: "Швейные изделия", status: "declined"},
			{id: 3, category: "Другое", status: "watching"}
		]
	},
	createPage: {
		type: '',
		description: '',
		updateType(type) {
			state.createPage.type = type;
			renderDOM();
		},
		updateDescription(description) {
			state.createPage.description = description;
			renderDOM();
		}
	}
};

export default state;