// languageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LanguageState {
    language: string;
}

const initialState: LanguageState = {
    language: 'en', // default language
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;

export const saveLanguagePreference = (language: string) => {
    AsyncStorage.setItem('preferredLanguage', language);
};

export const loadLanguagePreference = async () => {
    try {
        const preferredLanguage = await AsyncStorage.getItem('preferredLanguage');
        return preferredLanguage || 'en'; // default to English if no preference is found
    } catch (error) {
        console.error('Error loading language preference:', error);
        return 'en'; // default to English in case of error
    }
};
