import { useDispatch, useSelector } from "react-redux";
import style from "./ContactList.module.css";
import Contact from "/src/components/Contact/Contact";
import { deleteContact, selectContacts } from "/src/redux/contactsSlice";
import { selectNameFilter } from "/src/redux/filtersSlice";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={style.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          contact={contact}
          onDelete={handleDeleteContact}
          key={contact.id}
        />
      ))}
    </ul>
  );
}

export default ContactList;
