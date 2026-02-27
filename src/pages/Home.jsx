import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import IndustriesSection from "../components/IndustriesSection";
import KeyProducts from "../components/KeyProducts";
import { motion } from "framer-motion";
import Leadership from "../components/Leadership";
import ManagementTeam from "../components/ManagementTeam";
import ClientsSection from "./clientsSection";
import Testimonial from "../components/Testimonial";
import NewsUpdate from "../components/newsUpdate";
import CompanyCards from "../components/CompanyCards";
import Newsroom2025 from "../components/Newsroom2025";

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Image Slider Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ImageSlider />
        </div>
      </section>
     {/*      */}
      <section>
        <div className="container-custom">
          <CompanyCards />
        </div>
      </section>
    

      {/* Key Products */}
      <section>
        <KeyProducts />
      </section>

      {/* Leadership */}
      <section>
       <ManagementTeam />
      </section>

      <section>
        <Newsroom2025 />
      </section>

      {/* Testimonials */}
      {/* <section>
        <Testimonial />
      </section> */}

      {/* Clients Section (still commented) */}
      {/*
      <section>
        <ClientsSection />
      </section>
      */}
    </div>
  );
}
