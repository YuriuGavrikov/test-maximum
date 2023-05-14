import React from "react";
import styles from "./style/Select.module.scss";

export default function Select(props) {
	return (
		<div>
			<select
				name="Models"
				className={styles.select}
				defaultValue={"selected"}
				onChange={(e) => props.changeModel(e.target.value)}
			>
				<option value="selected" disabled>
					Марка
				</option>
				<option value="Audi">Audi</option>
				<option value="Mitsubishi">Mitsubishi</option>
				<option value="Volkswagen">Volkswagen</option>
				<option value="Kia">Kia</option>
				<option value="Honda">Honda</option>
				<option value="Hyundai">Hyundai</option>
			</select>
		</div>
	);
}
