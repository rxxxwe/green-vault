import SideBar from "../../components/SideBar/SiderBar";
import { ComponentOver } from "./ComponentOver";
import s from "./Overview.module.scss";
interface Props {}

export const Overview = (props: Props) => {
  return (
    <div className={s.overview}>
      <SideBar />
      <ComponentOver />
    </div>
  );
};
