import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import FaqArea from "./faq-area";
import HeroArea from "./hero-area";
import OpenAccountArea from "./open-account-area";
import PaymentArea from "./payment-area";
import ServiceArea from "./service-area";
import ContactFormArea from "./contact-form-area";
import Benefits from './benefits'

const Home = () => {
  return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main className="fix"> 
      <HeroArea />
      <PaymentArea />
      <Benefits />
      <OpenAccountArea />
      <ServiceArea />
      <FaqArea />
      <ContactFormArea /> 
      </main>
      <FooterTwo />
      </div>
      </div>

    </>
  );
};

export default Home;
