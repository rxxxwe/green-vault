import { SideBar } from "../../components/SideBar/SiderBar";
import { ComponentOverview } from "./main/ComponentOverview";
import s from "./Overview.module.scss";

export const Overview = () => {
  return (
    <div className={s.overview}>
      <SideBar />
      <ComponentOverview />
    </div>
  );
};
