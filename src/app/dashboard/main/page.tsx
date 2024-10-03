import { WidgetsGrid } from "@/components";

export const metadata = {
  title: "Admin Dashboard",
  description: "SEO Title",
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <h1 className="text-xl">Información General</h1>

      <div className="flex flex-wrap p-2 items-center justify-center gap-10">
        <WidgetsGrid />
      </div>
    </div>
  );
}
