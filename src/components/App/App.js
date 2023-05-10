import styles from "./app.module.css";
import HomePage from "../../pages/home.js";
import BookingPage from "../../pages/booking";
import { Routes, Route } from "react-router-dom";
import { ROUTE_HOME, ROUTE_BOOKING } from "../../utils/constant";

function App() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path={ROUTE_HOME} element={<HomePage />} />
        <Route path={ROUTE_BOOKING} element={<BookingPage />} />
      </Routes>
    </main>
  );
}

export default App;
