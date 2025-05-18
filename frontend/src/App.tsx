import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { RootLayout } from "./pages/layout";
import { IncidentsPage } from "./pages/incidents";
import { CommunitiesPage } from "./pages/communities";
import { CommunityPage } from "./pages/community";
import { PostPage } from "./pages/post";
import { IncidentPage } from "./pages/incident";
import { WikiPage } from "./pages/wiki";

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
              <Route path="/wiki" element={<WikiPage/>} />
              <Route path="/incident/:incidentId" element={<IncidentPage/>} />
              <Route path="/post/:postId" element={<PostPage/>} />
              <Route path="/l/:communityId" element={<CommunityPage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
