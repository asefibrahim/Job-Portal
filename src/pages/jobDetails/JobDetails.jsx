import React from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="sm:px-8 px-4 mt-12">
      <div class="bg-gray-900   shadow-lg overflow-hidden sm:rounded-md ">
        <div class="px-4 pb-4 sm:px-6">
          <div class="flex-shrink-0 flex -ml-2 py-4 overflow-x-auto">
            <a
              href="/locations/remote"
              rel="noopener noreferrer"
              class="px-2 py-1 inline-flex leading-5 font-semibold rounded-full bg-teal-300 hover:bg-teal-200 text-teal-900"
            >
              Remote
            </a>
          </div>
          <div class="sm:flex sm:items-center sm:justify-between">
            <div>
              <h1 class="sm:mb-4 text-xl leading-5 font-bold text-red-500">
                Backend Developer (Rust / Python)
              </h1>
              <div class="mt-2">
                <div class="sm:flex">
                  <div class="flex flex-shrink-0 items-center font-bold leading-5 text-gray-200">
                    <img
                      class="h-5 w-5 mr-2"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC1UlEQVRYhe3XS4jeVBQH8J/DKDIMUstESjNxsio+upBapDDYKvWBi0AXXRi0C3UpXVjQ4sJFkSoupD4oMjs3NVRFCnFhF8UHKEWkVqlocZM2k0EaFy5EipRvXCSL8nUe+fLNQtADF5Lcc///f27OPeeE/7rd1HtldmkKJzDAU9K5q31gJnsLYBf2tdcP4Ks+IBOjLgiyYkuQFSc3WR60pF/cbvmWICuyICvuGBWv8w4EWTGNGfyJ4mbOS+f2wGRWbMajuBZkRYwrdRr/1QW3UwwEWTGB7/FZncaH1/F9Ew/h/jqNxxMQZMVOPIfnsbVO48WOgmexhPewUKfxudV8b/gEYZRswyP44G+24yImupJDncaLQVZM4lfcE0bJEvbjVFXma+OEUfJDGCXLYZS825VwPQuj5KMW8/Tw3EpBeE7z5k+HUVLhrarMe53xMEpuxSE81j46P+yz0jE8iivYg8fxUxgl+8IoGYVYGCX78TP2Yh6/a2JiXQGgKvMf8TAO4xjOhFGyvQP5ffgcb+AF7K3K/MJq/msmoqrMVWX+Me7GGXwdRsnxMEpmViCeCaNkoSU/jXurMj9VlfmagjslojYGXguj5H3Nm10Mo+QIPmxdnsQr+LQlXuqC21nAdUKWcCCMkl14ux1wFk9UZf7tKHj0qAWtkLOaBDVoxzN9yHsLaEVcwIOYr8r8l74445RjVZl/M856xtiBjbJ/pYCdmG6L0oZYGCV3YQo7ugg4gmm8uFEC8HIr4NXhiZWCcEFzxLIgK57FJrxTp/G1URjbcnwIv3np4AnNzi4M+63XkOxoxRzEbJ3GlzsQw51YxHFNQ3JDFewk4DrQUVqyY9htI1qyIeApTVN6VRMfR+s0/qOd26z5zq/jNiM0pZ0TUQt4OciKLZgdsE126QAGA8snJ9iKyTqNi66YjPdntBtftnfz0rleWXGcVPwdPtEUo1W73v9tPfsHvKbsDsJdtiYAAAAASUVORK5CYII="
                      alt="MedoSync"
                    />
                    <h2>MedoSync</h2>
                  </div>
                  <div class="sm:ml-4 mt-2 flex items-center leading-5 text-gray-300 sm:mt-0 sm:border-l sm:pl-4">
                    €80K - €100K
                  </div>
                  <div class="sm:ml-4 mt-2 flex items-center leading-5 text-gray-300 sm:mt-0 sm:border-l sm:pl-4">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Dublin</span>
                  </div>
                  <div class="sm:mx-4 mt-2 flex items-center leading-5 text-gray-300 sm:mt-0 sm:border-l sm:pl-4">
                    <svg
                      class="sm:hidden flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      ></path>
                    </svg>
                    <span>Ireland</span>
                    <span class="text-xl ml-3">🇮🇪</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden sm:block flex-shrink-0">
              <div class="sm:flex-shrink-0">
                <div class="mt-4 sm:mt-0 w-full flex rounded-md shadow-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:careers@medosync.com"
                    eventcategory="Apply Now Job Detail"
                    eventaction="Click"
                    eventlabel="mailto:careers@medosync.com"
                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-semibold rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-red-700 transition ease-in-out duration-150"
                  >
                    <span>Apply Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="sm:flex sm:items-center justify-between">
            <div class="flex-shrink-0 mt-2 sm:mt-4 flex items-center leading-5 text-gray-300">
              <svg
                class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>
                <time datetime="Tue Aug 08 2023 20:30:54 GMT+0600 (Bangladesh Standard Time)">
                  14 days ago
                </time>
              </span>
            </div>
          </div>
          <div class="sm:hidden block">
            <div class="sm:flex-shrink-0">
              <div class="mt-4 sm:mt-0 w-full flex rounded-md shadow-sm">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:careers@medosync.com"
                  eventcategory="Apply Now Job Detail"
                  eventaction="Click"
                  eventlabel="mailto:careers@medosync.com"
                  class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-semibold rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-red-700 transition ease-in-out duration-150"
                >
                  <span>Apply Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 sm:px-6 pt-6 sm:pb-2 border-t border-gray-500">
          <div class="markdown-component prose text-gray-300 min-w-full space-y-6">
            <h1 className="text-3xl font-extrabold">
              Backend developer (5-7 years’ experience)
            </h1>
            <h2 className="text-2xl font-bold">Role description:</h2>
            <h3 className="text-2xl font-bold">Requirements</h3>
            <ul>
              <li>
                <pre>
                  <code>
                    You must hold a EU passport or EU work permit and work in a
                    EU country (non-negotiable)
                  </code>
                </pre>
              </li>
              <li>GDPR compliant country (EU/UK)</li>
              <li>WFH/Hybrid</li>
              <li>English speaking</li>
            </ul>
            <h3 className="text-2xl font-bold">Mandatory Experience</h3>
            <ul>
              <li>Python</li>
              <li>Rust experience (6 months)</li>
              <li>Written one application in the language</li>
              <li>
                Key crates used are async-graphql, sea-orm, poem-openapi,
                thirtyfour, so experience with these existing crates are
                beneficial. If no experience, willingness to learn new crates.
              </li>
              <li>SQL (MySQL or PostGres experience)</li>
              <li>Data modelling and normalisation</li>
            </ul>
            <h3 className="text-2xl font-bold">Nice to have</h3>
            <ul>
              <li>Bi-lingual - a second language such as German or Dutch</li>
              <li>knowledge of JavaScript</li>
            </ul>
            <h3 className="text-2xl font-bold">Day-to-day</h3>
            <ul>
              <li>
                Responsible for the creation of applications that are primarily
                in rust and some may be in python.
              </li>
              <li>Technical support for the application being developed</li>
              <li>
                Working with varied legacy systems in the health care space
              </li>
              <li>
                Protocols may not be well supported in Rust. e.g. HL7 and SOAP
                integrations
              </li>
              <li>OCR receipts and remittance files etc</li>
              <li>Relative autonomy to deliver applications to completion</li>
              <li>
                Design meetings give direction, developer responsible for
                delivery
              </li>
              <li>
                Working closely with frontend developers creating APIs for them
                to use
              </li>
              <li>Writing end-to-end unit tests (eg selenium)</li>
            </ul>
            <h3 className="text-2xl font-bold">Range</h3>
            <p>
              <strong>€80k - €100k</strong>
            </p>
            <p>
              <em>
                <strong>
                  <strong>
                    CV's from recruiters will automatically disqualify
                  </strong>
                </strong>
              </em>
            </p>
            <h3 className="text-2xl font-bold">Company description</h3>
            <p>
              Based in Dublin, Ireland and Founded in 2019, MedoSync is on a
              mission to eliminate waste from the medical billing so that
              hospitals resources are freed up to focus on great patient care;
              insurers can concentrate on activities with maximum benefit for
              their members health; and doctors can spend more of their working
              time with their patients. We are guided by two values, growth and
              accountability.
            </p>
            <h3 className="text-2xl font-bold">Growth</h3>
            <p>
              “Someone with a growth mindset views intelligence, abilities, and
              talents as learnable and capable of improvement through effort. On
              the other hand, someone with a fixed mindset views those same
              traits as inherently stable and unchangeable over time.” What does
              this mean for our stakeholders? Company: We are in the business of
              change. We are moving the healthcare industry from paper based
              systems to web based systems. We must believe in the capacity for
              change and improvement. Growth doesn’t happen alone and by
              definition it means we don’t have all the answers. We believe in
              the power of being open to change and improvement. We seek
              opinion, we seek expertise and we make informed decisions based on
              what we learn. Learning from experience and integrating experience
              is a key component of how we run the business. People: We value
              people who don’t think they are done. They are looking to improve
              themselves, learn new things, try new things and benefit learning
              gives you – experience. Customers: Our customers are moving to a
              new way of doing things. They are asking their staff to learn new
              skills, to do things they haven’t done before and to embrace the
              chaos of change. We seek these customers out as ideal partners.
            </p>
            <h3 className="text-2xl font-bold">Accountability</h3>
            <p>
              “Accountability at work. It means showing up and setting out to
              accomplish the things you’d said you’d do. It’s about taking
              personal responsibility for your work. It’s also trusting in your
              teammates and knowing you can count on each other to get things
              done.” What does this mean for our stakeholders? Company:
              Achieving accountability means setting clear objectives for the
              company and communicating this path to everyone who is part of
              achieving the objectives. Everyone is working to the shared
              objective and can see their part to play in it. Accountability
              means honesty and transparency. Accountability allows for failure.
              People: We value people who take responsibility for their work and
              complete this work to the best of their abilities. They don’t mind
              being held to account or holding their team to account in order to
              achieve better outcomes. This is done in a respectful and
              collaborative context. Customers: We have obligations to our
              customers and we must make sure we deliver a product that delivers
              exactly what we is promised.
            </p>
          </div>
        </div>
        <div class="px-4 pb-6 sm:px-6 ">
          <div class="sm:flex-shrink-0">
            <div class="mt-4 sm:mt-0 w-full flex rounded-md shadow-sm">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:careers@medosync.com"
                eventcategory="Apply Now Job Detail"
                eventaction="Click"
                eventlabel="mailto:careers@medosync.com"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-semibold rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-red-700 transition ease-in-out duration-150"
              >
                <span>Apply Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 pb-4 sm:px-6">
        <div class="flex-shrink-0 flex -ml-2 py-4 overflow-x-auto">
          <a
            href="/locations/remote"
            rel="noopener noreferrer"
            class="px-2 py-1 inline-flex leading-5 font-semibold rounded-full bg-teal-300 hover:bg-teal-200 text-teal-900"
          >
            Remote
          </a>
        </div>
        <div class="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 class="sm:mb-4 text-xl leading-5 font-bold text-red-500">
              Senior Rust Blockchain Engineer
            </h1>
            <div class="mt-2">
              <div class="sm:flex">
                <div class="flex flex-shrink-0 items-center font-bold leading-5 text-gray-200">
                  <img
                    class="h-5 w-5 mr-2"
                    src="data:image/png;base64,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"
                    alt="Ontropy"
                  />
                  <h2>Ontropy</h2>
                </div>
                <div class="sm:ml-4 mt-2 flex items-center leading-5 text-gray-300 sm:mt-0 sm:border-l sm:pl-4">
                  <svg
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Remote</span>
                </div>
                <div class="sm:mx-4 mt-2 flex items-center leading-5 text-gray-300 sm:mt-0 sm:border-l sm:pl-4">
                  <svg
                    class="sm:hidden flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                  <span>United States of America</span>
                  <span class="text-xl ml-3">🇺🇸</span>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden sm:block flex-shrink-0">
            <div class="sm:flex-shrink-0">
              <div class="mt-4 sm:mt-0 w-full flex rounded-md shadow-sm">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:ontropy@rustjobs.dev"
                  eventcategory="Apply Now Job Detail"
                  eventaction="Click"
                  eventlabel="mailto:ontropy@rustjobs.dev"
                  class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-semibold rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-red-700 transition ease-in-out duration-150"
                >
                  <span>Apply Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="sm:flex sm:items-center justify-between">
          <div class="flex-shrink-0 mt-2 sm:mt-4 flex items-center leading-5 text-gray-300">
            <svg
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>
              <time datetime="Mon Jul 31 2023 18:28:28 GMT+0600 (Bangladesh Standard Time)">
                22 days ago
              </time>
            </span>
          </div>
        </div>
        <div class="sm:hidden block">
          <div class="sm:flex-shrink-0">
            <div class="mt-4 sm:mt-0 w-full flex rounded-md shadow-sm">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:ontropy@rustjobs.dev"
                eventcategory="Apply Now Job Detail"
                eventaction="Click"
                eventlabel="mailto:ontropy@rustjobs.dev"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-semibold rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-red-700 transition ease-in-out duration-150"
              >
                <span>Apply Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 sm:px-6 pt-6 sm:pb-2 border-t border-gray-500">
        <div class="markdown-component prose text-gray-300 min-w-full">
          <p>
            Chainlink’s centralized price feeds, as well as other oracles,
            contribute to high latency for liquidators, $100 million in annual
            gas fees, and $3 billion in annual exploits.
          </p>
          <p>Ontropy eliminates oracles through user-validated data.</p>
          <p>
            This is principally achieved through Proof of Result, an off-chain
            consensus mechanism that allows users to agree to data and reach
            finality before a transaction settles on chain.
          </p>
          <p>To learn more, check out ontropy.substack.com.</p>
          <h3>Desired Experience</h3>
          <ul>
            <li>Rust</li>
            <li>Solidity</li>
            <li>Understanding of ZK and MPC</li>
            <li>Web3</li>
          </ul>
          <p>
            The engineer should be interested in challenging the status quo of
            Chainlink oracles and be curious in reimagining web3 data transfers
            full time.
          </p>
          <p>Compensation in Equity and Salary.</p>
          <p>
            Send your resume to{" "}
            <a href="mailto:ontropy@rustjobs.dev">ontropy@rustjobs.dev</a>
          </p>
        </div>
      </div>
      <div class="px-4 pb-6 sm:px-6 ">
        <div class="sm:flex-shrink-0">
          <div class="mt-4 sm:mt-0 w-full flex rounded-md shadow-sm">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:ontropy@rustjobs.dev"
              eventcategory="Apply Now Job Detail"
              eventaction="Click"
              eventlabel="mailto:ontropy@rustjobs.dev"
              class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-semibold rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-red-700 transition ease-in-out duration-150"
            >
              <span>Apply Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
