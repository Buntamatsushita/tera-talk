"use client";

import { useState } from "react";

interface QuizQuestion {
  question: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
}

const questions: QuizQuestion[] = [
  {
    question: "四諦に含まれないものはどれ？",
    choices: ["苦", "集", "楽", "道"],
    answerIndex: 2,
    explanation: "四諦は苦・集・滅・道。『楽』は含まれません。",
  },
  {
    question: "大乗仏教で中心とされる実践は？",
    choices: ["阿字観", "菩薩道", "公案", "只管打坐"],
    answerIndex: 1,
    explanation: "大乗の核心は菩薩道（利他と智慧の実践）です。",
  },
  {
    question: "密教の三密に含まれるのは？",
    choices: ["身・口・意", "戒・定・慧", "苦・集・滅", "禅・念仏・題目"],
    answerIndex: 0,
    explanation: "三密は身密・口密・意密の実践を指します。",
  },
];

export default function InteractiveQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const current = questions[currentIndex];

  function handleChoice(index: number) {
    if (isAnswered) return;
    setSelectedIndex(index);
    setIsAnswered(true);
    if (index === current.answerIndex) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
      setIsAnswered(false);
    } else {
      // reset
      setCurrentIndex(0);
      setSelectedIndex(null);
      setIsAnswered(false);
      setScore(0);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="body-text">Q{currentIndex + 1} / {questions.length}</p>
        <p className="body-text">スコア: {score}</p>
      </div>
      <h4 className="heading-tertiary mb-3">{current.question}</h4>
      <div className="grid gap-2">
        {current.choices.map((choice, idx) => {
          const isCorrect = idx === current.answerIndex;
          const isSelected = idx === selectedIndex;
          const bg = !isAnswered
            ? 'var(--color-surface)'
            : isSelected
              ? isCorrect
                ? 'var(--color-success)'
                : 'var(--color-danger)'
              : isCorrect
                ? 'var(--color-success)'
                : 'var(--color-surface)';
          const color = isAnswered && (isSelected || isCorrect) ? 'white' : 'var(--color-text-primary)';
          return (
            <button
              key={idx}
              onClick={() => handleChoice(idx)}
              className="text-left px-4 py-3 rounded-lg border transition-colors"
              style={{ backgroundColor: bg, borderColor: 'var(--color-border)', color }}
              aria-pressed={isSelected}
            >
              {choice}
            </button>
          );
        })}
      </div>
      {isAnswered && (
        <div className="mt-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
          <p className="body-text">{current.explanation}</p>
        </div>
      )}
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleNext}
          className="px-4 py-2 rounded-md"
          style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
        >
          {currentIndex < questions.length - 1 ? '次へ' : 'リセット'}
        </button>
      </div>
    </div>
  );
}


