import { lazy, Suspense } from "react";
import Layout from "../layouts/Layout";


const Home = lazy(() => import("../pages/HomePage"));

const routes = [
    {
    path: "/",
    element: (
        <Suspense fallback = {<div>Loading ...</div>}>
            <Layout>
                <Home />
            </Layout>
        </Suspense>
    )
    },
];

export default routes;