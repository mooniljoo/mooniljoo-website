import Work from "./work";

function Main(props) {
  return <main>{props.children}</main>;
}

export default function Home() {
  return (
    <div className="container">
      <Main>
        <Work />
      </Main>
    </div>
  );
}
