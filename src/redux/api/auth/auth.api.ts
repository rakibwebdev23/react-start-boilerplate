
import { baseAPI } from "../baseApi/baseApi";
import type { LoginRequest, LoginResponse } from "./auth.type";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    registerClient: build.mutation({
      query: (data) => ({
        url: "/auth/user/register/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: "/account/login/",
        method: "POST",
        body: data,
      }),
    }),
    verifyOTP: build.mutation({
      query: (data) => ({
        url: "/auth/signup-verify-otp/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    updatePassword: build.mutation({
      query: (payload) => ({
        url: "/user/update-password",
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Auth"],
    })
  }),
});

export const {
  useRegisterClientMutation,
  useLoginMutation,
  useVerifyOTPMutation,
  useUpdatePasswordMutation
} = userAPI;
