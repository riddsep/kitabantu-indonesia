"use client"; // Ensure this is a Client Component

import { useEffect, useRef } from "react";
import { Card, CardHeader, CardBody } from "@/components/ui/card"; // Adjust with the correct path
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "My business development is growing regularly and can be monitored easily a service that really helps",
      name: "Albert Wisdom",
      role: "CEO, Loggie Corp.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 2,
      quote:
        "It really helps me in marketing the product so I can focus on development and problems.",
      name: "Gerald Hans",
      role: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      quote: "It is clear that the marketing service really works.",
      name: "Sarah Johnson",
      role: "Product Owner",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 4,
      quote:
        "The analytics tools are top-notch providing insights that drive our strategy.",
      name: "Emma Stone",
      role: "Data Analyst, TechWave Inc.",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 5,
      quote:
        "Ive seen a significant increase in customer engagement since we started using your services.",
      name: "Michael Brown",
      role: "VP of Customer Success, BrightFuture Ltd.",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 6,
      quote:
        "This service has streamlined our marketing efforts, making everything more cohesive.",
      name: "Lisa Nguyen",
      role: "Marketing Coordinator, SkyHigh Enterprises",
      image:
        "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 7,
      quote: "The ease of use and effectiveness of the tools are unparalleled.",
      name: "James Lee",
      role: "Digital Marketing Specialist, Innovate Tech",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 8,
      quote:
        "A game-changer for our small business allowing us to compete with bigger players.",
      name: "Sophia Martinez",
      role: "Owner, Crafted Goods",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 9,
      quote:
        "Our ROI has significantly improved thanks to your precise marketing solutions.",
      name: "David Kim",
      role: "Financial Advisor, Green Investments",
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d33a1be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 10,
      quote: "User friendly platform with results that speak for themselves.",
      name: "Olivia Smith",
      role: "Founder, EcoSolutions",
      image:
        "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust scroll speed as needed

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        scrollContainer.scrollLeft = scrollAmount;

        // Reset scroll to the beginning when it reaches the end
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame); // Clean up animation frame on component unmount
  }, []);

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#00AAFF] font-semibold tracking-wide uppercase">
            TESTIMONIALS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say About The Service
          </p>
        </div>

        {/* Container for horizontal scroll */}
        <div
          ref={scrollContainerRef}
          className="mt-16 overflow-x-scroll whitespace-nowrap scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="inline-flex gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardHeader>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
