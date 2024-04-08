// Закоментуємо для роботи 7 логіку Persist
import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});

//const contactsPersistConfig = {
//  key: "contacts",
//  storage,
//  whitelist: ["items"],
//};

//const persistedContactsReducer = persistReducer(
//  contactsPersistConfig,
//  contactsReducer
//);

//export const store = configureStore({
//  reducer: {
//    contacts: persistedContactsReducer,
//    filters: filtersReducer,
//  },
//  middleware: (getDefaultMiddleware) =>
//    getDefaultMiddleware({
//      serializableCheck: {
//        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//      },
//    }),
//});

// export const persistor = persistStore(store);
