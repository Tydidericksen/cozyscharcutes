import React, { useState } from 'react';
import '../styles/FAQ.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const faqData = [
  {
    category: "Ordering & Pricing",
    questions: [
      {
        id: "advance-order",
        question: "How far in advance should I place my order?",
        answer: "I recommend placing orders at least one week in advance. If it's shorter notice, feel free to submit your order anyway, and I'll let you know if I'm available."
      },
      {
        id: "delivery",
        question: "Do you offer delivery?",
        answer: "Yes! I offer delivery within a 20-mile radius for a small fee. For locations beyond that, please reach out and we can work something out."
      },
      {
        id: "payment-methods",
        question: "What payment methods do you accept?",
        answer: "I currently accept Venmo and cash."
      }
    ]
  },
  {
    category: "Menu & Customization",
    questions: [
      {
        id: "customize-board",
        question: "Can I customize my charcuterie board?",
        answer: "Absolutely! If you have a theme or color scheme in mind, I'd love to work with it. Please share any inspiration photos as well so I can bring your vision to life."
      },
      {
        id: "dietary-restrictions",
        question: "Do you accommodate dietary restrictions?",
        answer: "Yes! Just let me know your dietary restrictions when ordering, and I'll be happy to create a board that works for you."
      },
      {
        id: "grazing-table-includes",
        question: "What's included in your grazing tables?",
        answer: "Grazing tables include a variety of specialty cheeses, cured meats, fresh fruit, vegetables, nuts, breads, crackers, desserts, and more."
      },
      {
        id: "themed-boards",
        question: "Can you create themed boards?",
        answer: "Yes—I love designing around themes! Be sure to include your theme details in your message, and I'll create something that matches your occasion."
      }
    ]
  },
  {
    category: "Delivery & Setup",
    questions: [
      {
        id: "setup-service",
        question: "Do you set up the boards at my location?",
        answer: "Charcuterie boards are prepared before pickup or delivery and simply dropped off. Grazing tables, however, are assembled and styled on-site to ensure everything is fresh and beautifully displayed."
      },
      {
        id: "reschedule",
        question: "What if I need to reschedule my order?",
        answer: "Rescheduling is no problem—just let me know at least one week before your event so I can adjust my schedule."
      },
      {
        id: "freshness",
        question: "How long do the boards stay fresh?",
        answer: "Boards typically stay fresh for 2–4 hours, depending on whether they are displayed indoors or outdoors."
      }
    ]
  },
  {
    category: "Special Events",
    questions: [
      {
        id: "weddings",
        question: "Do you cater weddings?",
        answer: "Yes! Weddings are some of my favorite events to cater."
      },
      {
        id: "corporate-events",
        question: "Can you handle corporate events?",
        answer: "Yes! I regularly create boards and grazing tables for corporate meetings, events, and celebrations."
      },
      {
        id: "largest-event",
        question: "What's the largest event you can handle?",
        answer: "The largest event I've catered so far was for more than 300 guests with a 16-foot grazing table. If your event is larger, I'd love to work with you—just be sure to submit your order early so we can plan accordingly."
      }
    ]
  },
  {
    category: "General",
    questions: [
      {
        id: "examples",
        question: "Can I see examples of your work?",
        answer: "Yes! You'll find a gallery right here on the website, plus links to my Instagram and TikTok accounts where I share my latest creations."
      },
      {
        id: "quote",
        question: "How do I get a quote for my event?",
        answer: "Submit an order form with details such as guest count and table size, and I'll get back to you as soon as possible with a personalized quote."
      }
    ]
  }
];

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="faq-page">
      <div className="container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Find answers to common questions about my services, ordering, and more.</p>

        <div className="faq-grid">
          {faqData.map((category, catIndex) => (
            <div key={catIndex} className="faq-category-card">
              <div className="faq-category-header">
                <h2 className="faq-category-title">{category.category}</h2>
              </div>
              <div className="faq-questions-container">
                {category.questions.map((q, qIndex) => (
                  <div key={qIndex} className="faq-item">
                    <button
                      className={`faq-question ${openQuestion === q.id ? 'active' : ''}`}
                      onClick={() => toggleQuestion(q.id)}
                      aria-expanded={openQuestion === q.id}
                    >
                      {q.question}
                      {openQuestion === q.id ? <RemoveIcon /> : <AddIcon />}
                    </button>
                    {openQuestion === q.id && (
                      <div className="faq-answer">
                        {q.answer.split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact-cta">
          <h3>Still have questions?</h3>
          <p>If you can't find the answer you're looking for, feel free to <a href="/contact">contact me directly</a>!</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
