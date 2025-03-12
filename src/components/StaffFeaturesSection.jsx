import React from "react";
import attendanceImg from "../assets/attendance.jpg";
import paymentImg from "../assets/payment.jpg";

const StaffFeaturesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row items-center mb-20 gap-10">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={attendanceImg}
            alt="Attendance"
            className="w-64 md:w-80 shadow-lg rounded-xl"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Keep track of your staff attendance
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg leading-relaxed">
            <li>
              Track your attendance with <b>selfie, location, or face biometric</b> based attendance.
            </li>
            <li>
              Supervisors can <b>approve attendance, mark absent, add late fines, and more</b>.
            </li>
          </ul>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Manage your staff salary, PF, Advances & Deductions
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg leading-relaxed">
            <li>
              Manage salary payments for your <b>regular, daily, weekly, or monthly</b> staff.
            </li>
            <li>
              Record <b>advances, deductions, or loans</b> and generate payslips easily.
            </li>
          </ul>
        </div>
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={paymentImg}
            alt="Payment"
            className="w-64 md:w-80 shadow-lg rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default StaffFeaturesSection;


// import React from "react";
// import attendanceImg from "../assets/attendance.jpg";
// import paymentImg from "../assets/payment.jpg";

// const StaffFeaturesSection = () => {
//   return (
//     <section className="max-w-6xl mx-auto px-4 py-20">
//       {/* Row 1 */}
//       <div className="flex flex-col md:flex-row items-center mb-20 gap-10">
//         <div className="flex-1 flex justify-center">
//           <img
//             src={attendanceImg}
//             alt="Attendance"
//             className="w-64 md:w-80 shadow-lg rounded-xl"
//           />
//         </div>
//         <div className="flex-1">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Keep track of your staff attendance
//           </h2>
//           <ul className="list-disc pl-5 space-y-2 text-gray-600">
//             <li>
//               Track your attendance with selfie, location, or face biometric based attendance.
//             </li>
//             <li>
//               Supervisors can approve attendance, mark absent, add late fines, and more.
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Row 2 */}
//       <div className="flex flex-col-reverse md:flex-row items-center gap-10">
//         <div className="flex-1">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Manage your staff salary, PF, Advances & Deductions
//           </h2>
//           <ul className="list-disc pl-5 space-y-2 text-gray-600">
//             <li>
//               Manage salary payments for your regular, daily, weekly, or monthly staff.
//             </li>
//             <li>
//               Record advances, deductions, or loans and generate payslips.
//             </li>
//           </ul>
//         </div>
//         <div className="flex-1 flex justify-center">
//           <img
//             src={paymentImg}
//             alt="Payment"
//             className="w-64 md:w-80 shadow-lg rounded-xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StaffFeaturesSection;

