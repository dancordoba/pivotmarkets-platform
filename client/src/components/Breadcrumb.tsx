import { ChevronRight } from "lucide-react";
import { useEffect } from "react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  useEffect(() => {
    // Inject BreadcrumbList schema for SEO
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `${window.location.origin}${item.href}`
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [items]);

  return (
    <nav className="flex items-center gap-2 text-sm py-3 px-4 bg-secondary/30 rounded-lg border border-border mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        {/* Home link */}
        <li>
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Home
          </a>
        </li>

        {/* Breadcrumb items */}
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            {index === items.length - 1 ? (
              <span className="text-foreground font-medium">{item.label}</span>
            ) : (
              <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
