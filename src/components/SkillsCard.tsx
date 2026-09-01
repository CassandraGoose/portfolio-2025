import Card from "./Card";
import SkillList from "./SkillList";
import LinkButton from "./LinkButton";

const LANGUAGES_FRAMEWORKS_LIBRARIES_SKILLS = [
  "(In order of importance?)",
  "JavaScript",
  "TypeScript",
  "Java",
  "Spring",
  "Node",
  "SQL",
  "Express",
  "Hono",
  "HTML",
  "CSS",
  "SASS/SCSS",
  "Angular",
  "React",
  "Vue",
  "Python",
  "C",
  "Next.js",
  "PostgreSQL",
  "MSSQL",
  "Countless Testing Libraries, ORMs, Query Builders, CSS Libraries, State Management Libraries, and more."
];

const PROGRAMMING_SKILLS = [
  'Can code without AI',
  'Can also code with AI',
  'Code Review',
  'CI/CD', 
  'Version Control',
  'Deployment',
  'Systems Design',
]

const CLOUD_SKILLS = [
  "Serverless",
  "Heroku",
  "Vercel",
  "AWS Ecosystem (Certified Cloud Practioner + 3-5 years experience)"
];

const PROGRAMMING_TOOLS_SKILLS = [
  "Git",
  "Webpack",
  "Vite",
  "GitHub",
  "GitLab",
  "BitBucket",
  "Jira",
  "GitHub Projects",
  "OpenCode",
  "Gemini",
  "Claude",
  "Cursor",
  "ChatGPT",
];

const TECHNIQUE_SKILLS = ["Agile", "Pair Programming", "Governance & Management"];

const SECURITY_SKILLS = ['General Security Practices (CompTIA Security+ Certification)', 'SAST', 'DAST', 'Threat Modeling', 'More coming soon!'];

function SkillsCard() {
  return (
    <Card
      nav={
        <>
        <p className="border-l-4 border-solid border-black justify-center px-4 items-center hidden md:flex">
          TOOLS / SKILLS / PRACTICES
        </p>
        <p className="border-l-4 border-solid border-black justify-center px-4 items-center flex md:hidden">
          TOOLS & SKILLS
        </p>
        </>
      }
      id="skills"
    >
      <p className="p-4 px-8">These items are organized so that the items I feel are most important are at the top.</p>
      <ul className="columns-2">
        <SkillList title="Security Skills + Tools" skills={SECURITY_SKILLS} />
        <SkillList title="Languages, Frameworks, & Libraries" skills={LANGUAGES_FRAMEWORKS_LIBRARIES_SKILLS} />
        <SkillList title="Cloud" skills={CLOUD_SKILLS} />
                <SkillList title="Programming Skills" skills={PROGRAMMING_SKILLS} />
        <SkillList title="Programming Tools" skills={PROGRAMMING_TOOLS_SKILLS} />
        <SkillList title="Processes" skills={TECHNIQUE_SKILLS} />
      </ul>
      <div className="flex justify-center align-center p-4">
        <LinkButton href="#nav">BACK TO TOP</LinkButton>
      </div>
    </Card>
  );
}

export default SkillsCard;
