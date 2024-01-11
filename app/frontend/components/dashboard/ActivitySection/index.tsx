import React from "react";
import { Sale } from "../../../types/api";
import { Icon } from "../../base/Icon";
import { IconType } from "../../../enums/iconType";
import styles from "./styles.module.scss";

export type ActivityProps = {
  sales: Sale[];
}

export const ActivitySection = ({
  sales
}: ActivityProps): JSX.Element => {

  return (
    <div>
      <h2 className={styles.header}>Activity</h2>

      <div className={styles.stack}>
        {sales.map(sale => {
          return (
            <div key={sale.id} className={styles.listItem}>
              <Icon className={styles.icon} iconType={IconType.DollarOutline} />

              <span>New sale of <u>{sale.product_name}</u> for {sale.formatted_total_price}</span>

              <span className={styles.date}>{
                new Date(sale.created_at).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true
                })
              }
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
