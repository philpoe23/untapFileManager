import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { ContactCardWrapper } from '../style';

const ContactCard = () => (
  <ContactCardWrapper>
    <div className="contact-card">
      <figure>
        <img src="https://via.placeholder.com/120" alt="" />
        <figcaption>
          <h3>Grant Marshall</h3>
          <span>User Interface Designer</span>
        </figcaption>
      </figure>
      <div className="user-info">
        <ul>
          <li>
            <FeatherIcon icon="phone" size={16} />
            +1 (861) 550-2796
          </li>
          <li>
            <FeatherIcon icon="mail" size={16} />
            marshall@yahoo.com
          </li>
          <li>
            <FeatherIcon icon="map-pin" size={16} />
            225 Bills Place
          </li>
        </ul>
      </div>
    </div>
  </ContactCardWrapper>
);

export default ContactCard;
