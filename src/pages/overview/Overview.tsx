import SideBar from "../../components/SideBar/SiderBar";
import { ComponentOverview } from "./main/ComponentOverview";
import s from "./Overview.module.scss";
interface Props {}

export const Overview = (props: Props) => {
  return (
    <div className={s.overview}>
      <SideBar />
      <ComponentOverview />
    </div>
  );
};
