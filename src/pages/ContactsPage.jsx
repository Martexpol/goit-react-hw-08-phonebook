import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { selectLoading } from "../redux/selectors/contacts.selector";
import Phonebook from "../components/Phonebook/Phonebook";
import { fetchContacts } from "../redux/operations/contacts.operation";
import ContactsList from "../components/ContactsList/ContactsList";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Phonebook />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactsList />
    </HelmetProvider>
  );
}
