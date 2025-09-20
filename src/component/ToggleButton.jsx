import React from "react";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const ToggleButton = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group relative flex h-7 w-17 cursor-pointer rounded-full bg-quaternary p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-quaternary data-focus:outline data-focus:outline-white"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-10"
        />
      </Switch>
    </div>
  );
};

export default ToggleButton;
