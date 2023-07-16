export interface IReward {
  id: string;
  image: string;
  isAvailable: boolean;
  name: string;
  points: number;
  quantity: number;
}

export interface IUserReward {
  id: string;
  quantity: number;
  rewardId: string;
  status: string;
  reward: {
    name: string;
    image: string;
    points: number;
  };
}
