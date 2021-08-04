# TypeScript Express + MongoDB crud API

<!-- ## **Usage:** -->

## **1. Usage**

&nbsp;

### **Installing packages:**

```
npm i
```

&nbsp;

### **Running Application**

&nbsp;

Build the project in javascript:

```
npm run build
```

Start the project:

```
npm run start
```

### Development with typescript

```
npm run dev
```

### Run application with docker
```
docker-compose up
```

&nbsp;

## **2. API Documentation**

&nbsp;

Use Postman or Insomnia for testing the API:

We are working with User model here, following is the model schema

```
 {
   "name": "Tim Book",
   "age": 24,
   "designation": "Football Player",
  }
```

&nbsp;

<!-- ### **<ins>Routes</ins>** -->

### **2.1 Routes:**

&nbsp;

**GET**

This route will give you all the users in database

```
localhost:3000/api/users/all
```

**GET ONE**

This route will give you the user with the provided ID

```
localhost:3000/api/users/find/:id
```

**POST**

Creating new user with the given Request body in JSON

```
localhost:3000/api/users/new
```

Eg. Request body

```
 {
   "name": "Tim Book",
   "age": 24,
   "designation": "Football Player",
 }
```

**DELETE**

This route will delete the user with the provided ID

```
localhost:3000/api/users/delete/:id
```

**UPDATE**

This route will update the user with the provided ID and given Request body in JSON

```
localhost:3000/api/users/update/:id
```

### Notes

Fixing `npm run build` errors


```
sudo rm -rf node_modules/ package-lock.json
```

Build project again

```
npm run build
```

Change ownership of data folder
```bash
sudo chown -R $USER data
```
