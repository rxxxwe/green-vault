import { SideBar } from "../../components/SideBar/SiderBar";
import { ComponentDocument } from "./main/ComponentDocument";
import s from "./Document.module.scss";
type Props = {};

export const Documents = (props: Props) => {
  return (
    <div className={s.document}>
      <SideBar />
      <ComponentDocument />
    </div>
  );
};
