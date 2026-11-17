"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import type { Section } from "@/lib/questions";
import { Header, Icon, PrimaryButton, ProgressBar } from "./ui";

type Props = {
  section: Section;
  sectionNumber: number;
  sectionCount: number;
  progress: number;
  onContinue: () => void;
  onExit: () => void;
};

// Celebrates finishing a section, never getting answers right,
// so learners are never pushed to guess.
export default function SectionDoneScreen({ section, sectionNumber, sectionCount, progress, onContinue, onExit }: Props) {
  const sectionsLeft = sectionCount - sectionNumber;
  const isLast = sectionsLeft === 0;

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.4 },
      colors: ["#3b3bd9", "#c0c1ff", "#7cf994", "#62df7d", "#4042c8"],
      disableForReducedMotion: true,
    });
  }, []);

  return (
    <>
      <Header onExit={onExit} confirmExit={!isLast} />
      <main className="flex flex-1 flex-col pb-space-lg">
        <div className="flex flex-col gap-space-xs pt-space-md">
          <div className="flex items-center justify-between">
            <span className="text-label-sm uppercase text-outline">A1 Check</span>
            <span className="text-label-sm text-primary-container">
              Section {sectionNumber} of {sectionCount}
            </span>
          </div>
          <ProgressBar value={progress} />
        </div>

        <div className="my-auto flex flex-col items-center py-space-xl text-center">
          <div className="mb-space-lg flex h-28 w-28 items-center justify-center rounded-full bg-surface-container shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
              <Icon name="check_circle" filled className="text-[42px] text-primary-container" />
            </div>
          </div>
          <h1 className="mb-space-xs text-headline text-on-surface">{section} done!</h1>
          <p className="text-body-md text-outline">
            {isLast ? "All sections done" : `${sectionsLeft} ${sectionsLeft === 1 ? "section" : "sections"} to go`}
          </p>
        </div>

        <PrimaryButton onClick={onContinue}>
          <span>{isLast ? "See my results" : "Continue"}</span>
          <Icon name="arrow_forward" className="text-[20px]" />
        </PrimaryButton>
      </main>
    </>
  );
}
