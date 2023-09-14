import React from 'react';
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/web";
import PageLoader from "./modules/shared/components/PageLoader";

let routers = [...routes]
const router = createBrowserRouter(routers);

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
