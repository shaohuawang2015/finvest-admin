import { queryActivities } from '@/service/api';

export default {
  namespace: 'activities',

  state: {
    list: [],
  },

  effects: {
    *fetchList(_, { call, put }) {
      const response = yield call(queryActivities);
      yield put({
        type: 'saveList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
