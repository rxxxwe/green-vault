import SideBar from "../../components/SideBar/SiderBar";
import s from "./Deposit.module.scss";
import { ComponentDeposit } from "./main/ComponentDeposit";
interface Props {}

export const Deposit = (props: Props) => {
  return (
    <div className={s.deposit}>
      <SideBar />
      <ComponentDeposit />
    </div>
  );
};
