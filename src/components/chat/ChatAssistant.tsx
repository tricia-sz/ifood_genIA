'use client';
import { useEffect } from 'react';

export default function ChatPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/ifood_assistant/index.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
