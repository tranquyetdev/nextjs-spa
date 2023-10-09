import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import ChatProfile from "./ChatProfile";
import ChatFriends from "./ChatFriends";
import ChatHome from "./ChatHome";
import ChatUIKitReact from "./ChatUIKitReact";
import ReactChatEngine from "./ReactChatEngine";
import ChatOpenAI from "./ChatOpenAI";

export function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        {/* Create a left sidebar and main content on the right */}
        <div className="flex">
          <div className="w-1/4 h-96 bg-gray-300">
            <h2 className="text-center font-bold p-2">Left Sidebar</h2>
            <div>
              <ul className="p-2">
                <li className="p-2">
                  <Link to="/chat">Chat</Link>
                </li>
                <li className="p-2">
                  <Link to="/chat/try-openai">Try OpenAI</Link>
                </li>
                <li className="p-2">
                  <Link to="/chat/try-chat-ui-kit-react">
                    Try React Chat UI Kit
                  </Link>
                </li>
                <li className="p-2">
                  <Link to="/chat/try-react-chat-engine">
                    Try React Chat Engine
                  </Link>
                </li>
                <li className="p-2">
                  <Link to="/chat/profile">Profile</Link>
                </li>
                <li className="p-2">
                  <Link to="/chat/friends">Friends</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 h-96 p-5 bg-gray-100">
            <Routes>
              <Route path="/chat" element={<ChatHome />}></Route>
              <Route path="/chat/try-openai" element={<ChatOpenAI />}></Route>
              <Route
                path="/chat/try-chat-ui-kit-react"
                element={<ChatUIKitReact />}
              ></Route>
              <Route
                path="/chat/try-react-chat-engine"
                element={<ReactChatEngine />}
              ></Route>
              <Route path="/chat/profile" element={<ChatProfile />}></Route>
              <Route path="/chat/friends" element={<ChatFriends />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
