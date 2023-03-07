import './index.scss';
import { withProviders } from './providers';
import { Routing } from 'pages';
import CssBaseline from "@mui/material/CssBaseline";

const App = () => (
    <CssBaseline>
        <Routing />
    </CssBaseline>
)

export default withProviders(App);