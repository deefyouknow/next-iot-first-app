import { Suspense } from "react";

interface Student {
  params: {
    stdid: string;
  };
}

const StudentPage = async ({ params }: Student) => {
  const {stdid} = params;
  return (
    <div>
      <h1>Welcome to SAU</h1>
      <h1>{stdid}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <h1>{stdid}</h1>
        </div>
      </Suspense>
    </div>
  );
};

export default StudentPage;
