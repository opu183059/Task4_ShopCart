const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row px-5 md:px-0 py-16 gap-10 min-h-screen items-center justify-center">
      <div className="md:w-7/12">
        <h1 className="text-amber-800 font-semibold text-xl">About Us page</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quam
          sequi id, quibusdam dicta mollitia libero amet laborum ab aliquid
          voluptatem. A dolorum sunt aut velit dignissimos laborum fugit
          repudiandae vero. Explicabo blanditiis quae eos quibusdam est aliquid
          rerum eaque fuga eum quas, pariatur, sit, obcaecati perspiciatis hic
          autem dolorem!
        </p>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg"
          alt=""
          className="w-80 rounded-lg"
        />
      </div>
    </div>
  );
};

export default AboutUs;
