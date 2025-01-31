"use client";
import { Brain_Processor, X } from "@/assets/svg/svg";
import { useState } from "react";
import ChatbotWidget from "./chatbot-widget";

export default function AiChatbot() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      <aside className="relative">
        <button 
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
          className="fixed bottom-6 right-6 bg-secondary-light dark:bg-secondary-dark hover:bg-secondary-hover-light dark:hover:bg-secondary-hover-dark rounded-full p-2"
        >
          {
            isChatbotOpen
              ? <X className="size-10" />
              : <Brain_Processor className="size-10" />
          }
        </button>

        <ChatbotWidget isChatbotOpen={isChatbotOpen} />
      </aside>
    </>
  );
}