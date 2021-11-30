import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import SimpleRegistrationPage from '../../pages/SimpleRegistrationPage';
import BusinessRegistrationPage from '../../pages/BusinessRegistrationPage';
import MyCardsPage from '../../pages/MyCardsPage';
import SignInPage from '../../pages/SignInPage';
import {Switch,Route} from 'react-router-dom';

export function  SwitchComp(params) {
    return <Switch>
    <Route path='/home'>
        <HomePage></HomePage>
    </Route>
    <Route path='/about'>
        <AboutPage></AboutPage>
    </Route>
    <Route path='/simple-registration'>
        <SimpleRegistrationPage></SimpleRegistrationPage>
    </Route>
    <Route path='/business-registration'>
        <BusinessRegistrationPage ></BusinessRegistrationPage >
    </Route>
    <Route path='/my-cards'>
        <MyCardsPage></MyCardsPage >
    </Route>
    <Route path='/sign-in'>
        <SignInPage ></SignInPage >
    </Route>
</Switch>;

}

export default SwitchComp;