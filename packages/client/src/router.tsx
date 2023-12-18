import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home.page";
import { RootLayout } from "@/layouts/root.layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);
