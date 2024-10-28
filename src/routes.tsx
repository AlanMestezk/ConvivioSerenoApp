import { createBrowserRouter } from "react-router-dom";

//layout
import { Layout } from "./components/Layout";

//pages
import { Home       } from "./pages/Home";
import { About      } from "./pages/About";
import { Contact    } from "./pages/Contact";
import { HealthNews } from "./pages/HealthNews";

export const router = createBrowserRouter(

    [
        {
            element:<Layout/>,
            children:[
                {
                    path: '/',
                    element:<Home />
                },
                {
                    path: '/about',
                    element:<About />
                },
                {
                    path: '/healtNews',
                    element:<HealthNews/>
                },
                {
                    path:'/contact',
                    element:<Contact/>
                }
            ]
        }
    ]
)