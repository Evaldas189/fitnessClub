import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__infoContainer">
        <h1>ABOUT BODY FITNESS!</h1>
        <h3>
          Our fitness club is famous for the latest sports equipment, a large
          swimming pool and the most relaxing SPA
        </h3>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              text="you can choose and order a service you like and enjoy its benefits for a long time. see what services the training club offers"
              label="Services"
              path="/services"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              text="You can always choose a type of training and a trainer that will help you understand the workouts more easily"
              label="Schedule"
              path="/schedule"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              text="Our exercise machines are of the highest quality. The choice of
          trainers is large, so you can not worry that you will run out of any
          trainer. If you don’t know how to use some kind of trainer, you can always turn to
          one of our many cube trainers and ask a question"
              label="Gym"
              path="/schedule"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1577877319317-b5b6ac30f3ac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
              text="Swimming is also included in our workout program. You can always try your hand at our large swimming pool. There will be a plenty of space for everyone"
              label="Pool"
              path="/services"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              text="our club also has a large selection of spa treatments. Often our client comes to relax their body after a hard and strenuous workout
"
              label="SPA"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
