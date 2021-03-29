import "../../App.css";
import Footer from "../Footer";

import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "What do I get when I buy Lemon Gym membership?",
      content: `You get the chance to do sports in a good sports club using the sports equipment of the best manufacturers. The clubs are situated in convenient locations: it is easy to reach them on foot, by car or public city transport.`,
    },
    {
      title: "What are opening hours of the club?",
      content:
        "All gyms are open from 6 am till 11 pm on workdays and from 9 am till 9 pm on weekends, except Vilnius Banginis and Kaunas Savanoriai clubs, which works 24/7 and receptiop working hours from 12 am till 8 pm on workdays. Reception isn't workink on weekends.",
    },
    {
      title: "What do I have to bring with me when I come to the club for the first time?",
      content: `A member must have clean sports clothes, a towel which must be spread on exercise equipment and a padlock to lock their belongings each time when they come to the sports club. For the first visit you will need your identity document. You will also need your bank account number or bank card, depending on your chosen monthly fee payment method. `,
    },
    {
      title: "From what age is it allowed to begin visiting a sports club?",
      content: "From 18 years old, as a standard. From 15 years old with a written consent of the parent. Parents have to come together for the first visit and sign consent at a gym.",
    },
    {
      title: "May I terminate COMFORT membership with a minimum period of 12 months?",
      content: "Yes, you may terminate the membership but you should cover the discount which was given for each previous month. You can check what discount was given for you in your agreement. You may also transfer the membership once to another person for a 5-euro administration fee.",
    },
    {
      title: "I want to transfer my membership, what should I do?",
      content: "You must arrive with the person to whom you will transfer the membership; you both must have personal identification documents with you and the other person will have to provide their account number; an application will have to be written and a single-time 5-euro administration fee will have to be paid. The payment for the current month must also have been paid.",
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

function Schedule() {
  return (
    <div className="shedule-container">
      <div>
        <Faq
          data={data}
          styles={styles}
          config={config}
        />
      </div>
      <Footer />
    </div>
  );
}
export default Schedule;
