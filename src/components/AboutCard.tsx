import Card from "./Card";

function AboutCard() {
  return (
    <Card
      nav={
        <p className="border-l-4 border-solid border-black justify-center px-4 flex items-center">
          ABOUT ME
        </p>
      }
      context={<p className="m-4">Hi, I'm Cass.</p>}
    >
      <div>
        <p className="m-4">
          After nearly a decade of building applications, primarily for the web,
          I realized that I have all the knowledge and skill I need in order to
          secure those applications. I have shifted my mindset from "move fast
          and break things", to "how might someone else break this?". I spent
          years reviewing code for vulnerabilities, writing reports regarding
          security for stakeholders, and weighing risks, but never put a name
          to that drive and always worked within my title of web developer or
          software developer. Now, I'm aiming to lead the charge on a team as an
          Application Security Engineer.
        </p>
        <div className="flex pt-4 pb-8">
          <a
            className="ml-4 px-4 border border-solid border-black flex justify-center items-center shadow-lg"
            href="https://github.com/CassandraGoose"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="mx-4 px-4 border border-solid border-black flex justify-center items-center shadow-lg"
            href="https://www.linkedin.com/in/cassandra-rt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Card>
  );
}

export default AboutCard;
