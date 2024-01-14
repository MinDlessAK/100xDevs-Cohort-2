const zod =require('zod')

const createTodo=zod.object({
    title: zod.String(),
    describtion:zod.String()
})

const updateTodo=zod.object({
    id: zod.String()
})

module.export={
    createTodo:createTodo,
    updateTodo:updateTodo
}
