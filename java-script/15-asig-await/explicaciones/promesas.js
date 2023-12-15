function requestHandler (req , res){
    User.findById(req.userId , function(err,res){
        if (err){
            res.send(err)
        } else {
            task.findById(user.taskId , function (err, task){
                if (err){
                    return res.send(err)

                } else {
                    task.completed = true 
                    task.saved(function(err){
                        if (err){
                            return res.send(err)
                        }else {
                            res.send("Task completed")
                        }
                        
                    })
                }
            } )
        }
    })
}



function requestHandler (req ,res){
    user.findById(req.userId)
        .then(function(user){
            return tasks.findById(user.tasksId)
        })

        .then(function(){
            tasks.completed = true
            return tasks.save()
        })

        .then(function(){
            res.send("Task completed")
        })

        .catch(function(errors){
            res.send(errors)
        })




}