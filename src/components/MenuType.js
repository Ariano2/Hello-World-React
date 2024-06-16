const MenuType = ({ name, price }) => {
  return (
    <div className="dish-container">
      <p>
        {name} <em>{`${(price / 100).toFixed(0)} Rupees`}</em>
      </p>
    </div>
  );
};

export default MenuType;
