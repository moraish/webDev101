const z = require('zod')

const createToDo = z.object({
    title: z.string(),
    description: z.string()
});

const updateToDo = z.object({
    id: z.string()
});

module.exports = {
    createToDo: createToDo, 
    updateToDo: updateToDo
};  

// MANUTAL TESTING // 
// ================== //

// const newToDo = {
//     title: "workout",
//     description: 11
// };

// console.log(createToDo.parse(newToDo));
// const parseData = createToDo.safeParse(newToDo);
// console.log(parseData.success);