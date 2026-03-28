import React from "react";

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <div className="card-header">
                <h3>{course.title}</h3>
                <p>{course.instructor}</p>
            </div>

            <div className="card-footer">
                <p className="token-text">
                    Tokens Left: <strong>{course.tokens}</strong>
                </p>
            </div>
        </div>
    );
};

export default CourseCard;