"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import "../../styles/header.css";

const reviews = [
  {
    name: "Suman",
    username: "@suman_infra",
    body: "The construction quality exceeded my expectations. The team was professional, and the project was completed on time. Highly recommend their services.",
    img: "/images/blog/r8.jpg",
  },
  {
    name: "Kiran",
    username: "@Kiran_krn",
    body: "I am thoroughly impressed with the attention to detail and the dedication shown by the workers. My house looks exactly how I imagined it.",
    img: "/images/blog/r2.jpg",
  },
  {
    name: "Nithish",
    username: "@Nithish_km",
    body: "Highly impressed with the team's dedication. The work was completed before the deadline, and the finished product is nothing short of excellent.",
    img: "/images/blog/r6.jpg",
  },
  {
    name: "Satwik",
    username: "@satwik_homes",
    body: "The team was incredibly responsive and adapted to our needs during the project. The result is a beautifully crafted home that we love.",
    img: "/images/blog/r3.jpg",
  },
  {
    name: "sujain",
    username: "@sujain_construction",
    body: "Building our dream home was a smooth process thanks to their expertise. Their commitment to quality is evident in every aspect of the construction.",
    img: "/images/blog/r9.jpg",
  },
  {
    name: "Samarth",
    username: "@samarth_builds",
    body: "The entire process, from planning to execution, was seamless. The team delivered what was promised, and the final result is outstanding.",
    img: "/images/blog/r5.jpg",
  },
  {
    name: "Akash",
    username: "@Akash_Projects",
    body: "I am amazed at the efficiency and quality of work. The construction was completed ahead of schedule, and the craftsmanship is top-notch.",
    img: "/images/blog/r7.jpg",
  },
  {
    name: "Sushmitha",
    username: "@Sushmitha_Creations",
    body: "The team delivered exceptional quality, completing the construction ahead of time. Their dedication to perfection is evident in every detail of the work.",
    img: "/images/blog/r10.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 1);
const secondRow = reviews.slice(reviews.length / 1);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-12",
        // light styles
        "border-[#0b2c3d]  bg-white hover:bg-[#b39359]",
        // dark styles
        "dark:border-[#0b2c3d] bg-white  hover:bg-[#b39359]"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img 
          className="rounded-3xl" 
          width="80"  // Increased from 64 to 80
          height="80" // Increased from 64 to 80
          alt="" 
          src={img} 
          loading="lazy" 
        />
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium dark:text-[#b39359]" style={{fontFamily:'kaftan', fontSize:'15px'}}>
            {name}
          </figcaption>
          <p className="text-sm font-medium dark:text-[#0b2c3d]" style={{fontFamily:'kaftan', fontSize:'15px'}}>{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-base dark:text-[#0b2c3d]" style={{fontFamily:'kaftan', fontSize:'15px'}}>{body}</blockquote>
    </figure>
  );
};

export function index() {

  return (
    <div
      className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      style={{
        backgroundImage: "url('/images/blog/diamond-sunset2.png')",
      }}
    >
      <div className="section-title text-center container">
  <div className="flex justify-center items-center mb-2 mt-5">
    <span className="text-[#b39359] font-bold text-xl max-w-lg mx-auto capitalize flex items-center">
      What Our Clients Say
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9" stroke="currentColor" className="text-[#0b2c3d] ml-2 w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </span>
  </div>
  <h1 className={`text-xl md:text-xl xl:text-xl font-semibold max-w-3xl mx-auto mb-20  p-10 leading-snug fifth-line`}>
    Testimonials from Our Happy Client's
  </h1>
</div>
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/8 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default index;

export const FAQ = [
  {
    question: "Can I schedule a property viewing?",
    answer:
      "Yes, you can schedule a property viewing by contacting our customer service team. They will assist you in arranging a convenient time for the viewing.",
    value: "faq-1",
  },
  {
    question: "What is the process for renting a property?",
    answer:
      "To rent a property, you will need to fill out a rental application form and provide necessary documentation such as proof of income, identification, and references. Once your application is approved, you can sign the lease agreement and move into the property.",
    value: "faq-2",
  },
  {
    question: "Do you offer property management services?",
    answer:
      "Yes, we offer property management services for landlords and property owners. Our services include tenant screening, rent collection, maintenance, and more.",
    value: "faq-3",
  },
  {
    question: "What types of properties do you have available?",
    answer:
      "We have a variety of properties available, including apartments, houses, condos, and commercial properties. You can browse our listings online or contact us for more information.",
    value: "faq-4",
  },
  {
    question: "How can I list my property for sale?",
    answer:
      "To list your property for sale, you can contact our real estate agents who will assist you in the listing process. They will help you market your property to potential buyers and negotiate the sale.",
    value: "faq-5",
  },
  {
    question: "Do you offer financing options for property purchases?",
    answer:
      "Yes, we work with various financial institutions to offer financing options for property purchases. Our agents can help you explore these options and choose the best one for your needs.",
    value: "faq-6",
  },
  {
    question: "What are your fees for selling a property?",
    answer:
      "Our fees for selling a property vary depending on the type of property and the services required. You can discuss your needs with our agents, and they will provide you with a detailed breakdown of the fees involved.",
    value: "faq-7",
  },
  {
    question: "How long does it take to sell a property?",
    answer:
      "The time it takes to sell a property can vary depending on market conditions, location, and other factors. Our agents will work with you to develop a marketing strategy to sell your property as quickly as possible.",
    value: "faq-8",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Our refund policy varies depending on the service provided. Please contact our customer service team for more information about our refund policy.",
    value: "faq-9",
  },
  {
    question:
      "Can I rent out my property if I am still paying off the mortgage?",
    answer:
      "Yes, you can rent out your property if you are still paying off the mortgage. However, you will need to inform your mortgage lender and ensure that your mortgage agreement allows for rental income.",
    value: "faq-10",
  },
  {
    question: "Do you offer short-term rentals?",
    answer:
      "Yes, we offer short-term rentals for vacation homes, corporate housing, and other purposes. You can browse our listings or contact us for more information about available short-term rental properties.",
    value: "faq-11",
  },
  {
    question: "How can I get started with buying or selling a property?",
    answer:
      "To get started with buying or selling a property, you can contact our customer service team or visit our office to speak with one of our agents. They will guide you through the process and answer any questions you may have.",
    value: "faq-12",
  },
];
