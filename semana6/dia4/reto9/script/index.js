const containerJobs = document.querySelector("#container-jobs");

const renderJobs = (arrayObjectJobs) => {
  containerJobs.innerHTML = "";

  arrayObjectJobs.map((job) => {
    const html = `<section class="card">
                    <div class="column-1">
                        <img src=${job.logo} alt="">
                    </div>
                    <div class="column-2">
                        <div>
                            <span class="title">${
                              job.company
                            }&nbsp;&nbsp;&nbsp;</span>
                            ${
                              job.new
                                ? `<span class="bagde-primary">&nbsp;&nbsp;new!&nbsp;&nbsp;</span>`
                                : ``
                            }
                            ${
                              job.featured
                                ? `<span class="bagde-secondary">&nbsp;&nbsp;featured&nbsp;&nbsp;</span>`
                                : ``
                            }
                        </div>
                        <div>
                            <h4>${job.position}</h4>
                        </div>
                        <div>
                            <span class="text-dark"> 
                                ${job.postedAt} - 
                                ${job.contract} - 
                                ${job.location} 
                            </span>
                        </div>
                    </div>
                    <div class="column-3">
                        ${job.languages.map(
                          (language) =>
                            `<span class="skill">${language}</span>&nbsp;&nbsp;`
                        )}
                        ${job.tools.map(
                          (tool) =>
                            `<span class="skill">${tool}</span>&nbsp;&nbsp;`
                        )}
                    </div>
                </section>`;

    containerJobs.innerHTML += html.replaceAll(",", "");
  });
};

const selectLanguage = document.querySelector("#select-languages");

selectLanguage.onchange = function (event) {
  console.log(event.target.value);
  const techFilter = event.target.value;

  const newJobs = jobs.filter((job) => job.languages.includes(techFilter) || job.tools.includes(techFilter));
  renderJobs(newJobs);
};

renderJobs(jobs);

