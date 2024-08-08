import { FaRegUser } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <div className={s.textWrapper}>
        <div className={s.iconWrapper}>
          <FaRegUser />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.iconWrapper}>
          <MdPhoneIphone />
          <p className={s.number}>{number}</p>
        </div>
      </div>
      <button className={s.deleteButton} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
