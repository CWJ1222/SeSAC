interface LectureProps {
  topic: string;
  duration: number; // 분 단위의 강의 시간
}

export default function Lecture({ topic, duration }: LectureProps) {
  return (
    <main>
      <h2>강의 주제: {topic}</h2>
      <p>강의 시간: {duration}분</p>
    </main>
  );
}
