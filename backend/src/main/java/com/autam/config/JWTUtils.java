package com.autam.config;

import static com.autam.constants.SecurityConstants.SECURITY_SECRET;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;
import java.util.Map;
import java.util.stream.Collectors;

import com.autam.dto.request.UserAuthDetails;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JWTUtils {
    

    public String generateAuthToken(Authentication authentication) {
        final UserAuthDetails user = (UserAuthDetails) authentication.getPrincipal();
        final LocalDateTime now = LocalDateTime.now();
        final LocalDateTime twoDaysExpiration = LocalDateTime.now().plusDays(2);

        final Map<String, Object> claims = Map.of(
                                                  "id", Long.toString(user.getId()),
                                                  "email", user.getEmail(), 
                                                  "name", user.getUsername(), 
                                                  "roles", user.getAuthorities()
                                                            .stream()
                                                            .map(a -> a.getAuthority())
                                                            .collect(Collectors.toList())
                                                );
        return Jwts.builder()
                    .addClaims(claims)
                    .setSubject(String.valueOf(user.getId()))
                    .setIssuedAt(Date.from(now.toInstant(ZoneOffset.UTC)))
                    .setExpiration(Date.from(twoDaysExpiration.toInstant(ZoneOffset.UTC)))
                    .signWith(SignatureAlgorithm.HS512, SECURITY_SECRET)
                    .compact();                    
    }


	public String getUserNameFromJwtToken(String token) {
		return Jwts.parser().setSigningKey(SECURITY_SECRET).parseClaimsJws(token).getBody().getSubject();
	}

	public boolean validateJwtToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(SECURITY_SECRET).parseClaimsJws(authToken);
			return true;
		} catch (SignatureException e) {
			log.error("Invalid JWT signature: {}", e.getMessage());
		} catch (MalformedJwtException e) {
			log.error("Invalid JWT token: {}", e.getMessage());
		} catch (ExpiredJwtException e) {
			log.error("JWT token is expired: {}", e.getMessage());
		} catch (UnsupportedJwtException e) {
			log.error("JWT token is unsupported: {}", e.getMessage());
		} catch (IllegalArgumentException e) {
			log.error("JWT claims string is empty: {}", e.getMessage());
		}

		return false;
	}
}
