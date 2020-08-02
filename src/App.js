import React, { useState, useEffect } from "react";
import "./styles.css";

const ContactCard = props => {
  console.log(props.avatar);
  console.log(props.name);
  console.log(props.email);
  console.log(props.age);
  const [showAge, setShowAge] = useState(false);
  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile"/>
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>
          Toggle Age
        </button>
        {/* {showAge === true ? <p>Age: 25</p> :null} */
        showAge && <p>Age: {props.age}</p>}
        
      </div>
    </div>
  );
};

const App = () => {
  // Sample data
  // const contacts = [
  //   { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
  //   { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
  //   { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 },
  //   { name: "Amy McDonald", email: "amy@email.com", age: 33 }
  // ];
  // return (
  //   <>
  //   {
  //   contacts.map(contact =>
  //     <ContactCard
  //     avatar = "https://via.placeholder.com/150"
  //     name = {contact.name}
  //     email = {contact.email}
  //     age = {contact.age}
  //     />
  //   )
  //   /* <ContactCard 
  //   avatar = "https://via.placeholder.com/150"
  //   name = "ABC"
  //   email = "AB@XY.com"
  //   age = {25}/>
  //   <ContactCard 
  //   avatar = "https://via.placeholder.com/150"
  //   name = "DEF"
  //   email = "DE@XY.com"
  //   age = {45}/>
  //   <ContactCard 
  //   avatar = "https://via.placeholder.com/150"
  //   name = "JKL"
  //   email = "JK@XY.com"
  //   age = {19}/> */}
  //   </>
  // );

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setContacts(data.results);
  });

  }, [])

  

  return (
    <>
    {contacts.map(contact => (
      <ContactCard
      avatar = {contact.picture.large}
      name = {contact.name.first + '' + contact.name.last}
      email = {contact.email}
      age = {contact.dob.age}
      />
      ))}
    </>
  );

};

export default App;