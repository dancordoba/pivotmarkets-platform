/**
 * Friendly, non-annoying glossary attention bubble
 * Appears on first visit, can be dismissed
 */

import { useState, useEffect } from "react";
import { X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GlossaryBubble() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the bubble
    const dismissed = localStorage.getItem("glossary-bubble-dismissed");
    if (!dismissed) {
      // Show bubble after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("glossary-bubble-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-card border-2 border-primary/20 rounded-lg shadow-lg p-4 max-w-xs relative">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="flex items-start gap-3 pr-6">
          <div className="bg-primary/10 p-2 rounded-full">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Don't speak Geek?</p>
            <p className="text-xs text-muted-foreground">Visit our glossary page!</p>
            <Button asChild size="sm" className="mt-2">
              <a href="/glossary">View Glossary</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
