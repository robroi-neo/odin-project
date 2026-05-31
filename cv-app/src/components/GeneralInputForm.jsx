import { useState } from "react";

function GeneralInputForm({generalInfo, setGeneralInfo }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    name: generalInfo.name,
    city: generalInfo.city,
    street: generalInfo.street,
    country: generalInfo.country,
    phone: generalInfo.phone,
    email: generalInfo.email,
    linkedIn: generalInfo.linkedIn
  });


  // yeah this shit...
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setGeneralInfo(formData);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md space-y-5">
      <button
        type="button"
        onClick={() => setIsCollapsed((current) => !current)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={!isCollapsed}
      >
        <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
        <span className="text-sm font-medium text-gray-500 cursor-pointer">
          {isCollapsed ? "Expand" : "Collapse"}
        </span>
      </button>

      {!isCollapsed && (
        <>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              City
            </label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              type="text"
              placeholder="New York"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Street
            </label>
            <input
              name="street"
              value={formData.street}
              onChange={handleChange}
              type="text"
              placeholder="123 Main Street"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              type="text"
              placeholder="Philippines"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+63 912 345 6789"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="john@example.com"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              LinkedIn
            </label>
            <input
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              type="url"
              placeholder="https://linkedin.com/in/johndoe"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Save
          </button>
        </>
      )}
    </div>
  );
}

export default GeneralInputForm;