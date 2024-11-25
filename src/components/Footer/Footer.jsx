import React from "react";
import { Container } from "../index";
import Fbox from "./Fbox";

function Footer() {
  return (
    <div>
      <Container>
        <div className="bg-black-nav px-12 pb-8 md:px-24">
          <div className=" py-12 grid md:grid-cols-6 grid-cols-2 border-b-2 border-fbor">
            <div>
              <h5 className="md:text-lg text-md leading-10 pb-3">Home</h5>
              <ul className="text-grey-foot font-medium leading-6">
                <li>Categories</li>
                <li>Devices</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h5 className="md:text-lg text-md leading-10 pb-3">Movies</h5>
              <ul className="text-grey-foot font-medium leading-6">
                <li>Genres</li>
                <li>Trending</li>
                <li>New Release</li>
                <li>Popular</li>
              </ul>
            </div>

            <div>
              <h5 className="md:text-lg text-md leading-10 pb-3">Shows</h5>
              <ul className="text-grey-foot font-medium leading-6">
                <li>Genres</li>
                <li>Trending</li>
                <li>New Release</li>
                <li>Popular</li>
              </ul>
            </div>

            <div>
              <h5 className="md:text-lg text-md leading-10 pb-3">Support</h5>
              <ul className="text-grey-foot font-medium leading-6">
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h5 className="md:text-lg text-md leading-10 pb-3">
                Subscription
              </h5>
              <ul className="text-grey-foot font-medium leading-6">
                <li>Plans</li>
                <li>Features</li>
              </ul>
            </div>

            <div>
              <h5 className="md:text-lg text-md leading-10 pb-3">
                Connect With Us
              </h5>
              <div className="flex justify-between w-40 md:w-44">
                <Fbox link="assets/fb.png" />
                <Fbox link="assets/twitter.png" />
                <Fbox link="assets/linked.png" />
              </div>
            </div>
          </div>
          <div className="md:h-5 h-4 py-5 flex flex-wrap justify-between text-grey-foot">
            <div>@streamvibe, All Rights Reserved</div>
            <div>
              Terms of Use &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Cookie
              Policy
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
