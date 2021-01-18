import LoginScreen from './Login';
import SignupScreen from './Signup';
import DetailsScreen from './Details';
import Details1Screen from './Details1';
import Details2Screen from './Details2';
import FormScreen from './Form';
import InputScreen from './Input';
import EditScreen from './Edit';
import TabScreen from './Menu/Tab';

module.exports = [

  {
    name: 'Login',
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: 'Signup',
    component: SignupScreen,
    options: { headerShown: false },
  },
  {
    name: 'Tab',
    component: TabScreen,
    options: { headerShown: false },
  },

  {
    name: 'Details',
    component: DetailsScreen,
    options: { headerShown: false },
  },

  {
    name: 'Details1',
    component: Details1Screen,
    options: { headerShown: false },
  },

  {
    name: 'Details2',
    component: Details2Screen,
    options: { headerShown: false },
  },

  {
    name: 'Form',
    component: FormScreen,
    options: { headerShown: false },
  },

  {
    name: 'Input',
    component: InputScreen,
    options: { headerShown: false },
  },
  
  {
    name: 'Edit',
    component: EditScreen,
    options: { headerShown: false },
  },

];
