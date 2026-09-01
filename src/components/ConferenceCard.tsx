import Card from "./Card";
import LinkButton from "./LinkButton";

function CommunityCard() {
  return (
    <Card
      nav={
        <>
        <p className="border-l-4 border-solid border-black justify-center px-4 items-center hidden lg:flex">
          CONFERENCES / CONVENTIONS / MEETUPS / ETC
        </p>
        <p className="border-l-4 border-solid border-black justify-center px-4 flex items-center flex lg:hidden">
          CONS & MEETUPS
        </p>
        </>
      }
      id="community"
      context={""}
    >
      <div className="m-4 list-disc">
        <p className="font-bold">Conferences & Conventions Attended</p>
        <ul className="list-disc m-4">
          <li className="ml-4 mb-4">
            <p className="italic">DEF CON, 2026</p>
            <p className="text-lg">
              Annual hacking & cybersecurity convention. The con includes
              multiple tracks with talks, villages with interactive zones and
              workshops, and competitions.
            </p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">SnowFROC, 2026</p>
            <p className="text-lg">
              A cybersecurity-focused, multi-track conference presented by
              Denver and Boulder OWASP.
            </p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">React Summit, 2023</p>
            <p className="text-lg">A remote multi-track React conference</p>
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
        <p className="font-bold">Meetups Attended</p>
        <ul className="list-disc m-4">
          <li className="ml-4 mb-4">
            <p className="italic">DenverScript 2016-2026</p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">Develop Happy Hour 2017-2026</p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">React Denver 2022-2025</p>
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
