import BlogList from "./components/BlogList";

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        React Server Component - Example
      </h1>
      <BlogList />
    </main>
  );
}
