package com.example.ProVision_ERP.Services;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.ProVision_ERP.Dto.LoginRequest;
import com.example.ProVision_ERP.Dto.RegisterRequest;
import com.example.ProVision_ERP.Excepction.EmailAllReadyExistsException;
import com.example.ProVision_ERP.Model.Rol;
import com.example.ProVision_ERP.Model.Users;
import com.example.ProVision_ERP.Repository.RolRepository;
import com.example.ProVision_ERP.Repository.UserRepository;

@Service
public class AuthService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RolRepository rolRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    public Users Signup(RegisterRequest dto) {


        Optional<Users> existingUser = userRepository.findByEmail(dto.getEmail());
        if (existingUser.isPresent()) {
            throw new EmailAllReadyExistsException("Correo Ya En Uso");
        }
        System.out.println(dto.getRol());
        Rol rol = rolRepository.findByName(dto.getRol());
        if (rol == null) {
            throw new RuntimeException("Role not found");
        }
        
        Set<Rol> roles = new HashSet<>();
        roles.add(rol);
        Users user = new Users()
        .setPassWord(passwordEncoder.encode(dto.getPassWord()))
        .setName(dto.getName())
        .setLastname(dto.getLastname())
        .setEmail(dto.getEmail())
        .setTelephone(dto.getTelephone())
        .setRol(roles);

        return userRepository.save(user);
    }

public Users login(LoginRequest dto) {
    try {
        System.out.println("Ingreso a service login");
        System.out.println(dto.getEmail());
        System.out.println(dto.getPassword());
        
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                dto.getEmail(),
                dto.getPassword()
            )
        );
        
        System.out.println("Autenticación exitosa");
        
        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        return userRepository.findByEmail(dto.getEmail())
            .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
    } catch (AuthenticationException e) {
        System.out.println("Error de autenticación: " + e.getMessage());
        throw new RuntimeException("Credenciales inválidas", e);
    }
}


    
}
