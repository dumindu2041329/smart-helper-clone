import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  label?: string;
}

const CodeBlock = ({ code, label }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="my-6">
      {label && (
        <div className="text-sm text-foreground/60 mb-2 font-medium">
          {label}
        </div>
      )}
      <div className="relative">
        <pre className="bg-black/50 border border-border/30 rounded-lg p-4 overflow-x-auto text-sm text-green-400 font-mono">
          <code>{code}</code>
        </pre>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="absolute top-2 right-2 text-foreground/60 hover:text-foreground transition-smooth"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};

export default CodeBlock;