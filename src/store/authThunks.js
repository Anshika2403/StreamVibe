import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../appwrite/auth';  
import { login, logout } from './authSlice';
 
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { dispatch }) => {
        try {
            const session = await authService.login(credentials);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(login({ userData }));
                    return session;
                }
                throw new Error('Failed to get user data');
            }
        }  catch (error) {
            throw error;
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { dispatch }) => {
        try {
            await authService.logout();
            dispatch(logout());
            return true
        } catch (error) {
            console.error("Logout error:", error);
            throw error;
        }
    }
);

// src/store/authThunks.js
// Add this new thunk for signup
export const signupUser = createAsyncThunk(
    'auth/signupUser',
    async (userData, { dispatch }) => {
        try {
            const account = await authService.createAccount(userData);
            const currentUser = await authService.getCurrentUser();
            dispatch(login({ userData: currentUser }));
            return account;
        } catch (error) {
            throw error;
        }
    }
);