import React, { useState } from "react";
import Heading from "./Heading";
import MoviePoster from "./MoviePoster";
import { useSelector } from "react-redux";
import Input from "./Input";
import Button from "./Button";
import Container from "./container/Container";

function Support() {
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const displayedMovies = popularMovies.slice(0, 12);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    num: "",
    msg: "",
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? !formData.agreeToTerms : value ,
    });
  };

  return (
    <Container>
    <div className="md:flex mx-8 md:mx-16">
      
      <div className="sm:w-full md:w-2/5">
        <Heading
          hsize="text-2xl md:text-3xl"
          psize=" text-sm md:text-base"
          hcont={"Welcome to our support page!"}
          pcont={
            "We're here to help you with any problems you may be having with our product."
          }
        />

        <div className="w-full mb-4 h-80 md:h-96 border-2 border-fbor rounded overflow-clip flex flex-wrap justify-center">
          {displayedMovies.map((movie) => (
            <MoviePoster
              key={movie.ids.imdb}
              imdbID={movie.ids.imdb}
              w={"w-28"}
            />
          ))}
        </div>
      </div>
      <div className="sm:w-full md:w-3/5 md:ms-8 bg-black-nav rounded-xl p-8">
        <form>
          <div className="md:flex pb-8">
            <Input
              name={"fname"}
              head={"First Name"}
              place={"Enter First Name"}
              value={formData.fname}
              onChange={handleChange}
            ></Input>
            <Input
              name={"lname"}
              head={"Last Name"}
              place={"Enter Last Name"}
              value={formData.lname}
              onChange={handleChange}
            ></Input>
          </div>
          <div className="md:flex pb-8">
            <Input
              name={"email"}
              head={"Email"}
              place={"Enter your Email"}
              value={formData.email}
              onChange={handleChange}
            ></Input>
            <Input
              name={"num"}
              head={"Phone Number"}
              place={"Enter Phone Number"}
              value={formData.num}
              onChange={handleChange}
            ></Input>
          </div>
          <label htmlFor="msg" className="text-base font-semibold m-2">
            Message
          </label>
          <textarea
            className="h-32 w-full bg-black-box border-2 border-fbor rounded-md p-4 mt-2 mb-4"
            name="msg"
            placeholder="Enter your Message"
            value={formData.msg}
            onChange={handleChange}
          ></textarea>
          <div className="flex justify-between items-center"> <label className="text-pgray">
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="form-checkbox h-4 w-4 accent-butred bg-black-nav me-4"
        />
        I agree with Terms of Use and Privacy Policy
      </label>
      <Button w={"w-36"} h={"h-12"} className="px-5 py- text-sm">Send Message </Button>
      </div>
        </form>
      </div>
    </div>
      </Container>
  );
}

export default Support;
