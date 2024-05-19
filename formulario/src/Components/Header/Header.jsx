import React from "react";
import Return from "../Return/Return";
import styles from "./Header.module.css";
import logo from "../img/logo-finansee.svg";

const Header = () => {
	return (
		<div className={styles.header}>
			<Return />
			<img src={logo} alt="Paytour" />
		</div>
	);
};

export default Header;
