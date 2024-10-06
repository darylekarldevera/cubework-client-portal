import { AppContext } from "@/contexts/AppContext";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export default function Debugger() {
  const authContext = useContext(AuthContext);
  const appContext = useContext(AppContext);

  return (
    <div className="fixed bottom-2 right-2 z-100 p-4 text-[10px] bg-white opacity-50 hover:opacity-100 duration-300">
      <table cellPadding={4}>
        <tbody>
          <tr>
            <td>Logged in: </td>
            <td>
              <button
                className="text-sm bg-blue-600 text-white px-2 rounded-sm"
                onClick={() => {
                  authContext.setIsAuthenticated(!authContext.isAuthenticated);
                }}
              >
                { authContext.isAuthenticated ? 'on' : 'off' }
              </button>
            </td>
          </tr>
          <tr>
            <td>Experimental UI: </td>
            <td>
              <button
                className="text-sm bg-blue-600 text-white px-2 rounded-sm"
                onClick={() => {
                  appContext.setExperimentalUI(!appContext.experimentalUI);
                }}
              >
                { appContext.experimentalUI ? 'on' : 'off' }
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}