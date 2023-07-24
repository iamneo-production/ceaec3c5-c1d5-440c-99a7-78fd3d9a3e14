package com.kds.models;
		import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="user")
public class User {
	
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int Id;
		
		private String email;
		private String password;
		private String username;
		
		public User() {}
		
		public User(int id, String email, String password, String username) {
			super();
			Id = id;
			this.email = email;
			this.password = password;
			this.username = username;
		}
		
		public int getId() {
			return Id;
		}
		public void setId(int id) {
			Id = id;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		
		
}
