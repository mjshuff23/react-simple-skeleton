# **React Frontend Setup for Python API**

## **Table of Contents**

1. [Initial Setup](#1-initial-setup)

    1. [Create React App](#1-create-react-app)
    2. [Install Dependencies](#2-install-dependencies)

## 1. Initial Setup

### 1. Create React App

```bash
>>> npx create-react-app {{ project name }} --template @appacademy/simple
```

### 2. Install Dependencies

```bash
>>> npm install redux react-redux react-router-dom redux-thunk
```

### 3. Create `config.js` in root directory

```js
export const baseApiUrl = process.env.BASE_API_URL || `http://localhost:5000/api`
```