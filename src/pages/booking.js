import styles from "./styles/page.module.css";
import React, { useMemo } from "react";
import { arrayNumber } from "../utils/utils";

const BookingPage = () => {
  const floorOptions = useMemo(() => {
    return arrayNumber(3, 27);
  }, []);

  const meetingRoomOptions = useMemo(() => {
    return arrayNumber(1, 10);
  }, []);

  return (
    <form className={styles.form}>
      <div className={styles.form_item}>
        <label className={styles.label} htmlFor="tower">
          Башня:
        </label>
        <select name="tower" id="tower" className={styles.input} required>
          <option value="">-- Выберите башню --</option>
          <option value="A">А</option>
          <option value="B">Б</option>
        </select>
      </div>
      <div className={styles.form_item}>
        <label className={styles.label} htmlFor="floor">
          Этаж:
        </label>
        <select name="floor" id="floor" className={styles.input} required>
          <option value="">-- Выберите этаж --</option>
          {floorOptions.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.form_item}>
        <label className={styles.label} htmlFor="meetingRoom">
          Переговорка:
        </label>
        <select
          name="meetingRoom"
          id="meetingRoom"
          className={styles.input}
          required
        >
          <option value="">-- Выберите переговорку --</option>
          {meetingRoomOptions.map((item) => {
            return (
              <option value={item} key={item}>
                #{item}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.form_item}>
        <label className={styles.label} htmlFor="startDate">
          Начало бронирования:
        </label>
        <input
          type="datetime-local"
          id="startDate"
          name="startDate"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.form_item}>
        <label className={styles.label} htmlFor="finishDate">
          Конец бронирования:
        </label>
        <input
          type="datetime-local"
          id="finishDate"
          name="finishDate"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.form_item}>
        <label className={styles.label} htmlFor="comment">
          Конец бронирования:
        </label>
        <textarea 
          type="textarea"
          id="comment"
          name="comment"
          className={`${styles.input} ${styles.input_textarea}`}
          required
        />
      </div>

      <button className={styles.button}>Забронировать</button>
    </form>
  );
};

export default BookingPage;
