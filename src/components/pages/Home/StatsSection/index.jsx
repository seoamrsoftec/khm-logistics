"use client";
import { useEffect, useState } from "react";
import styles from "./StatsSection.module.css";
import Image from "next/image";

const StatsSection = () => {
  const [stats, setStats] = useState({ customers: 0, loads: 0, clients: 0 });

  useEffect(() => {
    let start = 0;
    const end = { customers: 99.9, loads: 3000, clients: 500 };
    const duration = 2500;
    const increment = 20;
    const step = duration / increment;

    const counter = setInterval(() => {
      start += 1;
      setStats({
        customers: Math.min((end.customers * start) / increment, end.customers),
        loads: Math.min((end.loads * start) / increment, end.loads),
        clients: Math.min((end.clients * start) / increment, end.clients),
      });
      if (start === increment) clearInterval(counter);
    }, step);
  }, []);

  return (
    <section className={styles.statsSection}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.smallText}>Number Talks</p>
          <h2 className={styles.title}>
            Top-Rated Drayage <br /> Trucking in the USA <br /> by{" "}
            <span>KHM Logistics</span>
          </h2>
          <button className={styles.button}>Get Our Story</button>
        </div>

        <div className={styles.right}>
          <div className={styles.statItem}>
            <Image
              src="/images/icons/satisfaction.svg"
              alt="Customer Icon"
              width={40}
              height={40}
            />
            <h3>{stats.customers.toFixed(1)}%</h3>
            <p>Satisfying Customers</p>
          </div>

          <div className={styles.statItem}>
            <Image
              src="/images/icons/shipment.svg"
              alt="Shipment Icon"
              width={40}
              height={40}
            />
            <h3>{Math.floor(stats.loads).toLocaleString()}+</h3>
            <p>Loads Shipped</p>
          </div>

          <div className={styles.statItem}>
            <Image
              src="/images/icons/clients.svg"
              alt="Happy Clients Icon"
              width={40}
              height={40}
            />
            <h3>{Math.floor(stats.clients)}+</h3>
            <p>Satisfaction & Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
