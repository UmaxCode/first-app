import "./App.css";
import Button from "./Components/Button/Button";
import Links from "./Components/Header/Navigation/Links";
import Navbar from "./Components/Header/Navigation/Navbar";
import  Input  from "./Components/Input/Input";
import Section from "./Containers/Sections/Section";
import Sections from "./Containers/Sections/Sections";
import Wrapper from "./Containers/Wrapper";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Links/>
      </Navbar>
      <Section>
        <div className="col-lg-6 mt-lg-5">
         <p className="fw-bold fs-2">Hi, I am <br></br> <span className="display-2 ">Maxwell Odoom</span></p>
         <p className="display-4 text-success fw-bold">UI & UX <br></br>Designer</p>
         <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, libero earum odit ipsa possimus, architecto amet beatae dolores praesentium illum incidunt, iusto et voluptates labore eos? Veritatis neque, quibusdam et deleniti enim iusto, aperiam nisi praesentium commodi voluptate porro ullam?
         </p>
         <div className="d-md-block d-grid">
          <button className="btn btn-success">Hire Me</button>
         </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center overflow-hidden py-3">
         <div className="profile border border-5 border-success rounded-circle mx-auto d-flex justify-center-center align-items-center">
          
          <span className="left rounded-circle bg-success"></span>
          <span className="right rounded-circle bg-success"></span>
          <div className="picture rounded-circle"></div>
         </div>
        </div>
      </Section>
      <Sections id="about">
         <h1 className="text-center text-success">Abouts Me</h1>
         <div className="row">
           <div className="col-lg-6">
            <div className="badge bg-success p-3  mt-3">EDUCATION</div>
            <div className="row py-3 px-1">
              <div className="col-md-6">
               <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis veritatis nisi, laudantium saepe, veniam dolorem molestias numquam placeat debitis pariatur quas. Aspernatur maxime error incidunt in hic animi adipisci.
               </p>
              </div>
              <div className="col-md-6">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis veritatis nisi, laudantium saepe, veniam dolorem molestias numquam placeat debitis pariatur quas. Aspernatur maxime error incidunt in hic animi adipisci.</p>
              </div>
            </div>
           </div>
           <div className="col-lg-6">
           <div className="badge bg-success p-3  mt-3">SKILL</div>
           <div className="row py-3 px-1">
              <div className="col-md-6">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis veritatis nisi, laudantium saepe, veniam dolorem molestias numquam placeat debitis pariatur quas. Aspernatur maxime error incidunt in hic animi adipisci.</p>
              </div>
              <div className="col-md-6">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis veritatis nisi, laudantium saepe, veniam dolorem molestias numquam placeat debitis pariatur quas. Aspernatur maxime error incidunt in hic animi adipisci.</p>
              </div>
            </div>
           </div>
           <div className="col-12">
           <div className="badge bg-success p-3  mt-3">EXPERIENCE</div>
            <div className="row py-3 px-1">
              <div className="col-md-6 col-lg-4">
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis veritatis nisi, laudantium saepe, veniam dolorem molestias numquam placeat debitis pariatur quas. Aspernatur maxime error incidunt in hic animi adipisci.
                </p>
              </div>
              <div className="col-md-6 col-lg-4"> 
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis veritatis nisi, laudantium saepe, veniam dolorem molestias numquam placeat debitis pariatur quas. Aspernatur maxime error incidunt in hic animi adipisci.</p> 
              </div>
              <div className="col-md-12 col-lg-4">
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis veritatis nisi, laudantium saepe, veniam dolorem molestias numquam placeat debitis pariatur quas. Aspernatur maxime error incidunt in hic animi adipisci.
                </p>
              </div>
            </div>
           </div>
         </div>
      </Sections>
      {/* <Sections id="services">
        <h1>Services</h1>
      </Sections>
      <Sections id="projects">
        <h1>Projects</h1>
      </Sections>
      <Sections id="testimonials">
        <h1>Testimonials</h1>
      </Sections>
      <Sections id="contact">
        <h1>Contact</h1>
      </Sections>
 */}

    </div>
  );
}

export default App;
