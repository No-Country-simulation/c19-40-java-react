package com.example.ProVision_ERP.Config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import com.example.ProVision_ERP.Excepction.MissingTokenException;
import com.example.ProVision_ERP.Services.CustomUserDetailsService;

import io.jsonwebtoken.ExpiredJwtException;
import io.micrometer.common.lang.NonNull;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private HandlerExceptionResolver handlerExceptionResolver;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
        @NonNull HttpServletRequest request,
        @NonNull HttpServletResponse response,
        @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        try {
            final String authHeader = request.getHeader("Authorization");
            System.out.println("Header Authorization: " + authHeader);

            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                System.out.println("No se encontró un token válido.");
                throw new MissingTokenException("No se proporciono un token de autenticacion valido");
            }

            final String jwt = authHeader.substring(7);
            final String username = jwtService.extractUsername(jwt);
            System.out.println("Username extraído del JWT: " + username);

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

            if (username != null && authentication == null) {
                System.out.println("Ingreso a detalle de usuarios cargados");
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

                if (userDetails != null) {
                    System.out.println("Detalles del usuario cargados: " + userDetails.getUsername());

                    if (jwtService.isTokenValid(jwt, userDetails)) {
                        System.out.println("Token válido, configurando autenticación.");
                        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                userDetails.getAuthorities()
                        );

                        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authToken);
                    } else {
                        System.out.println("Token no válido.");
                        throw new MissingTokenException("El token proporcionado no es válido");
                    }
                } else {
                    System.out.println("Usuario no encontrado: " + username);
                    throw new MissingTokenException("No se encontró el usuario asociado al token");
                }
            }

            filterChain.doFilter(request, response);
        } catch (MissingTokenException | ExpiredJwtException e) {
            System.out.println("Excepción de token: " + e.getMessage());
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write(e.getMessage());
            return; // Importante: no continuar con el filterChain
        } catch (Exception exception) {
            System.out.println("Excepción durante la autenticación: " + exception.getMessage());
            handlerExceptionResolver.resolveException(request, response, null, exception);
        }
    }
}