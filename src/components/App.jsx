import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    mail: ""
  });

  function handling(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          mail: prevValue.mail
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          mail: prevValue.mail
        };
      } else {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          mail: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.mail}</p>
      <form>
        <input
          onChange={handling}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handling}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handling}
          value={contact.mail}
          name="mail"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
