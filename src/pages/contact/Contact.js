import "./contact.css";
import Flag from "react-world-flags";
import Footer from "../../components/footer/Footer";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="heading-container">
        <div className="heading-wrapper">
          <p>
            We’re a knowledgeable team and understand how important it is to
            find the right fit for both companies and people! So, whether you’re
            looking for your next big job, or searching for the perfect addition
            to your team. We’ve got thousands of openings throughout the U.S.
            both remote/work from home and in-person/on-site. We have huge range
            of Hybrid job openings as well.
          </p>
          <span>
            For more information on our services or any type of inquiries, feel
            free to contact us.
          </span>
        </div>
      </div>
      <div className="country-icons">
        <div className="country-icon">
          <Flag code="us" height="100" />
          <span>+1 929-567-2541</span>
          <span>+1 929-567-2540</span>
          <span>
            733 3rd Ave, Floor 16 #1029, New York, NY 10017, United States{" "}
          </span>
        </div>
        <div className="country-icon">
          <Flag code="bd" height="115" />
          <span>+880 132-540-9732</span>
          <span>Dhaka Uddan, Adabor, Mohammadpur, Dhaka 1207, Bangladesh</span>
        </div>
      </div>
      <div className="form-container">
        <h1>Contact us</h1>
        <form action=""></form>
        {/* <label htmlFor="name">Name</label> */}
        <input type="text" name="name" id="name" placeholder="Name*" />
        {/* <label htmlFor="email">Email</label> */}
        <input type="text" name="email" id="email" placeholder="Email*" />
        {/* <label htmlFor="phone">Phone</label> */}
        <input type="text" name="phone" id="phone" placeholder="Phone*" />
        <textarea
          name="help"
          id="help"
          cols="100"
          rows="10"
          placeholder="How can we help?*"
        />

        <div className="policy">
          <label htmlFor="policy">Privacy Policy *</label>
          <input type="checkbox" name="policy" id="policy" />
          <span>
            I consent to having this website store my submitted information so
            Steadfast can respond to my inquiry.
          </span>
        </div>
        <button className="submit">CONTACT DETAILS</button>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
