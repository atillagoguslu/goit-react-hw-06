import styles from "./ContactForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  number: yup.string().required("Number is required"),
});

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    // Gelen numara değeri number olarak geliyor. Ancak daha iyi gözükmesi için xxx-xx-xx formatına çeviriyoruz.
    const formattedNumber = values.number
      .toString()
      .replace(/(\d{3})(\d{2})(\d{2})/, "$1-$2-$3");

    dispatch(
      addContact({
        id: nanoid(8),
        ...values,
        number: formattedNumber,
      })
    );
    resetForm();
  };

  return (
    <div className={styles.contactForm}>
      <Formik
        className={styles.formik}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage
            name="name"
            component="div"
            className={styles.errorMessage}
          />

          <label htmlFor="number">Number</label>
          <Field name="number">
            {({ field }) => (
              <InputMask {...field} mask="999-99-99" placeholder="xxx-xx-xx" />
            )}
          </Field>
          <ErrorMessage
            name="number"
            component="div"
            className={styles.errorMessage}
          />

          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
