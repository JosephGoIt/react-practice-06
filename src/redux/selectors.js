import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const getTasks = state => state.tasks;
export const getStatusFilter = state => state.filters.status;

export const getVisibleTasks = createSelector(
  [getTasks, getStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.all:
      default:
        return tasks;
    }
  }
);
