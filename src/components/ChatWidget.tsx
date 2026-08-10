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
  X, Send, Sparkles, Mail, Shield, ArrowRight, Trash2, Phone, Bot, CheckCheck
} from 'lucide-react';
import {
  searchKnowledge, isNonEnglishText, isOffTopicQuery,
  SUPPORT_PHONE, KnowledgeItem
} from '../ai/knowledge';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  topic?: string;
  link?: string;
  cta?: string;
  suggestedPrompts?: string[];
}

const ASSISTANT_NAME = 'SecuNova AI Advisor';
const ASSISTANT_TITLE = 'Services & Solutions Assistant';

const INITIAL_PROMPTS_EN = [
  'What is Project Management as a Service (PMaaS)?',
  'Tell me about Strategic Advisory & Digital Transformation',
  'What do Enterprise IT & Security Audits include?',
  'What services does SecuNova offer?',
  'How do I schedule a consultation?'
];

const buildWelcomeMessage = (): ChatMessage => ({
  id: 'welcome-1',
  role: 'assistant',
  content:
    'Hello! I am SecuNova\u2019s AI Advisor. I am exclusively configured to answer inquiries regarding our strategic advisory, PMaaS, and enterprise IT and security audit services. How can I help?',
  timestamp: new Date(),
  suggestedPrompts: INITIAL_PROMPTS_EN
});

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize Welcome Message
  useEffect(() => {
    setMessages([buildWelcomeMessage()]);
  }, []);

  // Auto-scroll to bottom of chat and focus input when opened
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (open) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, open]);

  const clearConversation = () => {
    setMessages([buildWelcomeMessage()]);
    setInput('');
    setShowProfileForm(false);
  };

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

      // 1. Enforce English-only policy: block queries in any other language
      if (isNonEnglishText(query)) {
        botResponse = {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content:
            'The SecuNova AI Advisor is available in English only. Queries in other languages are not supported. Please ask your question in English. How can I help?',
          timestamp: new Date(),
          suggestedPrompts: INITIAL_PROMPTS_EN
        };
      } else if (isOffTopicQuery(query)) {
        botResponse = {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content:
            'I am SecuNova\u2019s AI Services Advisor and I am exclusively configured to answer inquiries regarding SecuNova\u2019s consulting and digital services, such as Strategic Advisory, Digital Transformation, PMaaS, and Enterprise IT and Security Audits. How can I assist you with our services today?',
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
            topic: match.title,
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
    }, 700);
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
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-secunova-light via-secunova-blue to-secunova-dark text-white shadow-xl shadow-secunova-blue/30 hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-secunova-blue/20"
          aria-label="Open SecuNova AI Advisor"
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
            Ask SecuNova AI Advisor
          </span>
        </button>
      )}

      {/* Main Chat Panel Container */}
      {open && (
        <div
          ref={chatContainerRef}
          className="flex flex-col w-[calc(100vw-2rem)] max-w-[420px] h-[560px] sm:h-[600px] max-h-[88vh] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden chat-panel-enter"
          id="chat-widget-panel"
        >
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-secunova-dark via-gray-900 to-secunova-blue p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative flex-shrink-0">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-secunova-light to-secunova-blue shadow-lg ring-2 ring-white/20">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-secunova-dark"></span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm leading-tight text-white">
                    {ASSISTANT_NAME}
                  </h3>
                  <p className="text-[11px] text-blue-200/90 flex items-center gap-1.5 mt-0.5 truncate">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                    Online · {ASSISTANT_TITLE}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={clearConversation}
                  className="p-2 text-blue-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  title="Start a new conversation"
                  aria-label="Clear conversation"
                  id="clear-chat-btn"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setShowProfileForm(!showProfileForm)}
                  className="p-2 text-blue-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  title="Contact by Email"
                  aria-label="Contact by email"
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
          </div>

          {/* Direct Email Contact Card */}
          {showProfileForm && (
            <div className="bg-gray-50 border-b border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-secunova-dark uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="h-4 w-4 text-secunova-blue" />
                  Contact Directly
                </h4>
                <button onClick={() => setShowProfileForm(false)} className="text-gray-400 hover:text-gray-600" aria-label="Close email card">
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
          <div className="bg-blue-50 border-b border-blue-100 px-3 py-2 text-[11px] text-blue-900 flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 font-medium min-w-0">
              <Shield className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" />
              <span className="truncate">Dedicated exclusively to SecuNova service inquiries.</span>
            </span>
            <Link to="/services" onClick={() => setOpen(false)} className="text-secunova-blue font-bold hover:underline flex-shrink-0">
              All Services →
            </Link>
          </div>

          {/* Messages Area */}
          <div className="chat-scroll flex-1 p-4 overflow-y-auto space-y-5 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                {msg.role === 'assistant' && msg.topic && (
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-secunova-blue uppercase tracking-wide mb-1.5 px-1">
                    <Sparkles className="h-3 w-3 flex-shrink-0" />
                    <span className="truncate">{msg.topic}</span>
                  </div>
                )}
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

                <div className={`flex items-center gap-1 mt-1 px-1 text-[10px] text-gray-400 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <span>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  {msg.role === 'user' && (
                    <CheckCheck className="h-3 w-3 text-secunova-light" />
                  )}
                </div>

                {/* Render Suggested Quick Action Chips */}
                {msg.role === 'assistant' && msg.suggestedPrompts && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {msg.suggestedPrompts.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(prompt)}
                        className="text-[11px] font-medium bg-secunova-blue/5 hover:bg-secunova-blue/15 text-secunova-blue border border-secunova-blue/20 hover:border-secunova-blue/40 rounded-full px-3 py-1.5 text-left transition-colors cursor-pointer"
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
              <div className="flex items-start gap-2.5">
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-secunova-blue rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-secunova-blue rounded-full animate-bounce [animation-delay:0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-secunova-blue rounded-full animate-bounce [animation-delay:0.3s]"></div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium ml-1">Searching knowledge base</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 p-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about SecuNova services..."
                className="flex-1 px-4 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-secunova-blue focus:ring-2 focus:ring-secunova-blue/20 bg-gray-50 focus:bg-white transition-all"
                id="chat-input-field"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-secunova-blue to-secunova-light text-white hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md"
                aria-label="Send Message"
                id="send-chat-msg-btn"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-gray-400 pb-2.5 px-4">
              <span className="flex items-center gap-1">
                <Shield className="h-3 w-3 flex-shrink-0" />
                No data stored
              </span>
              <a href={`tel:${SUPPORT_PHONE}`} className="flex items-center gap-1 hover:text-secunova-blue font-medium">
                <Phone className="h-3 w-3" />
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
