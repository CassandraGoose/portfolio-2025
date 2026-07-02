import Card from "./Card";
import LinkButton from "./LinkButton";

function CommunityCard() {
  return (
    <Card
      nav={
        <p className="border-l-4 border-solid border-black justify-center px-4 flex items-center">
          COMMUNITY
        </p>
      }
      id="community"
      context={
        <h1 className="m-4">
          I believe in the Denver community! I formerly co-organized the
          DenverScript Meetup, get involved with other meetups and events, and
          give talks whenever I can. I also attend conferences.
        </h1>
      }
    >
      <div className="m-4 list-disc">
        <p className="font-bold">Meetup Talks</p>
        <ul className="m-4 list-disc flex flex-col gap-6">
          <li>
            <LinkButton
              external
              href="https://www.youtube.com/live/_JDHxsgIwz4?si=BcpRgn4gcTtDqt0A&t=652"
              className="leading-loose"
            >
              Meetup Talks? In this economy? (Yeah, and here&rsquo;s how you can
              start) - March, 2025
            </LinkButton>
          </li>
          <li>
            <LinkButton
              external
              href="https://www.meetup.com/DenverScript/events/dzlpnsyccmblc/"
              className="leading-loose"
            >
              What is the Serverless Framework Anyways? - September, 2021
            </LinkButton>
          </li>
          <li>
            <LinkButton
              external
              href="https://www.meetup.com/DenverScript/events/schtzrycckbkc/"
              className="leading-loose"
            >
              React and the Paradox of Choice - July, 2021
            </LinkButton>
          </li>
          <li>
            <LinkButton
              external
              href="https://www.meetup.com/node-js-denver-boulder/events/ktpcnryccgbtb/"
              className="leading-loose"
            >
              Front End Showdown - Vue - April, 2021
            </LinkButton>
          </li>
          <li>
            <LinkButton
              external
              href="https://www.meetup.com/Denver-Vue-js-Meetup/events/wpwwnrybcfbfc/"
              className="leading-loose"
            >
              Build a Chart with Vue-centric D3 - March, 2020
            </LinkButton>
          </li>
          <li>
            <LinkButton
              external
              href="https://www.youtube.com/watch?v=-cL_z-Z1mcU"
              className="leading-loose"
            >
              Front End Showdown - Vue - September, 2019
            </LinkButton>
          </li>
          <li>
            <LinkButton
              external
              href="https://twitter.com/dvlpdnvr/status/1154522975665659908?s=20"
              className="leading-loose"
            >
              It's a Beautiful Day in the Neighborhood - August, 2019
            </LinkButton>
          </li>
          <li>
            <LinkButton
              external
              href="https://www.meetup.com/Denver-Vue-js-Meetup/events/ltwpwmyzkbdc/"
              className="leading-loose"
            >
              Vue Slots in 8 Minutes or Less (Also given at DVLP DNVR 2019) -
              July, 2019
            </LinkButton>
          </li>
          <li>
            <LinkButton
              external
              href="https://youtu.be/XUvXb3393ZY"
              className="leading-loose"
            >
              On Transitioning Into Web Development and Being a Noob Again -
              October, 2018
            </LinkButton>
          </li>
        </ul>
        <div className="p-8">

        <hr />
        </div>
        <p className="font-bold">Conferences Attended</p>
        <ul className="list-disc m-4">
           <li className="ml-4 mb-4">
            <p className="italic">SnowFROC, 2026</p>
            <p className="text-lg">
              A cybersecurity-focused, multi-track conference presented by Denver and Boulder OWASP.
            </p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">React Summit, 2023</p>
            <p className="text-lg">
              A remote multi-track React conference 
            </p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">JSNation, 2023</p>
            <p className="text-lg">
              A remote, multi-track JavaScript conference 
            </p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">Devternity, 2022</p>
            <p className="text-lg">
              A remote, multi-track development conference
            </p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">DVLP DNVR 2017, 2018, 2019</p>
            <p className="text-lg">
              A 2 day, in-person, multi-track development and design conference
            </p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center align-center p-4">
        <LinkButton href="#nav">BACK TO TOP</LinkButton>
      </div>
    </Card>
  );
}

export default CommunityCard;
