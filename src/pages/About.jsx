const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest capitalize">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto ">
        Driven by a passion for interior design and a desire to offer a shopping
        experience that is both comfortable and stylish, Comfy Store came into
        existence. We provide a range of high-quality home furnishings, from
        sofas, chairs, and tables to decorative items, designed to help you
        create a cozy, sophisticated, and elevated living space.
        <br /> <br />
        With a commitment to ensuring maximum customer satisfaction, we pledge
        to deliver quality products, dedicated customer service, and a seamless
        online shopping experience.
        <br /> <br />
        Explore the collection at Comfy Store and discover furniture and styles
        that resonate with your living space. We look forward to sharing our
        passion with you, as we aim to help you create warm and beautiful living
        environments.
      </p>
    </>
  );
};

export default About;
