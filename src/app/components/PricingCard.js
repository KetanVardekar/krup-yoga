"use client"

import { useState } from "react";

export default function YogaPlans() {
  const [activeTab, setActiveTab] = useState("Group Classes");
  
  const plans = [
    { classes: "1 class", price: 499, duration: "7 days" },
    { classes: "3 classes", price: 1450, duration: "7 days" },
    { classes: "8 classes", price: 2750, duration: "1 month" },
    { classes: "12 classes", price: 3000, duration: "1 month" },
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold">BUY NEW PLAN</h1>
      <div className="flex mt-4 border-b-2">
        {["Group Classes"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-lg font-medium ${
              activeTab === tab ? "text-white bg-orange-500" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 bg-green-100 p-4 rounded-lg">
        <h2 className="font-semibold">Svaasthy Sadhna - Beginner to Intermediate</h2>
        <p className="text-sm text-gray-700">Access to both online & in-studio classes</p>
      </div>
      <h3 className="mt-6 font-semibold">Hybrid classes (Online and Offline both)</h3>
      <div className="mt-4">
        {plans.map((plan, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mt-2">
            <div>
              <p className="text-lg font-medium">{plan.classes} • INR {plan.price}</p>
              <p className="text-sm text-gray-600">Valid for {plan.duration}</p>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Pay</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}
