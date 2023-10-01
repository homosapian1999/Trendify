import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Trendify, your ultimate destination for all things trendy
            in the world of e-commerce! At Trendify, we pride ourselves on
            curating a carefully selected collection of fashion-forward products
            that cater to your unique style and taste. With a seamless online
            shopping experience, exceptional customer service, and a passion for
            staying on top of emerging trends, Trendify is committed to
            providing you with an unparalleled shopping journey. Join our
            vibrant community of trendsetters and let us inspire your personal
            style. Shop with confidence and let your fashion-forward spirit
            shine with Trendify.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
