import type { NextPage } from "next";
import { useState, useCallback } from "react";
import SubmitButton from "../components/submit-button";
import Google from "../components/google";
import Facebook from "../components/facebook";

const SignUpPage: NextPage = () => {
  const [frame2Value, setFrame2Value] = useState("");
  const [frame3Value, setFrame3Value] = useState("");
  const [frame4Value, setFrame4Value] = useState("");
  const [frame5Value, setFrame5Value] = useState("");

  const onCreateAccountTextClick = useCallback(() => {
    // Please sync "Sign up success" to the project
  }, []);

  const onCreateAccount1Click = useCallback(() => {
    // Please sync "🥊 Dashboard View (Cindy)" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[832px] overflow-hidden text-center text-mini text-black1 font-poppins">

      <section className="absolute top-[0px] left-[-87px] bg-orange w-[846px] h-[832px]" />
      <section className="absolute top-[0px] left-[405px] rounded-47xl bg-white w-[875px] h-[832px]" />
      <div className="absolute top-[2px] left-[1117px] w-[25px] h-[569px] overflow-hidden">
        <img
          className="absolute h-[2.79%] w-full top-[97.21%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/vector@2x.png"
        />
      </div>
      <div className="absolute top-[0px] left-[536px] w-[124px] h-[460px] overflow-hidden flex flex-col items-center justify-end text-left">
        <div className="relative flex items-center w-[124px] h-7 shrink-0">
          First Name
        </div>
      </div>
      <div className="absolute top-[169px] left-[17px] w-[376px] overflow-hidden flex flex-col items-center justify-end text-11xl">
        <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit">
          Are you looking for a healthcare professional?
        </h1>
      </div>
      <div className="absolute top-[0px] left-[535px] w-[177px] h-[518px] overflow-hidden flex flex-col items-center justify-end text-left">
        <div className="relative flex items-center w-[177px] h-7 shrink-0">
          Email Address
        </div>
      </div>
      <div className="absolute top-[0px] left-[535px] w-[122px] h-[581px] overflow-hidden flex flex-col items-center justify-end text-left">
        <div className="relative flex items-center w-[122px] h-7 shrink-0">
          Password
        </div>
      </div>
      <div className="absolute top-[0px] left-[535px] bg-black1 w-[290px] overflow-hidden" />

      <div className="absolute top-[0px] left-[860px] w-[124px] h-[458px] overflow-hidden flex flex-col items-center justify-end text-left">
        <div className="relative flex items-center w-[124px] h-7 shrink-0">
          Last Name
        </div>
      </div>
      <div className="absolute top-[0px] left-[859px] bg-black1 w-[290px] overflow-hidden" />

      <div className="absolute [border:none] bg-[transparent] top-[490px] left-[536px] w-[614px] h-7 overflow-hidden flex flex-col items-center justify-end">
        <input
          className="[outline:none] [border:none] w-full h-full [background:transparent] relative z-[3]"
          type="text"
          value={frame2Value}
          onChange={(event) => setFrame2Value(event.target.value)}
        />
        <div className="self-stretch absolute bg-black1 h-0.5 z-[1] left-[0px] bottom-[0px] w-full [pointer-events:none]" />

      </div>
      <div className="absolute [border:none] bg-[transparent] top-[550px] left-[536px] w-[614px] h-7 overflow-hidden flex flex-col items-center justify-end">
        <input
          className="[outline:none] [border:none] w-full h-full [background:transparent] relative z-[3]"
          type="text"
          value={frame3Value}
          onChange={(event) => setFrame3Value(event.target.value)}
        />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[1px] w-full [pointer-events:none]" />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[0px] w-full [pointer-events:none]" />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[1px] w-full [pointer-events:none]" />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[0px] w-full [pointer-events:none]" />

      </div>
      <div className="absolute [border:none] bg-[transparent] top-[430px] left-[536px] w-[264px] h-7 overflow-hidden flex flex-col items-center justify-end">
        <input
          className="[outline:none] [border:none] w-full h-full [background:transparent] relative z-[3]"
          type="text"
          value={frame4Value}
          onChange={(event) => setFrame4Value(event.target.value)}
        />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[1px] w-full [pointer-events:none]" />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[0px] w-full [pointer-events:none]" />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[1px] w-full [pointer-events:none]" />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[0px] w-full [pointer-events:none]" />

      </div>
      <div className="absolute [border:none] bg-[transparent] top-[428px] left-[860px] w-[290px] h-7 overflow-hidden flex flex-col items-center justify-end">
        <input
          className="[outline:none] [border:none] w-full h-full [background:transparent] relative z-[3]"
          type="text"
          value={frame5Value}
          onChange={(event) => setFrame5Value(event.target.value)}
        />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[1px] w-full [pointer-events:none]" />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[0px] w-full [pointer-events:none]" />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[1px] w-full [pointer-events:none]" />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[0px] w-full [pointer-events:none]" />

      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[619px] left-[535px] w-[607px] overflow-hidden flex flex-col items-center justify-end">
        <SubmitButton />
      </button>
      <div className="absolute top-[36px] left-[693px] w-[243px] h-[104px] overflow-hidden flex flex-col items-center justify-end text-mid text-white">
        <b
          className="self-stretch relative tracking-[0.04em] cursor-pointer"
          onClick={onCreateAccountTextClick}
        >
          Create Account
        </b>
      </div>
      <div className="absolute top-[686px] left-[525px] w-[223px] overflow-hidden flex flex-col items-center justify-end">
        <div className="relative whitespace-pre-wrap flex items-center w-[229px]">
          <span className="w-full">
            <span>Already have an account?</span>
            <span className="text-darkgray-200">{`  `}</span>
          </span>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[686px] left-[721px] text-mini font-semibold font-poppins text-black1 text-center flex items-center justify-center w-[81px]">

        Log in
      </button>
      <div className="absolute top-[0px] left-[731px] w-[55px] h-[399px] overflow-hidden flex flex-col items-center justify-end text-left text-lg">
        <div className="relative">- OR -</div>
      </div>
      <select className="absolute top-[52px] left-[1132px] bg-[transparent] [border:none] w-[110.7px] h-[21px] font-poppins text-sm text-black1" />

      <div className="absolute top-[151px] left-[529px] w-[257px] overflow-hidden flex flex-col items-center justify-end text-11xl">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[0.04em] font-semibold font-inherit">
          Create Account
        </h1>
      </div>
      <div className="absolute top-[0px] left-[456px] w-[79px] h-[123px] overflow-hidden flex flex-col items-center justify-end">
        <img
          className="relative w-[79px] h-14 object-cover"
          alt=""
          src="/81235282-padded-logo-1@2x.png"
        />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[270px] left-[75px] rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[261px] overflow-hidden flex flex-col items-center justify-end">
        <button className="cursor-pointer [border:none] p-0 bg-white rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[261px] overflow-hidden" />
      </button>
      <div className="absolute top-[0px] left-[158px] w-[95px] h-[299px] overflow-hidden flex flex-col items-center justify-end">
        <div className="relative font-medium">Sign up here</div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[232px] left-[535px] w-[203px] h-[49px] overflow-hidden flex flex-col items-center justify-end">
        <Google />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[232px] left-[787px] w-[203px] h-[49px] overflow-hidden flex flex-col items-center justify-end">
        <Facebook />
      </button>
      <div className="absolute top-[50px] left-[691px] w-[243px] h-[610px] overflow-hidden flex flex-col items-center justify-end text-mid text-white">
        <h3
          className="m-0 relative text-inherit tracking-[0.04em] font-bold font-inherit flex items-center justify-center w-[243px] h-8 shrink-0 cursor-pointer"
          onClick={onCreateAccount1Click}
        >
          Create Account
        </h3>
      </div>
    </div>
  );
};

export default SignUpPage;
