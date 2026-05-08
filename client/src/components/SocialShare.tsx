/**
 * Social media sharing and follow buttons
 */

import { Facebook, Twitter, Linkedin, Mail, Link2 } from "lucide-react";
import { toast } from "sonner";

export function SocialShare() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://pivotmarkets.ai';
  const shareTitle = "PivotMarkets.ai - Industrial AI Infrastructure for Wealth Building";
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("Link copied to clipboard!");
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`Check out PivotMarkets.ai: ${currentUrl}`)}`,
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground font-medium">Share:</span>
      <div className="flex items-center gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href={shareLinks.email}
          className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded"
          aria-label="Share via Email"
        >
          <Mail className="h-4 w-4" />
        </a>
        <button
          onClick={handleCopyLink}
          className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded"
          aria-label="Copy link"
        >
          <Link2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
