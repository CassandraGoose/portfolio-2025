import Card from "./Card";

function ConferencesCard() {
  return (
    <Card
      nav={
        <p className="border-r border-solid border-black justify-center px-4 flex items-center">
          CONFERENCES
        </p>
      }
      context={
        <h1 className="m-4">
          Some conferences I've attended.
        </h1>
      }
    >
      <div className="m-4">
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
    </Card>
  );
}

export default ConferencesCard;
