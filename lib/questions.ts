// All 15 questions of the check, copied from questions.md.
// 3 sections x 5 questions: 1 easy (typed), 2 medium (typed), 2 hard (choice).

export type Section = "Vocabulary" | "Grammar" | "Reading";
export type Level = "easy" | "medium" | "hard";
export type AnswerType = "typed" | "choice";

export type Question = {
  id: string;
  section: Section;
  level: Level;
  type: AnswerType;
  text?: string; // Reading only: the short German text to read first
  prompt: string; // "___" marks the blank
  options?: string[]; // choice only. "I'm not sure" is added by the UI, not listed here
  accepted: string[]; // correct answer(s). Never shown to the learner
  exact?: boolean; // true = no one-letter leniency, because one letter off is a different German word
  tag: string; // hidden topic tag, used only for the practice tips
};

// Shown under each question as the English instruction for that section.
export const SECTION_INSTRUCTIONS: Record<Section, { typed: string; choice: string }> = {
  Vocabulary: {
    typed: "Type the German word for the English word in brackets.",
    choice: "Choose one answer.",
  },
  Grammar: {
    typed: "Type the correct form of the word in brackets. Grammar answers must be exact.",
    choice: "Choose one answer.",
  },
  Reading: {
    typed: "Read the text, then type one German word.",
    choice: "Read the text, then choose one answer.",
  },
};

export const SECTIONS: Section[] = ["Vocabulary", "Grammar", "Reading"];

export const QUESTIONS: Question[] = [
  // ---------- Vocabulary ----------
  {
    id: "V1",
    section: "Vocabulary",
    level: "easy",
    type: "typed",
    prompt: "Ich wohne in einer ___. (flat)",
    accepted: ["Wohnung"],
    tag: "Home",
  },
  {
    id: "V2",
    section: "Vocabulary",
    level: "medium",
    type: "typed",
    prompt: "Ich suche ein ___ für zwei Nächte. (room)",
    accepted: ["Zimmer"],
    tag: "Hotel and travel",
  },
  {
    id: "V3",
    section: "Vocabulary",
    level: "medium",
    type: "typed",
    prompt: "Die Jacke ist schön, aber sie ist zu ___. (expensive)",
    accepted: ["teuer"],
    exact: true, // one letter off gives other words: Feuer (fire), neuer (newer), Steuer (tax), teurer (more expensive)
    tag: "Shopping",
  },
  {
    id: "V4",
    section: "Vocabulary",
    level: "hard",
    type: "choice",
    prompt: 'You are in a restaurant and want to pay. Choose the German word for "the bill".',
    options: ["die Rechnung", "die Karte", "die Kasse"],
    accepted: ["die Rechnung"],
    tag: "Restaurant",
  },
  {
    id: "V5",
    section: "Vocabulary",
    level: "hard",
    type: "choice",
    prompt: 'Choose the German word for "yesterday".',
    options: ["gestern", "morgen", "heute"],
    accepted: ["gestern"],
    tag: "Time words",
  },

  // ---------- Grammar ----------
  {
    id: "G1",
    section: "Grammar",
    level: "easy",
    type: "typed",
    prompt: "Du ___ aus Indien. (kommen)",
    accepted: ["kommst"],
    tag: "Verb endings",
  },
  {
    id: "G2",
    section: "Grammar",
    level: "medium",
    type: "typed",
    prompt: "Ich kaufe ___ Tisch. (ein)",
    accepted: ["einen"],
    tag: "Articles (accusative)",
  },
  {
    id: "G3",
    section: "Grammar",
    level: "medium",
    type: "typed",
    prompt: "Ich ___ heute nicht kommen. (können)",
    accepted: ["kann"],
    tag: "Modal verbs",
  },
  {
    id: "G4",
    section: "Grammar",
    level: "hard",
    type: "choice",
    prompt: "Which sentence is correct?",
    options: ["Ich aufstehe um sieben Uhr.", "Ich stehe um sieben Uhr auf.", "Ich um sieben Uhr stehe auf."],
    accepted: ["Ich stehe um sieben Uhr auf."],
    tag: "Separable verbs",
  },
  {
    id: "G5",
    section: "Grammar",
    level: "hard",
    type: "choice",
    prompt: "Ich habe ___ Auto.",
    options: ["kein", "keine", "keinen"],
    accepted: ["kein"],
    tag: "Negation",
  },

  // ---------- Reading ----------
  {
    id: "R1",
    section: "Reading",
    level: "easy",
    type: "typed",
    text: "Hallo Sara, ich bin heute im Büro. Am Abend komme ich nach Hause. Max",
    prompt: "Wo ist Max heute? Im ___",
    accepted: ["Büro"],
    tag: "Short messages",
  },
  {
    id: "R2",
    section: "Reading",
    level: "medium",
    type: "typed",
    text: "Diese Tür ist kaputt. Bitte nehmen Sie die Tür rechts.",
    prompt: "Welche Tür nehmen Sie? Die Tür ___",
    accepted: ["rechts"],
    exact: true, // one letter off gives "recht" (right, as in correct), a different word
    tag: "Signs and directions",
  },
  {
    id: "R3",
    section: "Reading",
    level: "medium",
    type: "typed",
    text: "Liebe Nina, heute regnet es. Wir gehen nicht in den Park. Wir gehen ins Kino. Bis später! Jonas",
    prompt: "Wohin gehen Nina und Jonas? Ins ___",
    accepted: ["Kino"],
    tag: "Plans",
  },
  {
    id: "R4",
    section: "Reading",
    level: "hard",
    type: "choice",
    text: "Heute ist die Bäckerei geschlossen. Morgen öffnen wir wie immer.",
    prompt: "Was ist richtig?",
    options: ["Die Bäckerei ist heute offen.", "Sie können morgen Brötchen kaufen.", "Die Bäckerei ist morgen zu."],
    accepted: ["Sie können morgen Brötchen kaufen."],
    tag: "Notices",
  },
  {
    id: "R5",
    section: "Reading",
    level: "hard",
    type: "choice",
    text: "Hallo Herr Weber, ich kann am Dienstag leider nicht kommen. Haben Sie am Donnerstag Zeit? Viele Grüße, Anna Klein",
    prompt: "Was möchte Anna?",
    options: ["am Dienstag kommen", "einen neuen Termin am Donnerstag", "keinen Termin"],
    accepted: ["einen neuen Termin am Donnerstag"],
    tag: "Appointments",
  },
];

