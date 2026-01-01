package com.promptkit.controller;

import com.promptkit.model.PromptSpec;
import com.promptkit.service.PromptService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/prompts")
@CrossOrigin
public class PromptController {

    private final PromptService service;

    public PromptController(PromptService service) {
        this.service = service;
    }

    @PostMapping("/compile")
    public String compile(@RequestBody PromptSpec spec) {
        return service.compile(spec);
    }
}
