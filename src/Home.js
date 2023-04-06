import React from "react";
import {useNavigate} from "react-router-dom"
import { Spotify } from "react-spotify-embed";
import behance from "./assets/behancee.png";
import linkedin from "./assets/linked.png";
import gmail from "./assets/mail.png";
import medium from "./assets/medium.png";
import spotlight from "./assets/spotlight.png";
import flower from "./assets/flowers.png";
import bye from "./assets/byee.png";
import qr from "./assets/pull-request-code.gif";
import Quote from "./Quote";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="pb-10 bg-[#111827] lg:h-full">
      <div className="flex flex-col  font-nunito text-[#F7F5EB]">
        <div className="flex lg:flex-row flex-col font-nunito mt-10 self-center lg:gap-8 gap-10">
          <div className="bg-[#539165] text-[#F8F5E4] tracking-wider font-bold lg:w-[34em] w-[18em] p-4 py-3 rounded-[1em] transform transition duration-500 hover:scale-110">
            <div className="flex flex-col lg:gap-8 gap-6 ml-6 mt-6 lg:m-4 m-6">
              <div className="lg:text-4xl text-2xl font-bold tracking-wider">
                Hi, I'm Şeyma!
              </div>
              <div className="lg:text-2xl text-lg">
                A frontend web developer with urban planning background.{" "}
              </div>
              <div className="flex lg:flex-row flex-col">
                <div className="lg:text-2xl text-lg flex flex-col gap-2">
                  <div>Besides coding, I'm interested in botany, photoshop
                  manipulation and photography!</div>
                  <div className="text-lg hover:cursor-pointer hover:text-[#9C3D54]"><button  onClick={()=>navigate("/about")}>*here is more about me</button> </div>
                </div>
                <div>
                  <img
                    src={flower}
                    alt="flower"
                    className="lg:w-[28em] w-[10em] lg:pr-4 pr-0 rotate-90 pt-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col gap-8 font-nunito items-center">
            <div className="bg-[#3B3486] text-[#F7F5EB] rounded-[1em] items-center self-center flex flex-col p-6 lg:w-[25em] w-[18em]">
              <div className="flex lg:justify-evenly p-2 gap-6">
                <a
                  href="https://www.linkedin.com/in/seymademir/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex lg:h-[10em] h-[5em] transform transition duration-500 hover:scale-110">
                    <img src={linkedin} alt="linkedinlogo" />
                  </div>
                </a>
                <a
                  href="mailto:seymademir35@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex lg:h-[10em] h-[5em] transform transition duration-500 hover:scale-110">
                    <img src={gmail} alt="gmaillogo" />
                  </div>
                </a>
              </div>

              <div className="flex lg:justify-evenly p-2 gap-6">
                <a
                  href="https://medium.com/@seymademir"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex lg:h-[10em] h-[5em] transform transition duration-500 hover:scale-110">
                    <img
                      src={medium}
                      alt="mediumlogo"
                      href="https://medium.com/@seymademir"
                      target="_blank"
                      className="cursor-pointer"
                    ></img>
                  </div>
                </a>
                <a
                  href="https://www.behance.net/seymademir"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex lg:h-[10em] h-[5em] transform transition duration-500 hover:scale-110">
                    <img
                      src={behance}
                      alt="behancelogo"
                      href="https://www.behance.net/seymademir"
                      target="_blank"
                      className="cursor-pointer"
                    ></img>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-[#67608C] text-[#F8F5E4] rounded-[1em] transform transition duration-500 hover:scale-110 flex justify-center lg:w-[22em] w-[18em] ">
              <div className="flex m-[3em] pb-[2.7em] pt-[2.7em] flex-col gap-10">
                <div className="text-2xl font-bold tracking-wider">
                  Here is my favorite coding music nowadays 🌟
                </div>
                <Spotify
                  wide
                  link="https://open.spotify.com/track/3w6Q4UYdUbAkwT4Plhh3Tp?si=2b70b58e4fdc4f24"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col font-nunito mt-10 self-center gap-8">
          <div className="flex flex-col self-center">
            <div className="bg-[#AACB73] text-[#F8F5E4] rounded-[1em] transform transition duration-500 hover:scale-110 flex justify-center lg:w-[28em] w-[18em] items-center flex flex-col">
              <div className="flex m-[3.7em] lg:w-[18em] w-[14em] flex-col">
                <div className="text-2xl font-bold">
                  I'm on Github with
                  <br />{" "}
                  <a
                    href="https://github.com/symys"
                    target="_blank"
                    rel="noreferrer"
                    className="transform transition duration-500 hover:text-[#9C3D54] text-[#539165]"
                  >
                    symys🖱️
                  </a>{" "}
                  user name. Btw I like GIFs as much as GitHub 😁
                </div>
                <img src={qr} alt="logo" className="mt-6" />
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col gap-8">
            <div className="bg-[#9C3D54] text-[#F7F5EB] rounded-[1em] transform transition duration-500 hover:scale-110 flex flex-col self-center lg:w-[19em] w-[12em] items-center text-2xl">
              <div className="flex flex-col w-[15em] m-[3em] justify-center">
                <div className="flex flex-col items-center">
                  <div>
                    <button  onClick={()=>navigate("/projects")}
                      type="button"
                      class="shadow-xl font-extrabold shadow-yellow-200 text-[#9C3D54] lg:text-4xl text-2xl tracking-wider text-bold bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-full px-12 lg:py-8 py-4 text-center mb-2"
                    >
                      PROJECTS
                    </button>
                  </div>
                  <div className="lg:w-[7.5em] w-[5em] opacity-90">
                    <img
                      src={spotlight}
                      alt="spot"
                      className=" place-center justify-center flex"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#A0C3D2] text-[#F8F5E4] rounded-[1em]  flex flex-col items-center justify-evenly h-full p-[2em] pl-[4em] pr-[4em] transform transition duration-500 hover:scale-110 lg:w-[24em] w-[18em]">
              <div className="flex lg:w-[12em]">
                <img src={bye} alt="bye" />
              </div>
              <div className="text-lg capitalize self-center">"random quote corner"</div>
              <div className="w-[13em] lg:text-xl text-lg font-bold tracking-wider ">
                <Quote />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
