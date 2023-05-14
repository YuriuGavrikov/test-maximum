import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";
import Select from "./Select";

import styles from "./style/App.module.scss";

function App() {
	const [cars, setCars] = useState(null);

	useEffect(() => {
		const apiUrl = `https://maximum.expert/api/stock-test?brand=Audi`;
		axios.get(apiUrl).then((resp) => {
			const Products = resp.data;
			setCars(Products);
		});
	}, [setCars]);

	const changeModel = (curentModel) => {
		const apiUrl = `https://maximum.expert/api/stock-test?brand=${curentModel}`;
		axios.get(apiUrl).then((resp) => {
			const Products = resp.data;
			setCars(Products);
		});
	};

	console.log(cars);

	return (
		<div className={styles.app}>
			<Select changeModel={changeModel} />
			<Card cars={cars} />
		</div>
	);
}

export default App;
