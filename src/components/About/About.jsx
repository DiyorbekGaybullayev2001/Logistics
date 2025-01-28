import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import img from "/main.jpg";
import img3 from "/fura3.png";
import img4 from "/fura4.png";
import img5 from "/fura5.png";
import img6 from "/fura6.png";
import img7 from "/fura7.png";
import img8 from "/fura8.png";
import { useState } from "react";
import ContactModal from "../Modal/ContactModal";

const About = () => {
  const [open, setOpen] = useState(false);

  // Slide ma'lumotlarini bir ob'ekt sifatida saqlash
  const slides = [
    {
      title: "Heavy Duty Trucks",
      description:
        "Designed for long-haul routes, these trucks offer maximum load capacity.",
      imgSrc: img5,
    },
    {
      title: "Medium Duty Trucks",
      description:
        "Perfect for versatile tasks, offering balance between load capacity and fuel efficiency.",
      imgSrc: img8,
    },
    {
      title: "Light Duty Trucks",
      description:
        "Ideal for city deliveries with excellent maneuverability and fuel efficiency.",
      imgSrc: img7,
    },
    {
      title: "Electric Trucks",
      description:
        "Environmentally friendly with zero emissions, offering reliable performance.",
      imgSrc: img3,
    },
    {
      title: "Specialized Trucks",
      description:
        "Built for specific industries with custom features and capabilities.",
      imgSrc: img4,
    },
    {
      title: "Medium Duty Trucks",
      description:
        "Perfect for versatile tasks, offering balance between load capacity and fuel efficiency.",
      imgSrc: img6,
    },
  ];

  // Modalni ochish uchun funksiya
  const openModal = () => {
    setOpen(true);
  };

  // Modalni yopish uchun funksiya
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="container m-auto">
        <h1 className="text-[22px] text-center sm:text-[30px] md:text-[40px] font-serif font-semibold p-[10px]"> Our services and priorities</h1>
        <div className="mt-[40px]  overflow-x-hidden">
          <Swiper
            slidesPerView={1} // Default for small screens
            spaceBetween={20} // Default spacing
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 }, // Small screens
              768: { slidesPerView: 2, spaceBetween: 30 }, // Tablets
              1024: { slidesPerView: 3, spaceBetween: 40 }, // Desktops
            }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper h-auto flex justify-center items-center "
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="h-auto flex items-center justify-center rounded-lg shadow-xl border"
              >
                <div className="bg-white p-6 m-auto rounded-lg shadow-lg">
                  <img
                    src={slide.imgSrc}
                    alt={slide.title}
                    className="rounded-lg mb-4 object-cover w-full h-48"
                  />
                  <h3 className="text-2xl font-semibold mb-2">{slide.title}</h3>
                  <p className="text-lg leading-relaxed">{slide.description}</p>
                  <div className="flex justify-center items-center my-2">
                    <button
                      onClick={openModal}
                      className="px-10 py-3 rounded-md border-none bg-[#4d68ffda] text-white hover:bg-[#3d56d8] transition-colors"
                    >
                      Get in touch with us
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {open && <ContactModal open={open} close={closeModal} />}
      </div>
    </>
  );
};

export default About;
