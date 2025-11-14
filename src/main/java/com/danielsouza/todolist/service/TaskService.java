package com.danielsouza.todolist.service;

import com.danielsouza.todolist.model.Task;
import com.danielsouza.todolist.repository.TaskRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public  Task save(Task task) {
        return this.taskRepository.save(task);
    }

    public List<Task> listTasks() {
        return this.taskRepository.findAll();
    }

    public Task getTaskById(Long id) {
        return this.taskRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(String.format("Task with id %s not found", id)));
    }

    public Task updateTask(Long id, Task task) {
        Task oldTask = this.getTaskById(id);

        if (task.getTitle() != null) {
            oldTask.setTitle(task.getTitle());
        }
        oldTask.setCompleted(task.isCompleted());

        return this.taskRepository.save(oldTask);
    }

    public String updateCompletedTask(Task task) {
        if(updateTask(task.getId(), task).isCompleted()){
            return "Sucessfully updated";
        }else {
            return "Failed";
        }
    }

    public void deleteTaskById(Long id) {
        this.taskRepository.deleteById(id);
    }

//    public boolean updateCompletedTask(Task task) {
//        Task oldTask = this.getTaskById(task.getId());
//        oldTask.setCompleted(task.isCompleted());
//
//        try {
//            this.taskRepository.save(oldTask);
//            return true;
//        } catch (Exception ex) {
//            System.err.println("Error while updating task completed status" + ex.getMessage());
//            return false;
//        }
//    }
}
