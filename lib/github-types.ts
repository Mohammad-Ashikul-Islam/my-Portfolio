// GitHub API Event Types
export interface GitHubEvent {
  id: string;
  type: string;
  actor: {
    id: number;
    login: string;
    display_login: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: any;
  public: boolean;
  created_at: string;
}

// Simplified activity for display
export interface GitHubActivity {
  id: string;
  type: string;
  repo: string;
  repoUrl: string;
  action: string;
  timestamp: string;
  icon: string;
}

// Activity type mappings
export const activityTypeMap: Record<string, { action: string; icon: string }> = {
  PushEvent: { action: "Pushed to", icon: "git-commit" },
  CreateEvent: { action: "Created", icon: "git-branch" },
  DeleteEvent: { action: "Deleted", icon: "trash" },
  PullRequestEvent: { action: "Pull request in", icon: "git-pull-request" },
  IssuesEvent: { action: "Issue in", icon: "alert-circle" },
  WatchEvent: { action: "Starred", icon: "star" },
  ForkEvent: { action: "Forked", icon: "git-fork" },
  IssueCommentEvent: { action: "Commented on", icon: "message-circle" },
  PublicEvent: { action: "Made public", icon: "unlock" },
  MemberEvent: { action: "Member added to", icon: "user-plus" },
  ReleaseEvent: { action: "Released", icon: "package" },
};
