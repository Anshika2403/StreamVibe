import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";
import Box from "./Box";
import Container from "./container/Container";

function FAQ() {
  let faqs = [
    {
      id: "01",
      ques: "What is StreamVibe?",
      ans: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      id: "02",
      ques: "How much does StreamVibe cost?",
      ans: "You can select from our flexible subscription options tailored  to suit your viewing experiences.",
    },
    {
      id: "03",
      ques: "What content is available on StreamVibe?",
      ans: "Movies of all genres are available here.",
    },
    {
      id: "04",
      ques: "How can I watch StreamVibe?",
      ans: "You can create your account here and watch your favorite movies.",
    },
    {
      id: "05",
      ques: "How do I sign up for StreamVibe?",
      ans: "You can sign up using sign up option available at top right corner and fill necessary details.",
    },
    {
      id: "06",
      ques: "What is the StreamVibe free trial?",
      ans: "Free plan lets you watch movies for free upto one month.",
    },
    {
      id: "07",
      ques: "How do I contact StreamVibe customer support?",
      ans: "you can contact us on our helpline no. 1234456789.",
    },
    {
      id: "08",
      ques: "What are the StreamVibe payment methods?",
      ans: "You can pay using any card or net banking.",
    },
  ];

  const [isVisible, setIsVisible] = useState({});

  const handleClick = (id) => {
    setIsVisible((prevState) => ({
      ...isVisible,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="mx-16 ">
      <Container>
        <div className="flex flex-wrap justify-between">
          <Heading
            hcont={"Frequently Asked Questions"}
            pcont={
              "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
            }
          />
          <Button
            w={"w-36"}
            h={"h-11"}
            className={"px-5 py-3 font-semibold text-sm"}
          >
            {" "}
            Ask a question
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-10 my-10">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <div className="flex items-center">
                <Box text={faq.id} />
                <div className="flex flex-col px-5 flex-1">
                  <h3 className="text-base md:text-lg">{faq.ques}</h3>
                  {isVisible[faq.id] && (
                    <p className=" text-sm md:text-base text-pgray">
                      {faq.ans}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleClick(faq.id)}
                  className="cursor-pointer text-xl mr-2 "
                >
                  {isVisible[faq.id] ? "-" : "+"}
                </button>
              </div>
              <div className="w-full h-0.5 my-4 bg-gradient-to-r from-transparent via-butred to-transparent"></div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default FAQ;
