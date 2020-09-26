const { createSwitchNavigator, createAppContainer } = require("react-navigation");
import StartupScreen from '../screen/StartupScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import AuthScreen from '../screen/users/AuthScreen';




const MainNavigator = createSwitchNavigator({
    StartupScreen:StartupScreen,
    Jobs:WelcomeScreen,
    Auth:AuthScreen
})

export default createAppContainer(MainNavigator)