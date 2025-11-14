package backend.src.main.java.com.danielsouza.todolist.repository;

import backend.src.main.java.com.danielsouza.todolist.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
