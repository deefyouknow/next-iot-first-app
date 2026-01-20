import { Suspense } from "react";

interface StudentPageProps {
  params: {
    stdid: string;
  };
}
const StudentPage = async ({ params }: StudentPageProps) => {
  const { stdid } = await params;
  return (
    <div>
      <h1>Welcome to SAU</h1>
      {/* Displaying the stdid from the params */}
      <h1>Student ID: {stdid}</h1>
      <Suspense fallback={<div>Loading student details...</div>}>
        <div>
          {/* Displaying the stdid in the details section as well */}
          <h2>Details for Student ID: {stdid}</h2>
          {/* You would typically fetch and display student data here */}
        </div>
      </Suspense>
    </div>
  );
};

export default StudentPage;
