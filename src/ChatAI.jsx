import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      name: 'MyPath AI',
      text: "Hello! I'm here to help you explore career options, understand your strengths, and navigate the job market. How can I assist you today?",
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD-jEcvGy6FhD9EqV5VWefHHRlRjxjOVMBDtO-A4jYTHbXzmwA1gz1joIgCePNGdGOCgH_Q40QZpjNQA0kASrObOvXoGgK_FbxK-taRQflVAhxCXvopaZJkNf4S2-kCIp7OWM8N_xaP6tQ__9QUlx6UJpnwrynZzkeDmi23111B15IbWqcbVFd0RUnQGiiwzK6nlook6wQzgDgRyxT0UcaNpDrtZkmjkLRqWccLCSGrvdH21HPMveWTAutK0llhjEecwEoLxDSIeYV'
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage = {
      sender: 'user',
      name: 'You',
      text: inputMessage,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr-bOUElY5N8pdltCPKQC9gVi7pffvRIEQ6OYAOyyC7UNknDQ3Z9nutWjwW6F_dOjRNms3g6eCx9jrC4ILX9SgnX0N4H3avIfEA2RqQERBu3FRJW2zkLZZX6t5uajvB9umzk4kK1ZjFvpONCIjggLRNRscEPjClO6sV5jMB3PEQwua-byl7wfCk7eS2Ecd85V4q7f1RZ3gtu0EKdjiQ6nB4xMXA8YwshOcXfJXpzHkEU6haBy9SpfKs4aWP1uVHADfDe8YfDbZpnge'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Call DeepSeek API
      const response = await fetch('https://api.deepseek.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: 'system',
              content: 'You are a helpful career guidance assistant called MyPath AI. Provide detailed, professional advice about career paths, skills development, and job market trends.'
            },
            ...messages.filter(msg => msg.sender === 'user').map(msg => ({
              role: 'user',
              content: msg.text
            })),
            {
              role: 'user',
              content: inputMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 1000,
          stream: false
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error Response:', errorData);
        throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data); // Debug log
      
      // Extract the AI's response
      const aiResponse = data.choices?.[0]?.message?.content || 
        "I didn't get a response. Could you try asking again?";

      // Add bot response to chat
      const botMessage = {
        sender: 'bot',
        name: 'MyPath AI',
        text: aiResponse,
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD-jEcvGy6FhD9EqV5VWefHHRlRjxjOVMBDtO-A4jYTHbXzmwA1gz1joIgCePNGdGOCgH_Q40QZpjNQA0kASrObOvXoGgK_FbxK-taRQflVAhxCXvopaZJkNf4S2-kCIp7OWM8N_xaP6tQ__9QUlx6UJpnwrynZzkeDmi23111B15IbWqcbVFd0RUnQGiiwzK6nlook6wQzgDgRyxT0UcaNpDrtZkmjkLRqWccLCSGrvdH21HPMveWTAutK0llhjEecwEoLxDSIeYV'
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('API Error:', error);
      
      // More specific error messages
      let errorMessage = "Sorry, there was an error processing your request.";
      
      if (error.message.includes('Failed to fetch')) {
        errorMessage = "Network error. Please check your internet connection.";
      } else if (error.message.includes('401')) {
        errorMessage = "Authentication error. Please refresh the page.";
      } else if (error.message.includes('rate limit')) {
        errorMessage = "Too many requests. Please wait a moment and try again.";
      }

      const errorResponse = {
        sender: 'bot',
        name: 'MyPath AI',
        text: errorMessage,
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD-jEcvGy6FhD9EqV5VWefHHRlRjxjOVMBDtO-A4jYTHbXzmwA1gz1joIgCePNGdGOCgH_Q40QZpjNQA0kASrObOvXoGgK_FbxK-taRQflVAhxCXvopaZJkNf4S2-kCIp7OWM8N_xaP6tQ__9QUlx6UJpnwrynZzkeDmi23111B15IbWqcbVFd0RUnQGiiwzK6nlook6wQzgDgRyxT0UcaNpDrtZkmjkLRqWccLCSGrvdH21HPMveWTAutK0llhjEecwEoLxDSIeYV'
      };

      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden mt-16" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0d161b] tracking-light text-[32px] font-bold leading-tight">AI Career Guidance</p>
                <p className="text-[#4c799a] text-sm font-normal leading-normal">Get personalized career advice and assessments with our AI-powered chatbot.</p>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex items-end gap-3 p-4 ${message.sender === 'user' ? 'justify-end' : ''}`}
                >
                  {message.sender === 'bot' && (
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                      style={{ backgroundImage: `url("${message.avatar}")` }}
                    ></div>
                  )}
                  
                  <div className={`flex flex-1 flex-col gap-1 ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <p className="text-[#4c799a] text-[13px] font-normal leading-normal max-w-[360px]">
                      {message.name}
                    </p>
                    <p 
                      className={`text-base font-normal leading-normal flex max-w-[360px] rounded-xl px-4 py-3 ${
                        message.sender === 'user' 
                          ? 'bg-[#1391eb] text-slate-50' 
                          : 'bg-[#e7eef3] text-[#0d161b]'
                      }`}
                    >
                      {message.text}
                    </p>
                  </div>
                  
                  {message.sender === 'user' && (
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                      style={{ backgroundImage: `url("${message.avatar}")` }}
                    ></div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-end gap-3 p-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDD-jEcvGy6FhD9EqV5VWefHHRlRjxjOVMBDtO-A4jYTHbXzmwA1gz1joIgCePNGdGOCgH_Q40QZpjNQA0kASrObOvXoGgK_FbxK-taRQflVAhxCXvopaZJkNf4S2-kCIp7OWM8N_xaP6tQ__9QUlx6UJpnwrynZzkeDmi23111B15IbWqcbVFd0RUnQGiiwzK6nlook6wQzgDgRyxT0UcaNpDrtZkmjkLRqWccLCSGrvdH21HPMveWTAutK0llhjEecwEoLxDSIeYV")' }}
                  ></div>
                  <div className="flex flex-1 flex-col gap-1 items-start">
                    <p className="text-[#4c799a] text-[13px] font-normal leading-normal max-w-[360px]">MyPath AI</p>
                    <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl px-4 py-3 bg-[#e7eef3] text-[#0d161b]">
                      <span className="flex items-center gap-1">
                        <span className="animate-pulse">Thinking</span>
                        <span className="flex gap-1">
                          <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                          <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
                          <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Message input */}
            <form onSubmit={handleSendMessage} className="flex items-center px-4 py-3 gap-3">
              <label className="flex flex-col min-w-40 h-12 flex-1">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <input
                    placeholder="Type your message..."
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d161b] focus:outline-0 focus:ring-0 border-none bg-[#e7eef3] focus:border-none h-full placeholder:text-[#4c799a] px-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    disabled={isLoading}
                  />
                  <div className="flex border-none bg-[#e7eef3] items-center justify-center pr-4 rounded-r-xl border-l-0">
                    <div className="flex items-center gap-4 justify-end">
                      <button
                        type="submit"
                        className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#1391eb] text-slate-50 text-sm font-medium leading-normal hidden @[480px]:block"
                        disabled={isLoading || !inputMessage.trim()}
                      >
                        <span className="truncate">Send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;