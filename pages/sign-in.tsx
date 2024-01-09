import type { NextPage } from "next";
import { useState, useCallback } from "react";

const SignIn: NextPage = () => {
  const [frame7Value, setFrame7Value] = useState("");
  const [frame8Value, setFrame8Value] = useState("");

  const onSignInClick = useCallback(() => {
    // Please sync "🥊 Dashboard View (Cindy)" to the project
  }, []);

  const onSignIn1Click = useCallback(() => {
    // Please sync "🥊 Dashboard View (Cindy)" to the project
  }, []);

  const onSignIn2Click = useCallback(() => {
    // Please sync "🥊 Dashboard View (Cindy)" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[832px] overflow-hidden text-center text-11xl text-black1 font-poppins">
      <section className="absolute top-[0px] left-[-87px] w-[846px] h-[832px] bg-[url('/background@3x.png')] bg-cover bg-no-repeat bg-[top]" />
      <section className="absolute top-[0px] left-[405px] rounded-47xl bg-white w-[875px] h-[832px]" />
      <div className="absolute top-[152px] left-[20px] w-[342px] overflow-hidden flex flex-col items-center justify-end">
        <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit">
          Are you a Healthcare Professional?
        </h1>
      </div>
      <div className="absolute top-[438px] left-[529px] w-[177px] h-7 overflow-hidden flex flex-col items-center justify-end text-left text-mini">
        <div className="relative flex items-center w-[177px] h-7 shrink-0">
          Email Address
        </div>
      </div>
      <div className="absolute top-[501px] left-[529px] w-[122px] h-7 overflow-hidden flex flex-col items-center justify-end text-left text-mini">
        <div className="relative flex items-center w-[122px] h-7 shrink-0">
          Password
        </div>
      </div>
      <div className="absolute top-[0px] left-[530px] bg-black1 w-[614px] overflow-hidden" />
      <div className="absolute top-[0px] left-[529px] bg-black1 w-[614px] overflow-hidden" />
      <div className="absolute top-[0px] left-[714px] w-[243px] overflow-hidden flex flex-col items-center justify-end text-mid text-white">
        <h3
          className="m-0 self-stretch relative text-inherit tracking-[0.04em] font-bold font-inherit cursor-pointer"
          onClick={onSignInClick}
        >
          Sign in
        </h3>
      </div>
      <div className="absolute top-[366px] left-[731px] w-[55px] h-[27px] overflow-hidden flex flex-col items-center justify-end text-left text-lg">
        <h3 className="m-0 relative text-inherit font-normal font-inherit">
          - OR -
        </h3>
      </div>
      <select className="absolute top-[52px] left-[1132px] bg-black1 [border:none] w-[90px] h-[21px] overflow-hidden flex flex-col items-center justify-end font-poppins text-sm text-black1" />
      <div className="absolute top-[0px] left-[1228px] w-[14.7px] h-[67px] overflow-hidden">
        <img
          className="absolute top-[67px] left-[0px] w-[14.7px] h-[9px] object-cover"
          alt=""
          src="/polygon-1@2x.png"
        />
      </div>
      <div className="absolute top-[196px] left-[530px] w-[257px] overflow-hidden flex flex-col items-center justify-end">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[0.04em] font-semibold font-inherit">
          Welcome Back
        </h1>
      </div>
      <div className="absolute top-[39px] left-[441px] w-[79px] h-14 overflow-hidden flex flex-col items-center justify-end">
        <img
          className="relative w-[79px] h-14 object-cover"
          alt=""
          src="/81235282-padded-logo-1@2x.png"
        />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[641px] left-[530px] w-[158px] h-3.5 overflow-hidden flex flex-col items-center justify-end">
        <div className="relative text-xs tracking-[0.05em] leading-[108.1%] text-darkgray-100 text-center inline-block w-[158px] h-3.5 shrink-0">
          <span className="font-montserrat">{`Forgot your `}</span>
          <span className="font-poppins">password</span>
          <span className="font-montserrat">?</span>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[709px] left-[697px] w-[233px] overflow-hidden flex flex-col items-center justify-end">
        <div className="relative text-xs tracking-[0.05em] leading-[108.1%] font-montserrat text-darkgray-100 text-center inline-block w-[237px]">{`You don't have an account yet? `}</div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[275px] left-[51px] rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[261px] overflow-hidden" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[281px] left-[141px] w-[82px] h-[23px] overflow-hidden flex flex-col items-center justify-end">
        <div className="relative text-mini font-medium font-poppins text-black1 text-center">
          Log in here
        </div>
      </button>
      <div className="absolute [border:none] bg-[transparent] top-[443px] left-[529px] w-[614px] h-7 overflow-hidden flex flex-col items-center justify-end">
        <input
          className="[outline:none] [border:none] w-full h-full [background:transparent] relative z-[3]"
          type="text"
          value={frame7Value}
          onChange={(event) => setFrame7Value(event.target.value)}
        />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[0px] w-full [pointer-events:none]" />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[0px] w-full [pointer-events:none]" />
      </div>
      <div className="absolute [border:none] bg-[transparent] top-[499px] left-[529px] w-[614px] h-[30px] overflow-hidden flex flex-col items-center justify-end">
        <input
          className="[outline:none] [border:none] w-full h-full [background:transparent] relative z-[3]"
          type="text"
          value={frame8Value}
          onChange={(event) => setFrame8Value(event.target.value)}
        />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[0px] w-full [pointer-events:none]" />
        <div className="self-stretch absolute bg-black1 h-px z-[1] left-[0px] bottom-[0px] w-full [pointer-events:none]" />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[271px] left-[786px] w-[203px] h-[49px] overflow-hidden flex flex-col items-center justify-end">
        <div className="rounded-4xs bg-white box-border w-[203.3px] h-[49px] flex flex-row items-center justify-start py-0 pr-[12.839153289794922px] pl-[12.839160919189453px] gap-[6px] border-[1px] border-solid border-black1">
          <img
            className="relative w-[26.7px] h-[27.2px] object-cover"
            alt=""
            src="/facebook-1@2x.png"
          />
          <div className="relative text-xs font-poppins text-black1 text-left flex items-center w-[144.4px] h-[19.6px] shrink-0">{`Sign in with Facebook `}</div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[271px] left-[538px] w-[203px] h-[49px] overflow-hidden flex flex-col items-center justify-end">
        <div className="rounded-4xs bg-white box-border w-[203.3px] h-[49px] flex flex-row items-center justify-start py-0 px-[11.769230842590332px] gap-[19px] border-[1px] border-solid border-black1">
          <img
            className="relative w-[26.7px] h-[27.2px] object-cover"
            alt=""
            src="/search-3@2x.png"
          />
          <div className="relative text-xs font-poppins text-black1 text-left flex items-center w-[128.4px] h-[19.6px] shrink-0">{`Sign in with Google `}</div>
        </div>
      </button>
      <div className="absolute top-[573px] left-[704px] w-[243px] h-8 overflow-hidden flex flex-col items-center justify-end text-mid text-white">
        <h3
          className="m-0 relative text-inherit tracking-[0.04em] font-bold font-inherit flex items-center justify-center w-[243px] h-8 shrink-0 cursor-pointer"
          onClick={onSignIn1Click}
        >
          Sign in
        </h3>
      </div>
      <button className="cursor-pointer [border:none] py-[9px] px-[126px] bg-black1 absolute top-[579px] left-[521px] rounded-4xs w-[607px] h-[53px] flex flex-row items-start justify-start box-border">
        <h3
          className="m-0 relative text-mid tracking-[0.04em] font-bold font-poppins text-white text-center flex items-center justify-center w-[370px] h-8 shrink-0 cursor-pointer"
          onClick={onSignIn2Click}
        >
          Sign in
        </h3>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[709px] left-[920px] text-xs tracking-[0.05em] leading-[108.1%] font-semibold font-montserrat text-black1 text-center inline-block">
        Sign Up
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[499px] left-[1107px] overflow-hidden flex flex-col items-start justify-start">
        <img
          className="relative w-[25px] h-4 object-cover"
          alt=""
          src="/vector@2x.png"
        />
      </button>
    </div>
  );
};

export default SignIn;
