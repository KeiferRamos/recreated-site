import React from "react";
import { contacts } from "../data";
import Contacts from "./contacts";

function Footer() {
  return (
    <div className="info-us">
      {contacts.map((contact, i) => {
        return <Contacts key={i} {...contact} />;
      })}
    </div>
  );
}

export default Footer;
