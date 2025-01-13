import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const List = ({ addContacts }) => {
  return (
    <div className="flex p-10 flex-col">
      {addContacts.map((contact, index) => (
        <div
          className="flex items-center gap-4 bg-gray-200 w-full p-2 rounded mb-2"
          key={index}
        >
          <div className="relative inline-flex items-center justify-center w-12 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {contact.fullName
                .trim()
                .split(" ")
                .map((name) => name.charAt(0).toUpperCase())
                .join("")}
            </span>
          </div>
          <div className="font-medium dark:text-black w-full">
            <div>
              <div>{contact.fullName}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <a
                  href={`tel:+90${contact.phoneNumber.replace(/\D/g, "")}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  +90 {contact.phoneNumber}
                </a>
              </div>
            </div>
          </div>
          <a
            href={`tel:+90${contact.phoneNumber.replace(/\D/g, "")}`}
            className="text-blue-500 hover:text-blue-700 mr-5"
          >
            <FaPhoneAlt size={20} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default List;
