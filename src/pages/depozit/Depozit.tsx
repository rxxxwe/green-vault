import { SideBar } from "../../components/SideBar/SiderBar";
import s from "./Depozit.module.scss";
import { ComponentDepozit } from "./main/ComponentDepozit";

export const Depozt = () => {
  return (
    <div className={s.depozit}>
      <SideBar />
      <ComponentDepozit />
    </div>
  );
};
