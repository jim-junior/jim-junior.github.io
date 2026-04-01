import { FaArrowRight } from "react-icons/fa";

/**
 * Project Spotlight Component
 */
export const ProjectSpotlight = () => {
  return (
    <section className="mb-32">
      <div className="bg-[#f4f3f4] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[20rem] font-bold leading-none tracking-tighter">
            INFR
          </h2>
        </div>

        <div className="lg:w-1/2 z-10">
          <span className="text-[0.6875rem] text-[#0053a1] font-bold tracking-widest mb-6 block uppercase">
            Project Spotlight
          </span>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
            Infralane.
          </h3>
          <p className="text-lg text-[#414752] mb-10 max-w-md leading-relaxed">
            My primary venture into automated infrastructure management.
            Infralane aims to simplify the deployment lifecycle for distributed
            applications without sacrificing the control engineers demand.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[0.6875rem] font-bold text-[#0053a1] group"
          >
            EXPLORE REPOSITORY
            <FaArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="lg:w-1/2 z-10 flex items-center justify-center">
          <div className="w-full h-64 bg-[#ffffff] border border-[#c1c6d4]/20 flex items-center justify-center p-8">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-pKe4E9Shy2VT6S0hMEZJCGO5dTyfz3aNvmrEGdE4OmI-d-DEq8NEqBnmHasG3fSaM04JBFR43avvW62QMiWIBW1zpsN2o68QnpYLN88tyHE_99_zxTRNwlkMtj_S_zlNsWmdWpU0P-2q6ZbIwVI6DXPP10JY5xIgOWPVw16gy_R9YYXF6F8bBQn4xTpLxk2IV0NbF0xvQCsCZ0j8usQ5LFFh4a4iDRVODrN5XTgHOFDDXuOorvHfQUjewceUL56HU08Aiidf-Kw"
              alt="Server hardware"
              className="w-full h-full object-cover grayscale opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
