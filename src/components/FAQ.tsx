import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      name: "Managing Your Pickup",
      faqs: [
        {
          question: "The pickup date/time I requested no longer works. Can I cancel or reschedule?",
          answer: "Absolutely. You can cancel or reschedule your pickup by letting us know at least 3 hours before your scheduled window."
        },
        {
          question: "I've changed my mind about my pickup — can I update it?",
          answer: "Yes — as long as you notify us at least 3 hours in advance, we'll happily update your pickup time."
        },
        {
          question: "What days and times can I schedule a pickup?",
          answer: "You can book pickups 6 days a week — with time slots available from 6PM to 9PM. Choose a time that works for you during booking."
        },
        {
          question: "Do I need to be home at the time of pickup?",
          answer: "Nope. Just leave your item at the door (or a safe place), and we'll grab it during your chosen time window."
        },
        {
          question: "Do you return in-store purchases?",
          answer: "No — we only handle returns for online purchases that come with a return label or QR code. In-store-only purchases must be returned directly to the store."
        }
      ]
    },
    {
      name: "Service and Pickups",
      faqs: [
        {
          question: "What if my return is more than 15kg or 5 items?",
          answer: "No problem — just let us know before booking. We'll confirm the total and let you know if there's a small additional fee based on size or weight."
        },
        {
          question: "What do I need to do before baccksee picks it up?",
          answer: "You'll need to file the return with the store (like Amazon, Zara, or Aritzia) and send us the return label. Once we have that, we'll take care of the rest."
        },
        {
          question: "What stores can I return to?",
          answer: "We support 100+ online stores — including Amazon, Zara, Aritzia, Best Buy, and more."
        },
        {
          question: "Can I include pre-packed items?",
          answer: "Yes! If your item is already boxed and labeled — no problem. Just let us know when booking."
        },
        {
          question: "What happens after the driver picks up my return?",
          answer: "We'll deliver it to the return location and notify you once it's been dropped off."
        }
      ]
    },
    {
      name: "Pricing and Payment",
      faqs: [
        {
          question: "When do I need to pay?",
          answer: "You'll pay once you book your return pickup — not before. It's a simple, one-time payment when you schedule."
        },
        {
          question: "How much does it cost?",
          answer: "Flat $12 for up to 5 items (or 15kg total). No surprises."
        },
        {
          question: "Do I need to box the item before pickup?",
          answer: "Nope! Just leave it in any shopping bag or pouch — we handle the rest."
        },
        {
          question: "How and when will I get my refund?",
          answer: "Your refund will come directly from the store you purchased from — just like any regular return. Once we drop off your item, the store processes your refund based on their policy. We'll notify you once your return has been dropped off, and the store will handle your refund as usual."
        }
      ]
    },
    {
      name: "General",
      faqs: [
        {
          question: "Is baccksee affiliated with these brands?",
          answer: "Nope. We just do the legwork — you get the refund."
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("Managing Your Pickup");
  
  const currentFaqs = faqCategories.find(cat => cat.name === selectedCategory)?.faqs || [];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about baccksee returns service.
          </p>
        </div>
        
        {/* FAQ Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((category, index) => (
            <div 
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                selectedCategory === category.name 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              {category.name}
            </div>
          ))}
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {currentFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 py-2 shadow-lg border-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-pink-bright/20 text-pink-bright rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-12 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;