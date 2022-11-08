import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AllServices/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices/AllServices";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import Login from "../Pages/Login/Login";
import AddReviews from "../Pages/MyReviews/AddReviews/AddReviews";
import MyReviews from "../Pages/MyReviews/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'home',
                element: <Home></Home>,
            },
            {
                path: 'allServices',
                element: <AllServices></AllServices>,
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: 'MyReview',
                element: <MyReviews></MyReviews>
            },
            {
                path: 'AddReviews',
                element: <AddReviews></AddReviews>
            },
            {
                path: 'AddService',
                element: <AddService></AddService>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
        ]

    }
])