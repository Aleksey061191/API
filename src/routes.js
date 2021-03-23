
import { Home } from "./pages";
import TranslateIcon from '@material-ui/icons/Translate';


export const routes = [
  {
    header: "Translate",
    path: "/",
    exact: true,
    id: 1,
    icon: <TranslateIcon />,
    component: Home,
  },
 
 
];
