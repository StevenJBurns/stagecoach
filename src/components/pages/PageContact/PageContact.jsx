import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './PageContact.scss';

const PageContact = () => {
  const MapLabel = ({ text }) => <div>{ text }</div>;
  const keyAPI= { key: "AIzaSyBL3o3vS6QBa0JxUEAIKrX80_gkmuH3S3U" };
  const defaultMapCenter= { lat: 40.2304149, lng: -104.0814956 };
  const defaultMapZoom = 14;

  return (
    <div className="main-contact">
      <div id="div-contact-banner-wrapper">
        <section>
          <h3>Contact Us</h3>
        </section>
        <div id="div-barley" />
      </div>
      <section id="section-business-hours">
        <h3>Business Hours</h3>
        <hr />
        <div id="div-business-hours">
          <p>Our normal shop hours are listed. Please note we break for lunch from 12pm to 1pm on weekdays. Contact us in advance for business hours closer to holidays as we may extend weekends and time off to accomodate our employees.</p>
          <ul className="ul-contact">
            <li className="li-underlined">Monday - Friday</li>
            <li>7:30 to 12:00 </li>
            <li>-- Lunch --</li>
            <li>1:00 to 5:00 </li>
            <li className="li-underlined">Saturday</li>
            <li>9:00 to 12:00</li>
          </ul>        
        </div>
      </section>
      <section id="section-map">
        <h3>Processing and Retail Shop</h3>
        <hr />
        <div id="div-map-info">
          <p>The map below shows where we are located in Wiggins, Colorado. <em>Be aware that this Google Map will occasionally plot our location incorrectly.</em>  If you can't find the the shop or end up in the wrong place please call us!</p>
          <ul className="ul-contact">
            <li>Stagecoach Meat Co.</li>
            <li>600 W 3rd Ave</li>
            <li>Wiggins, CO 80654</li> 
          </ul>
        </div>
        <div id="div-map">
          <GoogleMapReact defaultCenter={ defaultMapCenter} defaultZoom={ defaultMapZoom } bootstrapURLKeys={keyAPI}>
            <MapLabel lat={ defaultMapCenter.lat } lng={ defaultMapCenter.lng } text={ "Stagecoach Meat Co." }/>
          </GoogleMapReact>
        </div>
      </section>
      <section id="section-phone-and-fax">
        <h3>Phone and Fax</h3>
        <hr />
        <div id="div-phone-and-fax">
          <p>During business hours, direct phone calls and faxes to the following numbers:</p>
          <ul className="ul-contact">
            <li className="li-underlined">Phone</li>
            <li>970-483-7280</li>
            <li className="li-underlined">Fax</li>
            <li>970-483-8180</li>
          </ul>
        </div>
      </section>
      <section id="section-mailing-address">
        <h3>Mailing Address</h3>
        <hr />
        <div id="div-mailing-address">
          <p>When sending mail via USPS, deliveries are made to the listed PO Box address. Deliveries made via UPS or Fedex are delivered directly to the street address listed above.</p>
          <ul className="ul-contact">
            <li>Stagecoach Meat Co.</li>
            <li>PO Box 413</li>
            <li>Wiggins, CO 80654</li>
          </ul>
        </div>
      </section>
      <section id="section-email">
        <h3>Email</h3>
        <hr />
        <div id="div-email">
          <a href="mailto:svonloh@yahoo.com?subject=Attention%20Sean">
            <FontAwesomeIcon className="fa-logo" icon={ faEnvelope } size="4x" />
          </a>
          <p>To contact us via email: <a href="mailto:svonloh@yahoo.com?subject=Attention%20Sean">Stagecoach Meat</a> (svonloh@yahoo.com). Please add &quot;Attention: Sean&quot; to the subject line.</p>
        </div>
      </section>
      <section id="section-feacebook">
        <h3>Social Media</h3>
        <hr />
        <div id="div-social-media">
          <a href="https://www.facebook.com/Stagecoach-Meat-Company-LLC-205877879464025/">
            <FontAwesomeIcon className="fa-logo" icon={ faFacebook } size="4x" />
          </a>
          <p>Check out our Facebook page!  We post information about adjusted business hours, deals, events and more.</p>
        </div>
      </section>
    </div>
  );
};

export default PageContact;
