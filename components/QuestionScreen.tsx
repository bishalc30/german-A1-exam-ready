"use client";

import { useState } from "react";
import { SECTION_INSTRUCTIONS, type Question } from "@/lib/questions";
import { NOT_SURE } from "@/lib/checkAnswer";
import { Header, Icon, PrimaryButton, ProgressBar } from "./ui";

type Props = {
  question: Question;
  numberInSection: number;
  sectionSize: number;
  progress: number; // 0 to 1, across all 15 questions
  onNext: (response: string) => void;
  onExit: () => void;
};

// One question per screen. No hints, no timer, no right/wrong feedback.
export default function QuestionScreen({ question, numberInSection, sectionSize, progress, onNext, onExit }: Props) {
  const [response, setResponse] = useState("");
  const isChoice = question.type === "choice";

  // Next needs an answer first:
  // - choice: an option or "I'm not sure" must be picked
  // - typed: at least one non-space character (or use "Skip" instead)
  const canGoNext = isChoice ? response !== "" : response.trim() !== "";

  function next() {
    if (canGoNext) onNext(response);
  }

  // Typed questions only: records a blank answer, which scores as wrong (0 points).
  function skip() {
    onNext("");
  }

  return (
    <>
      <Header onExit={onExit} confirmExit />
      <main className="flex flex-1 flex-col pb-space-lg">
        <div className="mb-space-lg flex flex-col gap-space-xs">
          <ProgressBar value={progress} />
          <span className="text-label-sm uppercase text-outline">
            {question.section} · {numberInSection} of {sectionSize}
          </span>
        </div>

        <p className="mb-space-md text-label-md text-on-surface-variant">
          {SECTION_INSTRUCTIONS[question.section][question.type]}
        </p>

        {/* Reading: the German text to read */}
        {question.text && (
          <div className="mb-space-lg rounded-lg bg-surface-container-low p-space-lg shadow-sm">
            <span className="mb-space-xs block text-label-sm uppercase text-outline">Text</span>
            <p lang="de" className="text-body-lg font-medium text-on-surface">
              &bdquo;{question.text}&ldquo;
            </p>
          </div>
        )}

        <h1 lang="de" className="mb-space-lg text-headline text-on-surface">
          <Prompt text={question.prompt} />
        </h1>

        {isChoice ? (
          <ChoiceOptions options={question.options ?? []} selected={response} onSelect={setResponse} />
        ) : (
          <TypedAnswer value={response} onChange={setResponse} onEnter={next} onSkip={skip} />
        )}

        <div className="mt-auto pt-space-lg">
          <PrimaryButton onClick={next} disabled={!canGoNext}>
            Next
          </PrimaryButton>
        </div>
      </main>
    </>
  );
}

// Shows the prompt with "___" drawn as a styled blank.
function Prompt({ text }: { text: string }) {
  const [before, after] = text.split("___");
  if (after === undefined) return <>{text}</>;
  return (
    <>
      {before}
      <span className="text-primary-container underline decoration-primary-container/30 underline-offset-8">
        _______
      </span>
      {after}
    </>
  );
}

// Text box for typed questions, with a low-key "Skip" link underneath.
function TypedAnswer({
  value,
  onChange,
  onEnter,
  onSkip,
}: {
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
  onSkip: () => void;
}) {
  return (
    <div className="flex flex-col">
      <div className="rounded bg-surface-container-low transition-colors focus-within:bg-surface-container">
        <label htmlFor="answer" className="sr-only">
          Type your answer
        </label>
        <input
          id="answer"
          lang="de"
          autoFocus
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onEnter()}
          placeholder="Type answer..."
          className="w-full rounded bg-transparent px-space-md py-space-md text-body-lg text-on-surface placeholder:text-outline focus:outline-none"
        />
      </div>
      <button
        type="button"
        onClick={onSkip}
        className="mt-space-sm self-center px-2 py-1 text-label-md text-outline underline-offset-4 hover:text-on-surface-variant hover:underline"
      >
        Skip
      </button>
    </div>
  );
}

// Three answer options plus "I'm not sure". The selected option is shown in
// neutral indigo, never green or red, so it can't look like feedback.
function ChoiceOptions({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}) {
  return (
    <div className="flex flex-col gap-space-sm" role="radiogroup">
      {options.map((option) => {
        const isSelected = selected === option;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={isSelected}
            lang="de"
            onClick={() => onSelect(option)}
            className={`flex min-h-[64px] w-full items-center justify-between rounded px-space-md py-space-sm text-left text-body-lg text-on-surface transition-all ${
              isSelected
                ? "bg-surface-container font-semibold shadow-sm ring-2 ring-primary-container"
                : "bg-surface-container-low hover:bg-surface-container"
            }`}
          >
            <span>{option}</span>
            <Icon
              name="check_circle"
              filled={isSelected}
              className={`text-primary-container transition-opacity ${isSelected ? "opacity-100" : "opacity-0"}`}
            />
          </button>
        );
      })}

      <div className="pt-space-xs">
        <button
          type="button"
          role="radio"
          aria-checked={selected === NOT_SURE}
          onClick={() => onSelect(NOT_SURE)}
          className={`flex min-h-[56px] w-full items-center justify-center rounded px-space-md py-space-sm text-label-md transition-all ${
            selected === NOT_SURE
              ? "bg-surface-container font-semibold text-primary shadow-sm ring-2 ring-primary-container"
              : "bg-surface-bright text-outline hover:bg-surface-container-low"
          }`}
        >
          {NOT_SURE}
        </button>
      </div>
    </div>
  );
}
