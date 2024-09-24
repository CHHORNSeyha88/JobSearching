package com.seyha.Job.Listening.controller;

import com.seyha.Job.Listening.model.JobPost;
import com.seyha.Job.Listening.repository.JobRepository;
import com.seyha.Job.Listening.repository.JobSearch;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SwaggerPostController {
    @Autowired
    private JobRepository JobRepository;
    @Autowired
    private JobSearch JobSearch;


    @RequestMapping(value="/")
    @CrossOrigin
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui.html");
    }
    @GetMapping("/alljob")
    @CrossOrigin
    public List<JobPost> getAllJobPosts() {
        return JobRepository.findAll();
    }
    @PostMapping("/addjob")
    @CrossOrigin
    public JobPost saveJobPost(@RequestBody JobPost jobPost) {
        return JobRepository.save(jobPost);
    }

    @DeleteMapping("/delete/{id}")
    @CrossOrigin
    public String deleteJobPost(@PathVariable("id") String id) {
        JobRepository.deleteById(id);
        return"Delete successful!";
    }
//
//    @PutMapping("update/{id}")
//    public JobPost updateJobPost(@PathVariable("id") String id, @RequestBody JobPost jobPost) {
//        JobPost updatedJobPost = JobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job Post Not Found"));
//        if (updatedJobPost != null) {
//            jobPost.setProfile(jobPost.getProfile());
//            jobPost.setDes(jobPost.getDes());
//            jobPost.setTechs(jobPost.getTechs());
//            jobPost.setExp(jobPost.getExp());
//
//        }
//        return JobRepository.save(jobPost);
//    }

    @GetMapping("/posts/{text}")
    @CrossOrigin
    public List<JobPost> getJobPostsByText(@PathVariable String text) {
        return JobSearch.findByText(text);
    }
}
