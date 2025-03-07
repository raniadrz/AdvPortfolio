"use client";
import { useState } from "react";
import { ArrowLeft, Bot, User, RefreshCw } from "lucide-react";

export default function AIChatBot() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [chatHistory, setChatHistory] = useState<Array<{ type: 'bot' | 'user', content: string }>>([
    { type: 'bot', content: 'Hello! I\'m here to help. What would you like to know?' }
  ]);

  const questions = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "I specialize in web development, mobile app development, and UI/UX design. I create custom solutions tailored to your specific needs."
    },
    {
      id: 2,
      question: "How can I contact you?",
      answer: "You can reach me through the contact form on this website, or send me an email directly. I typically respond within 24 hours."
    },
    {
      id: 3,
      question: "What is your Degree?",
      answer: "My Degree is in Computer Science and Engineering of the University of Peloponnese. I have a passion for building modern web apps."
    },
    {
      id: 4,
      question: "Do you have any experience in the field?",
      answer: "Yes, I have little experience in the field, but I am a quick learner and I am willing to learn new things."
    }
  ];

  const handleQuestionClick = (questionId: number) => {
    const question = questions[questionId - 1];
    setChatHistory(prev => [
      ...prev,
      { type: 'user', content: question.question },
      { type: 'bot', content: question.answer }
    ]);
    setSelectedQuestion(null);
  };

  const handleClearChat = () => {
    setChatHistory([
      { type: 'bot', content: 'Hello! I\'m here to help. What would you like to know?' }
    ]);
  };

  return (
    <div className="w-full h-[480px] rounded-lg border bg-background p-4">
      <div className="h-full flex flex-col">
        <div className="flex justify-end mb-2">
          <button
            onClick={handleClearChat}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <RefreshCw size={14} />
            Clear chat
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-2 ${
                message.type === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'bot' ? 'bg-primary/10' : 'bg-muted'
              }`}>
                {message.type === 'bot' ? (
                  <Bot size={16} className="text-primary" />
                ) : (
                  <User size={16} className="text-muted-foreground" />
                )}
              </div>
              <div
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.type === 'bot'
                    ? 'bg-primary/10 text-foreground'
                    : 'bg-muted text-foreground'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <h3 className="text-sm font-medium mb-2">Choose a question:</h3>
          <div className="grid grid-cols-2 gap-2">
            {questions.map((q) => (
              <button
                key={q.id}
                onClick={() => handleQuestionClick(q.id)}
                className="p-2 text-sm rounded-lg bg-muted hover:bg-accent transition-colors text-left"
              >
                {q.question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}