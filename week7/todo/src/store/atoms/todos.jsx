import { atom } from "recoil";

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