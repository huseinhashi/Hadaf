import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Hadaf Industrial Cups",
  description: "Get in touch with Hadaf Industrial Cups for quotes, inquiries, and support. We're here to help with your industrial cup manufacturing needs.",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Contact />
    </div>
  );
};

export default ContactPage;