// One practice tip per topic tag, shown only on the results screen.
// Tips teach the skill but never contain the answer to the question.
export const TIPS: Record<string, string> = {
  Home: "Home: learn the words for where you live and its rooms (das Haus, die Küche, das Bad).",
  "Hotel and travel": "Hotel and travel: practise booking a place to stay and buying tickets.",
  Shopping: "Shopping: practise describing things and prices (Wie viel kostet …?).",
  Restaurant: "Restaurant: practise ordering, asking for the menu and paying.",
  "Time words": "Time words: learn the words for days in the past, present and future.",
  "Verb endings": "Verb endings: practise present-tense endings for ich, du and er/sie/es (-e, -st, -t).",
  "Articles (accusative)": "Accusative articles: practise ein/eine after verbs like kaufen and haben. Masculine nouns change.",
  "Modal verbs": "Modal verbs: practise können, müssen and wollen. The form changes, and the second verb goes to the end.",
  "Separable verbs": "Separable verbs: practise verbs like anrufen and einkaufen. The prefix moves to the end of the sentence.",
  Negation: "Negation: practise kein with der, die and das nouns.",
  "Short messages": "Short messages: read short notes and find who, where and when.",
  "Signs and directions": "Signs and directions: learn direction words and read the whole sign, not only the first line.",
  Plans: "Plans: in messages about plans, watch for nicht. The first place mentioned may be cancelled.",
  Notices: "Notices: look for time words (heute, morgen) and open/closed words (geöffnet, geschlossen, zu).",
  Appointments: "Appointments: practise messages that cancel a meeting and ask for a new day.",
};
