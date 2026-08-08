import Link from "next/link";

type Tool = {
  title: string;
  description: string;
  href: string;
  topColor: string;
  icon: string;
};

const tools: Tool[] = [
  {
    title: "Math Story Word Problems",
    description: "Write custom math word problems based on what you're teaching and any story topic.",
    href: "/ai-tools/math-story-word-problems",
    topColor: "linear-gradient(to right, #22D3EE, #4ADE80)",
    icon: "🧮",
  },
  {
    title: "Writing Feedback",
    description: "Generate feedback on student writing based on custom criteria or a rubric.",
    href: "/ai-tools/writing-feedback",
    topColor: "linear-gradient(to right, #3B82F6, #8B5CF6)",
    icon: "🖊️",
  },
  {
    title: "Worksheet Generator",
    description: "Generate a worksheet based on any topic or text.",
    href: "/ai-tools/worksheet-generator",
    topColor: "linear-gradient(to right, #22D3EE, #3B82F6)",
    icon: "📄",
  },
  {
    title: "Lesson Plan Generator",
    description: "Generate a comprehensive lesson plan based on a standard or topic.",
    href: "/ai-tools/lesson-plan",
    topColor: "linear-gradient(to right, #F472B6, #FB923C)",
    icon: "🖥️",
  },
  {
    title: "Presentation Generator",
    description: "Generate exportable slides based on a topic, text, or video.",
    href: "/ai-tools/presentation-generator",
    topColor: "linear-gradient(to right, #22D3EE, #4ADE80)",
    icon: "📊",
  },
  {
    title: "Chat with Kiswa",
    description: "Hi! I'm Kiswa. I'm built for education. Ask me anything!",
    href: "/ai-tools/raina",
    topColor: "linear-gradient(to right, #3B82F6, #8B5CF6)",
    icon: "👧",
  },
];

export default function MagicTools() {
  return (
    <section
  className="relative overflow-hidden px-6 py-20"
  style={{
    backgroundColor: "#1E0243",
    backgroundImage:
      "radial-gradient(circle at 20% 30%, rgba(139,92,246,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.15), transparent 40%)",
  }}
>
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
          Discover Our Magic Tools
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-300">
          AI-powered tools that help teachers plan lessons, create assessments, and save hours every week.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group relative overflow-hidden rounded-xl text-left transition-transform hover:-translate-y-1"
              style={{ backgroundColor: "#1C0B53" }}
            >
              <div className="h-1 w-full" style={{ background: tool.topColor }} />
              <div className="flex items-start gap-3 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-lg">
                  {tool.icon}
                </div>
                <div className="flex-1 pr-6">
                  <h3 className="text-sm font-bold text-white">{tool.title}</h3>
                  <p className="mt-1 text-xs text-gray-300">{tool.description}</p>
                </div>
                <span className="absolute right-4 top-4 text-brand-pink">❤️</span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/teacher/tools"
          className="mt-10 inline-block rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(to right, #3B90FC, #D922F5)" }}
        >
          Explore All Magic Tools
        </Link>
      </div>
    </section>
  );
}