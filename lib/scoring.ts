// All scoring rules from design.md live in this one file.
import { QUESTIONS, SECTIONS, TIPS, type Level, type Question, type Section } from "./questions";
import { checkAnswer, NOT_SURE } from "./checkAnswer";

// ---------- Weights (each section adds up to 100%) ----------
// Easy 15 + Medium 20 + Medium 20 + Hard 22.5 + Hard 22.5 = 100
export const WEIGHTS: Record<Level, number> = {
  easy: 15,
  medium: 20,
  hard: 22.5,
};

// Hard (multiple choice) questions only:
// right = +22.5, "I'm not sure" = 0, wrong = -11.25.
// A blind guess is right 1 time in 3: (1/3 x 22.5) + (2/3 x -11.25) = 0,
// so guessing gains nothing on average.
export const HARD_WRONG = -11.25;
export const NOT_SURE_POINTS = 0;

// ---------- Verdict bands (on the overall score) ----------
export const READY_LINE = 60; // 60% and above = Ready (same pass line as Goethe)
export const ALMOST_LINE = 50; // 50% to under 60% = Almost ready, below 50% = Not ready
export const WEAK_SECTION_LINE = 40; // any section below 40% gets a warning
export const SLOW_MINUTES = 20; // over 20 minutes adds the "accurate but slow" line

export type Verdict = "Ready" | "Almost ready" | "Not ready";
export type Outcome = "right" | "wrong" | "notSure";

// Learner's responses, keyed by question id (e.g. { V1: "Wohnung", V4: "die Rechnung" }).
export type Answers = Record<string, string>;

export type SectionResult = {
  section: Section;
  score: number; // 0–100
  rightCount: number; // shown as "X of 5 right"
  total: number;
};

export type Result = {
  overall: number; // average of the three section scores
  verdict: Verdict;
  sections: SectionResult[]; // in test order: Vocabulary, Grammar, Reading
  weakest: Section; // the section to practise first
  weakSections: Section[]; // sections below 40%, weakest first
  tips: string[]; // 0–3 practice tips, weakest section first
  slow: boolean; // took over 20 minutes
};

// Right, wrong or "I'm not sure" for one question.
export function getOutcome(question: Question, response: string | undefined): Outcome {
  if (question.type === "choice" && response === NOT_SURE) return "notSure";
  return checkAnswer(question, response ?? "") ? "right" : "wrong";
}

// Points for one question.
export function pointsFor(question: Question, outcome: Outcome): number {
  if (outcome === "right") return WEIGHTS[question.level];
  if (outcome === "notSure") return NOT_SURE_POINTS;
  // Wrong: only hard questions lose points. Typed questions need no penalty,
  // because you cannot guess a German word by luck.
  return question.level === "hard" ? HARD_WRONG : 0;
}

// Score for one section, out of 100%.
export function scoreSection(section: Section, answers: Answers): SectionResult {
  const questions = QUESTIONS.filter((q) => q.section === section);
  let points = 0;
  let rightCount = 0;
  for (const q of questions) {
    const outcome = getOutcome(q, answers[q.id]);
    points += pointsFor(q, outcome);
    if (outcome === "right") rightCount++;
  }
  // A section never goes below 0% (two wrong guesses and nothing else
  // would be -22.5%). This only affects very low scores.
  const score = Math.max(0, points);
  return { section, score, rightCount, total: questions.length };
}

export function getVerdict(overall: number): Verdict {
  if (overall >= READY_LINE) return "Ready";
  if (overall >= ALMOST_LINE) return "Almost ready";
  return "Not ready";
}

// Lowest score first. On a tie, keep the test order (Vocabulary, Grammar, Reading).
function weakestFirst(sections: SectionResult[]): SectionResult[] {
  return [...sections].sort(
    (a, b) => a.score - b.score || SECTIONS.indexOf(a.section) - SECTIONS.indexOf(b.section),
  );
}

// Up to 3 tips from the tags of questions answered wrong or "I'm not sure",
// weakest section first.
function getTips(sortedSections: SectionResult[], answers: Answers): string[] {
  const tips: string[] = [];
  for (const { section } of sortedSections) {
    for (const q of QUESTIONS.filter((q) => q.section === section)) {
      const missed = getOutcome(q, answers[q.id]) !== "right";
      const tip = TIPS[q.tag];
      if (missed && !tips.includes(tip)) tips.push(tip);
    }
  }
  return tips.slice(0, 3);
}

export function scoreCheck(answers: Answers, minutesTaken: number): Result {
  const sections = SECTIONS.map((s) => scoreSection(s, answers));

  // Each section counts for one third of the final score.
  const overall = sections.reduce((sum, s) => sum + s.score, 0) / sections.length;

  const sorted = weakestFirst(sections);

  return {
    overall,
    // The verdict always follows the overall score. Weak sections add a
    // warning but never change the verdict.
    verdict: getVerdict(overall),
    sections,
    weakest: sorted[0].section,
    weakSections: sorted.filter((s) => s.score < WEAK_SECTION_LINE).map((s) => s.section),
    tips: getTips(sorted, answers),
    slow: minutesTaken > SLOW_MINUTES,
  };
}

// Score for display, rounded to one decimal: 170 / 3 = 56.666 shows as 56.7.
// Every possible score is a multiple of 1.25 / 3, so the closest score below
// 60 is 59.58, which shows as 59.6, never as a misleading "60".
export function displayScore(score: number): number {
  return Math.round(score * 10) / 10;
}
