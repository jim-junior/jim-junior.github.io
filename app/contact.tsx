export const Contact = () => {
  return (
    <section className="border-t border-[#c1c6d4]/20 pt-16 flex flex-col md:flex-row justify-between items-end gap-12">
      <div>
        <h2 className="text-4xl font-bold tracking-tighter mb-4">
          Let's build
          <br />
          something precise.
        </h2>
        <a
          href="mailto:beingana.jimjunior@students.mak.ac.ug"
          className="text-[#0053a1] text-xl font-medium hover:underline underline-offset-8 transition-all"
        >
          beingana.jimjunior@students.mak.ac.ug
        </a>
      </div>
      <div className="flex gap-6">
        <a
          href="https://github.com/jim-junior"
          className="text-[0.6875rem] tracking-widest hover:text-[#0053a1] transition-colors"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/jim-junior-beingana/"
          className="text-[0.6875rem] tracking-widest hover:text-[#0053a1] transition-colors"
        >
          LINKEDIN
        </a>
        <a
          href="https://jimjunior.medium.com/"
          className="text-[0.6875rem] tracking-widest hover:text-[#0053a1] transition-colors"
        >
          MEDIUM
        </a>
      </div>
    </section>
  );
};
