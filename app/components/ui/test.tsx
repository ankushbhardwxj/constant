import { Fragment, useEffect, useRef, useState } from "react";

function TestComponent() {
  const names = ["Alice", "Bob", "Charlie"];
  const [jobs, setJobs] = useState<string[]>([]);
  const liItem = useRef(null);

  const handleClick = () => {
    if (liItem.current) {
      (liItem.current as HTMLElement).click();
    }
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <Fragment>
        {names.map((name, idx) => (
          <li ref={liItem} onClick={handleClick} key={idx}>
            {" "}
            {name}{" "}
          </li>
        ))}
      </Fragment>
    </div>
  );
}
