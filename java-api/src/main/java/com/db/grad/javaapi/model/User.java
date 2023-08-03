package com.db.grad.javaapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User
{
    @Id
    private long id;
    private String email;
    private String userPassword;
    private String userRole;

    @Id
    @Column(name = "id", nullable = false)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "email", nullable = false)
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "user_password", nullable = false)
    public String getUserPassword() {
        return userPassword;
    }
    public void setUserPassword(String newPassword) {
        this.userPassword = newPassword;
    }

    @Column(name = "user_role", nullable = false)
    public String getUserRole() {
        return userRole;
    }
    public void setUserRole(String newRole) {
        this.userRole = newRole;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userRole='" + userRole + '\'' +
                '}';
    }
}
