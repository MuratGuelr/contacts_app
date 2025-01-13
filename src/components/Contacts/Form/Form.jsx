import React, { useEffect, useState } from "react";

const initialFormValues = { fullName: "", phoneNumber: "" };

const Form = ({ addContacts, setAddContacts }) => {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [addContacts]);

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, "");
    return cleaned.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      setForm({ ...form, [name]: formatPhoneNumber(value) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    setAddContacts([...addContacts, form]);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex gap-5 p-5">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="fullName"
          type="text"
          placeholder="Please enter full name."
          name="fullName"
          onChange={onChangeInput}
          required
          value={form.fullName}
        />
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="phoneNumber"
          type="text"
          placeholder="Please enter phone number."
          onChange={onChangeInput}
          name="phoneNumber"
          required
          maxLength={13}
          value={form.phoneNumber}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
