import styles from "./ContactForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";

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
  number: yup.number().required("Number is required"),
});

function logToConsole(values) {
  console.log(
    "Contact added:",
    "\nName:",
    values.name,
    "\nNumber:",
    values.number
  );
}

function ContactForm({ onAddContact }) {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ id: nanoid(8), ...values });
    logToConsole(values);
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
          <Field type="number" name="number" placeholder="Number" />
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
