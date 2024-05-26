import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface ApplicationState {
    orientation: string;
}

const initialState: ApplicationState = {
    orientation: "",
};

export const ApplicationSlice = createSlice({
    name: 'ApplicationSlice',
    initialState,
    reducers: {
        updateApplication: (state, action: PayloadAction<Partial<ApplicationState>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateApplication } = ApplicationSlice.actions;

export const selectApplication = (state: { ApplicationSlice: ApplicationState }): ApplicationState => state.ApplicationSlice;

export default ApplicationSlice.reducer;
