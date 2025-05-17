import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { RootLayout } from "./pages/layout";
import { IncidentsPage } from "./pages/incidents";
import { CommunitiesPage } from "./pages/communities";

function App() {
  const [queryClient] = useState(new QueryClient());

  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/incidents" element={<IncidentsPage />} />
              <Route path="/communities" element={<CommunitiesPage />} />
              <Route path="/wiki" element={"wiki"} />
              <Route path="/incident/:id" element={"bildirim"} />
              <Route path="/thread/:id" element={"gönderi"} />
              <Route path="/l/:id" element={"topluluk"} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
