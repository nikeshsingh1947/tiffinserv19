import React from 'react';
import './QuickAction.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";
// Define a functional component
const QuickActions = () => {
  const navigate = useNavigate();
  // Function to handle Quick Sign-In button click
  const handleQuickSignIn = () => {
    navigate("/registration",{replace:true})
    // Implement the logic for quick sign-in here
  };

  // Function to handle Quick Booking button click
  const handleBookNow = () => {
    const fullContactNumber = `+91${8383871535}`;
    window.location.href = `tel:${fullContactNumber}`;
  };

  return (
    <div className="container-main-Quick">
      <button className="blinking-button" onClick={handleQuickSignIn}>Quick Sign-In</button>
      <button className="blinking-button" onClick={handleBookNow}>Quick Booking</button>
    </div>
  );
};

export default QuickActions;
