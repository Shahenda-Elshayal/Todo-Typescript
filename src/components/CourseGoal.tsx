interface CourseGoalProps{
    title:string;
    description:string
}

export default function CourseGoal({title,description}:CourseGoalProps) {
  return (
    <>
      <div className="bg-pink-300 w-120 p-4 mt-10 mx-auto">
        <h2 className="font-semibold text-2xl mb-4 bg-amber-50 p-2">{title}</h2>
        <p className="font-medium text-xl mb-4 bg-amber-50 p-2">{description}</p>
        <button className="btn bg-pink-700 text-white w-full mx-auto block">
          delete
        </button>
      </div>
    </>
  );
}
