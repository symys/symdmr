import React from "react";
import { useNavigate } from "react-router-dom";
import resume from "./assets/resume.png";

function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#111827] min-h-full text-[#F7F5EB] font-nunito gap-16 flex flex-col lg:p-24 p-10">
      <div className="flex flex-col gap-8">
        <div className="font-nunito text-2xl lg:w-[50em] flex flex-col self-center gap-8">
          <div>
            Hi again 😊 As I mentioned I have urban and regional planning
            background and it has given me to analyze any issue in different
            dimensions, make inferences and reach design from results. It also
            taught me how to bring different disciplines together and carry out
            the planning process. I used to be interested in information
            technology as a hobby and later I decided to make it my job.
            Frontend development made me think that it is in communication with
            different areas (backend and UX/UI) just like urban and regional
            planning, and I think this is very enjoyable.
          </div>
          <div>
            Being intertwined with design and technology and developing
            responsive web applications for users makes me happy. Because of
            this, I found myself close to frontend development and I keep
            learning new things every day. I believe that I can be a wanted
            member of a team where I can use my communication, responsibility,
            problem solving and other social skills.
          </div>
          <div>
            In summary, I am on a development journey both as a developer and
            personally, and my motivation is to learn! If you think we can do
            great work together, feel free to get in touch with me 👋
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1AvXUoNfiACbLWbPjsICr8cVROn04UlIb/view?usp=sharing"
          target="blank" rel="noreferrer" className="flex flex-col self-center hover:cursor-pointer hover:brightness-150"
        >
          <div >
            <img src={resume} alt="see-resume" className="w-[10em]" />
            <div>check out my resume</div>
          </div>
        </a>
      </div>

      <button
        type="button"
        onClick={() => navigate(-1)}
        class=" bg-gradient-to-r from-purple-400 via-purple-350 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-100 dark:focus:ring-purple-400  rounded-lg  lg:px-5 px-2 py-2.5 w-[10em] text-center mr-2 mb-2 self-center text-[#111827] font-extrabold lg:text-xl text-medium uppercase"
      >
        Back to Home
      </button>
    </div>
  );
}

export default About;
