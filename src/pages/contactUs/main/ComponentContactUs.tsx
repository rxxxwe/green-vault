import s from "./ComponentContactUs.module.scss";
interface Props {}

export const ComponentContactUs = (props: Props) => {
  return (
    <div className={s.contact}>
      <div className={s.ref}>
        <div className={s.ref_item}>antonzhdanovich@gmail.com</div>
        <div className={s.ref_item}>QUBqS-7t...kG-3U8</div>
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
          <div className={s.problem_type}>
            <div className={s.text_problem}>Problem type</div>
          </div>
          <div className={s.btn}>
            <button className={s.btn_item}>SEND</button>
          </div>
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

        <div className={s.map}>{/* сюда карту добавь  */}</div>
      </div>
    </div>
  );
};
