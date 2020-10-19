export default function Footer() {
  return (
    <footer className="c-layout__footer">
      <div className="o-wrapper">
        <div className="c-layout__row">
          <span className="c-layout__company">MoonIljoo, LLC</span>
          <span className="c-layout__rights">All Rights Reserved</span>
          <span className="c-layout__copyright">@ Copyright 2020</span>
        </div>
      </div>

      <style jsx>{`
        .c-layout__row {
          padding: 10px 0;
          }
          @media screen and (max-width: 480px) {
            .c-layout__row {
                font-size:0.9em;
              }
            }
      `}</style>
    </footer>
  );
}
