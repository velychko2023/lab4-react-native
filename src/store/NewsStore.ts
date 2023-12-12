import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NewsRequest} from '../type';

type State = {
  news: NewsRequest | undefined;
};

type Action = {
  getNews: () => Promise<void>;
};

export const newsStore = create<State & Action>()(
  persist(
    set => ({
      news: undefined,
      async getNews() {
        const url =
          'https://newsapi.org/v2/top-headlines?' +
          'country=ua&' +
          'apiKey=1641e22115de47f08fe3736fb068599f';
        const req = new Request(url);
        const res = await fetch(req);
        const data = await res.json();
        console.log('Send request!!');
        set(() => ({news: data}));
      },
    }),
    {
      name: 'news-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
