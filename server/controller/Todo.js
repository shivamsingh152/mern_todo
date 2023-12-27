import Todo from "../modals/Todo.js";

export const addTodo = async(req,res) =>{
    try{
        const newTodo = await Todo.create({
            data: req.body.data,
            createdAt: Date.now()
        })
        await newTodo.save();
        return res.status(200).json(newTodo);
    }
    catch(err){
       return res.status(500).json(err.message);
    }
};

export const getAllTodos = async(req,res) =>{
    try{
        const getTodo =  await Todo.find({}).sort({ 'createdAt': -1})
        return res.status(200).json(getTodo);
        }
    catch(err){
       return res.status(500).json(err.message);
    }
};

export const toggleTodo = async(req,res) =>{
    try{
        const getToggle = await Todo.findById(req.params.id);
        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.id },
            { done: !getToggle.done }
        )
        await todo.save();
        return res.status(200).json(todo);
        }
    catch(err){
       return res.status(500).json(err.message);
    }
};

export const updateTodo = async(req,res) =>{
    try{
        await Todo.findOneAndUpdate(
            { _id: req.params.id },
            { data: req.body.data }
        )
        const todo = await Todo.findById(req.params.id)
        return res.status(200).json(todo);
        }
    catch(err){
       return res.status(500).json(err.message);
    }
};

export const deleteTodo = async(req,res) =>{
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);
        return res.status(200).json(todo);
        }
    catch(err){
       return res.status(500).json(err.message);
    }
};