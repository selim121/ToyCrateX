import Typewriter from 'typewriter-effect';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How long does shipping take?',
      answer: 'We strive to process and ship orders within 1-2 business days. Shipping time varies depending on the destination, but typically takes 3-7 business days.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards, including Visa, Mastercard, American Express, and Discover. We also support PayPal as a payment option.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to select countries. Please check our Shipping and Delivery page for more information.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We have a 30-day return policy. If you are not satisfied with your purchase, you can return the item within 30 days of delivery for a refund or exchange. Please refer to our Returns and Refunds page for more details.'
    },
    {
      question: 'Are the toys safe for children?',
      answer: 'Yes, all the toys available on ToyCrateX undergo rigorous safety testing to ensure they meet the highest industry standards. We prioritize the safety and well-being of children.'
    },
    {
      question: 'Do you offer gift wrapping services?',
      answer: 'Yes, we offer gift wrapping services for a small additional fee. During the checkout process, you will have the option to select gift wrapping and add a personalized message.'
    },
    {
      question: 'Can I track my order?',
      answer: 'Absolutely! Once your order is shipped, we will provide you with a tracking number. You can use this tracking number to monitor the progress of your shipment.'
    },
    {
      question: 'What if I have a problem with my order?',
      answer: 'If you encounter any issues with your order, please contact our customer support team. We are here to assist you and resolve any problems promptly.'
    }
  ];

  return (
    <section className="bg-[#e2d5d566]">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="pb-12 text-center text-5xl font-bold text-[#612500f1]">
          <Typewriter
            options={{
              strings: ['Frequently Asked Questions'],
              autoStart: true,
              loop: true,
              deleteSpeed: 'natural',
            }}
          />
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500" key={index} tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
