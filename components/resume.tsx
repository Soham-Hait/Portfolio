"use client"

export function ResumeContent() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-black font-sans leading-relaxed">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-gray-300 pb-6">
        <h1 className="text-4xl font-bold mb-2">SOHAM HAIT</h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span>+91-8282903271</span>
          <span>sohamhait06@gmail.com</span>
          <span>Github: Soham-Hait</span>
          <span>linkedin.com/in/soham-hait-8baa59268</span>
        </div>
        <div className="mt-2">
          <p className="font-semibold">B.Tech. Computer Science and Engineering</p>
          <p>Narula Institute of Technology, Kolkata</p>
        </div>
      </div>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Education</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Degree/Certificate</th>
                <th className="border border-gray-300 p-2 text-left">Institute/Board</th>
                <th className="border border-gray-300 p-2 text-left">CGPA/Percentage</th>
                <th className="border border-gray-300 p-2 text-left">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">B.Tech.</td>
                <td className="border border-gray-300 p-2">Narula Institute of Technology Kolkata</td>
                <td className="border border-gray-300 p-2">8.22 (Current)</td>
                <td className="border border-gray-300 p-2">2022-Present</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Higher Secondary</td>
                <td className="border border-gray-300 p-2">Don Bosco School Park Circus/ISC Board</td>
                <td className="border border-gray-300 p-2">91.0%</td>
                <td className="border border-gray-300 p-2">2022</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Secondary</td>
                <td className="border border-gray-300 p-2">Don Bosco School Park Circus/ICSE Board</td>
                <td className="border border-gray-300 p-2">95.0%</td>
                <td className="border border-gray-300 p-2">2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Projects</h2>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">CineTix - A Movie Booking Website</h3>
            <span className="text-sm text-gray-600">May 2025</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">Next.js, Typescript, Tailwind CSS, Node.js, MongoDB</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              Developed an interactive front-end using Next.js, TypeScript, and Tailwind CSS, enabling users to browse
              movies, view details, and book tickets seamlessly.
            </li>
            <li>
              Built a high-performance backend using Node.js and Express, integrating a RESTful API to handle client
              requests efficiently.
            </li>
            <li>
              Utilized MongoDB for secure storage of user data, employing bcrypt and JWT-based authentications to
              encrypt sensitive information such as passwords.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">Containerized Web Hosting on Azure VM</h3>
            <span className="text-sm text-gray-600">May 2025</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">Docker CLI, Apache CLI, MS Azure, Linux</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              Deployed and managed a containerized web application using Docker and Apache on an Azure Virtual Machine,
              ensuring scalable and efficient hosting.
            </li>
            <li>
              Configured the Azure VM environment to optimize performance and leverage features such as secure
              networking, automated backups, and resource monitoring.
            </li>
            <li>
              Performed all setup, configuration, and deployment tasks through the command-line interface (CLI) of the
              Azure Linux Virtual Machine.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">Linear Regression Models</h3>
            <span className="text-sm text-gray-600">August 2023</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">Python, Jupyter Notebook, Kaggle</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              Utilized pandas, numpy, scikit-learn, seaborn, and matplotlib libraries within Jupyter Notebook,
              leveraging Kaggle datasets for comprehensive data analysis and machine learning workflows.
            </li>
            <li>
              Conducted exploratory data analysis and built machine learning models to predict house prices using key
              real estate features and market trends.
            </li>
            <li>
              Performed data preprocessing, visualization, and classification modeling on the Iris dataset to accurately
              predict iris flower species based on morphological characteristics.
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Skills</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Programming:</strong> Python (for ML), C++, Java
          </li>
          <li>
            <strong>Tech Stack:</strong> JavaScript (Basic), HTML, CSS, TypeScript, React, Node.js, Next.js, GitHub,
            Microsoft Azure, Docker, Jupyter Notebook, Kaggle Datasets, MongoDB
          </li>
          <li>
            <strong>Computer Fundamentals:</strong> Operating Systems, Computer Networks, OOPs, DBMS
          </li>
          <li>
            <strong>Non Technical:</strong> Team Management, Leadership, Communication, Team Building
          </li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Certifications</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Object-Oriented Data Structures in C++:</strong> Data Structures, Object Oriented Programming
            Certificate
          </li>
          <li>
            <strong>Interactive Programming in Python:</strong> Interactive Programming, Algorithms, Libraries
            Certificate
          </li>
          <li>
            <strong>Introduction to DevOps:</strong> Concepts of SaaS, PaaS, IaaS, CI/CD Certificate
          </li>
          <li>
            <strong>Introduction to Front-End Development:</strong> HTML, CSS, Bootstrap Certificate
          </li>
          <li>
            <strong>Google Cloud Skills Boost:</strong> Google Cloud Platform, Cloud Infrastructure, Cloud Storage
            Certificate
          </li>
          <li>
            <strong>Foundations of Cybersecurity:</strong> Security ethics, cybersecurity attacks, security frameworks
            Certificate
          </li>
        </ul>
      </section>

      {/* Achievements */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Achievements</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Model Mania 2K23:</strong> Secured 1st rank among Model Making Competition Certificate (2023)
          </li>
          <li>
            <strong>SciQuest 2k24:</strong> Secured 3rd rank among 40 teams in Technical Quiz Competition Certificate
            (2024)
          </li>
          <li>
            <strong>Nit-Lit Literary Fest 2023:</strong> Secured 3rd rank in JAM Event Certificate (2023)
          </li>
          <li>
            <strong>Hack4Bengal 4.0 Virtual Hack:</strong> Participated in Hackathon Certificate (2025)
          </li>
        </ul>
      </section>
    </div>
  )
}
