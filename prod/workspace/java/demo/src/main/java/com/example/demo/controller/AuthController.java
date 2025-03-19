package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@Controller
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    // ✅ 이 부분을 추가해야 함!
    @GetMapping("/login")
    public String login() {
         return "login";
    }

    @GetMapping("/signup")
    public String showSignupForm() {
        return "signup"; // signup.html로 이동
    }

    @PostMapping("/signup")
    public String signup(@RequestParam String username, @RequestParam String email, @RequestParam String password, Model model) {
        try {
            User user = userService.registerUser(username, email, password);
            model.addAttribute("message", "회원가입 성공: " + user.getUsername());
            return "redirect:/"; // 회원가입 후 홈으로 이동
        } catch (Exception e) {
            model.addAttribute("error", "회원가입 실패");
            return "signup";
        }
    }
}