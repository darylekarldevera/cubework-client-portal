import { Outlet } from "react-router-dom";

// Dummy component to be replaced with actual components for the respective routes
const DummyComponent = ({ text }: { text: string }) => (
  <div>
    <p>{text}</p>
    <Outlet />
  </div>
);

export default DummyComponent;