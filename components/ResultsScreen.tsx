"use client";

import { useEffect, useState } from "react";
import type { Section } from "@/lib/questions";
import {
  displayScore,
  READY_LINE,
  WEAK_SECTION_LINE,
  type Result,
  type SectionResult,
  type Verdict,
} from "@/lib/scoring";
import { Header, Icon, PrimaryButton, ProgressBar } from "./ui";

const SECTION_ICONS: Record<Section, string> = {
  Vocabulary: "translate",
  Grammar: "spellcheck",
  Reading: "menu_book",
};

const VERDICT_STYLES: Record<Verdict, { icon: string; className: string }> = {
  Ready: { icon: "check_circle", className: "bg-secondary-container/40 text-secondary" },
  "Almost ready": { icon: "trending_up", className: "bg-surface-container text-primary-container" },
  "Not ready": { icon: "error", className: "bg-error-container/40 text-error" },
};

// Results only. Correct answers are never shown.
export default function ResultsScreen({ result, onRetake }: { result: Result; onRetake: () => void }) {
  const verdictStyle = VERDICT_STYLES[result.verdict];
  const weakestScore = result.sections.find((s) => s.section === result.weakest)!.score;

  return (
    <>
      <Header />
      <ScrollHint />
      <main className="flex flex-1 flex-col pb-10">
        <ProgressBar value={1} />

        {/* Overall score and verdict */}
        <div className="mb-8 mt-8 flex flex-col items-center text-center">
          <div className="flex items-baseline">
            <span className="text-display font-extrabold text-primary-container">{displayScore(result.overall)}</span>
            <span className="ml-0.5 text-headline text-primary-container">%</span>
          </div>
          <div className={`mt-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 ${verdictStyle.className}`}>
            <Icon name={verdictStyle.icon} filled className="text-[18px]" />
            <span className="text-label-lg">{result.verdict}</span>
          </div>
          {weakestScore < 100 && (
            <p className="mt-3 text-body-md text-on-surface-variant">
              Work on {result.weakest.toLowerCase()} first.
            </p>
          )}
        </div>

        {/* Each section as "X of 5 right" */}
        <div className="mb-4 flex flex-col gap-3 rounded-lg bg-surface-container-low p-5">
          {result.sections.map((s) => (
            <SectionRow key={s.section} result={s} />
          ))}
        </div>

        {/* Warnings: weak sections, then slow time */}
        {result.weakSections.map((section) => (
          <Warning key={section} icon="error">
            {result.verdict === "Ready"
              ? `Ready, but ${section.toLowerCase()} is a real gap. Practise it before you book.`
              : `${section} is a real gap. Practise it before you book.`}
          </Warning>
        ))}
        {result.slow && <Warning icon="schedule">You&rsquo;re accurate but slow. Practise under time before you book.</Warning>}

        {/* Practice tips */}
        <div className="mb-8 mt-2 flex flex-col gap-3">
          <h2 className="px-1 text-label-md uppercase tracking-wider text-on-surface-variant">Recommended focus</h2>
          {result.tips.length === 0 ? (
            <p className="rounded bg-surface-container-low p-3.5 text-body-md">Nothing to fix. Every answer was right.</p>
          ) : (
            result.tips.map((tip) => (
              <div key={tip} className="flex items-center gap-3 rounded bg-surface-container-low p-3.5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary-container" />
                <span className="text-body-md">{tip}</span>
              </div>
            ))
          )}
        </div>

        <div className="mt-auto">
          <PrimaryButton onClick={onRetake}>
            <Icon name="refresh" className="text-[20px]" />
            <span>Retake the check</span>
          </PrimaryButton>
        </div>
      </main>
    </>
  );
}

// "Scroll for your practice tips" hint. Shown only when the page is taller than
// the screen, and hidden for good once the learner scrolls.
function ScrollHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // results always start at the top
    const pageIsTaller = document.documentElement.scrollHeight > window.innerHeight + 8;
    setVisible(pageIsTaller);

    function hide() {
      if (window.scrollY > 10) {
        setVisible(false);
        window.removeEventListener("scroll", hide);
      }
    }
    window.addEventListener("scroll", hide);
    return () => window.removeEventListener("scroll", hide);
  }, []);

  if (!visible) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-10 flex justify-center">
      <span className="motion-safe:animate-gentle-bounce rounded-full bg-surface-container px-4 py-2 text-label-md text-primary shadow-sm">
        Scroll for your practice tips ↓
      </span>
    </div>
  );
}

function SectionRow({ result }: { result: SectionResult }) {
  // Colour by section score: red below 40%, green at 60%+, indigo in between.
  let textColour = "text-on-surface-variant";
  let barColour = "bg-primary-container";
  if (result.score < WEAK_SECTION_LINE) {
    textColour = "text-error";
    barColour = "bg-error";
  } else if (result.score >= READY_LINE) {
    textColour = "text-secondary";
    barColour = "bg-secondary";
  }

  return (
    <div>
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center gap-2.5">
          <Icon name={SECTION_ICONS[result.section]} className={`text-[20px] ${textColour}`} />
          <span className="text-body-md font-medium">{result.section}</span>
        </div>
        <span className={`text-label-md font-semibold ${textColour}`}>
          {result.rightCount} of {result.total} right
        </span>
      </div>
      <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-surface-variant">
        <div className={`h-full rounded-full ${barColour}`} style={{ width: `${(result.rightCount / result.total) * 100}%` }} />
      </div>
    </div>
  );
}

function Warning({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-start gap-3 rounded-lg bg-error-container/40 px-4 py-3">
      <Icon name={icon} className="mt-0.5 shrink-0 text-[20px] text-error" />
      <p className="text-body-md font-medium leading-tight text-error">{children}</p>
    </div>
  );
}
