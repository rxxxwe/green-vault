import { useState } from "react";
import s from "./ComponentContactUs.module.scss";
interface Props {}

const options = ["Option 1", "Option 2", "Option 3"];

export const ComponentContactUs = (props: Props) => {
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [isOpenWallet, setIsOpenWallet] = useState(false);

  const toggleEmailDropdown = () => {
    setIsOpenEmail(!isOpenEmail);
    setIsOpenWallet(false);
  };

  const toggleWalletDropdown = () => {
    setIsOpenWallet(!isOpenWallet);
    setIsOpenEmail(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleProblemDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={s.contact}>
      <div className={s.ref}>
        <div className={s.ref_item} onClick={toggleEmailDropdown}>
          antonzhdanovich@gmail.com
          <div
            className={`${s.dropdown} ${isOpenEmail ? s.dropdown_active : ""}`}
          >
            <div
              className={s.dropdown_item}
              onClick={() =>
                navigator.clipboard.writeText("antonzhdanovich@gmail.com")
              }
            >
              Copy Wallet
            </div>
            <div className={s.dropdown_item}>Disconnect</div>
          </div>
        </div>

        <div className={s.ref_item} onClick={toggleWalletDropdown}>
          QUBqS-7t...kG-3U8
          <div
            className={`${s.dropdown} ${isOpenWallet ? s.dropdown_active : ""}`}
          >
            <div
              className={s.dropdown_item}
              onClick={() => navigator.clipboard.writeText("QUBqS-7t...kG-3U8")}
            >
              Copy Wallet
            </div>
            <div className={s.dropdown_item}>Disconnect</div>
          </div>
        </div>
      </div>

      <div className={s.container}>
        <div className={s.left_write_container}>
          <div className={s.container_contact}>Contact Us</div>
          <div className={s.container_write}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className={s.write_item}
            />
            <input
              type="text"
              id="name"
              placeholder="Ivanushka"
              className={s.write_item}
            />
          </div>

          <div className={s.problem_dropdown}>
            <button
              className={s.problem_dropdown_btn}
              onClick={toggleProblemDropdown}
            >
              {selected || "Problem type"}
            </button>
            {isOpen && (
              <ul className={s.problem_dropdown_menu}>
                {options.map((option, index) => (
                  <li key={index} onClick={() => handleSelect(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className={s.btn}>SEND</button>
        </div>

        <div className={s.right_write_container}>
          <textarea
            id="problem"
            placeholder="About problem"
            className={s.textarea}
          ></textarea>
          <div className={s.text}>
            Please note that answer will arrive in your E-Mail and in
            <br /> the Notification section on this dashboard
          </div>
        </div>
      </div>

      <div className={s.map_container}>
        <div className={s.adress_dark_container}>
          <div className={s.adress}>
            If necessary, we are ready to accept your letters at the following
            address:
            <br />
            <b>1111B S Governors Ave STE 25262, Dover, DE 19904, USA</b>
          </div>
        </div>

        <div className={s.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.81900106773253!2d-75.52562932907388!3d39.13942471079662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7634b70300001%3A0xf9dfec8064c4e95e!2zMTExMUIgUyBHb3Zlcm5vcnMgQXZlLCBEb3ZlciwgREUgMTk5MDQsINCh0KjQkA!5e0!3m2!1sru!2sru!4v1740775237118!5m2!1sru!2sru"
            width="460"
            height="357"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
