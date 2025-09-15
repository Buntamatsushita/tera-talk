"use client";

import InteractiveTimeline from "./InteractiveTimeline";
import InteractiveQuiz from "./InteractiveQuiz";

export default function InteractiveSectionClient() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h4 className="heading-tertiary mb-2">年表で流れを掴む</h4>
        <InteractiveTimeline />
      </div>
      <div>
        <h4 className="heading-tertiary mb-2">小テストで理解を確認</h4>
        <InteractiveQuiz />
      </div>
    </div>
  );
}


