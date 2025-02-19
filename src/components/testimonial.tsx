"use client"; // Pastikan ini adalah Client Component

import { useEffect, useRef } from "react";
import { Card, CardHeader, CardBody } from "@/components/ui/card"; // Sesuaikan dengan path yang benar

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            quote: "My business development is growing regularly and can be monitored easily, a service that really helps.",
            name: "Albert Wisdom",
            role: "CEO, Loggie Corp.",
            image: "https://via.placeholder.com/50",
        },
        {
            id: 2,
            quote: "It really helps me in marketing the product, so I can focus on development and problems.",
            name: "Gerald Hans",
            role: "Marketing Manager",
            image: "https://via.placeholder.com/50",
        },
        {
            id: 3,
            quote: "It is clear that the marketing service really works.",
            name: "Sarah Johnson",
            role: "Product Owner",
            image: "https://via.placeholder.com/50",
        },
        {
            id: 4,
            quote: "The analytics tools are top-notch, providing insights that drive our strategy.",
            name: "Emma Stone",
            role: "Data Analyst, TechWave Inc.",
            image: "https://via.placeholder.com/50",
        },
        {
            id: 5,
            quote: "I've seen a significant increase in customer engagement since we started using your services.",
            name: "Michael Brown",
            role: "VP of Customer Success, BrightFuture Ltd.",
            image: "https://via.placeholder.com/50",
        },
        {
            id: 6,
            quote: "This service has streamlined our marketing efforts, making everything more cohesive.",
            name: "Lisa Nguyen",
            role: "Marketing Coordinator, SkyHigh Enterprises",
            image: "https://via.placeholder.com/50",
        },
        {
            id: 7,
            quote: "The ease of use and effectiveness of the tools are unparalleled.",
            name: "James Lee",
            role: "Digital Marketing Specialist, Innovate Tech",
            image: "https://via.placeholder.com/50",
        },
        {
            id: 8,
            quote: "A game-changer for our small business, allowing us to compete with bigger players.",
            name: "Sophia Martinez",
            role: "Owner, Crafted Goods",
            image: "https://via.placeholder.com/50",
        },
        {
            id: 9,
            quote: "Our ROI has significantly improved thanks to your precise marketing solutions.",
            name: "David Kim",
            role: "Financial Advisor, Green Investments",
            image: "https://via.placeholder.com/50",
        },
        {
            id: 10,
            quote: "User-friendly platform with results that speak for themselves.",
            name: "Olivia Smith",
            role: "Founder, EcoSolutions",
            image: "https://via.placeholder.com/50",
        },
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 1; // Kecepatan scroll (sesuaikan sesuai kebutuhan)

        const scroll = () => {
            if (scrollContainer) {
                scrollAmount += scrollSpeed;
                scrollContainer.scrollLeft = scrollAmount;

                // Jika sudah mencapai akhir, reset scroll ke awal
                if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollAmount = 0;
                    scrollContainer.scrollLeft = 0;
                }
            }
            requestAnimationFrame(scroll);
        };

        const animationFrame = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrame); // Bersihkan animation frame saat komponen unmount
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

                {/* Container untuk horizontal scroll */}
                <div
                    ref={scrollContainerRef}
                    className="mt-16 overflow-x-auto whitespace-nowrap scrollbar-hide"
                >
                    <div className="inline-flex gap-6">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.id} >
                                <CardHeader>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}