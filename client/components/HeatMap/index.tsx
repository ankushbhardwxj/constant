import React from "react";
import styles from "./HeatMap.module.css";

const HeatMap = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className={styles.HeatMapContainer}>
      {months.map((item, idx) => (
        <HeatMapMonth key={idx} month={item} days={31} />
      ))}
    </div>
  );
};

const HeatMapYearSelector = () => {
  return <div></div>;
};

const HeatMapYear = () => {
  return <div></div>;
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
