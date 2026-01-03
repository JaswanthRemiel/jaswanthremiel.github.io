"use client"

import { useState, useEffect } from "react"
import { Github, MapPin, LinkIcon, Twitter, Star, GitFork, BookOpen, Search, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContributionGraph } from "@/components/contribution-graph"
import { getGithubData, getContributions, type GithubRepo } from "@/lib/github"

const projects = [
  {
    name: "gitsush",
    description:
      "GitSush is a quirky and efficient CLI tool that wraps git add, commit, and push into a single command.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 0,
    forks: 0,
    url: "https://github.com/JaswanthRemiel/gitsush",
  },
  {
    name: "itsGOtime",
    description:
      "A lightweight, efficient uptime monitoring system built with Go and Next.js. Monitor websites with automated checks.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 0,
    forks: 0,
    url: "https://github.com/JaswanthRemiel/itsGOtime",
  },
  {
    name: "linkdescrip-ai",
    description: "Web application that helps users generate optimized LinkedIn headlines using NLP models.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 0,
    forks: 0,
    url: "https://github.com/JaswanthRemiel/linkdescrip-ai",
  },
  {
    name: "MultiModelClassification",
    description:
      "A multimodal classification project combining text and image processing. Includes pre-trained models.",
    language: "Jupyter Notebook",
    languageColor: "#DA5B0B",
    stars: 0,
    forks: 0,
    url: "https://github.com/JaswanthRemiel/MultiModelClassification",
  },
  {
    name: "batmode",
    description:
      "Chrome extension that instantly enables dark mode across any website, giving your eyes the comfort they deserve.",
    language: "CSS",
    languageColor: "#563d7c",
    stars: 1,
    forks: 0,
    url: "https://github.com/JaswanthRemiel/batmode",
  },
  {
    name: "RoastHub",
    description: "An xAI-powered roasting machine that auto-generates burns using Next.js and openrouter.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 0,
    forks: 0,
    url: "https://github.com/JaswanthRemiel/RoastHub",
  },
]

export default function GitHubPortfolio() {
  const [activeTab, setActiveTab] = useState<"overview" | "repositories">("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [githubData, setGithubData] = useState<{ repos: GithubRepo[]; pinned: GithubRepo[] } | null>(null)
  const [contributions, setContributions] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const [data, contribs] = await Promise.all([getGithubData("jaswanthremiel"), getContributions("jaswanthremiel")])
      setGithubData(data)
      setContributions(contribs)
      setLoading(false)
    }
    fetchData()
  }, [])

  const filteredRepos =
    githubData?.repos.filter(
      (repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchQuery.toLowerCase()),
    ) || []

  const displayRepos = activeTab === "overview" ? githubData?.pinned : filteredRepos

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header / Navbar */}
      <header className="border-b border-border bg-card/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Github className="w-8 h-8" />
            <div className="hidden md:flex items-center gap-1 border border-border rounded-md px-2 py-1 bg-background text-sm text-muted-foreground w-64 focus-within:ring-1 focus-within:ring-primary transition-all">
              <Search className="w-4 h-4" />
              <input
                type="text"
                placeholder="Search or jump to..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  if (activeTab !== "repositories" && e.target.value) setActiveTab("repositories")
                }}
                className="bg-transparent border-none outline-none w-full placeholder:text-muted-foreground/50"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground"></div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* Profile Sidebar */}
        <aside className="space-y-6">
          <div className="relative group">
            <div className="w-full aspect-square rounded-full overflow-hidden border border-border">
              <Image
                src="https://avatars.githubusercontent.com/u/66111735?v=4"
                alt="Jaswanth Remiel AG Profile"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-card border border-border rounded-full p-2 shadow-sm">
              <span className="text-xl" role="img" aria-label="emoji">
                ☢️
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Jaswanth Remiel AG</h1>
            <p className="text-xl text-muted-foreground">JaswanthRemiel</p>
          </div>

          <p className="text-sm font-medium">dev, design and chip ✱ currently shipping @toolsbyremiel</p>

          <button className="w-full py-1.5 border border-border rounded-md bg-secondary hover:bg-secondary/80 text-sm font-semibold transition-colors">
            Follow
          </button>

          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>Tamilnadu, India</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <LinkIcon className="w-4 h-4 text-muted-foreground" />
              <Link href="https://remiel.work" className="hover:text-primary transition-colors font-semibold">
                remiel.work
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Twitter className="w-4 h-4 text-muted-foreground" />
              <Link href="https://twitter.com/jrxag_official" className="hover:text-primary transition-colors">
                @jrxag_official
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Linkedin className="w-4 h-4 text-muted-foreground" />
              <Link href="https://linkedin.com/in/jaswanthremiel" className="hover:text-primary transition-colors">
                in/jaswanthremiel
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Instagram className="w-4 h-4 text-muted-foreground" />
              <Link href="https://instagram.com/jrxag_official" className="hover:text-primary transition-colors">
                jrxag_official
              </Link>
            </div>
          </div>
        </aside>

        {/* Projects Content Area */}
        <section className="space-y-6">
          {/* Tabs */}
          <nav className="flex items-center gap-6 border-b border-border text-sm overflow-x-auto pb-0.5">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 px-1 py-3 border-b-2 transition-colors ${activeTab === "overview" ? "border-primary font-semibold text-foreground" : "border-transparent text-muted-foreground hover:border-border"}`}
            >
              <BookOpen className="w-4 h-4" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab("repositories")}
              className={`flex items-center gap-2 px-1 py-3 border-b-2 transition-colors ${activeTab === "repositories" ? "border-primary font-semibold text-foreground" : "border-transparent text-muted-foreground hover:border-border"}`}
            >
              <BookOpen className="w-4 h-4" />
              Repositories
              <span className="bg-secondary px-2 rounded-full text-xs py-0.5">{githubData?.repos.length || 0}</span>
            </button>
          </nav>

          {/* Projects Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 rounded-md bg-secondary/20 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayRepos?.map((project) => (
                <div
                  key={project.name}
                  className="p-4 border border-border rounded-md bg-card hover:bg-card/80 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={project.html_url}
                        target="_blank"
                        className="text-primary font-semibold hover:underline text-sm md:text-base"
                      >
                        {project.name}
                      </Link>
                      <span className="text-[10px] md:text-xs font-medium px-2 py-0.5 border border-border rounded-full text-muted-foreground bg-background">
                        Public
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                      {project.description || "No description provided."}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 text-[10px] md:text-xs text-muted-foreground">
                    {project.language && (
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span>{project.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 hover:text-primary cursor-pointer">
                      <Star className="w-3 h-3" />
                      <span>{project.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-primary cursor-pointer">
                      <GitFork className="w-3 h-3" />
                      <span>{project.forks_count}</span>
                    </div>
                  </div>
                </div>
              ))}
              {activeTab === "repositories" && displayRepos?.length === 0 && (
                <div className="col-span-full py-12 text-center text-muted-foreground">
                  No repositories found matching "{searchQuery}"
                </div>
              )}
            </div>
          )}

          {/* Contribution Graph (GitHub Style) */}
          {activeTab === "overview" && <ContributionGraph username="jaswanthremiel" data={contributions} />}
        </section>
      </main>
    </div>
  )
}
