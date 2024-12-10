import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
