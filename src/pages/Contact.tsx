import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data: any = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  /*
  <TextField sx={{color: 'white', width: '30vh'}} placeholder= "Vorname" label="Vorname" focused /><br/><br/>
  <TextField sx={{width: '30vh'}} placeholder= "Nachname" label="Nachname"  focused /><br/><br/>
  <TextField sx={{width: '30vh'}} placeholder= "E-Mail" label="E-Mail"  focused /><br/><br/>
  <TextField sx={{width: '30vh'}} placeholder= "Nachricht" label="Nachricht"focused />
  */

  /*
  rosa: #f5e0e5
  minzgrün: #CFF0CC
  */
  return (

    <div style={{ backgroundColor: '#CFF0CC', width: '100vw', textAlign: 'center' }}>
      <Typography style={{ paddingTop: '15vh' }} variant="h3">
        Gerne besprechen wir mit Ihnen gemeinsam welche Lieder wir für Sie spielen dürfen.
      </Typography>


      <div>
        <div className="contact-form-wrapper d-flex justify-content-center">
          <form action="#" className="contact-form">
            <h5 className="title">Kontaktaufnahme</h5>
            <p style={{ fontSize: '1.75vh' }} className="description">Schreiben Sie uns gerne eine Nachricht
            </p>
            <div>
              <input style={{ fontSize: '1.75vh' }} type="text" className="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required />
            </div>
            <div>
              <input style={{ fontSize: '1.75vh' }} type="email" className="form-control rounded border-white mb-3 form-input" placeholder="Email" required />
            </div>
            <div>
              <textarea style={{ fontSize: '1.75vh' }} id="message" className="form-control rounded border-white mb-3 form-text-area" rows={5} cols={30} placeholder="Message" required></textarea>
            </div>
            <div className="submit-button-wrapper">
              <input style={{ fontSize: '1.75vh' }} type="submit" value="Senden" />
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default ContactForm;