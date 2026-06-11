import Card from "./Card";

function EducationCard() {
  return (
    <Card
      nav={
        <p className="border-r border-solid border-black justify-center px-4 flex items-center">
          EDUCATION & LEARNING
        </p>
      }
      context={
        <h1 className="m-4">
          I love to learn. I won't bore you by listing all of the courses and
          books I've read lately, but I will list my formal education.
        </h1>
      }
    >
      <div className="m-4">
        <p className="font-bold">Formal Education</p>
        <ul className="m-4 list-disc">
          <li className="ml-4 mb-4">
            <p className="italic">B.S. in Software Engineering: 2025-2026</p>
            <p className="text-lg">Western Governor's University</p>
            <hr />
            <p>
              Regardless of my work history, hiring someone without a technical
              degree is a risk some companies will not make. To mitigate that
              risk myself, I decided to pursue an accelerated degree path and
              leveraged my experience to move through coursework quickly. I
              received multiple excellence awards for my final projects and
              exemplary marks on my assessments. This university does not allow
              for differentiated honors when graduating.
            </p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">Web Development Certificate: 2016-2017</p>
            <p className="text-lg">Galvanize - Web Development Immersive</p>
            <hr />
            <p>
              I spent six months spent actively learning with peers covering
              JavaScript, Node.js, AngularJS, Node.js, SQL, PostgreSQL, and
              more. I want to be clear that this was not a couple of hours a day
              sitting in a chair and zoning out. I had my hands on a keyboard
              for well over 8 hours every day, including weekends.
            </p>
          </li>
          <li className="ml-4 mb-4">
            <p className="italic">
              Bachelor of Music Education, summa cum laude: 2009-2014
            </p>
            <p className="text-lg">University of Northern Colorado</p>
            <hr />
            <p>
              I graduated with highest honors and landed on the Dean's List
              every single semester. I won the Angie Southard Music Aware with
              my quartet Grenadilla Warefare and completed hundreds of extra
              hours of teaching field observation. On top of that, I worked as
              the Bands Librarian, ensuring over 5 full ensembles, totalling
              hundreds of students, had the appropriate music at all times.
            </p>
          </li>
        </ul>
        <p className="font-bold m4">Tech Conferences Attended</p>
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

export default EducationCard;
