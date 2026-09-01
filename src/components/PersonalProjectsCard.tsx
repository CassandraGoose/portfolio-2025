import Card from "./Card";
import LinkButton from "./LinkButton";
import ListItemCard from "./ListItemCard";

function PersonalProjectsCard() {
  return (
    <Card
      nav={
        <p className="border-l-4 border-solid border-black justify-center px-4 flex items-center">
          PERSONAL PROJECTS
        </p>
      }
      id="pers"
      context={
        <p className="m-4">
          I tend to build projects to learn something, instead of relying on
          tutorials or guides. I think it helps me internalize concepts more
          quickly.
        </p>
      }
    >
      <ul className="m-4 flex flex-col gap-4">
        <ListItemCard
          title="ZK - A Zettlekasten App"
          subtitle="TypeScript, React, Node.js, Hono, Drizzle, PostgreSQL - SAST, CI/CD, DB Encryption"
        >
          <p className="my-2 text-lg">
            I'm particular about my notes. The tools on the market feel clunky
            or overwhelming. So, I decided to build myself the note-management
            tool that I would use. A user can add a note, connect it to sources,
            view notes and sources, edit notes and sources, see connections, and
            explore their notes via a node graph. 
          </p>
          <p className="my-2 text-lg">
            I added static application testing into the CI/CD pipeline and added a threat model document. Soon, the application will include other security features! Stay tuned!
          </p>
          <div className="flex pt-4 pb-8">
            <LinkButton
              href="https://github.com/CassandraGoose/ZK-FE"
              external
              className="ml-4"
            >
              Front End Code
            </LinkButton>
            <LinkButton
              href="https://github.com/CassandraGoose/ZK-BE"
              external
              className="ml-4"
            >
              Back End End Code
            </LinkButton>
          </div>
        </ListItemCard>
        <ListItemCard
          title="Track: Learning System"
          subtitle="Next.js, TypeScript, React, Node, Prisma, PostgreSQL, Vercel"
        >
          <p className="my-2 text-lg">
            This project was designed to help learners track their progress and
            reach their goals. It can be difficult to know if you have mastered
            a concept or not. This tool allows users to share objective-based
            learning plans and resources and also track the courses and work
            they have completed in order to better know if mastery or
            proficiency has been achieved.
          </p>
          <div className="flex pt-4 pb-8">
            <LinkButton
              href="https://github.com/CassandraGoose/track-learning-system"
              external
              className="ml-4"
            >
              Code
            </LinkButton>
          </div>
        </ListItemCard>
        <ListItemCard
          title="Reported UFO Sightings, Visualized"
          subtitle="D3.js, React, JavaScript, TypeScript, CSS, HTML, Vercel"
        >
          <p className="my-2 text-lg">
            Once upon a time, I was pretty dang good with D3 and worked on some
            visualization applications for various companies. I'm really rusty,
            so I wanted to get my chops back. This project is a playground to do
            just that. Utilizing data from NUFORC's database of reported UFO
            sightings, I am building various visualizations to tell a story
            about the data. I hope to make the site responsive and accessible
            moving forward, along with adding more charts.
          </p>
          <div className="flex pt-4 pb-8">
            <LinkButton
              href="https://nuforc-ufo-reports-data-visualizations.vercel.app/"
              external
              className="ml-4"
            >
              Deployed Site
            </LinkButton>
            <LinkButton
              href="https://github.com/CassandraGoose/ufo-report-visualizations"
              external
              className="ml-4"
            >
              Code
            </LinkButton>
          </div>
        </ListItemCard>
        <ListItemCard
          title="RATS.BAS - A homage to Gorillas.BAS, a well-loved MS-DOS Game"
          subtitle="TypeScript, Phaser.js, React, Vite, "
        >
          <p className="my-2 text-lg">
            I never submitted the talk to a CFP, but I prepared this Phaser game
            for a Phaser and Web Technologies talk that I intended to give at
            DenverScript. I loved playing Gorillas.BAS with my dad as a child
            and decided to recreate it with Rats in New York (with pizza) to aid
            in walking through how any JS/TS developer can quickly pick up
            Phaser to build games and have fun.
          </p>
          <div className="flex pt-4 pb-8">
            <LinkButton
              href="https://github.com/CassandraGoose/rats.bas"
              external
              className="ml-4"
            >
              Code
            </LinkButton>
          </div>
        </ListItemCard>
      </ul>
      <div className="flex justify-center align-center p-4">
        <LinkButton href="#nav">BACK TO TOP</LinkButton>
      </div>
    </Card>
  );
}

export default PersonalProjectsCard;
