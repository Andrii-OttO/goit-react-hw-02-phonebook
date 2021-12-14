import React, { Component } from "react";
import "./App.css";
import style from "./components/style.module.css";
import ContactForm from "./components/input";
import Filter from "./components/filter";
import ContactList from "./components/contactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  // adds new contacts //
  submitHandler = (data) => {
    const { id, name, number } = data;
    const todo = {
      id,
      name,
      number,
    };
    //  alert //
    const sameContact = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (sameContact) {
      //  this.deleteContact()
      alert(`${name}is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, todo],
      }));
    }
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  FilterContacts = () => {
    const { filter, contacts } = this.state;
    const filtered = filter.toLowerCase();
    return contacts.filter((element) =>
      element.name.toLowerCase().includes(filtered)
    );
  };

  deleteContact = (elem) => {
    this.setState((prevState) => {
      const { contacts } = this.state;
      const filteredItems = contacts.filter((e) => e.id !== elem);
      return { contacts: filteredItems };
    });
  };
  // deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(el => el.id !== id),
  //   }));
  // };

  render() {
    const { filter } = this.state;
    const filteredElem = this.FilterContacts();
    return (
      <div className={style.container}>
        <div className={style.input}>
          <h1 className={style.Phonebook}>Phonebook</h1>
          <ContactForm onSubmit={this.submitHandler} />
        </div>
        <h2>Contacts</h2>
        <Filter value={filter} onCange={this.changeFilter} />
        <ContactList
          contacts={filteredElem}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
