import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="mx-md:hidden" />
        <span className="orange_gradient text-center">AI Knowledge</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, quos voluptatem quod
        {/* <br className="mx-md:hidden" /> */}
      </p>

      <Feed />
    </section>
  );
};

export default Home;
