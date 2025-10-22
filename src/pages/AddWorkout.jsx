import { useState, useEffect } from "react";

export default function AddWorkout() {
  const [formData, setFormData] = useState({
    "workout": "",
    "duration": "",
    "date": "",
    "notes": "",
  })

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("workouts")) || [];

    const updated = [...existing, formData];

    localStorage.setItem("workouts", JSON.stringify(updated));

    setFormData({
      "workout": "",
      "duration": "",
      "date": "",
      "notes": ""
    })

    localStorage.removeItem("formData");

    alert("Form submitted and saved!");
  }

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-4">Add Workout</h2>
      <form onSubmit={handleSubmit} className="bg-white flex flex-col items-center gap-4 max-w-md mx-auto p-6 rounded shadow-md">
        <label>Workout name:</label>
        <input type="text" className="border p-2 w-64" name="workout" value={formData.workout} onChange={handleChange} />
        <label>Duration (minutes):</label>
        <input type="number" className="border p-2 w-64" name="duration" value={formData.duration} onChange={handleChange} />
        <label>Date:</label>
        <input type="date" className="border p-2 w-64" name="date" value={formData.date} onChange={handleChange} />
        <label>Notes (optional):</label>
        <textarea className="border p-2 w-64" name="notes" value={formData.notes} onChange={handleChange}></textarea>
        <input type="submit" className="bg-gray-300 font-semibold py-2 px-4 rounded cursor-pointer hover:bg-gray-200" value="Add workout" />
      </form>
    </div>
  );
}