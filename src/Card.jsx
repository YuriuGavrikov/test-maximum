import React from "react";
import styles from "./style/Card.module.scss";
import Swiper from "./Swiper";
import FadeLoader from "react-spinners/FadeLoader";

export default function Card(props) {
	return (
		<>
			{props.cars ? (
				<div className={styles.cardContainer}>
					{props.cars.list.map((car) => (
						<div key={car._id} className={styles.card}>
							<div className={styles.cardTitle}>
								<b>
									{`${car.feedData.brandName}
									${car.feedData.modelName}
									${car.feedData.equipmentVariantName} `}
								</b>
								<sup className={styles.cardTitleYear}>
									{car.feedData.modelYear}
								</sup>
							</div>
							<div className={styles.cardVin}>{car.feedData.vin}</div>

							<div className={styles.cardSwiper}>
								<Swiper car={car} />
							</div>
							<div className={styles.cardContainerInfo}>
								<div className={styles.cardInfo}>
									<div className={styles.cardInfoItem}>
										<div className={styles.cardInfoItemTitle}>
											ДВИГАТЕЛЬ
										</div>
										<div className={styles.cardInfoItemDescription}>
											{car.feedData.engine.engineName}
										</div>
									</div>
									<div className={styles.cardInfoItem}>
										<div className={styles.cardInfoItemTitle}>
											КПП
										</div>
										<div className={styles.cardInfoItemDescription}>
											{car.feedData.equipmentVariantTransmissionType}
										</div>
									</div>
									<div className={styles.cardInfoItem}>
										<div className={styles.cardInfoItemTitle}>
											ПРОБЕГ
										</div>
										<div className={styles.cardInfoItemDescription}>
											{`${parseInt(
												car.feedData.price
											).toLocaleString("ru-Ru")} км`}
										</div>
									</div>
									<div
										className={[
											styles.cardInfoItem,
											styles.mobileNone,
										].join(" ")}
									>
										<div className={styles.cardInfoItemTitle}>
											ЦВЕТ
										</div>
										<div className={styles.cardInfoItemDescription}>
											{car.feedData.colorFull}
										</div>
									</div>
									<div
										className={[
											styles.cardInfoItem,
											styles.mobileNone,
										].join(" ")}
									>
										<div className={styles.cardInfoItemTitle}>
											ПАКЕТЫ
										</div>
										<div className={styles.cardInfoItemDescription}>
											<div className={styles.cardOption}>
												<div className={styles.cardOptionText}>
													{car.feedData.baseOptions.map(
														(option) => (
															<span>{option.name}</span>
														)
													)}
												</div>
												{car.feedData.baseOptions.length ? (
													<div
														className={styles.cardOptionCount}
													>{`(+ еще ${car.feedData.baseOptions.length} пакета)`}</div>
												) : (
													"Пакетов нет"
												)}
											</div>
										</div>
									</div>
								</div>
								<div className={styles.cardFooter}>
									<div className={styles.cardFooterAllPrice}>
										<div className={styles.cardFooterPrice}>
											{`${parseInt(
												car.feedData.price
											).toLocaleString("ru-Ru")} `}
											<span>₽</span>
										</div>
										<div
											className={[
												styles.cardFooterPriceOption,
												styles.mobileNone,
											].join(" ")}
										>
											Доп. опции на
											<span
												className={styles.cardFooterPriceOptionNum}
											>
												{` ${parseInt(
													car.feedData.price
												).toLocaleString("ru-Ru")} `}
											</span>
											₽
										</div>
									</div>
									<button className={styles.cardFooterBtn}>
										КУПИТЬ
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className={styles.Loader}>
					<FadeLoader color="#757B80" />
				</div>
			)}
		</>
	);
}
