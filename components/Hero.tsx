const Hero = () => {
  return (
    <div className="flex bg-yellow-400 px-10 space-y-5 items-center justify-between border-y border-black py-10 lg:py-0 ">
      <div className="space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{" "}
          is a place to write, read, and connect
        </h1>
        <p className="">
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </p>
      </div>
      <img
        className="hidden md:inline-flex h-32 lg:h-full"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
