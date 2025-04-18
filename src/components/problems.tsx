import { ScenarioData } from "@/models/scenario";

interface ProblemsProps {
  scenario?: ScenarioData;
}

export function Problems({ scenario }: ProblemsProps) {
  if (!scenario?.problems || scenario.problems.length === 0) {
    return null;
  }

  return (
    <div className="mt-2">
      <p>Here are the things that need attention:</p>
      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
        {scenario.problems.map((problem, idx) => (
          <li key={idx}>{problem}</li>
        ))}
      </ul>
    </div>
  );
}
