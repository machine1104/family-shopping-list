# Family Shopping List

Shared shopping list with family members.

## Description

FSL is a simple list of needs for you family. Its based on Angular and Firebase.

## Installation

Before starting the app you need to create an `environments` folder inside `src` folder

Put inside it `environment.prod.ts` file
```
export const environment = {
  production: true,
  firebase: {
    apiKey: "xxxxxxxx",
    authDomain: "xxxxxxxx",
    databaseURL: "xxxxxxxx",
    projectId: "xxxxxxxx",
    storageBucket: "xxxxxxxx",
    messagingSenderId: "xxxxxxxx"
  }
};

```
and `environment.ts` file
```
export const environment = {
  production: false,
  firebase: {
    apiKey: "xxxxxxxx",
    authDomain: "xxxxxxxx",
    databaseURL: "xxxxxxxx",
    projectId: "xxxxxxxx",
    storageBucket: "xxxxxxxx",
    messagingSenderId: "xxxxxxxx"
  }
};

```

Replace `"xxxxxxxx"` with your secrets found on Firebase (Create project -> Development -> Authentication -> Web configuration)
