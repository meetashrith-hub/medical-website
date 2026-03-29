import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const reviews = [
    {
      service: "Eye Care",
      quote: "Our developers spend 9+ hours on screens. SKY Prism's on-site vision screening was a game-changer for reducing digital eye strain.",
      author: "HR Director",
      org: "Tech Park, Bangalore"
    },
    {
      service: "Dental",
      quote: "Bringing the clinic to our doorstep saved our team hours of commute time. Thorough, professional, and zero disruption to our workflow.",
      author: "Operations Manager",
      org: "FinTech Hub"
    },
    {
      service: "General Health",
      quote: "The health camp provided the data-driven insights we needed for our wellness strategy. Seamless execution from start to finish.",
      author: "VP of People",
      org: "MNC Corporation"
    }
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
          Trusted by Bangalore’s Leading Organizations
        </h2>
        
        {/* Responsive Grid: 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-blue-500 flex flex-col justify-between"
            >
              <div>
                <RiDoubleQuotesL className="text-blue-200 size-10 mb-4" />
                <p className="text-slate-600 italic mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>
              
              <div>
                <p className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1">
                  {item.service}
                </p>
                <p className="text-slate-900 font-semibold">{item.author}</p>
                <p className="text-slate-500 text-sm">{item.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;