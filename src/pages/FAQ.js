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
        answer: "I recommend placing orders at least 48-72 hours in advance for standard boards. For large events, grazing tables, or custom orders, I suggest 1-2 weeks notice to ensure availability and proper planning."
      },
      {
        id: "minimum-order",
        question: "What is your minimum order?",
        answer: "My minimum order is 10 pieces for charcuterie cups and boxes. For boards and other items, there's no minimum order requirement."
      },
      {
        id: "delivery",
        question: "Do you offer delivery?",
        answer: "Yes! I offer local delivery within a 15-mile radius. Delivery fees may apply based on distance. Contact me for specific delivery pricing to your area."
      },
      {
        id: "payment-methods",
        question: "What payment methods do you accept?",
        answer: "I accept all major credit cards, Venmo, PayPal, and cash. For large orders over $500, I require a deposit to secure your booking."
      }
    ]
  },
  {
    category: "Menu & Customization",
    questions: [
      {
        id: "customize-board",
        question: "Can I customize my charcuterie board?",
        answer: "Absolutely! I love creating custom boards. You can specify dietary restrictions, favorite items, or let me know about any allergies. I also offer 'Build Your Own' options where you can select specific items."
      },
      {
        id: "dietary-restrictions",
        question: "Do you accommodate dietary restrictions?",
        answer: "Yes! I can accommodate vegetarian, vegan, gluten-free, and other dietary restrictions. Please let me know about any allergies or dietary needs when placing your order."
      },
      {
        id: "grazing-table-includes",
        question: "What's included in your grazing tables?",
        answer: "My grazing tables include premium meats, artisanal cheeses, fresh fruits, nuts, olives, crackers, and decorative elements. I provide setup, styling, and cleanup. I do not provide tables, tablecloths, plates, napkins, or forks."
      },
      {
        id: "themed-boards",
        question: "Can you create themed boards?",
        answer: "Yes! I love creating themed boards for holidays, birthdays, anniversaries, and special occasions. Just let me know your theme and I'll design something special for you."
      }
    ]
  },
  {
    category: "Delivery & Setup",
    questions: [
      {
        id: "setup-service",
        question: "Do you set up the boards at my location?",
        answer: "Yes! For grazing tables and large orders, I provide full setup service. I'll arrive at your specified time, set up the display beautifully, and return for cleanup if arranged."
      },
      {
        id: "reschedule",
        question: "What if I need to reschedule my order?",
        answer: "I understand plans change! Please give me at least 24 hours notice for rescheduling. Orders canceled less than 24 hours before delivery may incur a cancellation fee."
      },
      {
        id: "freshness",
        question: "How long do the boards stay fresh?",
        answer: "My boards are designed to stay fresh for 2-3 hours at room temperature. For longer events, I can provide recommendations for keeping items fresh or offer replenishment services."
      },
      {
        id: "service-area",
        question: "What areas do you serve?",
        answer: "I primarily serve the local area within a 15-mile radius. Contact me with your specific location and I'll let you know if I can accommodate your event."
      }
    ]
  },
  {
    category: "Special Events",
    questions: [
      {
        id: "weddings",
        question: "Do you cater weddings?",
        answer: "Yes! I specialize in wedding charcuterie and grazing tables. I offer custom packages for rehearsal dinners, cocktail hours, and reception displays. Contact me for wedding-specific pricing and packages."
      },
      {
        id: "corporate-events",
        question: "Can you handle corporate events?",
        answer: "Absolutely! I provide corporate catering for meetings, conferences, office parties, and client events. I can work with your budget and dietary requirements."
      },
      {
        id: "party-packages",
        question: "Do you offer party packages?",
        answer: "Yes! I have packages for birthdays, anniversaries, baby showers, and other celebrations. My packages can be customized based on your guest count and preferences."
      },
      {
        id: "largest-event",
        question: "What's the largest event you can handle?",
        answer: "I can accommodate events of all sizes, from intimate gatherings to large corporate events with 200+ guests. For very large events, I may require additional setup time and staff."
      }
    ]
  },
  {
    category: "General",
    questions: [
      {
        id: "local-ingredients",
        question: "Are your ingredients locally sourced?",
        answer: "I prioritize local and high-quality ingredients whenever possible. I work with local suppliers for fresh produce and artisanal products to ensure the best quality for my customers."
      },
      {
        id: "insurance",
        question: "Do you have insurance?",
        answer: "Yes, I am fully licensed and insured for food service and catering. I can provide certificates of insurance upon request for venue requirements."
      },
      {
        id: "examples",
        question: "Can I see examples of your work?",
        answer: "Absolutely! Check out my gallery page to see photos of my boards and grazing tables. You can also follow me on Instagram @cozys.charcutes for the latest creations."
      },
      {
        id: "quote",
        question: "How do I get a quote for my event?",
        answer: "You can request a quote by filling out my custom order form, calling me directly, or sending me a message through my contact page. I'll respond within 24 hours with pricing and availability."
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

        {faqData.map((category, catIndex) => (
          <div key={catIndex} className="faq-category-section">
            <h2 className="faq-category-title">{category.category}</h2>
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
        ))}

        <div className="faq-contact-cta">
          <h3>Still have questions?</h3>
          <p>If you can't find the answer you're looking for, feel free to <a href="/contact">contact me directly</a>!</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
