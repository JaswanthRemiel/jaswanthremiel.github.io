export interface GithubRepo {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
  updated_at: string
}

export interface ContributionDay {
  contributionCount: number
  date: string
}

export interface ContributionData {
  totalContributions: number
  weeks: {
    contributionDays: ContributionDay[]
  }[]
}

export async function getGithubData(username: string) {
  // Use a reliable contribution graph SVG scraper for the visualization if possible,
  // or fetch via API if tokens are available. For now, we fetch public repos.
  const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
    next: { revalidate: 3600 },
  })

  if (!reposResponse.ok) return null

  const repos: GithubRepo[] = await reposResponse.json()

  // Fetch pinned repos via a different method or just filter top ones for demo
  // Note: Real "pinned" repos require GraphQL or scraping.
  // We'll simulate by picking prominent ones or sorting.
  const pinnedNames = ["gitsush", "itsGOtime", "linkdescrip-ai", "RoastHub", "batmode", "MultiModelClassification"]
  const pinned = repos.filter((r) => pinnedNames.includes(r.name))

  return {
    repos,
    pinned: pinned.length > 0 ? pinned : repos.slice(0, 6),
  }
}

// We use this to get the contribution data via a public proxy/scraper since
// standard REST API doesn't provide it easily without GraphQL
export async function getContributions(username: string) {
  try {
    const res = await fetch(`https://github-contributions-api.deno.dev/${username}.json`, {
      next: { revalidate: 3600 },
    })
    return await res.json()
  } catch (e) {
    console.error("[v0] Error fetching contributions:", e)
    return null
  }
}
