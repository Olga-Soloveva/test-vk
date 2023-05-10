import styles from "./styles/page.module.css";
import React, { useMemo } from "react";
import { arrayNumber } from "../utils/utils";
import { useFormWithValidation } from "../hooks/useFormWithValidation";

const BookingPage = () => {
  const { values, setValues, handleChange, isValidForm, setIsValidForm } =
    useFormWithValidation();

  const floorOptions = useMemo(() => {
    return arrayNumber(3, 27);
  }, []);

  const meetingRoomOptions = useMemo(() => {
    return arrayNumber(1, 10);
  }, []);

  const handleChangeInput = (evt) => {
    handleChange(evt);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(values.startDate < values.finishDate)
    console.log(JSON.stringify(values));
  };

  const handleReset = (evt) => {
    evt.preventDefault();
    setValues({});
    setIsValidForm(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
      <div className={styles.form_item}>
        <label className={styles.label} htmlFor="tower">
          Башня:
        </label>
        <select
          name="tower"
          id="tower"
          value={values.tower || ""}
          onChange={handleChangeInput}
          className={styles.input}
          required
        >
          <option value="">-- Выберите башню --</option>
          <option value="A">А</option>
          <option value="B">Б</option>
        </select>
      </div>
      <div className={styles.form_item}>
        <label className={styles.label} htmlFor="floor">
          Этаж:
        </label>
        <select
          name="floor"
          id="floor"
          onChange={handleChangeInput}
          className={styles.input}
          value={values.floor || ""}
          required
        >
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
          value={values.meetingRoom || ""}
          onChange={handleChangeInput}
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
          value={values.startDate || ""}
          onChange={handleChangeInput}
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
          value={values.finishDate || ""}
          onChange={handleChangeInput}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.form_item}>
        <label className={styles.label} htmlFor="comment">
          Комментарий:
        </label>
        <textarea
          type="textarea"
          id="comment"
          name="comment"
          value={values.comment || ""}
          onChange={handleChangeInput}
          className={`${styles.input} ${styles.input_textarea}`}
        />
      </div>

      <button type="submit" className={styles.button} disabled={!isValidForm}>
        Забронировать
      </button>
      <button type="reset" className={styles.button_text}>
        Очистить форму
      </button>
    </form>
  );
};

export default BookingPage;
