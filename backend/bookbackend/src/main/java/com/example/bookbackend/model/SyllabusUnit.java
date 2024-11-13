package com.example.bookbackend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name = "unit") // tablename in database(if not mentioned, defaults the classname to tablename)
@Entity // the class represents a table that maps to the table in database

public class SyllabusUnit {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private Boolean taught;

    public SyllabusUnit() {
    }

    public SyllabusUnit(String title, String description, Boolean taught) {
        this.description = description;
        this.title = title;
        this.taught = taught;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isTaught() {
        return taught;
    }

    public void setPublished(boolean isTaught) {
        this.taught = isTaught;
    }

    @Override
    public String toString() {
        return "Tutorial [id=" + id + ", title=" + title + ", desc=" + description + ", taught=" + taught + "]";
    }
}
