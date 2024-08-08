import s from "./Contact.module.css";

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <div className={s.textWrapper}>
        <p className={s.name}>{name}</p>
        <p className={s.number}>{number}</p>
      </div>
      <button className={s.deleteButton} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
