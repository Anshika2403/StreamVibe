import React from "react";
import Heading from "./Heading";

function Plan() {
  let plans = [
    {
      name: "Basic Plan",
      about:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      rate: "$9.99",
    },
    {
      name: "Standard Plan",
      about:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      rate: "$12.99",
    },
    {
      name: "Premium Plan",
      about:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      rate: "$14.99",
    },
  ];

  return (
    <div className="mx-16">
      <Heading
        hcont={"Choose the plan that's right for you"}
        pcont={
          "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        }
      />
      <div className="flex flex-wrap justify-around my-10">
        {plans.map((plan) => (
          <div key={plan.name} className="w-96 h-88 md:h-72 p-10 bg-fbox border-2 border-fbor rounded-lg mb-4 ">
            <h4 className="text-lg md:text-xl font-bold">{plan.name}</h4>
            <p className="text-sm md:text-base text-grey-foot mt-3">{plan.about}</p>
            <p className="text-grey-foot mt-4">
              <span className="font-semibold text-2xl md:text-3xl text-white">
                {plan.rate}
              </span>
              /month
            </p>
            <div >
              <button className="mt-3 w-36 h-12 bg-black-box border-2 border-fbor rounded-md text-xs font-semibold me-3">
                Start Free Trial
              </button>
              <button className="mt-3 w-36 h-12 rounded-md text-xs font-semibold bg-butred">Choose Plan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plan;
