import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
  };

  const plans = [
    {
      id: 1,
      title: 'Basic Plan',
      price: billingCycle === 'monthly' ? '$10/month' : '$100/year',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Standard Plan',
      price: billingCycle === 'monthly' ? '$20/month' : '$200/year',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      title: 'Premium Plan',
      price: billingCycle === 'monthly' ? '$30/month' : '$300/year',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const handleBuyClick = (plan) => {
    // Handle buy action here, e.g., redirect to checkout page
    console.log(`Buying ${plan.title} plan`);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl text-center font-semibold mb-4">Choose a Plan</h2>
      <div className="flex justify-center mb-4">
        <button
          className={`mx-2 px-4 py-2 rounded-full border ${billingCycle === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleBillingCycleChange('monthly')}
        >
          Monthly
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-full border ${billingCycle === 'yearly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleBillingCycleChange('yearly')}
        >
          Yearly
        </button>
      </div>
      <div className="flex justify-center">
        {plans.map((plan) => (
          <div key={plan.id} className="w-1/3 p-4">
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <div className="text-2xl mb-4">{plan.price}</div>
              <p className="text-gray-600 mb-4">{plan.details}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                onClick={() => handleBuyClick(plan)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
