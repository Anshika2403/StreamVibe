import React from "react";
import Box from "./Box";
import Heading from "./Heading";

function Variety() {
  let deviceList = [
    {
      name: "Smartphones",
      imageUrl:
        "https://img.icons8.com/?size=100&id=YW6en9TIdASX&format=png&color=E50000",
      para: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      name: "Tablet",
      imageUrl: "assets/Tab.png",
      para: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      name: "Smart TV",
      imageUrl:
        "https://img.icons8.com/?size=100&id=9975&format=png&color=E50000",
      para: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      name: "Laptops",
      imageUrl: "assets/Laptop.png",
      para: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      name: "Gaming Consoles",
      imageUrl:
        "https://img.icons8.com/?size=100&id=nePIn4GcWMsb&format=png&color=E50000",
      para: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      name: "VR Headsets",
      imageUrl:
        "https://img.icons8.com/?size=100&id=ucPoRyvltmBd&format=png&color=E50000",
      para: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
  ];

  return (
    <div className="mx-16">
      <Heading
        hcont={"We Provide you streaming experience across various devices."}
        pcont={
          "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        }
      />
      <div className=" flex flex-wrap justify-around">
        {deviceList.map((device) => (
          <div
            key={device.name}
            className="md:w-96 w-88 md:h-56 h-48 mb-6 md:p-10 p-6 bg-gradient-to-tr from-[rgba(38,38,38,1)] to-[rgba(229,0,0,0.06)]  border-fbor border-2 rounded-lg "
          >
            <div className="flex items-center">
              <Box imgSrc={device.imageUrl}></Box>
              <h4 className="pl-5 md:text-lg text-base font-medium">
                {device.name}
              </h4>
            </div>
            <p className="text-sm text-grey-foot md:mt-8 mt-5">{device.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Variety;
