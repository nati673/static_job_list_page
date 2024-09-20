import React, { useState } from "react";
import Header from "../components/Header";
import JobListCard from "../components/JobListCard";
import { data } from "../Data/data";
function JobList() {
  const [filters, setFilters] = useState([]);

  const handleAddFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const handleRemoveFilter = (filter) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };


  const filteredJobs = data.filter((job) => {
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((filter) => jobTags.includes(filter));
  });

  return (
    <div>
      <Header
        filters={filters}
        onRemoveFilter={handleRemoveFilter}
        onClearFilters={clearFilters}
      />
      <div
        className={`flex flex-col justify-center items-center w-full ${
          filters.length > 0 ? `mt-[15px]` : `mt-[75px]`
        } mb-[78px]`}
      >
        {filteredJobs.map((job, index) => (
          <JobListCard
            company={job.company}
            job_title={job.position}
            is_new={job.new}
            is_featured={job.featured}
            logo={job.logo}
            posted_at={job.postedAt}
            contract={job.contract}
            location={job.location}
            role={job.role}
            level={job.level}
            languages={job.languages}
            tools={job.tools}
            onFilter={handleAddFilter}
          />
        ))}
      </div>
    </div>
  );
}

export default JobList;
