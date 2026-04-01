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
          href="mailto:hello@jimjunior.com"
          className="text-[#0053a1] text-xl font-medium hover:underline underline-offset-8 transition-all"
        >
          hello@jimjunior.com
        </a>
      </div>
      <div className="flex gap-6">
        <a
          href="#"
          className="text-[0.6875rem] tracking-widest hover:text-[#0053a1] transition-colors"
        >
          GITHUB
        </a>
        <a
          href="#"
          className="text-[0.6875rem] tracking-widest hover:text-[#0053a1] transition-colors"
        >
          LINKEDIN
        </a>
        <a
          href="#"
          className="text-[0.6875rem] tracking-widest hover:text-[#0053a1] transition-colors"
        >
          TWITTER
        </a>
      </div>
    </section>
  );
};
