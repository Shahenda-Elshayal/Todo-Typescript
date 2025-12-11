interface CourseGoalProps {
  title: string;
  description: string;
}

export default function CourseGoal({ title, description }: CourseGoalProps) {
  return (
    <>
      <div className="bg-blue-50 p-2">
        <h2 className="font-semibold text-xl mb-2 bg-blue-200 p-2">{title}</h2>
        <p className="font-medium text-md mb-2 bg-blue-200 p-2">
          {description}
        </p>
        <button className="btn bg-pink-700 text-white w-full mx-auto block">
          delete
        </button>
      </div>
    </>
  );
}
