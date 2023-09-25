import React from "react";

import TicketIcon from "../ticketIcon";
import icons from "../../../assets/icons/icons";

import styles from "./styles/index.module.scss";

const InnerNavbar = () => {
  return (
    <div className={styles.main}>
      <ul className={styles.innerNavbar}>
        <TicketIcon isActive={true} title="هواپیما" icon={icons.airplane} />
        <TicketIcon isActive={false} title="قطار" icon={icons.lightColorTrain} />
        <TicketIcon isActive={false} title="اتوبوس" icon={icons.lightColorBus} />
        <TicketIcon isActive={false} title="تور" icon={icons.lightColorTour} />
        <TicketIcon isActive={false} title="هتل" icon={icons.lightColorHotel} />
      </ul>
    </div>
  );
};

export default InnerNavbar;
