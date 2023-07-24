package com.kds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.kds.models.Policyadding;

public interface policyaddRepo extends JpaRepository<Policyadding, Long> {
}