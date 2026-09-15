import React from "react";
import "./Css/Testimonial.css";

const testimonials = [
  {
    name: "Anirudh Avani",
    title: "Excellent Prompt Service India",
    text: "Excellent prompt service. Delicious cake Great value for money. Delivered on time",
  },
  {
    name: "Varsha Yadav",
    title: "Flowers Were Delivered On Time, Ordered At India",
    text: "Thank you Flowera for the fresh flowers delivery in India",
  },
  {
    name: "Uma",
    title: "",
    text: "Best Florist in India online & offline, I have ordered a combo of cake and flower for my sister's birthday…. They delivered the bouquet on time. It was a midnight delivery of the combo, Roses & lilies were so fresh.",
  },
];

export default function Testimonial() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-heading">What Our Client Says</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.name}>
            <div className="testimonial-card-header">
              
              <div className="avatar-placeholder"></div>
            </div>
            <p className="testimonial-name">{t.name}</p>
            <div className="testimonial-body">
              {t.title && <h3 className="testimonial-title">{t.title}</h3>}
              <p className="testimonial-text">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}