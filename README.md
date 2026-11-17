# Am I exam-ready?

A 10-minute check that tells A1 German learners whether they are ready to book the Goethe A1 exam.
It has 15 questions in 3 sections. There is no login and no database: everything runs in the browser.

Built with Next.js, TypeScript and Tailwind. The rules come from [Design.md](Design.md), the questions from [questions.md](questions.md), and the look from the minimal Stitch screens in [design/](design/).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

To deploy, push the repo to GitHub and import it in Vercel. No settings or environment variables are needed.

## Where things are

| File | What it does |
| --- | --- |
| [lib/questions.ts](lib/questions.ts) | All 15 questions, accepted answers, topic tags and practice tips |
| [lib/checkAnswer.ts](lib/checkAnswer.ts) | Decides whether one answer is right |
| [lib/scoring.ts](lib/scoring.ts) | Section scores, overall score, verdict, warnings and tips |
| [app/page.tsx](app/page.tsx) | Moves between screens: Start → Questions → Section done → Results |
| [components/](components/) | One file per screen |

## How "ready" is calculated

### 1. Each question earns points

Each section has 5 questions and is worth 100%.

| Question | Answer type | Right | "I'm not sure" | Wrong |
| --- | --- | --- | --- | --- |
| 1 easy | Typed | +15 | – | 0 |
| 2 medium | Typed | +20 each | – | 0 |
| 2 hard | Multiple choice | +22.5 each | 0 | **−11.25** |

Only hard questions lose points for a wrong answer, because they are the only ones that can be guessed. With three options a blind guess is right 1 time in 3, so on average (⅓ × 22.5) + (⅔ × −11.25) = 0. Guessing gains nothing, and "I'm not sure" is the honest, safe choice.

A section never goes below 0%.

### 2. Sections are averaged

Overall score = (Vocabulary + Grammar + Reading) ÷ 3. Each section counts for one third.

### 3. The overall score gives the verdict

| Overall score | Verdict |
| --- | --- |
| 60% and above | **Ready** (the same pass line as the real Goethe exam) |
| 50% to under 60% | **Almost ready** |
| Below 50% | **Not ready** |

On top of the verdict:

- **Weak-section warning.** Any section below 40% gets a warning such as "Grammar is a real gap. Practise it before you book." The warning never changes the verdict.
- **Slow warning.** Time is tracked silently and there is no visible timer. Anyone who takes over 20 minutes sees "You're accurate but slow. Practise under time before you book."
- **Practice tips.** Up to 3 tips come from the topic tags of questions answered wrong or with "I'm not sure", weakest section first.

### Examples for one section

| Result | Score |
| --- | --- |
| Easy + both medium right, "I'm not sure" on both hard | 55% |
| Same, plus one hard right and "I'm not sure" on the other | 77.5% |
| Same, plus one hard right and a wrong guess on the other | 66.25% |
| Everything right | 100% |

Example overall score: Vocabulary 46.25%, Grammar 66.25%, Reading 57.5% → 170 ÷ 3 = 56.7%, so the verdict is **Almost ready, work on vocabulary first**.

## How typed answers are checked

1. Capitals are ignored: "kaffee" counts as "Kaffee".
2. "ae", "oe", "ue" and "ss" count as "ä", "ö", "ü" and "ß".
3. Spaces and punctuation are ignored.
4. In Vocabulary and Reading, one wrong, missing or extra letter is allowed, for words of 5+ letters only. For example "Zimer" counts as "Zimmer", but "Kina" does not count as "Kino". Answers marked `exact: true` in questions.ts skip this rule, because one letter off is a different German word: "teuer" (Feuer, neuer, teurer) and "rechts" (recht).
5. Grammar must be exact, because one letter is the whole point ("kommst" vs "kommt").

## What the app never does

- It never shows hints, topic tags or a timer during the test.
- It never gives right/wrong feedback before the results.
- It never shows the correct answers, even on the results screen, so a retake can't be passed from memory.
