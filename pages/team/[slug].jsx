import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'components/NextLink';
import PageProgress from 'components/PageProgress';
import { teamMembers } from '../../src/data';

/**
 * Individual team member detail page
 */
const TeamMemberDetail = ({ member }) => {
  // If member not found
  if (!member) {
    return (
      <Fragment>
        <PageProgress />
        <Head>
          <title>Team Member Not Found – HBB Construction</title>
        </Head>
        <main className="content-wrapper">
          <div className="container py-12">
            <div className="text-center">
              <h1 className="mb-4">Team Member Not Found</h1>
              <p className="mb-4">The team member you're looking for doesn't exist.</p>
              <NextLink href="/" title="Back to Home" className="btn btn-primary" />
            </div>
          </div>
        </main>
      </Fragment>
    );
  }

  return (
    <Fragment>
      {/* Page loading progress bar */}
      <PageProgress />

      {/* Meta Information */}
      <Head>
        <title>{member.name} – {member.title} | HBB Construction</title>
        <meta name="description" content={`Meet ${member.name}, ${member.title} at HBB Construction. ${member.bio}`} />
      </Head>

      <main className="content-wrapper overflow-hidden">
        <section className="wrapper">
          <div className="container py-12 py-md-14">
            {/* Back Button */}
            <div className="mb-6">
              <NextLink 
                href="/" 
                title={
                  <Fragment>
                    <i className="uil uil-arrow-left me-2" />
                    Back to Home
                  </Fragment>
                }
                className="btn btn-outline-primary"
              />
            </div>

            <div className="row gx-lg-8 align-items-center">
              {/* Team Member Image */}
              <div className="col-lg-5 mb-6 mb-lg-0">
                <div className="img-bg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={600}
                    unoptimized={true}
                    className="w-100 rounded"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Team Member Information */}
              <div className="col-lg-7">
                <div className="mb-4">
                  <span className="badge bg-primary mb-3">{member.title}</span>
                  <h1 className="mb-3 oswald">{member.name}</h1>
                  <div className="d-flex align-items-center gap-4 text-muted mb-4">
                    <span>
                      <i className="uil uil-clock me-1" />
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h2 className="mb-4 oswald">About</h2>
                  <p className="text-justify roboto fs-16 mb-4">{member.bio}</p>
                  <p className="text-justify roboto fs-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-6">
                  <h2 className="mb-4 oswald">Contact Information</h2>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-center">
                      <i className="uil uil-envelope fs-20 text-primary me-3" />
                      <a href={`mailto:${member.email}`} className="roboto">{member.email}</a>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <i className="uil uil-phone fs-20 text-primary me-3" />
                      <a href={`tel:${member.phone}`} className="roboto">{member.phone}</a>
                    </li>
                  </ul>
                </div>

                {/* Specialties */}
                <div>
                  <h2 className="mb-4 oswald">Specialties</h2>
                  <div className="d-flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span key={index} className="badge bg-light text-dark border">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Other Team Members */}
            <div className="row mt-10">
              <div className="col-12">
                <h2 className="mb-6 text-center oswald">Other Team Members</h2>
                <div className="row g-4 justify-content-center">
                  {teamMembers
                    .filter(m => m.id !== member.id)
                    .map((otherMember) => (
                      <div key={otherMember.id} className="col-md-6 col-lg-4">
                        <NextLink 
                          href={`/team/${otherMember.slug}`}
                          title={
                            <div className="card border-0 shadow-sm h-100 team-card text-center">
                              <div className="card-img-top mb-0 overflow-hidden position-relative team-image-wrapper">
                                <Image
                                  src={otherMember.image}
                                  alt={otherMember.name}
                                  width={400}
                                  height={400}
                                  unoptimized={true}
                                  className="w-100"
                                  style={{ objectFit: 'cover' }}
                                />
                                <div className="team-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                  <i className="uil uil-user-circle fs-40 text-white" />
                                </div>
                              </div>
                              <div className="card-body">
                                <h3 className="card-title fs-18 fw-bold oswald mb-2">
                                  {otherMember.name}
                                </h3>
                                <p className="card-text text-muted roboto small mb-0">
                                  {otherMember.title}
                                </p>
                              </div>
                            </div>
                          }
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

// Generate static paths for all team members with slugs
export async function getStaticPaths() {
  const paths = teamMembers
    .filter(member => member.slug) // Only include members with slugs
    .map((member) => ({
      params: { slug: member.slug },
    }));

  return {
    paths,
    fallback: false, // Return 404 for pages not generated at build time
  };
}

// Fetch data for each team member page
export async function getStaticProps({ params }) {
  const member = teamMembers.find(m => m.slug === params.slug);

  return {
    props: {
      member: member || null,
    },
  };
}

export default TeamMemberDetail;

