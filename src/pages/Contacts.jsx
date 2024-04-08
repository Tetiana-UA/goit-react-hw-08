//import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactsForm from "../components/ContactForm/ContactForm";
import ContactsList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import PageTitle from "../components/PageTitle/PageTitle";

import { selectLoading, selectError } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";

// Переписуємо книгу контактів на Redux Toolkit
const App = () => {
  //const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    // викликаємо операцію (НТТР запит імпортований з contactOps.jsx) за допомогою dispatch -> результатом будуть 3 actions (action.pending, action.fullfiled, action.rejected), які будемо обробляти в extraReducers в слайсі contactsSlice
    dispatch(fetchContacts());
  }, [dispatch]);

  //const firstRender = useRef(true);

  //useEffect(() => {
  //  if (!firstRender.current) {
  //    localStorage.setItem("my-contacts", JSON.stringify(contacts));
  //  }
  //}, [contacts]);

  //useEffect(() => {
  //  firstRender.current = false;
  //}, []);

  return (
    <div>
      <PageTitle>PhoneBook</PageTitle>
      <ContactsForm />
      <SearchBox />
      {error && <Error>Error...</Error>}
      {loading && <Loader>Loading contacts...</Loader>}
      <ContactsList />
    </div>
  );
};

export default App;
