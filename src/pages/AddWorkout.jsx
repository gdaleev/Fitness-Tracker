export default function AddWorkout() {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-4">Add Workout</h2>
      <form className="bg-white flex flex-col items-center gap-4 max-w-md mx-auto p-6 rounded shadow-md">
        <label>Workout name:</label>
        <input type="text" className="border p-2 w-64" />
        <label>Duration (minutes):</label>
        <input type="number" className="border p-2 w-64" />
        <label>Date:</label>
        <input type="date" className="border p-2 w-64" />
        <label>Notes (optional):</label>
        <textarea className="border p-2 w-64"></textarea>
        <input type="submit" className="bg-gray-300 font-semibold py-2 px-4 rounded cursor-pointer hover:bg-gray-200" value="Add workout" />
      </form>
    </div>
  );
}