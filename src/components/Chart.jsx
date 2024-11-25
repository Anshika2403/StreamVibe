import Container from "./container/Container";
import React from "react";
import Heading from "./Heading";

function Chart() {
  const data = [
    {
      id: 1,
      head: "Price",
      basic: "$9.99/Month",
      standard: "$12.99/Month",
      premium: "$14.99/Month",
    },
    {
      id: 2,
      head: "Content",
      basic:
        "Access to a wide selection of movies and shows, including some new releases.",
      standard:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      premium:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    },
    {
      id: 3,
      head: "Devices",
      basic: "Watch on one device simultaneously",
      standard: "Watch on Two device simultaneously",
      premium: "Watch on Four device simultaneously",
    },
    {
      id: 4,
      head: "Free Trial",
      basic: "7 Days",
      standard: "7 Days",
      premium: "7 Days",
    },
    {
      id: 5,
      head: "Cancel Anytime",
      basic: "Yes",
      standard: "Yes",
      premium: "Yes",
    },
    {
      id: 6,
      head: "HDR",
      basic: "No",
      standard: "Yes",
      premium: "Yes",
    },
    {
      id: 7,
      head: "Dolby Atmos",
      basic: "No",
      standard: "Yes",
      premium: "Yes",
    },
    {
      id: 8,
      head: "Ad - Free",
      basic: "No",
      standard: "Yes",
      premium: "Yes",
    },
    {
      id: 9,
      head: "Offline Viewing",
      basic: "No",
      standard: "Yes,for selet titles",
      premium: "Yes,for all titles",
    },
    {
      id: 10,
      head: "Family Sharing",
      basic: "No",
      standard: "Yes,upto 5 family members",
      premium: "Yes,upto 5 family members",
    },
  ];

  const TableRow = React.memo(({ row }) => (
    <tr className="h-16">
      <td className="px-8 text-base border-2 border-fbor">{row.head}</td>
      <td className="px-8 text-base border-2 border-fbor">{row.basic}</td>
      <td className="px-8 text-base border-2 border-fbor">{row.standard}</td>
      <td className="px-8 text-base border-2 border-fbor">{row.premium}</td>
    </tr>
  ));

  return (
    <div className="mx-16">
      <Container>
        <Heading
          hcont={"Choose the plan that's right for you"}
          pcont={
            "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
          }
        />
        <table className="border-collapse border-2 border-fbor ">
          <thead className="text-lg font-semibold bg-black-nav">
            <tr className="p-4 h-16">
              <td className="font-semibold text-lg px-8 w-1/4 border-2 border-fbor">
                Features
              </td>
              <td className="font-semibold text-lg px-8 w-1/4 border-2 border-fbor">
                Basic
              </td>
              <td className="font-semibold text-lg px-8 w-1/4 border-2 border-fbor">
                Standard
                <span className="text-sm rounded-sm p-1 m-1 bg-butred">
                  Popular
                </span>
              </td>
              <td className="font-semibold text-lg px-8 w-1/4 zborder-2 border-fbor">
                Premium
              </td>
            </tr>
          </thead>
          <tbody className="text-pgray text-base">
            {data.map((row) => (
              <TableRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default Chart;
