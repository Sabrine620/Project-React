import "./App.css";
import "./index.css";
import speakerData from "./CreativeSpeaker/speakerData";

const cardData = [
  {
    id: 1,
    title: "The DOM (Document Object Model)",
    category: "JavaScript",
    description:
      "Discover how JavaScript interacts with your HTML code to dynamically modify the content, structure, and styles of a webpage in real-time.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQFitAf_mayNBg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1734607727083?e=2147483647&v=beta&t=0bNV2UvN1km1BzWYBK0yTNZMW5NFktRlXe_zYTcVJNs",
  },
  {
    id: 2,
    title: "Essential Hooks",
    category: "React",
    description:
      "Learn how to use useState to manage local state and useEffect to handle side effects like API fetching within your functional components.",
    image:
      "https://www.jotform.com/blog/wp-content/uploads/2017/01/react-js.png",
  },
  {
    id: 3,
    title: "HTML5 Semantics",
    category: "HTML",
    description:
      "Optimize your webpage layout using proper navigation and structural tags. Semantic code greatly improves accessibility and search engine optimization (SEO).",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUNmv5o3RyxrDChISZvqb5fG9nxsTQVTxPg&s",
  },
  {
    id: 4,
    title: "Artifical Intelligence",
    category: "Python",
    description:
      "Optimize your webpage layout using proper navigation and structural tags. Semantic code greatly improves accessibility and search engine optimization (SEO).",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRThJ22q6iIR0VXr1HPcfFrtE7fzz0WTdl8RoMFuEKO_ER_WMrb0yrILp&s=10",
  },
];

function App() {
  return (
    <div>
      <Header>
        <Logo />
        <Links />
        <Login />
      </Header>
      <Main />
      <div className="reviews-container">
        <Review
          src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-teamwork-business-and-finance-tanah-basah-glyph-tanah-basah.png"
          alt="external-teamwork-business-and-finance-tanah-basah-glyph-tanah-basah"
          title="560 Participants"
        >
          Lorem ipsum dolor sit amet. Sit architecto illo qui vitae itaque id
          nostrum eveniet et numquam accusamus est suscipit corrupti. Hic vero
          repudiandae est porro iure ut error placeat?
        </Review>
        <Review
          src="https://img.icons8.com/ios/50/time_2.png"
          alt="time_2"
          title="24 Programs"
        >
          Lorem ipsum dolor sit amet. Sit architecto illo qui vitae itaque id
          nostrum eveniet et numquam accusamus est suscipit corrupti. Hic vero
          repudiandae est porro iure ut error placeat?
        </Review>

        <Review
          src="https://img.icons8.com/ios-filled/50/microphone--v1.png"
          alt="microphone--v1"
          title="10 Speakers"
        >
          Lorem ipsum dolor sit amet. Sit architecto illo qui vitae itaque id
          nostrum eveniet et numquam accusamus est suscipit corrupti. Hic vero
          repudiandae est porro iure ut error placeat?
        </Review>
      </div>
      <CreativeSpeakerList />
    </div>
  );
}

function Header({ children }) {
  return <div className="Navbar">{children}</div>;
}
function Logo() {
  return (
    <div>
      <span className="logo">🎓 EduLearn</span>
    </div>
  );
}
function Links() {
  return (
    <nav className="links">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
function Login() {
  return (
    <div className="login">
      <a className="btn-login" href="">
        Login
      </a>
      <a className="btn-join" href="">
        JOIN US →
      </a>
    </div>
  );
}

function Main() {
  return (
    <div>
      <Home />
    </div>
  );
}
function Home() {
  return (
    <div>
      <HeaderHome />
      <CardList />
    </div>
  );
}
function HeaderHome() {
  return (
    <div className="headerHome">
      <h1>
        <span style={{ color: "white" }}>Best</span>
        <span className="title"> Online Courses </span>
      </h1>
      <p className="description">
        EduLern helps you quickly develop in-demand skills to advance your
        career in a rapidly changing job market
      </p>
    </div>
  );
}
function CardList() {
  return (
    <div className="card-list">
      {cardData.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}
function Card({ card }) {
  return (
    <div className="card-box">
      <div className="container-card">
        <img className="img" src={card.image} alt=""></img>
        <h3 style={{ textAlign: "center" }}>{card.title}</h3>
        <h6 style={{ textAlign: "center" }}>{card.description}</h6>
      </div>
    </div>
  );
}

function Review({ src, title, children }) {
  return (
    <div className="review-box">
      <div>
        <img src={src} alt="icon" />
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

// Creative speakers:::::::
function CreativeSpeakerList() {
  return (
    <>
      <div className="speaker-title">
        <h1 style={{ color: "white" }}>
          Creative <span className="title">Speaker</span>{" "}
        </h1>
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="creativeSpeakerList">
        {speakerData.map((item) => (
          <CreativeSpeaker
            item={item}
            key={item.id}
            src={item.src}
            name={item.name}
            alt={item.alt}
            job={item.job}
          />
        ))}
      </div>
    </>
  );
}
function CreativeSpeaker({ item }) {
  return (
    <>
      <div className="speaker-box">
        <img
          className="image-speaker"
          src={item.src}
          alt={item.alt}
          width="100%"
          height="100%"
        />
        <h2>{item.name}</h2>
        <span>{item.job}</span>
      </div>
    </>
  );
}

export default App;
