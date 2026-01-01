package com.promptkit.model;

import java.util.List;

public class PromptSpec {
    private String version;
    private String role;
    private String task;
    private String context;
    private List<String> constraints;
    private List<String> outputFormat;

    public String getVersion() { return version; }
    public void setVersion(String version) { this.version = version; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getTask() { return task; }
    public void setTask(String task) { this.task = task; }

    public String getContext() { return context; }
    public void setContext(String context) { this.context = context; }

    public List<String> getConstraints() { return constraints; }
    public void setConstraints(List<String> constraints) { this.constraints = constraints; }

    public List<String> getOutputFormat() { return outputFormat; }
    public void setOutputFormat(List<String> outputFormat) { this.outputFormat = outputFormat; }
}
