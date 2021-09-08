import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const form = [
	{"link" : "../img/form.png", "value" : "../img/form.png"},
	{"link" : "../img/form2.png", "value" : "../img/form2.png"},
	{"link" : "../img/form3.png", "value" : "../img/form3.png"},
	{"link" : "../img/form4.png", "value" : "../img/form4.png"},
	{"link" : "../img/form5.png", "value" : "../img/form5.png"},
	{"link" : "../img/form6.png", "value" : "../img/form6.png"},
	{"link" : "../img/form7.png", "value" : "../img/form7.png"},
	{"link" : "../img/form8.png", "value" : "../img/form8.png"},
	{"link" : "../img/form9.png", "value" : "../img/form9.png"},
	{"link" : "../img/form10.png", "value" : "../img/form10.png"},
	{"link" : "../img/form11.png", "value" : "../img/form11.png"},
	{"link" : "../img/form1.png", "value" : "../img/form1.png"},
]
const logo = [
	{"link" : "../img/Club1.png", "value" : "../img/Club1.png"},
	{"link" :"../img/Club2.png", "value" : "../img/Club2.png"},
	{"link" : "../img/Club3.png", "value" : "../img/Club3.png"},
	{"link" : "../img/Club4.png", "value" : "../img/Club4.png"},
	{"link" : "../img/Club5.png", "value" : "../img/Club5.png"},
	{"link" : "../img/Club6.png", "value" : "../img/Club6.png"},
	{"link" : "../img/Club7.png", "value" : "../img/Club7.png"},
	{"link" : "../img/Club8.png", "value" : "../img/Club8.png"},
]
const nav = [
	{"link" : "/", "text" : "Home"},
	{"link" : "/game", "text" : "Game"},
	{"link" : "/transfer", "text" : "Transfer"},
	{"link" : "/composition", "text" : "Сomposition"},
	{"link" : "/buy", "text" : "Buy"},
	{"link" : "/creatingteam", "text" : "Create a team"},
	{"link" : "/registration", "text" : "Registration"},
]
ReactDOM.render(
	<React.StrictMode>
		<App form={form} logo={logo} nav={nav}/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
