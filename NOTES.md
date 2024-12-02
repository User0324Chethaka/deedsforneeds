# Todo

- [ ] run 'npm audit' and fix vulnerabilities before deployment
- [ ] add Apache license for Roboto font
- [ ] remove optional option in type.d.ts OnboardingViewProps

# Library suggestions

- [ ] [LiveStore](https://livestore.dev/)
- [ ] [ How to build local-first native apps with LiveStore and Expo ](https://www.youtube.com/watch?v=zQIhJqYU1Qw)
- [ ] [firebase app check](https://rnfirebase.io/app-check/usage)
- [ ] [firebase auth](https://rnfirebase.io/auth/usage)
- [ ] [firebase firestore](https://rnfirebase.io/firestore/usage)
- [ ] [firebase functions](https://rnfirebase.io/functions/usage)
- [ ] [firebase cloud messaging](https://rnfirebase.io/messaging/usage)
- [ ] [firebase cloud storage](https://rnfirebase.io/storage/usage)

# Self notes

- sans-serif font used: Roboto
- serif font used (for logo): Cardo
- main blue theme used: #0836AF
- user password is 123456@A

/app/index.tsx
// import React, { useState, useEffect } from "react";
// import { Redirect } from "expo-router";
// import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

// const Index = () => {
// const [initializing, setInitializing] = useState(true);
// const [user, setUser] = useState<FirebaseAuthTypes.User | null | undefined>(); // Allow undefined and null

// useEffect(() => {
// const subscriber = auth().onAuthStateChanged((user) => {
// setUser(user);
// if (initializing) setInitializing(false);
// });

// return subscriber;
// }, []);

// if (initializing) return null;

// if (user) return <Redirect href={"/(root)/"} />;

// return <Redirect href={"/(auth)/welcome"} />;
// };

// export default Index;
