import React from "react";
import styles from "./HeatMap.module.css";
import moment from "moment";
import { MONTHS } from "./constant";

const dates = moment().year(2022).month(2);
console.log(dates);

const HeatMap = () => {
  return (
    <div className={styles.HeatMapContainer}>
      {/* <HeatMapYear /> */}
      {MONTHS.map((item, idx) => (
        <HeatMapMonth key={idx} month={item} days={31} />
      ))}
    </div>
  );
};

const HeatMapYearSelector = () => {
  return <div></div>;
};

const HeatMapYear = () => {
  return <div>2022</div>;
};

const HeatMapMonth = ({ month, days }: { month: string; days: number }) => {
  const getDaysGrid = () => {
    let arr = [];
    for (let i = 0; i < 7; i++) arr.push(<HeatMapDay />);
    return arr;
  };
  return (
    <div className={styles.HeatMapMonthContainer}>
      <p>{month}</p>
      <div className={styles.HeatDayRow}>
        <span>{getDaysGrid()}</span>
        <span>{getDaysGrid()}</span>
        <span>{getDaysGrid()}</span>
        <span>{getDaysGrid()}</span>
      </div>
    </div>
  );
};

const HeatMapDay = () => {
  return <div className={styles.HeatMapBox}></div>;
};

export default HeatMap;
