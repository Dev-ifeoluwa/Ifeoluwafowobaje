import React, { useState } from "react";

const tabs = [
  {
    title: "Experience",
    items: ["UI Designer", "Graphics Designer", "Web Designer", "Apps Designer" ],
  },
  {
    title: "Skills",
    items: ["HTML & CSS", "JavaScript", "ReactJS", "Tailwind CSS"],
  },
];

const ToggleTabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Experience is default
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.title}
            style={{
              padding: "20px 60px",
              fontSize: "1.3em",
              fontWeight: "bold",
              background: activeTab === idx ? "blueviolet" : "#eee",
              color: activeTab === idx ? "#fff" : "#333",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
            onClick={() => setActiveTab(idx)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
        {tabs[activeTab].items.map((item, idx) => (
          <li
            key={idx}
            style={{
              padding: "30px 0",
              fontSize: "20px",
              borderBottom: "1px solid #eee",
              textAlign: "center",
              color: "gray"
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToggleTabs;