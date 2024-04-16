import React from "react";
import "./About.css";
import aboutImg from "../../images/shelf.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="secton-title">
          <h2>About</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookSearch</h2>
            <p className="fs-17">
              Welcome to <span className="purple">BookSearch</span> , your ultimate
              destination for discovering and exploring the world of books.
              Whether you're an avid reader, a student researching for your next
              project, or simply curious about the latest literary trends, we've
              got you covered. At BookSearch, we believe that books have the
              power to inspire, educate, and entertain. Our mission is to make
              the process of finding your next great read effortless and
              enjoyable. With a vast collection of titles spanning genres,
              authors, and topics, you're sure to find something that piques
              your interest. Our intuitive search engine allows you to browse
              through a curated selection of books, refine your search with
              filters such as genre, author, publication year, and more, and
              discover hidden gems recommended by fellow book lovers. Whether
              you prefer physical copies, e-books, or audiobooks, we provide
              options to suit your reading preferences. Join our vibrant
              community of book enthusiasts, share your thoughts and reviews,
              and connect with like-minded readers from around the globe. With
              regular updates, book recommendations, and personalized reading
              suggestions, BookSearrch is your trusted companion on your
              literary journey. Start your book search today and embark on a
              world of imagination, knowledge, and storytelling with BookSearch.
            </p>
            {/* <p className="fs-17">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              molestiae ipsum exercitationem rerum quo? Sequi commodi ratione,
              iste voluptates at qui alias voluptas, molestias nemo ut dolore
              facilis error natus.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
