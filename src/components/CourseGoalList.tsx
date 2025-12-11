import type { GoalType } from "../App";
import CourseGoal from "./CourseGoal";

interface CourseGoalListProps {
  goal: GoalType[];
  handleDeleteGoal: (id:number) => void;
}

export default function CourseGoalList({
  goal,
  handleDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goal.map((goal) => (
        <li key={goal.id} className="list-none mt-2">
          {" "}
          <CourseGoal title={goal.title} description={goal.description} id={goal.id} handleDeleteGoal={handleDeleteGoal} />
        </li>
      ))}
    </ul>
  );
}
