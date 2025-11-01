import React from 'react';

const JobApplyForm = ({ job, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    linkedin: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call, etc.)
    console.log('Form submitted:', { job, ...formData });
    onClose(); // Close the form after submission
  };

  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-2xl font-bold text-[#0d161b]">Apply for {job?.title}</h2>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        </button>
      </div>

      <p className="text-[#4c799a] mb-6">at {job?.company}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#0d161b] mb-1">Full Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border text-[#000000] border-[#e7eef3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bfcad2]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0d161b] mb-1">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border text-[#000000] border-[#e7eef3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c799a]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0d161b] mb-1">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border text-[#000000] border-[#e7eef3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c799a]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0d161b] mb-1">Resume/CV*</label>
            <div className="flex items-center">
              <label className="cursor-pointer bg-[#8dbddf] hover:bg-[#d0dde8] px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Upload File
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
              </label>
              {formData.resume && (
                <span className="ml-3 text-sm text-[#4c799a]">{formData.resume.name}</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#0d161b] mb-1">Cover Letter</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border text-[#000000] border-[#e7eef3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c799a]"
            placeholder="Write a brief cover letter explaining why you're a good fit for this position..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#0d161b] mb-1">Portfolio Website</label>
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-[#000000] border-[#e7eef3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c799a]"
              placeholder="https://"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0d161b] mb-1">LinkedIn Profile</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-[#000000] border-[#e7eef3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c799a]"
              placeholder="https://linkedin.com/in/your-profile"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-[#4c799a] text-[#4c799a] rounded-lg hover:bg-[#f0f5f9] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#4c799a] text-white rounded-lg hover:bg-[#3a5f7a] transition-colors"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplyForm;