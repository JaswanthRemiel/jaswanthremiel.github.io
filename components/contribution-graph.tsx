"use client"

interface ContributionDay {
  count: number
  date: string
  level: number
}

interface ContributionGraphProps {
  username: string
  data: {
    total: { [year: string]: number }
    contributions: ContributionDay[]
  } | null
}

export function ContributionGraph({ username, data }: ContributionGraphProps) {
  if (!data || !data.contributions || !Array.isArray(data.contributions)) {
    return <div className="p-4 text-muted-foreground">Loading contributions...</div>
  }

  const totalYears = Object.values(data.total || {})
  const totalThisYear = totalYears.length > 0 ? totalYears[0] : 0

  // Group into weeks for the grid
  const weeks: ContributionDay[][] = []
  let currentWeek: ContributionDay[] = []

  // Get last 365 days
  const lastYear = data.contributions.slice(-371) // roughly 53 weeks

  lastYear.forEach((day, i) => {
    currentWeek.push(day)
    if (currentWeek.length === 7 || i === lastYear.length - 1) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  })

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#0e4429]"
      case 2:
        return "bg-[#006d32]"
      case 3:
        return "bg-[#26a641]"
      case 4:
        return "bg-[#39d353]"
      default:
        return "bg-[#161b22]"
    }
  }

  return (
    <div className="pt-8">
      <h3 className="text-base font-semibold mb-4">Contribution Activity</h3>
      <div className="border border-border rounded-md p-6 bg-card/30 overflow-hidden overflow-x-auto">
        <div className="flex flex-col gap-2 min-w-[700px]">
          <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
            <span>{totalThisYear.toLocaleString()} contributions in the last year</span>
            <div className="flex items-center gap-1">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((l) => (
                  <div key={l} className={`w-3 h-3 rounded-sm ${getLevelColor(l)}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
          <div className="flex gap-[3px]">
            {weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-[3px]">
                {week.map((day, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)} transition-colors hover:ring-1 hover:ring-white/20`}
                    title={`${day.count} contributions on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
