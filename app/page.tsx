"use client";

// The whole app is one page that switches between screens:
// Start -> Question (x15, with a "section done" screen after every 5) -> Results.
// Everything runs in the browser. Nothing is saved or sent anywhere.
import { useState } from "react";
import { QUESTIONS, SECTIONS } from "@/lib/questions";
import { scoreCheck, type Answers } from "@/lib/scoring";
import StartScreen from "@/components/StartScreen";
import QuestionScreen from "@/components/QuestionScreen";
import SectionDoneScreen from "@/components/SectionDoneScreen";
import ResultsScreen from "@/components/ResultsScreen";

type Step = "start" | "question" | "sectionDone" | "results";

export default function Home() {
  const [step, setStep] = useState<Step>("start");
  const [index, setIndex] = useState(0); // which question we are on (0–14)
  const [answers, setAnswers] = useState<Answers>({});
  const [startedAt, setStartedAt] = useState(0);
  const [minutesTaken, setMinutesTaken] = useState(0); // tracked silently, never shown as a timer

  const question = QUESTIONS[index];
  const isLastQuestion = index === QUESTIONS.length - 1;

  function start() {
    setAnswers({});
    setIndex(0);
    setStartedAt(Date.now());
    setStep("question");
  }

  function answer(response: string) {
    setAnswers({ ...answers, [question.id]: response });

    if (isLastQuestion) {
      setMinutesTaken((Date.now() - startedAt) / 60000);
    }

    const sectionEnds = isLastQuestion || QUESTIONS[index + 1].section !== question.section;
    if (sectionEnds) {
      setStep("sectionDone"); // confetti for finishing a section, not for being right
    } else {
      setIndex(index + 1);
    }
  }

  function continueAfterSection() {
    if (isLastQuestion) {
      setStep("results");
    } else {
      setIndex(index + 1);
      setStep("question");
    }
  }

  function exit() {
    setStep("start");
  }

  if (step === "start") {
    return <StartScreen onStart={start} />;
  }

  if (step === "question") {
    const sectionQuestions = QUESTIONS.filter((q) => q.section === question.section);
    return (
      <QuestionScreen
        key={question.id} // fresh input for every question
        question={question}
        numberInSection={sectionQuestions.indexOf(question) + 1}
        sectionSize={sectionQuestions.length}
        progress={index / QUESTIONS.length}
        onNext={answer}
        onExit={exit}
      />
    );
  }

  if (step === "sectionDone") {
    const sectionNumber = SECTIONS.indexOf(question.section) + 1;
    return (
      <SectionDoneScreen
        section={question.section}
        sectionNumber={sectionNumber}
        sectionCount={SECTIONS.length}
        progress={(index + 1) / QUESTIONS.length}
        onContinue={continueAfterSection}
        onExit={exit}
      />
    );
  }

  return <ResultsScreen result={scoreCheck(answers, minutesTaken)} onRetake={start} />;
}
