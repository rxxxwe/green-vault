import { Link } from "react-router-dom";
import s from "./ComponentDepozit.module.scss";
// import GlobalSvgSelector from "../../../assets/global/GlobalSvgSelector";

export const ComponentDepozit = () => {
  const [isOpenEmail, setIsOpenEmail] = React.useState<boolean>(false);
  const [isOpenWallet, setIsOpenWallet] = React.useState<boolean>(false);

  const toggleEmailDropdown = () => {
    setIsOpenEmail(!isOpenEmail);
    setIsOpenWallet(false);
  };

  const toggleWalletDropdown = () => {
    setIsOpenWallet(!isOpenWallet);
    setIsOpenEmail(false);
  };

  return;
};
