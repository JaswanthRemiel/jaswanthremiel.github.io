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
  // Letter patterns for "REMIEL" - 7 rows (days) x width for each letter
  const letterPatterns = {
    R: [
      [4, 4, 4, 4, 0],
      [4, 0, 0, 0, 4],
      [4, 0, 0, 0, 4],
      [4, 4, 4, 4, 0],
      [4, 0, 4, 0, 0],
      [4, 0, 0, 4, 0],
      [4, 0, 0, 0, 4],
    ],
    E: [
      [4, 4, 4, 4, 4],
      [4, 0, 0, 0, 0],
      [4, 0, 0, 0, 0],
      [4, 4, 4, 4, 0],
      [4, 0, 0, 0, 0],
      [4, 0, 0, 0, 0],
      [4, 4, 4, 4, 4],
    ],
    M: [
      [4, 0, 0, 0, 0, 0, 4],
      [4, 4, 0, 0, 0, 4, 4],
      [4, 0, 4, 0, 4, 0, 4],
      [4, 0, 0, 4, 0, 0, 4],
      [4, 0, 0, 0, 0, 0, 4],
      [4, 0, 0, 0, 0, 0, 4],
      [4, 0, 0, 0, 0, 0, 4],
    ],
    I: [
      [4, 4, 4],
      [0, 4, 0],
      [0, 4, 0],
      [0, 4, 0],
      [0, 4, 0],
      [0, 4, 0],
      [4, 4, 4],
    ],
    L: [
      [4, 0, 0, 0, 0],
      [4, 0, 0, 0, 0],
      [4, 0, 0, 0, 0],
      [4, 0, 0, 0, 0],
      [4, 0, 0, 0, 0],
      [4, 0, 0, 0, 0],
      [4, 4, 4, 4, 4],
    ],
  }

  // Create the full "REMIEL" pattern
  const createRemielPattern = () => {
    const weeks: { level: number; count: number; date: string }[][] = []
    const word = ['R', 'E', 'M', 'I', 'E', 'L']
    
    word.forEach((letter, letterIndex) => {
      const pattern = letterPatterns[letter as keyof typeof letterPatterns]
      const letterWidth = pattern[0].length
      
      // Add each column of the letter
      for (let col = 0; col < letterWidth; col++) {
        const week = []
        for (let row = 0; row < 7; row++) {
          week.push({
            level: pattern[row][col],
            count: pattern[row][col] * 5,
            date: new Date().toISOString().split('T')[0]
          })
        }
        weeks.push(week)
      }
      
      // Add spacing between letters (1 column)
      if (letterIndex < word.length - 1) {
        const spacer = []
        for (let row = 0; row < 7; row++) {
          spacer.push({ level: 0, count: 0, date: new Date().toISOString().split('T')[0] })
        }
        weeks.push(spacer)
      }
    })
    
    return weeks
  }

  const weeks = createRemielPattern()
  const currentYear = new Date().getFullYear().toString()

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
    <div className="pt-6 sm:pt-8">
      <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">
        Contribution Activity
      </h3>
      <div className="border border-border rounded-md p-3 sm:p-6 bg-card/30 overflow-hidden">
        <div className="overflow-x-auto">
          <div className="flex flex-col gap-2 min-w-fit">
            <div className="flex justify-end items-center text-[10px] sm:text-xs text-muted-foreground mb-2">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="hidden sm:inline">Less</span>
                <div className="flex gap-0.5 sm:gap-1">
                  {[0, 1, 2, 3, 4].map((l) => (
                    <div key={l} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm ${getLevelColor(l)}`} />
                  ))}
                </div>
                <span className="hidden sm:inline">More</span>
              </div>
            </div>
            <div className="flex gap-[3px]">
              {weeks.map((week, i) => (
                <div key={i} className="flex flex-col gap-[3px]">
                  {week.map((day, j) => (
                    <div
                      key={`${i}-${j}`}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm ${getLevelColor(day.level)} transition-all hover:ring-1 hover:ring-primary/50 cursor-pointer`}
                      title={`REMIEL`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
