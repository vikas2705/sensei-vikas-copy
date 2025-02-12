import React, { useState } from "react";
import AuthLayout from "../layouts/auth";
import RadioContainer from "../components/common/RadioContainer";


const OnboardingProcess5 = (props) => {
  const [curr, setCurr] = useState(0);
  return (
    <AuthLayout r={"/graphic/auth/g6.svg"}>
      <div className="w-[100%] h-[100vh] py-[100px]  mobile:px-[25px] laptop:px-[80px]">
        <div className=" mobile:w-[100%] laptop:w-[500px] h-[100%] flex flex-col justify-center">
          <h1 className="text-[35px] font-extrabold mb-[40px]">
            Do any of this feel like familiar challenges?
          </h1>
          <RadioContainer
            label="Do you struggle to tailor pitches to different clients?"
            selected={curr === 0}
            onClick={() => {
              setCurr(0);
              props.setChallenge(0);
            }}
          />
          <RadioContainer
            label="Ever been caught off-guard by objections during calls?"
            selected={curr === 1}
            onClick={() => {
              setCurr(1);
              props.setChallenge(1);
            }}
          />
          <RadioContainer
            label="Is personalizing sales training for individual team members a challenge?"
            selected={curr === 2}
            onClick={() => {
              setCurr(2);
              props.setChallenge(2);
            }}
          />
          <div
            className="w-[100%] shrink-0 h-[50px] laptop:mt-[40px] bg-[#E14857] rounded-[3px] text-[#fff] font-bold tracking-wide cursor-pointer flex items-center justify-center"
            onClick={() => props.signup()}
          >
            Continue
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default OnboardingProcess5;
