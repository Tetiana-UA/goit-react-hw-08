import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

import css from "./contact-form.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

// Kомпонент Форма контактів
const ContactsForm = () => {
  const contactNameId = useId();
  const contactNumberId = useId();

  const contacts = useSelector((state) => state.contacts.items);

  const dispatch = useDispatch();

  //dispatch(addContact()); - щоб провірити у Dev Tools чи працює

  //Перевіряємо на повтори контактів при введенні
  const isDublicate = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    const dublicate = contacts.find((item) => {
      const normalizedCurrentName = item.name.toLowerCase();
      const normalizedCurrentNumber = item.number.toLowerCase();

      return (
        normalizedCurrentName === normalizedName ||
        normalizedCurrentNumber === normalizedNumber
      );
    });
    return Boolean(dublicate);
  };

  //додаємо контакт при сабміті форми (ця функція передається як пропс  для форми Formik)
  const onAddContact = (data) => {
    if (isDublicate(data)) {
      return alert(
        `Contact with ${data.name} and ${data.number} already in list`
      );
    }
    //dispatch відправляє результат операції addContact (це 3 екшени - pending,fulfilled,rejected) в extrareducers в contactsSlice.js), який потім обробляє action і змінює store
    dispatch(addContact(data));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAddContact(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formElement}>
          <label className={css.formLabel} htmlFor={contactNameId}>
            Name
          </label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            required
            id={contactNameId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formElement}>
          <label className={css.formLabel} htmlFor={contactNumberId}>
            Number
          </label>
          <Field
            className={css.formInput}
            type="tel"
            name="number"
            required
            id={contactNumberId}
          />
          <ErrorMessage
            className={css.error}
            name="number"
            component="span"
          />
        </div>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactsForm;
