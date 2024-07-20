import React, { useEffect } from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import "./letest.css"
import MondayItem from "./New folder/MON THU.png";
import TueItem from "./New folder/TUE FRI.png";
import WedItem from "./New folder/WED SAT.png";
import ThusItem from "./New folder/THU SUN.png";
import FriItem from "./New folder/FRI MON.png";
import SatItem from "./New folder/SAT TUE.png";
import SunItem from "./New folder/SUN WED.png";

const weeklyMenu = [
  {
    day: "Monday",
    lunch: "ROTI + RICE + MIX DAL + SEASONAL SABJI + SALAD + ACHAR",
    dinner: "ROTI + RICE + KADI PAKODA + SEASONAL SABJI + SALAD + ACHAR",
    Imag : MondayItem,
  },
  {
    day: "Tuesday",
    lunch: "ROTI + JEERA RICE + TADKA DAL + MATAR PANNER + SALAD + ACHAR",
    dinner: "ROTI + RICE + DAL MAKHNI + SEASONAL SABJI + SALAD + ACHAR",
    Imag : TueItem,
  },
  {
    day: "Wednesday",
    lunch: "ROTI + RICE + CHOLE + KASHMRI AALOO DUM + SALAD + ACHAR",
    dinner: "ROTI + JEERA RICE + RAJMA + CHILLI PANNER + SALAD + ACHAR",
    Imag : WedItem,
  },
  {
    day: "Thursday",
    lunch: "ROTI + RICE + KADI PAKODA + SEASONAL SABJI + SALAD + ACHAR",
    dinner: "ROTI + VEG PULAO + TADKA DAL + KOFTA + SALAD + ACHAR",
    Imag : ThusItem,
  },
  {
    day: "Friday",
    lunch: "ROTI + RICE + DAL MAKHNI + SEASONAL SABJI + SALAD + ACHAR",
    dinner: "ROTI + RICE + MIX DAL + SEASONAL SABJI + SALAD + ACHAR",
    Imag : FriItem,
  },
  {
    day: "Saturday",
    lunch: "ROTI + JEERA RICE + RAJMA + CHILLI PANNER + SALAD + ACHAR",
    dinner: "ROTI + JEERA RICE + TADKA DAL + MATAR PANNER + SALAD + ACHAR",
    Imag : SatItem,
  },
  {
    day: "Sunday",
    lunch: "ROTI + VEG PULAO + TADKA DAL + KOFTA + SALAD + ACHAR",
    dinner: "ROTI + RICE + CHOLE + KASHMRI AALOO DUM + SALAD + ACHAR",
    Imag : SunItem,
  }
];

export const FoodApplication = () => {
  const handleBookNow = (day) => {
    alert(`Booking for ${day}`);
    // Implement the logic for booking here
  };
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const renderPaymentButton = () => {
  //   return {
  //     __html: '<script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_Oa6GVHFQMf5iWy" async></script>'
  //   };
  // };
  return (
    <Container>
      <h1 className="my-4" id="main-weekly">Weekly Meal Plan</h1>
      <Row>
        {weeklyMenu.map((dayMenu, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={dayMenu.Imag} alt={`${dayMenu.day} image`} />
              <Card.Header id="header-top-day">
                <h4>{dayMenu.day}</h4>
              </Card.Header>
              <Card.Body id="cardbody">
                <Card.Title>Lunch</Card.Title>
                <Card.Text className="text-menue">{dayMenu.lunch}</Card.Text>
                <Card.Title>Dinner</Card.Title>
                <Card.Text className="text-menue">{dayMenu.dinner}</Card.Text>
                <Button variant="primary" onClick={() => handleBookNow(dayMenu.day)}>Book Now</Button>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};


