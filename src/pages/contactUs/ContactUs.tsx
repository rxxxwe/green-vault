import React from "react";
import SideBar from "../../components/SideBar/SiderBar";
import { ComponentContactUs } from "./main/ComponentContactUs";
import s from "./ContactUs.module.scss";
interface Props {}

export const ContactUs = (props: Props) => {
  return (
    <div className={s.contact}>
      <SideBar />
      <ComponentContactUs />
    </div>
  );
};
