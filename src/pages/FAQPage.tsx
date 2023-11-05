
    
    export default function FAQPage  ()  {
      // Your FAQ content
      const faqData = [
        {
          question: "What are the shipping options?",
          answer: "We offer standard shipping and expedited shipping options. Standard shipping usually takes 3-5 business days, while expedited shipping takes 1-2 business days."
        },
        {
          question: "Can I return items if I'm not satisfied?",
          answer: "Yes, we have a 30-day return policy. If you're not satisfied with your purchase, you can return the item within 30 days for a full refund."
        },
      ];
    
      return (
        <div className="bg-orange-200 py-12">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
            
            <div className="grid grid-cols-1 gap-6">
              {faqData.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <h2 className="text-xl font-semibold">{item.question}</h2>
                  <p className="mt-2">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    

