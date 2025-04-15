export default function HomePage() {
  return (
    <main className="p-6 flex flex-col items-center justify-center text-center text-gray-600">
      <h1 className="text-2xl font-semibold mb-2">
        Welcome to Flight Plan Practice
      </h1>
      <p className="mb-4 max-w-md">
        Select a flight plan from the list on the left to view or interact with
        it.
      </p>
      <p className="text-sm text-gray-400">
        You can also copy a screenshot or share a direct link to a specific
        flight plan.
      </p>
    </main>
  );
}
