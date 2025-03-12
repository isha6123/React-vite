import React from "react";
import salaryImg from "../assets/salary.jpg";
import notificationImg from "../assets/notification.jpg";

const PaymentNotificationSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 space-y-20">
      
      {/* Row 1 - Salary Payments */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={salaryImg}
            alt="Salary Payment"
            className="w-64 md:w-80 shadow-lg rounded-xl"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Record salary payments, <span className="font-semibold">cash-in/cash-out & Pay Online</span>
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg leading-relaxed">
            <li>
              Easy online payments for your staff salary, <b>advances in bulk</b>.
            </li>
            <li>
              Record your <b>business expenses, cash-in, and cash-out</b> on a single platform.
            </li>
          </ul>
        </div>
      </div>

      {/* Row 2 - Notifications */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Send notifications to your <span className="font-semibold">staff and vendors</span>
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg leading-relaxed">
            <li>
              Keep your staff updated by sending notifications for <b>attendance, late fines, and payments</b>.
            </li>
            <li>
              Receive <b>reminders</b> to help you manage your staff and business seamlessly.
            </li>
          </ul>
        </div>
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={notificationImg}
            alt="Notifications"
            className="w-64 md:w-80 shadow-lg rounded-xl"
          />
        </div>
      </div>

    </section>
  );
};

export default PaymentNotificationSection;


// import React from "react";
// import salaryImg from "../assets/salary.jpg";
// import notificationImg from "../assets/notification.jpg";

// const PaymentNotificationSection = () => {
//   return (
//     <section className="max-w-6xl mx-auto px-4 py-20 space-y-20">
      
//       {/* Row 1 */}
//       <div className="flex flex-col md:flex-row items-center gap-10">
//         {/* Image */}
//         <div className="flex-1 flex justify-center">
//           <img
//             src={salaryImg}
//             alt="Salary Payment"
//             className="w-64 md:w-80 shadow-lg rounded-xl"
//           />
//         </div>
//         {/* Text */}
//         <div className="flex-1">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Record salary payments, cash-in/cash-out & Pay Online
//           </h2>
//           <ul className="list-disc pl-5 space-y-2 text-gray-600">
//             <li>
//               Easy online payments for your staff salary, advances in bulk.
//             </li>
//             <li>
//               Record your business expenses, cash-in, and cash-out on a single platform.
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Row 2 */}
//       <div className="flex flex-col-reverse md:flex-row items-center gap-10">
//         {/* Text */}
//         <div className="flex-1">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Send notifications to your staff and vendors
//           </h2>
//           <ul className="list-disc pl-5 space-y-2 text-gray-600">
//             <li>
//               Keep your staff updated by sending notifications for attendance, late fine, payments.
//             </li>
//             <li>
//               Receive reminders to help you manage your staff and business seamlessly.
//             </li>
//           </ul>
//         </div>
//         {/* Image */}
//         <div className="flex-1 flex justify-center">
//           <img
//             src={notificationImg}
//             alt="Notifications"
//             className="w-64 md:w-80 shadow-lg rounded-xl"
//           />
//         </div>
//       </div>

//     </section>
//   );
// };

// export default PaymentNotificationSection;
