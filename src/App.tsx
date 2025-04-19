import { useMemo, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import data from "./data.json";
import { extension, Extension } from "./components/Extension";

function App() {
  const [originalData, setOriginalData] = useState(data);
  const [filter, setFilter] = useState<string>("all");

  const filterData = useMemo(() => {
    switch (filter) {
      case "active":
        return originalData.filter((extension) => extension.isActive);
      case "inactive":
        return originalData.filter((extension) => !extension.isActive);
      case "all":
      default:
        return originalData;
    }
  }, [originalData, filter]);

  const handleChecked = (name: string) => {
    const updatedData = originalData.map((extension) => {
      return extension.name === name
        ? { ...extension, isActive: !extension.isActive }
        : extension;
    });
    setOriginalData(updatedData);
  };

  const handleRemove = (name: string) => {
    const updatedData = originalData.filter(
      (extension) => extension.name !== name
    );
    setOriginalData(updatedData);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <div className="header-container">
          <div className="header">
            <h1>Extensions List</h1>
          </div>
          <div className="filter-btn-container">
            {["All", "Active", "InActive"].map((btn: string, index: number) => {
              const lowerBtn = btn.toLowerCase();
              return (
                <button
                  className={`filter-btn ${
                    filter === lowerBtn ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => setFilter(lowerBtn)}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
        <div className="extension-container">
          {filterData.map((extension: extension) => (
            <Extension
              key={extension.name}
              {...extension}
              handleChecked={handleChecked}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
