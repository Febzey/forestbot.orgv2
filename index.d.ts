type PlayerData = {
  Username: string;
  Kills: number;
  Deaths: number;
  Joindate: string;
  LastSeen: {
    String: string;
    Valid: boolean;
  };
  UUID: {
    String: string;
    Valid: boolean;
  };
  Playtime: number;
  Joins: number;
  Leaves: number;
  LastDeathTime: number;
  LastDeathString: {
    String: string;
    Valid: boolean;
  };
  MCServer: string;
};


interface PlayerActivityData {
  UUID: string;
  Date: number;
  mc_server: string;
  Type: string;
}

interface PlaytimeSession {
  loginTime: number;
  logoutTime: number;
  playtime: number;
}

interface PlaytimeGraphProps {
  playtimeSessions: PlaytimeSession[];
}

type PlayerActivityHourlyResult = {
  Weekday: number;
  Activity: HourlyActivity[];
};

type HourlyActivity = {
  Hour: number;
  Logins: number;
};

// type ServerStatsProps struct {
// 	TotalLogins   int `json:"total_logins"`
// 	UniquePlayers int `json:"unique_players"`
// 	UniqueLogins  int `json:"unique_logins"`

// 	UserWithMostLogins struct {
// 		Username   string `json:"username"`
// 		LoginCount int    `json:"login_count"`
// 	} `json:"user_with_most_logins"`
// }
type ServerStatsProps = {
  PlayerActivityHourlyResult: PlayerActivityHourlyResult[];
  TotalLogins: number;
  UniquePlayers: number;
  UniqueLogins: number;
  UserWithMostLogins: {
    Username: string;
    LoginCount: number;
  };
}
