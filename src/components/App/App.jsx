import "./App.css";
import ContactForm from "/src/components/ContactForm/ContactForm";
import SearchBox from "/src/components/SearchBox/SearchBox";
import ContactList from "/src/components/ContactList/ContactList";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "/src/redux/contactsOps";
import { selectError, selectLoading } from "/src/redux/contactsSlice";
import Loader from "/src/components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && <Loader />}
      {error && <p>Ups...Something went wrong</p>}
    </div>
  );
}

export default App;
