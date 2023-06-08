import "../styles/Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  let [form, submitForm] = useForm("mdovryby");

  if (form.succeeded) {
    return (
      <div className="Contact">
        <dialog className="popup">
          <div>Message Sent!</div>
        </dialog>
      </div>
    );
  }

  return (
    <div className="Contact">
      <h1>
        <span>Contact</span>
      </h1>
      <form onSubmit={submitForm}>
        <div>Need to reach me or have a question? Feel free to message me!</div>
        <div style={{ display: "flex", gap: "40px", width: "50%" }}>
          <input type="text" placeholder="Name" name="name" />
          <ValidationError prefix="name" field="name" errors={form.errors} />
          <input type="email" placeholder="Email" name="email" />
          <ValidationError prefix="email" field="email" errors={form.errors} />
        </div>
        <textarea
          maxLength={400}
          placeholder="Write a message..."
          name="message"
        ></textarea>
        <ValidationError
          prefix="message"
          field="message"
          errors={form.errors}
        />
        <button type="submit" className="contactBtn" disabled={form.submitting}>
          Send message
          <div></div>
        </button>
      </form>
      <span className="borderLine"></span>
      <span className="borderLine"></span>
      <span className="borderLine"></span>
      <span className="borderLine"></span>
      <span className="borderLine"></span>
    </div>
  );
};

export default Contact;
