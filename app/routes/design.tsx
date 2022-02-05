import { Outlet } from "remix";

export default function Design() {
  return (
    <div>
      <h1>Design Patterns</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
