export const config = { runtime: "edge" };
import Copyright from "../components/copyright";
export default function Edge() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix@Edge</h1>
      <Copyright/>
    </div>
  );
}
