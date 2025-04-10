import * as links from "./details";
import { ArrowIcon } from "./ArrowIcon";
export function LinksComponent() {
  return (
    <ul className="font-sm mt-4 mb-1 flex flex-col  space-y-2 text-neutral-1 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-200">
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-400 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href={links.linkedin}
        >
          <ArrowIcon />
          <p className="ml-2 h-7">linkedin</p>
        </a>
      </li>
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-400 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href={links.github}
        >
          <ArrowIcon />
          <p className="ml-2 h-7">github</p>
        </a>
      </li>
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-400 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href={links.twitter}
        >
          <ArrowIcon />
          <p className="ml-2 h-7">twitter</p>
        </a>
      </li>
    </ul>
  );
}
