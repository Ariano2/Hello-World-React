const FooterComponenet = () => {
  // date + time + Address of office + copyright
  const date = new Date();
  return (
    <div className="footer">
      <h3>
        Tasty Bites Delivery 123 Flavorful Avenue Savor City, Culinary County
        Delish State, 98765
      </h3>
      <h3>
        Contact Us Phone: +1 (555) 123-4567 Email: info@tastybitesdelivery.com
      </h3>
      <h4>Copyright @ 1995 - {date.getFullYear()} All Rights Reserved</h4>
    </div>
  );
};

export default FooterComponenet;
