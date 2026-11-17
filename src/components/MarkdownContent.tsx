import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import type { Components } from "react-markdown";
import GuideFigure from "@/components/GuideFigure";

type Props = {
  content: string;
  className?: string;
};

function paragraphHasImage(node: unknown): boolean {
  if (!node || typeof node !== "object" || !("children" in node)) return false;
  const children = (node as { children?: Array<{ type?: string; tagName?: string }> }).children;
  return (
    Array.isArray(children) &&
    children.some((child) => child?.type === "element" && child?.tagName === "img")
  );
}

const components: Components = {
  h1: () => null,
  h2: ({ children }) => (
    <h2 className="prose-h2">
      <span className="prose-h2-bar" aria-hidden />
      <span>{children}</span>
    </h2>
  ),
  h3: ({ children }) => <h3 className="prose-h3">{children}</h3>,
  h4: ({ children }) => <h4 className="prose-h4">{children}</h4>,
  p: ({ node, children }) =>
    paragraphHasImage(node) ? (
      <div className="prose-p-media">{children}</div>
    ) : (
      <p className="prose-p">{children}</p>
    ),
  ul: ({ children }) => <ul className="prose-ul">{children}</ul>,
  ol: ({ children }) => <ol className="prose-ol">{children}</ol>,
  li: ({ children }) => <li className="prose-li">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="prose-quote">{children}</blockquote>
  ),
  hr: () => <hr className="prose-hr" />,
  strong: ({ children }) => <strong className="prose-strong">{children}</strong>,
  em: ({ children }) => <em className="prose-em">{children}</em>,
  // Text-only comparison tables are fine — never put screenshots in table cells.
  table: ({ children }) => (
    <div className="prose-table-wrap">
      <table className="prose-table">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead>{children}</thead>,
  th: ({ children }) => <th>{children}</th>,
  td: ({ children }) => <td>{children}</td>,
  a: ({ href, children }) => {
    const raw = href || "#";
    let url = raw;
    if (
      /^https?:\/\/deltaexecutortr\.com\.tr/i.test(raw) ||
      /^https?:\/\/deltaexecutor\.com\.tr/i.test(raw)
    ) {
      url = raw.replace(/^https?:\/\/deltaexecutortr?\.com\.tr/i, "") || "/";
    } else if (/^https?:\/\//i.test(raw)) {
      return <span className="prose-strong">{children}</span>;
    }
    return (
      <Link href={url} className="prose-a">
        {children}
      </Link>
    );
  },
  img: ({ src, alt }) => {
    if (!src || typeof src !== "string") return null;
    return <GuideFigure src={src} alt={alt || ""} />;
  },
};

export default function MarkdownContent({ content, className = "" }: Props) {
  return (
    <div className={`prose-track ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
