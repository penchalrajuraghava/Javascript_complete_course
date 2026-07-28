# Module 15 - JavaScript JSON (JavaScript Object Notation)

## 📚 Topics Covered

- What is JSON?
- JSON Syntax
- JSON vs JavaScript Objects
- JSON.stringify()
- JSON.parse()
- Pretty Printing JSON
- Replacer Function
- Reviver Function
- Local Storage with JSON
- JSON in APIs
- Real-World Examples

---

# Learning Objectives

After completing this module, you will be able to:

- Understand JSON.
- Convert JavaScript objects into JSON.
- Convert JSON into JavaScript objects.
- Store JSON in Local Storage.
- Read API responses.
- Use replacer and reviver functions.

---

# What is JSON?

JSON stands for **JavaScript Object Notation**.

It is a lightweight data-interchange format used for communication between frontend and backend applications.

Example

```json
{
  "name": "Sunny",
  "age": 22,
  "city": "Hyderabad"
}
```

---

# JSON Rules

- Keys must be inside double quotes.
- Strings must use double quotes.
- No comments.
- No functions.
- No undefined values.
- Supports nested objects and arrays.

---

# JSON vs JavaScript Object

JavaScript Object

```javascript
const user = {
  name: "Sunny",
  age: 22,
  greet() {
    console.log("Hello");
  },
};
```

JSON

```json
{
  "name": "Sunny",
  "age": 22
}
```

Functions are not allowed in JSON.

---

# JSON.stringify()

Converts a JavaScript object into a JSON string.

```javascript
const student = {
  name: "Sunny",
  age: 22,
};

const json = JSON.stringify(student);

console.log(json);
```

Output

```text
{"name":"Sunny","age":22}
```

---

# JSON.parse()

Converts a JSON string into a JavaScript object.

```javascript
const json = '{"name":"Sunny","age":22}';

const student = JSON.parse(json);

console.log(student);
```

---

# Pretty Printing

```javascript
const json = JSON.stringify(student, null, 4);

console.log(json);
```

---

# Replacer Function

```javascript
const json = JSON.stringify(student, (key, value) => {
  if (key === "password") {
    return undefined;
  }

  return value;
});
```

---

# Reviver Function

```javascript
const student = JSON.parse(json, (key, value) => {
  if (key === "age") {
    return Number(value);
  }

  return value;
});
```

---

# Local Storage

```javascript
localStorage.setItem("user", JSON.stringify(student));

const user = JSON.parse(localStorage.getItem("user"));
```

---

# JSON in APIs

Most REST APIs send and receive JSON.

Example

```javascript
fetch("/api/users")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

---

# Summary

✔ JSON is a text format.

✔ JSON is used for APIs.

✔ JSON.stringify() converts objects to JSON.

✔ JSON.parse() converts JSON to objects.

✔ Local Storage stores JSON strings.
