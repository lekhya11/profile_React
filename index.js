const element = (
  <div className="outer-container">
    <h1 className="heading">Congratulations</h1>
    <div className="profile-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="profile-heading">Kiran V</h1>
      <p className="profile-para">
        Vishnu institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
