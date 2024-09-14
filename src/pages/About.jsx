const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-6 items-center justify-center dark:text-gray-100">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="bg-blue-500 shadow-lg p-4 rounded-lg dark:bg-pink-500">
          <div className="text-center">
            <div className="text-white text-4xl font-bold tracking-widest">
              cartify
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto  dark:text-gray-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit necessitatibus corrupti, maiores eveniet repellendus magni ipsa est sequi ea eum possimus nulla inventore pariatur assumenda amet delectus modi. Beatae repellat voluptates temporibus neque consequuntur laudantium cumque quae sint rerum.
      </p>
    </>
  );
};

export default About;
