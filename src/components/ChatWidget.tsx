/**
 * ============================================================================
 * MAXPHAOS MARKETING: PROPRIETARY CUSTOM ENGINEERING & DESIGN ARCHITECTURE
 * ----------------------------------------------------------------------------
 * All design, software architecture, UI/UX components, and source code are
 * 100% custom-engineered and designed exclusively by MaxPhaos Marketing.
 *
 * CORE ARCHITECTURAL ETHOS:
 * - 100% Bespoke Code: Built strictly to client specifications from scratch.
 * - Zero Pre-Made Templates: No generic agency starters or off-the-shelf themes.
 * - Senior-Led AI-Augmented Workflows (Vibe Coding): 14-day execution cycles
 *   engineered for sub-second performance (99+ Lighthouse Core Web Vitals).
 * - Full IP & Repository Handoff: 100% client asset and codebase ownership.
 *
 * Copyright (c) MaxPhaos Marketing. All rights reserved.
 * ============================================================================
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  X, Send, Sparkles, Mail, Shield, ArrowRight
} from 'lucide-react';
import {
  searchKnowledge, isArabicText, isOffTopicQuery,
  SUPPORT_PHONE, KnowledgeItem
} from '../ai/knowledge';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  link?: string;
  cta?: string;
  suggestedPrompts?: string[];
}

const ASSISTANT_NAME = 'SecuNova AI Advisor';
const ASSISTANT_TITLE = 'Services & Solutions Assistant';

const INITIAL_PROMPTS_EN = [
  'What is Project Management as a Service (PMaaS)?',
  'Tell me about Strategic Advisory & Digital Transformation',
  'Explain Cybersecurity & Risk Management',
  'What services does SecuNova offer?',
  'How do I schedule a consultation?'
];

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Welcome Message
  useEffect(() => {
    const welcomeMsg: ChatMessage = {
      id: 'welcome-1',
      role: 'assistant',
      content: 'Hello! I am SecuNova\'s AI Advisor. I am exclusively configured to answer inquiries in English regarding our strategic advisory, PMaaS, and enterprise IT and security audit services.',
      timestamp: new Date(),
      suggestedPrompts: INITIAL_PROMPTS_EN
    };
    setMessages([welcomeMsg]);
  }, []);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (open) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, open]);

  // Handle user sending a message
  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setTyping(true);

    setTimeout(() => {
      let botResponse: ChatMessage;

      // 1. Check if user query is in Arabic (remind English only)
      if (isArabicText(query)) {
        botResponse = {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: 'Please note that SecuNova\'s AI Advisor operates exclusively in English. How can I assist you with our consulting and digital services today?',
          timestamp: new Date(),
          suggestedPrompts: INITIAL_PROMPTS_EN
        };
      } else if (isOffTopicQuery(query)) {
        botResponse = {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: 'I am SecuNova\'s AI Services Advisor and I am exclusively configured to answer inquiries regarding SecuNova\'s consulting and digital services, such as Strategic Advisory, Digital Transformation, PMaaS, and Enterprise IT and Security Audits. How can I assist you with our services today?',
          timestamp: new Date(),
          suggestedPrompts: INITIAL_PROMPTS_EN
        };
      } else {
        // 2. Query Knowledge Base
        const results = searchKnowledge(query, 1);
        const match: KnowledgeItem | undefined = results[0];

        if (match) {
          botResponse = {
            id: `bot-${Date.now()}`,
            role: 'assistant',
            content: match.answerEn,
            cta: match.ctaEn,
            link: match.link,
            timestamp: new Date(),
            suggestedPrompts: ['Tell me about Enterprise IT & Security Audits', 'How do I schedule a consultation?']
          };
        } else {
          // Fallback response focusing on services scope
          botResponse = {
            id: `bot-${Date.now()}`,
            role: 'assistant',
            content: `We offer a full suite of enterprise advisory services including Strategic Advisory & Business Planning, Digital Transformation & Process Optimization, Cybersecurity & Risk Management, and Project Management as a Service (PMaaS). Feel free to ask about any of these services or call us at ${SUPPORT_PHONE}.`,
            cta: 'Contact our team for a custom proposal.',
            link: '/services',
            timestamp: new Date()
          };
        }
      }

      setMessages(prev => [...prev, botResponse]);
      setTyping(false);
      if (!open) setHasUnread(true);
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans" id="chat-widget-root">
      
      {/* Floating Trigger Button */}
      {!open && (
        <button
          onClick={() => {
            setOpen(true);
            setHasUnread(false);
          }}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-secunova-dark via-secunova-blue to-secunova-light text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-secunova-blue/30"
          aria-label="Open AI Services Chat"
          id="open-chat-widget-btn"
        >
          <Sparkles className="h-6 w-6 animate-pulse" />

          {/* Unread indicator */}
          {hasUnread && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
          )}

          {/* Hover Tooltip */}
          <span className="absolute right-16 bg-secunova-dark text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            AI Services Advisor
          </span>
        </button>
      )}

      {/* Main Chat Panel Container */}
      {open && (
        <div
          ref={chatContainerRef}
          className="flex flex-col w-[calc(100vw-2rem)] max-w-[420px] h-[540px] sm:h-[580px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden chat-panel-enter"
          id="chat-widget-panel"
        >
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-secunova-dark via-gray-900 to-secunova-blue text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-secunova-light font-bold">
                <Sparkles className="h-5 w-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-secunova-dark"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight text-white flex items-center gap-1.5">
                  {ASSISTANT_NAME}
                  <span className="text-[10px] bg-secunova-blue/40 text-blue-200 px-2 py-0.5 rounded-full font-normal">Services Only</span>
                </h3>
                <p className="text-xs text-blue-200">{ASSISTANT_TITLE}</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={() => setShowProfileForm(!showProfileForm)}
                className="p-2 text-blue-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title="Contact by Email"
                id="toggle-profile-form-btn"
              >
                <Mail className="h-4 w-4" />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-blue-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close Chat"
                id="close-chat-widget-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Direct Email Contact Card */}
          {showProfileForm && (
            <div className="bg-gray-50 border-b border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-secunova-dark uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="h-4 w-4 text-secunova-blue" />
                  Contact Directly
                </h4>
                <button onClick={() => setShowProfileForm(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="text-[11px] text-slate-600 mb-3 leading-relaxed">
                Reach the senior advisory team directly by email. No forms, no automated replies.
              </p>

              <a
                href="mailto:hello@secunovainc.com"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-secunova-blue text-white text-xs font-bold rounded-lg hover:bg-secunova-blue/90 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                hello@secunovainc.com
              </a>
            </div>
          )}

          {/* Scope Notification Banner */}
          <div className="bg-blue-50 border-b border-blue-100 px-3 py-2 text-[11px] text-blue-900 flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <Shield className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" />
              Dedicated exclusively to SecuNova Service inquiries.
            </span>
            <Link to="/services" onClick={() => setOpen(false)} className="text-secunova-blue font-bold hover:underline flex-shrink-0 ml-2">
              All Services →
            </Link>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-secunova-dark to-secunova-blue text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>

                  {/* Optional CTA & Link */}
                  {msg.cta && (
                    <div className="mt-3 pt-2 border-t border-gray-100 text-secunova-blue font-semibold">
                      {msg.cta}
                    </div>
                  )}

                  {msg.link && (
                    <div className="mt-2">
                      <Link
                        to={msg.link}
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-secunova-blue hover:text-secunova-dark underline"
                      >
                        View Service Details <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-gray-400 mt-1 px-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>

                {/* Render Suggested Quick Action Chips */}
                {msg.role === 'assistant' && msg.suggestedPrompts && (
                  <div className="flex flex-wrap gap-1.5 mt-3 max-w-[95%]">
                    {msg.suggestedPrompts.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(prompt)}
                        className="text-[11px] font-medium bg-secunova-blue/5 hover:bg-secunova-blue/15 text-secunova-blue border border-secunova-blue/20 rounded-full px-3 py-1 text-left transition-colors cursor-pointer"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {typing && (
              <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-2xl p-3 w-20 shadow-sm">
                <div className="w-2 h-2 bg-secunova-blue rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-secunova-blue rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-secunova-blue rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about SecuNova services..."
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-secunova-blue bg-gray-50 focus:bg-white transition-colors"
                id="chat-input-field"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-secunova-blue text-white hover:bg-secunova-blue/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md"
                aria-label="Send Message"
                id="send-chat-msg-btn"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-gray-400 mt-2 px-1">
              <span>SecuNova AI Assistant</span>
              <a href={`tel:${SUPPORT_PHONE}`} className="hover:text-secunova-blue font-medium">
                {SUPPORT_PHONE}
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ChatWidget;
