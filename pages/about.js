import { useEffect, useState } from "react";
export default function About() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    async function loadData() {
      // const url = "https://api.github.com/users/mooniljoo";
      // const response = await fetch(url, {
      //   method: "GET",
      //   headers: {
      //     key: "Authorization",
      //     value: "token 6f423041f51c21a21f604cdadf3bfce97b42fece",
      //   },
      // });
      const response = await fetch("https://api.github.com/users/mooniljoo");
      const profile = await response.json();

      setProfile(profile);
    }

    loadData();
  }, []);

  return (
    <div className="container">
      <aside className="container_item">
        <div className="pcard">
          <figure className="avatar">
            <img src={profile.avatar_url} />
          </figure>
          <h1 className="p-name">mooniljoo</h1>
          <div className="p-bio">{profile.bio}</div>
          <ul className="pcard-details">
            <li className="pcard-detail">
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <span className="p-label">{profile.location}</span>
            </li>
            <li className="pcard-detail">
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"
                ></path>
              </svg>
              <span className="p-label">{profile.email}</span>
            </li>
            <li className="pcard-detail">
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                ></path>
              </svg>
              <span className="p-label">{profile.blog}</span>
            </li>
          </ul>
          <div>
            <p className="p-title">Highlights</p>
            <ul>
              <li className="pcard-detail">
                <svg
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path>
                </svg>
                <span className="p-label">Arctic Code Vault Contributor</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <section className="container_item">
        <article>
          <h2>biography</h2>
        </article>
      </section>
      <style jsx>{`
        .container {
          max-width: 1024px;
          margin: 20px auto;
          display: flex;
        }
        .container_item {
          flex: 1;
        }
        .pcard {
          width: 300px;
          padding: 30px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 0 1px #ccc;
          margin: 0 auto;
        }
        .p-bio,
        .pcard-detail,
        .p-title {
          color: #24292e;
          line-height: 1.5;
          text-overflow: ellipsis;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
            Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        }
        .p-title {
          font-weight: 600;
          margin-bottom: 0.5em;
          font-size: 1.1em;
        }
        .pcard-details,
        .p-title {
          border-top: 1px solid #ccc;
          padding-top: 1em;
          margin-top: 1em;
        }
        svg {
          fill: #666;
          width: 1em;
          margin-right: 5px;
          display: inline-block;
        }
        .avatar {
          margin: 0;
          width: 100%;
          border-radius: 50%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
