import Card from "./Card";

function VolunteeringCard() {
  return (
    <Card
      nav={
        <p className="border-l-4 border-solid border-black justify-center px-4 flex items-center">
          VOLUNTEER EXPERIENCE
        </p>
      }
      id="volunteer"
    >
      <ul className="m-4 list-disc">
        <li className="ml-4">
          <p className="italic">DenverScript - MeetUp Co-organizer</p>
          <p className="text-lg">2023-current</p>
        </li>
        <li className="ml-4 mt-4">
          <p className="italic">
            Develop Denver Conference - Content and Education Team, Planning
            Team, Developer
          </p>
          <p className="text-lg">2018-2020</p>
        </li>
        <li className="ml-4 mt-4">
          <p className="italic">
            ChickTech - JavaScript Facilitator / Workshop Assistant
          </p>
          <p className="text-lg">2018-2020, 2023</p>
        </li>
      </ul>
      <div className="flex justify-center align-center p-4">
        <a href="#intro" className="px-3 underline hover:text-purple-400">
          BACK TO TOP
        </a>
      </div>
    </Card>
  );
}

export default VolunteeringCard;
