import WorkoutCard from "../components/WorkoutCard";

export default function Dashboard() {
  const workouts = JSON.parse(localStorage.getItem("workouts")) || [];

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-4">Dashboard</h2>
      <h2 className="text-2xl mb-4">Recent workouts</h2>
      <div className="flex gap-4 justify-start">
        {workouts.map((item, index) => (
          <WorkoutCard key={index} workout={item} />
        ))}
      </div>
    </div>
  );
}