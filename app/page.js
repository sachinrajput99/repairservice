import HeroSection from "./Component/Hero";

import EmergencyCallSection from "./Component/EmergencyCallSection";

import TrustedPartner from "./Component/TrustedPartner";

import WorkExperience from "./Component/WorkExperience";
import Experience from "./Component/Experience"
import Services from "./Component/Services"
import WhyChooseUs from "./Component/WhyChooseUs";
// import RequestQuote from "./Component/RequestQuote";

import FAQSection from "./Component/FAQSection";
import ContactSection from "./Component/ContactSection";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import WhatsappButton from "./Component/WhatsappButton";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        {/* favicon.ico ko public folder me rakho */}
      </Head>
      <Navbar />
      <HeroSection />
<EmergencyCallSection/>
<TrustedPartner/>
      <Experience />
     
   
      <Services />
<WorkExperience/>
   
      <WhyChooseUs/>
    
      <ContactSection />
      <Footer />
      <WhatsappButton />
    </>
  );
}
