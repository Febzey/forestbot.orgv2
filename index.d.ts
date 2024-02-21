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

type UserCountData = {
  day_of_week: number,
  hour_of_day: number,
  user_count: number,
};