import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Your privacy is important to us. At Trendify, we are committed to
            protecting the privacy and security of your personal information.
            Our Privacy Policy outlines how we collect, use, and safeguard the
            data you provide to us. We take appropriate measures to maintain the
            confidentiality of your data and have implemented industry-standard
            security protocols to protect it from unauthorized access. To learn
            more about how we handle your information and the choices you have
            regarding your privacy, please read our full Privacy Policy. If you
            have any questions or concerns, our dedicated team is here to assist
            you.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
