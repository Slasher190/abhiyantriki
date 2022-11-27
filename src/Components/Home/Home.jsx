import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const Home = () => {
  return (
    <div
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <MDBCard style={{ margin: "10px", width: "25%", height: "25%" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            fluid
            alt="..."
          />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody style={{ backgroundColor: "rgba(0,0,0)" }}>
          <MDBCardTitle style={{color:"rgba(251, 251, 251)"}}>Card title</MDBCardTitle>
          <MDBCardText style={{color:"rgba(251, 251, 251,0.80)"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBCard style={{ margin: "10px", width: "25%", height: "25%" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            fluid
            alt="..."
          />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody style={{ backgroundColor: "rgba(0,0,0)" }}>
          <MDBCardTitle style={{color:"rgba(251, 251, 251)"}}>Card title</MDBCardTitle>
          <MDBCardText style={{color:"rgba(251, 251, 251,0.80)"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBCard style={{ margin: "10px", width: "25%", height: "25%" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            fluid
            alt="..."
          />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody style={{ backgroundColor: "rgba(0,0,0)" }}>
          <MDBCardTitle style={{color:"rgba(251, 251, 251)"}}>Card title</MDBCardTitle>
          <MDBCardText style={{color:"rgba(251, 251, 251,0.80)"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBCard style={{ margin: "10px", width: "25%", height: "25%" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            fluid
            alt="..."
          />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody style={{ backgroundColor: "rgba(0,0,0)" }}>
          <MDBCardTitle style={{color:"rgba(251, 251, 251)"}}>Card title</MDBCardTitle>
          <MDBCardText style={{color:"rgba(251, 251, 251,0.80)"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBCard style={{ margin: "10px", width: "25%", height: "25%" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            fluid
            alt="..."
          />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody style={{ backgroundColor: "rgba(0,0,0)" }}>
          <MDBCardTitle style={{color:"rgba(251, 251, 251)"}}>Card title</MDBCardTitle>
          <MDBCardText style={{color:"rgba(251, 251, 251,0.80)"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBCard style={{ margin: "10px", width: "25%", height: "25%" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            fluid
            alt="..."
          />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody style={{ backgroundColor: "rgba(0,0,0)" }}>
          <MDBCardTitle style={{color:"rgba(251, 251, 251)"}}>Card title</MDBCardTitle>
          <MDBCardText style={{color:"rgba(251, 251, 251,0.80)"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};
export default Home;
