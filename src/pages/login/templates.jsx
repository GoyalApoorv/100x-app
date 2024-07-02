import { Outlet } from "react-router-dom";
import StepHeader from "../../components/StepHeader";
import PropTypes from "prop-types"; // ES6

import { useLocation } from "react-router-dom";
export const Base = () => {
  const { pathname } = useLocation();
  const step = pathname.split("/").pop().replace("step", "");
  return (
    <>
      <main className="flex h-screen w-full">
        <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
          <StepHeader step={step} />
          <Outlet />
        </section>
      </main>
      <footer></footer>
    </>
  );
};
Base.propTypes = {
  children: PropTypes.node,
  step: PropTypes.string,
};
