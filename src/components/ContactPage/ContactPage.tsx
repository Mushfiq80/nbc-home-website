import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/Contact.Info";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-32">
      <div className="container mx-auto px-4">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactPage;