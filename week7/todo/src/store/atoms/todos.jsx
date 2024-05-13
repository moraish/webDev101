import { atom } from "recoil";

export const todoAtom = atom({
    key: 'todoAtom',
    default: [{
        "title": "Sample Todo",
        "desc" : "Sample description"
    }]
})