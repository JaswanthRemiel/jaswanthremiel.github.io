import Link from "next/link";

interface ProjectItemProps {
  href: string;
  title: string;
  description: string;
}

export function ProjectItem({ href, title, description }: ProjectItemProps) {
  return (
    <div>
      <Link
        href={href}
        target="_blank"
        className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 dark:text-gray-950 transition-colors"
      >
        <span className="underline decoration-gray-500 ">{title}</span>
      </Link>
      <p className="text-sm font-mono dark:text-gray-600 text-justify text-gray-400 mt-1">
        {description}
      </p>
    </div>
  );
}
