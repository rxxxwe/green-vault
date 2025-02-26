import { ComponentNotification } from "./main/ComponentNotification";
import { SideBar } from "../../components/SideBar/SiderBar";
//STYLE
import s from "./Notification.module.scss";
type Props = {};

export const Notification = (props: Props) => {
  return (
    <div className={s.notification}>
      <SideBar />
      <ComponentNotification />
    </div>
  );
};
