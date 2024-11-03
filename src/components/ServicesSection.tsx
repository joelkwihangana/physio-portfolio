import React from "react";

const ServiceSection: React.FC = () => {
  return (
    <>
      <div id="services" className="dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-primary font-bold">SERVICES</h1>
            <h1 className="text-3xl dark:text-white">What I Offer</h1>
            <p className="w-1/2 text-center text-gray-400">
              Customized health and wellness programs that include manual
              therapy, exercise therapy, client assessment, and health coaching.
            </p>
          </div>
          <div className="p-5 sm:p-0 flex flex-wrap justify-between">
            {[
              {
                title: "Physical Therapy",
                description:
                  "Client assessment, diagnosis, treatment, and care to promote physical health.",
              },
              {
                title: "Human Movement Analysis",
                description:
                  "Detailed analysis to identify imbalances and optimize movement.",
              },
              {
                title: "Wellness Coaching",
                description:
                  "Holistic health strategies covering diet, exercise, and lifestyle.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
              >
                <h1 className="font-medium text-lg dark:text-white">
                  {service.title}
                </h1>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
