import reducer from "./aurhReducers";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return the intiaial state", () => {
    expect(reducer(undefined, {})).toEqual({
      idToken: null,
      userId: null,
      error: null,
      loading: false,
    });
  });

  it("should store the token upon login", () => {
    expect(
      reducer(
        {
          idToken: null,
          userId: null,
          error: null,
          loading: false,
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token",
          userId: "some-user-id",
        }
      ) // here we have to pass the correct payload
    ).toEqual({
      idToken: 'some-token',
      userId: 'some-user-id',
      error: null,
      loading: false,
    });
  });
});
