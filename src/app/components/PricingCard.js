"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function YogaPlans() {
  const [activeTab, setActiveTab] = useState("Group Classes");
  const [showQR, setShowQR] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { classes: "1 class", price: 1, duration: "7 days" },
    { classes: "3 classes", price: 1450, duration: "7 days" },
    { classes: "8 classes", price: 2750, duration: "1 month" },
    { classes: "12 classes", price: 3000, duration: "1 month" },
  ];

  const handlePayClick = (plan) => {
    const upiUrl = `upi://pay?pa=vketan2188@okaxis&pn=KetanVardekar&am=${plan.price}&cu=INR&tn=YogaPlanPayment`;
    setSelectedPlan({ ...plan, upiUrl });
    setShowQR(true);
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen text-black">
      <h1 className="text-xl font-bold">BUY NEW PLAN</h1>
      <div className="flex mt-4 border-b-2">
        {["Group Classes", "Workshops"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-lg font-medium ${
              activeTab === tab ? "text-white bg-orange-500" : "text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 bg-green-100 p-4 rounded-lg">
        <h2 className="font-semibold text-black">
          Svaasthy Sadhna - Beginner to Intermediate
        </h2>
        <p className="text-sm text-black">
          Access to both online & in-studio classes
        </p>
      </div>
      <h3 className="mt-6 font-semibold text-black">
        Hybrid classes (Online and Offline both)
      </h3>
      <div className="mt-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mt-2"
          >
            <div>
              <p className="text-lg font-medium text-black">
                {plan.classes} • INR {plan.price}
              </p>
              <p className="text-sm text-black">Valid for {plan.duration}</p>
            </div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={() => handlePayClick(plan)}
            >
              Pay
            </button>
          </div>
        ))}
      </div>
      {showQR && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center flex flex-col items-center">
            <h2 className="text-lg font-bold text-black mb-4">
              Scan QR Code to Pay
            </h2>
            <QRCodeSVG value={selectedPlan?.upiUrl || ""} className="mx-auto" />
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowQR(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
