import desc from "../description.json";
import { useState, useRef } from "react";

export default function Category() {
  const [cate, setCate] = useState("");
  const [viewmode, setViewmode] = useState("rowlist");

  const onAll = () => {
    setCate("");
  };
  const onFront = () => {
    setCate("publishing");
  };
  const onBack = () => {
    setCate("software");
  };

  const viewRowlist = () => {
    setViewmode("rowlist");
  };
  const viewTile = () => {
    setViewmode("tile");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="categoryList">
          <span
            className={`categoryList__item ${cate == "" && "selected"}`}
            onClick={onAll}
          >
            ALL
          </span>
          <span
            className={`categoryList__item ${
              cate == "publishing" && "selected"
            }`}
            onClick={onFront}
          >
            FRONT-END
          </span>
          <span
            className={`categoryList__item ${cate == "software" && "selected"}`}
            onClick={onBack}
          >
            BACK-END
          </span>
        </div>
        <div className="viewmodes">
          <i
            className={`viewmode ${viewmode == "rowlist" && "selected"}`}
            onClick={viewRowlist}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="#333"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.33331 15.1665H8.41174V10.8332H4.33331V15.1665ZM4.33331 20.5832H8.41174V16.2498H4.33331V20.5832ZM4.33331 9.74984H8.41174V5.4165H4.33331V9.74984ZM9.43135 15.1665H21.6666V10.8332H9.43135V15.1665ZM9.43135 20.5832H21.6666V16.2498H9.43135V20.5832ZM9.43135 5.4165V9.74984H21.6666V5.4165H9.43135Z" />
            </svg>
            <span className="screen_out">Show articles in Row List</span>
          </i>
          <i
            className={`viewmode ${viewmode == "tile" && "selected"}`}
            onClick={viewTile}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="#333"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.33337 13.8424H12.0371V5.4165H4.33337V13.8424ZM4.33337 20.5832H12.0371V15.5276H4.33337V20.5832ZM13.963 20.5832H21.6667V12.1572H13.963V20.5832ZM13.963 5.4165V10.4721H21.6667V5.4165H13.963Z"></path>
            </svg>
            <span className="screen_out">Show articles in Tile Grid</span>
          </i>
        </div>
      </div>
      <section className={`card-container ${viewmode}`}>
        {desc.workList
          .filter((e) => e.category.includes(cate))
          .map((e, idx) => (
            <article className="card" key={idx}>
              <a
                className="card__link"
                href={e.href}
                title={`Link to ${e.title}`}
              >
                <figure className="fig_img">
                  <img src={e.src} alt={`${e.title} thumnail`} />
                </figure>
                <figure className="fig_txt">
                  <span className="workList__item__type">{e.type}</span>
                  <span className="workList__item__title">{e.title}</span>
                  <span className="workList__item__desc">{e.desc}</span>
                  <span className="workList__item__spec">
                    {e.spec.map((e, idx) => (
                      <span className="spec__item" key={idx}>{`${e}`}</span>
                    ))}
                  </span>
                </figure>
              </a>
            </article>
          ))}
      </section>
      <style jsx>{`
        .workList__item__type {
          font-size: 1em;
          color: #1d58ff;
        }
        .workList__item__title {
          font-size: 1.875em;
          line-height: 1.3em;
          margin-bottom: 0.1em;
        }
        .workList__item__desc {
          font-size: 1.05em;
        }
        .workList__item__spec {
          font-size: 0.9em;
        }

        .spec__item {
          margin-right: 1.5em;
        }
        .row {
          margin: 20px 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
        }
        .categoryList__item,
        .viewmodes__item {
          cursor: pointer;
          font-weight: 500;
          vertical-align: sub;
        }
        .categoryList__item {
          margin-right: 20px;
        }
        .viewmode {
          margin-left: 20px;
        }

        .categoryList__item:hover,
        .categoryList__item.selected {
          border-bottom: 1px solid #1d58ff;
          color: #1d58ff;
        }
        .viewmode:hover > svg,
        .viewmode.selected > svg {
          cursor: pointer;
          fill: #1d58ff;
        }
        .container {
          max-width: 1024px;
          margin: 0 auto;
        }

        .card-container {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        .card-container.rowlist {
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }
        .card-container.rowlist .fig_img {
          margin-right: 10px;
        }

        .card-container.tile {
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
        }

        .card-container.tile .card {
          width: 24%;
          margin-right: 1%;
        }
        .card-container.tile .fig_img {
          max-width: initial;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }

        .card {
          background: #fff;
          -webkit-box-shadow: 0 0 0 1px #ccc;
          box-shadow: 0 0 0 1px #ccc;
          border-radius: 10px;
          margin-bottom: 10px;
          padding: 10px;
        }
        .card > .card__link {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          padding: 10px;
        }
        .card-container.tile .card__link {
          display: block;
        }
        .card__link > figure {
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
        }
        .fig_img {
          max-width: 150px;
          margin: 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-item-align: center;
          align-self: center;
          height: 100%;
        }
        .fig_txt {
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        a:hover {
          text-decoration: initial;
        }
        figure {
          margin: 0;
        }
        @media all and (max-width: 1040px) {
          .container {
            margin: 0 5%;
          }
          .card-container.tile .card {
            width: 49%;
          }
        }
        @media all and (max-width: 480px) {
          .categoryList__item {
            margin-right: 10px;
          }
          .viewmode {
            margin-left: 0;
          }
          .row {
            margin: 10px 0;
          }
        }
      `}</style>
    </div>
  );
}
