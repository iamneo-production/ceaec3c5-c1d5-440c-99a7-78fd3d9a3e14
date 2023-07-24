
package com.kds.controller;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kds.service.*;
import com.kds.models.*;
@RestController

@CrossOrigin(origins="*",allowedHeaders="*")
public class UserController {

    @Autowired
    private UserService Service;

    @GetMapping("/get")
    public List<User> getAllStaffs() {
        return Service.getAllStaff();
    }
    @PostMapping("/add")
    public String addStaff(@RequestBody User f) {
        return Service.SignUpx(f);
    }
    @PostMapping("/auth/login")
	private String Login(@RequestBody Map<String, String> Loginx) {
	    String email = Loginx.get("email");
	    String password = Loginx.get("password");
	    String result = Service.Loginx(email, password);
	    return result;
	}
 

    @DeleteMapping("/{id}")
    public String deleteStaff(@PathVariable int id) {
        return (Service.deleteStaff(id)) ? "User deleted successfully" : "User Not Found";
    }
    @PostMapping("/policies")
    public ResponseEntity<String> createPolicy(@RequestBody Policyadding policy) {
        Service.savePolicy(policy);
        return ResponseEntity.ok("Policy added successfully!");
    }
    
    


        @GetMapping("/showpolicies")
        public List<Policyadding> getAllPolicies() {
            return Service.getAllPolicies();
        }

        @PostMapping
        public Policyadding addPolicy(@RequestBody Policyadding policyadding) {
            return Service.addPolicy(policyadding);
        }
}