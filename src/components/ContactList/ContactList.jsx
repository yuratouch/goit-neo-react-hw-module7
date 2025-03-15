import { useDispatch, useSelector } from "react-redux";
import style from "./ContactList.module.css";
import Contact from "/src/components/Contact/Contact";
import { deleteContact } from "/src/redux/contactsOps";
import { selectFilteredContacts } from "/src/redux/contactsSlice";

function ContactList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

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
