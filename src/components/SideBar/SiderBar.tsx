//REACT
import React from "react";
//COMPONENT
import { useTheme } from "../../hooks/UseTheme";
// import { Theme } from "../Theme/ChangeTheme";
//IMG
import GlobalSvgSelector from "../../assets/global/GlobalSvgSelector";
//CSS
import s from "./SideBar.module.scss";

interface Props {
  className?: string;
}

export const SideBar = (props: Props) => {
  const { toggleTheme } = useTheme();
  const [pagesItemIcon, setPagesItemIcon] = React.useState([
    {
      icon: <GlobalSvgSelector id="overview" />,
    },
    {
      icon: <GlobalSvgSelector id="depozit" />,
    },
    {
      icon: <GlobalSvgSelector id="Withdrawal" />,
    },
    {
      icon: <GlobalSvgSelector id="notifications" />,
    },
    {
      icon: <GlobalSvgSelector id="documents" />,
    },
    {
      icon: <GlobalSvgSelector id="contactUs" />,
    },
  ]);

  const [pagesItemLabel, setPagesItemLabel] = React.useState([
    {
      label: "Overview",
    },
    {
      label: "Depozit",
    },
    {
      label: "Withdrawal",
    },
    {
      label: "Notifications",
    },
    {
      label: "Documents",
    },
    {
      label: "Contact Us",
    },
  ]);

  return (
    <div className={s.container}>
      <div className={s.sidebar__top}>
        <div className={s.logo}>
          <a>
            <GlobalSvgSelector id="GreenVault" />
          </a>
        </div>
        <div className={s.sidebar_container__pages}>
          <nav className={s.sidebar_nav}>
            <ul>
              <div className={s.pages_item_icon}>
                {pagesItemIcon.map((item, index) => (
                  <li key={index}>{item.icon}</li>
                ))}
              </div>
              <div className={s.pages_item_label}>
                {pagesItemLabel.map((item, index) => (
                  <li key={index}>{item.label}</li>
                ))}
              </div>
            </ul>
          </nav>
        </div>
      </div>
      <div className={s.sidebar_bottom}>
        <div className={s.change_lang}>
          <div className={s.change_lang_item}>EN</div>
          <div className={s.change_lang_item}>EUR</div>
        </div>
        <div className={s.change_theme}>
          <div className={s.change_theme_item}>
            <a onClick={toggleTheme}>Dark </a>
          </div>
          <div className={s.change_theme_item}>
            <a onClick={toggleTheme}>Light</a>
          </div>
        </div>
        <div className={s.confidentiality}>
          <div>&copy; GreenVault Finance Limited</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
