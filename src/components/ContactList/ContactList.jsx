import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterContactName = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContactName.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {visibleContacts.map(({ ...contact }) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
