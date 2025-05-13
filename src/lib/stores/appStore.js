import { writable } from 'svelte/store';

export const appStore = writable({
  searchQuery: '',
  filters: {},
  user: null,
  theme: 'light'
});
