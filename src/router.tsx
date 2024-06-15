import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ListaDeQuestoes, ListaDeSimulados, ListaDeTentativas } from "./views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListaDeSimulados />,
  },
  { path: "/simulado/:idSimulado", element: <ListaDeTentativas /> },
  { path: "/tentativa/:idTentativa/simulado/:idSimulado", element: <ListaDeQuestoes /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
