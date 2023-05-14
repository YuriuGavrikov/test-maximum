import React, { useEffect, useRef } from "react";
import styles from "./style/Swiper.module.scss";
import { register } from "swiper/element/bundle";
register();
export default function Swiper(props) {
	const swiperElRef = useRef(null);

	useEffect(() => {
		swiperElRef.current.addEventListener("slidechange", (e) => {});
	}, []);
	return (
		<swiper-container ref={swiperElRef} slides-per-view="1.3">
			{props.car.photobank.imgs.map((image) => (
				<swiper-slide key={image._id}>
					<img className={styles.imageItem} src={image.url} alt="img" />
				</swiper-slide>
			))}
		</swiper-container>
	);
}
