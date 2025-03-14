"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";

export default function YogaPlans() {
  const [activeTab, setActiveTab] = useState("Group Classes");
  const [showQR, setShowQR] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { classes: "1 class", price: 399, duration: "7 days" },
    { classes: "3 classes", price: 1099, duration: "7 days" },
    { classes: "8 classes", price: 2599, duration: "1 month" },
    { classes: "12 classes", price: 2999, duration: "1 month" },
    { classes: "16 classes", price: 3150, duration: "1 month" },
    { classes: "20 classes", price: 3400, duration: "1 month" },
    { classes: "24 classes", price: 7650, duration: "3 months" },
    { classes: "36 classes", price: 8400, duration: "3 months" },
    { classes: "48 classes", price: 9150, duration: "3 months" },
    { classes: "60 classes", price: 9500, duration: "3 months" },
    { classes: "48 classes", price: 14000, duration: "6 months" },
    { classes: "72 classes", price: 15500, duration: "6 months" },
    { classes: "96 classes", price: 17000, duration: "6 months" },
    { classes: "120 classes", price: 18500, duration: "6 months" },
    { classes: "96 classes", price: 23900, duration: "12 months" },
    { classes: "144 classes", price: 26900, duration: "12 months" },
    { classes: "192 classes", price: 29900, duration: "12 months" },
    { classes: "240 classes", price: 32900, duration: "12 months" },
  ];

  const handlePayClick = (plan) => {
    const upiUrl = `upi://pay?pa=krupalitrivedi111-2@oksbi&pn=KrupaliTrivedi&am=${plan.price}&cu=INR&tn=YogaPlanPayment`;
    setSelectedPlan({ ...plan, upiUrl });
    setShowQR(true);
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen text-black">
      <h1 className="text-xl font-bold">BUY OUR NEW PLANS</h1>
      <div className="flex mt-4 border-b-2">
        {["Group Classes"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-lg font-medium rounded-lg ${activeTab === tab ? "text-white bg-orange-500" : "text-black"
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
          Access to Online classes
        </p>
      </div>



      <motion.div
        className="mt-4 bg-green-100 p-4 rounded-lg text-center"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
      >
        <h2 className="font-semibold text-black">Early Bird Discount</h2>
        <h2 className="font-semibold text-black">
          Book Before 31st March : <span className="text-red-500">40% Off</span>
        </h2>
      </motion.div>


      <h3 className="mt-6 font-semibold text-black">
        Online Classes
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
