import {
  ProfileAction,
  ProfileActionTypes,
  ProfileReducer,
} from "../../types/types.reducers/ProfileReducer";

const initialState: ProfileReducer = {
  loading: false,
  error: null,
  profile: {
    id: 0,
    username: "system",
    email: "mamka@mail.ru",
  },
};

export const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileReducer => {
  switch (action.type) {
    case ProfileActionTypes.LOADING:
      return { ...state, loading: true, error: null };
    case ProfileActionTypes.GET_PROFILE:
      return {
        ...state,
        profile: action.profile,
        loading: false,
      };
    case ProfileActionTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return { ...state, loading: false, error: null };
  }
};
