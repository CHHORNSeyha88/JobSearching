package com.seyha.Job.Listening.repository;

import com.seyha.Job.Listening.model.JobPost;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface JobRepository extends MongoRepository<JobPost,String> {


}
