import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
 import "src/styles/contact.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Eavetop Infra",
  description: "Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Contact />
      
    </>
  );
};

export default ContactPage;
