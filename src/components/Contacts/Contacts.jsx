import React, { useEffect, useState } from "react";
import List from "./List/List";
import Form from "./Form/Form";

const Contacts = () => {
  const [addContacts, setAddContacts] = useState([]);

  useEffect(() => {
    console.log(addContacts);
  }, [addContacts]);

  return (
    <div>
      <Form addContacts={addContacts} setAddContacts={setAddContacts} />
      <List addContacts={addContacts} />
    </div>
  );
};

export default Contacts;
