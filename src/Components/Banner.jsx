import banner from '../assets/assets/banner.jpg';

const Banner = () => {
  return (
    <>
    <div className="bg-[#9538E2] text-white pb-64 rounded-bl-3xl rounded-br-3xl relative">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
          <p className="py-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button className="btn text-[#9538E2] bg-white rounded-full">Shop Now</button>
        </div>
      </div>
    </div>

    <div className='absolute -bottom-[24.75rem] left-[11.25rem] z-10 border p-4 rounded-3xl bg-white/30 backdrop-blur-xl'>
        <img className='w-[980px] h-[563px] object-cover rounded-3xl' src={banner} alt="" />
    </div>
    </>
  );
};

export default Banner;
