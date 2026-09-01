import Card from "./Card";
import LinkButton from "./LinkButton";

function EducationCard() {
  return (
    <Card
      nav={
        <p className="border-l-4 border-solid border-black justify-center px-4 flex items-center">
          CERTIFICATIONS
        </p>
      }
      id="certs"
      context={
        <h1 className="m-4">
          I sought out the security related certifications and the ITIL 4 and
          AWS certification were required by my recent degree program. These
          certifications are currently active.
        </h1>
      }
    >
      <div className="m-4">
        <ul className="m-4 list-disc">
          <li className="ml-4 mb-4">
            <p className="italic">CompTIA Security+</p>
          </li>
          {/* <li className="ml-4 mb-4">
            <p className="italic">
              Certified Web Exploitation Specialist (HTB)
            </p>
          </li> */}
          <li className="ml-4 mb-4">
            <p className="italic">AWS Certified Cloud Practicitioner</p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">ITIL 4 (IT Service Management)</p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">Google Cybersecurity</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center align-center p-4">
        <LinkButton href="#nav">BACK TO TOP</LinkButton>
      </div>
    </Card>
  );
}

export default EducationCard;
