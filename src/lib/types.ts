import { number } from 'zod';

export interface FormData {
  name: string;
  image: any;
  points: number | string;
  isAvailable: boolean;
  quantity: number | string;
}
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
export interface IAllUserReward {
  id: string;
  quantity: number;
  rewardId: string;
  status: string;
  userId: string;
  user: {
    id: string;
    email: string;
    username: string;
  };
  reward: {
    id: string;
    image: string;
    name: string;
    points: number;
    quantity: number;
  };
}
