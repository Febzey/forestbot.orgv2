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