package com.seyha.Job.Listening.repository;

import com.seyha.Job.Listening.model.JobPost;

import java.util.List;

public interface JobSearch {
    List<JobPost> findByText(String text);

}
