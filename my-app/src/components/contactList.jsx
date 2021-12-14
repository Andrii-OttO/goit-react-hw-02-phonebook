import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";
// import style from '../components/style.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((e) => {
        return (
          <li className={style.list} key={e.id}>
            {e.name}: {e.number}
            <button
              className={style.delete_btn}
              type="button"
              onClick={() => deleteContact(e.id)}
            >
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

// const ContactList = ({ contacts, onDeleteContact }) => (
//     <ul className={style.list}>
//         {contacts.map(({ id, name, number }) => (
//         <li key={id} className={style.item}>
//             {name}: {number};
//             <button onClick={() => onDeleteContact(id)}>Delete contact</button>
//         </li>
//         ))}
//     </ul>
// );

// export default ContactList;
