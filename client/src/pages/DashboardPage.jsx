import React from "react";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import CourseGrid from "../components/Dashboard/CourseGrid";
import EmptyState from "../components/Dashboard/EmptyState";
import "../components/Dashboard/Layout.css";

const DashboardPage = () => {
    // TEMP DATA (you can empty this to test EmptyState)
    const courses = [
        {
            id: 1,
            title: "Database Systems",
            instructor: "Ratanraju Mekala",
            tokens: 120,
        },
        {
            id: 2,
            title: "DBMS Theory",
            instructor: "Dinesh R",
            tokens: 80,
        },
    ];

    return (
        <div className="dashboard-container">
            <Navbar />

            <div className="dashboard-body">
                <Sidebar />

                <div className="dashboard-content">
                    {courses.length > 0 ? (
                        <CourseGrid courses={courses} />
                    ) : (
                        <EmptyState />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;