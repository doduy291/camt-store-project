import React from 'react';

const ContactScreen = () => {
  return (
    <div className="contact-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12 pdt-70">
            <iframe
              title="CamT Store"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.407795716541!2d108.04269871439142!3d12.686785391043173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31721d7c4cf1377d%3A0x3716ec59044f1716!2zOTMgTmd1eeG7hW4gxJDhu6ljIEPhuqNuaCwgVGjhuq9uZyBM4bujaSwgVGjDoG5oIHBo4buRIEJ1w7RuIE1hIFRodeG7mXQsIMSQ4bqvayBM4bqvaywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1615958256312!5m2!1svi!2s"
              width="580"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
