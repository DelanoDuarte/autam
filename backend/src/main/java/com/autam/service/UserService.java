package com.autam.service;

import java.util.Optional;

import javax.transaction.Transactional;

import com.autam.domain.CommonUser;
import com.autam.domain.User;
import com.autam.dto.request.SignUpDTO;
import com.autam.dto.request.UserAuthDetails;
import com.autam.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;

@FieldDefaults(level = AccessLevel.PRIVATE)
@Service
public class UserService implements UserDetailsService {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username)
                                    .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        return UserAuthDetails.build(user);
    }
    
    @Transactional
    public UserAuthDetails loadUserById(final Long id) {
        final Optional<User> user = userRepository.findById(id);
        return Optional.ofNullable(UserAuthDetails.build(user.get())).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public Optional<User> signUp(SignUpDTO signUpDTO) {
        User commonUser = new CommonUser();
        commonUser.setEmail(signUpDTO.getEmail());
        commonUser.setPassword(passwordEncoder.encode(signUpDTO.getPassword()));
        commonUser.setName(signUpDTO.getName());
        commonUser.setActive(true);
        commonUser.setTemporary(false);
        return Optional.ofNullable(userRepository.save(commonUser));
    }
}
