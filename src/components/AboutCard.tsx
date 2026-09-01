import Card from "./Card";
import LinkButton from "./LinkButton";

function AboutCard() {
  return (
    <Card
      nav={
        <p className="border-l-4 border-solid border-black justify-center px-4 flex items-center">
          ABOUT ME
        </p>
      }
      id="about"
      context={<p className="m-4">Hi, I'm Cass.</p>}
    >
      <div>
        <p className="m-4">
          After nearly a decade of building applications, primarily for the web,
          I realized that it was time to focus on securing applications. I have
          shifted my mindset from "move fast and break things", to "how might
          someone else break this?". I spent years reviewing code for
          vulnerabilities, writing security reports for stakeholders,
          and weighing risks, but never put a name to those tasks; I always
          worked within my title of web developer or software developer. Now,
          I'm aiming to focus my work on a team team as an Application Security
          Engineer.
        </p>
        <div className="flex pt-4 pb-8">
          <LinkButton
            href="https://github.com/CassandraGoose"
            external
            className="ml-4"
          >
            GitHub
          </LinkButton>
          <LinkButton
            href="https://www.linkedin.com/in/cassandra-rt/"
            external
            className="ml-4"
          >
            LinkedIn
          </LinkButton>
        </div>
      </div>
    </Card>
  );
}

export default AboutCard;
