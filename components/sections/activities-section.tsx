import { competitiveProgramming } from "../data/portfolio-data";
import { SectionTitle } from "../ui/section-title";
import { PlatformCard } from "../ui/platform-card";
import { GitHubActivitiesCard } from "../ui/github-activity-card";
import { fetchGitHubActivities } from "@/lib/github-api";

export async function ActivitiesSection() {
  // Fetch GitHub activities on the server
  const githubActivities = await fetchGitHubActivities(5);

  return (
    <section id="activities" className="min-h-screen flex items-center justify-center bg-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-16">
          <SectionTitle>Activities</SectionTitle>
          
          {/* Competitive Programming */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center text-muted-foreground">Competitive Programming</h3>
            
            {/* Summary Stats */}
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <div className="group p-8 border-2 rounded-xl bg-gradient-to-br from-background via-muted/30 to-background border-border shadow-md hover:shadow-2xl hover:border-primary/50 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all">
                    {competitiveProgramming.totalProblems}
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground mt-2">Problems Solved</p>
                </div>
              </div>
              <div className="group p-8 border-2 rounded-xl bg-gradient-to-br from-background via-muted/30 to-background border-border shadow-md hover:shadow-2xl hover:border-primary/50 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:via-teal-600 group-hover:to-cyan-600 transition-all">
                    {competitiveProgramming.totalContests}
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground mt-2">Contests Participated</p>
                </div>
              </div>
            </div>
            
            {/* Platform Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              {competitiveProgramming.platforms.map((platform) => (
                <PlatformCard
                  key={platform.name}
                  name={platform.name}
                  problemsSolved={platform.problemsSolved}
                  contests={platform.contests}
                  highestRating={platform.highestRating}
                  profiles={platform.profiles}
                  color={platform.color}
                />
              ))}
            </div>
          </div>

          {/* Recent GitHub Activities */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center text-muted-foreground">
              Recent Github
            </h3>
            
            {githubActivities.length > 0 ? (
              <GitHubActivitiesCard activities={githubActivities} />
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No recent activities found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
