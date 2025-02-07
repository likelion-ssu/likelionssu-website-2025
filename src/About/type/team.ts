export interface TeamMember {
  name: string;
  role: string;
  imagePath: string;
}

export interface TeamCategory {
  title: string;
  teamType: string;
  members: TeamMember[];
}
