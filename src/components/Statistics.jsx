import css from "./Statistics.module.css";
import { useState, useEffect } from "react";

const Statistics = ({ contacts }) => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem("visitorCount")) || 0;
    setVisitorCount(currentCount + 1);
    localStorage.setItem("visitorCount", currentCount + 1);
  }, []);

  return (
    <div className={css.statistics}>
      <h2 className={css.title}>Statistics</h2>
      <ul className={css.statList}>
        <li className={css.statItem}>
          Total Contacts:{" "}
          <span className={css.statValue}>{contacts.length}</span>
        </li>
        <li className={css.statItem}>
          Page Views: <span className={css.statValue}>{visitorCount}</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
