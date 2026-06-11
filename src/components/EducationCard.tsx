import Card from "./Card";

function EducationCard() {
  return (
    <Card
      nav={
        <p className="border-l-4 border-solid border-black justify-center px-4 flex items-center">
          EDUCATION
        </p>
      }
      id="education"
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
      </div>
      <div className="flex justify-center align-center p-4">
        <a href="#intro" className="px-3 underline hover:text-purple-400">
          BACK TO TOP
        </a>
      </div>
    </Card>
  );
}

export default EducationCard;
