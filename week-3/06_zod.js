// const express = require('express');
// const app = express();
const z = require('zod');

// ZOD is a library used to perform input validation. 

const userSchema = z.object({
    username: z.string(),
    password: z.string().min(8)
});

user = {
    username: 'moraish',
    password: 'abcd12'
};

console.log(userSchema.parse(user));
