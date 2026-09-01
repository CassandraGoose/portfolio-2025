import Card from "./Card";
import LinkButton from "./LinkButton";
import ListItemCard from "./ListItemCard";

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
        <ul className="m-4 list-none flex flex-col gap-4">
          <ListItemCard
            title="B.S. in Software Engineering"
            subtitle="Western Governor's University"
          >
            <p>
              Regardless of my work history, hiring someone without a technical
              degree is a risk some companies will not make. To mitigate that
              risk myself, I decided to pursue an accelerated degree path and
              leveraged my experience to move through coursework quickly. I
              received multiple excellence awards for my final projects and
              exemplary marks on my assessments. This university does not allow
              for differentiated honors when graduating.
            </p>
          </ListItemCard>
          <ListItemCard
            title="Web Development Certificate"
            subtitle="Galvanize - Web Development Immersive"
          >
            <p>
              I spent six months actively learning with peers covering
              JavaScript, Node.js, AngularJS, Node.js, SQL, PostgreSQL, and
              more. I want to be clear that this was not a couple of hours a day
              sitting in a chair and zoning out. I had my hands on a keyboard
              for well over 8 hours every day, including weekends.
            </p>
          </ListItemCard>
          <ListItemCard
            title="Bachelor of Music Education"
            subtitle="University of Northern Colorado"
          >
            <p>
              I graduated with highest honors and landed on the Dean's List
              every single semester. I won the Angie Southard Music Aware with
              my quartet Grenadilla Warefare and completed hundreds of extra
              hours of teaching field observation. On top of that, I worked as
              the Bands Librarian, ensuring over 5 full ensembles, totalling
              hundreds of students, had the appropriate music at all times.
            </p>
          </ListItemCard>
        </ul>
      </div>
      <div className="flex justify-center align-center p-4">
        <LinkButton href="#nav">BACK TO TOP</LinkButton>
      </div>
    </Card>
  );
}

export default EducationCard;
