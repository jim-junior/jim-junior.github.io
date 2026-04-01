/**
 * Hobbies / Off Duty Component
 */
export const Hobbies = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
      <div className="lg:col-span-3">
        <h2 className="text-[0.6875rem] uppercase tracking-widest text-[#5d5e60] sticky top-24">
          Off Duty
        </h2>
      </div>
      <div className="lg:col-span-9">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">
              The Cinematic Lens
            </h3>
            <p className="text-[#414752] leading-relaxed">
              When not optimizing clusters, I find solace in{" "}
              <span className="text-[#1a1c1d] font-medium">Cinema</span>. I
              appreciate films that treat cinematography as a technical
              discipline—where every frame is as deliberate as a line of clean
              code.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-[#0053a1]/10 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFD_lJHonn6cnCr_1vCszLML0HAlIl3gfzgQ0CbxxFaiXt8MjwapPU-rJT7cC2bxpEdwUMI_7OjEqQIdqSENiTOBk3tNYHDVDSz3KE3piNV98Fxjl2gSMB0nU5E_6aPjGHfY1gdsZfFfqtMNGpNHGNXpnyBif0eHEpXBpXzLO7kYajxc3_n-pZXPjKdNm4P8dN_2j7xLVlrBnH8FUGSxrVRV6xOCm9l6d0z_SXuEK1CX_iXlIrYt6viNvXyQGwuwS5t7R4UMXbeU8"
              alt="Vintage film camera"
              className="w-full aspect-video object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
