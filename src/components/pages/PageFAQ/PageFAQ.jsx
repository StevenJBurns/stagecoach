import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import BarbedWire from "../../../assets/images/barbed-wire.jpg";
import './PageFAQ.scss';

const PageFAQ = () => {
  return (
    <div className="main-faq">
      <div id="div-faq-banner-wrapper">
        <section>
          <h3>Frequently Asked Questions</h3>
        </section>
        <div id="div-wheat-image" />
      </div>
      <FontAwesomeIcon className="fa-logo" icon={ faQuestionCircle } size="2x" />
      <p>We've made a list of some of the most common questions from our customers. If you have a question that isn't listed here feel free to call 970-483-7280 or contact us via <a href="mailto:svonloh@yahoo.com">email</a></p>
      <div id="div-faq-wrapper">
        <section>
          <p className="q">How are beef aged?  How long are they aged?</p>
          <p className="a">The beef are dry-aged in a temperature controlled cooler for up to 3 weeks, or your preference</p>
        </section>
        <section>
          <p className="q">When can I expect my order to be ready?</p>
          <p className="a">You can expect your order to be ready after we have notified you by telephone</p>
        </section>
        <section>
          <p className="q">Where is Stagecoach Meat Co. located? How do I find you?</p>
          <p className="a">Our location is on the Contact Page. Google Maps will occasionally show our location incorrectly</p>
        </section>
        <section>
          <p className="q">Do you have cutting instruction forms available?</p>
          <p className="a">Cut sheets are available for download on the Processing Page. When completed, you can fax them to 970-483-8180 or <a href="mailto:svonloh@yahoo.com?subject=Attention%20Sean">email</a> them to us. Paper versions are also available at our shop.</p>
        </section>
        <section>
          <p className="q">What cuts do I have to choose from?</p>
          <p className="a">You will be offered a cut sheet for pork or beef. You can choose your cuts on that form. If you have any questions while filling it out, contact us and we'll be more than happy to help you.</p>
        </section>
        <section>
          <p className="q">What are your charges for slaughtering and processing?</p>
          <p className="a">The slaughter charge is currently $75 per head. Our processing charges is currently $0.81 per pound on the hanging weight.  These prices are subject to change.</p>
        </section>
        <section>
          <p className="q">Do I need to bring boxes or coolers to take the meat home?</p>
          <p className="a">Feel free to bring your own containers.  We can supply simple bag wrappers free of cost</p>
        </section>
        <section>
          <p className="q">How soon after I’m notified that my order is ready should I pick it up?</p>
          <p className="a">Our freezer space is valuable.  Please plan to pick your order up within 10 days of notification. After 10 days we will charge a storage fee.</p>
        </section>
        <section>
          <p className="q">How do you package the cuts of meat?</p>
          <p className="a">All meat is wrapped in a layer of plastic meat film and then covered with freezer paper.</p>
        </section>
        <section>
          <p className="q">When should I drop the animal off?</p>
          <p className="a">The morning of the slaughter date.</p>
        </section>
        <section>
          <p className="q">What forms of payment do you accept?</p>
          <p className="a">We accept cash, checks, and credit cards.</p>
        </section>
        <section>
          <p className="q">Do you charge extra for making hamburger or sausage patties?</p>
          <p className="a">There is an extra charge for specialty cuts. Contact us for details.</p>
        </section>
      </div>
      <ul id="ul-faq-list">
        <li className="li-faq-item">
          <span className="span-faq-q">I’d like to cook for my family or friends.  What serving size do you recommend per person?</span>
          {/* <span className="span-faq-a">As much as you can eat.</span> */}
          <span className="span-faq-a">We recommend 8 to 12oz per adult</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">How are beef aged?  How long are they aged?</span>
          {/* <span className="span-faq-a">Like a fine wine.</span> */}
          <span className="span-faq-a">The beef are hanged in a temperature controlled cooler for up to 3 weeks, or your preference</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">Do you age hogs the same as beef?</span>
          {/* <span className="span-faq-a">Yes... Next question.</span> */}
          <span className="span-faq-a">Hogs also hang in temperature controlled cooler for up to a week</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">When can I expect my order to be ready?</span>
          {/* <span className="span-faq-a">When we get to it</span> */}
          <span className="span-faq-a">You can expect your order to be ready 48 hours after it has been cut. We will notify you by telephone when it is ready to be picked up</span>
        </li>
        {/* <li className="li-faq-item">
          <span className="span-faq-q">How soon can I get an animal in?</span>
          <span className="span-faq-a">How soon can you get here?</span>
        </li> */}
        <li className="li-faq-item">
          <span className="span-faq-q">Where is Stagecoach Meat Co. located?  How do I find you?</span>
          <span className="span-faq-a">Our location is on the Contact Page. Google maps shows our location incorrectly</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">Do you accept checks?</span>
          {/* <span className="span-faq-a">If it wont bounce</span> */}
          <span className="span-faq-a">Yes. We accept checks, cash and credit cards.</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">What cuts do I have to choose from?</span>
          <span className="span-faq-a">You will be offered a cut sheet (either pork or beef), and you can choose your cuts on that form. If you have any questions when filling it out, we invite you to contact us, and we'll be more than happy to help you.</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">What are your charges for slaughtering and processing?</span>
          <span className="span-faq-a">The slaughter charge is a flat charge.  Processing charges are based on the dress weight of the animal.  Please call for current rates.</span>
        </li>
        {/* <li className="li-faq-item">
          <span className="span-faq-q">What does “dress weight” mean?</span>
          <span className="span-faq-a">Dress weight refers to the carcass hanging weight after it has been butchered and skinned.  Expect an approximately 30% loss from the live weight of the animal.</span>
        </li> */}
        <li className="li-faq-item">
          <span className="span-faq-q">How do I cook certain cuts of meat?</span>
          <span className="span-faq-a">Microwave or stove</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">Do I need to bring boxes or coolers to take the meat home?</span>
          <span className="span-faq-a">BYOB</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">When should I drop the animal off?</span>
          <span className="span-faq-a">ASAP</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">How soon after I’m notified that my order is ready should I pick it up?</span>
          <span className="span-faq-a">Our freezer space is valuable.  Please plan to pick your order up within a week after notification.</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">I’m new to custom meat processing.  Do you have cutting instruction forms available?</span>
          <span className="span-faq-a">We're working on it</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">Do you charge extra for making hamburger patties or sausage patties.</span>
          <span className="span-faq-a">No. Only for special sauce...</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">How do you package the cuts of meat?</span>
          <span className="span-faq-a">All meat is wrapped first in a layer of plastic meat film and then covered with freezer paper.</span>
        </li>
      </ul>
      <img className="img-barbed-wire" src={BarbedWire} alt="Barbed Wire Flourish"></img>
    </div>
  );
};

export default PageFAQ;
