import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.contactsList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.contactItem}>
          <Contact {...contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
