import { atom, selector } from "recoil";

export const todoAtom = atom({
    key: 'todoAtom',
    default: [{
        "title": "Sample Todo",
        "desc" : "Sample description"
    }]
})


export const toDoTitleAtom = atom({
    key: "toDoTitle",
    default: ""
})
export const toDoDescAtom = atom({
    key: "toDoDesc",
    default: ""
})


export const todoFilterState = atom({
    key: "todoListFilterState",
    default: "Show all"
})


// export const filterSelector = selector({
//     key: "filterSelector",
//     get: ({get}) => {
//         const filter = get(todoFilterState);
//         const list = get(todoAtom);


//     }

// })