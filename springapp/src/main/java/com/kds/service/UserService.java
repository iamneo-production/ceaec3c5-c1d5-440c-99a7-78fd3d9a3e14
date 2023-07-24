package com.kds.service;

import org.springframework.stereotype.Service;

import com.kds.repositories.UserRepo;
import com.kds.repositories.policyaddRepo;
import com.kds.models.Policyadding;
import com.kds.models.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
@Service
public class UserService {
	
	@Autowired
	private UserRepo Repo;
	
    public boolean deleteStaff(int id) {
        if (Repo.findById(id).isPresent()) {
            Repo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    public List<User> getAllStaff() {
        return Repo.findAll();
    }

	public String SignUpx(User staffx) {
        String email = staffx.getEmail();
        User staffxAuth = Repo.findByEmail(email);
        if (staffxAuth == null) {
            Repo.save(staffx);
            return "Signup Successful !";
        } else {
            if (staffxAuth.getEmail().equals(email)) {
                return "Email ID Already Exists";
            } else {
                return "Invalid Email ID";
            }
        }
    } 
	public String Loginx(String email, String password) {
		User userx = Repo.findByEmail(email);
		if (userx == null) {
			return "Invalid Email !";
		} else {
			if (userx.getPassword().equals(password)) {
				return "Login Successful !";
			} else {
				return "Invalid Password";
			}
		}
	}
      

	@Autowired
    private policyaddRepo policyRepository;
        public Policyadding savePolicy(Policyadding policy) {
            return policyRepository.save(policy);
        
        }
 

        public List<Policyadding> getAllPolicies() {
            return policyRepository.findAll();
        }

        public Policyadding addPolicy(Policyadding policyadding) {
            return policyRepository.save(policyadding);
        }
}