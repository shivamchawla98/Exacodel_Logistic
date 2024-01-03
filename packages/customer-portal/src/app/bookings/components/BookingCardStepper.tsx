import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function BookingStepper({
  handleStepClick,
  steps,
  fromDestinatio,
  toDestination,
}: any) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step: any, stepIdx: any) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : "",
              "relative"
            )}
          >
            {step.status === "complete" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-sky-600" />
                </div>
                <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 hover:bg-sky-900">
                  <CheckIcon
                    className="h-4 w-4 text-white"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </div>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                  key={step.name}
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div
                  onClick={() => handleStepClick(stepIdx)}
                  className="group relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
