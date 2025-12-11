import type { GoalType } from "../App";
import CourseGoal from "./CourseGoal";

interface CourseGoalListProps{
goal:GoalType[]
}

export default function CourseGoalList({goal}:CourseGoalListProps) {
  return (
    <ul>
      {goal.map((goal) => (
        <li key={goal.id} className="list-none mt-2">
          {" "}
          <CourseGoal title={goal.title} description={goal.description} />
        </li>
      ))}
    </ul>
  );
}
