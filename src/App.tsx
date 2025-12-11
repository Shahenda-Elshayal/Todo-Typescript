import Header from "./components/Header";
import GoalImg from "./assets/goal.png";
import "./index.css";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";

export interface GoalType {
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goal, setGoal] = useState<GoalType[]>([]);

  const handleAddGoal = () => {
    let newValue: GoalType = {
      title: "Learn React + TS",
      description: "Learn it from the ground up",
      id: Math.random(),
    };
    setGoal([...goal, newValue]);
  };

  return (
    <div className="bg-pink-300 w-120 mx-auto  p-4 mt-10">
      <Header image={{ src: GoalImg, alt: "A list of goals" }}>
        <h1 className="text-center mt-1 mb-4">A goal image</h1>
      </Header>

      <button className="btn mb-2" onClick={handleAddGoal}>
        Add Goal
      </button>

     <CourseGoalList goal={goal}/>
    </div>
  );
}

export default App;
