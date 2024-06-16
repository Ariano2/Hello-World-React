import User from './User';
import UserClass from './UserClass';
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Welcome to Foodie Faster! We're a passionate team dedicated to bringing
        you the best dining experience right to your fingertips. Our mission is
        simple: to connect food lovers with their favorite local restaurants,
        making ordering delicious meals easy, convenient, and enjoyable. With
        our user-friendly interface and vast selection of restaurants and
        cuisines, we strive to cater to every taste and craving. Whether you're
        in the mood for comfort food classics, exotic flavors, or healthy
        options, we've got you covered. At Foodie Faster, we believe in
        supporting local businesses and fostering community connections. That's
        why we partner with neighborhood eateries to showcase their culinary
        creations and help them thrive. Join us on this flavorful journey and
        elevate your dining experience with just a few taps. Thank you for
        choosing Foodie Faster for all your food cravings!
      </p>
      <User
        name="Aryan Gosain (function)"
        location="Delhi (function)"
        contact="aryanramjasian@gmail.com"
      />
      <UserClass
        name="Aryan Gosain (class)"
        location="Delhi (class)"
        contact="aryanramjasian@gmail.com"
      />
    </div>
  );
};

export default About;
