import styles from "./styles/page.module.css";
import { Link } from "react-router-dom";
import { ROUTE_BOOKING } from "../utils/constant";

const HomePage = () => {
  return (
    <>
      <h1 className={styles.title}>Тестовое задание для стажировки в Vk</h1>
      <Link to={ROUTE_BOOKING}>
        <button className={styles.button}>Начать бронирование</button>
      </Link>
    </>
  );
};

export default HomePage;
