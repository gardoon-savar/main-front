import React from "react";

import TicketIcon from "../ticketIcon";
import icons from "../../../assets/icons/icons";

import styles from "./styles/index.module.scss";

const InnerNavbar = () => {
  return (
    <div className={styles.main}>
      <ul className={styles.innerNavbar}>
        <TicketIcon isActive={false} title="هواپیما" icon={icons.lightColorAirplain} />
        <TicketIcon isActive={false} title="قطار" icon={icons.lightColorTrain} />
        <TicketIcon isActive={false} title="اتوبوس" icon={icons.lightColorBus} />
        <TicketIcon isActive={true} title="تور" icon={icons.tour} />
        <TicketIcon isActive={true} title="هتل" icon={icons.hotel} />
      </ul>
    </div>
  );
};

export default InnerNavbar;
