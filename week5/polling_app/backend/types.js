const z = require("zod");

const poll_schema = z.object({
    poll_name: z.string({required_error: "poll name is a required field"}),
    poll_options: z.string().array().min(2, {message: "poll options must contain a minimum of two elements."})
})

const vote_schema = z.object({
    poll_name: z.string({required_error: "poll name is a required field"}),
    option: z.number({required_error: "option is a required field"})
})


module.exports = {
    poll_schema: poll_schema,
    vote_schema: vote_schema
}