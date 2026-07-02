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
        </ListItemCard>
        <ListItemCard
          title="Custom Metal Creations (Live site for working artist)"
          subtitle="Vue, Tailwind, Vite, JavaScript, HTML, Vercel, Google Visutalization API, Google Sheets"
        >
          <p className="my-2 text-lg">
            This site acts as a portfolio site for the metal artist Terry
            Lawrenz. I made some interesting choices here, so that the artist
            could easily make updates with technology he was already comfortable
            using. For example, instead of utilizing a CMS or a database, I have
            data coming in from a Google Sheet. I'm hoping to improve the
            Largest Contentful Paint, compress images, and generally improve the
            performance of the application in the future.
          </p>
          <div className="flex pt-4 pb-8">
            <LinkButton
              href="https://custommetalcreations.live/"
              external
              className="ml-4"
            >
              Deployed Site
            </LinkButton>
            <LinkButton
              href="https://github.com/CassandraGoose/custom-metal-creations-2023"
              external
              className="ml-4"
            >
              Deployed Site
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
              Deployed Site
            </LinkButton>
          </div>
        </ListItemCard>
        <ListItemCard title="2D Unity RPG Game" subtitle="C#, Unity">
          <p className="my-2 text-lg">
            Through my LLC Sweet Pig Studio, ltd., I am building a 2D RPG game
            and also designing all the assets. I'll add details here closer to
            when I release the game.
          </p>
        </ListItemCard>
      </ul>
      <div className="flex justify-center align-center p-4">
        <LinkButton href="#nav">BACK TO TOP</LinkButton>
      </div>
    </Card>
  );
}

export default PersonalProjectsCard;
