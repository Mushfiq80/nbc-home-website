import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import TextAreaField from "./TextAreaField";



const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <h2 className="text-3xl md:text-4xl text-green-500 font-semibold mb-6">Get in Touch</h2>
      <p className="mb-6 text-gray-500">We'd love to hear from you. Please fill out this form.</p>

      <InputField label="Name" type="text" name="name" placeholder="Your Name" required />
      <InputField label="Email" type="email" name="email" placeholder="Your Email" required />
      <InputField label="Phone Number" type="tel" name="phone" placeholder="Your Phone Number" required={false} />
      <InputField label="Title/Position" type="text" name="title" placeholder="Your Title/Position" required={false} />
      <InputField label="Subject" type="text" name="subject" placeholder="Subject" required />
      <TextAreaField label="Message" name="message" placeholder="Your Message" required />

      <SubmitButton label="Submit" />
    </form>
  );
};

export default ContactForm;