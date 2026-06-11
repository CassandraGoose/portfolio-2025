import Card from "./Card";
import ListItemLink from "./ListItemLink";
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
        <ul className="m-4 list-disc">
          <ListItemLink
            title="Meetup Talks? In this economy? (Yeah, and here&rsquo;s how you can start)"
            date="March, 2025"
            link="https://www.youtube.com/live/_JDHxsgIwz4?si=BcpRgn4gcTtDqt0A&t=652"
          />
          <ListItemLink
            title="What is the Serverless Framework Anyways?"
            date="September, 2021"
            link="https://www.meetup.com/DenverScript/events/dzlpnsyccmblc/"
          />
          <ListItemLink
            title="React and the Paradox of Choice"
            date="July, 2021"
            link="https://www.meetup.com/DenverScript/events/schtzrycckbkc/"
          />
          <ListItemLink
            title="Front End Showdown - Vue"
            date="April, 2021"
            link="https://www.meetup.com/node-js-denver-boulder/events/ktpcnryccgbtb/"
          />
          <ListItemLink
            title="Build a Chart with Vue-centric D3"
            date="March, 2020"
            link="https://www.meetup.com/Denver-Vue-js-Meetup/events/wpwwnrybcfbfc/"
          />
          <ListItemLink
            title="Front End Showdown - Vue"
            date="September, 2019"
            link="https://www.youtube.com/watch?v=-cL_z-Z1mcU"
          />
          <ListItemLink
            title="It's a Beautiful Day in the Neighborhood"
            date="August, 2019"
            link="https://twitter.com/dvlpdnvr/status/1154522975665659908?s=20"
          />
          <ListItemLink
            title="Vue Slots in 8 Minutes or Less (Also given at DVLP DNVR 2019)"
            date="July, 2019"
            link="https://www.meetup.com/Denver-Vue-js-Meetup/events/ltwpwmyzkbdc/"
          />
          <ListItemLink
            title="On Transitioning Into Web Development and Being a Noob Again"
            date="October, 2018"
            link="https://youtu.be/XUvXb3393ZY"
          />
        </ul>
        <hr />
        <p className="font-bold">Conferences Attended</p>
        <ul className="list-disc m-4">
          <li className="ml-4 mb-4">
            <p className="italic">React Summit, 2023</p>
            <p className="text-lg">
              Remote/Hybrid, multi-track React conference (I attended remotely)
            </p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">JSNation, 2023</p>
            <p className="text-lg">
              Remote/Hybrid, multi-track JavaScript conference (I attended
              remotely)
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
