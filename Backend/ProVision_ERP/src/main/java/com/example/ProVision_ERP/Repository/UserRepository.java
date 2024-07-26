package com.example.ProVision_ERP.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProVision_ERP.Model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long>{
  Optional<Users> findByEmail(String email);
}
