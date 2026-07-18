import React from "react";
import styles from "./ResultBox.module.css";
import catImage from "../../assets/cat.jpg";

const ResultBox = ({ student }) => {
  return (
    <>
      <div className={styles.accordian}>
        <input
          id={`acc${student.rollNo}`}
          type="checkbox"
          name="example_accordian"
          className={styles.accordian__input}
        />

        <label
          htmlFor={`acc${student.rollNo}`}
          className={styles.accordian__label}
        >
          <div className={styles.student}>
            <img src={catImage} className={styles.userImage} alt="error" />
            <div>
              <h2 className={styles.username}>{student.name}</h2>
              <p className={styles.rollno}>{student.rollNo}</p>
            </div>
          </div>
        </label>

        <div className={styles.accordian__content}>
          <div className={styles.sgpatable}>
            <table>
              <thead>
                <tr>
                  <th>semester</th>
                  <th>SGPA</th>
                </tr>
              </thead>
              <tbody>
                {student.sgpa.map((value, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultBox;
