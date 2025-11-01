import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CVBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("Modern");
  const [selectedExample, setSelectedExample] = useState("Software Engineer");
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  const templates = [
    { id: 1, name: "Modern", image: "/src/assets/modern.jpg" },
    { id: 2, name: "Classic", image: "/src/assets/classic.jpg" },
    { id: 3, name: "Creative", image: "/src/assets/creative.jpg" },
  ];

  const examples = [
    "Software Engineer",
    "Marketing Specialist",
    "Teacher",
    "Accountant",
    "Graphic Designer",
    "Other",
  ];

  const handleStartBuilding = () => {
    navigate("/cv-editor", {
      state: { template: selectedTemplate, example: selectedExample },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CV Builder</h1>
          <p className="text-lg text-gray-600">
            Create a professional CV tailored for the Sri Lankan job market.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-8 mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Choose a Template
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                name={template.name}
                image={template.image}
                selected={selectedTemplate === template.name}
                onClick={() => setSelectedTemplate(template.name)}
                onPreview={() => setShowPreview(true)}
              />
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            CV Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((example) => (
              <ExampleCard
                key={example}
                name={example}
                selected={selectedExample === example}
                onClick={() => setSelectedExample(example)}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleStartBuilding}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-lg transition duration-150 ease-in-out"
          >
            Start Building Your CV
          </button>
        </div>
      </div>

      {/* Template Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{selectedTemplate} Template Preview</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <img
                  src={`/images/${selectedTemplate.toLowerCase()}-template.jpg`}
                  alt={`${selectedTemplate} Template`}
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowPreview(false)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TemplateCard = ({ name, image, selected, onClick, onPreview }) => {
  return (
    <div
      className={`border-2 rounded-lg overflow-hidden cursor-pointer transition duration-150 ease-in-out ${
        selected ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <div className="h-40 bg-gray-100 relative">
        <img
          src={image || "/images/default-template.jpg"}
          alt={`${name} Template`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPreview();
          }}
          className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs hover:bg-opacity-70"
        >
          Preview
        </button>
      </div>
      <div
        className="p-4"
        onClick={onClick}
      >
        <h3
          className={`text-center font-medium ${
            selected ? "text-blue-600" : "text-gray-700"
          }`}
        >
          {name}
        </h3>
      </div>
    </div>
  );
};

const ExampleCard = ({ name, selected, onClick }) => {
  return (
    <div
      className={`border-2 rounded-lg p-4 cursor-pointer transition duration-150 ease-in-out ${
        selected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={onClick}
    >
      <h3
        className={`text-center font-medium ${
          selected ? "text-blue-600" : "text-gray-700"
        }`}
      >
        {name}
      </h3>
    </div>
  );
};

export default CVBuilder;