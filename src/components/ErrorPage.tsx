import React from "react";
import { Link } from "react-router-dom";
import Column from "./Column";
import Container from "./Container";

function ErrorPage() {
  return (
    <div className="error-page-wrap d-flex flex-row align-items-center">
      <Container>
        <div className="row justify-content-center">
          <Column size={12} classes="text-center">
            <i className="fa-5x text-danger fas fa-exclamation-triangle mb-4"></i>
            <span className="display-1 d-block">
              4<i className="fas fa-sad-tear text-warning"></i>4
            </span>
            <div className="mb-2 lead text-muted">
              Oops! The page you are looking for was not found.
            </div>
            <Link to="/" className="btn btn-outline-primary my-4">
              Back to <i className="fas fa-home fa-2x"></i>
            </Link>
          </Column>
        </div>
      </Container>
    </div>
  );
}
export default ErrorPage;
