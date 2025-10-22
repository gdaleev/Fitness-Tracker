export default function WorkoutCard({ workout }) {
    return (
        <div className="bg-white flex flex-col items-center gap-2 p-4 rounded shadow-md w-64 h-64">
            <h2 className="font-bold">{workout.workout}</h2>
            <ul className="text-center">
                <li>Duration: {workout.duration} minutes</li>
                <li>Date: {workout.date}</li>
                {workout.notes && <li>Notes: {workout.notes}</li>}
            </ul>
        </div>
    )
}