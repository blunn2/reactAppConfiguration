import React from 'react';
import { TabNavigator } from 'react-navigation';

import { NewsFeed } from './NewsFeed';
import { Workouts } from './Workouts';
import { Exercises } from './Exercises';

export const HomeScreen = TabNavigator({
  NewsFeed: {
    screen: NewsFeed,
  },
  Workouts: {
    screen: Workouts,
  },
  Exercises: {
    screen: Exercises,
  },
});
