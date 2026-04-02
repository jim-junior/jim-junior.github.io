/**
 *  About Section Component
 */
export const About = () => {
  const interests = [
    {
      number: "001",
      title: "Cloud Infrastructure",
      description:
        "Building the backbone of the internet. Designing and maintaining scalable, reliable, and secure cloud platforms that power modern applications.",
    },
    {
      number: "002",
      title: "Distributed Systems",
      description:
        "Building software that can operate at massive scale across multiple machines. Designing systems that are resilient, efficient, and can handle the complexities of distributed computing. Am still a newbie, but it interests me.",
    },
    {
      number: "003",
      title: "Web Development",
      description:
        "The Web has been my playground since I started coding. Not just building websites, but all the complex technologies that go into it.",
    },
    {
      number: "004",
      title: "Statistics, Data Science and Deep Learning",
      description:
        "Exploring the intersection of mathematics, data analysis, and artificial intelligence to build intelligent systems.",
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
      <div className="lg:col-span-3">
        <h2 className="text-[0.6875rem] uppercase tracking-widest text-[#5d5e60] sticky top-24">
          The Journey
        </h2>
      </div>
      <div className="lg:col-span-9 space-y-16">
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed mb-6">
            My path in engineering began with a curiosity about how computers
            worked, at 15, wrote my first piece of code, and never looked back
            since then. Currently pursuing my degree at{" "}
            <span className="font-bold">Makerere University</span>, I work on
            any code base that piques my interest, from open source projects to
            personal experiments. No matter the field.
          </p>
          <p className="text-lg leading-relaxed">
            However more specifically, I am interested in buuidling software
            that powers{" "}
            <a
              href="#"
              className="text-[#0053a1] hover:underline underline-offset-4"
            >
              Cloud Infrastructure
            </a>{" "}
            and furthermore any comcept that goes into building and maintaining
            large scale, distributed systems. I am also interested in building
            software that powers{" "}
            <a
              href="#"
              className="text-[#0053a1] hover:underline underline-offset-4"
            >
              Financial Technology
            </a>
            , where reliability, correctness and performance are not optional,
            but foundational.
          </p>
        </div>

        {/* Core Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c1c6d4]/20">
          {interests.map((interest, idx) => (
            <InterestCard key={idx} {...interest} />
          ))}
        </div>
      </div>
    </section>
  );
};

const InterestCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="bg-[#f9f9fa] p-8 group hover:bg-[#f4f3f4] transition-colors duration-300">
    <span className="text-[0.6rem] text-[#5d5e60] mb-4 block">{number}</span>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-sm text-[#414752] leading-relaxed">{description}</p>
  </div>
);
