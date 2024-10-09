import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { User, userActions } from "entities/User";
import i18next from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";


interface LoginByUsernameProps {
    username: string;
    password: string;
}

// <User, LoginByUsernameProps> - первый аргумент - то, что возвращает сервер, второй - то, что отправляем

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'users/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)

            if(!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(i18next.t('Неверный пароль или логин'))
        }
     
    },
  )