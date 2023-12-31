import './styles.css'
import IMAGE from './logo.png';
import LOGO from './react-2.svg';
 
export const App = () => {
    return <>
        <h1>React TypeScript Webpack Starter Template - {process.env.NODE_ENV} {process.env.name}</h1>
        <img src={IMAGE} alt="React logo" width="300" height="300"/>
        <img src={LOGO} alt="React logo" width="300" />
    </>
}