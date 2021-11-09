import React from "react";
import "./magic_style/Spinner.css";

export default function Spinner() {
  return (
    <div className="spinner-container w-100">
      <div className="spinner-border text-success"></div>
      <div className="spinner-grow text-muted"></div>
      <div className="spinner-border text-dark"></div>
      <div className="spinner-grow text-primary"></div>
      <div className="spinner-border text-secondary"></div>
      <div className="spinner-grow text-success"></div>
      <div className="spinner-border text-danger"></div>
      <div className="spinner-grow text-info"></div>
      <div className="spinner-border text-warning"></div>
      <div className="spinner-grow text-secondary"></div>
      <div className="spinner-border text-info"></div>
      <div className="spinner-grow text-warning"></div>
      <div className="spinner-border text-primary"></div>
      <div className="spinner-grow text-danger"></div>
      <div className="spinner-border text-success"></div>
      <div className="spinner-grow text-dark"></div>
      <div className="spinner-border text-muted"></div>
    </div>
  );
}
