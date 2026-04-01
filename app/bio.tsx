/**
 *  About Section Component
 */
export const About = () => {
  const interests = [
    {
      number: "001",
      title: "Cloud Infrastructure",
      description:
        "Scaling beyond the machine. Specializing in high-availability environments and container orchestration.",
    },
    {
      number: "002",
      title: "Distributed Systems",
      description:
        "Ensuring consistency and fault tolerance in complex, multi-node environments.",
    },
    {
      number: "003",
      title: "Web Development",
      description:
        "Crafting editorial digital experiences that bridge the gap between technical logic and human interaction.",
    },
    {
      number: "004",
      title: "Statistics",
      description:
        "The mathematical backbone of engineering. Leveraging data to predict system behavior and performance.",
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
            My path in engineering began with a curiosity about how data moves
            through global networks. Currently pursuing my degree at{" "}
            <span className="font-bold">Makerere University</span>, I've pivoted
            my focus toward the robustness of distributed architectures.
          </p>
          <p className="text-lg leading-relaxed">
            I believe that software is more than code—it's a technical document
            that should be engineered with the same precision as a physical
            structure. This philosophy led me to explore{" "}
            <a
              href="#"
              className="text-[#0053a1] hover:underline underline-offset-4"
            >
              Financial Technology
            </a>
            , where reliability and performance are not optional, but
            foundational.
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
