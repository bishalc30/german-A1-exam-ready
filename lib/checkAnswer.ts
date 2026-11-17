// Checks one answer. Rules from design.md, "Checking typed answers".
import type { Question } from "./questions";

export const NOT_SURE = "I'm not sure";

// Rules 1–3: ignore capitals, accept ae/oe/ue/ss for ä/ö/ü/ß,
// and ignore spaces and punctuation.
// Both the learner's answer and the correct answer go through this,
// so "Büro", "buero" and " BUERO. " all become "buero".
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z]/g, ""); // drop spaces, punctuation and anything else
}

// Rule 4 helper: true if a and b differ by at most one letter:
// one wrong letter ("Zimmar"), one missing ("Zimer") or one extra ("Zimmerr").
export function withinOneEdit(a: string, b: string): boolean {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;

  // Make `a` the shorter (or equal) one.
  if (a.length > b.length) [a, b] = [b, a];

  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    edits++;
    if (edits > 1) return false;
    if (a.length === b.length) i++; // same length: one wrong letter, skip it in both
    j++; // b is longer: skip the extra letter in b
  }
  // A leftover letter at the end of b also counts as an edit.
  edits += b.length - j;
  return edits <= 1;
}

// Checks a typed answer against one correct answer.
function typedMatches(question: Question, typed: string, correct: string): boolean {
  const given = normalize(typed);
  const expected = normalize(correct);
  if (given === "") return false; // blank answer is wrong
  if (given === expected) return true;

  // Rule 5: grammar must be exact ("wohne" vs "wohnt" is the whole point).
  if (question.section === "Grammar") return false;

  // Questions marked `exact` skip the one-letter rule too, because one letter
  // off is a different German word (e.g. "rechts" vs "recht").
  if (question.exact) return false;

  // Rule 4: one wrong letter, only for words of 5+ letters (counted on the
  // real spelling, so "Büro" and "Kino" stay exact and "Brot" can't become "Boot").
  if (correct.length < 5) return false;
  return withinOneEdit(given, expected);
}

// Returns true if the learner's response is correct.
// Choice questions must match the correct option's text exactly. Its position
// doesn't matter, because the options are shuffled on screen.
// "I'm not sure" is never correct (scoring.ts gives it 0 points).
export function checkAnswer(question: Question, response: string): boolean {
  if (question.type === "choice") {
    return question.accepted.includes(response);
  }
  return question.accepted.some((correct) => typedMatches(question, response, correct));
}
