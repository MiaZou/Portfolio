import React from 'react';

class Contact extends React.Component {
  render () {
    return (
      <div className="contact-box">
        <div className="contact-item" id="contact-pic">
          <img src="plant.jpg" alt="" />
        </div>
        <div className="contact-item" id="contact-info">
          <h3>Let's get in touch!</h3>
          <p className="contact-des">Mia is currently looking for full-time software development position in San Francisco Bay Area. She would love to hear potential opportunities. </p>
          <p className="email">Email: </p>
          <p className="email-add">mirongzou@gmail.com</p>
          <p className="other-contacts">Links to other social networks</p>
          <div className="social-items">
            <a href="https://github.com/MiaZou">
              <i class="fab fa-github"></i> Git: https://github.com/MiaZou
            </a>
          </div>
          <div className="social-items">
            <a href="https://www.linkedin.com/in/miazou/">
              <i class="fab fa-linkedin"></i> LinkedIn: https://www.linkedin.com/in/miazou/
            </a>
          </div>
          <div className="social-items">
            <i class="far fa-file"></i> Resume
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;